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

  private noise2D  = createNoise2D();
  private noise2D2 = createNoise2D();
  private blockGeo = new THREE.BoxGeometry(1, 1, 1);

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.generateTerrain();
  }

  // ── Terrain height ─────────────────────────────────────────────────────────

  private getHeight(wx: number, wz: number): number {
    const n1 = this.noise2D(wx * 0.035, wz * 0.035);
    const n2 = this.noise2D(wx * 0.09,  wz * 0.09)  * 0.35;
    const n3 = this.noise2D(wx * 0.018, wz * 0.018) * 0.65;
    const n  = (n1 + n2 + n3) / 2;
    return Math.floor(SEA_LEVEL + n * 11);
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

        for (let y = 0; y <= h; y++) {
          // Cave carving
          if (y > 0 && y < h - 1 && this.getCaveNoise(wx, y, wz) > 0.55) continue;

          let type: number;
          if      (y === h)         type = 1;  // grass
          else if (y >= h - 3)      type = 2;  // dirt
          else if (y <= 3)          type = 18; // obsidian near bedrock
          else                      type = 3;  // stone

          // Biome-like variation
          if (y === h && h <= SEA_LEVEL + 1) type = 4; // sand beach
          if (y === h && h >= SEA_LEVEL + 9) type = 20; // snow peaks

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

        // Water fill
        if (h < SEA_LEVEL) {
          for (let y = h + 1; y <= SEA_LEVEL; y++) {
            this.placeBlock(wx, y, wz, 7, false);
          }
        }

        // Trees (only on regular grass, not snow)
        if (h > SEA_LEVEL && h < SEA_LEVEL + 9 && Math.random() < 0.018) {
          this.placeTree(wx, h + 1, wz);
        }

        // Tall grass / flowers (decorative, non-solid ignored in physics)
        // (skipped for now — would need billboard geometry)
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
  }

  removeBlock(x: number, y: number, z: number): boolean {
    const k = key(x, y, z);
    const entry = this.blocks.get(k);
    if (!entry) return false;
    this.scene.remove(entry.mesh);
    this.disposeMesh(entry.mesh);
    this.blocks.delete(k);
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

  getMeshes(): THREE.Mesh[] {
    return Array.from(this.blocks.values()).map(b => b.mesh);
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
}
