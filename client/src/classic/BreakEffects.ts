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
//
// Real Minecraft uses 10 crack-overlay textures (destroy_stage_0..9). We
// generate them once on the client by drawing random spider-web cracks into
// a canvas at progressively-greater density, then swap the destination tile
// of `cracks.material.map` to match the current break progress.

const CRACK_STAGES = 10;

function generateCrackTextures(): THREE.Texture[] {
  const out: THREE.Texture[] = [];
  for (let stage = 0; stage < CRACK_STAGES; stage++) {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 32;
    const ctx = canvas.getContext("2d")!;
    // Background is transparent — only the crack lines are drawn.
    ctx.clearRect(0, 0, 32, 32);
    ctx.strokeStyle = "rgba(0,0,0,0.85)";
    ctx.lineWidth = 1;
    // Density ramps up with stage. Stage 0 is essentially invisible.
    const lineCount = 2 + stage * 3;
    for (let i = 0; i < lineCount; i++) {
      const x0 = Math.random() * 32;
      const y0 = Math.random() * 32;
      const segs = 2 + Math.floor(Math.random() * 3);
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      let x = x0, y = y0;
      for (let s = 0; s < segs; s++) {
        x += (Math.random() - 0.5) * 14;
        y += (Math.random() - 0.5) * 14;
        ctx.lineTo(Math.round(x), Math.round(y));
      }
      ctx.stroke();
    }
    // A few isolated speckle pixels to look gritty
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    for (let i = 0; i < 4 + stage * 2; i++) {
      const px = Math.floor(Math.random() * 32);
      const py = Math.floor(Math.random() * 32);
      ctx.fillRect(px, py, 1, 1);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    out.push(tex);
  }
  return out;
}

export class BreakHighlight {
  scene: THREE.Scene;
  mesh: THREE.LineSegments;
  cracks: THREE.Mesh;
  private mat: THREE.LineBasicMaterial;
  private crackMat: THREE.MeshBasicMaterial;
  private crackTextures: THREE.Texture[];
  private target: { x: number; y: number; z: number } | null = null;
  private currentStage = -1;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    const geom = new THREE.BoxGeometry(1.002, 1.002, 1.002);
    const edges = new THREE.EdgesGeometry(geom);
    this.mat = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.5 });
    this.mesh = new THREE.LineSegments(edges, this.mat);
    this.mesh.visible = false;
    this.mesh.renderOrder = 998;
    scene.add(this.mesh);

    this.crackTextures = generateCrackTextures();
    this.crackMat = new THREE.MeshBasicMaterial({
      map: this.crackTextures[0],
      transparent: true,
      opacity: 1,
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
      this.currentStage = -1;
      return;
    }
    this.cracks.visible = true;
    const stage = Math.min(CRACK_STAGES - 1, Math.floor(p * CRACK_STAGES));
    if (stage !== this.currentStage) {
      this.currentStage = stage;
      this.crackMat.map = this.crackTextures[stage];
      this.crackMat.needsUpdate = true;
    }
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.scene.remove(this.cracks);
    (this.mesh.geometry as THREE.BufferGeometry).dispose();
    (this.cracks.geometry as THREE.BufferGeometry).dispose();
    this.mat.dispose();
    this.crackMat.dispose();
    this.crackTextures.forEach(t => t.dispose());
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
