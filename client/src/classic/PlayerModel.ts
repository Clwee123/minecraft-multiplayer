import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone as skeletonClone } from "three/examples/jsm/utils/SkeletonUtils.js";
import { tileUV, getItemTile, getAtlasTexture } from "./Textures";

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

const ARM_OFFSET = new THREE.Vector3(0.35, -0.35, -0.55);
const ARM_SHOULDER_FORWARD = 1.25; // radians, rotates arm to point forward
const ARM_SWING_ARC = 1.6;          // radians at peak swing
const ARM_TWIST = 0.25;             // a touch of Z-axis roll during swing

export interface FirstPersonArm {
  /** Add this to the camera (camera.add(arm.group)). */
  group: THREE.Group;
  /** Trigger a single swing (0..1 animates over ~250 ms). */
  triggerSwing(strength?: number): void;
  /** Trigger a mining swing — repeats while called continuously. */
  triggerMineSwing(): void;
  /** Advance animation. */
  update(dt: number): void;
  /** Swap the item shown in the hand (0 = empty hand, no item mesh). */
  setHeldItem(itemId: number): void;
}

export function buildFirstPersonArm(): FirstPersonArm | null {
  if (!_template) return null;
  // Same SkeletonUtils story as spawnPlayer — must do a skeleton-aware clone.
  const cloned = skeletonClone(_template) as THREE.Object3D;

  // Own materials so depthTest=false doesn't leak to remote players.
  isolateMaterials(cloned, { transparent: true, depthTest: false, renderOrder: 1000 });
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

  // Find right-shoulder bone for swinging.
  let shoulder: THREE.Object3D | null = null;
  cloned.traverse((o: any) => {
    if (!shoulder && (o.name === "ArmR1" || /^arm.*r1$/i.test(o.name))) shoulder = o;
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

  let swingT = 0;        // 0..1, decays over time
  let swingStrength = 1;
  let miningSwingPhase = 0; // continuous angle for the chop loop
  let miningActive = false;
  let heldMesh: THREE.Object3D | null = null;
  let currentHeldId = 0;

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
    update(dt: number) {
      if (!shoulder) return;
      const sh = shoulder as THREE.Object3D;
      // One-shot swing
      if (swingT > 0) {
        const eased = Math.sin((1 - swingT) * Math.PI); // 0→1→0
        sh.rotation.x = baseRotX - ARM_SHOULDER_FORWARD + eased * ARM_SWING_ARC * swingStrength;
        sh.rotation.z = baseRotZ + eased * ARM_TWIST * swingStrength;
        swingT = Math.max(0, swingT - dt * 4); // ~0.25s total
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
    },
    setHeldItem(itemId: number) {
      if (itemId === currentHeldId) return;
      currentHeldId = itemId;
      // Tear down old
      if (heldMesh) {
        heldMesh.parent?.remove(heldMesh);
        const m = (heldMesh as THREE.Mesh).material as THREE.Material | undefined;
        m?.dispose?.();
        ((heldMesh as THREE.Mesh).geometry as THREE.BufferGeometry | undefined)?.dispose?.();
        heldMesh = null;
      }
      if (itemId === 0) return;
      heldMesh = buildHeldItemModel(itemId, { firstPerson: true });
      // Attach to the cloned root so it stays anchored at the hand position.
      // The hand offset from the shoulder is ~0.6 m forward and 0.4 m down
      // after our ARM_SHOULDER_FORWARD rotation; the offsets below were
      // tuned visually.
      heldMesh.position.set(0.05, -0.25, -0.45);
      heldMesh.rotation.set(-0.3, -0.3, 0.5);
      cloned.add(heldMesh);
    },
  };
}

// ── Held-item models (shared between FP arm and remote players) ─────────────

/**
 * Build a flat sprite-style item icon usable as a held item. The tile UVs
 * are baked into the geometry so we don't need a per-instance material set.
 * In MC pre-1.13 held items rendered as thin slabs; we do a single quad.
 */
export function buildHeldItemModel(itemId: number, opts: { firstPerson?: boolean } = {}): THREE.Mesh {
  const tile = getItemTile(itemId);
  const [u0, v0, u1, v1] = tileUV(tile);
  const geo = new THREE.PlaneGeometry(opts.firstPerson ? 0.45 : 0.35, opts.firstPerson ? 0.45 : 0.35);
  // PlaneGeometry UV order: [tl, tr, bl, br] in (col, row) → indices 0..7
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

/** Detach + dispose an item mesh previously created by attachHeldItem. */
export function detachHeldItem(_playerRoot: THREE.Object3D, mesh: THREE.Object3D) {
  mesh.parent?.remove(mesh);
  const m = (mesh as THREE.Mesh).material as THREE.Material | undefined;
  m?.dispose?.();
  ((mesh as THREE.Mesh).geometry as THREE.BufferGeometry | undefined)?.dispose?.();
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
