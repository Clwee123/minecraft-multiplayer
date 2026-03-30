// ── Block type definitions and colors ─────────────────────────────────────────

export const BLOCK_TYPES: Record<number, {
  name: string;
  color: number;
  topColor?: number;
  bottomColor?: number;
  emissive?: number;   // for glowing blocks
  transparent?: boolean;
  solid?: boolean;     // false = non-solid (flowers, etc.)
}> = {
  // ── Natural ───────────────────────────────────────────────────────────────
  1:  { name: "Grass",          color: 0x5a8a3c, topColor: 0x6ab04c, bottomColor: 0x8B6914 },
  2:  { name: "Dirt",           color: 0x8B6914 },
  3:  { name: "Stone",          color: 0x808080 },
  4:  { name: "Sand",           color: 0xc2b280 },
  5:  { name: "Oak Log",        color: 0x8B5E3C, topColor: 0xa0783c },
  6:  { name: "Leaves",         color: 0x2d6a2d },
  7:  { name: "Water",          color: 0x1a6b8a, transparent: true },
  // ── Crafted / Decorative ─────────────────────────────────────────────────
  8:  { name: "Brick",          color: 0x8B3A3A },
  9:  { name: "Glass",          color: 0xaaddff, transparent: true },
  10: { name: "Oak Planks",     color: 0xc8a464 },
  11: { name: "Cobblestone",    color: 0x606060 },
  12: { name: "Gravel",         color: 0x8a8070 },
  13: { name: "Gold Ore",       color: 0xc0a030, topColor: 0xd4b840 },
  14: { name: "Iron Ore",       color: 0x707a7a },
  15: { name: "Coal Ore",       color: 0x3a3a3a },
  16: { name: "Bookshelf",      color: 0xc8a464, topColor: 0x8B5E3C },
  17: { name: "Mossy Stone",    color: 0x507050 },
  18: { name: "Obsidian",       color: 0x1a0a2a },
  19: { name: "Glowstone",      color: 0xffdd88, emissive: 0xffaa00 },
  20: { name: "Snow",           color: 0xeeeeff, topColor: 0xffffff },
  21: { name: "Ice",            color: 0xaaccff, transparent: true },
  22: { name: "Crafting Table", color: 0xc8a464, topColor: 0x8B5E3C },
  23: { name: "Furnace",        color: 0x777777, topColor: 0x555555 },
  24: { name: "TNT",            color: 0xcc3333, topColor: 0x559933 },
  25: { name: "Sponge",         color: 0xc8c040 },
  26: { name: "Wool (White)",   color: 0xdddddd },
  27: { name: "Wool (Red)",     color: 0xcc3322 },
  28: { name: "Wool (Blue)",    color: 0x2244cc },
  29: { name: "Wool (Yellow)",  color: 0xddcc22 },
  30: { name: "Wool (Green)",   color: 0x2a7a2a },
  31: { name: "Chest",          color: 0x8b6914 },
  32: { name: "Bow",            color: 0x8B6914 },
};

// Hotbar presets — what shows in the 8 hotbar slots by default
export const HOTBAR_BLOCKS = [1, 3, 11, 4, 5, 10, 8, 9, 19, 18, 32];

export function getBlockName(type: number): string {
  return BLOCK_TYPES[type]?.name ?? "Unknown";
}

export function getBlockColor(type: number): number {
  return BLOCK_TYPES[type]?.color ?? 0xffffff;
}

export function isTransparent(type: number): boolean {
  return !!(BLOCK_TYPES[type]?.transparent);
}

export function getEmissive(type: number): number {
  return BLOCK_TYPES[type]?.emissive ?? 0;
}
