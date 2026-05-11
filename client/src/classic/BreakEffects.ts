/**
 * 3D block-break effects:
 *  - `BreakHighlight` shows a slowly-cracking outline on the block currently
 *    being mined (replaces the 2D pulse overlay).
 *  - `BreakParticles` emits a burst of tiny textured cubes when a block is
 *    actually broken (replaces nothing — this is a new effect).
 *
 * Both are intentionally simple: no instancing, no atlas crack textures —
 * just small box meshes coloured from the block's top texture.
 */
import * as THREE from "three";
import { BLOCKS, tileUV, getAtlasTexture } from "./Textures";

// ── Crack outline ─────────────────────────────────────────────────────────────
export class BreakHighlight {
  scene: THREE.Scene;
  mesh: THREE.LineSegments;
  cracks: THREE.Mesh;
  private mat: THREE.LineBasicMaterial;
  private crackMat: THREE.MeshBasicMaterial;
  private target: { x: number; y: number; z: number } | null = null;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    // Wire-frame outline (always shown when a block is targeted)
    const geom = new THREE.BoxGeometry(1.002, 1.002, 1.002);
    const edges = new THREE.EdgesGeometry(geom);
    this.mat = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.5 });
    this.mesh = new THREE.LineSegments(edges, this.mat);
    this.mesh.visible = false;
    this.mesh.renderOrder = 998;
    scene.add(this.mesh);

    // Crack overlay (shown only while breaking, grows in opacity)
    this.crackMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -4,
    });
    this.cracks = new THREE.Mesh(new THREE.BoxGeometry(1.01, 1.01, 1.01), this.crackMat);
    this.cracks.visible = false;
    this.cracks.renderOrder = 999;
    scene.add(this.cracks);
  }

  setTarget(x: number | null, y?: number, z?: number) {
    if (x === null || y === undefined || z === undefined) {
      this.target = null;
      this.mesh.visible = false;
      this.cracks.visible = false;
      return;
    }
    this.target = { x, y, z };
    this.mesh.position.set(x + 0.5, y + 0.5, z + 0.5);
    this.cracks.position.set(x + 0.5, y + 0.5, z + 0.5);
    this.mesh.visible = true;
  }

  setProgress(p: number) {
    if (!this.target) return;
    if (p <= 0) {
      this.cracks.visible = false;
    } else {
      this.cracks.visible = true;
      // 9 discrete crack stages like real Minecraft
      const stage = Math.min(9, Math.floor(p * 9) + 1);
      this.crackMat.opacity = 0.15 + stage * 0.05;
    }
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.scene.remove(this.cracks);
    (this.mesh.geometry as THREE.BufferGeometry).dispose();
    (this.cracks.geometry as THREE.BufferGeometry).dispose();
    this.mat.dispose();
    this.crackMat.dispose();
  }
}

// ── Break particles ───────────────────────────────────────────────────────────
interface Particle {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;     // seconds remaining
  spin: THREE.Vector3;
}

export class BreakParticles {
  scene: THREE.Scene;
  particles: Particle[] = [];
  private geom = new THREE.BoxGeometry(0.15, 0.15, 0.15);

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  /** Spawn ~10 particles at the centre of the given block cell. */
  spawn(blockId: number, x: number, y: number, z: number) {
    const def = BLOCKS[blockId];
    if (!def) return;
    // Sample 3 random tiles from the 6 faces so particles vary
    for (let i = 0; i < 10; i++) {
      const tile = def.faces[Math.floor(Math.random() * 6)];
      const mat = this.buildParticleMat(tile);
      const m = new THREE.Mesh(this.geom, mat);
      m.position.set(
        x + 0.5 + (Math.random() - 0.5) * 0.4,
        y + 0.5 + (Math.random() - 0.5) * 0.4,
        z + 0.5 + (Math.random() - 0.5) * 0.4,
      );
      this.scene.add(m);
      const speed = 2 + Math.random() * 2;
      const ang = Math.random() * Math.PI * 2;
      const vy = 2 + Math.random() * 2.5;
      this.particles.push({
        mesh: m,
        vel: new THREE.Vector3(Math.cos(ang) * speed * 0.4, vy, Math.sin(ang) * speed * 0.4),
        life: 0.8 + Math.random() * 0.4,
        spin: new THREE.Vector3((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6),
      });
    }
  }

  private buildParticleMat(tileIdx: number): THREE.MeshBasicMaterial {
    const tex = getAtlasTexture().clone();
    tex.needsUpdate = true;
    const [u0, v0, u1, v1] = tileUV(tileIdx);
    // Sample a small random sub-rect of the tile so particles look granular
    const du = u1 - u0, dv = v1 - v0;
    const subSize = 0.4;
    const sx = u0 + Math.random() * du * (1 - subSize);
    const sy = v0 + Math.random() * dv * (1 - subSize);
    tex.repeat.set(du * subSize, dv * subSize);
    tex.offset.set(sx, sy);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    return new THREE.MeshBasicMaterial({ map: tex });
  }

  update(dt: number, isSolid: (x: number, y: number, z: number) => boolean) {
    const g = 18;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.vel.y -= g * dt;
      const nx = p.mesh.position.x + p.vel.x * dt;
      const ny = p.mesh.position.y + p.vel.y * dt;
      const nz = p.mesh.position.z + p.vel.z * dt;
      // Simple ground collision
      if (isSolid(Math.floor(nx), Math.floor(ny), Math.floor(nz))) {
        if (p.vel.y < 0) p.vel.y = 0;
        p.vel.x *= 0.4; p.vel.z *= 0.4;
      } else {
        p.mesh.position.set(nx, ny, nz);
      }
      p.mesh.rotation.x += p.spin.x * dt;
      p.mesh.rotation.y += p.spin.y * dt;
      p.mesh.rotation.z += p.spin.z * dt;
      p.life -= dt;
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        const m = p.mesh.material as THREE.Material;
        if ((m as any).map) (m as any).map.dispose();
        m.dispose();
        this.particles.splice(i, 1);
      } else if (p.life < 0.3) {
        const mat = p.mesh.material as THREE.MeshBasicMaterial;
        mat.transparent = true;
        mat.opacity = p.life / 0.3;
      }
    }
  }
}
