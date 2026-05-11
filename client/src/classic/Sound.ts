/**
 * Procedural sound engine for the Minecraft client.
 *
 * No audio files — everything is synthesised on the fly with the Web Audio
 * API using a small set of primitives (filtered noise bursts + envelope-
 * shaped oscillators). Keeps the bundle small and lets us approximate every
 * MC-style SFX without shipping a sound pack.
 *
 * Browser autoplay rules: AudioContext starts suspended until the user
 * interacts with the page, so the first call to `ensure()` from a click /
 * keydown will resume it. `arm()` wires that handler once on init.
 */

import { BLOCKS } from "./Textures";

export type Surface = "grass" | "stone" | "wood" | "sand" | "gravel" | "glass" | "water" | "wool" | "leaves" | "metal";

class SoundEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  enabled = true;
  /** Master volume (0..1). */
  volume = 0.35;

  /** Lazily create the AudioContext. Browsers reject creation outside of a
   *  user gesture; this function is called from event handlers so it works. */
  private ensure(): boolean {
    if (!this.enabled) return false;
    if (this.ctx) {
      // Some browsers suspend the context if the tab loses focus.
      if (this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
      return true;
    }
    try {
      const Ctor = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext;
      if (!Ctor) return false;
      this.ctx = new Ctor();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.volume;
      this.master.connect(this.ctx.destination);
    } catch (e) {
      console.warn("[Sound] AudioContext init failed", e);
      this.enabled = false;
      return false;
    }
    return true;
  }

  /** Attach one-time listeners so the AudioContext gets created/resumed on
   *  the first user gesture. Safe to call early in boot. */
  arm() {
    const handler = () => {
      this.ensure();
      window.removeEventListener("click", handler);
      window.removeEventListener("keydown", handler);
      window.removeEventListener("touchstart", handler);
    };
    window.addEventListener("click", handler, { once: false });
    window.addEventListener("keydown", handler, { once: false });
    window.addEventListener("touchstart", handler, { once: false });
  }

  setVolume(v: number) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.master) this.master.gain.value = this.volume;
  }

  // ── Primitives ────────────────────────────────────────────────────────────
  private noiseBuffer(duration: number, color: "white" | "pink" = "white"): AudioBuffer {
    const ctx = this.ctx!;
    const len = Math.max(1, Math.ceil(duration * ctx.sampleRate));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    if (color === "white") {
      for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    } else {
      // Cheap pink-ish noise via averaging
      let last = 0;
      for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        last = (last * 0.7) + (w * 0.3);
        data[i] = last;
      }
    }
    return buf;
  }

  private envelope(gain: GainNode, peak: number, attack: number, release: number, when: number) {
    gain.gain.setValueAtTime(0, when);
    gain.gain.linearRampToValueAtTime(peak, when + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + attack + Math.max(0.02, release));
  }

  /** Play a filtered noise burst. */
  private playNoise(opts: {
    dur: number; peak: number;
    filterType?: BiquadFilterType; freq?: number; q?: number;
    attack?: number; release?: number;
    pitchEnd?: number; // if set, sweep the filter frequency exponentially
    delay?: number;
  }) {
    if (!this.ensure() || !this.ctx || !this.master) return;
    const now = this.ctx.currentTime + (opts.delay ?? 0);
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer(opts.dur);
    const filt = this.ctx.createBiquadFilter();
    filt.type = opts.filterType ?? "lowpass";
    filt.frequency.value = opts.freq ?? 800;
    if (opts.q) filt.Q.value = opts.q;
    if (opts.pitchEnd !== undefined) {
      filt.frequency.setValueAtTime(opts.freq ?? 800, now);
      filt.frequency.exponentialRampToValueAtTime(Math.max(40, opts.pitchEnd), now + opts.dur);
    }
    const gain = this.ctx.createGain();
    this.envelope(gain, opts.peak, opts.attack ?? 0.004, opts.release ?? opts.dur, now);
    src.connect(filt).connect(gain).connect(this.master);
    src.start(now);
    src.stop(now + opts.dur + 0.08);
  }

  /** Play a pitched oscillator with optional pitch sweep. */
  private playTone(opts: {
    freq: number; dur: number;
    type?: OscillatorType; peak?: number;
    attack?: number; release?: number;
    pitchEnd?: number;
    delay?: number;
  }) {
    if (!this.ensure() || !this.ctx || !this.master) return;
    const now = this.ctx.currentTime + (opts.delay ?? 0);
    const osc = this.ctx.createOscillator();
    osc.type = opts.type ?? "sine";
    osc.frequency.setValueAtTime(opts.freq, now);
    if (opts.pitchEnd !== undefined) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, opts.pitchEnd), now + opts.dur);
    }
    const gain = this.ctx.createGain();
    this.envelope(gain, opts.peak ?? 0.15, opts.attack ?? 0.004, opts.release ?? opts.dur, now);
    osc.connect(gain).connect(this.master);
    osc.start(now);
    osc.stop(now + opts.dur + 0.08);
  }

  // ── Catalogue ─────────────────────────────────────────────────────────────
  step(s: Surface) {
    // Tiny pitch jitter so back-to-back steps don't sound identical.
    const j = 0.85 + Math.random() * 0.3;
    switch (s) {
      case "grass": case "leaves": case "wool":
        this.playNoise({ dur: 0.08, freq: 650 * j, peak: 0.09 }); break;
      case "stone":
        this.playNoise({ dur: 0.07, freq: 1400 * j, peak: 0.10 }); break;
      case "wood":
        this.playNoise({ dur: 0.08, filterType: "bandpass", freq: 900 * j, q: 4, peak: 0.13 }); break;
      case "sand":
      case "gravel":
        this.playNoise({ dur: 0.10, freq: 480 * j, peak: 0.08, release: 0.10 }); break;
      case "water":
        this.playNoise({ dur: 0.18, freq: 320 * j, peak: 0.12, release: 0.18 }); break;
      case "glass":
        this.playNoise({ dur: 0.05, filterType: "highpass", freq: 2400 * j, peak: 0.08 });
        this.playTone({ freq: 1800 * j, dur: 0.05, peak: 0.05 }); break;
      case "metal":
        this.playTone({ freq: 1400 * j, dur: 0.06, type: "square", peak: 0.06 });
        this.playNoise({ dur: 0.05, filterType: "highpass", freq: 3000, peak: 0.05 }); break;
    }
  }

  breakBlock(s: Surface) {
    switch (s) {
      case "stone":
        // Three quick rocky crackles
        this.playNoise({ dur: 0.10, freq: 900, peak: 0.20 });
        this.playNoise({ dur: 0.10, freq: 700, peak: 0.18, delay: 0.04 });
        this.playNoise({ dur: 0.12, freq: 500, peak: 0.16, delay: 0.08 });
        break;
      case "wood":
        this.playNoise({ dur: 0.22, filterType: "bandpass", freq: 700, q: 2.5, peak: 0.22, release: 0.20 });
        this.playTone({ freq: 220, pitchEnd: 110, dur: 0.18, type: "triangle", peak: 0.10 });
        break;
      case "leaves":
      case "grass":
      case "wool":
        this.playNoise({ dur: 0.25, freq: 800, peak: 0.18, pitchEnd: 200, release: 0.25 });
        break;
      case "sand":
      case "gravel":
        this.playNoise({ dur: 0.30, freq: 500, peak: 0.20, release: 0.30 });
        break;
      case "glass":
        for (let i = 0; i < 5; i++) {
          this.playNoise({ dur: 0.05, filterType: "highpass", freq: 2500 + Math.random() * 2500, peak: 0.13, delay: i * 0.03 });
          this.playTone({ freq: 1400 + Math.random() * 1800, dur: 0.07, type: "sine", peak: 0.07, delay: i * 0.03 });
        }
        break;
      case "metal":
        this.playTone({ freq: 700, pitchEnd: 200, dur: 0.18, type: "sawtooth", peak: 0.15 });
        this.playNoise({ dur: 0.18, freq: 1200, peak: 0.12 });
        break;
      default:
        this.playNoise({ dur: 0.22, freq: 700, peak: 0.18, release: 0.22 });
    }
  }

  /** Place uses the same palette as break but quieter and shorter. */
  place(s: Surface) {
    switch (s) {
      case "stone":
        this.playNoise({ dur: 0.10, freq: 600, peak: 0.16 }); break;
      case "wood":
        this.playNoise({ dur: 0.12, filterType: "bandpass", freq: 800, q: 3, peak: 0.16, release: 0.10 }); break;
      case "glass":
        this.playTone({ freq: 1800, pitchEnd: 1400, dur: 0.10, type: "sine", peak: 0.10 });
        this.playNoise({ dur: 0.06, filterType: "highpass", freq: 2500, peak: 0.07 }); break;
      case "sand": case "gravel":
        this.playNoise({ dur: 0.18, freq: 400, peak: 0.14, release: 0.18 }); break;
      case "leaves": case "grass": case "wool":
        this.playNoise({ dur: 0.14, freq: 700, peak: 0.13, release: 0.14 }); break;
      default:
        this.playNoise({ dur: 0.12, freq: 600, peak: 0.14 });
    }
  }

  jump()           { this.playNoise({ dur: 0.08, freq: 350, peak: 0.06 }); }
  land(s: Surface) { this.playNoise({ dur: 0.18, freq: s === "stone" ? 900 : 400, peak: 0.20, release: 0.18 }); }
  hurt() {
    this.playTone({ freq: 220, pitchEnd: 90, dur: 0.30, type: "sawtooth", peak: 0.22, release: 0.30 });
    this.playNoise({ dur: 0.14, freq: 900, peak: 0.10 });
  }
  death() {
    this.playTone({ freq: 200, pitchEnd: 50, dur: 0.8, type: "sawtooth", peak: 0.25, release: 0.8 });
  }
  swing() {
    this.playNoise({ dur: 0.16, filterType: "bandpass", freq: 1300, q: 1.8, peak: 0.08, release: 0.16 });
  }
  hit() {
    this.playNoise({ dur: 0.08, freq: 600, peak: 0.22 });
    this.playTone({ freq: 140, dur: 0.10, type: "square", peak: 0.18 });
  }
  mobKilled() {
    this.playTone({ freq: 250, pitchEnd: 80, dur: 0.35, type: "sawtooth", peak: 0.2 });
    this.playNoise({ dur: 0.18, freq: 700, peak: 0.12, release: 0.18 });
  }
  pickup() {
    // Two-tone pop, rising
    this.playTone({ freq: 660, pitchEnd: 1320, dur: 0.10, type: "sine", peak: 0.16 });
  }
  drop() {
    this.playNoise({ dur: 0.10, freq: 600, peak: 0.10 });
  }
  click() {
    this.playTone({ freq: 1200, dur: 0.03, type: "square", peak: 0.06 });
  }
  craft() {
    this.playTone({ freq: 500, pitchEnd: 800,  dur: 0.10, type: "sine", peak: 0.15 });
    this.playTone({ freq: 700, pitchEnd: 1300, dur: 0.10, type: "sine", peak: 0.12, delay: 0.06 });
  }
  splash() {
    this.playNoise({ dur: 0.35, freq: 600, peak: 0.20, pitchEnd: 180, release: 0.35 });
  }
  chat() {
    this.playTone({ freq: 1000, dur: 0.04, type: "sine", peak: 0.08 });
  }
  levelUp() {
    this.playTone({ freq: 523, pitchEnd: 659, dur: 0.18, type: "triangle", peak: 0.15 });
    this.playTone({ freq: 659, pitchEnd: 784, dur: 0.18, type: "triangle", peak: 0.15, delay: 0.10 });
    this.playTone({ freq: 784, pitchEnd: 1047,dur: 0.22, type: "triangle", peak: 0.15, delay: 0.20 });
  }
  /** Sleep / day-skip — gentle descending chime. */
  sleep() {
    this.playTone({ freq: 800, pitchEnd: 200, dur: 0.6, type: "sine", peak: 0.10, release: 0.6 });
  }
  /** Item drop hitting the ground. */
  thump() {
    this.playNoise({ dur: 0.12, freq: 350, peak: 0.10 });
  }
  /** Generic zombie groan. */
  zombie() {
    this.playTone({ freq: 110, pitchEnd: 80, dur: 0.55, type: "sawtooth", peak: 0.12, release: 0.55 });
    this.playNoise({ dur: 0.55, filterType: "lowpass", freq: 400, peak: 0.05, release: 0.55 });
  }
}

export const sound = new SoundEngine();

// ── Block → surface mapping ─────────────────────────────────────────────────
// Used to pick a step/break/place sound by the block underfoot or the block
// being interacted with. Falls back to "stone" for anything unknown.
const SURFACE_OVERRIDES: Record<number, Surface> = {
  1: "grass", 2: "grass", 6: "leaves", 7: "water",
  3: "stone", 9: "stone", 16: "stone", 17: "stone", 18: "stone", 19: "stone", 20: "stone", 21: "stone",
  22: "glass", 23: "grass", 24: "glass", 26: "stone", 27: "stone",
  4: "sand", 10: "gravel",
  5: "wood", 8: "wood", 13: "wood", 28: "wood", 36: "wood", 43: "wood",
  29: "leaves", 30: "grass", 31: "grass", 32: "grass", 33: "grass", 34: "grass", 35: "grass",
  37: "stone", 38: "stone", 39: "metal", 40: "metal", 41: "metal",
  42: "wood", 11: "glass",
  14: "wool", 15: "wool", 44: "wool",
};

export function blockSurface(id: number): Surface {
  if (id === 0) return "grass";
  if (SURFACE_OVERRIDES[id]) return SURFACE_OVERRIDES[id];
  const def = BLOCKS[id];
  if (!def) return "stone";
  if (def.isLeaf) return "leaves";
  if (def.isWater) return "water";
  return "stone";
}
