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
  33: { name: "Fishing Rod",    color: 0x8b6914 },
  34: { name: "Bed",            color: 0xff4444 },
  35: { name: "Iron Helmet",    color: 0x888888 },
  36: { name: "Iron Chestplate", color: 0x888888 },
  37: { name: "Iron Leggings",  color: 0x777777 },
  38: { name: "Iron Boots",     color: 0x666666 },
  39: { name: "Compass",        color: 0xffdd00 },
  40: { name: "Enchanting Table", color: 0x6633cc },
  41: { name: "Brewing Stand",  color: 0x884400 },
  42: { name: "Nether Wart",    color: 0xaa1111, solid: false },
  43: { name: "Sugar",          color: 0xffffff, solid: false },
  44: { name: "Red Mushroom",   color: 0xdd2222, solid: false },
  45: { name: "Wheat",          color: 0xffee77, solid: false },
  46: { name: "Enchanted Book", color: 0x3333ff },
  47: { name: "Lava",           color: 0xff4400, emissive: 0xff8800 },
  48: { name: "Spawner",        color: 0x222222, emissive: 0x333333 },
  49: { name: "Sandstone",      color: 0xddc878 },
  50: { name: "Cactus",         color: 0x2d8a1e, solid: false },
  51: { name: "Flower",         color: 0xff6688, solid: false },
  52: { name: "Dead Bush",      color: 0x8b5a2b, solid: false },
  53: { name: "Packed Ice",     color: 0x9bcdff, transparent: true },
  54: { name: "Terracotta",     color: 0xaa6644 },
  55: { name: "Campfire",       color: 0xff6600, emissive: 0xff4400 },
  56: { name: "Torch",          color: 0xffdd44, emissive: 0xff9900 },
  57: { name: "Pressure Plate", color: 0xaaaaaa },
  58: { name: "Lever",          color: 0x555555 },
  59: { name: "Redstone Lamp",  color: 0xff2200, emissive: 0x000000 },
  60: { name: "Map",            color: 0xddcc88 },
  61: { name: "Diamond Ore",    color: 0x55ffee },
  62: { name: "Iron Ingot",     color: 0xdddddd },
  63: { name: "Gold Ingot",     color: 0xffdd44 },
  64: { name: "Coal",           color: 0x222222 },
  65: { name: "Diamond",        color: 0x44ffee },
  66: { name: "Rail",           color: 0x888866 },
  67: { name: "Powered Rail",   color: 0xff8800 },
  68: { name: "Minecart",       color: 0x888888 },
  69: { name: "Music Disc (Green)", color: 0x44aa44 },
  70: { name: "Music Disc (Red)",   color: 0xaa4444 },
  71: { name: "Music Disc (Blue)",  color: 0x4444aa },
  72: { name: "Shield",         color: 0xcccccc },
};

// Hotbar presets — what shows in the 8 hotbar slots by default
export const HOTBAR_BLOCKS = [1, 3, 11, 4, 5, 10, 8, 9, 19, 18, 32, 33, 34, 39, 56, 60];

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
