import * as THREE from "three";
import { preloadAtlas, tickWater } from "./BlockTextures";
import { World }              from "./World";
import { Player, GameMode }   from "./Player";
import { MobileControls, isMobile } from "./MobileControls";
import { MultiplayerManager } from "./MultiplayerManager";
import { MobManager }         from "./MobManager";
import { UI }                 from "./UI";
import { HOTBAR_BLOCKS, getBlockName }      from "./blocks";
import { Particles }          from "./Particles";
import { SoundManager }       from "./SoundManager";
import { ItemDropManager }    from "./ItemDrop";
import { Minimap }            from "./Minimap";
import { Weather }            from "./Weather";
import { XPOrbManager }       from "./XPOrb";
import { AchievementManager } from "./Achievements";
import { StatsTracker }       from "./Stats";
import { SkyDome }            from "./SkyDome";

// ── Renderer ─────────────────────────────────────────────────────────────────

const renderer = new THREE.WebGLRenderer({ antialias: false }); // disable antialias for perf
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1)); // cap at 1x on high-DPI screens
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type    = THREE.BasicShadowMap; // reduced from PCFSoftShadowMap for perf
renderer.toneMapping       = THREE.NoToneMapping; // disable tone mapping for perf
renderer.toneMappingExposure = 1.1;
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Scene ─────────────────────────────────────────────────────────────────────

const scene  = new THREE.Scene();
scene.background = null; // sky dome renders the background
scene.fog        = new THREE.Fog(0x87ceeb, 55, 96); // reduced far from 160 to match render distance

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);

// ── Shield system ─────────────────────────────────────────────────────────────
let shieldActive = false;
let shieldDurability = 50;
const MAX_SHIELD_DURABILITY = 50;

// ── Day/Night cycle ───────────────────────────────────────────────────────────

const DAY_DURATION   = 240; // seconds for a full day/night cycle
let dayTime          = 0.25; // start at dawn (0=midnight, 0.25=dawn, 0.5=noon, 0.75=dusk)

const SKY_COLORS = {
  night:  new THREE.Color(0x050510),
  dawn:   new THREE.Color(0xff6633),
  day:    new THREE.Color(0x87ceeb),
  dusk:   new THREE.Color(0xff4422),
};
const FOG_COLORS = {
  night:  new THREE.Color(0x050510),
  dawn:   new THREE.Color(0xff8844),
  day:    new THREE.Color(0x87ceeb),
  dusk:   new THREE.Color(0xff6633),
};

// Sun mesh
const sunGeo  = new THREE.SphereGeometry(4, 12, 12);
const sunMat  = new THREE.MeshBasicMaterial({ color: 0xffffff });
const sunMesh = new THREE.Mesh(sunGeo, sunMat);
scene.add(sunMesh);

// Moon mesh
const moonGeo  = new THREE.SphereGeometry(2.5, 12, 12);
const moonMat  = new THREE.MeshBasicMaterial({ color: 0xddddff });
const moonMesh = new THREE.Mesh(moonGeo, moonMat);
scene.add(moonMesh);

// Sky dome (gradient sky with integrated stars, sun/moon halos)
const skyDome = new SkyDome();
scene.add(skyDome.mesh);

// Clouds — layered box clusters for volumetric look
const clouds: THREE.Group[] = [];
const cloudMat = new THREE.MeshLambertMaterial({
  color: 0xffffff, transparent: true, opacity: 0.78,
  depthWrite: false,
});
for (let i = 0; i < 24; i++) {
  const group = new THREE.Group();
  // Each cloud is a cluster of 3-6 overlapping boxes
  const clusterSize = 3 + Math.floor(Math.random() * 4);
  for (let j = 0; j < clusterSize; j++) {
    const w = 4 + Math.random() * 8;
    const d = 3 + Math.random() * 6;
    const h = 0.8 + Math.random() * 0.8;
    const geo = new THREE.BoxGeometry(w, h, d);
    const piece = new THREE.Mesh(geo, cloudMat);
    piece.position.set(
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 1.5,
      (Math.random() - 0.5) * 8,
    );
    piece.castShadow = false;
    piece.receiveShadow = false;
    group.add(piece);
  }
  group.position.set(
    (Math.random() - 0.5) * 250,
    30 + Math.random() * 10,
    (Math.random() - 0.5) * 250,
  );
  scene.add(group);
  clouds.push(group);
}

// ── Lighting ──────────────────────────────────────────────────────────────────

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xfff4e0, 1.4);
sun.castShadow = true;
sun.shadow.mapSize.set(512, 512); // reduced from 2048 for performance
sun.shadow.camera.near = 0.5;
sun.shadow.camera.far  = 300;
sun.shadow.camera.left = sun.shadow.camera.bottom = -110;
sun.shadow.camera.right = sun.shadow.camera.top   =  110;
scene.add(sun);

const moonLight = new THREE.DirectionalLight(0x334466, 0.3);
scene.add(moonLight);

const hemi = new THREE.HemisphereLight(0x87ceeb, 0x4a7c4a, 0.3);
scene.add(hemi);

// ── Update day/night ──────────────────────────────────────────────────────────

// Pre-allocated color buffers — zero Color heap allocations per frame
const _skyColorBuf = new THREE.Color();
const _fogColorBuf = new THREE.Color();
let _dayNightSkipCounter = 0;

function updateDayNight(dt: number) {
  dayTime = (dayTime + dt / DAY_DURATION) % 1;

  // Sun/moon orbit — update every frame for smooth movement
  const sunAngle  = (dayTime - 0.25) * Math.PI * 2;
  const moonAngle = sunAngle + Math.PI;
  const R = 150;

  sunMesh.position.set(0, Math.sin(sunAngle) * R, Math.cos(sunAngle) * R);
  moonMesh.position.set(0, Math.sin(moonAngle) * R, Math.cos(moonAngle) * R);

  sun.position.copy(sunMesh.position).normalize().multiplyScalar(100);
  moonLight.position.copy(moonMesh.position).normalize().multiplyScalar(100);

  // Cloud drift every frame
  for (const c of clouds) {
    c.position.x = ((c.position.x + 0.015 * dt * 20 + 125) % 250) - 125;
  }

  // Sky/lighting updates — throttle to every 3 frames (imperceptible at 60fps)
  _dayNightSkipCounter++;
  if (_dayNightSkipCounter < 3) return;
  _dayNightSkipCounter = 0;

  let sunIntensity: number, ambientIntensity: number;
  const t = dayTime;
  if (t < 0.2) {
    const p = t / 0.2;
    _skyColorBuf.copy(SKY_COLORS.night).lerp(SKY_COLORS.dawn, p);
    _fogColorBuf.copy(FOG_COLORS.night).lerp(FOG_COLORS.dawn, p);
    sunIntensity     = 0.05 + p * 0.8;
    ambientIntensity = 0.05 + p * 0.45;
  } else if (t < 0.3) {
    const p = (t - 0.2) / 0.1;
    _skyColorBuf.copy(SKY_COLORS.dawn).lerp(SKY_COLORS.day, p);
    _fogColorBuf.copy(FOG_COLORS.dawn).lerp(FOG_COLORS.day, p);
    sunIntensity     = 0.85 + p * 0.55;
    ambientIntensity = 0.5 + p * 0.1;
  } else if (t < 0.7) {
    _skyColorBuf.copy(SKY_COLORS.day);
    _fogColorBuf.copy(FOG_COLORS.day);
    sunIntensity     = 1.4;
    ambientIntensity = 0.6;
  } else if (t < 0.8) {
    const p = (t - 0.7) / 0.1;
    _skyColorBuf.copy(SKY_COLORS.day).lerp(SKY_COLORS.dusk, p);
    _fogColorBuf.copy(FOG_COLORS.day).lerp(FOG_COLORS.dusk, p);
    sunIntensity     = 1.4 - p * 1.35;
    ambientIntensity = 0.6 - p * 0.55;
  } else {
    const p = (t - 0.8) / 0.2;
    _skyColorBuf.copy(SKY_COLORS.dusk).lerp(SKY_COLORS.night, p);
    _fogColorBuf.copy(FOG_COLORS.dusk).lerp(FOG_COLORS.night, p);
    sunIntensity     = 0.05;
    ambientIntensity = 0.05;
  }

  renderer.setClearColor(_fogColorBuf); // clear color matches fog for seamless blend
  (scene.fog as THREE.Fog).color.copy(_fogColorBuf);

  // Update sky dome with current dayTime and sun position
  skyDome.update(dayTime, sunMesh.position);
  skyDome.followCamera(camera.position);

  sun.intensity       = sunIntensity;
  ambient.intensity   = Math.max(ambientIntensity, 0.04);
  moonLight.intensity = Math.max(0.35 - sunIntensity * 0.2, 0);
  hemi.intensity      = ambientIntensity * 0.5;

  const isSunUp = Math.sin(sunAngle) > 0;
  sunMesh.visible  =  isSunUp;
  moonMesh.visible = !isSunUp;

  // Hide clouds at night, show during day — use shared material opacity
  cloudMat.opacity = ambientIntensity > 0.2 ? 0.78 : 0;
}

// ── Core objects ──────────────────────────────────────────────────────────────

const world     = new World(scene);
const player    = new Player(camera, world, scene);
scene.add(camera); // needed so fp arm (camera child) renders
const ui        = new UI();

// ── Mobile controls (touch joystick + look + buttons) ────────────────────────
let mobileControls: MobileControls | null = null;
if (isMobile()) {
  mobileControls = new MobileControls(
    player.getKeys(),
    () => player.breakBlockNow(),
    () => player.placeBlockNow(),
  );
  // Hook look delta into player yaw/pitch
  mobileControls.onLookDelta = (dx: number, dy: number) => {
    (player as any).yaw   -= dx * 0.004;
    (player as any).pitch -= dy * 0.004;
    (player as any).pitch = Math.max(-Math.PI/2+0.01, Math.min(Math.PI/2-0.01, (player as any).pitch));
  };
  mobileControls.hide(); // hidden until game starts
}
const particles = new Particles(scene);
const sounds    = new SoundManager();
const itemDrops = new ItemDropManager(scene);
const xpOrbs    = new XPOrbManager(scene);
let minimap: Minimap | null = null;
const weather = new Weather(scene, sounds);

let mp:         MultiplayerManager | null = null;
let mobManager: MobManager | null = null;
let isSingleplayer = true;
let currentPlayerName = "";
let dragonMob: any = null;

// ── XP System ─────────────────────────────────────────────────────────────────

let xp = 0;
let xpLevel = 0;

// ── Day Counter ──────────────────────────────────────────────────────────────
let dayCount = 1;
ui.updateDayCounter(dayCount);

// ── Achievement System ────────────────────────────────────────────────────────

const achievements = new AchievementManager();

// ── Inventory System ──────────────────────────────────────────────────────────

let inventoryOpen = false;
const inventory: number[] = new Array(36).fill(0);   // item type per slot
const invCount:  number[] = new Array(36).fill(0);   // stack count per slot

/** Add `count` of item type to inventory. Returns leftover that didn't fit. */
function invAddItem(type: number, count = 1): number {
  // Try to stack onto existing slot first
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === type && invCount[i] < 64) {
      const space = 64 - invCount[i];
      const take  = Math.min(count, space);
      invCount[i] += take;
      count -= take;
      if (count === 0) return 0;
    }
  }
  // Find empty slot
  while (count > 0) {
    const empty = inventory.findIndex((v, i) => v === 0 && invCount[i] === 0);
    if (empty < 0) return count; // inventory full
    inventory[empty]  = type;
    invCount[empty]   = Math.min(count, 64);
    count -= invCount[empty];
  }
  return 0;
}

/** Remove `count` of item type from inventory. Returns true if enough were present. */
function invRemoveItem(type: number, count = 1): boolean {
  // Check we have enough
  const total = inventory.reduce((s, v, i) => s + (v === type ? invCount[i] : 0), 0);
  if (total < count) return false;
  for (let i = 0; i < inventory.length && count > 0; i++) {
    if (inventory[i] === type) {
      const take = Math.min(count, invCount[i]);
      invCount[i] -= take;
      count -= take;
      if (invCount[i] === 0) inventory[i] = 0;
    }
  }
  return true;
}

/** Count how many of a type we have. */
function invCountOf(type: number): number {
  return inventory.reduce((s, v, i) => s + (v === type ? invCount[i] : 0), 0);
}

// ── Arrow System ──────────────────────────────────────────────────────────────

interface Arrow {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  stuck?: boolean; // arrow stuck in block
}
const playerArrows: Arrow[] = [];
const stuckArrows: { mesh: THREE.Mesh; life: number }[] = [];

// Shared geo/mat for player arrows — no new geometry per shot
const _PLAYER_ARROW_GEO = new THREE.BoxGeometry(0.05, 0.05, 0.4);
const _PLAYER_ARROW_MAT = new THREE.MeshBasicMaterial({ color: 0xffdd44 });
// Shared geo/mat for fishing bobber — no new geometry per cast
const _BOBBER_GEO = new THREE.SphereGeometry(0.15, 8, 8);
const _BOBBER_MAT = new THREE.MeshBasicMaterial({ color: 0x0066cc });

interface FishingBobber {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  inWater: boolean;
  waitTimer: number;
}
let fishingBobber: FishingBobber | null = null;

// ── TNT System ────────────────────────────────────────────────────────────────

const attackRaycaster = new THREE.Raycaster();
attackRaycaster.far   = 5;
const _CENTER_VEC2 = new THREE.Vector2(0, 0); // reuse for setFromCamera calls

const arrowRaycaster = new THREE.Raycaster();
arrowRaycaster.far   = 1;

// ── Hunger & regen ────────────────────────────────────────────────────────────

let hunger      = 20;
let maxHunger   = 20;
let regenTimer  = 0;
let hungerTimer = 0;
let lastMoved   = new THREE.Vector3();
let pressurePlateTimer = 0;
let minimapTimer = 0;
let caveAmbientTimer = 0;

// ── Enchantments ──────────────────────────────────────────────────────────────

const enchants = { sharpness: 0, protection: 0, speed: 0 };

// ── Potions ───────────────────────────────────────────────────────────────────

const potionEffects = { strength: 0, speed: 0 };

// ── Wave 9: Wither Effect ─────────────────────────────────────────────────────

let witherTimer = 0;
const WITHER_DURATION = 5; // 5 seconds
let screenShakeTimer = 0;
let screenShakeIntensity = 0;

// ── Wave 10: Stats Tracker ───────────────────────────────────────────────────

const stats = new StatsTracker();
stats.load();
let statsSaveTimer = 0;

// ── Wave 10: Smelting Recipes ────────────────────────────────────────────────

const smeltRecipes = new Map<number, number>([
  [14, 62], // Iron ore → Iron ingot
  [13, 63], // Gold ore → Gold ingot
  [4, 9],   // Sand → Glass
  [15, 64], // Coal ore → Coal
  [61, 65], // Diamond ore → Diamond
]);

// ── Day/Night cycle tracking ──────────────────────────────────────────────────

let prevDayTime = 0;

// ── Debug screen ───────────────────────────────────────────────────────────────

let debugVisible = false;
let fpsFrames = 0;
// Circular FPS buffer — avoids .push() heap growth and O(n) .shift() each frame
const FPS_SAMPLE_SIZE = 60;
const _fpsBuf = new Float32Array(FPS_SAMPLE_SIZE);
let _fpsBufIdx = 0;
let _fpsBufCount = 0;

// ── Death tracking ──────────────────────────────────────────────────────────────

let lastDeathCause = "You died";
let lastDeathPos = new THREE.Vector3();

// ── Campfire timer ──────────────────────────────────────────────────────────────

let campfireTimer = 0;
let ambientParticleTimer = 0;
let biomeFogTimer = 0;
let currentBiome = 0;
// Biome fog color tints: 0=plains, 1=desert, 2=forest, 3=mountains, 4=ocean
const BIOME_FOG_TINTS: Record<number, THREE.Color> = {
  0: new THREE.Color(0x88ccee), // plains: neutral blue
  1: new THREE.Color(0xddcc88), // desert: warm sandy
  2: new THREE.Color(0x77bb88), // forest: green tint
  3: new THREE.Color(0xaabbcc), // mountains: cool grey-blue
  4: new THREE.Color(0x6699bb), // ocean: deep blue
};
let footstepTimer = 0;
let footstepInterval = 0.35;
let wasPlayerOnGround = false;
const lastFootstepPos = new THREE.Vector3();
let prevWaterState = false;

// ── Command handler ───────────────────────────────────────────────────────────

function handleCommand(cmd: string, playerName: string): boolean {
  const parts = cmd.trim().split(/\s+/);
  const base  = parts[0].toLowerCase();

  if (base === "/gamemode") {
    const mode = parts[1]?.toLowerCase() as GameMode;
    if (mode === "creative" || mode === "survival" || mode === "spectator") {
      player.setGameMode(mode);
      ui.setGameMode(mode);
      if (mode === "survival") { hunger = 20; ui.updateHunger(hunger, maxHunger); }
      ui.addChatMessage("", `Gamemode set to ${mode}`, true);
      mp?.sendGameMode(mode);
      return true;
    }
    ui.addChatMessage("", "Usage: /gamemode creative | survival | spectator", true);
    return true;
  }

  // Shortcut commands for game modes
  if (base === "/spectator" || base === "/spec") {
    player.setGameMode("spectator");
    ui.setGameMode("spectator");
    ui.addChatMessage("", "Spectator mode — fly freely, no collisions, no damage", true);
    return true;
  }

  if (base === "/kill")  { player.takeDamage(player.maxHealth); return true; }
  if (base === "/heal")  { (player as any).health = player.maxHealth; ui.updateHearts(player.maxHealth, player.maxHealth); ui.addChatMessage("", "Healed to full!", true); return true; }
  if (base === "/feed")  { hunger = maxHunger; ui.updateHunger(hunger, maxHunger); ui.addChatMessage("", "Fed to full!", true); return true; }

  if (base === "/time") {
    const sub = parts[1]?.toLowerCase();
    if (sub === "day")     { dayTime = 0.3;  ui.addChatMessage("", "Set time to day", true); return true; }
    if (sub === "night")   { dayTime = 0.0;  ui.addChatMessage("", "Set time to night", true); return true; }
    if (sub === "sunrise") { dayTime = 0.22; ui.addChatMessage("", "Set time to sunrise", true); return true; }
    if (sub === "sunset")  { dayTime = 0.75; ui.addChatMessage("", "Set time to sunset", true); return true; }
    ui.addChatMessage("", "Usage: /time day | night | sunrise | sunset", true);
    return true;
  }

  if (base === "/tp") {
    const x = parseFloat(parts[1] ?? "0");
    const z = parseFloat(parts[2] ?? "0");
    if (!isNaN(x) && !isNaN(z)) {
      player.spawnAt(x, z);
      ui.addChatMessage("", `Teleported to ${x.toFixed(1)}, ${z.toFixed(1)}`, true);
    } else {
      ui.addChatMessage("", "Usage: /tp <x> <z>", true);
    }
    return true;
  }

  if (base === "/craft") {
    ui.showCraftingUI();
    return true;
  }

  if (base === "/weather") {
    const sub = parts[1]?.toLowerCase();
    if (sub === "clear" || sub === "rain" || sub === "thunder") {
      weather.setWeather(sub);
      ui.addChatMessage("", `Weather set to ${sub}`, true);
      return true;
    }
    ui.addChatMessage("", "Usage: /weather clear | rain | thunder", true);
    return true;
  }

  if (base === "/nether") {
    const sub = parts[1]?.toLowerCase();
    if (sub === "enter") {
      netherMode = true;
      player.spawnAt(player.position.x, player.position.z);
      player.position.y = 30;
      (scene.fog as THREE.Fog).color.copy(new THREE.Color(0xff4400));
      renderer.setClearColor(0x220000);
      skyDome.mesh.visible = false;
      ui.addChatMessage("", "Entered the Nether!", true);
      return true;
    }
    if (sub === "exit") {
      netherMode = false;
      player.spawnAt(player.position.x, player.position.z);
      (scene.fog as THREE.Fog).color.copy(new THREE.Color(0x87ceeb));
      skyDome.mesh.visible = true;
      ui.addChatMessage("", "Exited the Nether!", true);
      return true;
    }
    ui.addChatMessage("", "Usage: /nether enter | exit", true);
    return true;
  }

  if (base === "/boss") {
    dragonMob = mobManager?.spawnAt("enderdragon", player.position.x, player.position.y + 15, player.position.z - 20);
    ui.addChatMessage("", "☠ The Ender Dragon awakens!", true);
    ui.showBossBar("Ender Dragon", dragonMob?.maxHealth ?? 200, 200);
    return true;
  }

  if (base === "/achievements") {
    achievements.getAll().forEach(a => {
      ui.addChatMessage("", `${a.unlocked ? "✅" : "⬜"} ${a.icon} ${a.name}: ${a.description}`, true);
    });
    return true;
  }

  if (base === "/save") {
    if (isSingleplayer) {
      world.saveToStorage({
        inventory: [...inventory], invCount: [...invCount],
        px: player.position.x, py: player.position.y, pz: player.position.z,
        health: player.health, hunger,
        xp, xpLevel, dayCount,
      });
      ui.addChatMessage("", "World saved!", true);
    } else {
      ui.addChatMessage("", "Save only works in singleplayer", true);
    }
    return true;
  }

  if (base === "/load") {
    if (isSingleplayer) {
      const ps = world.loadFromStorage();
      if (ps) {
        for (let i = 0; i < 36; i++) { inventory[i] = ps.inventory[i] ?? 0; invCount[i] = ps.invCount[i] ?? 0; }
        player.position.set(ps.px, ps.py, ps.pz);
        player.health = ps.health;
        hunger = ps.hunger;
        xp = ps.xp; xpLevel = ps.xpLevel; dayCount = ps.dayCount;
        ui.updateHearts(player.health, player.maxHealth);
        ui.updateHunger(hunger, maxHunger);
        ui.updateXP(xp, xpLevel);
        ui.updateDayCounter(dayCount);
        ui.updateHotbarFromInventory(inventory, invCount);
      }
      ui.addChatMessage("", "World loaded!", true);
    } else {
      ui.addChatMessage("", "Load only works in singleplayer", true);
    }
    return true;
  }

  if (base === "/tame") {
    const type = parts[1]?.toLowerCase();
    if (type === "wolf" || type === "cat") {
      // Find wolf or cat within 5 blocks
      const mobs = mobManager?.getMobsByType(type as any) ?? [];
      for (const { id, mob } of mobs) {
        const dist = player.position.distanceTo(mob.group.position);
        if (dist <= 5) {
          (mob as any).data.state = "tamed";
          ui.addChatMessage("", `Tamed a ${type}!`, true);
          sounds.play("eat");
          return true;
        }
      }
      ui.addChatMessage("", `No ${type} found nearby`, true);
    } else {
      ui.addChatMessage("", "Usage: /tame wolf | cat", true);
    }
    return true;
  }

  if (base === "/stats") {
    const allStats = stats.getAll();
    ui.addChatMessage("", "--- Statistics ---", true);
    ui.addChatMessage("", `Kills: ${allStats.kills}`, true);
    ui.addChatMessage("", `Deaths: ${allStats.deaths}`, true);
    ui.addChatMessage("", `Blocks Placed: ${allStats.blocksPlaced}`, true);
    ui.addChatMessage("", `Blocks Broken: ${allStats.blocksBroken}`, true);
    ui.addChatMessage("", `Mobs Killed: ${allStats.mobsKilled}`, true);
    ui.addChatMessage("", `Distance Traveled: ${allStats.distanceTraveled.toFixed(1)}m`, true);
    ui.addChatMessage("", `Play Time: ${Math.floor(allStats.playTime / 60)}m ${Math.floor(allStats.playTime % 60)}s`, true);
    return true;
  }

  if (base === "/help") {
    [
      "/gamemode creative | survival | spectator  (/spec)",
      "/kill  /heal  /feed",
      "/time day | night | sunrise | sunset",
      "/tp <x> <z>",
      "/craft",
      "/weather clear | rain | thunder",
      "/nether enter | exit",
      "/boss - spawn the Ender Dragon",
      "/achievements - show achievements",
      "/tame wolf | cat - tame nearby pet",
      "/stats - show statistics",
      "/save · /load (singleplayer only)",
      "F1 = Toggle HUD · F2 = Screenshot · F5 = 3rd person · Ctrl = sprint · E = furnace/inventory",
      "Right-click disc to play/stop music · Hold shield (block 72) to reduce damage",
    ].forEach(c => ui.addChatMessage("", c, true));
    return true;
  }

  ui.addChatMessage("", `Unknown: ${base}. Type /help`, true);
  return true;
}

// ── Login ─────────────────────────────────────────────────────────────────────

const loginScreen = document.getElementById("loginScreen")!;
const nameInput   = document.getElementById("nameInput") as HTMLInputElement;
const playBtn     = document.getElementById("playBtn")!;
const hud         = document.getElementById("hud")!;
const underwaterOverlay = document.getElementById("underwaterOverlay")!;

// ── Underwater effect state ──────────────────────────────────────────────────
let isUnderwater     = false;
let underwaterBubbleTimer = 0;
const NORMAL_FOG_NEAR = 55;
const NORMAL_FOG_FAR  = 96;
const WATER_FOG_NEAR  = 2;
const WATER_FOG_FAR   = 20;
const WATER_FOG_COLOR = new THREE.Color(0x0a3c64);

// ── Nether portal effect state ──────────────────────────────────────────────
const portalOverlay     = document.getElementById("portalOverlay")!;
let portalProximity     = 0; // 0..1 intensity based on distance to portal
let netherMode          = false; // visual nether color shift active
const NETHER_FOG_COLOR  = new THREE.Color(0x330808);
const PORTAL_DETECT_RANGE = 6; // blocks

/**
 * Check if an obsidian portal frame exists near (px, py, pz).
 * Portal frame: vertical rectangle of obsidian (type 18) at least 4 wide × 5 tall,
 * with interior filled with nether portal blocks (type 73) or air.
 * Returns distance to nearest portal block, or -1 if none found.
 */
function findNearestPortal(px: number, py: number, pz: number): number {
  let minDist = -1;
  const range = PORTAL_DETECT_RANGE;
  for (let dx = -range; dx <= range; dx++) {
    for (let dy = -range; dy <= range; dy++) {
      for (let dz = -range; dz <= range; dz++) {
        const bx = Math.floor(px) + dx;
        const by = Math.floor(py) + dy;
        const bz = Math.floor(pz) + dz;
        if (world.getBlockType(bx, by, bz) === 73) {
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (minDist < 0 || dist < minDist) minDist = dist;
        }
      }
    }
  }
  return minDist;
}

/**
 * Try to light a nether portal: check if there's a valid obsidian frame
 * and fill interior with portal blocks (type 73).
 * Call when player uses flint/right-clicks obsidian.
 */
function tryLightPortal(bx: number, by: number, bz: number): boolean {
  // Check both orientations (X-axis portal and Z-axis portal)
  for (const axis of ["x", "z"] as const) {
    const frame = detectObsidianFrame(bx, by, bz, axis);
    if (frame) {
      // Fill interior with portal blocks
      for (const pos of frame) {
        world.setBlock(pos.x, pos.y, pos.z, 73);
      }
      return true;
    }
  }
  return false;
}

function detectObsidianFrame(
  startX: number, startY: number, startZ: number, axis: "x" | "z"
): { x: number; y: number; z: number }[] | null {
  // Find bottom-left of frame: search down and to the left along axis
  let bx = startX, by = startY, bz = startZ;

  // Search down for bottom
  while (world.getBlockType(bx, by - 1, bz) === 18) by--;

  // Search left along axis for left edge
  if (axis === "x") {
    while (world.getBlockType(bx - 1, by, bz) === 18) bx--;
  } else {
    while (world.getBlockType(bx, by, bz - 1) === 18) bz--;
  }

  // Now (bx, by, bz) should be at bottom-left obsidian corner
  // Verify frame: need at least 4 wide, 5 tall on the axis
  const minW = 4, minH = 5;

  // Measure bottom edge width
  let width = 0;
  for (let i = 0; i < 10; i++) {
    const tx = axis === "x" ? bx + i : bx;
    const tz = axis === "z" ? bz + i : bz;
    if (world.getBlockType(tx, by, tz) === 18) width++;
    else break;
  }
  if (width < minW) return null;

  // Measure left column height
  let height = 0;
  for (let i = 0; i < 10; i++) {
    if (world.getBlockType(bx, by + i, bz) === 18) height++;
    else break;
  }
  if (height < minH) return null;

  // Verify right column
  const rx = axis === "x" ? bx + width - 1 : bx;
  const rz = axis === "z" ? bz + width - 1 : bz;
  let rightH = 0;
  for (let i = 0; i < height; i++) {
    if (world.getBlockType(rx, by + i, rz) === 18) rightH++;
    else break;
  }
  if (rightH < height) return null;

  // Verify top edge
  let topW = 0;
  for (let i = 0; i < width; i++) {
    const tx = axis === "x" ? bx + i : bx;
    const tz = axis === "z" ? bz + i : bz;
    if (world.getBlockType(tx, by + height - 1, tz) === 18) topW++;
    else break;
  }
  if (topW < width) return null;

  // Collect interior positions (not including frame edges)
  const interior: { x: number; y: number; z: number }[] = [];
  for (let iy = 1; iy < height - 1; iy++) {
    for (let iw = 1; iw < width - 1; iw++) {
      const ix = axis === "x" ? bx + iw : bx;
      const iz = axis === "z" ? bz + iw : bz;
      const bt = world.getBlockType(ix, by + iy, iz);
      if (bt !== 0 && bt !== 73) return null; // interior must be air or already portal
      interior.push({ x: ix, y: by + iy, z: iz });
    }
  }

  return interior.length > 0 ? interior : null;
}

// ── Post-processing overlays ────────────────────────────────────────────────
const damageFlash       = document.getElementById("damageFlash")!;
const speedLinesEl      = document.getElementById("speedLines")!;
const lowHealthVignette = document.getElementById("lowHealthVignette")!;
let damageFlashTimer = 0;
let prevPlayerHealth = 40;

function triggerDamageFlash() {
  damageFlash.style.opacity = "1";
  damageFlashTimer = 0.15;
}

function updatePostEffects(dt: number, health: number, maxHealth: number) {
  // Damage flash fade-out
  if (damageFlashTimer > 0) {
    damageFlashTimer -= dt;
    if (damageFlashTimer <= 0) {
      damageFlash.style.opacity = "0";
    }
  }

  // Detect damage taken
  if (health < prevPlayerHealth) {
    triggerDamageFlash();
  }
  prevPlayerHealth = health;

  // Low health red vignette pulse
  const healthRatio = health / maxHealth;
  if (healthRatio <= 0.3 && health > 0) {
    // Pulse effect: oscillate opacity based on time
    const pulse = 0.4 + Math.sin(Date.now() * 0.005) * 0.3;
    lowHealthVignette.style.opacity = String(pulse);
  } else {
    lowHealthVignette.style.opacity = "0";
  }
}

// ── Crosshair break progress ────────────────────────────────────────────────
const crosshairEl    = document.getElementById("crosshair")!;
const breakProgressEl = document.getElementById("breakProgress")!;
let _lastBreaking = false;

function updateCrosshair(breakProgress: number) {
  const isBreaking = breakProgress > 0;
  if (isBreaking !== _lastBreaking) {
    crosshairEl.classList.toggle("breaking", isBreaking);
    _lastBreaking = isBreaking;
  }
  if (isBreaking) {
    // Conic gradient to show progress as a ring
    const deg = Math.floor(breakProgress * 360);
    breakProgressEl.style.background = `conic-gradient(rgba(255,255,255,0.7) ${deg}deg, transparent ${deg}deg)`;
    breakProgressEl.style.opacity = "1";
  } else {
    breakProgressEl.style.opacity = "0";
  }
}

async function startGame(name: string) {
  currentPlayerName = name.trim() || `Player${Math.floor(Math.random() * 999)}`;
  const mode       = (window as any).__getSelectedMode?.() ?? "sp";
  isSingleplayer   = mode === "sp";

  // Show loading bar
  const loadingBar = document.getElementById("loadingBar")!;
  const loadingProgress = document.getElementById("loadingProgress")!;
  const loadingText = document.getElementById("loadingText")!;
  const playBtnEl = document.getElementById("playBtn")!;
  playBtnEl.style.display = "none";
  loadingBar.style.display = "block";
  loadingProgress.style.width = "20%";
  loadingText.textContent = "Loading textures...";

  // Preload real minecraft textures before world generates
  await preloadAtlas();
  loadingProgress.style.width = "60%";
  loadingText.textContent = "Generating world...";

  // Brief delay so user sees the progress
  await new Promise(r => setTimeout(r, 200));
  loadingProgress.style.width = "90%";
  loadingText.textContent = "Starting game...";
  await new Promise(r => setTimeout(r, 150));
  loadingProgress.style.width = "100%";

  loginScreen.style.display = "none";
  hud.style.display         = "block";

  // Show mobile controls if on a touch device
  if (mobileControls) {
    mobileControls.show();
    // On mobile, don't request pointer lock (it blocks touch)
  }

  // Load saved world if singleplayer
  let loadedPlayerState = false;
  if (isSingleplayer) {
    const ps = world.loadFromStorage();
    // Wave 9: Initialize torch lights after loading
    world.initializeTorchLights();
    if (ps) {
      for (let i = 0; i < 36; i++) { inventory[i] = ps.inventory[i] ?? 0; invCount[i] = ps.invCount[i] ?? 0; }
      player.health = ps.health;
      hunger = ps.hunger;
      xp = ps.xp; xpLevel = ps.xpLevel; dayCount = ps.dayCount;
      loadedPlayerState = true;
      // Defer position restore until after spawnAt
      setTimeout(() => {
        player.position.set(ps.px, ps.py, ps.pz);
        ui.updateHearts(player.health, player.maxHealth);
        ui.updateHunger(hunger, maxHunger);
        ui.updateXP(xp, xpLevel);
        ui.updateDayCounter(dayCount);
        ui.updateHotbarFromInventory(inventory, invCount);
      }, 100);
    }
  }

  if (!loadedPlayerState) player.spawnAt(0, 0);
  else player.spawnAt(0, 0); // still need to init ground
  if (!isMobile()) {
    setTimeout(() => document.body.requestPointerLock(), 200);
  }

  // Start ambient background music after a brief delay
  setTimeout(() => sounds.startAmbientMusic("day"), 3000);

  // Player callbacks
  player.onHealthChanged = hp => ui.updateHearts(hp, player.maxHealth);
  player.setDeathCause = (cause) => { lastDeathCause = cause; };
  player.onDied = () => {
    stats.increment("deaths");
    lastDeathPos.copy(player.position);
    // Fade to red then show death screen
    const screenFade = document.getElementById("screenFade")!;
    screenFade.style.background = "rgba(80,0,0,0.7)";
    screenFade.style.transition = "opacity 0.8s ease";
    screenFade.style.opacity = "1";
    setTimeout(() => {
      ui.showDeath(lastDeathCause, lastDeathPos.x, lastDeathPos.y, lastDeathPos.z, xpLevel);
      screenFade.style.opacity = "0";
    }, 600);
    ui.addChatMessage("", "☠ You died!", true);
    sounds.play("hurt");
  };
  player.onOpenChat  = () => { ui.openChatInput(); player.setChatOpen(true); };

  // Achievement callbacks
  achievements.onUnlock = (a) => {
    ui.showAchievement(a.name, a.description, a.icon);
    sounds.play("eat"); // use eat sound as achievement chime
  };

  // Fishing rod right-click handler
  player.onRightClick = () => {
    if (player.selectedBlockType === 33) { // Fishing Rod
      if (fishingBobber) {
        // Reel in — don't dispose shared geo/mat
        scene.remove(fishingBobber.mesh);
        if (fishingBobber.inWater) {
          // Random chance to catch a fish
          const fishes = ["Salmon", "Cod", "Tropical Fish", "Pufferfish"];
          const fish = fishes[Math.floor(Math.random() * fishes.length)];
          ui.addChatMessage("", `You caught a ${fish}!`, true);
          hunger = Math.min(maxHunger, hunger + 2);
          ui.updateHunger(hunger, maxHunger);
          sounds.play("eat");
        }
        fishingBobber = null;
      } else {
        // Cast bobber
        const rayDir = _inputRayDir.set(0, 0, -1)
          .applyAxisAngle(_X_AXIS, player.camera.rotation.x)
          .applyAxisAngle(_Y_AXIS, player.camera.rotation.y);

        // Reuse shared geo/mat — no allocation per cast
        const bobberMesh = new THREE.Mesh(_BOBBER_GEO, _BOBBER_MAT);
        bobberMesh.position.copy(player.position);
        bobberMesh.position.y += 0.6;
        scene.add(bobberMesh);

        fishingBobber = {
          mesh: bobberMesh,
          vel: rayDir.clone().multiplyScalar(15),
          inWater: false,
          waitTimer: 2 + Math.random() * 6,
        };
      }
      return; // Don't place the rod
    }
  };

  player.onBreakBlock = (x, y, z) => {
    const b = world.getBlock(x, y, z);
    if (!b) return;
    // Real Minecraft: add drops to inventory
    // Real Minecraft drop table
    const drops: Record<number, { item: number; count: number | [number,number]; chance?: number }> = {
      1:  { item: 2,  count: 1 },          // grass -> 1 dirt
      2:  { item: 2,  count: 1 },          // dirt -> 1 dirt
      3:  { item: 11, count: 1 },          // stone -> 1 cobblestone
      4:  { item: 4,  count: 1 },          // sand -> 1 sand
      5:  { item: 5,  count: 1 },          // oak log -> 1 oak log (logs drop logs, not planks)
      6:  { item: 5,  count: 1, chance: 0.05 }, // leaves -> oak log (5% like MC)
      8:  { item: 8,  count: 1 },          // brick -> brick
      10: { item: 10, count: 1 },          // planks -> planks
      11: { item: 11, count: 1 },          // cobble -> cobble
      12: { item: 12, count: 1 },          // gravel -> gravel
      13: { item: 63, count: 1 },          // gold ore -> gold ingot
      14: { item: 62, count: 1 },          // iron ore -> iron ingot
      15: { item: 64, count: [2,4] },      // coal ore -> 2-4 coal
      16: { item: 16, count: 1 },          // bookshelf -> bookshelf
      17: { item: 11, count: 1 },          // mossy stone -> cobble
      18: { item: 18, count: 1 },          // obsidian
      19: { item: 19, count: [2,4] },      // glowstone -> 2-4 glowstone
      20: { item: 20, count: 1 },          // snow
      21: { item: 21, count: 1 },          // ice
      22: { item: 22, count: 1 },          // crafting table
      23: { item: 23, count: 1 },          // furnace
      24: { item: 24, count: 1 },          // tnt (don't trigger here)
      25: { item: 25, count: 1 },          // sponge
      26: { item: 26, count: 1 },          // white wool
      27: { item: 27, count: 1 },          // red wool
      31: { item: 31, count: 1 },          // chest
      49: { item: 49, count: 1 },          // sandstone
      54: { item: 54, count: 1 },          // terracotta
      61: { item: 65, count: [1,3] },      // diamond ore -> 1-3 diamond
      74: { item: 76, count: [2,3] },      // copper ore -> 2-3 copper ingot
      75: { item: 77, count: [4,8] },      // lapis ore -> 4-8 lapis lazuli
      78: { item: 78, count: 1 },          // ladder -> ladder
      79: { item: 79, count: 1 },          // fence -> fence
      80: { item: 80, count: 1 },          // fence gate -> fence gate
      81: { item: 81, count: 1 },          // stone bricks
      82: { item: 82, count: 1 },          // mossy stone bricks
    };
    const dropDef = drops[b.type];
    if (dropDef) {
      const roll = Math.random();
      if (!dropDef.chance || roll < dropDef.chance) {
        const amt = Array.isArray(dropDef.count)
          ? Math.floor(Math.random() * (dropDef.count[1] - dropDef.count[0] + 1)) + dropDef.count[0]
          : dropDef.count;
        invAddItem(dropDef.item, amt);
        ui.updateHotbarFromInventory(inventory, invCount);
        ui.addChatMessage("", `+ ${amt}x ${getBlockName(dropDef.item)}`, true);
      }
    }

    // Wave 10: Track blocks broken
    stats.increment("blocksBroken");

    // Trigger first_block achievement
    achievements.trigger("first_block");

    // TNT activation (type 24)
    if (b.type === 24) {
      let flashCount = 0;
      const flashInterval = setInterval(() => {
        if (flashCount % 2 === 0) {
          particles.burst(x, y, z, 24);
        }
        flashCount++;
        if (flashCount > 8) {
          clearInterval(flashInterval);
          particles.explosion(x, y, z, 30);
          // Explode - destroy blocks in radius
          const radius = 5;
          const radiusSq = radius * radius; // avoid sqrt in triple-nested loop
          for (let dx = -radius; dx <= radius; dx++) {
            for (let dy = -radius; dy <= radius; dy++) {
              for (let dz = -radius; dz <= radius; dz++) {
                if (dx*dx + dy*dy + dz*dz <= radiusSq) {
                  const bx = Math.round(x) + dx;
                  const by = Math.round(y) + dy;
                  const bz = Math.round(z) + dz;
                  const b = world.getBlock(bx, by, bz);
                  if (b) {
                    world.removeBlock(bx, by, bz);
                    particles.burst(bx, by, bz, b.type);
                  }
                }
              }
            }
          }
          // Damage player if in range
          const _epx = player.position.x - x, _epy = player.position.y - y, _epz = player.position.z - z;
          if (_epx*_epx + _epy*_epy + _epz*_epz < 49 && player.gameMode === "survival") { // 7^2=49
            player.takeDamage(6);
            ui.updateHearts(player.health, player.maxHealth);
          }
          sounds.play("break");
        }
      }, 500);
      return;
    }

    // Wave 9: Remove torch lights
    if (b.type === 56) {
      world.removeTorchLight(x, y, z);
    }
    // Wave 9: Remove redstone lamp lights
    if (b.type === 59) {
      world.deactivateLamp(x, y, z);
    }

    particles.burst(x, y, z, b.type);
    sounds.play("break");
    mp?.sendRemoveBlock(x, y, z);
  };
  player.onPlaceBlock = (x, y, z, t) => {
    // Wave 10: Track blocks placed
    stats.increment("blocksPlaced");

    // Wave 9: Add torch lights
    if (t === 56) {
      world.addTorchLight(x, y + 0.5, z);
    }

    particles.placeEffect(x, y, z, t);
    sounds.play("place");
    mp?.sendAddBlock(x, y, z, t);
  };

  // XP Orb collection
  xpOrbs.onCollect = (amount) => {
    xp += amount;
    const prevLevel = xpLevel;
    while (xp >= (xpLevel + 1) * 10) {
      xpLevel++;
    }
    ui.updateXP(xp, xpLevel);
    if (xpLevel > prevLevel) {
      sounds.play("eat");
      ui.addChatMessage("", `Level Up! Level ${xpLevel}`, true);
    }
  };

  // Enchantment selection
  ui.onEnchant = (type: string) => {
    if (xpLevel >= 3) {
      xpLevel -= 3;
      xp -= 3 * 10;
      ui.updateXP(xp, xpLevel);

      if (type === "sharpness") {
        enchants.sharpness = 1;
        ui.addChatMessage("", "Applied Sharpness I (+2 damage)!", true);
      } else if (type === "protection") {
        enchants.protection = 1;
        ui.addChatMessage("", "Applied Protection I (+3 armor)!", true);
      } else if (type === "speed") {
        enchants.speed = 1;
        ui.addChatMessage("", "Applied Speed I (+20% movement)!", true);
      }
      sounds.play("eat");
    } else {
      ui.addChatMessage("", "Not enough XP levels!", true);
    }
  };

  // Attack
  document.addEventListener("mousedown", e => {
    if (!document.pointerLockElement) return;

    // Right-click for music discs
    if (e.button === 2) {
      const discMap: Record<number, "disc_green" | "disc_red" | "disc_blue"> = {
        69: "disc_green",
        70: "disc_red",
        71: "disc_blue",
      };
      const track = discMap[player.selectedBlockType];
      if (track) {
        if (sounds.isMusicPlaying()) {
          sounds.stopMusic();
        } else {
          sounds.playMusic(track);
        }
      }
      return;
    }

    if (e.button !== 0) return;

    // Check for arrow fire
    if (player.selectedBlockType === 32) { // Bow
      // Fire arrow — reuse shared geo/mat, no allocation per shot
      const arrowDir = _inputRayDir.set(0, 0, -1).applyAxisAngle(_X_AXIS, player.camera.rotation.x).applyAxisAngle(_Y_AXIS, player.camera.rotation.y);
      const arrowMesh = new THREE.Mesh(_PLAYER_ARROW_GEO, _PLAYER_ARROW_MAT);
      arrowMesh.position.copy(player.position);
      arrowMesh.position.y += 0.6;
      scene.add(arrowMesh);
      playerArrows.push({
        mesh: arrowMesh,
        vel: arrowDir.multiplyScalar(30),
        life: 10,
      });
      sounds.play("hit");
      return;
    }

    attackRaycaster.setFromCamera(_CENTER_VEC2, camera);
    const result = mobManager?.tryAttack(attackRaycaster, enchants);
    if (result) {
      sounds.play("hit");
      achievements.trigger("first_mob");
      // Check if mob died and spawn drops/XP
      const mobData = mobManager?.getMob(result.mobId);
      if (mobData && !mobData.alive) {
        itemDrops.spawnFromMob(mobData.type, mobData.targetPos.x, mobData.targetPos.y, mobData.targetPos.z);
        // Spawn XP orbs
        const xpTable: Record<string, number> = {
          "pig": 3, "chicken": 2, "cow": 5, "sheep": 3,
          "zombie": 8, "skeleton": 10, "creeper": 5, "horse": 10, "villager": 0, "enderdragon": 100,
          "phantom": 6, "slime": 4, "witherskeleton": 8, "spider": 5, "wolf": 4, "cat": 0,
        };
        const mobTypeStr = mobData.type.toLowerCase();
        const xpAmount = xpTable[mobTypeStr] || 1;
        xpOrbs.spawn(mobData.targetPos.x, mobData.targetPos.y, mobData.targetPos.z, xpAmount);
        // Trigger mob-specific achievements
        if (mobData.type === "zombie") achievements.trigger("kill_zombie");
        if (mobData.type === "creeper") achievements.trigger("kill_creeper");
        if (mobData.type === "enderdragon") achievements.trigger("kill_dragon");
        // Track mob kill stats
        stats.recordMobKill(mobData.type);
        // Add kill feed entry
        ui.addKillFeedDeath(mobData.type);
      }
      if (!isSingleplayer) mp?.sendAttackMob(result.mobId, result.damage);
    }
  });

  // Shield handling (mouse down/up)
  document.addEventListener("mousedown", e => {
    if (e.button === 2 && player.selectedBlockType === 72) { // Shield block
      e.preventDefault();
      shieldActive = true;
      camera.fov = 65;
      camera.updateProjectionMatrix();
    }
  });

  document.addEventListener("mouseup", e => {
    if (e.button === 2) {
      shieldActive = false;
      camera.fov = 75;
      camera.updateProjectionMatrix();
    }
  });

  // Prevent right-click context menu
  document.addEventListener("contextmenu", e => {
    if (document.pointerLockElement) {
      e.preventDefault();
    }
  });

  // E key for inventory and bed interaction
  document.addEventListener("keydown", e => {
    if (e.key === "e" || e.key === "E") {
      if (!document.pointerLockElement || ui.isChatOpen()) return;
      e.preventDefault();

      // Check for enchanting table and bed interaction using DDA raycast
      const rayDir = _inputRayDir.set(0, 0, -1)
        .applyAxisAngle(_X_AXIS, player.camera.rotation.x)
        .applyAxisAngle(_Y_AXIS, player.camera.rotation.y)
        .normalize();
      const enchantHit = world.raycastBlock(player.position, rayDir, 5);

      if (enchantHit) {
        const enchantBlock = world.getBlock(enchantHit.x, enchantHit.y, enchantHit.z);

        if (enchantBlock && enchantBlock.type === 40) { // Enchanting Table
          if (xpLevel >= 5) {
            ui.showEnchantUI(xpLevel);
            return;
          } else {
            ui.addChatMessage("", "You need 5+ XP levels to enchant!", true);
            return;
          }
        }

        if (enchantBlock && enchantBlock.type === 34) { // Bed block type
          // Check if it's night time
          if (dayTime > 0.7 || dayTime < 0.25) {
            ui.addChatMessage("", "Sleeping...", true);
            dayTime = 0.25; // Skip to morning
            player.health = Math.min(player.maxHealth, player.health + 3);
            hunger = Math.min(maxHunger, hunger + 4);
            ui.updateHearts(player.health, player.maxHealth);
            ui.updateHunger(hunger, maxHunger);
            sounds.play("eat");
            setTimeout(() => {
              ui.addChatMessage("", "You woke up!", true);
            }, 2000);
          } else {
            ui.addChatMessage("", "You can only sleep at night!", true);
          }
          return;
        }
      }

      // Check for villager interaction
      if (mobManager) {
        // Reuse attackRaycaster with a shorter far distance
        attackRaycaster.far = 3;
        attackRaycaster.setFromCamera(_CENTER_VEC2, camera);
        const villagerMobs = mobManager.getAllMobsForDisplay();
        const villagerMeshes: Array<{ mesh: THREE.Object3D; mobId: string; type: string }> = [];

        for (const { id, mob } of villagerMobs) {
          if (mob.type === "villager") {
            mob.group.traverse(obj => {
              if ((obj as THREE.Mesh).isMesh) {
                villagerMeshes.push({ mesh: obj, mobId: id, type: mob.type });
              }
            });
          }
        }

        const _villagerMeshObjs = villagerMeshes.map(v => v.mesh); // build array once per click
        const villagerHits = attackRaycaster.intersectObjects(_villagerMeshObjs);
        if (villagerHits.length > 0) {
          const firstHit = villagerHits[0];
          const villagerInfo = villagerMeshes.find(v => v.mesh === firstHit.object);
          if (villagerInfo) {
            attackRaycaster.far = 5; // restore default far
            const trades = [
              { give: "45", giveName: "5 Wheat", receive: "food", receiveName: "1 Bread" },
              { give: "14", giveName: "3 Iron Ore", receive: "36", receiveName: "1 Iron Chestplate" },
              { give: "5", giveName: "10 Wood", receive: "33", receiveName: "1 Fishing Rod" },
              { give: "39", giveName: "1 Compass", receive: "46", receiveName: "1 Enchanted Book" },
            ];
            ui.showTradeUI(trades);
            ui.onTrade = (tradeIndex) => {
              // Handle trade
              ui.addChatMessage("", "Trade accepted!", true);
            };
            return;
          }
        }
        attackRaycaster.far = 5; // restore default far
      }

      // Otherwise open inventory
      if (inventoryOpen) {
        ui.hideInventory();
        inventoryOpen = false;
        document.body.requestPointerLock();
      } else {
        ui.showInventory(inventory);
        inventoryOpen = true;
        document.exitPointerLock();
      }
    }
  });

  // Tab key = inventory (like real Minecraft E key does inventory)
  document.addEventListener("keydown", e => {
    if (e.key === "Tab" && document.pointerLockElement && !ui.isChatOpen()) {
      e.preventDefault();
      if (inventoryOpen) {
        ui.hideInventory();
        inventoryOpen = false;
        document.body.requestPointerLock();
      } else {
        ui.showInventory(inventory);
        inventoryOpen = true;
        document.exitPointerLock();
      }
    }
  });

  // O key for scoreboard / stats overlay
  document.addEventListener("keydown", e => {
    if ((e.key === "o" || e.key === "O") && document.pointerLockElement && !ui.isChatOpen()) {
      e.preventDefault();
      if (ui.isScoreboardOpen()) {
        ui.hideScoreboard();
        document.body.requestPointerLock();
      } else {
        ui.showScoreboard(stats.getAll(), dayCount);
        document.exitPointerLock();
      }
    }
  });

  // F1 key for HUD visibility toggle
  let hudVisible = true;
  document.addEventListener("keydown", e => {
    if (e.key === "F1" || e.key === "f1") {
      e.preventDefault();
      hudVisible = !hudVisible;
      if (hudVisible) {
        ui.showHUD();
      } else {
        ui.hideHUD();
      }
    }
  });

  // F2 key for screenshot
  document.addEventListener("keydown", e => {
    if (e.key === "F2" || e.key === "f2") {
      e.preventDefault();
      try {
        const dataURL = renderer.domElement.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = "minecraft-" + Date.now() + ".png";
        a.click();
        ui.addChatMessage("", "Screenshot saved!", true);
      } catch (err) {
        ui.addChatMessage("", "Failed to capture screenshot", true);
      }
    }
  });

  // F3 key for debug screen
  document.addEventListener("keydown", e => {
    if (e.key === "F3" || e.key === "f3") {
      e.preventDefault();
      debugVisible = !debugVisible;
      if (debugVisible) {
        ui.showDebugScreen();
      } else {
        ui.hideDebugScreen();
      }
    }
  });

  // F4 key to toggle spectator mode
  document.addEventListener("keydown", e => {
    if (e.key === "F4" || e.key === "f4") {
      e.preventDefault();
      if (player.gameMode === "spectator") {
        player.setGameMode("survival");
        ui.setGameMode("survival");
        hunger = maxHunger;
        ui.updateHunger(hunger, maxHunger);
        ui.addChatMessage("", "Returned to Survival mode", true);
        mp?.sendGameMode("survival");
      } else {
        player.setGameMode("spectator");
        ui.setGameMode("spectator");
        ui.addChatMessage("", "Spectator mode — fly freely, no collisions, no damage (F4 to exit)", true);
        mp?.sendGameMode("spectator");
      }
    }
  });

  // Chest transfer callback
  ui.onChestTransfer = (fromChest, slotIndex, chestSlots, hotbarSlots) => {
    if (fromChest) {
      // Move item from chest to first empty hotbar slot
      const item = chestSlots[slotIndex];
      if (!item) return;
      const emptyIdx = hotbarSlots.indexOf(0);
      if (emptyIdx >= 0) {
        hotbarSlots[emptyIdx] = item;
        chestSlots[slotIndex] = 0;
        // Sync hotbar back to HOTBAR_BLOCKS
        for (let i = 0; i < hotbarSlots.length && i < HOTBAR_BLOCKS.length; i++) {
          HOTBAR_BLOCKS[i] = hotbarSlots[i];
        }
        ui.updateHotbarFromInventory(HOTBAR_BLOCKS);
        sounds.play("place");
      } else {
        ui.addChatMessage("", "Hotbar is full!", true);
      }
    } else {
      // Move item from hotbar to first empty chest slot
      const item = hotbarSlots[slotIndex];
      if (!item) return;
      const emptyIdx = chestSlots.indexOf(0);
      if (emptyIdx >= 0) {
        chestSlots[emptyIdx] = item;
        hotbarSlots[slotIndex] = 0;
        for (let i = 0; i < hotbarSlots.length && i < HOTBAR_BLOCKS.length; i++) {
          HOTBAR_BLOCKS[i] = hotbarSlots[i];
        }
        ui.updateHotbarFromInventory(HOTBAR_BLOCKS);
        sounds.play("place");
      } else {
        ui.addChatMessage("", "Chest is full!", true);
      }
    }
  };

  // Wave 9/10: E key for lever, chest, and furnace interaction
  document.addEventListener("keydown", e => {
    if ((e.key === "e" || e.key === "E") && hud.style.display !== "none") {
      // Check if looking at a chest within 5 blocks
      let chestPos: [number, number, number] | null = null;
      for (let x = -5; x <= 5 && !chestPos; x++) {
        for (let y = -5; y <= 5 && !chestPos; y++) {
          for (let z = -5; z <= 5 && !chestPos; z++) {
            const bx = Math.floor(player.position.x) + x;
            const by = Math.floor(player.position.y) + y;
            const bz = Math.floor(player.position.z) + z;
            const block = world.getBlock(bx, by, bz);
            if (block && block.type === 31) { // Chest
              const dist = player.position.distanceTo(_blockDistVec.set(bx + 0.5, by + 0.5, bz + 0.5));
              if (dist <= 5) {
                chestPos = [bx, by, bz];
              }
            }
          }
        }
      }

      if (chestPos) {
        const chestSlots = world.getChestInventory(chestPos[0], chestPos[1], chestPos[2]);
        const hotbarCopy = HOTBAR_BLOCKS.slice(0, 9);
        ui.showChestUI(chestSlots, hotbarCopy);
        ui.onChestClose = () => {
          world.setChestInventory(chestPos![0], chestPos![1], chestPos![2], chestSlots);
        };
        sounds.play("place");
        return;
      }

      // Check for crafting table within 5 blocks
      let craftTableNearby = false;
      for (let x = -5; x <= 5 && !craftTableNearby; x++) {
        for (let y = -5; y <= 5 && !craftTableNearby; y++) {
          for (let z = -5; z <= 5 && !craftTableNearby; z++) {
            const bx = Math.floor(player.position.x) + x;
            const by = Math.floor(player.position.y) + y;
            const bz = Math.floor(player.position.z) + z;
            const block = world.getBlock(bx, by, bz);
            if (block && block.type === 22) {
              const dist = player.position.distanceTo(_blockDistVec.set(bx + 0.5, by + 0.5, bz + 0.5));
              if (dist <= 5) craftTableNearby = true;
            }
          }
        }
      }
      if (craftTableNearby) {
        ui.showCraftingUI();
        sounds.play("place");
        return;
      }

      // Check if looking at a furnace within 5 blocks
      let furnacePos: [number, number, number] | null = null;
      for (let x = -5; x <= 5; x++) {
        for (let y = -5; y <= 5; y++) {
          for (let z = -5; z <= 5; z++) {
            const bx = Math.floor(player.position.x) + x;
            const by = Math.floor(player.position.y) + y;
            const bz = Math.floor(player.position.z) + z;
            const block = world.getBlock(bx, by, bz);
            if (block && block.type === 23) { // Furnace
              const dist = player.position.distanceTo(_blockDistVec.set(bx + 0.5, by + 0.5, bz + 0.5));
              if (dist <= 5) {
                furnacePos = [bx, by, bz];
                break;
              }
            }
          }
          if (furnacePos) break;
        }
        if (furnacePos) break;
      }

      if (furnacePos) {
        ui.showSmeltingUI();
        return;
      }

      // Check if looking at a lever within 2 blocks
      const rayDir = _inputRayDir.set(0, 0, -1)
        .applyAxisAngle(_X_AXIS, player.camera.rotation.x)
        .applyAxisAngle(_Y_AXIS, player.camera.rotation.y);

      const raycaster = new THREE.Raycaster(player.position, rayDir);
      raycaster.far = 2;

      let leverPos: [number, number, number] | null = null;
      for (let x = -2; x <= 2; x++) {
        for (let y = -2; y <= 2; y++) {
          for (let z = -2; z <= 2; z++) {
            const bx = Math.floor(player.position.x) + x;
            const by = Math.floor(player.position.y) + y;
            const bz = Math.floor(player.position.z) + z;
            const block = world.getBlock(bx, by, bz);
            if (block && block.type === 58) {
              const dist = player.position.distanceTo(_blockDistVec.set(bx + 0.5, by + 0.5, bz + 0.5));
              if (dist <= 2) {
                leverPos = [bx, by, bz];
                break;
              }
            }
          }
          if (leverPos) break;
        }
        if (leverPos) break;
      }

      if (leverPos) {
        world.toggleLever(leverPos[0], leverPos[1], leverPos[2]);
        sounds.play("place"); // Use place sound for lever
      }
    }
  });

  // Chat
  ui.onChat = (text) => {
    if (text.startsWith("/")) {
      handleCommand(text, currentPlayerName);
    } else {
      isSingleplayer ? ui.addChatMessage(currentPlayerName, text) : mp?.sendChat(text);
    }
    player.setChatOpen(false);
  };

  // Smelting callback
  ui.onSmelt = (inputType: number, fuelType: number) => {
    const output = smeltRecipes.get(inputType);
    if (output) {
      // Consume input from inventory (simplified: just add to inventory for now)
      inventory.push(output);
      ui.addChatMessage("", `Smelted: ${getBlockName(output)}`, true);
      sounds.play("eat");
      return output;
    }
    return null;
  };

  // Expose inventory count to UI for crafting display
  ui.getInvCount = (type: number) => invCountOf(type);

  // Real crafting recipes — mirrors what UI shows
  const CRAFT_RECIPES: Record<string, { ingredients: Record<number,number>; output: { type: number; count: number } }> = {
    log_to_planks:    { ingredients: { 5: 1 },          output: { type: 10,  count: 4 } },
    planks_to_sticks: { ingredients: { 10: 2 },         output: { type: 280, count: 4 } },
    wood_pickaxe:     { ingredients: { 10: 3, 280: 2 }, output: { type: 270, count: 1 } },
    wood_sword:       { ingredients: { 10: 2, 280: 1 }, output: { type: 268, count: 1 } },
    wood_axe:         { ingredients: { 10: 3, 280: 2 }, output: { type: 271, count: 1 } },
    wood_shovel:      { ingredients: { 10: 1, 280: 2 }, output: { type: 269, count: 1 } },
    stone_pickaxe:    { ingredients: { 11: 3, 280: 2 }, output: { type: 274, count: 1 } },
    stone_sword:      { ingredients: { 11: 2, 280: 1 }, output: { type: 272, count: 1 } },
    stone_axe:        { ingredients: { 11: 3, 280: 2 }, output: { type: 275, count: 1 } },
    iron_pickaxe:     { ingredients: { 62: 3, 280: 2 }, output: { type: 257, count: 1 } },
    iron_sword:       { ingredients: { 62: 2, 280: 1 }, output: { type: 267, count: 1 } },
    iron_axe:         { ingredients: { 62: 3, 280: 2 }, output: { type: 258, count: 1 } },
    iron_helmet:      { ingredients: { 62: 5 },          output: { type: 35,  count: 1 } },
    iron_chest:       { ingredients: { 62: 8 },          output: { type: 36,  count: 1 } },
    iron_legs:        { ingredients: { 62: 7 },          output: { type: 37,  count: 1 } },
    iron_boots:       { ingredients: { 62: 4 },          output: { type: 38,  count: 1 } },
    crafting_table:   { ingredients: { 10: 4 },          output: { type: 22,  count: 1 } },
    furnace:          { ingredients: { 11: 8 },          output: { type: 23,  count: 1 } },
    chest:            { ingredients: { 10: 8 },          output: { type: 31,  count: 1 } },
    torch:            { ingredients: { 64: 1, 280: 1 },  output: { type: 56,  count: 4 } },
    planks_to_slab:   { ingredients: { 10: 3 },          output: { type: 10,  count: 4 } },
    sand_to_glass:    { ingredients: { 4: 1 },            output: { type: 9,   count: 1 } },
    ladder:           { ingredients: { 280: 7 },           output: { type: 78,  count: 3 } },
    oak_fence:        { ingredients: { 10: 4, 280: 2 },   output: { type: 79,  count: 3 } },
    fence_gate:       { ingredients: { 280: 4, 10: 2 },   output: { type: 80,  count: 1 } },
    stone_bricks:     { ingredients: { 3: 4 },             output: { type: 81,  count: 4 } },
  };

  ui.onCraft = (recipeId) => {
    const recipe = CRAFT_RECIPES[recipeId];
    if (!recipe) return false;
    // Check we have all ingredients
    for (const [tStr, need] of Object.entries(recipe.ingredients)) {
      if (invCountOf(Number(tStr)) < need) {
        ui.addChatMessage("", `✗ Not enough materials`, true);
        return false;
      }
    }
    // Consume
    for (const [tStr, need] of Object.entries(recipe.ingredients)) {
      invRemoveItem(Number(tStr), need);
    }
    // Add output
    invAddItem(recipe.output.type, recipe.output.count);
    ui.updateHotbarFromInventory(inventory, invCount);
    ui.addChatMessage("", `✓ Crafted ${recipe.output.count}x ${getBlockName(recipe.output.type)}`, true);
    return true;
  };

  // Respawn
  ui.onRespawn = () => {
    // Fade to black, respawn, then fade back
    const screenFade = document.getElementById("screenFade")!;
    screenFade.style.background = "#000";
    screenFade.style.transition = "opacity 0.4s ease";
    screenFade.style.opacity = "1";
    setTimeout(() => {
      player.respawn();
      hunger = maxHunger;
      ui.updateHearts(player.maxHealth, player.maxHealth);
      ui.updateHunger(hunger, maxHunger);
      mp?.sendRespawn();
      // Fade back in
      setTimeout(() => {
        screenFade.style.transition = "opacity 0.6s ease";
        screenFade.style.opacity = "0";
        setTimeout(() => document.body.requestPointerLock(), 200);
      }, 200);
    }, 400);
  };

  ui.updateHearts(player.health, player.maxHealth);
  ui.updateHunger(hunger, maxHunger);
  ui.setGameMode(player.gameMode);

  // Hotbar scroll — cycle through inventory slots 0-7
  let hotbarSlot = 0;
  const updateHotbarSlot = (slot: number) => {
    hotbarSlot = ((slot % 8) + 8) % 8;
    player.selectedBlockType = inventory[hotbarSlot] ?? 0;
    ui.selectSlot(hotbarSlot);
    ui.updateHotbarFromInventory(inventory, invCount);
  };
  document.addEventListener("wheel", e => {
    updateHotbarSlot(hotbarSlot + (e.deltaY > 0 ? 1 : -1));
  });
  // Number keys 1-8
  document.addEventListener("keydown", e => {
    const n = parseInt(e.key);
    if (n >= 1 && n <= 8) updateHotbarSlot(n - 1);
  });

  // Setup item pickup callback
  itemDrops.onPickup = (item) => {
    sounds.play("eat");
    ui.addChatMessage("", "Picked up: " + item, true);

    // Handle armor items
    if (item === "iron_helmet" || item === "iron_chestplate" || item === "iron_leggings" || item === "iron_boots") {
      player.armor = Math.min(20, player.armor + 5);
      ui.addChatMessage("", `Armor: ${(player.armor / 20 * 100).toFixed(0)}%`, true);
    }
  };

  if (isSingleplayer) {
    ui.setConnectionStatus("connected");
    ui.updatePlayerCount(1);

    mobManager = new MobManager(scene, world, {
      onPlayerDamage: (amount) => {
        lastDeathCause = "You were killed by a mob";
        if (player.gameMode === "survival") {
          let actualDamage = amount;
          if (shieldActive && shieldDurability > 0) {
            // Shield reduces damage by 80%
            actualDamage = Math.ceil(amount * 0.2);
            shieldDurability--;
          }
          player.takeDamage(actualDamage);
          sounds.play("hurt");
          ui.updateHearts(player.health, player.maxHealth);
          if (player.health <= 0) { stats.increment("deaths"); ui.showDeath(); }
        }
      },
      getPlayerPos: () => player.position,
      onExplosion: (x, y, z, radius) => {
        // Destroy blocks in radius — squared avoids sqrt in triple loop
        const _rSq = radius * radius;
        for (let dx = -radius; dx <= radius; dx++) {
          for (let dy = -radius; dy <= radius; dy++) {
            for (let dz = -radius; dz <= radius; dz++) {
              if (dx*dx + dy*dy + dz*dz <= _rSq) {
                const bx = Math.round(x) + dx;
                const by = Math.round(y) + dy;
                const bz = Math.round(z) + dz;
                const b = world.getBlock(bx, by, bz);
                if (b) {
                  world.removeBlock(bx, by, bz);
                  particles.burst(bx, by, bz, b.type);
                }
              }
            }
          }
        }
        sounds.play("break");
        // Screen shake on explosion — intensity based on distance
        const _eDist = Math.sqrt(
          (player.position.x - x) ** 2 + (player.position.y - y) ** 2 + (player.position.z - z) ** 2
        );
        if (_eDist < 20) {
          screenShakeTimer = 0.4;
          screenShakeIntensity = Math.max(0.02, 0.12 * (1 - _eDist / 20));
        }
        // Brightness flash
        const origFilter = renderer.domElement.style.filter;
        renderer.domElement.style.filter = "brightness(1.3)";
        setTimeout(() => {
          renderer.domElement.style.filter = origFilter;
        }, 100);
      },
      // Wave 9: Wither effect callback
      onWitherEffect: () => {
        witherTimer = WITHER_DURATION;
      },
    }, true);

    for (let i = 0; i < 10; i++) mobManager.spawnRandom(0, 0);

    minimap = new Minimap(world);

    ui.addChatMessage("", `Welcome, ${currentPlayerName}! 🌍 Singleplayer`, true);
    ui.addChatMessage("", "T=chat · F5=3rd person · Ctrl=sprint · /help", true);

  } else {
    // Use VPS backend in production, localhost in dev
    // When on HTTPS, connect through nginx proxy (same host, no port) so wss:// works
    // When on HTTP/localhost, connect directly to Colyseus port
    const isSecure = window.location.protocol === "https:";
    const defaultAddr = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
      ? "localhost:8471"
      : isSecure
        ? window.location.hostname  // wss://159.223.140.36.nip.io (nginx proxies to :8471)
        : "159.223.140.36:8471";    // ws:// direct
    const serverAddr = (window as any).__getServerAddr?.() ?? defaultAddr;
    mp = new MultiplayerManager(scene, world, {
      onStatusChange: s => ui.setConnectionStatus(s),
      onChat:         (n, t, sys) => ui.addChatMessage(n, t, sys),
      onPlayerCount:  n => ui.updatePlayerCount(n),
      onPlayerDamage: (amount) => {
        player.takeDamage(amount);
        sounds.play("hurt");
        ui.updateHearts(player.health, player.maxHealth);
      },
      onPlayerDied: (name) => {
        ui.addChatMessage("", `☠ ${name} was slain!`, true);
        if (name === currentPlayerName) { stats.increment("deaths"); ui.showDeath(); }
      },
    }, serverAddr);

    mobManager = new MobManager(scene, world, {
      onPlayerDamage: () => {},
      getPlayerPos:   () => player.position,
      onExplosion: (x, y, z, radius) => {
        // Destroy blocks in radius — squared avoids sqrt in triple loop
        const _rSq2 = radius * radius;
        for (let dx = -radius; dx <= radius; dx++) {
          for (let dy = -radius; dy <= radius; dy++) {
            for (let dz = -radius; dz <= radius; dz++) {
              if (dx*dx + dy*dy + dz*dz <= _rSq2) {
                const bx = Math.round(x) + dx;
                const by = Math.round(y) + dy;
                const bz = Math.round(z) + dz;
                const b = world.getBlock(bx, by, bz);
                if (b) {
                  world.removeBlock(bx, by, bz);
                  particles.burst(bx, by, bz, b.type);
                }
              }
            }
          }
        }
        sounds.play("break");
        // Screen shake on explosion — intensity based on distance
        const _eDist = Math.sqrt(
          (player.position.x - x) ** 2 + (player.position.y - y) ** 2 + (player.position.z - z) ** 2
        );
        if (_eDist < 20) {
          screenShakeTimer = 0.4;
          screenShakeIntensity = Math.max(0.02, 0.12 * (1 - _eDist / 20));
        }
        // Brightness flash
        const origFilter = renderer.domElement.style.filter;
        renderer.domElement.style.filter = "brightness(1.3)";
        setTimeout(() => {
          renderer.domElement.style.filter = origFilter;
        }, 100);
      },
      // Wave 9: Wither effect callback
      onWitherEffect: () => {
        witherTimer = WITHER_DURATION;
      },
    }, false);

    mp.setMobManager(mobManager);
    mp.setLocalStateGetter(() => player.getState());
    await mp.join(currentPlayerName);

    ui.addChatMessage("", `Welcome, ${currentPlayerName}! 🌐 Multiplayer`, true);
    ui.addChatMessage("", "T=chat · F5=3rd person · /help", true);
  }
}

playBtn.addEventListener("click", () => startGame(nameInput.value));
nameInput.addEventListener("keydown", e => { if (e.key === "Enter") startGame(nameInput.value); });

const autoName = new URLSearchParams(window.location.search).get("name");
if (autoName) { nameInput.value = autoName; setTimeout(() => startGame(autoName), 800); }

// ── Game loop ─────────────────────────────────────────────────────────────────

let lastTime = performance.now();
let autoSaveTimer = 0;
const AUTO_SAVE_INTERVAL = 60; // seconds

// Pre-allocated reusable vectors to avoid per-frame allocations in the animate loop
const _animVec3 = new THREE.Vector3();
const _thunderColor = new THREE.Color(0xffffff);
// Reusable vectors for input handlers (raycast, block distance checks)
const _inputRayDir = new THREE.Vector3();
const _blockDistVec = new THREE.Vector3();
const _X_AXIS = new THREE.Vector3(1, 0, 0);
const _Y_AXIS = new THREE.Vector3(0, 1, 0);
// Reusable array for minimap mob display — pool of 20 entry objects, no allocation per mob per frame
const _MOB_POOL_SIZE = 20;
const _minimapMobPool: Array<{ x: number; z: number; alive: boolean }> =
  Array.from({ length: _MOB_POOL_SIZE }, () => ({ x: 0, z: 0, alive: true }));
const _minimapMobsBuf: Array<{ x: number; z: number; alive: boolean }> = [];
// Reusable pool for minimap other-player display — no new object per player per frame
const _PLAYER_POOL_SIZE = 8;
const _minimapPlayerPool: Array<{ x: number; z: number }> =
  Array.from({ length: _PLAYER_POOL_SIZE }, () => ({ x: 0, z: 0 }));
const _minimapPlayersBuf: Array<{ x: number; z: number }> = [];

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  const dt  = Math.min((now - lastTime) / 1000, 0.05);
  lastTime  = now;

  // Track FPS — circular Float32Array buffer, no GC pressure
  if (dt > 0) {
    _fpsBuf[_fpsBufIdx] = 1 / dt;
    _fpsBufIdx = (_fpsBufIdx + 1) % FPS_SAMPLE_SIZE;
    if (_fpsBufCount < FPS_SAMPLE_SIZE) _fpsBufCount++;
  }

  if (hud.style.display !== "none") {
    player.update(dt);
    mp?.updatePlayers(dt);

    // Auto-save every 60s in singleplayer
    if (isSingleplayer) {
      autoSaveTimer += dt;
      if (autoSaveTimer >= AUTO_SAVE_INTERVAL) {
        autoSaveTimer = 0;
        world.saveToStorage({
          inventory: [...inventory], invCount: [...invCount],
          px: player.position.x, py: player.position.y, pz: player.position.z,
          health: player.health, hunger,
          xp, xpLevel, dayCount,
        });
      }
    }

    // Dynamic chunk loading — every 3s in singleplayer
    if (isSingleplayer) {
      minimapTimer += dt;
      if (minimapTimer > 4) {
        minimapTimer = 0;
        // Generate chunks async-ish: defer to next frame to avoid main thread stall
        const px = player.position.x, pz = player.position.z;
        setTimeout(() => world.generateAroundPlayer(px, pz), 0);
      }
    }
    updateDayNight(dt);

    // Biome-specific fog tinting (only when not underwater or in nether)
    if (!isUnderwater && !netherMode) {
      biomeFogTimer += dt;
      if (biomeFogTimer > 2) { // check every 2 seconds
        biomeFogTimer = 0;
        const biome = world.getBiome(Math.round(player.position.x), Math.round(player.position.z));
        if (biome !== currentBiome) {
          currentBiome = biome;
        }
      }
      // Tint fog based on biome — blend subtly with base fog color
      const fog = scene.fog as THREE.Fog;
      const tint = BIOME_FOG_TINTS[currentBiome];
      if (tint) {
        fog.color.lerp(tint, 0.08);
      }
    }

    if (mobManager) {
      mobManager.dayTime = dayTime;
      mobManager.update(dt);
    }
    particles.update(dt);

    // Ambient particles — dust motes in sunlight, fireflies at night
    ambientParticleTimer += dt;
    if (ambientParticleTimer > 0.5) {
      ambientParticleTimer = 0;
      const sunAngle = (dayTime - 0.25) * Math.PI * 2;
      const sunUp = Math.sin(sunAngle);

      if (sunUp > 0.2) {
        // Daytime: floating dust motes in sunlight
        for (let i = 0; i < 2; i++) {
          const ox = (Math.random() - 0.5) * 16;
          const oy = Math.random() * 6 + 1;
          const oz = (Math.random() - 0.5) * 16;
          particles.dustMote(
            player.position.x + ox,
            player.position.y + oy,
            player.position.z + oz,
          );
        }
      } else if (sunUp < -0.1) {
        // Nighttime: fireflies near ground
        for (let i = 0; i < 3; i++) {
          const ox = (Math.random() - 0.5) * 20;
          const oz = (Math.random() - 0.5) * 20;
          particles.firefly(
            player.position.x + ox,
            player.position.y - 1 + Math.random() * 3,
            player.position.z + oz,
          );
        }
      }
    }

    tickWater(now / 1000);
    world.updateTorchFlicker(now / 1000);

    // Torch smoke and flame particles — only for nearby torches
    for (const [torchKey] of world.torchLights) {
      const [tx, ty, tz] = torchKey.split(",").map(Number);
      const tdx = tx - player.position.x;
      const tdz = tz - player.position.z;
      if (tdx * tdx + tdz * tdz > 576) continue; // 24^2 = 576 — skip distant torches
      // Smoke particle (grey, rising slowly)
      if (Math.random() < 0.06) {
        particles.spawn(
          tx + (Math.random() - 0.5) * 0.1,
          ty + 0.7,
          tz + (Math.random() - 0.5) * 0.1,
          0x888888, 1.5, 0, 0.3, 0, 0.15
        );
      }
      // Flame particle (orange/yellow, at torch tip)
      if (Math.random() < 0.04) {
        particles.spawn(
          tx + (Math.random() - 0.5) * 0.08,
          ty + 0.55,
          tz + (Math.random() - 0.5) * 0.08,
          0xff8800, 0.4, 0, 0.5, 0, 0.12
        );
      }
    }

    weather.update(dt, player.position, (scene.fog as THREE.Fog).color);
    itemDrops.update(dt, player.position);
    xpOrbs.update(dt, player.position);

    // Wave 9: Update wither effect
    if (witherTimer > 0) {
      witherTimer -= dt;
    }

    // Wave 10: Update stats
    stats.increment("playTime", dt);
    if (player.velocity) {
      stats.increment("distanceTraveled", player.velocity.length() * dt);
    }
    statsSaveTimer += dt;
    if (statsSaveTimer >= 60) {
      statsSaveTimer = 0;
      stats.save();
    }

    // Wave 9: Check pressure plates (throttled to 0.1s intervals)
    pressurePlateTimer += dt;
    if (pressurePlateTimer > 0.1) { pressurePlateTimer = 0; world.checkPressurePlate(player.position); }

    // Ambient sounds
    caveAmbientTimer += dt;
    if (caveAmbientTimer > 30) {
      caveAmbientTimer = 0;
      if (player.position.y < 10) {
        sounds.playAmbient("cave");
        sounds.setAmbientMood("cave");
      }
    }

    // Update fishing bobber
    if (fishingBobber) {
      fishingBobber.vel.y -= 20 * dt; // gravity
      fishingBobber.mesh.position.addScaledVector(fishingBobber.vel, dt);

      // Check if near water
      const bx = Math.round(fishingBobber.mesh.position.x);
      const by = Math.round(fishingBobber.mesh.position.y);
      const bz = Math.round(fishingBobber.mesh.position.z);
      const _btype = world.getBlockType(bx, by, bz);

      if (_btype === 7 && !fishingBobber.inWater) {
        // Hit water - stop and bob
        fishingBobber.inWater = true;
        fishingBobber.vel.set(0, 0, 0);
        fishingBobber.mesh.position.y = by + 0.5;
      }

      if (fishingBobber.inWater) {
        fishingBobber.waitTimer -= dt;
        // Bob effect
        fishingBobber.mesh.position.y = by + 0.5 + Math.sin(now * 0.003) * 0.1; // reuse frame timestamp

        if (fishingBobber.waitTimer <= 0) {
          // Time to catch! Flash the bobber
          (fishingBobber.mesh.material as THREE.MeshBasicMaterial).color.set(0xffff00);
          setTimeout(() => {
            if (fishingBobber?.mesh.material) {
              (fishingBobber.mesh.material as THREE.MeshBasicMaterial).color.set(0x0066cc);
            }
          }, 300);
        }
      }
    }

    // Update arrows
    for (let i = playerArrows.length - 1; i >= 0; i--) {
      const arrow = playerArrows[i];
      arrow.life -= dt;
      arrow.vel.y -= 20 * dt; // gravity arc
      arrow.mesh.position.addScaledVector(arrow.vel, dt);

      // Rotate arrow to face velocity direction
      const speed = Math.sqrt(arrow.vel.x * arrow.vel.x + arrow.vel.y * arrow.vel.y + arrow.vel.z * arrow.vel.z);
      if (speed > 0.1) {
        arrow.mesh.rotation.x = -Math.asin(arrow.vel.y / speed);
        arrow.mesh.rotation.y = Math.atan2(arrow.vel.x, arrow.vel.z);
      }

      // Spawn trail particle every few frames
      if (Math.random() < 0.3 && particles) {
        particles.spawn(
          arrow.mesh.position.x, arrow.mesh.position.y, arrow.mesh.position.z,
          0xffffaa, 0.3, 0, -0.2, 0
        );
      }

      // Check block collisions — arrow sticks into block
      const bx = Math.round(arrow.mesh.position.x);
      const by = Math.round(arrow.mesh.position.y);
      const bz = Math.round(arrow.mesh.position.z);
      if (world.hasBlock(bx, by, bz)) {
        // Create stuck arrow that persists briefly
        const stuckMesh = new THREE.Mesh(_PLAYER_ARROW_GEO, _PLAYER_ARROW_MAT);
        stuckMesh.position.copy(arrow.mesh.position);
        stuckMesh.rotation.copy(arrow.mesh.rotation);
        scene.add(stuckMesh);
        stuckArrows.push({ mesh: stuckMesh, life: 8 });
        scene.remove(arrow.mesh);
        playerArrows.splice(i, 1);
        continue;
      }

      // Check mob collisions — iterMobs() avoids Array.from+map allocation per frame
      let hit = false;
      if (mobManager) for (const lm of mobManager.iterMobs()) {
        const mob = lm.mob;
        const _adx = arrow.mesh.position.x - mob.targetPos.x;
        const _ady = arrow.mesh.position.y - mob.targetPos.y;
        const _adz = arrow.mesh.position.z - mob.targetPos.z;
        if (_adx*_adx + _ady*_ady + _adz*_adz < 0.64 && mob.alive) {
          mob.health -= 5;
          mob.showDamage(mob.health);
          if (mob.health <= 0) {
            mob.die();
            stats.recordMobKill(lm.data.type);
            itemDrops.spawnFromMob(lm.data.type, mob.targetPos.x, mob.targetPos.y, mob.targetPos.z);
          }
          scene.remove(arrow.mesh);
          playerArrows.splice(i, 1);
          hit = true;
          sounds.play("hit");
          break;
        }
      }

      // Remove if expired
      if (arrow.life <= 0 && !hit) {
        scene.remove(arrow.mesh);
        playerArrows.splice(i, 1);
      }
    }

    // Update stuck arrows (decay after 8 seconds)
    for (let i = stuckArrows.length - 1; i >= 0; i--) {
      stuckArrows[i].life -= dt;
      if (stuckArrows[i].life <= 0) {
        scene.remove(stuckArrows[i].mesh);
        stuckArrows.splice(i, 1);
      }
    }
    if (minimap) {
      // Reuse pre-allocated buffers — no new array per frame
      _minimapPlayersBuf.length = 0;
      if (mp && (mp as any).getPlayerData) {
        const playersData = (mp as any).getPlayerData?.() ?? [];
        let _playerPoolIdx = 0;
        for (const p of playersData) {
          if (p.name !== currentPlayerName && _playerPoolIdx < _PLAYER_POOL_SIZE) {
            // Reuse pool entry — no new object per player per frame
            const pe = _minimapPlayerPool[_playerPoolIdx++];
            pe.x = p.x; pe.z = p.z;
            _minimapPlayersBuf.push(pe);
          }
        }
      }
      _minimapMobsBuf.length = 0;
      if (mobManager) {
        let _mobPoolIdx = 0;
        for (const lm of mobManager.iterMobs()) {
          if (_mobPoolIdx < _MOB_POOL_SIZE) {
            // Reuse pool entry — no new object allocation per mob per frame
            const entry = _minimapMobPool[_mobPoolIdx++];
            entry.x = lm.mob.targetPos.x; entry.z = lm.mob.targetPos.z; entry.alive = lm.mob.alive;
            _minimapMobsBuf.push(entry);
          }
        }
      }
      minimap.update(dt, player.position, player.getYaw(), _minimapPlayersBuf, _minimapMobsBuf);
    }

    // Update boss bar if dragon is alive
    if (dragonMob && dragonMob.alive) {
      ui.updateBossBar(dragonMob.health, dragonMob.maxHealth);
    } else if (dragonMob && !dragonMob.alive) {
      ui.hideBossBar();
      dragonMob = null;
    }

    // ── Wave 9: Wither effect rendering ─────────────────────────────────────
    if (witherTimer > 0) {
      ui.updateHearts(player.health, player.maxHealth, true);
    } else {
      ui.updateHearts(player.health, player.maxHealth, false);
    }

    // ── Hunger & regen ──────────────────────────────────────────────────────
    if (player.gameMode === "survival") {
      // Hunger drains when moving — use squared distance to avoid sqrt + Vector3 alloc
      const _hdx = player.position.x - lastMoved.x;
      const _hdy = player.position.y - lastMoved.y;
      const _hdz = player.position.z - lastMoved.z;
      const movedSq = _hdx*_hdx + _hdy*_hdy + _hdz*_hdz;
      lastMoved.copy(player.position);
      if (movedSq > 0.01) { // 0.1^2=0.01 — avoids sqrt per frame
        hungerTimer += dt;
        if (hungerTimer > 1.5) {
          hungerTimer = 0;
          hunger = Math.max(0, hunger - 0.5);
          ui.updateHunger(Math.ceil(hunger * 2) / 2, maxHunger);
        }
      }

      // Health regen when hunger ≥ 16 and health < max
      if (hunger >= 16 && player.health < player.maxHealth) {
        regenTimer += dt;
        if (regenTimer > 4) {
          regenTimer = 0;
          (player as any).health = Math.min(player.maxHealth, player.health + 1);
          ui.updateHearts(player.health, player.maxHealth);
        }
      }

      // Starving damage when hunger = 0
      if (hunger <= 0) {
        lastDeathCause = "You starved";
        regenTimer += dt;
        if (regenTimer > 4) {
          regenTimer = 0;
          if (player.health > 1) player.takeDamage(1);
          ui.updateHearts(player.health, player.maxHealth);
        }
      }
    }

    // ── Lava damage ───────────────────────────────────────────────────────────
    if (player.gameMode === "survival") {
      const px = Math.round(player.position.x);
      const py = Math.round(player.position.y);
      const pz = Math.round(player.position.z);
      if (world.getBlockType(px, py, pz) === 47) { // Lava — getBlockType avoids {type} object
        lastDeathCause = "You burned in lava";
        regenTimer += dt;
        if (regenTimer > 0.5) {
          regenTimer = 0;
          player.takeDamage(2);
          ui.updateHearts(player.health, player.maxHealth);
        }
      }
    }

    // ── Potion effects ────────────────────────────────────────────────────────
    potionEffects.strength = Math.max(0, potionEffects.strength - dt);
    potionEffects.speed = Math.max(0, potionEffects.speed - dt);

    // ── Day/Night ambient events ───────────────────────────────────────────────
    if (prevDayTime < 0.22 && dayTime >= 0.22) {
      dayCount++;
      ui.updateDayCounter(dayCount);
      ui.addChatMessage("", "Dawn breaks...", true);
      sounds.playAmbient("birds");
      sounds.setAmbientMood("day");
    }
    if (prevDayTime < 0.73 && dayTime >= 0.73) {
      ui.addChatMessage("", "Night falls... watch out for monsters!", true);
      sounds.playAmbient("wind");
      sounds.setAmbientMood("night");
    }
    if (prevDayTime < 0.95 && dayTime >= 0.95) {
      // Chance to spawn extra zombies/skeletons at midnight
      if (mobManager && Math.random() < 0.5) {
        const spawnCount = 3 + Math.floor(Math.random() * 3);
        for (let i = 0; i < spawnCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = 20 + Math.random() * 15;
          const x = player.position.x + Math.cos(angle) * dist;
          const z = player.position.z + Math.sin(angle) * dist;
          const y = world.getSurfaceHeight(Math.round(x), Math.round(z)) + 1.5;
          const type = Math.random() < 0.5 ? "zombie" : "skeleton";
          mobManager.spawnMob(type, x, y, z);
        }
      }
    }
    prevDayTime = dayTime;

    ui.updatePosition(player.position.x, player.position.y, player.position.z);
    ui.updateTime(dayTime);
    updatePostEffects(dt, player.health, player.maxHealth);
    updateCrosshair(player.getBreakProgress());

    // Speed lines when sprinting
    const isSprinting = (player as any).keys?.["ControlLeft"] && player.velocity.lengthSq() > 4;
    speedLinesEl.style.opacity = isSprinting ? "0.7" : "0";

    // Center sun/moon/clouds around player
    sunMesh.position.x  += (player.position.x - sunMesh.position.x) * 0.02;
    moonMesh.position.x += (player.position.x - moonMesh.position.x) * 0.02;
    // skyDome.followCamera() already handled in updateDayNight

    // Thunder flash effect
    if (weather.isThunderFlashing()) {
      renderer.setClearColor(_thunderColor);
    }

    // Water splash particles — use getBlockType to avoid {type} object allocation
    const playerInWater = world.getBlockType(Math.round(player.position.x), Math.round(player.position.y), Math.round(player.position.z)) === 7;
    if (playerInWater && !prevWaterState) {
      particles.splash(player.position.x, player.position.y, player.position.z, 12);
      // Bubble burst when diving into water
      particles.bubbles(player.position.x, player.position.y - 0.5, player.position.z, 8);
      sounds.play("splash");
    }
    prevWaterState = playerInWater;

    // Underwater visual effects — check if camera (eye level) is submerged
    const eyeInWater = world.getBlockType(
      Math.round(camera.position.x),
      Math.round(camera.position.y),
      Math.round(camera.position.z),
    ) === 7;

    if (eyeInWater !== isUnderwater) {
      isUnderwater = eyeInWater;
      underwaterOverlay.style.opacity = isUnderwater ? "1" : "0";
    }

    if (isUnderwater) {
      // Tighter, blue fog underwater
      const fog = scene.fog as THREE.Fog;
      fog.near = WATER_FOG_NEAR;
      fog.far  = WATER_FOG_FAR;
      fog.color.copy(WATER_FOG_COLOR);
      renderer.setClearColor(WATER_FOG_COLOR);

      // Bubble particles from player
      underwaterBubbleTimer += dt;
      if (underwaterBubbleTimer > 0.3) {
        underwaterBubbleTimer = 0;
        particles.bubbles(player.position.x, player.position.y + 0.5, player.position.z, 2);
      }
    } else if (!netherMode) {
      // Restore normal fog when not underwater (only if not in nether)
      const fog = scene.fog as THREE.Fog;
      fog.near = NORMAL_FOG_NEAR;
      fog.far  = NORMAL_FOG_FAR;
    }

    // ── Nether portal proximity effect ─────────────────────────────────────
    const portalDist = findNearestPortal(player.position.x, player.position.y, player.position.z);
    if (portalDist >= 0) {
      // Intensity increases as player gets closer (max at distance 0-1)
      const targetProximity = Math.max(0, 1 - portalDist / PORTAL_DETECT_RANGE);
      portalProximity += (targetProximity - portalProximity) * 0.08;
    } else {
      portalProximity += (0 - portalProximity) * 0.08;
    }

    if (portalProximity > 0.01) {
      portalOverlay.style.opacity = String(portalProximity);
      // Screen distortion effect — hue shift + blur intensifies with proximity
      const hueShift = Math.sin(performance.now() * 0.002) * portalProximity * 40;
      const blurAmt = portalProximity * 1.5;
      const satAmt = 1 + portalProximity * 1.2;
      renderer.domElement.style.filter =
        `hue-rotate(${hueShift}deg) blur(${blurAmt}px) saturate(${satAmt})`;
      // Nether-themed fog color shift when very close
      if (portalProximity > 0.6 && !isUnderwater) {
        const fog = scene.fog as THREE.Fog;
        const t = (portalProximity - 0.6) / 0.4; // 0..1
        fog.color.lerpColors(fog.color, NETHER_FOG_COLOR, t * 0.15);
        fog.near = NORMAL_FOG_NEAR - t * 20;
        fog.far = NORMAL_FOG_FAR - t * 30;
        netherMode = true;
      }
      // Purple magic particles near portals
      if (portalDist >= 0 && portalDist < 3 && Math.random() < 0.3) {
        particles.magic(
          player.position.x + (Math.random() - 0.5) * 3,
          player.position.y + (Math.random() - 0.5) * 2,
          player.position.z + (Math.random() - 0.5) * 3,
          1
        );
      }
    } else {
      portalOverlay.style.opacity = "0";
      renderer.domElement.style.filter = "";
      if (netherMode) {
        netherMode = false;
        // Fog will be restored by normal fog logic above
      }
    }

    // Footstep sounds — trigger based on movement distance
    footstepTimer += dt;
    if (footstepTimer > footstepInterval && player.onGround) {
      const dx = player.position.x - lastFootstepPos.x;
      const dz = player.position.z - lastFootstepPos.z;
      const distSq = dx * dx + dz * dz;
      if (distSq > 1.5) { // moved ~1.2 blocks
        footstepTimer = 0;
        lastFootstepPos.set(player.position.x, 0, player.position.z);
        // Determine surface type from block below player
        const bx = Math.round(player.position.x);
        const by = Math.round(player.position.y - 1.9);
        const bz = Math.round(player.position.z);
        const blockBelow = world.getBlockType(bx, by, bz);
        let surfaceType = "dirt";
        if (blockBelow === 3 || blockBelow === 11 || blockBelow === 17 || blockBelow === 18) surfaceType = "stone";
        else if (blockBelow === 4 || blockBelow === 12 || blockBelow === 49) surfaceType = "sand";
        else if (blockBelow === 5 || blockBelow === 10 || blockBelow === 16) surfaceType = "wood";
        else if (blockBelow === 1 || blockBelow === 6) surfaceType = "grass";
        const sprinting = (player as any).keys?.["ControlLeft"];
        footstepInterval = sprinting ? 0.25 : 0.35;
        sounds.playStepOnBlock(0.7, surfaceType);
      }
    }

    // Landing impact sound
    if (player.onGround && !wasPlayerOnGround && player.velocity.y < -0.5) {
      sounds.playLanding(Math.min(Math.abs(player.velocity.y) / 10, 1));
    }
    wasPlayerOnGround = player.onGround;

    // Campfire detection and effects
    campfireTimer += dt;
    if (campfireTimer > 1) {
      campfireTimer = 0;
      const nearCampfire = world.isNearBlock(
        Math.round(player.position.x),
        Math.round(player.position.y),
        Math.round(player.position.z),
        55,
        5
      );
      if (nearCampfire) {
        particles.smoke(player.position.x, player.position.y + 1, player.position.z, 2);
      }
    }

    // Update debug screen
    if (debugVisible) {
      // Calculate average FPS from circular buffer
      let _fpsSum = 0;
      for (let _fi = 0; _fi < _fpsBufCount; _fi++) _fpsSum += _fpsBuf[_fi];
      const avgFps = _fpsBufCount > 0 ? _fpsSum / _fpsBufCount : 0;

      // Calculate facing direction
      const yaw = player.getYaw();
      const yawDeg = (yaw * 180 / Math.PI + 360) % 360;
      let facing = "Unknown";
      if (yawDeg < 45 || yawDeg >= 315) facing = "South (0°)";
      else if (yawDeg < 135) facing = "West (90°)";
      else if (yawDeg < 225) facing = "North (180°)";
      else facing = "East (270°)";

      // Get biome (stub for now)
      const biome = "Unknown";

      // Get block below player — use getBlockType (no object allocation)
      const blockBelowPos = Math.round(player.position.y - 1);
      const _blockBelowType = world.getBlockType(Math.round(player.position.x), blockBelowPos, Math.round(player.position.z));
      const blockBelowName = _blockBelowType !== undefined ? getBlockName(_blockBelowType) : "Air";

      // Get weather
      const weatherStr = weather && (weather as any).isRaining ? "Rainy" : "Clear";

      // Get mob/block count — getMobCount() uses mobs.size, no array allocation
      const mobCount = mobManager?.getMobCount() ?? 0;
      const blockCount = world.getBlockCount?.() ?? 0;

      ui.updateDebugScreen({
        fps: avgFps,
        x: player.position.x,
        y: player.position.y,
        z: player.position.z,
        biome,
        blockBelow: blockBelowName,
        facing,
        dayTime,
        mobCount,
        blockCount,
        weather: weatherStr,
        gameMode: player.gameMode,
        version: "0.8",
      });
    }
  }

  // Apply screen shake
  if (screenShakeTimer > 0) {
    screenShakeTimer -= dt;
    const shakeX = (Math.random() - 0.5) * 2 * screenShakeIntensity;
    const shakeY = (Math.random() - 0.5) * 2 * screenShakeIntensity;
    camera.position.x += shakeX;
    camera.position.y += shakeY;
  }

  renderer.render(scene, camera);

  // Reset clear color if it was flashed
  if (weather.isThunderFlashing()) {
    renderer.setClearColor(_fogColorBuf);
  }
}

animate();

// Save on tab close / navigation
window.addEventListener("beforeunload", () => {
  if (isSingleplayer) {
    world.saveToStorage({
      inventory: [...inventory], invCount: [...invCount],
      px: player.position.x, py: player.position.y, pz: player.position.z,
      health: player.health, hunger,
      xp, xpLevel, dayCount,
    });
  }
});
