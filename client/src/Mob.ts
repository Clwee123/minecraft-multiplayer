import * as THREE from "three";

export type MobType = "pig" | "zombie" | "chicken" | "cow" | "sheep" | "creeper" | "skeleton" | "horse" | "villager" | "enderdragon" | "spider" | "witherskeleton" | "wolf" | "cat" | "phantom" | "slime";

// Pre-allocated module constant — no object literal created per damage event
const MOB_ORIGINAL_COLORS: Record<MobType, number> = {
  pig: 0xf9a8a8, zombie: 0x77bb77, chicken: 0xffffff, cow: 0x7a4a2a, sheep: 0xdddddd,
  creeper: 0x4a8a2a, skeleton: 0xcccccc, witherskeleton: 0x111111, horse: 0xc8a46e,
  villager: 0xffcc99, enderdragon: 0x110022, spider: 0x333333, wolf: 0x888888,
  cat: 0xdd8833, phantom: 0x1a4455, slime: 0x44aa44,
};

export interface MobData {
  id:      string;
  type:    MobType;
  x:       number;
  y:       number;
  z:       number;
  rotY:    number;
  health:  number;
  maxHealth: number;
  alive:   boolean;
  state:   string;
}

export class Mob {
  group:     THREE.Group;
  private bodyMeshes: THREE.Mesh[] = [];
  private legs:       THREE.Group[] = [];
  private arms:       THREE.Group[] = [];
  private headGroup:  THREE.Group;
  private hpSprite:   THREE.Sprite;

  id:       string;
  type:     MobType;
  health:   number;
  maxHealth: number;
  alive:    boolean = true;
  state:    string  = "idle";

  targetPos  = new THREE.Vector3();
  targetRotY = 0;
  walkCycle  = 0;
  private prevPos = new THREE.Vector3();

  constructor(scene: THREE.Scene, data: MobData) {
    this.group     = new THREE.Group();
    this.headGroup = new THREE.Group();
    this.id        = data.id;
    this.type      = data.type;
    this.health    = data.health;
    this.maxHealth = data.maxHealth;

    switch (data.type) {
      case "pig":     this.buildPig();     break;
      case "zombie":  this.buildZombie();  break;
      case "chicken": this.buildChicken(); break;
      case "cow":     this.buildCow();     break;
      case "sheep":   this.buildSheep();   break;
      case "creeper": this.buildCreeper(); break;
      case "skeleton": this.buildSkeleton(); break;
      case "witherskeleton": this.buildWitherSkeleton(); break;
      case "horse":   this.buildHorse();   break;
      case "villager": this.buildVillager(); break;
      case "enderdragon": this.buildEnderDragon(); break;
      case "spider":  this.buildSpider();  break;
      case "wolf":    this.buildWolf();    break;
      case "cat":     this.buildCat();     break;
      case "phantom": this.buildPhantom(); break;
      case "slime":   this.buildSlime();   break;
    }

    this.hpSprite = this.buildHpBar();
    this.group.add(this.hpSprite);
    this.hpSprite.visible = false; // only show when damaged

    this.group.position.set(data.x, data.y, data.z);
    this.targetPos.copy(this.group.position);
    this.prevPos.copy(this.group.position);
    this.targetRotY = data.rotY;

    scene.add(this.group);
  }

  // ── Build meshes ──────────────────────────────────────────────────────────

  private mat(color: number, transparent = false, opacity = 1) {
    const m = new THREE.MeshLambertMaterial({ color, transparent, opacity });
    return m;
  }

  private box(w: number, h: number, d: number, color: number) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), this.mat(color));
    this.bodyMeshes.push(mesh);
    return mesh;
  }

  private buildPig() {
    const PINK  = 0xf9a8a8;
    const SNOUT = 0xf07070;
    const HOOF  = 0x774444;

    // Body
    const body = this.box(1.0, 0.75, 1.4, PINK);
    body.position.set(0, 0.45, 0);
    this.group.add(body);

    // Head group (so it can nod)
    const head = this.box(0.72, 0.66, 0.66, PINK);
    head.position.y = 0;
    this.headGroup.add(head);

    // Eyes
    const eyeL = this.box(0.13, 0.13, 0.05, 0x222222);
    eyeL.position.set(-0.2, 0.12, 0.34);
    const eyeR = eyeL.clone(); eyeR.position.x = 0.2;
    this.headGroup.add(eyeL, eyeR);

    // Snout
    const snout = this.box(0.44, 0.28, 0.18, SNOUT);
    snout.position.set(0, -0.1, 0.36);
    this.headGroup.add(snout);
    // Nostrils
    const nL = this.box(0.1, 0.08, 0.06, 0xdd5555);
    nL.position.set(-0.1, -0.1, 0.45); this.headGroup.add(nL);
    const nR = nL.clone(); nR.position.x = 0.1; this.headGroup.add(nR);

    // Ears
    const earL = this.box(0.18, 0.2, 0.1, SNOUT);
    earL.position.set(-0.28, 0.4, 0.1); this.headGroup.add(earL);
    const earR = earL.clone(); earR.position.x = 0.28; this.headGroup.add(earR);

    this.headGroup.position.set(0, 0.82, 0.72);
    this.group.add(this.headGroup);

    // Legs (4)
    const legPositions: [number, number][] = [[-0.32, -0.45], [0.32, -0.45], [-0.32, 0.45], [0.32, 0.45]];
    for (const [lx, lz] of legPositions) {
      const g   = new THREE.Group();
      const leg = this.box(0.3, 0.48, 0.3, PINK);
      leg.position.y = -0.24;
      const hoof = this.box(0.3, 0.14, 0.3, HOOF);
      hoof.position.y = -0.48 - 0.07;
      g.add(leg, hoof);
      g.position.set(lx, 0, lz);
      this.group.add(g);
      this.legs.push(g);
    }
  }

  private buildZombie() {
    const SKIN  = 0x77bb77;
    const SHIRT = 0x2a4a2a;
    const PANTS = 0x1a2e1a;
    const SHOE  = 0x1a1008;

    // Body
    const body = this.box(0.6, 0.8, 0.35, SHIRT);
    body.position.y = -0.05;
    this.group.add(body);

    // Head
    const head = this.box(0.5, 0.5, 0.5, SKIN);
    this.headGroup.add(head);
    // Eyes (glowing red)
    const eyeL = this.box(0.1, 0.1, 0.05, 0xff2200);
    eyeL.position.set(-0.12, 0.05, 0.26); this.headGroup.add(eyeL);
    const eyeR = eyeL.clone(); eyeR.position.x = 0.12; this.headGroup.add(eyeR);
    this.headGroup.position.set(0, 0.65, 0);
    this.group.add(this.headGroup);

    // Arms (outstretched, pivot at shoulder)
    const makeArm = (side: number) => {
      const g = new THREE.Group();
      const upper = this.box(0.26, 0.55, 0.26, SHIRT);
      upper.position.y = -0.275;
      const lower = this.box(0.24, 0.45, 0.24, SKIN);
      lower.position.y = -0.55 - 0.225;
      g.add(upper, lower);
      g.position.set(side * 0.43, 0.2, 0);
      g.rotation.x = -Math.PI / 2.2; // outstretched forward
      this.group.add(g);
      this.arms.push(g);
      return g;
    };
    makeArm(-1); makeArm(1);

    // Legs (pivot at hip)
    const makeLeg = (side: number) => {
      const g = new THREE.Group();
      const upper = this.box(0.26, 0.6, 0.26, PANTS);
      upper.position.y = -0.3;
      const boot = this.box(0.26, 0.24, 0.28, SHOE);
      boot.position.y = -0.6 - 0.12;
      g.add(upper, boot);
      g.position.set(side * 0.175, -0.45, 0);
      this.group.add(g);
      this.legs.push(g);
      return g;
    };
    makeLeg(-1); makeLeg(1);
  }

  private buildChicken() {
    const WHITE  = 0xffffff;
    const YELLOW = 0xffcc00;
    const RED    = 0xdd2222;
    const BEAK   = 0xffaa00;

    // Body (egg-shaped via scaling)
    const body = this.box(0.55, 0.6, 0.7, WHITE);
    body.scale.set(1, 1.1, 1.3);
    body.position.y = 0.35;
    this.group.add(body);

    // Head
    const head = this.box(0.42, 0.4, 0.42, WHITE);
    this.headGroup.add(head);
    // Comb
    const comb = this.box(0.12, 0.22, 0.12, RED);
    comb.position.set(0, 0.3, 0.02); this.headGroup.add(comb);
    // Beak
    const beak = this.box(0.16, 0.12, 0.18, BEAK);
    beak.position.set(0, -0.06, 0.3); this.headGroup.add(beak);
    // Wattle
    const wattle = this.box(0.1, 0.18, 0.08, RED);
    wattle.position.set(0, -0.2, 0.26); this.headGroup.add(wattle);
    this.headGroup.position.set(0, 0.72, 0.25);
    this.group.add(this.headGroup);

    // Wings (act like arms)
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      const wing = this.box(0.12, 0.45, 0.5, WHITE);
      wing.position.y = -0.225;
      g.add(wing);
      g.position.set(side * 0.34, 0.35, 0);
      g.rotation.z = -side * 0.2;
      this.group.add(g);
      this.arms.push(g);
    }

    // Legs
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      const leg = this.box(0.1, 0.4, 0.1, YELLOW);
      leg.position.y = -0.2;
      const foot = this.box(0.25, 0.06, 0.18, YELLOW);
      foot.position.set(0.05, -0.43, 0.06);
      g.add(leg, foot);
      g.position.set(side * 0.14, 0.05, 0);
      this.group.add(g);
      this.legs.push(g);
    }
  }

  private buildCow() {
    const BROWN  = 0x7a4a2a;
    const WHITE  = 0xdddddd;
    const HOOF   = 0x222222;
    const NOSE   = 0xc87050;

    // Body (bigger than pig, has white patches via extra meshes)
    const body = this.box(1.1, 0.85, 1.5, BROWN);
    body.position.set(0, 0.5, 0);
    this.group.add(body);

    // White belly patch
    const patch = this.box(0.7, 0.5, 1.2, WHITE);
    patch.position.set(0, 0.3, 0.01);
    this.group.add(patch);

    // Head group
    const head = this.box(0.76, 0.7, 0.72, BROWN);
    this.headGroup.add(head);

    // Snout
    const snout = this.box(0.5, 0.32, 0.22, NOSE);
    snout.position.set(0, -0.14, 0.4);
    this.headGroup.add(snout);

    // Nostrils
    const nL = this.box(0.12, 0.1, 0.06, 0xaa5040);
    nL.position.set(-0.12, -0.14, 0.52); this.headGroup.add(nL);
    const nR = nL.clone(); nR.position.x = 0.12; this.headGroup.add(nR);

    // Eyes
    const eyeL = this.box(0.14, 0.14, 0.05, 0x111111);
    eyeL.position.set(-0.28, 0.14, 0.37); this.headGroup.add(eyeL);
    const eyeR = eyeL.clone(); eyeR.position.x = 0.28; this.headGroup.add(eyeR);

    // Horns
    const hornL = this.box(0.1, 0.28, 0.1, WHITE);
    hornL.position.set(-0.3, 0.44, 0.04); this.headGroup.add(hornL);
    const hornR = hornL.clone(); hornR.position.x = 0.3; this.headGroup.add(hornR);

    // Ears
    const earL = this.box(0.22, 0.16, 0.1, BROWN);
    earL.position.set(-0.44, 0.26, 0.06); this.headGroup.add(earL);
    const earR = earL.clone(); earR.position.x = 0.44; this.headGroup.add(earR);

    this.headGroup.position.set(0, 0.92, 0.78);
    this.group.add(this.headGroup);

    // Legs
    const legPositions: [number, number][] = [[-0.36, -0.52], [0.36, -0.52], [-0.36, 0.52], [0.36, 0.52]];
    for (const [lx, lz] of legPositions) {
      const g   = new THREE.Group();
      const leg = this.box(0.34, 0.55, 0.34, BROWN);
      leg.position.y = -0.275;
      const hoof = this.box(0.34, 0.15, 0.36, HOOF);
      hoof.position.y = -0.55 - 0.075;
      g.add(leg, hoof);
      g.position.set(lx, 0, lz);
      this.group.add(g);
      this.legs.push(g);
    }

    // Udder
    const udder = this.box(0.44, 0.2, 0.44, 0xffd0c0);
    udder.position.set(0, -0.08, 0.1);
    this.group.add(udder);
  }

  private buildSheep() {
    const WOOL  = 0xdddddd;
    const SKIN  = 0x887766;
    const HOOF  = 0x333333;
    const FACE  = 0x998877;

    // Wool body (fluffy, bigger)
    const body = this.box(1.0, 0.95, 1.35, WOOL);
    body.position.set(0, 0.55, 0);
    this.group.add(body);
    // Extra wool bumps for fluffiness
    const bumpF = this.box(0.8, 0.55, 0.55, WOOL);
    bumpF.position.set(0, 0.72, -0.5); this.group.add(bumpF);
    const bumpB = this.box(0.8, 0.55, 0.55, WOOL);
    bumpB.position.set(0, 0.72, 0.5); this.group.add(bumpB);

    // Head (no wool on face)
    const head = this.box(0.56, 0.56, 0.56, FACE);
    this.headGroup.add(head);
    // Snout bump
    const snout = this.box(0.32, 0.26, 0.2, SKIN);
    snout.position.set(0, -0.1, 0.32); this.headGroup.add(snout);
    // Eyes
    const eyeL = this.box(0.1, 0.1, 0.05, 0x222222);
    eyeL.position.set(-0.2, 0.1, 0.3); this.headGroup.add(eyeL);
    const eyeR = eyeL.clone(); eyeR.position.x = 0.2; this.headGroup.add(eyeR);
    // Wool on top of head
    const topWool = this.box(0.52, 0.3, 0.5, WOOL);
    topWool.position.set(0, 0.38, -0.04); this.headGroup.add(topWool);
    // Ears
    const earL = this.box(0.1, 0.24, 0.18, SKIN);
    earL.position.set(-0.34, 0.1, 0); this.headGroup.add(earL);
    const earR = earL.clone(); earR.position.x = 0.34; this.headGroup.add(earR);

    this.headGroup.position.set(0, 0.88, 0.72);
    this.group.add(this.headGroup);

    // Thin legs under wool
    const legPositions: [number, number][] = [[-0.32, -0.44], [0.32, -0.44], [-0.32, 0.44], [0.32, 0.44]];
    for (const [lx, lz] of legPositions) {
      const g   = new THREE.Group();
      const leg = this.box(0.28, 0.52, 0.28, SKIN);
      leg.position.y = -0.26;
      const hoof = this.box(0.28, 0.14, 0.3, HOOF);
      hoof.position.y = -0.52 - 0.07;
      g.add(leg, hoof);
      g.position.set(lx, 0, lz);
      this.group.add(g);
      this.legs.push(g);
    }
  }

  private buildCreeper() {
    const GREEN  = 0x4a8a2a;
    const DARK   = 0x2a5a1a;

    // Body (cube shape)
    const body = this.box(0.9, 1.2, 0.9, GREEN);
    body.position.set(0, 0.6, 0);
    this.group.add(body);

    // Head (square on top)
    const head = this.box(0.88, 0.85, 0.88, GREEN);
    this.headGroup.add(head);

    // Creeper face pattern (dark spots for eyes/mouth)
    const eyeL = this.box(0.12, 0.14, 0.08, DARK);
    eyeL.position.set(-0.2, 0.1, 0.46); this.headGroup.add(eyeL);
    const eyeR = eyeL.clone(); eyeR.position.x = 0.2; this.headGroup.add(eyeR);
    // Mouth (two spots below eyes)
    const mouthL = this.box(0.12, 0.12, 0.08, DARK);
    mouthL.position.set(-0.2, -0.15, 0.46); this.headGroup.add(mouthL);
    const mouthR = mouthL.clone(); mouthR.position.x = 0.2; this.headGroup.add(mouthR);

    this.headGroup.position.set(0, 0.88, 0.44);
    this.group.add(this.headGroup);

    // 4 legs
    const legPositions: [number, number][] = [[-0.3, -0.3], [0.3, -0.3], [-0.3, 0.3], [0.3, 0.3]];
    for (const [lx, lz] of legPositions) {
      const g   = new THREE.Group();
      const leg = this.box(0.28, 0.58, 0.28, GREEN);
      leg.position.y = -0.29;
      g.add(leg);
      g.position.set(lx, 0, lz);
      this.group.add(g);
      this.legs.push(g);
    }
  }

  private buildSkeleton() {
    const BONE = 0xcccccc;

    // Body (torso)
    const body = this.box(0.5, 0.75, 0.3, BONE);
    body.position.y = 0.3;
    this.group.add(body);

    // Head
    const head = this.box(0.4, 0.4, 0.4, BONE);
    this.headGroup.add(head);
    // Eye sockets (dark)
    const eyeL = this.box(0.08, 0.08, 0.05, 0x222222);
    eyeL.position.set(-0.1, 0.05, 0.22); this.headGroup.add(eyeL);
    const eyeR = eyeL.clone(); eyeR.position.x = 0.1; this.headGroup.add(eyeR);
    // Teeth (dark spots)
    const teethL = this.box(0.08, 0.06, 0.05, 0x222222);
    teethL.position.set(-0.1, -0.1, 0.22); this.headGroup.add(teethL);
    const teethR = teethL.clone(); teethR.position.x = 0.1; this.headGroup.add(teethR);
    this.headGroup.position.set(0, 0.65, 0);
    this.group.add(this.headGroup);

    // Arms (thin bones)
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      const upper = this.box(0.15, 0.5, 0.15, BONE);
      upper.position.y = -0.25;
      const lower = this.box(0.12, 0.45, 0.12, BONE);
      lower.position.y = -0.55 - 0.225;
      g.add(upper, lower);
      g.position.set(side * 0.38, 0.2, 0);
      this.group.add(g);
      this.arms.push(g);
    }

    // Legs (thin bones)
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      const upper = this.box(0.15, 0.55, 0.15, BONE);
      upper.position.y = -0.275;
      const lower = this.box(0.13, 0.5, 0.13, BONE);
      lower.position.y = -0.55 - 0.25;
      g.add(upper, lower);
      g.position.set(side * 0.15, -0.45, 0);
      this.group.add(g);
      this.legs.push(g);
    }
  }

  private buildWitherSkeleton() {
    const BONE = 0x111111; // Dark black bones
    const SCALE = 1.3;

    // Body (torso) - taller
    const body = this.box(0.5 * SCALE, 0.75 * SCALE, 0.3 * SCALE, BONE);
    body.position.y = 0.3 * SCALE;
    this.group.add(body);

    // Head
    const head = this.box(0.4 * SCALE, 0.4 * SCALE, 0.4 * SCALE, BONE);
    this.headGroup.add(head);
    // Glowing blue eyes
    const eyeL = this.box(0.08 * SCALE, 0.08 * SCALE, 0.05 * SCALE, 0x0044ff);
    eyeL.position.set(-0.1 * SCALE, 0.05 * SCALE, 0.22 * SCALE);
    const eyeLMat = eyeL.material as THREE.MeshLambertMaterial;
    eyeLMat.emissive = new THREE.Color(0x0044ff);
    eyeLMat.emissiveIntensity = 0.8;
    this.headGroup.add(eyeL);

    const eyeR = eyeL.clone();
    eyeR.position.x = 0.1 * SCALE;
    this.headGroup.add(eyeR);

    // Teeth
    const teethL = this.box(0.08 * SCALE, 0.06 * SCALE, 0.05 * SCALE, 0x222222);
    teethL.position.set(-0.1 * SCALE, -0.1 * SCALE, 0.22 * SCALE);
    this.headGroup.add(teethL);
    const teethR = teethL.clone();
    teethR.position.x = 0.1 * SCALE;
    this.headGroup.add(teethR);

    this.headGroup.position.set(0, 0.65 * SCALE, 0);
    this.group.add(this.headGroup);

    // Arms (thin bones with sword)
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      const upper = this.box(0.15 * SCALE, 0.5 * SCALE, 0.15 * SCALE, BONE);
      upper.position.y = -0.25 * SCALE;
      const lower = this.box(0.12 * SCALE, 0.45 * SCALE, 0.12 * SCALE, BONE);
      lower.position.y = -0.55 * SCALE - 0.225 * SCALE;
      g.add(upper, lower);

      // Stone sword in right hand
      if (side === 1) {
        const sword = this.box(0.08 * SCALE, 0.4 * SCALE, 0.15 * SCALE, 0x808080);
        sword.position.set(0.12 * SCALE, -0.55 * SCALE, 0);
        g.add(sword);
      }

      g.position.set(side * 0.38 * SCALE, 0.2 * SCALE, 0);
      this.group.add(g);
      this.arms.push(g);
    }

    // Legs
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      const upper = this.box(0.15 * SCALE, 0.55 * SCALE, 0.15 * SCALE, BONE);
      upper.position.y = -0.275 * SCALE;
      const lower = this.box(0.13 * SCALE, 0.5 * SCALE, 0.13 * SCALE, BONE);
      lower.position.y = -0.55 * SCALE - 0.25 * SCALE;
      g.add(upper, lower);
      g.position.set(side * 0.15 * SCALE, -0.45 * SCALE, 0);
      this.group.add(g);
      this.legs.push(g);
    }
  }

  private buildHorse() {
    const BROWN  = 0xc8a46e;
    const DARK   = 0x5a3a2a;
    const BLACK  = 0x1a1a1a;

    // Body
    const body = this.box(0.9, 0.8, 1.6, BROWN);
    body.position.set(0, 0.45, 0);
    this.group.add(body);

    // Head
    const head = this.box(0.4, 0.5, 0.6, BROWN);
    this.headGroup.add(head);
    // Eyes
    const eyeL = this.box(0.1, 0.1, 0.05, 0x222222);
    eyeL.position.set(-0.15, 0.1, 0.32); this.headGroup.add(eyeL);
    const eyeR = eyeL.clone(); eyeR.position.x = 0.15; this.headGroup.add(eyeR);
    // Ears
    const earL = this.box(0.12, 0.24, 0.08, DARK);
    earL.position.set(-0.18, 0.32, 0.1); this.headGroup.add(earL);
    const earR = earL.clone(); earR.position.x = 0.18; this.headGroup.add(earR);
    this.headGroup.position.set(0, 0.6, 0.8);
    this.group.add(this.headGroup);

    // Mane (dark thin plane on neck)
    const mane = new THREE.Mesh(
      new THREE.PlaneGeometry(0.3, 0.5),
      new THREE.MeshLambertMaterial({ color: DARK })
    );
    mane.position.set(0, 0.8, 0.3);
    mane.rotation.x = 0.3;
    this.group.add(mane);

    // 4 Legs
    const legPositions: [number, number][] = [[-0.28, -0.6], [0.28, -0.6], [-0.28, 0.6], [0.28, 0.6]];
    for (const [lx, lz] of legPositions) {
      const g = new THREE.Group();
      const leg = this.box(0.2, 0.7, 0.2, BROWN);
      leg.position.y = -0.35;
      g.add(leg);
      g.position.set(lx, 0.1, lz);
      this.group.add(g);
      this.legs.push(g);
    }
  }

  private buildVillager() {
    const SKIN = 0xffcc99;
    const BROWN = 0x7a4f2a;
    const GREEN = 0x4a8a3a;

    // Body
    const body = this.box(0.6, 1.0, 0.4, BROWN);
    body.position.y = 0.2;
    this.group.add(body);

    // Green robe overlay
    const robe = this.box(0.62, 0.95, 0.42, GREEN);
    robe.position.y = 0.22;
    this.group.add(robe);

    // Head
    const head = this.box(0.5, 0.5, 0.5, SKIN);
    this.headGroup.add(head);

    // Eyes
    const eyeL = this.box(0.12, 0.12, 0.05, 0x222222);
    eyeL.position.set(-0.15, 0.08, 0.26);
    this.headGroup.add(eyeL);
    const eyeR = eyeL.clone(); eyeR.position.x = 0.15;
    this.headGroup.add(eyeR);

    // Nose
    const nose = this.box(0.1, 0.12, 0.08, BROWN);
    nose.position.set(0, -0.05, 0.3);
    this.headGroup.add(nose);

    this.headGroup.position.set(0, 0.75, 0);
    this.group.add(this.headGroup);

    // Arms
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      const upper = this.box(0.26, 0.5, 0.26, SKIN);
      upper.position.y = -0.25;
      const lower = this.box(0.24, 0.45, 0.24, SKIN);
      lower.position.y = -0.55 - 0.225;
      g.add(upper, lower);
      g.position.set(side * 0.4, 0.3, 0);
      this.group.add(g);
      this.arms.push(g);
    }

    // Legs
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      const upper = this.box(0.26, 0.5, 0.26, BROWN);
      upper.position.y = -0.25;
      const lower = this.box(0.26, 0.45, 0.26, BROWN);
      lower.position.y = -0.55 - 0.225;
      g.add(upper, lower);
      g.position.set(side * 0.15, -0.5, 0);
      this.group.add(g);
      this.legs.push(g);
    }
  }

  private buildEnderDragon() {
    const BLACK = 0x110022;
    const PURPLE = 0x220033;
    const RED = 0xff4444;

    // Scale up 1.5x
    const scale = 1.5;

    // Body (large black box)
    const body = this.box(2, 1, 4, BLACK);
    body.scale.set(scale, scale, scale);
    body.position.set(0, 0.6 * scale, 0);
    this.group.add(body);

    // Head (glowing red eyes)
    const head = this.box(1, 0.8, 1.2, BLACK);
    this.headGroup.add(head);
    // Glowing red eyes
    const eyeL = this.box(0.18, 0.18, 0.1, RED);
    eyeL.position.set(-0.3, 0.15, 0.65);
    const eyeMat = new THREE.MeshLambertMaterial({ color: RED, emissive: RED, emissiveIntensity: 0.8 });
    eyeL.material = eyeMat;
    this.headGroup.add(eyeL);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.3;
    this.headGroup.add(eyeR);
    this.headGroup.position.set(0, 0.8 * scale, 0.9 * scale);
    this.group.add(this.headGroup);

    // Wings (dark purple on sides)
    for (const side of [-1, 1]) {
      const wing = this.box(3, 0.2, 2, PURPLE);
      wing.scale.set(scale, scale, scale);
      wing.position.set(side * 2 * scale, 0.6 * scale, 0);
      this.group.add(wing);
    }

    // Scale group
    this.group.scale.set(1.5, 1.5, 1.5);
  }

  private buildSpider() {
    const DARK = 0x333333;
    const RED = 0xff3333;

    // Body: low to ground (y center at 0.2)
    const body = this.box(0.8, 0.4, 1.2, DARK);
    body.position.set(0, 0.2, 0);
    this.group.add(body);

    // Head
    const head = this.box(0.4, 0.4, 0.4, DARK);
    head.position.set(0, 0.2, 0.65);
    this.group.add(head);

    // 4 eyes (red)
    const eyePositions = [
      [-0.1, 0.35, 0.8],
      [0.1, 0.35, 0.8],
      [-0.1, 0.15, 0.8],
      [0.1, 0.15, 0.8],
    ];
    for (const [x, y, z] of eyePositions) {
      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 8, 8),
        new THREE.MeshLambertMaterial({ color: RED })
      );
      eye.position.set(x, y, z);
      this.group.add(eye);
      this.bodyMeshes.push(eye);
    }

    // 8 legs: 4 on each side
    const legPositions = [
      // Left side (z varies, x = -0.4)
      [-0.4, 0.1, -0.3],
      [-0.4, 0.1, -0.1],
      [-0.4, 0.1, 0.1],
      [-0.4, 0.1, 0.3],
      // Right side (z varies, x = 0.4)
      [0.4, 0.1, -0.3],
      [0.4, 0.1, -0.1],
      [0.4, 0.1, 0.1],
      [0.4, 0.1, 0.3],
    ];
    for (let i = 0; i < 8; i++) {
      const [px, py, pz] = legPositions[i];
      const legGroup = new THREE.Group();
      const leg = this.box(0.1, 0.08, 0.6, DARK);
      leg.position.set(0, 0, 0.3);
      legGroup.add(leg);
      legGroup.position.set(px, py, pz);
      // Rotate legs outward ±45°
      legGroup.rotation.z = (i < 4 ? -1 : 1) * Math.PI / 4;
      this.group.add(legGroup);
      this.legs.push(legGroup);
    }
  }

  private buildWolf() {
    const GRAY = 0x888888;
    const WHITE = 0xdddddd;
    const BLACK = 0x222222;

    // Body
    const body = this.box(0.8, 0.6, 1.2, GRAY);
    body.position.set(0, 0.45, 0);
    this.group.add(body);

    // Head
    const head = this.box(0.5, 0.5, 0.5, GRAY);
    this.headGroup.add(head);

    // Eyes
    const eyeL = this.box(0.1, 0.1, 0.05, BLACK);
    eyeL.position.set(-0.15, 0.12, 0.28);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.15;
    this.headGroup.add(eyeL, eyeR);

    // Snout
    const snout = this.box(0.28, 0.2, 0.16, WHITE);
    snout.position.set(0, -0.08, 0.32);
    this.headGroup.add(snout);

    // Ears (triangular, approximated with small boxes)
    const earL = this.box(0.12, 0.22, 0.08, GRAY);
    earL.position.set(-0.22, 0.32, 0.08);
    const earR = earL.clone();
    earR.position.x = 0.22;
    this.headGroup.add(earL, earR);

    this.headGroup.position.set(0, 0.72, 0.6);
    this.group.add(this.headGroup);

    // Legs (4)
    const legPositions: [number, number][] = [[-0.25, -0.4], [0.25, -0.4], [-0.25, 0.4], [0.25, 0.4]];
    for (const [lx, lz] of legPositions) {
      const g = new THREE.Group();
      const leg = this.box(0.18, 0.5, 0.18, GRAY);
      leg.position.y = -0.25;
      g.add(leg);
      g.position.set(lx, 0, lz);
      this.group.add(g);
      this.legs.push(g);
    }

    // Tail (thin box at back)
    const tail = this.box(0.1, 0.08, 0.7, GRAY);
    tail.position.set(0, 0.2, -0.8);
    this.group.add(tail);
  }

  private buildCat() {
    const ORANGE = 0xdd8833;
    const BLACK = 0x222222;
    const PINK = 0xff99aa;

    // Body
    const body = this.box(0.6, 0.4, 0.9, ORANGE);
    body.position.set(0, 0.35, 0);
    this.group.add(body);

    // Head
    const head = this.box(0.4, 0.4, 0.35, ORANGE);
    this.headGroup.add(head);

    // Eyes
    const eyeL = this.box(0.09, 0.09, 0.04, BLACK);
    eyeL.position.set(-0.12, 0.08, 0.22);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.12;
    this.headGroup.add(eyeL, eyeR);

    // Ears (pointy triangles, approximated with small boxes)
    const earL = this.box(0.08, 0.18, 0.06, ORANGE);
    earL.position.set(-0.16, 0.26, 0.05);
    const earR = earL.clone();
    earR.position.x = 0.16;
    this.headGroup.add(earL, earR);

    // Nose
    const nose = this.box(0.06, 0.06, 0.04, PINK);
    nose.position.set(0, -0.06, 0.25);
    this.headGroup.add(nose);

    this.headGroup.position.set(0, 0.6, 0.4);
    this.group.add(this.headGroup);

    // Legs (4)
    const legPositions: [number, number][] = [[-0.18, -0.28], [0.18, -0.28], [-0.18, 0.28], [0.18, 0.28]];
    for (const [lx, lz] of legPositions) {
      const g = new THREE.Group();
      const leg = this.box(0.12, 0.38, 0.12, ORANGE);
      leg.position.y = -0.19;
      g.add(leg);
      g.position.set(lx, 0, lz);
      this.group.add(g);
      this.legs.push(g);
    }

    // Tail (long thin box at back)
    const tail = this.box(0.08, 0.06, 0.6, ORANGE);
    tail.position.set(0, 0.1, -0.6);
    this.group.add(tail);
  }

  private buildPhantom() {
    const BODY_COLOR = 0x1a4455;
    const WING_COLOR = 0x1a3344;
    const EYE_COLOR = 0x44ff44;

    // Body: thin horizontal box
    const body = this.box(1.2, 0.3, 2.0, BODY_COLOR);
    body.position.y = 0;
    this.group.add(body);

    // Wings: two boxes on sides
    const wingL = this.box(2.0, 0.1, 0.8, WING_COLOR);
    wingL.position.set(-1.0, -0.05, 0);
    this.group.add(wingL);

    const wingR = this.box(2.0, 0.1, 0.8, WING_COLOR);
    wingR.position.set(1.0, -0.05, 0);
    this.group.add(wingR);

    // Eyes: two small glowing spheres (emissive)
    const eyeL = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 8, 8),
      new THREE.MeshLambertMaterial({ color: EYE_COLOR, emissive: EYE_COLOR })
    );
    eyeL.position.set(-0.3, 0.1, 0.8);
    this.bodyMeshes.push(eyeL);
    this.group.add(eyeL);

    const eyeR = eyeL.clone();
    eyeR.position.x = 0.3;
    this.bodyMeshes.push(eyeR);
    this.group.add(eyeR);
  }

  private buildSlime() {
    const OUTER_COLOR = 0x44aa44;
    const INNER_COLOR = 0x66cc66;
    const EYE_COLOR = 0xffffff;
    const PUPIL_COLOR = 0x000000;

    // Outer body (translucent green)
    const outer = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 1.2, 1.2),
      new THREE.MeshLambertMaterial({ color: OUTER_COLOR, transparent: true, opacity: 0.8 })
    );
    outer.position.y = 0;
    this.bodyMeshes.push(outer);
    this.group.add(outer);

    // Inner core (brighter)
    const inner = this.box(0.7, 0.7, 0.7, INNER_COLOR);
    inner.position.y = 0;
    this.group.add(inner);

    // Eyes: two white spheres with black pupils
    const eyeL = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 8, 8),
      new THREE.MeshLambertMaterial({ color: EYE_COLOR })
    );
    eyeL.position.set(-0.25, 0.25, 0.5);
    this.bodyMeshes.push(eyeL);
    this.group.add(eyeL);

    const eyeR = eyeL.clone();
    eyeR.position.x = 0.25;
    this.bodyMeshes.push(eyeR);
    this.group.add(eyeR);

    // Black pupils on eyes
    const pupilL = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 8, 8),
      new THREE.MeshLambertMaterial({ color: PUPIL_COLOR })
    );
    pupilL.position.set(-0.25, 0.25, 0.62);
    this.bodyMeshes.push(pupilL);
    this.group.add(pupilL);

    const pupilR = pupilL.clone();
    pupilR.position.x = 0.25;
    this.bodyMeshes.push(pupilR);
    this.group.add(pupilR);
  }

  // ── HP bar ────────────────────────────────────────────────────────────────

  private buildHpBar(): THREE.Sprite {
    const c = document.createElement("canvas");
    c.width = 128; c.height = 16;
    this.renderHpCanvas(c.getContext("2d")!, c.width, c.height, 1);
    const tex = new THREE.CanvasTexture(c);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
    const sp  = new THREE.Sprite(mat);
    sp.scale.set(1.2, 0.18, 1);
    const hpY: Record<MobType, number> = { pig: 1.4, chicken: 1.0, zombie: 1.6, cow: 1.8, sheep: 1.7, creeper: 1.9, skeleton: 1.9, witherskeleton: 2.5, horse: 2.2, villager: 1.8, enderdragon: 3.5, spider: 0.8, wolf: 1.5, cat: 1.2, phantom: 1.5, slime: 1.5 };
    sp.position.y = hpY[this.type] ?? 1.6;
    return sp;
  }

  private renderHpCanvas(ctx: CanvasRenderingContext2D, w: number, h: number, pct: number) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#111"; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = pct > 0.5 ? "#22dd22" : pct > 0.25 ? "#ddcc00" : "#dd2222";
    ctx.fillRect(1, 1, Math.max(0, (w - 2) * pct), h - 2);
  }

  // ── Per-frame update ──────────────────────────────────────────────────────

  update(dt: number) {
    if (!this.alive) return;

    // Smooth interpolation
    this.group.position.lerp(this.targetPos, Math.min(1, dt * 9));

    // Yaw
    const dy = ((this.targetRotY - this.group.rotation.y) + Math.PI * 3) % (Math.PI * 2) - Math.PI;
    this.group.rotation.y += dy * Math.min(1, dt * 7);

    // Walk animation — avoid new Vector2 allocation per frame
    const mdx = this.group.position.x - this.prevPos.x;
    const mdz = this.group.position.z - this.prevPos.z;
    const moved = Math.sqrt(mdx * mdx + mdz * mdz);
    this.prevPos.copy(this.group.position);

    const spd = moved / dt;
    if (spd > 0.15) this.walkCycle += dt * Math.min(spd, 10) * 2.5;

    const sw   = Math.sin(this.walkCycle);
    const SWING = 0.55;

    if (this.type === "pig" || this.type === "creeper") {
      // Diagonal pairs
      for (let i = 0; i < this.legs.length; i++) {
        const phase = (i === 0 || i === 3) ? 0 : Math.PI;
        this.legs[i].rotation.x = sw * SWING * (phase === 0 ? 1 : -1) * 0.5;
      }
      // Head bobs
      this.headGroup.rotation.x = Math.abs(sw) * 0.08;
    } else if (this.type === "zombie") {
      if (this.legs.length >= 2) {
        this.legs[0].rotation.x =  sw * SWING;
        this.legs[1].rotation.x = -sw * SWING;
      }
      // Zombie arm sway
      for (const arm of this.arms) {
        arm.rotation.z += Math.sin(this.walkCycle * 0.5) * 0.005;
      }
    } else if (this.type === "cow" || this.type === "sheep") {
      for (let i = 0; i < this.legs.length; i++) {
        const phase = (i === 0 || i === 3) ? 0 : Math.PI;
        this.legs[i].rotation.x = Math.sin(this.walkCycle + phase) * SWING * 0.5;
      }
      this.headGroup.rotation.x = Math.abs(sw) * 0.06;
    } else if (this.type === "chicken") {
      if (this.legs.length >= 2) {
        this.legs[0].rotation.x =  sw * 0.7;
        this.legs[1].rotation.x = -sw * 0.7;
      }
      // Wing flap
      for (let i = 0; i < this.arms.length; i++) {
        this.arms[i].rotation.z = -(i === 0 ? -1 : 1) * (0.2 + Math.abs(sw) * 0.3);
      }
      // Head bob
      this.headGroup.position.y = 0.72 + Math.abs(sw) * 0.05;
    } else if (this.type === "skeleton") {
      // Skeleton walks with leg swing (same as zombie)
      if (this.legs.length >= 2) {
        this.legs[0].rotation.x =  sw * SWING;
        this.legs[1].rotation.x = -sw * SWING;
      }
    } else if (this.type === "spider") {
      // Spider: alternating leg pattern (odd legs forward, even back)
      for (let i = 0; i < this.legs.length; i++) {
        const phase = (i % 2 === 0) ? 0 : Math.PI;
        this.legs[i].rotation.y = Math.sin(this.walkCycle + phase) * 0.3;
      }
    } else if (this.type === "wolf" || this.type === "cat") {
      // Wolf/Cat: diagonal leg pairs
      for (let i = 0; i < this.legs.length; i++) {
        const phase = (i === 0 || i === 3) ? 0 : Math.PI;
        this.legs[i].rotation.x = Math.sin(this.walkCycle + phase) * SWING * 0.5;
      }
      // Head bobs
      this.headGroup.rotation.x = Math.abs(sw) * 0.05;
    } else if (this.type === "slime") {
      // Slime bounces up and down sinusoidally
      const bounceTime = this.walkCycle / 2.5; // Sync with speed
      const bounceAmount = 0.3 * Math.abs(Math.sin(bounceTime * Math.PI / 0.5)); // Oscillates every 0.5s
      this.group.position.y = this.targetPos.y + bounceAmount;
    }
  }

  // ── Damage feedback ───────────────────────────────────────────────────────

  /** Set creeper fuse progress (0=not fusing, 1=about to explode). Flashes white and swells. */
  setCreeperFuse(progress: number) {
    if (this.type !== "creeper") return;
    // Swell: scale from 1.0 to 1.4
    const scale = 1.0 + progress * 0.4;
    this.group.scale.setScalar(scale);
    // Flash white with increasing frequency
    const flashFreq = 2 + progress * 12; // flashes per second
    const flashOn = Math.sin(Date.now() * 0.001 * flashFreq * Math.PI * 2) > 0;
    const color = flashOn && progress > 0.1 ? 0xffffff : MOB_ORIGINAL_COLORS.creeper;
    for (const m of this.bodyMeshes) {
      (m.material as THREE.MeshLambertMaterial).color.set(color);
    }
  }

  showDamage(newHp: number) {
    this.health = newHp;
    this.hpSprite.visible = true;
    const c   = (this.hpSprite.material as THREE.SpriteMaterial).map!.image as HTMLCanvasElement;
    const ctx = c.getContext("2d")!;
    this.renderHpCanvas(ctx, c.width, c.height, newHp / this.maxHealth);
    (this.hpSprite.material as THREE.SpriteMaterial).map!.needsUpdate = true;

    // Flash (red for most, green for creeper, white for skeleton, purple for dragon, dark for spider)
    const origColor = MOB_ORIGINAL_COLORS[this.type] ?? 0xffffff;
    const damageColor = this.type === "creeper" ? 0x8aca5a : this.type === "skeleton" ? 0xffffff : this.type === "witherskeleton" ? 0xffffff : this.type === "enderdragon" ? 0xff8800 : 0xff4444;
    for (const m of this.bodyMeshes) {
      (m.material as THREE.MeshLambertMaterial).color.set(damageColor);
    }
    setTimeout(() => {
      for (const m of this.bodyMeshes) {
        (m.material as THREE.MeshLambertMaterial).color.set(origColor);
      }
      if (newHp >= this.maxHealth) this.hpSprite.visible = false;
    }, 200);
  }

  die() {
    this.alive = false;
    this.hpSprite.visible = false;

    // Death animation: tilt over, flash red, shrink, then hide
    const startTime = Date.now();
    const duration = 1200;
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Tilt over slowly
      this.group.rotation.z = t * (Math.PI / 2);
      // Sink into ground
      this.group.position.y = this.targetPos.y - t * 0.5;
      // Shrink
      const scale = 1 - t * 0.3;
      this.group.scale.setScalar(scale);
      // Flash red rapidly
      if (elapsed % 200 < 100) {
        for (const m of this.bodyMeshes) {
          (m.material as THREE.MeshLambertMaterial).color.set(0xff2222);
        }
      } else {
        const origColor = MOB_ORIGINAL_COLORS[this.type] ?? 0xffffff;
        for (const m of this.bodyMeshes) {
          (m.material as THREE.MeshLambertMaterial).color.set(origColor);
        }
      }

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        // Poof — fade out
        setTimeout(() => { this.group.visible = false; }, 500);
      }
    };
    animate();
  }

  dispose(scene: THREE.Scene) {
    scene.remove(this.group);
    this.bodyMeshes.forEach(m => {
      m.geometry.dispose();
      (m.material as THREE.Material).dispose();
    });
  }
}
