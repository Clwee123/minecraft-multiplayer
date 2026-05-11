declare const __BUILD_TIME__: string;
import * as THREE from "three";
import { preloadAtlas, tickWater, BLOCKS, ITEMS, getItemTile, getItemName, isPlaceable, CREATIVE_HOTBAR } from "./Textures";
import { World } from "./World";
import { Player } from "./Player";
import { Multiplayer } from "./Multiplayer";
import { Inventory } from "./Inventory";
import { CraftingUI } from "./CraftingUI";
import { ItemDrops } from "./ItemDrops";
import { MODES, ModeId, buildBedwars, buildParkour, buildOneBlock, pickOneBlockNext } from "./Modes";
import { preloadPlayerModel } from "./PlayerModel";

// ── Renderer / scene ────────────────────────────────────────────────────────
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

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9bd2ff);
scene.fog = new THREE.Fog(0x9bd2ff, 60, 220);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const sun = new THREE.DirectionalLight(0xfff8e8, 0.85);
sun.position.set(60, 100, 35);
scene.add(sun);
scene.add(new THREE.HemisphereLight(0xb0d8ff, 0x5a7a3a, 0.35));

// ── State ───────────────────────────────────────────────────────────────────
let world: World;
let player: Player;
let inv: Inventory;
let craftingUI: CraftingUI;
let drops: ItemDrops;
let mp: Multiplayer | null = null;
let mode: ModeId = "creative_offline";
let playerName = "Player";
let oneBlockCenter: { x: number; y: number; z: number } | null = null;
let debugOn = false;

// ── Main menu ───────────────────────────────────────────────────────────────
function wireMenuButtons() {
  const nameInput = document.getElementById("nameInput") as HTMLInputElement;
  const serverInput = document.getElementById("serverInput") as HTMLInputElement;
  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  serverInput.value = isLocal ? "localhost:8471" : "159.223.140.36";
  const savedName = localStorage.getItem("mc.playerName");
  nameInput.value = savedName ?? ("Player" + Math.floor(Math.random() * 1000));
  document.querySelectorAll<HTMLElement>(".mode-card").forEach(card => {
    card.addEventListener("click", () => {
      const modeId = card.dataset.mode as ModeId;
      if (!modeId || !MODES[modeId]) return;
      playerName = nameInput.value.trim() || "Player";
      localStorage.setItem("mc.playerName", playerName);
      mode = modeId;
      const cfg = MODES[modeId];
      startGame(cfg.isMultiplayer ? serverInput.value.trim() : null);
    });
  });
}

// ── Hotbar UI ───────────────────────────────────────────────────────────────
function buildHotbar() {
  const hb = document.getElementById("hotbar")!;
  hb.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const slot = document.createElement("div");
    slot.className = "hotbar-slot" + (i === inv.selected ? " active" : "");
    const iconWrap = document.createElement("div");
    iconWrap.className = "slot-icon-wrap";
    slot.appendChild(iconWrap);
    const num = document.createElement("span");
    num.className = "slot-num";
    num.textContent = String(i + 1);
    slot.appendChild(num);
    const ct = document.createElement("span");
    ct.className = "slot-count";
    slot.appendChild(ct);
    slot.addEventListener("click", () => selectSlot(i));
    hb.appendChild(slot);
  }
  refreshHotbar();
}

function refreshHotbar() {
  const slots = document.querySelectorAll<HTMLElement>("#hotbar .hotbar-slot");
  slots.forEach((slot, i) => {
    const data = inv.hotbar[i];
    const wrap = slot.querySelector(".slot-icon-wrap") as HTMLElement;
    const ct = slot.querySelector(".slot-count") as HTMLElement;
    if (data.id === 0 || data.count === 0) {
      wrap.innerHTML = "";
      ct.textContent = "";
    } else {
      const tile = getItemTile(data.id);
      const col = tile % 16, row = Math.floor(tile / 16);
      wrap.innerHTML = `<div class="slot-icon" style="
        background-image:url(/terrain_atlas.png?v=5);
        background-size:512px 512px;
        background-position:-${col * 32}px -${row * 32}px;
      "></div>`;
      ct.textContent = data.count > 1 && data.count < 999 ? String(data.count) : "";
    }
    slot.classList.toggle("active", i === inv.selected);
  });
}

function selectSlot(i: number) {
  inv.selectSlot(i);
  refreshHotbar();
  const bn = document.getElementById("blockName")!;
  const id = inv.hotbar[i].id;
  if (id > 0) {
    bn.textContent = getItemName(id);
    bn.style.opacity = "1";
    clearTimeout((bn as any)._t);
    (bn as any)._t = setTimeout(() => (bn.style.opacity = "0"), 1500);
  }
}

window.addEventListener("keydown", (e) => {
  const inField = (document.activeElement as HTMLElement)?.tagName === "INPUT";
  if (inField) return;

  if (e.code.startsWith("Digit")) {
    const n = parseInt(e.code.slice(5)) - 1;
    if (n >= 0 && n < 9) selectSlot(n);
  }
  if (e.code === "KeyE") {
    craftingUI.toggle(false);
    if (craftingUI.open) document.exitPointerLock();
    else document.body.requestPointerLock();
  }
  if (e.code === "KeyP") {
    debugOn = !debugOn;
    const el = document.getElementById("debugOverlay")!;
    el.style.display = debugOn ? "block" : "none";
  }
  if (e.code === "Escape" && craftingUI.open) {
    craftingUI.hide();
    document.body.requestPointerLock();
  }
});

window.addEventListener("wheel", (e) => {
  if (!document.pointerLockElement) return;
  let n = inv.selected + (e.deltaY > 0 ? 1 : -1);
  if (n < 0) n = 8;
  if (n > 8) n = 0;
  selectSlot(n);
});

renderer.domElement.addEventListener("click", () => {
  if (!document.pointerLockElement && !craftingUI?.open) document.body.requestPointerLock();
});

// ── Right-click on crafting table → open 3x3 ─────────────────────────────────
document.addEventListener("mousedown", (e) => {
  if (!document.pointerLockElement) return;
  if (e.button !== 2) return;
  if (!player) return;
  const hit = player.raycast();
  if (!hit) return;
  const block = world.getBlock(hit.x, hit.y, hit.z);
  if (block === 36) {
    // Crafting table → open 3x3 grid
    craftingUI.show(true);
    e.preventDefault();
    e.stopPropagation();
  }
});

// ── Chat ────────────────────────────────────────────────────────────────────
function addChatLine(sender: string, msg: string) {
  const chat = document.getElementById("chatLog")!;
  const line = document.createElement("div");
  line.className = "chat-line";
  line.innerHTML = `<span class="chat-sender">${escapeHtml(sender)}${sender ? ":" : ""}</span> ${escapeHtml(msg)}`;
  chat.appendChild(line);
  while (chat.children.length > 10) chat.removeChild(chat.firstChild!);
  setTimeout(() => line.classList.add("fade"), 6000);
  setTimeout(() => { if (line.parentNode) line.parentNode.removeChild(line); }, 9000);
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
      addChatLine(playerName, msg);
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

// ── Hearts UI ───────────────────────────────────────────────────────────────
function renderHearts(hp: number) {
  const el = document.getElementById("hearts")!;
  el.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    if (hp >= (i + 1) * 2) heart.classList.add("full");
    else if (hp >= i * 2 + 1) heart.classList.add("half");
    el.appendChild(heart);
  }
}

// ── Debug overlay (P key) ───────────────────────────────────────────────────
let _dbgTimer = 0;
function updateDebugOverlay(dt: number, fps: number) {
  _dbgTimer += dt;
  if (_dbgTimer < 0.1) return;
  _dbgTimer = 0;
  const el = document.getElementById("debugOverlay")!;
  const stats = world.getStats();
  const hit = player.lastHit;
  const cx = Math.floor(player.pos.x / 16);
  const cz = Math.floor(player.pos.z / 16);
  const facing = facingFromYaw(player.yaw);
  const blockName = hit ? getItemName(hit.type) : "—";
  el.innerHTML = `
    <div class="dbg-title">Minecraft Web — Debug</div>
    <div><b>FPS:</b> ${fps}</div>
    <div><b>XYZ:</b> ${player.pos.x.toFixed(2)} / ${player.pos.y.toFixed(2)} / ${player.pos.z.toFixed(2)}</div>
    <div><b>Block:</b> ${Math.floor(player.pos.x)} ${Math.floor(player.pos.y)} ${Math.floor(player.pos.z)}</div>
    <div><b>Chunk:</b> ${cx}, ${cz}</div>
    <div><b>Facing:</b> ${facing} (yaw ${(player.yaw * 180 / Math.PI).toFixed(1)}°, pitch ${(player.pitch * 180 / Math.PI).toFixed(1)}°)</div>
    <div><b>Mode:</b> ${player.gameMode}${player.flying ? " · flying" : ""}${player.sprinting ? " · sprinting" : ""}${player.crouching ? " · crouching" : ""}</div>
    <div><b>HP:</b> ${player.health}/${player.maxHealth}</div>
    <div class="dbg-sep">— Targeted Block —</div>
    ${hit ? `
      <div><b>Block:</b> ${blockName} (id ${hit.type})</div>
      <div><b>Pos:</b> ${hit.x}, ${hit.y}, ${hit.z}</div>
    ` : `<div><i>(none)</i></div>`}
    <div class="dbg-sep">— World —</div>
    <div><b>Chunks:</b> ${stats.loaded} loaded · ${stats.meshed} meshed · ${stats.dirty} dirty</div>
    <div><b>Mode:</b> ${mode}</div>
    <div><b>Multiplayer:</b> ${mp?.isConnected() ? "connected" : "offline"}</div>
  `;
}

function facingFromYaw(yaw: number): string {
  // yaw 0 = -Z (north). +PI/2 = -X (west).
  const deg = ((yaw * 180 / Math.PI) % 360 + 360) % 360;
  if (deg >= 315 || deg < 45)   return "north (-Z)";
  if (deg >= 45  && deg < 135)  return "west (-X)";
  if (deg >= 135 && deg < 225)  return "south (+Z)";
  return "east (+X)";
}

// ── Boot game ───────────────────────────────────────────────────────────────
async function startGame(serverAddr: string | null) {
  const cfg = MODES[mode];
  document.getElementById("mainMenu")!.style.display = "none";
  const loader = document.getElementById("loadingScreen")!;
  loader.style.display = "flex";
  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Loading textures…";

  await preloadAtlas();
  // Preload player model in parallel; failure is non-fatal (fallback box)
  preloadPlayerModel().catch(() => {});

  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Generating world…";
  await new Promise(r => setTimeout(r, 30));
  const seed = cfg.isMultiplayer ? 12345 : Math.floor(Math.random() * 100000);
  world = new World(scene, seed, { infinite: cfg.useDefaultWorld });

  let spawnX: number, spawnY: number, spawnZ: number;
  if (mode === "bedwars_mp") {
    const s = buildBedwars(world);
    spawnX = s.spawnX; spawnY = s.spawnY; spawnZ = s.spawnZ;
  } else if (mode === "parkour_mp") {
    const s = buildParkour(world);
    spawnX = s.spawnX; spawnY = s.spawnY; spawnZ = s.spawnZ;
  } else if (mode === "oneblock") {
    const s = buildOneBlock(world);
    spawnX = s.spawnX; spawnY = s.spawnY; spawnZ = s.spawnZ;
    oneBlockCenter = { x: 128, y: 40, z: 128 };
  } else {
    const s = world.findSpawn();
    spawnX = s[0]; spawnY = s[1]; spawnZ = s[2];
    world.updateAroundPlayer(spawnX, spawnZ, 5);
  }

  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Building meshes…";
  await new Promise(r => setTimeout(r, 30));
  world.buildAllDirtyNow();

  inv = new Inventory(cfg.isCreative ? "creative" : "survival");
  if (cfg.hotbar) {
    cfg.hotbar.forEach((id, i) => { inv.hotbar[i] = { id, count: cfg.isCreative ? 999 : 64 }; });
  }

  player = new Player(camera, world);
  player.inv = inv;
  player.setGameMode(cfg.isCreative ? "creative" : "survival");
  player.spawnAt(spawnX, spawnY, spawnZ);

  drops = new ItemDrops(scene);
  craftingUI = new CraftingUI(inv);
  craftingUI.onCraft = () => refreshHotbar();
  craftingUI.onClose = () => {
    refreshHotbar();
    setTimeout(() => document.body.requestPointerLock(), 50);
  };

  // Hooks
  player.onBreak = (x, y, z, prevType) => {
    const def = BLOCKS[prevType];
    if (!cfg.isCreative && def && def.drop !== 0) {
      const dropId = def.drop ?? prevType;
      const dropCount = def.dropCount ?? 1;
      drops.spawn(dropId, dropCount, x, y, z);
    }
    if (mp?.isConnected()) mp.sendBlockUpdate(x, y, z, 0);
    // OneBlock respawn
    if (mode === "oneblock" && oneBlockCenter && x === oneBlockCenter.x && y === oneBlockCenter.y && z === oneBlockCenter.z) {
      const next = pickOneBlockNext();
      setTimeout(() => world.setBlock(x, y, z, next), 200);
    }
    // Water flow into the broken cell
    const filled = world.propagateWater(x, y, z);
    if (filled.length > 0 && mp?.isConnected()) {
      for (const c of filled) mp.sendBlockUpdate(c.x, c.y, c.z, 7);
    }
  };
  player.onPlace = (x, y, z, type) => {
    if (mp?.isConnected()) mp.sendBlockUpdate(x, y, z, type);
  };
  player.onHealthChange = (hp) => renderHearts(hp);
  player.onBreakProgress = (p) => {
    const el = document.getElementById("breakProgress")!;
    if (p > 0) {
      el.style.display = "block";
      el.style.opacity = String(0.4 + p * 0.6);
      el.style.transform = `translate(-50%,-50%) scale(${0.4 + p * 0.6})`;
    } else {
      el.style.display = "none";
    }
  };

  if (cfg.isMultiplayer && serverAddr) {
    (document.getElementById("loadingStatus") as HTMLElement).textContent = `Connecting to ${serverAddr}…`;
    mp = new Multiplayer(scene, playerName);
    mp.onConnected = () => addChatLine("", `Connected as ${playerName}`);
    mp.onDisconnected = () => addChatLine("", "Disconnected from server");
    mp.onError = (err) => addChatLine("", "Connect error: " + err);
    mp.onChat = (sender, msg) => addChatLine(sender, msg);
    mp.onBlockUpdate = (x, y, z, type) => world.setBlock(x, y, z, type);
    try {
      await mp.connect(serverAddr, cfg.isCreative ? "creative" : "survival");
    } catch (e) {
      addChatLine("", "Could not connect, playing offline");
      console.error(e);
      mp = null;
    }
  }

  buildHotbar();
  selectSlot(0);
  renderHearts(cfg.isCreative ? 20 : player.health);
  const heartsEl = document.getElementById("hearts")!;
  heartsEl.style.display = cfg.isCreative ? "none" : "flex";
  document.getElementById("modeLabel")!.textContent = cfg.label;

  loader.style.display = "none";
  document.getElementById("ingameUI")!.style.display = "block";

  // Game loop
  let last = performance.now();
  let waterT = 0;
  let mpSendTimer = 0;
  let frames = 0;
  let fpsTimer = 0;
  let lastFps = 60;
  let streamTimer = 0;
  const RENDER_DIST = 5;

  function loop() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    waterT += dt;
    frames++;
    fpsTimer += dt;
    if (fpsTimer >= 1) {
      lastFps = frames;
      const fpsEl = document.getElementById("fps");
      const stats = world.getStats();
      if (fpsEl) fpsEl.textContent = `${frames} fps · ${stats.meshed} chunks`;
      frames = 0;
      fpsTimer = 0;
    }

    player.update(dt);

    streamTimer += dt;
    if (streamTimer >= 0.25) {
      streamTimer = 0;
      world.updateAroundPlayer(player.pos.x, player.pos.z, RENDER_DIST);
    }
    world.rebuildDirty(2, player.pos.x, player.pos.z);

    if (!cfg.isCreative) drops.update(dt, player.pos, inv, (x, y, z) => world.isSolid(x, y, z));
    refreshHotbar();
    tickWater(waterT);

    if (debugOn) updateDebugOverlay(dt, lastFps);

    if (player.pos.y < -10) {
      if (cfg.isCreative) {
        player.spawnAt(spawnX, spawnY, spawnZ);
      } else {
        player.takeDamage(20);
        player.spawnAt(spawnX, spawnY, spawnZ);
      }
    }

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

const bs = document.getElementById("buildStamp");
if (bs) bs.textContent = `build: ${__BUILD_TIME__}`;
wireMenuButtons();
