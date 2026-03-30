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
}

export class MobManager {
  private mobs:   Map<string, LocalMob> = new Map();
  private scene:  THREE.Scene;
  private world:  World;
  private cb:     MobCallbacks;
  private singleplayer: boolean;
  private arrows: Arrow[] = [];

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
    const maxHp    = type === "zombie" ? 20 : type === "creeper" ? 20 : type === "skeleton" ? 20 : type === "chicken" ? 4 : type === "cow" ? 16 : type === "sheep" ? 12 : type === "horse" ? 30 : type === "villager" ? 20 : 10;
    const data: MobData = {
      id: mobId, type, x, y, z,
      rotY:      rnd(0, Math.PI * 2),
      health:    maxHp,
      maxHealth: maxHp,
      alive:     true,
      state:     "idle",
    };
    const mob = new Mob(this.scene, data);
    this.mobs.set(mobId, { data, mob, velY: 0, timer: 0, aggro: false, shootTimer: 0 });
    return mob;
  }

  spawnRandom(cx: number, cz: number) {
    if (this.mobs.size >= MAX_SP_MOBS) return;
    const angle  = rnd(0, Math.PI * 2);
    const dist   = rnd(12, SPAWN_RADIUS);
    const x      = cx + Math.cos(angle) * dist;
    const z      = cz + Math.sin(angle) * dist;
    const y      = (this.world as any).getSurfaceHeight
                   ? (this.world as any).getSurfaceHeight(Math.floor(x), Math.floor(z)) + 1.5
                   : 20;
    const roll   = Math.random();
    const type: MobType = roll < 0.22 ? "pig" : roll < 0.35 ? "chicken" : roll < 0.48 ? "cow" : roll < 0.60 ? "sheep" : roll < 0.70 ? "horse" : roll < 0.80 ? "zombie" : roll < 0.90 ? "creeper" : "skeleton";
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
        this.mobs.set(d.id, { data: d, mob, velY: 0, timer: 0, aggro: false });
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
      lm.mob.update(dt);

      if (!lm.mob.alive) continue;

      if (this.singleplayer) {
        this.runAI(lm, dt, playerPos);
      }

      // Despawn if too far
      const dx = lm.data.x - playerPos.x;
      const dz = lm.data.z - playerPos.z;
      if (Math.sqrt(dx * dx + dz * dz) > DESPAWN_RADIUS) {
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
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < 0.8) {
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

    // Gravity / floor snap
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

    // Flee from zombies/skeletons
    const shouldFlee = Array.from(this.mobs.values()).some(m =>
      (m.data.type === "zombie" || m.data.type === "skeleton") &&
      Math.hypot(m.data.x - d.x, m.data.z - d.z) < 15
    );

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

      // Attack player
      if (playerDist < 1.8 && this.attackCooldown <= 0) {
        this.cb.onPlayerDamage(2);
        this.attackCooldown = 1.5;
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
    const distToPlayer = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (distToPlayer < DAMAGE_RADIUS) {
      this.cb.onPlayerDamage(8);
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

  getAllMobsForDisplay(): Array<{ id: string; mob: Mob }> {
    return Array.from(this.mobs.entries()).map(([id, lm]) => ({ id, mob: lm.mob }));
  }

  getMob(id: string): Mob | undefined {
    return this.mobs.get(id)?.mob;
  }

  dispose() {
    for (const [, lm] of this.mobs) lm.mob.dispose(this.scene);
    this.mobs.clear();
  }
}
