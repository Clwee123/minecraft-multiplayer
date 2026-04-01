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
let _atlasLoadPromise: Promise<void> | null = null;

function ensureAtlas() {
  // Synchronous fallback — create texture but image may not be decoded yet
  if (atlasLoaded) return;
  if (atlasTexture) return; // loading in progress
  const img = new Image();
  img.src = ATLAS_DATA_URL;
  // Only set needsUpdate AFTER image fully loads
  img.onload = () => {
    atlasTexture!.needsUpdate = true;
    atlasLoaded = true;
  };
  const tex = new THREE.Texture(img);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  // Don't set needsUpdate here — wait for onload
  atlasTexture = tex;
}

/** Properly await atlas image decode before world generation */
export function preloadAtlas(): Promise<void> {
  if (_atlasLoadPromise) return _atlasLoadPromise;
  _atlasLoadPromise = new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => {
      const tex = new THREE.Texture(img);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      atlasTexture = tex;
      atlasLoaded = true;
      resolve();
    };
    img.onerror = () => {
      console.warn('Atlas load failed, using procedural fallback');
      atlasLoaded = false;
      resolve();
    };
    img.src = ATLAS_DATA_URL;
  });
  return _atlasLoadPromise;
}

// Map block type to atlas tile (col, row) — matches Python atlas generation
const BLOCK_TILES: Record<number, [number, number]> = {
  1:  [0, 0],  // Grass top
  2:  [2, 0],  // Dirt
  3:  [3, 0],  // Stone
  4:  [4, 0],  // Sand
  5:  [5, 0],  // Oak Log side
  6:  [7, 0],  // Leaves
  7:  [8, 0],  // Water (atlas tile — not used for water material, just kept for reference)
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
  ensureAtlas();
  if (atlasLoaded && atlasTexture) {
    const t = atlasTexture.clone();
    t.needsUpdate = true;
    t.offset.set(col / ATLAS_TILES, 1 - (row + 1) / ATLAS_TILES);
    t.repeat.set(1 / ATLAS_TILES, 1 / ATLAS_TILES);
    t.wrapS = THREE.ClampToEdgeWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    return t;
  }
  return makeProceduralTexture(col, row);
}

// ── Fallback procedural textures ──────────────────────────────────────────────

function makeProceduralTexture(col: number, row: number): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = TILE;
  const ctx = c.getContext("2d")!;
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

// ── Water material (canvas-based animated, never touches atlas) ───────────────

let _waterMat: THREE.MeshLambertMaterial | null = null;
let _waterCanvas: HTMLCanvasElement | null = null;
let _waterTex: THREE.CanvasTexture | null = null;

function drawWaterFrame(ctx: CanvasRenderingContext2D, t: number) {
  const w1 = Math.sin(t * 1.1) * 0.5 + 0.5;
  const w2 = Math.sin(t * 0.6 + 1.3) * 0.5 + 0.5;
  // Dark base
  ctx.fillStyle = "#14508a";
  ctx.fillRect(0, 0, 16, 16);
  // Two horizontal wave bands
  ctx.fillStyle = `rgba(60,140,210,${0.5 + w1 * 0.25})`;
  ctx.fillRect(0, Math.round(w1 * 9), 16, 3);
  ctx.fillStyle = `rgba(30,110,180,${0.4 + w2 * 0.2})`;
  ctx.fillRect(0, Math.round(w2 * 5) + 6, 16, 2);
  // Highlight shimmer column
  ctx.fillStyle = `rgba(160,220,255,${0.08 + w1 * 0.07})`;
  ctx.fillRect(Math.round(w2 * 10), 0, 4, 16);
}

function getOrCreateWaterMat(): THREE.MeshLambertMaterial {
  if (_waterMat) return _waterMat;
  _waterCanvas = document.createElement("canvas");
  _waterCanvas.width = _waterCanvas.height = 16;
  const ctx = _waterCanvas.getContext("2d")!;
  drawWaterFrame(ctx, 0);
  _waterTex = new THREE.CanvasTexture(_waterCanvas);
  _waterTex.magFilter = THREE.NearestFilter;
  _waterTex.minFilter = THREE.NearestFilter;
  _waterMat = new THREE.MeshLambertMaterial({
    map: _waterTex,
    transparent: true,
    opacity: 0.78,
    depthWrite: false,   // false = see through water stacks; opaque blocks behind still show
    alphaTest: 0,
    side: THREE.FrontSide,
  });
  return _waterMat;
}

/** Animate water texture. Call once per frame with elapsed seconds. */
export function tickWater(elapsed: number) {
  if (!_waterCanvas || !_waterTex) return;
  const ctx = _waterCanvas.getContext("2d")!;
  drawWaterFrame(ctx, elapsed);
  _waterTex.needsUpdate = true;
}

// Atlas texture getter
export function getAtlasTexture(): THREE.Texture | null {
  return atlasTexture;
}

// ── Per-face tile mapping ─────────────────────────────────────────────────────

// [top_col, top_row, side_col, side_row, bottom_col, bottom_row]
const BLOCK_FACE_TILES: Record<number, [number, number, number, number, number, number]> = {
  1: [0, 0,  1, 0,  2, 0],  // Grass: top=grass_top, side=grass_side, bottom=dirt
  5: [6, 0,  5, 0,  6, 0],  // Oak Log: top=log_top, side=log_side, bottom=log_top
  22: [15,0, 9, 0, 9, 0],   // Crafting Table: top=crafting, side=planks, bottom=planks
  23: [14,1, 2, 0, 2, 0],   // Furnace: top=stone, front=furnace, back=stone
  24: [8, 1, 7, 1, 8, 1],   // TNT: top=tnt_top, side=tnt_side, bottom=tnt_top
};

export function getBlockMaterials(blockType: number, info: any): THREE.Material[] {
  // Water: all 6 faces get the same animated material
  if (blockType === 7) {
    const m = getOrCreateWaterMat();
    return [m, m, m, m, m, m];
  }
  const faces = BLOCK_FACE_TILES[blockType];
  if (faces) {
    const [tc, tr, sc, sr, bc, br] = faces;
    const top    = makeMat(makeTileTexture(tc, tr), info);
    const side   = makeMat(makeTileTexture(sc, sr), info);
    const bottom = makeMat(makeTileTexture(bc, br), info);
    return [side, side, top, bottom, side, side];
  }
  const mat = getBlockMaterial(blockType, info);
  return [mat, mat, mat, mat, mat, mat];
}

export function getBlockMaterial(blockType: number, info: any): THREE.Material {
  // Water handled separately — never goes through atlas path
  if (blockType === 7) return getOrCreateWaterMat();

  const tile = BLOCK_TILES[blockType] ?? [3, 0];
  const tex = makeTileTexture(tile[0], tile[1]);
  const isTransparent = !!(info?.transparent);
  const isGlass = blockType === 9 || blockType === 21 || blockType === 53;

  const mat = new THREE.MeshLambertMaterial({
    map: tex,
    transparent: isTransparent,
    opacity: isGlass ? 0.60 : 1,
    depthWrite: true,
    alphaTest: isTransparent ? 0 : 0.01,
    side: THREE.FrontSide,
  });

  if (info?.emissive) {
    mat.emissive = new THREE.Color(info.emissive);
    mat.emissiveIntensity = 0.55;
  }
  return mat;
}

function makeMat(tex: THREE.Texture, info: any): THREE.Material {
  const isTransparent = !!(info?.transparent);
  const mat = new THREE.MeshLambertMaterial({
    map: tex,
    transparent: isTransparent,
    opacity: isTransparent ? 0.65 : 1,
    depthWrite: true,
    alphaTest: isTransparent ? 0 : 0.01,
    side: THREE.FrontSide,
  });
  if (info?.emissive) {
    mat.emissive = new THREE.Color(info.emissive);
    mat.emissiveIntensity = 0.55;
  }
  return mat;
}
