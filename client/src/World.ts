import * as THREE from "three";
import { createNoise2D } from "simplex-noise";
import { BLOCK_TYPES } from "./blocks";

const CHUNK_SIZE   = 16;
const WORLD_HEIGHT = 40;
const SEA_LEVEL    = 8;

type BlockMap = Map<string, { mesh: THREE.Mesh; type: number }>;

function key(x: number, y: number, z: number) { return `${x},${y},${z}`; }

export class World {
  scene:  THREE.Scene;
  blocks: BlockMap = new Map();
  private chestInventory: Map<string, number[]> = new Map();
  private visibilityTimer = 0;
  private modifications: Map<string, number> = new Map(); // Track player-modified blocks

  private noise2D  = createNoise2D();
  private noise2D2 = createNoise2D();
  private biomeNoise = createNoise2D(); // For biome generation
  private blockGeo = new THREE.BoxGeometry(1, 1, 1);

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

  // ── Mesh factory ───────────────────────────────────────────────────────────

  private makeFacedMesh(type: number): THREE.Mesh {
    const info = BLOCK_TYPES[type];
    if (!info) return new THREE.Mesh(this.blockGeo, new THREE.MeshLambertMaterial({ color: 0xffffff }));

    const makeMat = (color: number) => {
      const mat = new THREE.MeshLambertMaterial({ color });
      if (info.transparent) { mat.transparent = true; mat.opacity = type === 7 ? 0.68 : 0.55; }
      if (info.emissive)    { mat.emissive = new THREE.Color(info.emissive); mat.emissiveIntensity = 0.6; }
      return mat;
    };

    if (info.topColor || info.bottomColor) {
      const mats = [
        makeMat(info.color),
        makeMat(info.color),
        makeMat(info.topColor    ?? info.color),
        makeMat(info.bottomColor ?? info.color),
        makeMat(info.color),
        makeMat(info.color),
      ];
      return new THREE.Mesh(this.blockGeo, mats);
    }

    return new THREE.Mesh(this.blockGeo, makeMat(info.color));
  }

  // ── World generation ───────────────────────────────────────────────────────

  private generateTerrain() {
    const R = 4; // render distance in chunks
    for (let cx = -R; cx <= R; cx++) {
      for (let cz = -R; cz <= R; cz++) {
        this.generateChunk(cx, cz);
      }
    }
  }

  private generateChunk(cx: number, cz: number) {
    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const h  = this.getHeight(wx, wz);
        const biome = this.getBiome(wx, wz);

        for (let y = 0; y <= h; y++) {
          // Cave carving
          if (y > 0 && y < h - 1 && this.getCaveNoise(wx, y, wz) > 0.55) continue;

          let type: number;

          // Biome-specific terrain
          if (biome === 1) { // Desert
            if (y === h) type = 4; // sand
            else if (y >= h - 2) type = 4; // sand
            else if (y <= 3) type = 18; // obsidian near bedrock
            else type = 49; // sandstone
          } else if (biome === 3) { // Mountains
            if (y === h) type = (h > 28) ? 20 : 1; // snow above y=28, else grass
            else if (y >= h - 2) type = 2; // dirt
            else if (y <= 3) type = 18; // obsidian near bedrock
            else type = 3; // stone
          } else if (biome === 4) { // Ocean
            if (y <= 3) type = 18; // obsidian near bedrock
            else type = 3; // stone
          } else { // Plains, Forest
            if (y === h) type = 1; // grass
            else if (y >= h - 3) type = 2; // dirt
            else if (y <= 3) type = 18; // obsidian near bedrock
            else type = 3; // stone
          }

          // Ore pockets in stone
          if (type === 3) {
            const r = Math.random();
            if (r < 0.005 && y < 20)  type = 13; // gold ore
            else if (r < 0.015)        type = 14; // iron ore
            else if (r < 0.025)        type = 15; // coal ore
          }

          // Occasional gravel patches in stone
          if (type === 3 && y >= 3 && Math.random() < 0.008) type = 12;

          this.placeBlock(wx, y, wz, type, false);
        }

        // Water fill (all biomes)
        if (h < SEA_LEVEL) {
          for (let y = h + 1; y <= SEA_LEVEL; y++) {
            this.placeBlock(wx, y, wz, 7, false);
          }
        }

        // Lava pools in deep underground
        if (h > 5 && Math.random() < 0.003) {
          for (let dy = Math.max(0, h - 8); dy <= h - 5; dy++) {
            if (Math.random() < 0.6) {
              this.placeBlock(wx, dy, wz, 47, false);
            }
          }
        }

        // Decoration based on biome
        if (biome === 0) { // Plains
          // Occasional flowers
          if (h > SEA_LEVEL && h < SEA_LEVEL + 9 && Math.random() < 0.04) {
            this.placeBlock(wx, h + 1, wz, 51, false);
          }
          // Occasional trees
          if (h > SEA_LEVEL && h < SEA_LEVEL + 9 && Math.random() < 0.015) {
            this.placeTree(wx, h + 1, wz);
          }
        } else if (biome === 1) { // Desert
          // Cacti and dead bushes, no water
          if (h > SEA_LEVEL && Math.random() < 0.06) {
            if (Math.random() < 0.5) {
              this.placeBlock(wx, h + 1, wz, 50, false);
            } else {
              this.placeBlock(wx, h + 1, wz, 52, false);
            }
          }
        } else if (biome === 2) { // Forest
          // Higher tree density (25% vs 5%)
          if (h > SEA_LEVEL && h < SEA_LEVEL + 9 && Math.random() < 0.08) {
            this.placeTree(wx, h + 1, wz);
          }
          // Occasional flowers
          if (h > SEA_LEVEL && h < SEA_LEVEL + 9 && Math.random() < 0.05) {
            this.placeBlock(wx, h + 1, wz, 51, false);
          }
        } else if (biome === 3) { // Mountains
          // Rock formations
          if (h > SEA_LEVEL + 5 && Math.random() < 0.03) {
            this.placeRocks(wx, h + 1, wz);
          }
        }
      }
    }
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
    if (!overwrite && this.blocks.has(k)) return;

    const existing = this.blocks.get(k);
    if (existing) {
      this.scene.remove(existing.mesh);
      this.disposeMesh(existing.mesh);
    }

    const mesh = this.makeFacedMesh(type);
    mesh.position.set(x, y, z);
    mesh.castShadow    = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    this.blocks.set(k, { mesh, type });

    // Track player modification (not terrain generation)
    if (overwrite) {
      this.modifications.set(k, type);
    }
  }

  removeBlock(x: number, y: number, z: number): boolean {
    const k = key(x, y, z);
    const entry = this.blocks.get(k);
    if (!entry) return false;
    this.scene.remove(entry.mesh);
    this.disposeMesh(entry.mesh);
    this.blocks.delete(k);

    // Track removal as modification with type 0
    this.modifications.set(k, 0);

    return true;
  }

  private disposeMesh(mesh: THREE.Mesh) {
    if (Array.isArray(mesh.material)) mesh.material.forEach(m => m.dispose());
    else mesh.material.dispose();
  }

  hasBlock(x: number, y: number, z: number): boolean {
    return this.blocks.has(key(x, y, z));
  }

  getBlock(x: number, y: number, z: number) {
    return this.blocks.get(key(x, y, z));
  }

  isNearBlock(x: number, y: number, z: number, blockType: number, radius: number): boolean {
    for (let dx = -radius; dx <= radius; dx++) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dz = -radius; dz <= radius; dz++) {
          const b = this.getBlock(x + dx, y + dy, z + dz);
          if (b && b.type === blockType) {
            return true;
          }
        }
      }
    }
    return false;
  }

  getMeshes(): THREE.Mesh[] {
    return Array.from(this.blocks.values()).map(b => b.mesh);
  }

  updateVisibility(playerPos: THREE.Vector3): void {
    for (const entry of this.blocks.values()) {
      const mesh = entry.mesh;
      const dx = mesh.position.x - playerPos.x;
      const dz = mesh.position.z - playerPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      mesh.visible = dist < 80;
      mesh.castShadow = dist < 40;
      mesh.receiveShadow = dist < 40;
    }
  }

  // ── Height queries ─────────────────────────────────────────────────────────

  /** Y of the top face of the highest non-liquid solid block at (x, z). */
  getSurfaceHeight(x: number, z: number): number {
    for (let y = WORLD_HEIGHT + 5; y >= 0; y--) {
      const entry = this.blocks.get(key(x, y, z));
      if (entry && entry.type !== 7 && entry.type !== 9 && entry.type !== 21) return y;
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
}
