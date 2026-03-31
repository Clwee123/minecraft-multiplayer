import * as Colyseus from "colyseus.js";
import { World } from "./World";
import { OtherPlayer } from "./OtherPlayer";
import { MobManager } from "./MobManager";
import * as THREE from "three";

export interface MPCallbacks {
  onStatusChange:  (s: "connecting" | "connected" | "disconnected") => void;
  onChat:          (name: string, text: string, system?: boolean) => void;
  onPlayerCount:   (n: number) => void;
  onPlayerDamage:  (amount: number) => void;
  onPlayerDied:    (name: string) => void;
  onGameModeChange?: (mode: string) => void;
}

export class MultiplayerManager {
  private client:  Colyseus.Client;
  private room:    Colyseus.Room | null = null;
  private players: Map<string, OtherPlayer> = new Map();
  private scene:   THREE.Scene;
  private world:   World;
  private cb:      MPCallbacks;
  private mobs:    MobManager | null = null;

  private moveInterval: ReturnType<typeof setInterval> | null = null;
  private getLocalState?: () => {
    x: number; y: number; z: number;
    rotY: number; rotX: number; onGround: boolean;
  };

  constructor(scene: THREE.Scene, world: World, cb: MPCallbacks, serverAddr: string) {
    this.scene  = scene;
    this.world  = world;
    this.cb     = cb;
    // Use wss:// when page is served over HTTPS (required for mixed content policy)
    // Use ws:// only for localhost dev
    const isLocalhost = serverAddr.startsWith("localhost") || serverAddr.startsWith("127.");
    const protocol = (window.location.protocol === "https:" && !isLocalhost) ? "wss" : "ws";
    this.client = new Colyseus.Client(`${protocol}://${serverAddr}`);
  }

  setMobManager(m: MobManager) { this.mobs = m; }

  async join(playerName: string) {
    this.cb.onStatusChange("connecting");
    try {
      this.room = await this.client.joinOrCreate<any>("game_room", { name: playerName });
      this.cb.onStatusChange("connected");
      this.setupHandlers();
      this.startSendPosition();
    } catch (err) {
      console.error("[MP] Connection failed:", err);
      this.cb.onStatusChange("disconnected");
    }
  }

  private setupHandlers() {
    if (!this.room) return;

    // World state for late-joiners
    this.room.onMessage("worldState", (data: any) => {
      for (const bc of data.blockChanges) {
        if (bc.action === "add") this.world.placeBlock(bc.x, bc.y, bc.z, bc.blockType);
        else                     this.world.removeBlock(bc.x, bc.y, bc.z);
      }
    });

    // Real-time block updates
    this.room.onMessage("blockUpdate", (data: any) => {
      if (data.action === "add") this.world.placeBlock(data.x, data.y, data.z, data.blockType);
      else                       this.world.removeBlock(data.x, data.y, data.z);
    });

    // Chat
    this.room.onMessage("chat", (data: any) => {
      this.cb.onChat(data.name, data.text, data.name === "Server");
    });

    // Mob snapshots (initial load)
    this.room.onMessage("mobSnapshot", (data: any[]) => {
      this.mobs?.syncFromServer(data);
    });

    // Mob position updates
    this.room.onMessage("mobUpdate", (data: any[]) => {
      this.mobs?.syncFromServer(data);
    });

    // Mob hit feedback
    this.room.onMessage("mobHit", (data: any) => {
      this.mobs?.onMobHit(data.mobId, data.health);
    });

    // Mob killed
    this.room.onMessage("mobKilled", (data: any) => {
      this.mobs?.onMobHit(data.mobId, 0);
    });

    // Player died
    this.room.onMessage("playerDied", (data: any) => {
      this.cb.onPlayerDied(data.name);
    });

    // Remote players via schema
    this.room.state.players.onAdd((player: any, sessionId: string) => {
      if (sessionId === this.room!.sessionId) return;
      const other = new OtherPlayer(this.scene, player.name || "Player");
      other.targetPos.set(player.x, player.y, player.z);
      other.targetRotY = player.rotY;
      other.targetRotX = player.rotX;
      other.health     = player.health;
      this.players.set(sessionId, other);
      this.updateCount();

      player.onChange(() => {
        const o = this.players.get(sessionId);
        if (!o) return;
        o.targetPos.set(player.x, player.y, player.z);
        o.targetRotY = player.rotY;
        o.targetRotX = player.rotX;
        if (o.health !== player.health) {
          o.setHealth(player.health);
          if (player.health <= 0 && !o["dead"]) o.die();
        }
      });
    });

    this.room.state.players.onRemove((_p: any, sessionId: string) => {
      const o = this.players.get(sessionId);
      if (o) { o.dispose(this.scene); this.players.delete(sessionId); }
      this.updateCount();
    });

    this.room.onLeave(() => {
      this.cb.onStatusChange("disconnected");
      this.stopSendPosition();
    });
  }

  // ── Position sending ──────────────────────────────────────────────────────

  private startSendPosition() {
    this.moveInterval = setInterval(() => {
      if (!this.room || !this.getLocalState) return;
      this.room.send("move", this.getLocalState());
    }, 50);
  }

  private stopSendPosition() {
    if (this.moveInterval) { clearInterval(this.moveInterval); this.moveInterval = null; }
  }

  setLocalStateGetter(fn: typeof this.getLocalState) { this.getLocalState = fn; }

  // ── Block & chat actions ──────────────────────────────────────────────────

  sendAddBlock(x: number, y: number, z: number, blockType: number) {
    this.room?.send("addBlock", { x, y, z, blockType });
  }

  sendRemoveBlock(x: number, y: number, z: number) {
    this.room?.send("removeBlock", { x, y, z });
  }

  sendChat(text: string) {
    this.room?.send("chat", { text });
  }

  sendGameMode(mode: string) {
    this.room?.send("setGameMode", { mode });
  }

  sendAttackMob(mobId: string, damage: number) {
    this.room?.send("attackMob", { mobId, damage });
  }

  sendRespawn() {
    this.room?.send("playerRespawn");
  }

  // ── Per-frame ─────────────────────────────────────────────────────────────

  updatePlayers(dt: number) {
    this.players.forEach(p => p.update(dt));
  }

  private updateCount() {
    this.cb.onPlayerCount(this.room?.state.players.size ?? 0);
  }

  get sessionId()  { return this.room?.sessionId; }
  get connected()  { return !!this.room; }
}
