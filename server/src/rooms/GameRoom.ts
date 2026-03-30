import { Room, Client } from "colyseus";
import { Schema, type, MapSchema, ArraySchema } from "@colyseus/schema";

// ── Schemas ───────────────────────────────────────────────────────────────────

export class PlayerState extends Schema {
  @type("string")  id: string = "";
  @type("string")  name: string = "Player";
  @type("float32") x: number = 0;
  @type("float32") y: number = 30;
  @type("float32") z: number = 0;
  @type("float32") rotY: number = 0;
  @type("float32") rotX: number = 0;
  @type("boolean") onGround: boolean = false;
  @type("uint8")   health: number = 20;
  @type("string")  gameMode: string = "survival";
}

export class BlockChange extends Schema {
  @type("int16")  x: number = 0;
  @type("int16")  y: number = 0;
  @type("int16")  z: number = 0;
  @type("string") action: string = "add";
  @type("uint8")  blockType: number = 1;
}

export class MobState extends Schema {
  @type("string")  id: string = "";
  @type("string")  type: string = "pig";
  @type("float32") x: number = 0;
  @type("float32") y: number = 20;
  @type("float32") z: number = 0;
  @type("float32") rotY: number = 0;
  @type("uint8")   health: number = 10;
  @type("uint8")   maxHealth: number = 10;
  @type("boolean") alive: boolean = true;
  @type("string")  state: string = "idle";
}

export class GameState extends Schema {
  @type({ map: PlayerState }) players    = new MapSchema<PlayerState>();
  @type([BlockChange])        blockChanges = new ArraySchema<BlockChange>();
  @type({ map: MobState })    mobs       = new MapSchema<MobState>();
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function uid(): string { return Math.random().toString(36).slice(2, 10); }
function rnd(a: number, b: number) { return a + Math.random() * (b - a); }

const MAX_MOBS  = 25;
const MOB_TYPES = ["pig", "pig", "pig", "chicken", "chicken", "zombie"] as const;

// ── GameRoom ──────────────────────────────────────────────────────────────────

export class GameRoom extends Room<GameState> {
  maxClients = 64;

  private mobLoop: ReturnType<typeof setInterval> | null = null;
  private mobTimers  = new Map<string, number>(); // AI state timers
  private mobVelY    = new Map<string, number>(); // vertical velocity per mob

  onCreate(_options: any) {
    this.setState(new GameState());
    console.log(`[GameRoom] Created ${this.roomId}`);

    // ── Message handlers ─────────────────────────────────────────────────────

    this.onMessage("move", (client, data: any) => {
      const p = this.state.players.get(client.sessionId);
      if (!p) return;
      p.x = data.x; p.y = data.y; p.z = data.z;
      p.rotY = data.rotY; p.rotX = data.rotX; p.onGround = data.onGround;
    });

    this.onMessage("addBlock", (client, data: any) => {
      const bc = new BlockChange();
      bc.x = data.x; bc.y = data.y; bc.z = data.z;
      bc.action = "add"; bc.blockType = data.blockType;
      this.state.blockChanges.push(bc);
      this.broadcast("blockUpdate", { x: data.x, y: data.y, z: data.z, action: "add", blockType: data.blockType }, { except: client });
    });

    this.onMessage("removeBlock", (client, data: any) => {
      const bc = new BlockChange();
      bc.x = data.x; bc.y = data.y; bc.z = data.z; bc.action = "remove";
      this.state.blockChanges.push(bc);
      this.broadcast("blockUpdate", { x: data.x, y: data.y, z: data.z, action: "remove" }, { except: client });
    });

    this.onMessage("chat", (client, data: any) => {
      const p = this.state.players.get(client.sessionId);
      if (!p) return;
      this.broadcast("chat", { name: p.name, text: String(data.text).slice(0, 200) });
    });

    this.onMessage("setGameMode", (client, data: any) => {
      const p = this.state.players.get(client.sessionId);
      if (!p) return;
      if (data.mode === "creative" || data.mode === "survival") {
        p.gameMode = data.mode;
        this.broadcast("chat", {
          name: "Server",
          text: `${p.name} switched to ${data.mode} mode.`,
        });
      }
    });

    this.onMessage("attackMob", (client, data: any) => {
      const mob = this.state.mobs.get(String(data.mobId));
      if (!mob || !mob.alive) return;
      const dmg  = Math.min(20, Math.max(1, Number(data.damage) || 5));
      mob.health = Math.max(0, mob.health - dmg) as any;
      if (mob.health <= 0) {
        mob.alive = false;
        this.broadcast("mobKilled", { mobId: data.mobId });
        setTimeout(() => { this.state.mobs.delete(String(data.mobId)); }, 4000);
      } else {
        this.broadcast("mobHit", { mobId: data.mobId, health: mob.health });
      }
    });

    this.onMessage("playerRespawn", (client) => {
      const p = this.state.players.get(client.sessionId);
      if (!p) return;
      p.health = 20;
      // Spawn high enough so client physics lands player on surface safely
      p.x = (Math.random() - 0.5) * 6;
      p.y = 42;  // client will fall to ground naturally
      p.z = (Math.random() - 0.5) * 6;
    });

    // ── Spawn initial mobs & start AI loop ───────────────────────────────────
    this.spawnInitialMobs();
    this.mobLoop = setInterval(() => this.tickMobs(0.2), 200);
  }

  // ── Player lifecycle ──────────────────────────────────────────────────────

  onJoin(client: Client, options: any = {}) {
    const p  = new PlayerState();
    p.id     = client.sessionId;
    p.name   = (options.name || "Player").slice(0, 24);
    p.x      = (Math.random() - 0.5) * 6;
    p.y      = 42;   // spawn high — client lands on surface via physics
    p.z      = (Math.random() - 0.5) * 6;
    this.state.players.set(client.sessionId, p);
    console.log(`[GameRoom] ${p.name} joined (${client.sessionId})`);

    // Send world state to late joiner
    client.send("worldState", {
      blockChanges: this.state.blockChanges.map(b => ({
        x: b.x, y: b.y, z: b.z, action: b.action, blockType: b.blockType,
      })),
    });

    // Send current mob state
    const mobSnapshot: any[] = [];
    this.state.mobs.forEach((mob, id) => {
      mobSnapshot.push({
        id, type: mob.type, x: mob.x, y: mob.y, z: mob.z,
        rotY: mob.rotY, health: mob.health, maxHealth: mob.maxHealth,
        alive: mob.alive, state: mob.state,
      });
    });
    client.send("mobSnapshot", mobSnapshot);
  }

  onLeave(client: Client) {
    const p = this.state.players.get(client.sessionId);
    console.log(`[GameRoom] ${p?.name ?? client.sessionId} left`);
    this.state.players.delete(client.sessionId);
  }

  onDispose() {
    if (this.mobLoop) clearInterval(this.mobLoop);
  }

  // ── Mob spawning ──────────────────────────────────────────────────────────

  private spawnInitialMobs() {
    for (let i = 0; i < 14; i++) this.spawnMob();
  }

  private spawnMob(type?: string) {
    if (this.state.mobs.size >= MAX_MOBS) return;
    const mobType = type ?? MOB_TYPES[Math.floor(Math.random() * MOB_TYPES.length)];
    const id  = uid();
    const mob = new MobState();
    mob.id        = id;
    mob.type      = mobType;
    mob.x         = rnd(-45, 45);
    mob.y         = 25;  // falls down to terrain via gravity
    mob.z         = rnd(-45, 45);
    mob.rotY      = rnd(0, Math.PI * 2);
    mob.maxHealth = mobType === "zombie" ? 20 : mobType === "chicken" ? 4 : 10;
    mob.health    = mob.maxHealth;
    mob.alive     = true;
    mob.state     = "idle";
    this.state.mobs.set(id, mob);
    this.mobTimers.set(id, rnd(1, 4));
    this.mobVelY.set(id, 0);
  }

  // ── Mob AI tick ───────────────────────────────────────────────────────────

  private tickMobs(dt: number) {
    const deadIds: string[] = [];

    this.state.mobs.forEach((mob, id) => {
      if (!mob.alive) return;

      let timer = this.mobTimers.get(id) ?? 0;
      timer -= dt;

      // Gravity + floor snap (floor is roughly y=9 for sea-level terrain)
      let velY = this.mobVelY.get(id) ?? 0;
      velY  = Math.max(velY - 28 * dt, -50);
      mob.y += velY * dt;
      // Terrain surface is between y=6 (water) and y=18 (hills); clamp to 9
      const floorY = 9;
      if (mob.y < floorY) { mob.y = floorY; velY = 0; }
      this.mobVelY.set(id, velY);

      // Find nearest player
      let nearestDist  = Infinity;
      let nearestPlayer: PlayerState | null = null;
      this.state.players.forEach(p => {
        const d = Math.hypot(p.x - mob.x, p.z - mob.z);
        if (d < nearestDist) { nearestDist = d; nearestPlayer = p; }
      });

      const speed = mob.type === "zombie" ? 2.8 : mob.type === "chicken" ? 3.5 : 2.5;

      if (mob.type === "zombie" && nearestPlayer && nearestDist < 18) {
        // Chase
        mob.state = "chasing";
        const angle = Math.atan2(nearestPlayer.x - mob.x, nearestPlayer.z - mob.z);
        mob.rotY = angle;
        mob.x   += Math.sin(angle) * speed * dt;
        mob.z   += Math.cos(angle) * speed * dt;

        // Attack
        if (nearestDist < 1.8 && nearestPlayer.gameMode !== "creative") {
          nearestPlayer.health = Math.max(0, nearestPlayer.health - 1) as any;
          if (nearestPlayer.health <= 0) {
            this.broadcast("playerDied", { id: nearestPlayer.id, name: nearestPlayer.name });
          }
        }
      } else {
        // Wander / idle
        if (timer <= 0) {
          mob.state  = mob.state === "idle" ? "walking" : "idle";
          mob.rotY   = rnd(0, Math.PI * 2);
          timer      = rnd(1.5, 4.5);
        }
        if (mob.state === "walking") {
          mob.x += Math.sin(mob.rotY) * speed * dt;
          mob.z += Math.cos(mob.rotY) * speed * dt;
        }
      }

      // Keep in world bounds
      if (Math.abs(mob.x) > 55 || Math.abs(mob.z) > 55) {
        mob.x = rnd(-10, 10);
        mob.z = rnd(-10, 10);
      }

      this.mobTimers.set(id, timer);
    });

    // Replenish mobs
    if (this.state.mobs.size < 10 && this.state.players.size > 0) {
      this.spawnMob();
    }

    // Broadcast mob positions to all clients
    if (this.state.players.size > 0) {
      const snapshot: any[] = [];
      this.state.mobs.forEach((mob, id) => {
        if (mob.alive) {
          snapshot.push({
            id, type: mob.type, x: mob.x, y: mob.y, z: mob.z,
            rotY: mob.rotY, health: mob.health, maxHealth: mob.maxHealth,
            alive: mob.alive, state: mob.state,
          });
        }
      });
      this.broadcast("mobUpdate", snapshot);
    }
  }
}
