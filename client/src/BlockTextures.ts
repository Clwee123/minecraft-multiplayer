/**
 * Vanilla Minecraft texture atlas.
 * Uses terrain_atlas.png (256x256, 16x16 tiles, downloaded from minecraft-assets).
 * Falls back to procedural canvas textures if atlas fails to load.
 */
import * as THREE from "three";

const TILE = 16;
const ATLAS_TILES = 16; // 16 tiles per row

// Atlas embedded as base64 so it's available synchronously before world generation
const ATLAS_DATA_URL = "data:image/png;base64,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";

let atlasTexture: THREE.Texture | null = null;
let atlasLoaded = false;

function ensureAtlas() {
  if (atlasLoaded) return;
  const img = new Image();
  img.src = ATLAS_DATA_URL;
  const tex = new THREE.Texture(img);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  atlasTexture = tex;
  atlasLoaded = true;
}

// No-op preload since atlas is now embedded
export function preloadAtlas(): Promise<void> {
  ensureAtlas();
  return Promise.resolve();
}

// Map block type to atlas tile (col, row) — matches Python atlas generation
const BLOCK_TILES: Record<number, [number, number]> = {
  1:  [0, 0],  // Grass top
  2:  [2, 0],  // Dirt
  3:  [3, 0],  // Stone
  4:  [4, 0],  // Sand
  5:  [5, 0],  // Oak Log side
  6:  [7, 0],  // Leaves
  7:  [8, 0],  // Water
  8:  [13, 0], // Brick
  9:  [12, 0], // Glass
  10: [9, 0],  // Oak Planks
  11: [10, 0], // Cobblestone
  12: [11, 0], // Gravel
  13: [0, 1],  // Gold Ore
  14: [1, 1],  // Iron Ore
  15: [2, 1],  // Coal Ore
  16: [14, 0], // Bookshelf
  17: [13, 1], // Mossy cobble
  18: [9, 1],  // Obsidian
  19: [4, 1],  // Glowstone
  20: [5, 1],  // Snow
  21: [6, 1],  // Ice
  22: [15, 0], // Crafting Table top
  23: [14, 1], // Furnace front
  24: [7, 1],  // TNT side
  25: [10, 1], // Sponge
  26: [11, 1], // White Wool
  27: [12, 1], // Red Wool
  61: [3, 1],  // Diamond Ore
};

function makeTileTexture(col: number, row: number): THREE.Texture {
  ensureAtlas(); // ensure loaded even if preloadAtlas wasn't awaited
  if (atlasLoaded && atlasTexture) {
    const t = atlasTexture.clone();
    t.needsUpdate = true;
    t.offset.set(col / ATLAS_TILES, 1 - (row + 1) / ATLAS_TILES);
    t.repeat.set(1 / ATLAS_TILES, 1 / ATLAS_TILES);
    t.wrapS = THREE.ClampToEdgeWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    return t;
  }
  // Fallback: procedural canvas
  return makeProceduralTexture(col, row);
}

// ── Fallback procedural textures ──────────────────────────────────────────────

function makeProceduralTexture(col: number, row: number): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = TILE;
  const ctx = c.getContext("2d")!;
  // Use a color based on tile position as fallback
  const hue = ((col * 30 + row * 90) % 360);
  ctx.fillStyle = `hsl(${hue},60%,45%)`;
  ctx.fillRect(0, 0, TILE, TILE);
  for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) {
    if (Math.random() > 0.85) {
      ctx.fillStyle = `hsla(${hue},50%,35%,0.4)`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}

export function getBlockMaterial(blockType: number, info: any): THREE.Material {
  const tile = BLOCK_TILES[blockType] ?? [3, 0]; // default stone
  const tex = makeTileTexture(tile[0], tile[1]);

  const isTransparent = info.transparent;
  const isWater = blockType === 7;
  const isGlass = blockType === 9 || blockType === 21;

  const mat = new THREE.MeshLambertMaterial({
    map: tex,
    transparent: isTransparent,
    opacity: isWater ? 0.72 : (isGlass ? 0.65 : 1),
    depthWrite: !isWater,
    alphaTest: (!isTransparent) ? 0.01 : 0,
    side: isTransparent ? THREE.DoubleSide : THREE.FrontSide,
  });

  if (info.emissive) {
    mat.emissive = new THREE.Color(info.emissive);
    mat.emissiveIntensity = 0.55;
  }
  return mat;
}

// Legacy compat
export function getBlockMaterials(blockType: number, info: any): THREE.Material[] {
  const mat = getBlockMaterial(blockType, info);
  return [mat, mat, mat, mat, mat, mat];
}

// Atlas texture getter (used by World for preloading)
export function getAtlasTexture(): THREE.Texture | null {
  return atlasTexture;
}
