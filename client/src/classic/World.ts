import * as THREE from "three";
import { createNoise2D, createNoise3D } from "simplex-noise";
import { BLOCKS, tileUV, getAtlasTexture } from "./Textures";

// ── World constants ─────────────────────────────────────────────────────────
export const CHUNK_W = 16;
export const CHUNK_H = 64;             // world height
export const SEA_LEVEL = 28;
// (legacy exports kept so other files compile)
export const SIZE_Y = CHUNK_H;

const FACE_DIRS: Array<[number, number, number]> = [
  [ 1, 0, 0],
  [-1, 0, 0],
  [ 0, 1, 0],
  [ 0,-1, 0],
  [ 0, 0, 1],
  [ 0, 0,-1],
];

const FACE_CORNERS: number[][][] = [
  // +X
  [[1,0,1],[1,0,0],[1,1,0],[1,1,1]],
  // -X
  [[0,0,0],[0,0,1],[0,1,1],[0,1,0]],
  // +Y
  [[0,1,1],[1,1,1],[1,1,0],[0,1,0]],
  // -Y
  [[0,0,0],[1,0,0],[1,0,1],[0,0,1]],
  // +Z
  [[0,0,1],[1,0,1],[1,1,1],[0,1,1]],
  // -Z
  [[1,0,0],[0,0,0],[0,1,0],[1,1,0]],
];

const FACE_LIGHT = [0.78, 0.78, 1.00, 0.55, 0.85, 0.85];

interface ChunkMeshes {
  opaque: THREE.Mesh | null;
  leaves: THREE.Mesh | null;
  water: THREE.Mesh | null;
  sprites: THREE.Mesh | null; // X-shape sprites (flowers, sapling, tallgrass)
}

// Tile indices that get a biome green tint baked into vertex color at mesh time.
// Not strictly required since the atlas was tinted at build time, but it lets
// us re-tint or vary per-biome later without rebuilding the atlas.
const BIOME_TINT_TILES: Set<number> = new Set();

class Chunk {
  blocks: Uint8Array;
  decoratedAround = false; // whether decorations have been spawned

  constructor() {
    this.blocks = new Uint8Array(CHUNK_W * CHUNK_H * CHUNK_W);
  }

  get(lx: number, ly: number, lz: number): number {
    return this.blocks[lx + lz * CHUNK_W + ly * CHUNK_W * CHUNK_W];
  }

  set(lx: number, ly: number, lz: number, t: number) {
    this.blocks[lx + lz * CHUNK_W + ly * CHUNK_W * CHUNK_W] = t;
  }
}

// Major biome categories the world generates. Drives surface block, height
// offset, tree type, and decor selection in generateChunk.
export type Biome =
  | "ocean" | "deep_ocean" | "river" | "frozen_river" | "beach" | "cold_beach" | "stone_beach"
  | "plains" | "forest" | "birch_forest" | "dark_forest" | "swamp" | "jungle" | "mushroom_island"
  | "taiga" | "mega_taiga" | "ice_plains" | "extreme_hills" | "snowy"
  | "desert" | "savanna" | "mesa"
  | "hills";

interface BiomeProfile {
  heightOffset: number;
  surface: number;      // top block id
  subsurface: number;   // a few cells below the top
}

const BIOMES: Record<Biome, BiomeProfile> = {
  // Aquatic
  ocean:        { heightOffset: -16, surface:  4, subsurface: 4 },     // sand under water
  deep_ocean:   { heightOffset: -28, surface:  4, subsurface: 9 },     // deeper, cobble floor
  river:        { heightOffset:  -6, surface:  4, subsurface: 4 },
  frozen_river: { heightOffset:  -6, surface: 24, subsurface: 4 },     // ice surface
  beach:        { heightOffset:  -8, surface:  4, subsurface: 4 },     // sand
  cold_beach:   { heightOffset:  -8, surface:  4, subsurface: 4 },     // sand (snow added by decor)
  stone_beach:  { heightOffset:  -4, surface:  3, subsurface: 9 },     // stone + cobble
  // Temperate
  plains:       { heightOffset:   0, surface:  1, subsurface: 2 },     // grass / dirt
  forest:       { heightOffset:   1, surface:  1, subsurface: 2 },
  birch_forest: { heightOffset:   1, surface:  1, subsurface: 2 },     // birch trees added at decor
  dark_forest:  { heightOffset:   1, surface:  1, subsurface: 2 },     // dense oak canopy
  swamp:        { heightOffset:  -2, surface:  1, subsurface: 2 },     // grass, with extra water
  jungle:       { heightOffset:   3, surface:  1, subsurface: 2 },     // big trees
  mushroom_island: { heightOffset: 4, surface: 163, subsurface: 2 },   // mycelium top
  // Cold
  taiga:        { heightOffset:   2, surface:  1, subsurface: 2 },     // spruce trees
  mega_taiga:   { heightOffset:   3, surface:  1, subsurface: 2 },     // bigger spruce
  ice_plains:   { heightOffset:   1, surface: 23, subsurface: 2 },     // snow block on dirt
  extreme_hills:{ heightOffset:  18, surface:  3, subsurface: 9 },     // bare stone peaks
  snowy:        { heightOffset:   6, surface: 23, subsurface: 2 },     // snow on dirt
  hills:        { heightOffset:  12, surface:  1, subsurface: 2 },
  // Dry / hot
  desert:       { heightOffset:  -1, surface:  4, subsurface: 4 },     // sand all the way
  savanna:      { heightOffset:   2, surface:  1, subsurface: 2 },     // dry grass (re-tinted)
  mesa:         { heightOffset:   4, surface: 161, subsurface: 159 },  // red hardened clay
};

/** Biomes that count as "land" for spawn/path/village placement. */
const _LAND_BIOMES = new Set<Biome>(["plains","forest","birch_forest","dark_forest","savanna","taiga","mega_taiga","jungle","mushroom_island","desert","hills","extreme_hills","mesa","snowy","ice_plains","beach","cold_beach","stone_beach"]);

export interface WorldOptions {
  infinite?: boolean;     // true = chunk-stream around player (survival/creative)
  seed?: number;
}

export class World {
  private scene: THREE.Scene;
  private chunks: Map<string, Chunk> = new Map();
  private chunkMeshes: Map<string, ChunkMeshes> = new Map();
  private dirtyChunks: Set<string> = new Set();
  private infinite: boolean;
  private seed: number;
  /** Buffered block changes for chunks that haven't been generated yet.
   *  Applied automatically inside generateChunk() once we get there. */
  private pendingBlockChanges: Map<string, Array<{ x: number; y: number; z: number; type: number }>> = new Map();
  /** Per-block placement direction for torches/levers/etc. Default is "up"
   *  (sitting on floor). Wall-mounted torches store the cardinal direction
   *  of the wall they're attached to. */
  torchDirs: Map<string, "up" | "+x" | "-x" | "+z" | "-z"> = new Map();

  private opaqueMat: THREE.Material | null = null;
  private leavesMat: THREE.Material | null = null;
  private waterMat: THREE.Material | null = null;
  private spriteMat: THREE.Material | null = null;

  // Noise
  private nH1: (x: number, z: number) => number;
  private nH2: (x: number, z: number) => number;
  private nH3: (x: number, z: number) => number;
  private nCave:  (x: number, y: number, z: number) => number;
  private nCave2: (x: number, y: number, z: number) => number;
  private nOre:   (x: number, y: number, z: number) => number;
  private nBiome: (x: number, z: number) => number;
  /** Second biome noise — combined with nBiome to give a 2D temperature ×
   *  humidity classification (matches MC's whittaker-diagram-style biome
   *  selection more than a single 1D noise). */
  private nBiome2: (x: number, z: number) => number;
  /** Tiny noise used to flip a few mushroom_island and ice_spikes patches in
   *  otherwise-uniform regions. */
  private nBiomeR: (x: number, z: number) => number;

  constructor(scene: THREE.Scene, seed = 0, options: WorldOptions = {}) {
    this.scene = scene;
    this.infinite = options.infinite ?? true;
    this.seed = seed || 12345;

    const r = mulberry32(this.seed);
    this.nH1 = createNoise2D(r);
    this.nH2 = createNoise2D(r);
    this.nH3 = createNoise2D(r);
    this.nCave  = createNoise3D(r);
    this.nCave2 = createNoise3D(r);
    this.nOre   = createNoise3D(r);
    this.nBiome = createNoise2D(r);
    this.nBiome2 = createNoise2D(r);
    this.nBiomeR = createNoise2D(r);

    this.initMaterials();
  }

  /** Biome classification using temperature × humidity noise (whittaker-
   *  diagram style). Returns one of ~22 biomes. */
  private biomeAt(wx: number, wz: number): Biome {
    // Two large-scale noises drive the biome map. The third (small-scale)
    // perturbs rare-biome thresholds so we get occasional mushroom islands
    // and ice-spike patches inside otherwise-uniform regions.
    const t = this.nBiome (wx * 0.0035, wz * 0.0035);   // temperature (-1 cold .. 1 hot)
    const h = this.nBiome2(wx * 0.0040, wz * 0.0040);   // humidity   (-1 dry  .. 1 wet)
    const r = this.nBiomeR(wx * 0.0120, wz * 0.0120);   // small rarity perturbation

    // Below-sea-level columns are aquatic, classified by humidity.
    if (t < -0.65) {
      if (h > 0.5) return "frozen_river";
      return "deep_ocean";
    }
    if (t < -0.45) {
      if (h > 0.4) return "ocean";
      return "river";
    }
    if (t < -0.35) {
      if (h < -0.3) return "stone_beach";
      if (t < -0.4) return "cold_beach";
      return "beach";
    }

    // Cold zone (-0.35 .. -0.1)
    if (t < -0.1) {
      if (r > 0.6)  return "ice_plains";      // rare patches inside cold
      if (h > 0.55) return "mega_taiga";
      if (h > 0.05) return "taiga";
      if (h < -0.5) return "extreme_hills";
      return "snowy";
    }
    // Temperate zone (-0.1 .. 0.4)
    if (t < 0.4) {
      if (r > 0.78 && h > 0.6) return "mushroom_island";
      if (h > 0.6)  return "swamp";
      if (h > 0.35 && t > 0.15) return "jungle";
      if (h > 0.15) {
        // Forest variants
        const v = (this.nBiome(wx * 0.02, wz * 0.02) + 1) * 0.5;
        if (v < 0.33) return "forest";
        if (v < 0.66) return "birch_forest";
        return "dark_forest";
      }
      if (h > -0.2) return "plains";
      return "hills";
    }
    // Hot/dry zone (>= 0.4)
    if (h < -0.3) {
      if (t > 0.7 && r > 0.4) return "mesa";
      return "desert";
    }
    if (h < 0.2) return "savanna";
    return "jungle";
  }

  /** Public accessor — used by main.ts for biome-aware features. */
  getBiome(wx: number, wz: number): Biome { return this.biomeAt(wx, wz); }

  private initMaterials() {
    const atlas = getAtlasTexture();
    this.opaqueMat = new THREE.MeshLambertMaterial({
      map: atlas, side: THREE.FrontSide, vertexColors: true, alphaTest: 0.05,
    });
    this.leavesMat = new THREE.MeshLambertMaterial({
      map: atlas, side: THREE.FrontSide, vertexColors: true, alphaTest: 0.5, transparent: true,
    });
    this.waterMat = new THREE.MeshLambertMaterial({
      map: atlas, side: THREE.DoubleSide, vertexColors: true,
      transparent: true, opacity: 0.78, depthWrite: false, color: 0x4477ff,
    });
    // Sprite material for cross-shape blocks (flowers, sapling, tallgrass).
    // We keep MeshBasicMaterial (unlit) for crispness, but expose a `color`
    // knob the day/night cycle modulates so sprites darken at night instead
    // of glowing through the dark.
    this.spriteMat = new THREE.MeshBasicMaterial({
      map: atlas, side: THREE.DoubleSide,
      transparent: true, alphaTest: 0.5,
      color: 0xffffff,
    });
  }

  /** Modulate sprite brightness (0..1) to match the time-of-day lighting. */
  setSpriteBrightness(b: number) {
    if (this.spriteMat && (this.spriteMat as any).color) {
      const c = (this.spriteMat as THREE.MeshBasicMaterial).color;
      c.setRGB(b, b, b);
    }
  }

  // ── Public block access ────────────────────────────────────────────────────
  getBlock(x: number, y: number, z: number): number {
    if (y < 0 || y >= CHUNK_H) return 0;
    const cx = Math.floor(x / CHUNK_W);
    const cz = Math.floor(z / CHUNK_W);
    const chunk = this.chunks.get(`${cx},${cz}`);
    if (!chunk) return 0;
    const lx = x - cx * CHUNK_W;
    const lz = z - cz * CHUNK_W;
    return chunk.get(lx, y, lz);
  }

  setBlock(x: number, y: number, z: number, type: number, opts: { autoCreate?: boolean } = {}) {
    if (y < 0 || y >= CHUNK_H) return;
    const autoCreate = opts.autoCreate !== false;
    const cx = Math.floor(x / CHUNK_W);
    const cz = Math.floor(z / CHUNK_W);
    const key = `${cx},${cz}`;
    let chunk = this.chunks.get(key);
    if (!chunk) {
      if (!autoCreate) {
        // Buffer: we don't know the natural terrain for this chunk yet, so
        // creating an empty chunk here would BLOCK generateChunk() from
        // running later (it skips chunks that already exist). That's the
        // bug behind those rectangular "hole" patches in the world.
        const list = this.pendingBlockChanges.get(key) ?? [];
        list.push({ x, y, z, type });
        this.pendingBlockChanges.set(key, list);
        return;
      }
      chunk = new Chunk();
      this.chunks.set(key, chunk);
    }
    const lx = x - cx * CHUNK_W;
    const lz = z - cz * CHUNK_W;
    if (chunk.get(lx, y, lz) === type) return;
    chunk.set(lx, y, lz, type);
    this.dirtyChunks.add(key);
    if (lx === 0)             this.dirtyChunks.add(`${cx - 1},${cz}`);
    if (lx === CHUNK_W - 1)   this.dirtyChunks.add(`${cx + 1},${cz}`);
    if (lz === 0)             this.dirtyChunks.add(`${cx},${cz - 1}`);
    if (lz === CHUNK_W - 1)   this.dirtyChunks.add(`${cx},${cz + 1}`);
  }

  isSolid(x: number, y: number, z: number): boolean {
    const b = this.getBlock(x, y, z);
    if (b === 0) return false;
    const def = BLOCKS[b];
    if (!def) return false;
    if (def.isWater) return false;
    if (def.solid === false) return false;
    return true;
  }

  /** For face culling */
  private hidesNeighbor(x: number, y: number, z: number, selfType: number): boolean {
    if (y < 0 || y >= CHUNK_H) return false;
    const t = this.getBlock(x, y, z);
    if (t === 0) return false;
    const def = BLOCKS[t];
    if (!def) return false;
    if (t === selfType && (def.transparent || def.isLeaf || def.isWater)) return true;
    if (def.transparent || def.isLeaf || def.isWater) return false;
    return true;
  }

  // ── Generation ─────────────────────────────────────────────────────────────
  /** Generate chunk data for (cx, cz). Returns the new chunk. */
  private generateChunk(cx: number, cz: number): Chunk {
    const chunk = new Chunk();
    const biomeOfColumn: Biome[][] = [];

    for (let lx = 0; lx < CHUNK_W; lx++) {
      biomeOfColumn[lx] = [];
      for (let lz = 0; lz < CHUNK_W; lz++) {
        const wx = cx * CHUNK_W + lx;
        const wz = cz * CHUNK_W + lz;
        const biome = this.biomeAt(wx, wz);
        biomeOfColumn[lx][lz] = biome;
        const prof = BIOMES[biome];

        const h1 = this.nH1(wx * 0.012, wz * 0.012) * 12;
        const h2 = this.nH2(wx * 0.04,  wz * 0.04)  * 3;
        const h3 = this.nH3(wx * 0.003, wz * 0.003) * 5;
        const height = Math.max(2, Math.min(CHUNK_H - 4,
          Math.floor(SEA_LEVEL + h1 + h2 + h3 + prof.heightOffset)));

        for (let y = 0; y < CHUNK_H; y++) {
          let block = 0;
          if (y === 0) {
            block = 3; // bedrock-ish stone floor
          } else if (y < height - 3) {
            block = 3;
            // Caves: two layered noise fields — together they carve much
            // more interesting tunnels than a single threshold did.
            if (y > 4 && y < height - 5) {
              const c1 = this.nCave (wx * 0.06,  y * 0.08, wz * 0.06);
              const c2 = this.nCave2(wx * 0.03,  y * 0.04, wz * 0.03);
              const combined = Math.abs(c1) * 0.6 + Math.abs(c2) * 0.4;
              if (combined < 0.10) block = 0;
            }
            if (block === 3) {
              const o = this.nOre(wx * 0.18, y * 0.18, wz * 0.18);
              if      (y < 12 && o > 0.78) block = 21;
              else if (y < 24 && o > 0.72) block = 20;
              else if (y < 48 && o > 0.66) block = 19;
              else if (y < 56 && o > 0.60) block = 18;
            }
          } else if (y < height) {
            block = prof.subsurface;
          } else if (y === height) {
            // Top: biome's surface, OR sand if column is below sea level.
            block = (height <= SEA_LEVEL) ? 4 : prof.surface;
          } else if (y <= SEA_LEVEL && height < SEA_LEVEL) {
            block = 7; // ocean fill
          }
          if (block !== 0) chunk.set(lx, y, lz, block);
        }
      }
    }

    // ── Per-biome decorations ──
    const rng = mulberry32(this.seed ^ (cx * 73428767) ^ (cz * 1928371));
    // Pick a "majority biome" for chunk-wide decisions like village placement.
    const centerBiome = biomeOfColumn[CHUNK_W >> 1][CHUNK_W >> 1];

    // Trees + ground decor by biome at the column. Density and species
    // depend on the chunk's majority biome; placement uses the per-column
    // biome so transition edges are nicer.
    const treeTries =
      centerBiome === "dark_forest"   ? 14 :
      centerBiome === "jungle"        ? 12 :
      centerBiome === "forest"        ?  8 :
      centerBiome === "birch_forest"  ?  8 :
      centerBiome === "mega_taiga"    ?  8 :
      centerBiome === "taiga"         ?  6 :
      centerBiome === "plains"        ?  2 :
      centerBiome === "savanna"       ?  2 :
      centerBiome === "hills"         ?  4 :
      centerBiome === "snowy"         ?  3 :
      centerBiome === "ice_plains"    ?  1 :
      centerBiome === "mushroom_island" ? 0 : // mushrooms instead
      centerBiome === "desert"        ?  0 :
      0;
    for (let i = 0; i < treeTries; i++) {
      const lx = 2 + Math.floor(rng() * (CHUNK_W - 4));
      const lz = 2 + Math.floor(rng() * (CHUNK_W - 4));
      let y = CHUNK_H - 1;
      while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
      const top = chunk.get(lx, y, lz);
      const biome = biomeOfColumn[lx][lz];
      // Only grow on the appropriate top block
      if (y < CHUNK_H - 8 && (top === 1 || top === 23 || top === 163)) {
        // Pick log/leaf ids for the biome. We only have oak and spruce
        // textures wired up as block ids (5/6 oak, 28/29 spruce); other
        // species fall back to oak with a comment for future textures.
        let log = 5, leaf = 6;
        if (biome === "taiga" || biome === "mega_taiga" || biome === "snowy" || biome === "ice_plains") {
          log = 28; leaf = 29;                // spruce
        } else if (biome === "birch_forest") {
          // No birch BLOCK ids yet; use oak as stand-in until birch atlas
          // is wired up (T_BIRCH_* exists but no BLOCKS entry).
          log = 5; leaf = 6;
        } else if (biome === "jungle") {
          log = 5; leaf = 6;                  // jungle — use oak greens for now
        }
        this.placeTree(chunk, lx, y + 1, lz, rng, log, leaf);
      }
    }

    // Flowers / tallgrass (mostly plains + forest).
    const flowerTries = centerBiome === "plains" ? 6
                      : centerBiome === "forest" ? 5
                      : centerBiome === "hills"  ? 3
                      : 0;
    for (let i = 0; i < flowerTries; i++) {
      const lx = Math.floor(rng() * CHUNK_W);
      const lz = Math.floor(rng() * CHUNK_W);
      let y = CHUNK_H - 1;
      while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
      if (chunk.get(lx, y, lz) === 1 && y + 1 < CHUNK_H && chunk.get(lx, y + 1, lz) === 0) {
        const w = rng();
        const id = w < 0.4 ? 30 : (w < 0.8 ? 31 : 32);
        chunk.set(lx, y + 1, lz, id);
      }
    }

    // Mushroom island: scatter giant mushrooms (use red/brown mushroom block
    // as a low-poly stand-in until a true HugeMushroom block lands).
    if (centerBiome === "mushroom_island") {
      const tries = 6;
      for (let i = 0; i < tries; i++) {
        const lx = 2 + Math.floor(rng() * (CHUNK_W - 4));
        const lz = 2 + Math.floor(rng() * (CHUNK_W - 4));
        let y = CHUNK_H - 1;
        while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
        if (chunk.get(lx, y, lz) === 163 && y + 3 < CHUNK_H) {
          chunk.set(lx, y + 1, lz, rng() < 0.5 ? 34 : 35);
        }
      }
    }

    // Ice plains: occasional ice patches in any "frozen river" or low spot.
    if (centerBiome === "ice_plains" || centerBiome === "frozen_river") {
      for (let lx = 0; lx < CHUNK_W; lx++) for (let lz = 0; lz < CHUNK_W; lz++) {
        let y = CHUNK_H - 1;
        while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
        if (chunk.get(lx, y, lz) === 7) chunk.set(lx, y, lz, 24); // ice on water
      }
    }

    // Cold beach: light snow dusting on sand.
    if (centerBiome === "cold_beach") {
      const tries = 6;
      for (let i = 0; i < tries; i++) {
        const lx = Math.floor(rng() * CHUNK_W);
        const lz = Math.floor(rng() * CHUNK_W);
        let y = CHUNK_H - 1;
        while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
        if (chunk.get(lx, y, lz) === 4 && y + 1 < CHUNK_H) chunk.set(lx, y + 1, lz, 23);
      }
    }

    // Swamp: extra water pockets + lily-pad stand-in (tall grass on water).
    if (centerBiome === "swamp") {
      const tries = 4;
      for (let i = 0; i < tries; i++) {
        const lx = 2 + Math.floor(rng() * (CHUNK_W - 4));
        const lz = 2 + Math.floor(rng() * (CHUNK_W - 4));
        let y = CHUNK_H - 1;
        while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
        // Carve a 2x2 pond on grass.
        if (chunk.get(lx, y, lz) === 1) {
          for (let dx = 0; dx < 2; dx++) for (let dz = 0; dz < 2; dz++) {
            chunk.set(lx + dx, y, lz + dz, 7);
          }
        }
      }
    }

    // Mesa: red clay layers — re-overwrite top few cells with stripe pattern.
    if (centerBiome === "mesa") {
      for (let lx = 0; lx < CHUNK_W; lx++) for (let lz = 0; lz < CHUNK_W; lz++) {
        let y = CHUNK_H - 1;
        while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
        for (let dy = 0; dy < 6; dy++) {
          const yy = y - dy;
          if (yy <= 0) break;
          const id = (yy % 5 === 0) ? 160 /* orange */ : (yy % 7 === 0) ? 162 /* blue */ : 161 /* red */;
          const cur = chunk.get(lx, yy, lz);
          if (cur === 3 || cur === 1 || cur === 2 || cur === 159 || cur === 161) {
            chunk.set(lx, yy, lz, id);
          }
        }
      }
    }

    // Extreme hills: scatter cobblestone "rocks" on the bare stone.
    if (centerBiome === "extreme_hills") {
      const tries = 5;
      for (let i = 0; i < tries; i++) {
        const lx = Math.floor(rng() * CHUNK_W);
        const lz = Math.floor(rng() * CHUNK_W);
        let y = CHUNK_H - 1;
        while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
        if (chunk.get(lx, y, lz) === 3 && y + 1 < CHUNK_H) chunk.set(lx, y + 1, lz, 17);
      }
    }

    // Cactus in desert (~1-2 per chunk).
    if (centerBiome === "desert") {
      const tries = 2;
      for (let i = 0; i < tries; i++) {
        const lx = 2 + Math.floor(rng() * (CHUNK_W - 4));
        const lz = 2 + Math.floor(rng() * (CHUNK_W - 4));
        let y = CHUNK_H - 1;
        while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
        if (chunk.get(lx, y, lz) === 4 && y + 3 < CHUNK_H) {
          const h = 1 + Math.floor(rng() * 3);
          for (let dy = 1; dy <= h; dy++) {
            if (chunk.get(lx, y + dy, lz) === 0) chunk.set(lx, y + dy, lz, 45);
          }
        }
      }
    }

    // Snow layer dusting on top of snowy biome ground.
    if (centerBiome === "snowy") {
      for (let lx = 0; lx < CHUNK_W; lx++) {
        for (let lz = 0; lz < CHUNK_W; lz++) {
          let y = CHUNK_H - 1;
          while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
          // Replace top grass with snow when the column is snowy
          if (chunk.get(lx, y, lz) === 1) chunk.set(lx, y, lz, 23);
        }
      }
    }

    // Apply any pre-buffered block changes for this chunk before villages
    // get placed — that way placed structures still win over server-replicated
    // edits at the same coordinates.
    const pendingKey = `${cx},${cz}`;
    const pending = this.pendingBlockChanges.get(pendingKey);
    if (pending) {
      for (const c of pending) {
        const lx = c.x - cx * CHUNK_W;
        const lz = c.z - cz * CHUNK_W;
        if (lx >= 0 && lx < CHUNK_W && lz >= 0 && lz < CHUNK_W && c.y >= 0 && c.y < CHUNK_H) {
          chunk.set(lx, c.y, lz, c.type);
        }
      }
      this.pendingBlockChanges.delete(pendingKey);
    }

    // ── Villages ──
    // Plains/savanna chunks on a 7-chunk lattice get a proper village:
    // ~7 buildings of varying sizes + 2 wheat farms + central well + paths +
    // lamp-post torches. Stays inside one chunk for simplicity (real
    // vanilla villages also tend to stay in a ~16×16 area).
    const isVillageBiome = centerBiome === "plains" || centerBiome === "savanna";
    if (isVillageBiome && ((cx % 7) + 7) % 7 === 0 && ((cz % 7) + 7) % 7 === 0) {
      this.placeVillage(chunk);
    }

    return chunk;
  }

  /** Build a multi-building village in a single chunk. */
  private placeVillage(chunk: Chunk) {
    const groundY = (cxL: number, czL: number) => {
      let y = CHUNK_H - 1;
      while (y > 0 && chunk.get(cxL, y, czL) === 0) y--;
      return y;
    };
    const ok = (x: number, z: number, h: number) => {
      const gy = groundY(x, z);
      const top = chunk.get(x, gy, z);
      return (top === 1 || top === 4) && gy >= 0 && gy < CHUNK_H - h;
    };

    // Building plan (offset, kind). Buildings are positioned so paths can
    // link them through the centre without overlap.
    type Building = { x: number; z: number; kind: "small" | "big" | "farm" | "blacksmith" | "library" };
    const plan: Building[] = [
      { x: 3,  z: 3,  kind: "small" },
      { x: 12, z: 3,  kind: "big" },
      { x: 3,  z: 12, kind: "farm" },
      { x: 12, z: 12, kind: "blacksmith" },
      { x: 8,  z: 3,  kind: "library" },
      { x: 3,  z: 8,  kind: "farm" },
      { x: 12, z: 8,  kind: "small" },
    ];
    const built: Array<{ x: number; y: number; z: number }> = [];
    for (const b of plan) {
      if (!ok(b.x, b.z, 6)) continue;
      const gy = groundY(b.x, b.z);
      if (b.kind === "small")      this.placeHut(chunk, b.x, gy + 1, b.z);
      else if (b.kind === "big")   this.placeBigHouse(chunk, b.x, gy + 1, b.z);
      else if (b.kind === "farm")  this.placeFarm(chunk, b.x, gy + 1, b.z);
      else if (b.kind === "blacksmith") this.placeBlacksmith(chunk, b.x, gy + 1, b.z);
      else if (b.kind === "library")    this.placeLibrary(chunk, b.x, gy + 1, b.z);
      built.push({ x: b.x, y: gy + 1, z: b.z });
    }

    // Central well at chunk centre — 3×3 cobblestone rim with water in the
    // middle and four corner posts holding a roof slab.
    const wxL = 8, wzL = 8;
    if (ok(wxL, wzL, 4)) {
      const gy = groundY(wxL, wzL);
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
        const x = wxL + dx, z = wzL + dz;
        if (x < 0 || x >= CHUNK_W || z < 0 || z >= CHUNK_W) continue;
        chunk.set(x, gy, z, 9);          // cobble rim
        for (let dy = 1; dy <= 3; dy++) chunk.set(x, gy + dy, z, 0);
      }
      chunk.set(wxL, gy, wzL, 7);        // water
      // Four corner posts (oak fence stand-in: ladder)
      const posts: Array<[number, number]> = [[-1,-1],[1,-1],[-1,1],[1,1]];
      for (const [dx, dz] of posts) {
        for (let dy = 1; dy <= 2; dy++) chunk.set(wxL + dx, gy + dy, wzL + dz, 5); // oak log
      }
      // Slab "roof" — single layer of planks above the posts.
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
        chunk.set(wxL + dx, gy + 3, wzL + dz, 8);
      }
    }

    // Cobblestone paths from each building toward the well.
    for (const b of built) {
      this.placePath(chunk, b, { x: wxL, y: b.y, z: wzL });
    }

    // Lamp-post torches at chunk corners (lights the village at night).
    for (const [px, pz] of [[2, 2], [13, 2], [2, 13], [13, 13]] as Array<[number, number]>) {
      if (!ok(px, pz, 3)) continue;
      const gy = groundY(px, pz);
      chunk.set(px, gy + 1, pz, 5);     // log post
      chunk.set(px, gy + 2, pz, 5);
      chunk.set(px, gy + 3, pz, 42);    // torch on top
    }
  }

  /** Big 7×6 house with two rooms + door. */
  private placeBigHouse(chunk: Chunk, lx: number, ly: number, lz: number) {
    const W = 7, D = 6, H = 4;
    const halfW = (W - 1) >> 1, halfD = (D - 1) >> 1;
    for (let dx = -halfW; dx <= halfW; dx++) {
      for (let dz = -halfD; dz <= halfD; dz++) {
        const x = lx + dx, z = lz + dz;
        if (x < 0 || x >= CHUNK_W || z < 0 || z >= CHUNK_W) continue;
        for (let dy = 0; dy <= H + 1; dy++) if (ly + dy < CHUNK_H) chunk.set(x, ly + dy, z, 0);
        if (ly - 1 >= 0) chunk.set(x, ly - 1, z, 8); // floor
        const onEdge = Math.abs(dx) === halfW || Math.abs(dz) === halfD;
        if (onEdge) for (let dy = 0; dy < H; dy++) chunk.set(x, ly + dy, z, 8);
        if (ly + H < CHUNK_H) chunk.set(x, ly + H, z, 5); // roof
      }
    }
    // Door
    chunk.set(lx, ly,     lz + halfD, 0);
    chunk.set(lx, ly + 1, lz + halfD, 0);
    // Interior partition wall
    for (let dx = -halfW + 1; dx <= halfW - 1; dx++) {
      for (let dy = 0; dy < H; dy++) chunk.set(lx + dx, ly + dy, lz, 8);
    }
    chunk.set(lx, ly,     lz, 0);
    chunk.set(lx, ly + 1, lz, 0);
    // Torch
    if (ly + H + 1 < CHUNK_H) chunk.set(lx, ly + H + 1, lz, 42);
  }

  /** Farm plot — 5×5 dirt + crops (red mushroom stands in for wheat crop). */
  private placeFarm(chunk: Chunk, lx: number, ly: number, lz: number) {
    const half = 2;
    // Clear airspace above
    for (let dx = -half; dx <= half; dx++) {
      for (let dz = -half; dz <= half; dz++) {
        const x = lx + dx, z = lz + dz;
        if (x < 0 || x >= CHUNK_W || z < 0 || z >= CHUNK_W) continue;
        for (let dy = 0; dy <= 3; dy++) if (ly + dy < CHUNK_H) chunk.set(x, ly + dy, z, 0);
      }
    }
    // Dirt soil (farmland visual — uses dirt id 2 since we don't have a
    // dedicated farmland tile) bordered by oak logs, water channel down the
    // middle, and tall-grass "wheat" sprouts on the dirt.
    for (let dx = -half; dx <= half; dx++) {
      for (let dz = -half; dz <= half; dz++) {
        const x = lx + dx, z = lz + dz;
        if (x < 0 || x >= CHUNK_W || z < 0 || z >= CHUNK_W) continue;
        const onEdge = Math.abs(dx) === half || Math.abs(dz) === half;
        if (onEdge) chunk.set(x, ly - 1, z, 5);            // log border
        else if (dz === 0) chunk.set(x, ly - 1, z, 7);     // water channel
        else {
          chunk.set(x, ly - 1, z, 2);                       // dirt soil
          chunk.set(x, ly, z, 32);                          // tall grass = "wheat" stand-in
        }
      }
    }
  }

  /** Blacksmith: small hut + open lava forge + a chest. */
  private placeBlacksmith(chunk: Chunk, lx: number, ly: number, lz: number) {
    this.placeHut(chunk, lx, ly, lz);
    // Replace one wall block with a chest + a furnace-shaped block.
    chunk.set(lx + 2, ly, lz, 171);    // chest
    chunk.set(lx - 2, ly, lz, 37);     // furnace (unlit)
  }

  /** Library: small hut filled with bookshelves. */
  private placeLibrary(chunk: Chunk, lx: number, ly: number, lz: number) {
    this.placeHut(chunk, lx, ly, lz);
    // Two rows of bookshelves inside.
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = 0; dy <= 1; dy++) {
        chunk.set(lx + dx, ly + dy, lz - 1, 13); // bookshelf
        chunk.set(lx + dx, ly + dy, lz + 1, 13);
      }
    }
  }

  /** Lay a cobblestone path between two hut centres at the ground level. */
  private placePath(chunk: Chunk, a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }) {
    const dx = b.x - a.x, dz = b.z - a.z;
    const steps = Math.max(Math.abs(dx), Math.abs(dz));
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = Math.round(a.x + dx * t);
      const z = Math.round(a.z + dz * t);
      if (x < 0 || x >= CHUNK_W || z < 0 || z >= CHUNK_W) continue;
      // Drop a cobble block at ground level
      let y = a.y - 1;
      // Snap to local ground in case terrain dips between huts.
      while (y > 0 && chunk.get(x, y, z) === 0) y--;
      if (chunk.get(x, y, z) === 1 || chunk.get(x, y, z) === 4) {
        chunk.set(x, y, z, 9);
      }
    }
  }

  /** Drop a small 5×5 wooden hut at (lx,ly,lz). ly is the FLOOR level. */
  private placeHut(chunk: Chunk, lx: number, ly: number, lz: number) {
    const floor = 8;   // planks
    const wall  = 8;   // planks
    const roof  = 5;   // oak log (gives a distinct roof texture)
    const W = 5;
    const H = 4;       // wall height
    const half = (W - 1) >> 1;
    for (let dx = -half; dx <= half; dx++) {
      for (let dz = -half; dz <= half; dz++) {
        const x = lx + dx, z = lz + dz;
        if (x < 0 || x >= CHUNK_W || z < 0 || z >= CHUNK_W) continue;
        // Clear above for the building footprint
        for (let dy = 0; dy <= H + 1; dy++) {
          if (ly + dy < CHUNK_H) chunk.set(x, ly + dy, z, 0);
        }
        // Floor
        if (ly - 1 >= 0) chunk.set(x, ly - 1, z, floor);
        // Walls (perimeter only)
        const onEdge = Math.abs(dx) === half || Math.abs(dz) === half;
        if (onEdge) {
          for (let dy = 0; dy < H; dy++) {
            if (ly + dy < CHUNK_H) chunk.set(x, ly + dy, z, wall);
          }
        }
        // Roof
        if (ly + H < CHUNK_H) chunk.set(x, ly + H, z, roof);
      }
    }
    // Door slot in front of the hut: punch out two wall blocks.
    if (lx + 0 >= 0 && lx + 0 < CHUNK_W) {
      chunk.set(lx,     ly,     lz + half, 0);
      chunk.set(lx,     ly + 1, lz + half, 0);
    }
    // Torch on top of one corner so the village reads at night.
    if (ly + H + 1 < CHUNK_H) chunk.set(lx + half - 1, ly + H + 1, lz + half - 1, 42);
  }

  private placeTree(chunk: Chunk, lx: number, ly: number, lz: number, rng: () => number, logId = 5, leafId = 6) {
    const h = 4 + Math.floor(rng() * 3);
    for (let i = 0; i < h; i++) {
      if (ly + i < CHUNK_H) chunk.set(lx, ly + i, lz, logId);
    }
    const top = ly + h - 1;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        for (let dy = 0; dy <= 2; dy++) {
          if (Math.abs(dx) === 2 && Math.abs(dz) === 2 && dy < 1) continue;
          if (dx === 0 && dz === 0 && dy < 2) continue;
          const lxx = lx + dx, lyy = top + dy, lzz = lz + dz;
          if (lxx < 0 || lxx >= CHUNK_W || lyy < 0 || lyy >= CHUNK_H || lzz < 0 || lzz >= CHUNK_W) continue;
          if (chunk.get(lxx, lyy, lzz) === 0) chunk.set(lxx, lyy, lzz, leafId);
        }
      }
    }
  }

  // ── Chunk streaming ────────────────────────────────────────────────────────
  /**
   * Generate/unload chunks around the player.
   * Generates a (R+1)-ring of chunk DATA so mesh face-culling at the edge of
   * the R-ring can read the neighbour. Queues meshing for the R-ring only.
   */
  updateAroundPlayer(playerX: number, playerZ: number, R = 5) {
    if (!this.infinite) return;
    const pcx = Math.floor(playerX / CHUNK_W);
    const pcz = Math.floor(playerZ / CHUNK_W);

    // Generate data in R+1
    for (let dcx = -R - 1; dcx <= R + 1; dcx++) {
      for (let dcz = -R - 1; dcz <= R + 1; dcz++) {
        const cx = pcx + dcx, cz = pcz + dcz;
        const key = `${cx},${cz}`;
        if (!this.chunks.has(key)) {
          this.chunks.set(key, this.generateChunk(cx, cz));
        }
      }
    }
    // Queue meshing for R
    for (let dcx = -R; dcx <= R; dcx++) {
      for (let dcz = -R; dcz <= R; dcz++) {
        const cx = pcx + dcx, cz = pcz + dcz;
        const key = `${cx},${cz}`;
        if (!this.chunkMeshes.has(key)) this.dirtyChunks.add(key);
      }
    }
    // Unload chunks beyond R+2
    const limit = R + 2;
    const toUnload: string[] = [];
    for (const key of this.chunks.keys()) {
      const [cx, cz] = key.split(",").map(Number);
      if (Math.abs(cx - pcx) > limit || Math.abs(cz - pcz) > limit) toUnload.push(key);
    }
    for (const key of toUnload) this.unloadChunk(key);
  }

  private unloadChunk(key: string) {
    this.chunks.delete(key);
    const m = this.chunkMeshes.get(key);
    if (m) {
      if (m.opaque) { this.scene.remove(m.opaque); m.opaque.geometry.dispose(); }
      if (m.leaves) { this.scene.remove(m.leaves); m.leaves.geometry.dispose(); }
      if (m.water)  { this.scene.remove(m.water);  m.water.geometry.dispose(); }
      this.chunkMeshes.delete(key);
    }
    this.dirtyChunks.delete(key);
  }

  /** Clear ALL loaded chunks (used by special modes to start from empty). */
  clearAll() {
    for (const key of Array.from(this.chunks.keys())) this.unloadChunk(key);
    this.dirtyChunks.clear();
  }

  // ── Meshing ────────────────────────────────────────────────────────────────
  private buildChunkMesh(cx: number, cz: number): ChunkMeshes {
    const chunk = this.chunks.get(`${cx},${cz}`);
    if (!chunk) return { opaque: null, leaves: null, water: null, sprites: null };

    const opaqueData = newMeshData();
    const leavesData = newMeshData();
    const waterData = newMeshData();
    const spritesData = newMeshData();

    const x0 = cx * CHUNK_W, z0 = cz * CHUNK_W;

    for (let lx = 0; lx < CHUNK_W; lx++) {
      for (let ly = 0; ly < CHUNK_H; ly++) {
        for (let lz = 0; lz < CHUNK_W; lz++) {
          const b = chunk.get(lx, ly, lz);
          if (b === 0) continue;
          const def = BLOCKS[b];
          if (!def) continue;

          const wx = x0 + lx;
          const wz = z0 + lz;

          if (def.crossShape) {
            const tileIdx = def.faces[0];
            const [u0, v0, u1, v1] = tileUV(tileIdx);
            addCrossShape(spritesData, wx, ly, wz, u0, v0, u1, v1);
            continue;
          }
          if (def.miniColumn) {
            const tileIdx = def.faces[0];
            const [u0, v0, u1, v1] = tileUV(tileIdx);
            const dir = this.torchDirs.get(`${wx},${ly},${wz}`) || "up";
            addMiniColumn(spritesData, wx, ly, wz, u0, v0, u1, v1, dir);
            continue;
          }

          const data = def.isWater ? waterData : (def.isLeaf ? leavesData : opaqueData);

          for (let f = 0; f < 6; f++) {
            const [dx, dy, dz] = FACE_DIRS[f];
            const nx = wx + dx, ny = ly + dy, nz = wz + dz;
            if (this.hidesNeighbor(nx, ny, nz, b)) continue;

            const tileIdx = def.faces[f];
            const [u0, v0, u1, v1] = tileUV(tileIdx);
            const light = FACE_LIGHT[f];
            const yOff = def.isWater && f === 2 ? -0.12 : 0;
            const corners = FACE_CORNERS[f];
            const startIdx = data.pos.length / 3;
            for (let c = 0; c < 4; c++) {
              const [cx2, cy2, cz2] = corners[c];
              data.pos.push(wx + cx2, ly + cy2 + yOff, wz + cz2);
              data.col.push(light, light, light);
              const u = (c === 0 || c === 3) ? u0 : u1;
              const v = (c === 0 || c === 1) ? v0 : v1;
              data.uv.push(u, v);
            }
            data.idx.push(startIdx, startIdx + 1, startIdx + 2, startIdx, startIdx + 2, startIdx + 3);
          }
        }
      }
    }

    return {
      opaque:  makeMesh(opaqueData, this.opaqueMat!),
      leaves:  makeMesh(leavesData, this.leavesMat!),
      water:   makeMesh(waterData,  this.waterMat!),
      sprites: makeSpriteMesh(spritesData, this.spriteMat!),
    };
  }

  private replaceChunkMesh(key: string, newMeshes: ChunkMeshes) {
    const old = this.chunkMeshes.get(key);
    if (old) {
      if (old.opaque)  { this.scene.remove(old.opaque);  old.opaque.geometry.dispose(); }
      if (old.leaves)  { this.scene.remove(old.leaves);  old.leaves.geometry.dispose(); }
      if (old.water)   { this.scene.remove(old.water);   old.water.geometry.dispose(); }
      if (old.sprites) { this.scene.remove(old.sprites); old.sprites.geometry.dispose(); }
    }
    if (newMeshes.leaves)  newMeshes.leaves.renderOrder  = 1;
    if (newMeshes.sprites) newMeshes.sprites.renderOrder = 1;
    if (newMeshes.water)   newMeshes.water.renderOrder   = 2;
    if (newMeshes.opaque)  this.scene.add(newMeshes.opaque);
    if (newMeshes.leaves)  this.scene.add(newMeshes.leaves);
    if (newMeshes.sprites) this.scene.add(newMeshes.sprites);
    if (newMeshes.water)   this.scene.add(newMeshes.water);
    this.chunkMeshes.set(key, newMeshes);
  }

  /** Rebuild up to maxPerFrame dirty chunks, nearest-first to the player. */
  rebuildDirty(maxPerFrame = 2, playerX?: number, playerZ?: number) {
    if (this.dirtyChunks.size === 0) return;
    // Sort dirty chunks by distance to player so nearby pop-in resolves first
    let keys = Array.from(this.dirtyChunks);
    if (playerX !== undefined && playerZ !== undefined) {
      const pcx = Math.floor(playerX / CHUNK_W);
      const pcz = Math.floor(playerZ / CHUNK_W);
      keys.sort((a, b) => {
        const [ax, az] = a.split(",").map(Number);
        const [bx, bz] = b.split(",").map(Number);
        return ((ax - pcx) ** 2 + (az - pcz) ** 2) - ((bx - pcx) ** 2 + (bz - pcz) ** 2);
      });
    }
    let built = 0;
    for (const key of keys) {
      if (!this.chunks.has(key)) {
        this.dirtyChunks.delete(key);
        continue;
      }
      const [cx, cz] = key.split(",").map(Number);
      this.replaceChunkMesh(key, this.buildChunkMesh(cx, cz));
      this.dirtyChunks.delete(key);
      built++;
      if (built >= maxPerFrame) break;
    }
  }

  /** Force-build all currently-dirty chunks (used right after building special-mode maps). */
  buildAllDirtyNow() {
    while (this.dirtyChunks.size > 0) this.rebuildDirty(Infinity);
  }

  // ── Spawn ──────────────────────────────────────────────────────────────────
  /** Find a spawn point near the origin (generating chunks as needed). */
  findSpawn(): [number, number, number] {
    // Generate origin + small ring first
    for (let cx = -2; cx <= 2; cx++) {
      for (let cz = -2; cz <= 2; cz++) {
        if (!this.chunks.has(`${cx},${cz}`)) {
          this.chunks.set(`${cx},${cz}`, this.generateChunk(cx, cz));
        }
      }
    }
    // Look for first grass top within those chunks
    for (let r = 0; r < 32; r++) {
      for (let dx = -r; dx <= r; dx++) {
        for (let dz = -r; dz <= r; dz++) {
          if (Math.abs(dx) !== r && Math.abs(dz) !== r && r > 0) continue;
          const wx = dx, wz = dz;
          for (let y = CHUNK_H - 1; y > 0; y--) {
            if (this.getBlock(wx, y, wz) === 1) {
              return [wx + 0.5, y + 1.001, wz + 0.5];
            }
          }
        }
      }
    }
    return [0.5, CHUNK_H - 4, 0.5];
  }

  // ── Raycast ────────────────────────────────────────────────────────────────
  raycast(origin: THREE.Vector3, dir: THREE.Vector3, maxDist: number):
    { x: number; y: number; z: number; nx: number; ny: number; nz: number } | null {
    let x = Math.floor(origin.x), y = Math.floor(origin.y), z = Math.floor(origin.z);
    const stepX = dir.x > 0 ? 1 : -1;
    const stepY = dir.y > 0 ? 1 : -1;
    const stepZ = dir.z > 0 ? 1 : -1;

    const tDeltaX = Math.abs(1 / dir.x);
    const tDeltaY = Math.abs(1 / dir.y);
    const tDeltaZ = Math.abs(1 / dir.z);

    let tMaxX = ((stepX > 0 ? (x + 1) : x) - origin.x) / dir.x;
    let tMaxY = ((stepY > 0 ? (y + 1) : y) - origin.y) / dir.y;
    let tMaxZ = ((stepZ > 0 ? (z + 1) : z) - origin.z) / dir.z;

    let nx = 0, ny = 0, nz = 0;
    let t = 0;
    while (t < maxDist) {
      if (y >= 0 && y < CHUNK_H) {
        const b = this.getBlock(x, y, z);
        if (b !== 0) {
          const def = BLOCKS[b];
          // Hit anything except water — non-solid sprites (flowers, sapling)
          // are still targetable so they can be broken.
          if (def && !def.isWater) {
            return { x, y, z, nx, ny, nz };
          }
        }
      }
      if (tMaxX < tMaxY) {
        if (tMaxX < tMaxZ) { t = tMaxX; x += stepX; tMaxX += tDeltaX; nx = -stepX; ny = 0; nz = 0; }
        else               { t = tMaxZ; z += stepZ; tMaxZ += tDeltaZ; nx = 0; ny = 0; nz = -stepZ; }
      } else {
        if (tMaxY < tMaxZ) { t = tMaxY; y += stepY; tMaxY += tDeltaY; nx = 0; ny = -stepY; nz = 0; }
        else               { t = tMaxZ; z += stepZ; tMaxZ += tDeltaZ; nx = 0; ny = 0; nz = -stepZ; }
      }
    }
    return null;
  }

  // ── Stats ──────────────────────────────────────────────────────────────────
  getStats(): { loaded: number; meshed: number; dirty: number } {
    return {
      loaded: this.chunks.size,
      meshed: this.chunkMeshes.size,
      dirty: this.dirtyChunks.size,
    };
  }

  /**
   * Simple water flow: after a block is broken, water from neighbours flows
   * in. BFS from the broken cell up to MAX_FLOW cells. Water flows down
   * (1 priority) then sideways (Manhattan-radius increases with distance).
   * Returns the list of cells that became water so the caller can sync
   * them to multiplayer if needed.
   */
  propagateWater(x: number, y: number, z: number): Array<{ x: number; y: number; z: number }> {
    const MAX_FLOW = 64;          // hard cap on cells filled per event
    const MAX_SIDE_DIST = 5;      // sideways spread limit (MC = 7)
    const filled: Array<{ x: number; y: number; z: number }> = [];

    interface Cell { x: number; y: number; z: number; dist: number; }
    const queue: Cell[] = [{ x, y, z, dist: 0 }];
    const visited = new Set<string>();

    // Is there any water touching this cell?
    const hasWaterNeighbour = (cx: number, cy: number, cz: number): boolean => {
      const dirs: Array<[number, number, number]> = [
        [0, 1, 0],  // above (waterfall)
        [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1],
      ];
      for (const [dx, dy, dz] of dirs) {
        if (this.getBlock(cx + dx, cy + dy, cz + dz) === 7) return true;
      }
      return false;
    };

    while (queue.length > 0 && filled.length < MAX_FLOW) {
      const cur = queue.shift()!;
      const key = `${cur.x},${cur.y},${cur.z}`;
      if (visited.has(key)) continue;
      visited.add(key);

      if (cur.dist > MAX_SIDE_DIST) continue;
      // Only fill empty cells
      if (this.getBlock(cur.x, cur.y, cur.z) !== 0) continue;
      if (!hasWaterNeighbour(cur.x, cur.y, cur.z)) continue;

      this.setBlock(cur.x, cur.y, cur.z, 7);
      filled.push({ x: cur.x, y: cur.y, z: cur.z });

      // Spread: prioritise downward, then sideways
      const below = this.getBlock(cur.x, cur.y - 1, cur.z);
      if (below === 0 && cur.y - 1 >= 0) {
        queue.unshift({ x: cur.x, y: cur.y - 1, z: cur.z, dist: cur.dist }); // downwards doesn't add to dist
      }
      for (const [dx, dz] of [[1,0],[-1,0],[0,1],[0,-1]] as Array<[number, number]>) {
        const nx = cur.x + dx, nz = cur.z + dz;
        if (this.getBlock(nx, cur.y, nz) === 0) {
          queue.push({ x: nx, y: cur.y, z: nz, dist: cur.dist + 1 });
        }
      }
    }

    return filled;
  }

  /**
   * Sand / gravel gravity. If the block at (x, y, z) is a gravity-affected
   * type (sand id 4, gravel id 10) and has air below, walk it down one cell
   * at a time until it lands on solid ground or hits the world floor.
   *
   * Returns the moves it made so the caller can sync them across MP.
   * No-ops if the source block isn't a gravity block.
   */
  applyGravity(x: number, y: number, z: number): Array<{ from: { x: number; y: number; z: number }; to: { x: number; y: number; z: number }; type: number }> {
    const moves: Array<{ from: { x: number; y: number; z: number }; to: { x: number; y: number; z: number }; type: number }> = [];
    const type = this.getBlock(x, y, z);
    if (type !== 4 && type !== 10) return moves;
    let cy = y;
    while (cy > 0) {
      const below = this.getBlock(x, cy - 1, z);
      // Stop on anything solid or water (water blocks the fall but real MC
      // washes sand away — we'll just stop on water for simplicity).
      if (below !== 0) break;
      cy--;
    }
    if (cy === y) return moves;
    this.setBlock(x, y,  z, 0);
    this.setBlock(x, cy, z, type);
    moves.push({ from: { x, y, z }, to: { x, y: cy, z }, type });
    return moves;
  }

  /** Trigger gravity for the column ABOVE (x, y, z) — call after a block at
   *  (x, y, z) is removed so any sand/gravel resting on top falls. */
  cascadeGravityAbove(x: number, y: number, z: number): Array<{ from: { x: number; y: number; z: number }; to: { x: number; y: number; z: number }; type: number }> {
    const all: Array<{ from: { x: number; y: number; z: number }; to: { x: number; y: number; z: number }; type: number }> = [];
    let cy = y + 1;
    while (cy < 256) {
      const t = this.getBlock(x, cy, z);
      if (t !== 4 && t !== 10) break; // column ends at first non-gravity
      const m = this.applyGravity(x, cy, z);
      if (m.length === 0) break;
      all.push(...m);
      // After fall, the cell at `cy` is empty, but the next-up sand (if any)
      // hasn't moved yet — continue scanning upward.
      cy++;
    }
    return all;
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
interface MeshData { pos: number[]; uv: number[]; col: number[]; idx: number[]; }
function newMeshData(): MeshData { return { pos: [], uv: [], col: [], idx: [] }; }

function makeMesh(data: MeshData, mat: THREE.Material): THREE.Mesh | null {
  if (data.pos.length === 0) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(data.pos, 3));
  geo.setAttribute("uv",       new THREE.Float32BufferAttribute(data.uv, 2));
  geo.setAttribute("color",    new THREE.Float32BufferAttribute(data.col, 3));
  geo.setIndex(data.idx);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = true;
  return mesh;
}

/**
 * Thin upright post centred on (x, z), bottom at y. Used for torches —
 * looks like a real 1-block-tall stick instead of a full-cell sprite.
 * The four side faces sample the FULL atlas tile so the torch's flame
 * texture lands at the top, exactly like the cross-shape would.
 */
function addMiniColumn(data: MeshData, x: number, y: number, z: number, u0: number, v0: number, u1: number, v1: number, dir: "up" | "+x" | "-x" | "+z" | "-z" = "up") {
  const w = 0.0625;  // 1/16 — vanilla torch is 2/16 wide, so 0.0625 each side of centre
  const h = 0.625;   // 10/16 tall — vanilla torch height
  // For wall-mounted torches push the bottom of the post toward the wall
  // and raise the base a little so the flame visually leans away from the
  // wall (matches vanilla close enough without doing real tilt geometry).
  let baseX = 0.5, baseZ = 0.5, baseY = 0;
  if (dir === "+x") { baseX = 0.82; baseY = 0.2; }
  else if (dir === "-x") { baseX = 0.18; baseY = 0.2; }
  else if (dir === "+z") { baseZ = 0.82; baseY = 0.2; }
  else if (dir === "-z") { baseZ = 0.18; baseY = 0.2; }
  const cx = x + baseX, cz = z + baseZ;
  const x0 = cx - w, x1 = cx + w;
  const z0 = cz - w, z1 = cz + w;
  const y0 = y + baseY, y1 = y + baseY + h;
  const addQuad = (corners: number[][]) => {
    const startIdx = data.pos.length / 3;
    for (let c = 0; c < 4; c++) {
      data.pos.push(corners[c][0], corners[c][1], corners[c][2]);
      data.col.push(1, 1, 1);
      const u = (c === 0 || c === 3) ? u0 : u1;
      const v = (c === 0 || c === 1) ? v0 : v1;
      data.uv.push(u, v);
    }
    data.idx.push(startIdx, startIdx + 1, startIdx + 2, startIdx, startIdx + 2, startIdx + 3);
  };
  // Side faces
  addQuad([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]]); // +Z
  addQuad([[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]]); // -Z
  addQuad([[x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1]]); // +X
  addQuad([[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]]); // -X
  // Top — the flame tip of the texture
  addQuad([[x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0]]);
}

function addCrossShape(data: MeshData, x: number, y: number, z: number, u0: number, v0: number, u1: number, v1: number) {
  const off = 0.1;
  // Two diagonal quads forming an X. We emit ONE winding only and rely on
  // DoubleSide rendering so both sides show. Vertex colors stay white because
  // the sprite material is MeshBasicMaterial (unlit).
  const quads = [
    [[x+off, y, z+off],     [x+1-off, y, z+1-off], [x+1-off, y+1, z+1-off], [x+off, y+1, z+off]],
    [[x+off, y, z+1-off],   [x+1-off, y, z+off],   [x+1-off, y+1, z+off],   [x+off, y+1, z+1-off]],
  ];
  for (const q of quads) {
    const startIdx = data.pos.length / 3;
    for (let c = 0; c < 4; c++) {
      data.pos.push(q[c][0], q[c][1], q[c][2]);
      data.col.push(1, 1, 1);
      const u = (c === 0 || c === 3) ? u0 : u1;
      const v = (c === 0 || c === 1) ? v0 : v1;
      data.uv.push(u, v);
    }
    data.idx.push(startIdx, startIdx + 1, startIdx + 2, startIdx, startIdx + 2, startIdx + 3);
  }
}

/** Mesh builder for the sprite layer: no normals (basic material is unlit). */
function makeSpriteMesh(data: MeshData, mat: THREE.Material): THREE.Mesh | null {
  if (data.pos.length === 0) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(data.pos, 3));
  geo.setAttribute("uv",       new THREE.Float32BufferAttribute(data.uv, 2));
  geo.setIndex(data.idx);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = true;
  return mesh;
}

function mulberry32(seed: number): () => number {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
