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
}

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

  private opaqueMat: THREE.Material | null = null;
  private leavesMat: THREE.Material | null = null;
  private waterMat: THREE.Material | null = null;

  // Noise
  private nH1: (x: number, z: number) => number;
  private nH2: (x: number, z: number) => number;
  private nH3: (x: number, z: number) => number;
  private nCave: (x: number, y: number, z: number) => number;
  private nOre: (x: number, y: number, z: number) => number;

  constructor(scene: THREE.Scene, seed = 0, options: WorldOptions = {}) {
    this.scene = scene;
    this.infinite = options.infinite ?? true;
    this.seed = seed || 12345;

    const r = mulberry32(this.seed);
    this.nH1 = createNoise2D(r);
    this.nH2 = createNoise2D(r);
    this.nH3 = createNoise2D(r);
    this.nCave = createNoise3D(r);
    this.nOre = createNoise3D(r);

    this.initMaterials();
  }

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

  setBlock(x: number, y: number, z: number, type: number) {
    if (y < 0 || y >= CHUNK_H) return;
    const cx = Math.floor(x / CHUNK_W);
    const cz = Math.floor(z / CHUNK_W);
    const key = `${cx},${cz}`;
    let chunk = this.chunks.get(key);
    if (!chunk) {
      chunk = new Chunk();
      this.chunks.set(key, chunk);
    }
    const lx = x - cx * CHUNK_W;
    const lz = z - cz * CHUNK_W;
    if (chunk.get(lx, y, lz) === type) return;
    chunk.set(lx, y, lz, type);
    this.dirtyChunks.add(key);
    // Mark neighbors dirty if on boundary
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
    for (let lx = 0; lx < CHUNK_W; lx++) {
      for (let lz = 0; lz < CHUNK_W; lz++) {
        const wx = cx * CHUNK_W + lx;
        const wz = cz * CHUNK_W + lz;
        const h1 = this.nH1(wx * 0.012, wz * 0.012) * 12;
        const h2 = this.nH2(wx * 0.04,  wz * 0.04)  * 3;
        const h3 = this.nH3(wx * 0.003, wz * 0.003) * 5;
        const height = Math.max(2, Math.min(CHUNK_H - 4, Math.floor(SEA_LEVEL + h1 + h2 + h3)));

        for (let y = 0; y < CHUNK_H; y++) {
          let block = 0;
          if (y === 0) {
            block = 3;
          } else if (y < height - 3) {
            block = 3;
            // Caves
            if (y > 4 && y < height - 5) {
              const c = this.nCave(wx * 0.06, y * 0.08, wz * 0.06);
              if (Math.abs(c) < 0.06) block = 0;
            }
            // Ores (only in stone)
            if (block === 3) {
              const o = this.nOre(wx * 0.18, y * 0.18, wz * 0.18);
              if      (y < 12 && o > 0.78) block = 21;
              else if (y < 24 && o > 0.72) block = 20;
              else if (y < 48 && o > 0.66) block = 19;
              else if (y < 56 && o > 0.60) block = 18;
            }
          } else if (y < height) {
            block = 2;
          } else if (y === height) {
            block = (height <= SEA_LEVEL) ? 4 : 1;
          } else if (y <= SEA_LEVEL && height < SEA_LEVEL) {
            block = 7;
          }
          if (block !== 0) chunk.set(lx, y, lz, block);
        }
      }
    }

    // Decorations contained inside the chunk (avoid cross-chunk writes by inset)
    const rng = mulberry32(this.seed ^ (cx * 73428767) ^ (cz * 1928371));
    // Trees — 2 to 3 attempts per chunk, inset from edges so canopy fits
    const treeTries = 3;
    for (let i = 0; i < treeTries; i++) {
      const lx = 2 + Math.floor(rng() * (CHUNK_W - 4));
      const lz = 2 + Math.floor(rng() * (CHUNK_W - 4));
      // Find surface
      let y = CHUNK_H - 1;
      while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
      if (chunk.get(lx, y, lz) === 1 && y < CHUNK_H - 8) {
        this.placeTree(chunk, lx, y + 1, lz, rng);
      }
    }
    // Flowers — 4-6 per chunk
    const flowerTries = 5;
    for (let i = 0; i < flowerTries; i++) {
      const lx = Math.floor(rng() * CHUNK_W);
      const lz = Math.floor(rng() * CHUNK_W);
      let y = CHUNK_H - 1;
      while (y > 0 && chunk.get(lx, y, lz) === 0) y--;
      if (chunk.get(lx, y, lz) === 1 && y + 1 < CHUNK_H && chunk.get(lx, y + 1, lz) === 0) {
        const which = rng();
        const id = which < 0.4 ? 30 : (which < 0.8 ? 31 : 32);
        chunk.set(lx, y + 1, lz, id);
      }
    }

    return chunk;
  }

  private placeTree(chunk: Chunk, lx: number, ly: number, lz: number, rng: () => number) {
    const h = 4 + Math.floor(rng() * 3);
    for (let i = 0; i < h; i++) {
      if (ly + i < CHUNK_H) chunk.set(lx, ly + i, lz, 5);
    }
    const top = ly + h - 1;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        for (let dy = 0; dy <= 2; dy++) {
          if (Math.abs(dx) === 2 && Math.abs(dz) === 2 && dy < 1) continue;
          if (dx === 0 && dz === 0 && dy < 2) continue;
          const lxx = lx + dx, lyy = top + dy, lzz = lz + dz;
          if (lxx < 0 || lxx >= CHUNK_W || lyy < 0 || lyy >= CHUNK_H || lzz < 0 || lzz >= CHUNK_W) continue;
          if (chunk.get(lxx, lyy, lzz) === 0) chunk.set(lxx, lyy, lzz, 6);
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
    if (!chunk) return { opaque: null, leaves: null, water: null };

    const opaqueData = newMeshData();
    const leavesData = newMeshData();
    const waterData = newMeshData();

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
            addCrossShape(opaqueData, wx, ly, wz, u0, v0, u1, v1);
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
      opaque: makeMesh(opaqueData, this.opaqueMat!),
      leaves: makeMesh(leavesData, this.leavesMat!),
      water:  makeMesh(waterData,  this.waterMat!),
    };
  }

  private replaceChunkMesh(key: string, newMeshes: ChunkMeshes) {
    const old = this.chunkMeshes.get(key);
    if (old) {
      if (old.opaque) { this.scene.remove(old.opaque); old.opaque.geometry.dispose(); }
      if (old.leaves) { this.scene.remove(old.leaves); old.leaves.geometry.dispose(); }
      if (old.water)  { this.scene.remove(old.water);  old.water.geometry.dispose(); }
    }
    if (newMeshes.leaves) newMeshes.leaves.renderOrder = 1;
    if (newMeshes.water)  newMeshes.water.renderOrder  = 2;
    if (newMeshes.opaque) this.scene.add(newMeshes.opaque);
    if (newMeshes.leaves) this.scene.add(newMeshes.leaves);
    if (newMeshes.water)  this.scene.add(newMeshes.water);
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
          if (def && !def.isWater && def.solid !== false) {
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
    data.idx.push(startIdx, startIdx + 2, startIdx + 1, startIdx, startIdx + 3, startIdx + 2);
  }
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
