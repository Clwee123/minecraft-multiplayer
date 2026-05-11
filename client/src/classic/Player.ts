import * as THREE from "three";
import { World, SIZE_X, SIZE_Y, SIZE_Z } from "./World";

const WALK_SPEED   = 4.317;
const SPRINT_SPEED = 5.612;
const FLY_SPEED    = 10.0;
const JUMP_VEL     = 8.4;
const GRAVITY      = 28;
const PLAYER_W     = 0.6;   // player AABB width  (half-width = 0.3)
const PLAYER_H     = 1.8;   // player height (eyes at 1.62 from feet)
const EYE          = 1.62;
const REACH        = 5.0;

const _v3 = new THREE.Vector3();

export class Player {
  pos = new THREE.Vector3();      // feet position
  vel = new THREE.Vector3();
  yaw = 0;
  pitch = 0;
  onGround = false;
  flying = true;                  // start in creative-fly mode
  private keys: Record<string, boolean> = {};
  private lastSpace = 0;

  camera: THREE.PerspectiveCamera;
  world: World;

  // Callbacks
  onBreak?: (x: number, y: number, z: number) => void;
  onPlace?: (x: number, y: number, z: number, type: number) => void;
  getHeldBlock: () => number = () => 1;

  constructor(camera: THREE.PerspectiveCamera, world: World) {
    this.camera = camera;
    this.world = world;
    this.attachInput();
  }

  spawnAt(x: number, y: number, z: number) {
    this.pos.set(x, y, z);
    this.vel.set(0, 0, 0);
  }

  private attachInput() {
    window.addEventListener("keydown", (e) => {
      this.keys[e.code] = true;
      if (e.code === "Space") {
        const now = performance.now();
        if (now - this.lastSpace < 300) {
          this.flying = !this.flying;
          this.vel.y = 0;
        }
        this.lastSpace = now;
      }
    });
    window.addEventListener("keyup", (e) => { this.keys[e.code] = false; });

    // Mouse look (pointer lock)
    document.addEventListener("mousemove", (e) => {
      if (document.pointerLockElement) {
        this.yaw   -= e.movementX * 0.0025;
        this.pitch -= e.movementY * 0.0025;
        const limit = Math.PI / 2 - 0.001;
        if (this.pitch > limit) this.pitch = limit;
        if (this.pitch < -limit) this.pitch = -limit;
      }
    });

    // Mouse buttons: 0=break, 2=place
    document.addEventListener("mousedown", (e) => {
      if (!document.pointerLockElement) return;
      const hit = this.raycast();
      if (!hit) return;
      if (e.button === 0) {
        this.world.setBlock(hit.x, hit.y, hit.z, 0);
        this.world.rebuildIfDirty();
        this.onBreak?.(hit.x, hit.y, hit.z);
      } else if (e.button === 2) {
        const nx = hit.x + hit.nx, ny = hit.y + hit.ny, nz = hit.z + hit.nz;
        // Don't place inside player AABB
        if (!this.aabbBlocksOverlap(nx, ny, nz)) {
          const type = this.getHeldBlock();
          if (type > 0) {
            this.world.setBlock(nx, ny, nz, type);
            this.world.rebuildIfDirty();
            this.onPlace?.(nx, ny, nz, type);
          }
        }
      }
    });

    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  private aabbBlocksOverlap(bx: number, by: number, bz: number): boolean {
    const minX = this.pos.x - PLAYER_W / 2;
    const maxX = this.pos.x + PLAYER_W / 2;
    const minY = this.pos.y;
    const maxY = this.pos.y + PLAYER_H;
    const minZ = this.pos.z - PLAYER_W / 2;
    const maxZ = this.pos.z + PLAYER_W / 2;
    return bx + 1 > minX && bx < maxX && by + 1 > minY && by < maxY && bz + 1 > minZ && bz < maxZ;
  }

  raycast() {
    const eye = _v3.copy(this.pos);
    eye.y += EYE;
    const dir = new THREE.Vector3(
      -Math.sin(this.yaw) * Math.cos(this.pitch),
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * Math.cos(this.pitch),
    );
    return this.world.raycast(eye, dir, REACH);
  }

  update(dt: number) {
    // ── Movement input ─────────────────────────────────────────────────
    const forward = (this.keys["KeyW"] ? 1 : 0) - (this.keys["KeyS"] ? 1 : 0);
    const right   = (this.keys["KeyD"] ? 1 : 0) - (this.keys["KeyA"] ? 1 : 0);
    const sprint  = this.keys["ShiftLeft"] || this.keys["ShiftRight"];

    const baseSpeed = this.flying ? FLY_SPEED : (sprint ? SPRINT_SPEED : WALK_SPEED);

    // Direction relative to yaw
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    let vx = (-sin * forward + cos * right) * baseSpeed;
    let vz = (-cos * forward - sin * right) * baseSpeed;

    // Normalize diagonal
    if (forward !== 0 && right !== 0) {
      vx /= Math.SQRT2;
      vz /= Math.SQRT2;
    }

    this.vel.x = vx;
    this.vel.z = vz;

    if (this.flying) {
      let vy = 0;
      if (this.keys["Space"]) vy += FLY_SPEED;
      if (this.keys["ShiftLeft"] || this.keys["ShiftRight"]) vy -= FLY_SPEED;
      // Actually let sprint+vertical conflict be OK; just allow ascend/descend with Space/Shift
      // When flying, Shift descends (override sprint speed multiplier)
      if (this.keys["ShiftLeft"] && !this.keys["KeyW"] && !this.keys["KeyS"] && !this.keys["KeyA"] && !this.keys["KeyD"]) {
        // pure descend
      }
      this.vel.y = vy;
    } else {
      // Gravity
      this.vel.y -= GRAVITY * dt;
      if (this.vel.y < -50) this.vel.y = -50;
      // Jump
      if (this.keys["Space"] && this.onGround) {
        this.vel.y = JUMP_VEL;
        this.onGround = false;
      }
    }

    // ── Apply velocity with collision (axis by axis) ──────────────────
    this.moveAxis("x", this.vel.x * dt);
    this.moveAxis("y", this.vel.y * dt);
    this.moveAxis("z", this.vel.z * dt);

    // ── Camera follow ─────────────────────────────────────────────────
    this.camera.position.set(this.pos.x, this.pos.y + EYE, this.pos.z);
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
  }

  /** Move along a single axis, resolving collisions. */
  private moveAxis(axis: "x" | "y" | "z", dist: number) {
    if (dist === 0) return;
    const oldPos = this.pos[axis];
    const newPos = oldPos + dist;

    // Player AABB at new pos
    const hw = PLAYER_W / 2 - 0.01;
    const minX = (axis === "x" ? newPos : this.pos.x) - hw;
    const maxX = (axis === "x" ? newPos : this.pos.x) + hw;
    const minY = (axis === "y" ? newPos : this.pos.y);
    const maxY = (axis === "y" ? newPos : this.pos.y) + PLAYER_H;
    const minZ = (axis === "z" ? newPos : this.pos.z) - hw;
    const maxZ = (axis === "z" ? newPos : this.pos.z) + hw;

    const bMinX = Math.floor(minX);
    const bMaxX = Math.floor(maxX);
    const bMinY = Math.floor(minY);
    const bMaxY = Math.floor(maxY - 0.0001);
    const bMinZ = Math.floor(minZ);
    const bMaxZ = Math.floor(maxZ);

    let collided = false;
    for (let bx = bMinX; bx <= bMaxX && !collided; bx++) {
      for (let by = bMinY; by <= bMaxY && !collided; by++) {
        for (let bz = bMinZ; bz <= bMaxZ && !collided; bz++) {
          if (this.world.isSolid(bx, by, bz)) { collided = true; break; }
        }
      }
    }

    if (!collided) {
      this.pos[axis] = newPos;
      if (axis === "y" && dist < 0) this.onGround = false;
    } else {
      if (axis === "y") {
        if (dist < 0) this.onGround = true;
        this.vel.y = 0;
      } else {
        this.vel[axis] = 0;
      }
      // Snap to the wall
      if (dist > 0) {
        this.pos[axis] = Math.floor(newPos + (axis === "y" ? PLAYER_H : hw)) - (axis === "y" ? PLAYER_H : hw) - 0.001;
      } else {
        this.pos[axis] = Math.ceil(newPos - (axis === "y" ? 0 : hw)) + (axis === "y" ? 0 : hw) + 0.001;
      }
    }
  }
}
