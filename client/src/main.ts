import * as THREE from "three";
import { World }              from "./World";
import { Player, GameMode }   from "./Player";
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

// ── Renderer ─────────────────────────────────────────────────────────────────

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
renderer.toneMapping       = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Scene ─────────────────────────────────────────────────────────────────────

const scene  = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog        = new THREE.Fog(0x87ceeb, 55, 160);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.05, 300);

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

// Stars (only visible at night)
const starGeo   = new THREE.BufferGeometry();
const starCount = 1200;
const starPos   = new Float32Array(starCount * 3);
for (let i = 0; i < starCount; i++) {
  const theta  = Math.random() * Math.PI * 2;
  const phi    = Math.acos(2 * Math.random() - 1);
  const r      = 180;
  starPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
  starPos[i * 3 + 1] = r * Math.abs(Math.cos(phi)); // only upper hemisphere
  starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
}
starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
const starMat   = new THREE.PointsMaterial({ color: 0xffffff, size: 0.6, sizeAttenuation: false });
const stars     = new THREE.Points(starGeo, starMat);
scene.add(stars);

// Clouds (simple flat boxes drifting)
const clouds: THREE.Mesh[] = [];
const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.82 });
for (let i = 0; i < 18; i++) {
  const w   = 8  + Math.random() * 14;
  const d   = 5  + Math.random() * 8;
  const geo = new THREE.BoxGeometry(w, 1.2, d);
  const c   = new THREE.Mesh(geo, cloudMat);
  c.position.set(
    (Math.random() - 0.5) * 200,
    28 + Math.random() * 8,
    (Math.random() - 0.5) * 200,
  );
  c.castShadow = false;
  scene.add(c);
  clouds.push(c);
}

// ── Lighting ──────────────────────────────────────────────────────────────────

const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xfff4e0, 1.4);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
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

function updateDayNight(dt: number) {
  dayTime = (dayTime + dt / DAY_DURATION) % 1;

  // Sun/moon orbit
  const sunAngle  = (dayTime - 0.25) * Math.PI * 2;  // noon = top
  const moonAngle = sunAngle + Math.PI;
  const R = 150;

  sunMesh.position.set(0, Math.sin(sunAngle) * R, Math.cos(sunAngle) * R);
  moonMesh.position.set(0, Math.sin(moonAngle) * R, Math.cos(moonAngle) * R);

  sun.position.copy(sunMesh.position).normalize().multiplyScalar(100);
  moonLight.position.copy(moonMesh.position).normalize().multiplyScalar(100);

  // Sky color lerp
  let skyColor: THREE.Color, fogColor: THREE.Color, sunIntensity: number, ambientIntensity: number;

  const t = dayTime;
  if (t < 0.2) {
    // Night → dawn (0 → 0.2)
    const p = t / 0.2;
    skyColor = SKY_COLORS.night.clone().lerp(SKY_COLORS.dawn, p);
    fogColor = FOG_COLORS.night.clone().lerp(FOG_COLORS.dawn, p);
    sunIntensity     = 0.05 + p * 0.8;
    ambientIntensity = 0.05 + p * 0.45;
  } else if (t < 0.3) {
    // Dawn → day (0.2 → 0.3)
    const p = (t - 0.2) / 0.1;
    skyColor = SKY_COLORS.dawn.clone().lerp(SKY_COLORS.day, p);
    fogColor = FOG_COLORS.dawn.clone().lerp(FOG_COLORS.day, p);
    sunIntensity     = 0.85 + p * 0.55;
    ambientIntensity = 0.5 + p * 0.1;
  } else if (t < 0.7) {
    // Full day (0.3 → 0.7)
    skyColor = SKY_COLORS.day.clone();
    fogColor = FOG_COLORS.day.clone();
    sunIntensity     = 1.4;
    ambientIntensity = 0.6;
  } else if (t < 0.8) {
    // Day → dusk (0.7 → 0.8)
    const p = (t - 0.7) / 0.1;
    skyColor = SKY_COLORS.day.clone().lerp(SKY_COLORS.dusk, p);
    fogColor = FOG_COLORS.day.clone().lerp(FOG_COLORS.dusk, p);
    sunIntensity     = 1.4 - p * 1.35;
    ambientIntensity = 0.6 - p * 0.55;
  } else {
    // Dusk → night (0.8 → 1)
    const p = (t - 0.8) / 0.2;
    skyColor = SKY_COLORS.dusk.clone().lerp(SKY_COLORS.night, p);
    fogColor = FOG_COLORS.dusk.clone().lerp(FOG_COLORS.night, p);
    sunIntensity     = 0.05;
    ambientIntensity = 0.05;
  }

  renderer.setClearColor(skyColor);
  scene.background = skyColor;
  (scene.fog as THREE.Fog).color.copy(fogColor);

  sun.intensity       = sunIntensity;
  ambient.intensity   = Math.max(ambientIntensity, 0.04);
  moonLight.intensity = Math.max(0.35 - sunIntensity * 0.2, 0);
  hemi.intensity      = ambientIntensity * 0.5;

  // Stars appear at night
  starMat.opacity = Math.max(0, 1 - sunIntensity * 1.5);
  starMat.transparent = true;

  // Sun/moon color
  const isSunUp = Math.sin(sunAngle) > 0;
  sunMesh.visible  =  isSunUp;
  moonMesh.visible = !isSunUp;

  // Cloud drift
  for (const c of clouds) {
    c.position.x = ((c.position.x + 0.015 * dt * 20) % 200) - 100;
    (c.material as THREE.MeshLambertMaterial).opacity = ambientIntensity > 0.2 ? 0.82 : 0;
  }
}

// ── Core objects ──────────────────────────────────────────────────────────────

const world     = new World(scene);
const player    = new Player(camera, world, scene);
const ui        = new UI();
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

// ── Achievement System ────────────────────────────────────────────────────────

const achievements = new AchievementManager();

// ── Inventory System ──────────────────────────────────────────────────────────

let inventoryOpen = false;
const inventory: number[] = [1, 1, 1, 3, 3, 10, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// ── Arrow System ──────────────────────────────────────────────────────────────

interface Arrow {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
}
const playerArrows: Arrow[] = [];

interface FishingBobber {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  inWater: boolean;
  waitTimer: number;
}
let fishingBobber: FishingBobber | null = null;

// ── TNT System ────────────────────────────────────────────────────────────────

let netherMode = false;

const attackRaycaster = new THREE.Raycaster();
attackRaycaster.far   = 5;

const arrowRaycaster = new THREE.Raycaster();
arrowRaycaster.far   = 1;

// ── Hunger & regen ────────────────────────────────────────────────────────────

let hunger      = 20;
let maxHunger   = 20;
let regenTimer  = 0;
let hungerTimer = 0;
let lastMoved   = new THREE.Vector3();
let visibilityTimer = 0;
let caveAmbientTimer = 0;

// ── Enchantments ──────────────────────────────────────────────────────────────

const enchants = { sharpness: 0, protection: 0, speed: 0 };

// ── Potions ───────────────────────────────────────────────────────────────────

const potionEffects = { strength: 0, speed: 0 };

// ── Wave 9: Wither Effect ─────────────────────────────────────────────────────

let witherTimer = 0;
const WITHER_DURATION = 5; // 5 seconds

// ── Day/Night cycle tracking ──────────────────────────────────────────────────

let prevDayTime = 0;

// ── Debug screen ───────────────────────────────────────────────────────────────

let debugVisible = false;
let fpsFrames = 0;
let fpsSamples: number[] = [];
const FPS_SAMPLE_SIZE = 60;

// ── Death tracking ──────────────────────────────────────────────────────────────

let lastDeathCause = "You died";
let lastDeathPos = new THREE.Vector3();

// ── Campfire timer ──────────────────────────────────────────────────────────────

let campfireTimer = 0;
let prevWaterState = false;

// ── Command handler ───────────────────────────────────────────────────────────

function handleCommand(cmd: string, playerName: string): boolean {
  const parts = cmd.trim().split(/\s+/);
  const base  = parts[0].toLowerCase();

  if (base === "/gamemode") {
    const mode = parts[1]?.toLowerCase() as GameMode;
    if (mode === "creative" || mode === "survival") {
      player.setGameMode(mode);
      ui.setGameMode(mode);
      if (mode === "survival") { hunger = 20; ui.updateHunger(hunger, maxHunger); }
      ui.addChatMessage("", `Gamemode set to ${mode}`, true);
      mp?.sendGameMode(mode);
      return true;
    }
    ui.addChatMessage("", "Usage: /gamemode creative | survival", true);
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
      scene.background = new THREE.Color(0x220000);
      ui.addChatMessage("", "Entered the Nether!", true);
      return true;
    }
    if (sub === "exit") {
      netherMode = false;
      player.spawnAt(player.position.x, player.position.z);
      (scene.fog as THREE.Fog).color.copy(new THREE.Color(0x87ceeb));
      scene.background = new THREE.Color(0x87ceeb);
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
      world.saveToStorage();
      ui.addChatMessage("", "World saved!", true);
    } else {
      ui.addChatMessage("", "Save only works in singleplayer", true);
    }
    return true;
  }

  if (base === "/load") {
    if (isSingleplayer) {
      world.loadFromStorage();
      ui.addChatMessage("", "World loaded!", true);
    } else {
      ui.addChatMessage("", "Load only works in singleplayer", true);
    }
    return true;
  }

  if (base === "/help") {
    [
      "/gamemode creative | survival",
      "/kill  /heal  /feed",
      "/time day | night | sunrise | sunset",
      "/tp <x> <z>",
      "/craft",
      "/weather clear | rain | thunder",
      "/nether enter | exit",
      "/boss - spawn the Ender Dragon",
      "/achievements - show achievements",
      "/save · /load (singleplayer only)",
      "F5 = 3rd person · Ctrl = sprint · E = inventory",
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

async function startGame(name: string) {
  currentPlayerName = name.trim() || `Player${Math.floor(Math.random() * 999)}`;
  const mode       = (window as any).__getSelectedMode?.() ?? "sp";
  isSingleplayer   = mode === "sp";

  loginScreen.style.display = "none";
  hud.style.display         = "block";

  // Load saved world if singleplayer
  if (isSingleplayer) {
    world.loadFromStorage();
    // Wave 9: Initialize torch lights after loading
    world.initializeTorchLights();
  }

  player.spawnAt(0, 0);
  setTimeout(() => document.body.requestPointerLock(), 200);

  // Player callbacks
  player.onHealthChanged = hp => ui.updateHearts(hp, player.maxHealth);
  player.setDeathCause = (cause) => { lastDeathCause = cause; };
  player.onDied = () => {
    lastDeathPos.copy(player.position);
    ui.showDeath(lastDeathCause, lastDeathPos.x, lastDeathPos.y, lastDeathPos.z, xpLevel);
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
        // Reel in
        scene.remove(fishingBobber.mesh);
        fishingBobber.mesh.geometry.dispose();
        (fishingBobber.mesh.material as THREE.MeshBasicMaterial).dispose();
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
        const rayDir = new THREE.Vector3(0, 0, -1)
          .applyAxisAngle(new THREE.Vector3(1, 0, 0), player.camera.rotation.x)
          .applyAxisAngle(new THREE.Vector3(0, 1, 0), player.camera.rotation.y);

        const bobberGeo = new THREE.SphereGeometry(0.15, 8, 8);
        const bobberMat = new THREE.MeshBasicMaterial({ color: 0x0066cc });
        const bobberMesh = new THREE.Mesh(bobberGeo, bobberMat);
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
          for (let dx = -radius; dx <= radius; dx++) {
            for (let dy = -radius; dy <= radius; dy++) {
              for (let dz = -radius; dz <= radius; dz++) {
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist <= radius) {
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
          const distToPlayer = Math.sqrt(
            Math.pow(player.position.x - x, 2) +
            Math.pow(player.position.y - y, 2) +
            Math.pow(player.position.z - z, 2)
          );
          if (distToPlayer < 7 && player.gameMode === "survival") {
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
    // Wave 9: Add torch lights
    if (t === 56) {
      world.addTorchLight(x, y + 0.5, z);
    }

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
    if (e.button !== 0 || !document.pointerLockElement) return;

    // Check for arrow fire
    if (player.selectedBlockType === 32) { // Bow
      // Fire arrow
      const arrowDir = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(1, 0, 0), player.camera.rotation.x).applyAxisAngle(new THREE.Vector3(0, 1, 0), player.camera.rotation.y);
      const arrowGeo = new THREE.BoxGeometry(0.05, 0.05, 0.4);
      const arrowMat = new THREE.MeshBasicMaterial({ color: 0xffdd44 });
      const arrowMesh = new THREE.Mesh(arrowGeo, arrowMat);
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

    attackRaycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
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
        };
        const mobTypeStr = mobData.type.toLowerCase();
        const xpAmount = xpTable[mobTypeStr] || 1;
        xpOrbs.spawn(mobData.targetPos.x, mobData.targetPos.y, mobData.targetPos.z, xpAmount);
        // Trigger mob-specific achievements
        if (mobData.type === "zombie") achievements.trigger("kill_zombie");
        if (mobData.type === "creeper") achievements.trigger("kill_creeper");
        if (mobData.type === "enderdragon") achievements.trigger("kill_dragon");
        // Add kill feed entry
        ui.addKillFeedDeath(mobData.type);
      }
      if (!isSingleplayer) mp?.sendAttackMob(result.mobId, result.damage);
    }
  });

  // E key for inventory and bed interaction
  document.addEventListener("keydown", e => {
    if (e.key === "e" || e.key === "E") {
      if (!document.pointerLockElement || ui.isChatOpen()) return;
      e.preventDefault();

      // Check for enchanting table interaction
      const enchantRaycaster = new THREE.Raycaster();
      enchantRaycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
      enchantRaycaster.far = 5;
      const enchantHits = enchantRaycaster.intersectObjects(world.getMeshes());

      for (const hit of enchantHits) {
        const meshPos = hit.point.clone().add(hit.face!.normal.clone().multiplyScalar(0.1));
        const bx = Math.round(meshPos.x);
        const by = Math.round(meshPos.y);
        const bz = Math.round(meshPos.z);
        const enchantBlock = world.getBlock(bx, by, bz);

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
        const villagerRaycaster = new THREE.Raycaster();
        villagerRaycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
        villagerRaycaster.far = 3;
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

        const villagerHits = villagerRaycaster.intersectObjects(villagerMeshes.map(v => v.mesh));
        if (villagerHits.length > 0) {
          const firstHit = villagerHits[0];
          const villagerInfo = villagerMeshes.find(v => v.mesh === firstHit.object);
          if (villagerInfo) {
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

  // Tab key for player list
  document.addEventListener("keydown", e => {
    if (e.key === "Tab" && document.pointerLockElement) {
      e.preventDefault();
      if (mp && (mp as any).room) {
        const players: { name: string; ping: number }[] = [];
        (mp as any).room.state.players.forEach((p: any) => {
          players.push({ name: p.name, ping: 0 });
        });
        ui.showPlayerList(players);
      }
    }
  });

  document.addEventListener("keyup", e => {
    if (e.key === "Tab") {
      ui.hidePlayerList();
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

  // Wave 9: E key for lever interaction
  document.addEventListener("keydown", e => {
    if ((e.key === "e" || e.key === "E") && hud.style.display !== "none") {
      // Check if looking at a lever within 2 blocks
      const rayDir = new THREE.Vector3(0, 0, -1)
        .applyAxisAngle(new THREE.Vector3(1, 0, 0), player.camera.rotation.x)
        .applyAxisAngle(new THREE.Vector3(0, 1, 0), player.camera.rotation.y);

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
              const dist = player.position.distanceTo(new THREE.Vector3(bx + 0.5, by + 0.5, bz + 0.5));
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

  // Crafting
  ui.onCraft = (recipeId) => {
    const hotbarBlocks = HOTBAR_BLOCKS;
    // Dummy crafting - just add block to hotbar if not full
    let block = 22; // default to crafting table
    if (recipeId === "planks_to_sticks") block = 0; // placeholder
    if (recipeId === "cobble_to_furnace") block = 23;
    if (recipeId === "planks_to_table") block = 22;
    // In a real game, this would consume materials and add to inventory
    ui.addChatMessage("", `Crafted: ${recipeId}`, true);
  };

  // Respawn
  ui.onRespawn = () => {
    player.respawn();
    hunger = maxHunger;
    ui.updateHearts(player.maxHealth, player.maxHealth);
    ui.updateHunger(hunger, maxHunger);
    mp?.sendRespawn();
    setTimeout(() => document.body.requestPointerLock(), 150);
  };

  ui.updateHearts(player.health, player.maxHealth);
  ui.updateHunger(hunger, maxHunger);
  ui.setGameMode(player.gameMode);

  // Hotbar scroll
  document.addEventListener("wheel", e => {
    const dir  = e.deltaY > 0 ? 1 : -1;
    const idx  = HOTBAR_BLOCKS.indexOf(player.selectedBlockType);
    const next = ((idx + dir) + HOTBAR_BLOCKS.length) % HOTBAR_BLOCKS.length;
    player.selectedBlockType = HOTBAR_BLOCKS[next];
    ui.selectSlot(next);
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
          player.takeDamage(amount);
          sounds.play("hurt");
          ui.updateHearts(player.health, player.maxHealth);
          if (player.health <= 0) ui.showDeath();
        }
      },
      getPlayerPos: () => player.position,
      onExplosion: (x, y, z, radius) => {
        // Destroy blocks in radius
        for (let dx = -radius; dx <= radius; dx++) {
          for (let dy = -radius; dy <= radius; dy++) {
            for (let dz = -radius; dz <= radius; dz++) {
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
              if (dist <= radius) {
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
        // Camera shake via brief CSS animation
        const origFilter = renderer.domElement.style.filter;
        renderer.domElement.style.filter = "brightness(1.2)";
        setTimeout(() => {
          renderer.domElement.style.filter = origFilter;
        }, 80);
      },
      // Wave 9: Wither effect callback
      onWitherEffect: () => {
        witherTimer = WITHER_DURATION;
      },
    }, true);

    for (let i = 0; i < 16; i++) mobManager.spawnRandom(0, 0);

    minimap = new Minimap(world);

    ui.addChatMessage("", `Welcome, ${currentPlayerName}! 🌍 Singleplayer`, true);
    ui.addChatMessage("", "T=chat · F5=3rd person · Ctrl=sprint · /help", true);

  } else {
    const serverAddr = (window as any).__getServerAddr?.() ?? "localhost:8471";
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
        if (name === currentPlayerName) ui.showDeath();
      },
    }, serverAddr);

    mobManager = new MobManager(scene, world, {
      onPlayerDamage: () => {},
      getPlayerPos:   () => player.position,
      onExplosion: (x, y, z, radius) => {
        // Destroy blocks in radius
        for (let dx = -radius; dx <= radius; dx++) {
          for (let dy = -radius; dy <= radius; dy++) {
            for (let dz = -radius; dz <= radius; dz++) {
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
              if (dist <= radius) {
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
        // Camera shake via brief CSS animation
        const origFilter = renderer.domElement.style.filter;
        renderer.domElement.style.filter = "brightness(1.2)";
        setTimeout(() => {
          renderer.domElement.style.filter = origFilter;
        }, 80);
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

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  const dt  = Math.min((now - lastTime) / 1000, 0.05);
  lastTime  = now;

  // Track FPS
  if (dt > 0) {
    const fps = 1 / dt;
    fpsSamples.push(fps);
    if (fpsSamples.length > FPS_SAMPLE_SIZE) fpsSamples.shift();
  }

  if (hud.style.display !== "none") {
    player.update(dt);
    mp?.updatePlayers(dt);
    mobManager?.update(dt);
    particles.update(dt);
    updateDayNight(dt);
    weather.update(dt, player.position, (scene.fog as THREE.Fog).color);
    itemDrops.update(dt, player.position);
    xpOrbs.update(dt, player.position);

    // Wave 9: Update wither effect
    if (witherTimer > 0) {
      witherTimer -= dt;
    }

    // Wave 9: Check pressure plates
    world.checkPressurePlate(player.position);

    // Call updateVisibility every 2 seconds
    visibilityTimer += dt;
    if (visibilityTimer > 2) { visibilityTimer = 0; world.updateVisibility(player.position); }

    // Ambient sounds
    caveAmbientTimer += dt;
    if (caveAmbientTimer > 30) {
      caveAmbientTimer = 0;
      if (player.position.y < 10) sounds.playAmbient("cave");
    }

    // Update fishing bobber
    if (fishingBobber) {
      fishingBobber.vel.y -= 20 * dt; // gravity
      fishingBobber.mesh.position.add(fishingBobber.vel.clone().multiplyScalar(dt));

      // Check if near water
      const bx = Math.round(fishingBobber.mesh.position.x);
      const by = Math.round(fishingBobber.mesh.position.y);
      const bz = Math.round(fishingBobber.mesh.position.z);
      const block = world.getBlock(bx, by, bz);

      if (block && block.type === 7 && !fishingBobber.inWater) {
        // Hit water - stop and bob
        fishingBobber.inWater = true;
        fishingBobber.vel.set(0, 0, 0);
        fishingBobber.mesh.position.y = by + 0.5;
      }

      if (fishingBobber.inWater) {
        fishingBobber.waitTimer -= dt;
        // Bob effect
        fishingBobber.mesh.position.y = by + 0.5 + Math.sin(performance.now() * 0.003) * 0.1;

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
      arrow.vel.y -= 20 * dt; // gravity
      arrow.mesh.position.add(arrow.vel.clone().multiplyScalar(dt));

      // Check block collisions
      const bx = Math.round(arrow.mesh.position.x);
      const by = Math.round(arrow.mesh.position.y);
      const bz = Math.round(arrow.mesh.position.z);
      if (world.hasBlock(bx, by, bz)) {
        scene.remove(arrow.mesh);
        arrow.mesh.geometry.dispose();
        (arrow.mesh.material as THREE.MeshBasicMaterial).dispose();
        playerArrows.splice(i, 1);
        continue;
      }

      // Check mob collisions
      let hit = false;
      const mobs = mobManager?.getAllMobsForDisplay() ?? [];
      for (const { mob } of mobs) {
        const dist = arrow.mesh.position.distanceTo(new THREE.Vector3(mob.targetPos.x, mob.targetPos.y, mob.targetPos.z));
        if (dist < 0.8 && mob.alive) {
          mob.health -= 5;
          mob.showDamage(mob.health);
          if (mob.health <= 0) mob.die();
          scene.remove(arrow.mesh);
          arrow.mesh.geometry.dispose();
          (arrow.mesh.material as THREE.MeshBasicMaterial).dispose();
          playerArrows.splice(i, 1);
          hit = true;
          sounds.play("hit");
          break;
        }
      }

      // Remove if expired
      if (arrow.life <= 0 && !hit) {
        scene.remove(arrow.mesh);
        arrow.mesh.geometry.dispose();
        (arrow.mesh.material as THREE.MeshBasicMaterial).dispose();
        playerArrows.splice(i, 1);
      }
    }
    if (minimap) {
      const otherPlayers: Array<{ x: number; z: number }> = [];
      // Add other players from multiplayer
      if (mp && (mp as any).getPlayerData) {
        const playersData = (mp as any).getPlayerData?.() ?? [];
        playersData.forEach((p: any) => {
          if (p.name !== currentPlayerName) {
            otherPlayers.push({ x: p.x, z: p.z });
          }
        });
      }
      const mobs = mobManager?.getAllMobsForDisplay().map(m => ({ x: m.mob.targetPos.x, z: m.mob.targetPos.z, alive: m.mob.alive })) ?? [];
      minimap.update(dt, player.position, player.getYaw(), otherPlayers, mobs);
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
      // Hunger drains when moving
      const moved = player.position.distanceTo(lastMoved);
      lastMoved.copy(player.position);
      if (moved > 0.1) {
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
      const blockAtPlayer = world.getBlock(px, py, pz);
      if (blockAtPlayer && blockAtPlayer.type === 47) { // Lava
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
      ui.addChatMessage("", "Dawn breaks...", true);
      sounds.playAmbient("birds");
    }
    if (prevDayTime < 0.73 && dayTime >= 0.73) {
      ui.addChatMessage("", "Night falls... watch out for monsters!", true);
      sounds.playAmbient("wind");
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

    // Center sun/moon/clouds around player
    sunMesh.position.x  += (player.position.x - sunMesh.position.x) * 0.02;
    moonMesh.position.x += (player.position.x - moonMesh.position.x) * 0.02;
    stars.position.set(player.position.x, 0, player.position.z);

    // Thunder flash effect
    if (weather.isThunderFlashing()) {
      renderer.setClearColor(new THREE.Color(0xffffff));
    }

    // Water splash particles
    const playerInWater = world.getBlock(Math.round(player.position.x), Math.round(player.position.y), Math.round(player.position.z))?.type === 7;
    if (playerInWater && !prevWaterState) {
      particles.splash(player.position.x, player.position.y, player.position.z, 12);
    }
    prevWaterState = playerInWater;

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
      // Calculate average FPS
      const avgFps = fpsSamples.length > 0 ? fpsSamples.reduce((a, b) => a + b, 0) / fpsSamples.length : 0;

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

      // Get block below player
      const blockBelowPos = Math.round(player.position.y - 1);
      const blockBelow = world.getBlock(Math.round(player.position.x), blockBelowPos, Math.round(player.position.z));
      const blockBelowName = blockBelow ? getBlockName(blockBelow.type) : "Air";

      // Get weather
      const weatherStr = weather && (weather as any).isRaining ? "Rainy" : "Clear";

      // Get mob/block count
      const mobCount = mobManager?.getAllMobsForDisplay().length ?? 0;
      const blockCount = world.blocks.size;

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

  renderer.render(scene, camera);

  // Reset clear color if it was flashed
  if (weather.isThunderFlashing()) {
    renderer.setClearColor(scene.background as THREE.Color);
  }
}

animate();
