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
import { spawnPlayer, preloadPlayerModel, applySkinToCharacter } from "./PlayerModel";
import { preloadAtlas } from "./Textures";
import { MODES, ModeId } from "./Modes";
import { Legion } from "./Legion";

interface PortalData {
  id: ModeId;
  label: string;
  pos: THREE.Vector3;     // ground centre (where the player stands to enter)
  facing: number;         // yaw the portal faces (radians)
  group: THREE.Group;     // mesh group for animated effects
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
  private playerRig: { root: THREE.Object3D; mixer: any; walkAction: any; idleAction: any } | null = null;
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
    // Re-render the HUD whenever Legion auth state changes.
    Legion.onUserChanged?.(() => this.refreshHud());

    // ── Async boot: atlas first (World needs it), then world + portals,
    //   then player GLB. Render loop starts immediately so the user sees
    //   the sky while assets load.
    (async () => {
      try {
        await preloadAtlas();
        if (this.disposed) return;
        this.world = new World(this.scene, 12345, { infinite: false });
        this.buildLobby();
        await preloadPlayerModel();
        if (this.disposed) return;
        const rig = spawnPlayer();
        if (!rig) return;
        this.playerRig = rig;
        // Try to apply the logged-in Legion user's skin, falls back to default.
        const av = Legion.getAvatar?.();
        if (av?.skinId) applySkinToCharacter(rig.root, av.skinId);
        this.scene.add(rig.root);
        rig.root.position.copy(this.pos);
        // Adjust idle action to play continuously.
        if (rig.idleAction) { rig.idleAction.play(); rig.idleAction.weight = 1; }
        if (rig.walkAction) { rig.walkAction.play(); rig.walkAction.weight = 0; }
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
    // Spawn at a clear tile a few blocks SOUTH of centre so we don't drop
    // the player INSIDE the central beacon (which would AABB-block every
    // direction → "can't move" bug the user reported).
    this.pos.set(cx + 0.5, y + 1.01, cz + 4.5);
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
    // Floating sprite label above the portal. Bigger + brighter than the
    // first pass so it's actually readable from across the plaza.
    const labelSprite = makeLabelSprite(m.label, this.shimmerColorFor(m.id));
    labelSprite.position.set(tx + 0.5, gy + 6.5, tz + 0.5);
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
    // Portal "trigger" position = one block in front of the inner pane
    // (toward spawn). That's where the player stands to enter.
    const triggerX = tx - Math.cos(facing) * 1.2 + 0.5;
    const triggerZ = tz - Math.sin(facing) * 1.2 + 0.5;
    const group = new THREE.Group();
    group.add(labelSprite);
    group.add(shimmer);
    this.portals.push({
      id: m.id,
      label: m.label,
      pos: new THREE.Vector3(triggerX, gy, triggerZ),
      facing,
      group,
    });
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
    if (e.code === "KeyE") this.tryEnterPortal();
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
      // Guest — show login CTA.
      this.hudEl.innerHTML = `
        <div style="opacity:0.85;">👤 Playing as guest</div>
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
      // Landed. Snap to top of block.
      this.pos.y = Math.ceil(newY);
      this.vel.y = 0;
      this.onGround = true;
    } else if (this.vel.y > 0 && this.collides(this.pos.x, newY, this.pos.z, r, h)) {
      this.vel.y = 0;
    } else {
      this.pos.y = newY;
      this.onGround = false;
    }
    // Standing-on check (for jump): the world should be solid one block below feet.
    if (!this.onGround) {
      if (w.isSolid(Math.floor(this.pos.x), Math.floor(this.pos.y - 0.05), Math.floor(this.pos.z))) {
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
      // Rotate input into world space using camera yaw.
      const cosY = Math.cos(this.camYaw), sinY = Math.sin(this.camYaw);
      const wx = ix * cosY - iz * sinY;
      const wz = ix * sinY + iz * cosY;
      const speed = this.keys["ShiftLeft"] ? 7.0 : 4.5;
      this.vel.x = wx * speed;
      this.vel.z = wz * speed;
      this.yaw = Math.atan2(wx, wz);  // face direction of motion
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

    // ── Player rig ──
    if (this.playerRig) {
      const rig = this.playerRig;
      rig.root.position.copy(this.pos);
      rig.root.position.y -= 0.0; // anchor at feet
      // Smooth yaw rotation toward target.
      const cur = rig.root.rotation.y;
      let target = this.yaw;
      // Wrap delta into [-π, π].
      let d = target - cur;
      while (d > Math.PI)  d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      rig.root.rotation.y = cur + d * Math.min(1, dt * 12);
      rig.mixer?.update?.(dt);
      // Crossfade idle/walk by speed.
      if (rig.walkAction && rig.idleAction) {
        const m = this.walkSpeed > 0.5 ? 1 : 0;
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
    let nearest: PortalData | null = null;
    let nearestD = 2.5;
    for (const p of this.portals) {
      const dx = this.pos.x - p.pos.x;
      const dz = this.pos.z - p.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < nearestD) { nearest = p; nearestD = d; }
      // Animate the shimmer mesh on every portal regardless of proximity.
      p.group.children.forEach(child => {
        const ud = (child as any).userData;
        if (ud?.shimmer) {
          ud.t += dt;
          const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          mat.opacity = 0.25 + Math.sin(ud.t * 2) * 0.12;
        }
      });
    }
    if (nearest !== this.nearestPortal) {
      this.nearestPortal = nearest;
      if (nearest) {
        this.promptEl.style.borderColor = "#ffd23f";
        this.promptEl.textContent = `${nearest.label}  ·  Press E to enter`;
        this.promptEl.style.display = "block";
      } else {
        this.promptEl.style.display = "none";
      }
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

/** Build a canvas-text Sprite for portal labels — billboarded so it
 *  always faces the camera. We use a roomy 512×128 canvas + bold high-
 *  contrast text + a coloured underline strip so each portal's label
 *  stands out at distance and reads as a clickable signpost. */
function makeLabelSprite(text: string, accentColor: number): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 512; canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  // Dark rounded backdrop with accent bottom-border.
  const r = 18;
  ctx.fillStyle = "rgba(10,12,16,0.86)";
  roundedRect(ctx, 6, 6, canvas.width - 12, canvas.height - 12 - 12, r);
  ctx.fill();
  // Accent strip at the bottom — the mode's portal colour, so blue for
  // creative / green for survival / red for squidgames etc.
  const accentHex = "#" + accentColor.toString(16).padStart(6, "0");
  ctx.fillStyle = accentHex;
  roundedRect(ctx, 6, canvas.height - 18, canvas.width - 12, 12, 4);
  ctx.fill();
  // Text.
  ctx.font = "bold 56px 'Minecraft', 'Inter', sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0,0,0,0.95)";
  ctx.shadowOffsetX = 3; ctx.shadowOffsetY = 3;
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 - 6);
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  // Sized so the label is large + readable from across the plaza.
  sprite.scale.set(4.5, 1.125, 1);
  sprite.renderOrder = 1000;  // always-on-top so distant labels aren't fogged out
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
