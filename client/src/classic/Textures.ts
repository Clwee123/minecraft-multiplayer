import * as THREE from "three";

const ATLAS_SIZE = 256;
const TILE_SIZE = 16;
const COLS = ATLAS_SIZE / TILE_SIZE;

let _atlasTex: THREE.Texture | null = null;
let _atlasImg: HTMLImageElement | null = null;
let _liveAtlasCanvas: HTMLCanvasElement | null = null;
let _liveAtlasTex: THREE.CanvasTexture | null = null;

export interface BlockDef {
  faces: [number, number, number, number, number, number]; // [+X,-X,+Y,-Y,+Z,-Z] tile indices
  transparent?: boolean;
  isWater?: boolean;
  isLeaf?: boolean;
  solid?: boolean;       // collision (default true)
  crossShape?: boolean;  // X-shape sprite (flowers, grass)
}

const T = (col: number, row: number) => col + row * COLS;

const T_GRASS_TOP   = T(0, 0);
const T_GRASS_SIDE  = T(1, 0);
const T_DIRT        = T(2, 0);
const T_STONE       = T(3, 0);
const T_SAND        = T(4, 0);
const T_LOG_SIDE    = T(5, 0);
const T_LOG_TOP     = T(6, 0);
const T_LEAVES      = T(7, 0);
const T_WATER       = T(8, 0);
const T_PLANKS      = T(9, 0);
const T_COBBLE      = T(10, 0);
const T_GRAVEL      = T(11, 0);
const T_GLASS       = T(12, 0);
const T_BRICK       = T(13, 0);
const T_BOOKSHELF   = T(14, 0);
const T_CRAFT_TOP   = T(15, 0);
const T_GOLD_ORE    = T(0, 1);
const T_IRON_ORE    = T(1, 1);
const T_COAL_ORE    = T(2, 1);
const T_DIAM_ORE    = T(3, 1);
const T_GLOWSTONE   = T(4, 1);
const T_SNOW        = T(5, 1);
const T_OBSIDIAN    = T(9, 1);
const T_WOOL_W      = T(10, 1);
const T_WOOL_R      = T(11, 1);
const T_MOSSY_COBB  = T(12, 1);
const T_FLOWER_RED  = T(0, 2);
const T_FLOWER_YELL = T(1, 2);

export const BLOCKS: Record<number, BlockDef> = {
  // 0 = air
  1:  { faces: [T_GRASS_SIDE, T_GRASS_SIDE, T_GRASS_TOP, T_DIRT, T_GRASS_SIDE, T_GRASS_SIDE] },
  2:  { faces: [T_DIRT, T_DIRT, T_DIRT, T_DIRT, T_DIRT, T_DIRT] },
  3:  { faces: [T_STONE, T_STONE, T_STONE, T_STONE, T_STONE, T_STONE] },
  4:  { faces: [T_SAND, T_SAND, T_SAND, T_SAND, T_SAND, T_SAND] },
  5:  { faces: [T_LOG_SIDE, T_LOG_SIDE, T_LOG_TOP, T_LOG_TOP, T_LOG_SIDE, T_LOG_SIDE] },
  6:  { faces: [T_LEAVES, T_LEAVES, T_LEAVES, T_LEAVES, T_LEAVES, T_LEAVES], isLeaf: true },
  7:  { faces: [T_WATER, T_WATER, T_WATER, T_WATER, T_WATER, T_WATER], transparent: true, isWater: true, solid: false },
  8:  { faces: [T_PLANKS, T_PLANKS, T_PLANKS, T_PLANKS, T_PLANKS, T_PLANKS] },
  9:  { faces: [T_COBBLE, T_COBBLE, T_COBBLE, T_COBBLE, T_COBBLE, T_COBBLE] },
  10: { faces: [T_GRAVEL, T_GRAVEL, T_GRAVEL, T_GRAVEL, T_GRAVEL, T_GRAVEL] },
  11: { faces: [T_GLASS, T_GLASS, T_GLASS, T_GLASS, T_GLASS, T_GLASS], transparent: true },
  12: { faces: [T_BRICK, T_BRICK, T_BRICK, T_BRICK, T_BRICK, T_BRICK] },
  13: { faces: [T_BOOKSHELF, T_BOOKSHELF, T_PLANKS, T_PLANKS, T_BOOKSHELF, T_BOOKSHELF] },
  14: { faces: [T_WOOL_W, T_WOOL_W, T_WOOL_W, T_WOOL_W, T_WOOL_W, T_WOOL_W] },
  15: { faces: [T_WOOL_R, T_WOOL_R, T_WOOL_R, T_WOOL_R, T_WOOL_R, T_WOOL_R] },
  16: { faces: [T_OBSIDIAN, T_OBSIDIAN, T_OBSIDIAN, T_OBSIDIAN, T_OBSIDIAN, T_OBSIDIAN] },
  17: { faces: [T_MOSSY_COBB, T_MOSSY_COBB, T_MOSSY_COBB, T_MOSSY_COBB, T_MOSSY_COBB, T_MOSSY_COBB] },
  18: { faces: [T_COAL_ORE, T_COAL_ORE, T_COAL_ORE, T_COAL_ORE, T_COAL_ORE, T_COAL_ORE] },
  19: { faces: [T_IRON_ORE, T_IRON_ORE, T_IRON_ORE, T_IRON_ORE, T_IRON_ORE, T_IRON_ORE] },
  20: { faces: [T_GOLD_ORE, T_GOLD_ORE, T_GOLD_ORE, T_GOLD_ORE, T_GOLD_ORE, T_GOLD_ORE] },
  21: { faces: [T_DIAM_ORE, T_DIAM_ORE, T_DIAM_ORE, T_DIAM_ORE, T_DIAM_ORE, T_DIAM_ORE] },
  22: { faces: [T_GLOWSTONE, T_GLOWSTONE, T_GLOWSTONE, T_GLOWSTONE, T_GLOWSTONE, T_GLOWSTONE] },
  23: { faces: [T_SNOW, T_SNOW, T_SNOW, T_SNOW, T_SNOW, T_SNOW] },
  // Flowers (cross-shape sprites, non-solid)
  30: { faces: [T_FLOWER_RED, T_FLOWER_RED, T_FLOWER_RED, T_FLOWER_RED, T_FLOWER_RED, T_FLOWER_RED], transparent: true, solid: false, crossShape: true },
  31: { faces: [T_FLOWER_YELL, T_FLOWER_YELL, T_FLOWER_YELL, T_FLOWER_YELL, T_FLOWER_YELL, T_FLOWER_YELL], transparent: true, solid: false, crossShape: true },
};

export const BLOCK_NAMES: Record<number, string> = {
  1: "Grass Block", 2: "Dirt", 3: "Stone", 4: "Sand", 5: "Oak Log", 6: "Oak Leaves",
  7: "Water", 8: "Oak Planks", 9: "Cobblestone", 10: "Gravel", 11: "Glass",
  12: "Bricks", 13: "Bookshelf", 14: "White Wool", 15: "Red Wool",
  16: "Obsidian", 17: "Mossy Cobblestone", 18: "Coal Ore", 19: "Iron Ore",
  20: "Gold Ore", 21: "Diamond Ore", 22: "Glowstone", 23: "Snow Block",
  30: "Poppy", 31: "Dandelion",
};

// Hotbar: 9 useful blocks
export const HOTBAR_BLOCKS = [1, 3, 9, 2, 4, 5, 6, 8, 11];

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
      _atlasImg = img;
      // Build the live atlas canvas immediately so we can animate water
      _liveAtlasCanvas = document.createElement("canvas");
      _liveAtlasCanvas.width = _liveAtlasCanvas.height = ATLAS_SIZE;
      const ctx = _liveAtlasCanvas.getContext("2d")!;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0);
      _liveAtlasTex = new THREE.CanvasTexture(_liveAtlasCanvas);
      _liveAtlasTex.magFilter = THREE.NearestFilter;
      _liveAtlasTex.minFilter = THREE.NearestFilter;
      _liveAtlasTex.generateMipmaps = false;
      _atlasTex = _liveAtlasTex;
      resolve();
    };
    img.onerror = reject;
    img.src = "/terrain_atlas.png?v=2";
  });
}

export function getAtlasTexture(): THREE.Texture {
  if (!_atlasTex) throw new Error("Atlas not loaded — call preloadAtlas() first");
  return _atlasTex;
}

/** Animate the water tile every frame. Stamps onto live atlas canvas. */
export function tickWater(elapsed: number) {
  if (!_liveAtlasCanvas || !_liveAtlasTex) return;
  const ctx = _liveAtlasCanvas.getContext("2d")!;
  // Tile (8, 0) = water — x=128, y=0, size 16
  const ox = 8 * TILE_SIZE, oy = 0 * TILE_SIZE;
  // Animated wave: vertical scrolling streaks on classic MC blue
  const t = elapsed * 1.2;
  ctx.fillStyle = "#2c5dc6";
  ctx.fillRect(ox, oy, 16, 16);
  // 3 wave lines that scroll vertically
  for (let i = 0; i < 3; i++) {
    const y = ((t * (0.6 + i * 0.3) + i * 5.3) % 16);
    const yy = Math.floor(y);
    const alpha = 0.45 - i * 0.08;
    ctx.fillStyle = `rgba(120,180,250,${alpha})`;
    ctx.fillRect(ox, oy + yy, 16, 1);
  }
  // Highlight glints
  for (let i = 0; i < 4; i++) {
    const seed = Math.floor(elapsed * 0.5 + i * 4) * 13;
    const gx = (seed % 14);
    const gy = ((seed >> 4) % 14);
    ctx.fillStyle = "rgba(200,230,255,0.18)";
    ctx.fillRect(ox + gx, oy + gy, 2, 1);
  }
  _liveAtlasTex.needsUpdate = true;
}
