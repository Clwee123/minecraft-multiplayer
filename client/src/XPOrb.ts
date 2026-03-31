import * as THREE from "three";

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
    const geo = new THREE.SphereGeometry(0.2, 6, 6);
    const mat = new THREE.MeshBasicMaterial({ color: 0x88ff44 });
    const mesh = new THREE.Mesh(geo, mat);
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
      // Float up and bob — cache Date.now once per orb, avoid new Vector3 in distanceTo
      const _ox = orb.mesh.position.x - playerPos.x;
      const _oy = orb.mesh.position.y - playerPos.y;
      const _oz = orb.mesh.position.z - playerPos.z;
      const distSq = _ox*_ox + _oy*_oy + _oz*_oz;
      orb.mesh.position.y += Math.sin(orb.life * 5) * 0.01; // use life as phase (no Date.now)
      // Move toward player if close
      if (distSq < 36) { // 6^2
        orb.mesh.position.lerp(playerPos, dt * 4);
      }
      // Collect
      if (distSq < 2.25 || orb.life <= 0) { // 1.5^2 = 2.25
        if (dist < 1.5 && this.onCollect) this.onCollect(orb.xp);
        this.scene.remove(orb.mesh);
        orb.mesh.geometry.dispose();
        (orb.mesh.material as THREE.MeshBasicMaterial).dispose();
        this.orbs.splice(i, 1);
      }
    }
  }

  dispose() {
    for (const orb of this.orbs) {
      this.scene.remove(orb.mesh);
      orb.mesh.geometry.dispose();
    }
    this.orbs = [];
  }
}
