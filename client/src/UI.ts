import { HOTBAR_BLOCKS, getBlockName, getBlockColor } from "./blocks";
import { GameMode } from "./Player";

export class UI {
  private hotbarEl    = document.getElementById("hotbar")!;
  private topLeftEl   = document.getElementById("topLeft")!;
  private topRightEl  = document.getElementById("topRight")!;
  private connEl      = document.getElementById("connStatus")!;
  private blockNameEl = document.getElementById("blockName")!;
  private chatMsgsEl  = document.getElementById("chatMessages")!;
  private chatInput   = document.getElementById("chatInput") as HTMLInputElement;
  private heartsEl    = document.getElementById("hearts")!;
  private gameModeEl  = document.getElementById("gameModeEl")!;
  private deathScreen = document.getElementById("deathScreen")!;
  private respawnBtn  = document.getElementById("respawnBtn")!;

  private selectedIndex = 0;
  private gameMode: GameMode = "survival";

  onChat?:   (text: string) => void;
  onRespawn?: () => void;

  constructor() {
    this.buildHotbar();
    this.setupChat();
    this.updateHearts(20, 20);

    this.respawnBtn.addEventListener("click", () => {
      this.deathScreen.style.display = "none";
      this.onRespawn?.();
    });
  }

  // ── Hotbar ────────────────────────────────────────────────────────────────

  private buildHotbar() {
    this.hotbarEl.innerHTML = "";
    HOTBAR_BLOCKS.forEach((blockType, i) => {
      const slot  = document.createElement("div");
      slot.className = "hotbar-slot" + (i === 0 ? " active" : "");
      slot.dataset.index = String(i);

      const icon = document.createElement("div");
      icon.className = "slot-icon";
      icon.style.background = "#" + getBlockColor(blockType).toString(16).padStart(6, "0");

      const label = document.createElement("span");
      label.textContent = String(i + 1);

      slot.appendChild(icon);
      slot.appendChild(label);
      this.hotbarEl.appendChild(slot);
      slot.addEventListener("click", () => this.selectSlot(i));
    });

    document.addEventListener("keydown", e => {
      const n = parseInt(e.key);
      if (n >= 1 && n <= 8) this.selectSlot(n - 1);
    });
  }

  selectSlot(index: number): number {
    this.selectedIndex = index;
    document.querySelectorAll(".hotbar-slot").forEach((el, i) => {
      el.classList.toggle("active", i === index);
    });
    const bt = HOTBAR_BLOCKS[index];
    this.blockNameEl.textContent = getBlockName(bt);
    return bt;
  }

  getSelectedBlock(): number { return HOTBAR_BLOCKS[this.selectedIndex]; }

  // ── HUD panels ────────────────────────────────────────────────────────────

  updatePosition(x: number, y: number, z: number) {
    this.topLeftEl.innerHTML =
      `X <b>${x.toFixed(1)}</b><br>` +
      `Y <b>${y.toFixed(1)}</b><br>` +
      `Z <b>${z.toFixed(1)}</b>`;
  }

  updatePlayerCount(n: number) {
    this.topRightEl.innerHTML = `<span style="color:#7cfc00">👥 ${n} online</span>`;
  }

  setConnectionStatus(status: "connecting" | "connected" | "disconnected") {
    this.connEl.className = status;  // matches CSS: #connStatus.connected etc
    const labels = { connecting: "⏳ Connecting…", connected: "✓ Connected", disconnected: "✗ Disconnected" };
    this.connEl.textContent = labels[status];
    this.connEl.style.opacity = "1";
    if (status === "connected") setTimeout(() => { this.connEl.style.opacity = "0"; }, 2500);
  }

  // ── Hearts / health ───────────────────────────────────────────────────────

  updateHearts(hp: number, maxHp: number) {
    this.heartsEl.innerHTML = "";
    const total   = Math.ceil(maxHp / 2);
    const filled  = Math.floor(hp / 2);
    const half    = hp % 2 === 1;

    for (let i = 0; i < total; i++) {
      const h = document.createElement("div");
      h.className = "heart";
      if (i < filled)          h.classList.add("full");
      else if (i === filled && half) h.classList.add("half");
      else                      h.classList.add("empty");
      this.heartsEl.appendChild(h);
    }

    // Flash red overlay when low health
    if (hp <= 6 && hp > 0) {
      document.body.style.boxShadow = `inset 0 0 60px rgba(200,0,0,${0.1 + (6 - hp) * 0.05})`;
    } else {
      document.body.style.boxShadow = "";
    }
  }

  showDeath() {
    this.deathScreen.style.display = "flex";
    document.exitPointerLock();
  }

  // ── Gamemode display ──────────────────────────────────────────────────────

  setGameMode(mode: GameMode) {
    this.gameMode = mode;
    this.gameModeEl.textContent = mode === "creative" ? "✈ Creative" : "⚔ Survival";
    this.gameModeEl.className   = `gamemode-badge ${mode}`;
    // Hearts hidden in creative
    this.heartsEl.style.display = mode === "creative" ? "none" : "flex";
  }

  // ── Chat ──────────────────────────────────────────────────────────────────

  private setupChat() {
    this.chatInput.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const text = this.chatInput.value.trim();
        if (text) this.onChat?.(text);
        this.closeChatInput();
        e.stopPropagation();
      }
      if (e.key === "Escape") this.closeChatInput();
      e.stopPropagation();
    });
  }

  openChatInput() {
    this.chatInput.classList.add("visible");
    this.chatInput.value = "";
    this.chatInput.focus();
  }

  closeChatInput() {
    this.chatInput.classList.remove("visible");
    this.chatInput.blur();
    setTimeout(() => { document.body.requestPointerLock(); }, 50);
  }

  isChatOpen(): boolean { return this.chatInput.classList.contains("visible"); }

  addChatMessage(name: string, text: string, system = false) {
    const msg = document.createElement("div");
    msg.className = "chat-msg" + (system ? " sys-msg" : "");
    if (system) {
      msg.innerHTML = `<span style="color:#ffcc00">${this.esc(text)}</span>`;
    } else {
      msg.innerHTML = `<span class="chat-name">${this.esc(name)}</span>: ${this.esc(text)}`;
    }
    this.chatMsgsEl.appendChild(msg);
    this.chatMsgsEl.scrollTop = this.chatMsgsEl.scrollHeight;
    const msgs = this.chatMsgsEl.querySelectorAll(".chat-msg");
    if (msgs.length > 40) msgs[0].remove();

    // Auto-fade after 8 seconds
    setTimeout(() => { msg.style.opacity = "0"; }, 8000);
  }

  private esc(s: string) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
}
