import * as THREE from "three";
import { tileUV, getItemTile, getAtlasTexture } from "./Textures";
import type { Inventory } from "./Inventory";

interface Drop {
  id: number;
  count: number;
  mesh: THREE.Mesh;
  vy: number;       // vertical velocity (gravity)
  bornAt: number;   // ms when spawned (used to prevent immediate pickup)
}

export class ItemDrops {
  private scene: THREE.Scene;
  private drops: Drop[] = [];
  private geo: THREE.BufferGeometry;
  /** Fired when a drop is picked up by the local player. */
  onPickup?: (id: number, count: number) => void;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    // Pre-built cube geometry, but with per-mesh UVs we'll override
    this.geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
  }

  /** Spawn a dropped item at (x,y,z) with a small upward bounce. */
  spawn(id: number, count: number, x: number, y: number, z: number) {
    const tile = getItemTile(id);
    const [u0, v0, u1, v1] = tileUV(tile);
    const geo = this.geo.clone();
    // Set UVs for all 6 faces to the single tile
    const uvAttr = geo.getAttribute("uv") as THREE.BufferAttribute;
    // BoxGeometry has 24 UV pairs (4 per face × 6 faces)
    // Default UVs are 0..1 per face; remap to atlas tile
    const arr = uvAttr.array as Float32Array;
    for (let i = 0; i < 24; i++) {
      const u = arr[i*2];
      const v = arr[i*2+1];
      arr[i*2]   = u0 + u * (u1 - u0);
      arr[i*2+1] = v0 + v * (v1 - v0);
    }
    uvAttr.needsUpdate = true;
    const mat = new THREE.MeshLambertMaterial({
      map: getAtlasTexture(),
      transparent: true,
      alphaTest: 0.5,
      side: THREE.FrontSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x + 0.5, y + 0.3, z + 0.5);
    this.scene.add(mesh);
    this.drops.push({
      id, count, mesh, vy: 3.0,
      bornAt: performance.now(),
    });
  }

  /** Update drops: gravity, spin, pickup by player. `canPickup=false` makes
   *  drops fall but blocks the player from collecting (used while dead so a
   *  corpse can't scoop its own loot). */
  update(dt: number, playerPos: THREE.Vector3, inv: Inventory, isSolid: (x: number, y: number, z: number) => boolean, canPickup = true): void {
    const now = performance.now();
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      // Gravity
      d.vy -= 12 * dt;
      if (d.vy < -20) d.vy = -20;
      const newY = d.mesh.position.y + d.vy * dt;
      // Check solid below
      const bx = Math.floor(d.mesh.position.x);
      const by = Math.floor(newY - 0.15);
      const bz = Math.floor(d.mesh.position.z);
      if (isSolid(bx, by, bz) && d.vy < 0) {
        d.mesh.position.y = by + 1 + 0.15;
        d.vy = 0;
      } else {
        d.mesh.position.y = newY;
      }
      // Spin
      d.mesh.rotation.y += dt * 1.6;
      // Bob
      d.mesh.position.y += Math.sin(now * 0.003 + i) * 0.001;

      // Pickup if close enough and aged > 500ms, AND the player is allowed
      // to pick up (e.g. not dead/respawning).
      if (canPickup && now - d.bornAt > 500) {
        const dx = d.mesh.position.x - playerPos.x;
        const dy = d.mesh.position.y - (playerPos.y + 1.0);
        const dz = d.mesh.position.z - playerPos.z;
        const distSq = dx * dx + dy * dy + dz * dz;
        if (distSq < 2.0 * 2.0) {
          const beforeCount = d.count;
          const leftover = inv.add(d.id, d.count);
          if (leftover === 0) {
            this.onPickup?.(d.id, beforeCount);
            this.scene.remove(d.mesh);
            d.mesh.geometry.dispose();
            (d.mesh.material as THREE.Material).dispose();
            this.drops.splice(i, 1);
          } else {
            // Partial pickup — fire for the consumed portion only.
            if (leftover < beforeCount) this.onPickup?.(d.id, beforeCount - leftover);
            d.count = leftover;
          }
        }
      }
    }
  }

  clear() {
    for (const d of this.drops) {
      this.scene.remove(d.mesh);
      d.mesh.geometry.dispose();
      (d.mesh.material as THREE.Material).dispose();
    }
    this.drops.length = 0;
  }
}
