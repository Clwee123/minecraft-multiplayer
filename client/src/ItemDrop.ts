import * as THREE from "three";

export interface DroppedItem {
  mesh: THREE.Mesh;
  type: string;
  x: number;
  y: number;
  z: number;
  bobOffset: number;
  life: number;
}

export class ItemDropManager {
  private scene: THREE.Scene;
  private drops: DroppedItem[] = [];
  onPickup?: (item: string) => void;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  spawnDrop(x: number, y: number, z: number, itemType: string) {
    const color = ITEM_COLORS[itemType] ?? 0xffffff;
    const geo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const mat = new THREE.MeshLambertMaterial({ color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y + 1, z);
    this.scene.add(mesh);
    this.drops.push({
      mesh,
      type: itemType,
      x,
      y: y + 1,
      z,
      bobOffset: Math.random() * Math.PI * 2,
      life: 30,
    });
  }

  spawnFromMob(mobType: string, x: number, y: number, z: number) {
    const drops = MOB_DROPS[mobType];
    if (!drops) return;
    for (const drop of drops) {
      if (Math.random() < drop.chance) {
        const count = Math.floor(drop.min + Math.random() * (drop.max - drop.min + 1));
        for (let i = 0; i < count; i++) {
          this.spawnDrop(x, y, z, drop.item);
        }
      }
    }
  }

  update(dt: number, playerPos: THREE.Vector3, onPickup?: (type: string) => void) {
    const pickupCallback = onPickup ?? this.onPickup;
    // Iterate backwards — remove dead items in-place without a dead[] accumulator array
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      d.life -= dt;
      d.bobOffset += dt * 2;
      d.mesh.position.y = d.y + Math.sin(d.bobOffset) * 0.12;
      d.mesh.rotation.y += dt * 1.5;

      // Pickup radius — use squared distance, avoid sqrt
      const dx = playerPos.x - d.x;
      const dz = playerPos.z - d.z;
      const dy = playerPos.y - d.y;
      const dead = (dx * dx + dy * dy + dz * dz < 2.25) || d.life <= 0; // 1.5^2=2.25
      if (dead) {
        if (dx * dx + dy * dy + dz * dz < 2.25) pickupCallback?.(d.type);
        this.scene.remove(d.mesh);
        (d.mesh.material as THREE.MeshLambertMaterial).dispose();
        d.mesh.geometry.dispose();
        this.drops.splice(i, 1);
      }
    }
  }

  dispose() {
    for (const d of this.drops) {
      this.scene.remove(d.mesh);
      (d.mesh.material as THREE.MeshLambertMaterial).dispose();
      d.mesh.geometry.dispose();
    }
    this.drops = [];
  }
}

const ITEM_COLORS: Record<string, number> = {
  porkchop: 0xff9966,
  feather: 0xffffff,
  beef: 0xcc4422,
  leather: 0x8b5e3c,
  wool: 0xdddddd,
  chicken: 0xffdd88,
  egg: 0xffeebb,
  gunpowder: 0x888888,
  bone: 0xffffcc,
  arrow: 0xaa7733,
  string: 0xddddcc,
  salmon: 0xff6644,
  cod: 0x996644,
  tropical_fish: 0xffaa00,
  pufferfish: 0xffff00,
  iron_helmet: 0x888888,
  iron_chestplate: 0x888888,
  iron_leggings: 0x777777,
  iron_boots: 0x666666,
};

export const MOB_DROPS: Record<string, Array<{ item: string; chance: number; min: number; max: number }>> = {
  pig: [{ item: "porkchop", chance: 1.0, min: 1, max: 3 }],
  chicken: [
    { item: "feather", chance: 1.0, min: 1, max: 2 },
    { item: "egg", chance: 0.3, min: 1, max: 1 },
  ],
  cow: [
    { item: "beef", chance: 1.0, min: 1, max: 3 },
    { item: "leather", chance: 0.8, min: 0, max: 2 },
  ],
  sheep: [{ item: "wool", chance: 1.0, min: 1, max: 3 }],
  horse: [{ item: "leather", chance: 1.0, min: 1, max: 2 }],
  warden: [{ item: "iron_ingot", chance: 1.0, min: 4, max: 8 }],
  pillager: [{ item: "arrow", chance: 0.8, min: 0, max: 2 }],
  drowned: [{ item: "copper_ingot", chance: 0.5, min: 0, max: 1 }],
  husk: [{ item: "bone", chance: 0.5, min: 0, max: 2 }],
  stray: [{ item: "bone", chance: 1.0, min: 1, max: 2 }],
  ravager: [{ item: "iron_ingot", chance: 1.0, min: 2, max: 4 }],
  axolotl: [{ item: "salmon", chance: 0.5, min: 1, max: 1 }],
  zombie: [{ item: "bone", chance: 0.5, min: 0, max: 2 }],
  creeper: [{ item: "gunpowder", chance: 1.0, min: 0, max: 2 }],
};
