import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { clone as skeletonClone } from "three/examples/jsm/utils/SkeletonUtils.js";
import { tileUV, getItemTile, getAtlasTexture, getAtlasCanvas, ATLAS_TILE_PX, ATLAS_COLS, BLOCKS } from "./Textures";

/**
 * Loader for the player GLB model. Loads once, then clones the scene
 * for each remote player so they don't share a transform.
 */
let _template: THREE.Group | null = null;
let _animations: THREE.AnimationClip[] = [];
let _loadPromise: Promise<void> | null = null;

export function preloadPlayerModel(): Promise<void> {
  if (_template) return Promise.resolve();
  if (_loadPromise) return _loadPromise;
  _loadPromise = new Promise<void>((resolve) => {
    const loader = new GLTFLoader();
    loader.load(
      "/player.glb",
      (gltf) => {
        _template = gltf.scene;
        _animations = gltf.animations || [];
        // Note: scaling is applied per-clone in spawnPlayer/buildFirstPersonArm
        // so each instance can be normalised to the size it needs. We don't
        // pre-scale the template (caused both remote players AND the FP arm
        // to render way too big in earlier builds).
        _template.traverse((o: any) => {
          if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; }
        });
        resolve();
      },
      undefined,
      (err) => {
        console.warn("[PlayerModel] failed to load /player.glb, will use fallback box", err);
        _template = null;
        resolve();
      },
    );
  });
  return _loadPromise;
}

/**
 * Cloning a SkinnedMesh does NOT clone its material — by default the new
 * mesh references the same `Material` instance. Three.js renders one
 * material per state-bucket, so mutating depthTest/transparent for the FP
 * arm leaks into every remote player too. We clone materials per instance
 * so each clone owns its own state. Also forces opaque depth-test behaviour
 * so remote players sort correctly against water and transparent leaves.
 */
function isolateMaterials(root: THREE.Object3D, opts: { transparent?: boolean; depthTest?: boolean; renderOrder?: number } = {}) {
  root.traverse((o: any) => {
    if (!(o.isMesh || o.isSkinnedMesh)) return;
    if (o.material) {
      o.material = Array.isArray(o.material)
        ? o.material.map((m: any) => m.clone())
        : o.material.clone();
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m: any) => {
        m.transparent = opts.transparent ?? false;
        m.depthTest   = opts.depthTest   ?? true;
        m.depthWrite  = !(opts.transparent ?? false);
        m.alphaTest   = 0;
      });
    }
    if (opts.renderOrder !== undefined) o.renderOrder = opts.renderOrder;
    o.frustumCulled = false;
  });
}

/** Rescale an object so its bounding box height matches `targetY` units. */
function normalizeHeight(obj: THREE.Object3D, targetY: number) {
  obj.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(obj);
  const size = new THREE.Vector3();
  box.getSize(size);
  if (size.y > 0.01) obj.scale.setScalar(targetY / size.y);
}

export interface PlayerInstance {
  root: THREE.Group;
  mixer: THREE.AnimationMixer | null;
  walkAction: THREE.AnimationAction | null;
  idleAction: THREE.AnimationAction | null;
}

/** Returns a fresh clone of the player template, plus an AnimationMixer. */
export function spawnPlayer(): PlayerInstance | null {
  if (!_template) return null;
  // SkeletonUtils.clone() is REQUIRED for SkinnedMesh — a plain clone leaves
  // the new mesh's skeleton.bones pointing at the original tree's bones, so
  // skinning matrices stay at identity and the whole model renders at the
  // bind pose at the cloned tree's local origin (i.e. at world (0,0,0)).
  const root = skeletonClone(_template) as THREE.Group;
  // Give this remote-player clone its own materials (so the FP arm can't
  // mutate them) and force opaque rendering so the model sorts correctly
  // against water and leaves.
  isolateMaterials(root, { transparent: false, depthTest: true });
  // Normalise to ~1.8 blocks tall regardless of GLB source units.
  normalizeHeight(root, 1.8);
  let mixer: THREE.AnimationMixer | null = null;
  let walkAction: THREE.AnimationAction | null = null;
  let idleAction: THREE.AnimationAction | null = null;
  if (_animations.length > 0) {
    mixer = new THREE.AnimationMixer(root);
    // Find walk / idle by common naming
    for (const clip of _animations) {
      const name = clip.name.toLowerCase();
      if (!walkAction && (name.includes("walk") || name.includes("run") || name.includes("move"))) {
        walkAction = mixer.clipAction(clip);
      }
      if (!idleAction && (name.includes("idle") || name.includes("stand"))) {
        idleAction = mixer.clipAction(clip);
      }
    }
    // Fallbacks: first clip = idle if no idle found, second clip = walk
    if (!idleAction && _animations[0]) idleAction = mixer.clipAction(_animations[0]);
    if (!walkAction && _animations[1]) walkAction = mixer.clipAction(_animations[1]);
    if (idleAction) { idleAction.play(); idleAction.weight = 1; }
    if (walkAction) { walkAction.play(); walkAction.weight = 0; }
  }
  return { root, mixer, walkAction, idleAction };
}

// ── First-person right arm ──────────────────────────────────────────────────
//
// player.glb is laid out as separate body-part meshes parented to a single
// armature. We clone the whole rig, hide every mesh except `default_arm_R`,
// and align the right-shoulder bone (`ArmR1`) so the arm pokes into view
// from the bottom-right of the camera.

// Mutable so the dev-mode tuner can live-edit them. Captured into closures
// by buildFirstPersonArm, but we expose them on `window.__armTuner` for the
// dev panel to twiddle. The defaults below mirror the values shipped in
// production; export ARM_DEFAULTS to make "reset to default" easy.
export const ARM_DEFAULTS = {
  offsetX: 0.355,
  offsetY: -0.85,
  offsetZ: -0.485,
  shoulderForward: -1.92,
  swingArc: 1.6,
  twist: 0.25,
  // Held-item offset (local to the hand bone) and tilt. Updated by the
  // dev panel's "Held item" sliders.
  itemX: 0.0,
  itemY: -0.30,
  itemZ: 0.0,
  itemRotX: 0.18,
  itemRotY: -0.55,
  itemRotZ: 0.55,
};
const ARM_OFFSET = new THREE.Vector3(ARM_DEFAULTS.offsetX, ARM_DEFAULTS.offsetY, ARM_DEFAULTS.offsetZ);
let ARM_SHOULDER_FORWARD = ARM_DEFAULTS.shoulderForward;
let ARM_SWING_ARC        = ARM_DEFAULTS.swingArc;
let ARM_TWIST            = ARM_DEFAULTS.twist;
let ITEM_OFFSET_X = ARM_DEFAULTS.itemX;
let ITEM_OFFSET_Y = ARM_DEFAULTS.itemY;
let ITEM_OFFSET_Z = ARM_DEFAULTS.itemZ;
let ITEM_ROT_X = ARM_DEFAULTS.itemRotX;
let ITEM_ROT_Y = ARM_DEFAULTS.itemRotY;
let ITEM_ROT_Z = ARM_DEFAULTS.itemRotZ;

export interface FirstPersonArm {
  group: THREE.Group;
  triggerSwing(strength?: number): void;
  triggerMineSwing(): void;
  /** Advance animation. `ctx` adds walking bob + yaw sway when provided. */
  update(dt: number, ctx?: { walkSpeed: number; yawDelta: number; onGround: boolean }): void;
  setHeldItem(itemId: number): void;
}

export function buildFirstPersonArm(): FirstPersonArm | null {
  if (!_template) return null;
  // Same SkeletonUtils story as spawnPlayer — must do a skeleton-aware clone.
  const cloned = skeletonClone(_template) as THREE.Object3D;

  // Use the default lit shader with normal depth testing. Earlier we had
  // depthTest:false + transparent:true so the arm rendered over the whole
  // world, but that made the arm's own front/back faces bleed through each
  // other (no z-sort within the model). Plain opaque + depthTest=true is
  // exactly how remote-player meshes are rendered and looks correct.
  isolateMaterials(cloned, { transparent: false, depthTest: true });
  // Normalise to a sensible size, then `cloned.position` re-aligns the
  // shoulder. Keep this a touch smaller than the world model since we only
  // see the arm.
  normalizeHeight(cloned, 1.8);

  // Hide everything except the right arm mesh. Use a name match so we don't
  // depend on mesh order. Common naming in this rig: `default_arm_R`.
  cloned.traverse((o: any) => {
    if (o.isMesh || o.isSkinnedMesh) {
      const keep = /arm_r$/i.test(o.name) || /^default_arm_r$/i.test(o.name);
      o.visible = keep;
    }
  });

  // Find right-shoulder bone for swinging, and the right-hand/forearm bone
  // for attaching held items to the END of the arm instead of the elbow.
  let shoulder: THREE.Object3D | null = null;
  let hand: THREE.Object3D | null = null;
  cloned.traverse((o: any) => {
    if (!shoulder && (o.name === "ArmR1" || /^arm.*r1$/i.test(o.name))) shoulder = o;
    if (!hand && (o.name === "ArmR2" || /^arm.*r2$/i.test(o.name) || /hand.*r/i.test(o.name) || /wrist.*r/i.test(o.name))) hand = o;
  });

  // We need the bone's world-space position so we can offset the clone such
  // that the shoulder lands at ARM_OFFSET in camera-local space.
  cloned.updateMatrixWorld(true);
  const shoulderWorld = new THREE.Vector3();
  if (shoulder) (shoulder as THREE.Object3D).getWorldPosition(shoulderWorld);

  cloned.position.set(
    ARM_OFFSET.x - shoulderWorld.x,
    ARM_OFFSET.y - shoulderWorld.y,
    ARM_OFFSET.z - shoulderWorld.z,
  );

  let baseRotX = 0, baseRotZ = 0;
  if (shoulder) {
    baseRotX = (shoulder as THREE.Object3D).rotation.x;
    baseRotZ = (shoulder as THREE.Object3D).rotation.z;
    (shoulder as THREE.Object3D).rotation.x = baseRotX - ARM_SHOULDER_FORWARD;
  }

  const group = new THREE.Group();
  group.name = "fp-arm";
  group.add(cloned);
  group.renderOrder = 1000;

  // ── Dev-mode tuner ──
  // Exposes live setters on window.__armTuner so a /devarm panel can
  // re-apply values every drag tick. The closure captures `cloned`,
  // `shoulder`, and `group`, so we don't need a re-mount to update them.
  (window as any).__armTuner = {
    get: () => ({
      offsetX: ARM_OFFSET.x,
      offsetY: ARM_OFFSET.y,
      offsetZ: ARM_OFFSET.z,
      shoulderForward: ARM_SHOULDER_FORWARD,
      swingArc: ARM_SWING_ARC,
      twist: ARM_TWIST,
      itemX: ITEM_OFFSET_X, itemY: ITEM_OFFSET_Y, itemZ: ITEM_OFFSET_Z,
      itemRotX: ITEM_ROT_X, itemRotY: ITEM_ROT_Y, itemRotZ: ITEM_ROT_Z,
    }),
    set: (k: string, v: number) => {
      if (k === "offsetX") { ARM_OFFSET.x = v; if (shoulder) cloned.position.x = v - shoulderWorld.x; }
      if (k === "offsetY") { ARM_OFFSET.y = v; if (shoulder) cloned.position.y = v - shoulderWorld.y; }
      if (k === "offsetZ") { ARM_OFFSET.z = v; if (shoulder) cloned.position.z = v - shoulderWorld.z; }
      if (k === "shoulderForward") ARM_SHOULDER_FORWARD = v;
      if (k === "swingArc")        ARM_SWING_ARC = v;
      if (k === "twist")           ARM_TWIST = v;
      // Held item — apply to the live mesh too so dragging the slider moves
      // it in real time without having to re-equip.
      if (k === "itemX") { ITEM_OFFSET_X = v; if (heldMesh) heldMesh.position.x = v; }
      if (k === "itemY") { ITEM_OFFSET_Y = v; if (heldMesh) heldMesh.position.y = v; }
      if (k === "itemZ") { ITEM_OFFSET_Z = v; if (heldMesh) heldMesh.position.z = v; }
      if (k === "itemRotX") { ITEM_ROT_X = v; if (heldMesh) heldMesh.rotation.x = v; }
      if (k === "itemRotY") { ITEM_ROT_Y = v; if (heldMesh) heldMesh.rotation.y = v; }
      if (k === "itemRotZ") { ITEM_ROT_Z = v; if (heldMesh) heldMesh.rotation.z = v; }
    },
  };

  let swingT = 0;
  let swingStrength = 1;
  let miningSwingPhase = 0;
  let miningActive = false;
  let heldMesh: THREE.Object3D | null = null;
  let currentHeldId = 0;
  // Walking bob + yaw sway state (applied to `group` so they stack with
  // the swing-only animation on the shoulder bone).
  let walkPhase = 0;
  let swayZ = 0;        // smoothed yaw-delta drives a Z-rotation sway
  const groupBaseX = group.position.x;
  const groupBaseY = group.position.y;

  return {
    group,
    triggerSwing(strength = 1) {
      swingT = 1;
      swingStrength = strength;
      miningActive = false;
    },
    triggerMineSwing() {
      miningActive = true;
    },
    update(dt: number, ctx?: { walkSpeed: number; yawDelta: number; onGround: boolean }) {
      if (!shoulder) return;
      const sh = shoulder as THREE.Object3D;
      // ── Shoulder swing (one-shot or continuous mining) ──
      if (swingT > 0) {
        const eased = Math.sin((1 - swingT) * Math.PI);
        sh.rotation.x = baseRotX - ARM_SHOULDER_FORWARD + eased * ARM_SWING_ARC * swingStrength;
        sh.rotation.z = baseRotZ + eased * ARM_TWIST * swingStrength;
        swingT = Math.max(0, swingT - dt * 4);
      } else if (miningActive) {
        miningSwingPhase += dt * Math.PI * 3;
        const v = (Math.sin(miningSwingPhase) + 1) * 0.5;
        sh.rotation.x = baseRotX - ARM_SHOULDER_FORWARD + v * ARM_SWING_ARC * 0.8;
        sh.rotation.z = baseRotZ + v * ARM_TWIST * 0.7;
        miningActive = false;
      } else {
        sh.rotation.x = baseRotX - ARM_SHOULDER_FORWARD;
        sh.rotation.z = baseRotZ;
        miningSwingPhase = 0;
      }
      // ── Walking bob + yaw sway on the whole arm ──
      // Dialed way down from the previous values — was buzzing at sprint
      // speed. The bob frequency scales with horizontal velocity but is
      // clamped, and the amplitude is half what it used to be.
      if (ctx) {
        const moving = ctx.walkSpeed > 0.5 && ctx.onGround;
        const clampedSpeed = Math.min(ctx.walkSpeed, 6);
        if (moving) walkPhase += clampedSpeed * dt * 0.6;
        else        walkPhase *= 0.92;
        const bobY = moving ? Math.sin(walkPhase * 2) * 0.012 : 0;
        const bobX = moving ? Math.sin(walkPhase)     * 0.010 : 0;
        // Sway from yaw changes — arms lag behind the camera, smoothed.
        const targetSway = Math.max(-0.5, Math.min(0.5, ctx.yawDelta * 18));
        swayZ += (targetSway - swayZ) * Math.min(1, dt * 10);
        group.position.x = groupBaseX + bobX + swayZ * 0.025;
        group.position.y = groupBaseY + bobY;
        group.rotation.z = -swayZ * 0.18;
      } else {
        group.position.x = groupBaseX;
        group.position.y = groupBaseY;
        group.rotation.z = 0;
      }
    },
    setHeldItem(itemId: number) {
      if (itemId === currentHeldId) return;
      currentHeldId = itemId;
      if (heldMesh) {
        heldMesh.parent?.remove(heldMesh);
        const m = (heldMesh as THREE.Mesh).material as THREE.Material | undefined;
        m?.dispose?.();
        heldMesh = null;
      }
      if (itemId === 0) return;
      heldMesh = buildHeldItemModel(itemId, { firstPerson: true });
      // Attach the held mesh to the HAND bone so it tracks the end of the
      // arm regardless of how the shoulder is rotated. Previously parented
      // to the camera group with a fixed offset — with the new shoulder
      // pose (forward = -1.92) the static offset landed at the elbow.
      // The cloned model is scaled ~0.4×, so we counter-scale the held mesh.
      const inv = 1 / (cloned.scale.y || 1);
      heldMesh.scale.set(inv, inv, inv);
      // Offset down the forearm in the hand-bone's local space and tilt for
      // the classic vanilla diagonal. Values are tuneable from the dev panel
      // via window.__armTuner.set("itemX"/"itemY"/.../itemRotZ).
      heldMesh.position.set(ITEM_OFFSET_X, ITEM_OFFSET_Y, ITEM_OFFSET_Z);
      heldMesh.rotation.set(ITEM_ROT_X, ITEM_ROT_Y, ITEM_ROT_Z);
      const parent = (hand as THREE.Object3D | null) ?? group;
      parent.add(heldMesh);
    },
  };
}

// ── Held-item models (shared between FP arm and remote players) ─────────────

/**
 * Build the in-hand mesh for `itemId`. For BLOCKS we build an actual textured
 * cube so the held item reads as a 3D block from any angle (Minecraft 1.8
 * does the same). For ITEMS we build a flat sprite-style plane.
 */
export function buildHeldItemModel(itemId: number, opts: { firstPerson?: boolean } = {}): THREE.Object3D {
  const def = BLOCKS[itemId];
  const isBlock = !!def && !def.crossShape && !def.isWater;
  if (isBlock) return buildHeldBlock(itemId, opts);
  return buildHeldPlane(itemId, opts);
}

function buildHeldPlane(itemId: number, opts: { firstPerson?: boolean } = {}): THREE.Mesh {
  // Try the extruded-sprite path first (looks like MC 1.8 — chunky 3D item
  // from any angle). Falls back to the flat plane if the atlas canvas isn't
  // available yet (preloadAtlas hasn't run).
  const extruded = tryBuildExtrudedItem(itemId, opts);
  if (extruded) return extruded;
  const tile = getItemTile(itemId);
  const [u0, v0, u1, v1] = tileUV(tile);
  const geo = new THREE.PlaneGeometry(opts.firstPerson ? 0.45 : 0.35, opts.firstPerson ? 0.45 : 0.35);
  const uvAttr = geo.getAttribute("uv") as THREE.BufferAttribute;
  const arr = uvAttr.array as Float32Array;
  arr[0] = u0; arr[1] = v1;
  arr[2] = u1; arr[3] = v1;
  arr[4] = u0; arr[5] = v0;
  arr[6] = u1; arr[7] = v0;
  uvAttr.needsUpdate = true;
  const mat = new THREE.MeshBasicMaterial({
    map: getAtlasTexture(),
    transparent: true, alphaTest: 0.5,
    side: THREE.DoubleSide,
    depthTest: !opts.firstPerson,
    depthWrite: !opts.firstPerson,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = opts.firstPerson ? 1001 : 1;
  return mesh;
}

// ── Extruded-sprite items (MC 1.8 look for swords / picks / bows / etc.) ──
//
// Reads the item's atlas tile from the offscreen atlas canvas, then builds a
// voxel mesh: each opaque pixel becomes a thin cube. Only EXPOSED faces are
// emitted so the geometry stays reasonable (~1k tris for a typical tool).
// Vertex colours are baked in so the mesh needs no texture.
const _extrudedCache = new Map<number, THREE.BufferGeometry>();

function tryBuildExtrudedItem(itemId: number, opts: { firstPerson?: boolean } = {}): THREE.Mesh | null {
  const geo = getOrBuildExtrudedGeometry(itemId);
  if (!geo) return null;
  const mat = new THREE.MeshLambertMaterial({
    vertexColors: true,
    // Transparent queue when first-person — see comment in buildHeldBlock.
    transparent: !!opts.firstPerson,
    depthTest: !opts.firstPerson,
    depthWrite: !opts.firstPerson,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = opts.firstPerson ? 1001 : 1;
  return mesh;
}

function getOrBuildExtrudedGeometry(itemId: number): THREE.BufferGeometry | null {
  const cached = _extrudedCache.get(itemId);
  if (cached) return cached;
  const canvas = getAtlasCanvas();
  if (!canvas) return null;
  const tile = getItemTile(itemId);
  const col = tile % ATLAS_COLS, row = Math.floor(tile / ATLAS_COLS);
  const TPX = ATLAS_TILE_PX;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  let pixels: Uint8ClampedArray;
  try {
    pixels = ctx.getImageData(col * TPX, row * TPX, TPX, TPX).data;
  } catch (e) {
    // Could happen if the atlas image isn't from same-origin and tainted
    // the canvas. Fall back to plane.
    return null;
  }

  // 1.8-style proportions: ~0.5 m wide if the sprite uses the whole 16-px
  // grid. Per-pixel size ~0.5/16. Depth is one pixel.
  const PIXEL = 0.5 / TPX;
  const DEPTH = PIXEL * 1.5;
  const offX = -TPX * PIXEL / 2;
  const offY = -TPX * PIXEL / 2;

  const isOpaque = (x: number, y: number) =>
    x >= 0 && x < TPX && y >= 0 && y < TPX &&
    pixels[(y * TPX + x) * 4 + 3] >= 128;

  const positions: number[] = [];
  const colors: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  const pushQuad = (
    ax: number, ay: number, az: number,
    bx: number, by: number, bz: number,
    cx: number, cy: number, cz: number,
    dx: number, dy: number, dz: number,
    nx: number, ny: number, nz: number,
    r: number, g: number, b: number,
  ) => {
    const start = positions.length / 3;
    positions.push(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz);
    for (let i = 0; i < 4; i++) {
      colors.push(r, g, b);
      normals.push(nx, ny, nz);
    }
    indices.push(start, start + 1, start + 2, start, start + 2, start + 3);
  };

  for (let py = 0; py < TPX; py++) {
    for (let px = 0; px < TPX; px++) {
      const i = (py * TPX + px) * 4;
      if (pixels[i + 3] < 128) continue;
      const r = pixels[i] / 255, g = pixels[i + 1] / 255, b = pixels[i + 2] / 255;
      const x0 = offX + px * PIXEL;
      const x1 = x0 + PIXEL;
      const y0 = offY + (TPX - 1 - py) * PIXEL;
      const y1 = y0 + PIXEL;
      const z0 = -DEPTH / 2, z1 = DEPTH / 2;
      // Front + back always visible
      pushQuad(x0,y0,z1, x1,y0,z1, x1,y1,z1, x0,y1,z1, 0,0,1, r,g,b);
      pushQuad(x1,y0,z0, x0,y0,z0, x0,y1,z0, x1,y1,z0, 0,0,-1, r,g,b);
      // Side faces — only when the neighbour pixel is transparent.
      if (!isOpaque(px - 1, py)) pushQuad(x0,y0,z0, x0,y0,z1, x0,y1,z1, x0,y1,z0, -1,0,0, r,g,b);
      if (!isOpaque(px + 1, py)) pushQuad(x1,y0,z1, x1,y0,z0, x1,y1,z0, x1,y1,z1,  1,0,0, r,g,b);
      if (!isOpaque(px, py - 1)) pushQuad(x0,y1,z1, x1,y1,z1, x1,y1,z0, x0,y1,z0,  0,1,0, r,g,b);
      if (!isOpaque(px, py + 1)) pushQuad(x0,y0,z0, x1,y0,z0, x1,y0,z1, x0,y0,z1,  0,-1,0, r,g,b);
    }
  }

  if (positions.length === 0) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color",    new THREE.Float32BufferAttribute(colors, 3));
  geo.setAttribute("normal",   new THREE.Float32BufferAttribute(normals, 3));
  geo.setIndex(indices);
  _extrudedCache.set(itemId, geo);
  return geo;
}

function buildHeldBlock(blockId: number, opts: { firstPerson?: boolean } = {}): THREE.Mesh {
  const def = BLOCKS[blockId];
  const size = opts.firstPerson ? 0.42 : 0.36;
  const geo = new THREE.BoxGeometry(size, size, size);
  // BoxGeometry face order: +X, -X, +Y, -Y, +Z, -Z. Each face has 4 UVs.
  // Default PlaneGeometry-like UV order inside each face: [tl, tr, bl, br].
  const uvAttr = geo.getAttribute("uv") as THREE.BufferAttribute;
  const arr = uvAttr.array as Float32Array;
  for (let f = 0; f < 6; f++) {
    const tileIdx = def.faces[f];
    const [u0, v0, u1, v1] = tileUV(tileIdx);
    const base = f * 8;
    arr[base + 0] = u0; arr[base + 1] = v1;
    arr[base + 2] = u1; arr[base + 3] = v1;
    arr[base + 4] = u0; arr[base + 5] = v0;
    arr[base + 6] = u1; arr[base + 7] = v0;
  }
  uvAttr.needsUpdate = true;
  // Force `transparent: true` for first-person so the mesh joins the
  // transparent queue. Otherwise an opaque held block (e.g. oak plank,
  // dirt, cobblestone) sits in the OPAQUE queue which always renders
  // before water — water then drew on top because the held block had
  // depthWrite off. Transparent queue is sorted by renderOrder, so our
  // 1001 reliably draws after water's 2.
  const mat = new THREE.MeshLambertMaterial({
    map: getAtlasTexture(),
    transparent: opts.firstPerson ? true : (!!def.transparent || !!def.isLeaf),
    alphaTest: (def.transparent || def.isLeaf) ? 0.5 : 0,
    depthTest: !opts.firstPerson,
    depthWrite: !opts.firstPerson,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = opts.firstPerson ? 1001 : 1;
  // Tilt so the front face is angled toward the camera — vanilla look.
  mesh.rotation.set(0.4, 0.7, 0);
  return mesh;
}

/**
 * Attach an item mesh to a remote player's right hand. Returns the mesh so
 * the caller can detach it later.
 */
export function attachHeldItem(playerRoot: THREE.Object3D, itemId: number): THREE.Object3D {
  // Find right-arm bone or fall back to a body offset.
  let armR: THREE.Object3D | null = null;
  playerRoot.traverse((o: any) => {
    if (!armR && (o.name === "ArmR2" || /^arm.*r2$/i.test(o.name))) armR = o;
  });
  const mesh = buildHeldItemModel(itemId, { firstPerson: false });
  if (armR) {
    // Bone-relative offset: hand extends down the bone's local +Y by ~0.3 m
    // in this rig. Tilt 45° so it reads as a held tool from any angle.
    mesh.position.set(0, -0.35, 0);
    mesh.rotation.set(0, 0, 0.7);
    (armR as THREE.Object3D).add(mesh);
  } else {
    // Fallback: float it next to the player's right side.
    mesh.position.set(0.4, 1.1, 0);
    playerRoot.add(mesh);
  }
  return mesh;
}

// ── Bloxity avatar parts (arms / legs / torso / head / hat / back) ────────
//
// Matches the test-game.html flow exactly. Body parts are loaded as GLBs
// from `${CDN}/parts/<dir>/<id><suffix>.glb`, their SkinnedMesh geometry
// is cloned and skinIndex-remapped to OUR cloned skeleton, then assigned
// to the corresponding target mesh's geometry. Hats and back items load
// as OBJ + texture and attach to a bone (Neck1 for hats, Spine2 for back).
const AVATAR_CDN = "https://static.bloxity.io/avatars";
const SLOT_INFO: Record<string, { dir: string; suffix: string; meshName: string }> = {
  head:  { dir: "head",  suffix: "",   meshName: "default_head"  },
  arm_L: { dir: "arms",  suffix: "_L", meshName: "default_arm_L" },
  arm_R: { dir: "arms",  suffix: "_R", meshName: "default_arm_R" },
  leg_L: { dir: "legs",  suffix: "_L", meshName: "default_leg_L" },
  leg_R: { dir: "legs",  suffix: "_R", meshName: "default_leg_R" },
  torso: { dir: "torso", suffix: "",   meshName: "default_torso" },
};

const _partGeometryCache: Map<string, THREE.BufferGeometry> = new Map();
const _hatObjCache: Map<string, THREE.Object3D> = new Map();
const _hatTexCache: Map<string, THREE.Texture> = new Map();

function isEquippedId(id: string | null | undefined): boolean {
  return !!id && id !== "-1" && id !== "undefined" && id.length > 0;
}

/**
 * Swap a body part on `root` to the part identified by `itemId`. If the
 * part can't be loaded (404 / network) we just leave the default mesh in
 * place. Geometry is cached per URL so multiple players wearing the same
 * item only fetch once.
 */
export function swapPart(root: THREE.Object3D, slot: keyof typeof SLOT_INFO, itemId: string | null | undefined) {
  if (!isEquippedId(itemId)) return;
  const info = SLOT_INFO[slot];
  if (!info) return;
  const target = root.getObjectByName(info.meshName) as THREE.SkinnedMesh | THREE.Mesh | null;
  if (!target) return;
  const url = `${AVATAR_CDN}/parts/${info.dir}/${itemId}${info.suffix}.glb`;

  const apply = (sourceGeo: THREE.BufferGeometry, sourceSkeleton: THREE.Skeleton | null) => {
    if ((target as any).isSkinnedMesh && sourceSkeleton) {
      // Remap skinIndex from the source's bone order to our character's.
      const geo = sourceGeo.clone();
      const ourSkel = (target as THREE.SkinnedMesh).skeleton;
      const nameToOursIdx = new Map<string, number>();
      ourSkel.bones.forEach((b, i) => nameToOursIdx.set(b.name, i));
      const remap = new Map<number, number>();
      sourceSkeleton.bones.forEach((b, i) => {
        const oi = nameToOursIdx.get(b.name);
        if (oi !== undefined) remap.set(i, oi);
      });
      const si = geo.getAttribute("skinIndex");
      if (si) {
        const arr = si.array as any;
        for (let i = 0; i < arr.length; i++) {
          const m = remap.get(arr[i]);
          if (m !== undefined) arr[i] = m;
        }
        si.needsUpdate = true;
      }
      target.geometry = geo;
    } else {
      target.geometry = sourceGeo;
    }
  };

  const cached = _partGeometryCache.get(url);
  if (cached) {
    apply(cached, (target as any).isSkinnedMesh ? (target as THREE.SkinnedMesh).skeleton : null);
    return;
  }
  new GLTFLoader().load(url, (gltf) => {
    let source: THREE.Mesh | THREE.SkinnedMesh | null = null;
    gltf.scene.traverse((c: any) => {
      if (!source && (c.isSkinnedMesh || c.isMesh)) source = c;
    });
    if (!source) return;
    _partGeometryCache.set(url, (source as any).geometry);
    apply((source as any).geometry, (source as any).isSkinnedMesh ? (source as any).skeleton : null);
  }, undefined, (err) => console.warn(`[Avatar] swapPart(${slot}) failed`, err));
}

/** Find the head bone in a Bloxity rig. */
function findHeadBone(root: THREE.Object3D): THREE.Object3D | null {
  let b: THREE.Object3D | null = null;
  root.traverse((o) => { if (!b && (o.name === "Neck1" || o.name === "Neck1_leaf")) b = o; });
  return b;
}

/** Find the spine/torso bone for back items. */
function findSpineBone(root: THREE.Object3D): THREE.Object3D | null {
  let b: THREE.Object3D | null = null;
  root.traverse((o) => { if (!b && (o.name === "Spine2" || o.name === "Spine1")) b = o; });
  return b;
}

/** Attach a hat OBJ from the Bloxity CDN to the head bone. Returns the
 *  attached object so the caller can dispose / remove on next change. */
export function loadHat(root: THREE.Object3D, hatId: string | null | undefined): Promise<THREE.Object3D | null> {
  return new Promise((resolve) => {
    if (!isEquippedId(hatId)) { resolve(null); return; }
    const headBone = findHeadBone(root);
    if (!headBone) { resolve(null); return; }
    const url = `${AVATAR_CDN}/items/hats/${hatId}.obj`;
    const tUrl = `${AVATAR_CDN}/textures/hats/${hatId}.png`;
    new OBJLoader().load(url, (obj) => {
      let tex = _hatTexCache.get(tUrl);
      if (!tex) {
        tex = new THREE.TextureLoader().load(tUrl, (t) => {
          t.magFilter = THREE.NearestFilter;
          t.minFilter = THREE.NearestFilter;
          t.colorSpace = THREE.SRGBColorSpace;
          t.needsUpdate = true;
        });
        _hatTexCache.set(tUrl, tex);
      }
      obj.traverse((c: any) => {
        if (c.isMesh) c.material = new THREE.MeshLambertMaterial({ map: tex, transparent: true, alphaTest: 0.5 });
      });
      obj.position.set(0, 0.8, 0);
      headBone.add(obj);
      resolve(obj);
    }, undefined, (err) => { console.warn("[Avatar] hat load failed", err); resolve(null); });
  });
}

/** Same shape as loadHat for back items, attaches to the spine bone. */
export function loadBack(root: THREE.Object3D, backId: string | null | undefined): Promise<THREE.Object3D | null> {
  return new Promise((resolve) => {
    if (!isEquippedId(backId)) { resolve(null); return; }
    const spine = findSpineBone(root);
    if (!spine) { resolve(null); return; }
    const url = `${AVATAR_CDN}/items/back/${backId}.obj`;
    const tUrl = `${AVATAR_CDN}/textures/back/${backId}.png`;
    new OBJLoader().load(url, (obj) => {
      let tex = _hatTexCache.get(tUrl);
      if (!tex) {
        tex = new THREE.TextureLoader().load(tUrl, (t) => {
          t.magFilter = THREE.NearestFilter;
          t.minFilter = THREE.NearestFilter;
          t.colorSpace = THREE.SRGBColorSpace;
          t.needsUpdate = true;
        });
        _hatTexCache.set(tUrl, tex);
      }
      obj.traverse((c: any) => {
        if (c.isMesh) c.material = new THREE.MeshLambertMaterial({ map: tex, transparent: true, alphaTest: 0.5 });
      });
      obj.position.set(0, 0, 0);
      spine.add(obj);
      resolve(obj);
    }, undefined, (err) => { console.warn("[Avatar] back load failed", err); resolve(null); });
  });
}

/**
 * Apply the full Bloxity equipped set to a character. Skin texture +
 * each body-part swap + hat + back. Safe to call repeatedly; geometry
 * cache keeps it cheap.
 */
export interface EquippedSet {
  skinId?: string; hatId?: string; backId?: string;
  headId?: string; armLId?: string; armRId?: string;
  legLId?: string; legRId?: string; torsoId?: string;
}

export function applyEquippedSet(root: THREE.Object3D, eq: EquippedSet) {
  applySkinToCharacter(root, eq.skinId);
  if (isEquippedId(eq.headId))  swapPart(root, "head",  eq.headId);
  if (isEquippedId(eq.armLId))  swapPart(root, "arm_L", eq.armLId);
  if (isEquippedId(eq.armRId))  swapPart(root, "arm_R", eq.armRId);
  if (isEquippedId(eq.legLId))  swapPart(root, "leg_L", eq.legLId);
  if (isEquippedId(eq.legRId))  swapPart(root, "leg_R", eq.legRId);
  if (isEquippedId(eq.torsoId)) swapPart(root, "torso", eq.torsoId);
  // Detach existing hat / back, then attach new ones if equipped.
  const oldHat = (root as any)._hatMesh as THREE.Object3D | undefined;
  if (oldHat) { oldHat.parent?.remove(oldHat); }
  loadHat(root, eq.hatId).then(h => { if (h) (root as any)._hatMesh = h; });
  const oldBack = (root as any)._backMesh as THREE.Object3D | undefined;
  if (oldBack) { oldBack.parent?.remove(oldBack); }
  loadBack(root, eq.backId).then(b => { if (b) (root as any)._backMesh = b; });
}

/** Detach + dispose an item mesh previously created by attachHeldItem. */
export function detachHeldItem(_playerRoot: THREE.Object3D, mesh: THREE.Object3D) {
  mesh.parent?.remove(mesh);
  const m = (mesh as THREE.Mesh).material as THREE.Material | undefined;
  m?.dispose?.();
  ((mesh as THREE.Mesh).geometry as THREE.BufferGeometry | undefined)?.dispose?.();
}

// ── Bloxity skin texture ───────────────────────────────────────────────────
//
// Bloxity ships per-user skin PNGs at static.bloxity.io/avatars/skins/<id>.png
// (note the /avatars/ segment — easy to drop, this is what fixed silent
// 404s that left every player on the default GLB textures). We apply the
// texture as `material.map` on every SkinnedMesh inside the cloned GLB
// rig. Each clone has its own (cloned) materials thanks to isolateMaterials()
// in spawnPlayer/buildFirstPersonArm, so changing one player's skin won't
// leak to anybody else.
const SKIN_CDN = "https://static.bloxity.io/avatars/skins";
const _skinTextureCache: Map<string, THREE.Texture> = new Map();

export function applySkinToCharacter(root: THREE.Object3D, skinId: string | null | undefined) {
  // -1 / undefined / empty → default skin id "0".
  const seg = (skinId && skinId !== "-1" && skinId !== "undefined") ? skinId : "0";
  const url = `${SKIN_CDN}/${seg}.png`;

  const apply = (tex: THREE.Texture) => {
    root.traverse((o: any) => {
      if (!(o.isSkinnedMesh || o.isMesh)) return;
      // Skip the held-item mesh (we don't want to overwrite item textures).
      if (o.userData?.isHeldItem) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m: any) => {
        if (!m) return;
        m.map = tex;
        m.needsUpdate = true;
      });
    });
  };

  const cached = _skinTextureCache.get(url);
  if (cached) { apply(cached); return; }

  new THREE.TextureLoader().load(
    url,
    (tex) => {
      tex.flipY = false;
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      _skinTextureCache.set(url, tex);
      apply(tex);
    },
    undefined,
    (err) => console.warn(`[Skin] failed to load ${url}`, err),
  );
}

/** Build a fallback box-humanoid mesh when the GLB isn't available. */
export function buildFallbackPlayer(): THREE.Group {
  const root = new THREE.Group();
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshLambertMaterial({ color: 0xf5cba7 }));
  head.position.y = 1.5; head.name = "head"; root.add(head);
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.9, 0.3),
    new THREE.MeshLambertMaterial({ color: 0x4a7cff }));
  body.position.y = 0.8; body.name = "body"; root.add(body);
  const legL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.85, 0.25),
    new THREE.MeshLambertMaterial({ color: 0x2a4a8a }));
  legL.position.set(-0.15, 0.35, 0); legL.name = "leg"; root.add(legL);
  const legR = legL.clone(); legR.name = "leg"; legR.position.x = 0.15; root.add(legR);
  return root;
}

/**
 * Build a billboard sprite showing the player's name + optional pfp.
 * The canvas is composed first; if pfp is provided, the image is loaded
 * asynchronously and the canvas texture is refreshed once it arrives.
 */
export function makeNameTag(name: string, pfpUrl?: string): THREE.Sprite {
  // Truncate long names so the sprite doesn't stretch absurdly wide. 14 chars
  // matches Bloxity's max username length and what you'd see in classic MC.
  const trimmed = name.length > 14 ? name.slice(0, 13) + "…" : name;
  const padding = 10;
  const font = "bold 28px 'Segoe UI', sans-serif";
  const pfpSize = 36;
  const measure = document.createElement("canvas").getContext("2d")!;
  measure.font = font;
  const textWidth = Math.ceil(measure.measureText(trimmed).width);
  const hasPfp = !!pfpUrl;
  const leftSpace = hasPfp ? pfpSize + padding : 0;
  const w = Math.max(80, textWidth + padding * 2 + leftSpace);
  const h = 48;
  const canvas = document.createElement("canvas");
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  const drawBase = () => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    // Rounded background
    const r = 8;
    ctx.beginPath();
    ctx.moveTo(r, 0); ctx.lineTo(w - r, 0); ctx.quadraticCurveTo(w, 0, w, r);
    ctx.lineTo(w, h - r); ctx.quadraticCurveTo(w, h, w - r, h);
    ctx.lineTo(r, h); ctx.quadraticCurveTo(0, h, 0, h - r);
    ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.fill();
    ctx.font = font;
    ctx.textBaseline = "middle";
    const textX = padding + leftSpace;
    // Drop shadow then white text
    ctx.fillStyle = "#000";
    ctx.fillText(trimmed, textX + 2, h / 2 + 2);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(trimmed, textX, h / 2);
  };
  drawBase();

  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  // Sprite world size: keep height ~0.32 blocks, width preserves the canvas
  // aspect ratio so the nametag never looks stretched. Cap the total width
  // at 2 blocks so very long names don't take over the screen.
  const baseHeight = 0.32;
  const scaleX = Math.min(baseHeight * (w / h), 2.0);
  sprite.scale.set(scaleX, baseHeight, 1);
  sprite.renderOrder = 999;

  if (hasPfp) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      drawBase();
      const cx = padding + pfpSize / 2, cy = h / 2;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, pfpSize / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, cx - pfpSize / 2, cy - pfpSize / 2, pfpSize, pfpSize);
      ctx.restore();
      ctx.beginPath();
      ctx.arc(cx, cy, pfpSize / 2, 0, Math.PI * 2);
      ctx.strokeStyle = "#e94560";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      tex.needsUpdate = true;
    };
    img.onerror = () => { /* fall back to text-only tag */ };
    img.src = pfpUrl!;
  }
  return sprite;
}

/** Small heart-icon + HP/maxHP badge that floats below an entity's nametag.
 *  Lets you see exactly what state the server thinks an entity is in —
 *  useful for debugging "they're still alive but should be dead" issues. */
export function makeHealthBadge(hp: number, maxHp: number): THREE.Sprite & { updateHp?: (hp: number, maxHp: number) => void } {
  const canvas = document.createElement("canvas");
  canvas.width = 120;
  canvas.height = 30;
  const ctx = canvas.getContext("2d")!;
  const draw = (h: number, m: number) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Background pill
    const w = canvas.width, hh = canvas.height;
    ctx.fillStyle = "rgba(0,0,0,0.7)";
    const r = 8;
    ctx.beginPath();
    ctx.moveTo(r, 0); ctx.lineTo(w - r, 0); ctx.quadraticCurveTo(w, 0, w, r);
    ctx.lineTo(w, hh - r); ctx.quadraticCurveTo(w, hh, w - r, hh);
    ctx.lineTo(r, hh); ctx.quadraticCurveTo(0, hh, 0, hh - r);
    ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.fill();
    // Heart icon
    ctx.fillStyle = h <= 0 ? "#666" : (h < m * 0.25 ? "#ff4040" : "#ff7878");
    ctx.font = "bold 18px sans-serif";
    ctx.textBaseline = "middle";
    ctx.fillText("♥", 8, hh / 2);
    // HP / maxHP text
    ctx.font = "bold 16px 'Courier New', monospace";
    ctx.fillStyle = h <= 0 ? "#888" : "#fff";
    ctx.fillText(`${h}/${m}`, 30, hh / 2 + 1);
  };
  draw(hp, maxHp);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat) as THREE.Sprite & { updateHp?: (hp: number, maxHp: number) => void };
  sprite.scale.set(0.6, 0.15, 1);
  sprite.renderOrder = 999;
  sprite.updateHp = (h, m) => { draw(h, m); tex.needsUpdate = true; };
  return sprite;
}
