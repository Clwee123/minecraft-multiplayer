/**
 * SoundManager — procedural sounds via Web Audio API.
 * No audio files needed; all sounds are synthesized.
 */

export type SoundName =
  | "break"   // block broken
  | "place"   // block placed
  | "hurt"    // player hurt
  | "hit"     // player attack
  | "splash"  // enter water
  | "eat"     // eating / consuming
  | "step";   // footstep (call occasionally while walking)

export class SoundManager {
  private ctx: AudioContext | null = null;

  private getCtx(): AudioContext {
    if (!this.ctx) this.ctx = new AudioContext();
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  play(sound: SoundName, volume = 1.0) {
    try {
      switch (sound) {
        case "break":   this.playBreak(volume);   break;
        case "place":   this.playPlace(volume);   break;
        case "hurt":    this.playHurt(volume);    break;
        case "hit":     this.playHit(volume);     break;
        case "splash":  this.playSplash(volume);  break;
        case "eat":     this.playEat(volume);     break;
        case "step":    this.playStep(volume);    break;
      }
    } catch (_) {
      // Silently ignore audio errors (e.g. no user gesture yet)
    }
  }

  // ── Synthesized sounds ──────────────────────────────────────────────────────

  private playBreak(vol: number) {
    const ctx  = this.getCtx();
    const buf  = this.makeNoise(ctx, 0.08);
    const src  = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol * 0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    const filter = ctx.createBiquadFilter();
    filter.type      = "bandpass";
    filter.frequency.value = 800;
    filter.Q.value   = 0.8;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  }

  private playPlace(vol: number) {
    const ctx  = this.getCtx();
    const buf  = this.makeNoise(ctx, 0.06);
    const src  = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol * 0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    const filter = ctx.createBiquadFilter();
    filter.type      = "lowpass";
    filter.frequency.value = 400;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  }

  private playHurt(vol: number) {
    const ctx = this.getCtx();
    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.18);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol * 0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  }

  private playHit(vol: number) {
    const ctx  = this.getCtx();
    const buf  = this.makeNoise(ctx, 0.04);
    const src  = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol * 0.6, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    const filter = ctx.createBiquadFilter();
    filter.type      = "highpass";
    filter.frequency.value = 1200;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  }

  private playSplash(vol: number) {
    const ctx  = this.getCtx();
    const buf  = this.makeNoise(ctx, 0.25);
    const src  = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol * 0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    const filter = ctx.createBiquadFilter();
    filter.type      = "bandpass";
    filter.frequency.value = 600;
    filter.Q.value   = 0.5;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  }

  private playEat(vol: number) {
    const ctx = this.getCtx();
    // Three quick crunch pops
    for (let i = 0; i < 3; i++) {
      const delay = i * 0.07;
      const buf   = this.makeNoise(ctx, 0.04);
      const src   = ctx.createBufferSource();
      src.buffer  = buf;
      const gain  = ctx.createGain();
      gain.gain.setValueAtTime(vol * 0.3, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.06);
      const filter = ctx.createBiquadFilter();
      filter.type      = "bandpass";
      filter.frequency.value = 300 + i * 200;
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start(ctx.currentTime + delay);
    }
  }

  private playStep(vol: number) {
    const ctx  = this.getCtx();
    const buf  = this.makeNoise(ctx, 0.04);
    const src  = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol * 0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    const filter = ctx.createBiquadFilter();
    filter.type      = "lowpass";
    filter.frequency.value = 300;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  }

  playAmbient(type: "birds" | "wind" | "cave"): void {
    const ctx = this.getCtx();
    if (!ctx) return;

    if (type === "birds") {
      // Two chirping oscillators with random pitch
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(800 + Math.random() * 400, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1200 + Math.random() * 600, ctx.currentTime + 0.08);
          gain.gain.setValueAtTime(0.06, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
          osc.connect(gain); gain.connect(ctx.destination);
          osc.start(); osc.stop(ctx.currentTime + 0.15);
        }, i * 200 + Math.random() * 300);
      }
    } else if (type === "wind") {
      const bufSize = ctx.sampleRate * 1.5;
      const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * 0.03;
      const src = ctx.createBufferSource();
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 200;
      filter.Q.value = 0.5;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.5);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);
      src.buffer = buf;
      src.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
      src.start(); src.stop(ctx.currentTime + 1.5);
    } else if (type === "cave") {
      // Deep dripping sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 80 + Math.random() * 40;
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + 0.8);
    }
  }

  // ── Helper: white noise buffer ──────────────────────────────────────────────

  private makeNoise(ctx: AudioContext, durationSeconds: number): AudioBuffer {
    const sr     = ctx.sampleRate;
    const frames = Math.ceil(sr * durationSeconds);
    const buf    = ctx.createBuffer(1, frames, sr);
    const data   = buf.getChannelData(0);
    for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
    return buf;
  }
}
