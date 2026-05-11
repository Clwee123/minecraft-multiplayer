declare const __BUILD_TIME__: string;
import * as THREE from "three";
import { preloadAtlas, tickWater, HOTBAR_BLOCKS, BLOCK_NAMES, BLOCKS } from "./Textures";
import { World, SIZE_Y } from "./World";
import { Player } from "./Player";
import { Multiplayer } from "./Multiplayer";

// ── Renderer ────────────────────────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x9bd2ff);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Scene ───────────────────────────────────────────────────────────────────
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9bd2ff);
scene.fog = new THREE.Fog(0x9bd2ff, 60, 180);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);

// Lights — fixed daytime
scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const sun = new THREE.DirectionalLight(0xfff8e8, 0.85);
sun.position.set(60, 100, 35);
scene.add(sun);
scene.add(new THREE.HemisphereLight(0xb0d8ff, 0x5a7a3a, 0.35));

// ── Game state ──────────────────────────────────────────────────────────────
let world: World;
let player: Player;
let mp: Multiplayer | null = null;
let selectedSlot = 0;
let isMultiplayer = false;
let playerName = "Player";

function getHeldBlock(): number {
  return HOTBAR_BLOCKS[selectedSlot];
}

// ── Main menu ───────────────────────────────────────────────────────────────
function showMainMenu() {
  const menu = document.getElementById("mainMenu")!;
  menu.style.display = "flex";
  document.getElementById("ingameUI")!.style.display = "none";
}

function hideMainMenu() {
  const menu = document.getElementById("mainMenu")!;
  menu.style.display = "none";
  document.getElementById("ingameUI")!.style.display = "block";
}

function wireMenuButtons() {
  const btnSP = document.getElementById("btnSingleplayer")!;
  const btnMP = document.getElementById("btnMultiplayer")!;
  const serverRow = document.getElementById("serverRow")!;
  const btnPlay = document.getElementById("btnPlay")!;
  const nameInput = document.getElementById("nameInput") as HTMLInputElement;
  const serverInput = document.getElementById("serverInput") as HTMLInputElement;

  let mode: "sp" | "mp" = "sp";
  btnSP.addEventListener("click", () => {
    mode = "sp";
    btnSP.classList.add("selected"); btnMP.classList.remove("selected");
    serverRow.style.display = "none";
  });
  btnMP.addEventListener("click", () => {
    mode = "mp";
    btnMP.classList.add("selected"); btnSP.classList.remove("selected");
    serverRow.style.display = "flex";
  });

  // Default server: based on hostname
  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  serverInput.value = isLocal ? "localhost:8471" : "159.223.140.36";

  // Pre-fill name
  const savedName = localStorage.getItem("mc.playerName");
  if (savedName) nameInput.value = savedName;
  else nameInput.value = "Player" + Math.floor(Math.random() * 1000);

  btnPlay.addEventListener("click", () => {
    playerName = nameInput.value.trim() || "Player";
    localStorage.setItem("mc.playerName", playerName);
    isMultiplayer = mode === "mp";
    if (isMultiplayer) {
      startGame(serverInput.value.trim());
    } else {
      startGame(null);
    }
  });
}

// ── Hotbar ──────────────────────────────────────────────────────────────────
function buildHotbar() {
  const hb = document.getElementById("hotbar")!;
  hb.innerHTML = "";
  HOTBAR_BLOCKS.forEach((blockId, i) => {
    const slot = document.createElement("div");
    slot.className = "hotbar-slot" + (i === selectedSlot ? " active" : "");

    const def = BLOCKS[blockId];
    if (def) {
      const tileIdx = def.faces[0];
      const col = tileIdx % 16;
      const row = Math.floor(tileIdx / 16);
      const icon = document.createElement("div");
      icon.className = "slot-icon";
      icon.style.cssText = `
        width:32px;height:32px;
        background-image:url(/terrain_atlas.png?v=2);
        background-size:512px 512px;
        background-position:-${col * 32}px -${row * 32}px;
        image-rendering:pixelated;
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

renderer.domElement.addEventListener("click", () => {
  if (!document.pointerLockElement) document.body.requestPointerLock();
});

// ── Chat ────────────────────────────────────────────────────────────────────
function addChatLine(sender: string, msg: string) {
  const chat = document.getElementById("chatLog")!;
  const line = document.createElement("div");
  line.className = "chat-line";
  line.innerHTML = `<span class="chat-sender">${escapeHtml(sender)}:</span> ${escapeHtml(msg)}`;
  chat.appendChild(line);
  while (chat.children.length > 8) chat.removeChild(chat.firstChild!);
  setTimeout(() => line.classList.add("fade"), 5000);
  setTimeout(() => { if (line.parentNode) line.parentNode.removeChild(line); }, 8000);
}
function escapeHtml(s: string) { return s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"} as any)[c]); }

const chatInput = document.getElementById("chatInput") as HTMLInputElement;
window.addEventListener("keydown", (e) => {
  if (e.code === "KeyT" && !chatInput.matches(":focus") && document.pointerLockElement) {
    document.exitPointerLock();
    chatInput.style.display = "block";
    chatInput.focus();
    e.preventDefault();
  } else if (e.code === "Enter" && chatInput.matches(":focus")) {
    const msg = chatInput.value.trim();
    if (msg) {
      if (mp?.isConnected()) mp.sendChat(msg);
      else addChatLine(playerName, msg);
    }
    chatInput.value = "";
    chatInput.style.display = "none";
    chatInput.blur();
    e.preventDefault();
  } else if (e.code === "Escape" && chatInput.matches(":focus")) {
    chatInput.value = "";
    chatInput.style.display = "none";
    chatInput.blur();
  }
});

// ── Boot ────────────────────────────────────────────────────────────────────
async function startGame(serverAddr: string | null) {
  const menu = document.getElementById("mainMenu")!;
  menu.style.display = "none";
  document.getElementById("loadingScreen")!.style.display = "flex";
  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Loading textures…";

  // Load atlas
  await preloadAtlas();

  // Build world
  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Generating world…";
  await new Promise(r => setTimeout(r, 30)); // let UI update
  const seed = isMultiplayer ? 12345 : Math.floor(Math.random() * 100000);
  world = new World(scene, seed);

  // Build all chunks (this is the expensive part)
  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Building meshes…";
  await new Promise(r => setTimeout(r, 30));
  world.buildAllChunks();

  // Create player
  player = new Player(camera, world);
  const [sx, sy, sz] = world.findSpawn();
  player.spawnAt(sx, sy, sz);
  player.getHeldBlock = getHeldBlock;

  // Wire player events
  player.onBreak = (x, y, z) => {
    if (mp?.isConnected()) mp.sendBlockUpdate(x, y, z, 0);
  };
  player.onPlace = (x, y, z, type) => {
    if (mp?.isConnected()) mp.sendBlockUpdate(x, y, z, type);
  };

  // Multiplayer
  if (isMultiplayer && serverAddr) {
    (document.getElementById("loadingStatus") as HTMLElement).textContent = "Connecting to server…";
    const proto = location.protocol === "https:" ? "wss" : "ws";
    const url = serverAddr.includes("://") ? serverAddr : `${proto}://${serverAddr}`;
    mp = new Multiplayer(scene, playerName);
    mp.onConnected = () => addChatLine("", `Connected as ${playerName}`);
    mp.onDisconnected = () => addChatLine("", "Disconnected from server");
    mp.onChat = (sender, msg) => addChatLine(sender, msg);
    mp.onBlockUpdate = (x, y, z, type) => {
      // Skip our own updates (they're already applied locally)
      world.setBlock(x, y, z, type);
    };
    try {
      await mp.connect(url);
    } catch (e) {
      addChatLine("", "Could not connect, playing offline");
      mp = null;
    }
  }

  buildHotbar();
  selectSlot(0);

  document.getElementById("loadingScreen")!.style.display = "none";
  document.getElementById("ingameUI")!.style.display = "block";

  // Game loop
  let last = performance.now();
  let waterT = 0;
  let mpSendTimer = 0;
  let frames = 0;
  let fpsTimer = 0;

  function loop() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    waterT += dt;
    frames++;
    fpsTimer += dt;
    if (fpsTimer >= 1) {
      const fpsEl = document.getElementById("fps");
      if (fpsEl) fpsEl.textContent = `${frames} fps`;
      frames = 0;
      fpsTimer = 0;
    }

    player.update(dt);
    world.rebuildDirty(4);
    tickWater(waterT);

    // MP sync at 20 Hz
    if (mp?.isConnected()) {
      mpSendTimer += dt;
      if (mpSendTimer >= 0.05) {
        mpSendTimer = 0;
        mp.sendMove(player.pos.x, player.pos.y, player.pos.z, player.yaw, player.pitch);
      }
      mp.update(dt);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  loop();
}

// Set build stamp + entry
const bs = document.getElementById("buildStamp");
if (bs) bs.textContent = `build: ${__BUILD_TIME__}`;
wireMenuButtons();
