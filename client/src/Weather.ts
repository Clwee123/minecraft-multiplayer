import * as THREE from "three";
import { SoundManager } from "./SoundManager";

export type WeatherType = "clear" | "rain" | "thunder";

export class Weather {
  private scene: THREE.Scene;
  private sounds: SoundManager;
  private type: WeatherType = "clear";

  // Rain particles - a large field of falling lines
  private rainParticles: THREE.Points | null = null;
  private rainPositions: Float32Array | null = null;
  private rainVelY: Float32Array | null = null;
  private rainCount = 2000;

  // Rain splash particles at ground level
  private splashParticles: THREE.Points | null = null;
  private splashPositions: Float32Array | null = null;
  private splashLife: Float32Array | null = null;
  private splashCount = 200;

  // Thunder flash overlay
  private thunderTimer = 0;
  private thunderFlash = false;
  private nextThunder = 15; // seconds until next thunder

  // Ambient rain sound state
  private rainSoundTimer = 0;
  private rainAmbientNode: OscillatorNode | null = null;
  private rainAmbientGain: GainNode | null = null;

  constructor(scene: THREE.Scene, sounds: SoundManager) {
    this.scene = scene;
    this.sounds = sounds;
  }

  setWeather(type: WeatherType) {
    this.type = type;
    if (type === "clear") {
      this.stopRain();
    } else {
      this.startRain();
    }
  }

  getWeather(): WeatherType { return this.type; }

  private startRain() {
    if (this.rainParticles) return;
    // Falling rain
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(this.rainCount * 3);
    const vel = new Float32Array(this.rainCount);
    for (let i = 0; i < this.rainCount; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = Math.random() * 30 + 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
      vel[i]         = 15 + Math.random() * 5;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0xaaaaff, size: 0.15, transparent: true, opacity: 0.6, sizeAttenuation: true });
    this.rainParticles = new THREE.Points(geo, mat);
    this.rainPositions = pos;
    this.rainVelY = vel;
    this.scene.add(this.rainParticles);

    // Ground splash particles
    const splashGeo = new THREE.BufferGeometry();
    const sPos = new Float32Array(this.splashCount * 3);
    const sLife = new Float32Array(this.splashCount);
    for (let i = 0; i < this.splashCount; i++) {
      sPos[i * 3]     = (Math.random() - 0.5) * 40;
      sPos[i * 3 + 1] = -100; // hidden initially
      sPos[i * 3 + 2] = (Math.random() - 0.5) * 40;
      sLife[i] = 0;
    }
    splashGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
    const sMat = new THREE.PointsMaterial({ color: 0xccccff, size: 0.25, transparent: true, opacity: 0.5, sizeAttenuation: true });
    this.splashParticles = new THREE.Points(splashGeo, sMat);
    this.splashPositions = sPos;
    this.splashLife = sLife;
    this.scene.add(this.splashParticles);

    // Ambient rain sound (continuous low noise)
    this.startRainAmbient();
  }

  private stopRain() {
    if (this.rainParticles) {
      this.scene.remove(this.rainParticles);
      this.rainParticles.geometry.dispose();
      this.rainParticles = null;
      this.rainPositions = null;
      this.rainVelY = null;
    }
    if (this.splashParticles) {
      this.scene.remove(this.splashParticles);
      this.splashParticles.geometry.dispose();
      this.splashParticles = null;
      this.splashPositions = null;
      this.splashLife = null;
    }
    this.stopRainAmbient();
    this.thunderFlash = false;
  }

  update(dt: number, playerPos: THREE.Vector3, fogColor: THREE.Color) {
    if (this.type === "clear") return;

    // Update rain particles - follow player
    if (this.rainParticles && this.rainPositions && this.rainVelY) {
      this.rainParticles.position.set(playerPos.x, 0, playerPos.z);
      const pos = this.rainPositions;
      let splashIdx = 0;
      for (let i = 0; i < this.rainCount; i++) {
        pos[i * 3 + 1] -= this.rainVelY[i] * dt;
        if (pos[i * 3 + 1] < -2) {
          // Spawn a splash at the landing point
          if (this.splashPositions && this.splashLife && splashIdx < this.splashCount) {
            const sx = pos[i * 3] + playerPos.x;
            const sz = pos[i * 3 + 2] + playerPos.z;
            this.splashPositions[splashIdx * 3]     = sx;
            this.splashPositions[splashIdx * 3 + 1] = playerPos.y - 1 + Math.random() * 0.5;
            this.splashPositions[splashIdx * 3 + 2] = sz;
            this.splashLife[splashIdx] = 0.3; // 0.3s splash duration
            splashIdx++;
          }
          pos[i * 3]     = (Math.random() - 0.5) * 80;
          pos[i * 3 + 1] = 30 + Math.random() * 5;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
        }
      }
      (this.rainParticles.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }

    // Update splash particles
    if (this.splashParticles && this.splashPositions && this.splashLife) {
      for (let i = 0; i < this.splashCount; i++) {
        if (this.splashLife[i] > 0) {
          this.splashLife[i] -= dt;
          // Expand outward slightly
          this.splashPositions[i * 3 + 1] += dt * 2;
          if (this.splashLife[i] <= 0) {
            this.splashPositions[i * 3 + 1] = -100; // hide
          }
        }
      }
      (this.splashParticles.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }

    // Thunder
    if (this.type === "thunder") {
      this.nextThunder -= dt;
      if (this.nextThunder <= 0) {
        this.thunderFlash = true;
        this.nextThunder = 8 + Math.random() * 20;
        this.thunderTimer = 0.15;
        // Play thunder sound
        this.sounds.play("break"); // reuse break sound as thunder rumble
      }
      if (this.thunderFlash) {
        this.thunderTimer -= dt;
        if (this.thunderTimer <= 0) this.thunderFlash = false;
      }
    }
  }

  isThunderFlashing(): boolean { return this.thunderFlash; }
  isRaining(): boolean { return this.type !== "clear"; }

  private startRainAmbient() {
    try {
      const ctx = new AudioContext();
      // Create brown noise for rain ambience
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      let lastOut = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }
      const src = ctx.createBufferSource();
      src.buffer = noiseBuffer;
      src.loop = true;

      const gain = ctx.createGain();
      gain.gain.value = 0.08; // subtle

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 800;

      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start();

      this.rainAmbientNode = src as any;
      this.rainAmbientGain = gain;
      // Store context for cleanup
      (this as any)._rainCtx = ctx;
    } catch (_) {
      // Audio not available
    }
  }

  private stopRainAmbient() {
    if (this.rainAmbientGain) {
      this.rainAmbientGain.gain.value = 0;
    }
    if ((this as any)._rainCtx) {
      (this as any)._rainCtx.close();
      (this as any)._rainCtx = null;
    }
    this.rainAmbientNode = null;
    this.rainAmbientGain = null;
  }

  dispose() {
    this.stopRain();
  }
}
