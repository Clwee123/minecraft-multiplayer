import { Inventory, InvSlot, matchRecipe, consumeGrid, emptySlot, RECIPES, Recipe, armorSlotFor } from "./Inventory";
import { getItemTile, getItemName } from "./Textures";
import { sound } from "./Sound";
import { blockIconCache, shouldRenderAsBlock } from "./BlockIconCache";
import * as THREE from "three";
import { spawnPlayer } from "./PlayerModel";

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

  // ── 3D player preview (Minecraft-style inventory) ──
  // Spins up a self-contained THREE scene + WebGL renderer attached to the
  // existing #invCharPreview canvas. We clone the same player GLB used in
  // the world, give it its own light rig, and idle-rotate so the player
  // sees themselves like vanilla MC. The renderer is created lazily on
  // first open and kept alive for the session — cheap, 120×180 viewport.
  private _previewRenderer: THREE.WebGLRenderer | null = null;
  private _previewScene: THREE.Scene | null = null;
  private _previewCamera: THREE.PerspectiveCamera | null = null;
  private _previewModel: THREE.Object3D | null = null;
  private _previewLoopActive = false;
  private _previewStartedAt = 0;

  private ensurePreviewScene() {
    if (this._previewRenderer) return true;
    const canvas = document.getElementById("invCharPreview") as HTMLCanvasElement | null;
    if (!canvas) return false;
    const inst = spawnPlayer();
    if (!inst) return false;  // GLB not loaded yet
    try {
      this._previewRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      this._previewRenderer.setPixelRatio(window.devicePixelRatio || 1);
      this._previewRenderer.setSize(canvas.width, canvas.height, false);
    } catch (e) {
      console.warn("[invPreview] WebGL init failed", e);
      return false;
    }
    this._previewScene = new THREE.Scene();
    // Dark mat backdrop matches the original 2D preview's #191c24.
    this._previewScene.background = new THREE.Color(0x191c24);
    this._previewCamera = new THREE.PerspectiveCamera(28, canvas.width / canvas.height, 0.1, 50);
    this._previewCamera.position.set(0, 1.0, 3.4);
    this._previewCamera.lookAt(0, 1.0, 0);
    // Three-light setup so the model is well-lit from the front.
    const key  = new THREE.DirectionalLight(0xffffff, 1.0); key.position.set(1, 2, 3);  this._previewScene.add(key);
    const fill = new THREE.DirectionalLight(0xc0d8ff, 0.4); fill.position.set(-2, 1, 1); this._previewScene.add(fill);
    this._previewScene.add(new THREE.AmbientLight(0xffffff, 0.55));
    this._previewModel = inst.root;
    // Sit the model so the camera frames head-to-feet.
    this._previewModel.position.set(0, 0, 0);
    this._previewScene.add(this._previewModel);
    return true;
  }

  /** Render the 3D player preview into the armor-panel canvas. Spawns a
   *  copy of the player GLB once and idle-rotates it like vanilla MC. */
  private renderCharPreview() {
    if (!this.ensurePreviewScene()) {
      // GLB not loaded yet — do NOT call canvas.getContext("2d") here
      // because that would lock the canvas to 2D and prevent WebGLRenderer
      // from later acquiring a WebGL context on the same element. Just bail;
      // next render() (after armor change) will retry.
      return;
    }
    // Start the idle rotation loop once (rAF). Stops automatically when the
    // panel closes.
    if (!this._previewLoopActive) {
      this._previewLoopActive = true;
      this._previewStartedAt = performance.now();
      const tick = () => {
        if (!this.open || !this._previewRenderer || !this._previewScene || !this._previewCamera || !this._previewModel) {
          this._previewLoopActive = false;
          return;
        }
        // Gentle yaw oscillation — left/right ~30° like vanilla.
        const t = (performance.now() - this._previewStartedAt) / 1000;
        this._previewModel.rotation.y = Math.sin(t * 0.9) * 0.5;
        this._previewRenderer.render(this._previewScene, this._previewCamera);
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
    // TODO: when armor items are equipped, attach armor-piece meshes to the
    // appropriate body bones (helmet → head, chestplate → torso, etc.). For
    // now the armor *slots* still show their item icons; the 3D preview is
    // the base skin.
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
