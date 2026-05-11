import * as THREE from "three";

// Atlas: 16 columns × 16 rows of 32-px tiles → 512×512 image.
// Source PNGs from minecraft-assets-master/data/1.9 are 16-px and upscaled
// at atlas-build time. Rows 0..3 are block faces (T_*), rows 4..5 are item
// icons (T_I_*).
const ATLAS_SIZE = 512;
const TILE_SIZE = 32;
const COLS = ATLAS_SIZE / TILE_SIZE;

let _atlasTex: THREE.Texture | null = null;
let _liveAtlasCanvas: HTMLCanvasElement | null = null;
let _liveAtlasTex: THREE.CanvasTexture | null = null;

export interface BlockDef {
  faces: [number, number, number, number, number, number];
  transparent?: boolean;
  isWater?: boolean;
  isLeaf?: boolean;
  solid?: boolean;
  crossShape?: boolean;
  hardness?: number;
  drop?: number;
  dropCount?: number;
  tool?: "any" | "axe" | "pickaxe" | "shovel" | "shears";
  /** Minimum tool tier needed for the block to drop. 1=wood, 2=stone, 3=iron, 4=diamond. Defaults to 1 when `tool` is set. */
  minToolTier?: number;
  emissive?: boolean;
  /** Override the inventory icon tile (defaults to faces[0]). Useful for blocks like beds where the side texture isn't a great hotbar icon. */
  iconTile?: number;
}

const T = (col: number, row: number) => col + row * COLS;
const all6 = (t: number): [number,number,number,number,number,number] => [t,t,t,t,t,t];

// Row 0
export const T_GRASS_TOP   = T(0, 0);
export const T_GRASS_SIDE  = T(1, 0);
export const T_DIRT        = T(2, 0);
export const T_STONE       = T(3, 0);
export const T_SAND        = T(4, 0);
export const T_LOG_SIDE    = T(5, 0);
export const T_LOG_TOP     = T(6, 0);
export const T_LEAVES      = T(7, 0);
export const T_WATER       = T(8, 0);
export const T_PLANKS      = T(9, 0);
export const T_COBBLE      = T(10, 0);
export const T_GRAVEL      = T(11, 0);
export const T_GLASS       = T(12, 0);
export const T_BRICK       = T(13, 0);
export const T_BOOKSHELF   = T(14, 0);
export const T_CRAFT_TOP   = T(15, 0);
// Row 1
export const T_GOLD_ORE    = T(0, 1);
export const T_IRON_ORE    = T(1, 1);
export const T_COAL_ORE    = T(2, 1);
export const T_DIAM_ORE    = T(3, 1);
export const T_GLOWSTONE   = T(4, 1);
export const T_SNOW        = T(5, 1);
export const T_ICE         = T(6, 1);
export const T_TNT_SIDE    = T(7, 1);
export const T_TNT_TOP     = T(8, 1);
export const T_OBSIDIAN    = T(9, 1);
export const T_WOOL_W      = T(10, 1);
export const T_WOOL_R      = T(11, 1);
export const T_MOSSY_COBB  = T(12, 1);
export const T_STONEBRICK  = T(13, 1);
export const T_SANDSTONE   = T(14, 1);
export const T_SANDSTONE_T = T(15, 1);
// Row 2
export const T_FLOWER_RED  = T(0, 2);
export const T_FLOWER_YEL  = T(1, 2);
export const T_TALLGRASS   = T(2, 2);
export const T_SAPLING     = T(3, 2);
export const T_MUSHROOM_R  = T(4, 2);
export const T_MUSHROOM_B  = T(5, 2);
export const T_CACTUS      = T(6, 2);
export const T_REEDS       = T(7, 2);
export const T_FIRE        = T(8, 2);
export const T_SPRUCE_SIDE = T(9, 2);
export const T_SPRUCE_TOP  = T(10, 2);
export const T_SPRUCE_LEAF = T(11, 2);
export const T_BIRCH_SIDE  = T(12, 2);
export const T_BIRCH_TOP   = T(13, 2);
export const T_BIRCH_LEAF  = T(14, 2);
export const T_IRON_BLOCK  = T(15, 2);
// Row 3
export const T_FURNACE_F   = T(0, 3);
export const T_FURNACE_S   = T(1, 3);
export const T_FURNACE_T   = T(2, 3);
export const T_FURNACE_ON  = T(3, 3);
export const T_DIAM_BLOCK  = T(4, 3);
export const T_GOLD_BLOCK  = T(5, 3);
export const T_COAL_BLOCK  = T(6, 3);
export const T_REDSTONE_O  = T(7, 3);
export const T_LAVA        = T(8, 3);
export const T_CRAFT_SIDE  = T(9, 3);
export const T_CRAFT_FRONT = T(10, 3);
export const T_CHEST_TOP   = T(11, 3);
export const T_LAPIS_ORE   = T(12, 3);
export const T_LAPIS_BLOCK = T(13, 3);
export const T_LADDER      = T(14, 3);
export const T_TORCH       = T(15, 3);

// ── Item icons (rows 4-5 of the atlas) ────────────────────────────────────
// IDs (column, row) match the order they're placed by build_mc_atlas.py.
export const T_I_COAL        = T(0, 4);
export const T_I_DIAMOND     = T(1, 4);
export const T_I_IRON_INGOT  = T(2, 4);
export const T_I_GOLD_INGOT  = T(3, 4);
export const T_I_STICK       = T(4, 4);
export const T_I_APPLE       = T(5, 4);
export const T_I_BREAD       = T(6, 4);
export const T_I_WOOD_PICK   = T(7, 4);
export const T_I_STONE_PICK  = T(8, 4);
export const T_I_IRON_PICK   = T(9, 4);
export const T_I_DIAM_PICK   = T(10, 4);
export const T_I_WOOD_AXE    = T(11, 4);
export const T_I_STONE_AXE   = T(12, 4);
export const T_I_IRON_AXE    = T(13, 4);
export const T_I_DIAM_AXE    = T(14, 4);
export const T_I_WOOD_SHOVEL = T(15, 4);
export const T_I_STONE_SHOVEL= T(0, 5);
export const T_I_IRON_SHOVEL = T(1, 5);
export const T_I_DIAM_SHOVEL = T(2, 5);
export const T_I_WOOD_SWORD  = T(3, 5);
export const T_I_STONE_SWORD = T(4, 5);
export const T_I_IRON_SWORD  = T(5, 5);
export const T_I_DIAM_SWORD  = T(6, 5);
export const T_I_BED         = T(7, 5);
export const T_I_WHEAT       = T(8, 5);
export const T_I_STRING      = T(9, 5);
export const T_I_FEATHER     = T(10, 5);
export const T_I_GUNPOWDER   = T(11, 5);
export const T_I_LEATHER     = T(12, 5);
export const T_I_BONE        = T(13, 5);
export const T_I_EGG         = T(14, 5);
export const T_I_ARROW       = T(15, 5);

// ── Block definitions ─────────────────────────────────────────────────────────
export const BLOCKS: Record<number, BlockDef> = {
  1:  { faces: [T_GRASS_SIDE, T_GRASS_SIDE, T_GRASS_TOP, T_DIRT, T_GRASS_SIDE, T_GRASS_SIDE], hardness: 0.6, drop: 2, tool: "shovel" },
  2:  { faces: all6(T_DIRT),                 hardness: 0.5, tool: "shovel" },
  3:  { faces: all6(T_STONE),                hardness: 1.5, drop: 10, tool: "pickaxe" },
  4:  { faces: all6(T_SAND),                 hardness: 0.5, tool: "shovel" },
  5:  { faces: [T_LOG_SIDE, T_LOG_SIDE, T_LOG_TOP, T_LOG_TOP, T_LOG_SIDE, T_LOG_SIDE], hardness: 2.0, tool: "axe" },
  6:  { faces: all6(T_LEAVES), isLeaf: true, hardness: 0.2, drop: 33, tool: "shears" }, // drops sapling
  7:  { faces: all6(T_WATER), transparent: true, isWater: true, solid: false, hardness: 0, drop: 0 },
  8:  { faces: all6(T_PLANKS),               hardness: 2.0, tool: "axe" },
  9:  { faces: all6(T_COBBLE),               hardness: 2.0, tool: "pickaxe" },
  10: { faces: all6(T_GRAVEL),               hardness: 0.6, tool: "shovel" },
  11: { faces: all6(T_GLASS), transparent: true, hardness: 0.3, drop: 0 },
  12: { faces: all6(T_BRICK),                hardness: 2.0, tool: "pickaxe" },
  13: { faces: [T_BOOKSHELF, T_BOOKSHELF, T_PLANKS, T_PLANKS, T_BOOKSHELF, T_BOOKSHELF], hardness: 1.5, tool: "axe" },
  14: { faces: all6(T_WOOL_W),               hardness: 0.8 },
  15: { faces: all6(T_WOOL_R),               hardness: 0.8 },
  16: { faces: all6(T_OBSIDIAN),             hardness: 50, tool: "pickaxe", minToolTier: 4 },
  17: { faces: all6(T_MOSSY_COBB),           hardness: 2.0, tool: "pickaxe", minToolTier: 1 },
  18: { faces: all6(T_COAL_ORE),             hardness: 3.0, drop: 50, tool: "pickaxe", minToolTier: 1 },
  19: { faces: all6(T_IRON_ORE),             hardness: 3.0, tool: "pickaxe", minToolTier: 2 },
  20: { faces: all6(T_GOLD_ORE),             hardness: 3.0, tool: "pickaxe", minToolTier: 3 },
  21: { faces: all6(T_DIAM_ORE),             hardness: 3.0, drop: 51, tool: "pickaxe", minToolTier: 3 },
  22: { faces: all6(T_GLOWSTONE), emissive: true, hardness: 0.3 },
  23: { faces: all6(T_SNOW),                 hardness: 0.2, tool: "shovel" },
  24: { faces: all6(T_ICE), transparent: true, hardness: 0.5, drop: 0, tool: "pickaxe" },
  25: { faces: [T_TNT_SIDE, T_TNT_SIDE, T_TNT_TOP, T_TNT_TOP, T_TNT_SIDE, T_TNT_SIDE], hardness: 0 },
  26: { faces: all6(T_STONEBRICK),           hardness: 1.5, tool: "pickaxe" },
  27: { faces: [T_SANDSTONE, T_SANDSTONE, T_SANDSTONE_T, T_SANDSTONE_T, T_SANDSTONE, T_SANDSTONE], hardness: 0.8, tool: "pickaxe" },
  28: { faces: [T_SPRUCE_SIDE, T_SPRUCE_SIDE, T_SPRUCE_TOP, T_SPRUCE_TOP, T_SPRUCE_SIDE, T_SPRUCE_SIDE], hardness: 2.0, tool: "axe" },
  29: { faces: all6(T_SPRUCE_LEAF), isLeaf: true, hardness: 0.2, drop: 0, tool: "shears" },
  30: { faces: all6(T_FLOWER_RED), transparent: true, solid: false, crossShape: true, hardness: 0 },
  31: { faces: all6(T_FLOWER_YEL), transparent: true, solid: false, crossShape: true, hardness: 0 },
  32: { faces: all6(T_TALLGRASS), transparent: true, solid: false, crossShape: true, hardness: 0, drop: 0 },
  33: { faces: all6(T_SAPLING), transparent: true, solid: false, crossShape: true, hardness: 0 },
  34: { faces: all6(T_MUSHROOM_R), transparent: true, solid: false, crossShape: true, hardness: 0 },
  35: { faces: all6(T_MUSHROOM_B), transparent: true, solid: false, crossShape: true, hardness: 0 },
  36: { faces: [T_CRAFT_SIDE, T_CRAFT_SIDE, T_CRAFT_TOP, T_PLANKS, T_CRAFT_FRONT, T_CRAFT_SIDE], hardness: 2.0, tool: "axe" },
  37: { faces: [T_FURNACE_S, T_FURNACE_S, T_FURNACE_T, T_FURNACE_T, T_FURNACE_F, T_FURNACE_S], hardness: 3.0, tool: "pickaxe" },
  38: { faces: [T_FURNACE_S, T_FURNACE_S, T_FURNACE_T, T_FURNACE_T, T_FURNACE_ON, T_FURNACE_S], hardness: 3.0, tool: "pickaxe", emissive: true },
  39: { faces: all6(T_IRON_BLOCK),           hardness: 5.0, tool: "pickaxe" },
  40: { faces: all6(T_GOLD_BLOCK),           hardness: 3.0, tool: "pickaxe" },
  41: { faces: all6(T_DIAM_BLOCK),           hardness: 5.0, tool: "pickaxe" },
  42: { faces: all6(T_TORCH), transparent: true, solid: false, crossShape: true, emissive: true, hardness: 0 },
  43: { faces: all6(T_LADDER), transparent: true, solid: false, hardness: 0.4 },
  44: { faces: [T_WOOL_R, T_WOOL_R, T_WOOL_W, T_PLANKS, T_WOOL_R, T_WOOL_R], hardness: 0.2, drop: 44, iconTile: T_I_BED },
  // Desert cactus — block-shaped to keep meshing simple; can't actually
  // damage the player (TODO if we want stricter parity with vanilla).
  45: { faces: all6(T_CACTUS), hardness: 0.4 },
};

// ── Items (id >= 50 = items, not placeable blocks) ────────────────────────────
export const ITEMS: Record<number, { name: string; tile: number; tool?: "axe" | "pickaxe" | "shovel" | "sword" | "shears"; toolTier?: number; food?: number }> = {
  50: { name: "Coal",           tile: T_I_COAL },
  51: { name: "Diamond",        tile: T_I_DIAMOND },
  52: { name: "Iron Ingot",     tile: T_I_IRON_INGOT },
  53: { name: "Gold Ingot",     tile: T_I_GOLD_INGOT },
  54: { name: "Stick",          tile: T_I_STICK },
  55: { name: "Wooden Pickaxe", tile: T_I_WOOD_PICK,   tool: "pickaxe", toolTier: 1 },
  56: { name: "Wooden Axe",     tile: T_I_WOOD_AXE,    tool: "axe",     toolTier: 1 },
  57: { name: "Wooden Shovel",  tile: T_I_WOOD_SHOVEL, tool: "shovel",  toolTier: 1 },
  58: { name: "Wooden Sword",   tile: T_I_WOOD_SWORD,  tool: "sword",   toolTier: 1 },
  59: { name: "Stone Pickaxe",  tile: T_I_STONE_PICK,  tool: "pickaxe", toolTier: 2 },
  60: { name: "Stone Axe",      tile: T_I_STONE_AXE,   tool: "axe",     toolTier: 2 },
  61: { name: "Stone Sword",    tile: T_I_STONE_SWORD, tool: "sword",   toolTier: 2 },
  62: { name: "Iron Pickaxe",   tile: T_I_IRON_PICK,   tool: "pickaxe", toolTier: 3 },
  63: { name: "Iron Sword",     tile: T_I_IRON_SWORD,  tool: "sword",   toolTier: 3 },
  64: { name: "Diamond Sword",  tile: T_I_DIAM_SWORD,  tool: "sword",   toolTier: 4 },
  65: { name: "Apple",          tile: T_I_APPLE,                                food: 4 },
  66: { name: "Bread",          tile: T_I_BREAD,                                food: 5 },
  67: { name: "Stone Shovel",   tile: T_I_STONE_SHOVEL, tool: "shovel",  toolTier: 2 },
  68: { name: "Iron Axe",       tile: T_I_IRON_AXE,    tool: "axe",     toolTier: 3 },
  69: { name: "Iron Shovel",    tile: T_I_IRON_SHOVEL, tool: "shovel",  toolTier: 3 },
  70: { name: "Diamond Pickaxe", tile: T_I_DIAM_PICK,  tool: "pickaxe", toolTier: 4 },
  71: { name: "Diamond Axe",    tile: T_I_DIAM_AXE,    tool: "axe",     toolTier: 4 },
  72: { name: "Diamond Shovel", tile: T_I_DIAM_SHOVEL, tool: "shovel",  toolTier: 4 },
  73: { name: "Wheat",          tile: T_I_WHEAT },
  74: { name: "String",         tile: T_I_STRING },
  75: { name: "Feather",        tile: T_I_FEATHER },
  76: { name: "Gunpowder",      tile: T_I_GUNPOWDER },
  77: { name: "Leather",        tile: T_I_LEATHER },
  78: { name: "Bone",           tile: T_I_BONE },
  79: { name: "Egg",            tile: T_I_EGG },
  80: { name: "Arrow",          tile: T_I_ARROW },
};

export const BLOCK_NAMES: Record<number, string> = {
  1: "Grass Block", 2: "Dirt", 3: "Stone", 4: "Sand", 5: "Oak Log", 6: "Oak Leaves",
  7: "Water", 8: "Oak Planks", 9: "Cobblestone", 10: "Gravel", 11: "Glass",
  12: "Bricks", 13: "Bookshelf", 14: "White Wool", 15: "Red Wool",
  16: "Obsidian", 17: "Mossy Cobblestone", 18: "Coal Ore", 19: "Iron Ore",
  20: "Gold Ore", 21: "Diamond Ore", 22: "Glowstone", 23: "Snow Block",
  24: "Ice", 25: "TNT", 26: "Stone Bricks", 27: "Sandstone",
  28: "Spruce Log", 29: "Spruce Leaves",
  30: "Poppy", 31: "Dandelion", 32: "Tall Grass", 33: "Oak Sapling",
  34: "Red Mushroom", 35: "Brown Mushroom",
  36: "Crafting Table", 37: "Furnace", 38: "Furnace (Lit)",
  39: "Iron Block", 40: "Gold Block", 41: "Diamond Block",
  42: "Torch", 43: "Ladder", 44: "Bed", 45: "Cactus",
};

// Creative hotbar default
export const CREATIVE_HOTBAR = [1, 3, 9, 8, 5, 36, 37, 22, 11];

export function getItemTile(id: number): number {
  if (id === 0) return 0;
  if (id < 50) {
    const def = BLOCKS[id];
    if (!def) return 0;
    return def.iconTile ?? def.faces[0] ?? 0;
  }
  return ITEMS[id]?.tile ?? 0;
}
export function getItemName(id: number): string {
  if (id < 50) return BLOCK_NAMES[id] ?? `Block ${id}`;
  return ITEMS[id]?.name ?? `Item ${id}`;
}
export function isPlaceable(id: number): boolean {
  return id > 0 && id < 50 && !!BLOCKS[id];
}

/** UV rect for a tile index in 0..1 atlas space. */
export function tileUV(tileIdx: number): [number, number, number, number] {
  const col = tileIdx % COLS;
  const row = Math.floor(tileIdx / COLS);
  const u0 = col / COLS;
  const v0 = 1 - (row + 1) / COLS;
  const u1 = (col + 1) / COLS;
  const v1 = 1 - row / COLS;
  return [u0, v0, u1, v1];
}

export async function preloadAtlas(): Promise<void> {
  if (_atlasTex) return;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      _liveAtlasCanvas = document.createElement("canvas");
      _liveAtlasCanvas.width = _liveAtlasCanvas.height = ATLAS_SIZE;
      const ctx = _liveAtlasCanvas.getContext("2d")!;
      ctx.imageSmoothingEnabled = false;
      // Draw the full atlas, scaling if needed (asset PNG might be either
      // 256 or 512 depending on which build of build_mc_atlas.py was last
      // run — the explicit size args make this robust).
      ctx.drawImage(img, 0, 0, ATLAS_SIZE, ATLAS_SIZE);
      _liveAtlasTex = new THREE.CanvasTexture(_liveAtlasCanvas);
      _liveAtlasTex.magFilter = THREE.NearestFilter;
      _liveAtlasTex.minFilter = THREE.NearestFilter;
      _liveAtlasTex.generateMipmaps = false;
      _atlasTex = _liveAtlasTex;
      resolve();
    };
    img.onerror = reject;
    img.src = `/terrain_atlas.png?v=${Date.now()}`;
  });
}

export function getAtlasTexture(): THREE.Texture {
  if (!_atlasTex) throw new Error("Atlas not loaded — call preloadAtlas() first");
  return _atlasTex;
}

/** Animate water tile each frame. */
export function tickWater(elapsed: number) {
  if (!_liveAtlasCanvas || !_liveAtlasTex) return;
  const ctx = _liveAtlasCanvas.getContext("2d")!;
  const ox = (T_WATER % COLS) * TILE_SIZE;
  const oy = Math.floor(T_WATER / COLS) * TILE_SIZE;
  const t = elapsed * 1.0;
  ctx.fillStyle = "#3a6bcc";
  ctx.fillRect(ox, oy, TILE_SIZE, TILE_SIZE);
  for (let i = 0; i < 4; i++) {
    const y = (t * (0.5 + i * 0.25) + i * 4.7) % TILE_SIZE;
    const alpha = 0.38 - i * 0.07;
    ctx.fillStyle = `rgba(140,200,250,${alpha})`;
    ctx.fillRect(ox, oy + Math.floor(y), TILE_SIZE, 2);
  }
  _liveAtlasTex.needsUpdate = true;
}
