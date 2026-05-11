/**
 * Server finder modal. Lists every open `game_room` on the configured
 * Colyseus host so the user can pick one to join. Uses Colyseus' realtime
 * room listing (`enableRealtimeListing()` is on for game_room).
 */
import * as Colyseus from "colyseus.js";
import { resolveServerUrl } from "./Multiplayer";

export interface RoomEntry {
  roomId: string;
  clients: number;
  maxClients: number;
  metadata?: any;
}

export async function listRooms(serverUrl: string): Promise<RoomEntry[]> {
  try {
    const client = new Colyseus.Client(resolveServerUrl(serverUrl));
    const list = await client.getAvailableRooms("game_room");
    return list.map((r: any) => ({
      roomId: r.roomId,
      clients: r.clients ?? 0,
      maxClients: r.maxClients ?? 64,
      metadata: r.metadata ?? null,
    }));
  } catch (e) {
    console.warn("[ServerFinder] listRooms failed", e);
    return [];
  }
}

export class ServerFinder {
  open = false;
  private panel: HTMLElement;
  private rows: HTMLElement;
  private search: HTMLInputElement;
  private modeFilter: HTMLSelectElement;
  private getServer: () => string;
  /** Called with the picked roomId + its mode metadata. */
  onJoin?: (roomId: string, mode: string | null) => void;
  private cache: RoomEntry[] = [];

  constructor(getServer: () => string) {
    this.getServer = getServer;
    this.panel = document.getElementById("serverFinder")!;
    this.rows  = document.getElementById("finderRows")!;
    this.search = document.getElementById("finderSearch") as HTMLInputElement;
    this.modeFilter = document.getElementById("finderModeFilter") as HTMLSelectElement;
    document.getElementById("finderClose")?.addEventListener("click", () => this.hide());
    document.getElementById("finderRefresh")?.addEventListener("click", () => this.refresh());
    this.search.addEventListener("input", () => this.render());
    this.modeFilter.addEventListener("change", () => this.render());
  }

  async show() {
    this.open = true;
    this.panel.style.display = "flex";
    await this.refresh();
  }
  hide() {
    this.open = false;
    this.panel.style.display = "none";
  }

  private async refresh() {
    this.rows.innerHTML = `<div style="padding:14px;opacity:.6;font-size:12px;text-align:center;">Loading rooms…</div>`;
    this.cache = await listRooms(this.getServer());
    this.render();
  }

  private render() {
    const q = this.search.value.trim().toLowerCase();
    const modeFilter = this.modeFilter.value.toLowerCase();
    const filtered = this.cache.filter(r => {
      const mode = String(r.metadata?.mode || "").toLowerCase();
      if (modeFilter && mode !== modeFilter) return false;
      if (q && !r.roomId.toLowerCase().includes(q)) return false;
      return true;
    });
    if (filtered.length === 0) {
      this.rows.innerHTML = `<div style="padding:14px;opacity:.6;font-size:12px;text-align:center;">No open rooms${q || modeFilter ? " matching your filters" : ""}.</div>`;
      return;
    }
    this.rows.innerHTML = "";
    for (const r of filtered) {
      const mode = String(r.metadata?.mode || "?");
      const row = document.createElement("div");
      row.className = "finder-row";
      row.innerHTML = `
        <span class="mode">${escapeHtml(mode)}</span>
        <span class="players">${r.clients}/${r.maxClients}</span>
        <span class="roomid">${escapeHtml(r.roomId)}</span>
        <button>Join</button>
      `;
      row.querySelector("button")!.addEventListener("click", () => {
        this.hide();
        this.onJoin?.(r.roomId, r.metadata?.mode ?? null);
      });
      this.rows.appendChild(row);
    }
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"} as any)[c]);
}
