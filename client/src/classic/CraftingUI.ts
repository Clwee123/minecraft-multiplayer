import { Inventory, InvSlot, matchRecipe, consumeGrid, emptySlot, RECIPES, Recipe, armorSlotFor } from "./Inventory";
import { getItemTile, getItemName } from "./Textures";
import { sound } from "./Sound";
import { blockIconCache, shouldRenderAsBlock } from "./BlockIconCache";

function iconStyleFor(id: number, size = 32): string {
  if (shouldRenderAsBlock(id)) {
    const url = blockIconCache.get(id);
    return `background-image:url('${url}');background-size:contain;background-repeat:no-repeat;background-position:center;`;
  }
  const tile = getItemTile(id);
  const col = tile % 16, row = Math.floor(tile / 16);
  // Scale factor: source tile is 32px in a 512px atlas; if rendering at a
  // different display size, scale background-size + position.
  const scale = size / 32;
  return `background-image:url(/terrain_atlas.png?v=5);background-size:${512 * scale}px ${512 * scale}px;background-position:-${col * 32 * scale}px -${row * 32 * scale}px;`;
}

/**
 * Drag-and-drop crafting UI.
 * - Click slot to pick up the whole stack into the "cursor".
 * - Right-click slot to pick up half (or place 1 of the cursor stack).
 * - Click another slot to drop. Same item types merge, different types swap.
 * - Crafting grid is 2x2 (player inventory) or 3x3 (when standing near
 *   a crafting table). Output slot updates live as the grid changes.
 */
export class CraftingUI {
  inv: Inventory;
  open = false;
  /** Item the player is holding with the cursor (drag-and-drop). */
  cursor: InvSlot = emptySlot();
  /** Whether to show the 3x3 grid (true when at a crafting table). */
  use3x3 = false;
  /** Element refs */
  private panel: HTMLElement;
  private mainGrid: HTMLElement;
  private hotbarGrid: HTMLElement;
  private craftGrid: HTMLElement;
  private outputSlot: HTMLElement;
  private cursorEl: HTMLElement;

  onCraft?: () => void;     // called whenever the inventory changes
  onClose?: () => void;

  constructor(inv: Inventory) {
    this.inv = inv;
    this.panel       = document.getElementById("invPanel")!;
    this.mainGrid    = document.getElementById("invMain")!;
    this.hotbarGrid  = document.getElementById("invHotbar")!;
    this.craftGrid   = document.getElementById("invCraftGrid")!;
    this.outputSlot  = document.getElementById("invOutput")!;
    this.cursorEl    = document.getElementById("invCursor")!;

    document.addEventListener("mousemove", (e) => {
      if (!this.open) return;
      this.cursorEl.style.left = e.clientX + "px";
      this.cursorEl.style.top  = e.clientY + "px";
    });
    // Hold right-mouse to keep placing one-at-a-time while the cursor is over a slot
    document.addEventListener("mouseup", (e) => {
      if (e.button === 2) this.stopRepeat();
    });
    document.addEventListener("mouseleave", () => this.stopRepeat());
    this.wireRecipeBook();
  }

  private repeatTimer: any = null;
  private repeatTarget: { arr: InvSlot[]; i: number } | null = null;
  private startRepeat(arr: InvSlot[], i: number) {
    this.stopRepeat();
    this.repeatTarget = { arr, i };
    // First tick after 180 ms, then every 60 ms
    this.repeatTimer = setTimeout(() => {
      this.repeatTimer = setInterval(() => {
        if (!this.repeatTarget) { this.stopRepeat(); return; }
        if (this.cursor.id === 0) { this.stopRepeat(); return; }
        // Update target by elementFromPoint so dragging across slots works
        const el = document.elementFromPoint(
          parseInt(this.cursorEl.style.left || "0"),
          parseInt(this.cursorEl.style.top  || "0"),
        ) as HTMLElement | null;
        const slotEl = el?.closest(".inv-slot, #invOutput") as HTMLElement | null;
        if (slotEl && (slotEl as any)._slotRef) {
          const r = (slotEl as any)._slotRef as { arr: InvSlot[]; i: number };
          this.handleSlotClick(r.arr, r.i, true, "main");
        }
      }, 60);
    }, 180);
  }
  private stopRepeat() {
    if (this.repeatTimer) { clearTimeout(this.repeatTimer); clearInterval(this.repeatTimer); }
    this.repeatTimer = null;
    this.repeatTarget = null;
  }

  show(use3x3: boolean) {
    this.use3x3 = use3x3;
    this.open = true;
    this.panel.style.display = "flex";
    this.panel.classList.toggle("use-3x3", use3x3);
    this.render();
    document.exitPointerLock();
  }

  hide() {
    this.open = false;
    this.panel.style.display = "none";
    // Return cursor item to inventory if any
    if (this.cursor.id !== 0 && this.cursor.count > 0) {
      const leftover = this.inv.add(this.cursor.id, this.cursor.count);
      if (leftover > 0) {
        // Drop on the world — but we don't have access here. For now just discard.
      }
      this.cursor = emptySlot();
    }
    // Return crafting grid items to inventory
    const grid = this.use3x3 ? this.inv.craft3x3 : this.inv.craft2x2;
    for (const s of grid) {
      if (s.id !== 0 && s.count > 0) {
        this.inv.add(s.id, s.count);
        s.id = 0; s.count = 0;
      }
    }
    this.cursorEl.innerHTML = "";
    this.onClose?.();
  }

  toggle(use3x3: boolean) {
    if (this.open) this.hide();
    else this.show(use3x3);
  }

  render() {
    // Main inventory (27 slots, 9 wide × 3 tall)
    this.mainGrid.innerHTML = "";
    for (let i = 0; i < this.inv.main.length; i++) {
      this.mainGrid.appendChild(this.makeSlotEl(this.inv.main, i, "main"));
    }
    // Hotbar (9 slots)
    this.hotbarGrid.innerHTML = "";
    for (let i = 0; i < this.inv.hotbar.length; i++) {
      this.hotbarGrid.appendChild(this.makeSlotEl(this.inv.hotbar, i, "hotbar"));
    }
    // Crafting grid (2x2 or 3x3)
    const grid = this.use3x3 ? this.inv.craft3x3 : this.inv.craft2x2;
    const dim = this.use3x3 ? 3 : 2;
    this.craftGrid.style.gridTemplateColumns = `repeat(${dim}, 40px)`;
    this.craftGrid.innerHTML = "";
    for (let i = 0; i < grid.length; i++) {
      this.craftGrid.appendChild(this.makeSlotEl(grid, i, this.use3x3 ? "craft3" : "craft2"));
    }
    // Output slot
    this.renderOutput();
    // Armor slots (helmet / chestplate / leggings / boots — 1.8 style)
    this.renderArmor();
    this.renderCharPreview();
    this.renderCursor();
  }

  /** Draw a tiny pixel-style player to the preview canvas, with armor items
   *  overlaid as colored bands where they sit on the body. Real 3D would
   *  need its own scene + camera; a 2D placeholder gets the 1.8 inventory
   *  look across without the complexity. */
  private renderCharPreview() {
    const canvas = document.getElementById("invCharPreview") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Background mat
    ctx.fillStyle = "#191c24";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Steve silhouette in 2D — head + body + arms + legs
    const skin   = "#c69b7b";   // skin tone
    const shirt  = "#3a82c4";
    const pants  = "#3a4a99";
    const cx = canvas.width / 2;
    const headSize = 28;
    const headY = 18;
    // Head
    ctx.fillStyle = skin;
    ctx.fillRect(cx - headSize / 2, headY, headSize, headSize);
    // Eyes
    ctx.fillStyle = "#fff";
    ctx.fillRect(cx - 9, headY + 11, 4, 4);
    ctx.fillRect(cx + 5, headY + 11, 4, 4);
    ctx.fillStyle = "#5a4a8a";
    ctx.fillRect(cx - 7, headY + 12, 2, 3);
    ctx.fillRect(cx + 7, headY + 12, 2, 3);
    // Body
    const bodyY = headY + headSize;
    ctx.fillStyle = shirt;
    ctx.fillRect(cx - 14, bodyY, 28, 36);
    // Arms
    ctx.fillRect(cx - 22, bodyY, 8, 36);
    ctx.fillRect(cx + 14, bodyY, 8, 36);
    // Legs
    const legY = bodyY + 36;
    ctx.fillStyle = pants;
    ctx.fillRect(cx - 12, legY, 10, 36);
    ctx.fillRect(cx +  2, legY, 10, 36);
    // Equipped-armor overlays (tinted bands at the appropriate Y range).
    const drawArmor = (id: number, y: number, h: number) => {
      if (!id) return;
      // Different tints per material — leather/chain/iron/gold/diamond.
      let color = "#888";
      // helmet/chestplate/leggings/boots ids per material
      if ([114, 115, 116, 117].includes(id)) color = "#7c4d2c";       // leather
      else if ([118, 119, 120, 121].includes(id)) color = "#cccccc";  // iron
      else if ([122, 123, 124, 125].includes(id)) color = "#f5c842";  // gold
      else if ([126, 127, 128, 129].includes(id)) color = "#5dd9d1";  // diamond
      else if ([192, 193, 194, 195].includes(id)) color = "#6a6a6a";  // chain
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.78;
      ctx.fillRect(cx - 24, y, 48, h);
      ctx.globalAlpha = 1.0;
    };
    drawArmor(this.inv.armor.helmet.id,     headY - 2, headSize + 2);
    drawArmor(this.inv.armor.chestplate.id, bodyY,     36);
    drawArmor(this.inv.armor.leggings.id,   legY,      20);
    drawArmor(this.inv.armor.boots.id,      legY + 24, 12);
  }

  private renderArmor() {
    const slots: Array<["helmet" | "chestplate" | "leggings" | "boots", string]> = [
      ["helmet",     "armorHelmet"],
      ["chestplate", "armorChestplate"],
      ["leggings",   "armorLeggings"],
      ["boots",      "armorBoots"],
    ];
    for (const [kind, id] of slots) {
      const el = document.getElementById(id);
      if (!el) continue;
      const s = this.inv.armor[kind];
      el.innerHTML = "";
      if (s.id !== 0 && s.count > 0) {
        el.innerHTML = `
          <div class="slot-icon" style="${iconStyleFor(s.id)}"></div>
        `;
        el.title = getItemName(s.id);
      } else {
        el.title = `${kind} slot`;
      }
      // Wire clicks (re-bind every render — cheap, only 4 slots).
      el.onclick = () => { this.handleArmorClick(kind); };
      el.oncontextmenu = (e) => { e.preventDefault(); this.handleArmorClick(kind); };
    }
  }

  /** Click on an armor slot — only accepts the matching item type. */
  private handleArmorClick(kind: "helmet" | "chestplate" | "leggings" | "boots") {
    const slot = this.inv.armor[kind];
    // Pick up: cursor empty + slot has armor → grab.
    if (this.cursor.id === 0) {
      if (slot.id !== 0) {
        this.cursor = { id: slot.id, count: slot.count };
        this.inv.armor[kind] = emptySlot();
      }
    } else {
      // Place: only accept matching type. Otherwise swap if cursor is matching.
      const fits = armorSlotFor(this.cursor.id) === kind;
      if (!fits) return;
      if (slot.id === 0) {
        this.inv.armor[kind] = { id: this.cursor.id, count: 1 };
        this.cursor = this.cursor.count > 1 ? { id: this.cursor.id, count: this.cursor.count - 1 } : emptySlot();
      } else {
        // Swap
        const old = { id: slot.id, count: slot.count };
        this.inv.armor[kind] = { id: this.cursor.id, count: 1 };
        this.cursor = old;
      }
    }
    sound.click();
    this.render();
    this.onCraft?.();
  }

  private renderOutput() {
    const grid = this.use3x3 ? this.inv.craft3x3 : this.inv.craft2x2;
    const dim = this.use3x3 ? 3 : 2;
    const recipe = matchRecipe(grid, dim);
    this.outputSlot.innerHTML = "";
    if (!recipe) return;
    this.outputSlot.innerHTML = `
      <div class="slot-icon" style="${iconStyleFor(recipe.result)}"></div>
      <span class="slot-count">${recipe.count > 1 ? recipe.count : ""}</span>
    `;
    this.outputSlot.title = getItemName(recipe.result);
    this.outputSlot.onclick = (e) => this.takeOutput(e);
  }

  private takeOutput(_e: MouseEvent) {
    const grid = this.use3x3 ? this.inv.craft3x3 : this.inv.craft2x2;
    const dim = this.use3x3 ? 3 : 2;
    const recipe = matchRecipe(grid, dim);
    if (!recipe) return;
    // If cursor is empty or same item with room → take output
    if (this.cursor.id === 0) {
      this.cursor = { id: recipe.result, count: recipe.count };
    } else if (this.cursor.id === recipe.result && this.cursor.count + recipe.count <= 64) {
      this.cursor.count += recipe.count;
    } else {
      return; // cursor full of different stuff
    }
    consumeGrid(grid);
    this.render();
    this.onCraft?.();
  }

  private renderCursor() {
    if (this.cursor.id === 0 || this.cursor.count === 0) {
      this.cursorEl.innerHTML = "";
      this.cursorEl.style.display = "none";
      return;
    }
    this.cursorEl.innerHTML = `
      <div class="slot-icon" style="${iconStyleFor(this.cursor.id)}"></div>
      <span class="slot-count">${this.cursor.count > 1 ? this.cursor.count : ""}</span>
    `;
    this.cursorEl.style.display = "block";
  }

  private makeSlotEl(arr: InvSlot[], i: number, source: "main" | "hotbar" | "craft2" | "craft3"): HTMLElement {
    const el = document.createElement("div");
    el.className = "inv-slot";
    const s = arr[i];
    if (s.id !== 0 && s.count > 0) {
      el.innerHTML = `
        <div class="slot-icon" style="${iconStyleFor(s.id)}"></div>
        <span class="slot-count">${s.count > 1 ? s.count : ""}</span>
      `;
      el.title = getItemName(s.id);
    }
    (el as any)._slotRef = { arr, i };
    el.addEventListener("mousedown", (e) => {
      e.preventDefault();
      // Shift-click on an armor item moves it directly into the matching
      // armor slot — vanilla "quick equip" behaviour.
      if (e.shiftKey && (source === "main" || source === "hotbar")) {
        const sl = arr[i];
        const kind = sl.id !== 0 ? armorSlotFor(sl.id) : null;
        if (kind && this.inv.armor[kind].id === 0) {
          this.inv.armor[kind] = { id: sl.id, count: 1 };
          sl.count -= 1;
          if (sl.count <= 0) { sl.id = 0; sl.count = 0; }
          sound.click();
          this.render();
          this.onCraft?.();
          return;
        }
      }
      this.handleSlotClick(arr, i, e.button === 2, source);
      sound.click();
      if (e.button === 2) this.startRepeat(arr, i);
    });
    el.addEventListener("contextmenu", (e) => e.preventDefault());
    return el;
  }

  // ── Recipe book ─────────────────────────────────────────────────────────
  private wireRecipeBook() {
    const btn = document.getElementById("recipeBookBtn");
    const panel = document.getElementById("recipeBook");
    const closeBtn = document.getElementById("recipeBookClose");
    const search = document.getElementById("recipeSearch") as HTMLInputElement | null;
    if (!btn || !panel) return;
    btn.addEventListener("click", () => {
      panel.style.display = "flex";
      this.renderRecipeBook(search?.value ?? "");
      search?.focus();
    });
    closeBtn?.addEventListener("click", () => { panel.style.display = "none"; });
    search?.addEventListener("input", () => this.renderRecipeBook(search.value));
  }

  private renderRecipeBook(filter: string) {
    const list = document.getElementById("recipeList");
    if (!list) return;
    const q = filter.trim().toLowerCase();
    list.innerHTML = "";
    for (const r of RECIPES) {
      const resultName = getItemName(r.result).toLowerCase();
      if (q && !resultName.includes(q)) continue;
      list.appendChild(this.buildRecipeRow(r));
    }
  }

  private buildRecipeRow(r: Recipe): HTMLElement {
    const row = document.createElement("div");
    row.className = "recipe-row";
    const grid = document.createElement("div");
    grid.className = "recipe-grid";
    let cells: (number | null)[] = [];
    let dim = 3;
    if (r.kind === "shaped") {
      const pw = r.pattern[0].length;
      dim = Math.max(pw, r.pattern.length);
      for (let y = 0; y < dim; y++) {
        for (let x = 0; x < dim; x++) {
          if (y < r.pattern.length && x < pw) {
            const ch = r.pattern[y][x];
            cells.push(ch === "." || ch === " " ? null : r.key[ch] ?? null);
          } else {
            cells.push(null);
          }
        }
      }
    } else {
      // Shapeless: lay out items left-to-right top-to-bottom
      dim = 3;
      for (const id in r.items) {
        for (let n = 0; n < r.items[+id]; n++) cells.push(+id);
      }
      while (cells.length < dim * dim) cells.push(null);
    }
    grid.style.gridTemplateColumns = `repeat(${dim}, 24px)`;
    grid.style.gridTemplateRows    = `repeat(${dim}, 24px)`;
    for (const c of cells) {
      const cell = document.createElement("div");
      cell.className = "recipe-cell";
      if (c != null) {
        cell.innerHTML = `<div class="recipe-icon" style="${iconStyleFor(c, 24)}" title="${getItemName(c)}"></div>`;
      }
      grid.appendChild(cell);
    }
    row.appendChild(grid);

    const arrow = document.createElement("div");
    arrow.textContent = "→";
    arrow.className = "recipe-arrow";
    row.appendChild(arrow);

    const out = document.createElement("div");
    out.className = "recipe-out";
    out.innerHTML = `
      <div class="recipe-icon" style="${iconStyleFor(r.result, 24)}"></div>
      <span class="recipe-label">${getItemName(r.result)}${r.count > 1 ? ` ×${r.count}` : ""}</span>
    `;
    row.appendChild(out);
    return row;
  }

  private handleSlotClick(arr: InvSlot[], i: number, right: boolean, source: string) {
    const slot = arr[i];
    if (right) {
      // Right-click: either split stack or place one
      if (this.cursor.id === 0) {
        if (slot.id === 0) return;
        const half = Math.ceil(slot.count / 2);
        this.cursor = { id: slot.id, count: half };
        slot.count -= half;
        if (slot.count === 0) slot.id = 0;
      } else {
        // Place one
        if (slot.id === 0) {
          slot.id = this.cursor.id; slot.count = 1;
          this.cursor.count--;
          if (this.cursor.count === 0) this.cursor.id = 0;
        } else if (slot.id === this.cursor.id && slot.count < 64) {
          slot.count++;
          this.cursor.count--;
          if (this.cursor.count === 0) this.cursor.id = 0;
        }
      }
    } else {
      // Left-click: pick up / drop / swap
      if (this.cursor.id === 0) {
        if (slot.id === 0) return;
        this.cursor = { id: slot.id, count: slot.count };
        slot.id = 0; slot.count = 0;
      } else {
        if (slot.id === 0) {
          slot.id = this.cursor.id; slot.count = this.cursor.count;
          this.cursor = emptySlot();
        } else if (slot.id === this.cursor.id) {
          const space = 64 - slot.count;
          const move = Math.min(space, this.cursor.count);
          slot.count += move; this.cursor.count -= move;
          if (this.cursor.count === 0) this.cursor.id = 0;
        } else {
          // Swap
          const tmp: InvSlot = { id: slot.id, count: slot.count };
          slot.id = this.cursor.id; slot.count = this.cursor.count;
          this.cursor = tmp;
        }
      }
    }
    this.render();
    this.onCraft?.();
  }
}
