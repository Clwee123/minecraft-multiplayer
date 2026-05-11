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

  constructor(scene: THREE.Scene, playerName: string) {
    this.scene = scene;
    this.playerName = playerName;
  }

  async connect(serverUrl: string): Promise<void> {
    this.client = new Colyseus.Client(serverUrl);
    try {
      this.room = await this.client.joinOrCreate("game_room", {
        name: this.playerName,
        gameMode: "creative",
      });
      this.sessionId = this.room.sessionId;

      this.room.onMessage("blockUpdate", (msg: any) => {
        if (msg && this.onBlockUpdate) {
          const type = msg.action === "remove" ? 0 : msg.blockType;
          this.onBlockUpdate(msg.x, msg.y, msg.z, type);
        }
      });

      this.room.onMessage("worldState", (msg: any) => {
        // Catch-up: replay all block changes
        if (msg && msg.blockChanges && this.onBlockUpdate) {
          for (const c of msg.blockChanges) {
            const type = c.action === "remove" ? 0 : c.blockType;
            this.onBlockUpdate(c.x, c.y, c.z, type);
          }
        }
      });

      this.room.onMessage("chat", (msg: any) => {
        if (msg && this.onChat) this.onChat(msg.sender || "?", msg.message || "");
      });

      // Player state sync via schema
      (this.room.state as any).players.onAdd((player: any, sessionId: string) => {
        if (sessionId === this.sessionId) return;
        this.addRemotePlayer(sessionId, player);
        player.onChange(() => this.updateRemotePlayer(sessionId, player));
      });
      (this.room.state as any).players.onRemove((_player: any, sessionId: string) => {
        this.removeRemotePlayer(sessionId);
      });

      this.room.onLeave(() => {
        this.onDisconnected?.();
      });

      this.onConnected?.();
    } catch (e) {
      console.error("Failed to join room:", e);
      throw e;
    }
  }

  isConnected(): boolean {
    return this.room !== null;
  }

  sendMove(x: number, y: number, z: number, rotY: number, rotX: number) {
    if (!this.room) return;
    this.room.send("move", { x, y, z, rotY, rotX, onGround: true });
  }

  sendBlockUpdate(x: number, y: number, z: number, type: number) {
    if (!this.room) return;
    if (type === 0) {
      this.room.send("removeBlock", { x, y, z });
    } else {
      this.room.send("addBlock", { x, y, z, blockType: type });
    }
  }

  sendChat(message: string) {
    if (!this.room) return;
    this.room.send("chat", { message });
  }

  private addRemotePlayer(sessionId: string, player: any) {
    const group = new THREE.Group();
    // Simple humanoid: head + body
    const headGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const headMat = new THREE.MeshLambertMaterial({ color: 0xf5cba7 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.5;
    group.add(head);
    const bodyGeo = new THREE.BoxGeometry(0.6, 0.9, 0.3);
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x4a7cff });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.8;
    group.add(body);
    // Legs
    const legGeo = new THREE.BoxGeometry(0.25, 0.85, 0.25);
    const legMat = new THREE.MeshLambertMaterial({ color: 0x2a4a8a });
    const legL = new THREE.Mesh(legGeo, legMat);
    legL.position.set(-0.15, 0.35, 0);
    group.add(legL);
    const legR = new THREE.Mesh(legGeo, legMat);
    legR.position.set(0.15, 0.35, 0);
    group.add(legR);

    group.position.set(player.x, player.y, player.z);
    this.scene.add(group);

    const remote: RemotePlayer = {
      id: sessionId,
      name: player.name || "Player",
      x: player.x, y: player.y, z: player.z,
      rotY: player.rotY, rotX: player.rotX,
      targetX: player.x, targetY: player.y, targetZ: player.z,
      targetRotY: player.rotY,
      mesh: group,
    };
    this.remotePlayers.set(sessionId, remote);
  }

  private updateRemotePlayer(sessionId: string, player: any) {
    const rp = this.remotePlayers.get(sessionId);
    if (!rp) return;
    rp.targetX = player.x;
    rp.targetY = player.y;
    rp.targetZ = player.z;
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

  /** Smoothly lerp remote players toward their target positions */
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

  getPlayers(): RemotePlayer[] {
    return Array.from(this.remotePlayers.values());
  }
}
