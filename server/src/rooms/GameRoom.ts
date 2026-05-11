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
  @type("uint8")   health: number = 40;
  @type("string")  gameMode: string = "survival";
  /** False between death and respawn — clients hide the mesh when not alive. */
  @type("boolean") alive: boolean = true;
  /** Replicated crouch state so remote clients can play the squat anim. */
  @type("boolean") crouching: boolean = false;

  // Bloxity / Legion SDK avatar fields. Synced from the Legion API at join
  // time. All cosmetic / body-part IDs are 24-char ObjectIds (or "-1" for
  // unequipped). pfp is the full image URL.
  @type("uint8")   heldId:      number = 0;
  @type("string")  legionId:    string = "";
  @type("string")  displayName: string = "";
  @type("string")  pfp:         string = "";
  @type("string")  hatId:   string = "-1";
  @type("string")  backId:  string = "-1";
  @type("string")  skinId:  string = "-1";
  @type("string")  headId:  string = "-1";
  @type("string")  armLId:  string = "-1";
  @type("string")  armRId:  string = "-1";
  @type("string")  legLId:  string = "-1";
  @type("string")  legRId:  string = "-1";
  @type("string")  torsoId: string = "-1";
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
  @type("string")             mode       = "survival";
  @type("uint32")             timeOfDay  = 6000;
  @type("uint32")             seed       = 0;
  /** Mode-specific phase index (0..255). Meaning depends on `mode`. */
  @type("uint8")              modePhase  = 0;
  /** Server timestamp (seconds since epoch) when the current phase ends.
   *  Clients compute remaining time as `phaseEndsAt * 1000 - Date.now()`. */
  @type("uint32")             phaseEndsAt = 0;
  @type({ map: PlayerState }) players    = new MapSchema<PlayerState>();
  @type([BlockChange])        blockChanges = new ArraySchema<BlockChange>();
  @type({ map: MobState })    mobs       = new MapSchema<MobState>();
}

/** Phase durations in seconds. Length of the array also defines the cycle. */
const MODE_PHASES: Record<string, number[]> = {
  buildbattle: [30, 300, 90, 30],  // waiting → build → voting → results
  hideandseek: [30, 30, 180, 15],  // waiting → hide → seek → round over
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function uid(): string { return Math.random().toString(36).slice(2, 10); }
function rnd(a: number, b: number) { return a + Math.random() * (b - a); }

const MAX_MOBS  = 30;
// Tilted toward passive/friendly so worlds feel populated. Hostile mobs
// will only actually chase the player at night (see tickMobs).
const MOB_TYPES = ["pig", "pig", "pig", "chicken", "chicken", "cow", "cow", "sheep", "sheep", "villager", "villager", "zombie", "creeper", "skeleton", "spider", "wolf"] as const;

// ── Per-player save (across joins) ────────────────────────────────────────
//
// Vanilla-MC-style player persistence: when a player leaves, we stash the
// fields the server is authoritative for (pos, hp, hunger, xp, gameMode).
// On re-join (matched by Legion userId + mode) those values are restored
// instead of starting fresh at the random spawn. Inventory + furnace state
// live client-side in localStorage (see main.ts) — also vanilla-ish.
//
// In-memory map keyed by `${legionId}:${mode}`. Survives within the server
// process lifetime; we don't flush to disk yet (would lose state on
// restart, but a future tick can add fs persistence trivially).
interface PlayerSave {
  x: number; y: number; z: number;
  rotY: number; rotX: number;
  health: number;
  gameMode: string;
  savedAt: number;
}
const PLAYER_SAVES = new Map<string, PlayerSave>();
function saveKey(legionId: string, mode: string): string {
  return `${legionId || "guest"}:${mode}`;
}

// ── GameRoom ──────────────────────────────────────────────────────────────────

export class GameRoom extends Room<GameState> {
  maxClients = 64;

  private mobLoop: ReturnType<typeof setInterval> | null = null;
  private timeLoop: ReturnType<typeof setInterval> | null = null;
  private phaseLoop: ReturnType<typeof setInterval> | null = null;
  private mobTimers  = new Map<string, number>(); // AI state timers
  private mobVelY    = new Map<string, number>(); // vertical velocity per mob

  onCreate(options: any = {}) {
    this.setState(new GameState());
    const mode = String(options.mode || "survival").toLowerCase();
    this.state.mode = mode;
    // Pick a random world seed once per room so all clients here generate
    // the same terrain. Replicated through state.seed.
    this.state.seed = Math.floor(Math.random() * 0xfffffff) >>> 0;
    this.setMetadata({ mode, seed: this.state.seed });
    console.log(`[GameRoom] Created ${this.roomId} (mode=${mode}, seed=${this.state.seed})`);

    // ── Message handlers ─────────────────────────────────────────────────────

    this.onMessage("move", (client, data: any) => {
      const p = this.state.players.get(client.sessionId);
      if (!p) return;
      // Hide spectators from others by not broadcasting their position at all
      if (p.gameMode === "spectator") return;
      p.x = data.x; p.y = data.y; p.z = data.z;
      p.rotY = data.rotY; p.rotX = data.rotX; p.onGround = data.onGround;
      if (data.gameMode) p.gameMode = data.gameMode;
      if (typeof data.heldId === "number") p.heldId = (data.heldId | 0) & 0xff;
      if (typeof data.crouching === "boolean") p.crouching = data.crouching;
    });

    this.onMessage("setHeld", (client, data: any) => {
      const p = this.state.players.get(client.sessionId);
      if (!p) return;
      p.heldId = ((data?.id | 0) & 0xff);
    });

    // PvP: server is authoritative for damage. Creative players are immune.
    this.onMessage("attackPlayer", (client, data: any) => {
      const targetId = String(data?.targetId || "");
      const attacker = this.state.players.get(client.sessionId);
      const target = this.state.players.get(targetId);
      if (!attacker || !target || target === attacker) return;
      if (target.gameMode === "creative" || target.gameMode === "spectator") return;
      // Already dead — refuse new damage so the killer can't keep "hitting"
      // a corpse and so we don't spam playerHit broadcasts.
      if (!target.alive) return;
      // Range gate so a malicious client can't damage from across the map.
      const d = Math.hypot(attacker.x - target.x, attacker.y - target.y, attacker.z - target.z);
      if (d > 5.5) return;
      const dmg = Math.max(1, Math.min(20, (Number(data?.damage) || 4) | 0));
      target.health = Math.max(0, target.health - dmg) as any;
      // Include attacker's position so the target client can compute a
      // knockback direction without trusting per-attacker direction input.
      // byName lets the target HUD render "Killed by <attacker display name>"
      // instead of a generic message.
      this.broadcast("playerHit", {
        id: targetId, by: client.sessionId,
        byName: attacker.displayName || attacker.name,
        damage: dmg,
        byX: attacker.x, byY: attacker.y, byZ: attacker.z,
      });
      if (target.health <= 0) {
        target.alive = false;
        this.broadcast("playerDied", { id: targetId, by: client.sessionId, byName: attacker.displayName || attacker.name, name: target.name });
        // No auto-respawn — the killed player clicks Respawn on their death
        // screen, which sends playerRespawn. We just keep alive=false until
        // then so the killer's screen hides the corpse instantly.
      }
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
      if (data.mode === "creative" || data.mode === "survival" || data.mode === "spectator") {
        p.gameMode = data.mode;
        // If switching to spectator, remove from visible world immediately
        // Other clients will see gameMode change and hide the player
        if (data.mode !== "spectator") {
          this.broadcast("chat", {
            name: "Server",
            text: `${p.name} switched to ${data.mode} mode.`,
          });
        }
      }
    });

    this.onMessage("attackMob", (client, data: any) => {
      const mob = this.state.mobs.get(String(data.mobId));
      if (!mob || !mob.alive) return;
      const dmg  = Math.min(20, Math.max(1, Number(data.damage) || 5));
      mob.health = Math.max(0, mob.health - dmg) as any;
      if (mob.health <= 0) {
        mob.alive = false;
        // Vanilla-ish drop tables. ITEM IDs below match Textures.ts.
        // raw beef/pork/chicken are at item ids 212/213/214 (added in this
        // pass); leather=77, rotten flesh=95, gunpowder=76, bone=78,
        // arrow=80, feather=75, string=74, spider eye=96, wool=14 (white),
        // emerald=81, raw rabbit=149, rabbit hide=176, rabbit foot=148.
        const rng = (lo: number, hi: number) => lo + Math.floor(Math.random() * (hi - lo + 1));
        const drops: Array<{ id: number; count: number }> = [];
        switch (mob.type) {
          case "zombie":    drops.push({ id: 95,  count: rng(0, 2) }); break;
          case "skeleton":  drops.push({ id: 78,  count: rng(0, 2) }); drops.push({ id: 80, count: rng(0, 2) }); break;
          case "creeper":   drops.push({ id: 76,  count: rng(0, 2) }); break;
          case "spider":    drops.push({ id: 74,  count: rng(0, 2) }); if (Math.random() < 0.33) drops.push({ id: 96, count: 1 }); break;
          case "cow":       drops.push({ id: 77,  count: rng(0, 2) }); drops.push({ id: 212, count: rng(1, 3) }); break;
          case "pig":       drops.push({ id: 213, count: rng(1, 3) }); break;
          case "chicken":   drops.push({ id: 75,  count: rng(0, 2) }); drops.push({ id: 214, count: 1 }); break;
          case "sheep":     drops.push({ id: 14,  count: 1 }); break;
          case "villager":  if (Math.random() < 0.5) drops.push({ id: 81, count: 1 }); break;
          case "rabbit":    drops.push({ id: 176, count: rng(0, 1) }); drops.push({ id: 149, count: 1 }); break;
          case "wolf":      break; // wolves don't drop in vanilla
        }
        // Filter zero-count entries before sending.
        const real = drops.filter(d => d.count > 0);
        this.broadcast("mobKilled", { mobId: data.mobId, type: mob.type, x: mob.x, y: mob.y, z: mob.z, drops: real });
        setTimeout(() => { this.state.mobs.delete(String(data.mobId)); }, 4000);
      } else {
        this.broadcast("mobHit", { mobId: data.mobId, health: mob.health });
      }
    });

    // ── Break-progress relays ────────────────────────────────────────────
    // Purely ephemeral animation sync — see CLAUDE.md: messages are fine for
    // one-shot events with no persistence. We just forward to other clients
    // so they can render the crack overlay growing on the targeted block.
    this.onMessage("breakStart", (client, data: any) => {
      this.broadcast("breakStart", {
        from: client.sessionId,
        x: data.x | 0, y: data.y | 0, z: data.z | 0,
      }, { except: client });
    });
    this.onMessage("breakProgress", (client, data: any) => {
      this.broadcast("breakProgress", {
        from: client.sessionId,
        x: data.x | 0, y: data.y | 0, z: data.z | 0,
        progress: Math.max(0, Math.min(1, Number(data.progress) || 0)),
      }, { except: client });
    });
    this.onMessage("breakStop", (client) => {
      this.broadcast("breakStop", { from: client.sessionId }, { except: client });
    });

    this.onMessage("updateAvatar", (client, data: any = {}) => {
      const p = this.state.players.get(client.sessionId);
      if (!p) return;
      const a = (v: any) => (typeof v === "string" && v.length > 0 ? v.slice(0, 32) : "-1");
      if (data.hatId   !== undefined) p.hatId   = a(data.hatId);
      if (data.backId  !== undefined) p.backId  = a(data.backId);
      if (data.skinId  !== undefined) p.skinId  = a(data.skinId);
      if (data.headId  !== undefined) p.headId  = a(data.headId);
      if (data.armLId  !== undefined) p.armLId  = a(data.armLId);
      if (data.armRId  !== undefined) p.armRId  = a(data.armRId);
      if (data.legLId  !== undefined) p.legLId  = a(data.legLId);
      if (data.legRId  !== undefined) p.legRId  = a(data.legRId);
      if (data.torsoId !== undefined) p.torsoId = a(data.torsoId);
      if (typeof data.pfp === "string") p.pfp = data.pfp.slice(0, 512);
      if (typeof data.displayName === "string") p.displayName = data.displayName.slice(0, 32);
    });

    this.onMessage("playerRespawn", (client) => {
      const p = this.state.players.get(client.sessionId);
      if (!p) return;
      p.health = 40;
      p.alive = true;
      // Spawn high enough so client physics lands player on surface safely
      p.x = (Math.random() - 0.5) * 6;
      p.y = 42;  // client will fall to ground naturally
      p.z = (Math.random() - 0.5) * 6;
    });

    // ── Spawn initial mobs & start AI loop ───────────────────────────────────
    this.spawnInitialMobs();
    this.mobLoop = setInterval(() => { try { this.tickMobs(0.2); } catch(e) { console.error("[GameRoom] mob tick error:", e); } }, 200);
    // 3-minute day/night cycle: 180 s × ~134 ticks/sec = 24000 tick day.
    // Server-authoritative + replicated via state.timeOfDay.
    this.timeLoop = setInterval(() => {
      this.state.timeOfDay = (this.state.timeOfDay + 14) % 24000;
    }, 100);

    // ── Mode phase state machine (BuildBattle / HideAndSeek) ────────────
    //
    // Gunblox-style unified time: one `phaseEndsAt` field (uint32 seconds
    // since epoch) plus the current `modePhase` index. Every client just
    // computes `phaseEndsAt - Date.now()/1000` to know how long is left —
    // no local timers, perfect sync across clients.
    const phases = MODE_PHASES[this.state.mode];
    if (phases) {
      this.state.modePhase = 0;
      this.state.phaseEndsAt = Math.floor(Date.now() / 1000) + phases[0];
      this.phaseLoop = setInterval(() => {
        const nowSec = Math.floor(Date.now() / 1000);
        if (nowSec >= this.state.phaseEndsAt) {
          this.state.modePhase = (this.state.modePhase + 1) % phases.length;
          this.state.phaseEndsAt = nowSec + phases[this.state.modePhase];
          console.log(`[GameRoom ${this.roomId}] mode=${this.state.mode} → phase=${this.state.modePhase} (ends in ${phases[this.state.modePhase]}s)`);
        }
      }, 500);
    }
  }

  // ── Player lifecycle ──────────────────────────────────────────────────────

  onJoin(client: Client, options: any = {}) {
    // Belt-and-braces: filterBy already keeps modes apart, but reject any
    // late mismatch (e.g. an outdated client that didn't pass `mode`).
    const requested = String(options.mode || this.state.mode).toLowerCase();
    if (requested && requested !== this.state.mode) {
      console.warn(`[GameRoom] rejecting ${client.sessionId} — wanted ${requested}, room is ${this.state.mode}`);
      throw new Error(`mode_mismatch: room is ${this.state.mode}, you asked for ${requested}`);
    }
    const p  = new PlayerState();
    p.id     = client.sessionId;
    p.name   = (options.name || "Player").slice(0, 24);
    p.x      = (Math.random() - 0.5) * 6;
    p.y      = 42;   // spawn high — client lands on surface via physics
    p.z      = (Math.random() - 0.5) * 6;

    // ── Bloxity / Legion identity & avatar ──
    // Trust the client-provided Legion user data. In a hardened deployment
    // this would be verified by validating options.legion.token against the
    // Legion API server-side, but for now we sync the names/avatar through.
    const legion = options.legion || {};
    if (legion.userId) p.legionId = String(legion.userId).slice(0, 64);
    if (legion.username) p.name = String(legion.username).slice(0, 24);
    if (legion.displayName) p.displayName = String(legion.displayName).slice(0, 32);
    if (legion.pfp) p.pfp = String(legion.pfp).slice(0, 512);
    const av = legion.avatar || {};
    const a = (v: any) => (typeof v === "string" && v.length > 0 ? v.slice(0, 32) : "-1");
    p.hatId   = a(av.hatId);
    p.backId  = a(av.backId);
    p.skinId  = a(av.skinId);
    p.headId  = a(av.headId);
    p.armLId  = a(av.armLId);
    p.armRId  = a(av.armRId);
    p.legLId  = a(av.legLId);
    p.legRId  = a(av.legRId);
    p.torsoId = a(av.torsoId);

    // Restore any saved progress for this Legion user in this mode. Falls
    // back to the random spawn we just picked when there's no save.
    const sk = saveKey(p.legionId, this.state.mode);
    const saved = PLAYER_SAVES.get(sk);
    if (saved) {
      p.x = saved.x; p.y = saved.y; p.z = saved.z;
      p.rotY = saved.rotY; p.rotX = saved.rotX;
      p.health = Math.max(1, saved.health) as any;
      if (saved.gameMode) p.gameMode = saved.gameMode;
      console.log(`[GameRoom] restored save for ${p.name} (${sk})`);
    }

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
    if (p) {
      // Persist the authoritative server state for next time. Inventory +
      // furnaces are saved client-side (localStorage) — see CLAUDE.md for the
      // split rationale.
      const sk = saveKey(p.legionId, this.state.mode);
      PLAYER_SAVES.set(sk, {
        x: p.x, y: p.y, z: p.z,
        rotY: p.rotY, rotX: p.rotX,
        health: p.health,
        gameMode: p.gameMode,
        savedAt: Date.now(),
      });
    }
    this.state.players.delete(client.sessionId);
  }

  onDispose() {
    if (this.mobLoop)   clearInterval(this.mobLoop);
    if (this.timeLoop)  clearInterval(this.timeLoop);
    if (this.phaseLoop) clearInterval(this.phaseLoop);
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
    mob.maxHealth = mobType === "zombie" ? 20 : mobType === "creeper" ? 20 : mobType === "skeleton" ? 20 : mobType === "witherskeleton" ? 40 : mobType === "chicken" ? 4 : mobType === "cow" ? 16 : mobType === "sheep" ? 12 : mobType === "spider" ? 16 : mobType === "wolf" ? 20 : mobType === "cat" ? 10 : mobType === "phantom" ? 20 : mobType === "slime" ? 16 : mobType === "irongolem" ? 100 : mobType === "snowgolem" ? 20 : 10;
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

      // Gravity + floor snap. Our terrain ranges y≈28-40 (SEA_LEVEL=28 plus
      // biome offsets), so the old floorY=9 was burying every mob inside
      // stone. We now clamp to 32 — above sea level so mobs are always
      // visible. The client also ground-snaps to the real surface block
      // each frame for nicer placement.
      let velY = this.mobVelY.get(id) ?? 0;
      velY  = Math.max(velY - 28 * dt, -50);
      mob.y += velY * dt;
      const floorY = 32;
      if (mob.y < floorY) { mob.y = floorY; velY = 0; }
      this.mobVelY.set(id, velY);

      // Find nearest player
      let nearestDist  = Infinity;
      let nearestPlayer: PlayerState | null = null;
      this.state.players.forEach(p => {
        const d = Math.hypot(p.x - mob.x, p.z - mob.z);
        if (d < nearestDist) { nearestDist = d; nearestPlayer = p; }
      });

      const speed = mob.type === "zombie" ? 2.8 : mob.type === "chicken" ? 3.5 : mob.type === "cow" ? 2.0 : mob.type === "sheep" ? 2.2 : mob.type === "villager" ? 1.4 : 2.5;
      // Hostile mobs only chase at night (timeOfDay in 12500..23500 like MC).
      const isNight = this.state.timeOfDay > 12500 && this.state.timeOfDay < 23500;
      const isHostile = mob.type === "zombie" || mob.type === "creeper" || mob.type === "skeleton" || mob.type === "spider";

      if (isHostile && isNight && nearestPlayer && nearestDist < 18) {
        // Chase
        mob.state = "chasing";
        const angle = Math.atan2(nearestPlayer.x - mob.x, nearestPlayer.z - mob.z);
        mob.rotY = angle;
        mob.x   += Math.sin(angle) * speed * dt;
        mob.z   += Math.cos(angle) * speed * dt;

        // Attack — skip creative and spectator players
        if (nearestDist < 1.8 && nearestPlayer.gameMode !== "creative" && nearestPlayer.gameMode !== "spectator" && nearestPlayer.alive) {
          const dmg = 1;
          nearestPlayer.health = Math.max(0, nearestPlayer.health - dmg) as any;
          // Tell the target which mob hit them so the death screen / HUD can
          // render "Killed by a <mobType>" instead of a generic message.
          this.broadcast("mobDamage", {
            targetId: nearestPlayer.id,
            mobType: mob.type,
            damage: dmg,
          });
          if (nearestPlayer.health <= 0) {
            nearestPlayer.alive = false;
            this.broadcast("playerDied", { id: nearestPlayer.id, mobType: mob.type, name: nearestPlayer.name });
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
