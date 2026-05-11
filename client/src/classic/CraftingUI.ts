import { Inventory, InvSlot, matchRecipe, consumeGrid, emptySlot } from "./Inventory";
import { getItemTile, getItemName } from "./Textures";

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
    this.renderCursor();
  }

  private renderOutput() {
    const grid = this.use3x3 ? this.inv.craft3x3 : this.inv.craft2x2;
    const dim = this.use3x3 ? 3 : 2;
    const recipe = matchRecipe(grid, dim);
    this.outputSlot.innerHTML = "";
    if (!recipe) return;
    const tile = getItemTile(recipe.result);
    const col = tile % 16, row = Math.floor(tile / 16);
    this.outputSlot.innerHTML = `
      <div class="slot-icon" style="
        background-image:url(/terrain_atlas.png?v=5);
        background-size:512px 512px;
        background-position:-${col * 32}px -${row * 32}px;
      "></div>
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
    const tile = getItemTile(this.cursor.id);
    const col = tile % 16, row = Math.floor(tile / 16);
    this.cursorEl.innerHTML = `
      <div class="slot-icon" style="
        background-image:url(/terrain_atlas.png?v=5);
        background-size:512px 512px;
        background-position:-${col * 32}px -${row * 32}px;
      "></div>
      <span class="slot-count">${this.cursor.count > 1 ? this.cursor.count : ""}</span>
    `;
    this.cursorEl.style.display = "block";
  }

  private makeSlotEl(arr: InvSlot[], i: number, source: "main" | "hotbar" | "craft2" | "craft3"): HTMLElement {
    const el = document.createElement("div");
    el.className = "inv-slot";
    const s = arr[i];
    if (s.id !== 0 && s.count > 0) {
      const tile = getItemTile(s.id);
      const col = tile % 16, row = Math.floor(tile / 16);
      el.innerHTML = `
        <div class="slot-icon" style="
          background-image:url(/terrain_atlas.png?v=5);
          background-size:512px 512px;
          background-position:-${col * 32}px -${row * 32}px;
        "></div>
        <span class="slot-count">${s.count > 1 ? s.count : ""}</span>
      `;
      el.title = getItemName(s.id);
    }
    el.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.handleSlotClick(arr, i, e.button === 2, source);
    });
    el.addEventListener("contextmenu", (e) => e.preventDefault());
    return el;
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
