import * as THREE from "three";
import { World } from "./World";
import { BLOCKS, ITEMS } from "./Textures";
import type { Inventory } from "./Inventory";

const WALK_SPEED   = 4.317;
const SPRINT_SPEED = 5.612;
const CROUCH_SPEED = 1.5;
const SWIM_SPEED   = 2.5;
const FLY_SPEED    = 10.0;
const FLY_FAST     = 20.0;
const JUMP_VEL     = 8.4;
const SWIM_UP_VEL  = 4.0;
const GRAVITY      = 28;
const WATER_GRAVITY = 6;       // mostly buoyant
const WATER_TERMINAL = -3;     // sink speed cap
const PLAYER_W     = 0.6;
const PLAYER_H     = 1.8;
const CROUCH_H     = 1.4;
const EYE          = 1.62;
const CROUCH_EYE   = 1.25;
const REACH        = 5.0;
const MAX_AIR      = 20;       // 10 bubbles like real MC
const AIR_DRAIN_PER_SEC = 1;   // 20 air → 20 s underwater before damage
const DROWN_DPS    = 2;        // 1 heart per second once out of air

export type GameMode = "survival" | "creative";

const _v3 = new THREE.Vector3();

export class Player {
  pos = new THREE.Vector3();
  vel = new THREE.Vector3();
  yaw = 0;
  pitch = 0;
  onGround = false;
  flying = false;
  sprinting = false;
  crouching = false;
  gameMode: GameMode = "creative";
  health = 20;     // 10 hearts = 20 hp
  maxHealth = 20;
  hunger = 20;     // 10 drumsticks = 20
  /** True between the moment hp hits 0 and the player clicks Respawn. While
   *  dead, all input is dropped and physics velocity is zeroed so the corpse
   *  can't pick up its own drops or wander away. */
  isDead = false;
  inv: Inventory | null = null;

  // ── XP ──
  /** Current XP level (whole number). */
  xpLevel = 0;
  /** Progress toward next level (0..1). */
  xpProgress = 0;

  // ── Water / swimming ──
  /** True when feet/body are in a water cell (affects movement physics). */
  inWater = false;
  /** True when the eye position is in a water cell (drains air, blue tint). */
  headUnderwater = false;
  /** Remaining air supply (0..MAX_AIR). Drains while headUnderwater, refills otherwise. */
  airSupply = MAX_AIR;
  maxAir = MAX_AIR;
  private drownTimer = 0;

  private keys: Record<string, boolean> = {};
  private lastSpace = 0;
  private mouseDown = false;
  /** Block currently being mined (public so main.ts can sync the animation to other clients). */
  breakingAt: { x: number; y: number; z: number } | null = null;
  /** Mining progress 0..1 (public for the same reason). */
  breakProgress = 0;
  private breakTime = 0.5;

  /** Currently-aimed block (for debug HUD). */
  lastHit: { x: number; y: number; z: number; type: number } | null = null;

  camera: THREE.PerspectiveCamera;
  world: World;

  // Callbacks for multiplayer / events
  onBreak?: (x: number, y: number, z: number, prevType: number) => void;
  onPlace?: (x: number, y: number, z: number, type: number) => void;
  onHealthChange?: (hp: number) => void;
  onBreakProgress?: (progress: number) => void;
  /** Fired when the player jumps off the ground (one-shot). */
  onJump?: () => void;
  /** Fired when the player just landed on the ground (one-shot). */
  onLand?: () => void;
  /** Fired whenever airSupply changes (for the bubble HUD). */
  onAirChange?: (air: number, max: number) => void;
  /** Fired whenever XP level OR progress changes. */
  onXpChange?: (level: number, progress: number) => void;

  /** XP-to-next-level for `level`. Mirrors MC 1.8: 17 (lvl<16), then
   *  17+3*(lvl-15), then 62+7*(lvl-30). */
  private xpNeeded(level: number): number {
    if (level < 16) return 17;
    if (level < 31) return 17 + 3 * (level - 15);
    return 62 + 7 * (level - 30);
  }

  /** Grant XP points. Levels up automatically; fires onXpChange after. */
  addXp(amount: number) {
    if (this.isDead || this.gameMode === "creative") return;
    let p = this.xpProgress * this.xpNeeded(this.xpLevel) + amount;
    while (p >= this.xpNeeded(this.xpLevel)) {
      p -= this.xpNeeded(this.xpLevel);
      this.xpLevel += 1;
    }
    this.xpProgress = p / this.xpNeeded(this.xpLevel);
    this.onXpChange?.(this.xpLevel, this.xpProgress);
  }

  constructor(camera: THREE.PerspectiveCamera, world: World) {
    this.camera = camera;
    this.world = world;
    this.attachInput();
  }

  setGameMode(mode: GameMode) {
    this.gameMode = mode;
    this.flying = mode === "creative";
  }

  spawnAt(x: number, y: number, z: number) {
    this.pos.set(x, y, z);
    this.vel.set(0, 0, 0);
    this.isDead = false;
  }

  takeDamage(dmg: number) {
    if (this.gameMode === "creative") return;
    if (this.health <= 0 || this.isDead) return;
    this.health = Math.max(0, this.health - dmg);
    if (this.health <= 0) this.isDead = true;
    this.onHealthChange?.(this.health);
    // No auto-respawn — main.ts shows the death screen on hp <= 0 and the
    // player clicks Respawn to come back. While dead, takeDamage is a no-op
    // and update() drops input + freezes the body.
  }

  private attachInput() {
    window.addEventListener("keydown", (e) => {
      if ((document.activeElement as HTMLElement)?.tagName === "INPUT") return;
      this.keys[e.code] = true;
      if (e.code === "Space") {
        const now = performance.now();
        if (this.gameMode === "creative" && now - this.lastSpace < 300) {
          this.flying = !this.flying;
          this.vel.y = 0;
        }
        this.lastSpace = now;
      }
    });
    window.addEventListener("keyup", (e) => {
      if ((document.activeElement as HTMLElement)?.tagName === "INPUT") return;
      this.keys[e.code] = false;
    });

    document.addEventListener("mousemove", (e) => {
      if (document.pointerLockElement) {
        this.yaw   -= e.movementX * 0.0025;
        this.pitch -= e.movementY * 0.0025;
        const limit = Math.PI / 2 - 0.001;
        if (this.pitch > limit) this.pitch = limit;
        if (this.pitch < -limit) this.pitch = -limit;
      }
    });

    document.addEventListener("mousedown", (e) => {
      if (!document.pointerLockElement) return;
      if (this.isDead) return;
      if (e.button === 0) {
        this.mouseDown = true;
        if (this.gameMode === "creative") {
          this.doBreak();
        }
      } else if (e.button === 2) {
        this.doPlace();
      }
    });
    document.addEventListener("mouseup", (e) => {
      if (e.button === 0) {
        this.mouseDown = false;
        this.breakingAt = null;
        this.breakProgress = 0;
        this.onBreakProgress?.(0);
      }
    });
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  private doBreak() {
    const hit = this.raycast();
    if (!hit) return;
    const prevType = this.world.getBlock(hit.x, hit.y, hit.z);
    const def = BLOCKS[prevType];
    if (!def || def.hardness === undefined) return;
    this.world.setBlock(hit.x, hit.y, hit.z, 0);
    this.onBreak?.(hit.x, hit.y, hit.z, prevType);
    // Survival drops handled by caller via onBreak callback
  }

  private doPlace() {
    const hit = this.raycast();
    if (!hit) return;
    const nx = hit.x + hit.nx, ny = hit.y + hit.ny, nz = hit.z + hit.nz;
    if (this.aabbBlocksOverlap(nx, ny, nz)) return;
    // Determine held block
    const heldId = this.inv ? this.inv.getHeldBlock() : 0;
    if (heldId === 0) return;
    if (this.inv && this.gameMode === "survival") {
      if (!this.inv.consumeHeld()) return;
    }
    this.world.setBlock(nx, ny, nz, heldId);
    this.onPlace?.(nx, ny, nz, heldId);
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

  /**
   * Can the player harvest a drop from this block? Mirrors real Minecraft:
   * pickaxe-required blocks (stone, ores) only drop when the CURRENTLY HELD
   * item is an adequate tool. Holding a pickaxe in a different hotbar slot
   * is not enough — you have to be wielding it.
   */
  canHarvest(blockId: number): boolean {
    const def = BLOCKS[blockId];
    if (!def || !def.tool || def.tool === "any") return true;
    if (def.tool !== "pickaxe") return true;
    const held = this.inv?.getHeld();
    if (!held || held.id === 0) return false;
    const item = ITEMS[held.id];
    if (!item || item.tool !== "pickaxe") return false;
    return (item.toolTier ?? 1) >= (def.minToolTier ?? 1);
  }

  /** Estimate break time for a block given current held tool. */
  private estimateBreakTime(blockId: number): number {
    const def = BLOCKS[blockId];
    if (!def || def.hardness === undefined) return 0;
    let baseTime = def.hardness;
    // Tool speedup
    if (this.inv && def.tool && def.tool !== "any") {
      const cat = def.tool as any;
      const best = this.inv.bestToolTier(cat === "shears" ? "axe" : cat);
      if (best) {
        const tierMult = [1, 2, 4, 6, 9][best.tier] ?? 1;
        baseTime /= tierMult;
      }
    }
    return Math.max(0.05, baseTime);
  }

  update(dt: number) {
    // ── Dead-player freeze ──
    // While dead the body just falls straight down (gravity) and absorbs no
    // input. Camera still follows but the input handlers (mouse / WASD)
    // exit early via this guard.
    if (this.isDead) {
      this.vel.x = 0; this.vel.z = 0;
      this.vel.y -= GRAVITY * dt;
      this.moveAxis("y", this.vel.y * dt);
      this.camera.position.set(this.pos.x, this.pos.y + EYE, this.pos.z);
      this.camera.rotation.order = "YXZ";
      this.camera.rotation.y = this.yaw;
      this.camera.rotation.x = this.pitch;
      this.lastHit = null;
      this.mouseDown = false;
      this.breakingAt = null;
      this.breakProgress = 0;
      return;
    }
    // ── Water state (must run first so movement code can use it) ──
    const feetBlock = this.world.getBlock(Math.floor(this.pos.x), Math.floor(this.pos.y),       Math.floor(this.pos.z));
    const headBlock = this.world.getBlock(Math.floor(this.pos.x), Math.floor(this.pos.y + EYE), Math.floor(this.pos.z));
    this.inWater = feetBlock === 7 || headBlock === 7;
    this.headUnderwater = headBlock === 7;

    // Air supply: drain while head submerged, INSTANT refill on surfacing.
    // (Real MC also fills bubbles back instantly when you leave water.)
    const prevAir = this.airSupply;
    if (this.headUnderwater && this.gameMode !== "creative") {
      this.airSupply = Math.max(0, this.airSupply - AIR_DRAIN_PER_SEC * dt);
      if (this.airSupply <= 0) {
        this.drownTimer += dt;
        if (this.drownTimer >= 1) { this.drownTimer = 0; this.takeDamage(DROWN_DPS); }
      } else {
        this.drownTimer = 0;
      }
    } else if (this.airSupply < this.maxAir) {
      this.airSupply = this.maxAir;
      this.drownTimer = 0;
    }
    if (this.airSupply !== prevAir) this.onAirChange?.(this.airSupply, this.maxAir);

    // ── Movement ──
    const forward = (this.keys["KeyW"] ? 1 : 0) - (this.keys["KeyS"] ? 1 : 0);
    const right   = (this.keys["KeyD"] ? 1 : 0) - (this.keys["KeyA"] ? 1 : 0);
    const sprint  = (this.keys["ShiftLeft"] || this.keys["ShiftRight"]) && !this.flying;
    const crouch  = this.keys["KeyC"];
    this.sprinting = sprint && forward > 0 && !crouch && !this.inWater;
    this.crouching = crouch && !this.flying;

    let baseSpeed: number;
    if (this.flying) {
      baseSpeed = (this.keys["ShiftLeft"] || this.keys["ShiftRight"]) ? FLY_FAST : FLY_SPEED;
    } else if (this.inWater) {
      baseSpeed = SWIM_SPEED;
    } else if (this.crouching) {
      baseSpeed = CROUCH_SPEED;
    } else if (this.sprinting) {
      baseSpeed = SPRINT_SPEED;
    } else {
      baseSpeed = WALK_SPEED;
    }
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    let vx = (-sin * forward + cos * right) * baseSpeed;
    let vz = (-cos * forward - sin * right) * baseSpeed;
    if (forward !== 0 && right !== 0) { vx /= Math.SQRT2; vz /= Math.SQRT2; }
    this.vel.x = vx; this.vel.z = vz;

    if (this.flying) {
      let vy = 0;
      if (this.keys["Space"]) vy += FLY_SPEED;
      if (this.keys["ShiftLeft"] || this.keys["ShiftRight"]) vy -= FLY_SPEED;
      this.vel.y = vy;
    } else if (this.inWater) {
      // Buoyant: weak gravity, capped sink rate. Space → swim up,
      // ShiftLeft → dive faster.
      this.vel.y -= WATER_GRAVITY * dt;
      if (this.vel.y < WATER_TERMINAL) this.vel.y = WATER_TERMINAL;
      if (this.keys["Space"]) this.vel.y = SWIM_UP_VEL;
      if (this.keys["ShiftLeft"]) this.vel.y -= 2 * dt;
    } else {
      this.vel.y -= GRAVITY * dt;
      if (this.vel.y < -50) this.vel.y = -50;
      if (this.keys["Space"] && this.onGround) {
        this.vel.y = JUMP_VEL;
        this.onGround = false;
        this.onJump?.();
      }
    }

    this.moveAxis("x", this.vel.x * dt);
    this.moveAxis("y", this.vel.y * dt);
    this.moveAxis("z", this.vel.z * dt);

    // ── Survival: held-down mining ──
    if (this.gameMode === "survival" && this.mouseDown) {
      const hit = this.raycast();
      if (hit) {
        const same = this.breakingAt &&
          this.breakingAt.x === hit.x && this.breakingAt.y === hit.y && this.breakingAt.z === hit.z;
        if (!same) {
          this.breakingAt = { x: hit.x, y: hit.y, z: hit.z };
          this.breakProgress = 0;
          this.breakTime = this.estimateBreakTime(this.world.getBlock(hit.x, hit.y, hit.z));
        }
        this.breakProgress += dt / Math.max(0.05, this.breakTime);
        this.onBreakProgress?.(this.breakProgress);
        if (this.breakProgress >= 1) {
          this.doBreak();
          this.breakingAt = null;
          this.breakProgress = 0;
          this.onBreakProgress?.(0);
        }
      } else {
        this.breakingAt = null;
        this.breakProgress = 0;
        this.onBreakProgress?.(0);
      }
    }

    // ── Fall damage ──
    if (this.gameMode === "survival" && this.vel.y === 0 && !this.flying) {
      // (Simplified — proper fall damage tracks airborne distance)
    }

    // ── Camera follow ──
    const eye = this.crouching ? CROUCH_EYE : EYE;
    this.camera.position.set(this.pos.x, this.pos.y + eye, this.pos.z);
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;

    // Update debug last-hit (any frame, not just when mining)
    const hit = this.raycast();
    if (hit) {
      const type = this.world.getBlock(hit.x, hit.y, hit.z);
      this.lastHit = { x: hit.x, y: hit.y, z: hit.z, type };
    } else {
      this.lastHit = null;
    }
  }

  private moveAxis(axis: "x" | "y" | "z", dist: number) {
    if (dist === 0) return;
    const oldPos = this.pos[axis];
    const newPos = oldPos + dist;
    const hw = PLAYER_W / 2 - 0.01;
    const minX = (axis === "x" ? newPos : this.pos.x) - hw;
    const maxX = (axis === "x" ? newPos : this.pos.x) + hw;
    const minY = (axis === "y" ? newPos : this.pos.y);
    const maxY = (axis === "y" ? newPos : this.pos.y) + PLAYER_H;
    const minZ = (axis === "z" ? newPos : this.pos.z) - hw;
    const maxZ = (axis === "z" ? newPos : this.pos.z) + hw;
    const bMinX = Math.floor(minX), bMaxX = Math.floor(maxX);
    const bMinY = Math.floor(minY), bMaxY = Math.floor(maxY - 0.0001);
    const bMinZ = Math.floor(minZ), bMaxZ = Math.floor(maxZ);
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
        if (dist < 0) {
          const wasAirborne = !this.onGround;
          this.onGround = true;
          if (wasAirborne) this.onLand?.();
        }
        this.vel.y = 0;
      } else {
        this.vel[axis] = 0;
      }
      if (dist > 0) {
        this.pos[axis] = Math.floor(newPos + (axis === "y" ? PLAYER_H : hw)) - (axis === "y" ? PLAYER_H : hw) - 0.001;
      } else {
        this.pos[axis] = Math.ceil(newPos - (axis === "y" ? 0 : hw)) + (axis === "y" ? 0 : hw) + 0.001;
      }
    }
  }
}
