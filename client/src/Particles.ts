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
  burst(x: number, y: number, z: number, blockType: number, count = 10) {
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
    this.burst(x, y, z, 7, count); // water color
  }

  /** Red damage flash particles. */
  damage(x: number, y: number, z: number, count = 6) {
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
