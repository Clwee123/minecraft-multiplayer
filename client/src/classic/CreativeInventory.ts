/**
 * Creative-mode inventory: a paged grid of every placeable block and every
 * item, with a search box. Clicking an entry assigns it to the held hotbar
 * slot at count 999 (effectively infinite — matches MC's creative behaviour).
 *
 * In survival mode the existing CraftingUI is used instead. The two are
 * mutually exclusive — main.ts decides which to toggle on E based on the
 * Inventory's gameMode.
 */
import { Inventory } from "./Inventory";
import { BLOCKS, ITEMS, getItemTile, getItemName } from "./Textures";
import { sound } from "./Sound";

export class CreativeInventory {
  open = false;
  inv: Inventory;
  private panel: HTMLElement;
  private grid: HTMLElement;
  private search: HTMLInputElement;
  /** Filter string applied to entries. */
  private filter = "";

  onClose?: () => void;
  onChange?: () => void;

  constructor(inv: Inventory) {
    this.inv = inv;
    this.panel  = document.getElementById("creativeInv")!;
    this.grid   = document.getElementById("creativeInvGrid")!;
    this.search = document.getElementById("creativeInvSearch") as HTMLInputElement;
    const closeBtn = document.getElementById("creativeInvClose");
    closeBtn?.addEventListener("click", () => this.hide());
    this.search?.addEventListener("input", () => {
      this.filter = this.search.value;
      this.render();
    });
  }

  toggle() { if (this.open) this.hide(); else this.show(); }

  show() {
    this.open = true;
    this.panel.style.display = "flex";
    this.filter = this.search.value;
    this.render();
    document.exitPointerLock();
    setTimeout(() => this.search.focus(), 30);
  }

  hide() {
    this.open = false;
    this.panel.style.display = "none";
    this.onClose?.();
  }

  private render() {
    const q = this.filter.trim().toLowerCase();
    this.grid.innerHTML = "";
    // All placeable blocks first, then all items. Stable order.
    const entries: Array<{ id: number; name: string }> = [];
    for (const idStr of Object.keys(BLOCKS)) {
      const id = +idStr;
      // Skip water, fire, etc. that aren't useful as hotbar items
      if (id === 7) continue;
      entries.push({ id, name: getItemName(id) });
    }
    for (const idStr of Object.keys(ITEMS)) {
      const id = +idStr;
      entries.push({ id, name: getItemName(id) });
    }
    const visible = q
      ? entries.filter(e => e.name.toLowerCase().includes(q))
      : entries;
    for (const e of visible) {
      this.grid.appendChild(this.makeCell(e.id, e.name));
    }
    if (visible.length === 0) {
      const empty = document.createElement("div");
      empty.style.cssText = "padding:24px;opacity:.6;font-size:13px;grid-column:1/-1;text-align:center;";
      empty.textContent = q ? `No items match "${q}"` : "No items available";
      this.grid.appendChild(empty);
    }
  }

  private makeCell(id: number, name: string): HTMLElement {
    const tile = getItemTile(id);
    const col = tile % 16, row = Math.floor(tile / 16);
    const cell = document.createElement("button");
    cell.className = "creative-cell";
    cell.title = `${name} (id ${id})`;
    cell.innerHTML = `
      <div class="creative-icon" style="
        background-image:url(/terrain_atlas.png?v=5);
        background-size:512px 512px;
        background-position:-${col * 32}px -${row * 32}px;
      "></div>
      <div class="creative-label">${name}</div>
    `;
    cell.addEventListener("click", () => {
      this.giveToHotbar(id);
      sound.click();
    });
    return cell;
  }

  /** Replace the held hotbar slot with an effectively-infinite stack of `id`. */
  private giveToHotbar(id: number) {
    const slot = this.inv.hotbar[this.inv.selected];
    slot.id = id;
    slot.count = 999;
    this.onChange?.();
  }
}
