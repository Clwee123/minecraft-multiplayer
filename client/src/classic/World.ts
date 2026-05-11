import * as THREE from "three";
import { createNoise2D } from "simplex-noise";
import { BLOCKS, tileUV, getAtlasTexture } from "./Textures";

export const SIZE_X = 128;
export const SIZE_Y = 64;
export const SIZE_Z = 128;
export const SEA_LEVEL = 28;

const FACE_DIRS = [
  // [dx, dy, dz]: order matches BLOCKS.faces [+X,-X,+Y,-Y,+Z,-Z]
  [ 1, 0, 0],
  [-1, 0, 0],
  [ 0, 1, 0],
  [ 0,-1, 0],
  [ 0, 0, 1],
  [ 0, 0,-1],
];

// 4 corner offsets per face direction. Each face is a quad.
// Order: bottom-left, bottom-right, top-right, top-left when looking along face normal.
const FACE_CORNERS: number[][][] = [
  // +X face (normal +X): we look toward -X; quad on x+1 plane
  [[1,0,1],[1,0,0],[1,1,0],[1,1,1]],
  // -X face
  [[0,0,0],[0,0,1],[0,1,1],[0,1,0]],
  // +Y face (top)
  [[0,1,1],[1,1,1],[1,1,0],[0,1,0]],
  // -Y face (bottom)
  [[0,0,0],[1,0,0],[1,0,1],[0,0,1]],
  // +Z face (front)
  [[1,0,1],[0,0,1],[0,1,1],[1,1,1]],
  // -Z face (back)
  [[0,0,0],[1,0,0],[1,1,0],[0,1,0]],
];

// Per-face shading (fake AO) — top brightest, bottom darkest
const FACE_LIGHT = [0.78, 0.78, 1.00, 0.55, 0.85, 0.85];

export class World {
  private blocks: Uint8Array;
  private scene: THREE.Scene;
  private opaqueMesh: THREE.Mesh | null = null;
  private leavesMesh: THREE.Mesh | null = null;
  private waterMesh: THREE.Mesh | null = null;
  private dirty = true;

  constructor(scene: THREE.Scene, seed = 0) {
    this.scene = scene;
    this.blocks = new Uint8Array(SIZE_X * SIZE_Y * SIZE_Z);
    this.generate(seed);
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
    this.blocks[this.idx(x, y, z)] = type;
    this.dirty = true;
  }

  /** Is the block at (x,y,z) solid for collision? */
  isSolid(x: number, y: number, z: number): boolean {
    const b = this.getBlock(x, y, z);
    if (b === 0) return false;
    if (b === 7) return false; // water is not solid
    return true;
  }

  /** Used for face culling: does the block at (x,y,z) hide the face of an adjacent block of `selfType`? */
  private hidesNeighbor(x: number, y: number, z: number, selfType: number): boolean {
    if (x < 0 || x >= SIZE_X || y < 0 || y >= SIZE_Y || z < 0 || z >= SIZE_Z) return false;
    const t = this.blocks[this.idx(x, y, z)];
    if (t === 0) return false;
    const def = BLOCKS[t];
    if (!def) return false;
    // Water hides water (don't draw internal water faces)
    if (selfType === 7 && t === 7) return true;
    // Transparent blocks (glass, leaves, water) don't hide non-same-type neighbors
    if (def.transparent || def.isLeaf) return t === selfType;
    return true;
  }

  // ── Generation ─────────────────────────────────────────────────────────────
  private generate(seed: number) {
    const r = mulberry32(seed || 12345);
    const noise1 = createNoise2D(r);
    const noise2 = createNoise2D(r);
    const noise3 = createNoise2D(r);

    for (let x = 0; x < SIZE_X; x++) {
      for (let z = 0; z < SIZE_Z; z++) {
        // Low-frequency rolling hills + small bumps
        const h1 = noise1(x * 0.025, z * 0.025) * 7;
        const h2 = noise2(x * 0.08,  z * 0.08)  * 2.5;
        const h3 = noise3(x * 0.005, z * 0.005) * 4;
        const height = Math.max(2, Math.min(SIZE_Y - 8, Math.floor(SEA_LEVEL + h1 + h2 + h3)));

        for (let y = 0; y < SIZE_Y; y++) {
          let block = 0;
          if (y === 0) block = 3; // bedrock = stone
          else if (y < height - 3) block = 3; // stone
          else if (y < height) block = 2;     // dirt
          else if (y === height) {
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
    for (let i = 0; i < 80; i++) {
      const x = 2 + Math.floor(r() * (SIZE_X - 4));
      const z = 2 + Math.floor(r() * (SIZE_Z - 4));
      let y = SIZE_Y - 1;
      while (y > 0 && this.getBlock(x, y, z) === 0) y--;
      if (this.getBlock(x, y, z) === 1 && y < SIZE_Y - 8) {
        this.placeTree(x, y + 1, z, r);
      }
    }
  }

  private placeTree(x: number, y: number, z: number, r: () => number) {
    const h = 4 + Math.floor(r() * 2);
    for (let i = 0; i < h; i++) this.blocks[this.idx(x, y + i, z)] = 5;
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

  // ── Mesh building ──────────────────────────────────────────────────────────
  buildMesh() {
    // Three separate meshes: opaque, leaves (cutout), water (transparent)
    const opaqueData = { pos: [] as number[], uv: [] as number[], col: [] as number[], idx: [] as number[] };
    const leavesData = { pos: [] as number[], uv: [] as number[], col: [] as number[], idx: [] as number[] };
    const waterData  = { pos: [] as number[], uv: [] as number[], col: [] as number[], idx: [] as number[] };

    for (let x = 0; x < SIZE_X; x++) {
      for (let y = 0; y < SIZE_Y; y++) {
        for (let z = 0; z < SIZE_Z; z++) {
          const b = this.blocks[this.idx(x, y, z)];
          if (b === 0) continue;
          const def = BLOCKS[b];
          if (!def) continue;

          const data = def.isWater ? waterData : (def.isLeaf ? leavesData : opaqueData);

          for (let f = 0; f < 6; f++) {
            const [dx, dy, dz] = FACE_DIRS[f];
            const nx = x + dx, ny = y + dy, nz = z + dz;
            if (this.hidesNeighbor(nx, ny, nz, b)) continue;

            const tileIdx = def.faces[f];
            const [u0, v0, u1, v1] = tileUV(tileIdx);
            const light = FACE_LIGHT[f];
            const yOff = def.isWater && f === 2 ? -0.125 : 0; // water top slightly lower

            const corners = FACE_CORNERS[f];
            const startIdx = data.pos.length / 3;

            for (let c = 0; c < 4; c++) {
              const [cx, cy, cz] = corners[c];
              data.pos.push(x + cx, y + cy + yOff, z + cz);
              data.col.push(light, light, light);
              // UV mapping per corner — match the FACE_CORNERS winding
              const u = (c === 0 || c === 3) ? u0 : u1;
              const v = (c === 0 || c === 1) ? v0 : v1;
              data.uv.push(u, v);
            }
            // Two triangles per quad: 0,1,2 and 0,2,3
            data.idx.push(startIdx, startIdx + 1, startIdx + 2, startIdx, startIdx + 2, startIdx + 3);
          }
        }
      }
    }

    // Dispose old
    if (this.opaqueMesh) { this.scene.remove(this.opaqueMesh); this.opaqueMesh.geometry.dispose(); }
    if (this.leavesMesh) { this.scene.remove(this.leavesMesh); this.leavesMesh.geometry.dispose(); }
    if (this.waterMesh)  { this.scene.remove(this.waterMesh);  this.waterMesh.geometry.dispose(); }

    const atlas = getAtlasTexture();

    this.opaqueMesh = makeMesh(opaqueData, new THREE.MeshLambertMaterial({
      map: atlas, side: THREE.FrontSide, vertexColors: true, alphaTest: 0.05,
    }));
    this.leavesMesh = makeMesh(leavesData, new THREE.MeshLambertMaterial({
      map: atlas, side: THREE.FrontSide, vertexColors: true, alphaTest: 0.5, transparent: true,
    }));
    this.waterMesh = makeMesh(waterData, new THREE.MeshLambertMaterial({
      map: atlas, side: THREE.DoubleSide, vertexColors: true,
      transparent: true, opacity: 0.72, depthWrite: false, color: 0x4488ff,
    }));
    if (this.waterMesh) this.waterMesh.renderOrder = 2;
    if (this.leavesMesh) this.leavesMesh.renderOrder = 1;

    if (this.opaqueMesh) this.scene.add(this.opaqueMesh);
    if (this.leavesMesh) this.scene.add(this.leavesMesh);
    if (this.waterMesh)  this.scene.add(this.waterMesh);

    this.dirty = false;
  }

  rebuildIfDirty() {
    if (this.dirty) this.buildMesh();
  }

  /** Find a safe spawn location (top grass block near center) */
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
            if (b === 1) return [x + 0.5, y + 2.5, z + 0.5]; // standing on grass, eyes above
          }
        }
      }
    }
    return [cx + 0.5, SIZE_Y - 4, cz + 0.5];
  }

  /** Raycast for block under reach. Returns hit position and face normal, or null. */
  raycast(origin: THREE.Vector3, dir: THREE.Vector3, maxDist: number):
    { x: number; y: number; z: number; nx: number; ny: number; nz: number } | null {
    // DDA voxel traversal
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
      // Check current cell
      if (x >= 0 && x < SIZE_X && y >= 0 && y < SIZE_Y && z >= 0 && z < SIZE_Z) {
        const b = this.blocks[this.idx(x, y, z)];
        if (b !== 0 && b !== 7) { // skip air and water
          return { x, y, z, nx, ny, nz };
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

function makeMesh(data: { pos: number[]; uv: number[]; col: number[]; idx: number[] }, mat: THREE.Material): THREE.Mesh | null {
  if (data.pos.length === 0) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(data.pos, 3));
  geo.setAttribute("uv",       new THREE.Float32BufferAttribute(data.uv, 2));
  geo.setAttribute("color",    new THREE.Float32BufferAttribute(data.col, 3));
  geo.setIndex(data.idx);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  return mesh;
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
