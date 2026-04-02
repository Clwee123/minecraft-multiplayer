import * as THREE from "three";
import { World } from "./World";

const MOVE_SPEED  = 4.5;
const SPRINT_MULT = 1.6;
const FLY_SPEED   = 9.0;
const JUMP_FORCE  = 8.5;
const GRAVITY     = -28.0;
const PLAYER_H    = 1.8;
const PLAYER_W    = 0.55;
const EYE_HEIGHT  = 1.62;
const REACH       = 5;

export type GameMode = "survival" | "creative" | "spectator";

export class Player {
  camera: THREE.PerspectiveCamera;
  private world: World;
  private scene: THREE.Scene;

  position    = new THREE.Vector3(0, 30, 0);
  velocity    = new THREE.Vector3();
  onGround    = false;
  gameMode: GameMode = "survival";

  // Pre-allocated vectors to avoid per-frame heap allocation
  private _forward  = new THREE.Vector3();
  private _right    = new THREE.Vector3();
  private _move     = new THREE.Vector3();
  private _rayDir   = new THREE.Vector3();
  private _highlightVec = new THREE.Vector3(); // reused in updateHighlight
  // Cache last raycast result so updateHighlight doesn't re-raycast
  private _lastHit: ReturnType<World["raycastBlock"]> = null;
  private _lastHitFrame = -1;
  private _frameCount   = 0;

  health      = 40;
  maxHealth   = 40;
  invincible  = 0;
  private spawnGrace = 0; // seconds of invincibility after spawning
  armor       = 0;
  speedBonus  = 0; // multiplier bonus from enchantments (0 = no bonus, 0.2 = +20%)

  private fallStartY   = 0;
  private wasOnGround  = false;
  private fallTracking = false;

  private keys: Record<string, boolean> = {};
  private yaw   = 0;
  private pitch = 0;
  private locked = false;
  chatOpen = false;

  private flying    = false;
  private lastSpace = 0;

  private inWater = false;
  private wasInWater = false; // track water entry for splash
  private waterTimer = 0;
  onLadder = false; // exposed for UI
  private swimStroke = 0; // continuous swim arm cycle
  private waterCameraTilt = 0; // smooth camera tilt in water
  private waterEntryVelocityDamp = 1; // smooth velocity damping on water entry

  selectedBlockType = 1;
  private raycaster = new THREE.Raycaster();
  highlightMesh: THREE.Mesh;
  // Block outline (EdgesGeometry for clean cube outline)
  private outlineMesh: THREE.LineSegments;
  private outlineOpacity = 0; // smooth fade in/out
  private outlineTarget  = 0; // 1 when block targeted, 0 otherwise
  private _lastOutlineKey = ""; // "x,y,z" of last targeted block

  // Block breaking animation
  private breakProgress = 0;
  private breakTarget: {x: number; y: number; z: number} | null = null;
  private breakIndicator: THREE.Mesh | null = null;
  private isBreakingHeld = false; // mouse held down

  // 3rd-person self model
  private selfModel: THREE.Group | null = null;
  private selfHead:  THREE.Group | null = null;
  private selfLA: THREE.Group | null = null;
  private selfRA: THREE.Group | null = null;
  private selfLL: THREE.Group | null = null;
  private selfRL: THREE.Group | null = null;
  private walkCycle   = 0;
  private prevXZ      = new THREE.Vector2();
  thirdPerson         = false;

  // Head bob state
  private headBobPhase = 0;
  private headBobIntensity = 0;
  private cameraRoll = 0;
  private currentFov = 75;
  private static readonly BASE_FOV = 75;
  private static readonly SPRINT_FOV = 85;
  private static readonly LANDING_FOV = 70;

  // First-person arm
  private fpArm: THREE.Group | null = null;
  private fpArmGroup: THREE.Group | null = null; // attached to camera
  _armSwing = 0;       // 0..1 progress (set by breaking)
  private _armSwingDir = 1;
  private _armBob  = 0; // walk bob

  onPlaceBlock?: (x: number, y: number, z: number, type: number) => void;
  onBreakBlock?: (x: number, y: number, z: number) => void;
  onOpenChat?:  () => void;
  onDied?:      () => void;
  onHealthChanged?: (hp: number) => void;
  onRightClick?: () => void;  // For fishing rod and special interactions
  setDeathCause?: (cause: string) => void;  // To track death cause
  onWaterEnter?: () => void;  // Swimming effects
  onWaterExit?:  () => void;

  // ── Crack textures (static cache) ────────────────────────────────────────
  private static _crackTextures: THREE.CanvasTexture[] | null = null;

  static getCrackTexture(stage: number): THREE.CanvasTexture {
    if (!Player._crackTextures) {
      Player._crackTextures = [];
      for (let s = 0; s < 8; s++) {
        const c = document.createElement("canvas");
        c.width = c.height = 16;
        const ctx = c.getContext("2d")!;
        ctx.clearRect(0, 0, 16, 16);
        // Draw progressively denser cracks
        const density = s + 1;
        ctx.strokeStyle = `rgba(0,0,0,${0.3 + s * 0.08})`;
        ctx.lineWidth = 1;
        // Main radial cracks from center
        for (let i = 0; i < density * 2; i++) {
          const angle = (i / (density * 2)) * Math.PI * 2 + s * 0.3;
          const len = 3 + s * 0.8;
          ctx.beginPath();
          ctx.moveTo(8, 8);
          ctx.lineTo(8 + Math.cos(angle) * len, 8 + Math.sin(angle) * len);
          ctx.stroke();
        }
        // Secondary branching cracks
        if (s > 2) {
          ctx.strokeStyle = `rgba(0,0,0,${0.2 + s * 0.05})`;
          for (let i = 0; i < s; i++) {
            const x1 = 2 + Math.random() * 12, y1 = 2 + Math.random() * 12;
            const x2 = x1 + (Math.random() - 0.5) * 6, y2 = y1 + (Math.random() - 0.5) * 6;
            ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
          }
        }
        // Dark edge vignette for later stages
        if (s > 4) {
          const grad = ctx.createRadialGradient(8, 8, 4, 8, 8, 10);
          grad.addColorStop(0, "rgba(0,0,0,0)");
          grad.addColorStop(1, `rgba(0,0,0,${(s - 4) * 0.08})`);
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 16, 16);
        }
        const tex = new THREE.CanvasTexture(c);
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestFilter;
        Player._crackTextures.push(tex);
      }
    }
    return Player._crackTextures[Math.min(stage, 7)];
  }

  getYaw(): number { return this.yaw; }

  /** Expose keys map so mobile controls can inject key states */
  getKeys(): Record<string, boolean> { return this.keys; }
  getBreakProgress(): number { return this.breakTarget ? this.breakProgress : 0; }

  /** Trigger a one-shot break from external (mobile button) */
  breakBlockNow(): void { this.breakBlock(); }

  /** Trigger a one-shot place from external (mobile button) */
  placeBlockNow(): void { this.placeBlock(); }

  constructor(camera: THREE.PerspectiveCamera, world: World, scene: THREE.Scene) {
    this.camera = camera;
    this.world  = world;
    this.scene  = scene;

    const geo = new THREE.BoxGeometry(1.02, 1.02, 1.02);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x000000, wireframe: true, transparent: true, opacity: 0.0,
    });
    this.highlightMesh = new THREE.Mesh(geo, mat);
    this.highlightMesh.visible = false;
    scene.add(this.highlightMesh);

    // Clean block outline using EdgesGeometry (12 edges of a cube)
    const outlineGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.005, 1.005, 1.005));
    const outlineMat = new THREE.LineBasicMaterial({
      color: 0x000000, transparent: true, opacity: 0.0, linewidth: 1,
      depthTest: true,
    });
    this.outlineMesh = new THREE.LineSegments(outlineGeo, outlineMat);
    this.outlineMesh.visible = false;
    this.outlineMesh.renderOrder = 999;
    scene.add(this.outlineMesh);

    this.selfModel = this.buildModel(scene);
    this.selfModel.visible = false;
    this.buildFPArm();
    this.setupInput();
  }

  private buildFPArm() {
    // Group attached to camera space
    this.fpArmGroup = new THREE.Group();
    this.camera.add(this.fpArmGroup);

    // Upper arm
    const upperGeo = new THREE.BoxGeometry(0.12, 0.35, 0.12);
    const skinMat  = new THREE.MeshLambertMaterial({ color: 0xffcc99 });
    const upper    = new THREE.Mesh(upperGeo, skinMat);
    upper.position.y = -0.175; // pivot at shoulder top

    // Lower arm / hand
    const lowerGeo = new THREE.BoxGeometry(0.11, 0.25, 0.11);
    const lower    = new THREE.Mesh(lowerGeo, skinMat);
    lower.position.y = -0.3;
    upper.add(lower);

    // Sleeve overlay
    const sleeveGeo = new THREE.BoxGeometry(0.135, 0.355, 0.135);
    const sleeveMat = new THREE.MeshLambertMaterial({ color: 0x3355cc, transparent: true, opacity: 0.9 });
    const sleeve    = new THREE.Mesh(sleeveGeo, sleeveMat);
    sleeve.position.y = -0.175;

    this.fpArm = new THREE.Group();
    this.fpArm.add(upper, sleeve);

    // Resting position: lower-right of camera view
    this.fpArm.position.set(0.32, -0.28, -0.45);
    this.fpArm.rotation.set(0.2, -0.15, 0.05);
    this.fpArmGroup.add(this.fpArm);

    // Make sure arm renders on top of world (no depth fighting)
    upper.renderOrder = 999;
    sleeve.renderOrder = 999;
    lower.renderOrder = 999;
    upper.onBeforeRender = r => r.clearDepth();
  }

  // ── Self model ─────────────────────────────────────────────────────────────

  private buildModel(scene: THREE.Scene): THREE.Group {
    const group = new THREE.Group();
    const SKIN  = 0xffcc99;
    const SHIRT = 0x3355cc;
    const PANTS = 0x224499;
    const SHOE  = 0x332211;
    const HAIR  = 0x331100;
    const m = (c: number) => new THREE.MeshLambertMaterial({ color: c });
    const b = (w: number, h: number, d: number, c: number) =>
      new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m(c));
    const limb = (w: number, h: number, d: number, c: number) => {
      const g = new THREE.Group();
      const mesh = b(w, h, d, c);
      mesh.position.y = -h / 2;
      g.add(mesh);
      return g;
    };

    const headGroup = new THREE.Group();
    headGroup.add(b(0.5, 0.5, 0.5, SKIN));
    const hair = b(0.52, 0.14, 0.52, HAIR);
    hair.position.y = 0.19;
    headGroup.add(hair);
    headGroup.position.set(0, 0.75, 0);

    const body = b(0.6, 0.75, 0.35, SHIRT);
    body.position.y = 0;

    const LA = limb(0.25, 0.65, 0.25, SHIRT);
    const RA = limb(0.25, 0.65, 0.25, SHIRT);
    const hL = b(0.24, 0.25, 0.24, SKIN); hL.position.y = -0.575; LA.children[0].add(hL);
    const hR = hL.clone(); RA.children[0].add(hR);
    LA.position.set(-0.43, 0.37, 0);
    RA.position.set( 0.43, 0.37, 0);

    const LL = limb(0.27, 0.75, 0.27, PANTS);
    const RL = limb(0.27, 0.75, 0.27, PANTS);
    const bL = b(0.28, 0.2, 0.3, SHOE); bL.position.y = -0.77; LL.children[0].add(bL);
    const bR = bL.clone(); RL.children[0].add(bR);
    LL.position.set(-0.175, -0.375, 0);
    RL.position.set( 0.175, -0.375, 0);

    group.add(headGroup, body, LA, RA, LL, RL);
    scene.add(group);

    this.selfHead = headGroup;
    this.selfLA = LA; this.selfRA = RA;
    this.selfLL = LL; this.selfRL = RL;
    return group;
  }

  // ── Input ──────────────────────────────────────────────────────────────────

  private setupInput() {
    document.addEventListener("keydown", e => {
      if (this.chatOpen) return;
      this.keys[e.code] = true;
      if (e.code === "KeyT") this.onOpenChat?.();
      if (e.code === "F5") {
        this.thirdPerson = !this.thirdPerson;
        if (this.selfModel) this.selfModel.visible = this.thirdPerson;
      }
      if (e.code === "Space" && this.gameMode === "creative") {
        const now = performance.now();
        if (now - this.lastSpace < 300) { this.flying = !this.flying; this.velocity.y = 0; }
        this.lastSpace = now;
      }
    });
    document.addEventListener("keyup",    e => { this.keys[e.code] = false; });
    document.addEventListener("mousemove", e => {
      if (!this.locked) return;
      this.yaw   -= e.movementX * 0.002;
      this.pitch -= e.movementY * 0.002;
      this.pitch  = Math.max(-Math.PI/2+0.01, Math.min(Math.PI/2-0.01, this.pitch));
    });
    document.addEventListener("mousedown", e => {
      if (!this.locked) return;
      if (e.button === 0) {
        if (this.gameMode === "creative") {
          this.breakBlock();
        } else {
          this.isBreakingHeld = true;
          this.startBreaking();
        }
      }
      if (e.button === 2) this.placeBlock();
    });
    document.addEventListener("mouseup", e => {
      if (e.button === 0) {
        this.isBreakingHeld = false;
        this.stopBreaking();
      }
    });
    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("pointerlockchange", () => {
      this.locked = document.pointerLockElement === document.body;
    });
    document.body.addEventListener("click", () => {
      if (!this.locked && !this.chatOpen) document.body.requestPointerLock();
    });
  }

  setChatOpen(open: boolean) {
    this.chatOpen = open;
    if (open && this.locked) document.exitPointerLock();
  }

  setGameMode(mode: GameMode) {
    this.gameMode = mode;
    if (mode === "survival") { this.flying = false; this.velocity.y = 0; }
    if (mode === "spectator") { this.flying = true; } // spectator always flies + noclip
  }

  takeDamage(amount: number) {
    if (this.gameMode === "creative" || this.gameMode === "spectator") return;
    if (this.invincible > 0) return;
    if (this.spawnGrace > 0) return; // spawn invincibility
    // Reduce damage: armor absorbs up to 80%, mobs do 60% of their damage
    const reducedDamage = amount * 0.6 * (1 - this.armor / 25);
    this.health = Math.max(0, this.health - reducedDamage);
    this.invincible = 2.0; // 2.0s grace window between hits
    this.onHealthChanged?.(this.health);
    if (this.health <= 0) this.onDied?.();
  }

  respawn() {
    this.health = this.maxHealth;
    this.spawnGrace = 3.0; // 3 seconds of spawn protection
    this.spawnAt((Math.random()-0.5)*4, (Math.random()-0.5)*4);
    this.onHealthChanged?.(this.health);
  }

  // ── Block interaction ──────────────────────────────────────────────────────

  private breakBlock() {
    const hit = this.raycast();
    if (!hit) return;
    const bx = hit.blockX, by = hit.blockY, bz = hit.blockZ;
    this.world.removeBlock(bx, by, bz);
    this.onBreakBlock?.(bx, by, bz);
  }

  private startBreaking() {
    const hit = this.raycast();
    if (!hit) return;
    const bx = hit.blockX, by = hit.blockY, bz = hit.blockZ;

    this.breakTarget = { x: bx, y: by, z: bz };
    this.breakProgress = 0;

    // Create break indicator mesh if not exists
    if (!this.breakIndicator) {
      const geo = new THREE.BoxGeometry(1.002, 1.002, 1.002);
      // Minecraft-style crack overlay texture (generated procedurally)
      const mat = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthTest: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      });
      this.breakIndicator = new THREE.Mesh(geo, mat);
      this.scene.add(this.breakIndicator);
    }
    // Visual center of block
    this.breakIndicator.position.set(bx + 0.5, by + 0.5, bz + 0.5);
    this.breakIndicator.visible = true;
  }

  private stopBreaking() {
    this.breakProgress = 0;
    this.breakTarget = null;
    if (this.breakIndicator) {
      this.breakIndicator.visible = false;
    }
  }

  private updateBreaking(dt: number) {
    if (this.gameMode === "creative") return;

    // If mouse held but no target yet, try to acquire one
    if (this.isBreakingHeld && !this.breakTarget) {
      this.startBreaking();
    }

    if (!this.breakTarget) return;

    // Check if target block still exists
    if (!this.world.hasBlock(this.breakTarget.x, this.breakTarget.y, this.breakTarget.z)) {
      this.stopBreaking();
      return;
    }

    // Check if player is now looking at a different block — switch target
    const hit = this.raycast();
    if (hit && (hit.blockX !== this.breakTarget.x || hit.blockY !== this.breakTarget.y || hit.blockZ !== this.breakTarget.z)) {
      this.breakTarget = { x: hit.blockX, y: hit.blockY, z: hit.blockZ };
      this.breakProgress = 0;
      if (this.breakIndicator) this.breakIndicator.position.set(hit.blockX + 0.5, hit.blockY + 0.5, hit.blockZ + 0.5);
    }

    this.breakProgress += dt / 0.5; // 0.5s per block

    // Animate the arm swing
    this._armSwing = Math.min(1, this.breakProgress);

    if (this.breakProgress >= 1.0) {
      this.world.removeBlock(this.breakTarget.x, this.breakTarget.y, this.breakTarget.z);
      this.onBreakBlock?.(this.breakTarget.x, this.breakTarget.y, this.breakTarget.z);
      // Auto-continue to next block if still held
      this.breakTarget = null;
      this.breakProgress = 0;
      if (this.isBreakingHeld) this.startBreaking();
      else this.stopBreaking();
      return;
    }

    // Update Minecraft-style crack overlay
    if (this.breakIndicator) {
      const stage = Math.floor(this.breakProgress * 8); // 0-7 crack stages
      const mat = this.breakIndicator.material as THREE.MeshBasicMaterial;
      const tex = Player.getCrackTexture(stage);
      if (mat.map !== tex) {
        mat.map = tex;
        mat.opacity = 0.5 + stage * 0.06;
        mat.needsUpdate = true;
      }
    }
  }

  private placeBlock() {
    // Call special right-click handler first (for fishing rod, etc.)
    this.onRightClick?.();

    const hit = this.raycast();
    if (!hit) return;
    // Place in the block adjacent to hit face
    const n = hit.face!.normal;
    const bx = hit.blockX + Math.round(n.x);
    const by = hit.blockY + Math.round(n.y);
    const bz = hit.blockZ + Math.round(n.z);
    const footY = this.position.y - EYE_HEIGHT;
    if (
      Math.abs(bx - this.position.x) < PLAYER_W + 0.3 &&
      by >= footY - 0.2 && by <= footY + PLAYER_H + 0.2 &&
      Math.abs(bz - this.position.z) < PLAYER_W + 0.3
    ) return;
    this.world.placeBlock(bx, by, bz, this.selectedBlockType);
    this.onPlaceBlock?.(bx, by, bz, this.selectedBlockType);
  }

  // Reusable intersection object to avoid per-frame allocation
  private _hitPoint  = new THREE.Vector3();
  private _hitNormal = new THREE.Vector3();
  private _hitResult = { point: null as any, face: { normal: null as any }, blockX: 0, blockY: 0, blockZ: 0 } as any;

  private raycast(): THREE.Intersection | null {
    // Cache result per frame — avoid re-raycasting multiple times per update tick
    if (this._lastHitFrame === this._frameCount) {
      return this._lastHit ? this._hitResult : null;
    }

    // Reuse pre-allocated ray direction vector
    this._rayDir.set(0, 0, -1).applyQuaternion(this.camera.quaternion);
    const hit = this.world.raycastBlock(this.camera.position, this._rayDir, REACH);
    this._lastHit = hit;
    this._lastHitFrame = this._frameCount;

    if (!hit) return null;

    // Store exact block coords — use center for highlight/place math
    this._hitResult.blockX = hit.x;
    this._hitResult.blockY = hit.y;
    this._hitResult.blockZ = hit.z;
    this._hitPoint.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
    this._hitNormal.copy(hit.face).normalize();
    this._hitResult.point = this._hitPoint;
    this._hitResult.face.normal = this._hitNormal;
    return this._hitResult;
  }

  // ── Main update ────────────────────────────────────────────────────────────

  update(dt: number) {
    this._frameCount++;
    if (this.invincible > 0) this.invincible -= dt;
    if (this.spawnGrace > 0) this.spawnGrace -= dt;
    if (this.gameMode === "creative" || this.gameMode === "spectator") this.updateCreative(dt);
    else                              this.applyPhysics(dt);
    this.applyMovement(dt);
    this.updateCamera();
    this.updateHighlight();
    this.updateSelfModel(dt);
    this.updateBreaking(dt);
    this.updateFPArm(dt);
  }

  // ── Physics ────────────────────────────────────────────────────────────────

  private applyPhysics(dt: number) {
    // Check if in water
    const blockX = Math.floor(this.position.x);
    const blockY = Math.floor(this.position.y - EYE_HEIGHT + PLAYER_H / 2);
    const blockZ = Math.floor(this.position.z);
    // Use getBlockType (O(1), no {type} object allocation)
    this.inWater = this.world.getBlockType(blockX, blockY, blockZ) === 7;

    // Swimming physics
    if (this.inWater) {
      this.velocity.y += -4 * dt; // reduced gravity
      if (this.velocity.y < -3) this.velocity.y = -3; // cap fall speed
      if (this.keys["Space"]) this.velocity.y = 4; // swim upward
      // Swim stroke animation
      this.swimStroke += dt * 3.5;
      // Drowning timer in survival mode
      if (this.gameMode === "survival") {
        this.waterTimer += dt;
        if (this.waterTimer > 15) {
          this.waterTimer = 0;
          this.setDeathCause?.("You drowned");
          this.takeDamage(1);
        }
      }
      // Track water entry
      if (!this.wasInWater) {
        this.wasInWater = true;
        // Dampen velocity on water entry for smooth transition
        this.velocity.y *= 0.4;
        this.velocity.x *= 0.6;
        this.velocity.z *= 0.6;
        this.waterEntryVelocityDamp = 0.3;
        this.onWaterEnter?.();
      }
      // Smooth velocity recovery after water entry
      if (this.waterEntryVelocityDamp < 1) {
        this.waterEntryVelocityDamp = Math.min(1, this.waterEntryVelocityDamp + dt * 2);
      }
    } else {
      this.waterTimer = 0;
      this.swimStroke *= 0.9; // decay smoothly
      this.waterEntryVelocityDamp = 1;
      if (this.wasInWater) {
        this.wasInWater = false;
        this.onWaterExit?.();
      }
    }

    // Ladder climbing — check if player body overlaps a ladder block
    const ladderCheck1 = this.world.getBlockType(blockX, blockY, blockZ);
    const ladderCheck2 = this.world.getBlockType(blockX, Math.floor(this.position.y - EYE_HEIGHT + PLAYER_H), blockZ);
    this.onLadder = ladderCheck1 === 78 || ladderCheck2 === 78;

    if (this.onLadder && !this.inWater) {
      // Slow fall / climb
      this.velocity.y = this.keys["Space"] ? 4.5 : (this.keys["ShiftLeft"] ? -3 : -0.5);
      // Reduce horizontal speed on ladder for stability
      this.velocity.x *= 0.85;
      this.velocity.z *= 0.85;
    }

    const gravity = this.onLadder ? 0 : (this.inWater ? -4 : GRAVITY);
    this.velocity.y += gravity * dt;
    if (this.velocity.y < -60) this.velocity.y = -60;

    const proposedY = this.position.y + this.velocity.y * dt;
    let grounded = false;

    if (this.velocity.y <= 0) {
      // Falling: check for floor at proposed foot position and also one block lower (fast fall safety)
      const feetY  = proposedY - EYE_HEIGHT;
      const checkY = Math.floor(feetY);
      for (let yOff = 0; yOff <= 2; yOff++) {
        const testY = checkY - yOff;
        if (this.footprintOverBlock(this.position.x, this.position.z, testY)) {
          const standY = testY + 1 + EYE_HEIGHT;
          if (proposedY <= standY + 0.02) {
            // Fall damage — safe from falls up to 5 blocks; beyond that scales gently
            if (this.fallTracking) {
              const dist = this.fallStartY - (testY + 1);
              if (dist > 5) {
                this.setDeathCause?.("You fell");
                this.takeDamage(Math.floor((dist - 5) * 0.75)); // gentler scaling
              }
              this.fallTracking = false;
            }
            this.position.y = standY;
            this.velocity.y = 0;
            grounded = true;
          }
          break;
        }
      }
      if (!grounded) this.position.y = proposedY;
    } else {
      // Rising: ceiling check
      const headY = Math.floor(this.position.y - EYE_HEIGHT + PLAYER_H + 0.05);
      if (this.footprintOverBlock(this.position.x, this.position.z, headY)) {
        this.velocity.y = 0;
      } else {
        this.position.y = proposedY;
      }
    }

    // Start tracking fall when leaving ground
    if (!grounded && this.wasOnGround) {
      this.fallStartY   = this.position.y - EYE_HEIGHT;
      this.fallTracking = this.velocity.y < 0;
    }
    if (grounded) this.fallTracking = false;

    // Void
    if (this.position.y < -20) {
      this.takeDamage(4);
      const sy = this.world.getSurfaceHeight(Math.round(this.position.x), Math.round(this.position.z));
      this.position.y = sy + EYE_HEIGHT + 1;
      this.velocity.y = 0;
      this.fallTracking = false;
    }

    this.onGround    = grounded;
    this.wasOnGround = grounded;
  }

  /**
   * Returns true if the player's foot rectangle (PLAYER_W wide) overlaps a solid block at blockY.
   * Uses a swept rectangle check over all corner and mid points.
   */
  private footprintOverBlock(x: number, z: number, blockY: number): boolean {
    const R = PLAYER_W / 2 - 0.01;
    // Check 3×3 sample points across the player footprint
    for (let xi = 0; xi < 3; xi++) {
      const bx = Math.floor(x + (xi - 1) * R);
      for (let zi = 0; zi < 3; zi++) {
        const bz = Math.floor(z + (zi - 1) * R);
        const type = this.world.getBlockType(bx, blockY, bz);
        if (type !== undefined && type !== 0 && type !== 7) return true;
      }
    }
    return false;
  }

  private wallCollision(x: number, y: number, z: number): boolean {
    const R   = PLAYER_W / 2 - 0.01;
    const bot = Math.floor(y - EYE_HEIGHT + 0.05);
    const top = Math.floor(y - EYE_HEIGHT + PLAYER_H - 0.05);
    for (let by = bot; by <= top; by++) {
      for (let xi = 0; xi < 2; xi++) {
        const bx = Math.floor(x + (xi === 0 ? -R : R));
        for (let zi = 0; zi < 2; zi++) {
          const bz = Math.floor(z + (zi === 0 ? -R : R));
          const type = this.world.getBlockType(bx, by, bz);
          if (type !== undefined && type !== 0 && type !== 7) return true;
        }
      }
    }
    return false;
  }

  // ── Creative ───────────────────────────────────────────────────────────────

  private updateCreative(dt: number) {
    if (this.flying) {
      this.velocity.y = 0;
      if (this.keys["Space"])     this.position.y += FLY_SPEED * dt;
      if (this.keys["ShiftLeft"] || this.keys["ShiftRight"])
                                  this.position.y -= FLY_SPEED * dt;
    } else {
      this.velocity.y += GRAVITY * dt;
      if (this.velocity.y < -60) this.velocity.y = -60;
      const newY  = this.position.y + this.velocity.y * dt;
      const feetY = Math.floor(newY - EYE_HEIGHT);
      if (this.velocity.y < 0 && this.footprintOverBlock(this.position.x, this.position.z, feetY)) {
        this.position.y = feetY + 1 + EYE_HEIGHT;
        this.velocity.y = 0;
        this.onGround   = true;
      } else {
        this.position.y = newY;
        this.onGround   = false;
      }
      if (this.keys["Space"] && this.onGround) { this.velocity.y = JUMP_FORCE; this.onGround = false; }
      if (this.position.y < -20) { this.position.y = 36; this.velocity.y = 0; }
    }
  }

  // ── Horizontal movement ────────────────────────────────────────────────────

  private applyMovement(dt: number) {
    // Reuse pre-allocated vectors — no heap allocation
    const forward = this._forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right   = this._right.set( Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const move    = this._move.set(0, 0, 0);

    if (this.keys["KeyW"]) move.add(forward);
    if (this.keys["KeyS"]) move.sub(forward);
    if (this.keys["KeyA"]) move.sub(right);
    if (this.keys["KeyD"]) move.add(right);

    const sprinting = this.keys["ControlLeft"] && this.gameMode === "survival";
    let speed = sprinting ? MOVE_SPEED * SPRINT_MULT : MOVE_SPEED;
    if (this.gameMode === "creative") speed = this.flying ? FLY_SPEED : MOVE_SPEED * 1.2;
    if (this.gameMode === "spectator") speed = FLY_SPEED * 1.5; // spectators move faster
    if (this.speedBonus > 0) speed *= (1 + this.speedBonus); // Speed enchantment
    // Swimming reduces speed to 60% of normal
    if (this.inWater) speed *= 0.6;

    if (move.lengthSq() > 0) {
      move.normalize().multiplyScalar(speed * dt);
      const nx = this.position.x + move.x;
      const nz = this.position.z + move.z;
      if (this.gameMode === "spectator") {
        // Noclip: pass through blocks freely
        this.position.x = nx;
        this.position.z = nz;
      } else {
        if (!this.wallCollision(nx, this.position.y, this.position.z)) {
          this.position.x = nx;
        }
        if (!this.wallCollision(this.position.x, this.position.y, nz)) {
          this.position.z = nz;
        }
      }
    }

    if (this.keys["Space"] && this.onGround && this.gameMode === "survival" && !this.inWater) {
      this.velocity.y = JUMP_FORCE;
      this.onGround   = false;
    }
  }

  // ── Camera ─────────────────────────────────────────────────────────────────

  private updateCamera() {
    if (this.thirdPerson) {
      const dist = 5;
      const cx = this.position.x + Math.sin(this.yaw) * dist;
      const cz = this.position.z + Math.cos(this.yaw) * dist;
      this.camera.position.set(cx, this.position.y + 0.6, cz);
      this.camera.lookAt(this.position.x, this.position.y - 0.3, this.position.z);
    } else {
      this.camera.position.copy(this.position);

      // Head bob — calculate movement speed without allocating
      const _dx = this.position.x - this.prevXZ.x;
      const _dz = this.position.z - this.prevXZ.y;
      const moveSpeed = Math.sqrt(_dx * _dx + _dz * _dz) * 60; // approximate per-second speed

      const sprinting = this.keys["ControlLeft"] && this.gameMode === "survival";
      const bobTarget = (this.onGround && moveSpeed > 0.5) ? Math.min(moveSpeed / 6, 1.0) : 0;
      this.headBobIntensity += (bobTarget - this.headBobIntensity) * 0.1;

      if (this.headBobIntensity > 0.01) {
        const bobSpeed = sprinting ? 14 : 10;
        this.headBobPhase += bobSpeed * (1 / 60); // assume ~60fps tick
        const bobX = Math.sin(this.headBobPhase) * 0.015 * this.headBobIntensity;
        const bobY = Math.abs(Math.sin(this.headBobPhase * 2)) * 0.02 * this.headBobIntensity;
        this.camera.position.x += bobX;
        this.camera.position.y += bobY;
      }

      // Sprint camera tilt (subtle roll)
      const tiltTarget = sprinting && moveSpeed > 1 ? 0.015 : 0;
      this.cameraRoll += (tiltTarget - this.cameraRoll) * 0.08;

      // Water camera tilt — gentle forward lean when swimming
      const waterTiltTarget = this.inWater ? 0.06 : 0;
      this.waterCameraTilt += (waterTiltTarget - this.waterCameraTilt) * 0.05;

      this.camera.rotation.order = "YXZ";
      this.camera.rotation.y = this.yaw;
      this.camera.rotation.x = this.pitch + this.waterCameraTilt;
      this.camera.rotation.z = this.cameraRoll + (this.inWater ? Math.sin(Date.now() * 0.001) * 0.008 : 0);

      // FOV effects: sprint widens, landing narrows briefly
      let targetFov = Player.BASE_FOV;
      if (sprinting && moveSpeed > 1) {
        targetFov = Player.SPRINT_FOV;
      }
      // Brief landing squeeze (when just landed)
      if (this.onGround && !this.wasOnGround) {
        targetFov = Player.LANDING_FOV;
      }

      this.currentFov += (targetFov - this.currentFov) * 0.12;
      if (Math.abs(this.currentFov - this.camera.fov) > 0.1) {
        this.camera.fov = this.currentFov;
        this.camera.updateProjectionMatrix();
      }
    }
  }

  // ── Self-model animation ───────────────────────────────────────────────────

  private updateSelfModel(dt: number) {
    if (!this.selfModel || !this.thirdPerson) return;
    const footY = this.position.y - EYE_HEIGHT;
    this.selfModel.position.set(this.position.x, footY + 0.85, this.position.z);
    this.selfModel.rotation.y = this.yaw + Math.PI;
    if (this.selfHead) this.selfHead.rotation.x = this.pitch * 0.7;

    // Avoid new Vector2 per frame — compute distance with plain math
    const _pdx = this.position.x - this.prevXZ.x;
    const _pdz = this.position.z - this.prevXZ.y;
    const spd  = Math.sqrt(_pdx * _pdx + _pdz * _pdz) / dt;
    this.prevXZ.set(this.position.x, this.position.z);

    if (spd > 0.3) this.walkCycle += dt * Math.min(spd, 8) * 1.8;
    else            this.walkCycle *= 0.85;

    const sw = Math.sin(this.walkCycle);
    const S  = 0.65;
    if (this.selfLL) this.selfLL.rotation.x =  sw * S;
    if (this.selfRL) this.selfRL.rotation.x = -sw * S;
    if (this.selfLA) this.selfLA.rotation.x = -sw * S;
    if (this.selfRA) this.selfRA.rotation.x =  sw * S;
  }

  // ── Highlight ──────────────────────────────────────────────────────────────

  private updateHighlight() {
    const hit = this.raycast();
    if (hit) {
      const bx = hit.blockX + 0.5;
      const by = hit.blockY + 0.5;
      const bz = hit.blockZ + 0.5;
      this.highlightMesh.position.set(bx, by, bz);
      this.highlightMesh.visible = false; // hide old wireframe, use outline instead

      // Position outline
      this.outlineMesh.position.set(bx, by, bz);
      this.outlineTarget = 1;

      // Detect target change for instant feedback
      const key = `${hit.blockX},${hit.blockY},${hit.blockZ}`;
      if (key !== this._lastOutlineKey) {
        this._lastOutlineKey = key;
        this.outlineOpacity = 0.35; // instant partial show on new target
      }
    } else {
      this.highlightMesh.visible = false;
      this.outlineTarget = 0;
      this._lastOutlineKey = "";
    }

    // Smooth fade for outline
    const fadeSpeed = 8;
    const dt = 1 / 60; // approximate frame dt for highlight update
    if (this.outlineTarget > 0) {
      this.outlineOpacity = Math.min(1, this.outlineOpacity + fadeSpeed * dt);
    } else {
      this.outlineOpacity = Math.max(0, this.outlineOpacity - fadeSpeed * dt);
    }
    const mat = this.outlineMesh.material as THREE.LineBasicMaterial;
    mat.opacity = this.outlineOpacity * 0.6;
    this.outlineMesh.visible = this.outlineOpacity > 0.01;

    // Color: black normally, red-ish for bedrock/unbreakable in survival
    if (hit && this.gameMode === "survival") {
      const bt = this.world.getBlockType(hit.blockX, hit.blockY, hit.blockZ);
      mat.color.setHex(bt === 12 ? 0xff3333 : 0x000000); // bedrock = red
    } else {
      mat.color.setHex(0x000000);
    }
  }

  private updateFPArm(dt: number) {
    if (!this.fpArm || this.thirdPerson) {
      if (this.fpArmGroup) this.fpArmGroup.visible = false;
      return;
    }
    if (this.fpArmGroup) this.fpArmGroup.visible = true;

    // Walk bob
    const dx = this.position.x - this.prevXZ.x;
    const dz = this.position.z - this.prevXZ.y;
    const speed = Math.sqrt(dx * dx + dz * dz) / dt;
    if (speed > 0.3) this._armBob += dt * Math.min(speed, 8) * 1.5;
    else              this._armBob *= 0.85;

    const bob = Math.sin(this._armBob) * 0.02;

    // Swimming stroke animation
    if (this.inWater && this.swimStroke > 0.1) {
      const stroke = Math.sin(this.swimStroke) * 0.8;
      const reach  = Math.cos(this.swimStroke * 0.5) * 0.15;
      this.fpArm.rotation.x = -0.6 + stroke; // sweep forward and back
      this.fpArm.rotation.z = 0.3 + reach;   // spread out
      this.fpArm.position.y = -0.2 + Math.sin(this.swimStroke * 2) * 0.05;
      // Decay swing if not breaking
      if (!this.isBreakingHeld || !this.breakTarget) {
        this._armSwing = Math.max(0, this._armSwing - dt * 4);
      }
      return;
    }

    // Breaking swing: punch forward and back
    let swingRot = 0;
    if (this._armSwing > 0) {
      // Swing: rotate down 70deg then back
      swingRot = Math.sin(this._armSwing * Math.PI) * 1.2;
    }

    // Idle sway
    const sway = Math.sin(Date.now() * 0.0008) * 0.01;

    this.fpArm.rotation.x = 0.2 - swingRot + bob * 0.5;
    this.fpArm.rotation.z = 0.05 + sway;
    this.fpArm.position.y = -0.28 + bob;

    // Decay swing if not breaking
    if (!this.isBreakingHeld || !this.breakTarget) {
      this._armSwing = Math.max(0, this._armSwing - dt * 4);
    }
  }

  // ── State for networking ───────────────────────────────────────────────────

  getState() {
    return {
      x: this.position.x, y: this.position.y, z: this.position.z,
      rotY: this.yaw, rotX: this.pitch, onGround: this.onGround,
      gameMode: this.gameMode,
    };
  }

  /** Teleport player to safe position above terrain at (x, z) */
  spawnAt(x: number, z: number) {
    const surfY = this.world.getSurfaceHeight(Math.round(x), Math.round(z));
    this.position.set(x, surfY + EYE_HEIGHT + 0.5, z);
    this.velocity.set(0, 0, 0);
    this.onGround    = false;
    this.fallTracking = false;
    if (this.spawnGrace <= 0) this.spawnGrace = 3.0; // 3s spawn protection
  }
}
