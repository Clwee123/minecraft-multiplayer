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
  private debugScreenEl: HTMLElement | null = null;
  private debugVisible = false;

  // Cache last values so we skip DOM work when nothing changed
  private _lastHp = -1;
  private _lastMaxHp = -1;
  private _lastWither = false;
  private _lastHunger = -1;
  private _lastMaxHunger = -1;
  private _lastTimeStr = "";
  private _lastTimeDayTime = -1; // skip updateTime computation when dayTime hasn't changed a minute
  private _lastPosX = NaN;
  private _lastPosY = NaN;
  private _lastPosZ = NaN;
  // Pre-built coordinate child spans (set up once in constructor)
  private _posXEl: HTMLElement | null = null;
  private _posYEl: HTMLElement | null = null;
  private _posZEl: HTMLElement | null = null;

  onChat?:   (text: string) => void;
  onRespawn?: () => void;
  onCraft?: (recipe: string) => void;

  constructor() {
    this.buildHotbar();
    this.setupChat();
    this.updateHearts(20, 20);
    this.buildXPBar();
    // Pre-build coordinate display spans so updatePosition never uses innerHTML
    this._posXEl = document.createElement("span");
    this._posYEl = document.createElement("span");
    this._posZEl = document.createElement("span");
    this.topLeftEl.innerHTML = "";
    const xLine = document.createElement("span"); xLine.textContent = "X "; xLine.appendChild(this._posXEl); this.topLeftEl.appendChild(xLine); this.topLeftEl.appendChild(document.createElement("br"));
    const yLine = document.createElement("span"); yLine.textContent = "Y "; yLine.appendChild(this._posYEl); this.topLeftEl.appendChild(yLine); this.topLeftEl.appendChild(document.createElement("br"));
    const zLine = document.createElement("span"); zLine.textContent = "Z "; zLine.appendChild(this._posZEl); this.topLeftEl.appendChild(zLine);

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
    // Round to 0.1 and skip DOM write if unchanged
    const rx = Math.round(x * 10) / 10;
    const ry = Math.round(y * 10) / 10;
    const rz = Math.round(z * 10) / 10;
    if (rx === this._lastPosX && ry === this._lastPosY && rz === this._lastPosZ) return;
    this._lastPosX = rx; this._lastPosY = ry; this._lastPosZ = rz;
    if (this._posXEl) { this._posXEl.textContent = rx.toFixed(1); }
    if (this._posYEl) { this._posYEl.textContent = ry.toFixed(1); }
    if (this._posZEl) { this._posZEl.textContent = rz.toFixed(1); }
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

  updateHearts(hp: number, maxHp: number, wither = false) {
    if (hp === this._lastHp && maxHp === this._lastMaxHp && wither === this._lastWither) return;
    this._lastHp = hp; this._lastMaxHp = maxHp; this._lastWither = wither;
    this.heartsEl.innerHTML = "";
    const total   = Math.ceil(maxHp / 2);
    const filled  = Math.floor(hp / 2);
    const half    = hp % 2 === 1;

    for (let i = 0; i < total; i++) {
      const h = document.createElement("div");
      h.className = "heart";
      if (wither) {
        // Wave 9: Gray hearts when withered
        h.classList.add("wither");
        if (i < filled)          h.classList.add("full");
        else if (i === filled && half) h.classList.add("half");
        else                      h.classList.add("empty");
      } else {
        if (i < filled)          h.classList.add("full");
        else if (i === filled && half) h.classList.add("half");
        else                      h.classList.add("empty");
      }
      this.heartsEl.appendChild(h);
    }

    // Flash red overlay when low health
    if (hp <= 6 && hp > 0) {
      document.body.style.boxShadow = `inset 0 0 60px rgba(200,0,0,${0.1 + (6 - hp) * 0.05})`;
    } else {
      document.body.style.boxShadow = "";
    }
  }

  showDeath(cause = "You died", x = 0, y = 0, z = 0, xpLevel = 0) {
    this.deathScreen.style.display = "flex";
    document.exitPointerLock();

    // Update death message
    const deathMsg = this.deathScreen.querySelector(".death-message");
    if (deathMsg) {
      deathMsg.textContent = cause;
    }

    // Update coordinates
    const coordsEl = this.deathScreen.querySelector(".death-coords");
    if (coordsEl) {
      coordsEl.textContent = `You died at X=${Math.round(x)}, Y=${Math.round(y)}, Z=${Math.round(z)}`;
    }

    // Update score
    const scoreEl = this.deathScreen.querySelector(".death-score");
    if (scoreEl) {
      scoreEl.textContent = `Level: ${xpLevel}`;
    }
  }

  // ── Hunger bar ───────────────────────────────────────────────────────────

  updateHunger(hunger: number, maxHunger: number) {
    if (hunger === this._lastHunger && maxHunger === this._lastMaxHunger) return;
    this._lastHunger = hunger; this._lastMaxHunger = maxHunger;
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
    // Skip all string building if less than one display-minute has passed (~0.000694 day units)
    if (Math.abs(dayTime - this._lastTimeDayTime) < 0.0007) return;
    this._lastTimeDayTime = dayTime;
    const hours   = (dayTime * 24 + 6) % 24; // offset so 0.25 = 6AM dawn
    const h       = Math.floor(hours);
    const m       = Math.floor((hours - h) * 60);
    const suffix  = h >= 12 ? "PM" : "AM";
    const h12     = h % 12 || 12;
    const mm      = m < 10 ? (m === 0 ? "00" : "0" + m) : "" + m; // avoid padStart alloc

    let icon = "☀️";
    if (dayTime < 0.2 || dayTime > 0.8) icon = "🌙";
    else if (dayTime < 0.3 || dayTime > 0.7) icon = "🌅";

    const s = `${icon} ${h12}:${mm} ${suffix}`;
    if (s === this._lastTimeStr) return;
    this._lastTimeStr = s;
    this.timeEl.textContent = s;
  }

  // ── Gamemode display ──────────────────────────────────────────────────────

  setGameMode(mode: GameMode) {
    this.gameMode = mode;
    this.gameModeEl.textContent =
      mode === "creative"  ? "✈ Creative"  :
      mode === "spectator" ? "👁 Spectator" : "⚔ Survival";
    this.gameModeEl.className   = `gamemode-badge ${mode}`;
    // Hearts + hunger hidden in creative/spectator
    const hideBars = mode === "creative" || mode === "spectator";
    this.heartsEl.style.display = hideBars ? "none" : "flex";
    this.hungerEl.style.display = hideBars ? "none" : "flex";
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
        if (text) {
          if (text.startsWith("/")) {
            this.onChat?.(text);
          } else {
            this.onChat?.(text);
          }
        }
        this.closeChatInput();
        e.stopPropagation();
      }
      if (e.key === "Escape") this.closeChatInput();
      if (e.key === "Tab") {
        e.preventDefault();
        this.tabCompleteChat();
      }
      e.stopPropagation();
    });

    // Allow mouse wheel scroll on chat
    this.chatMsgsEl.addEventListener("wheel", e => {
      e.stopPropagation();
    });
  }

  private tabCompleteChat() {
    const text = this.chatInput.value;
    if (!text.startsWith("/")) return;

    const commands = ["/gamemode", "/time", "/weather", "/help", "/save", "/load", "/tp", "/kill", "/heal", "/feed"];
    const partial = text.slice(1).toLowerCase();
    const matches = commands.filter(c => c.slice(1).startsWith(partial));

    if (matches.length === 1) {
      this.chatInput.value = matches[0];
      if (!matches[0].includes(" ")) {
        this.chatInput.value += " ";
      }
    }
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

    // Get timestamp
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const timestamp = `[${hours}:${minutes}]`;

    if (system) {
      msg.innerHTML = `<span style="color:#888">${timestamp}</span> <span style="color:#ffcc00">${this.esc(text)}</span>`;
    } else {
      const playerColor = this.getPlayerColor(name);
      msg.innerHTML = `<span style="color:#888">${timestamp}</span> <span style="color:${playerColor}"><b>${this.esc(name)}</b></span>: ${this.esc(text)}`;
    }
    this.chatMsgsEl.appendChild(msg);
    this.chatMsgsEl.scrollTop = this.chatMsgsEl.scrollHeight;
    const msgs = this.chatMsgsEl.querySelectorAll(".chat-msg");
    if (msgs.length > 50) msgs[0].remove();

    // Auto-fade after 8 seconds when chat is closed
    const fadeTimer = setInterval(() => {
      if (!this.isChatOpen() && msg.parentElement) {
        msg.style.opacity = "0.3";
        clearInterval(fadeTimer);
      }
    }, 8000);
  }

  private getPlayerColor(name: string): string {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const colors = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff9f40", "#c77dff", "#48cae4", "#f72585"];
    return colors[Math.abs(hash) % colors.length];
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

  // ── Smelting UI ────────────────────────────────────────────────────────────

  private smeltingPanel: HTMLElement | null = null;
  onSmelt?: (inputType: number, fuelType: number) => number | null;

  showSmeltingUI(): void {
    if (this.smeltingPanel) return;

    this.smeltingPanel = document.createElement("div");
    this.smeltingPanel.id = "smelting-panel";
    this.smeltingPanel.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #8B8B8B;
      border: 2px solid #2B2B2B;
      padding: 20px;
      width: 320px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
      font-family: Arial, sans-serif;
    `;

    const title = document.createElement("h2");
    title.textContent = "Furnace";
    title.style.cssText = "color: white; margin: 0 0 15px 0; text-align: center;";
    this.smeltingPanel.appendChild(title);

    // Input and output slots
    const slotsContainer = document.createElement("div");
    slotsContainer.style.cssText = "display: flex; gap: 15px; margin-bottom: 15px; align-items: center;";

    // Input slot
    const inputLabel = document.createElement("div");
    inputLabel.style.cssText = "color: white; font-size: 12px; margin-bottom: 5px;";
    inputLabel.textContent = "Input:";
    const inputSlot = document.createElement("div");
    inputSlot.id = "smelt-input";
    inputSlot.style.cssText = `
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `;
    const inputContainer = document.createElement("div");
    inputContainer.appendChild(inputLabel);
    inputContainer.appendChild(inputSlot);

    // Progress arrow
    const arrow = document.createElement("div");
    arrow.style.cssText = `
      font-size: 20px;
      color: white;
      animation: pulse 1s infinite;
    `;
    arrow.textContent = "→";

    // Output slot
    const outputLabel = document.createElement("div");
    outputLabel.style.cssText = "color: white; font-size: 12px; margin-bottom: 5px;";
    outputLabel.textContent = "Output:";
    const outputSlot = document.createElement("div");
    outputSlot.id = "smelt-output";
    outputSlot.style.cssText = `
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `;
    const outputContainer = document.createElement("div");
    outputContainer.appendChild(outputLabel);
    outputContainer.appendChild(outputSlot);

    slotsContainer.appendChild(inputContainer);
    slotsContainer.appendChild(arrow);
    slotsContainer.appendChild(outputContainer);
    this.smeltingPanel.appendChild(slotsContainer);

    // Fuel slot
    const fuelLabel = document.createElement("div");
    fuelLabel.style.cssText = "color: white; font-size: 12px; margin-bottom: 5px;";
    fuelLabel.textContent = "Fuel:";
    const fuelSlot = document.createElement("div");
    fuelSlot.id = "smelt-fuel";
    fuelSlot.style.cssText = `
      width: 40px;
      height: 40px;
      background: #444444;
      border: 2px solid #1a1a1a;
      border-radius: 2px;
    `;
    this.smeltingPanel.appendChild(fuelLabel);
    this.smeltingPanel.appendChild(fuelSlot);

    // Smelt button
    const smeltBtn = document.createElement("button");
    smeltBtn.style.cssText = `
      display: block;
      width: 100%;
      padding: 10px;
      margin: 15px 0 8px 0;
      background: #5B8C5A;
      color: white;
      border: 2px solid #3D5A3D;
      border-radius: 2px;
      cursor: pointer;
      font-weight: bold;
    `;
    smeltBtn.textContent = "Smelt";
    smeltBtn.addEventListener("click", () => {
      // For now, just call onSmelt with placeholder values
      // In main.ts, actual items will be read from inventory
      const result = this.onSmelt?.(14, 5); // Iron ore + wood as placeholder
      if (result !== null && result !== undefined) {
        this.addChatMessage("", `Smelted item (type ${result})!`, true);
      }
    });
    this.smeltingPanel.appendChild(smeltBtn);

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
      font-weight: bold;
    `;
    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", () => this.hideSmeltingUI());
    this.smeltingPanel.appendChild(closeBtn);

    // Add CSS animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    `;
    document.head.appendChild(style);

    document.body.appendChild(this.smeltingPanel);
  }

  hideSmeltingUI(): void {
    if (this.smeltingPanel) {
      this.smeltingPanel.remove();
      this.smeltingPanel = null;
    }
  }

  isSmeltingOpen(): boolean {
    return this.smeltingPanel !== null;
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

  // ── Enchanting UI ─────────────────────────────────────────────────────────

  private enchantPanel: HTMLElement | null = null;
  onEnchant: ((type: string) => void) | null = null;

  showEnchantUI(level: number): void {
    if (this.enchantPanel) return;

    this.enchantPanel = document.createElement("div");
    this.enchantPanel.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #6633cc;
      border: 4px solid #3d1f7d;
      padding: 20px;
      width: 300px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 30px rgba(102, 51, 204, 0.6);
    `;

    const title = document.createElement("h2");
    title.textContent = "Enchanting Table";
    title.style.cssText = "color: #ffff99; margin: 0 0 10px 0; text-align: center; font-family: Arial, sans-serif; font-size: 16px;";
    this.enchantPanel.appendChild(title);

    const costText = document.createElement("div");
    costText.textContent = `XP Level: ${level}`;
    costText.style.cssText = "color: #cccccc; text-align: center; margin-bottom: 15px; font-size: 12px;";
    this.enchantPanel.appendChild(costText);

    const enchants = [
      { type: "sharpness", name: "Sharpness I", desc: "+2 Damage (Cost: 3 XP)", cost: 3 },
      { type: "protection", name: "Protection I", desc: "+3 Armor (Cost: 3 XP)", cost: 3 },
      { type: "speed", name: "Speed I", desc: "+20% Movement (Cost: 3 XP)", cost: 3 },
    ];

    for (const ench of enchants) {
      const btn = document.createElement("button");
      btn.style.cssText = `
        display: block;
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        background: ${level >= ench.cost ? "#5a4a8a" : "#3a2a5a"};
        color: ${level >= ench.cost ? "#ffff99" : "#888888"};
        border: 2px solid #3d1f7d;
        border-radius: 2px;
        cursor: ${level >= ench.cost ? "pointer" : "not-allowed"};
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-size: 12px;
      `;
      btn.textContent = ench.name;
      btn.title = ench.desc;
      if (level >= ench.cost) {
        btn.addEventListener("click", () => {
          this.onEnchant?.(ench.type);
          this.hideEnchantUI();
        });
      }
      this.enchantPanel.appendChild(btn);
    }

    const closeBtn = document.createElement("button");
    closeBtn.style.cssText = `
      display: block;
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      background: #3a2a4a;
      color: #cccccc;
      border: 2px solid #1d0f3d;
      border-radius: 2px;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: bold;
    `;
    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", () => this.hideEnchantUI());
    this.enchantPanel.appendChild(closeBtn);

    document.body.appendChild(this.enchantPanel);
  }

  hideEnchantUI(): void {
    if (this.enchantPanel) {
      this.enchantPanel.remove();
      this.enchantPanel = null;
    }
  }

  isEnchantOpen(): boolean {
    return this.enchantPanel !== null;
  }

  // ── Trading UI ────────────────────────────────────────────────────────────

  private tradePanel: HTMLElement | null = null;
  onTrade: ((tradeIndex: number) => void) | null = null;

  showTradeUI(trades: Array<{ give: string; giveName: string; receive: string; receiveName: string }>): void {
    if (this.tradePanel) return;

    this.tradePanel = document.createElement("div");
    this.tradePanel.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #8B7355;
      border: 4px solid #4a3a2a;
      padding: 20px;
      width: 320px;
      z-index: 1000;
      border-radius: 4px;
      box-shadow: 0 0 30px rgba(0,0,0,0.7);
    `;

    const title = document.createElement("h2");
    title.textContent = "Villager Trades";
    title.style.cssText = "color: #ffff99; margin: 0 0 15px 0; text-align: center; font-family: Arial, sans-serif;";
    this.tradePanel.appendChild(title);

    for (let i = 0; i < trades.length; i++) {
      const trade = trades[i];
      const btn = document.createElement("button");
      btn.style.cssText = `
        display: block;
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        background: #6a5a4a;
        color: #ffff99;
        border: 2px solid #3a2a1a;
        border-radius: 2px;
        cursor: pointer;
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-size: 12px;
        text-align: left;
      `;
      btn.textContent = `${trade.giveName} → ${trade.receiveName}`;
      btn.addEventListener("click", () => {
        this.onTrade?.(i);
        this.hideTradeUI();
      });
      this.tradePanel.appendChild(btn);
    }

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
    closeBtn.addEventListener("click", () => this.hideTradeUI());
    this.tradePanel.appendChild(closeBtn);

    document.body.appendChild(this.tradePanel);
  }

  hideTradeUI(): void {
    if (this.tradePanel) {
      this.tradePanel.remove();
      this.tradePanel = null;
    }
  }

  isTradeOpen(): boolean {
    return this.tradePanel !== null;
  }

  // ── Boss Bar ───────────────────────────────────────────────────────────────

  private bossBarEl: HTMLElement | null = null;

  showBossBar(name: string, hp: number, maxHp: number): void {
    if (!this.bossBarEl) {
      this.bossBarEl = document.createElement("div");
      this.bossBarEl.id = "boss-bar";
      this.bossBarEl.style.cssText = `
        position: fixed;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        background: rgba(0, 0, 0, 0.8);
        padding: 10px;
        border: 2px solid #ff0000;
        border-radius: 4px;
        z-index: 500;
        font-family: Arial, sans-serif;
        color: white;
      `;

      const title = document.createElement("div");
      title.id = "boss-name";
      title.style.cssText = `
        font-weight: bold;
        font-size: 16px;
        color: #ff4444;
        margin-bottom: 5px;
        text-align: center;
      `;
      title.textContent = name;
      this.bossBarEl.appendChild(title);

      const barContainer = document.createElement("div");
      barContainer.style.cssText = `
        width: 100%;
        height: 20px;
        background: #111;
        border: 1px solid #666;
        border-radius: 2px;
        overflow: hidden;
      `;

      const barFill = document.createElement("div");
      barFill.id = "boss-bar-fill";
      barFill.style.cssText = `
        width: 100%;
        height: 100%;
        background: #ff0000;
        transition: width 0.1s;
      `;
      barContainer.appendChild(barFill);
      this.bossBarEl.appendChild(barContainer);

      document.body.appendChild(this.bossBarEl);
    }

    this.updateBossBar(hp, maxHp);
  }

  updateBossBar(hp: number, maxHp: number): void {
    if (!this.bossBarEl) return;
    const percent = Math.max(0, (hp / maxHp) * 100);
    const barFill = this.bossBarEl.querySelector("#boss-bar-fill") as HTMLElement;
    if (barFill) barFill.style.width = percent + "%";
  }

  hideBossBar(): void {
    if (this.bossBarEl) {
      this.bossBarEl.remove();
      this.bossBarEl = null;
    }
  }

  // ── Achievements ──────────────────────────────────────────────────────────

  showAchievement(name: string, desc: string, icon: string): void {
    const toast = document.createElement("div");
    toast.style.cssText = `
      position: fixed;
      right: 10px;
      top: 50%;
      background: #f0c030;
      color: #000;
      padding: 12px 16px;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      font-family: Arial, sans-serif;
      font-size: 14px;
      z-index: 400;
      min-width: 200px;
      animation: slideInRight 0.3s ease-out;
    `;

    const content = document.createElement("div");
    content.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">${icon}</span>
        <div>
          <div style="font-weight: bold;">${name}</div>
          <div style="font-size: 12px; color: #333; font-style: italic;">${desc}</div>
        </div>
      </div>
    `;
    toast.appendChild(content);

    document.body.appendChild(toast);

    // Auto-remove after 4 seconds
    setTimeout(() => {
      toast.style.animation = "slideOutRight 0.3s ease-in";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // ── F3 Debug Screen ───────────────────────────────────────────────────────

  showDebugScreen(): void {
    if (this.debugScreenEl) return;

    this.debugScreenEl = document.createElement("div");
    this.debugScreenEl.id = "debug-screen";
    this.debugScreenEl.style.cssText = `
      position: fixed;
      left: 5px;
      top: 5px;
      font-family: monospace;
      font-size: 12px;
      color: #7cfc00;
      background: rgba(0, 0, 0, 0.5);
      padding: 8px;
      border-radius: 4px;
      pointer-events: none;
      white-space: pre;
      line-height: 1.4;
      z-index: 200;
    `;
    document.body.appendChild(this.debugScreenEl);
    this.debugVisible = true;
  }

  hideDebugScreen(): void {
    if (this.debugScreenEl) {
      this.debugScreenEl.remove();
      this.debugScreenEl = null;
    }
    this.debugVisible = false;
  }

  isDebugVisible(): boolean {
    return this.debugVisible;
  }

  updateDebugScreen(info: {
    fps: number;
    x: number; y: number; z: number;
    biome: string;
    blockBelow: string;
    facing: string;
    dayTime: number;
    mobCount: number;
    blockCount: number;
    weather: string;
    gameMode: string;
    version: string;
  }): void {
    if (!this.debugScreenEl) return;

    const dayPhase = info.dayTime < 0.2 ? "Night" : info.dayTime < 0.3 ? "Dawn" : info.dayTime < 0.7 ? "Daytime" : info.dayTime < 0.8 ? "Dusk" : "Night";

    this.debugScreenEl.textContent = `Minecraft JS ${info.version} (Three.js)
---
FPS: ${Math.round(info.fps)}
XYZ: ${info.x.toFixed(1)} / ${info.y.toFixed(1)} / ${info.z.toFixed(1)}
Facing: ${info.facing}
Biome: ${info.biome}
Block below: ${info.blockBelow}
---
Day: ${(info.dayTime * 100).toFixed(0)} (${dayPhase})
Weather: ${info.weather}
GameMode: ${info.gameMode}
Mobs: ${info.mobCount}
Blocks: ${info.blockCount}`;
  }

  // ── HUD visibility ────────────────────────────────────────────────────────

  hideHUD(): void {
    this.hotbarEl.style.display = "none";
    this.topLeftEl.style.display = "none";
    this.topRightEl.style.display = "none";
    this.heartsEl.style.display = "none";
    this.hungerEl.style.display = "none";
    this.timeEl.style.display = "none";
    this.gameModeEl.style.display = "none";
    this.chatMsgsEl.style.display = "none";
    this.blockNameEl.style.display = "none";
    if (this.xpBarEl) this.xpBarEl.style.display = "none";
  }

  showHUD(): void {
    this.hotbarEl.style.display = "block";
    this.topLeftEl.style.display = "block";
    this.topRightEl.style.display = "block";
    this.heartsEl.style.display = "flex";
    this.hungerEl.style.display = "flex";
    this.timeEl.style.display = "block";
    this.gameModeEl.style.display = "block";
    this.chatMsgsEl.style.display = "block";
    this.blockNameEl.style.display = "block";
    if (this.xpBarEl) this.xpBarEl.style.display = "block";
  }
}
