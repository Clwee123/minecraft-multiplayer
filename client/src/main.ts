import * as THREE from "three";
import { World }              from "./World";
import { Player, GameMode }   from "./Player";
import { MultiplayerManager } from "./MultiplayerManager";
import { MobManager }         from "./MobManager";
import { UI }                 from "./UI";
import { HOTBAR_BLOCKS }      from "./blocks";

// ── Renderer ─────────────────────────────────────────────────────────────────

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
renderer.toneMapping       = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Scene ─────────────────────────────────────────────────────────────────────

const scene  = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog        = new THREE.Fog(0x87ceeb, 40, 130);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.05, 200);

// Lighting
const ambient = new THREE.AmbientLight(0xffffff, 0.55);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xfff4e0, 1.3);
sun.position.set(50, 100, 50);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 0.5; sun.shadow.camera.far = 300;
sun.shadow.camera.left = -80; sun.shadow.camera.right = 80;
sun.shadow.camera.top  =  80; sun.shadow.camera.bottom = -80;
scene.add(sun);

const hemi = new THREE.HemisphereLight(0x87ceeb, 0x4a7c4a, 0.35);
scene.add(hemi);

// ── Core objects ──────────────────────────────────────────────────────────────

const world  = new World(scene);
const player = new Player(camera, world, scene);
const ui     = new UI();

let mp:          MultiplayerManager | null = null;
let mobManager:  MobManager | null = null;
let isSingleplayer = true;

// ── Raycaster for mob attacks (shared) ───────────────────────────────────────

const attackRaycaster = new THREE.Raycaster();
attackRaycaster.far   = 5;

// ── Gamemode command handler ──────────────────────────────────────────────────

function handleCommand(cmd: string): boolean {
  const parts = cmd.trim().toLowerCase().split(/\s+/);
  if (parts[0] !== "/gamemode") return false;

  const mode = parts[1] as GameMode;
  if (mode === "creative" || mode === "survival") {
    player.setGameMode(mode);
    ui.setGameMode(mode);
    ui.addChatMessage("", `Gamemode set to ${mode}`, true);
    mp?.sendGameMode(mode);
    return true;
  }
  ui.addChatMessage("", "Usage: /gamemode creative | survival", true);
  return true;
}

// ── Login screen ──────────────────────────────────────────────────────────────

const loginScreen = document.getElementById("loginScreen")!;
const nameInput   = document.getElementById("nameInput") as HTMLInputElement;
const playBtn     = document.getElementById("playBtn")!;
const hud         = document.getElementById("hud")!;

async function startGame(name: string) {
  const playerName = name || "Player";
  const mode       = (window as any).__getSelectedMode?.() ?? "sp";
  isSingleplayer   = mode === "sp";

  loginScreen.style.display = "none";
  hud.style.display         = "block";
  document.body.requestPointerLock();

  // Wire player callbacks
  player.onHealthChanged = hp => ui.updateHearts(hp, player.maxHealth);
  player.onDied          = () => {
    ui.showDeath();
    ui.addChatMessage("", "You died!", true);
  };
  player.onOpenChat      = () => { ui.openChatInput(); player.setChatOpen(true); };
  player.onBreakBlock    = (x, y, z) => {
    mp?.sendRemoveBlock(x, y, z);
  };
  player.onPlaceBlock    = (x, y, z, t) => {
    mp?.sendAddBlock(x, y, z, t);
  };

  // Attack mobs on left-click (only when raycaster doesn't hit a block)
  document.addEventListener("mousedown", e => {
    if (e.button !== 0 || !document.pointerLockElement) return;
    attackRaycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const result = mobManager?.tryAttack(attackRaycaster);
    if (result && !isSingleplayer) {
      mp?.sendAttackMob(result.mobId, result.damage);
    }
  });

  // UI chat handler
  ui.onChat = (text) => {
    if (text.startsWith("/")) {
      handleCommand(text);
    } else {
      if (isSingleplayer) {
        ui.addChatMessage(playerName, text);
      } else {
        mp?.sendChat(text);
      }
    }
    player.setChatOpen(false);
  };

  // Respawn
  ui.onRespawn = () => {
    player.respawn();
    ui.updateHearts(player.maxHealth, player.maxHealth);
    mp?.sendRespawn();
    setTimeout(() => document.body.requestPointerLock(), 100);
  };

  // Set initial health
  ui.updateHearts(player.health, player.maxHealth);
  ui.setGameMode(player.gameMode);

  // Hotbar scroll
  document.addEventListener("wheel", e => {
    const dir  = e.deltaY > 0 ? 1 : -1;
    const idx  = HOTBAR_BLOCKS.indexOf(player.selectedBlockType);
    const next = ((idx + dir) + HOTBAR_BLOCKS.length) % HOTBAR_BLOCKS.length;
    player.selectedBlockType = HOTBAR_BLOCKS[next];
    ui.selectSlot(next);
  });

  if (isSingleplayer) {
    // ── SINGLEPLAYER ────────────────────────────────────────────────────────
    ui.setConnectionStatus("connected");
    ui.updatePlayerCount(1);

    mobManager = new MobManager(scene, world, {
      onPlayerDamage: (amount) => {
        player.takeDamage(amount);
        ui.updateHearts(player.health, player.maxHealth);
      },
      getPlayerPos: () => player.position,
    }, true);

    // Spawn initial mobs
    for (let i = 0; i < 12; i++) {
      mobManager.spawnRandom(0, 0);
    }

  } else {
    // ── MULTIPLAYER ─────────────────────────────────────────────────────────
    const serverAddr = (window as any).__getServerAddr?.() ?? "localhost:2567";
    mp = new MultiplayerManager(scene, world, {
      onStatusChange: s => ui.setConnectionStatus(s),
      onChat:         (name, text, sys) => ui.addChatMessage(name, text, sys),
      onPlayerCount:  n => ui.updatePlayerCount(n),
      onPlayerDamage: (amount) => {
        player.takeDamage(amount);
        ui.updateHearts(player.health, player.maxHealth);
      },
      onPlayerDied:   (name) => {
        ui.addChatMessage("", `${name} was slain!`, true);
        if (name === playerName) ui.showDeath();
      },
    }, serverAddr);

    mobManager = new MobManager(scene, world, {
      onPlayerDamage: () => {},       // server handles damage in MP
      getPlayerPos:   () => player.position,
    }, false);

    mp.setMobManager(mobManager);
    mp.setLocalStateGetter(() => player.getState());

    await mp.join(playerName);
  }

  // Welcome message
  ui.addChatMessage("", `Welcome, ${playerName}! T = chat, /gamemode creative to fly`, true);
}

playBtn.addEventListener("click", () => startGame(nameInput.value.trim()));
nameInput.addEventListener("keydown", e => {
  if (e.key === "Enter") startGame(nameInput.value.trim());
});

// Auto-join via ?name= query parameter
const autoName = new URLSearchParams(window.location.search).get("name");
if (autoName) {
  nameInput.value = autoName;
  setTimeout(() => startGame(autoName), 800);
}

// ── Game Loop ─────────────────────────────────────────────────────────────────

let lastTime = performance.now();

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  const dt  = Math.min((now - lastTime) / 1000, 0.1);
  lastTime  = now;

  if (hud.style.display !== "none") {
    player.update(dt);
    mp?.updatePlayers(dt);
    mobManager?.update(dt);

    ui.updatePosition(
      player.position.x,
      player.position.y,
      player.position.z,
    );
  }

  renderer.render(scene, camera);
}

animate();
