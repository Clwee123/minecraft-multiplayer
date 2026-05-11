/**
 * Minimal Colyseus client wrapper for the classic-MC client.
 * Syncs player positions and block changes.
 */
import * as Colyseus from "colyseus.js";
import * as THREE from "three";

export interface RemotePlayer {
  id: string;
  name: string;
  x: number; y: number; z: number;
  rotY: number; rotX: number;
  mesh: THREE.Group;
  targetX: number; targetY: number; targetZ: number;
  targetRotY: number;
}

type BlockUpdateHandler = (x: number, y: number, z: number, type: number) => void;

/**
 * Resolve a server address to a websocket URL that won't trip mixed-content blocking.
 * - On HTTPS pages, must use wss://, and plain-IP servers without SSL are blocked.
 * - We map 159.223.140.36 -> wss://159.223.140.36.nip.io (which has a real cert).
 */
export function resolveServerUrl(addr: string): string {
  addr = addr.trim();
  if (addr.includes("://")) return addr; // user fully-specified
  const isHttps = location.protocol === "https:";
  let host = addr;
  let port: string | null = null;
  if (host.includes(":")) {
    const i = host.lastIndexOf(":");
    port = host.slice(i + 1);
    host = host.slice(0, i);
  }
  // If on HTTPS and host is a bare IP/localhost, swap in nip.io (which has SSL on our VPS)
  if (isHttps) {
    if (/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
      host = host + ".nip.io";
      port = null; // SSL is on default 443
    }
    return `wss://${host}${port ? ":" + port : ""}`;
  }
  return `ws://${host}${port ? ":" + port : ""}`;
}

export class Multiplayer {
  private client: Colyseus.Client | null = null;
  private room: Colyseus.Room | null = null;
  private remotePlayers: Map<string, RemotePlayer> = new Map();
  private scene: THREE.Scene;
  private sessionId: string = "";
  public playerName: string;

  onBlockUpdate?: BlockUpdateHandler;
  onChat?: (sender: string, msg: string) => void;
  onConnected?: () => void;
  onDisconnected?: () => void;
  onError?: (err: string) => void;

  constructor(scene: THREE.Scene, playerName: string) {
    this.scene = scene;
    this.playerName = playerName;
  }

  async connect(serverUrl: string, mode: "survival" | "creative" | "bedwars" | "parkour" | "oneblock" = "survival"): Promise<void> {
    const url = resolveServerUrl(serverUrl);
    console.log("[MP] connecting to", url);
    this.client = new Colyseus.Client(url);
    try {
      // The server room name is "game_room" — see server/src/index.ts
      this.room = await this.client.joinOrCreate("game_room", {
        name: this.playerName,
        gameMode: mode === "creative" ? "creative" : "survival",
      });
      this.sessionId = this.room.sessionId;

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
        if (msg && this.onChat) this.onChat(msg.sender || "?", msg.message || "");
      });

      try {
        (this.room.state as any).players.onAdd((player: any, sessionId: string) => {
          if (sessionId === this.sessionId) return;
          this.addRemotePlayer(sessionId, player);
          if (typeof player.onChange === "function") {
            player.onChange(() => this.updateRemotePlayer(sessionId, player));
          }
        });
        (this.room.state as any).players.onRemove((_p: any, sessionId: string) => {
          this.removeRemotePlayer(sessionId);
        });
      } catch (e) {
        console.warn("[MP] schema listener failed", e);
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
    this.room.send("chat", { message });
  }

  private addRemotePlayer(sessionId: string, player: any) {
    const group = new THREE.Group();
    const headGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const head = new THREE.Mesh(headGeo, new THREE.MeshLambertMaterial({ color: 0xf5cba7 }));
    head.position.y = 1.5; group.add(head);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.9, 0.3), new THREE.MeshLambertMaterial({ color: 0x4a7cff }));
    body.position.y = 0.8; group.add(body);
    const legL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.85, 0.25), new THREE.MeshLambertMaterial({ color: 0x2a4a8a }));
    legL.position.set(-0.15, 0.35, 0); group.add(legL);
    const legR = legL.clone(); legR.position.x = 0.15; group.add(legR);

    group.position.set(player.x ?? 0, player.y ?? 50, player.z ?? 0);
    this.scene.add(group);

    this.remotePlayers.set(sessionId, {
      id: sessionId,
      name: player.name || "Player",
      x: player.x, y: player.y, z: player.z,
      rotY: player.rotY, rotX: player.rotX,
      targetX: player.x, targetY: player.y, targetZ: player.z,
      targetRotY: player.rotY,
      mesh: group,
    });
  }

  private updateRemotePlayer(sessionId: string, player: any) {
    const rp = this.remotePlayers.get(sessionId);
    if (!rp) return;
    rp.targetX = player.x; rp.targetY = player.y; rp.targetZ = player.z;
    rp.targetRotY = player.rotY;
  }

  private removeRemotePlayer(sessionId: string) {
    const rp = this.remotePlayers.get(sessionId);
    if (!rp) return;
    this.scene.remove(rp.mesh);
    rp.mesh.traverse((o: any) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
    this.remotePlayers.delete(sessionId);
  }

  update(dt: number) {
    const k = Math.min(1, dt * 12);
    for (const rp of this.remotePlayers.values()) {
      rp.x += (rp.targetX - rp.x) * k;
      rp.y += (rp.targetY - rp.y) * k;
      rp.z += (rp.targetZ - rp.z) * k;
      rp.rotY += (rp.targetRotY - rp.rotY) * k;
      rp.mesh.position.set(rp.x, rp.y, rp.z);
      rp.mesh.rotation.y = rp.rotY;
    }
  }
}
