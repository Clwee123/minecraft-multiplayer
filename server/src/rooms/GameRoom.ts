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

  // ── Minigame mode roles ──
  // "" (default) = no role / regular gameplay.
  // Infection: "survivor" or "infected" (zombie). Survivors win by surviving
  // the timer; infected win by converting everyone.
  // Squid Games: "alive" or "eliminated". Eliminated players become spectators
  // for the rest of the round.
  @type("string")  role: string = "";
  /** Per-round score: kills (shooter), tug-of-war pulls, marble picks, etc.
   *  Reset on round restart. */
  @type("uint16")  score: number = 0;
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
  /** Server timestamp (seconds) when a graceful shutdown will disconnect
   *  all clients. 0 = not shutting down. Set by index.ts on SIGTERM so
   *  late joiners + reconnects also see the warning banner. */
  @type("uint32")             shuttingDownAt = 0;
  @type({ map: PlayerState }) players    = new MapSchema<PlayerState>();
  @type([BlockChange])        blockChanges = new ArraySchema<BlockChange>();
  @type({ map: MobState })    mobs       = new MapSchema<MobState>();
  /** Active map index — clients build the matching arena. Shooter cycles
   *  this on every match. 0 by default. */
  @type("uint8")              mapIndex   = 0;
  /** Vote counts for the next map. Cleared each new round. Keys are map
   *  indices as strings. */
  @type({ map: "uint16" })    mapVotes   = new MapSchema<number>();
  // ── Per-minigame sub-state ──
  // Generic free-form field for current-minigame data. The shape depends on
  // mode + modePhase. Examples:
  //   squidgames RLGL: "green" or "red"          (doll watching state)
  //   squidgames honeycomb: "1", "2", or "3"     (correct shape, revealed at end)
  //   squidgames glassbridge: "L" or "R"         (current step's safe side)
  // Clients render mini-game UI based on (mode, modePhase, subState).
  @type("string")             subState   = "";
  /** Per-minigame timer — e.g. seconds left in current RLGL window. The main
   *  phase timer is in phaseEndsAt; this is a shorter sub-timer. */
  @type("uint32")             subStateEndsAt = 0;
}

/** Phase durations in seconds. Length of the array also defines the cycle. */
const MODE_PHASES: Record<string, number[]> = {
  buildbattle: [30, 300, 90, 30],   // waiting → build → voting → results
  hideandseek: [30, 30, 180, 15],   // waiting → hide → seek → round over
  // Shooter: 5-min match → 10s map-vote → back to match. Two phases.
  shooter:     [300, 10],
  // Infection: 30s lobby → 4 min round → 15s reset.
  infection:   [30, 240, 15],
  // Squid Games: 5 minigames (60s each) + 10s buffer at start.
  squidgames:  [10, 60, 60, 60, 60, 60],
};

/** Map-pool per mode for the auto-rotation feature. The active map index is
 *  stored in state.mapIndex so all clients render the same arena. */
const MODE_MAPS: Record<string, string[]> = {
  shooter: ["arena", "warehouse", "courtyard"],
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
  /** Minigame-specific sub-tick (RLGL position checking, glass-bridge step,
   *  etc.). Null when no sub-tick is needed for the current phase. */
  private subTickLoop: ReturnType<typeof setInterval> | null = null;
  private mobTimers  = new Map<string, number>(); // AI state timers
  private mobVelY    = new Map<string, number>(); // vertical velocity per mob

  // ── Minigame transient state (server-only, NOT replicated) ──
  // Squidgames RLGL: snapshot of every player's position taken when the doll
  // turns red. Anyone whose live position later differs by >RLGL_MOVE_THRESH
  // gets eliminated. Cleared when light goes green.
  private rlglFrozenAt = new Map<string, { x: number; y: number; z: number }>();
  /** Honeycomb: each player's chosen shape (1/2/3). Server picks the safe
   *  shape at end of phase; wrong picks eliminated. */
  private honeycombPicks = new Map<string, number>();
  /** Tug of War: 0 = team A, 1 = team B. Assigned at phase start. Each pull
   *  message bumps the team's score. */
  private tugTeams = new Map<string, 0 | 1>();
  private tugScores: [number, number] = [0, 0];
  /** Marbles: pairs and per-player guesses. */
  private marblePairs: Array<[string, string]> = [];
  private marbleGuesses = new Map<string, number>();
  /** Glass bridge: per-step safe side ("L" | "R"). Players pick via msg. */
  private glassSafe: ("L" | "R")[] = [];
  private glassStep = 0;
  private glassPicks = new Map<string, "L" | "R">();

  onCreate(options: any = {}) {
    this.setState(new GameState());
    const mode = String(options.mode || "survival").toLowerCase();
    this.state.mode = mode;
    // Lobby rooms have a smaller cap so the 3D plaza doesn't get crowded.
    if (mode === "lobby") this.maxClients = 20;
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
      // ── Infection mode conversion ──
      // If the attacker is infected and target is a survivor, convert the
      // target into a zombie immediately (in vanilla MC infection servers
      // the target's role changes the instant the zombie touches them).
      if (this.state.mode === "infection" && attacker.role === "infected" && target.role === "survivor") {
        target.role = "infected";
        target.health = 20;  // full HP as a new zombie
        this.broadcast("chat", { name: "Server", text: `🧟 ${target.name} was infected by ${attacker.name}!` });
        this.broadcast("infectionConvert", { id: targetId, by: client.sessionId });
        // Don't kill them; they're a zombie now. Skip the death path.
        attacker.score = (attacker.score + 1) & 0xffff;
        return;
      }
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
        // Clean up shortly after broadcast. Clients despawn immediately on
        // alive=false (Multiplayer.ts reconcile), so we don't need to keep
        // the corpse in state for any real time — 250 ms is just buffer for
        // the alive=false replication tick to reach laggy clients.
        setTimeout(() => { this.state.mobs.delete(String(data.mobId)); }, 250);
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
      p.health = 20;
      p.alive = true;
      // Spawn high enough so client physics lands player on surface safely
      p.x = (Math.random() - 0.5) * 6;
      p.y = 42;  // client will fall to ground naturally
      p.z = (Math.random() - 0.5) * 6;
    });

    // ── Spawn initial mobs & start AI loop ───────────────────────────────────
    // Mobs ONLY in survival mode. Minigame modes (shooter/infection/squidgames/
    // buildbattle/hideandseek/bedwars/parkour/oneblock) have curated arenas
    // where wandering pigs would just be visual noise.
    if (mode === "survival") {
      this.spawnInitialMobs();
      this.mobLoop = setInterval(() => { try { this.tickMobs(0.2); } catch(e) { console.error("[GameRoom] mob tick error:", e); } }, 200);
    }
    // Day/night cycle ONLY in survival/creative — minigame rooms stay pinned
    // at noon (timeOfDay = 6000) so visibility is consistent every round.
    if (mode === "survival" || mode === "creative") {
      this.timeLoop = setInterval(() => {
        this.state.timeOfDay = (this.state.timeOfDay + 14) % 24000;
      }, 100);
    } else {
      this.state.timeOfDay = 6000;
    }

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
      // Fire phase-0 setup so infection/squidgames initialize roles + intro
      // banner without waiting for the first transition. _prev=-1 marks "from
      // startup", but the handlers only care about `next` so it's fine.
      this.onPhaseTransition(-1, 0);
      this.phaseLoop = setInterval(() => {
        const nowSec = Math.floor(Date.now() / 1000);
        if (nowSec >= this.state.phaseEndsAt) {
          const prevPhase = this.state.modePhase;
          this.state.modePhase = (this.state.modePhase + 1) % phases.length;
          this.state.phaseEndsAt = nowSec + phases[this.state.modePhase];
          console.log(`[GameRoom ${this.roomId}] mode=${this.state.mode} → phase=${this.state.modePhase} (ends in ${phases[this.state.modePhase]}s)`);
          this.onPhaseTransition(prevPhase, this.state.modePhase);
        }
      }, 500);
    }

    // ── Squid Games minigame inputs ──
    // Each handler ignores messages outside the corresponding mode/phase, so
    // a malicious client can't pre-fill picks for future rounds.
    this.onMessage("honeycombPick", (client, data: any) => {
      if (this.state.mode !== "squidgames" || this.state.modePhase !== 2) return;
      const p = this.state.players.get(client.sessionId);
      if (!p || p.role !== "alive") return;
      const pick = Math.max(1, Math.min(3, (data?.shape | 0) || 0));
      if (pick > 0) this.honeycombPicks.set(client.sessionId, pick);
    });
    this.onMessage("tugPull", (client) => {
      if (this.state.mode !== "squidgames" || this.state.modePhase !== 3) return;
      const p = this.state.players.get(client.sessionId);
      if (!p || p.role !== "alive") return;
      const team = this.tugTeams.get(client.sessionId);
      if (team !== 0 && team !== 1) return;
      this.tugScores[team] += 1;
      p.score = (p.score + 1) & 0xffff;
    });
    this.onMessage("marbleGuess", (client, data: any) => {
      if (this.state.mode !== "squidgames" || this.state.modePhase !== 4) return;
      const p = this.state.players.get(client.sessionId);
      if (!p || p.role !== "alive") return;
      const g = Math.max(1, Math.min(10, (data?.n | 0) || 0));
      if (g > 0) this.marbleGuesses.set(client.sessionId, g);
    });
    this.onMessage("glassPick", (client, data: any) => {
      if (this.state.mode !== "squidgames" || this.state.modePhase !== 5) return;
      const p = this.state.players.get(client.sessionId);
      if (!p || p.role !== "alive") return;
      const side = data?.side === "L" ? "L" : (data?.side === "R" ? "R" : null);
      if (side) this.glassPicks.set(client.sessionId, side);
    });

    // ── Map vote (Shooter) ──
    // During the 10-s vote phase, clients send "voteMap" with a map index.
    // The highest-voted index becomes the new mapIndex when we transition
    // out of the vote phase.
    this.onMessage("voteMap", (_client, data: any) => {
      if (this.state.mode !== "shooter") return;
      if (this.state.modePhase !== 1) return; // only during vote phase
      const idx = Math.max(0, Math.min(255, (data?.index | 0)));
      const k = String(idx);
      this.state.mapVotes.set(k, (this.state.mapVotes.get(k) ?? 0) + 1);
    });

    // ── PvP kill scoring ──
    // For Shooter, the `playerHit/playerDied` flow already runs. We just
    // need to reset score-relevant state on a new match. Per-player kill
    // counts aren't in the schema yet — surface them as a future tick.
  }

  /** Fired by phaseLoop when the modePhase index changes. Used to swap
   *  maps, reset HP, broadcast round-start, etc. */
  private onPhaseTransition(_prev: number, next: number) {
    // Clear any minigame sub-tick from the previous phase. Each branch below
    // restarts its own if needed.
    if (this.subTickLoop) { clearInterval(this.subTickLoop); this.subTickLoop = null; }
    this.state.subState = "";
    this.state.subStateEndsAt = 0;
    if (this.state.mode === "infection") {
      this.handleInfectionPhase(next);
    } else if (this.state.mode === "squidgames") {
      this.handleSquidGamesPhase(next);
    }
    if (this.state.mode === "shooter") {
      // Phase 0 = match, Phase 1 = vote. After the vote ends (we just
      // entered phase 0 again) tally + swap maps + respawn everyone.
      if (next === 0) {
        const pool = MODE_MAPS.shooter;
        if (pool && pool.length > 0) {
          let bestIdx = (this.state.mapIndex + 1) % pool.length;
          let bestCount = -1;
          this.state.mapVotes.forEach((count, k) => {
            const idx = parseInt(k, 10);
            if (idx >= 0 && idx < pool.length && count > bestCount) {
              bestIdx = idx; bestCount = count;
            }
          });
          this.state.mapIndex = bestIdx;
          this.state.mapVotes.clear();
          console.log(`[GameRoom ${this.roomId}] shooter map → ${pool[bestIdx]} (idx ${bestIdx})`);
        }
        // Respawn every player at full HP for the new round.
        this.state.players.forEach(p => {
          p.health = 20;
          p.alive = true;
          p.x = (Math.random() - 0.5) * 8;
          p.y = 42;
          p.z = (Math.random() - 0.5) * 8;
        });
        this.broadcast("roundStart", { map: pool[this.state.mapIndex] });
      } else if (next === 1) {
        // Entering vote phase — let clients open the vote UI.
        this.broadcast("voteStart", { maps: MODE_MAPS.shooter });
      }
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

    // Mode-specific late-join role assignment.
    if (this.state.mode === "infection") {
      // Mid-round joiners become infected (zombies). Lobby joiners get no role.
      p.role = this.state.modePhase === 0 ? "" : "infected";
    } else if (this.state.mode === "squidgames") {
      // Mid-round joiners spectate as eliminated; lobby joiners are alive.
      p.role = this.state.modePhase === 0 ? "alive" : "eliminated";
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
    if (this.mobLoop)     clearInterval(this.mobLoop);
    if (this.timeLoop)    clearInterval(this.timeLoop);
    if (this.phaseLoop)   clearInterval(this.phaseLoop);
    if (this.subTickLoop) clearInterval(this.subTickLoop);
  }

  // ── Infection mode ────────────────────────────────────────────────────────
  //
  // Phase 0 = lobby (30s): reset everyone to survivor, full HP.
  // Phase 1 = round (240s): pick ~1/8 as patient zero, set to infected.
  //          attackPlayer handler converts survivor → infected on hit.
  //          Win check ticks every 2s.
  // Phase 2 = end (15s): announce winner, prep reset.
  private handleInfectionPhase(next: number) {
    if (next === 0) {
      // Lobby — reset all roles, scoreboard.
      this.state.players.forEach(p => {
        p.role = "";
        p.health = 20; p.alive = true;
        p.score = 0;
      });
      this.broadcast("chat", { name: "Server", text: "Infection: lobby — round starts in 30s. Stay near the safe zone!" });
    } else if (next === 1) {
      // Pick patient zero(s). ~1/8 of joined players, min 1, max N-1.
      const ids = Array.from(this.state.players.keys());
      if (ids.length === 0) return;
      // Shuffle.
      for (let i = ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ids[i], ids[j]] = [ids[j], ids[i]];
      }
      const numInfected = Math.max(1, Math.min(ids.length - 1, Math.ceil(ids.length / 8)));
      ids.forEach((id, idx) => {
        const p = this.state.players.get(id)!;
        p.role = idx < numInfected ? "infected" : "survivor";
        p.health = 20; p.alive = true;
      });
      this.broadcast("chat", { name: "Server", text: `🧟 The infection begins! ${numInfected} player(s) are infected. Survivors — run!` });
      // Win-check tick every 2s. Ends the phase early when survivors hit 0.
      this.subTickLoop = setInterval(() => {
        let survivors = 0, infected = 0;
        this.state.players.forEach(p => {
          if (p.role === "survivor") survivors++;
          else if (p.role === "infected") infected++;
        });
        if (survivors === 0 && infected > 0) {
          // Force-advance phase by setting phaseEndsAt to "now".
          this.state.phaseEndsAt = Math.floor(Date.now() / 1000);
          this.broadcast("chat", { name: "Server", text: "🧟 Infected win — all survivors converted!" });
        }
      }, 2000);
    } else if (next === 2) {
      // End — announce survivors who made it.
      let survivors = 0;
      this.state.players.forEach(p => { if (p.role === "survivor") survivors++; });
      if (survivors > 0) {
        this.broadcast("chat", { name: "Server", text: `🛡️ Survivors win! ${survivors} made it out alive.` });
      }
    }
  }

  // ── Squid Games mode ──────────────────────────────────────────────────────
  //
  // Phase 0 = lobby (10s)
  // Phase 1 = Red Light Green Light (60s) — server flips doll watching state
  //           every 3-7s. During red, players who move are eliminated.
  // Phase 2 = Honeycomb (60s) — each player picks a shape 1-3 via msg.
  //           At end, server reveals 1 safe shape; others eliminated.
  // Phase 3 = Tug of War (60s) — players split into 2 teams; each click on
  //           "tugPull" adds 1 to their team's score. Losing team eliminated.
  // Phase 4 = Marbles (60s) — pair players, each guesses 1-10; server picks.
  //           Loser of each pair eliminated.
  // Phase 5 = Glass Bridge (60s) — 6 steps, each "L" or "R" safe (random).
  //           Players pick. Wrong picks eliminated. Last to survive wins.
  private handleSquidGamesPhase(next: number) {
    if (next === 0) {
      // Lobby — reset everyone to alive.
      this.state.players.forEach(p => {
        p.role = "alive";
        p.health = 20; p.alive = true;
        p.score = 0;
      });
      this.broadcast("chat", { name: "Server", text: "🦑 Squid Games: 5 minigames, last alive wins. Lobby — 10s." });
    } else if (next === 1) {
      // ── Red Light Green Light ──
      this.broadcast("chat", { name: "Server", text: "🟢 RED LIGHT GREEN LIGHT — move only when the doll is sleeping!" });
      this.state.subState = "green";
      this.scheduleNextRlglFlip();
      this.subTickLoop = setInterval(() => this.tickRlgl(), 250);
    } else if (next === 2) {
      // ── Honeycomb ──
      this.honeycombPicks.clear();
      this.broadcast("chat", { name: "Server", text: "🍯 HONEYCOMB — pick your shape (1, 2, or 3) by pressing the matching number key! Wrong shape = eliminated." });
      this.state.subState = "picking";
      // After 50s, lock in. Then reveal safe shape.
      setTimeout(() => {
        if (this.state.modePhase !== 2) return;
        const safe = 1 + Math.floor(Math.random() * 3);
        this.state.subState = String(safe);
        this.broadcast("chat", { name: "Server", text: `🍯 Safe shape: ${safe}!` });
        // Eliminate anyone whose pick != safe.
        this.state.players.forEach((p, id) => {
          if (p.role !== "alive") return;
          const pick = this.honeycombPicks.get(id);
          if (pick !== safe) this.eliminate(id, "wrong shape");
        });
      }, 50_000);
    } else if (next === 3) {
      // ── Tug of War ──
      this.tugTeams.clear();
      this.tugScores = [0, 0];
      // Assign teams (alive players only) alternating A/B for fairness.
      const alive = Array.from(this.state.players.entries()).filter(([_, p]) => p.role === "alive");
      alive.forEach(([id], idx) => this.tugTeams.set(id, (idx % 2) as 0 | 1));
      this.state.subState = "fight";
      this.broadcast("chat", { name: "Server", text: "🪢 TUG OF WAR — left-click as fast as you can! Losing team = eliminated." });
      // At end of phase, tally.
      setTimeout(() => {
        if (this.state.modePhase !== 3) return;
        const losingTeam = this.tugScores[0] < this.tugScores[1] ? 0 : 1;
        this.state.players.forEach((p, id) => {
          if (p.role !== "alive") return;
          if ((this.tugTeams.get(id) ?? -1) === losingTeam) {
            this.eliminate(id, "tug-of-war loss");
          }
        });
        this.broadcast("chat", { name: "Server", text: `🪢 Team ${losingTeam === 0 ? "A" : "B"} lost! Scores ${this.tugScores[0]} vs ${this.tugScores[1]}.` });
      }, 55_000);
    } else if (next === 4) {
      // ── Marbles ──
      this.marblePairs = [];
      this.marbleGuesses.clear();
      const alive = Array.from(this.state.players.keys()).filter(id => this.state.players.get(id)?.role === "alive");
      // Shuffle then pair.
      for (let i = alive.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alive[i], alive[j]] = [alive[j], alive[i]];
      }
      for (let i = 0; i + 1 < alive.length; i += 2) this.marblePairs.push([alive[i], alive[i + 1]]);
      this.state.subState = "guess";
      this.broadcast("chat", { name: "Server", text: "🔵 MARBLES — guess a number 1-10 (press the matching key). Closer to target survives. Unpaired players get a free pass." });
      setTimeout(() => {
        if (this.state.modePhase !== 4) return;
        const target = 1 + Math.floor(Math.random() * 10);
        this.broadcast("chat", { name: "Server", text: `🔵 Target was ${target}.` });
        for (const [a, b] of this.marblePairs) {
          const ga = this.marbleGuesses.get(a) ?? 0;
          const gb = this.marbleGuesses.get(b) ?? 0;
          const da = Math.abs(ga - target), db = Math.abs(gb - target);
          const loser = da > db ? a : (db > da ? b : (Math.random() < 0.5 ? a : b));
          this.eliminate(loser, "marbles loss");
        }
      }, 55_000);
    } else if (next === 5) {
      // ── Glass Bridge ──
      this.glassSafe = [];
      this.glassStep = 0;
      this.glassPicks.clear();
      for (let i = 0; i < 6; i++) this.glassSafe.push(Math.random() < 0.5 ? "L" : "R");
      this.state.subState = `step:0`;
      this.broadcast("chat", { name: "Server", text: "🌉 GLASS BRIDGE — 6 steps. Pick LEFT or RIGHT (keys L/R). Wrong panel = fall." });
      // One step every 8s; final step at +48s. Last to survive wins.
      const stepInterval = setInterval(() => {
        const safe = this.glassSafe[this.glassStep];
        // Eliminate anyone whose pick differs.
        this.state.players.forEach((p, id) => {
          if (p.role !== "alive") return;
          const pick = this.glassPicks.get(id);
          if (pick !== safe) this.eliminate(id, `wrong panel on step ${this.glassStep + 1}`);
        });
        this.broadcast("chat", { name: "Server", text: `🌉 Step ${this.glassStep + 1}: ${safe} was safe.` });
        this.glassPicks.clear();
        this.glassStep++;
        this.state.subState = `step:${this.glassStep}`;
        if (this.glassStep >= this.glassSafe.length) {
          clearInterval(stepInterval);
          // Declare winner (first surviving player, or chat if multiple).
          this.declareSquidWinner();
        }
      }, 8000);
      this.subTickLoop = stepInterval;
    }
  }

  private scheduleNextRlglFlip() {
    // Random 3-7s in current state before flipping.
    const dur = 3000 + Math.floor(Math.random() * 4000);
    this.state.subStateEndsAt = Math.floor((Date.now() + dur) / 1000);
  }

  private tickRlgl() {
    if (Math.floor(Date.now() / 1000) >= this.state.subStateEndsAt) {
      // Flip state.
      if (this.state.subState === "green") {
        // Going RED — snapshot every alive player's position.
        this.rlglFrozenAt.clear();
        this.state.players.forEach((p, id) => {
          if (p.role !== "alive") return;
          this.rlglFrozenAt.set(id, { x: p.x, y: p.y, z: p.z });
        });
        this.state.subState = "red";
        this.broadcast("chat", { name: "Server", text: "🔴 RED LIGHT — FREEZE!" });
      } else {
        this.state.subState = "green";
        this.rlglFrozenAt.clear();
        this.broadcast("chat", { name: "Server", text: "🟢 GREEN LIGHT — go!" });
      }
      this.scheduleNextRlglFlip();
    }
    // During RED: eliminate any player whose position drifted > threshold.
    if (this.state.subState === "red") {
      const RLGL_MOVE_THRESH = 0.5;
      this.state.players.forEach((p, id) => {
        if (p.role !== "alive") return;
        const frozen = this.rlglFrozenAt.get(id);
        if (!frozen) return;
        const d = Math.hypot(p.x - frozen.x, p.y - frozen.y, p.z - frozen.z);
        if (d > RLGL_MOVE_THRESH) this.eliminate(id, "moved on red light");
      });
    }
  }

  /** Mark a player as eliminated in a squidgames-style round. They become
   *  spectator-ish (still alive=true so they can walk around but role flips
   *  to "eliminated"). Broadcasts a chat line. */
  private eliminate(playerId: string, reason: string) {
    const p = this.state.players.get(playerId);
    if (!p || p.role !== "alive") return;
    p.role = "eliminated";
    this.broadcast("chat", { name: "Server", text: `❌ ${p.name} eliminated — ${reason}.` });
    this.broadcast("squidEliminated", { id: playerId, reason });
    // If only one player remains alive, declare winner immediately.
    this.declareSquidWinner();
  }

  private declareSquidWinner() {
    if (this.state.mode !== "squidgames") return;
    const aliveIds = Array.from(this.state.players.entries()).filter(([_, p]) => p.role === "alive").map(([id]) => id);
    if (aliveIds.length <= 1) {
      if (aliveIds.length === 1) {
        const winner = this.state.players.get(aliveIds[0])!;
        winner.score = 1;
        this.broadcast("chat", { name: "Server", text: `🏆 ${winner.name} wins Squid Games!` });
      } else {
        this.broadcast("chat", { name: "Server", text: "🏆 Nobody survived. Resetting…" });
      }
      // Force-advance past remaining phases.
      this.state.phaseEndsAt = Math.floor(Date.now() / 1000);
    }
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

      // Find nearest player using a 3D distance, so a mob 20 m below the
      // player doesn't path-find toward them. We also reject candidates with
      // |dy| > 4 — a mob has no way to climb that high in our simplified AI
      // and the old 2D distance check was making them "teleport" toward
      // trees and attack from below.
      let nearestDist  = Infinity;
      let nearestPlayer: PlayerState | null = null;
      this.state.players.forEach(p => {
        if (!p.alive) return;
        const dy = p.y - mob.y;
        if (Math.abs(dy) > 4) return;
        const d = Math.hypot(p.x - mob.x, dy, p.z - mob.z);
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

        // Attack — skip creative and spectator players. 3D distance gate
        // so a mob can't damage a player flying just above it.
        if (nearestDist < 1.8 && Math.abs(nearestPlayer.y - mob.y) < 2 && nearestPlayer.gameMode !== "creative" && nearestPlayer.gameMode !== "spectator" && nearestPlayer.alive) {
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
