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
}

// Callback signatures
export interface MobCallbacks {
  onPlayerDamage: (amount: number) => void;
  getPlayerPos:   () => THREE.Vector3;
}

export class MobManager {
  private mobs:   Map<string, LocalMob> = new Map();
  private scene:  THREE.Scene;
  private world:  World;
  private cb:     MobCallbacks;
  private singleplayer: boolean;

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
    const maxHp    = type === "zombie" ? 20 : type === "chicken" ? 4 : 10;
    const data: MobData = {
      id: mobId, type, x, y, z,
      rotY:      rnd(0, Math.PI * 2),
      health:    maxHp,
      maxHealth: maxHp,
      alive:     true,
      state:     "idle",
    };
    const mob = new Mob(this.scene, data);
    this.mobs.set(mobId, { data, mob, velY: 0, timer: 0, aggro: false });
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
    const type: MobType = roll < 0.5 ? "pig" : roll < 0.75 ? "chicken" : "zombie";
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
  tryAttack(raycaster: THREE.Raycaster): { mobId: string; damage: number } | null {
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
    const damage = 5;
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
    if (d.type === "pig" || d.type === "chicken") {
      this.animalAI(lm, dt, dist, dx2, dz2, d.type === "chicken" ? 3.5 : 2.5);
    } else if (d.type === "zombie") {
      this.zombieAI(lm, dt, dist, dx2, dz2, playerPos);
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
