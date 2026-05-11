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
import { spawnPlayer, buildFallbackPlayer, makeNameTag, PlayerInstance, attachHeldItem, detachHeldItem, applySkinToCharacter, applyEquippedSet } from "./PlayerModel";
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
  /** Currently-held item id (0 = empty hand). Synced from server state. */
  heldId: number;
  /** Held-item mesh attached to the right-hand bone. */
  heldMesh: THREE.Object3D | null;
  /** Bloxity skin id ("-1"/"" = guest default "0"). */
  skinId: string;
  /** Bone whose world position drives the nametag (Neck1_leaf in our rig). */
  headBone: THREE.Object3D | null;
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
  /** Optional ground-snap callback set by main.ts so mob meshes sit on the
   *  actual terrain surface (the server has no terrain knowledge). Returns
   *  the y of the top solid block at (x, z), or null if not loaded. */
  groundLookup?: (x: number, z: number) => number | null;
  onChat?: (sender: string, msg: string) => void;
  onConnected?: () => void;
  onDisconnected?: () => void;
  onError?: (err: string) => void;
  /** Fired when the server-side health of OUR player drops (e.g. zombie hit us).
   *  Delta is the positive damage amount. */
  onLocalDamage?: (dmg: number) => void;
  /** Fired when WE got hit by another player. byX/Y/Z is the attacker position
   *  so the client can compute a knockback impulse direction. */
  onLocalKnockback?: (byX: number, byY: number, byZ: number) => void;

  /** A remote player started breaking a block. */
  onRemoteBreakStart?: (sid: string, x: number, y: number, z: number) => void;
  /** A remote player's break progress changed (0..1). */
  onRemoteBreakProgress?: (sid: string, x: number, y: number, z: number, progress: number) => void;
  /** A remote player stopped breaking (LMB released or block broken). */
  onRemoteBreakStop?: (sid: string) => void;

  private lastSelfHealth = -1;

  constructor(scene: THREE.Scene, playerName: string) {
    this.scene = scene;
    this.playerName = playerName;
  }

  async connect(
    serverUrl: string,
    mode: "survival" | "creative" | "bedwars" | "parkour" | "oneblock" = "survival",
    /** Optional Bloxity room id (from `?roomId=...`) — when set we joinById
     *  instead of joinOrCreate so friends actually land in the same room. */
    targetRoomId: string | null = null,
  ): Promise<void> {
    const url = resolveServerUrl(serverUrl);
    console.log("[MP] connecting to", url, targetRoomId ? `→ roomId=${targetRoomId}` : "");
    this.client = new Colyseus.Client(url);

    const legionPayload = Legion.buildJoinPayload();
    const joinOptions: any = {
      name: legionPayload?.name ?? this.playerName,
      gameMode: mode === "creative" ? "creative" : "survival",
      mode,
    };
    if (legionPayload?.legion) joinOptions.legion = legionPayload.legion;

    try {
      if (targetRoomId) {
        // Friend-invite path: join the exact room the portal directed us to.
        try {
          this.room = await this.client.joinById(targetRoomId, joinOptions);
        } catch (e) {
          console.warn(`[MP] joinById(${targetRoomId}) failed, falling back to joinOrCreate`, e);
          this.room = await this.client.joinOrCreate("game_room", joinOptions);
        }
      } else {
        this.room = await this.client.joinOrCreate("game_room", joinOptions);
      }
      this.sessionId = this.room.sessionId;
      Legion.updateRoom(this.room.roomId);

      // CRITICAL: wait for state.seed to land before we let main.ts build the
      // world. Otherwise different clients in the same room race the initial
      // state replication and generate terrain from different (random)
      // seeds — the symptom is "we joined the same room but our worlds
      // look totally different".
      await new Promise<void>((resolve) => {
        const ok = () => typeof (this.room?.state as any)?.seed === "number"
                     && ((this.room!.state as any).seed | 0) > 0;
        if (ok()) { resolve(); return; }
        const handler = () => { if (ok()) { try { this.room!.onStateChange.remove(handler); } catch {} resolve(); } };
        try { this.room.onStateChange(handler); } catch {}
        // Hard timeout so we don't block boot forever if the server schema
        // changes shape. main.ts falls back to a random seed in that case.
        setTimeout(resolve, 2500);
      });
      console.log(`[MP] joined room ${this.room.roomId}, seed=${(this.room.state as any)?.seed}`);

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
      // Per-block break animation sync (ephemeral, message-based by design).
      this.room.onMessage("breakStart", (msg: any) => {
        if (msg && msg.from) this.onRemoteBreakStart?.(msg.from, msg.x | 0, msg.y | 0, msg.z | 0);
      });
      this.room.onMessage("breakProgress", (msg: any) => {
        if (msg && msg.from) this.onRemoteBreakProgress?.(msg.from, msg.x | 0, msg.y | 0, msg.z | 0, Number(msg.progress) || 0);
      });
      this.room.onMessage("breakStop", (msg: any) => {
        if (msg && msg.from) this.onRemoteBreakStop?.(msg.from);
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
      this.room.onMessage("playerHit", (msg: any) => {
        if (!msg || msg.id !== this.sessionId) return; // only us
        // health is already replicated through state.players[me].health, so we
        // don't need to apply it here — onLocalDamage handles HUD updates via
        // the state reconciler. We DO need the attacker position for knockback.
        if (typeof msg.byX === "number" && typeof msg.byZ === "number") {
          this.onLocalKnockback?.(msg.byX, msg.byY ?? 0, msg.byZ);
        }
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

  sendMove(x: number, y: number, z: number, rotY: number, rotX: number, heldId = 0) {
    if (!this.room) return;
    this.room.send("move", { x, y, z, rotY, rotX, onGround: true, heldId });
  }

  sendSetHeld(id: number) { this.room?.send("setHeld", { id }); }

  /** PvP — server validates range/health and broadcasts playerHit/playerDied. */
  sendAttackPlayer(targetId: string, damage = 4) {
    this.room?.send("attackPlayer", { targetId, damage });
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

  sendBreakStart(x: number, y: number, z: number)    { this.room?.send("breakStart",    { x, y, z }); }
  sendBreakProgress(x: number, y: number, z: number, progress: number) { this.room?.send("breakProgress", { x, y, z, progress }); }
  sendBreakStop()                                   { this.room?.send("breakStop", {}); }

  sendSleep() { this.room?.send("sleep", {}); }
  /** Damage a mob — server validates that it exists, decrements its health, broadcasts mobHit/mobKilled. */
  sendAttackMob(mobId: string, damage = 5) {
    this.room?.send("attackMob", { mobId, damage });
  }
  sendRespawn() { this.room?.send("playerRespawn", {}); }
  /** Push the locally-equipped avatar to the server (called when Legion fires onAvatarChanged). */
  sendAvatarUpdate(avatar: any, extra: { displayName?: string; pfp?: string } = {}) {
    if (!this.room) return;
    this.room.send("updateAvatar", { ...avatar, ...extra });
  }
  getRoomId(): string | null { return this.room?.roomId ?? null; }
  /** Server-picked world seed (set in onCreate). 0 means "not yet known". */
  getSeed(): number {
    const s = (this.room?.state as any)?.seed;
    return typeof s === "number" ? s : 0;
  }
  /** Replay the room's accumulated block changes into the world via onBlockUpdate.
   *  Called after we create the World (which is created AFTER connect so seed lines up). */
  applyExistingBlockState() {
    const state: any = this.room?.state;
    if (!state?.blockChanges) return;
    state.blockChanges.forEach((c: any) => {
      const type = c.action === "remove" ? 0 : c.blockType;
      this.onBlockUpdate?.(c.x, c.y, c.z, type);
    });
  }

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
    // Fall back to the default Bloxity guest pfp if the user has none — the
    // visible nametag should never be a bare text strip.
    const pfp = String(player?.pfp || "https://static.bloxity.io/img/pfps/0.png?width=128&quality=85");
    const tag = makeNameTag(displayName, pfp);
    // Bone-tracked positioning: SkinnedMesh.boundingBox is the bind-pose
    // bounds which lies about the rendered model height on this rig, so the
    // tag was landing at the player's chest. We instead anchor the sprite
    // in scene space and copy the head bone's world position each frame.
    let headBone: THREE.Object3D | null = null;
    group.traverse((o: any) => {
      if (!headBone && (o.name === "Neck1_leaf" || o.name === "Neck1")) headBone = o;
    });
    if (!headBone) {
      group.traverse((o: any) => {
        if (!headBone && /head|neck/i.test(o.name)) headBone = o;
      });
    }
    this.scene.add(tag);

    // Apply the player's full Bloxity equipped set (skin texture + all body
    // part meshes + hat + back). Defaults to the guest skin (id "0") when
    // there's no equipped data.
    const initialSkin = String(player?.skinId || "0");
    applyEquippedSet(group, {
      skinId:  initialSkin,
      hatId:   player?.hatId,
      backId:  player?.backId,
      headId:  player?.headId,
      armLId:  player?.armLId,
      armRId:  player?.armRId,
      legLId:  player?.legLId,
      legRId:  player?.legRId,
      torsoId: player?.torsoId,
    });

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
      heldId: 0,
      heldMesh: null,
      skinId: initialSkin,
      headBone,
    });
  }

  /** Replace a remote player's nametag (e.g. on avatar change). Sprite stays
   *  in the scene; its world position is set per-frame in update(). */
  private refreshRemoteTag(rp: RemotePlayer) {
    if (rp.nameTag) {
      this.scene.remove(rp.nameTag);
      const m = rp.nameTag.material as THREE.SpriteMaterial;
      if (m.map) m.map.dispose();
      m.dispose();
    }
    const pfp = rp.pfp || "https://static.bloxity.io/img/pfps/0.png?width=128&quality=85";
    const tag = makeNameTag(rp.displayName || rp.name, pfp);
    this.scene.add(tag);
    rp.nameTag = tag;
  }

  private removeRemotePlayer(sessionId: string) {
    const rp = this.remotePlayers.get(sessionId);
    if (!rp) return;
    if (rp.nameTag) {
      this.scene.remove(rp.nameTag);
      const m = rp.nameTag.material as THREE.SpriteMaterial;
      if (m.map) m.map.dispose();
      m.dispose();
    }
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
  /**
   * Simple swing animation for the four shoulder/hip bones of a remote
   * player's GLB rig. Walk phase advances with speed; arms swing opposite
   * to the same-side leg like a normal human gait.
   */
  private _limbPhase = new WeakMap<object, number>();
  private animateLimbs(rp: RemotePlayer, dt: number) {
    const moving = rp.speed > 0.5;
    let phase = this._limbPhase.get(rp) ?? 0;
    if (moving) phase += Math.min(rp.speed, 6) * dt * 1.4;
    else        phase *= 0.92; // ease out so legs return to neutral
    this._limbPhase.set(rp, phase);
    const swing = Math.sin(phase) * (moving ? 0.55 : 0);
    const armR = rp.mesh.getObjectByName("ArmR1");
    const armL = rp.mesh.getObjectByName("ArmL1");
    const legR = rp.mesh.getObjectByName("LegR1");
    const legL = rp.mesh.getObjectByName("LegL1");
    if (armR) armR.rotation.x = -swing;
    if (armL) armL.rotation.x =  swing;
    if (legR) legR.rotation.x =  swing;
    if (legL) legL.rotation.x = -swing;
  }

  private reconcileFromState() {
    if (!this.room) return;
    const state: any = this.room.state;
    if (!state) return;
    // Time of day
    if (typeof state.timeOfDay === "number")      this.timeOfDay = state.timeOfDay;
    else if (typeof state.time === "number")      this.timeOfDay = state.time;
    else if (typeof state.dayTime === "number")   this.timeOfDay = state.dayTime;

    // Own-health reconcile. Server tickMobs damages state.players[sid].health
    // directly; we observe that and surface it as a local damage event so the
    // existing HP HUD + takeDamage flow runs. This is the state-sync path —
    // we never accept playerDamage messages.
    if (state.players && this.sessionId) {
      const me: any = state.players.get ? state.players.get(this.sessionId) : state.players[this.sessionId];
      if (me && typeof me.health === "number") {
        if (this.lastSelfHealth >= 0 && me.health < this.lastSelfHealth) {
          this.onLocalDamage?.(this.lastSelfHealth - me.health);
        }
        this.lastSelfHealth = me.health;
      }
    }

    // Players. MapSchema.forEach is (value, key) — same shape as JS Map.
    // Bug we hit: had the args reversed, so every remote player saw the
    // sessionId as their "player object" and never received position updates.
    if (state.players) {
      const seen = new Set<string>();
      const iterate = (cb: (sid: string, v: any) => void) => {
        if (typeof state.players.forEach === "function") {
          state.players.forEach((v: any, k: string) => cb(k, v));
        } else {
          for (const k in state.players) cb(k, state.players[k]);
        }
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
        // Held item: swap the mesh attached to the player's right hand.
        const newHeld = (typeof p.heldId === "number") ? (p.heldId | 0) : 0;
        if (newHeld !== rp.heldId) {
          rp.heldId = newHeld;
          if (rp.heldMesh) { detachHeldItem(rp.mesh, rp.heldMesh); rp.heldMesh = null; }
          if (newHeld !== 0) rp.heldMesh = attachHeldItem(rp.mesh, newHeld);
        }
        // Avatar: re-apply the whole equipped set if any field changed.
        const newSkin = String(p.skinId || "0");
        const newAvatarKey = `${p.skinId}|${p.hatId}|${p.backId}|${p.headId}|${p.armLId}|${p.armRId}|${p.legLId}|${p.legRId}|${p.torsoId}`;
        if (newAvatarKey !== (rp as any)._avatarKey) {
          (rp as any)._avatarKey = newAvatarKey;
          rp.skinId = newSkin;
          applyEquippedSet(rp.mesh, {
            skinId: newSkin, hatId: p.hatId, backId: p.backId,
            headId: p.headId, armLId: p.armLId, armRId: p.armRId,
            legLId: p.legLId, legRId: p.legRId, torsoId: p.torsoId,
          });
        }
      });
      // Remove vanished players
      for (const sid of [...this.remotePlayers.keys()]) {
        if (!seen.has(sid)) this.removeRemotePlayer(sid);
      }
    }

    // Mobs (same arg-order story as players above)
    if (state.mobs) {
      const seen = new Set<string>();
      const iterate = (cb: (mid: string, v: any) => void) => {
        if (typeof state.mobs.forEach === "function") {
          state.mobs.forEach((v: any, k: string) => cb(k, v));
        } else {
          for (const k in state.mobs) cb(k, state.mobs[k]);
        }
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

      // Nametag follows the head bone's world position each frame so it
      // always lands above the head regardless of skinning / scaling.
      if (rp.nameTag) {
        if (rp.headBone) {
          rp.mesh.updateMatrixWorld(true);
          const wp = new THREE.Vector3();
          rp.headBone.getWorldPosition(wp);
          rp.nameTag.position.set(wp.x, wp.y + 0.4, wp.z);
        } else {
          rp.nameTag.position.set(rp.x, rp.y + 2.0, rp.z);
        }
      }

      if (rp.anim) {
        rp.anim.mixer?.update(dt);
        if (rp.anim.walkAction && rp.anim.idleAction) {
          const moving = rp.speed > 0.5;
          const tw = moving ? 1 : 0;
          const ti = moving ? 0 : 1;
          rp.anim.walkAction.weight += (tw - rp.anim.walkAction.weight) * Math.min(1, dt * 8);
          rp.anim.idleAction.weight += (ti - rp.anim.idleAction.weight) * Math.min(1, dt * 8);
        } else {
          // GLB has no baked animations — drive the arm/leg bones manually
          // so other players don't just glide around in a T-pose.
          this.animateLimbs(rp, dt);
        }
      } else {
        // Box-humanoid leg swing fallback (used when GLB failed to load).
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
      // Ground-snap visually — server doesn't know our terrain height, so
      // its y is a guess. We replace it with the actual surface block above.
      let drawY = rm.y;
      if (this.groundLookup) {
        const gy = this.groundLookup(rm.x, rm.z);
        if (gy != null) drawY = gy;
      }
      rm.mesh.position.set(rm.x, drawY, rm.z);
      rm.mesh.rotation.y = rm.rotY;
    }
  }
}

/**
 * Build a box-based mob mesh keyed to its kind. Each variant has its own
 * proportions + colours. Quadrupeds (cow, sheep, pig) are wider and lower;
 * humanoids (zombie, skeleton, villager) stand 1.8 m. Spider lies flat.
 */
function buildSimpleMob(kind: string): THREE.Group {
  const g = new THREE.Group();
  (g as any).mobKind = kind;
  type Spec = {
    headSize: [number, number, number];
    bodySize: [number, number, number];
    headY: number; bodyY: number;
    headColor: number; bodyColor: number; legColor: number;
    legCount: 2 | 4;
    horizontalBody?: boolean;
  };
  const SPECS: Record<string, Spec> = {
    zombie:        { headSize:[.5,.5,.5], bodySize:[.6,.9,.3], headY:1.5, bodyY:.8, headColor:0x6cb86c, bodyColor:0x4a7c4a, legColor:0x223a78, legCount:2 },
    creeper:       { headSize:[.5,.5,.5], bodySize:[.5,1.0,.5],headY:1.7, bodyY:.9, headColor:0x55aa44, bodyColor:0x55aa44, legColor:0x55aa44, legCount:4 },
    skeleton:      { headSize:[.5,.5,.5], bodySize:[.45,.9,.25],headY:1.5,bodyY:.8, headColor:0xeeeeee, bodyColor:0xcccccc, legColor:0xbcbcbc, legCount:2 },
    witherskeleton:{ headSize:[.5,.5,.5], bodySize:[.55,1.0,.3],headY:1.6,bodyY:.85,headColor:0x222222, bodyColor:0x303030, legColor:0x202020, legCount:2 },
    villager:      { headSize:[.55,.55,.5],bodySize:[.6,.9,.3],headY:1.55,bodyY:.8,headColor:0xa86b3a, bodyColor:0x553a78, legColor:0x6a3f1a, legCount:2 },
    wolf:          { headSize:[.4,.4,.4], bodySize:[.7,.4,.35],headY:0.95,bodyY:0.55,headColor:0xc8c0b0,bodyColor:0xbcb4a4, legColor:0xa49a86, legCount:4, horizontalBody:true },
    cow:           { headSize:[.5,.5,.5], bodySize:[.9,.6,.5], headY:0.95,bodyY:.65, headColor:0x7a5a3a,bodyColor:0x5a3a1a, legColor:0x2a1a0a, legCount:4, horizontalBody:true },
    sheep:         { headSize:[.45,.45,.45],bodySize:[.85,.65,.5],headY:1.05,bodyY:.7,headColor:0xeeddc8,bodyColor:0xf0f0f0, legColor:0x553a23, legCount:4, horizontalBody:true },
    pig:           { headSize:[.5,.5,.5], bodySize:[.9,.55,.5],headY:0.95,bodyY:.6, headColor:0xf2b0a4,bodyColor:0xe896a0, legColor:0xd87680, legCount:4, horizontalBody:true },
    chicken:       { headSize:[.3,.3,.3], bodySize:[.4,.45,.3],headY:0.95,bodyY:.55,headColor:0xffffff,bodyColor:0xffffff, legColor:0xffaa00, legCount:2 },
    spider:        { headSize:[.55,.4,.55],bodySize:[.7,.4,.7],headY:0.55,bodyY:.55,headColor:0x2a0a0a,bodyColor:0x3a1010, legColor:0x202020, legCount:4, horizontalBody:true },
    cat:           { headSize:[.35,.35,.35],bodySize:[.6,.4,.3],headY:0.8,bodyY:.4, headColor:0xd8a868,bodyColor:0xc8985c, legColor:0xb88848, legCount:4, horizontalBody:true },
    phantom:       { headSize:[.45,.3,.4], bodySize:[1.2,.2,.8],headY:1.0,bodyY:.95,headColor:0x4060a0,bodyColor:0x3050a0, legColor:0x3050a0, legCount:2 },
    slime:         { headSize:[.7,.7,.7], bodySize:[.7,.05,.7],headY:0.5, bodyY:.05,headColor:0x66cc66,bodyColor:0x66cc66, legColor:0x66cc66, legCount:2 },
  };
  const s = SPECS[kind] ?? SPECS.zombie;
  const head = new THREE.Mesh(new THREE.BoxGeometry(...s.headSize),
    new THREE.MeshLambertMaterial({ color: s.headColor }));
  head.position.y = s.headY; head.name = "head";
  g.add(head);
  const body = new THREE.Mesh(new THREE.BoxGeometry(...s.bodySize),
    new THREE.MeshLambertMaterial({ color: s.bodyColor }));
  body.position.y = s.bodyY; body.name = "body";
  if (s.horizontalBody) body.rotation.x = 0; // body already wider in X — no rotation needed
  g.add(body);
  // Legs
  const legGeo = new THREE.BoxGeometry(0.22, Math.max(0.25, s.bodyY - 0.05), 0.22);
  const legMat = new THREE.MeshLambertMaterial({ color: s.legColor });
  const halfH  = legGeo.parameters.height / 2;
  const offX   = s.bodySize[0] / 2 - 0.12;
  const offZ   = s.bodySize[2] / 2 - 0.1;
  const legY   = halfH;
  if (s.legCount === 2) {
    const a = new THREE.Mesh(legGeo, legMat); a.position.set(-0.15, legY, 0); a.name = "leg"; g.add(a);
    const b = a.clone(); b.position.x = 0.15; b.name = "leg"; g.add(b);
  } else {
    const positions: Array<[number, number]> = [[-offX, -offZ], [offX, -offZ], [-offX, offZ], [offX, offZ]];
    for (const [px, pz] of positions) {
      const l = new THREE.Mesh(legGeo, legMat);
      l.position.set(px, legY, pz);
      l.name = "leg";
      g.add(l);
    }
  }
  return g;
}
