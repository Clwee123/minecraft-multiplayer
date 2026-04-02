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
  73: { name: "Nether Portal",  color: 0x7722cc, emissive: 0x9933ff, transparent: true, solid: false },
  74: { name: "Copper Ore",     color: 0xb87333 },
  75: { name: "Lapis Ore",      color: 0x2244aa },
  76: { name: "Copper Ingot",   color: 0xdd8844, solid: false },
  77: { name: "Lapis Lazuli",   color: 0x2255cc, solid: false },
  78: { name: "Ladder",          color: 0xc8a464, solid: false, transparent: true },
  79: { name: "Oak Fence",       color: 0xc8a464, transparent: true },
  80: { name: "Fence Gate",      color: 0xc8a464, transparent: true, solid: false },
  81: { name: "Stone Bricks",    color: 0x7a7a7a },
  82: { name: "Mossy Stone Bricks", color: 0x5a7a5a },
  83: { name: "Spruce Log",         color: 0x4a3528, topColor: 0x6a4a30 },
  84: { name: "Spruce Leaves",      color: 0x1a4a2a },
  85: { name: "Palm Log",           color: 0x9a7a4a, topColor: 0x8a6a3a },
  86: { name: "Palm Leaves",        color: 0x3a8a2a },
  87: { name: "Birch Log",          color: 0xd4cbb5, topColor: 0xc8b898 },
  88: { name: "Birch Leaves",       color: 0x4a9a3a },
  89: { name: "Snowball",           color: 0xeeeeff, solid: false },
  90: { name: "Egg",               color: 0xf0e0c0, solid: false },
  91: { name: "Strength Potion",   color: 0xff4444, solid: false },
  92: { name: "Speed Potion",      color: 0x44aaff, solid: false },
  93: { name: "Saddle",            color: 0x8b4513, solid: false },
  94: { name: "Anvil",             color: 0x555555 },
  95: { name: "Leather",           color: 0x8b6914, solid: false },

  // ── Crafting materials & tools ────────────────────────────────────────────
  280: { name: "Stick",             color: 0xc8a464, solid: false },
  // Wooden tools
  268: { name: "Wooden Sword",      color: 0xc8a464, solid: false },
  269: { name: "Wooden Shovel",     color: 0xc8a464, solid: false },
  270: { name: "Wooden Pickaxe",    color: 0xc8a464, solid: false },
  271: { name: "Wooden Axe",        color: 0xc8a464, solid: false },
  // Stone tools
  272: { name: "Stone Sword",       color: 0x808080, solid: false },
  273: { name: "Stone Shovel",      color: 0x808080, solid: false },
  274: { name: "Stone Pickaxe",     color: 0x808080, solid: false },
  275: { name: "Stone Axe",         color: 0x808080, solid: false },
  // Iron tools
  257: { name: "Iron Pickaxe",      color: 0xdddddd, solid: false },
  258: { name: "Iron Axe",          color: 0xdddddd, solid: false },
  267: { name: "Iron Sword",        color: 0xdddddd, solid: false },
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
