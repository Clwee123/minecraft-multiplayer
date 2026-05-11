/**
 * Colyseus client wrapper for the classic-MC client.
 *
 * Sync rule (see CLAUDE.md): ongoing data (positions, mobs, time-of-day, HP)
 * comes from room.state, not from messages. The reconcile() pass runs every
 * frame and brings the local scene in line with state. Messages are only used
 * for one-shot events (chat, block-edit broadcasts).
 */
import * as Colyseus from "colyseus.js";
import * as THREE from "three";
import { spawnPlayer, buildFallbackPlayer, makeNameTag, PlayerInstance } from "./PlayerModel";
import { Legion } from "./Legion";

export interface RemotePlayer {
  id: string;
  name: string;
  /** Legion display name (defaults to name if Legion data isn't synced). */
  displayName: string;
  /** Legion profile picture URL (empty string if not synced). */
  pfp: string;
  x: number; y: number; z: number;
  rotY: number; rotX: number;
  health: number;
  mesh: THREE.Group;
  targetX: number; targetY: number; targetZ: number;
  targetRotY: number;
  anim: PlayerInstance | null;
  lastPos: THREE.Vector3;
  speed: number;
  nameTag: THREE.Sprite | null;
}

export interface RemoteMob {
  id: string;
  kind: string;
  x: number; y: number; z: number;
  rotY: number;
  health: number;
  mesh: THREE.Group;
  targetX: number; targetY: number; targetZ: number;
  targetRotY: number;
}

type BlockUpdateHandler = (x: number, y: number, z: number, type: number) => void;

export function resolveServerUrl(addr: string): string {
  addr = addr.trim();
  if (addr.includes("://")) return addr;
  const isHttps = location.protocol === "https:";
  let host = addr;
  let port: string | null = null;
  if (host.includes(":")) {
    const i = host.lastIndexOf(":");
    port = host.slice(i + 1);
    host = host.slice(0, i);
  }
  if (isHttps) {
    if (/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
      host = host + ".nip.io";
      port = null;
    }
    return `wss://${host}${port ? ":" + port : ""}`;
  }
  return `ws://${host}${port ? ":" + port : ""}`;
}

export class Multiplayer {
  private client: Colyseus.Client | null = null;
  private room: Colyseus.Room | null = null;
  private remotePlayers: Map<string, RemotePlayer> = new Map();
  private remoteMobs: Map<string, RemoteMob> = new Map();
  private scene: THREE.Scene;
  private sessionId: string = "";
  public playerName: string;
  /** Server-reported world time in ticks (0..24000). Mirrors state.timeOfDay if present. */
  public timeOfDay = 6000;

  onBlockUpdate?: BlockUpdateHandler;
  onChat?: (sender: string, msg: string) => void;
  onConnected?: () => void;
  onDisconnected?: () => void;
  onError?: (err: string) => void;
  onLocalDamage?: (dmg: number) => void;

  constructor(scene: THREE.Scene, playerName: string) {
    this.scene = scene;
    this.playerName = playerName;
  }

  async connect(
    serverUrl: string,
    mode: "survival" | "creative" | "bedwars" | "parkour" | "oneblock" = "survival",
  ): Promise<void> {
    const url = resolveServerUrl(serverUrl);
    console.log("[MP] connecting to", url);
    this.client = new Colyseus.Client(url);

    // Bundle the Legion identity + avatar into the join options. The server
    // populates PlayerState fields so other clients can render our pfp/name.
    const legionPayload = Legion.buildJoinPayload();
    const joinOptions: any = {
      name: legionPayload?.name ?? this.playerName,
      gameMode: mode === "creative" ? "creative" : "survival",
    };
    if (legionPayload?.legion) joinOptions.legion = legionPayload.legion;

    try {
      this.room = await this.client.joinOrCreate("game_room", joinOptions);
      this.sessionId = this.room.sessionId;
      // Tell the Bloxity portal which room we're in so friends can join us.
      Legion.updateRoom(this.room.roomId);

      // ── One-shot events ────────────────────────────────────────────────
      this.room.onMessage("blockUpdate", (msg: any) => {
        if (!msg || !this.onBlockUpdate) return;
        const type = msg.action === "remove" ? 0 : msg.blockType;
        this.onBlockUpdate(msg.x, msg.y, msg.z, type);
      });
      this.room.onMessage("worldState", (msg: any) => {
        if (!msg || !msg.blockChanges || !this.onBlockUpdate) return;
        for (const c of msg.blockChanges) {
          const type = c.action === "remove" ? 0 : c.blockType;
          this.onBlockUpdate(c.x, c.y, c.z, type);
        }
      });
      this.room.onMessage("chat", (msg: any) => {
        if (!msg || !this.onChat) return;
        const sender = msg.sender ?? msg.playerName ?? msg.name ?? msg.from ?? "";
        const text = msg.message ?? msg.text ?? msg.msg ?? "";
        // Filter out junk: empty, the literal string "undefined", or non-strings
        if (text == null || text === "" || text === "undefined") return;
        const cleaned = String(text).trim();
        if (!cleaned || cleaned === "undefined") return;
        this.onChat(String(sender), cleaned);
      });

      // Suppress console spam from legacy message-based mob/death events.
      // (These really belong in schema state — see CLAUDE.md — but we have
      // to ack them so colyseus.js doesn't warn.)
      const noop = () => {};
      this.room.onMessage("mobUpdate", noop);
      this.room.onMessage("playerDied", noop);
      this.room.onMessage("playerDamage", (msg: any) => {
        if (msg && typeof msg.damage === "number") this.onLocalDamage?.(msg.damage);
      });
      this.room.onMessage("playerRespawn", noop);
      this.room.onMessage("mobSpawn", noop);
      this.room.onMessage("mobDeath", noop);
      this.room.onMessage("hunger", noop);
      this.room.onMessage("inventory", noop);
      // Catch-all: stop colyseus from logging warnings about any other unknown message types.
      try {
        (this.room as any).onMessage("*", noop);
      } catch {}

      // ── Schema state listeners (additive — reconcile() also polls) ─────
      try {
        const state: any = this.room.state;
        if (state?.players?.onAdd) {
          state.players.onAdd((p: any, sid: string) => {
            if (sid !== this.sessionId) this.ensureRemotePlayer(sid, p);
          });
        }
        if (state?.players?.onRemove) {
          state.players.onRemove((_p: any, sid: string) => this.removeRemotePlayer(sid));
        }
        if (state?.mobs?.onAdd) {
          state.mobs.onAdd((m: any, mid: string) => this.ensureRemoteMob(mid, m));
        }
        if (state?.mobs?.onRemove) {
          state.mobs.onRemove((_m: any, mid: string) => this.removeRemoteMob(mid));
        }
      } catch (e) {
        console.warn("[MP] schema listener setup failed (will fall back to polling)", e);
      }

      this.room.onLeave(() => this.onDisconnected?.());
      this.room.onError((code: any, msg: any) => {
        console.error("[MP] room error", code, msg);
        this.onError?.(`Room error: ${msg || code}`);
      });

      this.onConnected?.();
    } catch (e: any) {
      console.error("[MP] join failed", e);
      this.onError?.(e?.message ?? String(e));
      throw e;
    }
  }

  isConnected(): boolean { return this.room !== null; }
  /** Remote players only (does NOT include the local session). */
  getRemotePlayers(): RemotePlayer[] { return [...this.remotePlayers.values()]; }
  getRemoteMobs(): RemoteMob[] { return [...this.remoteMobs.values()]; }

  sendMove(x: number, y: number, z: number, rotY: number, rotX: number) {
    if (!this.room) return;
    this.room.send("move", { x, y, z, rotY, rotX, onGround: true });
  }

  sendBlockUpdate(x: number, y: number, z: number, type: number) {
    if (!this.room) return;
    if (type === 0) this.room.send("removeBlock", { x, y, z });
    else            this.room.send("addBlock",    { x, y, z, blockType: type });
  }

  sendChat(message: string) {
    if (!this.room) return;
    const text = String(message ?? "").trim();
    if (!text) return;
    // Send under several keys so any server schema flavor will pick it up.
    this.room.send("chat", { message: text, text, msg: text, sender: this.playerName });
  }

  sendSleep() { this.room?.send("sleep", {}); }
  sendHit(targetId: string) { this.room?.send("hit", { id: targetId }); }
  /** Push the locally-equipped avatar to the server (called when Legion fires onAvatarChanged). */
  sendAvatarUpdate(avatar: any, extra: { displayName?: string; pfp?: string } = {}) {
    if (!this.room) return;
    this.room.send("updateAvatar", { ...avatar, ...extra });
  }
  getRoomId(): string | null { return this.room?.roomId ?? null; }

  private ensureRemotePlayer(sessionId: string, player: any) {
    if (this.remotePlayers.has(sessionId)) return;
    let group: THREE.Group;
    let anim: PlayerInstance | null = spawnPlayer();
    if (anim) group = anim.root;
    else      group = buildFallbackPlayer();

    const px = Number.isFinite(player?.x) ? player.x : 0;
    const py = Number.isFinite(player?.y) ? player.y : 64;
    const pz = Number.isFinite(player?.z) ? player.z : 0;
    group.position.set(px, py, pz);
    this.scene.add(group);

    const userName = String(player?.name || "Player");
    const displayName = String(player?.displayName || userName);
    const pfp = String(player?.pfp || "");
    const tag = makeNameTag(displayName, pfp);
    tag.position.set(0, 2.2, 0);
    group.add(tag);

    this.remotePlayers.set(sessionId, {
      id: sessionId,
      name: userName,
      displayName,
      pfp,
      x: px, y: py, z: pz,
      rotY: player?.rotY ?? 0, rotX: player?.rotX ?? 0,
      health: player?.health ?? 20,
      targetX: px, targetY: py, targetZ: pz,
      targetRotY: player?.rotY ?? 0,
      mesh: group,
      anim,
      lastPos: new THREE.Vector3(px, py, pz),
      speed: 0,
      nameTag: tag,
    });
  }

  /** Replace a remote player's nametag (e.g. on avatar change). */
  private refreshRemoteTag(rp: RemotePlayer) {
    if (rp.nameTag) {
      rp.mesh.remove(rp.nameTag);
      const m = rp.nameTag.material as THREE.SpriteMaterial;
      if (m.map) m.map.dispose();
      m.dispose();
    }
    const tag = makeNameTag(rp.displayName || rp.name, rp.pfp);
    tag.position.set(0, 2.2, 0);
    rp.mesh.add(tag);
    rp.nameTag = tag;
  }

  private removeRemotePlayer(sessionId: string) {
    const rp = this.remotePlayers.get(sessionId);
    if (!rp) return;
    this.scene.remove(rp.mesh);
    rp.mesh.traverse((o: any) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach((m: any) => m.dispose());
        else o.material.dispose();
      }
    });
    this.remotePlayers.delete(sessionId);
  }

  private ensureRemoteMob(id: string, mob: any) {
    if (this.remoteMobs.has(id)) return;
    const kind = String(mob?.type ?? mob?.kind ?? "zombie").toLowerCase();
    const group = buildSimpleMob(kind);
    const mx = Number.isFinite(mob?.x) ? mob.x : 0;
    const my = Number.isFinite(mob?.y) ? mob.y : 64;
    const mz = Number.isFinite(mob?.z) ? mob.z : 0;
    group.position.set(mx, my, mz);
    this.scene.add(group);
    this.remoteMobs.set(id, {
      id, kind,
      x: mx, y: my, z: mz, rotY: mob?.rotY ?? 0,
      health: mob?.health ?? 20,
      mesh: group,
      targetX: mx, targetY: my, targetZ: mz, targetRotY: mob?.rotY ?? 0,
    });
  }

  private removeRemoteMob(id: string) {
    const m = this.remoteMobs.get(id);
    if (!m) return;
    this.scene.remove(m.mesh);
    m.mesh.traverse((o: any) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach((mm: any) => mm.dispose());
        else o.material.dispose();
      }
    });
    this.remoteMobs.delete(id);
  }

  /**
   * Pull authoritative state from `room.state` each frame and reconcile.
   * This is the resilient path — works even if Colyseus schema callbacks
   * never fire (server version skew, etc.).
   */
  private reconcileFromState() {
    if (!this.room) return;
    const state: any = this.room.state;
    if (!state) return;
    // Time of day
    if (typeof state.timeOfDay === "number")      this.timeOfDay = state.timeOfDay;
    else if (typeof state.time === "number")      this.timeOfDay = state.time;
    else if (typeof state.dayTime === "number")   this.timeOfDay = state.dayTime;

    // Players
    if (state.players) {
      const seen = new Set<string>();
      const iterate = (cb: (k: string, v: any) => void) => {
        if (typeof state.players.forEach === "function") state.players.forEach(cb);
        else for (const k in state.players) cb(k, state.players[k]);
      };
      iterate((sid: string, p: any) => {
        if (sid === this.sessionId) return;
        if (!p) return;
        seen.add(sid);
        if (!this.remotePlayers.has(sid)) this.ensureRemotePlayer(sid, p);
        const rp = this.remotePlayers.get(sid)!;
        if (Number.isFinite(p.x)) rp.targetX = p.x;
        if (Number.isFinite(p.y)) rp.targetY = p.y;
        if (Number.isFinite(p.z)) rp.targetZ = p.z;
        if (Number.isFinite(p.rotY)) rp.targetRotY = p.rotY;
        if (typeof p.health === "number") rp.health = p.health;
        if (p.name && p.name !== rp.name) rp.name = String(p.name);
        // Avatar fields — rebuild the nametag if displayName or pfp changed.
        const newDisplay = String(p.displayName || rp.name);
        const newPfp = String(p.pfp || "");
        if (newDisplay !== rp.displayName || newPfp !== rp.pfp) {
          rp.displayName = newDisplay;
          rp.pfp = newPfp;
          this.refreshRemoteTag(rp);
        }
      });
      // Remove vanished players
      for (const sid of [...this.remotePlayers.keys()]) {
        if (!seen.has(sid)) this.removeRemotePlayer(sid);
      }
    }

    // Mobs
    if (state.mobs) {
      const seen = new Set<string>();
      const iterate = (cb: (k: string, v: any) => void) => {
        if (typeof state.mobs.forEach === "function") state.mobs.forEach(cb);
        else for (const k in state.mobs) cb(k, state.mobs[k]);
      };
      iterate((mid: string, m: any) => {
        if (!m) return;
        seen.add(mid);
        if (!this.remoteMobs.has(mid)) this.ensureRemoteMob(mid, m);
        const rm = this.remoteMobs.get(mid)!;
        if (Number.isFinite(m.x)) rm.targetX = m.x;
        if (Number.isFinite(m.y)) rm.targetY = m.y;
        if (Number.isFinite(m.z)) rm.targetZ = m.z;
        if (Number.isFinite(m.rotY)) rm.targetRotY = m.rotY;
        if (typeof m.health === "number") rm.health = m.health;
      });
      for (const mid of [...this.remoteMobs.keys()]) {
        if (!seen.has(mid)) this.removeRemoteMob(mid);
      }
    }
  }

  update(dt: number, cameraPos?: THREE.Vector3) {
    this.reconcileFromState();
    const k = Math.min(1, dt * 12);

    for (const rp of this.remotePlayers.values()) {
      rp.x += (rp.targetX - rp.x) * k;
      rp.y += (rp.targetY - rp.y) * k;
      rp.z += (rp.targetZ - rp.z) * k;
      rp.rotY += (rp.targetRotY - rp.rotY) * k;

      const dx = rp.x - rp.lastPos.x;
      const dz = rp.z - rp.lastPos.z;
      const instSpeed = dt > 0 ? Math.sqrt(dx * dx + dz * dz) / dt : 0;
      rp.speed = rp.speed * 0.85 + instSpeed * 0.15;
      rp.lastPos.set(rp.x, rp.y, rp.z);

      rp.mesh.position.set(rp.x, rp.y, rp.z);
      rp.mesh.rotation.y = rp.rotY + Math.PI;

      if (rp.anim) {
        rp.anim.mixer?.update(dt);
        const moving = rp.speed > 0.5;
        if (rp.anim.walkAction && rp.anim.idleAction) {
          const tw = moving ? 1 : 0;
          const ti = moving ? 0 : 1;
          rp.anim.walkAction.weight += (tw - rp.anim.walkAction.weight) * Math.min(1, dt * 8);
          rp.anim.idleAction.weight += (ti - rp.anim.idleAction.weight) * Math.min(1, dt * 8);
        }
      } else {
        // Box-humanoid leg swing fallback
        const t = performance.now() * 0.008;
        const moving = rp.speed > 0.5;
        const amp = moving ? 0.6 : 0;
        const legs = rp.mesh.children.filter((c) => c.name === "leg");
        if (legs.length >= 2) {
          legs[0].rotation.x = Math.sin(t) * amp;
          legs[1].rotation.x = -Math.sin(t) * amp;
        }
      }
    }

    for (const rm of this.remoteMobs.values()) {
      rm.x += (rm.targetX - rm.x) * k;
      rm.y += (rm.targetY - rm.y) * k;
      rm.z += (rm.targetZ - rm.z) * k;
      rm.rotY += (rm.targetRotY - rm.rotY) * k;
      rm.mesh.position.set(rm.x, rm.y, rm.z);
      rm.mesh.rotation.y = rm.rotY;
    }
  }
}

/** Build a simple box-based mob mesh (zombie/skeleton/cow stub). */
function buildSimpleMob(kind: string): THREE.Group {
  const g = new THREE.Group();
  let bodyColor = 0x4a7c4a;
  let headColor = 0x6cb86c;
  if (kind === "skeleton") { bodyColor = 0xdddddd; headColor = 0xeeeeee; }
  if (kind === "cow")      { bodyColor = 0x5a3a1a; headColor = 0x7a5a3a; }
  if (kind === "creeper")  { bodyColor = 0x55aa44; headColor = 0x55aa44; }
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshLambertMaterial({ color: headColor }));
  head.position.y = 1.5; g.add(head);
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.9, 0.3),
    new THREE.MeshLambertMaterial({ color: bodyColor }));
  body.position.y = 0.8; g.add(body);
  const legL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.85, 0.25),
    new THREE.MeshLambertMaterial({ color: 0x2a2a1a }));
  legL.position.set(-0.15, 0.35, 0); legL.name = "leg"; g.add(legL);
  const legR = legL.clone(); legR.name = "leg"; legR.position.x = 0.15; g.add(legR);
  // Nametag
  const tag = makeNameTag(kind);
  tag.position.set(0, 2.2, 0);
  g.add(tag);
  return g;
}
