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
import { preloadPlayerModel, buildFirstPersonArm, FirstPersonArm } from "./PlayerModel";
import { BreakHighlight, BreakParticles } from "./BreakEffects";

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
const ambient = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambient);
const sun = new THREE.DirectionalLight(0xfff8e8, 0.85);
sun.position.set(60, 100, 35);
scene.add(sun);
const hemi = new THREE.HemisphereLight(0xb0d8ff, 0x5a7a3a, 0.35);
scene.add(hemi);

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
let breakFx: BreakHighlight;
let breakParticles: BreakParticles;
let tabHeld = false;
let fpArm: FirstPersonArm | null = null;

// Day/night: 0..24000 ticks. 0=morning, 6000=noon, 12000=dusk, 18000=midnight.
// Local clock when offline; mirrored from server state when MP.
let timeOfDay = 6000;
const DAY_LENGTH_SECONDS = 20 * 60; // 20-minute full cycle

// Hunger: 0..20
let hunger = 20;
let hungerTimer = 0;

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
  if (e.code === "Tab") {
    e.preventDefault();
    if (!tabHeld) {
      tabHeld = true;
      const el = document.getElementById("playerListPanel")!;
      el.style.display = "block";
      renderPlayerList();
    }
  }
  if (e.code === "Escape" && craftingUI?.open) {
    craftingUI.hide();
    document.body.requestPointerLock();
  }
  if (e.code === "Escape") {
    const rb = document.getElementById("recipeBook");
    if (rb && rb.style.display === "flex") {
      rb.style.display = "none";
      e.preventDefault();
    }
  }
});
window.addEventListener("keyup", (e) => {
  if (e.code === "Tab") {
    tabHeld = false;
    const el = document.getElementById("playerListPanel");
    if (el) el.style.display = "none";
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

// ── Arm-swing on every click ─ AND special right-click handling ─────────────
let lmbHeld = false;
document.addEventListener("mousedown", (e) => {
  if (!document.pointerLockElement) return;
  if (e.button === 0) {
    lmbHeld = true;
    fpArm?.triggerSwing(1);
  } else if (e.button === 2) {
    fpArm?.triggerSwing(0.65);
  }
});
document.addEventListener("mouseup", (e) => {
  if (e.button === 0) lmbHeld = false;
});

document.addEventListener("mousedown", (e) => {
  if (!document.pointerLockElement) return;
  if (e.button !== 2) return;
  if (!player) return;
  const hit = player.raycast();
  if (!hit) return;
  const block = world.getBlock(hit.x, hit.y, hit.z);
  if (block === 36) {
    craftingUI.show(true);
    e.preventDefault();
    e.stopPropagation();
  } else if (block === 44) {
    // Bed: skip the night if it's night
    if (timeOfDay > 12500 && timeOfDay < 23500) {
      timeOfDay = 0; // dawn
      mp?.sendSleep();
      addChatLine("", "You skip the night…");
    } else {
      addChatLine("", "You can only sleep at night.");
    }
    e.preventDefault();
    e.stopPropagation();
  }
});

// ── Chat ────────────────────────────────────────────────────────────────────
function addChatLine(sender: string, msg: string) {
  if (msg == null) return;
  const text = String(msg).trim();
  if (!text || text === "undefined") return;
  const chat = document.getElementById("chatLog")!;
  const line = document.createElement("div");
  line.className = "chat-line";
  line.innerHTML = `<span class="chat-sender">${escapeHtml(sender)}${sender ? ":" : ""}</span> ${escapeHtml(text)}`;
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
      if (mp?.isConnected()) {
        // Server is source of truth — it will broadcast back to us.
        // Avoid local echo so we don't see duplicates.
        mp.sendChat(msg);
      } else {
        addChatLine(playerName, msg);
      }
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

function renderHunger(h: number) {
  const el = document.getElementById("hunger");
  if (!el) return;
  el.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const d = document.createElement("div");
    d.className = "drumstick";
    if (h >= (i + 1) * 2) d.classList.add("full");
    else if (h >= i * 2 + 1) d.classList.add("half");
    el.appendChild(d);
  }
}

// ── Player list (TAB) ──────────────────────────────────────────────────────
function renderPlayerList() {
  const el = document.getElementById("playerListBody");
  if (!el) return;
  const rows: string[] = [];
  rows.push(`<tr><td>${escapeHtml(playerName)} (you)</td><td>${player?.health ?? 20}</td></tr>`);
  if (mp?.isConnected()) {
    for (const rp of mp.getRemotePlayers()) {
      rows.push(`<tr><td>${escapeHtml(rp.name)}</td><td>${rp.health ?? "?"}</td></tr>`);
    }
  }
  el.innerHTML = rows.join("");
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
    <div><b>HP:</b> ${player.health}/${player.maxHealth}  ·  <b>Hunger:</b> ${hunger}/20</div>
    <div><b>Time:</b> ${Math.floor(timeOfDay)} (${timeOfPhase()})</div>
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

function timeOfPhase() {
  if (timeOfDay < 6000) return "morning";
  if (timeOfDay < 12000) return "afternoon";
  if (timeOfDay < 13000) return "dusk";
  if (timeOfDay < 23000) return "night";
  return "dawn";
}

function facingFromYaw(yaw: number): string {
  const deg = ((yaw * 180 / Math.PI) % 360 + 360) % 360;
  if (deg >= 315 || deg < 45)   return "north (-Z)";
  if (deg >= 45  && deg < 135)  return "west (-X)";
  if (deg >= 135 && deg < 225)  return "south (+Z)";
  return "east (+X)";
}

// ── Day/night cycle ─────────────────────────────────────────────────────────
function applyDayNight() {
  // timeOfDay: 0 dawn → 6000 noon → 12000 dusk → 18000 midnight → 24000 dawn
  // Convert to angle: 0..2PI where noon = top.
  const phase = (timeOfDay / 24000) * Math.PI * 2;
  // Sun goes east→up→west
  const sunAngle = phase - Math.PI / 2;
  const r = 200;
  sun.position.set(Math.cos(sunAngle) * r, Math.sin(sunAngle) * r + 20, 50);

  // Light intensity (1 at noon, 0.05 at midnight)
  const dayness = Math.max(0.05, Math.sin(sunAngle));
  sun.intensity = 0.1 + dayness * 0.9;
  ambient.intensity = 0.25 + dayness * 0.6;
  hemi.intensity = 0.15 + dayness * 0.3;

  // Sky color
  const dayCol = new THREE.Color(0x9bd2ff);
  const dusk   = new THREE.Color(0xff8d4a);
  const night  = new THREE.Color(0x05060f);
  let col: THREE.Color;
  // Smooth blend through dawn/dusk
  if (timeOfDay < 5000)        col = night.clone().lerp(dayCol, timeOfDay / 5000);
  else if (timeOfDay < 12000)  col = dayCol;
  else if (timeOfDay < 13500)  col = dayCol.clone().lerp(dusk, (timeOfDay - 12000) / 1500);
  else if (timeOfDay < 15000)  col = dusk.clone().lerp(night, (timeOfDay - 13500) / 1500);
  else if (timeOfDay < 22500)  col = night;
  else                          col = night.clone().lerp(dayCol, (timeOfDay - 22500) / 1500);

  scene.background = col;
  (scene.fog as THREE.Fog).color.copy(col);
  renderer.setClearColor(col);
}

// ── Boot game ───────────────────────────────────────────────────────────────
async function startGame(serverAddr: string | null) {
  const cfg = MODES[mode];
  document.getElementById("mainMenu")!.style.display = "none";
  const loader = document.getElementById("loadingScreen")!;
  loader.style.display = "flex";
  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Loading textures…";

  await preloadAtlas();
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

  breakFx = new BreakHighlight(scene);
  breakParticles = new BreakParticles(scene);

  // First-person right arm — child of the camera, depth-tested off so it
  // always sits on top of the world. Wait for the GLB so this is reliable;
  // it's fine if it fails (we just skip the arm).
  await preloadPlayerModel().catch(() => {});
  scene.add(camera);
  fpArm = buildFirstPersonArm();
  if (fpArm) camera.add(fpArm.group);

  // Hooks
  player.onBreak = (x, y, z, prevType) => {
    breakParticles.spawn(prevType, x, y, z);
    fpArm?.triggerSwing(1);
    const def = BLOCKS[prevType];
    // Real-Minecraft tool gating: drops only happen if the player held an
    // adequate tool. Without a pickaxe, stone breaks but cobblestone does
    // NOT drop. See Player.canHarvest().
    const eligible = !cfg.isCreative && def && def.drop !== 0 && player.canHarvest(prevType);
    if (eligible) {
      const dropId = def!.drop ?? prevType;
      const dropCount = def!.dropCount ?? 1;
      drops.spawn(dropId, dropCount, x, y, z);
    }
    if (mp?.isConnected()) mp.sendBlockUpdate(x, y, z, 0);
    if (mode === "oneblock" && oneBlockCenter && x === oneBlockCenter.x && y === oneBlockCenter.y && z === oneBlockCenter.z) {
      const next = pickOneBlockNext();
      setTimeout(() => world.setBlock(x, y, z, next), 200);
    }
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
    breakFx.setProgress(p);
  };

  if (cfg.isMultiplayer && serverAddr) {
    (document.getElementById("loadingStatus") as HTMLElement).textContent = `Connecting to ${serverAddr}…`;
    mp = new Multiplayer(scene, playerName);
    mp.onConnected = () => addChatLine("", `Connected as ${playerName}`);
    mp.onDisconnected = () => addChatLine("", "Disconnected from server");
    mp.onError = (err) => addChatLine("", "Connect error: " + err);
    mp.onChat = (sender, msg) => addChatLine(sender, msg);
    mp.onBlockUpdate = (x, y, z, type) => world.setBlock(x, y, z, type);
    mp.onLocalDamage = (d) => player.takeDamage(d);
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
  renderHunger(20);
  const heartsEl = document.getElementById("hearts")!;
  const hungerEl = document.getElementById("hunger")!;
  heartsEl.style.display = cfg.isCreative ? "none" : "flex";
  if (hungerEl) hungerEl.style.display = cfg.isCreative ? "none" : "flex";
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
  let tabRefresh = 0;
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

    // 3D break highlight follows the targeted block
    if (player.lastHit) {
      breakFx.setTarget(player.lastHit.x, player.lastHit.y, player.lastHit.z);
    } else {
      breakFx.setTarget(null);
    }

    streamTimer += dt;
    if (streamTimer >= 0.25) {
      streamTimer = 0;
      world.updateAroundPlayer(player.pos.x, player.pos.z, RENDER_DIST);
    }
    world.rebuildDirty(2, player.pos.x, player.pos.z);

    if (!cfg.isCreative) {
      drops.update(dt, player.pos, inv, (x, y, z) => world.isSolid(x, y, z));
      // Hunger drain
      hungerTimer += dt * (player.sprinting ? 2 : 1);
      if (hungerTimer > 6) {
        hungerTimer = 0;
        if (hunger > 0) hunger--;
        else if (player.health > 0) player.takeDamage(1);
        renderHunger(hunger);
      }
    }
    refreshHotbar();
    tickWater(waterT);
    breakParticles.update(dt, (x, y, z) => world.isSolid(x, y, z));

    // First-person arm: chop continuously while LMB held in survival
    if (fpArm) {
      if (lmbHeld && player.gameMode === "survival" && player.lastHit) {
        fpArm.triggerMineSwing();
      }
      fpArm.update(dt);
    }

    // Day/night
    if (mp?.isConnected() && Number.isFinite(mp.timeOfDay)) {
      timeOfDay = mp.timeOfDay;
    } else {
      timeOfDay = (timeOfDay + (24000 / DAY_LENGTH_SECONDS) * dt) % 24000;
    }
    applyDayNight();

    if (debugOn) updateDebugOverlay(dt, lastFps);

    // TAB list refresh
    if (tabHeld) {
      tabRefresh += dt;
      if (tabRefresh >= 0.5) { tabRefresh = 0; renderPlayerList(); }
    }

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
      mp.update(dt, camera.position);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  loop();
}

const bs = document.getElementById("buildStamp");
if (bs) bs.textContent = `build: ${__BUILD_TIME__}`;
wireMenuButtons();
