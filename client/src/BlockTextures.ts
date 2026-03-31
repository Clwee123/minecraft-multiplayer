/**
 * Vanilla Minecraft texture atlas.
 * Uses terrain_atlas.png (256x256, 16x16 tiles, downloaded from minecraft-assets).
 * Falls back to procedural canvas textures if atlas fails to load.
 */
import * as THREE from "three";

const TILE = 16;
const ATLAS_TILES = 16; // 16 tiles per row

let atlasTexture: THREE.Texture | null = null;
let atlasLoaded = false;

export function preloadAtlas(): Promise<void> {
  return new Promise(resolve => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/terrain_atlas.png",
      (tex) => {
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestFilter;
        tex.generateMipmaps = false;
        atlasTexture = tex;
        atlasLoaded = true;
        resolve();
      },
      undefined,
      () => {
        // Failed to load — fall back to procedural
        atlasLoaded = false;
        resolve();
      }
    );
  });
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
