/**
 * Furnace smelter — vanilla-style three-slot UI (input, fuel, output) with a
 * timed smelt + a fuel pool. Furnace state is keyed by world position so the
 * smelt continues while the player walks away.
 *
 * Client-local only for now: multiplayer furnaces would need server arbitration
 * (a malicious client could fabricate ingots), but that's out of scope for
 * this pass.
 */
import { Inventory, InvSlot, emptySlot } from "./Inventory";
import { getItemTile, getItemName } from "./Textures";
import { sound } from "./Sound";
import { blockIconCache, shouldRenderAsBlock } from "./BlockIconCache";

/** input id → output id. One smelt = 1 input → 1 output. */
const SMELT: Record<number, number> = {
  4: 11,      // sand        → glass
  9: 3,       // cobblestone → stone
  18: 50,     // coal ore    → coal
  19: 52,     // iron ore    → iron ingot
  20: 53,     // gold ore    → gold ingot
  87: 88,     // potato      → baked potato
  92: 93,     // raw fish    → cooked fish
  149: 174,   // raw rabbit  → cooked rabbit
};

/** fuel id → burn seconds. */
const FUEL: Record<number, number> = {
  5: 15,    // oak log
  28: 15,   // spruce log
  8: 15,    // planks
  54: 5,    // stick
  50: 80,   // coal
  100: 1000, // lava bucket (vanilla)
};

/** Seconds to smelt one item once fuel is burning. */
const SMELT_SECONDS = 10;

export interface FurnaceState {
  input:  InvSlot;
  fuel:   InvSlot;
  output: InvSlot;
  /** Seconds of fuel remaining in the burning pool (0 = not burning). */
  fuelLeft: number;
  /** Seconds the current input has been smelting. */
  smeltProgress: number;
  /** Most recently consumed fuel's full-pool size, for the flame icon scale. */
  fuelMax: number;
}

function makeState(): FurnaceState {
  return {
    input:  emptySlot(),
    fuel:   emptySlot(),
    output: emptySlot(),
    fuelLeft: 0,
    smeltProgress: 0,
    fuelMax: 1,
  };
}

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

export class FurnaceUI {
  inv: Inventory;
  open = false;
  /** Cursor for drag-and-drop, like CraftingUI. */
  cursor: InvSlot = emptySlot();
  private states = new Map<string, FurnaceState>();
  /** "x,y,z" of the furnace block currently open. */
  private active: string | null = null;
  private panel: HTMLElement;
  private cursorEl: HTMLElement;

  /** Notified each tick a smelt completes / a fuel ticks (used to refresh hotbar). */
  onChange?: () => void;
  onClose?: () => void;
  /** Set by main.ts so a state change can flip the world block 37↔38. */
  onBlockStateChange?: (key: string, lit: boolean) => void;
  /** Save callback fired after every state-mutating action so persistence
   *  picks up the change. */
  onSave?: () => void;

  constructor(inv: Inventory) {
    this.inv = inv;
    this.panel = document.getElementById("furnaceUI")!;
    this.cursorEl = document.getElementById("furnaceCursor")!;
    document.getElementById("furnaceClose")?.addEventListener("click", () => this.hide());
    document.addEventListener("mousemove", (e) => {
      if (!this.open) return;
      this.cursorEl.style.left = e.clientX + "px";
      this.cursorEl.style.top  = e.clientY + "px";
    });
  }

  /** Returns (creating if needed) the state for the furnace at this block. */
  getOrCreate(x: number, y: number, z: number): FurnaceState {
    const k = `${x|0},${y|0},${z|0}`;
    let s = this.states.get(k);
    if (!s) { s = makeState(); this.states.set(k, s); }
    return s;
  }

  /** All persisted furnace states (for save/load). */
  serialize(): Array<{ k: string; s: FurnaceState }> {
    return [...this.states.entries()].map(([k, s]) => ({ k, s }));
  }
  restore(rows: Array<{ k: string; s: FurnaceState }>) {
    this.states.clear();
    for (const { k, s } of rows) this.states.set(k, s);
  }

  show(x: number, y: number, z: number) {
    this.active = `${x|0},${y|0},${z|0}`;
    this.open = true;
    this.panel.style.display = "flex";
    document.exitPointerLock();
    this.render();
  }

  hide() {
    // Return cursor item before closing.
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

  /** Tick all furnaces, even ones not currently open. Returns true if the
   *  currently active furnace had a state change (so we can re-render UI). */
  tick(dt: number): void {
    let activeChanged = false;
    for (const [k, s] of this.states) {
      const wasLit = s.fuelLeft > 0;
      const canSmelt = s.input.id !== 0
        && s.input.count > 0
        && SMELT[s.input.id] != null
        && (s.output.id === 0 || (s.output.id === SMELT[s.input.id] && s.output.count < 64));

      if (s.fuelLeft > 0) {
        s.fuelLeft = Math.max(0, s.fuelLeft - dt);
        if (canSmelt) {
          s.smeltProgress += dt;
          if (s.smeltProgress >= SMELT_SECONDS) {
            const outId = SMELT[s.input.id];
            s.input.count -= 1;
            if (s.input.count <= 0) { s.input.id = 0; s.input.count = 0; }
            if (s.output.id === 0) { s.output.id = outId; s.output.count = 1; }
            else s.output.count += 1;
            s.smeltProgress = 0;
            this.onSave?.();
          }
        } else {
          // Burning with nothing to smelt — bleed progress back to 0.
          s.smeltProgress = Math.max(0, s.smeltProgress - dt);
        }
      } else if (canSmelt && s.fuel.id !== 0 && FUEL[s.fuel.id] != null) {
        // Light next fuel.
        const burn = FUEL[s.fuel.id];
        s.fuel.count -= 1;
        if (s.fuel.count <= 0) { s.fuel.id = 0; s.fuel.count = 0; }
        s.fuelLeft = burn;
        s.fuelMax = burn;
        this.onSave?.();
      } else {
        s.smeltProgress = Math.max(0, s.smeltProgress - dt * 2);
      }

      const isLit = s.fuelLeft > 0;
      if (isLit !== wasLit) this.onBlockStateChange?.(k, isLit);
      if (k === this.active) activeChanged = true;
    }
    if (activeChanged && this.open) this.render();
  }

  /** Drop all unsmelted items into the inventory and remove the entry. */
  destroy(x: number, y: number, z: number): InvSlot[] {
    const k = `${x|0},${y|0},${z|0}`;
    const s = this.states.get(k);
    if (!s) return [];
    const dropped: InvSlot[] = [];
    for (const slot of [s.input, s.fuel, s.output]) {
      if (slot.id !== 0 && slot.count > 0) dropped.push({ id: slot.id, count: slot.count });
    }
    this.states.delete(k);
    return dropped;
  }

  private active_state(): FurnaceState | null {
    if (!this.active) return null;
    return this.states.get(this.active) ?? null;
  }

  private render() {
    const s = this.active_state();
    if (!s) return;
    // Slots
    this.renderSlot("furnaceInput",  s.input,  () => { this.handleClick(s, "input"); }, (e) => { e.preventDefault(); this.handleClick(s, "input", true); });
    this.renderSlot("furnaceFuel",   s.fuel,   () => { this.handleClick(s, "fuel"); },  (e) => { e.preventDefault(); this.handleClick(s, "fuel", true); });
    this.renderSlot("furnaceOutput", s.output, () => { this.handleClick(s, "output"); }, (e) => { e.preventDefault(); this.handleClick(s, "output", true); });

    // Flame + arrow indicators
    const flame = document.getElementById("furnaceFlame")!;
    const flameH = s.fuelMax > 0 ? Math.max(0, s.fuelLeft / s.fuelMax) : 0;
    flame.style.setProperty("--flame-h", `${(flameH * 100).toFixed(0)}%`);
    const arrow = document.getElementById("furnaceArrow")!;
    const prog = Math.max(0, Math.min(1, s.smeltProgress / SMELT_SECONDS));
    arrow.style.setProperty("--arrow-w", `${(prog * 100).toFixed(0)}%`);

    // Player inventory + hotbar
    const main = document.getElementById("furnaceInvMain")!;
    const bar  = document.getElementById("furnaceInvHotbar")!;
    main.innerHTML = "";
    for (let i = 0; i < this.inv.main.length; i++) {
      main.appendChild(this.invSlotEl(this.inv.main, i));
    }
    bar.innerHTML = "";
    for (let i = 0; i < this.inv.hotbar.length; i++) {
      bar.appendChild(this.invSlotEl(this.inv.hotbar, i));
    }
    this.renderCursor();
  }

  private renderSlot(id: string, slot: InvSlot, onClick: () => void, onContext: (e: Event) => void) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = "";
    if (slot.id !== 0 && slot.count > 0) {
      el.innerHTML = `
        <div class="slot-icon" style="${iconStyleFor(slot.id)}"></div>
        ${slot.count > 1 ? `<span class="slot-count">${slot.count}</span>` : ""}
      `;
      el.title = getItemName(slot.id);
    } else {
      el.title = "";
    }
    el.onclick = onClick;
    el.oncontextmenu = onContext;
  }

  private invSlotEl(arr: InvSlot[], i: number): HTMLElement {
    const el = document.createElement("div");
    el.className = "furnace-inv-slot";
    const s = arr[i];
    if (s.id !== 0 && s.count > 0) {
      el.innerHTML = `
        <div class="slot-icon" style="${iconStyleFor(s.id)}"></div>
        ${s.count > 1 ? `<span class="slot-count">${s.count}</span>` : ""}
      `;
      el.title = getItemName(s.id);
    }
    el.onclick = () => this.handleInvClick(arr, i, false);
    el.oncontextmenu = (e) => { e.preventDefault(); this.handleInvClick(arr, i, true); };
    return el;
  }

  /** Click a furnace slot — picks up / drops the cursor stack. */
  private handleClick(s: FurnaceState, which: "input" | "fuel" | "output", rightClick = false) {
    const slot = s[which];
    if (which === "output") {
      // Output is take-only: cursor must merge with output's item, otherwise
      // it just grabs the whole stack.
      if (slot.id === 0 || slot.count === 0) return;
      if (this.cursor.id === 0) {
        this.cursor = { id: slot.id, count: slot.count };
        slot.id = 0; slot.count = 0;
      } else if (this.cursor.id === slot.id) {
        this.cursor.count += slot.count;
        slot.id = 0; slot.count = 0;
      }
      sound.click();
      this.onSave?.();
      this.render();
      return;
    }
    if (rightClick && this.cursor.id !== 0) {
      // Right-click: drop 1 from cursor.
      if (slot.id === 0 || slot.id === this.cursor.id) {
        slot.id = this.cursor.id;
        slot.count = (slot.count || 0) + 1;
        this.cursor.count -= 1;
        if (this.cursor.count <= 0) this.cursor = emptySlot();
      }
    } else if (this.cursor.id === 0) {
      // Pick up.
      if (slot.id !== 0) {
        this.cursor = { id: slot.id, count: slot.count };
        slot.id = 0; slot.count = 0;
      }
    } else if (slot.id === 0) {
      // Drop whole stack.
      s[which] = { id: this.cursor.id, count: this.cursor.count };
      this.cursor = emptySlot();
    } else if (slot.id === this.cursor.id) {
      // Merge.
      slot.count += this.cursor.count;
      this.cursor = emptySlot();
    } else {
      // Swap.
      const tmp = { id: slot.id, count: slot.count };
      s[which] = { id: this.cursor.id, count: this.cursor.count };
      this.cursor = tmp;
    }
    sound.click();
    this.onSave?.();
    this.render();
  }

  private handleInvClick(arr: InvSlot[], i: number, rightClick = false) {
    const slot = arr[i];
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
