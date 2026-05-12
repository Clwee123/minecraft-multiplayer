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
    // Event delegation — same fix as FurnaceUI. Per-slot el.onclick was
    // unreliable across re-renders; one mousedown listener on the panel
    // routes every slot via data-* attributes.
    this.panel.addEventListener("mousedown", (e) => {
      if (!this.open) return;
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-slot]");
      if (!target) return;
      e.preventDefault();
      e.stopPropagation();
      const kind = target.dataset.slot!;
      const idx  = parseInt(target.dataset.idx || "0", 10);
      const shift = e.shiftKey;
      const right = e.button === 2;
      if (kind === "chest") {
        // Slots 0..26 = active chest; 27..53 = partner (double chest)
        const slotsA = this.slotsFor(this.active!);
        const arr = idx < CHEST_SLOTS ? slotsA : this.slotsFor(this.activePartner!);
        const i = idx < CHEST_SLOTS ? idx : idx - CHEST_SLOTS;
        this.handleSlotClick(arr, i, shift, right, "chest");
      } else if (kind === "inv-main") {
        this.handleSlotClick(this.inv.main, idx, shift, right, "inv");
      } else if (kind === "inv-hotbar") {
        this.handleSlotClick(this.inv.hotbar, idx, shift, right, "inv");
      }
    });
    this.panel.addEventListener("contextmenu", (e) => { if (this.open) e.preventDefault(); });
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

  /** Called by main.ts to tell us about adjacent chest blocks so we can
   *  decide if this is a single-chest (27 slots) or double-chest (54 slots)
   *  open. Returns the partner key if found, else null. */
  private findPartner(x: number, y: number, z: number, isChestBlock: (x: number, y: number, z: number) => boolean): { key: string; x: number; y: number; z: number } | null {
    const offsets: Array<[number, number]> = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dx, dz] of offsets) {
      if (isChestBlock(x + dx, y, z + dz)) {
        return { key: `${(x+dx)|0},${y|0},${(z+dz)|0}`, x: x+dx, y, z: z+dz };
      }
    }
    return null;
  }

  /** Set externally before show() so we know how to look up adjacent chests
   *  for double-chest detection. main.ts provides world.getBlock. */
  isChestBlock: (x: number, y: number, z: number) => boolean = () => false;

  /** Partner cell of the currently-open double chest, or null for single. */
  private activePartner: string | null = null;

  show(x: number, y: number, z: number) {
    this.active = `${x|0},${y|0},${z|0}`;
    this.slotsFor(this.active); // ensure exists
    // Check for an adjacent chest to merge into a 54-slot "Large Chest".
    const partner = this.findPartner(x, y, z, this.isChestBlock);
    if (partner) {
      this.activePartner = partner.key;
      this.slotsFor(partner.key); // ensure partner exists
    } else {
      this.activePartner = null;
    }
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
    const slotsA = this.slotsFor(this.active);
    const slotsB = this.activePartner ? this.slotsFor(this.activePartner) : null;
    const chestGrid = document.getElementById("chestGrid")!;
    chestGrid.innerHTML = "";
    // Single chest = 27 slots; double chest = 54 slots (top half from active,
    // bottom half from partner). Click handlers route to the correct array.
    for (let i = 0; i < CHEST_SLOTS; i++) {
      chestGrid.appendChild(this.makeSlotEl(slotsA[i], "chest", i));
    }
    if (slotsB) {
      for (let i = 0; i < CHEST_SLOTS; i++) {
        chestGrid.appendChild(this.makeSlotEl(slotsB[i], "chest", CHEST_SLOTS + i));
      }
    }
    // Update the header to reflect single vs double.
    const hdr = document.querySelector("#chestUI .chest-header h2") as HTMLElement | null;
    if (hdr) hdr.textContent = slotsB ? "LARGE CHEST" : "CHEST";
    const main = document.getElementById("chestInvMain")!;
    main.innerHTML = "";
    for (let i = 0; i < this.inv.main.length; i++) {
      main.appendChild(this.makeSlotEl(this.inv.main[i], "inv-main", i));
    }
    const bar = document.getElementById("chestInvHotbar")!;
    bar.innerHTML = "";
    for (let i = 0; i < this.inv.hotbar.length; i++) {
      bar.appendChild(this.makeSlotEl(this.inv.hotbar[i], "inv-hotbar", i));
    }
    this.renderCursor();
  }

  private makeSlotEl(s: InvSlot, kind: string, idx: number): HTMLElement {
    const el = document.createElement("div");
    el.className = "chest-slot";
    el.dataset.slot = kind;
    el.dataset.idx  = String(idx);
    if (s.id !== 0 && s.count > 0) {
      el.innerHTML = `
        <div class="slot-icon" style="${iconStyleFor(s.id)}"></div>
        ${s.count > 1 ? `<span class="slot-count">${s.count}</span>` : ""}
      `;
      el.title = getItemName(s.id);
    }
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
