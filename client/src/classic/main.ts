declare const __BUILD_TIME__: string;
import * as THREE from "three";
import { preloadAtlas, buildLiveAtlas, updateLiveWater, HOTBAR_BLOCKS, BLOCK_NAMES, BLOCKS, tileUV } from "./Textures";
import { World, SIZE_X, SIZE_Y, SIZE_Z, SEA_LEVEL } from "./World";
import { Player } from "./Player";

// ── Renderer ────────────────────────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87ceeb);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Scene ───────────────────────────────────────────────────────────────────
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.Fog(0x87ceeb, 50, 110);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 500);

// Lights — fixed daytime sky lighting, no day/night cycle
const ambient = new THREE.AmbientLight(0xffffff, 0.65);
scene.add(ambient);
const sun = new THREE.DirectionalLight(0xfff4dd, 0.9);
sun.position.set(50, 100, 30);
scene.add(sun);
const hemi = new THREE.HemisphereLight(0xb0d8ff, 0x5a7a3a, 0.35);
scene.add(hemi);

// ── Game state ──────────────────────────────────────────────────────────────
let world: World;
let player: Player;
let liveAtlas: THREE.CanvasTexture;
let selectedSlot = 0;

function getHeldBlock(): number {
  return HOTBAR_BLOCKS[selectedSlot];
}

// ── Hotbar UI ───────────────────────────────────────────────────────────────
function buildHotbar() {
  const hb = document.getElementById("hotbar")!;
  hb.innerHTML = "";
  HOTBAR_BLOCKS.forEach((blockId, i) => {
    const slot = document.createElement("div");
    slot.className = "hotbar-slot" + (i === selectedSlot ? " active" : "");

    // Block icon — render the +X face tile from the atlas as a small image
    const def = BLOCKS[blockId];
    if (def) {
      // Use the side face for the icon
      const tileIdx = def.faces[0];
      const col = tileIdx % 16;
      const row = Math.floor(tileIdx / 16);
      // Background-position trick: 256px atlas, 16px tiles, scaled to 32px display = 2x scale -> 512px bg-size
      const icon = document.createElement("div");
      icon.className = "slot-icon";
      icon.style.cssText = `
        width:32px;height:32px;
        background-image:url(/terrain_atlas.png);
        background-size:512px 512px;
        background-position: -${col * 32}px -${row * 32}px;
        image-rendering:pixelated;
        image-rendering:-moz-crisp-edges;
      `;
      slot.appendChild(icon);
    }
    const label = document.createElement("span");
    label.className = "slot-num";
    label.textContent = String(i + 1);
    slot.appendChild(label);
    slot.title = BLOCK_NAMES[blockId] || "";
    slot.addEventListener("click", () => selectSlot(i));
    hb.appendChild(slot);
  });
}

function selectSlot(i: number) {
  selectedSlot = i;
  document.querySelectorAll(".hotbar-slot").forEach((el, idx) => {
    el.classList.toggle("active", idx === selectedSlot);
  });
  const bn = document.getElementById("blockName")!;
  bn.textContent = BLOCK_NAMES[HOTBAR_BLOCKS[selectedSlot]] || "";
  bn.style.opacity = "1";
  setTimeout(() => (bn.style.opacity = "0"), 1500);
}

window.addEventListener("keydown", (e) => {
  // 1-9 hotbar
  if (e.code.startsWith("Digit")) {
    const n = parseInt(e.code.slice(5)) - 1;
    if (n >= 0 && n < HOTBAR_BLOCKS.length) selectSlot(n);
  }
});

window.addEventListener("wheel", (e) => {
  if (!document.pointerLockElement) return;
  const dir = e.deltaY > 0 ? 1 : -1;
  let n = selectedSlot + dir;
  if (n < 0) n = HOTBAR_BLOCKS.length - 1;
  if (n >= HOTBAR_BLOCKS.length) n = 0;
  selectSlot(n);
});

// Click anywhere to lock pointer
document.addEventListener("click", () => {
  if (!document.pointerLockElement) document.body.requestPointerLock();
});

// ── Boot ────────────────────────────────────────────────────────────────────
async function main() {
  // Set build stamp
  const bs = document.getElementById("buildStamp");
  if (bs) bs.textContent = `build: ${__BUILD_TIME__}`;

  // Load atlas
  await preloadAtlas();
  liveAtlas = buildLiveAtlas(); // mutable atlas for water animation

  // Build world
  const seed = Math.floor(Math.random() * 100000);
  world = new World(scene, seed);
  world.buildMesh();

  // Create player
  player = new Player(camera, world);
  const [sx, sy, sz] = world.findSpawn();
  player.spawnAt(sx, sy, sz);
  player.getHeldBlock = getHeldBlock;

  // UI
  buildHotbar();
  selectSlot(0);

  // Hide loading
  const loader = document.getElementById("loadingScreen");
  if (loader) loader.style.display = "none";

  // Game loop
  let last = performance.now();
  let waterT = 0;
  function loop() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    waterT += dt;

    player.update(dt);
    updateLiveWater(liveAtlas, waterT);
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  loop();
}

main().catch((err) => {
  console.error(err);
  const loader = document.getElementById("loadingScreen");
  if (loader) loader.innerHTML = `<div style="color:#f88;font-family:monospace;">Error: ${err.message}</div>`;
});
