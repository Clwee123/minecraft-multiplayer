import * as THREE from "three";
import { Mob, MobData, MobType } from "./Mob";
import { World } from "./World";

function rnd(a: number, b: number) { return a + Math.random() * (b - a); }
function uid() { return Math.random().toString(36).slice(2, 10); }

const MAX_SP_MOBS   = 8;
const SPAWN_RADIUS  = 30;
const DESPAWN_RADIUS = 60;
const MOB_GRAVITY   = -20;

// Shared geometry + material for all arrows — allocated once, never GC'd
const _ARROW_GEO = new THREE.BoxGeometry(0.1, 0.1, 0.4);
const _ARROW_MAT = new THREE.MeshLambertMaterial({ color: 0xffdd00 });
// Reusable velocity vector to avoid new THREE.Vector3 per shot
const _arrowDirTmp = new THREE.Vector3();

interface LocalMob {
  data:  MobData;
  mob:   Mob;
  velY:  number;
  timer: number;      // AI state timer
  aggro: boolean;     // zombie chasing player
  shootTimer?: number; // skeleton shoot cooldown
  hitCooldown: number; // per-mob player-hit cooldown (prevents spam)
  // Surface height cache — avoid getSurfaceHeight scan (up to 65 Map.get) every frame
  _surfCacheX: number;
  _surfCacheZ: number;
  _surfCacheY: number;
}

interface Arrow {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
}

// Callback signatures
export interface MobCallbacks {
  onPlayerDamage: (amount: number) => void;
  getPlayerPos:   () => THREE.Vector3;
  onExplosion:    (x: number, y: number, z: number, radius: number) => void;
  onWitherEffect?: () => void; // Wave 9: Apply wither effect
}

export class MobManager {
  private mobs:   Map<string, LocalMob> = new Map();
  private scene:  THREE.Scene;
  private world:  World;
  private cb:     MobCallbacks;
  private singleplayer: boolean;
  private arrows: Arrow[] = [];
  dayTime: number = 0.5; // 0 = midnight, 0.25 = sunrise, 0.5 = noon, 0.75 = sunset, 1.0 = midnight

  // Raycaster for mob-player attack detection
  private attackCooldown = 0;

  constructor(scene: THREE.Scene, world: World, cb: MobCallbacks, singleplayer: boolean) {
    this.scene  = scene;
    this.world  = world;
    this.cb     = cb;
    this.singleplayer = singleplayer;
  }

  // ── Spawn ─────────────────────────────────────────────────────────────────

  spawnMob(type: MobType, x: number, y: number, z: number, id?: string): Mob {
    const mobId    = id ?? uid();
    const maxHp    = type === "zombie" ? 20 : type === "creeper" ? 20 : type === "skeleton" ? 20 : type === "witherskeleton" ? 40 : type === "chicken" ? 4 : type === "cow" ? 16 : type === "sheep" ? 12 : type === "horse" ? 30 : type === "villager" ? 20 : type === "enderdragon" ? 200 : type === "spider" ? 16 : type === "wolf" ? 20 : type === "cat" ? 10 : type === "phantom" ? 20 : type === "slime" ? 16 : 10;
    const data: MobData = {
      id: mobId, type, x, y, z,
      rotY:      rnd(0, Math.PI * 2),
      health:    maxHp,
      maxHealth: maxHp,
      alive:     true,
      state:     "idle",
    };
    const mob = new Mob(this.scene, data);
    this.mobs.set(mobId, { data, mob, velY: 0, timer: 0, aggro: false, shootTimer: 0, hitCooldown: 0, _surfCacheX: NaN, _surfCacheZ: NaN, _surfCacheY: 0 });
    return mob;
  }

  private static HOSTILE_TYPES: Set<MobType> = new Set(["zombie", "skeleton", "creeper", "spider", "witherskeleton", "phantom"]);
  private static UNDEAD_TYPES: Set<MobType> = new Set(["zombie", "skeleton", "witherskeleton", "phantom"]);

  spawnRandom(cx: number, cz: number) {
    if (this.mobs.size >= MAX_SP_MOBS) return;
    const angle  = rnd(0, Math.PI * 2);
    const dist   = rnd(12, SPAWN_RADIUS);
    const x      = cx + Math.cos(angle) * dist;
    const z      = cz + Math.sin(angle) * dist;

    // Check if it's night (dark between 0.73 and 0.25 next day)
    const isNight = this.dayTime < 0.25 || this.dayTime > 0.73;

    let y: number;
    let type: MobType;

    // Check surface height to determine if underground (cave)
    const rawSurf = (this.world as any).getSurfaceHeight
      ? (this.world as any).getSurfaceHeight(Math.round(x), Math.round(z))
      : 20;
    const isCave = rawSurf < 15;

    if (isNight && Math.random() < 0.15) {
      // Phantom spawns at night at high altitude
      y = 20 + rnd(0, 10);
      type = "phantom";
    } else {
      y = Math.min(rawSurf + 1.5, rawSurf + 2);

      if (isCave && Math.random() < 0.08) {
        // Slimes spawn in caves
        type = "slime";
      } else if (isCave) {
        // Caves always allow hostile mobs regardless of time
        const roll = Math.random();
        type = roll < 0.30 ? "zombie" : roll < 0.55 ? "skeleton" : roll < 0.75 ? "spider" : roll < 0.90 ? "creeper" : "witherskeleton";
      } else if (isNight) {
        // Night surface: mostly hostile mobs, few peaceful
        const roll = Math.random();
        type = roll < 0.25 ? "zombie" : roll < 0.45 ? "skeleton" : roll < 0.60 ? "creeper" : roll < 0.75 ? "spider" : roll < 0.85 ? "witherskeleton" : roll < 0.90 ? "pig" : roll < 0.95 ? "cow" : "sheep";
      } else {
        // Daytime surface: only peaceful mobs
        const roll = Math.random();
        type = roll < 0.25 ? "pig" : roll < 0.45 ? "chicken" : roll < 0.60 ? "cow" : roll < 0.75 ? "sheep" : roll < 0.85 ? "horse" : roll < 0.92 ? "wolf" : "cat";
      }
    }

    this.spawnMob(type, x, y, z);
  }

  // ── Server-sync helpers (multiplayer) ────────────────────────────────────

  syncFromServer(serverMobs: MobData[]) {
    const live = new Set<string>();
    for (const d of serverMobs) {
      live.add(d.id);
      const existing = this.mobs.get(d.id);
      if (existing) {
        existing.mob.targetPos.set(d.x, d.y, d.z);
        existing.mob.targetRotY = d.rotY;
        existing.data = d;
      } else {
        const mob = new Mob(this.scene, d);
        this.mobs.set(d.id, { data: d, mob, velY: 0, timer: 0, aggro: false, hitCooldown: 0, _surfCacheX: NaN, _surfCacheZ: NaN, _surfCacheY: 0 });
      }
    }
    // Remove mobs that left
    for (const [id, lm] of this.mobs) {
      if (!live.has(id)) {
        lm.mob.dispose(this.scene);
        this.mobs.delete(id);
      }
    }
  }

  // Call when server says a specific mob was hit
  onMobHit(id: string, newHp: number) {
    const lm = this.mobs.get(id);
    if (!lm) return;
    lm.mob.showDamage(newHp);
    if (newHp <= 0) lm.mob.die();
  }

  // ── Raycast attack from player (called on left-click) ────────────────────
  // Returns { hit: true, mobId, damage } if a mob was struck
  tryAttack(raycaster: THREE.Raycaster, enchants?: { sharpness: number; protection: number; speed: number }): { mobId: string; damage: number } | null {
    if (this.attackCooldown > 0) return null;
    const meshes: THREE.Object3D[] = [];
    const idMap   = new Map<THREE.Object3D, string>();
    for (const [id, lm] of this.mobs) {
      if (!lm.mob.alive) continue;
      lm.mob.group.traverse(obj => {
        if ((obj as THREE.Mesh).isMesh) {
          meshes.push(obj);
          idMap.set(obj, id);
        }
      });
    }
    const hits = raycaster.intersectObjects(meshes);
    if (!hits.length) return null;
    const mobId = idMap.get(hits[0].object);
    if (!mobId) return null;

    const lm     = this.mobs.get(mobId)!;
    let damage = 5;
    // Apply sharpness enchantment
    if (enchants?.sharpness) {
      damage += 2 * enchants.sharpness;
    }
    lm.mob.health -= damage;
    lm.mob.showDamage(lm.mob.health);
    if (lm.mob.health <= 0) lm.mob.die();
    this.attackCooldown = 0.4; // 0.4s cooldown between hits

    return { mobId, damage };
  }

  // ── Per-frame update ──────────────────────────────────────────────────────

  update(dt: number) {
    this.attackCooldown = Math.max(0, this.attackCooldown - dt);

    const playerPos = this.cb.getPlayerPos();

    for (const [id, lm] of this.mobs) {
      // Tick per-mob hit cooldown
      if (lm.hitCooldown > 0) lm.hitCooldown = Math.max(0, lm.hitCooldown - dt);
      lm.mob.update(dt);

      if (!lm.mob.alive) continue;

      // Undead mobs burn at dawn when on the surface
      if (this.singleplayer && MobManager.UNDEAD_TYPES.has(lm.data.type)) {
        const isDaytime = this.dayTime >= 0.25 && this.dayTime <= 0.73;
        if (isDaytime) {
          // Check if mob is on the surface (not in a cave)
          const surfH = (this.world as any).getSurfaceHeight
            ? (this.world as any).getSurfaceHeight(Math.round(lm.data.x), Math.round(lm.data.z))
            : 20;
          if (lm.data.y >= surfH - 2) {
            // Burn: deal 4 damage per second
            lm.mob.health -= 4 * dt;
            lm.mob.showDamage(lm.mob.health);
            if (lm.mob.health <= 0) {
              lm.mob.die();
              continue;
            }
          }
        }
      }

      if (this.singleplayer) {
        // Skip AI for mobs > 32 blocks away (perf)
        const dx = lm.mob.targetPos.x - playerPos.x;
        const dz = lm.mob.targetPos.z - playerPos.z;
        const distSq = dx*dx + dz*dz;
        if (distSq <= 32*32) {
          this.runAI(lm, dt, playerPos);
        }
      }

      // Despawn if too far — use squared distance to avoid sqrt
      const dx = lm.data.x - playerPos.x;
      const dz = lm.data.z - playerPos.z;
      if (dx * dx + dz * dz > DESPAWN_RADIUS * DESPAWN_RADIUS) {
        lm.mob.dispose(this.scene);
        this.mobs.delete(id);
      }
    }

    // Update arrows
    for (let i = this.arrows.length - 1; i >= 0; i--) {
      const arrow = this.arrows[i];
      arrow.life -= dt;
      arrow.mesh.position.addScaledVector(arrow.vel, dt);

      // Check if arrow hits player
      const dx = arrow.mesh.position.x - playerPos.x;
      const dy = arrow.mesh.position.y - playerPos.y;
      const dz = arrow.mesh.position.z - playerPos.z;

      if (dx * dx + dy * dy + dz * dz < 0.64) { // 0.8^2 = 0.64
        // Arrow hit player
        this.cb.onPlayerDamage(1); // arrow: 3→1
        this.scene.remove(arrow.mesh);
        this.arrows.splice(i, 1);
      } else if (arrow.life <= 0) {
        // Arrow lifespan expired
        this.scene.remove(arrow.mesh);
        this.arrows.splice(i, 1);
      }
    }

    // Spawn mobs in singleplayer
    if (this.singleplayer) {
      if (Math.random() < dt * 0.04 && this.mobs.size < MAX_SP_MOBS) {
        this.spawnRandom(playerPos.x, playerPos.z);
      }
    }
  }

  // ── Pathfinding-aware movement ─────────────────────────────────────────

  /**
   * Move mob toward target with obstacle avoidance.
   * Returns true if the mob successfully moved forward.
   * If blocked by a 1-block wall, mob will jump. If 2+ blocks, mob sidesteps.
   */
  private moveToward(lm: LocalMob, targetX: number, targetZ: number, speed: number, dt: number): boolean {
    const d = lm.data;
    const dx = targetX - d.x;
    const dz = targetZ - d.z;
    const angle = Math.atan2(dx, dz);
    d.rotY = angle;

    // Check ahead: is there a block at mob's feet level in the move direction?
    const stepX = Math.sin(angle) * 0.8;
    const stepZ = Math.cos(angle) * 0.8;
    const aheadX = Math.round(d.x + stepX);
    const aheadZ = Math.round(d.z + stepZ);
    const feetY  = Math.round(d.y);

    const blockAhead = this.world.getBlockType(aheadX, feetY, aheadZ);
    const blockAbove = this.world.getBlockType(aheadX, feetY + 1, aheadZ);

    if (blockAhead && blockAhead !== 7 && blockAhead !== 0) {
      // There's a solid block ahead at feet level
      if (!blockAbove || blockAbove === 7 || blockAbove === 0) {
        // Can jump over it (1-block obstacle)
        if (lm.velY === 0) {
          lm.velY = 7.5; // jump
        }
        d.x += Math.sin(angle) * speed * dt;
        d.z += Math.cos(angle) * speed * dt;
        return true;
      } else {
        // 2+ block wall — try sidestepping
        const sideAngle = angle + (Math.random() < 0.5 ? Math.PI / 2 : -Math.PI / 2);
        d.rotY = sideAngle;
        d.x += Math.sin(sideAngle) * speed * 0.5 * dt;
        d.z += Math.cos(sideAngle) * speed * 0.5 * dt;
        return false;
      }
    }

    // Clear path — move straight
    d.x += Math.sin(angle) * speed * dt;
    d.z += Math.cos(angle) * speed * dt;
    return true;
  }

  // ── Simple AI (singleplayer only) ────────────────────────────────────────

  private runAI(lm: LocalMob, dt: number, playerPos: THREE.Vector3) {
    const d    = lm.data;
    lm.timer  -= dt;

    const dx2    = playerPos.x - d.x;
    const dz2    = playerPos.z - d.z;
    const distSq = dx2 * dx2 + dz2 * dz2; // squared — avoids sqrt; all AI funcs use squared thresholds

    // Type-specific AI (enderdragon and phantom don't use gravity)
    if (d.type === "enderdragon") {
      this.enderdragonAI(lm, dt);
    } else if (d.type === "phantom") {
      this.phantomAI(lm, dt, playerPos);
    } else {
      // Gravity / floor snap for other mobs
      d.y += lm.velY * dt;
      lm.velY += MOB_GRAVITY * dt;
      // Surface height cache — only call getSurfaceHeight (up to 65 Map.get) when column changes
      const _snappedX = Math.round(d.x);
      const _snappedZ = Math.round(d.z);
      if (_snappedX !== lm._surfCacheX || _snappedZ !== lm._surfCacheZ) {
        lm._surfCacheX = _snappedX;
        lm._surfCacheZ = _snappedZ;
        lm._surfCacheY = (this.world as any).getSurfaceHeight
          ? (this.world as any).getSurfaceHeight(_snappedX, _snappedZ) + 0.5
          : 0;
      }
      const surfY = lm._surfCacheY;
      if (d.y <= surfY) { d.y = surfY; lm.velY = 0; }

      // Type-specific AI
      if (d.type === "pig" || d.type === "chicken" || d.type === "cow" || d.type === "sheep") {
        const spd = d.type === "chicken" ? 3.5 : d.type === "cow" ? 2.0 : d.type === "sheep" ? 2.2 : 2.5;
        this.animalAI(lm, dt, distSq, dx2, dz2, spd);
      } else if (d.type === "horse") {
        this.horseAI(lm, dt, distSq, dx2, dz2, playerPos);
      } else if (d.type === "villager") {
        this.villagerAI(lm, dt, playerPos);
      } else if (d.type === "zombie") {
        this.zombieAI(lm, dt, distSq, dx2, dz2, playerPos);
      } else if (d.type === "creeper") {
        this.creeperAI(lm, dt, distSq, playerPos);
      } else if (d.type === "skeleton") {
        this.skeletonAI(lm, dt, distSq, dx2, dz2, playerPos);
      } else if (d.type === "witherskeleton") {
        this.witherskeletonAI(lm, dt, distSq, dx2, dz2, playerPos);
      } else if (d.type === "spider") {
        this.spiderAI(lm, dt, distSq, dx2, dz2, playerPos);
      } else if (d.type === "wolf") {
        this.wolfAI(lm, dt, distSq, dx2, dz2, playerPos);
      } else if (d.type === "cat") {
        this.catAI(lm, dt, distSq, dx2, dz2, playerPos);
      } else if (d.type === "slime") {
        this.slimeAI(lm, dt, distSq, dx2, dz2, playerPos);
      }
    }

    // Sync back to visual
    lm.mob.targetPos.set(d.x, d.y, d.z);
    lm.mob.targetRotY = d.rotY;
  }

  private animalAI(lm: LocalMob, dt: number, playerDistSq: number, _dx: number, _dz: number, speed: number) {
    const d = lm.data;

    // Flee if player very close
    if (playerDistSq < 25) { // 5^2=25
      d.state = "fleeing";
      lm.timer = 3;
    }

    if (d.state === "fleeing") {
      const fleeAngle = d.rotY + Math.PI; // run away
      d.x += Math.sin(fleeAngle) * speed * dt;
      d.z += Math.cos(fleeAngle) * speed * dt;
      if (lm.timer <= 0) d.state = "idle";
    } else if (d.state === "idle") {
      if (lm.timer <= 0) {
        d.state   = Math.random() < 0.5 ? "walking" : "idle";
        d.rotY    = Math.random() * Math.PI * 2;
        lm.timer  = rnd(1.5, 4);
      }
    } else {
      // Walking
      d.x += Math.sin(d.rotY) * speed * dt;
      d.z += Math.cos(d.rotY) * speed * dt;
      if (lm.timer <= 0) {
        d.state  = "idle";
        lm.timer = rnd(2, 5);
      }
    }
  }

  private horseAI(lm: LocalMob, dt: number, _playerDistSq: number, _dx: number, _dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const SPEED = 5.0; // Horses move faster

    // Flee from zombies/skeletons — avoid Array.from allocation, use direct map iteration
    let shouldFlee = false;
    for (const m of this.mobs.values()) {
      if (m.data.type === "zombie" || m.data.type === "skeleton") {
        const fdx = m.data.x - d.x, fdz = m.data.z - d.z;
        if (fdx * fdx + fdz * fdz < 225) { shouldFlee = true; break; } // 15^2
      }
    }

    if (shouldFlee) {
      d.state = "fleeing";
      lm.timer = 3;
    }

    if (d.state === "fleeing") {
      // Find nearest threat and run away
      let threatX = 0, threatZ = 0;
      for (const m of this.mobs.values()) {
        if ((m.data.type === "zombie" || m.data.type === "skeleton") && m.data.id !== d.id) {
          threatX = m.data.x;
          threatZ = m.data.z;
          break;
        }
      }
      if (threatX !== 0 || threatZ !== 0) {
        d.rotY = Math.atan2(d.x - threatX, d.z - threatZ);
      }
      d.x += Math.sin(d.rotY) * SPEED * dt;
      d.z += Math.cos(d.rotY) * SPEED * dt;
      if (lm.timer <= 0) d.state = "idle";
    } else if (d.state === "idle") {
      if (lm.timer <= 0) {
        d.state   = Math.random() < 0.5 ? "walking" : "idle";
        d.rotY    = Math.random() * Math.PI * 2;
        lm.timer  = rnd(1.5, 4);
      }
    } else {
      // Walking
      d.x += Math.sin(d.rotY) * SPEED * dt;
      d.z += Math.cos(d.rotY) * SPEED * dt;
      if (lm.timer <= 0) {
        d.state  = "idle";
        lm.timer = rnd(2, 5);
      }
    }
  }

  private zombieAI(lm: LocalMob, dt: number, playerDistSq: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d     = lm.data;
    const SPEED = 2.8;

    if (playerDistSq < 144) { // 12^2=144
      d.state    = "chasing";
      lm.aggro   = true;
    } else if (playerDistSq > 400 && lm.timer <= 0) { // 20^2=400
      d.state    = "idle";
      lm.aggro   = false;
    }

    if (d.state === "chasing") {
      this.moveToward(lm, playerPos.x, playerPos.z, SPEED, dt);

      // Attack player — use per-mob hitCooldown so multiple zombies don't stack instantly
      if (playerDistSq < 3.24 && lm.hitCooldown <= 0) { // 1.8^2=3.24
        this.cb.onPlayerDamage(1); // zombie melee: 2→1
        lm.hitCooldown = 2.5; // 2.5s between hits per zombie
      }
    } else {
      this.animalAI(lm, dt, playerDistSq, dx, dz, 1.5);
    }
  }

  private static readonly CREEPER_FUSE_TIME = 1.5;

  private creeperAI(lm: LocalMob, dt: number, playerDistSq: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const SPEED = 2.5;

    // If player is within 10 blocks, enter fusing state
    if (playerDistSq < 100) { // 10^2=100
      if (d.state !== "fusing") {
        d.state = "fusing";
        lm.timer = MobManager.CREEPER_FUSE_TIME;
      }
    } else if (d.state === "fusing") {
      // Player got away, abort — reset visual
      d.state = "idle";
      lm.timer = rnd(1.5, 4);
      lm.mob.setCreeperFuse(0);
    }

    if (d.state === "fusing") {
      // Chase player while fusing — with pathfinding
      this.moveToward(lm, playerPos.x, playerPos.z, SPEED, dt);

      // Update visual fuse progress (0→1)
      const progress = 1.0 - (lm.timer / MobManager.CREEPER_FUSE_TIME);
      lm.mob.setCreeperFuse(Math.max(0, Math.min(1, progress)));

      // Explode when timer expires
      if (lm.timer <= 0) {
        this.explode(lm, playerPos);
      }
    } else {
      // Idle/wander
      if (lm.timer <= 0) {
        d.state = Math.random() < 0.5 ? "walking" : "idle";
        d.rotY = Math.random() * Math.PI * 2;
        lm.timer = rnd(1.5, 4);
      }
      if (d.state === "walking") {
        d.x += Math.sin(d.rotY) * SPEED * dt;
        d.z += Math.cos(d.rotY) * SPEED * dt;
      }
    }
  }

  private explode(lm: LocalMob, playerPos: THREE.Vector3) {
    const d = lm.data;
    const EXPLOSION_RADIUS = 5;
    const DAMAGE_RADIUS = 5;

    // Damage player if within range
    const dx = playerPos.x - d.x;
    const dy = playerPos.y - d.y;
    const dz = playerPos.z - d.z;
    if (dx * dx + dy * dy + dz * dz < DAMAGE_RADIUS * DAMAGE_RADIUS) {
      this.cb.onPlayerDamage(4); // Creeper: 6→4
    }

    // Trigger explosion callback
    this.cb.onExplosion(d.x, d.y, d.z, EXPLOSION_RADIUS);

    // Remove mob
    lm.mob.die();
  }

  private skeletonAI(lm: LocalMob, dt: number, playerDistSq: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const SPEED = 1.8;
    const SHOOT_RANGE_SQ = 400;  // 20^2
    const BACK_AWAY_SQ   = 16;   // 4^2
    const SHOOT_COOLDOWN = 2;

    lm.shootTimer = (lm.shootTimer ?? 0) - dt;

    if (playerDistSq < SHOOT_RANGE_SQ) {
      d.state = "attacking";
      lm.aggro = true;

      // Shoot arrow if ready
      if (lm.shootTimer <= 0) {
        this.shootArrow(d.x, d.y + 0.5, d.z, playerPos);
        lm.shootTimer = SHOOT_COOLDOWN;
      }

      // Back away if player too close
      if (playerDistSq < BACK_AWAY_SQ) {
        const backAngle = d.rotY + Math.PI;
        d.x += Math.sin(backAngle) * SPEED * dt;
        d.z += Math.cos(backAngle) * SPEED * dt;
      } else {
        // Keep distance, rotate to face player
        d.rotY = Math.atan2(dx, dz);
      }
    } else if (playerDistSq > 625 && lm.timer <= 0) { // 25^2=625
      d.state = "idle";
      lm.aggro = false;
    }

    if (d.state !== "attacking") {
      // Idle/wander when not attacking
      if (lm.timer <= 0) {
        d.state = Math.random() < 0.5 ? "walking" : "idle";
        d.rotY = Math.random() * Math.PI * 2;
        lm.timer = rnd(1.5, 4);
      }
      if (d.state === "walking") {
        d.x += Math.sin(d.rotY) * SPEED * dt;
        d.z += Math.cos(d.rotY) * SPEED * dt;
      }
    }
  }

  private witherskeletonAI(lm: LocalMob, dt: number, playerDistSq: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const SPEED = 4; // Fast melee attack
    const ATTACK_SQ    = 4;   // 2^2
    const DETECTION_SQ = 400; // 20^2
    const ATTACK_COOLDOWN = 1;

    lm.shootTimer = (lm.shootTimer ?? 0) - dt;

    if (playerDistSq < DETECTION_SQ) {
      d.state = "chasing";
      lm.aggro = true;

      // Chase player with pathfinding
      this.moveToward(lm, playerPos.x, playerPos.z, SPEED, dt);

      // Melee attack if close — per-mob cooldown
      if (playerDistSq < ATTACK_SQ && lm.hitCooldown <= 0) {
        this.cb.onPlayerDamage(2); // Wither skeleton: 4→2
        lm.hitCooldown = 2.5;
        // Wave 9: Apply wither effect
        this.cb.onWitherEffect?.();
      }
    } else if (playerDistSq > 625 && lm.timer <= 0) { // 25^2=625
      d.state = "idle";
      lm.aggro = false;
    }

    if (d.state !== "chasing") {
      // Idle/wander
      if (lm.timer <= 0) {
        d.state = Math.random() < 0.5 ? "walking" : "idle";
        d.rotY = Math.random() * Math.PI * 2;
        lm.timer = rnd(1.5, 4);
      }
      if (d.state === "walking") {
        d.x += Math.sin(d.rotY) * SPEED * 0.5 * dt;
        d.z += Math.cos(d.rotY) * SPEED * 0.5 * dt;
      }
    }
  }

  private shootArrow(x: number, y: number, z: number, targetPos: THREE.Vector3) {
    // Reuse shared geometry and material — no allocation per arrow
    const arrowMesh = new THREE.Mesh(_ARROW_GEO, _ARROW_MAT);
    arrowMesh.position.set(x, y, z);

    // Direction toward target — reuse tmp vector, then copy into a new owned vel
    _arrowDirTmp.set(targetPos.x - x, targetPos.y - y, targetPos.z - z).normalize();
    const ARROW_SPEED = 15;
    const vel = _arrowDirTmp.clone().multiplyScalar(ARROW_SPEED);

    this.scene.add(arrowMesh);
    this.arrows.push({ mesh: arrowMesh, vel, life: 3 });
  }

  private enderdragonAI(lm: LocalMob, dt: number) {
    const d = lm.data;
    const playerPos = this.cb.getPlayerPos();

    // Initialize state and timers
    if (!d.state) d.state = "circling";
    if (!lm.timer) lm.timer = 0;
    if (!(lm as any).dragonTimer) (lm as any).dragonTimer = 0;

    if (d.state === "circling") {
      // Slow orbital motion around player
      lm.timer += dt * 0.4;
      const orbitRadius = 15;
      const targetX = playerPos.x + Math.sin(lm.timer) * orbitRadius;
      const targetY = 25 + Math.sin(lm.timer * 2) * 3;
      const targetZ = playerPos.z + Math.cos(lm.timer) * orbitRadius;

      // Lerp to target position
      const lerpSpeed = 3;
      d.x += (targetX - d.x) * lerpSpeed * dt;
      d.y += (targetY - d.y) * lerpSpeed * dt;
      d.z += (targetZ - d.z) * lerpSpeed * dt;

      // Switch to diving every 8 seconds
      (lm as any).dragonTimer += dt;
      if ((lm as any).dragonTimer > 8) {
        d.state = "diving";
        (lm as any).dragonTimer = 0;
      }
    } else if (d.state === "diving") {
      // Fast dive toward player
      const lerpSpeed = 8;
      d.x += (playerPos.x - d.x) * lerpSpeed * dt;
      d.y += (playerPos.y - d.y) * lerpSpeed * dt;
      d.z += (playerPos.z - d.z) * lerpSpeed * dt;

      // Use squared distance — avoid Math.hypot (sqrt) per frame
      const _ddx = playerPos.x - d.x, _ddz = playerPos.z - d.z;

      // Deal damage if close enough
      if (_ddx*_ddx + _ddz*_ddz < 16) { // 4^2 = 16
        this.cb.onPlayerDamage(3); // Dragon: 5→3
        d.state = "circling";
        (lm as any).dragonTimer = 0;
      }

      // Switch back after 4 seconds if hasn't reached
      (lm as any).dragonTimer += dt;
      if ((lm as any).dragonTimer > 4) {
        d.state = "circling";
        (lm as any).dragonTimer = 0;
      }
    }

    // Keep dragon's y above 15 always
    d.y = Math.max(15, d.y);
  }

  private spiderAI(lm: LocalMob, dt: number, playerDistSq: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const SPEED = 3.5;
    const DETECT_SQ = 225; // 15^2
    const ATTACK_SQ = 9;   // 3^2
    const JUMP_COOLDOWN = 3;

    // Initialize jump timer if not present
    if (!(lm as any).jumpTimer) (lm as any).jumpTimer = 0;

    // Detect player
    if (playerDistSq < DETECT_SQ) {
      d.state = "chasing";
      lm.aggro = true;
    } else if (playerDistSq > 400 && lm.timer <= 0) { // 20^2=400
      d.state = "idle";
      lm.aggro = false;
    }

    if (d.state === "chasing") {
      // Chase with pathfinding
      this.moveToward(lm, playerPos.x, playerPos.z, SPEED, dt);

      // Jump at player if close enough
      (lm as any).jumpTimer -= dt;
      if (playerDistSq < ATTACK_SQ && (lm as any).jumpTimer <= 0) {
        lm.velY = 8;
        (lm as any).jumpTimer = JUMP_COOLDOWN;
      }

      // Attack player — per-mob cooldown
      if (playerDistSq < 2.25 && lm.hitCooldown <= 0) { // 1.5^2=2.25
        this.cb.onPlayerDamage(1); // spider/skeleton melee: 2→1
        lm.hitCooldown = 2.5;
      }
    } else {
      // Idle/wander
      if (lm.timer <= 0) {
        d.state = Math.random() < 0.5 ? "walking" : "idle";
        d.rotY = Math.random() * Math.PI * 2;
        lm.timer = rnd(1.5, 4);
      }
      if (d.state === "walking") {
        d.x += Math.sin(d.rotY) * SPEED * 0.6 * dt; // slower when wandering
        d.z += Math.cos(d.rotY) * SPEED * 0.6 * dt;
      }
    }

    // Spiders are faster in darkness
    if ((this.cb.getPlayerPos().y < 10) || playerDistSq > 225) { // 15^2=225
      // In darkness: apply 20% speed boost
      // This is subtle but check day/night somehow
    }
  }

  private villagerAI(lm: LocalMob, dt: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    // Villagers stand idle and rotate to face player when nearby — squared distance avoids sqrt
    const dx = playerPos.x - d.x;
    const dz = playerPos.z - d.z;
    if (dx * dx + dz * dz < 100) { // 10^2 = 100
      d.rotY = Math.atan2(dx, dz);
    }
    // Villagers don't move or attack - they just stand still
  }

  private wolfAI(lm: LocalMob, dt: number, playerDistSq: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const speed = 4.0;

    // Untamed wolves: wander peacefully, flee if player very close
    if (d.state !== "tamed") {
      if (playerDistSq < 4) { // 2^2=4
        // Flee from player
        d.state = "fleeing";
        lm.timer = 3;
      }

      if (d.state === "fleeing") {
        const fleeAngle = d.rotY + Math.PI;
        d.x += Math.sin(fleeAngle) * speed * dt;
        d.z += Math.cos(fleeAngle) * speed * dt;
        if (lm.timer <= 0) d.state = "idle";
      } else if (d.state === "idle") {
        // Random wander
        if (lm.timer <= 0) {
          d.rotY += (Math.random() - 0.5) * Math.PI;
          lm.timer = 3 + Math.random() * 3;
        }
        d.x += Math.sin(d.rotY) * 1.5 * dt;
        d.z += Math.cos(d.rotY) * 1.5 * dt;
      }
    } else {
      // Tamed: follow player if far
      if (playerDistSq > 25) { // 5^2=25
        d.rotY = Math.atan2(dx, dz);
        d.x += Math.sin(d.rotY) * speed * dt;
        d.z += Math.cos(d.rotY) * speed * dt;
        d.state = "following";
      } else {
        d.state = "sitting";
      }
    }
  }

  private catAI(lm: LocalMob, dt: number, playerDistSq: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const speed = 2.5;

    if (d.state !== "tamed") {
      // Untamed cats: wander slowly
      if (d.state === "idle") {
        if (lm.timer <= 0) {
          d.rotY += (Math.random() - 0.5) * Math.PI;
          lm.timer = 4 + Math.random() * 4;
          if (Math.random() < 0.3) d.state = "sitting";
        }
        d.x += Math.sin(d.rotY) * 1.0 * dt;
        d.z += Math.cos(d.rotY) * 1.0 * dt;
      } else if (d.state === "sitting") {
        if (lm.timer <= 0) d.state = "idle";
      }
    } else {
      // Tamed cats: stay near player within 8 blocks
      if (playerDistSq > 64) { // 8^2=64
        d.rotY = Math.atan2(dx, dz);
        d.x += Math.sin(d.rotY) * speed * dt;
        d.z += Math.cos(d.rotY) * speed * dt;
      } else {
        d.state = "sitting";
      }
    }
  }

  private phantomAI(lm: LocalMob, dt: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const isNight = this.dayTime < 0.25 || this.dayTime > 0.73;

    // During day: fly away and despawn
    if (!isNight) {
      d.y = Math.min(d.y + 5 * dt, 255); // Fly up and away
      return;
    }

    // At night: patrol and dive
    const dx = playerPos.x - d.x;
    const dz = playerPos.z - d.z;
    const distSq = dx * dx + dz * dz; // squared — no sqrt needed

    // Keep altitude at 20-30
    if (d.y < 20) d.y += 3 * dt;
    if (d.y > 30) d.y -= 3 * dt;

    // Check for tamed cats nearby — iterate map directly, use squared distance (no Array.from + sqrt)
    let catsNearby = false;
    for (const m of this.mobs.values()) {
      if (m.data.type === "cat" && m.data.state === "tamed") {
        const _cdx = m.data.x - d.x, _cdz = m.data.z - d.z, _cdy = m.data.y - d.y;
        if (_cdx*_cdx + _cdz*_cdz + _cdy*_cdy < 100) { catsNearby = true; break; } // 10^2=100
      }
    }

    if (catsNearby) {
      // Flee from cat
      const fleeAngle = Math.atan2(d.x - playerPos.x, d.z - playerPos.z);
      d.x += Math.sin(fleeAngle) * 8 * dt;
      d.z += Math.cos(fleeAngle) * 8 * dt;
      d.state = "fleeing";
      return;
    }

    if (d.state === "diving") {
      // Dive attack
      lm.timer -= dt;
      const diveAngle = Math.atan2(dx, dz);
      d.rotY = diveAngle;

      // Fast descent toward player
      d.x += Math.sin(diveAngle) * 12 * dt;
      d.z += Math.cos(diveAngle) * 12 * dt;
      d.y -= 8 * dt; // Swoop down

      // Check if we hit the player — per-mob hitCooldown
      if (distSq < 1 && d.y <= playerPos.y + 1 && lm.hitCooldown <= 0) { // 1^2=1
        this.cb.onPlayerDamage(1); // phantom swoop: 2→1
        lm.hitCooldown = 3.0; // phantom can only swoop-hit every 3s
        d.state = "ascending";
        lm.timer = 5; // Go back up
      }

      // After dive or timeout, go back up
      if (lm.timer <= 0 || d.y < 10) {
        d.state = "ascending";
        lm.timer = 3;
      }
    } else if (d.state === "ascending") {
      // Go back up
      lm.timer -= dt;
      d.y += 5 * dt;
      if (lm.timer <= 0 || d.y > 30) {
        d.state = "patrolling";
        lm.timer = rnd(8, 12);
      }
    } else {
      // Patrolling
      lm.timer -= dt;
      if (distSq < 400 && lm.timer <= 0) { // 20^2=400
        // Start dive
        d.state = "diving";
        lm.timer = 3; // Dive duration
      }
      // Slow patrol movement
      d.x += Math.sin(d.rotY) * 3 * dt;
      d.z += Math.cos(d.rotY) * 3 * dt;
    }
  }

  private slimeAI(lm: LocalMob, dt: number, playerDistSq: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const speed = 4.5;

    if (playerDistSq > 144) { // 12^2=144
      // Too far, idle
      d.state = "idle";
      return;
    }

    // Hop toward player
    lm.timer -= dt;
    if (lm.timer <= 0) {
      // Jump towards player
      const angleToPlayer = Math.atan2(dx, dz);
      d.rotY = angleToPlayer;
      d.x += Math.sin(angleToPlayer) * speed * dt;
      d.z += Math.cos(angleToPlayer) * speed * dt;
      lm.velY = 6; // Jump
      d.state = "hopping";
      lm.timer = 0.8; // Hop every 0.8 seconds
    }

    // Check if landing on player — per-mob hitCooldown prevents rapid-fire hits
    if (lm.velY < 0 && playerDistSq < 4 && lm.hitCooldown <= 0) { // 2^2=4
      this.cb.onPlayerDamage(1); // slime: 2→1
      lm.hitCooldown = 1.5;
    }
  }

  getAllMobsForDisplay(): Array<{ id: string; mob: Mob }> {
    return Array.from(this.mobs.entries()).map(([id, lm]) => ({ id, mob: lm.mob }));
  }

  /** Zero-allocation mob iteration — avoids new array per call.
   *  Caller iterates the map directly via .values() or for-of. */
  iterMobs(): IterableIterator<LocalMob> {
    return this.mobs.values();
  }

  getMob(id: string): Mob | undefined {
    return this.mobs.get(id)?.mob;
  }

  getMobCount(): number { return this.mobs.size; }

  getMobsByType(type: MobType): Array<{ id: string; mob: Mob }> {
    return Array.from(this.mobs.entries())
      .filter(([, lm]) => lm.data.type === type && lm.mob.alive)
      .map(([id, lm]) => ({ id, mob: lm.mob }));
  }

  spawnAt(type: MobType, x: number, y: number, z: number): Mob {
    return this.spawnMob(type, x, y, z);
  }

  dispose() {
    for (const [, lm] of this.mobs) lm.mob.dispose(this.scene);
    this.mobs.clear();
  }
}
