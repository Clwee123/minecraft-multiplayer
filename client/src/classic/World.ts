import * as THREE from "three";
import { createNoise2D, createNoise3D } from "simplex-noise";
import { BLOCKS, tileUV, getAtlasTexture } from "./Textures";

export const SIZE_X = 256;
export const SIZE_Y = 64;
export const SIZE_Z = 256;
export const SEA_LEVEL = 32;

const CHUNK = 16;
const CX_COUNT = SIZE_X / CHUNK;   // 16
const CY_COUNT = SIZE_Y / CHUNK;   // 4
const CZ_COUNT = SIZE_Z / CHUNK;   // 16

const FACE_DIRS = [
  // [dx, dy, dz]: order matches BLOCKS.faces [+X,-X,+Y,-Y,+Z,-Z]
  [ 1, 0, 0],
  [-1, 0, 0],
  [ 0, 1, 0],
  [ 0,-1, 0],
  [ 0, 0, 1],
  [ 0, 0,-1],
];

// 4 corner offsets per face direction, CCW from outside (so cross product matches outward normal).
const FACE_CORNERS: number[][][] = [
  // +X face (outward normal +X)
  [[1,0,1],[1,0,0],[1,1,0],[1,1,1]],
  // -X face (outward normal -X)
  [[0,0,0],[0,0,1],[0,1,1],[0,1,0]],
  // +Y face (top)
  [[0,1,1],[1,1,1],[1,1,0],[0,1,0]],
  // -Y face (bottom)
  [[0,0,0],[1,0,0],[1,0,1],[0,0,1]],
  // +Z face (outward normal +Z) — FIXED winding
  [[0,0,1],[1,0,1],[1,1,1],[0,1,1]],
  // -Z face (outward normal -Z) — FIXED winding
  [[1,0,0],[0,0,0],[0,1,0],[1,1,0]],
];

// Per-face shading (fake AO) — top brightest, sides medium, bottom darkest
const FACE_LIGHT = [0.78, 0.78, 1.00, 0.55, 0.85, 0.85];

interface ChunkMeshes {
  opaque: THREE.Mesh | null;
  leaves: THREE.Mesh | null;
  water: THREE.Mesh | null;
}

export class World {
  private blocks: Uint8Array;
  private scene: THREE.Scene;
  private chunks: Map<string, ChunkMeshes> = new Map();
  private dirtyChunks: Set<string> = new Set();
  private opaqueMat: THREE.Material | null = null;
  private leavesMat: THREE.Material | null = null;
  private waterMat: THREE.Material | null = null;

  constructor(scene: THREE.Scene, seed = 0) {
    this.scene = scene;
    this.blocks = new Uint8Array(SIZE_X * SIZE_Y * SIZE_Z);
    this.generate(seed);
    this.initMaterials();
  }

  private idx(x: number, y: number, z: number): number {
    return x + z * SIZE_X + y * SIZE_X * SIZE_Z;
  }

  getBlock(x: number, y: number, z: number): number {
    if (x < 0 || x >= SIZE_X || y < 0 || y >= SIZE_Y || z < 0 || z >= SIZE_Z) return 0;
    return this.blocks[this.idx(x, y, z)];
  }

  setBlock(x: number, y: number, z: number, type: number) {
    if (x < 0 || x >= SIZE_X || y < 0 || y >= SIZE_Y || z < 0 || z >= SIZE_Z) return;
    if (this.blocks[this.idx(x, y, z)] === type) return;
    this.blocks[this.idx(x, y, z)] = type;
    // Mark containing chunk dirty
    const cx = (x / CHUNK) | 0;
    const cy = (y / CHUNK) | 0;
    const cz = (z / CHUNK) | 0;
    this.dirtyChunks.add(`${cx},${cy},${cz}`);
    // Mark neighbor chunks dirty if on chunk boundary
    const lx = x - cx * CHUNK, ly = y - cy * CHUNK, lz = z - cz * CHUNK;
    if (lx === 0       && cx > 0)            this.dirtyChunks.add(`${cx-1},${cy},${cz}`);
    if (lx === CHUNK-1 && cx < CX_COUNT - 1) this.dirtyChunks.add(`${cx+1},${cy},${cz}`);
    if (ly === 0       && cy > 0)            this.dirtyChunks.add(`${cx},${cy-1},${cz}`);
    if (ly === CHUNK-1 && cy < CY_COUNT - 1) this.dirtyChunks.add(`${cx},${cy+1},${cz}`);
    if (lz === 0       && cz > 0)            this.dirtyChunks.add(`${cx},${cy},${cz-1}`);
    if (lz === CHUNK-1 && cz < CZ_COUNT - 1) this.dirtyChunks.add(`${cx},${cy},${cz+1}`);
  }

  isSolid(x: number, y: number, z: number): boolean {
    const b = this.getBlock(x, y, z);
    if (b === 0) return false;
    const def = BLOCKS[b];
    if (!def) return false;
    if (def.isWater) return false;          // water not solid
    if (def.solid === false) return false;  // flowers etc.
    return true;
  }

  /** For face culling */
  private hidesNeighbor(x: number, y: number, z: number, selfType: number): boolean {
    if (x < 0 || x >= SIZE_X || y < 0 || y >= SIZE_Y || z < 0 || z >= SIZE_Z) return false;
    const t = this.blocks[this.idx(x, y, z)];
    if (t === 0) return false;
    const def = BLOCKS[t];
    if (!def) return false;
    // Same-type cull (don't draw face between two water blocks, two leaves, two glass)
    if (t === selfType && (def.transparent || def.isLeaf || def.isWater)) return true;
    // Transparent/leaf neighbor: don't hide opaque face behind it
    if (def.transparent || def.isLeaf || def.isWater) return false;
    return true;
  }

  // ── Generation ─────────────────────────────────────────────────────────────
  private generate(seed: number) {
    const r = mulberry32(seed || 12345);
    const noise1 = createNoise2D(r);
    const noise2 = createNoise2D(r);
    const noise3 = createNoise2D(r);
    const caveNoise = createNoise3D(r);
    const oreNoise = createNoise3D(r);

    for (let x = 0; x < SIZE_X; x++) {
      for (let z = 0; z < SIZE_Z; z++) {
        const h1 = noise1(x * 0.012, z * 0.012) * 12;
        const h2 = noise2(x * 0.04,  z * 0.04)  * 3;
        const h3 = noise3(x * 0.003, z * 0.003) * 5;
        const height = Math.max(2, Math.min(SIZE_Y - 4, Math.floor(SEA_LEVEL + h1 + h2 + h3)));

        for (let y = 0; y < SIZE_Y; y++) {
          let block = 0;
          if (y === 0) {
            block = 3; // bedrock = stone
          } else if (y < height - 3) {
            block = 3; // stone

            // Caves (skip below y=4 for "bedrock" buffer)
            if (y > 4 && y < height - 5) {
              const c = caveNoise(x * 0.06, y * 0.08, z * 0.06);
              if (Math.abs(c) < 0.06) block = 0;
            }

            // Ores (only in stone)
            if (block === 3) {
              const o = oreNoise(x * 0.18, y * 0.18, z * 0.18);
              if      (y < 12 && o > 0.78) block = 21; // diamond
              else if (y < 24 && o > 0.72) block = 20; // gold
              else if (y < 48 && o > 0.66) block = 19; // iron
              else if (y < 56 && o > 0.60) block = 18; // coal
            }
          } else if (y < height) {
            block = 2; // dirt
          } else if (y === height) {
            if (height <= SEA_LEVEL) block = 4; // sand at/below sea level surface
            else block = 1;                      // grass
          } else if (y <= SEA_LEVEL && height < SEA_LEVEL) {
            block = 7; // water
          }
          if (block !== 0) this.blocks[this.idx(x, y, z)] = block;
        }
      }
    }

    // Trees on grass
    const treeCount = 250;
    for (let i = 0; i < treeCount; i++) {
      const x = 2 + Math.floor(r() * (SIZE_X - 4));
      const z = 2 + Math.floor(r() * (SIZE_Z - 4));
      let y = SIZE_Y - 1;
      while (y > 0 && this.getBlock(x, y, z) === 0) y--;
      if (this.getBlock(x, y, z) === 1 && y < SIZE_Y - 8) {
        this.placeTree(x, y + 1, z, r);
      }
    }

    // Flowers on grass
    for (let i = 0; i < 400; i++) {
      const x = 1 + Math.floor(r() * (SIZE_X - 2));
      const z = 1 + Math.floor(r() * (SIZE_Z - 2));
      let y = SIZE_Y - 1;
      while (y > 0 && this.getBlock(x, y, z) === 0) y--;
      if (this.getBlock(x, y, z) === 1) {
        const flowerType = r() < 0.5 ? 30 : 31;
        if (this.getBlock(x, y + 1, z) === 0) {
          this.blocks[this.idx(x, y + 1, z)] = flowerType;
        }
      }
    }
  }

  private placeTree(x: number, y: number, z: number, r: () => number) {
    const h = 4 + Math.floor(r() * 3);
    for (let i = 0; i < h; i++) {
      if (y + i < SIZE_Y) this.blocks[this.idx(x, y + i, z)] = 5;
    }
    const top = y + h - 1;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        for (let dy = 0; dy <= 2; dy++) {
          if (Math.abs(dx) === 2 && Math.abs(dz) === 2 && dy < 1) continue;
          if (dx === 0 && dz === 0 && dy < 2) continue;
          const lx = x + dx, ly = top + dy, lz = z + dz;
          if (lx < 0 || lx >= SIZE_X || ly < 0 || ly >= SIZE_Y || lz < 0 || lz >= SIZE_Z) continue;
          if (this.blocks[this.idx(lx, ly, lz)] === 0) {
            this.blocks[this.idx(lx, ly, lz)] = 6;
          }
        }
      }
    }
  }

  // ── Materials (created once) ───────────────────────────────────────────────
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

  // ── Chunked mesh build ─────────────────────────────────────────────────────
  /** Build a single chunk at (cx, cy, cz). Returns 3 meshes (or nulls). */
  private buildChunk(cx: number, cy: number, cz: number): ChunkMeshes {
    const opaqueData = newMeshData();
    const leavesData = newMeshData();
    const waterData  = newMeshData();

    const x0 = cx * CHUNK, y0 = cy * CHUNK, z0 = cz * CHUNK;
    const x1 = x0 + CHUNK, y1 = y0 + CHUNK, z1 = z0 + CHUNK;

    for (let x = x0; x < x1; x++) {
      for (let y = y0; y < y1; y++) {
        for (let z = z0; z < z1; z++) {
          const b = this.blocks[this.idx(x, y, z)];
          if (b === 0) continue;
          const def = BLOCKS[b];
          if (!def) continue;

          // Cross-shape sprites (flowers): always 4 faces in X-shape
          if (def.crossShape) {
            const tileIdx = def.faces[0];
            const [u0, v0, u1, v1] = tileUV(tileIdx);
            addCrossShape(opaqueData, x, y, z, u0, v0, u1, v1);
            continue;
          }

          const data = def.isWater ? waterData : (def.isLeaf ? leavesData : opaqueData);

          for (let f = 0; f < 6; f++) {
            const [dx, dy, dz] = FACE_DIRS[f];
            const nx = x + dx, ny = y + dy, nz = z + dz;
            if (this.hidesNeighbor(nx, ny, nz, b)) continue;

            const tileIdx = def.faces[f];
            const [u0, v0, u1, v1] = tileUV(tileIdx);
            const light = FACE_LIGHT[f];
            const yOff = def.isWater && f === 2 ? -0.12 : 0; // water top slightly lower

            const corners = FACE_CORNERS[f];
            const startIdx = data.pos.length / 3;

            for (let c = 0; c < 4; c++) {
              const [cx2, cy2, cz2] = corners[c];
              data.pos.push(x + cx2, y + cy2 + yOff, z + cz2);
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

  /** Dispose old chunk meshes and add new ones. */
  private replaceChunk(key: string, newMeshes: ChunkMeshes) {
    const old = this.chunks.get(key);
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
    this.chunks.set(key, newMeshes);
  }

  /** Build all chunks initially. Called once after world generation. */
  buildAllChunks() {
    for (let cx = 0; cx < CX_COUNT; cx++) {
      for (let cy = 0; cy < CY_COUNT; cy++) {
        for (let cz = 0; cz < CZ_COUNT; cz++) {
          const key = `${cx},${cy},${cz}`;
          const meshes = this.buildChunk(cx, cy, cz);
          this.replaceChunk(key, meshes);
        }
      }
    }
    this.dirtyChunks.clear();
  }

  /** Rebuild up to `maxPerFrame` dirty chunks per call. */
  rebuildDirty(maxPerFrame = 4) {
    if (this.dirtyChunks.size === 0) return;
    let rebuilt = 0;
    for (const key of this.dirtyChunks) {
      const [cx, cy, cz] = key.split(",").map(Number);
      const meshes = this.buildChunk(cx, cy, cz);
      this.replaceChunk(key, meshes);
      this.dirtyChunks.delete(key);
      rebuilt++;
      if (rebuilt >= maxPerFrame) break;
    }
  }

  /** Find a safe spawn location (top grass block near world center) */
  findSpawn(): [number, number, number] {
    const cx = Math.floor(SIZE_X / 2);
    const cz = Math.floor(SIZE_Z / 2);
    for (let r = 0; r < 30; r++) {
      for (let dx = -r; dx <= r; dx++) {
        for (let dz = -r; dz <= r; dz++) {
          if (Math.abs(dx) !== r && Math.abs(dz) !== r && r > 0) continue;
          const x = cx + dx, z = cz + dz;
          if (x < 0 || x >= SIZE_X || z < 0 || z >= SIZE_Z) continue;
          for (let y = SIZE_Y - 1; y > SEA_LEVEL; y--) {
            const b = this.getBlock(x, y, z);
            if (b === 1) return [x + 0.5, y + 1.001, z + 0.5];
          }
        }
      }
    }
    return [cx + 0.5, SIZE_Y - 4, cz + 0.5];
  }

  /** DDA voxel raycast for block targeting */
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
      if (x >= 0 && x < SIZE_X && y >= 0 && y < SIZE_Y && z >= 0 && z < SIZE_Z) {
        const b = this.blocks[this.idx(x, y, z)];
        if (b !== 0) {
          const def = BLOCKS[b];
          // Don't target water or non-solid sprites
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
}

// ── Helpers ───────────────────────────────────────────────────────────────────

interface MeshData {
  pos: number[]; uv: number[]; col: number[]; idx: number[];
}
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

/** Add an X-shape sprite at (x,y,z) — two diagonal quads. Used for flowers/grass. */
function addCrossShape(data: MeshData, x: number, y: number, z: number, u0: number, v0: number, u1: number, v1: number) {
  const off = 0.1; // inset to avoid z-fighting with block grid
  // First diagonal quad: corner (off, 0, off) → (1-off, 1, 1-off)
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
    // Backface
    data.idx.push(startIdx, startIdx + 2, startIdx + 1, startIdx, startIdx + 3, startIdx + 2);
  }
}

function mulberry32(seed: number): () => number {
  let t = seed;
  return function () {
    t = (t + 0x6D2B79F5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
