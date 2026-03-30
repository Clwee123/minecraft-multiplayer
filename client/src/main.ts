import * as THREE from "three";
import { World }              from "./World";
import { Player, GameMode }   from "./Player";
import { MultiplayerManager } from "./MultiplayerManager";
import { MobManager }         from "./MobManager";
import { UI }                 from "./UI";
import { HOTBAR_BLOCKS }      from "./blocks";
import { Particles }          from "./Particles";
import { SoundManager }       from "./SoundManager";
import { ItemDropManager }    from "./ItemDrop";
import { Minimap }            from "./Minimap";
import { Weather }            from "./Weather";

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
let minimap: Minimap | null = null;
const weather = new Weather(scene, sounds);

let mp:         MultiplayerManager | null = null;
let mobManager: MobManager | null = null;
let isSingleplayer = true;
let currentPlayerName = "";

const attackRaycaster = new THREE.Raycaster();
attackRaycaster.far   = 5;

// ── Hunger & regen ────────────────────────────────────────────────────────────

let hunger      = 20;
let maxHunger   = 20;
let regenTimer  = 0;
let hungerTimer = 0;
let lastMoved   = new THREE.Vector3();

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

  if (base === "/help") {
    [
      "/gamemode creative | survival",
      "/kill  /heal  /feed",
      "/time day | night | sunrise | sunset",
      "/tp <x> <z>",
      "/craft",
      "/weather clear | rain | thunder",
      "F5 = 3rd person · Ctrl = sprint",
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

  player.spawnAt(0, 0);
  setTimeout(() => document.body.requestPointerLock(), 200);

  // Player callbacks
  player.onHealthChanged = hp => ui.updateHearts(hp, player.maxHealth);
  player.onDied = () => {
    ui.showDeath();
    ui.addChatMessage("", "☠ You died!", true);
    sounds.play("hurt");
  };
  player.onOpenChat  = () => { ui.openChatInput(); player.setChatOpen(true); };
  player.onBreakBlock = (x, y, z) => {
    const b = world.getBlock(x, y, z);
    if (b) particles.burst(x, y, z, b.type);
    sounds.play("break");
    mp?.sendRemoveBlock(x, y, z);
  };
  player.onPlaceBlock = (x, y, z, t) => {
    sounds.play("place");
    mp?.sendAddBlock(x, y, z, t);
  };

  // Attack
  document.addEventListener("mousedown", e => {
    if (e.button !== 0 || !document.pointerLockElement) return;
    attackRaycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const result = mobManager?.tryAttack(attackRaycaster);
    if (result) {
      sounds.play("hit");
      // Check if mob died and spawn drops
      const mobData = mobManager?.getMob(result.mobId);
      if (mobData && !mobData.alive) {
        itemDrops.spawnFromMob(mobData.type, mobData.targetPos.x, mobData.targetPos.y, mobData.targetPos.z);
        // Add kill feed entry
        ui.addKillFeedDeath(mobData.type);
      }
      if (!isSingleplayer) mp?.sendAttackMob(result.mobId, result.damage);
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
  };

  if (isSingleplayer) {
    ui.setConnectionStatus("connected");
    ui.updatePlayerCount(1);

    mobManager = new MobManager(scene, world, {
      onPlayerDamage: (amount) => {
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

  if (hud.style.display !== "none") {
    player.update(dt);
    mp?.updatePlayers(dt);
    mobManager?.update(dt);
    particles.update(dt);
    updateDayNight(dt);
    weather.update(dt, player.position, (scene.fog as THREE.Fog).color);
    itemDrops.update(dt, player.position);
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
        regenTimer += dt;
        if (regenTimer > 4) {
          regenTimer = 0;
          if (player.health > 1) player.takeDamage(1);
          ui.updateHearts(player.health, player.maxHealth);
        }
      }
    }

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
  }

  renderer.render(scene, camera);

  // Reset clear color if it was flashed
  if (weather.isThunderFlashing()) {
    renderer.setClearColor(scene.background as THREE.Color);
  }
}

animate();
