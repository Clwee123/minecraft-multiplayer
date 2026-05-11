/**
 * Single chest — 27 slots, vanilla MC layout. Per-position contents are
 * persisted (saved by main.ts alongside furnace state). Drag-and-drop with
 * a cursor item, matching the rest of the inventory UIs.
 *
 * Client-local only for now (same caveat as FurnaceUI).
 */
import { Inventory, InvSlot, emptySlot } from "./Inventory";
import { getItemTile, getItemName } from "./Textures";
import { sound } from "./Sound";
import { blockIconCache, shouldRenderAsBlock } from "./BlockIconCache";

export const CHEST_SLOTS = 27;

function iconStyleFor(id: number, size = 32): string {
  if (shouldRenderAsBlock(id)) {
    const url = blockIconCache.get(id);
    return `background-image:url('${url}');background-size:contain;background-repeat:no-repeat;background-position:center;`;
  }
  const tile = getItemTile(id);
  const col = tile % 16, row = Math.floor(tile / 16);
  const scale = size / 32;
  return `background-image:url(/terrain_atlas.png?v=5);background-size:${512 * scale}px ${512 * scale}px;background-position:-${col * 32 * scale}px -${row * 32 * scale}px;`;
}

export class ChestUI {
  inv: Inventory;
  open = false;
  cursor: InvSlot = emptySlot();
  /** Per-position contents. Key = "x,y,z". */
  private chests = new Map<string, InvSlot[]>();
  private active: string | null = null;
  private panel: HTMLElement;
  private cursorEl: HTMLElement;

  onChange?: () => void;
  onClose?: () => void;
  onSave?: () => void;

  constructor(inv: Inventory) {
    this.inv = inv;
    this.panel = document.getElementById("chestUI")!;
    this.cursorEl = document.getElementById("chestCursor")!;
    document.getElementById("chestClose")?.addEventListener("click", () => this.hide());
    document.addEventListener("mousemove", (e) => {
      if (!this.open) return;
      this.cursorEl.style.left = e.clientX + "px";
      this.cursorEl.style.top  = e.clientY + "px";
    });
  }

  /** Get-or-create the slot array for the chest at this block. */
  private slotsFor(key: string): InvSlot[] {
    let s = this.chests.get(key);
    if (!s) {
      s = Array.from({ length: CHEST_SLOTS }, emptySlot);
      this.chests.set(key, s);
    }
    return s;
  }

  serialize(): Array<{ k: string; slots: InvSlot[] }> {
    return [...this.chests.entries()].map(([k, slots]) => ({
      k,
      slots: slots.map(s => ({ id: s.id, count: s.count, damage: s.damage ?? 0 })),
    }));
  }
  restore(rows: Array<{ k: string; slots: InvSlot[] }>) {
    this.chests.clear();
    for (const { k, slots } of rows) {
      const arr = Array.from({ length: CHEST_SLOTS }, emptySlot);
      for (let i = 0; i < CHEST_SLOTS && i < slots.length; i++) {
        const s = slots[i];
        arr[i] = { id: s.id | 0, count: s.count | 0, damage: s.damage ?? 0 };
      }
      this.chests.set(k, arr);
    }
  }

  show(x: number, y: number, z: number) {
    this.active = `${x|0},${y|0},${z|0}`;
    this.slotsFor(this.active); // ensure exists
    this.open = true;
    this.panel.style.display = "flex";
    document.exitPointerLock();
    this.render();
  }

  hide() {
    if (this.cursor.id !== 0 && this.cursor.count > 0) {
      const leftover = this.inv.add(this.cursor.id, this.cursor.count);
      if (leftover > 0) this.cursor = { id: this.cursor.id, count: leftover };
      else this.cursor = emptySlot();
    }
    this.open = false;
    this.panel.style.display = "none";
    this.active = null;
    this.cursorEl.innerHTML = "";
    this.onClose?.();
    this.onSave?.();
  }

  /** Drop all contents at the chest position (returns them) and remove. */
  destroy(x: number, y: number, z: number): InvSlot[] {
    const k = `${x|0},${y|0},${z|0}`;
    const slots = this.chests.get(k);
    if (!slots) return [];
    const dropped: InvSlot[] = [];
    for (const s of slots) {
      if (s.id !== 0 && s.count > 0) dropped.push({ id: s.id, count: s.count });
    }
    this.chests.delete(k);
    return dropped;
  }

  private render() {
    if (!this.active) return;
    const slots = this.slotsFor(this.active);
    const chestGrid = document.getElementById("chestGrid")!;
    chestGrid.innerHTML = "";
    for (let i = 0; i < CHEST_SLOTS; i++) {
      chestGrid.appendChild(this.makeSlotEl(slots, i, "chest"));
    }
    const main = document.getElementById("chestInvMain")!;
    main.innerHTML = "";
    for (let i = 0; i < this.inv.main.length; i++) {
      main.appendChild(this.makeSlotEl(this.inv.main, i, "inv"));
    }
    const bar = document.getElementById("chestInvHotbar")!;
    bar.innerHTML = "";
    for (let i = 0; i < this.inv.hotbar.length; i++) {
      bar.appendChild(this.makeSlotEl(this.inv.hotbar, i, "inv"));
    }
    this.renderCursor();
  }

  private makeSlotEl(arr: InvSlot[], i: number, kind: "chest" | "inv"): HTMLElement {
    const el = document.createElement("div");
    el.className = "chest-slot";
    const s = arr[i];
    if (s.id !== 0 && s.count > 0) {
      el.innerHTML = `
        <div class="slot-icon" style="${iconStyleFor(s.id)}"></div>
        ${s.count > 1 ? `<span class="slot-count">${s.count}</span>` : ""}
      `;
      el.title = getItemName(s.id);
    }
    el.onclick = (e) => { this.handleSlotClick(arr, i, e.shiftKey, false, kind); };
    el.oncontextmenu = (e) => { e.preventDefault(); this.handleSlotClick(arr, i, false, true, kind); };
    return el;
  }

  /** Shift-click on a slot transfers the whole stack to the OTHER container
   *  (chest → inventory or inventory → chest), matching vanilla. */
  private handleSlotClick(arr: InvSlot[], i: number, shift: boolean, rightClick: boolean, kind: "chest" | "inv") {
    const slot = arr[i];
    if (shift && slot.id !== 0 && slot.count > 0) {
      const target = kind === "chest"
        ? [...this.inv.hotbar, ...this.inv.main]
        : this.slotsFor(this.active!);
      this.transferStack(slot, target);
      sound.click();
      this.onChange?.();
      this.onSave?.();
      this.render();
      return;
    }
    if (rightClick && this.cursor.id !== 0) {
      if (slot.id === 0 || slot.id === this.cursor.id) {
        slot.id = this.cursor.id;
        slot.count = (slot.count || 0) + 1;
        this.cursor.count -= 1;
        if (this.cursor.count <= 0) this.cursor = emptySlot();
      }
    } else if (this.cursor.id === 0) {
      if (slot.id !== 0) {
        this.cursor = { id: slot.id, count: slot.count };
        slot.id = 0; slot.count = 0;
      }
    } else if (slot.id === 0) {
      arr[i] = { id: this.cursor.id, count: this.cursor.count };
      this.cursor = emptySlot();
    } else if (slot.id === this.cursor.id) {
      slot.count += this.cursor.count;
      this.cursor = emptySlot();
    } else {
      const tmp = { id: slot.id, count: slot.count };
      arr[i] = { id: this.cursor.id, count: this.cursor.count };
      this.cursor = tmp;
    }
    sound.click();
    this.onChange?.();
    this.onSave?.();
    this.render();
  }

  /** Move all of `from` into `target`, merging into existing stacks first
   *  then filling empty slots. Anything left stays in `from`. */
  private transferStack(from: InvSlot, target: InvSlot[]) {
    for (const t of target) {
      if (from.count === 0) return;
      if (t.id === from.id && t.count < 64) {
        const can = Math.min(from.count, 64 - t.count);
        t.count += can; from.count -= can;
      }
    }
    for (const t of target) {
      if (from.count === 0) return;
      if (t.id === 0) {
        t.id = from.id; t.count = from.count;
        from.id = 0; from.count = 0;
        return;
      }
    }
    if (from.count === 0) from.id = 0;
  }

  private renderCursor() {
    if (this.cursor.id === 0 || this.cursor.count === 0) {
      this.cursorEl.innerHTML = "";
      return;
    }
    this.cursorEl.innerHTML = `
      <div class="slot-icon" style="${iconStyleFor(this.cursor.id)}"></div>
      ${this.cursor.count > 1 ? `<span class="slot-count">${this.cursor.count}</span>` : ""}
    `;
  }
}
