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

export type Biome = "ocean" | "beach" | "plains" | "forest" | "desert" | "hills" | "snowy";

interface BiomeProfile {
  heightOffset: number;
  surface: number;      // top block id
  subsurface: number;   // a few cells below the top
}

const BIOMES: Record<Biome, BiomeProfile> = {
  ocean:  { heightOffset: -16, surface:  4, subsurface: 4 },   // sand under water
  beach:  { heightOffset:  -8, surface:  4, subsurface: 4 },
  plains: { heightOffset:   0, surface:  1, subsurface: 2 },   // grass on dirt
  forest: { heightOffset:   1, surface:  1, subsurface: 2 },
  desert: { heightOffset:  -1, surface:  4, subsurface: 4 },   // sand all the way
  hills:  { heightOffset:  12, surface:  1, subsurface: 2 },
  snowy:  { heightOffset:   6, surface: 23, subsurface: 2 },   // snow on dirt
};

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

    this.initMaterials();
  }

  /** Coarse biome classification for a world-space column. */
  private biomeAt(wx: number, wz: number): Biome {
    const t = this.nBiome(wx * 0.0045, wz * 0.0045); // -1..1, smooth large patches
    if (t < -0.55) return "ocean";
    if (t < -0.25) return "beach";
    if (t < 0.05)  return "plains";
    if (t < 0.25)  return "forest";
    if (t < 0.5)   return "desert";
    if (t < 0.75)  return "hills";
    return "snowy";
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

    // Trees + ground decor by biome at the column.
    const treeTries = centerBiome === "forest" ? 8
                    : centerBiome === "plains" ? 2
                    : centerBiome === "hills"  ? 4
                    : centerBiome === "snowy"  ? 3
                    : centerBiome === "desert" ? 0
                    : 0;
    for (let i = 0; i < treeTries; i++) {
      const lx = 2 + Math.floor(rng() * (CHUNK_W - 4));
      const lz = 2 + Math.floor(rng() * (CHUNK_W - 4));
      let y = CHUNK_H - 1;
      while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
      const top = chunk.get(lx, y, lz);
      const biome = biomeOfColumn[lx][lz];
      // Only grow on the appropriate top block
      if (y < CHUNK_H - 8 && (top === 1 || top === 23)) {
        if (biome === "hills" || biome === "snowy") {
          this.placeTree(chunk, lx, y + 1, lz, rng, 28, 29);   // spruce
        } else if (biome === "forest" && rng() < 0.35) {
          this.placeTree(chunk, lx, y + 1, lz, rng, 5,  6);    // oak — birch could go here too
        } else {
          this.placeTree(chunk, lx, y + 1, lz, rng, 5,  6);
        }
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
    // Plains-biome chunks on a 6-chunk lattice get a village cluster of
    // 3 huts plus a cobblestone path between them. Each hut footprint is
    // 5×5; the spacing keeps them inside a single chunk.
    if (centerBiome === "plains" && ((cx % 6) + 6) % 6 === 0 && ((cz % 6) + 6) % 6 === 0) {
      const groundY = (cxL: number, czL: number) => {
        let y = CHUNK_H - 1;
        while (y > 0 && chunk.get(cxL, y, czL) === 0) y--;
        return y;
      };
      const hutSites: Array<[number, number]> = [
        [4, 4], [11, 4], [8, 11],
      ];
      const built: Array<{ x: number; y: number; z: number }> = [];
      for (const [hx, hz] of hutSites) {
        const gy = groundY(hx, hz);
        const top = chunk.get(hx, gy, hz);
        if ((top === 1 || top === 4) && gy < CHUNK_H - 6) {
          this.placeHut(chunk, hx, gy + 1, hz);
          built.push({ x: hx, y: gy + 1, z: hz });
        }
      }
      // Cobblestone paths joining hut centres.
      for (let i = 1; i < built.length; i++) {
        this.placePath(chunk, built[i - 1], built[i]);
      }
      // Central well (a tiny 3×3 with a water cell in the middle).
      if (built.length >= 2) {
        const cxL = 8, czL = 7;
        const gy = groundY(cxL, czL);
        if (gy < CHUNK_H - 4) {
          for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
            const x = cxL + dx, z = czL + dz;
            if (x < 0 || x >= CHUNK_W || z < 0 || z >= CHUNK_W) continue;
            chunk.set(x, gy, z, 9);     // cobble rim
            chunk.set(x, gy + 1, z, 0); // clear above
          }
          chunk.set(cxL, gy, czL, 7); // water in centre
        }
      }
    }

    return chunk;
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
