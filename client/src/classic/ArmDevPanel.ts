/**
 * Arm-animation dev mode.
 *
 * Floating panel with sliders for the first-person arm's rest pose +
 * swing parameters. Lets you live-tune the look and feel, snapshot keyframes
 * with timestamps, then export a JSON timeline so the tuned values can be
 * baked back into PlayerModel.ts (or replayed at runtime).
 *
 * Activate by appending `?devarm=1` to the URL or via the global
 * `window.__armDev.show()` from the JS console. The panel hides until shown.
 *
 * Why a tuner instead of just hard-coding the values? The arm pose is highly
 * sensitive — a few hundredths of a radian on the shoulder makes the
 * difference between "looks vanilla" and "looks broken". Iterating with a
 * slider in front of a live preview is the only practical way to land it.
 */
import { ARM_DEFAULTS } from "./PlayerModel";

type ArmState = {
  offsetX: number; offsetY: number; offsetZ: number;
  shoulderForward: number; swingArc: number; twist: number;
};

interface Keyframe {
  t: number;           // seconds from recording start
  pose: ArmState;
}

const SLIDER_DEF: Array<{ key: keyof ArmState; min: number; max: number; step: number; label: string }> = [
  { key: "offsetX",         min: -1.5, max: 1.5,  step: 0.005, label: "Offset X (right)" },
  { key: "offsetY",         min: -1.5, max: 0.5,  step: 0.005, label: "Offset Y (down)"  },
  { key: "offsetZ",         min: -2.0, max: 0.5,  step: 0.005, label: "Offset Z (fwd)"   },
  { key: "shoulderForward", min: -3.5, max: 3.5,  step: 0.01,  label: "Shoulder Forward" },
  { key: "swingArc",        min:  0,   max: 4.0,  step: 0.01,  label: "Swing Arc"        },
  { key: "twist",           min: -1.5, max: 1.5,  step: 0.01,  label: "Z-Twist"          },
];

export class ArmDevPanel {
  private root: HTMLElement;
  private current: ArmState;
  private keyframes: Keyframe[] = [];
  private recordStart = 0;
  private recording = false;

  constructor() {
    this.current = { ...ARM_DEFAULTS };
    this.root = this.buildDom();
    document.body.appendChild(this.root);
    // Show by URL param.
    const url = new URLSearchParams(location.search);
    if (url.get("devarm") === "1") this.show();
    (window as any).__armDev = this;
  }

  show() { this.root.style.display = "block"; this.render(); }
  hide() { this.root.style.display = "none"; }
  toggle() { this.root.style.display === "none" ? this.show() : this.hide(); }

  private apply() {
    const t = (window as any).__armTuner;
    if (!t) return;
    for (const k of Object.keys(this.current) as Array<keyof ArmState>) {
      t.set(k, this.current[k]);
    }
  }

  private render() {
    const slidersHtml = SLIDER_DEF.map(s => `
      <label class="arm-row">
        <span class="arm-label">${s.label}</span>
        <input type="range" data-key="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${this.current[s.key]}" />
        <input type="number"  data-num="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${this.current[s.key]}" />
      </label>
    `).join("");
    const kfHtml = this.keyframes.map((k, i) =>
      `<div class="arm-kf"><span>${i}.</span> <span>t=${k.t.toFixed(2)}s</span>
        <button data-kf="${i}" data-act="apply">load</button>
        <button data-kf="${i}" data-act="del">×</button></div>`).join("");
    this.root.innerHTML = `
      <div class="arm-hdr">
        <b>FP Arm Tuner</b>
        <button id="armClose" title="Hide">─</button>
      </div>
      <div class="arm-body">
        ${slidersHtml}
        <div class="arm-ops">
          <button id="armReset">Reset to default</button>
          <button id="armRecord">${this.recording ? "■ Stop recording" : "● Start recording"}</button>
          <button id="armKey">+ Keyframe</button>
          <button id="armExport">⬇ Export JSON</button>
        </div>
        <div class="arm-kf-list">
          <div class="arm-kf-title">Keyframes (${this.keyframes.length})</div>
          ${kfHtml || "<i>none yet — record + add keyframes to build a timeline.</i>"}
        </div>
      </div>
    `;
    this.root.querySelector("#armClose")?.addEventListener("click", () => this.hide());
    this.root.querySelector("#armReset")?.addEventListener("click", () => {
      this.current = { ...ARM_DEFAULTS };
      this.apply(); this.render();
    });
    this.root.querySelector("#armRecord")?.addEventListener("click", () => {
      this.recording = !this.recording;
      if (this.recording) { this.recordStart = performance.now(); this.keyframes = []; }
      this.render();
    });
    this.root.querySelector("#armKey")?.addEventListener("click", () => {
      const t = this.recording ? (performance.now() - this.recordStart) / 1000 : (this.keyframes.length * 0.25);
      this.keyframes.push({ t, pose: { ...this.current } });
      this.render();
    });
    this.root.querySelector("#armExport")?.addEventListener("click", () => this.export());
    this.root.querySelectorAll<HTMLInputElement>("input[type=range], input[type=number]").forEach(el => {
      el.addEventListener("input", () => {
        const k = (el.dataset.key || el.dataset.num) as keyof ArmState;
        const v = parseFloat(el.value);
        if (Number.isFinite(v)) {
          this.current[k] = v;
          // Sync the paired input
          const otherSel = el.dataset.key ? `input[data-num="${k}"]` : `input[data-key="${k}"]`;
          const other = this.root.querySelector<HTMLInputElement>(otherSel);
          if (other) other.value = String(v);
          this.apply();
        }
      });
    });
    this.root.querySelectorAll<HTMLButtonElement>("button[data-kf]").forEach(btn => {
      const idx = parseInt(btn.dataset.kf!, 10);
      const act = btn.dataset.act;
      btn.addEventListener("click", () => {
        if (act === "del") this.keyframes.splice(idx, 1);
        if (act === "apply") this.current = { ...this.keyframes[idx].pose };
        this.apply(); this.render();
      });
    });
  }

  private export() {
    const payload = {
      version: 1,
      defaults: ARM_DEFAULTS,
      current: this.current,
      keyframes: this.keyframes,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `arm-anim-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private buildDom(): HTMLElement {
    const el = document.createElement("div");
    el.id = "armDevPanel";
    el.style.cssText = `
      position: fixed; right: 12px; top: 12px;
      width: 320px; max-height: 90vh; overflow-y: auto;
      background: rgba(20, 20, 26, 0.95);
      border: 2px solid #ffd23f;
      color: #fff;
      font-family: 'Minecraft', 'Courier New', monospace;
      font-size: 11px;
      padding: 8px;
      display: none;
      z-index: 5000;
      box-shadow: 0 4px 24px rgba(0,0,0,0.6);
    `;
    // Local styles (scoped via parent #armDevPanel selectors)
    const styles = document.createElement("style");
    styles.textContent = `
      #armDevPanel .arm-hdr { display:flex; justify-content:space-between; padding-bottom:6px; border-bottom:1px solid #444; }
      #armDevPanel .arm-hdr b { color: #ffd23f; letter-spacing: 1px; }
      #armDevPanel .arm-hdr button { background: rgba(0,0,0,0.5); color: #fff; border: 1px solid #555; cursor: pointer; padding: 0 8px; }
      #armDevPanel .arm-body { padding-top: 8px; }
      #armDevPanel .arm-row { display: grid; grid-template-columns: 110px 1fr 60px; align-items: center; gap: 6px; margin-bottom: 6px; }
      #armDevPanel .arm-label { color: #ccc; }
      #armDevPanel input[type=range] { width: 100%; }
      #armDevPanel input[type=number] { width: 100%; background: rgba(0,0,0,0.4); color: #fff; border: 1px solid #555; font-family: inherit; font-size: 11px; padding: 2px 4px; }
      #armDevPanel .arm-ops { display: flex; flex-wrap: wrap; gap: 4px; margin: 8px 0; }
      #armDevPanel .arm-ops button { background: rgba(255,210,63,0.18); border: 1px solid #ffd23f; color: #ffd23f; padding: 4px 8px; cursor: pointer; font-family: inherit; font-size: 11px; }
      #armDevPanel .arm-ops button:hover { background: rgba(255,210,63,0.35); }
      #armDevPanel .arm-kf-list { background: rgba(0,0,0,0.35); padding: 6px; border: 1px solid #444; max-height: 200px; overflow-y: auto; }
      #armDevPanel .arm-kf-title { color: #ffd23f; margin-bottom: 4px; }
      #armDevPanel .arm-kf { display: flex; gap: 6px; align-items: center; padding: 2px 0; }
      #armDevPanel .arm-kf button { background: transparent; border: 1px solid #666; color: #ccc; cursor: pointer; font-family: inherit; font-size: 10px; padding: 1px 4px; }
    `;
    document.head.appendChild(styles);
    return el;
  }
}
