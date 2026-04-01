import * as THREE from "three";
import { createNoise2D } from "simplex-noise";
import { BLOCK_TYPES } from "./blocks";
import { getBlockMaterial, getBlockMaterials } from "./BlockTextures";

const CHUNK_SIZE   = 16;
const WORLD_HEIGHT = 40;
const SEA_LEVEL    = 8;

// Integer key packing using safe JS integers (no bitwise overflow)
// Supports x,z in [-2048, 2047], y in [0, 127]
// Uses multiplication not bitwise OR to avoid 32-bit overflow issues
const KEY_X_OFFSET = 8192;  // supports x in [-8192, 8191]
const KEY_Z_OFFSET = 8192;  // supports z in [-8192, 8191]
const KEY_Y_MULT   = 16384; // x+8192 fits in [0, 16383] (14 bits)
const KEY_Z_MULT   = 16384 * 128; // y in [0, 127] (7 bits)
function key(x: number, y: number, z: number): number {
  return (x + KEY_X_OFFSET) + y * KEY_Y_MULT + (z + KEY_Z_OFFSET) * KEY_Z_MULT;
}
// String key for maps that need string keys (instanceRevIndex)
function strKey(x: number, y: number, z: number): string { return `${x},${y},${z}`; }

export class World {
  scene:  THREE.Scene;

  // NEW: Data structures for InstancedMesh
  private blockData: Map<number, number> = new Map(); // intKey -> blockType
  private instancedMeshes: Map<number, THREE.InstancedMesh> = new Map(); // blockType -> InstancedMesh
  private instanceIndex: Map<number, number> = new Map(); // intKey -> instance index in its type's mesh
  private instanceRevIndex: Map<string, number> = new Map(); // "type:idx" -> intKey
  private instanceCount: Map<number, number> = new Map(); // blockType -> current count
  private static readonly MAX_INSTANCES = 32000; // enough for R=5 chunks

  private chestInventory: Map<string, number[]> = new Map();
  private visibilityTimer = 0;
  private generatedChunks = new Set<string>();
  private modifications: Map<string, number> = new Map(); // Track player-modified blocks

  private noise2D  = createNoise2D();
  private noise2D2 = createNoise2D();
  private biomeNoise = createNoise2D(); // For biome generation

  // Wave 9: Torch lights system
  torchLights: Map<string, THREE.PointLight> = new Map();
  private torchLightQueue: string[] = []; // Queue for LRU eviction

  // Wave 9: Redstone system
  redstoneState: Map<string, boolean> = new Map();
  redstoneLoights: Map<string, THREE.PointLight> = new Map(); // Lights for redstone lamps

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.generateTerrain();
    this.placeVillages();
    this.generateDungeons();
  }

  // Store village centers for mob spawning
  getVillageCenters(): Array<[number, number, number]> {
    return [
      [-60, 0, -60],
      [60, 0, 20],
      [-20, 0, 80],
    ];
  }

  // ── Biome system ──────────────────────────────────────────────────────────

  private getBiome(x: number, z: number): number {
    const b = this.biomeNoise(x * 0.005, z * 0.005); // very low frequency noise for biomes
    if (b < -0.4) return 4; // ocean
    if (b < -0.1) return 0; // plains
    if (b < 0.2)  return 2; // forest
    if (b < 0.5)  return 1; // desert
    return 3; // mountains
  }

  // ── Terrain height ─────────────────────────────────────────────────────────

  private getHeight(wx: number, wz: number): number {
    const biome = this.getBiome(wx, wz);
    const n1 = this.noise2D(wx * 0.035, wz * 0.035);
    const n2 = this.noise2D(wx * 0.09,  wz * 0.09)  * 0.35;
    const n3 = this.noise2D(wx * 0.018, wz * 0.018) * 0.65;
    const n  = (n1 + n2 + n3) / 2;

    // Adjust height range based on biome
    let height = 0;
    if (biome === 0) height = Math.floor(SEA_LEVEL + n * 5); // plains: 10-14
    else if (biome === 1) height = Math.floor(SEA_LEVEL - 2 + n * 4); // desert: 8-12
    else if (biome === 2) height = Math.floor(SEA_LEVEL + n * 8); // forest: 12-18
    else if (biome === 3) height = Math.floor(SEA_LEVEL + 4 + n * 15); // mountains: 20-35
    else if (biome === 4) height = Math.floor(SEA_LEVEL - 3 + n * 3); // ocean: 5-8

    return height;
  }

  private getCaveNoise(x: number, y: number, z: number): number {
    // 3D cave noise
    const n1 = this.noise2D2(x * 0.08 + y * 0.04, z * 0.08);
    const n2 = this.noise2D(x * 0.12, z * 0.12 + y * 0.06);
    return (n1 + n2) / 2;
  }

  private getRiverNoise(x: number, z: number): number {
    // Low frequency noise for rivers
    return this.noise2D(x * 0.02, z * 0.02);
  }

  private isRiver(x: number, z: number): boolean {
    // Rivers are thin channels where noise is near 0
    const n = this.getRiverNoise(x, z);
    return n > -0.03 && n < 0.03;
  }

  // Reusable Matrix4 for block placement — avoids per-block heap allocation
  private static _mat4 = new THREE.Matrix4();
  // Reused face vector for raycastBlock — avoids allocation on every raycast hit
  private static _rayFace = new THREE.Vector3();

  // Shared geometry for all block types (deduplication)
  private static sharedBoxGeo: THREE.BoxGeometry | null = null;
  private static getSharedBoxGeo(): THREE.BoxGeometry {
    if (!World.sharedBoxGeo) {
      World.sharedBoxGeo = new THREE.BoxGeometry(1, 1, 1);
    }
    return World.sharedBoxGeo;
  }

  // ── InstancedMesh factory ──────────────────────────────────────────────────────

  private getOrCreateInstancedMesh(blockType: number): THREE.InstancedMesh {
    if (this.instancedMeshes.has(blockType)) {
      return this.instancedMeshes.get(blockType)!;
    }

    const info = BLOCK_TYPES[blockType];
    if (!info) return this.getOrCreateInstancedMesh(1); // fallback to grass

    const geo = World.getSharedBoxGeo();

    // Use per-face materials for blocks with top/side/bottom differentiation (grass, log, etc.)
    const mats = getBlockMaterials(blockType, info);
    const mat = mats.length === 1 ? mats[0] : mats;
    const mesh = new THREE.InstancedMesh(geo, mat as any, World.MAX_INSTANCES);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.count = 0; // start with 0 visible instances
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    mesh.frustumCulled = false;
    // Transparent blocks render after opaque to avoid depth sorting issues
    if (info.transparent) {
      mesh.renderOrder = blockType === 7 ? 2 : 1; // water last, glass/leaves before water
    }
    this.scene.add(mesh);

    this.instancedMeshes.set(blockType, mesh);
    this.instanceCount.set(blockType, 0);
    return mesh;
  }

  // ── World generation ───────────────────────────────────────────────────────

  // Transparent/non-solid block types that don't occlude neighbors
  private static readonly TRANSPARENT_TYPES = new Set([7, 9, 21, 50, 51, 52, 56, 57, 58]);

  private static isOpaque(type: number): boolean {
    return type > 0 && !World.TRANSPARENT_TYPES.has(type);
  }

  private generateTerrain() {
    const R = 3; // render distance in chunks (reduced from 4 for performance)

    // Pass 1: build a raw voxel map without adding to scene (integer keys)
    const rawBlocks = new Map<number, number>();
    // Also store coords for pass 2 iteration (avoid decoding integer keys)
    const rawCoords: Array<[number, number, number]> = [];

    for (let cx = -R; cx <= R; cx++) {
      for (let cz = -R; cz <= R; cz++) {
        this.generateChunkRaw(cx, cz, rawBlocks, rawCoords);
      }
    }

    // Pass 2: only place blocks that have at least one exposed face
    for (const [x, y, z] of rawCoords) {
      const k = key(x, y, z);
      const type = rawBlocks.get(k);
      if (type === undefined) continue;

      // Non-opaque blocks (water, glass, flowers, etc.) always show
      if (!World.isOpaque(type)) {
        this.placeBlock(x, y, z, type, false);
        continue;
      }

      // Check 6 neighbors with integer key arithmetic — zero string allocation
      const exposed =
        !World.isOpaque(rawBlocks.get(key(x+1, y, z)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x-1, y, z)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x, y+1, z)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x, y-1, z)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x, y, z+1)) ?? 0) ||
        !World.isOpaque(rawBlocks.get(key(x, y, z-1)) ?? 0);

      if (exposed) {
        this.placeBlock(x, y, z, type, false);
      } else {
        // Still track hidden block in blockData (for collision, mining) but no mesh instance
        this.blockData.set(k, type);
      }
    }

    // Pass 3: decorations (trees, flowers, etc.) — placed on top, always exposed
    for (let cx = -R; cx <= R; cx++) {
      for (let cz = -R; cz <= R; cz++) {
        this.generateChunkDecorations(cx, cz, rawBlocks);
        this.generatedChunks.add(`${cx},${cz}`);
      }
    }
  }

  /** Generate new chunks around player position (call periodically) */
  generateAroundPlayer(px: number, pz: number) {
    const R = 4;
    const cx0 = Math.floor(px / 16);
    const cz0 = Math.floor(pz / 16);
    const rawBlocks = new Map<number, number>();
    const rawCoords: Array<[number, number, number]> = [];
    let generated = 0;

    for (let cx = cx0 - R; cx <= cx0 + R; cx++) {
      for (let cz = cz0 - R; cz <= cz0 + R; cz++) {
        const chunkKey = `${cx},${cz}`;
        if (this.generatedChunks.has(chunkKey)) continue;
        this.generatedChunks.add(chunkKey);
        this.generateChunkRaw(cx, cz, rawBlocks, rawCoords);
        generated++;
      }
    }

    if (generated === 0) return;

    // Place raw blocks with visibility culling
    for (const [x, y, z] of rawCoords) {
      const k = key(x, y, z);
      const type = rawBlocks.get(k);
      if (type === undefined) continue;

      if (!World.isOpaque(type)) {
        this.placeBlock(x, y, z, type, false);
        continue;
      }

      const exposed =
        !World.isOpaque(rawBlocks.get(key(x+1, y, z)) ?? (this.blockData.get(key(x+1,y,z)) ?? 0)) ||
        !World.isOpaque(rawBlocks.get(key(x-1, y, z)) ?? (this.blockData.get(key(x-1,y,z)) ?? 0)) ||
        !World.isOpaque(rawBlocks.get(key(x, y+1, z)) ?? (this.blockData.get(key(x,y+1,z)) ?? 0)) ||
        !World.isOpaque(rawBlocks.get(key(x, y-1, z)) ?? (this.blockData.get(key(x,y-1,z)) ?? 0)) ||
        !World.isOpaque(rawBlocks.get(key(x, y, z+1)) ?? (this.blockData.get(key(x,y,z+1)) ?? 0)) ||
        !World.isOpaque(rawBlocks.get(key(x, y, z-1)) ?? (this.blockData.get(key(x,y,z-1)) ?? 0));

      if (exposed) {
        this.placeBlock(x, y, z, type, false);
      } else {
        this.blockData.set(k, type);
      }
    }

    // Decorations for new chunks
    for (let cx = cx0 - R; cx <= cx0 + R; cx++) {
      for (let cz = cz0 - R; cz <= cz0 + R; cz++) {
        const decKey = `${cx},${cz}_dec`;
        if (this.generatedChunks.has(decKey)) continue;
        this.generatedChunks.add(decKey);
        this.generateChunkDecorations(cx, cz, rawBlocks);
      }
    }
  }

  private generateChunkRaw(cx: number, cz: number, rawBlocks: Map<number, number>, rawCoords: Array<[number, number, number]>) {
    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const h  = this.getHeight(wx, wz);
        const biome = this.getBiome(wx, wz);
        const isRiver = this.isRiver(wx, wz);

        const setBlock = (y: number, type: number) => {
          rawBlocks.set(key(wx, y, wz), type);
          rawCoords.push([wx, y, wz]);
        };

        for (let y = 0; y <= h; y++) {
          // Cave carving
          if (y > 0 && y < h - 1 && this.getCaveNoise(wx, y, wz) > 0.55) continue;

          let type: number;

          if (isRiver && y === 10 && h < SEA_LEVEL + 2) {
            type = 7;
          } else if (biome === 1) { // Desert
            if (y === h) type = 4;
            else if (y >= h - 2) type = 4;
            else if (y <= 3) type = 18;
            else type = 49;
          } else if (biome === 3) { // Mountains
            if (y === h) type = (h > 28) ? 20 : 1;
            else if (y >= h - 2) type = 2;
            else if (y <= 3) type = 18;
            else type = 3;
          } else if (biome === 4) { // Ocean
            if (y <= 3) type = 18;
            else type = 3;
          } else { // Plains, Forest
            if (y === h) type = 1;
            else if (y >= h - 3) type = 2;
            else if (y <= 3) type = 18;
            else type = 3;
          }

          // Ore distribution
          if (type === 3) {
            const r = Math.random();
            if (r < 0.001 && y < 8)       type = 61;
            else if (r < 0.006 && y < 12)  type = 13;
            else if (r < 0.02 && y < 20)   type = 14;
            else if (r < 0.03)             type = 15;
            else if (r < 0.008 && y <= 5 && Math.random() < 0.3) type = 19;
          }

          if (type === 3 && y >= 3 && Math.random() < 0.008) type = 12;

          setBlock(y, type);
        }

        // Water fill
        if (h < SEA_LEVEL) {
          for (let y = h + 1; y <= SEA_LEVEL; y++) {
            setBlock(y, 7);
          }
        }

        // Lava pools
        if (h > 5 && Math.random() < 0.003) {
          for (let dy = Math.max(0, h - 8); dy <= h - 5; dy++) {
            if (Math.random() < 0.6) {
              setBlock(dy, 47);
            }
          }
        }
      }
    }
  }

  private generateChunkDecorations(cx: number, cz: number, _rawBlocks: Map<number, number>) {
    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const h  = this.getHeight(wx, wz);
        const biome = this.getBiome(wx, wz);

        if (biome === 0) { // Plains
          if (h > SEA_LEVEL && h < SEA_LEVEL + 9 && Math.random() < 0.04) {
            this.placeBlock(wx, h + 1, wz, 51, false);
          }
          if (h > SEA_LEVEL && h < SEA_LEVEL + 9 && Math.random() < 0.015) {
            this.placeTree(wx, h + 1, wz);
          }
        } else if (biome === 1) { // Desert
          if (h > SEA_LEVEL && Math.random() < 0.06) {
            if (Math.random() < 0.5) {
              this.placeBlock(wx, h + 1, wz, 50, false);
            } else {
              this.placeBlock(wx, h + 1, wz, 52, false);
            }
          }
        } else if (biome === 2) { // Forest
          if (h > SEA_LEVEL && h < SEA_LEVEL + 9 && Math.random() < 0.08) {
            this.placeTree(wx, h + 1, wz);
          }
          if (h > SEA_LEVEL && h < SEA_LEVEL + 9 && Math.random() < 0.05) {
            this.placeBlock(wx, h + 1, wz, 51, false);
          }
        } else if (biome === 3) { // Mountains
          if (h > SEA_LEVEL + 5 && Math.random() < 0.03) {
            this.placeRocks(wx, h + 1, wz);
          }
        }
      }
    }
  }

  private generateChunk(_cx: number, _cz: number) {
    // Legacy stub — replaced by generateChunkRaw + generateChunkDecorations
  }

  private placeTree(x: number, y: number, z: number) {
    const trunkH = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < trunkH; i++) this.placeBlock(x, y + i, z, 5, false);

    const top = y + trunkH;
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
          this.placeBlock(x + dx, top + dy, z + dz, 6, false);
        }
      }
    }
    this.placeBlock(x, top + 2, z, 6, false);
  }

  private placeRocks(x: number, y: number, z: number) {
    const count = 2 + Math.floor(Math.random() * 4);
    for (let i = 0; i < count; i++) {
      const dx = Math.floor((Math.random() - 0.5) * 4);
      const dz = Math.floor((Math.random() - 0.5) * 4);
      const dy = i === 0 ? 0 : Math.floor(Math.random() * 2);
      this.placeBlock(x + dx, y + dy, z + dz, 3, false);
    }
  }

  // ── Block CRUD ─────────────────────────────────────────────────────────────

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
    mesh.instanceMatrix.needsUpdate = true;

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
    mesh.instanceMatrix.needsUpdate = true;
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
    for (let y = WORLD_HEIGHT + 5; y >= 0; y--) {
      const type = this.blockData.get(key(x, y, z));
      if (type !== undefined && type !== 7 && type !== 9 && type !== 21) return y;
    }
    return SEA_LEVEL;
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
    if (!this.chestInventory.has(k)) {
      this.chestInventory.set(k, new Array(27).fill(0));
    }
    return this.chestInventory.get(k)!;
  }

  setChestInventory(x: number, y: number, z: number, items: number[]) {
    const k = `${x},${y},${z}`;
    this.chestInventory.set(k, items);
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
            this.placeBlock(x, y, z, 17, true); // mossy stone
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

  saveToStorage(): void {
    // Serialize all modifications to a compact format
    const mods: Record<string, number> = {};
    for (const [key, type] of this.modifications.entries()) {
      mods[key] = type;
    }
    const data = JSON.stringify({ version: 1, mods });
    try {
      localStorage.setItem("mc_world_save", data);
    } catch (e) {
      console.warn("Save failed:", e);
    }
  }

  loadFromStorage(): void {
    try {
      const raw = localStorage.getItem("mc_world_save");
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.version !== 1) return;
      for (const [key, type] of Object.entries(data.mods as Record<string, number>)) {
        const [x, y, z] = key.split(",").map(Number);
        if (type === 0) {
          this.removeBlock(x, y, z);
        } else {
          this.placeBlock(x, y, z, type, true);
        }
      }
    } catch (e) {
      console.warn("Load failed:", e);
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
