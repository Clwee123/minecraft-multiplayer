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

export type GameMode = "survival" | "creative";

export class Player {
  camera: THREE.PerspectiveCamera;
  private world: World;
  private scene: THREE.Scene;

  position    = new THREE.Vector3(0, 30, 0);
  velocity    = new THREE.Vector3();
  onGround    = false;
  gameMode: GameMode = "survival";

  health      = 20;
  maxHealth   = 20;
  invincible  = 0;
  armor       = 0;

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
  private waterTimer = 0;

  selectedBlockType = 1;
  private raycaster = new THREE.Raycaster();
  highlightMesh: THREE.Mesh;

  // Block breaking animation
  private breakProgress = 0;
  private breakTarget: {x: number; y: number; z: number} | null = null;
  private breakIndicator: THREE.Mesh | null = null;

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

  onPlaceBlock?: (x: number, y: number, z: number, type: number) => void;
  onBreakBlock?: (x: number, y: number, z: number) => void;
  onOpenChat?:  () => void;
  onDied?:      () => void;
  onHealthChanged?: (hp: number) => void;
  onRightClick?: () => void;  // For fishing rod and special interactions
  setDeathCause?: (cause: string) => void;  // To track death cause

  getYaw(): number { return this.yaw; }

  constructor(camera: THREE.PerspectiveCamera, world: World, scene: THREE.Scene) {
    this.camera = camera;
    this.world  = world;
    this.scene  = scene;

    const geo = new THREE.BoxGeometry(1.02, 1.02, 1.02);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x000000, wireframe: true, transparent: true, opacity: 0.45,
    });
    this.highlightMesh = new THREE.Mesh(geo, mat);
    this.highlightMesh.visible = false;
    scene.add(this.highlightMesh);

    this.selfModel = this.buildModel(scene);
    this.selfModel.visible = false;
    this.setupInput();
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
          // Survival: start breaking animation
          this.startBreaking();
        }
      }
      if (e.button === 2) this.placeBlock();
    });
    document.addEventListener("mouseup", e => {
      if (e.button === 0) {
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
  }

  takeDamage(amount: number) {
    if (this.gameMode === "creative") return;
    if (this.invincible > 0) return;
    const reducedDamage = amount * (1 - this.armor / 20);
    this.health = Math.max(0, this.health - reducedDamage);
    this.invincible = 0.5;
    this.onHealthChanged?.(this.health);
    if (this.health <= 0) this.onDied?.();
  }

  respawn() {
    this.health = this.maxHealth;
    this.spawnAt((Math.random()-0.5)*4, (Math.random()-0.5)*4);
    this.onHealthChanged?.(this.health);
  }

  // ── Block interaction ──────────────────────────────────────────────────────

  private breakBlock() {
    const hit = this.raycast();
    if (!hit) return;
    const pos = hit.point.clone().sub(hit.face!.normal.clone().multiplyScalar(0.1));
    const bx = Math.round(pos.x), by = Math.round(pos.y), bz = Math.round(pos.z);
    this.world.removeBlock(bx, by, bz);
    this.onBreakBlock?.(bx, by, bz);
  }

  private startBreaking() {
    const hit = this.raycast();
    if (!hit) return;
    const pos = hit.point.clone().sub(hit.face!.normal.clone().multiplyScalar(0.1));
    const bx = Math.round(pos.x), by = Math.round(pos.y), bz = Math.round(pos.z);

    this.breakTarget = { x: bx, y: by, z: bz };
    this.breakProgress = 0;

    // Create break indicator mesh if not exists
    if (!this.breakIndicator) {
      const geo = new THREE.BoxGeometry(1.02, 1.02, 1.02);
      const mat = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });
      this.breakIndicator = new THREE.Mesh(geo, mat);
      this.scene.add(this.breakIndicator);
    }
    this.breakIndicator.position.set(bx, by, bz);
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
    if (!this.breakTarget || this.gameMode === "creative") return;

    // Check if target block still exists
    if (!this.world.hasBlock(this.breakTarget.x, this.breakTarget.y, this.breakTarget.z)) {
      this.stopBreaking();
      return;
    }

    // Only update while left button is held (breakProgress won't advance if we've stopped)
    this.breakProgress += dt / 0.5; // 0.5 second to break most blocks

    if (this.breakProgress >= 1.0) {
      // Break the block
      this.world.removeBlock(this.breakTarget.x, this.breakTarget.y, this.breakTarget.z);
      this.onBreakBlock?.(this.breakTarget.x, this.breakTarget.y, this.breakTarget.z);
      this.stopBreaking();
    }

    // Update indicator color based on progress
    if (this.breakIndicator) {
      const opacity = 0.3 + this.breakProgress * 0.4;
      (this.breakIndicator.material as THREE.MeshBasicMaterial).opacity = opacity;
    }
  }

  private placeBlock() {
    // Call special right-click handler first (for fishing rod, etc.)
    this.onRightClick?.();

    const hit = this.raycast();
    if (!hit) return;
    const pos = hit.point.clone().add(hit.face!.normal.clone().multiplyScalar(0.5));
    const bx = Math.round(pos.x), by = Math.round(pos.y), bz = Math.round(pos.z);
    const footY = this.position.y - EYE_HEIGHT;
    if (
      Math.abs(bx - this.position.x) < PLAYER_W + 0.3 &&
      by >= footY - 0.2 && by <= footY + PLAYER_H + 0.2 &&
      Math.abs(bz - this.position.z) < PLAYER_W + 0.3
    ) return;
    this.world.placeBlock(bx, by, bz, this.selectedBlockType);
    this.onPlaceBlock?.(bx, by, bz, this.selectedBlockType);
  }

  private raycast(): THREE.Intersection | null {
    // Use math-based raycasting from camera center (works with InstancedMesh)
    const dir = new THREE.Vector3(0, 0, -1);
    dir.applyQuaternion(this.camera.quaternion);
    const origin = this.camera.position;

    const hit = this.world.raycastBlock(origin, dir, REACH);
    if (!hit) return null;

    // Construct a fake THREE.Intersection object for compatibility
    return {
      point: new THREE.Vector3(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5),
      face: {
        normal: hit.face.clone().normalize(),
      },
    } as any;
  }

  // ── Main update ────────────────────────────────────────────────────────────

  update(dt: number) {
    if (this.invincible > 0) this.invincible -= dt;
    if (this.gameMode === "creative") this.updateCreative(dt);
    else                              this.applyPhysics(dt);
    this.applyMovement(dt);
    this.updateCamera();
    this.updateHighlight();
    this.updateSelfModel(dt);
    this.updateBreaking(dt);
  }

  // ── Physics ────────────────────────────────────────────────────────────────

  private applyPhysics(dt: number) {
    // Check if in water
    const blockX = Math.floor(this.position.x);
    const blockY = Math.floor(this.position.y - EYE_HEIGHT + PLAYER_H / 2);
    const blockZ = Math.floor(this.position.z);
    const currentBlock = this.world.getBlock(blockX, blockY, blockZ);
    this.inWater = currentBlock && currentBlock.type === 7;

    // Swimming physics
    if (this.inWater) {
      this.velocity.y += -4 * dt; // reduced gravity
      if (this.velocity.y < -3) this.velocity.y = -3; // cap fall speed
      if (this.keys["Space"]) this.velocity.y = 4; // swim upward
      // Drowning timer in survival mode
      if (this.gameMode === "survival") {
        this.waterTimer += dt;
        if (this.waterTimer > 15) {
          this.waterTimer = 0;
          this.setDeathCause?.("You drowned");
          this.takeDamage(1);
        }
      }
    } else {
      this.waterTimer = 0;
    }

    const gravity = this.inWater ? -4 : GRAVITY;
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
            // Fall damage
            if (this.fallTracking) {
              const dist = this.fallStartY - (testY + 1);
              if (dist > 3.5) {
                this.setDeathCause?.("You fell");
                this.takeDamage(Math.floor(dist - 3));
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
    const R = PLAYER_W / 2 - 0.01; // slight inset to avoid edge false-positives
    const xs = [x - R, x, x + R];
    const zs = [z - R, z, z + R];
    for (const bx of xs) {
      for (const bz of zs) {
        if (!this.world.hasBlock(Math.floor(bx), blockY, Math.floor(bz))) continue;
        const entry = this.world.getBlock(Math.floor(bx), blockY, Math.floor(bz));
        if (entry && entry.type === 7) continue; // water is not solid
        return true;
      }
    }
    return false;
  }

  private wallCollision(x: number, y: number, z: number): boolean {
    const R   = PLAYER_W / 2 - 0.01;
    const bot = Math.floor(y - EYE_HEIGHT + 0.05);
    const top = Math.floor(y - EYE_HEIGHT + PLAYER_H - 0.05);
    const xs  = [x - R, x + R];
    const zs  = [z - R, z + R];
    for (let by = bot; by <= top; by++) {
      for (const bx of xs) {
        for (const bz of zs) {
          if (!this.world.hasBlock(Math.floor(bx), by, Math.floor(bz))) continue;
          const entry = this.world.getBlock(Math.floor(bx), by, Math.floor(bz));
          if (entry && entry.type === 7) continue;
          return true;
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
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right   = new THREE.Vector3( Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const move    = new THREE.Vector3();

    if (this.keys["KeyW"]) move.add(forward);
    if (this.keys["KeyS"]) move.sub(forward);
    if (this.keys["KeyA"]) move.sub(right);
    if (this.keys["KeyD"]) move.add(right);

    const sprinting = this.keys["ControlLeft"] && this.gameMode === "survival";
    let speed = sprinting ? MOVE_SPEED * SPRINT_MULT : MOVE_SPEED;
    if (this.gameMode === "creative") speed = this.flying ? FLY_SPEED : MOVE_SPEED * 1.2;
    // Swimming reduces speed to 60% of normal
    if (this.inWater) speed *= 0.6;

    if (move.lengthSq() > 0) {
      move.normalize().multiplyScalar(speed * dt);
      const nx = this.position.x + move.x;
      if (!this.wallCollision(nx, this.position.y, this.position.z)) {
        this.position.x = nx;
      }
      const nz = this.position.z + move.z;
      if (!this.wallCollision(this.position.x, this.position.y, nz)) {
        this.position.z = nz;
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
      this.camera.rotation.order = "YXZ";
      this.camera.rotation.y = this.yaw;
      this.camera.rotation.x = this.pitch;
    }
  }

  // ── Self-model animation ───────────────────────────────────────────────────

  private updateSelfModel(dt: number) {
    if (!this.selfModel || !this.thirdPerson) return;
    const footY = this.position.y - EYE_HEIGHT;
    this.selfModel.position.set(this.position.x, footY + 0.85, this.position.z);
    this.selfModel.rotation.y = this.yaw + Math.PI;
    if (this.selfHead) this.selfHead.rotation.x = this.pitch * 0.7;

    const cur  = new THREE.Vector2(this.position.x, this.position.z);
    const spd  = cur.distanceTo(this.prevXZ) / dt;
    this.prevXZ.copy(cur);

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
      const pos = hit.point.clone().sub(hit.face!.normal.clone().multiplyScalar(0.1));
      this.highlightMesh.position.set(Math.round(pos.x), Math.round(pos.y), Math.round(pos.z));
      this.highlightMesh.visible = true;
    } else {
      this.highlightMesh.visible = false;
    }
  }

  // ── State for networking ───────────────────────────────────────────────────

  getState() {
    return {
      x: this.position.x, y: this.position.y, z: this.position.z,
      rotY: this.yaw, rotX: this.pitch, onGround: this.onGround,
    };
  }

  /** Teleport player to safe position above terrain at (x, z) */
  spawnAt(x: number, z: number) {
    const surfY = this.world.getSurfaceHeight(Math.round(x), Math.round(z));
    this.position.set(x, surfY + EYE_HEIGHT + 0.5, z);
    this.velocity.set(0, 0, 0);
    this.onGround    = false;
    this.fallTracking = false;
  }
}
