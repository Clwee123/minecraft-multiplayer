/**
 * ArmEditor — dedicated full-screen editor for the first-person arm.
 *
 * Activated by `?devarm=1` in the URL. When active we DO NOT boot the game —
 * we replace the entire scene with this editor so it's a real editing
 * environment with proper lighting, an orbit camera, 3D gizmo handles, and
 * a properly-laid-out inspector panel — like a tiny Unity scene tool.
 *
 * What it lets you do:
 *   • Pick any item from the catalogue and adjust its held position +
 *     rotation per item. Drag in 3D via a gizmo OR fine-tune via sliders.
 *   • Edit the arm's default offset / shoulder forward / swing arc / twist.
 *   • Animate the arm by previewing each pose (Rest / Mining loop / Swing /
 *     Eat / Bow draw) and tweak that pose's tunables (arc mul, decay, etc.).
 *   • Adjust walk-bob amplitude/frequency/sway.
 *   • Save persistently to localStorage (the same keys the game reads from).
 *   • Export the whole config as JSON for source control.
 *
 * Architecture:
 *   - Self-contained THREE.WebGLRenderer + Scene + PerspectiveCamera.
 *   - OrbitControls so you can fly around the arm.
 *   - TransformControls (gizmo) attached to whichever editable transform is
 *     "selected" — the arm group itself, the shoulder bone, or the held
 *     item mesh. Drag updates the underlying ARM_OFFSET / ITEM_HELD_OVERRIDES
 *     in real time so the sliders stay in sync.
 *   - The arm's existing buildFirstPersonArm() is reused as-is — the editor
 *     just provides a viewing context for it.
 *   - DOM panel on the right with tabbed inspector. CSS scoped to #armEditor
 *     so it can't leak into the game UI.
 */
import * as THREE from "three";
// @ts-ignore — three's example utilities lack their own .d.ts in some setups
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// @ts-ignore
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import {
  preloadPlayerModel,
  buildFirstPersonArm,
  ARM_DEFAULTS,
  ANIM_DEFAULTS,
  ITEM_HELD_OVERRIDES,
  saveItemHeldOverrides,
  saveAnimOverrides,
  setAnimOverride,
  getAnimOverrides,
  type FirstPersonArm,
} from "./PlayerModel";
import { preloadAtlas, BLOCKS, ITEMS, getItemName, getItemTile } from "./Textures";
import { blockIconCache, shouldRenderAsBlock } from "./BlockIconCache";

type PoseId = "rest" | "mining" | "swing" | "eat" | "bow" | "walk" | "run";
type GizmoTarget = "arm" | "item";
type GizmoMode = "translate" | "rotate";

export class ArmEditor {
  private container: HTMLDivElement;
  private viewport: HTMLDivElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  /** Secondary camera that renders the arm from the *real* first-person
   *  viewpoint — placed where the game's main camera would be (0,0,0
   *  looking down -Z). Drawn as a small inset viewport in the corner of
   *  the editor so you can see how your tweaks look in-game without
   *  leaving the editor. */
  private fpPreviewCam: THREE.PerspectiveCamera;
  private fpPreviewFrameEl!: HTMLDivElement;
  private orbit: any;          // OrbitControls
  private gizmo: any;          // TransformControls

  private fpArm: FirstPersonArm | null = null;
  private armParent: THREE.Group;     // wraps fpArm.group so we can move it
  private floorMesh: THREE.Mesh;

  private currentItemId = 64;          // diamond sword — starter "interesting" item
  private currentPose: PoseId = "rest";
  private gizmoTarget: GizmoTarget = "item";
  private gizmoMode: GizmoMode = "translate";
  private poseTime = 0;
  private playing = true;             // animations loop while playing
  private bowChargeTest = 0;          // 0..1 cycle for bow draw preview

  // DOM refs we re-render
  private inspectorEl!: HTMLDivElement;
  private itemPickerEl!: HTMLDivElement;
  private statusEl!: HTMLDivElement;

  private lastFrameTime = performance.now();
  private rafId = 0;
  private disposed = false;

  // ── Unity-style fly camera ──
  /** True while the right mouse button is held — engages WASD fly mode
   *  (and disables OrbitControls so it can't compete). */
  private flyMode = false;
  /** Pixel deltas accumulated since the last frame while in fly mode.
   *  Drives camera yaw/pitch in update(). */
  private flyMouseDx = 0;
  private flyMouseDy = 0;
  /** Pressed keys (lowercased single chars) — separate from the gizmo
   *  W/E hotkeys so we can use WASD+QE in fly mode without toggling the
   *  gizmo. */
  private flyKeys = new Set<string>();
  /** Current flight speed multiplier (mouse-wheel adjusts while flying). */
  private flySpeed = 4;

  // ── Undo stack ──
  /** A history of editable-value snapshots; Ctrl+Z pops the last entry
   *  and reapplies it. We only snapshot before a gizmo drag, a slider
   *  change, an item swap, or a reset — fine-grained enough for "I
   *  didn't mean to do that". */
  private undoStack: Array<() => void> = [];

  constructor() {
    // ── DOM scaffold ──
    this.container = document.createElement("div");
    this.container.id = "armEditor";
    this.container.innerHTML = `<style>
      #armEditor {
        position: fixed; inset: 0; z-index: 9999;
        display: grid;
        grid-template-columns: 1fr 420px;
        background: #14161c;
        font-family: 'Inter', system-ui, sans-serif;
        color: #e8ebf0;
      }
      #armEditor .ae-viewport {
        position: relative;
        background: #1d1f26;
        overflow: hidden;
      }
      #armEditor .ae-toolbar {
        position: absolute; top: 12px; left: 12px; right: 12px;
        display: flex; gap: 8px; align-items: center;
        z-index: 2; pointer-events: none;
      }
      #armEditor .ae-toolbar > * { pointer-events: auto; }
      #armEditor .ae-toolbar .grp {
        display: flex; gap: 1px;
        background: rgba(0,0,0,0.55); padding: 1px;
        border-radius: 6px; backdrop-filter: blur(6px);
      }
      #armEditor button.ae-btn {
        background: #2b2e38; color: #e8ebf0; border: 1px solid #3a3d48;
        padding: 6px 10px; border-radius: 4px; font-size: 12px;
        cursor: pointer; font-family: inherit;
      }
      #armEditor button.ae-btn:hover { background: #353945; }
      #armEditor button.ae-btn.active {
        background: #4d7ef0; border-color: #6a93f3; color: white;
      }
      #armEditor .ae-status {
        position: absolute; bottom: 10px; left: 12px;
        font-size: 11px; color: #8e93a0; z-index: 2;
        font-family: 'JetBrains Mono', 'Courier New', monospace;
      }
      #armEditor .ae-inspector {
        background: #1a1c22;
        border-left: 1px solid #2c2f38;
        display: flex; flex-direction: column;
        overflow: hidden;
      }
      #armEditor .ae-tabs {
        display: flex; background: #14161c;
        border-bottom: 1px solid #2c2f38;
      }
      #armEditor .ae-tab {
        flex: 1; padding: 10px 4px; text-align: center;
        font-size: 11px; cursor: pointer; color: #8e93a0;
        border-bottom: 2px solid transparent;
        text-transform: uppercase; letter-spacing: 0.5px;
        user-select: none;
      }
      #armEditor .ae-tab.active { color: #e8ebf0; border-bottom-color: #4d7ef0; background: #1a1c22; }
      #armEditor .ae-tab:hover { color: #c4c8d2; }
      #armEditor .ae-pane {
        flex: 1; overflow-y: auto;
        padding: 14px 16px 22px;
      }
      #armEditor .ae-section-title {
        font-size: 10px; text-transform: uppercase; letter-spacing: 1px;
        color: #6e7280; margin: 14px 0 8px 0;
        padding-bottom: 4px; border-bottom: 1px solid #2c2f38;
      }
      #armEditor .ae-section-title:first-child { margin-top: 0; }
      #armEditor .ae-row {
        display: grid; grid-template-columns: 80px 1fr 56px;
        gap: 8px; align-items: center; margin-bottom: 6px;
      }
      #armEditor .ae-row label {
        font-size: 11px; color: #b0b4be;
        font-family: 'JetBrains Mono', monospace;
      }
      #armEditor .ae-row input[type=range] {
        width: 100%; accent-color: #4d7ef0;
      }
      #armEditor .ae-row input[type=number] {
        width: 100%; background: #2b2e38; border: 1px solid #3a3d48;
        color: #e8ebf0; padding: 3px 6px; font-size: 11px;
        font-family: 'JetBrains Mono', monospace; border-radius: 3px;
      }
      #armEditor .ae-actions {
        display: flex; gap: 6px; flex-wrap: wrap;
        margin-top: 14px;
      }
      #armEditor .ae-actions button {
        flex: 1 1 calc(50% - 3px);
        background: #2b2e38; color: #e8ebf0; border: 1px solid #3a3d48;
        padding: 8px 6px; font-size: 11px; cursor: pointer;
        border-radius: 4px; font-family: inherit;
      }
      #armEditor .ae-actions button.primary {
        background: #4d7ef0; border-color: #6a93f3; color: white;
      }
      #armEditor .ae-actions button:hover { filter: brightness(1.15); }
      #armEditor .ae-item-grid {
        display: grid; grid-template-columns: repeat(6, 1fr);
        gap: 4px; margin-top: 8px;
      }
      #armEditor .ae-item-tile {
        position: relative; aspect-ratio: 1;
        background: #2b2e38; border: 1px solid #3a3d48;
        cursor: pointer; image-rendering: pixelated;
        background-size: 80%; background-repeat: no-repeat; background-position: center;
        border-radius: 3px;
      }
      #armEditor .ae-item-tile.selected { border-color: #4d7ef0; box-shadow: 0 0 0 1px #4d7ef0; }
      #armEditor .ae-item-tile:hover { border-color: #6a93f3; }
      #armEditor .ae-item-tile::after {
        content: attr(data-id);
        position: absolute; bottom: 1px; right: 3px;
        font-size: 8px; color: #6e7280;
        text-shadow: 1px 1px 0 black;
      }
      #armEditor .ae-current-item {
        background: #232630; padding: 8px 10px; border-radius: 4px;
        font-size: 12px; margin-bottom: 10px;
        display: flex; align-items: center; gap: 10px;
      }
      #armEditor .ae-current-item .swatch {
        width: 28px; height: 28px; background: #14161c;
        image-rendering: pixelated; background-size: 80%; background-repeat: no-repeat;
        background-position: center;
      }
      #armEditor h1 {
        font-size: 13px; margin: 0; padding: 12px 16px;
        background: #14161c; border-bottom: 1px solid #2c2f38;
        color: #e8ebf0; font-weight: 600; letter-spacing: 0.5px;
      }
      #armEditor h1 .pill {
        background: #4d7ef0; color: white; padding: 2px 6px;
        border-radius: 3px; font-size: 9px; margin-left: 8px;
        text-transform: uppercase; letter-spacing: 0.5px;
      }
      #armEditor a.exit {
        float: right; color: #8e93a0; text-decoration: none; font-size: 11px;
      }
    </style>`;

    // Left: 3D viewport
    this.viewport = document.createElement("div");
    this.viewport.className = "ae-viewport";
    this.container.appendChild(this.viewport);

    // Right: inspector panel
    const inspector = document.createElement("div");
    inspector.className = "ae-inspector";
    inspector.innerHTML = `
      <h1>Arm Editor <span class="pill">?devarm=1</span>
        <a href="?" class="exit">exit ✕</a>
      </h1>
      <div class="ae-tabs">
        <div class="ae-tab active" data-tab="held">Held Item</div>
        <div class="ae-tab" data-tab="arm">Arm</div>
        <div class="ae-tab" data-tab="anim">Animation</div>
        <div class="ae-tab" data-tab="bob">Bob</div>
      </div>
      <div class="ae-pane" id="aeInspector"></div>
    `;
    this.container.appendChild(inspector);
    document.body.appendChild(this.container);

    this.inspectorEl = inspector.querySelector("#aeInspector") as HTMLDivElement;

    // Status overlay (bottom-left of viewport)
    this.statusEl = document.createElement("div");
    this.statusEl.className = "ae-status";
    this.viewport.appendChild(this.statusEl);

    // Viewport toolbar
    this.buildToolbar();

    // ── THREE renderer + scene ──
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(this.viewport.clientWidth, this.viewport.clientHeight);
    this.renderer.setClearColor(0x1d1f26);
    this.viewport.appendChild(this.renderer.domElement);
    // Mouse listeners on the canvas (fly mode, wheel-speed). These must
    // run AFTER renderer creation since they need its domElement.
    this.installPostRendererInputs();

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1d1f26);
    // Subtle grid floor so users have spatial reference when orbiting.
    const grid = new THREE.GridHelper(4, 16, 0x2c2f38, 0x222530);
    grid.position.y = -0.8;
    this.scene.add(grid);
    // Soft floor disc.
    this.floorMesh = new THREE.Mesh(
      new THREE.CircleGeometry(2, 32).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0x14161c, roughness: 1 }),
    );
    this.floorMesh.position.y = -0.801;
    this.scene.add(this.floorMesh);

    this.camera = new THREE.PerspectiveCamera(50, 1, 0.01, 50);
    this.camera.position.set(0.9, 0.4, 0.9);
    this.camera.lookAt(0.2, -0.1, 0);
    this.scene.add(this.camera);

    // Second camera for the FP preview inset — same FOV (70°) the game's
    // main camera uses, parked at world origin looking down -Z. The FP arm
    // was originally built in camera-local space relative to a 0,0,0 cam,
    // so this matches exactly what the player would see.
    this.fpPreviewCam = new THREE.PerspectiveCamera(70, 16 / 9, 0.05, 100);
    this.fpPreviewCam.position.set(0, 0, 0);
    this.fpPreviewCam.lookAt(0, 0, -1);
    this.scene.add(this.fpPreviewCam);

    // DOM frame around the FP inset — 16:9 ratio, top-left corner of the
    // viewport. The actual pixels are drawn by the WebGL renderer with
    // scissor + viewport in render(); this DIV is just the border + label.
    this.fpPreviewFrameEl = document.createElement("div");
    this.fpPreviewFrameEl.className = "ae-fp-frame";
    this.fpPreviewFrameEl.innerHTML = `<div class="ae-fp-label">FIRST-PERSON PREVIEW · 16:9</div>`;
    this.fpPreviewFrameEl.style.cssText = `
      position: absolute; left: 14px; top: 60px;
      width: 320px; aspect-ratio: 16 / 9;
      border: 2px solid #4d7ef0; box-shadow: 0 6px 24px rgba(0,0,0,0.45);
      pointer-events: none; z-index: 3; border-radius: 4px;
      background: rgba(0,0,0,0.0);
    `;
    const lbl = this.fpPreviewFrameEl.querySelector(".ae-fp-label") as HTMLDivElement;
    lbl.style.cssText = `
      position: absolute; top: -22px; left: 0;
      font-size: 10px; letter-spacing: 1px; color: #4d7ef0;
      font-family: 'JetBrains Mono', 'Courier New', monospace;
    `;
    this.viewport.appendChild(this.fpPreviewFrameEl);

    // Lights — three-point so the rig reads clearly from any angle.
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 1.0); key.position.set(2, 3, 2); this.scene.add(key);
    const fill = new THREE.DirectionalLight(0xb0d4ff, 0.5); fill.position.set(-2, 1, 1); this.scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffe6b0, 0.35); rim.position.set(0, 1, -3); this.scene.add(rim);

    // ── Unity-style camera controls ──
    // We DO use OrbitControls for the "Alt + LMB = orbit" + scroll-wheel
    // zoom + middle-mouse pan, but it's only enabled while Alt is held
    // (or when explicitly invoked). The dominant nav is "hold RMB, then
    // WASD/QE to fly through the scene" — matches Unity's Scene view.
    this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
    this.orbit.enableDamping = true;
    this.orbit.dampingFactor = 0.12;
    this.orbit.minDistance = 0.05;
    this.orbit.maxDistance = 30;
    this.orbit.target.set(0, -0.1, 0);
    // Match Unity's binds: middle-mouse pans, Alt+LMB orbits, scroll zooms.
    this.orbit.mouseButtons = {
      LEFT:   THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.PAN,
      RIGHT:  -1 as any,   // disable RMB on orbit (we use it for fly mode)
    };
    // OrbitControls' default LMB-rotate fights with the gizmo's LMB-drag.
    // We require Alt to engage the rotate path — without Alt, LMB is free
    // for gizmo dragging.
    this.installOrbitAltGate();

    this.gizmo = new TransformControls(this.camera, this.renderer.domElement);
    this.gizmo.size = 0.6;
    this.scene.add(this.gizmo);
    // Disable orbit while dragging the gizmo so they don't fight. We also
    // SNAPSHOT the affected transform on drag-start so Ctrl+Z can undo it.
    this.gizmo.addEventListener("dragging-changed", (e: any) => {
      this.orbit.enabled = !e.value;
      if (e.value) this.pushUndoSnapshot();
    });
    this.gizmo.addEventListener("change", () => this.onGizmoMove());

    // Arm parent — we attach the FP arm group here so the gizmo can act on
    // it cleanly without competing with the arm's own internal transforms.
    this.armParent = new THREE.Group();
    this.scene.add(this.armParent);

    // Resize handling.
    window.addEventListener("resize", this.onResize);
    new ResizeObserver(this.onResize).observe(this.viewport);

    // ── Async boot: load atlas + player GLB, then build arm ──
    (async () => {
      await preloadAtlas();
      await preloadPlayerModel();
      const fpArm = buildFirstPersonArm();
      if (!fpArm) {
        this.statusEl.textContent = "Failed to build FP arm — player.glb missing?";
        return;
      }
      this.fpArm = fpArm;
      // The FP arm normally renders on a special layer (FP_LAYER=1). Move
      // it back to layer 0 here so our standalone scene's camera sees it.
      fpArm.group.traverse((o: any) => o.layers.set(0));
      // The arm's default world transform is in camera-local space (offset
      // baked for a 0,0,0 camera looking down -Z). Plopping it into the
      // editor scene gives the user a clear view from the orbit camera —
      // adjust position so the hand sits near origin for nicer orbit.
      this.armParent.add(fpArm.group);
      fpArm.setHeldItem(this.currentItemId);
      this.attachGizmoToCurrentTarget();
      this.renderInspector();
      this.updateStatus();
    })();

    // Animation loop.
    this.loop();
  }

  /** Re-attach the gizmo to whichever transform the user is currently
   *  editing (the whole arm group OR the held item). Translation/rotation
   *  is toggled separately via the mode buttons. */
  private attachGizmoToCurrentTarget() {
    if (!this.fpArm) return;
    let target: THREE.Object3D | null = null;
    if (this.gizmoTarget === "arm") {
      // Find the cloned root inside the FP arm group.
      target = this.fpArm.group.children[0] ?? null;
    } else if (this.gizmoTarget === "item") {
      target = (this.fpArm as any).group.getObjectByName("heldItem") || this.findHeldMesh();
    }
    if (target) {
      this.gizmo.attach(target);
      this.gizmo.setMode(this.gizmoMode);
      this.gizmo.visible = true;
    } else {
      this.gizmo.detach();
      this.gizmo.visible = false;
    }
  }

  /** Walk the arm rig and find the held-item mesh (it's a child of the
   *  hand bone we attached in PlayerModel.setHeldItem). */
  private findHeldMesh(): THREE.Object3D | null {
    if (!this.fpArm) return null;
    let found: THREE.Object3D | null = null;
    this.fpArm.group.traverse((o: any) => {
      if (found) return;
      // The held mesh has frustumCulled=false and renderOrder=1001 in
      // buildHeldPlane/buildHeldBlock. Cheapest identifying signal:
      // any mesh whose name is empty AND whose renderOrder >= 1000.
      if ((o as THREE.Mesh).isMesh && (o as any).renderOrder >= 1000) {
        found = o;
      }
    });
    return found;
  }

  /** Called whenever the gizmo drags the active target. Pull the resulting
   *  transform back out into the source-of-truth maps so sliders + saves
   *  match. */
  private onGizmoMove() {
    if (!this.fpArm) return;
    if (this.gizmoTarget === "item") {
      const mesh = this.findHeldMesh();
      if (!mesh) return;
      const o = ITEM_HELD_OVERRIDES[this.currentItemId] || {};
      o.x = +mesh.position.x.toFixed(4);
      o.y = +mesh.position.y.toFixed(4);
      o.z = +mesh.position.z.toFixed(4);
      o.rotX = +mesh.rotation.x.toFixed(4);
      o.rotY = +mesh.rotation.y.toFixed(4);
      o.rotZ = +mesh.rotation.z.toFixed(4);
      ITEM_HELD_OVERRIDES[this.currentItemId] = o;
    }
    // Refresh slider numbers without re-rendering the whole inspector.
    this.refreshSliderValues();
  }

  private buildToolbar() {
    const tb = document.createElement("div");
    tb.className = "ae-toolbar";

    // Pose picker.
    const poseGroup = document.createElement("div");
    poseGroup.className = "grp";
    const poses: { id: PoseId; label: string }[] = [
      { id: "rest",   label: "Rest"   },
      { id: "swing",  label: "Swing"  },
      { id: "mining", label: "Mining" },
      { id: "eat",    label: "Eat"    },
      { id: "bow",    label: "Bow"    },
      { id: "walk",   label: "Walk"   },
      { id: "run",    label: "Run"    },
    ];
    for (const p of poses) {
      const btn = document.createElement("button");
      btn.className = "ae-btn" + (this.currentPose === p.id ? " active" : "");
      btn.dataset.pose = p.id;
      btn.textContent = p.label;
      btn.onclick = () => this.setPose(p.id);
      poseGroup.appendChild(btn);
    }
    tb.appendChild(poseGroup);

    // Gizmo target picker.
    const targetGroup = document.createElement("div");
    targetGroup.className = "grp";
    for (const t of [{ id: "item" as GizmoTarget, label: "▣ Item" }, { id: "arm" as GizmoTarget, label: "✋ Arm" }]) {
      const btn = document.createElement("button");
      btn.className = "ae-btn" + (this.gizmoTarget === t.id ? " active" : "");
      btn.dataset.target = t.id;
      btn.textContent = t.label;
      btn.onclick = () => { this.gizmoTarget = t.id; this.attachGizmoToCurrentTarget(); this.refreshToolbarActive(); };
      targetGroup.appendChild(btn);
    }
    tb.appendChild(targetGroup);

    // Gizmo mode picker.
    const modeGroup = document.createElement("div");
    modeGroup.className = "grp";
    for (const m of [{ id: "translate" as GizmoMode, label: "Move (W)" }, { id: "rotate" as GizmoMode, label: "Rotate (E)" }]) {
      const btn = document.createElement("button");
      btn.className = "ae-btn" + (this.gizmoMode === m.id ? " active" : "");
      btn.dataset.mode = m.id;
      btn.textContent = m.label;
      btn.onclick = () => { this.gizmoMode = m.id; this.gizmo.setMode(m.id); this.refreshToolbarActive(); };
      modeGroup.appendChild(btn);
    }
    tb.appendChild(modeGroup);

    // Play/pause.
    const playBtn = document.createElement("button");
    playBtn.className = "ae-btn";
    playBtn.textContent = this.playing ? "⏸ Pause" : "▶ Play";
    playBtn.onclick = () => { this.playing = !this.playing; playBtn.textContent = this.playing ? "⏸ Pause" : "▶ Play"; };
    tb.appendChild(playBtn);

    this.viewport.appendChild(tb);

    // Keyboard:
    //   While fly-mode is OFF (no RMB held):
    //     W → translate gizmo mode, E → rotate gizmo mode (Unity-like)
    //     Ctrl+Z → undo last edit
    //   While fly-mode is ON (RMB held):
    //     WASDQE → fly the camera (no gizmo mode swap)
    //     Shift = faster fly speed
    window.addEventListener("keydown", (e) => {
      if (this.disposed) return;
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      const k = e.key.toLowerCase();
      // Ctrl+Z undo — works regardless of fly mode.
      if ((e.ctrlKey || e.metaKey) && k === "z") {
        e.preventDefault();
        this.undo();
        return;
      }
      if (this.flyMode) {
        // Forward to fly-key set — block default scroll-on-space behaviour.
        this.flyKeys.add(k);
        if (k === " " || k === "tab") e.preventDefault();
        return;
      }
      // Gizmo mode hotkeys — only outside fly mode so WASD doesn't fight.
      if (k === "w") { this.gizmoMode = "translate"; this.gizmo.setMode("translate"); this.refreshToolbarActive(); }
      if (k === "e") { this.gizmoMode = "rotate";    this.gizmo.setMode("rotate");    this.refreshToolbarActive(); }
    });
    window.addEventListener("keyup", (e) => {
      this.flyKeys.delete(e.key.toLowerCase());
    });

    // The renderer-domElement-dependent mouse listeners (RMB fly,
    // wheel-speed) attach in installPostRendererInputs() — called AFTER
    // the renderer is constructed in the main constructor.
  }

  /** Mouse listeners that need `this.renderer.domElement`. buildToolbar
   *  runs BEFORE the renderer is created (so its parts can position
   *  themselves on the viewport DIV), so these were crashing with
   *  "Cannot read properties of undefined (reading 'domElement')" when
   *  attached there. Called from the constructor immediately after
   *  `this.renderer` is built. */
  private installPostRendererInputs() {
    const dom = this.renderer.domElement;
    // RMB engages fly mode (cursor hidden); released turns it off.
    dom.addEventListener("contextmenu", (e) => e.preventDefault());
    dom.addEventListener("mousedown", (e) => {
      if (e.button === 2) {
        this.flyMode = true;
        this.orbit.enabled = false;
        dom.style.cursor = "none";
      }
    });
    window.addEventListener("mouseup", (e) => {
      if (e.button === 2 && this.flyMode) {
        this.flyMode = false;
        this.flyKeys.clear();
        this.orbit.enabled = true;
        dom.style.cursor = "";
      }
    });
    window.addEventListener("mousemove", (e) => {
      if (!this.flyMode) return;
      this.flyMouseDx += e.movementX || 0;
      this.flyMouseDy += e.movementY || 0;
    });
    // Mouse wheel in fly mode → adjust flight speed. Outside fly mode
    // OrbitControls handles the wheel for dolly-zoom.
    dom.addEventListener("wheel", (e) => {
      if (!this.flyMode) return;
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.18 : 1 / 1.18;
      this.flySpeed = Math.max(0.2, Math.min(40, this.flySpeed * factor));
    }, { passive: false });
  }

  /** OrbitControls' default LMB-rotate would steal clicks meant for the
   *  TransformControls gizmo. We gate the rotate path behind Alt: while
   *  Alt is held we let OrbitControls process LMB; otherwise it ignores
   *  it. Matches Unity's Alt+LMB = orbit binding. */
  private installOrbitAltGate() {
    const dom = this.renderer.domElement;
    const swap = (alt: boolean) => {
      this.orbit.mouseButtons = {
        LEFT:   alt ? THREE.MOUSE.ROTATE : (-1 as any),
        MIDDLE: THREE.MOUSE.PAN,
        RIGHT:  -1 as any,
      };
    };
    swap(false);
    window.addEventListener("keydown", (e) => { if (e.altKey) swap(true);  });
    window.addEventListener("keyup",   (e) => { if (!e.altKey) swap(false); });
    dom.addEventListener("mouseleave",  () => swap(false));
  }

  /** Apply one frame of Unity-style fly motion to the camera. WASD moves
   *  along camera-local axes; QE moves along world up. Mouse delta
   *  rotates around camera position.
   *
   *  CRITICAL: OrbitControls.update() — which we still call every frame
   *  for damping — ends with camera.lookAt(orbit.target), which would
   *  snap the rotation we just applied back to facing the (now-stale)
   *  orbit target. The fix is to keep orbit.target SYNCED to a point
   *  directly along the new camera-forward direction each frame, so
   *  orbit.update() becomes effectively a no-op while flying. Without
   *  this, mouse-look would visibly jitter back to the last orbit
   *  orientation one frame after each move. */
  private updateFlyCamera(dt: number) {
    // Apply mouse rotation around camera position.
    if (this.flyMouseDx !== 0 || this.flyMouseDy !== 0) {
      const sensitivity = 0.0035;
      const yaw = -this.flyMouseDx * sensitivity;
      const pitch = -this.flyMouseDy * sensitivity;
      const e = new THREE.Euler().setFromQuaternion(this.camera.quaternion, "YXZ");
      e.y += yaw;
      e.x = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, e.x + pitch));
      e.z = 0;
      this.camera.quaternion.setFromEuler(e);
      this.flyMouseDx = 0;
      this.flyMouseDy = 0;
    }
    // Translation via WASDQE. Shift = boost.
    const k = this.flyKeys;
    let fx = 0, fy = 0, fz = 0;
    if (k.has("w")) fz -= 1;
    if (k.has("s")) fz += 1;
    if (k.has("a")) fx -= 1;
    if (k.has("d")) fx += 1;
    if (k.has("e")) fy += 1;
    if (k.has("q")) fy -= 1;
    if (fx !== 0 || fy !== 0 || fz !== 0) {
      const len = Math.hypot(fx, fy, fz);
      fx /= len; fy /= len; fz /= len;
      const speed = (k.has("shift") ? 2.5 : 1) * this.flySpeed * dt;
      const forward = new THREE.Vector3();
      this.camera.getWorldDirection(forward);
      const right = new THREE.Vector3();
      right.crossVectors(forward, this.camera.up).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const move = new THREE.Vector3()
        .addScaledVector(right, fx * speed)
        .addScaledVector(forward, -fz * speed)
        .addScaledVector(up, fy * speed);
      this.camera.position.add(move);
    }
    // ── Sync orbit.target with new camera orientation ──
    // Place the orbit target at a fixed distance ahead of the camera
    // along its current forward direction. Then OrbitControls.update()'s
    // final `camera.lookAt(target)` becomes identity (looks where we're
    // already looking). Without this, fly rotation snapped back.
    const fwd = new THREE.Vector3();
    this.camera.getWorldDirection(fwd);
    this.orbit.target.copy(this.camera.position).addScaledVector(fwd, 4);
  }

  /** Snapshot the current state of whatever the gizmo is editing into the
   *  undo stack. Called before each gizmo drag + each slider edit + each
   *  item swap. */
  private pushUndoSnapshot() {
    if (this.gizmoTarget === "item") {
      const id = this.currentItemId;
      const o = { ...(ITEM_HELD_OVERRIDES[id] || {}) };
      this.undoStack.push(() => {
        ITEM_HELD_OVERRIDES[id] = o;
        this.fpArm?.refreshHeldTransform?.();
        this.refreshSliderValues();
        this.flashStatus("Undid item-transform edit.");
      });
    } else if (this.gizmoTarget === "arm") {
      const t = (window as any).__armTuner?.get?.();
      if (!t) return;
      const snap = { ...t };
      this.undoStack.push(() => {
        for (const k of Object.keys(snap)) (window as any).__armTuner?.set?.(k, snap[k]);
        this.refreshSliderValues();
        this.flashStatus("Undid arm-transform edit.");
      });
    }
    // Cap at 50 entries so the stack can't grow unbounded.
    if (this.undoStack.length > 50) this.undoStack.shift();
  }

  /** Pop + apply the latest undo action. No-op if stack is empty. */
  private undo() {
    const fn = this.undoStack.pop();
    if (!fn) { this.flashStatus("Nothing to undo."); return; }
    try { fn(); } catch (e) { console.warn("[ArmEditor] undo failed", e); }
  }

  private refreshToolbarActive() {
    this.viewport.querySelectorAll<HTMLButtonElement>(".ae-toolbar .ae-btn").forEach(b => {
      if (b.dataset.pose)   b.classList.toggle("active", b.dataset.pose === this.currentPose);
      if (b.dataset.target) b.classList.toggle("active", b.dataset.target === this.gizmoTarget);
      if (b.dataset.mode)   b.classList.toggle("active", b.dataset.mode === this.gizmoMode);
    });
  }

  private setPose(p: PoseId) {
    this.currentPose = p;
    this.poseTime = 0;
    this.bowChargeTest = 0;
    this.refreshToolbarActive();
  }

  // ── Inspector tabs ──
  private currentTab: "held" | "arm" | "anim" | "bob" = "held";
  private renderInspector() {
    const tabs = this.container.querySelectorAll<HTMLDivElement>(".ae-tab");
    tabs.forEach(t => {
      t.classList.toggle("active", t.dataset.tab === this.currentTab);
      t.onclick = () => { this.currentTab = t.dataset.tab as any; this.renderInspector(); };
    });
    if (this.currentTab === "held")      this.renderHeldTab();
    else if (this.currentTab === "arm")  this.renderArmTab();
    else if (this.currentTab === "anim") this.renderAnimTab();
    else                                 this.renderBobTab();
  }

  private renderHeldTab() {
    const id = this.currentItemId;
    const name = getItemName(id);
    const tileBg = this.getTileBg(id);
    const o = ITEM_HELD_OVERRIDES[id] || {};
    const valX = o.x ?? ARM_DEFAULTS.itemX;
    const valY = o.y ?? ARM_DEFAULTS.itemY;
    const valZ = o.z ?? ARM_DEFAULTS.itemZ;
    const valRX = o.rotX ?? ARM_DEFAULTS.itemRotX;
    const valRY = o.rotY ?? ARM_DEFAULTS.itemRotY;
    const valRZ = o.rotZ ?? ARM_DEFAULTS.itemRotZ;
    let html = `
      <div class="ae-section-title">Selected item</div>
      <div class="ae-current-item">
        <div class="swatch" style="${tileBg}"></div>
        <div><div style="font-weight:600">${escapeHtml(name)}</div><div style="font-size:10px;color:#8e93a0">ID ${id}</div></div>
      </div>
      <div class="ae-section-title">Position offset</div>
      ${this.sliderRow("x", valX, -1, 1, 0.005, "held.x")}
      ${this.sliderRow("y", valY, -1, 1, 0.005, "held.y")}
      ${this.sliderRow("z", valZ, -1, 1, 0.005, "held.z")}
      <div class="ae-section-title">Rotation (radians)</div>
      ${this.sliderRow("rotX", valRX, -Math.PI, Math.PI, 0.01, "held.rotX")}
      ${this.sliderRow("rotY", valRY, -Math.PI, Math.PI, 0.01, "held.rotY")}
      ${this.sliderRow("rotZ", valRZ, -Math.PI, Math.PI, 0.01, "held.rotZ")}
      <div class="ae-actions">
        <button class="primary" data-action="save-held">💾 Save persistently</button>
        <button data-action="reset-held">↺ Reset this item</button>
        <button data-action="export">⬇ Export JSON</button>
      </div>
      <div class="ae-section-title">Pick item to edit</div>
      <div class="ae-item-grid" id="aeItemGrid"></div>
    `;
    this.inspectorEl.innerHTML = html;
    this.wireSliderHandlers();
    this.wireActionButtons();
    this.itemPickerEl = this.inspectorEl.querySelector("#aeItemGrid") as HTMLDivElement;
    this.renderItemGrid();
  }

  private renderArmTab() {
    let html = `
      <div class="ae-section-title">Arm offset (camera-local)</div>
      ${this.sliderRow("offsetX", this.tunerGet("offsetX"), -1.5, 1.5, 0.005, "arm.offsetX")}
      ${this.sliderRow("offsetY", this.tunerGet("offsetY"), -1.5, 0.5, 0.005, "arm.offsetY")}
      ${this.sliderRow("offsetZ", this.tunerGet("offsetZ"), -2.0, 0.5, 0.005, "arm.offsetZ")}
      <div class="ae-section-title">Shoulder pose</div>
      ${this.sliderRow("shoulderFwd", this.tunerGet("shoulderForward"), -3.5, 3.5, 0.01, "arm.shoulderForward")}
      ${this.sliderRow("swingArc",    this.tunerGet("swingArc"),         0, 4, 0.01,    "arm.swingArc")}
      ${this.sliderRow("twist",       this.tunerGet("twist"),         -1.5, 1.5, 0.01,  "arm.twist")}
      <div class="ae-actions">
        <button data-action="reset-arm">↺ Reset arm to defaults</button>
        <button data-action="export">⬇ Export JSON</button>
      </div>
      <div style="margin-top:14px;font-size:11px;color:#6e7280;line-height:1.5;">
        Arm defaults are tuned live and applied to <code>buildFirstPersonArm()</code> on next reload.
        Use the 3D <strong>Arm</strong> gizmo target in the toolbar to drag the rig in space.
      </div>
    `;
    this.inspectorEl.innerHTML = html;
    this.wireSliderHandlers();
    this.wireActionButtons();
  }

  private renderAnimTab() {
    const a = getAnimOverrides();
    let html = `
      <div class="ae-section-title">Mining loop (LMB held)</div>
      ${this.sliderRow("arcMul",   a.miningArcMul,   0, 2, 0.01, "anim.miningArcMul")}
      ${this.sliderRow("twistMul", a.miningTwistMul, 0, 2, 0.01, "anim.miningTwistMul")}
      ${this.sliderRow("speed",    a.miningSpeed,    1, 30, 0.1, "anim.miningSpeed")}
      <div class="ae-section-title">One-shot swing</div>
      ${this.sliderRow("decay",    a.swingDecay,     1, 12, 0.1, "anim.swingDecay")}
      <div class="ae-section-title">Eating (hold RMB on food)</div>
      ${this.sliderRow("lift",     a.eatLift,        0, 2, 0.01, "anim.eatLift")}
      ${this.sliderRow("twist",    a.eatTwist,      -1, 1, 0.01, "anim.eatTwist")}
      ${this.sliderRow("shakeAmp", a.eatShakeAmp,    0, 0.4, 0.005, "anim.eatShakeAmp")}
      ${this.sliderRow("shakeFreq",a.eatShakeFreq,   0.005, 0.1, 0.001, "anim.eatShakeFreq")}
      <div class="ae-actions">
        <button class="primary" data-action="save-anim">💾 Save animations</button>
        <button data-action="reset-anim">↺ Reset to defaults</button>
        <button data-action="export">⬇ Export JSON</button>
      </div>
      <div style="margin-top:14px;font-size:11px;color:#6e7280;line-height:1.5;">
        Pick a pose from the toolbar (Mining / Swing / Eat / Bow) to see live changes.
      </div>
    `;
    this.inspectorEl.innerHTML = html;
    this.wireSliderHandlers();
    this.wireActionButtons();
  }

  private renderBobTab() {
    const a = getAnimOverrides();
    let html = `
      <div class="ae-section-title">Walking bob (the "feel" of W)</div>
      ${this.sliderRow("ampX",  a.bobAmpX,  0, 0.2,  0.001, "anim.bobAmpX")}
      ${this.sliderRow("ampY",  a.bobAmpY,  0, 0.2,  0.001, "anim.bobAmpY")}
      ${this.sliderRow("freq",  a.bobFreq,  0, 5,    0.05,  "anim.bobFreq")}
      ${this.sliderRow("sway",  a.swayMul,  0, 50,   0.5,   "anim.swayMul")}
      <div class="ae-actions">
        <button class="primary" data-action="save-anim">💾 Save bob</button>
        <button data-action="reset-bob">↺ Reset bob</button>
        <button data-action="export">⬇ Export JSON</button>
      </div>
      <div style="margin-top:14px;font-size:11px;color:#6e7280;line-height:1.5;">
        Bob preview ticks at a steady simulated walking speed of 4 m/s so
        you can dial in the amplitude/frequency without leaving the editor.
      </div>
    `;
    this.inspectorEl.innerHTML = html;
    this.wireSliderHandlers();
    this.wireActionButtons();
  }

  // ── Slider plumbing ──
  private sliderRow(label: string, value: number, min: number, max: number, step: number, key: string): string {
    return `
      <div class="ae-row">
        <label>${label}</label>
        <input type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-key="${key}" />
        <input type="number" min="${min}" max="${max}" step="${step}" value="${value.toFixed(step < 0.01 ? 4 : step < 0.1 ? 3 : 2)}" data-num="${key}" />
      </div>
    `;
  }
  private wireSliderHandlers() {
    const onChange = (key: string, raw: string) => {
      const v = parseFloat(raw);
      if (!Number.isFinite(v)) return;
      this.applyValueChange(key, v);
      this.refreshSliderValues();
    };
    // Snapshot for undo at slider DRAG-START (mousedown) and after a
    // number-input commit — granular enough that Ctrl+Z reverts the
    // whole drag, not each pixel of movement.
    this.inspectorEl.querySelectorAll<HTMLInputElement>("input[type=range]").forEach(r => {
      r.addEventListener("mousedown", () => this.pushUndoSnapshot());
      r.oninput = () => onChange(r.dataset.key!, r.value);
    });
    this.inspectorEl.querySelectorAll<HTMLInputElement>("input[type=number]").forEach(n => {
      n.addEventListener("focus", () => this.pushUndoSnapshot());
      n.onchange = () => onChange(n.dataset.num!, n.value);
    });
  }
  private refreshSliderValues() {
    this.inspectorEl.querySelectorAll<HTMLInputElement>("input[type=range]").forEach(r => {
      const v = this.readValueByKey(r.dataset.key!);
      if (v != null) r.value = String(v);
    });
    this.inspectorEl.querySelectorAll<HTMLInputElement>("input[type=number]").forEach(n => {
      const v = this.readValueByKey(n.dataset.num!);
      if (v != null) n.value = v.toFixed(3);
    });
  }
  private readValueByKey(key: string): number | null {
    if (key.startsWith("held.")) {
      const o = ITEM_HELD_OVERRIDES[this.currentItemId] || {};
      const f = key.slice(5) as keyof typeof o;
      const fallback = ARM_DEFAULTS[("item" + f.charAt(0).toUpperCase() + f.slice(1)) as keyof typeof ARM_DEFAULTS] ?? 0;
      return (o[f] as number) ?? fallback;
    }
    if (key.startsWith("arm.")) return this.tunerGet(key.slice(4));
    if (key.startsWith("anim.")) {
      const a = getAnimOverrides() as any;
      return a[key.slice(5)];
    }
    return null;
  }
  private applyValueChange(key: string, v: number) {
    if (key.startsWith("held.")) {
      const f = key.slice(5);
      const o = ITEM_HELD_OVERRIDES[this.currentItemId] || {};
      (o as any)[f] = v;
      ITEM_HELD_OVERRIDES[this.currentItemId] = o;
      this.fpArm?.refreshHeldTransform?.();
    } else if (key.startsWith("arm.")) {
      const f = key.slice(4);
      (window as any).__armTuner?.set?.(f, v);
    } else if (key.startsWith("anim.")) {
      setAnimOverride(key.slice(5), v);
    }
  }
  private tunerGet(field: string): number {
    const t = (window as any).__armTuner;
    if (!t?.get) return (ARM_DEFAULTS as any)[field] ?? 0;
    const o = t.get();
    return o[field] ?? (ARM_DEFAULTS as any)[field] ?? 0;
  }

  // ── Item picker grid ──
  private renderItemGrid() {
    if (!this.itemPickerEl) return;
    const ids = this.collectCatalogueIds();
    this.itemPickerEl.innerHTML = "";
    for (const id of ids) {
      const tile = document.createElement("div");
      tile.className = "ae-item-tile" + (id === this.currentItemId ? " selected" : "");
      tile.dataset.id = String(id);
      tile.style.cssText += this.getTileBg(id);
      tile.title = getItemName(id);
      tile.onclick = () => this.pickItem(id);
      this.itemPickerEl.appendChild(tile);
    }
  }
  private collectCatalogueIds(): number[] {
    // Items first (most-tuned), then placeable blocks. Skip air (0).
    const ids = new Set<number>();
    for (const k of Object.keys(ITEMS)) { const id = +k; if (id > 0) ids.add(id); }
    for (const k of Object.keys(BLOCKS)) { const id = +k; if (id > 0) ids.add(id); }
    return Array.from(ids).sort((a, b) => a - b);
  }
  private getTileBg(id: number): string {
    // 3D iso-cube icons only for opaque cubic blocks — cross-shape flowers /
    // saplings / sprites + iconTile-overridden blocks fall through to the
    // flat atlas-tile path with the CORRECT tile (the bug here was
    // `ITEMS[id]?.tile ?? 0` which gave 0 = grass-top for every non-cube
    // block, e.g. crossShape flowers all showed as grass-block icons).
    if (shouldRenderAsBlock(id)) {
      const url = blockIconCache.get(id);
      return `background-image:url('${url}');`;
    }
    const tile = getItemTile(id);  // proper lookup (handles iconTile + faces[0] + items)
    const col = tile % 16, row = Math.floor(tile / 16);
    return `background-image:url(/terrain_atlas.png?v=5);background-size:${512 * 1.2}px ${512 * 1.2}px;background-position:-${col * 32 * 1.2}px -${row * 32 * 1.2}px;`;
  }
  private pickItem(id: number) {
    this.currentItemId = id;
    this.fpArm?.setHeldItem(id);
    // Make sure the gizmo follows the new held mesh.
    if (this.gizmoTarget === "item") {
      // Wait one frame for the mesh to actually appear in the rig.
      requestAnimationFrame(() => this.attachGizmoToCurrentTarget());
    }
    this.renderHeldTab();
  }

  // ── Action buttons (save / reset / export) ──
  private wireActionButtons() {
    this.inspectorEl.querySelectorAll<HTMLButtonElement>("button[data-action]").forEach(b => {
      b.onclick = () => this.runAction(b.dataset.action!);
    });
  }
  private runAction(action: string) {
    switch (action) {
      case "save-held":
        saveItemHeldOverrides();
        this.flashStatus("Saved held-item overrides to localStorage.");
        break;
      case "reset-held":
        delete ITEM_HELD_OVERRIDES[this.currentItemId];
        this.fpArm?.refreshHeldTransform?.();
        saveItemHeldOverrides();
        this.renderHeldTab();
        this.flashStatus(`Reset item #${this.currentItemId}.`);
        break;
      case "reset-arm":
        for (const k of Object.keys(ARM_DEFAULTS)) {
          (window as any).__armTuner?.set?.(k, (ARM_DEFAULTS as any)[k]);
        }
        this.renderArmTab();
        this.flashStatus("Reset arm to defaults.");
        break;
      case "save-anim":
        saveAnimOverrides();
        this.flashStatus("Saved animation values to localStorage.");
        break;
      case "reset-anim":
        for (const k of Object.keys(ANIM_DEFAULTS)) setAnimOverride(k, (ANIM_DEFAULTS as any)[k]);
        saveAnimOverrides();
        this.renderAnimTab();
        this.flashStatus("Reset animation to defaults.");
        break;
      case "reset-bob":
        for (const k of ["bobAmpX", "bobAmpY", "bobFreq", "swayMul"]) {
          setAnimOverride(k, (ANIM_DEFAULTS as any)[k]);
        }
        saveAnimOverrides();
        this.renderBobTab();
        this.flashStatus("Reset bob to defaults.");
        break;
      case "export":
        this.exportJSON();
        break;
    }
  }

  private exportJSON() {
    const data = {
      armDefaults: ARM_DEFAULTS,
      armLive: (window as any).__armTuner?.get?.() ?? null,
      itemOverrides: ITEM_HELD_OVERRIDES,
      animOverrides: getAnimOverrides(),
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `arm-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    this.flashStatus("Exported JSON.");
  }

  private flashStatus(msg: string) {
    this.statusEl.textContent = msg;
    setTimeout(() => this.updateStatus(), 1800);
  }
  private updateStatus() {
    const target = this.gizmoTarget === "item" ? `held #${this.currentItemId}` : "arm";
    this.statusEl.textContent = `pose=${this.currentPose}  ·  gizmo=${this.gizmoMode} on ${target}  ·  W/E gizmo mode  ·  RMB+WASDQE fly  ·  Alt+LMB orbit  ·  Ctrl+Z undo`;
  }

  // ── Animation loop ──
  private loop = () => {
    if (this.disposed) return;
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastFrameTime) / 1000);
    this.lastFrameTime = now;
    this.orbit.update();
    if (this.flyMode) this.updateFlyCamera(dt);

    if (this.fpArm && this.playing) {
      // Drive the pose. The arm exposes triggerSwing / triggerMineSwing /
      // setEating / setBowDraw — we just call them with phase-appropriate
      // values for whichever pose is selected.
      this.poseTime += dt;
      // Reset every frame: each pose either sets itself or asks the arm
      // to be at rest. setEating(0) + setBowDraw(0) clear those slots.
      this.fpArm.setEating(0);
      this.fpArm.setBowDraw(0);
      // Per-pose movement context. "Walking" used to be ALWAYS on (a fake
      // walkSpeed=4 was passed every frame regardless of the selected pose),
      // which is why the bob never stopped. We now drive walkSpeed from the
      // current pose: 0 for static poses (rest/swing/eat/bow/mining) and
      // a real value for the dedicated walk/run buttons.
      let walkSpeed = 0;
      if (this.currentPose === "mining") {
        this.fpArm.triggerMineSwing();
      } else if (this.currentPose === "swing") {
        // Re-trigger on a cycle so the swing keeps looping.
        if ((this.poseTime % 1.2) < 0.05) this.fpArm.triggerSwing(1);
      } else if (this.currentPose === "eat") {
        // Ramp from 0 → 1 over 1.6s then snap to 0 and loop.
        const eatCycle = 1.6;
        const p = (this.poseTime % (eatCycle + 0.4)) / eatCycle;
        this.fpArm.setEating(Math.min(1, p));
      } else if (this.currentPose === "bow") {
        // Loop draw + release.
        const cycle = 2.0;
        const t = (this.poseTime % cycle) / cycle;
        // 0..0.5 → ramp up; 0.5..0.7 → release; 0.7..1 → rest.
        const draw = t < 0.5 ? (t / 0.5) : t < 0.7 ? (1 - (t - 0.5) / 0.2) : 0;
        this.fpArm.setBowDraw(draw);
        this.bowChargeTest = draw;
      } else if (this.currentPose === "walk") {
        walkSpeed = 4.317;  // vanilla MC walking speed (m/s)
      } else if (this.currentPose === "run") {
        walkSpeed = 5.612;  // vanilla MC sprinting speed (m/s)
      }
      // "rest" falls through with walkSpeed = 0 → no bob, fully idle.
      this.fpArm.update(dt, { walkSpeed, yawDelta: 0, onGround: true });
    } else if (this.fpArm) {
      // Paused — still tick at zero so the arm settles into a clean pose.
      this.fpArm.update(0, { walkSpeed: 0, yawDelta: 0, onGround: true });
    }

    // Main viewport — full canvas.
    this.renderer.setScissorTest(false);
    this.renderer.setViewport(0, 0, this.viewport.clientWidth, this.viewport.clientHeight);
    this.renderer.render(this.scene, this.camera);

    // FP-preview inset. Use the DOM frame's bounding rect to position the
    // WebGL viewport so they stay aligned even when the page resizes.
    const r = this.fpPreviewFrameEl.getBoundingClientRect();
    const vp = this.viewport.getBoundingClientRect();
    const w = r.width, h = r.height;
    // Three's viewport origin is bottom-left in canvas coords, not top-left.
    const x = r.left - vp.left;
    const y = vp.height - (r.top - vp.top) - h;
    this.renderer.setScissorTest(true);
    this.renderer.setScissor(x, y, w, h);
    this.renderer.setViewport(x, y, w, h);
    // Clear depth + colour inside the inset so the inset doesn't inherit
    // the orbit-camera pixels behind it.
    this.renderer.setClearColor(0x6ab1ff, 1);  // sky blue, matches in-game
    this.renderer.clear(true, true, false);
    this.renderer.render(this.scene, this.fpPreviewCam);
    // Restore main viewport state for next frame.
    this.renderer.setScissorTest(false);
    this.renderer.setClearColor(0x1d1f26, 1);

    this.rafId = requestAnimationFrame(this.loop);
  };

  private onResize = () => {
    const w = this.viewport.clientWidth || window.innerWidth - 420;
    const h = this.viewport.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  };

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.rafId);
    this.gizmo.detach();
    this.gizmo.dispose?.();
    this.orbit.dispose?.();
    this.renderer.dispose();
    this.container.remove();
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

/** Boot the editor if `?devarm=1` is set. Returns true if active so the
 *  caller can skip game boot. */
export function maybeBootArmEditor(): boolean {
  const url = new URLSearchParams(location.search);
  if (url.get("devarm") !== "1") return false;
  // Hide the rest of the page so the editor owns the screen.
  const root = document.getElementById("mainMenu");
  if (root) root.style.display = "none";
  document.body.style.overflow = "hidden";
  new ArmEditor();
  return true;
}
