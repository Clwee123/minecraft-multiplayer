import * as THREE from "three";
import { getBlockColor } from "./blocks";

interface Particle {
  mesh:    THREE.Mesh;
  mat:     THREE.MeshLambertMaterial;
  vx: number; vy: number; vz: number;
  life: number;
  maxLife: number;
  active: boolean;
}

const GEO = new THREE.BoxGeometry(0.12, 0.12, 0.12);

// Pre-allocate a fixed pool of particles — zero heap allocation during gameplay
const POOL_SIZE = 128;

export class Particles {
  private scene:     THREE.Scene;
  private pool:      Particle[] = [];
  private active:    Particle[] = []; // only live particles

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Build the pool up front
    for (let i = 0; i < POOL_SIZE; i++) {
      const mat  = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true });
      const mesh = new THREE.Mesh(GEO, mat);
      mesh.visible = false;
      scene.add(mesh);
      this.pool.push({ mesh, mat, vx: 0, vy: 0, vz: 0, life: 0, maxLife: 1, active: false });
    }
  }

  private acquire(
    x: number, y: number, z: number,
    color: number,
    vx: number, vy: number, vz: number,
    maxLife: number,
    scale = 1,
    emissive = false,
  ): void {
    // Find an inactive slot
    let p: Particle | null = null;
    for (let i = 0; i < this.pool.length; i++) {
      if (!this.pool[i].active) { p = this.pool[i]; break; }
    }
    if (!p) return; // pool full — drop particle

    p.active  = true;
    p.life    = 0;
    p.maxLife = maxLife;
    p.vx = vx; p.vy = vy; p.vz = vz;
    p.mesh.position.set(x, y, z);
    p.mesh.scale.setScalar(scale);
    p.mesh.visible = true;
    p.mat.color.setHex(color);
    p.mat.opacity = 1;
    if (emissive) {
      p.mat.emissive.setHex(color);
      p.mat.emissiveIntensity = 0.6;
    } else {
      p.mat.emissiveIntensity = 0;
    }
    this.active.push(p);
  }

  /** Burst block-break particles at world position (x,y,z) for given block type. */
  burst(x: number, y: number, z: number, blockType: number, count = 6) {
    const color = getBlockColor(blockType);
    for (let i = 0; i < count; i++) {
      this.acquire(
        x + (Math.random() - 0.5),
        y + (Math.random() - 0.5),
        z + (Math.random() - 0.5),
        color,
        (Math.random() - 0.5) * 5,
        2 + Math.random() * 4,
        (Math.random() - 0.5) * 5,
        0.5 + Math.random() * 0.4,
      );
    }
  }

  /** Splash of blue particles (water effect). */
  splash(x: number, y: number, z: number, count = 8) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      this.acquire(
        x + (Math.random() - 0.5) * 1.5,
        y + Math.random() * 0.5,
        z + (Math.random() - 0.5) * 1.5,
        0x4488ff,
        Math.cos(angle) * speed,
        3 + Math.random() * 2,
        Math.sin(angle) * speed,
        0.6 + Math.random() * 0.4,
      );
    }
  }

  /** Smoke particles (for furnaces, lava, etc). */
  smoke(x: number, y: number, z: number, count = 8) {
    for (let i = 0; i < count; i++) {
      const grey = 0x444444 + Math.floor(Math.random() * 0x444444);
      this.acquire(
        x + (Math.random() - 0.5) * 0.8,
        y + Math.random() * 0.5,
        z + (Math.random() - 0.5) * 0.8,
        grey,
        (Math.random() - 0.5) * 0.8,
        0.5 + Math.random() * 1.5,
        (Math.random() - 0.5) * 0.8,
        1.2 + Math.random() * 0.6,
      );
    }
  }

  /** Floating dust mote in sunlight — slow drift, warm color. */
  dustMote(x: number, y: number, z: number) {
    this.acquire(
      x, y, z,
      0xffeecc,
      (Math.random() - 0.5) * 0.2,
      0.05 + Math.random() * 0.15,
      (Math.random() - 0.5) * 0.2,
      3.0 + Math.random() * 2.0,
      0.3,
    );
  }

  /** Firefly — small emissive yellow-green, slow random drift. */
  firefly(x: number, y: number, z: number) {
    this.acquire(
      x, y, z,
      0xaaff44,
      (Math.random() - 0.5) * 0.5,
      (Math.random() - 0.5) * 0.3,
      (Math.random() - 0.5) * 0.5,
      2.5 + Math.random() * 2.0,
      0.4,
      true, // emissive
    );
  }

  /** Underwater bubble particles rising from player. */
  bubbles(x: number, y: number, z: number, count = 3) {
    for (let i = 0; i < count; i++) {
      this.acquire(
        x + (Math.random() - 0.5) * 0.6,
        y + Math.random() * 0.3,
        z + (Math.random() - 0.5) * 0.6,
        0x88ccff,
        (Math.random() - 0.5) * 0.3,
        1.5 + Math.random() * 1.0,
        (Math.random() - 0.5) * 0.3,
        1.0 + Math.random() * 0.5,
        0.5, // small scale for bubbles
      );
    }
  }

  /** Magic/enchantment particles. */
  magic(x: number, y: number, z: number, count = 12) {
    for (let i = 0; i < count; i++) {
      const color = Math.random() < 0.5 ? 0xaa44ff : 0xffcc00;
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 3;
      this.acquire(
        x, y, z,
        color,
        Math.cos(angle) * speed,
        1 + Math.random() * 2,
        Math.sin(angle) * speed,
        0.8 + Math.random() * 0.4,
        1,
        true,
      );
    }
  }

  /** Explosion particles. */
  explosion(x: number, y: number, z: number, count = 15) {
    for (let i = 0; i < count; i++) {
      const roll  = Math.random();
      const color = roll < 0.33 ? 0xff4400 : roll < 0.66 ? 0xff8800 : roll < 0.85 ? 0xffcc00 : 0x000000;
      const angle = Math.random() * Math.PI * 2;
      const elev  = Math.random() * Math.PI;
      const speed = 6 + Math.random() * 8;
      this.acquire(
        x + (Math.random() - 0.5) * 1.5,
        y + (Math.random() - 0.5) * 1.5,
        z + (Math.random() - 0.5) * 1.5,
        color,
        Math.sin(elev) * Math.cos(angle) * speed,
        Math.cos(elev) * speed,
        Math.sin(elev) * Math.sin(angle) * speed,
        0.8 + Math.random() * 0.4,
        0.2 + Math.random() * 0.2,
      );
    }
  }

  /** Red damage flash particles. */
  damage(x: number, y: number, z: number, count = 3) {
    for (let i = 0; i < count; i++) {
      this.acquire(
        x + (Math.random() - 0.5) * 0.6,
        y + 0.5 + Math.random() * 1.2,
        z + (Math.random() - 0.5) * 0.6,
        0xff2222,
        (Math.random() - 0.5) * 3,
        1 + Math.random() * 2,
        (Math.random() - 0.5) * 3,
        0.3 + Math.random() * 0.3,
      );
    }
  }

  update(dt: number) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const p = this.active[i];
      p.life += dt;

      // Gravity
      p.vy -= 14 * dt;

      p.mesh.position.x += p.vx * dt;
      p.mesh.position.y += p.vy * dt;
      p.mesh.position.z += p.vz * dt;

      const t = p.life / p.maxLife;

      // Fade + shrink
      p.mat.opacity = 1 - t;
      p.mesh.scale.setScalar((1 - t * 0.8));

      if (p.life >= p.maxLife) {
        // Return to pool — no allocation, no scene.remove
        p.active = false;
        p.mesh.visible = false;
        this.active.splice(i, 1);
      }
    }
  }
}
