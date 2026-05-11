import { getItemTile, getItemName, ITEMS, BLOCKS, CREATIVE_HOTBAR } from "./Textures";

export const HOTBAR_SLOTS = 9;
export const INV_SLOTS = 27;

export interface InvSlot {
  id: number;     // 0 = empty
  count: number;
}

const MAX_STACK = 64;

export class Inventory {
  hotbar: InvSlot[] = Array.from({ length: HOTBAR_SLOTS }, () => ({ id: 0, count: 0 }));
  main:   InvSlot[] = Array.from({ length: INV_SLOTS },    () => ({ id: 0, count: 0 }));
  selected = 0;
  gameMode: "survival" | "creative" = "survival";

  constructor(mode: "survival" | "creative") {
    this.gameMode = mode;
    if (mode === "creative") {
      // Fill hotbar with creative defaults, infinite count
      CREATIVE_HOTBAR.forEach((id, i) => {
        this.hotbar[i] = { id, count: 999 };
      });
    }
  }

  getHeld(): InvSlot {
    return this.hotbar[this.selected];
  }

  /** Returns held block id if it's placeable, or 0 */
  getHeldBlock(): number {
    const s = this.getHeld();
    if (s.id === 0 || s.count === 0) return 0;
    if (s.id >= 50) return 0; // items aren't placeable
    return s.id;
  }

  /** Add `count` of item to inventory. Returns leftover. */
  add(id: number, count = 1): number {
    if (this.gameMode === "creative") return 0;
    // Try to stack onto existing slots: hotbar first then main
    for (const slot of this.hotbar) {
      if (slot.id === id && slot.count < MAX_STACK) {
        const can = Math.min(count, MAX_STACK - slot.count);
        slot.count += can;
        count -= can;
        if (count === 0) return 0;
      }
    }
    for (const slot of this.main) {
      if (slot.id === id && slot.count < MAX_STACK) {
        const can = Math.min(count, MAX_STACK - slot.count);
        slot.count += can;
        count -= can;
        if (count === 0) return 0;
      }
    }
    // Find empty slot
    for (const slot of this.hotbar) {
      if (slot.id === 0) {
        const can = Math.min(count, MAX_STACK);
        slot.id = id; slot.count = can;
        count -= can;
        if (count === 0) return 0;
      }
    }
    for (const slot of this.main) {
      if (slot.id === 0) {
        const can = Math.min(count, MAX_STACK);
        slot.id = id; slot.count = can;
        count -= can;
        if (count === 0) return 0;
      }
    }
    return count;
  }

  /** Consume one of the held item. Returns true if consumed. */
  consumeHeld(): boolean {
    if (this.gameMode === "creative") return true;
    const s = this.getHeld();
    if (s.count === 0) return false;
    s.count--;
    if (s.count === 0) s.id = 0;
    return true;
  }

  /** Remove `count` of item id from inventory. Returns true if all removed. */
  remove(id: number, count: number): boolean {
    if (this.gameMode === "creative") return true;
    let total = 0;
    for (const s of [...this.hotbar, ...this.main]) {
      if (s.id === id) total += s.count;
    }
    if (total < count) return false;
    for (const s of [...this.hotbar, ...this.main]) {
      if (s.id !== id) continue;
      const take = Math.min(count, s.count);
      s.count -= take;
      count -= take;
      if (s.count === 0) s.id = 0;
      if (count === 0) return true;
    }
    return true;
  }

  /** How many of id do we have? */
  countOf(id: number): number {
    let total = 0;
    for (const s of [...this.hotbar, ...this.main]) {
      if (s.id === id) total += s.count;
    }
    return total;
  }

  selectSlot(i: number) {
    if (i < 0 || i >= HOTBAR_SLOTS) return;
    this.selected = i;
  }

  /** Find best tool currently in hotbar for given target tool category */
  bestToolTier(category: "axe" | "pickaxe" | "shovel" | "sword"): { id: number; tier: number } | null {
    let best: { id: number; tier: number } | null = null;
    for (const s of this.hotbar) {
      if (s.id < 50 || s.count === 0) continue;
      const item = ITEMS[s.id];
      if (!item) continue;
      if (item.tool === category) {
        if (!best || (item.toolTier ?? 0) > best.tier) {
          best = { id: s.id, tier: item.toolTier ?? 1 };
        }
      }
    }
    return best;
  }
}

// ── Recipes ──────────────────────────────────────────────────────────────────
// Each recipe: { result, count, ingredients: { id: count } }
export interface Recipe {
  result: number;
  count: number;
  ingredients: { id: number; count: number }[];
  needsCraftingTable?: boolean; // 3x3 recipes need a table
}

export const RECIPES: Recipe[] = [
  // 2x2 (hand crafting)
  { result: 8,  count: 4, ingredients: [{ id: 5, count: 1 }] },        // 1 log -> 4 planks
  { result: 54, count: 4, ingredients: [{ id: 8, count: 2 }] },        // 2 planks -> 4 sticks
  { result: 36, count: 1, ingredients: [{ id: 8, count: 4 }] },        // 4 planks -> crafting table
  // 3x3 (require crafting table)
  { result: 55, count: 1, ingredients: [{ id: 8, count: 3 }, { id: 54, count: 2 }], needsCraftingTable: true },  // wood pickaxe
  { result: 56, count: 1, ingredients: [{ id: 8, count: 3 }, { id: 54, count: 2 }], needsCraftingTable: true },  // wood axe
  { result: 57, count: 1, ingredients: [{ id: 8, count: 1 }, { id: 54, count: 2 }], needsCraftingTable: true },  // wood shovel
  { result: 58, count: 1, ingredients: [{ id: 8, count: 2 }, { id: 54, count: 1 }], needsCraftingTable: true },  // wood sword
  { result: 59, count: 1, ingredients: [{ id: 9, count: 3 }, { id: 54, count: 2 }], needsCraftingTable: true },  // stone pickaxe
  { result: 60, count: 1, ingredients: [{ id: 9, count: 3 }, { id: 54, count: 2 }], needsCraftingTable: true },  // stone axe
  { result: 61, count: 1, ingredients: [{ id: 9, count: 2 }, { id: 54, count: 1 }], needsCraftingTable: true },  // stone sword
  { result: 62, count: 1, ingredients: [{ id: 52, count: 3 }, { id: 54, count: 2 }], needsCraftingTable: true }, // iron pickaxe
  { result: 63, count: 1, ingredients: [{ id: 52, count: 2 }, { id: 54, count: 1 }], needsCraftingTable: true }, // iron sword
  { result: 64, count: 1, ingredients: [{ id: 51, count: 2 }, { id: 54, count: 1 }], needsCraftingTable: true }, // diamond sword
  { result: 37, count: 1, ingredients: [{ id: 9, count: 8 }], needsCraftingTable: true },                        // furnace
  { result: 11, count: 1, ingredients: [{ id: 4, count: 4 }], needsCraftingTable: true },                        // glass
  { result: 42, count: 4, ingredients: [{ id: 50, count: 1 }, { id: 54, count: 1 }] },                           // torch
];

/** Returns recipes the inventory can currently craft. */
export function getCraftable(inv: Inventory, hasTable: boolean): Recipe[] {
  return RECIPES.filter((r) => {
    if (r.needsCraftingTable && !hasTable) return false;
    return r.ingredients.every(ing => inv.countOf(ing.id) >= ing.count);
  });
}

/** Consume ingredients and produce result. Returns true on success. */
export function craft(inv: Inventory, recipe: Recipe): boolean {
  for (const ing of recipe.ingredients) {
    if (inv.countOf(ing.id) < ing.count) return false;
  }
  for (const ing of recipe.ingredients) inv.remove(ing.id, ing.count);
  inv.add(recipe.result, recipe.count);
  return true;
}
