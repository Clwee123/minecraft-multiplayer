declare const __BUILD_TIME__: string;
import * as THREE from "three";
import { preloadAtlas, tickWater, BLOCKS, ITEMS, getItemTile, getItemName, isPlaceable, CREATIVE_HOTBAR } from "./Textures";
import { damageTool } from "./Inventory";
import { World } from "./World";
import { Player } from "./Player";
import { Multiplayer } from "./Multiplayer";
import { Inventory } from "./Inventory";
import { CraftingUI } from "./CraftingUI";
import { CreativeInventory } from "./CreativeInventory";
import { TradeUI } from "./TradeUI";
import { FurnaceUI } from "./FurnaceUI";
import { ChestUI } from "./ChestUI";
import { ArmDevPanel } from "./ArmDevPanel";
import { ServerFinder, listRooms } from "./ServerFinder";
import { ItemDrops } from "./ItemDrops";
import { MODES, ModeId, buildBedwars, buildParkour, buildOneBlock, pickOneBlockNext, buildBuildBattle, buildHideAndSeek } from "./Modes";
import { preloadPlayerModel, buildFirstPersonArm, FirstPersonArm, applySkinToCharacter, swapPart } from "./PlayerModel";
import { BreakHighlight, BreakParticles } from "./BreakEffects";
import { Legion, LegionUser, LegionFriend, readInstantJoinIntent } from "./Legion";
import { sound, blockSurface } from "./Sound";
import { blockIconCache, shouldRenderAsBlock } from "./BlockIconCache";
import { KEY_BIND } from "./Player";

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
let creativeInv: CreativeInventory;
let tradeUI: TradeUI;
let furnaceUI: FurnaceUI;
let chestUI: ChestUI;
let serverFinder: ServerFinder | null = null;
let drops: ItemDrops;
/** Chunk render distance — adjustable from the Options modal. */
let _renderDist = 5;

// ── Mode state machine (BuildBattle / HideAndSeek) ────────────────────────
//
// Lightweight, client-side. Each mode walks through a fixed sequence of
// phases (waiting → playing → results). The HUD banner shows the current
// phase + countdown so players actually know what's going on.
interface ModePhase { name: string; help: string; durationSec: number; }
let _modePhases: ModePhase[] = [];
let _modePhaseIdx = 0;
let _modePhaseEnd = 0;

function startModeStates(modeId: ModeId) {
  // Phase NAMES + help text live on the client; the actual phase index +
  // end timestamp come from server state (state.modePhase + state.phaseEndsAt).
  // Switching to server-driven sync was the whole point of this rewrite —
  // every client now sees the same countdown to the millisecond.
  if (modeId === "buildbattle_mp") {
    _modePhases = [
      { name: "Waiting for players", help: "Round starts soon — pick a plot",            durationSec: 30 },
      { name: "Build Phase",         help: "Build something cool on your plot!",         durationSec: 300 },
      { name: "Voting",              help: "Walk around — votes coming in next update",  durationSec: 90 },
      { name: "Results",             help: "Resetting for next round…",                  durationSec: 30 },
    ];
  } else if (modeId === "hideandseek_mp") {
    _modePhases = [
      { name: "Waiting for players", help: "Round starts soon",                    durationSec: 30 },
      { name: "Hide!",               help: "Find a spot — seeker is frozen",       durationSec: 30 },
      { name: "Seek!",               help: "Track down everyone before time's up", durationSec: 180 },
      { name: "Round over",          help: "Resetting…",                            durationSec: 15 },
    ];
  } else {
    _modePhases = [];
    setModeStateBanner(null);
    return;
  }
  paintModePhase();
}

function paintModePhase() {
  if (_modePhases.length === 0) { setModeStateBanner(null); return; }
  const p = _modePhases[_modePhaseIdx];
  setModeStateBanner(p.name, p.help);
}

function setModeStateBanner(phase: string | null, help = "") {
  const el = document.getElementById("modeStateBanner");
  if (!el) return;
  if (!phase) { el.style.display = "none"; return; }
  el.style.display = "block";
  (el.querySelector(".phase") as HTMLElement).textContent = phase;
  (el.querySelector(".help")  as HTMLElement).textContent = help;
}

function tickModeState() {
  if (_modePhases.length === 0) return;
  // Drive from server state (mp.modePhase + mp.phaseEndsAtMs). Falls back
  // to the local clock if MP isn't connected (offline mode shouldn't really
  // hit these mode types, but be defensive).
  let phaseIdx = _modePhaseIdx;
  let remainingMs = Math.max(0, _modePhaseEnd - performance.now());
  if (mp?.isConnected() && mp.phaseEndsAtMs > 0) {
    phaseIdx = Math.min(mp.modePhase, _modePhases.length - 1);
    remainingMs = Math.max(0, mp.phaseEndsAtMs - Date.now());
  }
  if (phaseIdx !== _modePhaseIdx) {
    _modePhaseIdx = phaseIdx;
    paintModePhase();
  }
  const secs = Math.ceil(remainingMs / 1000);
  const m = Math.floor(secs / 60), s = secs % 60;
  const el = document.getElementById("modeStateBanner");
  const t = el?.querySelector(".timer") as HTMLElement | null;
  if (t) t.textContent = `· ${m}:${String(s).padStart(2, "0")}`;
}
let mp: Multiplayer | null = null;
let mode: ModeId = "creative_offline";
let playerName = "Player";
let oneBlockCenter: { x: number; y: number; z: number } | null = null;
let debugOn = false;
let pendingRoomId: string | null = null;
let breakFx: BreakHighlight;
let breakParticles: BreakParticles;
let tabHeld = false;
let fpArm: FirstPersonArm | null = null;

// Day/night: 0..24000 ticks. 0=morning, 6000=noon, 12000=dusk, 18000=midnight.
// Local clock when offline; mirrored from server state when MP.
let timeOfDay = 6000;
const DAY_LENGTH_SECONDS = 180; // 3-minute cycle, matches server tick rate

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

  // ── Bloxity / Legion auth ──
  const loginBtn  = document.getElementById("legionLoginBtn") as HTMLButtonElement | null;
  const logoutBtn = document.getElementById("legionLogoutBtn") as HTMLButtonElement | null;
  loginBtn?.addEventListener("click", async () => {
    await Legion.showAuthPopup();
  });
  logoutBtn?.addEventListener("click", () => Legion.logout());

  // Server finder — list all open rooms, click to join by id.
  serverFinder = new ServerFinder(() => serverInput.value.trim());
  serverFinder.onJoin = (roomId, roomMode) => {
    playerName = nameInput.value.trim() || "Player";
    localStorage.setItem("mc.playerName", playerName);
    const fallback: Record<string, ModeId> = {
      survival: "survival_mp", creative: "creative_mp",
      bedwars: "bedwars_mp", parkour: "parkour_mp",
      oneblock: "oneblock",
      buildbattle: "buildbattle_mp", hideandseek: "hideandseek_mp",
    };
    mode = ((roomMode && fallback[roomMode]) || "survival_mp") as ModeId;
    pendingRoomId = roomId;
    startGame(serverInput.value.trim());
  };
  document.getElementById("browseServersBtn")?.addEventListener("click", () => {
    serverFinder?.show();
  });

  // ── Live CCU counters per mode card ───────────────────────────────────
  refreshModeCCU(serverInput.value.trim());
  setInterval(() => {
    // Don't bother polling once the user has clicked into a game.
    if (document.getElementById("mainMenu")?.style.display === "none") return;
    refreshModeCCU(serverInput.value.trim());
  }, 10_000);

  // When Legion user state changes, update name input + login banner
  Legion.onUserChanged((u) => {
    renderLegionPanel(u);
    if (u) {
      const display = u.displayName || u.username;
      nameInput.value = display;
      localStorage.setItem("mc.playerName", display);
    }
  });
}

function renderLegionPanel(user: LegionUser | null) {
  const banner = document.getElementById("legionBanner");
  const loginBtn  = document.getElementById("legionLoginBtn");
  const logoutBtn = document.getElementById("legionLogoutBtn");
  const userBox = document.getElementById("legionUserBox");
  const pfpEl   = document.getElementById("legionPfp") as HTMLImageElement | null;
  const nameEl  = document.getElementById("legionName");
  const handleEl = document.getElementById("legionHandle");
  if (!banner) return;
  if (user) {
    banner.classList.add("logged-in");
    if (loginBtn)  loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-flex";
    if (userBox) userBox.style.display = "flex";
    if (pfpEl)   pfpEl.src = user.pfp || "https://static.bloxity.io/img/pfps/0.png?width=128&quality=85";
    if (nameEl)  nameEl.textContent = user.displayName || user.username;
    if (handleEl) handleEl.textContent = "@" + user.username;
  } else {
    banner.classList.remove("logged-in");
    if (loginBtn)  loginBtn.style.display = "inline-flex";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (userBox) userBox.style.display = "none";
  }
}

// ── In-game friends panel (L key) ───────────────────────────────────────────
//
// Only available while connected to a multiplayer room — inviting a friend
// needs a roomId to make sense. We refresh on toggle-open so it stays current.
/** Cached friend list — re-fetched on toggle-open, re-rendered on search input. */
let _friendsCache: LegionFriend[] = [];
let _friendsFilter = "";

async function refreshIngameFriends() {
  const list = document.getElementById("ingameFriendsList");
  if (!list) return;
  if (!Legion.isLoggedIn()) {
    list.innerHTML = `
      <div class="login-prompt">
        <div>Log in with Bloxity to see your friends.</div>
        <button id="ingameFriendsLogin">Login with Bloxity</button>
      </div>`;
    document.getElementById("ingameFriendsLogin")?.addEventListener("click", () => Legion.showAuthPopup());
    return;
  }
  if (!mp?.isConnected()) {
    list.innerHTML = `<div class="login-prompt">Not in a multiplayer room — friends can't join you yet.</div>`;
    return;
  }
  list.innerHTML = `
    <input id="friendSearch" type="text" placeholder="Search friends…" autocomplete="off"
      style="width:100%;padding:6px 10px;margin-bottom:8px;background:rgba(0,0,0,0.4);
             border:1px solid rgba(255,255,255,0.2);color:#fff;border-radius:4px;
             font-family:inherit;font-size:12px;" />
    <div id="friendRows" style="opacity:.6;font-size:12px;padding:8px;">Loading friends…</div>
  `;
  const search = document.getElementById("friendSearch") as HTMLInputElement;
  search.value = _friendsFilter;
  search.addEventListener("input", () => {
    _friendsFilter = search.value;
    renderFriendRows();
  });
  _friendsCache = await Legion.getFriends();
  renderFriendRows();
}

function renderFriendRows() {
  const rows = document.getElementById("friendRows");
  if (!rows) return;
  if (_friendsCache.length === 0) {
    rows.innerHTML = `<div class="login-prompt">No friends yet. Add some on bloxity.io.</div>`;
    return;
  }
  const q = _friendsFilter.trim().toLowerCase();
  const filtered = q
    ? _friendsCache.filter(f =>
        (f.username || "").toLowerCase().includes(q) ||
        (f.displayName || "").toLowerCase().includes(q))
    : _friendsCache;
  // Sort: in_game first, then online, then offline. Stable within each
  // group so the user's display order from Bloxity is preserved.
  const statusRank = (f: any) => {
    const s = f.presence?.status;
    if (s === "in_game") return 0;
    if (s === "online")  return 1;
    return 2;
  };
  filtered.sort((a, b) => statusRank(a) - statusRank(b));
  if (filtered.length === 0) {
    rows.innerHTML = `<div class="login-prompt">No friends match "${escapeHtml(q)}".</div>`;
    return;
  }
  rows.innerHTML = filtered.map(renderFriendRow).join("");
  rows.querySelectorAll<HTMLButtonElement>(".friend-invite-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const userId = btn.dataset.userid!;
      const username = btn.dataset.username!;
      if (mp?.isConnected()) Legion.updateRoom(mp.getRoomId() || "");
      btn.disabled = true;
      btn.textContent = "Inviting…";
      const ok = await Legion.inviteFriend(userId);
      btn.textContent = ok ? "✓ Sent" : "Failed";
      setTimeout(() => { btn.disabled = false; btn.textContent = "✉ Invite"; }, 1800);
      if (ok) addChatLine("", `Invited ${username}`);
    });
  });
}

// ── Pause menu (ESC) ───────────────────────────────────────────────────────
//
// Browser ESC unconditionally exits pointer lock — we can't override that.
// Instead we listen for pointerlockchange and treat "pointer was locked but
// just got unlocked while in-game" as "open the pause menu". Resume relocks.
let pauseSuppressed = false;        // suppress next unlock event (e.g. when opening a modal we manage)
let pauseGameStarted = false;       // true once startGame has actually finished

function showPauseMenu() {
  const panel = document.getElementById("pauseMenu");
  if (!panel) return;
  panel.style.display = "flex";
  // Reuse the friend list, which lives inside #pauseMenu now.
  const friends = document.getElementById("ingameFriends");
  if (friends) friends.style.display = "block";
  refreshIngameFriends();
}

function hidePauseMenu() {
  const panel = document.getElementById("pauseMenu");
  if (panel) panel.style.display = "none";
}

document.addEventListener("pointerlockchange", () => {
  if (!pauseGameStarted) return;
  if (document.pointerLockElement) {
    hidePauseMenu();
    return;
  }
  if (pauseSuppressed) { pauseSuppressed = false; return; }
  const blockingModals = [
    "invPanel", "creativeInv", "recipeBook", "tradeUI",
    "optionsModal", "keybindsModal", "controllerModal", "deathScreen",
    // These two unlock the pointer when opened — without this guard the
    // pointerlockchange handler interpreted that unlock as "user pressed
    // ESC" and stacked the pause menu over the furnace/chest UI.
    "furnaceUI", "chestUI",
  ];
  for (const id of blockingModals) {
    const el = document.getElementById(id);
    if (el && el.style.display && el.style.display !== "none") return;
  }
  showPauseMenu();
});

// ── Pause menu button wiring (set up once at boot) ─────────────────────────
function wirePauseButtons() {
  document.getElementById("pauseResumeBtn")?.addEventListener("click", () => {
    hidePauseMenu();
    document.body.requestPointerLock();
  });
  document.getElementById("pauseOptionsBtn")?.addEventListener("click",    () => openModal("optionsModal"));
  document.getElementById("pauseKeybindsBtn")?.addEventListener("click",   () => { openModal("keybindsModal"); renderKeybinds(); });
  document.getElementById("pauseControllerBtn")?.addEventListener("click", () => openModal("controllerModal"));
  document.getElementById("pauseFeedbackBtn")?.addEventListener("click",   () => {
    window.open("https://github.com/anthropics/claude-code/issues", "_blank");
  });
  document.getElementById("pauseLeaveBtn")?.addEventListener("click", () => {
    // Drop back to the title screen with a clean state.
    window.location.href = window.location.pathname;
  });
  // Modal closes
  document.getElementById("optionsClose")?.addEventListener("click",    () => closeModal("optionsModal"));
  document.getElementById("keybindsClose")?.addEventListener("click",   () => closeModal("keybindsModal"));
  document.getElementById("controllerClose")?.addEventListener("click", () => closeModal("controllerModal"));
  // Options sliders
  wireOption("optVolume", "optVolumeVal", v => { sound.setVolume(v / 100); }, x => String(x));
  wireOption("optRender", "optRenderVal", v => { _renderDist = v; }, x => String(x));
  wireOption("optMouse",  "optMouseVal",  v => { if (player) player.mouseSensitivity = 0.001 * v; }, v => (v / 10).toFixed(1));
  wireOption("optFov",    "optFovVal",    v => { camera.fov = v; camera.updateProjectionMatrix(); }, x => String(x));
}

function openModal(id: string)  { const el = document.getElementById(id); if (el) el.style.display = "flex"; }
function closeModal(id: string) { const el = document.getElementById(id); if (el) el.style.display = "none"; }

function wireOption(inputId: string, valueId: string, apply: (v: number) => void, fmt: (v: number) => string) {
  const input = document.getElementById(inputId) as HTMLInputElement | null;
  const valueEl = document.getElementById(valueId);
  if (!input || !valueEl) return;
  const handler = () => {
    const v = parseFloat(input.value);
    valueEl.textContent = fmt(v);
    apply(v);
  };
  input.addEventListener("input", handler);
  handler(); // apply current value
}

// ── Keybinds modal: lists each action with a click-to-rebind chip ──────────
let _keybindCapture: { action: string; el: HTMLElement } | null = null;
function renderKeybinds() {
  const list = document.getElementById("keybindsList");
  if (!list) return;
  list.innerHTML = "";
  const labels: Record<string, string> = {
    forward: "Move Forward", back: "Move Backward",
    left: "Strafe Left", right: "Strafe Right",
    jump: "Jump / Swim Up", sprint: "Sprint / Swim Down",
    crouch: "Crouch", drop: "Drop Item",
    inventory: "Open Inventory", chat: "Open Chat", debug: "Debug HUD",
  };
  for (const action of Object.keys(KEY_BIND)) {
    const row = document.createElement("div");
    row.className = "gm-row";
    const label = document.createElement("label");
    label.textContent = labels[action] || action;
    const btn = document.createElement("button");
    btn.className = "gm-key";
    btn.textContent = displayKey(KEY_BIND[action]);
    btn.addEventListener("click", () => {
      if (_keybindCapture) {
        _keybindCapture.el.classList.remove("binding");
        _keybindCapture.el.textContent = displayKey(KEY_BIND[_keybindCapture.action]);
      }
      _keybindCapture = { action, el: btn };
      btn.classList.add("binding");
      btn.textContent = "Press a key…";
    });
    row.appendChild(label);
    row.appendChild(btn);
    list.appendChild(row);
  }
}
function displayKey(code: string): string {
  return code.replace(/^Key/, "").replace(/^Digit/, "").replace(/Left|Right/g, "");
}
window.addEventListener("keydown", (e) => {
  if (!_keybindCapture) return;
  if (e.code === "Escape") {
    _keybindCapture.el.classList.remove("binding");
    _keybindCapture.el.textContent = displayKey(KEY_BIND[_keybindCapture.action]);
    _keybindCapture = null;
    return;
  }
  KEY_BIND[_keybindCapture.action] = e.code;
  _keybindCapture.el.classList.remove("binding");
  _keybindCapture.el.textContent = displayKey(e.code);
  _keybindCapture = null;
  e.preventDefault();
}, true);

// ── Gamepad polling ────────────────────────────────────────────────────────
//
// Browsers expose all connected gamepads via navigator.getGamepads(). We poll
// the first one each frame and translate its sticks/buttons into either the
// player.keys dictionary (for movement) or direct camera/yaw mutations.
const _gpPrev: boolean[] = [];
function pollGamepad(dt: number) {
  if (!player) return;
  const pads = navigator.getGamepads ? navigator.getGamepads() : [];
  const gp = pads[0];
  const gpStatusEl = document.getElementById("gpStatus");
  if (!gp) {
    if (gpStatusEl) { gpStatusEl.textContent = "No controller detected. Plug one in and press any button."; gpStatusEl.className = "gp-status"; }
    return;
  }
  if (gpStatusEl) {
    gpStatusEl.textContent = `Connected: ${gp.id}`;
    gpStatusEl.className = "gp-status connected";
  }
  // Sticks (dead-zone 0.2)
  const dz = (v: number) => Math.abs(v) < 0.2 ? 0 : v;
  const lx = dz(gp.axes[0] ?? 0);
  const ly = dz(gp.axes[1] ?? 0);
  const rx = dz(gp.axes[2] ?? 0);
  const ry = dz(gp.axes[3] ?? 0);

  // Movement: translate left stick into the bound movement keys so all the
  // sprint / sneak / water logic in Player just works.
  player.keys[KEY_BIND.forward] = ly < -0.2;
  player.keys[KEY_BIND.back]    = ly >  0.2;
  player.keys[KEY_BIND.left]    = lx < -0.2;
  player.keys[KEY_BIND.right]   = lx >  0.2;

  // Look (right stick → yaw/pitch)
  if (rx || ry) {
    player.yaw   -= rx * dt * 3.0;
    player.pitch -= ry * dt * 2.2;
    const limit = Math.PI / 2 - 0.001;
    if (player.pitch >  limit) player.pitch =  limit;
    if (player.pitch < -limit) player.pitch = -limit;
  }

  // Buttons. Standard mapping (Xbox numbering): 0=A, 1=B, 2=X, 3=Y, 4=LB,
  // 5=RB, 6=LT, 7=RT, 9=Start.
  const btn = (i: number) => !!gp.buttons[i]?.pressed;
  const wasPressed = (i: number) => btn(i) && !_gpPrev[i];

  // Hold-style: jump, crouch, attack while RT down (continuous)
  player.keys[KEY_BIND.jump]   = btn(0);
  player.keys[KEY_BIND.crouch] = btn(1);

  // Edge-triggered single actions
  if (wasPressed(2)) dropOneFromHotbar();              // X / Square → drop
  if (wasPressed(3)) {                                  // Y / Triangle → inventory toggle
    if (player.gameMode === "creative") creativeInv?.toggle();
    else                                 craftingUI?.toggle(false);
  }
  if (wasPressed(4)) selectSlot((inv.selected + 8) % 9); // LB → prev slot
  if (wasPressed(5)) selectSlot((inv.selected + 1) % 9); // RB → next slot
  if (wasPressed(9)) {                                   // Start → pause
    document.exitPointerLock();
  }

  // Save current state for edge detection next frame
  for (let i = 0; i < gp.buttons.length; i++) _gpPrev[i] = btn(i);
}

/**
 * Query the Colyseus listing endpoint and sum `clients` by mode metadata so
 * each menu card shows a live "👤 N" badge. Modes with no rooms (or offline
 * variants) show "·" instead of a 0 so they don't read as broken.
 */
async function refreshModeCCU(serverAddr: string) {
  try {
    const rooms = await listRooms(serverAddr);
    const tally: Record<string, number> = {};
    for (const r of rooms) {
      const mode = String(r.metadata?.mode || "").toLowerCase();
      if (!mode) continue;
      tally[mode] = (tally[mode] ?? 0) + (r.clients || 0);
    }
    document.querySelectorAll<HTMLElement>("[data-mode-ccu]").forEach(el => {
      const key = el.dataset.modeCcu || "";
      if (key.endsWith("_offline") || key === "oneblock") {
        el.textContent = "·";
      } else {
        el.textContent = String(tally[key] ?? 0);
      }
    });
  } catch (e) {
    console.warn("[Menu] CCU refresh failed", e);
  }
}

function renderFriendRow(f: LegionFriend): string {
  const pfp = f.pfp || "https://static.bloxity.io/img/pfps/0.png?width=128&quality=85";
  const status = f.presence?.status || "offline";
  const game = f.presence?.gameName;
  const statusLabel =
    status === "in_game" ? (game ? `🎮 ${escapeHtml(game)}` : "🎮 In game") :
    status === "online"  ? "🟢 Online" :
                            "⚫ Offline";
  return `
    <div class="friend-row status-${status}">
      <img class="friend-pfp" src="${pfp}" alt="" />
      <div class="friend-meta">
        <div class="friend-name">${escapeHtml(f.displayName || f.username)}</div>
        <div class="friend-status ${status}">${statusLabel}</div>
      </div>
      <button class="friend-invite-btn" data-userid="${escapeHtml(f._id)}" data-username="${escapeHtml(f.username)}" ${status === "offline" ? "disabled" : ""}>✉ Invite</button>
    </div>
  `;
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
    let dur = slot.querySelector(".slot-durability") as HTMLElement | null;
    if (data.id === 0 || data.count === 0) {
      wrap.innerHTML = "";
      ct.textContent = "";
      if (dur) dur.remove();
    } else {
      // Blocks → runtime-rendered iso cube. Items → flat atlas tile.
      if (shouldRenderAsBlock(data.id)) {
        const url = blockIconCache.get(data.id);
        wrap.innerHTML = `<div class="slot-icon" style="
          background-image:url('${url}');
          background-size:contain;
          background-repeat:no-repeat;
          background-position:center;
        "></div>`;
      } else {
        const tile = getItemTile(data.id);
        const col = tile % 16, row = Math.floor(tile / 16);
        wrap.innerHTML = `<div class="slot-icon" style="
          background-image:url(/terrain_atlas.png?v=5);
          background-size:512px 512px;
          background-position:-${col * 32}px -${row * 32}px;
        "></div>`;
      }
      ct.textContent = data.count > 1 && data.count < 999 ? String(data.count) : "";
      // Durability bar (tools only; only when damaged).
      const item = ITEMS[data.id];
      const damage = data.damage ?? 0;
      if (item?.durability && damage > 0) {
        const remaining = Math.max(0, item.durability - damage);
        const pct = remaining / item.durability;
        let color = "#5be17a";
        if (pct < 0.5)  color = "#e1d05b";
        if (pct < 0.25) color = "#e15b5b";
        if (!dur) {
          dur = document.createElement("div");
          dur.className = "slot-durability";
          dur.innerHTML = `<div class="fill"></div>`;
          slot.appendChild(dur);
        }
        const fill = dur.querySelector(".fill") as HTMLElement;
        fill.style.width = (pct * 100) + "%";
        fill.style.background = color;
      } else if (dur) {
        dur.remove();
      }
    }
    slot.classList.toggle("active", i === inv.selected);
  });
}

function selectSlot(i: number) {
  inv.selectSlot(i);
  refreshHotbar();
  // Reflect the held item visually + tell the server so everyone else
  // sees the new tool/block in our hand.
  syncHeldItem();
  const bn = document.getElementById("blockName")!;
  const id = inv.hotbar[i].id;
  if (id > 0) {
    bn.textContent = getItemName(id);
    bn.style.opacity = "1";
    clearTimeout((bn as any)._t);
    (bn as any)._t = setTimeout(() => (bn.style.opacity = "0"), 1500);
  }
}

let _lastSentHeldId = -1;
function syncHeldItem() {
  if (!inv) return;
  const heldId = inv.hotbar[inv.selected]?.id ?? 0;
  fpArm?.setHeldItem(heldId);
  if (heldId !== _lastSentHeldId && mp?.isConnected()) {
    mp.sendSetHeld(heldId);
    _lastSentHeldId = heldId;
  }
}

// ── Persistent save / load ─────────────────────────────────────────────────
//
// Vanilla Minecraft servers save per-player state (inventory + position + hp
// + xp + hunger + active furnaces) under the player's UUID. We mirror that
// here in localStorage keyed by (mode, legionId) so a returning player picks
// up exactly where they left off — even across browser sessions.
//
// For now, all save data is client-local; a real MP deployment would
// authoritatively store this server-side. Client-local is sufficient for the
// "I left the world, came back, I expect my stuff to still be there" UX.

function _saveKey(): string {
  const u = Legion.getUser();
  const legionId = u?.userId || u?.username || "guest";
  return `mc.save.${mode}.${legionId}`;
}

function savePersistentState() {
  if (!player || !inv) return;
  try {
    const data = {
      v: 1,
      pos: { x: player.pos.x, y: player.pos.y, z: player.pos.z },
      look: { yaw: player.yaw, pitch: player.pitch },
      hp: player.health,
      hunger,
      air: player.airSupply,
      xp: { level: player.xpLevel, progress: player.xpProgress },
      gameMode: player.gameMode,
      inv: {
        selected: inv.selected,
        hotbar: inv.hotbar.map(s => ({ id: s.id, count: s.count, damage: s.damage ?? 0 })),
        main:   inv.main.map(s   => ({ id: s.id, count: s.count, damage: s.damage ?? 0 })),
      },
      furnaces: furnaceUI ? furnaceUI.serialize() : [],
      chests:   chestUI   ? chestUI.serialize()   : [],
      savedAt: Date.now(),
    };
    localStorage.setItem(_saveKey(), JSON.stringify(data));
  } catch (e) {
    console.warn("[Save] failed", e);
  }
}

/** Returns true if a save was found + applied (so the caller can skip the
 *  default spawn placement). All restoration happens against already-built
 *  inv/player/furnaceUI — call after they exist. */
function loadPersistentState(): boolean {
  if (!player || !inv) return false;
  try {
    const raw = localStorage.getItem(_saveKey());
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (data.v !== 1) return false;
    // Position + look
    if (data.pos)  player.spawnAt(data.pos.x, data.pos.y, data.pos.z);
    if (data.look) { player.yaw = data.look.yaw; player.pitch = data.look.pitch; }
    if (typeof data.hp === "number")     player.health    = data.hp;
    if (typeof data.air === "number")    player.airSupply = data.air;
    if (typeof data.hunger === "number") hunger           = data.hunger;
    if (data.xp) { player.xpLevel = data.xp.level | 0; player.xpProgress = +data.xp.progress || 0; }
    if (data.gameMode === "creative" || data.gameMode === "survival") {
      player.setGameMode(data.gameMode);
      inv.gameMode = data.gameMode;
    }
    if (data.inv) {
      inv.selected = (data.inv.selected | 0) % 9;
      for (let i = 0; i < 9 && i < (data.inv.hotbar?.length || 0); i++) {
        const s = data.inv.hotbar[i];
        inv.hotbar[i] = { id: s.id | 0, count: s.count | 0, damage: s.damage | 0 };
      }
      for (let i = 0; i < 27 && i < (data.inv.main?.length || 0); i++) {
        const s = data.inv.main[i];
        inv.main[i] = { id: s.id | 0, count: s.count | 0, damage: s.damage | 0 };
      }
    }
    if (data.furnaces && furnaceUI) furnaceUI.restore(data.furnaces);
    if (data.chests   && chestUI)   chestUI.restore(data.chests);
    console.log("[Save] restored from", new Date(data.savedAt).toISOString());
    return true;
  } catch (e) {
    console.warn("[Save] load failed", e);
    return false;
  }
}

// Auto-save: every 10s while in-game and on tab close.
setInterval(() => { if (pauseGameStarted) savePersistentState(); }, 10000);
window.addEventListener("beforeunload", () => { if (pauseGameStarted) savePersistentState(); });

window.addEventListener("keydown", (e) => {
  const inField = (document.activeElement as HTMLElement)?.tagName === "INPUT";
  if (inField) return;

  if (e.code.startsWith("Digit")) {
    const n = parseInt(e.code.slice(5)) - 1;
    if (n >= 0 && n < 9) selectSlot(n);
  }
  if (e.code === KEY_BIND.inventory) {
    if (player?.gameMode === "creative") {
      creativeInv.toggle();
      if (!creativeInv.open) document.body.requestPointerLock();
    } else {
      craftingUI.toggle(false);
      if (craftingUI.open) document.exitPointerLock();
      else document.body.requestPointerLock();
    }
  }
  if (e.code === KEY_BIND.debug) {
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
  // L key is now unbound (friends moved into the pause menu — see ESC flow).
  if (e.code === KEY_BIND.drop && document.pointerLockElement) {
    e.preventDefault();
    dropOneFromHotbar();
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
  if (player?.isDead) return;  // no combat or interaction while dead
  if (e.button === 0) {
    lmbHeld = true;
    fpArm?.triggerSwing(1);
    // LMB: try to hit a mob or remote player in front of us; either way the
    // swing animation plays. If nothing was hit, the click flows through to
    // block-mining (Player has its own LMB listener for that).
    const hitSomething = tryAttackInFront();
    if (hitSomething) {
      sound.hit();
      // Hitting a mob or player damages the sword (if any) by 1.
      if (inv && inv.gameMode !== "creative") {
        const held = inv.getHeld();
        const item = held && held.id > 0 ? ITEMS[held.id] : null;
        if (item?.tool === "sword") {
          const broke = damageTool(held, 1);
          if (broke) syncHeldItem();
          refreshHotbar();
        }
      }
      // Award a chunk of XP per hit (an actual kill would be much bigger;
      // server doesn't yet tell us when a mob died, so per-hit is the best
      // signal we have).
      if (player && !cfg.isCreative) player.addXp(2);
    } else {
      sound.swing();
    }
  } else if (e.button === 2) {
    fpArm?.triggerSwing(0.65);
    tryShootBow();
  }
});
document.addEventListener("mouseup", (e) => {
  if (e.button === 0) lmbHeld = false;
});

document.addEventListener("mousedown", (e) => {
  if (!document.pointerLockElement) return;
  if (e.button !== 2) return;
  if (!player) return;
  // RMB on villager → open trade UI.
  if (mp?.isConnected() && tradeUI) {
    const origin = new THREE.Vector3(player.pos.x, player.pos.y + 1.62, player.pos.z);
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    for (const m of mp.getRemoteMobs()) {
      if (m.kind !== "villager") continue;
      const toM = new THREE.Vector3(m.mesh.position.x - origin.x, (m.mesh.position.y + 1) - origin.y, m.mesh.position.z - origin.z);
      const t = toM.dot(dir);
      if (t <= 0 || t > 4) continue;
      const perp = toM.clone().sub(dir.clone().multiplyScalar(t));
      if (perp.length() <= 0.9) {
        tradeUI.show();
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    }
  }
  const hit = player.raycast();
  if (!hit) return;
  const block = world.getBlock(hit.x, hit.y, hit.z);
  if (block === 36) {
    craftingUI.show(true);
    e.preventDefault();
    e.stopPropagation();
  } else if (block === 37 || block === 38) {
    furnaceUI.show(hit.x, hit.y, hit.z);
    e.preventDefault();
    e.stopPropagation();
  } else if (block === 171) {
    chestUI.show(hit.x, hit.y, hit.z);
    sound.click();
    e.preventDefault();
    e.stopPropagation();
  } else if (block === 44) {
    // Bed: skip the night if it's night
    if (timeOfDay > 12500 && timeOfDay < 23500) {
      timeOfDay = 0; // dawn
      mp?.sendSleep();
      sound.sleep();
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
  if (e.code === KEY_BIND.chat && !chatInput.matches(":focus") && document.pointerLockElement) {
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

function renderBubbles(air: number, max: number) {
  const el = document.getElementById("bubbles");
  if (!el) return;
  // Only show bubbles while losing air. Hide when full and out of water.
  const show = air < max;
  el.style.display = show ? "flex" : "none";
  if (!show) return;
  el.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const b = document.createElement("div");
    b.className = "bubble";
    const required = (i + 1) * 2; // each bubble = 2 air
    if (air >= required) {
      // intact
    } else if (air >= required - 1) {
      b.classList.add("pop");
    } else {
      b.classList.add("empty");
    }
    el.appendChild(b);
  }
}

function setWaterTint(on: boolean) {
  const el = document.getElementById("waterTint");
  if (!el) return;
  el.classList.toggle("active", on);
}

// ── Hurt feedback (red vignette + screenshake) ────────────────────────────
// Mirrors vanilla MC: any HP loss triggers a brief red pulse at the screen
// edges plus a small camera shake. shakeT counts down each frame; the loop
// applies the offset to the camera before rendering.
let _shakeT = 0;
let _shakeAmp = 0;
function triggerHurt() {
  const el = document.getElementById("hurtOverlay");
  if (el) {
    // toggle off-then-on so the .active class re-triggers the fade animation
    el.classList.remove("active");
    void (el as HTMLElement).offsetWidth;
    el.classList.add("active");
    setTimeout(() => el.classList.remove("active"), 50);
  }
  _shakeT = 0.32;
  _shakeAmp = 0.07;
}

function renderXp(level: number, progress: number) {
  const fill = document.getElementById("xpFill") as HTMLElement | null;
  const lvl = document.getElementById("xpLevel") as HTMLElement | null;
  if (fill) fill.style.width = (progress * 100) + "%";
  if (lvl)  lvl.textContent = String(level);
}

// ── Death screen ──────────────────────────────────────────────────────────
let _deathWired = false;
let _respawnPos = { x: 0, y: 64, z: 0 };
function showDeathScreen() {
  const el = document.getElementById("deathScreen");
  if (!el) return;
  document.exitPointerLock();
  // Close every other modal so the death screen is the only thing on top.
  for (const id of ["invPanel", "creativeInv", "recipeBook", "tradeUI", "optionsModal", "keybindsModal", "controllerModal", "pauseMenu"]) {
    const m = document.getElementById(id);
    if (m) m.style.display = "none";
  }
  // Hide the first-person arm — the player has no body any more.
  if (fpArm) fpArm.group.visible = false;
  el.style.display = "flex";
  const cause = document.getElementById("deathCause");
  if (cause) {
    const reason = player?.lastDamageReason || "an unknown cause";
    cause.textContent = `Killed by ${reason}`;
  }
  if (!_deathWired) {
    _deathWired = true;
    document.getElementById("deathRespawnBtn")?.addEventListener("click", () => {
      el.style.display = "none";
      respawnLocalPlayer();
      setTimeout(() => document.body.requestPointerLock(), 50);
    });
    document.getElementById("deathMenuBtn")?.addEventListener("click", () => {
      window.location.reload();
    });
  }
}

function respawnLocalPlayer() {
  if (!player || !inv) return;
  // Inventory was already dropped at the death position by onHealthChange.
  player.health = player.maxHealth;
  player.airSupply = player.maxAir;
  player.isDead = false;
  player.lastDamageReason = "";
  player.xpLevel = 0;
  player.xpProgress = 0;
  renderXp(0, 0);
  renderHearts(player.health);
  renderBubbles(player.maxAir, player.maxAir);
  hunger = 20; renderHunger(hunger);
  player.spawnAt(_respawnPos.x, _respawnPos.y, _respawnPos.z);
  // Show the first-person arm again — we were "despawned" while dead.
  if (fpArm) fpArm.group.visible = true;
  if (mp?.isConnected()) mp.sendRespawn();
  refreshHotbar();
  syncHeldItem();
}

// ── Player list (TAB) ──────────────────────────────────────────────────────
function renderPlayerList() {
  const el = document.getElementById("playerListBody");
  if (!el) return;
  const rows: string[] = [];
  const guestPfp = "https://static.bloxity.io/img/pfps/0.png?width=128&quality=85";
  const localUser = Legion.getUser();
  const localPfp = localUser?.pfp || guestPfp;
  rows.push(`<tr><td><img class="tab-pfp" src="${escapeHtml(localPfp)}" alt="" />${escapeHtml(playerName)} (you)</td><td>${player?.health ?? 20}</td></tr>`);
  if (mp?.isConnected()) {
    for (const rp of mp.getRemotePlayers()) {
      const pfp = rp.pfp || guestPfp;
      rows.push(`<tr><td><img class="tab-pfp" src="${escapeHtml(pfp)}" alt="" />${escapeHtml(rp.displayName || rp.name)}</td><td>${rp.health ?? "?"}</td></tr>`);
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

// ── Red hit-flash for entities ─────────────────────────────────────────────
//
// Walks every mesh under `root`, briefly multiplies its material color by a
// red tint, then restores. Mirrors the vanilla "red hurt overlay" you see
// when you punch a pig — except per-entity, not screen-wide.
const _hitFlashRestore = new WeakMap<THREE.Object3D, () => void>();
function flashHitFlash(root: THREE.Object3D, durationMs = 250) {
  // If a flash is already active on this entity, don't stack — just extend.
  const prev = _hitFlashRestore.get(root);
  if (prev) prev();
  const restorers: Array<() => void> = [];
  root.traverse((o: any) => {
    const m = o.material;
    if (!m) return;
    const mats = Array.isArray(m) ? m : [m];
    for (const mm of mats) {
      const c: THREE.Color | undefined = mm.color;
      if (!c) continue;
      const r = c.r, g = c.g, b = c.b;
      // Mix toward red without going pure-red — keeps texture readable.
      c.setRGB(Math.min(1, r * 0.55 + 0.85), g * 0.35, b * 0.35);
      restorers.push(() => c.setRGB(r, g, b));
    }
  });
  const restoreAll = () => { for (const r of restorers) r(); _hitFlashRestore.delete(root); };
  _hitFlashRestore.set(root, restoreAll);
  setTimeout(restoreAll, durationMs);
}

// ── Combat LMB raycast ─────────────────────────────────────────────────────
//
// One cheap cylinder-along-camera test, used for both mobs AND remote
// players. We find the nearest hit of either kind and dispatch the
// appropriate server message.
function damageForHeld(): number {
  const heldId = inv?.getHeld()?.id ?? 0;
  switch (heldId) {
    case 58: return 4;   // wood sword  (2 hearts)
    case 61: return 5;   // stone sword (2.5)
    case 63: return 6;   // iron sword  (3)
    case 64: return 7;   // diamond sword (3.5)
    // axes hit a bit harder than fists but less than swords
    case 56: return 3;   // wood axe
    case 60: return 4;   // stone axe
    case 71: return 5;   // diamond axe
    default: return 1;   // fist — half a heart (vanilla)
  }
}

function tryAttackInFront(): boolean {
  if (!mp?.isConnected() || !player) return false;
  const eye = new THREE.Vector3(player.pos.x, player.pos.y + 1.62, player.pos.z);
  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  dir.normalize();
  const maxDist = 4.5;
  type Hit = { kind: "mob" | "player"; id: string; t: number; mesh: THREE.Object3D };
  let best: Hit | null = null;
  // Proper ray-vs-AABB intersection (slab method). Each entity has a tight
  // box centered on its mesh position; we hit if our look-ray pierces the
  // box within maxDist. Cylinder was missing too often because mob mesh Y
  // was ~ground-level while the look ray was at eye height.
  const considerBox = (kind: "mob" | "player", id: string, mesh: THREE.Object3D, halfW: number, height: number) => {
    const cx = mesh.position.x, cy = mesh.position.y, cz = mesh.position.z;
    const min = new THREE.Vector3(cx - halfW, cy,         cz - halfW);
    const max = new THREE.Vector3(cx + halfW, cy + height, cz + halfW);
    let tMin = -Infinity, tMax = Infinity;
    for (const axis of ["x", "y", "z"] as const) {
      const o = eye[axis], d = dir[axis];
      if (Math.abs(d) < 1e-6) {
        if (o < min[axis] || o > max[axis]) return;
        continue;
      }
      let t1 = (min[axis] - o) / d, t2 = (max[axis] - o) / d;
      if (t1 > t2) [t1, t2] = [t2, t1];
      if (t1 > tMin) tMin = t1;
      if (t2 < tMax) tMax = t2;
      if (tMin > tMax) return;
    }
    const t = tMin >= 0 ? tMin : tMax;
    if (t < 0 || t > maxDist) return;
    if (!best || t < best.t) best = { kind, id, t, mesh };
  };
  for (const m of mp.getRemoteMobs())    considerBox("mob",    m.id, m.mesh, 0.5, 1.8);
  for (const p of mp.getRemotePlayers()) considerBox("player", p.id, p.mesh, 0.45, 1.85);
  if (!best) return false;
  // Visual: red-flash whatever we hit for ~250 ms.
  flashHitFlash(best.mesh);
  const dmg = damageForHeld();
  if (best.kind === "mob") mp.sendAttackMob(best.id, dmg);
  else                     mp.sendAttackPlayer(best.id, dmg);
  return true;
}

// ── Bow firing ─────────────────────────────────────────────────────────────
//
// RMB with a bow held (item 102) + arrows (item 80) in inventory: consume
// one arrow, raycast up to 30 m, damage the first mob/player on the line.
// Hitscan rather than projectile for now — much simpler and reads instantly.
// We do spawn a brief tracer line so the shot is visible.
function tryShootBow(): boolean {
  if (!player || !inv) return false;
  const held = inv.getHeld();
  if (!held || held.id !== 102) return false; // not holding a bow
  // Find + consume one arrow (creative skips ammo check).
  if (inv.gameMode !== "creative") {
    if (inv.countOf(80) < 1) return false;
    inv.remove(80, 1);
    refreshHotbar();
  }
  sound.swing();
  const origin = new THREE.Vector3(player.pos.x, player.pos.y + 1.62, player.pos.z);
  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  // Find nearest mob OR player on the ray (cheap cylinder test like attack).
  const maxDist = 30, radius = 0.6;
  type Hit = { kind: "mob" | "player"; id: string; t: number };
  let best: Hit | null = null;
  const consider = (kind: "mob" | "player", id: string, mx: number, my: number, mz: number) => {
    const toM = new THREE.Vector3(mx - origin.x, (my + 1.0) - origin.y, mz - origin.z);
    const t = toM.dot(dir);
    if (t <= 0 || t > maxDist) return;
    const perp = toM.clone().sub(dir.clone().multiplyScalar(t));
    if (perp.length() <= radius && (!best || t < best.t)) best = { kind, id, t };
  };
  if (mp?.isConnected()) {
    // See tryAttackInFront — use mesh.position (locally ground-snapped) so
    // the cylinder test matches what the player actually sees.
    for (const m of mp.getRemoteMobs())    consider("mob",    m.id, m.mesh.position.x, m.mesh.position.y, m.mesh.position.z);
    for (const p of mp.getRemotePlayers()) consider("player", p.id, p.mesh.position.x, p.mesh.position.y, p.mesh.position.z);
  }
  // Visible tracer
  spawnArrowTracer(origin, dir, best ? best.t : maxDist);
  if (best && mp?.isConnected()) {
    const dmg = 5;
    if (best.kind === "mob") mp.sendAttackMob(best.id, dmg);
    else                     mp.sendAttackPlayer(best.id, dmg);
    sound.hit();
  }
  return true;
}

function spawnArrowTracer(origin: THREE.Vector3, dir: THREE.Vector3, dist: number) {
  // Tiny stretched box that flies along the ray for a few frames.
  const geo = new THREE.BoxGeometry(0.04, 0.04, Math.max(0.3, dist));
  const mat = new THREE.MeshBasicMaterial({ color: 0xdadada });
  const mesh = new THREE.Mesh(geo, mat);
  // Place at midpoint of the shot
  const mid = origin.clone().add(dir.clone().multiplyScalar(dist / 2));
  mesh.position.copy(mid);
  mesh.lookAt(origin.clone().add(dir));
  scene.add(mesh);
  setTimeout(() => {
    scene.remove(mesh);
    geo.dispose(); mat.dispose();
  }, 160);
}

// ── Drop item (Q) ───────────────────────────────────────────────────────────
//
// Decrement the held stack by 1 and spawn a drop in the world a couple
// blocks in front of the player with a small forward toss. We re-use the
// existing ItemDrops so the local pickup logic just works (after a short
// grace period defined inside ItemDrops).
function dropOneFromHotbar() {
  if (!inv || !player || !drops) return;
  const slot = inv.getHeld();
  if (!slot || slot.id === 0 || slot.count === 0) return;
  const droppedId = slot.id;
  if (inv.gameMode !== "creative") {
    slot.count -= 1;
    if (slot.count <= 0) { slot.id = 0; slot.count = 0; }
  }
  // Spawn ~1.2 blocks in front of the player, eye-height. ItemDrops gives
  // a short pickup grace so we don't immediately re-collect it.
  const sin = Math.sin(player.yaw), cos = Math.cos(player.yaw);
  const sx = player.pos.x + -sin * 1.2;
  const sy = player.pos.y + 1.4;
  const sz = player.pos.z + -cos * 1.2;
  drops.spawn(droppedId, 1, sx, sy, sz);
  sound.drop();
  refreshHotbar();
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
  const phase = (timeOfDay / 24000) * Math.PI * 2;
  const sunAngle = phase - Math.PI / 2;
  const r = 200;
  sun.position.set(Math.cos(sunAngle) * r, Math.sin(sunAngle) * r + 20, 50);

  // Light intensity. dayness=1 at noon → 0 at midnight. Floor much lower
  // than before so night actually feels dark.
  const dayness = Math.max(0, Math.sin(sunAngle));
  // Daylight cranked up to roughly match vanilla MC — the previous floor
  // values gave a muddy, dusk-like look even at noon. Night floor kept low
  // so it still feels meaningfully dark.
  sun.intensity     = 0.05 + dayness * 1.30;
  ambient.intensity = 0.18 + dayness * 0.95;
  hemi.intensity    = 0.10 + dayness * 0.55;
  // Cross-shape sprites (flowers/tallgrass) use an unlit material so they
  // don't pick up sun/ambient automatically — modulate their colour here.
  world?.setSpriteBrightness(0.18 + dayness * 0.82);

  // Sky / fog colour. Night now a much deeper blue-black so distant chunks
  // fade properly into the dark.
  const dayCol = new THREE.Color(0x9bd2ff);
  const dusk   = new THREE.Color(0xc46a3a);
  const night  = new THREE.Color(0x010410);
  let col: THREE.Color;
  if (timeOfDay < 4500)        col = night.clone().lerp(dayCol, timeOfDay / 4500);
  else if (timeOfDay < 12000)  col = dayCol;
  else if (timeOfDay < 13500)  col = dayCol.clone().lerp(dusk, (timeOfDay - 12000) / 1500);
  else if (timeOfDay < 15000)  col = dusk.clone().lerp(night, (timeOfDay - 13500) / 1500);
  else if (timeOfDay < 22500)  col = night;
  else                          col = night.clone().lerp(dayCol, (timeOfDay - 22500) / 1500);

  scene.background = col;
  // Pull fog closer at night so the world reads as enclosed darkness rather
  // than a uniform sky-coloured void. Cheap — Three.js Fog is one constant.
  const fog = scene.fog as THREE.Fog;
  fog.color.copy(col);
  fog.near = 60;
  fog.far  = 60 + dayness * 160 + 60; // 120 at midnight, 280 at noon
  renderer.setClearColor(col);
}

// ── Boot game ───────────────────────────────────────────────────────────────
async function startGame(serverAddr: string | null) {
  const cfg = MODES[mode];
  document.getElementById("mainMenu")!.style.display = "none";
  const loader = document.getElementById("loadingScreen")!;
  loader.style.display = "flex";
  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Loading textures…";

  Legion.loadingStep("Loading textures…");
  await preloadAtlas();
  preloadPlayerModel().catch(() => {});

  // For multiplayer we need the SERVER's seed so every client generates the
  // same terrain. Connect first, harvest state.seed, then create the world.
  let serverSeed = 0;
  if (cfg.isMultiplayer && serverAddr) {
    (document.getElementById("loadingStatus") as HTMLElement).textContent =
      pendingRoomId ? `Joining room ${pendingRoomId}…` : `Connecting to ${serverAddr}…`;
    Legion.loadingStep(pendingRoomId ? `Joining room ${pendingRoomId}` : "Connecting to server");
    mp = new Multiplayer(scene, playerName);
    // Wire callbacks BEFORE connect so worldState / state changes during the
    // join don't get dropped. `world` is null at this point; handlers that
    // touch it check for that and bail. We'll replay block state below via
    // mp.applyExistingBlockState() once the world is built.
    mp.onConnected = () => addChatLine("", `Connected as ${playerName}`);
    mp.onDisconnected = () => addChatLine("", "Disconnected from server");
    mp.onError = (err) => addChatLine("", "Connect error: " + err);
    mp.onChat = (sender, msg) => { addChatLine(sender, msg); sound.chat(); };
    mp.onBlockUpdate = (x, y, z, type) => {
      // Server-replicated changes must NOT auto-create empty chunks (that
      // would prevent terrain generation for those chunks later — see
      // World.setBlock). If the chunk isn't loaded, the change is buffered
      // and applied when generateChunk reaches it.
      if (world) world.setBlock(x, y, z, type, { autoCreate: false });
    };
    mp.onLocalDamage = (d, source) => {
      // Prefer the precise source from the server message ("a creeper" /
      // "PlayerName"). Fall back to "a monster" only if no source arrived.
      player?.takeDamage(d, source || "a monster");
    };
    // Snap remote mobs to actual terrain — server uses a dumb y=32 floor.
    mp.groundLookup = (x, z) => {
      if (!world) return null;
      const ix = Math.floor(x), iz = Math.floor(z);
      for (let y = 63; y >= 0; y--) {
        if (world.isSolid(ix, y, iz)) return y + 1;
      }
      return null;
    };
    mp.onLocalKnockback = (byX, _byY, byZ) => {
      // Reason is now set by mp.onLocalDamage from the server's byName field.
      if (!player) return;
      const dx = player.pos.x - byX;
      const dz = player.pos.z - byZ;
      const len = Math.hypot(dx, dz) || 1;
      player.vel.x += (dx / len) * 4.5;
      player.vel.z += (dz / len) * 4.5;
      if (player.onGround) player.vel.y = Math.max(player.vel.y, 3.6);
    };
    const modeKey = mode === "creative_mp"     ? "creative"
                  : mode === "bedwars_mp"      ? "bedwars"
                  : mode === "parkour_mp"      ? "parkour"
                  : mode === "oneblock"        ? "oneblock"
                  : mode === "buildbattle_mp"  ? "buildbattle"
                  : mode === "hideandseek_mp"  ? "hideandseek"
                  : "survival";
    try {
      await mp.connect(serverAddr, modeKey, pendingRoomId);
      pendingRoomId = null;
      serverSeed = mp.getSeed();
    } catch (e) {
      addChatLine("", "Could not connect, playing offline");
      console.error(e);
      mp = null;
    }
  }

  (document.getElementById("loadingStatus") as HTMLElement).textContent = "Generating world…";
  await new Promise(r => setTimeout(r, 30));
  // Server seed if MP, otherwise random. 0 falls through to a default.
  const seed = serverSeed || Math.floor(Math.random() * 100000) || 12345;
  world = new World(scene, seed, { infinite: cfg.useDefaultWorld });
  // Replay any block changes that happened in the room before we joined.
  if (mp?.isConnected()) mp.applyExistingBlockState();

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
  } else if (mode === "buildbattle_mp") {
    const s = buildBuildBattle(world);
    spawnX = s.spawnX; spawnY = s.spawnY; spawnZ = s.spawnZ;
  } else if (mode === "hideandseek_mp") {
    const s = buildHideAndSeek(world);
    spawnX = s.spawnX; spawnY = s.spawnY; spawnZ = s.spawnZ;
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
  _respawnPos = { x: spawnX, y: spawnY, z: spawnZ };

  player = new Player(camera, world);
  player.inv = inv;
  player.setGameMode(cfg.isCreative ? "creative" : "survival");
  player.spawnAt(spawnX, spawnY, spawnZ);

  drops = new ItemDrops(scene);
  drops.onPickup = () => {
    sound.pickup();
    // Picked-up item may have landed in the currently selected hotbar slot
    // (e.g. selected slot was empty when we walked over a cactus). Refresh
    // so the FP arm shows the new item without having to scroll away/back.
    refreshHotbar();
    syncHeldItem();
  };
  creativeInv = new CreativeInventory(inv);
  creativeInv.onClose = () => setTimeout(() => document.body.requestPointerLock(), 50);
  creativeInv.onChange = () => { refreshHotbar(); syncHeldItem(); };
  tradeUI = new TradeUI(inv);
  tradeUI.onClose = () => setTimeout(() => document.body.requestPointerLock(), 50);
  tradeUI.onChange = () => { refreshHotbar(); syncHeldItem(); };
  furnaceUI = new FurnaceUI(inv);
  furnaceUI.onClose = () => { refreshHotbar(); syncHeldItem(); setTimeout(() => document.body.requestPointerLock(), 50); };
  furnaceUI.onChange = () => { refreshHotbar(); syncHeldItem(); };
  // Flip the world block 37 (unlit) ↔ 38 (lit) when a furnace lights/extinguishes.
  furnaceUI.onBlockStateChange = (k, lit) => {
    const [sx, sy, sz] = k.split(",").map(n => parseInt(n, 10));
    const cur = world.getBlock(sx, sy, sz);
    if (lit && cur === 37)      world.setBlock(sx, sy, sz, 38);
    else if (!lit && cur === 38) world.setBlock(sx, sy, sz, 37);
  };
  // Persistence: save furnace state after every mutation.
  furnaceUI.onSave = () => savePersistentState();
  chestUI = new ChestUI(inv);
  chestUI.onClose = () => { refreshHotbar(); syncHeldItem(); setTimeout(() => document.body.requestPointerLock(), 50); };
  chestUI.onChange = () => { refreshHotbar(); syncHeldItem(); };
  chestUI.onSave = () => savePersistentState();
  craftingUI = new CraftingUI(inv);
  craftingUI.onCraft = () => { refreshHotbar(); sound.craft(); };
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
  if (fpArm) {
    camera.add(fpArm.group);
    // Apply the local user's skin texture + custom right-arm shape (per the
    // user's note: FP only needs skin + right arm geometry — hat/back/etc.
    // would be off-screen anyway).
    const avatar = Legion.getAvatar();
    applySkinToCharacter(fpArm.group, String(avatar?.skinId || "0"));
    if (avatar?.armRId) swapPart(fpArm.group, "arm_R", avatar.armRId);
    // Dev panel — sliders to tune arm rest pose + swing. Hidden by default,
    // shown when ?devarm=1 is in the URL or window.__armDev.show() is called.
    new ArmDevPanel();
  }

  // Hooks
  player.onBreak = (x, y, z, prevType) => {
    breakParticles.spawn(prevType, x, y, z);
    fpArm?.triggerSwing(1);
    sound.breakBlock(blockSurface(prevType));
    const def = BLOCKS[prevType];
    // Durability cost: one use per block when the held tool is the right
    // category for the block. Survival only.
    if (!cfg.isCreative && def?.tool && def.tool !== "any") {
      const held = inv.getHeld();
      const item = held && held.id > 0 ? ITEMS[held.id] : null;
      if (item && item.tool === def.tool) {
        const broke = damageTool(held, 1);
        if (broke) { sound.click(); refreshHotbar(); syncHeldItem(); }
        else       refreshHotbar();
      }
    }
    const eligible = !cfg.isCreative && def && def.drop !== 0 && player.canHarvest(prevType);
    if (eligible) {
      const dropId = def!.drop ?? prevType;
      const dropCount = def!.dropCount ?? 1;
      drops.spawn(dropId, dropCount, x, y, z);
    }
    // Furnace mined: drop its contents back into the world and forget the state.
    if (prevType === 37 || prevType === 38) {
      const contents = furnaceUI?.destroy(x, y, z) ?? [];
      for (const c of contents) drops.spawn(c.id, c.count, x, y, z);
      // Always drop the furnace itself (id 37) so the player can pick it up
      // regardless of which texture state it was mined in.
      if (cfg.isCreative === false) drops.spawn(37, 1, x, y, z);
    }
    // Chest mined: dump contents at the chest position. The chest block
    // itself is dropped via the normal eligibility check above.
    if (prevType === 171) {
      const contents = chestUI?.destroy(x, y, z) ?? [];
      for (const c of contents) drops.spawn(c.id, c.count, x, y, z);
    }
    // XP rewards: bigger amount for ores, small for everything else (vanilla-ish).
    if (!cfg.isCreative) {
      const xp = prevType === 18 ? 2 :       // coal ore
                 prevType === 19 ? 3 :       // iron ore  → smelting; close enough
                 prevType === 20 ? 4 :       // gold ore
                 prevType === 21 ? 7 :       // diamond ore
                 prevType === 152 ? 4 :      // quartz ore
                 1;                          // anything else
      player.addXp(xp);
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
    // Cascade gravity for any sand/gravel column resting on the broken cell.
    const fell = world.cascadeGravityAbove(x, y, z);
    if (fell.length > 0 && mp?.isConnected()) {
      for (const m of fell) {
        mp.sendBlockUpdate(m.from.x, m.from.y, m.from.z, 0);
        mp.sendBlockUpdate(m.to.x,   m.to.y,   m.to.z,   m.type);
      }
    }
  };
  player.onPlace = (x, y, z, type) => {
    if (mp?.isConnected()) mp.sendBlockUpdate(x, y, z, type);
    sound.place(blockSurface(type));
    // After consumeHeld, the slot might have emptied (count→0, id→0). Refresh
    // the hotbar count + the in-hand mesh so the player doesn't keep "seeing"
    // a phantom block. syncHeldItem early-returns if the id is unchanged.
    refreshHotbar();
    syncHeldItem();
    // Gravity for placed sand / gravel — fall to the first solid block below.
    if (type === 4 || type === 10) {
      const fell = world.applyGravity(x, y, z);
      if (fell.length > 0 && mp?.isConnected()) {
        for (const m of fell) {
          mp.sendBlockUpdate(m.from.x, m.from.y, m.from.z, 0);
          mp.sendBlockUpdate(m.to.x,   m.to.y,   m.to.z,   m.type);
        }
      }
    }
  };
  let _lastHp = player.health;
  player.onHealthChange = (hp) => {
    renderHearts(hp);
    if (hp < _lastHp) triggerHurt();
    _lastHp = hp;
    if (hp <= 0) {
      sound.death();
      // Drop the player's whole inventory at the death position before the
      // respawn flow zeroes it out — that's vanilla survival behaviour.
      // Creative keeps its loadout (also vanilla).
      if (inv.gameMode !== "creative") {
        const dx = player.pos.x, dy = player.pos.y, dz = player.pos.z;
        for (const s of [...inv.hotbar, ...inv.main]) {
          if (s.id !== 0 && s.count > 0) drops.spawn(s.id, s.count, dx, dy, dz);
        }
        for (const s of inv.hotbar) { s.id = 0; s.count = 0; s.damage = 0; }
        for (const s of inv.main)   { s.id = 0; s.count = 0; s.damage = 0; }
        refreshHotbar(); syncHeldItem();
      }
      showDeathScreen();
    } else {
      sound.hurt();
    }
  };
  player.onJump = () => sound.jump();
  player.onXpChange = (lvl, p) => renderXp(lvl, p);
  player.onLand = () => {
    const bx = Math.floor(player.pos.x);
    const by = Math.floor(player.pos.y) - 1;
    const bz = Math.floor(player.pos.z);
    sound.land(blockSurface(world.getBlock(bx, by, bz)));
  };
  player.onAirChange = (air, max) => renderBubbles(air, max);
  player.onBreakProgress = (p) => {
    breakFx.setProgress(p);
  };

  if (mp?.isConnected()) {
    // ── Remote break-overlay sync ──
    // Maintain one BreakHighlight per remote sessionId. We dispose it on
    // breakStop OR after 1.5 s without an update (safety against dropped
    // messages or disconnects).
    const remoteBreakers = new Map<string, { fx: BreakHighlight; lastT: number; key: string }>();
    mp.onRemoteBreakStart = (sid, x, y, z) => {
      let r = remoteBreakers.get(sid);
      if (!r) { r = { fx: new BreakHighlight(scene), lastT: performance.now(), key: "" }; remoteBreakers.set(sid, r); }
      r.fx.setTarget(x, y, z); r.fx.setProgress(0.01);
      r.key = `${x},${y},${z}`;
      r.lastT = performance.now();
    };
    mp.onRemoteBreakProgress = (sid, x, y, z, p) => {
      let r = remoteBreakers.get(sid);
      if (!r) { r = { fx: new BreakHighlight(scene), lastT: performance.now(), key: "" }; remoteBreakers.set(sid, r); }
      const key = `${x},${y},${z}`;
      if (r.key !== key) { r.fx.setTarget(x, y, z); r.key = key; }
      r.fx.setProgress(p);
      r.lastT = performance.now();
    };
    mp.onRemoteBreakStop = (sid) => {
      const r = remoteBreakers.get(sid);
      if (r) { r.fx.dispose(); remoteBreakers.delete(sid); }
    };
    // Stash on global so the game loop can sweep stale entries
    (window as any)._remoteBreakers = remoteBreakers;
  }

  // Restore any saved progress for this (mode, legionId). Replaces the
  // default spawn/inventory if a save was found. Furnace block textures
  // (lit 38 vs unlit 37) are also re-applied so smelting that was active
  // when the player left resumes visibly.
  const restored = loadPersistentState();
  if (restored && furnaceUI) {
    // Re-apply lit-furnace block state for any furnace that was burning.
    for (const { k, s } of furnaceUI.serialize()) {
      if (s.fuelLeft > 0) {
        const [sx, sy, sz] = k.split(",").map(n => parseInt(n, 10));
        if (world.getBlock(sx, sy, sz) === 37) world.setBlock(sx, sy, sz, 38);
      }
    }
  }

  buildHotbar();
  selectSlot(inv.selected);
  renderHearts(cfg.isCreative ? 20 : player.health);
  renderHunger(hunger);
  renderXp(player.xpLevel, player.xpProgress);
  const heartsEl = document.getElementById("hearts")!;
  const hungerEl = document.getElementById("hunger")!;
  const xpBar   = document.getElementById("xpBar")!;
  const xpLevel = document.getElementById("xpLevel")!;
  heartsEl.style.display = cfg.isCreative ? "none" : "flex";
  if (hungerEl) hungerEl.style.display = cfg.isCreative ? "none" : "flex";
  // XP bar is survival-only (matches vanilla — creative hides it).
  xpBar.style.display   = cfg.isCreative ? "none" : "block";
  xpLevel.style.display = cfg.isCreative ? "none" : "block";
  document.getElementById("modeLabel")!.textContent = cfg.label;

  loader.style.display = "none";
  document.getElementById("ingameUI")!.style.display = "block";

  Legion.loadingEnd();
  Legion.gameplayStart();
  pauseGameStarted = true;
  // Start the per-mode phase ticker for modes that have one.
  startModeStates(mode);

  // Game loop
  let last = performance.now();
  let waterT = 0;
  let mpSendTimer = 0;
  let frames = 0;
  let fpsTimer = 0;
  let lastFps = 60;
  let streamTimer = 0;
  let tabRefresh = 0;
  // Footstep / splash tracking
  let stepDist = 0;
  let lastInWater = false;
  // FP arm bob/sway tracking
  let lastYaw = player.yaw;
  // Break-progress sync state
  let lastSentBreakKey: string | null = null;
  let lastSentBreakProgress = -1;
  let breakSendTimer = 0;

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
      world.updateAroundPlayer(player.pos.x, player.pos.z, _renderDist);
    }
    pollGamepad(dt);
    tickModeState();
    world.rebuildDirty(2, player.pos.x, player.pos.z);

    if (!cfg.isCreative) {
      drops.update(dt, player.pos, inv, (x, y, z) => world.isSolid(x, y, z), !player.isDead);
      // Hunger drain — one tick every ~60 s of walking (10× slower than before).
      hungerTimer += dt * (player.sprinting ? 2 : 1);
      if (hungerTimer > 60) {
        hungerTimer = 0;
        if (hunger > 0) hunger--;
        else if (player.health > 0) player.takeDamage(1, "starvation");
        renderHunger(hunger);
      }
    }
    refreshHotbar();
    tickWater(waterT);
    breakParticles.update(dt, (x, y, z) => world.isSolid(x, y, z));
    furnaceUI?.tick(dt);

    // First-person arm: chop continuously while LMB held in survival.
    // Also pass walking speed + yaw delta so the arm bobs + sways like vanilla.
    if (fpArm) {
      if (lmbHeld && player.gameMode === "survival" && player.lastHit) {
        fpArm.triggerMineSwing();
      }
      const walkSpeed = Math.hypot(player.vel.x, player.vel.z);
      // Wrap yaw delta into (-PI, PI] so a wrap-around doesn't spike the sway.
      let yawDelta = player.yaw - lastYaw;
      if (yawDelta > Math.PI)  yawDelta -= Math.PI * 2;
      if (yawDelta < -Math.PI) yawDelta += Math.PI * 2;
      lastYaw = player.yaw;
      fpArm.update(dt, { walkSpeed, yawDelta, onGround: player.onGround });
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

    // Footstep cadence: emit a step sound every ~0.45 m of ground travel.
    if (player.onGround && !player.flying) {
      const horiz = Math.hypot(player.vel.x, player.vel.z);
      if (horiz > 0.1) {
        stepDist += horiz * dt;
        const cadence = player.sprinting ? 0.35 : player.crouching ? 0.60 : 0.45;
        if (stepDist >= cadence) {
          stepDist = 0;
          const bx = Math.floor(player.pos.x);
          const by = Math.floor(player.pos.y) - 1;
          const bz = Math.floor(player.pos.z);
          sound.step(blockSurface(world.getBlock(bx, by, bz)));
        }
      } else {
        stepDist = 0;
      }
    }

    // Water splash + blue tint overlay. Tint follows the HEAD position so
    // it only kicks in when fully submerged.
    {
      const bx = Math.floor(player.pos.x);
      const by = Math.floor(player.pos.y);
      const bz = Math.floor(player.pos.z);
      const feetInWater = world.getBlock(bx, by, bz) === 7;
      if (feetInWater && !lastInWater) sound.splash();
      lastInWater = feetInWater;
      setWaterTint(player.headUnderwater);
    }

    // ── Break-progress relay ──
    // Send our current mining target + progress to other clients so they
    // see the crack overlay grow on our targeted block. Throttled to
    // ~10 Hz; transitions (new block / stopped) are sent immediately.
    if (mp?.isConnected()) {
      const target = player.breakingAt;
      const targetKey = target ? `${target.x},${target.y},${target.z}` : null;
      if (targetKey !== lastSentBreakKey) {
        if (lastSentBreakKey) mp.sendBreakStop();
        if (target) mp.sendBreakStart(target.x, target.y, target.z);
        lastSentBreakKey = targetKey;
        lastSentBreakProgress = -1;
      }
      if (target) {
        breakSendTimer += dt;
        if (breakSendTimer >= 0.1) {
          breakSendTimer = 0;
          if (Math.abs(player.breakProgress - lastSentBreakProgress) > 0.02) {
            mp.sendBreakProgress(target.x, target.y, target.z, player.breakProgress);
            lastSentBreakProgress = player.breakProgress;
          }
        }
      }
    }
    // Sweep stale remote-breakers (no update in 1.5 s).
    const rbs: Map<string, { fx: BreakHighlight; lastT: number; key: string }> = (window as any)._remoteBreakers;
    if (rbs) {
      const now = performance.now();
      for (const [sid, r] of rbs) {
        if (now - r.lastT > 1500) { r.fx.dispose(); rbs.delete(sid); }
      }
    }

    if (player.pos.y < -10) {
      if (cfg.isCreative) {
        player.spawnAt(spawnX, spawnY, spawnZ);
      } else {
        player.takeDamage(20, "the void");
        if (player.health > 0) player.spawnAt(spawnX, spawnY, spawnZ);
      }
    }
    // Hunger starvation also has a clearer reason now (was "other").

    if (mp?.isConnected()) {
      mpSendTimer += dt;
      if (mpSendTimer >= 0.05) {
        mpSendTimer = 0;
        const heldId = inv.hotbar[inv.selected]?.id ?? 0;
        mp.sendMove(player.pos.x, player.pos.y, player.pos.z, player.yaw, player.pitch, heldId);
      }
      mp.update(dt, camera.position);
    }

    // Hurt screenshake — small random jitter that decays over ~0.3s. Saved
    // pos restored after render so it doesn't drift the player's actual eye.
    if (_shakeT > 0) {
      _shakeT = Math.max(0, _shakeT - dt);
      const k = _shakeAmp * (_shakeT / 0.32);
      const ox = (Math.random() - 0.5) * k;
      const oy = (Math.random() - 0.5) * k;
      const oz = (Math.random() - 0.5) * k;
      const sx = camera.position.x, sy = camera.position.y, sz = camera.position.z;
      camera.position.set(sx + ox, sy + oy, sz + oz);
      renderer.render(scene, camera);
      camera.position.set(sx, sy, sz);
    } else {
      renderer.render(scene, camera);
    }
    requestAnimationFrame(loop);
  }
  loop();
}

const bs = document.getElementById("buildStamp");
if (bs) bs.textContent = `build v2: ${__BUILD_TIME__}`;

// Arm the audio engine — the first user click/keypress will create + resume
// the AudioContext. Done at boot so menu UI clicks also tick.
sound.arm();

// Pause-menu / modal button wiring (safe to do once at boot — elements are
// in the DOM already).
wirePauseButtons();

// Pre-read URL params at SCRIPT LOAD TIME so we don't depend on Legion SDK
// being ready before we can decide to auto-join. The portal sometimes
// launches us with ?instantMultiplayer=true&roomId=… and we don't want to
// flash the lobby for the 0.5-8s the SDK takes to initialise.
const _bootIntent = readInstantJoinIntent();
console.log("[Boot] instant-MP intent:", _bootIntent);

function startInstantMultiplayer(intent: ReturnType<typeof readInstantJoinIntent>) {
  Legion.loadingStep("Preparing instant multiplayer…");
  const u = Legion.getUser();
  playerName = u?.username || u?.displayName || ("Player" + Math.floor(Math.random() * 1000));
  localStorage.setItem("mc.playerName", playerName);

  const requested = (intent.mode || "survival_mp").toLowerCase();
  const fallbackMap: Record<string, ModeId> = {
    survival: "survival_mp", creative: "creative_mp",
    bedwars: "bedwars_mp", parkour: "parkour_mp",
    oneblock: "oneblock",
    buildbattle: "buildbattle_mp", hideandseek: "hideandseek_mp",
  };
  const resolved = (MODES[requested as ModeId] ? requested : fallbackMap[requested]) as ModeId;
  mode = resolved || "survival_mp";
  pendingRoomId = intent.roomId;
  console.log(`[Boot] auto-joining mode=${mode} roomId=${pendingRoomId}`);

  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  const server = isLocal ? "localhost:8471" : "159.223.140.36";
  Legion.loadingStep(intent.roomId ? `Connecting to room ${intent.roomId}` : "Connecting to server");
  startGame(server);
}

// Boot Legion SDK in parallel with the menu wiring. The menu still shows
// while the SDK initialises (so guests can pick a mode immediately); when
// the SDK resolves we re-render the login banner with their account.
Legion.init().then(() => {
  wireMenuButtons();
  renderLegionPanel(Legion.getUser());

  Legion.onAvatarChanged((avatar) => {
    if (fpArm) {
      applySkinToCharacter(fpArm.group, String(avatar?.skinId || "0"));
      if (avatar?.armRId) swapPart(fpArm.group, "arm_R", avatar.armRId);
    }
    if (mp?.isConnected()) {
      const u = Legion.getUser();
      mp.sendAvatarUpdate(avatar, {
        displayName: u?.displayName || u?.username,
        pfp: u?.pfp,
      });
    }
  });

  // Re-check intent after SDK loads in case the portal-side flag arrived
  // late (window.Legion.SDK.game.isInstantMultiplayer can flip true once
  // the SDK initialises).
  const lateIntent = readInstantJoinIntent();
  if (!_bootIntent.instantMultiplayer && lateIntent.instantMultiplayer) {
    startInstantMultiplayer(lateIntent);
  }
});

// Fire instant-MP straight away if the URL already says so — don't wait
// for Legion.init() at all. Login data will fill in later if the SDK loads.
if (_bootIntent.instantMultiplayer) {
  // Stash the player name from whatever we know synchronously.
  const savedName = localStorage.getItem("mc.playerName");
  playerName = savedName || ("Player" + Math.floor(Math.random() * 1000));
  startInstantMultiplayer(_bootIntent);
}
