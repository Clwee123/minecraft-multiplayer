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

  // Bed: 3 red wool over 3 planks
  { kind: "shaped", pattern: ["RRR", "PPP"], key: { R: 15, P: 8 }, result: 44, count: 1 },

  // ── Vanilla recipe expansion ───────────────────────────────────────────
  // Codes added: F=feather, X=sand, K=coal, S=stick, T=string, B=blaze rod,
  // E=ender pearl, R=red wool, W=white wool, U=sugarcane(none, use wheat 73),
  // N=gunpowder(76), A=paper(131), L=leather(77), Y=clay(skip), Q=iron ingot(52),
  // Z=gold ingot(53), V=redstone(112), I=iron, D=diamond, M=mushroom(34/35),
  // O=cobblestone(9), G=glass(11), J=glowstone(22), H=wheat(73), p=pumpkin(166).

  // Material → block (compress)
  { kind: "shaped", pattern: ["III", "III", "III"], key: { I: 52 }, result: 39, count: 1 },  // iron block
  { kind: "shaped", pattern: ["III", "III", "III"], key: { I: 53 }, result: 40, count: 1 },  // gold block
  { kind: "shaped", pattern: ["III", "III", "III"], key: { I: 51 }, result: 41, count: 1 },  // diamond block
  { kind: "shaped", pattern: ["III", "III", "III"], key: { I: 50 }, result: 170, count: 1 }, // coal block

  // Bricks: 4 bricks → bricks block (need brick item; not yet — use clay reverse)
  // (skipped — no brick ITEM id)

  // Stone bricks: 4 stone → stone bricks
  { kind: "shaped", pattern: ["OO", "OO"], key: { O: 3 }, result: 26, count: 4 },

  // Sandstone: 4 sand → sandstone
  { kind: "shaped", pattern: ["XX", "XX"], key: { X: 4 }, result: 27, count: 1 },

  // Bookshelf: 3 books + 6 planks
  { kind: "shaped", pattern: ["PPP", "BBB", "PPP"], key: { P: 8, B: 130 }, result: 13, count: 1 },

  // Book: 3 paper + 1 leather
  { kind: "shapeless", items: { 131: 3, 77: 1 }, result: 130, count: 1 },

  // Paper: 3 wheat (closest stand-in for sugar cane in this build)
  { kind: "shaped", pattern: ["HHH"], key: { H: 73 }, result: 131, count: 3 },

  // Arrow: flint(none) → use stick + feather + iron-nugget(none) → use string+stick+feather
  // Simplified: 1 stick + 1 feather → 1 arrow
  { kind: "shapeless", items: { 54: 1, 75: 1 }, result: 80, count: 1 },

  // Bow: 3 sticks + 3 strings
  { kind: "shaped", pattern: [".SY", "S.Y", ".SY"], key: { S: 54, Y: 74 }, result: 102, count: 1 },

  // Fishing Rod: 3 sticks (diagonal) + 2 string
  { kind: "shaped", pattern: ["..S", ".SY", "S.Y"], key: { S: 54, Y: 74 }, result: 103, count: 1 },

  // Flint and Steel: iron ingot + flint (no flint item) → iron + coal substitute
  { kind: "shapeless", items: { 52: 1, 50: 1 }, result: 107, count: 1 },

  // Shears: 2 iron ingots diagonal
  { kind: "shaped", pattern: [".I", "I."], key: { I: 52 }, result: 104, count: 1 },

  // Bucket: 3 iron ingots in V
  { kind: "shaped", pattern: ["I.I", ".I."], key: { I: 52 }, result: 98, count: 1 },

  // TNT: 4 sand + 5 gunpowder (checkered)
  { kind: "shaped", pattern: ["NXN", "XNX", "NXN"], key: { N: 76, X: 4 }, result: 25, count: 1 },

  // Ladder: 7 sticks in H pattern
  { kind: "shaped", pattern: ["S.S", "SSS", "S.S"], key: { S: 54 }, result: 43, count: 3 },

  // Snow block: 4 snowballs
  { kind: "shaped", pattern: ["NN", "NN"], key: { N: 132 }, result: 23, count: 1 },

  // Hay block: 9 wheat
  { kind: "shaped", pattern: ["HHH", "HHH", "HHH"], key: { H: 73 }, result: 167, count: 1 },

  // Pumpkin pie: 1 pumpkin + 1 sugar + 1 egg
  { kind: "shapeless", items: { 166: 1, 97: 1, 79: 1 }, result: 90, count: 1 },

  // Mushroom stew: 1 red mushroom + 1 brown mushroom + 1 bowl(none — use 94 directly)
  // Need 94 (mushroom stew) recipe — use mushrooms 34 (red), 35 (brown)
  { kind: "shapeless", items: { 34: 1, 35: 1 }, result: 94, count: 1 },

  // Beetroot soup
  { kind: "shapeless", items: { 197: 6 }, result: 199, count: 1 },

  // Cake: 3 wheat (simplified — vanilla needs milk + sugar + egg too)
  { kind: "shaped", pattern: ["HHH", "HHH"], key: { H: 73 }, result: 91, count: 1 },

  // Cookie: 2 wheat + 1 cocoa (no cocoa item — use sugar)
  { kind: "shapeless", items: { 73: 2, 97: 1 }, result: 91, count: 8 },

  // Golden Apple: 8 gold + 1 apple (no apple — use carrot)
  { kind: "shaped", pattern: ["ZZZ", "ZCZ", "ZZZ"], key: { Z: 53, C: 86 }, result: 85, count: 1 },

  // Golden Carrot: 8 gold nuggets + 1 carrot
  { kind: "shaped", pattern: ["NNN", "NCN", "NNN"], key: { N: 179, C: 86 }, result: 146, count: 1 },

  // Gold Nuggets: 1 gold ingot → 9 nuggets
  { kind: "shapeless", items: { 53: 1 }, result: 179, count: 9 },

  // Gold ingot from 9 nuggets
  { kind: "shaped", pattern: ["NNN", "NNN", "NNN"], key: { N: 179 }, result: 53, count: 1 },

  // Glowstone block: 4 glowstone dust
  { kind: "shaped", pattern: ["VV", "VV"], key: { V: 111 }, result: 22, count: 1 },

  // Redstone block: 9 redstone dust
  { kind: "shaped", pattern: ["VVV", "VVV", "VVV"], key: { V: 112 }, result: 172, count: 1 },

  // Iron / Diamond / Gold leggings (T-shape using armor approximations)
  // Iron full set:
  { kind: "shaped", pattern: ["III", "I.I"],              key: { I: 52 }, result: 118, count: 1 }, // helmet
  { kind: "shaped", pattern: ["I.I", "III", "III"],       key: { I: 52 }, result: 119, count: 1 }, // chestplate
  { kind: "shaped", pattern: ["III", "I.I", "I.I"],       key: { I: 52 }, result: 120, count: 1 }, // leggings
  { kind: "shaped", pattern: ["I.I", "I.I"],              key: { I: 52 }, result: 121, count: 1 }, // boots

  // Leather armor:
  { kind: "shaped", pattern: ["LLL", "L.L"],              key: { L: 77 }, result: 114, count: 1 },
  { kind: "shaped", pattern: ["L.L", "LLL", "LLL"],       key: { L: 77 }, result: 115, count: 1 },
  { kind: "shaped", pattern: ["LLL", "L.L", "L.L"],       key: { L: 77 }, result: 116, count: 1 },
  { kind: "shaped", pattern: ["L.L", "L.L"],              key: { L: 77 }, result: 117, count: 1 },

  // Diamond armor:
  { kind: "shaped", pattern: ["DDD", "D.D"],              key: { D: 51 }, result: 126, count: 1 },
  { kind: "shaped", pattern: ["D.D", "DDD", "DDD"],       key: { D: 51 }, result: 127, count: 1 },
  { kind: "shaped", pattern: ["DDD", "D.D", "D.D"],       key: { D: 51 }, result: 128, count: 1 },
  { kind: "shaped", pattern: ["D.D", "D.D"],              key: { D: 51 }, result: 129, count: 1 },

  // ── Redstone family ────────────────────────────────────────────────────
  // Codes: V=redstone dust(112), J=glowstone(22), O=cobblestone(9),
  //        P=planks(8), I=iron ingot(52), S=stick(54).

  // Piston: planks top, cobble sides, iron centre middle, redstone bottom centre
  { kind: "shaped", pattern: ["PPP", "OIO", "OVO"],       key: { P: 8, O: 9, I: 52, V: 112 }, result: 220, count: 1 },
  // Sticky piston: piston + slimeball(113)
  { kind: "shapeless", items: { 220: 1, 113: 1 },                                              result: 221, count: 1 },
  // Redstone lamp: 4 redstone around glowstone (vanilla)
  { kind: "shaped", pattern: [".V.", "VJV", ".V."],       key: { V: 112, J: 22 },              result: 222, count: 1 },
  // Lever: stick on cobblestone
  { kind: "shaped", pattern: ["S", "O"],                  key: { S: 54, O: 9 },                result: 224, count: 1 },
  // Redstone torch: redstone on stick
  { kind: "shaped", pattern: ["V", "S"],                  key: { V: 112, S: 54 },              result: 225, count: 1 },
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
