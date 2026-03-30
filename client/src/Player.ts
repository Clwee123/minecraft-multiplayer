import * as THREE from "three";
import { World } from "./World";

const MOVE_SPEED  = 5.0;
const FLY_SPEED   = 8.0;
const JUMP_FORCE  = 8.0;
const GRAVITY     = -22.0;
const PLAYER_H    = 1.8;
const PLAYER_W    = 0.55;
const EYE_HEIGHT  = 1.62;
const REACH       = 5;

export type GameMode = "survival" | "creative";

export class Player {
  camera: THREE.PerspectiveCamera;
  private world: World;

  position = new THREE.Vector3(0, 30, 0);
  velocity = new THREE.Vector3();
  onGround  = false;
  gameMode: GameMode = "survival";

  // Health
  health    = 20;
  maxHealth = 20;
  invincible = 0;        // seconds of i-frames
  private fallStartY = 0;
  private wasOnGround = false;

  // Input state
  private keys: Record<string, boolean> = {};
  private yaw   = 0;
  private pitch = 0;
  private locked = false;
  chatOpen = false;

  // Creative fly
  private flying    = false;
  private lastSpace = 0;

  // Block interaction
  selectedBlockType = 1;
  private raycaster = new THREE.Raycaster();
  highlightMesh: THREE.Mesh;

  // Callbacks
  onPlaceBlock?: (x: number, y: number, z: number, type: number) => void;
  onBreakBlock?: (x: number, y: number, z: number) => void;
  onOpenChat?:  () => void;
  onDied?:      () => void;
  onHealthChanged?: (hp: number) => void;

  constructor(camera: THREE.PerspectiveCamera, world: World, scene: THREE.Scene) {
    this.camera = camera;
    this.world  = world;

    const geo = new THREE.BoxGeometry(1.01, 1.01, 1.01);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x000000, wireframe: true, transparent: true, opacity: 0.4,
    });
    this.highlightMesh = new THREE.Mesh(geo, mat);
    this.highlightMesh.visible = false;
    scene.add(this.highlightMesh);

    this.setupInput();
  }

  private setupInput() {
    document.addEventListener("keydown", e => {
      if (this.chatOpen) return;
      this.keys[e.code] = true;

      if (e.code === "KeyT") { this.onOpenChat?.(); }

      // Double-tap Space to toggle fly in creative
      if (e.code === "Space" && this.gameMode === "creative") {
        const now = performance.now();
        if (now - this.lastSpace < 300) {
          this.flying = !this.flying;
          this.velocity.y = 0;
        }
        this.lastSpace = now;
      }
    });

    document.addEventListener("keyup", e => { this.keys[e.code] = false; });

    document.addEventListener("mousemove", e => {
      if (!this.locked) return;
      this.yaw   -= e.movementX * 0.002;
      this.pitch -= e.movementY * 0.002;
      this.pitch = Math.max(-Math.PI/2 + 0.01, Math.min(Math.PI/2 - 0.01, this.pitch));
    });

    document.addEventListener("mousedown", e => {
      if (!this.locked) return;
      if (e.button === 0) this.breakBlock();
      if (e.button === 2) this.placeBlock();
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
    if (mode === "survival") {
      this.flying = false;
      this.velocity.y = 0;
    }
  }

  takeDamage(amount: number) {
    if (this.gameMode === "creative") return;
    if (this.invincible > 0) return;
    this.health = Math.max(0, this.health - amount);
    this.invincible = 0.5;
    this.onHealthChanged?.(this.health);
    if (this.health <= 0) this.onDied?.();
  }

  respawn() {
    this.health = this.maxHealth;
    this.position.set((Math.random() - 0.5) * 4, 30, (Math.random() - 0.5) * 4);
    this.velocity.set(0, 0, 0);
    this.onHealthChanged?.(this.health);
  }

  private breakBlock() {
    const hit = this.raycast();
    if (!hit) return;
    const pos = hit.point.clone().sub(hit.face!.normal.clone().multiplyScalar(0.1));
    const bx = Math.round(pos.x), by = Math.round(pos.y), bz = Math.round(pos.z);
    this.world.removeBlock(bx, by, bz);
    this.onBreakBlock?.(bx, by, bz);
  }

  private placeBlock() {
    const hit = this.raycast();
    if (!hit) return;
    const pos = hit.point.clone().add(hit.face!.normal.clone().multiplyScalar(0.5));
    const bx = Math.round(pos.x), by = Math.round(pos.y), bz = Math.round(pos.z);
    const footPos = this.position.clone();
    footPos.y -= EYE_HEIGHT;
    if (
      Math.abs(bx - footPos.x) < 0.7 &&
      Math.abs(by - footPos.y - PLAYER_H / 2) < PLAYER_H / 2 + 0.5 &&
      Math.abs(bz - footPos.z) < 0.7
    ) return;
    this.world.placeBlock(bx, by, bz, this.selectedBlockType);
    this.onPlaceBlock?.(bx, by, bz, this.selectedBlockType);
  }

  private raycast(): THREE.Intersection | null {
    this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    this.raycaster.far = REACH;
    const hits = this.raycaster.intersectObjects(this.world.getMeshes());
    return hits.length ? hits[0] : null;
  }

  update(dt: number) {
    if (this.invincible > 0) this.invincible -= dt;

    if (this.gameMode === "creative") {
      this.updateCreative(dt);
    } else {
      this.applyPhysics(dt);
    }
    this.applyMovement(dt);
    this.updateCamera();
    this.updateHighlight();
  }

  // ── Physics (survival) ────────────────────────────────────────────────────

  private applyPhysics(dt: number) {
    // Gravity
    this.velocity.y += GRAVITY * dt;
    if (this.velocity.y < -50) this.velocity.y = -50;

    const footCurrent = this.position.y - EYE_HEIGHT;

    // ── Vertical movement ────────────────────────────────────────────────────
    let newY = this.position.y + this.velocity.y * dt;
    let footNew = newY - EYE_HEIGHT;
    let grounded = false;

    if (this.velocity.y <= 0) {
      // Falling / standing: check floor
      const floorY = Math.floor(footNew);
      if (this.feetHitBlock(this.position.x, this.position.z, floorY)) {
        this.velocity.y = 0;
        newY = floorY + 1.0 + EYE_HEIGHT; // stand exactly on top of block
        grounded = true;
      }
    } else {
      // Rising: check ceiling
      const headY = Math.floor(footCurrent + PLAYER_H);
      if (this.feetHitBlock(this.position.x, this.position.z, headY)) {
        this.velocity.y = 0;
        newY = headY - (PLAYER_H - EYE_HEIGHT);
      }
    }

    this.position.y = newY;

    // ── Fall damage ──────────────────────────────────────────────────────────
    if (!this.wasOnGround && grounded) {
      const fallDist = this.fallStartY - (this.position.y - EYE_HEIGHT);
      if (fallDist > 3) {
        const dmg = Math.floor(fallDist - 3);
        this.takeDamage(dmg);
      }
    }
    if (!grounded && !this.wasOnGround) {
      // Track peak of fall
    } else if (!grounded && this.wasOnGround) {
      this.fallStartY = this.position.y - EYE_HEIGHT;
    }

    // Safety floor
    if (this.position.y < -10) {
      this.takeDamage(4);
      this.position.y = 35;
      this.velocity.y = 0;
    }

    this.onGround  = grounded;
    this.wasOnGround = grounded;
  }

  // Check if any corner of the player's foot quad hits a block at blockY
  private feetHitBlock(x: number, z: number, blockY: number): boolean {
    const R = PLAYER_W / 2;
    return (
      this.world.hasBlock(Math.floor(x - R), blockY, Math.floor(z - R)) ||
      this.world.hasBlock(Math.floor(x + R), blockY, Math.floor(z - R)) ||
      this.world.hasBlock(Math.floor(x - R), blockY, Math.floor(z + R)) ||
      this.world.hasBlock(Math.floor(x + R), blockY, Math.floor(z + R))
    );
  }

  // Check if moving to (x, y, z) would be inside a wall (XZ collision)
  private wallCollision(x: number, y: number, z: number): boolean {
    const R   = PLAYER_W / 2;
    const bot = Math.floor(y - EYE_HEIGHT + 0.1);
    const top = Math.floor(y - EYE_HEIGHT + PLAYER_H - 0.1);
    for (let by = bot; by <= top; by++) {
      if (
        this.world.hasBlock(Math.floor(x - R), by, Math.floor(z - R)) ||
        this.world.hasBlock(Math.floor(x + R), by, Math.floor(z - R)) ||
        this.world.hasBlock(Math.floor(x - R), by, Math.floor(z + R)) ||
        this.world.hasBlock(Math.floor(x + R), by, Math.floor(z + R))
      ) return true;
    }
    return false;
  }

  // ── Creative flight ───────────────────────────────────────────────────────

  private updateCreative(dt: number) {
    if (this.flying) {
      this.velocity.y = 0;
      if (this.keys["Space"])     this.position.y += FLY_SPEED * dt;
      if (this.keys["ShiftLeft"] || this.keys["ShiftRight"])
                                  this.position.y -= FLY_SPEED * dt;
    } else {
      // Mini gravity when not flying
      this.velocity.y += GRAVITY * dt;
      if (this.velocity.y < -50) this.velocity.y = -50;
      this.position.y += this.velocity.y * dt;
      const footY = Math.floor(this.position.y - EYE_HEIGHT);
      if (this.feetHitBlock(this.position.x, this.position.z, footY)) {
        this.velocity.y = 0;
        this.position.y = footY + 1.0 + EYE_HEIGHT;
        this.onGround = true;
      } else {
        this.onGround = false;
      }
      if (this.keys["Space"] && this.onGround) {
        this.velocity.y = JUMP_FORCE;
      }
      if (this.position.y < -10) { this.position.y = 35; this.velocity.y = 0; }
    }
  }

  // ── Horizontal movement ───────────────────────────────────────────────────

  private applyMovement(dt: number) {
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right   = new THREE.Vector3( Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const move    = new THREE.Vector3();

    if (this.keys["KeyW"]) move.add(forward);
    if (this.keys["KeyS"]) move.sub(forward);
    if (this.keys["KeyA"]) move.sub(right);
    if (this.keys["KeyD"]) move.add(right);

    const sprint = (this.keys["ShiftLeft"] || this.keys["ShiftRight"]) && this.gameMode !== "creative";
    let speed = sprint ? MOVE_SPEED * 1.6 : MOVE_SPEED;
    if (this.gameMode === "creative") speed = FLY_SPEED;

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

    // Jump (survival only)
    if (this.gameMode === "survival" && this.keys["Space"] && this.onGround) {
      this.velocity.y = JUMP_FORCE;
      this.onGround   = false;
    }
  }

  private updateCamera() {
    this.camera.position.copy(this.position);
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
  }

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

  getState() {
    return {
      x: this.position.x,
      y: this.position.y,
      z: this.position.z,
      rotY: this.yaw,
      rotX: this.pitch,
      onGround: this.onGround,
    };
  }
}
