/**
 * LegionLobby — 3D Hypixel-style main menu for the Legion WebSDK context.
 *
 * Boots when the game is loaded from a Bloxity iframe (?legionsdk=true).
 * Instead of the standard 2D mode-card grid, the player drops into a small
 * walkable plaza built out of Minecraft blocks. 12 portals (one per mode)
 * are arranged around the perimeter. Walking into a portal joins the
 * matching mode — same call path as clicking a mode card on the vanilla
 * menu.
 *
 * Architecture
 * ────────────
 * - Self-contained THREE.WebGLRenderer + Scene. Lives parallel to the main
 *   game renderer but its canvas is the only one visible while the lobby
 *   owns the page. On portal entry we dispose the lobby and hand off to
 *   the existing startGame() flow.
 * - Reuses World + Textures so the lobby is built out of the same blocks
 *   as the rest of the game (stone brick floor, glowstone lamps, obsidian
 *   portal frames, etc.).
 * - Reuses spawnPlayer() (the full third-person GLB rig) for the player
 *   avatar — same skin pipeline as the rest of the game, including any
 *   Legion-equipped cosmetics.
 * - Lightweight kinematic player physics — WASD relative to camera yaw,
 *   space to jump, simple AABB collision against world.isSolid(). The
 *   full Player class is FP-only with pointer-lock and would have been
 *   overkill here.
 * - Third-person orbital camera that follows behind the player. Mouse
 *   drag rotates the camera; W/A/S/D move relative to that yaw.
 * - Portal detection: a per-frame proximity check picks the nearest
 *   portal within 2.5 blocks and shows a "Press E to enter" prompt.
 */
import * as THREE from "three";
import { World } from "./World";
import { spawnPlayer, preloadPlayerModel, applyEquippedSet } from "./PlayerModel";
import { TorchLightManager } from "./TorchLight";
import { preloadAtlas } from "./Textures";
import { MODES, ModeId } from "./Modes";
import { Legion } from "./Legion";
import { Multiplayer } from "./Multiplayer";

interface PortalData {
  id: ModeId;
  label: string;
  pos: THREE.Vector3;     // ground centre (where the player stands to enter)
  facing: number;         // yaw the portal faces (radians)
  group: THREE.Group;     // logical handle (not in scene — see placePortal)
  /** Persistent Roblox-style waypoint sprite floating above the portal. */
  labelSprite: THREE.Sprite;
  /** Animated "shimmer" plane in front of the portal (pulses opacity). */
  shimmer: THREE.Mesh;
  /** Per-shimmer phase used by the opacity oscillation. */
  shimmerT?: number;
  /** Baseline sprite scale — we lerp toward this when the player is far,
   *  scale UP by ~1.7× when within proximity range. */
  baseScale: number;
}

export class LegionLobby {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  // World is created AFTER the atlas finishes loading — the World
  // constructor calls initMaterials() which needs the atlas texture, and
  // we don't want to block the constructor on it (boot-flash bad UX).
  // Until it's ready, this.world is null and the render loop guards against
  // calling its methods.
  private world: World | null = null;
  /** Point-light pool for glowstone/torches around the lobby. */
  private torchLights: TorchLightManager | null = null;
  /** Colyseus client for the shared 20-player lobby room. Connects async
   *  after the scene boots; until connected, other players are invisible
   *  (we just see ourselves). */
  private mp: Multiplayer | null = null;
  private mpSendAcc = 0;
  private playerRig: { root: THREE.Object3D; mixer: any; walkAction: any; idleAction: any } | null = null;
  /** Bind-pose X-rotations of the four animated limb bones, captured at
   *  rig spawn. The walk-swing animation offsets FROM these so idle settles
   *  into the rig's natural arms-down pose instead of identity-flipping
   *  the limbs into the body. Matches Multiplayer.ts.animateLimbs. */
  private limbBaseRot: { ArmR1: number; ArmL1: number; LegR1: number; LegL1: number } | null = null;
  private limbPhase = 0;
  // Player state — minimal kinematic body. We don't need the full Player
  // class here; the lobby is small + flat + no combat.
  private pos = new THREE.Vector3(128.5, 42, 128.5);
  private vel = new THREE.Vector3();
  private yaw = 0;            // facing direction (independent of camera)
  private camYaw = 0;
  private camPitch = -0.25;
  private camDist = 4.5;
  private onGround = false;
  private walkSpeed = 0;
  // Input
  private keys: Record<string, boolean> = {};
  private dragging = false;
  private dragX = 0; private dragY = 0;
  private mouseLocked = false;
  // Portals
  private portals: PortalData[] = [];
  private nearestPortal: PortalData | null = null;
  private spawnPlatformY = 0; // resolved during arena build
  /** Roblox-style hold-E proximity prompt — a 2D HUD element positioned
   *  at the screen-space projection of the nearest portal. Stays a
   *  constant pixel size regardless of distance (true waypoint feel).
   *  Filled when the player holds E for HOLD_E_SECONDS. */
  private promptOverlayEl!: HTMLDivElement;
  private promptOverlayPortalId: string | null = null;
  private holdEStart = 0;       // performance.now() when E was first held
  private holdEActive = false;  // user is currently holding E in range
  private static HOLD_E_SECONDS = 0.55;
  private static PROMPT_RANGE = 4.0;  // metres — within this, prompt shows
  private static TRIGGER_RANGE = 3.5; // metres — within this, E counts
  // DOM
  private promptEl: HTMLDivElement;
  private titleEl: HTMLDivElement;
  private hudEl: HTMLDivElement;
  // Animation
  private lastFrame = performance.now();
  private rafId = 0;
  private disposed = false;
  // Game handoff
  private onJoinMode: (m: ModeId) => void;

  constructor(onJoinMode: (m: ModeId) => void) {
    this.onJoinMode = onJoinMode;

    // ── Renderer ──
    this.renderer = new THREE.WebGLRenderer({ antialias: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = "legionLobbyCanvas";
    this.renderer.domElement.style.cssText = "position:fixed;inset:0;z-index:5;display:block;";
    document.body.appendChild(this.renderer.domElement);

    // ── Scene ──
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x6ab1ff);
    this.scene.fog = new THREE.Fog(0x6ab1ff, 50, 140);
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 500);

    // ── Lighting ──
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const sun = new THREE.DirectionalLight(0xfff8e8, 0.9);
    sun.position.set(60, 100, 35);
    this.scene.add(sun);
    this.scene.add(new THREE.HemisphereLight(0xb0d8ff, 0x5a7a3a, 0.4));

    // World creation is deferred until preloadAtlas() resolves — see the
    // async boot block below. We start the render loop with no world; the
    // user sees just the sky for the ~50-100ms it takes the atlas to load.

    // ── HUD overlays ──
    // Title: bottom-left, small, doesn't obscure portal labels.
    this.titleEl = document.createElement("div");
    this.titleEl.id = "lobbyTitle";
    this.titleEl.style.cssText = `
      position: fixed; bottom: 16px; left: 16px;
      z-index: 10; color: #fff; pointer-events: none;
      font-family: 'Minecraft', 'Inter', system-ui, sans-serif;
      text-shadow: 2px 2px 0 #000;
    `;
    this.titleEl.innerHTML = `
      <div style="font-size:20px;letter-spacing:1px;font-weight:700;">⛏ MINECRAFT LOBBY</div>
      <div style="font-size:11px;margin-top:3px;opacity:0.8;line-height:1.4;">
        WASD move · Shift sprint · Space jump · mouse drag to look · E to enter a portal
      </div>
    `;
    document.body.appendChild(this.titleEl);

    // Portal proximity prompt: bottom-centre, tall accent border, easy to scan.
    this.promptEl = document.createElement("div");
    this.promptEl.id = "lobbyPrompt";
    this.promptEl.style.cssText = `
      position: fixed; bottom: 60px; left: 50%; transform: translateX(-50%);
      z-index: 10; padding: 14px 24px;
      background: rgba(0,0,0,0.78); border: 2px solid #ffd23f;
      color: #fff; font-family: 'Minecraft', 'Inter', system-ui, sans-serif;
      font-size: 18px; text-shadow: 2px 2px 0 #000;
      display: none; pointer-events: none;
      border-radius: 4px;
    `;
    document.body.appendChild(this.promptEl);

    // Top-right HUD: Bloxity auth (login/logout/profile) — same UX as the
    // 2D menu's legion banner. Sits in its own DOM card so pointer-events
    // work (the title/prompt are pointer-events:none for camera drag).
    this.hudEl = document.createElement("div");
    this.hudEl.id = "lobbyHud";
    this.hudEl.style.cssText = `
      position: fixed; top: 12px; right: 12px; z-index: 10;
      color: #fff; font-family: 'Minecraft', 'Inter', system-ui, sans-serif;
      font-size: 12px; text-shadow: 1px 1px 0 #000;
      display: flex; align-items: center; gap: 10px;
      padding: 8px 12px; background: rgba(10,12,16,0.72);
      border: 1px solid rgba(255,255,255,0.18); border-radius: 6px;
      max-width: 340px;
    `;
    document.body.appendChild(this.hudEl);
    this.refreshHud();
    // Re-render the HUD whenever Legion auth state changes + invalidate
    // the nickname sprite so it refreshes with the new display name.
    Legion.onUserChanged?.(() => {
      this.refreshHud();
      this.lastNickname = "";
      this.applyAvatarFromLegion();
    });
    Legion.onAvatarChanged?.(() => this.applyAvatarFromLegion());

    // ── Hold-E proximity prompt overlay ──
    // A 2D pill positioned at the screen-space projection of the nearest
    // portal. Stays a constant pixel size regardless of distance — true
    // Roblox "ProximityPrompt" behaviour. The circular SVG ring fills as
    // the player holds E.
    this.promptOverlayEl = document.createElement("div");
    this.promptOverlayEl.id = "lobbyHoldEPrompt";
    this.promptOverlayEl.style.cssText = `
      position: fixed; left: 0; top: 0; z-index: 11;
      transform: translate(-50%, -50%);
      display: none; pointer-events: none;
      font-family: 'Minecraft', 'Inter', system-ui, sans-serif;
      filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));
    `;
    this.promptOverlayEl.innerHTML = `
      <div style="
        background: rgba(20,22,28,0.92);
        border: 1px solid rgba(255,255,255,0.18);
        padding: 8px 16px 8px 8px;
        border-radius: 999px;
        display: flex; align-items: center; gap: 12px;
        color: #fff;
      ">
        <div style="position:relative;width:48px;height:48px;flex:none;">
          <svg viewBox="0 0 48 48" style="position:absolute;inset:0;transform:rotate(-90deg);">
            <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
            <circle id="lobbyHoldERing" cx="24" cy="24" r="21" fill="none"
              stroke="#57e57c" stroke-width="3" stroke-linecap="round"
              stroke-dasharray="131.95" stroke-dashoffset="131.95" />
          </svg>
          <div style="
            position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
            font-weight:bold;font-size:20px;color:#fff;text-shadow:1px 1px 0 #000;
          ">E</div>
        </div>
        <div style="display:flex;flex-direction:column;line-height:1.1;">
          <div id="lobbyHoldEAction" style="font-size:11px;opacity:0.7;letter-spacing:1px;text-transform:uppercase;">Hold to join</div>
          <div id="lobbyHoldELabel"  style="font-size:17px;font-weight:bold;letter-spacing:0.3px;">Mode</div>
        </div>
      </div>
    `;
    document.body.appendChild(this.promptOverlayEl);

    // ── Async boot: atlas first (World needs it), then world + portals,
    //   then player GLB. Render loop starts immediately so the user sees
    //   the sky while assets load.
    (async () => {
      try {
        await preloadAtlas();
        if (this.disposed) return;
        this.world = new World(this.scene, 12345, { infinite: false });
        this.buildLobby();
        this.torchLights = new TorchLightManager(this.scene, this.world, 8);
        await preloadPlayerModel();
        if (this.disposed) return;
        const rig = spawnPlayer();
        if (!rig) return;
        this.playerRig = rig;
        // ── Full Legion avatar application ──
        // applyEquippedSet swaps EVERY body part the player has equipped
        // (skin texture, head, both arms, both legs, torso, hat, back).
        // The previous code only did `applySkinToCharacter` + arm_R swap,
        // which is fine for first-person (you only see arm_R) but wrong
        // for the third-person lobby where the whole body is visible —
        // that's why the user saw a "stunted" rig with the wrong
        // proportions.
        this.applyAvatarFromLegion();
        // ── Capture bind-pose rotations of the four animated bones ──
        // The limb-swing walk anim offsets FROM these rest rotations so
        // idle reverts to the rig's natural T-pose instead of identity
        // (which would crank the limbs into the body).
        const cap = (name: string) => rig.root.getObjectByName(name)?.rotation.x ?? 0;
        this.limbBaseRot = {
          ArmR1: cap("ArmR1"), ArmL1: cap("ArmL1"),
          LegR1: cap("LegR1"), LegL1: cap("LegL1"),
        };
        this.scene.add(rig.root);
        rig.root.position.copy(this.pos);
        // GLB animations (if baked) — kept around but the manual limb
        // swing below is the actual driver since most of our rigs don't
        // ship walk clips.
        if (rig.idleAction) { rig.idleAction.play(); rig.idleAction.weight = 1; }
        if (rig.walkAction) { rig.walkAction.play(); rig.walkAction.weight = 0; }
        // ── Colyseus connection (20-player shared lobby) ──
        // Once the rig is ready we connect to the lobby room so other
        // Legion players show up in this plaza. The Multiplayer instance
        // owns its own remote-player meshes and adds them to our scene.
        const name = this.getLocalName();
        this.mp = new Multiplayer(this.scene, name);
        try {
          await this.mp.connect(
            location.hostname === "localhost" ? "localhost:8471" : "159.223.140.36",
            "lobby" as any,
          );
        } catch (e) {
          console.warn("[LegionLobby] Colyseus connect failed — running solo:", e);
        }
      } catch (e) {
        console.warn("[LegionLobby] player rig failed to load:", e);
      }
    })();

    // ── Input ──
    this.wireInput();
    window.addEventListener("resize", this.onResize);

    // ── Start render loop ──
    this.loop();
  }

  /** Build the platform + portals. */
  private buildLobby() {
    if (!this.world) return;  // belt-and-braces — caller should have awaited preloadAtlas
    // Big circular stone-brick plaza, raised on a sandstone base. Glowstone
    // ring around the centre platform for atmosphere.
    this.world.protectMode = true;
    const cx = 128, cz = 128, y = 40;
    // ── Spawn position ──
    // Spawn a couple of blocks IN THE AIR above the spawn tile so gravity
    // settles the player onto the floor cleanly. Previously we spawned at
    // y+1.01 exactly, which when combined with a fractional drift could
    // leave the rig partially clipped through the stone-brick floor.
    this.pos.set(cx + 0.5, y + 3, cz + 4.5);
    this.spawnPlatformY = y + 1;
    const R = 18;
    // Floor (stone bricks centre + sandstone outer ring + cobble walkway).
    for (let dx = -R; dx <= R; dx++) for (let dz = -R; dz <= R; dz++) {
      const d = Math.hypot(dx, dz);
      if (d > R) continue;
      const ringOuter = d > R - 0.6;
      const ringMid   = d > R - 2.5 && !ringOuter;
      const centre    = d <= 4;
      const blk = ringOuter ? 17 : ringMid ? 27 : centre ? 41 : 26;
      this.world.setBlock(cx + dx, y, cz + dz, blk);
      // Dirt underbase so falling-through can't expose air.
      this.world.setBlock(cx + dx, y - 1, cz + dz, 27);
      this.world.setBlock(cx + dx, y - 2, cz + dz, 27);
    }
    // Central diamond beacon — purely cosmetic, sits OFF the spawn tile.
    // We elevate it on a 1-block sandstone plinth so the spawn tile (now
    // at +z=4) is fully walkable.
    this.world.setBlock(cx, y + 1, cz, 41);
    this.world.setBlock(cx, y + 2, cz, 41);
    this.world.setBlock(cx, y + 3, cz, 22);
    // Glowstone "torches" on the floor every 60° around the central pad.
    // Single-block height — won't trap the player like the previous
    // 2-tall pillars did.
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const lx = Math.round(Math.cos(a) * 6);
      const lz = Math.round(Math.sin(a) * 6);
      this.world.setBlock(cx + lx, y + 1, cz + lz, 22);  // glowstone (1 high)
    }
    // 12 portals around the rim — 30° apart, just inside the outer ring.
    // Each portal is themed with a different inner block colour.
    const modeOrder: { id: ModeId; inner: number; ring: number; label: string }[] = [
      { id: "survival_mp",      inner: 1,  ring: 5,   label: "Survival" },          // grass / oak
      { id: "creative_mp",      inner: 11, ring: 8,   label: "Creative" },          // glass / planks
      { id: "shooter_mp",       inner: 39, ring: 9,   label: "Shooter" },           // iron / cobble
      { id: "bedwars_mp",       inner: 15, ring: 26,  label: "Bedwars" },           // red wool / brick
      { id: "buildbattle_mp",   inner: 36, ring: 27,  label: "Build Battle" },      // crafting / sandstone
      { id: "hideandseek_mp",   inner: 29, ring: 28,  label: "Hide & Seek" },       // spruce leaves / spruce log
      { id: "parkour_mp",       inner: 40, ring: 151, label: "Parkour" },           // gold / quartz
      { id: "infection_mp",     inner: 17, ring: 9,   label: "Infection" },         // mossy / cobble
      { id: "squidgames_mp",    inner: 15, ring: 14,  label: "Squid Games" },       // red wool / white wool
      { id: "oneblock",         inner: 22, ring: 26,  label: "One Block" },         // glowstone / stone brick
      { id: "survival_offline", inner: 22, ring: 5,   label: "Survival · Offline" },// glowstone / oak
      { id: "creative_offline", inner: 22, ring: 8,   label: "Creative · Offline" },// glowstone / planks
    ];
    const ringR = R - 1;
    for (let i = 0; i < modeOrder.length; i++) {
      const m = modeOrder[i];
      const ang = (i / modeOrder.length) * Math.PI * 2;
      const px = Math.round(Math.cos(ang) * ringR);
      const pz = Math.round(Math.sin(ang) * ringR);
      this.placePortal(cx + px, y + 1, cz + pz, ang + Math.PI, m);  // arch faces inward
    }
    this.world.protectMode = false;
  }

  /** Place a single portal at (gx, gy, gz) facing `yaw` (radians).
   *  Visual: 3×4 obsidian frame with a coloured inner pane. A floating
   *  text label spawns as a sprite above the frame. */
  private placePortal(gx: number, gy: number, gz: number, facing: number, m: { id: ModeId; inner: number; ring: number; label: string }) {
    const w = this.world;
    if (!w) return;  // buildLobby's own guard already checked; this is a TS narrow.
    // Determine sideways direction (perpendicular to `facing`) to lay the
    // frame across. We snap to the cardinal axis closest to `facing`.
    const dx = Math.cos(facing), dz = Math.sin(facing);
    // Side axis = rotate facing by 90°.
    const sx = -dz, sz = dx;
    const sgnX = Math.abs(sx) > Math.abs(sz) ? Math.sign(sx) : 0;
    const sgnZ = Math.abs(sx) > Math.abs(sz) ? 0 : Math.sign(sz);
    // Build 3-wide × 4-tall frame at (gx, gy) extending along (sgnX, sgnZ).
    const tx = Math.round(gx + Math.cos(facing) * 2);
    const tz = Math.round(gz + Math.sin(facing) * 2);
    const frame = m.ring;
    const inner = m.inner;
    // Posts (left + right) — 4 tall.
    for (let h = 0; h <= 3; h++) {
      w.setBlock(tx - sgnX, gy + h, tz - sgnZ, frame);
      w.setBlock(tx + sgnX, gy + h, tz + sgnZ, frame);
    }
    // Top + bottom.
    w.setBlock(tx, gy,     tz,     frame);
    w.setBlock(tx, gy + 4, tz,     frame);
    // Top of side posts capped.
    w.setBlock(tx - sgnX, gy + 4, tz - sgnZ, frame);
    w.setBlock(tx + sgnX, gy + 4, tz + sgnZ, frame);
    // Inner pane (1 wide × 3 tall) coloured by mode.
    for (let h = 1; h <= 3; h++) {
      w.setBlock(tx, gy + h, tz, inner);
    }
    // Decorative glowstone on top centre.
    w.setBlock(tx, gy + 5, tz, 22);
    // Roblox-style "thumbnail + name" plate FLOATING AT PLAYER EYE LEVEL
    // (~gy+2) so it reads as a sign you'd look at, not a sky-high banner.
    // The thumbnail PNG/JPG loads asynchronously; the canvas redraws once
    // the image is ready. Scales up when the player is close. The "Hold
    // E to join" prompt is a SEPARATE 2D HUD overlay (positioned via
    // screen-space projection in update()) so it stays a constant size
    // regardless of distance — see updatePromptOverlay().
    const labelSprite = makeRobloxPortalSprite(m.label, m.id);
    labelSprite.position.set(tx + 0.5, gy + 2.0, tz + 0.5);
    this.scene.add(labelSprite);
    // Animated "shimmer" plane in front of the portal for liveliness.
    const shimmerGeo = new THREE.PlaneGeometry(0.9, 2.7);
    const shimmerMat = new THREE.MeshBasicMaterial({
      color: this.shimmerColorFor(m.id),
      transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false,
    });
    const shimmer = new THREE.Mesh(shimmerGeo, shimmerMat);
    shimmer.position.set(tx + 0.5, gy + 2.5, tz + 0.5);
    shimmer.rotation.y = -facing + Math.PI / 2;  // face perpendicular to portal opening
    shimmer.userData = { shimmer: true, t: Math.random() * 6.28 };
    this.scene.add(shimmer);
    // Portal "trigger" position = one block in FRONT of the inner pane
    // (toward spawn — i.e. on the player side). `facing` points inward
    // toward the centre, so the trigger lies +facing from the pane.
    // The previous code subtracted facing → the trigger landed BEHIND
    // the arch, outside the platform; the prompt never showed.
    const triggerX = tx + Math.cos(facing) * 1.4 + 0.5;
    const triggerZ = tz + Math.sin(facing) * 1.4 + 0.5;
    // Group is JUST a logical handle for the shimmer animation loop —
    // labelSprite and shimmer were already added to the scene directly
    // above. Critically, we do NOT do `group.add(...)` here because
    // adding an object to a Group implicitly REMOVES it from its current
    // parent (the scene) — which orphaned them in the previous build
    // and is why the portal waypoints + shimmer planes never rendered.
    const group = new THREE.Group();
    this.portals.push({
      id: m.id,
      label: m.label,
      pos: new THREE.Vector3(triggerX, gy, triggerZ),
      facing,
      group,
      labelSprite,
      shimmer,  // direct ref for the animation loop
      baseScale: 3.0,  // sprite scale when player is far from this portal
    } as any);
  }

  /** Bright per-portal accent colour for the shimmer plane. */
  private shimmerColorFor(id: ModeId): number {
    switch (id) {
      case "survival_mp":      return 0x64d878;
      case "survival_offline": return 0x4a9a55;
      case "creative_mp":      return 0x9bd2ff;
      case "creative_offline": return 0xc6c6c6;
      case "shooter_mp":       return 0xd76a3a;
      case "bedwars_mp":       return 0xff5050;
      case "buildbattle_mp":   return 0xffd23f;
      case "hideandseek_mp":   return 0x57e57c;
      case "parkour_mp":       return 0xff9c3a;
      case "infection_mp":     return 0x7a5a8a;
      case "squidgames_mp":    return 0xff3a82;
      case "oneblock":         return 0xffe080;
      default: return 0xffffff;
    }
  }

  private wireInput() {
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("keyup",   this.onKeyUp);
    this.renderer.domElement.addEventListener("mousedown", this.onMouseDown);
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseup",   this.onMouseUp);
    // Avoid the browser context menu eating right-click → makes the lobby's
    // mouse rotation feel free.
    this.renderer.domElement.addEventListener("contextmenu", (e) => e.preventDefault());
  }

  private onKey = (e: KeyboardEvent) => {
    if ((e.target as HTMLElement)?.tagName === "INPUT") return;
    this.keys[e.code] = true;
    // Space scrolls the page by default — preventDefault so it counts as a
    // jump input instead. We ALSO edge-trigger the jump right here on
    // keydown — the previous "check this.keys['Space'] in update()" path
    // was unreliable on some browsers; this is robust.
    if (e.code === "Space") {
      e.preventDefault();
      if (this.onGround) {
        this.vel.y = 8.4;
        this.onGround = false;
      }
    }
    if (e.code.startsWith("Arrow") || e.code === "Tab") e.preventDefault();
    // E: only starts the hold-to-enter charge. Discrete press still
    // counts (handled in update loop).
  };
  private onKeyUp = (e: KeyboardEvent) => { this.keys[e.code] = false; };
  private onMouseDown = (e: MouseEvent) => {
    this.dragging = true;
    this.dragX = e.clientX; this.dragY = e.clientY;
  };
  private onMouseMove = (e: MouseEvent) => {
    if (!this.dragging) return;
    const dx = e.clientX - this.dragX;
    const dy = e.clientY - this.dragY;
    this.dragX = e.clientX; this.dragY = e.clientY;
    this.camYaw   -= dx * 0.005;
    this.camPitch  = Math.max(-1.2, Math.min(0.4, this.camPitch - dy * 0.004));
  };
  private onMouseUp = () => { this.dragging = false; };

  private tryEnterPortal() {
    if (!this.nearestPortal || this.disposed) return;
    const id = this.nearestPortal.id;
    this.flashEnter(`Entering ${this.nearestPortal.label}…`);
    // Hand off to main.ts after a short flash so the user sees the
    // confirmation and the audio "click" registers naturally.
    setTimeout(() => this.onJoinMode(id), 240);
  }

  private flashEnter(msg: string) {
    this.promptEl.textContent = msg;
    this.promptEl.style.display = "block";
    this.promptEl.style.borderColor = "#57e57c";
  }

  /** Pull the current Legion avatar (if any) and apply EVERY equipped
   *  part — same call signature Multiplayer.ts uses for remote players.
   *  Re-runs on Legion.onAvatarChanged so cosmetics swap live. */
  private applyAvatarFromLegion() {
    const rig = this.playerRig;
    if (!rig) return;
    const av = Legion.getAvatar?.() || {};
    applyEquippedSet(rig.root, {
      skinId: String((av as any).skinId || "0"),
      hatId:   (av as any).hatId,
      backId:  (av as any).backId,
      headId:  (av as any).headId,
      armLId:  (av as any).armLId,
      armRId:  (av as any).armRId,
      legLId:  (av as any).legLId,
      legRId:  (av as any).legRId,
      torsoId: (av as any).torsoId,
    });
  }

  /** Build the Roblox-style billboard nametag floating above the player
   *  head — visible from any angle, lerps to match the player position
   *  each frame in update(). The current display name comes from Legion
   *  if logged in, otherwise from localStorage (or the rename input).
   *  Re-rendered whenever the name changes (login/logout/rename). */
  private nicknameSprite: THREE.Sprite | null = null;
  private lastNickname = "";
  private ensureNicknameSprite(name: string) {
    if (name === this.lastNickname && this.nicknameSprite) return;
    if (this.nicknameSprite) {
      this.scene.remove(this.nicknameSprite);
      (this.nicknameSprite.material as THREE.SpriteMaterial).map?.dispose?.();
      this.nicknameSprite.material.dispose();
    }
    this.lastNickname = name;
    this.nicknameSprite = makeNicknameSprite(name);
    this.scene.add(this.nicknameSprite);
  }

  /** Current display name for the local player — Legion display name when
   *  logged in, the guest-input value (or saved localStorage value)
   *  otherwise. */
  private getLocalName(): string {
    const u = Legion.getUser?.();
    if (u) return u.displayName || u.username || "Player";
    return (localStorage.getItem("mc.playerName") || "Guest").slice(0, 24);
  }

  private refreshHud() {
    const u = Legion.getUser?.();
    if (u) {
      // Logged in — show pfp, name, logout button.
      this.hudEl.innerHTML = `
        ${u.pfp ? `<img src="${escapeHtml(u.pfp)}" style="width:32px;height:32px;border-radius:50%;border:1px solid #fff;" />` : ""}
        <div style="display:flex;flex-direction:column;gap:1px;min-width:0;">
          <div style="font-weight:600;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:160px;">
            ${escapeHtml(u.displayName || u.username || "Player")}
          </div>
          ${u.username && u.displayName ? `<div style="font-size:10px;opacity:0.6;">@${escapeHtml(u.username)}</div>` : ""}
        </div>
        <button id="lobbyLogout" style="
          background:#3a3d48;color:#fff;border:1px solid #585c68;
          padding:5px 10px;font-size:11px;cursor:pointer;border-radius:3px;
          font-family:inherit;text-shadow:1px 1px 0 #000;
        ">Logout</button>
      `;
      this.hudEl.querySelector<HTMLButtonElement>("#lobbyLogout")?.addEventListener("click", () => {
        Legion.logout?.();
      });
    } else {
      // Guest — name input + login CTA.
      const savedName = (localStorage.getItem("mc.playerName") || "").slice(0, 24);
      this.hudEl.innerHTML = `
        <span style="opacity:0.75;font-size:11px;">Name:</span>
        <input id="lobbyNameInput" type="text" maxlength="24" value="${escapeHtml(savedName)}" placeholder="Guest"
          style="background:#1a1c22;border:1px solid #3a3d48;color:#fff;
                 padding:5px 8px;border-radius:3px;font-family:inherit;
                 font-size:12px;width:130px;outline:none;" />
        <button id="lobbyLogin" style="
          background:linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.18)),
                     repeating-linear-gradient(0deg, #2f7a37 0 3px, #266a2d 3px 6px);
          color:#fff;border:none;border-top:2px solid #54c25e;border-left:2px solid #54c25e;
          border-right:2px solid #1a3e1f;border-bottom:2px solid #1a3e1f;
          padding:6px 12px;font-size:11px;cursor:pointer;
          font-family:inherit;text-shadow:1px 1px 0 #000;letter-spacing:0.5px;
        ">Login with Bloxity</button>
      `;
      this.hudEl.querySelector<HTMLButtonElement>("#lobbyLogin")?.addEventListener("click", () => {
        Legion.showAuthPopup?.();
      });
      const nameInput = this.hudEl.querySelector<HTMLInputElement>("#lobbyNameInput");
      if (nameInput) {
        const save = () => {
          const v = (nameInput.value || "").trim().slice(0, 24);
          if (!v) return;
          localStorage.setItem("mc.playerName", v);
          // Force-rebuild the nickname sprite next frame.
          this.lastNickname = "";
        };
        nameInput.addEventListener("input",  save);
        nameInput.addEventListener("change", save);
        // Stop WASD from leaking into the input.
        nameInput.addEventListener("keydown", (e) => e.stopPropagation());
        nameInput.addEventListener("keyup",   (e) => e.stopPropagation());
      }
    }
  }

  /** Lightweight AABB collision: keep the player out of solid blocks. */
  private resolveCollision(dt: number) {
    const px = this.pos.x, py = this.pos.y, pz = this.pos.z;
    const w = this.world;
    // No-world fallback (still loading) — fall under gravity but skip
    // collision checks so the player doesn't get stuck mid-air.
    if (!w) {
      this.pos.y += this.vel.y * dt;
      this.vel.y -= 24 * dt;
      return;
    }
    // Try X then Z then Y. Player body = 0.6×1.8×0.6 box centred on (x, y+0.9, z).
    const r = 0.3, h = 1.8;
    // X
    const newX = px + this.vel.x * dt;
    if (!this.collides(newX, py, pz, r, h)) this.pos.x = newX;
    else this.vel.x = 0;
    // Z
    const newZ = pz + this.vel.z * dt;
    if (!this.collides(this.pos.x, py, newZ, r, h)) this.pos.z = newZ;
    else this.vel.z = 0;
    // Y
    const newY = py + this.vel.y * dt;
    if (this.vel.y <= 0 && this.collides(this.pos.x, newY, this.pos.z, r, h)) {
      // Landed. Snap to TOP of the block the feet are inside.
      // The previous formula `Math.ceil(newY)` failed at integer newY
      // (Math.ceil(40.0) = 40 → planted the player INSIDE the floor
      // block, half-sunk through the surface). Use `Math.floor(newY) + 1`
      // so we always land on the upper face of the block at floor(newY).
      this.pos.y = Math.floor(newY) + 1;
      this.vel.y = 0;
      this.onGround = true;
    } else if (this.vel.y > 0 && this.collides(this.pos.x, newY, this.pos.z, r, h)) {
      this.vel.y = 0;
    } else {
      this.pos.y = newY;
      this.onGround = false;
    }
    // Standing-on check — and SNAP to the block's top face. The previous
    // code only set onGround=true, leaving pos.y at whatever fractional
    // value the gravity tick had produced (e.g. 40.998). When the rig is
    // anchored at the feet that 0.002-block drift visibly sinks the legs
    // into the stone-brick floor — that's the screenshot the user sent.
    if (!this.onGround) {
      const below = Math.floor(this.pos.y - 0.05);
      if (w.isSolid(Math.floor(this.pos.x), below, Math.floor(this.pos.z))) {
        this.pos.y = below + 1;  // snap to block-top face
        this.onGround = true;
        this.vel.y = 0;
      }
    }
  }
  private collides(x: number, y: number, z: number, r: number, h: number): boolean {
    const w = this.world;
    if (!w) return false;
    for (let dx of [-r, r]) for (let dz of [-r, r]) {
      const x0 = Math.floor(x + dx);
      const z0 = Math.floor(z + dz);
      // Sample three vertical points: feet, mid, head.
      for (const dy of [0.05, h * 0.5, h - 0.05]) {
        const y0 = Math.floor(y + dy);
        if (w.isSolid(x0, y0, z0)) return true;
      }
    }
    return false;
  }

  private update(dt: number) {
    // ── Player movement ──
    // Movement direction relative to camera yaw — feels right for TP.
    let ix = 0, iz = 0;
    if (this.keys["KeyW"] || this.keys["ArrowUp"])    iz -= 1;
    if (this.keys["KeyS"] || this.keys["ArrowDown"])  iz += 1;
    if (this.keys["KeyA"] || this.keys["ArrowLeft"])  ix -= 1;
    if (this.keys["KeyD"] || this.keys["ArrowRight"]) ix += 1;
    const moving = ix !== 0 || iz !== 0;
    if (moving) {
      const len = Math.hypot(ix, iz);
      ix /= len; iz /= len;
      // Camera-relative movement. With camYaw=0 the camera is south of
      // the player looking +Z, so:
      //   W (iz=-1) → move +forward (+Z, away from camera)
      //   D (ix=+1) → move +right  (player-right, which is screen-right)
      // The previous code had A/D inverted from the user's expectation —
      // we now treat ix as a "screen-right intent" and flip the sign
      // when rotating into world coords. The right vector for a camera
      // at yaw φ looking AT target is world-right = (-cos φ, 0, sin φ)
      // (camera's local +X column of its world matrix). That's the same
      // basis THREE uses; using it directly aligns D with screen-right.
      const fX = Math.sin(this.camYaw), fZ = Math.cos(this.camYaw);
      const rX = -Math.cos(this.camYaw), rZ = Math.sin(this.camYaw);
      const wx = -iz * fX + ix * rX;
      const wz = -iz * fZ + ix * rZ;
      const speed = this.keys["ShiftLeft"] ? 7.0 : 4.5;
      this.vel.x = wx * speed;
      this.vel.z = wz * speed;
      // Rig rotation: our GLB has +Z baked as forward. atan2(wx, wz)
      // gives the angle that rotates +Z onto (wx, wz), so applying it
      // directly to mesh.rotation.y makes the rig face its motion.
      this.yaw = Math.atan2(wx, wz);
    } else {
      // Decelerate horizontal velocity.
      this.vel.x *= Math.max(0, 1 - dt * 14);
      this.vel.z *= Math.max(0, 1 - dt * 14);
    }
    this.walkSpeed = Math.hypot(this.vel.x, this.vel.z);
    // Jump
    if ((this.keys["Space"]) && this.onGround) {
      this.vel.y = 8.2;
      this.onGround = false;
    }
    // Gravity
    this.vel.y -= 24 * dt;
    if (this.vel.y < -40) this.vel.y = -40;
    // Apply with collision
    this.resolveCollision(dt);
    // Safety: if the player fell off the platform, respawn at spawn pad.
    if (this.pos.y < 20) {
      this.pos.set(128.5, this.spawnPlatformY + 1.01, 128.5);
      this.vel.set(0, 0, 0);
    }

    // ── Nickname billboard ──
    // Track the local player's display name (Legion display name or the
    // saved guest name) and pin the sprite above the rig's head each
    // frame. Each *remote* player would get their own sprite — for the
    // single-player lobby we only have ourselves to render.
    this.ensureNicknameSprite(this.getLocalName());
    if (this.nicknameSprite) {
      this.nicknameSprite.position.set(this.pos.x, this.pos.y + 2.25, this.pos.z);
    }

    // ── Player rig ──
    if (this.playerRig) {
      const rig = this.playerRig;
      rig.root.position.copy(this.pos);
      // Smooth yaw rotation toward target.
      const cur = rig.root.rotation.y;
      let target = this.yaw;
      // Wrap delta into [-π, π].
      let d = target - cur;
      while (d > Math.PI)  d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      rig.root.rotation.y = cur + d * Math.min(1, dt * 12);
      rig.mixer?.update?.(dt);
      // ── Walk-swing limb animation ──
      // Most of our rigs don't ship a baked walk clip — Multiplayer.ts
      // does the same trick for remote players (animateLimbs). Each
      // shoulder/hip bone swings sinusoidally about its bind-pose X-rot,
      // arms opposite to same-side legs for a natural human gait.
      const moving = this.walkSpeed > 0.5;
      if (moving) this.limbPhase += Math.min(this.walkSpeed, 6) * dt * 1.4;
      else        this.limbPhase *= 0.92;
      const swing = Math.sin(this.limbPhase) * (moving ? 0.6 : 0);
      const base = this.limbBaseRot;
      if (base) {
        const ar = rig.root.getObjectByName("ArmR1");
        const al = rig.root.getObjectByName("ArmL1");
        const lr = rig.root.getObjectByName("LegR1");
        const ll = rig.root.getObjectByName("LegL1");
        if (ar) ar.rotation.x = base.ArmR1 - swing;
        if (al) al.rotation.x = base.ArmL1 + swing;
        if (lr) lr.rotation.x = base.LegR1 + swing;
        if (ll) ll.rotation.x = base.LegL1 - swing;
      }
      // GLB clip crossfade — only meaningful if the rig actually has
      // baked walk/idle clips. Harmless when they're null.
      if (rig.walkAction && rig.idleAction) {
        const m = moving ? 1 : 0;
        rig.walkAction.weight += (m       - rig.walkAction.weight) * Math.min(1, dt * 8);
        rig.idleAction.weight += ((1 - m) - rig.idleAction.weight) * Math.min(1, dt * 8);
      }
    }

    // ── Camera ── third-person orbital
    const target = new THREE.Vector3(this.pos.x, this.pos.y + 1.5, this.pos.z);
    const offsetX = Math.sin(this.camYaw) * Math.cos(this.camPitch) * this.camDist;
    const offsetZ = Math.cos(this.camYaw) * Math.cos(this.camPitch) * this.camDist;
    const offsetY = Math.sin(this.camPitch) * this.camDist;
    this.camera.position.set(target.x - offsetX, target.y - offsetY, target.z - offsetZ);
    this.camera.lookAt(target);

    // ── Portal proximity ──
    // Each in-world thumbnail sprite scales with distance (smaller when
    // far, larger when near) — this is the "billboard above the portal"
    // waypoint. The Roblox-style "Hold E to join" prompt is a SEPARATE
    // 2D HUD overlay rendered in screen-space (constant pixel size)
    // and only shown when within PROMPT_RANGE — see updatePromptOverlay().
    const PROXIMITY = LegionLobby.PROMPT_RANGE;
    let nearest: PortalData | null = null;
    let nearestD = LegionLobby.TRIGGER_RANGE;
    for (const p of this.portals) {
      const dx = this.pos.x - p.pos.x;
      const dz = this.pos.z - p.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < nearestD) { nearest = p; nearestD = d; }
      const t = Math.max(0, Math.min(1, 1 - d / PROXIMITY));
      const k = p.baseScale * (1 + t * 0.5);
      p.labelSprite.scale.set(k, k * 1.4, 1);
      p.shimmerT = (p.shimmerT ?? Math.random() * 6.28) + dt;
      const mat = p.shimmer.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.25 + Math.sin(p.shimmerT * 2) * 0.12;
    }
    this.nearestPortal = nearest;
    // Drive the 2D hold-E overlay each frame.
    this.updatePromptOverlay(nearest);
    // Hide the legacy bottom-centre prompt unless it's mid-"Entering" flash.
    if (this.promptEl.style.borderColor !== "#57e57c") {
      this.promptEl.style.display = "none";
    }
  }

  /** Per-frame: project the nearest in-range portal's world position to
   *  screen coords, position the prompt overlay there. Advance the
   *  hold-E timer if the player is still holding E; trigger when it
   *  reaches HOLD_E_SECONDS. */
  private updatePromptOverlay(target: PortalData | null) {
    const el = this.promptOverlayEl;
    if (!target) {
      el.style.display = "none";
      this.holdEActive = false;
      this.holdEStart = 0;
      this.promptOverlayPortalId = null;
      return;
    }
    // Project the portal's anchor position (slightly above its trigger
    // point) to screen NDC, then to pixels.
    const v = new THREE.Vector3(target.pos.x, target.pos.y + 2.2, target.pos.z);
    v.project(this.camera);
    // v.z > 1 means behind the camera (or beyond far plane).
    if (v.z > 1) { el.style.display = "none"; return; }
    const w = this.renderer.domElement.clientWidth;
    const h = this.renderer.domElement.clientHeight;
    const sx = (v.x + 1) * 0.5 * w;
    const sy = (1 - v.y) * 0.5 * h;
    el.style.display = "block";
    el.style.left = sx + "px";
    el.style.top  = sy + "px";
    // Update the label text + mode name only when the target changes
    // (cheap, but no need to thrash the DOM every frame).
    if (this.promptOverlayPortalId !== target.id) {
      this.promptOverlayPortalId = target.id;
      const labelEl = el.querySelector("#lobbyHoldELabel") as HTMLElement;
      if (labelEl) labelEl.textContent = target.label;
    }
    // Advance the hold-E timer.
    const pressed = !!this.keys["KeyE"];
    if (pressed && !this.holdEActive) {
      this.holdEActive = true;
      this.holdEStart  = performance.now();
    } else if (!pressed && this.holdEActive) {
      this.holdEActive = false;
      this.holdEStart  = 0;
    }
    // Draw the progress ring. circumference = 2π·r = 2π·21 ≈ 131.95.
    const ringEl = el.querySelector("#lobbyHoldERing") as SVGCircleElement | null;
    if (ringEl) {
      const C = 131.95;
      const t = this.holdEActive ? (performance.now() - this.holdEStart) / 1000 : 0;
      const frac = Math.max(0, Math.min(1, t / LegionLobby.HOLD_E_SECONDS));
      ringEl.style.strokeDashoffset = String(C * (1 - frac));
    }
    // Trigger when held long enough — and rate-limit so we don't fire
    // multiple times on one hold.
    if (this.holdEActive && performance.now() - this.holdEStart >= LegionLobby.HOLD_E_SECONDS * 1000) {
      this.holdEActive = false;
      this.holdEStart  = 0;
      this.tryEnterPortal();
    }
  }

  private loop = () => {
    if (this.disposed) return;
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastFrame) / 1000);
    this.lastFrame = now;
    this.update(dt);
    // Keep nearby chunks meshed + flush any dirty geometry. We pass a small
    // render distance (2) since the lobby is a single 36×36 plaza and we
    // never need world-streaming beyond that.
    if (this.world) {
      this.world.updateAroundPlayer(this.pos.x, this.pos.z, 2);
      this.world.rebuildDirty(4, this.pos.x, this.pos.z);
    }
    this.torchLights?.update(this.pos.x, this.pos.y, this.pos.z);
    // ── Multiplayer sync ──
    // Throttle our position broadcast to ~20 Hz; let Multiplayer's own
    // reconcile-from-state loop run every frame for smooth remote-player
    // motion.
    if (this.mp?.isConnected()) {
      this.mpSendAcc += dt;
      if (this.mpSendAcc >= 0.05) {
        this.mpSendAcc = 0;
        // Multiplayer.ts applies `mesh.rotation.y = rotY + π` when rendering
        // remote players (it expects Player.yaw convention where yaw=0
        // means facing -Z). Our local yaw uses the GLB convention (yaw=0
        // = +Z). To make remote clients show our rig in the same pose we
        // see locally, send yaw - π → remote applies +π → net rotation
        // matches our local rig. Without this, remote players appeared to
        // moonwalk (face one way while moving the other).
        this.mp.sendMove(this.pos.x, this.pos.y, this.pos.z, this.yaw - Math.PI, 0, 0, false);
      }
      this.mp.update(dt, this.camera.position);
      // Hide remote-player health badges in the lobby — players aren't
      // taking damage here so the floating "20/20 ❤" feels noisy.
      for (const rp of this.mp.getRemotePlayers()) {
        if (rp.healthBadge) rp.healthBadge.visible = false;
      }
    }
    this.renderer.render(this.scene, this.camera);
    this.rafId = requestAnimationFrame(this.loop);
  };

  private onResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.rafId);
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("keyup",   this.onKeyUp);
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseup",   this.onMouseUp);
    window.removeEventListener("resize",    this.onResize);
    if (this.nicknameSprite) {
      this.scene.remove(this.nicknameSprite);
      (this.nicknameSprite.material as THREE.SpriteMaterial).map?.dispose?.();
      this.nicknameSprite.material.dispose();
    }
    this.torchLights?.dispose();
    this.promptOverlayEl?.remove();
    // Best-effort disconnect from the lobby Colyseus room so others see us
    // leave immediately on portal entry.
    try { (this.mp as any)?.room?.leave?.(); } catch {}
    this.renderer.dispose();
    this.renderer.domElement.remove();
    this.titleEl.remove();
    this.promptEl.remove();
    this.hudEl.remove();
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

/** Per-mode screenshot URL — these match /client/public/screenshots/*. */
const MODE_THUMBS: Record<ModeId, string> = {
  survival_offline: "/screenshots/survival.jpg",
  survival_mp:      "/screenshots/survival.jpg",
  creative_offline: "/screenshots/creative.jpg",
  creative_mp:      "/screenshots/creative.jpg",
  bedwars_mp:       "/screenshots/bedwars.jpg",
  parkour_mp:       "/screenshots/parkour.jpg",
  oneblock:         "/screenshots/oneblock.jpg",
  buildbattle_mp:   "/screenshots/buildbattle.jpg",
  hideandseek_mp:   "/screenshots/hideandseek.jpg",
  shooter_mp:       "/screenshots/shooter.jpg",
  infection_mp:     "/screenshots/infection.jpg",
  squidgames_mp:    "/screenshots/squidgames.webp",
};

/** Roblox-style portal waypoint:
 *    ┌─────────────┐
 *    │  thumbnail  │   ← the mode's screenshot (loaded async)
 *    ├─────────────┤
 *    │   E  Mode   │   ← circled "E" key + bold mode name
 *    └─────────────┘
 *  Always camera-billboarded + always-on-top so it works as a waypoint
 *  from anywhere on the plaza. The thumbnail PNG/JPG loads in the
 *  background; the sprite redraws its texture when the image is ready. */
function makeRobloxPortalSprite(label: string, modeId: ModeId): THREE.Sprite {
  const W = 512, H = 720;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  const drawFrame = (thumb: HTMLImageElement | null) => {
    ctx.clearRect(0, 0, W, H);
    // Background card.
    ctx.fillStyle = "rgba(20, 22, 28, 0.92)";
    roundedRect(ctx, 8, 8, W - 16, H - 16, 26);
    ctx.fill();
    // Thumbnail panel (top half).
    const tx = 24, ty = 24, tw = W - 48, th = 380;
    ctx.fillStyle = "#0f1115";
    roundedRect(ctx, tx, ty, tw, th, 18);
    ctx.fill();
    if (thumb) {
      ctx.save();
      // Clip to rounded rect so the JPG is contained.
      roundedRect(ctx, tx, ty, tw, th, 18);
      ctx.clip();
      // Cover-fit the image.
      const iw = thumb.naturalWidth, ih = thumb.naturalHeight;
      const ar = iw / ih, frameAr = tw / th;
      let dw: number, dh: number, dx: number, dy: number;
      if (ar > frameAr) { dh = th; dw = th * ar; dx = tx + (tw - dw) / 2; dy = ty; }
      else              { dw = tw; dh = tw / ar; dx = tx; dy = ty + (th - dh) / 2; }
      ctx.drawImage(thumb, dx, dy, dw, dh);
      ctx.restore();
    } else {
      // Loading placeholder.
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.font = "500 22px 'Inter', system-ui, sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("Loading…", W / 2, ty + th / 2);
    }
    // "E" disc on the bottom row.
    const ex = 90, ey = ty + th + 100;
    const er = 56;
    ctx.fillStyle = "rgba(255,255,255,0.10)";
    ctx.beginPath(); ctx.arc(ex, ey, er, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.92)";
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(ex, ey, er, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 64px 'Inter', system-ui, sans-serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillText("E", ex, ey + 2);
    // Mode name — bold white, right of the E.
    ctx.textAlign = "left";
    ctx.font = "bold 60px 'Inter', system-ui, sans-serif";
    ctx.shadowColor = "rgba(0,0,0,0.7)";
    ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 2;
    ctx.fillText(label, ex + er + 24, ey - 4);
    ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0;
    // "Enter game" caption below the name.
    ctx.fillStyle = "rgba(255,255,255,0.62)";
    ctx.font = "500 28px 'Inter', system-ui, sans-serif";
    ctx.fillText("Enter game", ex + er + 24, ey + 50);
  };
  // Draw the frame once immediately (placeholder).
  drawFrame(null);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  // Kick off the thumbnail load; redraw + flag texture dirty when it lands.
  const url = MODE_THUMBS[modeId];
  if (url) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => { drawFrame(img); tex.needsUpdate = true; };
    img.onerror = () => { console.warn("[lobby] thumb failed", url); };
    img.src = url;
  }
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false });
  const sprite = new THREE.Sprite(mat);
  // Portrait aspect ratio matching the canvas (W:H = 512:720).
  sprite.scale.set(1, 1.4, 1);
  sprite.renderOrder = 1000;
  return sprite;
}

/** Minecraft-style nametag floating above a player head — dark rounded
 *  background, single line of white text. Always camera-billboarded +
 *  always-on-top. Re-created from scratch whenever the name changes. */
function makeNicknameSprite(name: string): THREE.Sprite {
  const W = 512, H = 96;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  // Background pill.
  ctx.fillStyle = "rgba(0,0,0,0.62)";
  roundedRect(ctx, 8, 8, W - 16, H - 16, 24);
  ctx.fill();
  // Name text.
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 52px 'Inter', 'Minecraft', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0,0,0,0.85)";
  ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 2;
  ctx.fillText(name || "Player", W / 2, H / 2);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(1.4, 0.26, 1);  // 4:1-ish aspect
  sprite.renderOrder = 1001;
  return sprite;
}
function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
