/**
 * Generate isometric block icons at runtime using an offscreen Three.js
 * renderer. Each block id renders one cube with its real atlas faces from a
 * canonical isometric angle. The rendered canvas is cached as a data URL so
 * we don't re-render on every hotbar refresh.
 *
 * Why this exists: hotbar / inventory icons used to be the side texture of
 * the block flat-pasted from the atlas, which looked exactly like the world
 * face. Players couldn't tell at a glance what a block was. Generating a
 * 3D mini-cube is how vanilla MC builds its inventory icons.
 */
import * as THREE from "three";
import { BLOCKS, tileUV, getAtlasTexture } from "./Textures";

const ICON_SIZE = 64;            // render at 64×64 so it survives downscale
const CUBE_SIZE = 1.4;           // fills the orthographic view

class BlockIconCacheImpl {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.OrthographicCamera | null = null;
  private cube: THREE.Mesh | null = null;
  private cache: Map<number, string> = new Map();

  private init() {
    if (this.renderer) return;
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, preserveDrawingBuffer: true });
    this.renderer.setSize(ICON_SIZE, ICON_SIZE);
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new THREE.Scene();
    // No lights — we render with MeshBasicMaterial (unlit) so the icon
    // shows the texture at full contrast. Face-shading is done manually
    // by darkening the side/right material colours below so it still
    // reads as a 3D cube.
    this.camera = new THREE.OrthographicCamera(-1.0, 1.0, 1.0, -1.0, 0.1, 10);
    this.camera.position.set(1.8, 1.55, 1.8);
    this.camera.lookAt(0, 0, 0);
    this.cube = new THREE.Mesh(new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE));
    this.scene.add(this.cube);
  }

  /** Returns a data-URL PNG for the block. Cached after first render. */
  get(blockId: number): string {
    const cached = this.cache.get(blockId);
    if (cached) return cached;
    const def = BLOCKS[blockId];
    if (!def) return "";
    this.init();
    if (!this.renderer || !this.scene || !this.camera || !this.cube) return "";

    // Build a 6-material array, each face cropped to the block's atlas tile.
    // We clone the shared atlas texture per face so we can set repeat/offset
    // independently (UV transforms on texture matrix avoid touching geometry).
    const atlas = getAtlasTexture();
    const mats: THREE.MeshBasicMaterial[] = [];
    const textures: THREE.Texture[] = [];
    // BoxGeometry face order: +X, -X, +Y, -Y, +Z, -Z (visible faces from
    // the iso angle are +X right, +Y top, +Z front). We manually tint side
    // faces darker so the cube still reads as 3D under an unlit shader.
    const SHADE = [
      0xcfcfcf,  // +X (right) — slight shade
      0xcfcfcf,  // -X (left hidden)
      0xffffff,  // +Y (top — brightest)
      0xa0a0a0,  // -Y (bottom hidden)
      0xe6e6e6,  // +Z (front — between top and right)
      0xe6e6e6,  // -Z (back hidden)
    ];
    for (let f = 0; f < 6; f++) {
      const tileIdx = def.faces[f];
      const [u0, v0, u1, v1] = tileUV(tileIdx);
      const t = atlas.clone();
      t.needsUpdate = true;
      t.repeat.set(u1 - u0, v1 - v0);
      t.offset.set(u0, v0);
      t.magFilter = THREE.NearestFilter;
      t.minFilter = THREE.NearestFilter;
      t.generateMipmaps = false;
      textures.push(t);
      mats.push(new THREE.MeshBasicMaterial({
        map: t,
        color: SHADE[f],
        transparent: !!def.transparent || !!def.isLeaf,
        alphaTest: (def.transparent || def.isLeaf) ? 0.5 : 0,
        side: THREE.FrontSide,
      }));
    }
    this.cube.material = mats;
    this.renderer.render(this.scene, this.camera);
    const dataUrl = this.renderer.domElement.toDataURL("image/png");

    // Dispose per-render textures + materials so we don't leak GPU memory.
    mats.forEach(m => m.dispose());
    textures.forEach(t => t.dispose());

    this.cache.set(blockId, dataUrl);
    return dataUrl;
  }

  invalidate() { this.cache.clear(); }
}

export const blockIconCache = new BlockIconCacheImpl();

/**
 * Should this id use the runtime iso-cube renderer? Blocks (1..49) without
 * an iconTile override get a 3D icon. Items + override-icon blocks (like
 * bed) keep the flat atlas-tile path.
 */
export function shouldRenderAsBlock(id: number): boolean {
  if (id <= 0) return false;
  const def = BLOCKS[id];
  if (!def) return false;
  if (def.iconTile !== undefined) return false;
  if (def.crossShape) return false;
  if (def.isWater) return false; // skip water/lava — flat-tinted is fine
  return true;
}
