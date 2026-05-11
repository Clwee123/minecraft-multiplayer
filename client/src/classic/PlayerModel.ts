import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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
        // Scale to ~1.8m tall regardless of source units. We'll measure on first use.
        const box = new THREE.Box3().setFromObject(_template);
        const size = new THREE.Vector3();
        box.getSize(size);
        if (size.y > 0.01) {
          const scale = 1.8 / size.y;
          _template.scale.setScalar(scale);
        }
        // Make sure materials don't cast/receive shadows (perf)
        _template.traverse((o: any) => {
          if (o.isMesh) {
            o.castShadow = false;
            o.receiveShadow = false;
          }
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

export interface PlayerInstance {
  root: THREE.Group;
  mixer: THREE.AnimationMixer | null;
  walkAction: THREE.AnimationAction | null;
  idleAction: THREE.AnimationAction | null;
}

/** Returns a fresh clone of the player template, plus an AnimationMixer. */
export function spawnPlayer(): PlayerInstance | null {
  if (!_template) return null;
  // SkeletonUtils.clone() handles skinned meshes properly. Import lazily.
  // For simplicity here, use plain clone which works for non-skinned models.
  let root: THREE.Group;
  try {
    // Try skeleton-aware clone if model is skinned
    // @ts-ignore - SkeletonUtils provided by three examples
    const { clone } = require("three/examples/jsm/utils/SkeletonUtils.js");
    root = clone(_template) as THREE.Group;
  } catch {
    root = _template.clone(true);
  }
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
 * Build a billboard sprite showing the player's name above their head.
 * Uses a canvas texture; positioned by the caller (typical y = 2.2).
 */
export function makeNameTag(name: string): THREE.Sprite {
  const padding = 12;
  const font = "bold 36px 'Segoe UI', sans-serif";
  // Measure on an offscreen canvas
  const measure = document.createElement("canvas").getContext("2d")!;
  measure.font = font;
  const textWidth = Math.ceil(measure.measureText(name).width);
  const w = Math.max(64, textWidth + padding * 2);
  const h = 56;
  const canvas = document.createElement("canvas");
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "rgba(0,0,0,0.55)";
  ctx.fillRect(0, 0, w, h);
  ctx.font = font;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000";
  ctx.fillText(name, w / 2 + 2, h / 2 + 2);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(name, w / 2, h / 2);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  // Sprite world size: 1.6 wide, scaled by aspect.
  const scaleX = 1.6 * (w / h) * (h / 56);
  sprite.scale.set(scaleX, 0.45, 1);
  sprite.renderOrder = 999;
  return sprite;
}
