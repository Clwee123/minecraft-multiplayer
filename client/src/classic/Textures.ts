import * as THREE from "three";

const ATLAS_SIZE = 256;
const TILE_SIZE = 16;
const COLS = ATLAS_SIZE / TILE_SIZE;

let _atlasTex: THREE.Texture | null = null;
let _waterCanvas: HTMLCanvasElement | null = null;
let _waterCtx: CanvasRenderingContext2D | null = null;
let _waterImage: HTMLImageElement | null = null;
let _atlasImg: HTMLImageElement | null = null;

export interface BlockDef {
  faces: [number, number, number, number, number, number]; // [+X,-X,+Y,-Y,+Z,-Z] tile indices (col*16+row)
  transparent?: boolean;
  isWater?: boolean;
  isLeaf?: boolean;
}

// Tile index = col + row * COLS
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

// Block ID → definition. Mirrors classic MC palette.
export const BLOCKS: Record<number, BlockDef> = {
  // 0 = air
  1: { faces: [T_GRASS_SIDE, T_GRASS_SIDE, T_GRASS_TOP, T_DIRT, T_GRASS_SIDE, T_GRASS_SIDE] }, // grass
  2: { faces: [T_DIRT, T_DIRT, T_DIRT, T_DIRT, T_DIRT, T_DIRT] },                              // dirt
  3: { faces: [T_STONE, T_STONE, T_STONE, T_STONE, T_STONE, T_STONE] },                        // stone
  4: { faces: [T_SAND, T_SAND, T_SAND, T_SAND, T_SAND, T_SAND] },                              // sand
  5: { faces: [T_LOG_SIDE, T_LOG_SIDE, T_LOG_TOP, T_LOG_TOP, T_LOG_SIDE, T_LOG_SIDE] },        // log
  6: { faces: [T_LEAVES, T_LEAVES, T_LEAVES, T_LEAVES, T_LEAVES, T_LEAVES], isLeaf: true },    // leaves
  7: { faces: [T_WATER, T_WATER, T_WATER, T_WATER, T_WATER, T_WATER], transparent: true, isWater: true }, // water
  8: { faces: [T_PLANKS, T_PLANKS, T_PLANKS, T_PLANKS, T_PLANKS, T_PLANKS] },                  // planks
  9: { faces: [T_COBBLE, T_COBBLE, T_COBBLE, T_COBBLE, T_COBBLE, T_COBBLE] },                  // cobblestone
  10: { faces: [T_GRAVEL, T_GRAVEL, T_GRAVEL, T_GRAVEL, T_GRAVEL, T_GRAVEL] },                 // gravel
  11: { faces: [T_GLASS, T_GLASS, T_GLASS, T_GLASS, T_GLASS, T_GLASS], transparent: true },    // glass
  12: { faces: [T_BRICK, T_BRICK, T_BRICK, T_BRICK, T_BRICK, T_BRICK] },                       // brick
  13: { faces: [T_BOOKSHELF, T_BOOKSHELF, T_PLANKS, T_PLANKS, T_BOOKSHELF, T_BOOKSHELF] },     // bookshelf
  14: { faces: [T_WOOL_W, T_WOOL_W, T_WOOL_W, T_WOOL_W, T_WOOL_W, T_WOOL_W] },                 // wool white
  15: { faces: [T_WOOL_R, T_WOOL_R, T_WOOL_R, T_WOOL_R, T_WOOL_R, T_WOOL_R] },                 // wool red
  16: { faces: [T_OBSIDIAN, T_OBSIDIAN, T_OBSIDIAN, T_OBSIDIAN, T_OBSIDIAN, T_OBSIDIAN] },     // obsidian
  17: { faces: [T_MOSSY_COBB, T_MOSSY_COBB, T_MOSSY_COBB, T_MOSSY_COBB, T_MOSSY_COBB, T_MOSSY_COBB] }, // mossy
  18: { faces: [T_COAL_ORE, T_COAL_ORE, T_COAL_ORE, T_COAL_ORE, T_COAL_ORE, T_COAL_ORE] },     // coal ore
  19: { faces: [T_IRON_ORE, T_IRON_ORE, T_IRON_ORE, T_IRON_ORE, T_IRON_ORE, T_IRON_ORE] },     // iron ore
  20: { faces: [T_GOLD_ORE, T_GOLD_ORE, T_GOLD_ORE, T_GOLD_ORE, T_GOLD_ORE, T_GOLD_ORE] },     // gold ore
  21: { faces: [T_DIAM_ORE, T_DIAM_ORE, T_DIAM_ORE, T_DIAM_ORE, T_DIAM_ORE, T_DIAM_ORE] },     // diamond ore
  22: { faces: [T_GLOWSTONE, T_GLOWSTONE, T_GLOWSTONE, T_GLOWSTONE, T_GLOWSTONE, T_GLOWSTONE] }, // glowstone
  23: { faces: [T_SNOW, T_SNOW, T_SNOW, T_SNOW, T_SNOW, T_SNOW] },                              // snow
};

export const BLOCK_NAMES: Record<number, string> = {
  1: "Grass", 2: "Dirt", 3: "Stone", 4: "Sand", 5: "Log", 6: "Leaves",
  7: "Water", 8: "Planks", 9: "Cobblestone", 10: "Gravel", 11: "Glass",
  12: "Brick", 13: "Bookshelf", 14: "White Wool", 15: "Red Wool",
  16: "Obsidian", 17: "Mossy Cobble", 18: "Coal Ore", 19: "Iron Ore",
  20: "Gold Ore", 21: "Diamond Ore", 22: "Glowstone", 23: "Snow",
};

export const HOTBAR_BLOCKS = [1, 3, 2, 4, 5, 6, 8, 9, 11];

/** Get UV rect for a tile index. Returns [u0, v0, u1, v1] in 0..1 space. */
export function tileUV(tileIdx: number): [number, number, number, number] {
  const col = tileIdx % COLS;
  const row = Math.floor(tileIdx / COLS);
  const u0 = col / COLS;
  const v0 = 1 - (row + 1) / COLS; // flip Y for OpenGL
  const u1 = (col + 1) / COLS;
  const v1 = 1 - row / COLS;
  return [u0, v0, u1, v1];
}

export async function preloadAtlas(): Promise<THREE.Texture> {
  if (_atlasTex) return _atlasTex;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      _atlasImg = img;
      const tex = new THREE.Texture(img);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      _atlasTex = tex;
      // Build initial water canvas based on atlas (we animate it)
      _waterCanvas = document.createElement("canvas");
      _waterCanvas.width = _waterCanvas.height = TILE_SIZE;
      _waterCtx = _waterCanvas.getContext("2d")!;
      drawWaterFrame(0);
      resolve(tex);
    };
    img.onerror = reject;
    img.src = "/terrain_atlas.png";
  });
}

export function getAtlasTexture(): THREE.Texture {
  if (!_atlasTex) throw new Error("Atlas not loaded");
  return _atlasTex;
}

/** Draw animated water frame into the water canvas; copies onto atlas at tile 8 */
function drawWaterFrame(t: number) {
  if (!_waterCtx || !_atlasImg || !_atlasTex) return;
  const w1 = Math.sin(t * 0.8) * 0.5 + 0.5;
  const w2 = Math.sin(t * 0.5 + 1.1) * 0.5 + 0.5;
  const w3 = Math.sin(t * 1.2 + 2.3) * 0.5 + 0.5;
  _waterCtx.fillStyle = "#2463b8";
  _waterCtx.fillRect(0, 0, 16, 16);
  _waterCtx.fillStyle = "rgba(80,150,240,0.7)";
  _waterCtx.fillRect(0, Math.round(w1 * 12), 16, 2);
  _waterCtx.fillStyle = "rgba(60,120,220,0.6)";
  _waterCtx.fillRect(0, Math.round(w2 * 12), 16, 1);
  _waterCtx.fillStyle = "rgba(130,190,255,0.45)";
  _waterCtx.fillRect(0, Math.round(w3 * 10), 16, 1);
}

/** Called each frame to animate water. Updates the texture atlas region for tile 8. */
export function tickWater(elapsed: number) {
  if (!_waterCtx || !_atlasTex || !_atlasImg) return;
  drawWaterFrame(elapsed);
  // Replace tile (8,0) in atlas — that's pixels [128..144, 0..16]
  // We'll just mark the texture as needing update; the water is drawn via the canvas
  // For simplicity, we'll redraw the whole atlas with the water overlay.
  // Actually: since the atlas is loaded from PNG, we need a different strategy.
  // Build a combined atlas canvas once at load, then update only the water tile each frame.
}

/** Build a combined atlas canvas where we can mutate the water tile */
export function buildLiveAtlas(): THREE.CanvasTexture {
  if (!_atlasImg) throw new Error("Atlas image not loaded");
  const c = document.createElement("canvas");
  c.width = c.height = ATLAS_SIZE;
  const ctx = c.getContext("2d")!;
  ctx.drawImage(_atlasImg, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  // Replace _atlasTex
  _atlasTex = tex;
  return tex;
}

/** Animate water tile in the live atlas */
export function updateLiveWater(liveAtlas: THREE.CanvasTexture, elapsed: number) {
  const c = liveAtlas.image as HTMLCanvasElement;
  const ctx = c.getContext("2d")!;
  // Tile (8,0) is at x=128, y=0
  const w1 = Math.sin(elapsed * 0.8) * 0.5 + 0.5;
  const w2 = Math.sin(elapsed * 0.5 + 1.1) * 0.5 + 0.5;
  const w3 = Math.sin(elapsed * 1.2 + 2.3) * 0.5 + 0.5;
  ctx.fillStyle = "#2463b8";
  ctx.fillRect(128, 0, 16, 16);
  ctx.fillStyle = "rgba(80,150,240,0.7)";
  ctx.fillRect(128, Math.round(w1 * 12), 16, 2);
  ctx.fillStyle = "rgba(60,120,220,0.6)";
  ctx.fillRect(128, Math.round(w2 * 12), 16, 1);
  ctx.fillStyle = "rgba(130,190,255,0.45)";
  ctx.fillRect(128, Math.round(w3 * 10), 16, 1);
  liveAtlas.needsUpdate = true;
}
