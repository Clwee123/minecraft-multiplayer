import * as THREE from "three";

// Shared geometry + material for all XP orbs — allocated once
const _ORB_GEO = new THREE.SphereGeometry(0.2, 6, 6);
const _ORB_MAT = new THREE.MeshBasicMaterial({ color: 0x88ff44 });

interface Orb {
  mesh: THREE.Mesh;
  xp: number;
  life: number;
}

export class XPOrbManager {
  private scene: THREE.Scene;
  private orbs: Orb[] = [];
  onCollect: ((xp: number) => void) | null = null;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  spawn(x: number, y: number, z: number, xp: number) {
    // Reuse shared geo+mat — no allocation per orb
    const mesh = new THREE.Mesh(_ORB_GEO, _ORB_MAT);
    mesh.position.set(
      x + (Math.random() - 0.5) * 0.5,
      y + 0.5 + Math.random(),
      z + (Math.random() - 0.5) * 0.5
    );
    this.scene.add(mesh);
    this.orbs.push({ mesh, xp, life: 10 }); // 10s lifespan
  }

  update(dt: number, playerPos: THREE.Vector3) {
    for (let i = this.orbs.length - 1; i >= 0; i--) {
      const orb = this.orbs[i];
      orb.life -= dt;
      // Float up and bob — use life as phase (no Date.now)
      orb.mesh.position.y += Math.sin(orb.life * 5) * 0.01;
      // Squared distance — no sqrt, no new Vector3
      const _ox = orb.mesh.position.x - playerPos.x;
      const _oy = orb.mesh.position.y - playerPos.y;
      const _oz = orb.mesh.position.z - playerPos.z;
      const distSq = _ox*_ox + _oy*_oy + _oz*_oz;
      // Move toward player if close
      if (distSq < 36) { // 6^2
        orb.mesh.position.lerp(playerPos, dt * 4);
      }
      // Collect or expire
      if (distSq < 2.25 || orb.life <= 0) { // 1.5^2 = 2.25
        if (distSq < 2.25 && this.onCollect) this.onCollect(orb.xp);
        this.scene.remove(orb.mesh);
        // Don't dispose shared geo/mat — just remove from scene
        this.orbs.splice(i, 1);
      }
    }
  }

  dispose() {
    for (const orb of this.orbs) {
      this.scene.remove(orb.mesh);
    }
    this.orbs = [];
  }
}
