import * as THREE from "three";

// Minecraft-style animated player model for remote players
export class OtherPlayer {
  group:     THREE.Group;
  private head:     THREE.Mesh;
  private body:     THREE.Mesh;
  private leftArm:  THREE.Group;
  private rightArm: THREE.Group;
  private leftLeg:  THREE.Group;
  private rightLeg: THREE.Group;
  private label:    THREE.Sprite;
  private healthBar: THREE.Sprite;

  targetPos  = new THREE.Vector3();
  targetRotY = 0;
  targetRotX = 0;
  health     = 20;
  maxHealth  = 20;

  private walkCycle  = 0;
  private prevPos    = new THREE.Vector3();
  private dead       = false;

  constructor(scene: THREE.Scene, name: string) {
    this.group = new THREE.Group();
    this.prevPos.copy(this.group.position);

    // ── skin & clothes colours ────────────────────────────────────────────
    const SKIN  = 0xffcc99;
    const SHIRT = 0x3355cc;
    const PANTS = 0x224499;
    const SHOE  = 0x332211;

    const skin  = () => new THREE.MeshLambertMaterial({ color: SKIN  });
    const shirt = () => new THREE.MeshLambertMaterial({ color: SHIRT });
    const pants = () => new THREE.MeshLambertMaterial({ color: PANTS });
    const shoe  = () => new THREE.MeshLambertMaterial({ color: SHOE  });

    // ── Helper: pivot group so rotation axis is at the top of the limb ───
    const limb = (w: number, h: number, d: number, mat: THREE.Material, yOffset: number = 0) => {
      const g   = new THREE.Group();
      const geo = new THREE.BoxGeometry(w, h, d);
      const m   = new THREE.Mesh(geo, mat);
      m.position.y = -h / 2 + yOffset; // pivot at top
      g.add(m);
      return g;
    };

    // Head (pivot centre)
    const headGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    this.head = new THREE.Mesh(headGeo, skin());
    this.head.position.y = 0.25;
    // slight outer layer for helmet look
    const helmGeo = new THREE.BoxGeometry(0.52, 0.52, 0.52);
    const helmMat = new THREE.MeshLambertMaterial({ color: 0x2244aa, transparent: true, opacity: 0.3 });
    const helm = new THREE.Mesh(helmGeo, helmMat);
    this.head.add(helm);

    // Body
    const bodyGeo = new THREE.BoxGeometry(0.6, 0.75, 0.35);
    this.body = new THREE.Mesh(bodyGeo, shirt());
    this.body.position.y = -0.375;

    // Arms — pivot at shoulder top
    this.leftArm  = limb(0.25, 0.65, 0.25, shirt(), 0);
    this.rightArm = limb(0.25, 0.65, 0.25, shirt(), 0);
    // add lower arm (hand)
    const handL = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.3, 0.24), skin());
    handL.position.y = -0.5;
    this.leftArm.children[0].add(handL);
    const handR = handL.clone();
    this.rightArm.children[0].add(handR);

    this.leftArm.position.set(-0.425, -0.05, 0);
    this.rightArm.position.set( 0.425, -0.05, 0);

    // Legs — pivot at hip top
    this.leftLeg  = limb(0.27, 0.70, 0.27, pants(), 0);
    this.rightLeg = limb(0.27, 0.70, 0.27, pants(), 0);
    // boots
    const bootL = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.28), shoe());
    bootL.position.y = -0.5;
    this.leftLeg.children[0].add(bootL);
    const bootR = bootL.clone();
    this.rightLeg.children[0].add(bootR);

    this.leftLeg.position.set(-0.175, -0.75, 0);
    this.rightLeg.position.set( 0.175, -0.75, 0);

    // Assemble
    this.group.add(this.head, this.body, this.leftArm, this.rightArm, this.leftLeg, this.rightLeg);

    // Label
    this.label = this.makeLabel(name);
    this.label.position.y = 0.85;
    this.group.add(this.label);

    // Health bar
    this.healthBar = this.makeHealthBar();
    this.healthBar.position.y = 1.05;
    this.group.add(this.healthBar);

    scene.add(this.group);
  }

  // ── Canvas sprites ────────────────────────────────────────────────────────

  private makeLabel(name: string): THREE.Sprite {
    const canvas = document.createElement("canvas");
    canvas.width = 256; canvas.height = 56;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    (ctx as any).roundRect(4, 8, 248, 42, 6);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 26px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name.slice(0, 16), 128, 30);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const s = new THREE.Sprite(mat);
    s.scale.set(1.6, 0.35, 1);
    return s;
  }

  private makeHealthBar(): THREE.Sprite {
    const canvas = document.createElement("canvas");
    canvas.width = 128; canvas.height = 16;
    const ctx = canvas.getContext("2d")!;
    this.drawHealth(ctx, canvas.width, canvas.height, 1.0);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const s = new THREE.Sprite(mat);
    s.scale.set(1.2, 0.15, 1);
    return s;
  }

  private drawHealth(ctx: CanvasRenderingContext2D, w: number, h: number, pct: number) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = pct > 0.5 ? "#22cc22" : pct > 0.25 ? "#ddcc00" : "#cc2222";
    ctx.fillRect(0, 0, Math.floor(w * pct), h);
  }

  // ── Update each frame ─────────────────────────────────────────────────────

  update(dt: number) {
    if (this.dead) return;

    // Smooth position (target is eye-level; offset down to feet centre)
    const targetFeet = this.targetPos.clone();
    targetFeet.y -= 1.6 - 0.8; // eye→body-centre offset
    this.group.position.lerp(targetFeet, Math.min(1, dt * 14));

    // Rotation
    const dy = ((this.targetRotY - this.group.rotation.y) + Math.PI * 3) % (Math.PI * 2) - Math.PI;
    this.group.rotation.y += dy * Math.min(1, dt * 10);

    // Head pitch
    this.head.rotation.x = this.targetRotX * 0.7;

    // Walk animation based on XZ movement speed
    const moved = new THREE.Vector3(
      this.group.position.x - this.prevPos.x,
      0,
      this.group.position.z - this.prevPos.z,
    ).length();
    this.prevPos.copy(this.group.position);

    const walkSpeed = moved / dt;
    if (walkSpeed > 0.2) {
      this.walkCycle += dt * Math.min(walkSpeed, 8) * 1.8;
    } else {
      // Decay to neutral pose
      this.walkCycle *= 0.8;
    }

    const sw = Math.sin(this.walkCycle);
    const SWING = 0.65;
    this.leftLeg.rotation.x  =  sw * SWING;
    this.rightLeg.rotation.x = -sw * SWING;
    this.leftArm.rotation.x  = -sw * SWING;
    this.rightArm.rotation.x =  sw * SWING;

    // Slight body bob
    this.body.position.y = -0.375 + Math.abs(sw) * 0.03;
  }

  setHealth(hp: number) {
    this.health = hp;
    const canvas = (this.healthBar.material as THREE.SpriteMaterial).map!.image as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    this.drawHealth(ctx, canvas.width, canvas.height, hp / this.maxHealth);
    (this.healthBar.material as THREE.SpriteMaterial).map!.needsUpdate = true;
  }

  die() {
    this.dead = true;
    this.group.rotation.z = Math.PI / 2;
    this.healthBar.visible = false;
    setTimeout(() => { this.group.visible = false; }, 3000);
  }

  dispose(scene: THREE.Scene) {
    scene.remove(this.group);
  }
}
