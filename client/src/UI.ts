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
  private hungerEl    = document.getElementById("hunger")!;
  private timeEl      = document.getElementById("timeDisplay")!;
  private gameModeEl  = document.getElementById("gameModeEl")!;
  private deathScreen = document.getElementById("deathScreen")!;
  private respawnBtn  = document.getElementById("respawnBtn")!;

  private selectedIndex = 0;
  private gameMode: GameMode = "survival";
  private craftingPanel: HTMLElement | null = null;
  private inventoryPanel: HTMLElement | null = null;
  private xpBarEl: HTMLElement | null = null;

  onChat?:   (text: string) => void;
  onRespawn?: () => void;
  onCraft?: (recipe: string) => void;

  constructor() {
    this.buildHotbar();
    this.setupChat();
    this.updateHearts(20, 20);
    this.buildXPBar();

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

  // ── Hunger bar ───────────────────────────────────────────────────────────

  updateHunger(hunger: number, maxHunger: number) {
    this.hungerEl.innerHTML = "";
    const total  = Math.ceil(maxHunger / 2);
    const filled = Math.floor(hunger / 2);
    const half   = hunger % 2 === 1;

    for (let i = 0; i < total; i++) {
      const h = document.createElement("div");
      h.className = "hunger-icon";
      if (i < filled)               h.classList.add("full");
      else if (i === filled && half) h.classList.add("half");
      else                           h.classList.add("empty");
      this.hungerEl.appendChild(h);
    }
  }

  // ── Time display ──────────────────────────────────────────────────────────

  /** dayTime: 0-1 float (0=midnight, 0.25=dawn, 0.5=noon, 0.75=dusk) */
  updateTime(dayTime: number) {
    const hours   = (dayTime * 24 + 6) % 24; // offset so 0.25 = 6AM dawn
    const h       = Math.floor(hours);
    const m       = Math.floor((hours - h) * 60);
    const suffix  = h >= 12 ? "PM" : "AM";
    const h12     = h % 12 || 12;
    const mm      = m.toString().padStart(2, "0");

    let icon = "☀️";
    if (dayTime < 0.2 || dayTime > 0.8) icon = "🌙";
    else if (dayTime < 0.3 || dayTime > 0.7) icon = "🌅";

    this.timeEl.textContent = `${icon} ${h12}:${mm} ${suffix}`;
  }

  // ── Gamemode display ──────────────────────────────────────────────────────

  setGameMode(mode: GameMode) {
    this.gameMode = mode;
    this.gameModeEl.textContent = mode === "creative" ? "✈ Creative" : "⚔ Survival";
    this.gameModeEl.className   = `gamemode-badge ${mode}`;
    // Hearts + hunger hidden in creative
    this.heartsEl.style.display = mode === "creative" ? "none" : "flex";
    this.hungerEl.style.display = mode === "creative" ? "none" : "flex";
  }

  // ── XP Bar ────────────────────────────────────────────────────────────────

  private buildXPBar() {
    this.xpBarEl = document.createElement("div");
    this.xpBarEl.id = "xp-bar";
    this.xpBarEl.style.cssText = `
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      height: 8px;
      background: #000;
      border: 1px solid #555;
      z-index: 100;
    `;
    const barFill = document.createElement("div");
    barFill.id = "xp-bar-fill";
    barFill.style.cssText = `
      width: 0%;
      height: 100%;
      background: #88ff44;
      transition: width 0.1s;
    `;
    this.xpBarEl.appendChild(barFill);

    const levelLabel = document.createElement("div");
    levelLabel.id = "xp-level";
    levelLabel.textContent = "Level 0";
    levelLabel.style.cssText = `
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      color: #88ff44;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-weight: bold;
      z-index: 100;
    `;

    document.body.appendChild(this.xpBarEl);
    document.body.appendChild(levelLabel);
  }

  updateXP(xp: number, level: number) {
    if (!this.xpBarEl) return;
    const xpForLevel = (level + 1) * 10;
    const xpInLevel = xp - level * 10;
    const percent = Math.min(100, (xpInLevel / xpForLevel) * 100);
    const barFill = this.xpBarEl.querySelector("#xp-bar-fill") as HTMLElement;
    if (barFill) barFill.style.width = percent + "%";
    const levelLabel = document.querySelector("#xp-level") as HTMLElement;
    if (levelLabel) levelLabel.textContent = `Level ${level}`;
  }

  // ── Inventory ─────────────────────────────────────────────────────────────

  showInventory(items: number[]) {
    if (this.inventoryPanel) return;

    this.inventoryPanel = document.createElement("div");
    this.inventoryPanel.id = "inventory-panel";
    this.inventoryPanel.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #2a2a2a;
      border: 4px solid #5a5a5a;
      padding: 20px;
      width: 280px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 40px rgba(0,0,0,0.8);
    `;

    const title = document.createElement("h2");
    title.textContent = "Inventory";
    title.style.cssText = "color: white; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;";
    this.inventoryPanel.appendChild(title);

    // 9x4 grid (36 slots)
    const grid = document.createElement("div");
    grid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      gap: 2px;
      margin-bottom: 10px;
      background: #1a1a1a;
      padding: 5px;
    `;

    for (let i = 0; i < 36; i++) {
      const slot = document.createElement("div");
      const itemId = items[i] ?? 0;
      const color = itemId === 0 ? "#333333" : "#" + getBlockColor(itemId).toString(16).padStart(6, "0");
      slot.style.cssText = `
        width: 24px;
        height: 24px;
        background: ${color};
        border: 1px solid #1a1a1a;
        border-radius: 1px;
        cursor: pointer;
        transition: background 0.1s;
      `;
      slot.title = itemId === 0 ? "Empty" : getBlockName(itemId);
      slot.addEventListener("mouseenter", () => {
        slot.style.background = "#" + Math.min(0xffffff, (parseInt(color.slice(1), 16) ?? 0) + 0x222222).toString(16).padStart(6, "0");
      });
      slot.addEventListener("mouseleave", () => {
        slot.style.background = color;
      });
      grid.appendChild(slot);
    }
    this.inventoryPanel.appendChild(grid);

    // Crafting grid (2x2)
    const craftLabel = document.createElement("div");
    craftLabel.textContent = "Crafting";
    craftLabel.style.cssText = "color: white; font-size: 12px; margin: 10px 0 5px 0; font-family: Arial, sans-serif;";
    this.inventoryPanel.appendChild(craftLabel);

    const craftGrid = document.createElement("div");
    craftGrid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      background: #1a1a1a;
      padding: 5px;
      margin-bottom: 10px;
    `;

    for (let i = 0; i < 4; i++) {
      const slot = document.createElement("div");
      slot.style.cssText = `
        width: 30px;
        height: 30px;
        background: #333333;
        border: 1px solid #1a1a1a;
        border-radius: 1px;
        cursor: pointer;
      `;
      slot.title = "Crafting slot";
      craftGrid.appendChild(slot);
    }
    this.inventoryPanel.appendChild(craftGrid);

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.style.cssText = `
      display: block;
      width: 100%;
      padding: 8px;
      background: #5B3333;
      color: white;
      border: 2px solid #3d0000;
      border-radius: 2px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: bold;
      font-size: 12px;
    `;
    closeBtn.textContent = "Close (E)";
    closeBtn.addEventListener("click", () => this.hideInventory());
    this.inventoryPanel.appendChild(closeBtn);

    document.body.appendChild(this.inventoryPanel);
  }

  hideInventory() {
    if (this.inventoryPanel) {
      this.inventoryPanel.remove();
      this.inventoryPanel = null;
    }
  }

  isInventoryOpen(): boolean {
    return this.inventoryPanel !== null;
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

  // ── Crafting ──────────────────────────────────────────────────────────────

  showCraftingUI() {
    if (this.craftingPanel) return;

    this.craftingPanel = document.createElement("div");
    this.craftingPanel.id = "crafting-panel";
    this.craftingPanel.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #8B8B8B;
      border: 2px solid #2B2B2B;
      padding: 20px;
      width: 300px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
    `;

    const title = document.createElement("h2");
    title.textContent = "Crafting Table";
    title.style.cssText = "color: white; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;";
    this.craftingPanel.appendChild(title);

    // Recipe buttons
    const recipes = [
      { name: "Wood Planks (4→2 Sticks)", id: "planks_to_sticks", desc: "4 wood planks → 4 sticks" },
      { name: "Cobblestone (4→Furnace)", id: "cobble_to_furnace", desc: "4 cobblestone → furnace" },
      { name: "Planks (4→Table)", id: "planks_to_table", desc: "4 wood planks → crafting table" },
    ];

    for (const recipe of recipes) {
      const btn = document.createElement("button");
      btn.style.cssText = `
        display: block;
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        background: #5B8C5A;
        color: white;
        border: 2px solid #3D5A3D;
        border-radius: 2px;
        cursor: pointer;
        font-family: Arial, sans-serif;
        font-weight: bold;
      `;
      btn.textContent = recipe.name;
      btn.title = recipe.desc;
      btn.addEventListener("click", () => {
        this.onCraft?.(recipe.id);
        this.hideCraftingUI();
      });
      this.craftingPanel.appendChild(btn);
    }

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.style.cssText = `
      display: block;
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      background: #8B3333;
      color: white;
      border: 2px solid #5B0000;
      border-radius: 2px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: bold;
    `;
    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", () => this.hideCraftingUI());
    this.craftingPanel.appendChild(closeBtn);

    document.body.appendChild(this.craftingPanel);
  }

  hideCraftingUI() {
    if (this.craftingPanel) {
      this.craftingPanel.remove();
      this.craftingPanel = null;
    }
  }

  isCraftingOpen(): boolean {
    return this.craftingPanel !== null;
  }

  // ── Chest UI ──────────────────────────────────────────────────────────────

  private chestPanel: HTMLElement | null = null;
  onChestClose?: () => void;

  showChestUI(slots: number[]) {
    if (this.chestPanel) return;

    this.chestPanel = document.createElement("div");
    this.chestPanel.id = "chest-panel";
    this.chestPanel.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #8B6914;
      border: 4px solid #3d2814;
      padding: 20px;
      width: 310px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 30px rgba(0,0,0,0.7);
    `;

    const title = document.createElement("h2");
    title.textContent = "Chest";
    title.style.cssText = "color: white; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;";
    this.chestPanel.appendChild(title);

    // 3x9 grid of slots
    const grid = document.createElement("div");
    grid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      gap: 2px;
      margin-bottom: 15px;
      background: #2B2B2B;
      padding: 5px;
    `;

    for (let i = 0; i < 27; i++) {
      const slot = document.createElement("div");
      const itemId = slots[i] ?? 0;
      const color = itemId === 0 ? "#444444" : "#" + getBlockColor(itemId).toString(16).padStart(6, "0");
      slot.style.cssText = `
        width: 30px;
        height: 30px;
        background: ${color};
        border: 1px solid #1a1a1a;
        border-radius: 2px;
        cursor: pointer;
        transition: background 0.1s;
      `;
      slot.title = itemId === 0 ? "Empty" : getBlockName(itemId);
      slot.addEventListener("mouseenter", () => {
        slot.style.background = "#" + Math.min(0xffffff, (parseInt(color.slice(1), 16) ?? 0) + 0x222222).toString(16).padStart(6, "0");
      });
      slot.addEventListener("mouseleave", () => {
        slot.style.background = color;
      });
      grid.appendChild(slot);
    }
    this.chestPanel.appendChild(grid);

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.style.cssText = `
      display: block;
      width: 100%;
      padding: 10px;
      background: #5B3333;
      color: white;
      border: 2px solid #3d0000;
      border-radius: 2px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: bold;
    `;
    closeBtn.textContent = "Close Chest";
    closeBtn.addEventListener("click", () => this.hideChestUI());
    this.chestPanel.appendChild(closeBtn);

    document.body.appendChild(this.chestPanel);
  }

  hideChestUI() {
    if (this.chestPanel) {
      this.chestPanel.remove();
      this.chestPanel = null;
      this.onChestClose?.();
    }
  }

  isChestOpen(): boolean {
    return this.chestPanel !== null;
  }

  // ── Kill Feed ──────────────────────────────────────────────────────────────

  private killFeedEl: HTMLElement | null = null;

  addKillFeedEntry(killerName: string, victimName: string) {
    if (!this.killFeedEl) {
      this.killFeedEl = document.createElement("div");
      this.killFeedEl.id = "killfeed";
      this.killFeedEl.style.cssText = `
        position: absolute;
        top: 170px;
        right: 12px;
        width: 220px;
        z-index: 500;
      `;
      document.body.appendChild(this.killFeedEl);
    }

    const entry = document.createElement("div");
    entry.style.cssText = `
      background: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 6px 12px;
      margin-bottom: 4px;
      border-left: 3px solid #ff4444;
      font-family: Arial, sans-serif;
      font-size: 12px;
      animation: fadeOut 5s forwards;
    `;
    entry.innerHTML = `<span style="color: #ffaa00">${this.esc(killerName)}</span> <span style="color: #999">⚔</span> <span style="color: #ffaa00">${this.esc(victimName)}</span>`;

    this.killFeedEl.appendChild(entry);

    // Remove oldest entry if more than 5
    const entries = this.killFeedEl.querySelectorAll("div");
    if (entries.length > 5) {
      entries[0].remove();
    }

    setTimeout(() => entry.remove(), 5000);
  }

  addKillFeedDeath(victimName: string) {
    this.addKillFeedEntry("You", victimName);
  }

  // ── Tab Player List ───────────────────────────────────────────────────────

  private playerListPanel: HTMLElement | null = null;

  showPlayerList(players: { name: string; ping: number }[]) {
    if (this.playerListPanel) return;

    this.playerListPanel = document.createElement("div");
    this.playerListPanel.id = "player-list";
    this.playerListPanel.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      border: 2px solid #555;
      padding: 20px;
      max-width: 400px;
      max-height: 80vh;
      overflow-y: auto;
      z-index: 999;
      border-radius: 4px;
    `;

    const title = document.createElement("h2");
    title.textContent = `Players Online (${players.length})`;
    title.style.cssText = "color: #fff; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;";
    this.playerListPanel.appendChild(title);

    for (const p of players) {
      const entry = document.createElement("div");
      entry.style.cssText = `
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #333;
        color: white;
        font-family: Arial, sans-serif;
      `;
      entry.innerHTML = `
        <span>${this.esc(p.name)}</span>
        <span style="color: #888; font-size: 12px;">${p.ping}ms</span>
      `;
      this.playerListPanel.appendChild(entry);
    }

    document.body.appendChild(this.playerListPanel);
  }

  hidePlayerList() {
    if (this.playerListPanel) {
      this.playerListPanel.remove();
      this.playerListPanel = null;
    }
  }
}
