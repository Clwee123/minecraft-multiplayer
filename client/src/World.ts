import * as THREE from "three";
import { createNoise2D } from "simplex-noise";
import { BLOCK_TYPES } from "./blocks";
import { getBlockMaterials } from "./BlockTextures";

// ── Constants ────────────────────────────────────────────────────────────────
const CHUNK_SIZE   = 16;
const SEA_LEVEL    = 62;

// Key packing: x,z in [-4096,4095], y in [0,255]
const KX = 4096;
const KZ = 4096;
const KYM = 8192;       // (x+4096) fits in 13 bits
const KZM = 8192 * 256; // y in 8 bits
function key(x: number, y: number, z: number): number {
  return (x + KX) + y * KYM + (z + KZ) * KZM;
}
function strKey(x: number, y: number, z: number): string { return `${x},${y},${z}`; }

export class World {
  scene: THREE.Scene;

  // ── Instance mesh system ────────────────────────────────────────────────
  private instancedMeshes: Map<number, THREE.InstancedMesh> = new Map();
  private instanceCount:   Map<number, number>              = new Map();
  private _dirtyMeshes:  Set<number>                         = new Set(); // types needing GPU upload
  private instanceIndex:   Map<number, number>              = new Map(); // intKey -> meshIdx
  private instanceRevIndex: Map<string, number>             = new Map(); // "type:idx" -> intKey
  private blockData:       Map<number, number>              = new Map(); // intKey -> blockType
  private generatedChunks: Set<string>                      = new Set();
  private modifications:   Map<string, number>              = new Map();
  private chestContents:   Map<string, number[]>            = new Map();

  private static readonly MAX_INSTANCES = 32000;
  private static _mat4 = new THREE.Matrix4();
  private static _rayFace = new THREE.Vector3();

  // ── Noise ────────────────────────────────────────────────────────────────
  // Each noise function has a fixed deterministic seed via alea-style lambda
  private nH1 = createNoise2D(() => 0.31415);  // continental base
  private nH2 = createNoise2D(() => 0.62831);  // hill detail
  private nH3 = createNoise2D(() => 0.94247);  // micro bumps
  private nH4 = createNoise2D(() => 0.12566);  // very fine
  private nBio= createNoise2D(() => 0.78539);  // biome
  private nCv1= createNoise2D(() => 0.52359);  // cave A
  private nCv2= createNoise2D(() => 0.20943);  // cave B
  private nOre= createNoise2D(() => 0.41887);  // ore clusters
  // Legacy aliases (used by dungeon/structure code)
  private noise2D  = createNoise2D(() => 0.69813);
  private noise2D2 = createNoise2D(() => 0.87964);
  private biomeNoise = createNoise2D(() => 0.78539); // same seed as nBio

  // Wave 9 torch system
  torchLights: Map<string, THREE.PointLight> = new Map();
  private torchLightQueue: string[] = [];

  // Wave 9 redstone
  private leverStates: Map<string, boolean> = new Map();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.generateTerrain();
    this.generateDungeons();
  }

  getDungeonSpawns(): [number, number, number][] {
    return [[-40,0,-40],[50,0,30],[-20,0,80]];
  }

  // ── Biome ────────────────────────────────────────────────────────────────
  getBiome(x: number, z: number): number {
    const b = this.nBio(x * 0.0012, z * 0.0012);
    if (b < -0.45)  return 4; // ocean
    if (b < -0.05)  return 0; // plains
    if (b < 0.25)   return 2; // forest
    if (b < 0.52)   return 1; // desert
    return 3;                  // mountains
  }

  // ── Terrain height — 4-octave fBm ──────────────────────────────────────
  private getHeight(wx: number, wz: number): number {
    const biome = this.getBiome(wx, wz);

    // 4-octave fbm, frequencies tuned to MC 1.8 feel
    const o1 = this.nH1(wx * 0.003,  wz * 0.003);
    const o2 = this.nH2(wx * 0.006,  wz * 0.006) * 0.5;
    const o3 = this.nH3(wx * 0.012,  wz * 0.012) * 0.25;
    const o4 = this.nH4(wx * 0.024,  wz * 0.024) * 0.125;
    const n = (o1 + o2 + o3 + o4) / 1.875; // range ~[-1,1]
    const t = (n + 1) * 0.5;                // range [0,1]

    switch (biome) {
      case 4: return Math.min(Math.round(40 + t * 20), 59); // ocean: 40-59
      case 0: return Math.round(63 + t * 5);                // plains: 63-68
      case 1: return Math.round(63 + t * 9);                // desert: 63-72
      case 2: return Math.round(63 + t * 18);               // forest: 63-81
      case 3: return Math.round(68 + t * 65);               // mountains: 68-133
      default: return 64;
    }
  }

  // ── Cave ─────────────────────────────────────────────────────────────────
  private isCave(x: number, y: number, z: number): boolean {
    const n1 = this.nCv1(x * 0.04 + y * 0.035, z * 0.04);
    const n2 = this.nCv2(x * 0.04, z * 0.04 + y * 0.035);
    return (Math.abs(n1) + Math.abs(n2)) < 0.10;
  }

  // ── Chunk raw gen ────────────────────────────────────────────────────────
  private generateChunkRaw(
    cx: number, cz: number,
    rawBlocks: Map<number, number>,
    rawCoords: Array<[number,number,number]>
  ) {
    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const h   = this.getHeight(wx, wz);
        const bio = this.getBiome(wx, wz);
        const beach = bio !== 4 && h >= SEA_LEVEL - 2 && h <= SEA_LEVEL + 2;

        const set = (y: number, t: number) => {
          rawBlocks.set(key(wx, y, wz), t);
          rawCoords.push([wx, y, wz]);
        };

        for (let y = 0; y <= h; y++) {
          // Cave carving (skip bedrock band and top 2 layers)
          if (y > 4 && y < h - 1 && this.isCave(wx, y, wz)) continue;

          let t: number;
          if (y <= 4) {
            t = 3; // bedrock zone = stone
          } else if (bio === 1 || beach) {
            // Desert / beach
            t = (y >= h - 3) ? 4 : 3;  // sand top, stone below
          } else if (bio === 4) {
            // Ocean floor
            t = (y === h) ? 12 : (y === h-1 ? 4 : 3); // gravel, sand, stone
          } else {
            // Standard biomes
            if      (y === h)       t = (bio === 3 && h > 100) ? 20 : 1; // grass or snow
            else if (y >= h - 4)   t = 2;  // dirt
            else                   t = 3;  // stone
          }

          // Ores (stone only, below surface)
          if (t === 3 && y < h - 4) {
            const ov = this.nOre(wx * 0.16 + y * 0.11, wz * 0.16);
            if      (y <= 16  && ov > 0.76) t = 61; // diamond
            else if (y <= 32  && ov > 0.68) t = 13; // gold
            else if (y <= 64  && ov > 0.60) t = 14; // iron
            else if (y <= 128 && ov > 0.54) t = 15; // coal
          }

          set(y, t);
        }

        // Water fill
        if (h < SEA_LEVEL) {
          for (let y = h + 1; y <= SEA_LEVEL; y++) set(y, 7);
        }
      }
    }
  }

  // ── Chunk decorations ─────────────────────────────────────────────────────
  private generateChunkDecorations(cx: number, cz: number, _raw: Map<number, number>) {
    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const h   = this.getHeight(wx, wz);
        const bio = this.getBiome(wx, wz);
        if (h <= SEA_LEVEL) continue;

        const r = Math.random();
        if (bio === 0) { // Plains
          if (r < 0.02)  this.placeBlock(wx, h+1, wz, 51, false);
          else if (r < 0.03) this.placeTree(wx, h+1, wz);
        } else if (bio === 1) { // Desert
          if (r < 0.03) this.placeBlock(wx, h+1, wz, 50, false);
          else if (r < 0.05) this.placeBlock(wx, h+1, wz, 52, false);
        } else if (bio === 2) { // Forest
          if (r < 0.09)  this.placeTree(wx, h+1, wz);
          else if (r < 0.12) this.placeBlock(wx, h+1, wz, 51, false);
        } else if (bio === 3) { // Mountains
          if (h < 100 && r < 0.03) this.placeTree(wx, h+1, wz);
        }
      }
    }
  }

  // ── Oak tree ──────────────────────────────────────────────────────────────
  private placeTree(x: number, y: number, z: number) {
    const trunkH = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < trunkH; i++) this.placeBlock(x, y+i, z, 5, false);
    const top = y + trunkH;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        for (let dy = -1; dy <= 2; dy++) {
          if (Math.abs(dx) === 2 && Math.abs(dz) === 2 && dy < 1) continue;
          if (dx === 0 && dz === 0 && dy < 2) continue; // trunk slot
          this.placeBlock(x+dx, top+dy, z+dz, 6, false);
        }
      }
    }
  }

  // ── Main terrain generation ───────────────────────────────────────────────
  private generateTerrain() {
    const R = 3;
    const rawBlocks = new Map<number, number>();
    const rawCoords: Array<[number,number,number]> = [];

    for (let cx = -R; cx <= R; cx++) {
      for (let cz = -R; cz <= R; cz++) {
        const ck = `${cx},${cz}`;
        if (this.generatedChunks.has(ck)) continue;
        this.generatedChunks.add(ck);
        this.generateChunkRaw(cx, cz, rawBlocks, rawCoords);
      }
    }

    // Face-cull pass
    for (const [x, y, z] of rawCoords) {
      const k    = key(x, y, z);
      const type = rawBlocks.get(k)!;
      if (!World.isOpaque(type)) {
        this.placeBlock(x, y, z, type, false);
        continue;
      }
      const exposed =
        !World.isOpaque(rawBlocks.get(key(x+1,y,z)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x-1,y,z)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x,y+1,z)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x,y-1,z)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x,y,z+1)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x,y,z-1)) ?? 0);
      if (exposed) {
        this.placeBlock(x, y, z, type, false);
      } else {
        this.blockData.set(k, type);
      }
    }

    // Decorations
    for (let cx = -R; cx <= R; cx++) {
      for (let cz = -R; cz <= R; cz++) {
        const dk = `${cx},${cz}_dec`;
        if (this.generatedChunks.has(dk)) continue;
        this.generatedChunks.add(dk);
        this.generateChunkDecorations(cx, cz, rawBlocks);
      }
    }
  }

  // ── Dynamic chunk loading ─────────────────────────────────────────────────
  /** Generate new chunks around player — processes ONE chunk per call to avoid frame stutter. */
  generateAroundPlayer(px: number, pz: number) {
    const R   = 3;
    const cx0 = Math.floor(px / CHUNK_SIZE);
    const cz0 = Math.floor(pz / CHUNK_SIZE);

    // Find ONE ungenerated chunk (closest first)
    let bestCx = 0, bestCz = 0, bestDist = Infinity, found = false;
    for (let cx = cx0-R; cx <= cx0+R; cx++) {
      for (let cz = cz0-R; cz <= cz0+R; cz++) {
        if (this.generatedChunks.has(`${cx},${cz}`)) continue;
        const d = (cx-cx0)*(cx-cx0) + (cz-cz0)*(cz-cz0);
        if (d < bestDist) { bestDist = d; bestCx = cx; bestCz = cz; found = true; }
      }
    }
    if (!found) return; // all chunks already generated

    const ck = `${bestCx},${bestCz}`;
    this.generatedChunks.add(ck);

    const rawBlocks = new Map<number, number>();
    const rawCoords: Array<[number,number,number]> = [];
    this.generateChunkRaw(bestCx, bestCz, rawBlocks, rawCoords);

    // Face-cull pass for this chunk
    for (const [x, y, z] of rawCoords) {
      const k    = key(x, y, z);
      const type = rawBlocks.get(k)!;
      if (!World.isOpaque(type)) {
        this.placeBlock(x, y, z, type, false); continue;
      }
      const getT = (nx: number, ny: number, nz: number) =>
        rawBlocks.get(key(nx,ny,nz)) ?? (this.blockData.get(key(nx,ny,nz)) ?? 0);
      const exposed =
        !World.isOpaque(getT(x+1,y,z)) || !World.isOpaque(getT(x-1,y,z)) ||
        !World.isOpaque(getT(x,y+1,z)) || !World.isOpaque(getT(x,y-1,z)) ||
        !World.isOpaque(getT(x,y,z+1)) || !World.isOpaque(getT(x,y,z-1));
      if (exposed) this.placeBlock(x, y, z, type, false);
      else this.blockData.set(k, type);
    }

    // Decorations for this chunk
    const dk = `${bestCx},${bestCz}_dec`;
    if (!this.generatedChunks.has(dk)) {
      this.generatedChunks.add(dk);
      this.generateChunkDecorations(bestCx, bestCz, rawBlocks);
    }
  }

  // ── Opaque check ──────────────────────────────────────────────────────────
  private static readonly TRANSPARENT_TYPES = new Set([
    7,9,21,50,51,52,56,57,58,83,84,85,86,87,88
  ]);
  static isOpaque(type: number): boolean {
    return type > 0 && !World.TRANSPARENT_TYPES.has(type);
  }

  // ── InstancedMesh factory ─────────────────────────────────────────────────
  private static sharedBoxGeo: THREE.BoxGeometry | null = null;
  private static getBoxGeo(): THREE.BoxGeometry {
    if (!World.sharedBoxGeo) World.sharedBoxGeo = new THREE.BoxGeometry(1,1,1);
    return World.sharedBoxGeo;
  }

  private getOrCreateInstancedMesh(blockType: number): THREE.InstancedMesh {
    if (this.instancedMeshes.has(blockType)) return this.instancedMeshes.get(blockType)!;
    const info = BLOCK_TYPES[blockType];
    const mats = getBlockMaterials(blockType, info ?? {});
    const mat  = mats.length === 1 ? mats[0] : mats as any;
    const mesh = new THREE.InstancedMesh(World.getBoxGeo(), mat, World.MAX_INSTANCES);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.count          = 0;
    mesh.castShadow     = false;
    mesh.receiveShadow  = false;
    mesh.frustumCulled  = false;
    if (blockType === 7) mesh.renderOrder = 1; // water last
    this.scene.add(mesh);
    this.instancedMeshes.set(blockType, mesh);
    this.instanceCount.set(blockType, 0);
    return mesh;
  }

  // ── Dungeon gen (preserved) ───────────────────────────────────────────────
  private generateDungeons() {
    this.generateDungeon(-40, -40);
    this.generateDungeon(50, 30);
  }
  private generateDungeon(cx: number, cz: number) {
    const surfaceY = this.getSurfaceHeight(cx, cz);
    const roomY    = surfaceY - 8;
    if (roomY < 10) return;
    const w = 9, th = 5, d = 9;
    for (let x = cx; x < cx+w; x++) {
      for (let y = roomY; y < roomY+th; y++) {
        for (let z = cz; z < cz+d; z++) {
          if (x === cx || x === cx+w-1 || y === roomY || y === roomY+th-1 || z === cz || z === cz+d-1) {
            this.placeBlock(x, y, z, y === roomY ? 11 : 3, false);
          } else {
            this.removeBlock(x, y, z);
          }
        }
      }
    }
    // Spawner
    this.placeBlock(cx + Math.floor(w/2), roomY+1, cz + Math.floor(d/2), 48, false);
  }

  placeBlock(x: number, y: number, z: number, type: number, overwrite = true) {
    const k = key(x, y, z);

    // If overwrite=false and block already exists, skip
    if (!overwrite && this.blockData.has(k)) return;

    // Remove existing block at this position first
    if (this.blockData.has(k)) {
      this._removeBlockInstance(k);
    }

    // Store block data
    this.blockData.set(k, type);

    // Get/create the instanced mesh for this block type
    const mesh = this.getOrCreateInstancedMesh(type);

    // Add new instance
    const idx = this.instanceCount.get(type) ?? 0;
    if (idx >= World.MAX_INSTANCES) return; // safety cap

    // Water blocks sit slightly lower (like Minecraft's 7/8 height water)
    const yOff = type === 7 ? 0.375 : 0.5;
    World._mat4.setPosition(x + 0.5, y + yOff, z + 0.5);
    mesh.setMatrixAt(idx, World._mat4);
    mesh.count = idx + 1;
    this._dirtyMeshes.add(type); // batch GPU upload

    this.instanceIndex.set(k, idx);
    this.instanceRevIndex.set(`${type}:${idx}`, k);
    this.instanceCount.set(type, idx + 1);

    // Track modifications (use string key for save/load compatibility)
    if (overwrite) {
      this.modifications.set(strKey(x, y, z), type);
    }
  }

  removeBlock(x: number, y: number, z: number): boolean {
    const k = key(x, y, z);
    if (!this.blockData.has(k)) return false;

    this._removeBlockInstance(k);
    this.blockData.delete(k);
    this.modifications.set(strKey(x, y, z), 0);

    // Expose previously hidden neighbors — add their mesh if they had none
    const neighbors: [number,number,number][] = [
      [x+1,y,z],[x-1,y,z],[x,y+1,z],[x,y-1,z],[x,y,z+1],[x,y,z-1],
    ];
    for (const [nx,ny,nz] of neighbors) {
      const nk = key(nx,ny,nz);
      const ntype = this.blockData.get(nk);
      if (ntype === undefined || ntype === 0) continue;
      if (!this.instanceIndex.has(nk)) {
        this._addBlockMesh(nx, ny, nz, ntype);
      }
    }

    return true;
  }

  /** Add a mesh instance for a block that already exists in blockData but has no instance. */
  private _addBlockMesh(x: number, y: number, z: number, type: number) {
    const k = key(x, y, z);
    if (this.instanceIndex.has(k)) return; // already has mesh
    const mesh = this.getOrCreateInstancedMesh(type);
    const idx = this.instanceCount.get(type) ?? 0;
    if (idx >= World.MAX_INSTANCES) return;
    World._mat4.setPosition(x + 0.5, y + 0.5, z + 0.5);
    mesh.setMatrixAt(idx, World._mat4);
    mesh.count = idx + 1;
    this._dirtyMeshes.add(type);
    this.instanceIndex.set(k, idx);
    this.instanceRevIndex.set(`${type}:${idx}`, k);
    this.instanceCount.set(type, idx + 1);
  }

  private _removeBlockInstance(k: number) {
    const type = this.blockData.get(k);
    if (type === undefined) return;

    const mesh = this.instancedMeshes.get(type);
    const idx = this.instanceIndex.get(k);
    if (!mesh || idx === undefined) return;

    const count = this.instanceCount.get(type) ?? 0;
    const lastIdx = count - 1;

    if (idx !== lastIdx) {
      // Swap with last instance — reuse static matrix to avoid allocation
      mesh.getMatrixAt(lastIdx, World._mat4);
      mesh.setMatrixAt(idx, World._mat4);
      mesh.instanceMatrix.needsUpdate = true;

      // Find which key maps to lastIdx and update it
      const lastKey = this.instanceRevIndex.get(`${type}:${lastIdx}`);
      if (lastKey !== undefined) {
        this.instanceIndex.set(lastKey, idx);
        this.instanceRevIndex.set(`${type}:${idx}`, lastKey);
      }
    }

    // Remove the last instance
    this.instanceIndex.delete(k);
    this.instanceRevIndex.delete(`${type}:${lastIdx}`);
    if (idx !== lastIdx) {
      this.instanceRevIndex.delete(`${type}:${idx}`);
    }

    const newCount = lastIdx;
    mesh.count = newCount;
    this.instanceCount.set(type, newCount);
    mesh.instanceMatrix.needsUpdate = true;
  }

  hasBlock(x: number, y: number, z: number): boolean {
    return this.blockData.has(key(x, y, z));
  }

  /** Fast O(1) block type lookup — returns undefined if no block, 0 reserved for air */
  getBlockType(x: number, y: number, z: number): number | undefined {
    return this.blockData.get(key(x, y, z));
  }

  getBlock(x: number, y: number, z: number) {
    const type = this.blockData.get(key(x, y, z));
    if (type === undefined) return undefined;
    return { type };
  }

  getBlockCount(): number {
    return this.blockData.size;
  }

  isNearBlock(x: number, y: number, z: number, blockType: number, radius: number): boolean {
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (this.blockData.get(key(x + dx, y + dy, z + dz)) === blockType) return true;
        }
      }
    }
    return false;
  }

  getMeshes(): THREE.Object3D[] {
    return Array.from(this.instancedMeshes.values());
  }

  updateVisibility(_playerPos: THREE.Vector3): void {
    // With InstancedMesh, all instances of a type are drawn together.
    // View distance is controlled by render distance R at generation time.
    // No per-frame visibility updates needed.
  }

  // ── Raycasting (math-based, works with InstancedMesh) ────────────────────────

  raycastBlock(origin: THREE.Vector3, direction: THREE.Vector3, maxDist = 6): {
    x: number; y: number; z: number; face: THREE.Vector3;
  } | null {
    // DDA voxel traversal — visits exactly the voxels the ray crosses, O(blocks) not O(dist/step)
    let bx = Math.floor(origin.x);
    let by = Math.floor(origin.y);
    let bz = Math.floor(origin.z);

    const dx = direction.x, dy = direction.y, dz = direction.z;

    const stepX = dx > 0 ? 1 : dx < 0 ? -1 : 0;
    const stepY = dy > 0 ? 1 : dy < 0 ? -1 : 0;
    const stepZ = dz > 0 ? 1 : dz < 0 ? -1 : 0;

    const tDeltaX = stepX !== 0 ? Math.abs(1 / dx) : Infinity;
    const tDeltaY = stepY !== 0 ? Math.abs(1 / dy) : Infinity;
    const tDeltaZ = stepZ !== 0 ? Math.abs(1 / dz) : Infinity;

    let tMaxX = stepX > 0 ? (bx + 1 - origin.x) * tDeltaX : stepX < 0 ? (origin.x - bx) * tDeltaX : Infinity;
    let tMaxY = stepY > 0 ? (by + 1 - origin.y) * tDeltaY : stepY < 0 ? (origin.y - by) * tDeltaY : Infinity;
    let tMaxZ = stepZ > 0 ? (bz + 1 - origin.z) * tDeltaZ : stepZ < 0 ? (origin.z - bz) * tDeltaZ : Infinity;

    let faceX = 0, faceY = 0, faceZ = 0;

    // Step through at most ~maxDist/min_block_size voxels
    const maxSteps = Math.ceil(maxDist * 3) + 2;
    for (let i = 0; i < maxSteps; i++) {
      if (this.blockData.has(key(bx, by, bz))) {
        return { x: bx, y: by, z: bz, face: World._rayFace.set(faceX, faceY, faceZ) };
      }

      if (tMaxX < tMaxY) {
        if (tMaxX < tMaxZ) {
          if (tMaxX > maxDist) return null;
          bx += stepX; faceX = -stepX; faceY = 0; faceZ = 0;
          tMaxX += tDeltaX;
        } else {
          if (tMaxZ > maxDist) return null;
          bz += stepZ; faceX = 0; faceY = 0; faceZ = -stepZ;
          tMaxZ += tDeltaZ;
        }
      } else {
        if (tMaxY < tMaxZ) {
          if (tMaxY > maxDist) return null;
          by += stepY; faceX = 0; faceY = -stepY; faceZ = 0;
          tMaxY += tDeltaY;
        } else {
          if (tMaxZ > maxDist) return null;
          bz += stepZ; faceX = 0; faceY = 0; faceZ = -stepZ;
          tMaxZ += tDeltaZ;
        }
      }
    }
    return null;
  }

  // ── Height queries ─────────────────────────────────────────────────────────

  /** Y of the top face of the highest non-liquid solid block at (x, z). */
  getSurfaceHeight(x: number, z: number): number {
    // Non-solid decoration types that should not count as "surface"
    const skip = new Set([0, 6, 7, 9, 21, 50, 51, 52, 56, 57, 58]);
    for (let y = 200; y >= 0; y--) {
      const type = this.blockData.get(key(x, y, z));
      if (type !== undefined && !skip.has(type)) return y;
    }
    return this.getHeight(x, z);
  }

  getSpawnHeight(x: number, z: number, radius = 2): number {
    let best = 0;
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dz = -radius; dz <= radius; dz++) {
        const h = this.getSurfaceHeight(x + dx, z + dz);
        if (h > best) best = h;
      }
    }
    return best;
  }

  /** For the server-side floor estimate — returns safe mob Y above sea level */
  getApproxSurfaceY(x: number, z: number): number {
    return this.getSurfaceHeight(Math.round(x), Math.round(z)) + 1;
  }

  // ── Chest storage ──────────────────────────────────────────────────────────

  getChestInventory(x: number, y: number, z: number): number[] {
    const k = `${x},${y},${z}`;
    if (!this.chestContents.has(k)) {
      this.chestContents.set(k, new Array(27).fill(0));
    }
    return this.chestContents.get(k)!;
  }

  setChestInventory(x: number, y: number, z: number, items: number[]) {
    const k = `${x},${y},${z}`;
    this.chestContents.set(k, items);
  }

  // ── Village generation ─────────────────────────────────────────────────────

  private placeVillages() {
    // Place 2-3 villages at fixed positions
    this.placeVillage(-60, -60);
    this.placeVillage(60, 20);
    this.placeVillage(-20, 80);
  }

  private placeVillage(cx: number, cz: number) {
    const cy = this.getSurfaceHeight(cx, cz);

    // Place well at center
    this.placeWell(cx, cy, cz);

    // Place 3-5 houses around center
    const housePositions: [number, number][] = [
      [-12, -10], [12, -10], [-12, 12], [12, 12], [0, -16],
    ];

    for (const [dx, dz] of housePositions) {
      const hx = cx + dx;
      const hz = cz + dz;
      const hy = this.getSurfaceHeight(hx, hz);
      this.placeHouse(hx, hy, hz, 8, 5, 6);
    }
  }

  private placeHouse(x: number, y: number, z: number, w: number, h: number, d: number) {
    // Floor (cobblestone)
    for (let dx = 0; dx < w; dx++) {
      for (let dz = 0; dz < d; dz++) {
        this.placeBlock(x + dx, y + 1, z + dz, 11, false);
      }
    }

    // Walls (planks)
    for (let dx = 0; dx < w; dx++) {
      for (let dz = 0; dz < d; dz++) {
        for (let dy = 0; dy < h; dy++) {
          // Only place walls on edges
          if (dx === 0 || dx === w - 1 || dz === 0 || dz === d - 1) {
            this.placeBlock(x + dx, y + 2 + dy, z + dz, 10, false);
          }
        }
      }
    }

    // Door cutout on front wall (center bottom, 2 blocks tall, 1 wide)
    const doorX = x + Math.floor(w / 2);
    this.removeBlock(doorX, y + 2, z);
    this.removeBlock(doorX, y + 3, z);

    // Windows on side walls
    const windowZ1 = z + 1;
    const windowZ2 = z + d - 2;
    this.removeBlock(x, y + 3, windowZ1);
    this.placeBlock(x, y + 3, windowZ1, 9, true);
    this.removeBlock(x + w - 1, y + 3, windowZ1);
    this.placeBlock(x + w - 1, y + 3, windowZ1, 9, true);

    // Roof (planks on top)
    for (let dx = 0; dx < w; dx++) {
      for (let dz = 0; dz < d; dz++) {
        this.placeBlock(x + dx, y + 2 + h, z + dz, 10, false);
      }
    }

    // Torch inside near door (glowstone for light)
    this.placeBlock(doorX + 1, y + 3, z + 1, 19, false);
  }

  private placeWell(x: number, y: number, z: number) {
    // Cobblestone ring 3x3 at y+1
    for (let dx = 0; dx < 3; dx++) {
      for (let dz = 0; dz < 3; dz++) {
        if (dx !== 1 || dz !== 1) {
          this.placeBlock(x + dx - 1, y + 1, z + dz - 1, 11, false);
        }
      }
    }

    // Water in center 1x1
    this.placeBlock(x, y + 1, z, 7, false);
  }

  // ── Dungeon generation ─────────────────────────────────────────────────────

  private generateDungeons() {
    this.generateDungeon(-40, -40);
    this.generateDungeon(50, 30);
  }

  private generateDungeon(cx: number, cz: number) {
    // Find surface height at (cx, cz)
    const surfaceY = this.getSurfaceHeight(cx, cz);
    const roomY = surfaceY - 8;

    // Room dimensions: 9 wide × 5 tall × 9 deep
    const roomWidth = 9;
    const roomHeight = 5;
    const roomDepth = 9;

    // Carve out interior and set walls/floor/ceiling
    for (let dx = -4; dx <= 4; dx++) {
      for (let dy = 0; dy < roomHeight; dy++) {
        for (let dz = -4; dz <= 4; dz++) {
          const x = cx + dx;
          const y = roomY + dy;
          const z = cz + dz;

          // Walls, floor, ceiling
          const isWall = Math.abs(dx) === 4 || Math.abs(dz) === 4;
          const isFloor = dy === 0;
          const isCeiling = dy === roomHeight - 1;

          if (isWall || isFloor || isCeiling) {
            // Mix stone bricks with mossy variants for dungeon atmosphere
            const dungeonBlock = Math.random() < 0.3 ? 82 : 81; // 30% mossy stone bricks
            this.placeBlock(x, y, z, dungeonBlock, true);
          } else {
            this.removeBlock(x, y, z); // carve out interior
          }
        }
      }
    }

    // Place spawner at center
    this.placeBlock(cx, roomY + 1, cz, 48, true);

    // Place chests at 4 corners
    const corners: [number, number][] = [
      [cx - 4, cz - 4],
      [cx + 4, cz - 4],
      [cx - 4, cz + 4],
      [cx + 4, cz + 4],
    ];
    for (const [x, z] of corners) {
      const chestY = roomY + 1;
      this.placeBlock(x, chestY, z, 31, true); // chest
      // Fill with random loot
      const loot = Array.from({ length: 27 }, () => Math.floor(Math.random() * 31));
      this.setChestInventory(x, chestY, z, loot);
    }

    // Carve staircase from room top (roomY+5) up to surface
    // Stair-step: +1 x, +1 y each step until reaching surface
    for (let i = 0; i < 10; i++) {
      const stairX = cx - i;
      const stairY = roomY + 5 + i;
      const stairZ = cz - 5;

      if (stairY >= surfaceY) break; // stop when we reach surface

      this.removeBlock(stairX, stairY, stairZ);
      if (i > 0) {
        this.removeBlock(stairX, stairY - 1, stairZ);
      }
    }
  }

  // ── Save/Load system ──────────────────────────────────────────────────────


  /** Call once per frame to flush all dirty instance matrices to GPU in one batch. */
  flushDirtyMeshes() {
    for (const type of this._dirtyMeshes) {
      const mesh = this.instancedMeshes.get(type);
      if (mesh) mesh.instanceMatrix.needsUpdate = true;
    }
    this._dirtyMeshes.clear();
  }

  saveToStorage(playerState?: {
    inventory: number[]; invCount: number[];
    px: number; py: number; pz: number;
    health: number; hunger: number;
    xp: number; xpLevel: number; dayCount: number;
  }): void {
    // Serialize all modifications to a compact format
    const mods: Record<string, number> = {};
    for (const [key, type] of this.modifications.entries()) {
      mods[key] = type;
    }
    // Serialize chest inventories (only non-empty)
    const chests: Record<string, number[]> = {};
    for (const [key, items] of this.chestContents.entries()) {
      if (items.some(v => v !== 0)) chests[key] = items;
    }
    const data = JSON.stringify({ version: 2, mods, chests, player: playerState ?? null });
    try {
      localStorage.setItem("mc_world_save", data);
    } catch (e) {
      console.warn("Save failed:", e);
    }
  }

  loadFromStorage(): { inventory: number[]; invCount: number[];
    px: number; py: number; pz: number;
    health: number; hunger: number;
    xp: number; xpLevel: number; dayCount: number;
  } | null {
    try {
      const raw = localStorage.getItem("mc_world_save");
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (data.version !== 1 && data.version !== 2) return null;
      for (const [key, type] of Object.entries(data.mods as Record<string, number>)) {
        const [x, y, z] = key.split(",").map(Number);
        if (type === 0) {
          this.removeBlock(x, y, z);
        } else {
          this.placeBlock(x, y, z, type, true);
        }
      }
      // Load chest inventories (version 2+)
      if (data.version >= 2 && data.chests) {
        for (const [key, items] of Object.entries(data.chests as Record<string, number[]>)) {
          this.chestContents.set(key, items);
        }
      }
      return data.version >= 2 ? data.player : null;
    } catch (e) {
      console.warn("Load failed:", e);
      return null;
    }
  }

  // ── Wave 9: Torch Lights ──────────────────────────────────────────────────

  addTorchLight(x: number, y: number, z: number) {
    const MAX_TORCH_LIGHTS = 50;
    const key = `${x},${y},${z}`;

    // Avoid duplicates
    if (this.torchLights.has(key)) return;

    // Create light
    const light = new THREE.PointLight(0xffaa44, 1.5, 8);
    light.position.set(x, y, z);
    light.castShadow = false;
    this.scene.add(light);

    this.torchLights.set(key, light);
    this.torchLightQueue.push(key);

    // Enforce max lights (LRU eviction)
    while (this.torchLightQueue.length > MAX_TORCH_LIGHTS) {
      const oldestKey = this.torchLightQueue.shift();
      if (oldestKey) {
        const oldLight = this.torchLights.get(oldestKey);
        if (oldLight) {
          this.scene.remove(oldLight);
          this.torchLights.delete(oldestKey);
        }
      }
    }
  }

  /** Update torch lights with flickering effect. Call each frame. */
  updateTorchFlicker(elapsed: number) {
    for (const [key, light] of this.torchLights) {
      // Use key hash for per-torch phase offset
      const hash = key.charCodeAt(0) * 31 + key.charCodeAt(2) * 17;
      const flicker = 1.3 + Math.sin(elapsed * 8 + hash) * 0.15
                          + Math.sin(elapsed * 13 + hash * 2) * 0.1
                          + (Math.random() - 0.5) * 0.05;
      light.intensity = flicker;
    }
  }

  removeTorchLight(x: number, y: number, z: number) {
    const key = `${x},${y},${z}`;
    const light = this.torchLights.get(key);
    if (light) {
      this.scene.remove(light);
      this.torchLights.delete(key);
      const idx = this.torchLightQueue.indexOf(key);
      if (idx >= 0) this.torchLightQueue.splice(idx, 1);
    }
  }

  // ── Wave 9: Redstone System ───────────────────────────────────────────────

  checkPressurePlate(playerPos: THREE.Vector3): void {
    // Check if player is on a pressure plate (within 0.7 blocks)
    const px = Math.floor(playerPos.x);
    const py = Math.floor(playerPos.y - 0.1);
    const pz = Math.floor(playerPos.z);

    if (this.blockData.get(key(px, py, pz)) === 57) {
      // Pressure plate activated
      this.activateLamp(px, py, pz);
      // Also open nearby doors (future feature)
    }
  }

  toggleLever(x: number, y: number, z: number): void {
    const leverKey = `${x},${y},${z}`; // renamed to avoid shadowing module-level key() function
    const currentState = this.redstoneState.get(leverKey) ?? false;
    const newState = !currentState;
    this.redstoneState.set(leverKey, newState);

    if (newState) {
      // Activate nearby lamps — use blockData.get directly (no {type} object)
      for (let dx = -4; dx <= 4; dx++) {
        for (let dy = -4; dy <= 4; dy++) {
          for (let dz = -4; dz <= 4; dz++) {
            if (this.blockData.get(key(x + dx, y + dy, z + dz)) === 59) {
              this.activateLamp(x + dx, y + dy, z + dz);
            }
          }
        }
      }
    } else {
      // Deactivate nearby lamps
      for (let dx = -4; dx <= 4; dx++) {
        for (let dy = -4; dy <= 4; dy++) {
          for (let dz = -4; dz <= 4; dz++) {
            if (this.blockData.get(key(x + dx, y + dy, z + dz)) === 59) {
              this.deactivateLamp(x + dx, y + dy, z + dz);
            }
          }
        }
      }
    }
  }

  activateLamp(x: number, y: number, z: number): void {
    const skey = `${x},${y},${z}`;
    const type = this.blockData.get(key(x, y, z));
    if (type !== 59) return; // must be redstone lamp

    const lampState = this.redstoneState.get(skey) ?? false;
    if (lampState) return; // Already on

    this.redstoneState.set(skey, true);

    // With InstancedMesh, color changes would require instance color buffer
    // For now, we just control the light. Color change via material is a limitation
    // of InstancedMesh but lights are the primary visual feedback anyway.

    // Create light if not already there
    if (!this.redstoneLoights.has(skey)) {
      const light = new THREE.PointLight(0xff6600, 1.2, 6);
      light.position.set(x, y, z);
      this.scene.add(light);
      this.redstoneLoights.set(skey, light);
    }
  }

  deactivateLamp(x: number, y: number, z: number): void {
    const skey = `${x},${y},${z}`;
    const type = this.blockData.get(key(x, y, z));
    if (type !== 59) return; // must be redstone lamp

    const lampState = this.redstoneState.get(skey) ?? false;
    if (!lampState) return; // Already off

    this.redstoneState.set(skey, false);

    // Remove light
    const light = this.redstoneLoights.get(skey);
    if (light) {
      this.scene.remove(light);
      this.redstoneLoights.delete(skey);
    }
  }

  // ── Wave 9: Enhanced World Generation ──────────────────────────────────

  // Scan for torch blocks and create lights (called after loading)
  initializeTorchLights() {
    // Torch positions are tracked in torchPositions map (added during placeBlock)
    for (const [strK] of this.modifications.entries()) {
      if (this.modifications.get(strK) === 56) {
        const [xs, ys, zs] = strK.split(",");
        const x = Number(xs), y = Number(ys), z = Number(zs);
        if (!isNaN(x) && !isNaN(y) && !isNaN(z)) {
          this.addTorchLight(x, y + 0.5, z);
        }
      }
    }
  }
}
