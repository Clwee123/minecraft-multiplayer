import { ITEMS, BLOCKS, CREATIVE_HOTBAR, isBlockId, isItemId } from "./Textures";

export const HOTBAR_SLOTS = 9;
export const INV_SLOTS = 27;

export interface InvSlot {
  id: number;     // 0 = empty
  count: number;
  /** Current tool damage (0 = pristine). Only meaningful for tools/swords. */
  damage?: number;
}

const MAX_STACK = 64;
const TOOL_STACK = 1;

function maxStackFor(id: number): number {
  if (id === 0) return 0;
  // Tools don't stack (regardless of which id range they live in).
  if (ITEMS[id]?.tool) return TOOL_STACK;
  if (ITEMS[id]?.durability) return TOOL_STACK; // durability-bearing items
  return MAX_STACK;
}

/** Damage a tool slot by `amount` uses. Returns true if the tool broke. */
export function damageTool(slot: InvSlot, amount = 1): boolean {
  if (slot.id === 0) return false;
  const item = ITEMS[slot.id];
  if (!item || !item.durability) return false;
  slot.damage = (slot.damage ?? 0) + amount;
  if (slot.damage >= item.durability) {
    slot.id = 0; slot.count = 0; slot.damage = 0;
    return true;
  }
  return false;
}

export function emptySlot(): InvSlot { return { id: 0, count: 0 }; }

export class Inventory {
  hotbar: InvSlot[] = Array.from({ length: HOTBAR_SLOTS }, emptySlot);
  main:   InvSlot[] = Array.from({ length: INV_SLOTS },    emptySlot);
  craft2x2: InvSlot[] = Array.from({ length: 4 },          emptySlot);
  craft3x3: InvSlot[] = Array.from({ length: 9 },          emptySlot);
  selected = 0;
  gameMode: "survival" | "creative" = "survival";

  constructor(mode: "survival" | "creative") {
    this.gameMode = mode;
    if (mode === "creative") {
      CREATIVE_HOTBAR.forEach((id, i) => {
        this.hotbar[i] = { id, count: 999 };
      });
    }
  }

  getHeld(): InvSlot { return this.hotbar[this.selected]; }

  getHeldBlock(): number {
    const s = this.getHeld();
    if (s.id === 0 || s.count === 0) return 0;
    return isBlockId(s.id) ? s.id : 0;
  }

  /** All inventory slots (hotbar + main) for iteration. */
  allSlots(): InvSlot[] { return [...this.hotbar, ...this.main]; }

  add(id: number, count = 1): number {
    if (this.gameMode === "creative") return 0;
    const cap = maxStackFor(id);
    for (const slot of this.hotbar) {
      if (slot.id === id && slot.count < cap) {
        const can = Math.min(count, cap - slot.count);
        slot.count += can; count -= can;
        if (count === 0) return 0;
      }
    }
    for (const slot of this.main) {
      if (slot.id === id && slot.count < cap) {
        const can = Math.min(count, cap - slot.count);
        slot.count += can; count -= can;
        if (count === 0) return 0;
      }
    }
    for (const slot of this.hotbar) {
      if (slot.id === 0) {
        const can = Math.min(count, cap);
        slot.id = id; slot.count = can; slot.damage = 0; count -= can;
        if (count === 0) return 0;
      }
    }
    for (const slot of this.main) {
      if (slot.id === 0) {
        const can = Math.min(count, cap);
        slot.id = id; slot.count = can; slot.damage = 0; count -= can;
        if (count === 0) return 0;
      }
    }
    return count;
  }

  /** Damage the currently held tool. Returns true if it just broke. */
  damageHeld(amount = 1): boolean {
    if (this.gameMode === "creative") return false;
    const slot = this.getHeld();
    return damageTool(slot, amount);
  }

  consumeHeld(): boolean {
    if (this.gameMode === "creative") return true;
    const s = this.getHeld();
    if (s.count === 0) return false;
    s.count--;
    if (s.count === 0) s.id = 0;
    return true;
  }

  remove(id: number, count: number): boolean {
    if (this.gameMode === "creative") return true;
    let total = 0;
    for (const s of this.allSlots()) if (s.id === id) total += s.count;
    if (total < count) return false;
    for (const s of this.allSlots()) {
      if (s.id !== id) continue;
      const take = Math.min(count, s.count);
      s.count -= take; count -= take;
      if (s.count === 0) s.id = 0;
      if (count === 0) return true;
    }
    return true;
  }

  countOf(id: number): number {
    let total = 0;
    for (const s of this.allSlots()) if (s.id === id) total += s.count;
    return total;
  }

  selectSlot(i: number) {
    if (i < 0 || i >= HOTBAR_SLOTS) return;
    this.selected = i;
  }

  bestToolTier(category: "axe" | "pickaxe" | "shovel" | "sword"): { id: number; tier: number } | null {
    let best: { id: number; tier: number } | null = null;
    for (const s of this.hotbar) {
      if (s.id === 0 || s.count === 0) continue;
      const item = ITEMS[s.id];
      if (!item) continue; // blocks aren't tools
      if (item.tool === category) {
        if (!best || (item.toolTier ?? 0) > best.tier) {
          best = { id: s.id, tier: item.toolTier ?? 1 };
        }
      }
    }
    return best;
  }
}

// ── Shaped Recipes ───────────────────────────────────────────────────────────
//
// Each recipe is either:
//   - shaped:  { pattern, key, result, count }  (positions matter; "." or " " = empty)
//   - shapeless: { items: {id:count}, result, count }
//
// Shaped recipes are tried at every (dx, dy) offset that fits the pattern in
// the grid. Slots outside the pattern bounding box must be empty.

export interface ShapedRecipe {
  kind: "shaped";
  pattern: string[];
  key: Record<string, number>;
  result: number;
  count: number;
}
export interface ShapelessRecipe {
  kind: "shapeless";
  items: Record<number, number>;
  result: number;
  count: number;
}
export type Recipe = ShapedRecipe | ShapelessRecipe;

// Codes used in patterns:
//   P = oak planks (8)
//   L = oak log (5)
//   S = stick (54)
//   C = cobblestone (9)
//   I = iron ingot (52)
//   D = diamond (51)
//   G = glass (11)  (output, but used as ingredient elsewhere)
//   X = sand (4)
//   K = coal (50)
//   J = lapis lazuli (none yet)
//
export const RECIPES: Recipe[] = [
  // Shapeless: 1 log -> 4 planks
  { kind: "shapeless", items: { 5: 1 }, result: 8, count: 4 },
  // Shapeless: 1 spruce log -> 4 planks (we have only oak planks for now)
  { kind: "shapeless", items: { 28: 1 }, result: 8, count: 4 },

  // Shaped: 2 planks stacked -> 4 sticks
  { kind: "shaped", pattern: ["P", "P"], key: { P: 8 }, result: 54, count: 4 },

  // Crafting table: 2x2 planks
  { kind: "shaped", pattern: ["PP", "PP"], key: { P: 8 }, result: 36, count: 1 },

  // Torch: coal on stick (1x2 vertical)
  { kind: "shaped", pattern: ["K", "S"], key: { K: 50, S: 54 }, result: 42, count: 4 },

  // ── Tools (3x3 only) ────────────────────────────────────────────────────────
  // Wooden pickaxe
  { kind: "shaped", pattern: ["PPP", ".S.", ".S."], key: { P: 8, S: 54 }, result: 55, count: 1 },
  // Wooden axe
  { kind: "shaped", pattern: ["PP.", "PS.", ".S."], key: { P: 8, S: 54 }, result: 56, count: 1 },
  { kind: "shaped", pattern: [".PP", ".SP", ".S."], key: { P: 8, S: 54 }, result: 56, count: 1 },
  // Wooden shovel
  { kind: "shaped", pattern: ["P", "S", "S"], key: { P: 8, S: 54 }, result: 57, count: 1 },
  // Wooden sword
  { kind: "shaped", pattern: ["P", "P", "S"], key: { P: 8, S: 54 }, result: 58, count: 1 },

  // Stone tools
  { kind: "shaped", pattern: ["CCC", ".S.", ".S."], key: { C: 9, S: 54 }, result: 59, count: 1 },
  { kind: "shaped", pattern: ["CC.", "CS.", ".S."], key: { C: 9, S: 54 }, result: 60, count: 1 },
  { kind: "shaped", pattern: [".CC", ".SC", ".S."], key: { C: 9, S: 54 }, result: 60, count: 1 },
  { kind: "shaped", pattern: ["C", "S", "S"], key: { C: 9, S: 54 }, result: 67, count: 1 },
  { kind: "shaped", pattern: ["C", "C", "S"], key: { C: 9, S: 54 }, result: 61, count: 1 },

  // Iron tools
  { kind: "shaped", pattern: ["III", ".S.", ".S."], key: { I: 52, S: 54 }, result: 62, count: 1 },
  { kind: "shaped", pattern: ["I", "I", "S"], key: { I: 52, S: 54 }, result: 63, count: 1 },

  // Diamond sword
  { kind: "shaped", pattern: ["D", "D", "S"], key: { D: 51, S: 54 }, result: 64, count: 1 },

  // Furnace
  { kind: "shaped", pattern: ["CCC", "C.C", "CCC"], key: { C: 9 }, result: 37, count: 1 },

  // Chest — 8 oak planks surrounding empty center (vanilla recipe)
  { kind: "shaped", pattern: ["PPP", "P.P", "PPP"], key: { P: 8 }, result: 171, count: 1 },

  // Glass (smelting; for now allow as recipe)
  { kind: "shapeless", items: { 4: 4 }, result: 11, count: 1 },

  // Bed: 3 red wool over 3 planks
  { kind: "shaped", pattern: ["RRR", "PPP"], key: { R: 15, P: 8 }, result: 44, count: 1 },
];

/** Try to match the given crafting grid (2x2 or 3x3) against any recipe.
 *  Returns the recipe that matches, or null. */
export function matchRecipe(grid: InvSlot[], dim: 2 | 3): Recipe | null {
  // Build a "slot" representation: 2D array of ids (0 if empty)
  const cells: number[][] = [];
  for (let y = 0; y < dim; y++) {
    const row: number[] = [];
    for (let x = 0; x < dim; x++) row.push(grid[y * dim + x].id);
    cells.push(row);
  }

  for (const r of RECIPES) {
    if (r.kind === "shapeless") {
      // Count what's actually in the grid (ignoring count, just ids)
      const got: Record<number, number> = {};
      let nonEmpty = 0;
      for (let y = 0; y < dim; y++) {
        for (let x = 0; x < dim; x++) {
          const id = cells[y][x];
          if (id !== 0) {
            got[id] = (got[id] ?? 0) + 1;
            nonEmpty++;
          }
        }
      }
      // Need same total count
      let needTotal = 0;
      for (const id in r.items) needTotal += r.items[+id];
      if (needTotal !== nonEmpty) continue;
      let ok = true;
      for (const id in r.items) {
        if ((got[+id] ?? 0) !== r.items[+id]) { ok = false; break; }
      }
      if (ok) return r;
    } else {
      const ph = r.pattern.length;
      const pw = r.pattern[0].length;
      if (ph > dim || pw > dim) continue;
      // Try each offset (dy, dx) where pattern fits
      for (let dy = 0; dy <= dim - ph; dy++) {
        for (let dx = 0; dx <= dim - pw; dx++) {
          if (matchAt(cells, dim, r, dx, dy)) return r;
        }
      }
    }
  }
  return null;
}

function matchAt(cells: number[][], dim: number, r: ShapedRecipe, dx: number, dy: number): boolean {
  const ph = r.pattern.length, pw = r.pattern[0].length;
  for (let y = 0; y < dim; y++) {
    for (let x = 0; x < dim; x++) {
      const cellId = cells[y][x];
      // Position inside pattern bounding box?
      const inside = x >= dx && x < dx + pw && y >= dy && y < dy + ph;
      if (inside) {
        const ch = r.pattern[y - dy][x - dx];
        if (ch === "." || ch === " ") {
          if (cellId !== 0) return false;
        } else {
          const needId = r.key[ch];
          if (needId == null) return false;
          if (cellId !== needId) return false;
        }
      } else {
        if (cellId !== 0) return false;
      }
    }
  }
  return true;
}

/** Consume one unit of each non-empty grid slot. */
export function consumeGrid(grid: InvSlot[]) {
  for (const s of grid) {
    if (s.count > 0) {
      s.count--;
      if (s.count === 0) s.id = 0;
    }
  }
}
