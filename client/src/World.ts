import * as THREE from "three";
import { createNoise2D } from "simplex-noise";
import { getBlockColor, BLOCK_TYPES } from "./blocks";

const BLOCK_SIZE  = 1;
const CHUNK_SIZE  = 16;
const WORLD_HEIGHT = 32;
const SEA_LEVEL    = 8;

type BlockMap = Map<string, { mesh: THREE.Mesh; type: number }>;

function key(x: number, y: number, z: number) {
  return `${x},${y},${z}`;
}

export class World {
  scene: THREE.Scene;
  blocks: BlockMap = new Map();
  private noise2D = createNoise2D();
  private blockGeo = new THREE.BoxGeometry(BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.generateTerrain();
  }

  private getHeight(wx: number, wz: number): number {
    const n1 = this.noise2D(wx * 0.04, wz * 0.04);
    const n2 = this.noise2D(wx * 0.1,  wz * 0.1) * 0.4;
    const n3 = this.noise2D(wx * 0.02, wz * 0.02) * 0.6;
    const n  = (n1 + n2 + n3) / 2;
    return Math.floor(SEA_LEVEL + n * 10);
  }

  private makeMaterial(type: number, face?: "top" | "bottom" | "side") {
    const info = BLOCK_TYPES[type];
    let color = info?.color ?? 0xffffff;
    if (face === "top"    && info?.topColor)    color = info.topColor;
    if (face === "bottom" && info?.bottomColor) color = info.bottomColor;

    const mat = new THREE.MeshLambertMaterial({ color });
    if (type === 9) { mat.transparent = true; mat.opacity = 0.6; }
    if (type === 7) { mat.transparent = true; mat.opacity = 0.7; }
    return mat;
  }

  private makeFacedMesh(type: number): THREE.Mesh {
    const info = BLOCK_TYPES[type];
    // If block has top/bottom color variants, use per-face materials
    if (info?.topColor || info?.bottomColor) {
      const mats = [
        new THREE.MeshLambertMaterial({ color: info.color }),   // +x
        new THREE.MeshLambertMaterial({ color: info.color }),   // -x
        new THREE.MeshLambertMaterial({ color: info.topColor ?? info.color }), // +y (top)
        new THREE.MeshLambertMaterial({ color: info.bottomColor ?? info.color }), // -y (bottom)
        new THREE.MeshLambertMaterial({ color: info.color }),   // +z
        new THREE.MeshLambertMaterial({ color: info.color }),   // -z
      ];
      return new THREE.Mesh(this.blockGeo, mats);
    }
    const color = info?.color ?? 0xffffff;
    const mat = new THREE.MeshLambertMaterial({ color });
    if (type === 9) { mat.transparent = true; mat.opacity = 0.6; }
    if (type === 7) { mat.transparent = true; mat.opacity = 0.7; }
    return new THREE.Mesh(this.blockGeo, mat);
  }

  private generateTerrain() {
    const R = 3; // render distance in chunks
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
          let type: number;
          if (y === h)         type = 1;  // grass
          else if (y >= h - 3) type = 2;  // dirt
          else                 type = 3;  // stone

          // sand near sea level
          if (y >= h - 1 && h <= SEA_LEVEL + 1) type = 4;

          this.placeBlock(wx, y, wz, type, false);
        }

        // Water fill
        if (h < SEA_LEVEL) {
          for (let y = h + 1; y <= SEA_LEVEL; y++) {
            this.placeBlock(wx, y, wz, 7, false);
          }
        }

        // Occasional trees
        if (h > SEA_LEVEL && Math.random() < 0.015) {
          this.placeTree(wx, h + 1, wz);
        }
      }
    }
  }

  private placeTree(x: number, y: number, z: number) {
    const trunkH = 4 + Math.floor(Math.random() * 2);
    for (let i = 0; i < trunkH; i++) {
      this.placeBlock(x, y + i, z, 5, false);
    }
    // Leaf canopy
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

  placeBlock(x: number, y: number, z: number, type: number, overwrite = true) {
    const k = key(x, y, z);
    if (!overwrite && this.blocks.has(k)) return;

    // Remove existing
    const existing = this.blocks.get(k);
    if (existing) {
      this.scene.remove(existing.mesh);
      existing.mesh.geometry.dispose();
    }

    const mesh = this.makeFacedMesh(type);
    mesh.position.set(x, y, z);
    mesh.castShadow    = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    this.blocks.set(k, { mesh, type });
  }

  removeBlock(x: number, y: number, z: number) {
    const k = key(x, y, z);
    const entry = this.blocks.get(k);
    if (!entry) return false;
    this.scene.remove(entry.mesh);
    if (Array.isArray(entry.mesh.material)) {
      entry.mesh.material.forEach(m => m.dispose());
    } else {
      entry.mesh.material.dispose();
    }
    this.blocks.delete(k);
    return true;
  }

  hasBlock(x: number, y: number, z: number): boolean {
    return this.blocks.has(key(x, y, z));
  }

  getBlock(x: number, y: number, z: number) {
    return this.blocks.get(key(x, y, z));
  }

  // Returns all meshes for raycasting
  getMeshes(): THREE.Mesh[] {
    return Array.from(this.blocks.values()).map(b => b.mesh);
  }

  /**
   * Returns the Y position of the TOP face of the highest solid (non-water) block at (x, z).
   * Returns 5 as fallback (safe above sea level).
   */
  getSurfaceHeight(x: number, z: number): number {
    for (let y = WORLD_HEIGHT + 5; y >= 0; y--) {
      const entry = this.blocks.get(key(x, y, z));
      if (entry && entry.type !== 7 && entry.type !== 9) return y; // top face = y
    }
    return 8; // fallback above sea level
  }

  /** Check a range of x/z around a point for the maximum surface Y — good for spawn finding */
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
}
