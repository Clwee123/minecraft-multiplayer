import * as THREE from "three";
import { Mob, MobData, MobType } from "./Mob";
import { World } from "./World";

function rnd(a: number, b: number) { return a + Math.random() * (b - a); }
function uid() { return Math.random().toString(36).slice(2, 10); }

const MAX_SP_MOBS   = 20;
const SPAWN_RADIUS  = 30;
const DESPAWN_RADIUS = 60;
const MOB_GRAVITY   = -20;

interface LocalMob {
  data:  MobData;
  mob:   Mob;
  velY:  number;
  timer: number;      // AI state timer
  aggro: boolean;     // zombie chasing player
  shootTimer?: number; // skeleton shoot cooldown
  hitCooldown: number; // per-mob player-hit cooldown (prevents spam)
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
    this.mobs.set(mobId, { data, mob, velY: 0, timer: 0, aggro: false, shootTimer: 0, hitCooldown: 0 });
    return mob;
  }

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

    if (isNight && Math.random() < 0.15) {
      // Phantom spawns at night at high altitude
      y = 20 + rnd(0, 10);
      type = "phantom";
    } else {
      // Check for slime in caves (low y positions)
      const surfaceY = (this.world as any).getSurfaceHeight
        ? (this.world as any).getSurfaceHeight(Math.floor(x), Math.floor(z)) + 1.5
        : 20;
      y = surfaceY;

      if (surfaceY < 15 && Math.random() < 0.08) {
        // Slimes spawn in caves (low ground)
        type = "slime";
      } else {
        // Normal mob spawn
        const roll = Math.random();
        type = roll < 0.18 ? "pig" : roll < 0.28 ? "chicken" : roll < 0.38 ? "cow" : roll < 0.48 ? "sheep" : roll < 0.55 ? "horse" : roll < 0.60 ? "wolf" : roll < 0.65 ? "cat" : roll < 0.72 ? "zombie" : roll < 0.79 ? "creeper" : roll < 0.86 ? "spider" : roll < 0.94 ? "skeleton" : "witherskeleton";
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
        this.mobs.set(d.id, { data: d, mob, velY: 0, timer: 0, aggro: false, hitCooldown: 0 });
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

      if (this.singleplayer) {
        // Skip AI for mobs > 60 blocks away
        const dx = lm.mob.targetPos.x - playerPos.x;
        const dz = lm.mob.targetPos.z - playerPos.z;
        const distSq = dx*dx + dz*dz;
        if (distSq <= 60*60) {
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
        this.cb.onPlayerDamage(3);
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
      if (Math.random() < dt * 0.3 && this.mobs.size < MAX_SP_MOBS) {
        this.spawnRandom(playerPos.x, playerPos.z);
      }
    }
  }

  // ── Simple AI (singleplayer only) ────────────────────────────────────────

  private runAI(lm: LocalMob, dt: number, playerPos: THREE.Vector3) {
    const d    = lm.data;
    lm.timer  -= dt;

    const dx2  = playerPos.x - d.x;
    const dz2  = playerPos.z - d.z;
    const dist = Math.sqrt(dx2 * dx2 + dz2 * dz2);

    // Type-specific AI (enderdragon and phantom don't use gravity)
    if (d.type === "enderdragon") {
      this.enderdragonAI(lm, dt);
    } else if (d.type === "phantom") {
      this.phantomAI(lm, dt, playerPos);
    } else {
      // Gravity / floor snap for other mobs
      d.y += lm.velY * dt;
      lm.velY += MOB_GRAVITY * dt;
      const surfY = (this.world as any).getSurfaceHeight
        ? (this.world as any).getSurfaceHeight(Math.round(d.x), Math.round(d.z)) + 0.5
        : 0;
      if (d.y <= surfY) { d.y = surfY; lm.velY = 0; }

      // Type-specific AI
      if (d.type === "pig" || d.type === "chicken" || d.type === "cow" || d.type === "sheep") {
        const spd = d.type === "chicken" ? 3.5 : d.type === "cow" ? 2.0 : d.type === "sheep" ? 2.2 : 2.5;
        this.animalAI(lm, dt, dist, dx2, dz2, spd);
      } else if (d.type === "horse") {
        this.horseAI(lm, dt, dist, dx2, dz2, playerPos);
      } else if (d.type === "villager") {
        this.villagerAI(lm, dt, playerPos);
      } else if (d.type === "zombie") {
        this.zombieAI(lm, dt, dist, dx2, dz2, playerPos);
      } else if (d.type === "creeper") {
        this.creeperAI(lm, dt, dist, playerPos);
      } else if (d.type === "skeleton") {
        this.skeletonAI(lm, dt, dist, dx2, dz2, playerPos);
      } else if (d.type === "witherskeleton") {
        this.witherskeletonAI(lm, dt, dist, dx2, dz2, playerPos);
      } else if (d.type === "spider") {
        this.spiderAI(lm, dt, dist, dx2, dz2, playerPos);
      } else if (d.type === "wolf") {
        this.wolfAI(lm, dt, dist, dx2, dz2, playerPos);
      } else if (d.type === "cat") {
        this.catAI(lm, dt, dist, dx2, dz2, playerPos);
      } else if (d.type === "slime") {
        this.slimeAI(lm, dt, dist, dx2, dz2, playerPos);
      }
    }

    // Sync back to visual
    lm.mob.targetPos.set(d.x, d.y, d.z);
    lm.mob.targetRotY = d.rotY;
  }

  private animalAI(lm: LocalMob, dt: number, playerDist: number, _dx: number, _dz: number, speed: number) {
    const d = lm.data;

    // Flee if player very close
    if (playerDist < 5) {
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

  private horseAI(lm: LocalMob, dt: number, playerDist: number, _dx: number, _dz: number, playerPos: THREE.Vector3) {
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

  private zombieAI(lm: LocalMob, dt: number, playerDist: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d     = lm.data;
    const SPEED = 2.8;

    if (playerDist < 18) {
      d.state    = "chasing";
      lm.aggro   = true;
    } else if (playerDist > 24 && lm.timer <= 0) {
      d.state    = "idle";
      lm.aggro   = false;
    }

    if (d.state === "chasing") {
      d.rotY = Math.atan2(dx, dz);
      d.x   += Math.sin(d.rotY) * SPEED * dt;
      d.z   += Math.cos(d.rotY) * SPEED * dt;

      // Attack player — use per-mob hitCooldown so multiple zombies don't stack instantly
      if (playerDist < 1.8 && lm.hitCooldown <= 0) {
        this.cb.onPlayerDamage(2);
        lm.hitCooldown = 2.0; // 2s between hits per zombie
      }
    } else {
      this.animalAI(lm, dt, playerDist, dx, dz, 1.5);
    }
  }

  private creeperAI(lm: LocalMob, dt: number, playerDist: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const SPEED = 2.5;

    // If player is within 10 blocks, enter fusing state
    if (playerDist < 10) {
      if (d.state !== "fusing") {
        d.state = "fusing";
        lm.timer = 1.5; // fuse for 1.5 seconds
      }
    } else if (d.state === "fusing") {
      // Player got away, abort
      d.state = "idle";
      lm.timer = rnd(1.5, 4);
    }

    if (d.state === "fusing") {
      // Chase player while fusing
      const dx = playerPos.x - d.x;
      const dz = playerPos.z - d.z;
      d.rotY = Math.atan2(dx, dz);
      d.x += Math.sin(d.rotY) * SPEED * dt;
      d.z += Math.cos(d.rotY) * SPEED * dt;

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
      this.cb.onPlayerDamage(6); // Creeper explosion: reduced from 8 → 6
    }

    // Trigger explosion callback
    this.cb.onExplosion(d.x, d.y, d.z, EXPLOSION_RADIUS);

    // Remove mob
    lm.mob.die();
  }

  private skeletonAI(lm: LocalMob, dt: number, playerDist: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const SPEED = 1.8;
    const SHOOT_RANGE = 20;
    const BACK_AWAY_RANGE = 4;
    const SHOOT_COOLDOWN = 2;

    lm.shootTimer = (lm.shootTimer ?? 0) - dt;

    if (playerDist < SHOOT_RANGE) {
      d.state = "attacking";
      lm.aggro = true;

      // Shoot arrow if ready
      if (lm.shootTimer <= 0) {
        this.shootArrow(d.x, d.y + 0.5, d.z, playerPos);
        lm.shootTimer = SHOOT_COOLDOWN;
      }

      // Back away if player too close
      if (playerDist < BACK_AWAY_RANGE) {
        const backAngle = d.rotY + Math.PI;
        d.x += Math.sin(backAngle) * SPEED * dt;
        d.z += Math.cos(backAngle) * SPEED * dt;
      } else {
        // Keep distance, rotate to face player
        d.rotY = Math.atan2(dx, dz);
      }
    } else if (playerDist > 25 && lm.timer <= 0) {
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

  private witherskeletonAI(lm: LocalMob, dt: number, playerDist: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const SPEED = 4; // Fast melee attack
    const ATTACK_RANGE = 2;
    const DETECTION_RANGE = 20;
    const ATTACK_COOLDOWN = 1;

    lm.shootTimer = (lm.shootTimer ?? 0) - dt;

    if (playerDist < DETECTION_RANGE) {
      d.state = "chasing";
      lm.aggro = true;

      // Chase player
      d.rotY = Math.atan2(dx, dz);
      d.x += Math.sin(d.rotY) * SPEED * dt;
      d.z += Math.cos(d.rotY) * SPEED * dt;

      // Melee attack if close — per-mob cooldown
      if (playerDist < ATTACK_RANGE && lm.hitCooldown <= 0) {
        this.cb.onPlayerDamage(4); // Wither skeleton: reduced from 5 → 4
        lm.hitCooldown = 2.5;
        // Wave 9: Apply wither effect
        this.cb.onWitherEffect?.();
      }
    } else if (playerDist > 25 && lm.timer <= 0) {
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
    const arrowGeo = new THREE.BoxGeometry(0.1, 0.1, 0.4);
    const arrowMat = new THREE.MeshLambertMaterial({ color: 0xffdd00 });
    const arrowMesh = new THREE.Mesh(arrowGeo, arrowMat);
    arrowMesh.position.set(x, y, z);

    // Direction toward target
    const dir = new THREE.Vector3(
      targetPos.x - x,
      targetPos.y - y,
      targetPos.z - z,
    ).normalize();

    const ARROW_SPEED = 15;
    const vel = dir.multiplyScalar(ARROW_SPEED);

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

      const distToPlayer = Math.hypot(playerPos.x - d.x, playerPos.z - d.z);

      // Deal damage if close enough
      if (distToPlayer < 4) {
        this.cb.onPlayerDamage(5);
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

  private spiderAI(lm: LocalMob, dt: number, playerDist: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const SPEED = 3.5;
    const DETECT_RANGE = 15;
    const ATTACK_RANGE = 3;
    const JUMP_COOLDOWN = 3;

    // Initialize jump timer if not present
    if (!(lm as any).jumpTimer) (lm as any).jumpTimer = 0;

    // Detect player
    if (playerDist < DETECT_RANGE) {
      d.state = "chasing";
      lm.aggro = true;
    } else if (playerDist > 20 && lm.timer <= 0) {
      d.state = "idle";
      lm.aggro = false;
    }

    if (d.state === "chasing") {
      // Face and move toward player
      d.rotY = Math.atan2(dx, dz);
      d.x += Math.sin(d.rotY) * SPEED * dt;
      d.z += Math.cos(d.rotY) * SPEED * dt;

      // Jump at player if close enough
      (lm as any).jumpTimer -= dt;
      if (playerDist < ATTACK_RANGE && (lm as any).jumpTimer <= 0) {
        lm.velY = 8;
        (lm as any).jumpTimer = JUMP_COOLDOWN;
      }

      // Attack player — per-mob cooldown
      if (playerDist < 1.5 && lm.hitCooldown <= 0) {
        this.cb.onPlayerDamage(2);
        lm.hitCooldown = 2.0;
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
    if ((this.cb.getPlayerPos().y < 10) || playerDist > 15) {
      // In darkness: apply 20% speed boost
      // This is subtle but check day/night somehow
    }
  }

  private villagerAI(lm: LocalMob, dt: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    // Villagers stand idle and rotate to face player when nearby
    const dx = playerPos.x - d.x;
    const dz = playerPos.z - d.z;
    const playerDist = Math.sqrt(dx * dx + dz * dz);

    if (playerDist < 10) {
      // Face player
      d.rotY = Math.atan2(dx, dz);
    }
    // Villagers don't move or attack - they just stand still
  }

  private wolfAI(lm: LocalMob, dt: number, playerDist: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const speed = 4.0;

    // Untamed wolves: wander peacefully, flee if player very close
    if (d.state !== "tamed") {
      if (playerDist < 2) {
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
      if (playerDist > 5) {
        d.rotY = Math.atan2(dx, dz);
        d.x += Math.sin(d.rotY) * speed * dt;
        d.z += Math.cos(d.rotY) * speed * dt;
        d.state = "following";
      } else {
        d.state = "sitting";
      }
    }
  }

  private catAI(lm: LocalMob, dt: number, playerDist: number, dx: number, dz: number, playerPos: THREE.Vector3) {
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
      if (playerDist > 8) {
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
    const dist = Math.sqrt(dx * dx + dz * dz);

    // Keep altitude at 20-30
    if (d.y < 20) d.y += 3 * dt;
    if (d.y > 30) d.y -= 3 * dt;

    // Check for tamed cats nearby (should flee)
    const catsNearby = Array.from(this.mobs.values()).some(m =>
      m.data.type === "cat" && m.data.state === "tamed" &&
      Math.hypot(m.data.x - d.x, m.data.z - d.z, m.data.y - d.y) < 10
    );

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
      if (dist < 1 && d.y <= playerPos.y + 1 && lm.hitCooldown <= 0) {
        this.cb.onPlayerDamage(2);
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
      if (dist < 20 && lm.timer <= 0) {
        // Start dive
        d.state = "diving";
        lm.timer = 3; // Dive duration
      }
      // Slow patrol movement
      d.x += Math.sin(d.rotY) * 3 * dt;
      d.z += Math.cos(d.rotY) * 3 * dt;
    }
  }

  private slimeAI(lm: LocalMob, dt: number, playerDist: number, dx: number, dz: number, playerPos: THREE.Vector3) {
    const d = lm.data;
    const speed = 4.5;

    if (playerDist > 12) {
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
    if (lm.velY < 0 && playerDist < 2 && lm.hitCooldown <= 0) {
      this.cb.onPlayerDamage(2);
      lm.hitCooldown = 1.5;
    }
  }

  getAllMobsForDisplay(): Array<{ id: string; mob: Mob }> {
    return Array.from(this.mobs.entries()).map(([id, lm]) => ({ id, mob: lm.mob }));
  }

  getMob(id: string): Mob | undefined {
    return this.mobs.get(id)?.mob;
  }

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
