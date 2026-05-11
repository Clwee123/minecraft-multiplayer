declare const __BUILD_TIME__: string;
import * as THREE from "three";
import { preloadAtlas, tickWater, BLOCKS, ITEMS, getItemTile, getItemName, isPlaceable, CREATIVE_HOTBAR } from "./Textures";
import { World } from "./World";
import { Player } from "./Player";
import { Multiplayer } from "./Multiplayer";
import { Inventory, RECIPES, craft, getCraftable } from "./Inventory";
import { ItemDrops } from "./ItemDrops";
import { MODES, ModeId, buildBedwars, buildParkour, buildOneBlock, pickOneBlockNext } from "./Modes";

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
let drops: ItemDrops;
let mp: Multiplayer | null = null;
let mode: ModeId = "creative_offline";
let playerName = "Player";
let oneBlockCenter: { x: number; y: number; z: number } | null = null;

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
    slot.dataset.idx = String(i);
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
        background-image:url(/terrain_atlas.png?v=4);
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
  if ((document.activeElement as HTMLElement)?.tagName === "INPUT") return;
  if (e.code.startsWith("Digit")) {
    const n = parseInt(e.code.slice(5)) - 1;
    if (n >= 0 && n < 9) selectSlot(n);
  }
  if (e.code === "KeyE") {
    toggleInventory();
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
  if (!document.pointerLockElement && !inventoryOpen) document.body.requestPointerLock();
});

// ── Inventory + crafting UI ─────────────────────────────────────────────────
let inventoryOpen = false;
function toggleInventory() {
  inventoryOpen = !inventoryOpen;
  const panel = document.getElementById("invPanel")!;
  panel.style.display = inventoryOpen ? "flex" : "none";
  if (inventoryOpen) {
    document.exitPointerLock();
    renderInventory();
  } else {
    document.body.requestPointerLock();
  }
}

function renderInventory() {
  const main = document.getElementById("invMain")!;
  main.innerHTML = "";
  for (let i = 0; i < 27; i++) {
    const s = inv.main[i];
    main.appendChild(makeInvSlotEl(s, false));
  }
  const hotbarRow = document.getElementById("invHotbar")!;
  hotbarRow.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const s = inv.hotbar[i];
    hotbarRow.appendChild(makeInvSlotEl(s, false));
  }
  // Crafting
  const recipes = document.getElementById("invCrafting")!;
  recipes.innerHTML = "";
  // Determine if standing near a crafting table
  const px = Math.floor(player.pos.x), pz = Math.floor(player.pos.z), py = Math.floor(player.pos.y);
  let hasTable = false;
  for (let dx = -2; dx <= 2 && !hasTable; dx++)
    for (let dy = -1; dy <= 2 && !hasTable; dy++)
      for (let dz = -2; dz <= 2 && !hasTable; dz++)
        if (world.getBlock(px + dx, py + dy, pz + dz) === 36) hasTable = true;
  const craftable = getCraftable(inv, hasTable);
  const title = document.createElement("div");
  title.style.cssText = "font-size:12px;color:#fff;margin-bottom:6px;font-family:monospace;";
  title.textContent = hasTable ? "Crafting (full)" : "Crafting (2×2, stand near a table for more)";
  recipes.appendChild(title);
  if (craftable.length === 0) {
    const none = document.createElement("div");
    none.style.cssText = "font-size:11px;color:#bbb;font-family:monospace;font-style:italic;";
    none.textContent = "Nothing to craft yet";
    recipes.appendChild(none);
  }
  for (const r of craftable) {
    const row = document.createElement("div");
    row.className = "recipe-row";
    row.title = r.ingredients.map(i => `${i.count}× ${getItemName(i.id)}`).join(" + ");
    const tile = getItemTile(r.result);
    const col = tile % 16, rrr = Math.floor(tile / 16);
    row.innerHTML = `
      <div class="recipe-icon" style="
        background-image:url(/terrain_atlas.png?v=4);
        background-size:512px 512px;
        background-position:-${col * 32}px -${rrr * 32}px;"></div>
      <div class="recipe-label">
        <div class="recipe-name">${getItemName(r.result)} ×${r.count}</div>
        <div class="recipe-ingredients">${r.ingredients.map(i => `${i.count}× ${getItemName(i.id)}`).join(" · ")}</div>
      </div>
    `;
    row.addEventListener("click", () => {
      if (craft(inv, r)) {
        renderInventory();
        refreshHotbar();
      }
    });
    recipes.appendChild(row);
  }
}

function makeInvSlotEl(s: { id: number; count: number }, _isHotbar: boolean): HTMLElement {
  const el = document.createElement("div");
  el.className = "inv-slot";
  if (s.id === 0 || s.count === 0) {
    el.innerHTML = "";
  } else {
    const tile = getItemTile(s.id);
    const col = tile % 16, row = Math.floor(tile / 16);
    el.innerHTML = `
      <div class="slot-icon" style="
        background-image:url(/terrain_atlas.png?v=4);
        background-size:512px 512px;
        background-position:-${col * 32}px -${row * 32}px;
      "></div>
      <span class="slot-count">${s.count > 1 && s.count < 999 ? s.count : ""}</span>
    `;
    el.title = getItemName(s.id);
  }
  return el;
}

// ── Health / hunger HUD ─────────────────────────────────────────────────────
function renderHearts(hp: number) {
  const el = document.getElementById("hearts")!;
  el.innerHTML = "";
  const total = 10;
  for (let i = 0; i < total; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    const filled = hp >= (i + 1) * 2;
    const half = !filled && hp >= i * 2 + 1;
    heart.classList.toggle("full", filled);
    heart.classList.toggle("half", half);
    el.appendChild(heart);
  }
}

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
  } else if (e.code === "Escape" && inventoryOpen) {
    toggleInventory();
  }
});

// ── Boot game ───────────────────────────────────────────────────────────────
async function startGame(serverAddr: string | null) {
  const cfg = MODES[mode];
  document.getElementById("mainMenu")!.style.display = "none";
  const loader = document.getElementById("loadingScreen")!;
  loader.style.display = "flex";
  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Loading textures…";

  await preloadAtlas();

  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Generating world…";
  await new Promise(r => setTimeout(r, 30));
  const seed = cfg.isMultiplayer ? 12345 : Math.floor(Math.random() * 100000);
  // Infinite chunk streaming for survival/creative; static maps for the rest
  world = new World(scene, seed, { infinite: cfg.useDefaultWorld });

  // Custom mode worlds
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
    // Survival/Creative: find a grass spawn near origin
    const s = world.findSpawn();
    spawnX = s[0]; spawnY = s[1]; spawnZ = s[2];
    // Stream chunks around the spawn so the first frame isn't empty
    world.updateAroundPlayer(spawnX, spawnZ, 5);
  }

  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Building meshes…";
  await new Promise(r => setTimeout(r, 30));
  // Build all queued chunks now so the player doesn't spawn into emptiness
  world.buildAllDirtyNow();

  // Inventory
  inv = new Inventory(cfg.isCreative ? "creative" : "survival");
  if (cfg.hotbar) {
    cfg.hotbar.forEach((id, i) => { inv.hotbar[i] = { id, count: cfg.isCreative ? 999 : 64 }; });
  }

  // Player
  player = new Player(camera, world);
  player.inv = inv;
  player.setGameMode(cfg.isCreative ? "creative" : "survival");
  player.spawnAt(spawnX, spawnY, spawnZ);

  // Drops
  drops = new ItemDrops(scene);

  // Hooks
  player.onBreak = (x, y, z, prevType) => {
    const def = BLOCKS[prevType];
    // Drop item for survival
    if (!cfg.isCreative && def && def.drop !== 0) {
      const dropId = def.drop ?? prevType;
      const dropCount = def.dropCount ?? 1;
      drops.spawn(dropId, dropCount, x, y, z);
    }
    if (mp?.isConnected()) mp.sendBlockUpdate(x, y, z, 0);
    // OneBlock respawn
    if (mode === "oneblock" && oneBlockCenter && x === oneBlockCenter.x && y === oneBlockCenter.y && z === oneBlockCenter.z) {
      const next = pickOneBlockNext();
      setTimeout(() => {
        world.setBlock(x, y, z, next);
      }, 200);
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

  // Multiplayer
  if (cfg.isMultiplayer && serverAddr) {
    (document.getElementById("loadingStatus") as HTMLElement).textContent = `Connecting to ${serverAddr}…`;
    mp = new Multiplayer(scene, playerName);
    mp.onConnected = () => addChatLine("", `✔ Connected as ${playerName}`);
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

  // UI setup
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
  let streamTimer = 0;
  const RENDER_DIST = 5; // chunks (= 80 blocks)

  function loop() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    waterT += dt;
    frames++;
    fpsTimer += dt;
    if (fpsTimer >= 1) {
      const fpsEl = document.getElementById("fps");
      const stats = world.getStats();
      if (fpsEl) fpsEl.textContent = `${frames} fps · ${stats.meshed} chunks`;
      frames = 0;
      fpsTimer = 0;
    }

    player.update(dt);

    // Stream chunks around player (infinite worlds only). Throttle to 4x/sec.
    streamTimer += dt;
    if (streamTimer >= 0.25) {
      streamTimer = 0;
      world.updateAroundPlayer(player.pos.x, player.pos.z, RENDER_DIST);
    }
    // Mesh up to 2 dirty chunks per frame, nearest-first
    world.rebuildDirty(2, player.pos.x, player.pos.z);

    if (!cfg.isCreative) drops.update(dt, player.pos, inv, (x, y, z) => world.isSolid(x, y, z));
    refreshHotbar();
    tickWater(waterT);

    // Void fall guard
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

// Build stamp + wire menu
const bs = document.getElementById("buildStamp");
if (bs) bs.textContent = `build: ${__BUILD_TIME__}`;
wireMenuButtons();
