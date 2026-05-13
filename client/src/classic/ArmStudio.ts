/**
 * Arm Studio — dedicated tuner for per-item held-mesh transforms.
 *
 * Activate via `?armstudio=1` URL param. Opens a panel listing every block
 * + item in the game; clicking one equips it on the FP arm and exposes
 * X/Y/Z + rotX/rotY/rotZ sliders. "Set as default" persists the override
 * to localStorage (so the next session ships those values) and "Export"
 * dumps the full overrides map as JSON the caller can paste into
 * PlayerModel.ts as new defaults.
 *
 * Why a separate panel: ArmDevPanel handles the shared arm parameters
 * (offset / shoulder / swing). This panel does ONE thing — pick an item,
 * tune ITS specific offset, save it. The two panels can be open at once.
 */
import { BLOCKS, ITEMS, getItemName, getItemTile } from "./Textures";
import { ITEM_HELD_OVERRIDES, HeldOverride, saveItemHeldOverrides, FirstPersonArm } from "./PlayerModel";
import { blockIconCache, shouldRenderAsBlock } from "./BlockIconCache";

const SLIDER_DEFS: Array<{ key: keyof HeldOverride; min: number; max: number; step: number; label: string }> = [
  { key: "x",    min: -2.0, max: 2.0, step: 0.005, label: "Pos X" },
  { key: "y",    min: -2.0, max: 2.0, step: 0.005, label: "Pos Y" },
  { key: "z",    min: -2.0, max: 2.0, step: 0.005, label: "Pos Z" },
  { key: "rotX", min: -3.5, max: 3.5, step: 0.01,  label: "Rot X" },
  { key: "rotY", min: -3.5, max: 3.5, step: 0.01,  label: "Rot Y" },
  { key: "rotZ", min: -3.5, max: 3.5, step: 0.01,  label: "Rot Z" },
];

export class ArmStudio {
  private root: HTMLElement;
  private currentId: number = 0;
  /** Callback wired in main.ts — switches the inventory's held slot to
   *  `id` (count = 999 in creative) so the FP arm picks it up live. */
  onEquip?: (id: number) => void;
  /** Set by main.ts after construction so we can refreshHeldTransform()
   *  on the live arm when a slider changes. */
  fpArm: FirstPersonArm | null = null;

  constructor() {
    this.root = this.buildDom();
    document.body.appendChild(this.root);
    if (new URLSearchParams(location.search).get("armstudio") === "1") this.show();
    (window as any).__armStudio = this;
  }

  show() { this.root.style.display = "block"; this.renderItemList(); }
  hide() { this.root.style.display = "none"; }
  toggle() { this.root.style.display === "none" ? this.show() : this.hide(); }

  /** Iterate every block + item and emit clickable thumbnails so the user
   *  can pick the one they want to tune. */
  private renderItemList() {
    const list = this.root.querySelector<HTMLElement>(".as-items");
    if (!list) return;
    list.innerHTML = "";
    const ids = [
      ...Object.keys(BLOCKS).map(n => +n),
      ...Object.keys(ITEMS).map(n => +n),
    ].sort((a, b) => a - b);
    for (const id of ids) {
      if (id === 0) continue;
      const cell = document.createElement("div");
      cell.className = "as-item" + (id === this.currentId ? " active" : "");
      cell.title = `${getItemName(id)} (id ${id})`;
      let style = "";
      if (shouldRenderAsBlock(id)) {
        style = `background-image:url('${blockIconCache.get(id)}');background-size:contain;background-repeat:no-repeat;background-position:center;`;
      } else {
        const tile = getItemTile(id);
        const col = tile % 16, row = Math.floor(tile / 16);
        style = `background-image:url(/terrain_atlas.png?v=5);background-size:512px 512px;background-position:-${col * 32}px -${row * 32}px;`;
      }
      cell.innerHTML = `<div class="as-icon" style="${style}"></div><div class="as-id">${id}</div>`;
      cell.addEventListener("click", () => this.selectItem(id));
      list.appendChild(cell);
    }
  }

  /** Equip the chosen item on the live arm + populate sliders with current overrides. */
  selectItem(id: number) {
    this.currentId = id;
    this.onEquip?.(id);
    this.renderItemList();      // refresh active-cell highlight
    this.renderSliders();
    const nameEl = this.root.querySelector<HTMLElement>(".as-current-name");
    if (nameEl) nameEl.textContent = `${getItemName(id)} (id ${id})`;
  }

  private renderSliders() {
    const panel = this.root.querySelector<HTMLElement>(".as-sliders");
    if (!panel) return;
    const ov = ITEM_HELD_OVERRIDES[this.currentId] || {};
    panel.innerHTML = SLIDER_DEFS.map(s => {
      const v = ov[s.key] ?? "";
      return `
        <label class="as-row">
          <span class="as-lab">${s.label}</span>
          <input type="range" data-key="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${v === "" ? 0 : v}" />
          <input type="number" data-num="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${v === "" ? "" : v}" placeholder="(default)" />
        </label>
      `;
    }).join("");
    panel.querySelectorAll<HTMLInputElement>("input[type=range], input[type=number]").forEach(el => {
      el.addEventListener("input", () => {
        const k = (el.dataset.key || el.dataset.num) as keyof HeldOverride;
        const raw = el.value.trim();
        if (raw === "") {
          delete (ITEM_HELD_OVERRIDES[this.currentId] || {})[k];
        } else {
          const v = parseFloat(raw);
          if (!Number.isFinite(v)) return;
          ITEM_HELD_OVERRIDES[this.currentId] = { ...(ITEM_HELD_OVERRIDES[this.currentId] || {}), [k]: v };
          // Sync the paired input.
          const other = panel.querySelector<HTMLInputElement>(el.dataset.key ? `input[data-num="${k}"]` : `input[data-key="${k}"]`);
          if (other) other.value = String(v);
        }
        this.fpArm?.refreshHeldTransform();
      });
    });
  }

  private exportJson() {
    const blob = new Blob([JSON.stringify(ITEM_HELD_OVERRIDES, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `item-held-overrides-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private buildDom(): HTMLElement {
    const el = document.createElement("div");
    el.id = "armStudio";
    el.innerHTML = `
      <div class="as-hdr">
        <b>ARM STUDIO</b>
        <span>· per-item held transform</span>
        <button class="as-close" title="hide">─</button>
      </div>
      <div class="as-body">
        <div class="as-current"><span class="as-current-name">(pick an item below)</span></div>
        <div class="as-sliders"><i>Pick an item from the grid to start tuning.</i></div>
        <div class="as-ops">
          <button class="as-save">💾 Save persistently</button>
          <button class="as-export">⬇ Export JSON</button>
          <button class="as-reset">↶ Reset this item</button>
        </div>
        <div class="as-items-title">Items (${Object.keys(BLOCKS).length} blocks · ${Object.keys(ITEMS).length} items)</div>
        <div class="as-items"></div>
      </div>
    `;
    el.style.cssText = `
      position: fixed; left: 12px; top: 12px;
      width: 380px; max-height: 95vh; overflow-y: auto;
      background: rgba(20, 20, 26, 0.97);
      border: 2px solid #57e57c;
      color: #fff;
      font-family: 'Minecraft', 'Courier New', monospace;
      font-size: 11px;
      padding: 8px;
      display: none;
      z-index: 5001;
      box-shadow: 0 4px 24px rgba(0,0,0,0.7);
    `;
    const styles = document.createElement("style");
    styles.textContent = `
      #armStudio .as-hdr { display:flex; align-items:center; gap:6px; padding-bottom:6px; border-bottom:1px solid #444; }
      #armStudio .as-hdr b { color: #57e57c; letter-spacing: 1px; }
      #armStudio .as-hdr span { color: #888; font-size: 10px; }
      #armStudio .as-hdr .as-close { margin-left: auto; background: rgba(0,0,0,0.5); color: #fff; border: 1px solid #555; cursor: pointer; padding: 0 8px; }
      #armStudio .as-body { padding-top: 6px; }
      #armStudio .as-current { color: #ffd23f; font-weight: bold; margin-bottom: 6px; }
      #armStudio .as-sliders { background: rgba(0,0,0,0.35); padding: 6px; border: 1px solid #333; }
      #armStudio .as-row { display: grid; grid-template-columns: 50px 1fr 60px; align-items: center; gap: 4px; margin-bottom: 4px; }
      #armStudio .as-lab { color: #ccc; }
      #armStudio input[type=range] { width: 100%; }
      #armStudio input[type=number] { width: 100%; background: rgba(0,0,0,0.4); color: #fff; border: 1px solid #555; font-family: inherit; font-size: 10px; padding: 1px 3px; }
      #armStudio .as-ops { display: flex; gap: 4px; flex-wrap: wrap; margin: 8px 0; }
      #armStudio .as-ops button { background: rgba(87,229,124,0.18); border: 1px solid #57e57c; color: #57e57c; padding: 4px 8px; cursor: pointer; font-family: inherit; font-size: 11px; }
      #armStudio .as-ops button:hover { background: rgba(87,229,124,0.35); }
      #armStudio .as-items-title { color: #ffd23f; margin: 6px 0 4px; }
      #armStudio .as-items {
        display: grid; grid-template-columns: repeat(8, 1fr); gap: 2px;
        max-height: 40vh; overflow-y: auto;
        background: rgba(0,0,0,0.45); padding: 4px; border: 1px solid #333;
      }
      #armStudio .as-item {
        position: relative;
        width: 36px; height: 36px;
        background: #555; border: 1px solid #1a1a1a;
        cursor: pointer; image-rendering: pixelated;
      }
      #armStudio .as-item:hover { border-color: #57e57c; }
      #armStudio .as-item.active { border-color: #ffd23f; box-shadow: inset 0 0 0 1px #ffd23f; }
      #armStudio .as-item .as-icon { position: absolute; inset: 2px; image-rendering: pixelated; }
      #armStudio .as-item .as-id { position: absolute; right: 1px; bottom: 0; font-size: 8px; color: #fff; text-shadow: 1px 1px 0 #000; }
    `;
    document.head.appendChild(styles);

    // Wire ops buttons (use querySelector since DOM is now built).
    el.querySelector(".as-close")?.addEventListener("click", () => this.hide());
    el.querySelector(".as-save")?.addEventListener("click", () => { saveItemHeldOverrides(); this.flash(".as-save", "Saved!"); });
    el.querySelector(".as-export")?.addEventListener("click", () => this.exportJson());
    el.querySelector(".as-reset")?.addEventListener("click", () => {
      if (this.currentId) {
        delete ITEM_HELD_OVERRIDES[this.currentId];
        this.fpArm?.refreshHeldTransform();
        this.renderSliders();
      }
    });
    return el;
  }

  private flash(sel: string, text: string) {
    const b = this.root.querySelector<HTMLButtonElement>(sel);
    if (!b) return;
    const orig = b.textContent;
    b.textContent = text;
    setTimeout(() => { b.textContent = orig; }, 900);
  }
}
