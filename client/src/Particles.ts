import * as THREE from "three";
import { getBlockColor } from "./blocks";

interface Particle {
  mesh:   THREE.Mesh;
  vx: number; vy: number; vz: number;
  life: number;
  maxLife: number;
}

const GEO = new THREE.BoxGeometry(0.12, 0.12, 0.12);

export class Particles {
  private scene:     THREE.Scene;
  private particles: Particle[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  /** Burst block-break particles at world position (x,y,z) for given block type. */
  burst(x: number, y: number, z: number, blockType: number, count = 6) {
    const color = getBlockColor(blockType);
    for (let i = 0; i < count; i++) {
      const mat  = new THREE.MeshLambertMaterial({ color });
      const mesh = new THREE.Mesh(GEO, mat);
      mesh.position.set(
        x + (Math.random() - 0.5),
        y + (Math.random() - 0.5),
        z + (Math.random() - 0.5)
      );
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        vx: (Math.random() - 0.5) * 5,
        vy: 2 + Math.random() * 4,
        vz: (Math.random() - 0.5) * 5,
        life: 0,
        maxLife: 0.5 + Math.random() * 0.4,
      });
    }
  }

  /** Splash of blue particles (water effect). */
  splash(x: number, y: number, z: number, count = 8) {
    for (let i = 0; i < count; i++) {
      const mat = new THREE.MeshLambertMaterial({ color: 0x4488ff + Math.random() * 0x00ff00 });
      const mesh = new THREE.Mesh(GEO, mat);
      mesh.position.set(
        x + (Math.random() - 0.5) * 1.5,
        y + Math.random() * 0.5,
        z + (Math.random() - 0.5) * 1.5
      );
      this.scene.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;

      this.particles.push({
        mesh,
        vx: Math.cos(angle) * speed,
        vy: 3 + Math.random() * 2,
        vz: Math.sin(angle) * speed,
        life: 0,
        maxLife: 0.6 + Math.random() * 0.4,
      });
    }
  }

  /** Smoke particles (for furnaces, lava, etc). */
  smoke(x: number, y: number, z: number, count = 8) {
    for (let i = 0; i < count; i++) {
      const color = 0x444444 + Math.floor(Math.random() * 0x444444);
      const mat = new THREE.MeshLambertMaterial({ color, transparent: true });
      const mesh = new THREE.Mesh(GEO, mat);
      mesh.position.set(
        x + (Math.random() - 0.5) * 0.8,
        y + Math.random() * 0.5,
        z + (Math.random() - 0.5) * 0.8
      );
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        vx: (Math.random() - 0.5) * 0.8,
        vy: 0.5 + Math.random() * 1.5, // upward drift
        vz: (Math.random() - 0.5) * 0.8,
        life: 0,
        maxLife: 1.2 + Math.random() * 0.6,
      });
    }
  }

  /** Magic/enchantment particles. */
  magic(x: number, y: number, z: number, count = 12) {
    for (let i = 0; i < count; i++) {
      const isPurple = Math.random() < 0.5;
      const color = isPurple ? 0xaa44ff : 0xffcc00;
      const mat = new THREE.MeshLambertMaterial({ color, emissive: color });
      const mesh = new THREE.Mesh(GEO, mat);
      mesh.position.set(x, y, z);
      this.scene.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 3;

      this.particles.push({
        mesh,
        vx: Math.cos(angle) * speed,
        vy: 1 + Math.random() * 2,
        vz: Math.sin(angle) * speed,
        life: 0,
        maxLife: 0.8 + Math.random() * 0.4,
      });
    }
  }

  /** Explosion particles. */
  explosion(x: number, y: number, z: number, count = 15) {
    for (let i = 0; i < count; i++) {
      const roll = Math.random();
      const color = roll < 0.33 ? 0xff4400 : roll < 0.66 ? 0xff8800 : roll < 0.85 ? 0xffcc00 : 0x000000;
      const mat = new THREE.MeshLambertMaterial({ color });
      const mesh = new THREE.Mesh(GEO, mat);
      const size = 0.2 + Math.random() * 0.2;
      mesh.scale.setScalar(size);
      mesh.position.set(
        x + (Math.random() - 0.5) * 1.5,
        y + (Math.random() - 0.5) * 1.5,
        z + (Math.random() - 0.5) * 1.5
      );
      this.scene.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const elevation = Math.random() * Math.PI;
      const speed = 6 + Math.random() * 8;

      this.particles.push({
        mesh,
        vx: Math.sin(elevation) * Math.cos(angle) * speed,
        vy: Math.cos(elevation) * speed,
        vz: Math.sin(elevation) * Math.sin(angle) * speed,
        life: 0,
        maxLife: 0.8 + Math.random() * 0.4,
      });
    }
  }

  /** Red damage flash particles. */
  damage(x: number, y: number, z: number, count = 3) {
    for (let i = 0; i < count; i++) {
      const mat  = new THREE.MeshLambertMaterial({ color: 0xff2222 });
      const mesh = new THREE.Mesh(GEO, mat);
      mesh.position.set(
        x + (Math.random() - 0.5) * 0.6,
        y + 0.5 + Math.random() * 1.2,
        z + (Math.random() - 0.5) * 0.6
      );
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        vx: (Math.random() - 0.5) * 3,
        vy: 1 + Math.random() * 2,
        vz: (Math.random() - 0.5) * 3,
        life: 0,
        maxLife: 0.3 + Math.random() * 0.3,
      });
    }
  }

  update(dt: number) {
    const dead: number[] = [];

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.life += dt;
      const t = p.life / p.maxLife;

      // Gravity
      p.vy -= 14 * dt;

      p.mesh.position.x += p.vx * dt;
      p.mesh.position.y += p.vy * dt;
      p.mesh.position.z += p.vz * dt;

      // Fade out
      (p.mesh.material as THREE.MeshLambertMaterial).opacity = 1 - t;
      (p.mesh.material as THREE.MeshLambertMaterial).transparent = true;

      // Shrink
      const s = 1 - t * 0.8;
      p.mesh.scale.setScalar(s);

      if (p.life >= p.maxLife) dead.push(i);
    }

    // Remove dead particles (back-to-front to preserve indices)
    for (let i = dead.length - 1; i >= 0; i--) {
      const p = this.particles[dead[i]];
      this.scene.remove(p.mesh);
      (p.mesh.material as THREE.MeshLambertMaterial).dispose();
      this.particles.splice(dead[i], 1);
    }
  }
}
