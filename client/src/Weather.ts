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

  // Thunder flash overlay
  private thunderTimer = 0;
  private thunderFlash = false;
  private nextThunder = 15; // seconds until next thunder

  // Ambient rain sound state
  private rainSoundTimer = 0;

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
  }

  private stopRain() {
    if (this.rainParticles) {
      this.scene.remove(this.rainParticles);
      this.rainParticles.geometry.dispose();
      this.rainParticles = null;
      this.rainPositions = null;
      this.rainVelY = null;
    }
    this.thunderFlash = false;
  }

  update(dt: number, playerPos: THREE.Vector3, fogColor: THREE.Color) {
    if (this.type === "clear") return;

    // Update rain particles - follow player
    if (this.rainParticles && this.rainPositions && this.rainVelY) {
      this.rainParticles.position.set(playerPos.x, 0, playerPos.z);
      const pos = this.rainPositions;
      for (let i = 0; i < this.rainCount; i++) {
        pos[i * 3 + 1] -= this.rainVelY[i] * dt;
        if (pos[i * 3 + 1] < -2) {
          pos[i * 3]     = (Math.random() - 0.5) * 80;
          pos[i * 3 + 1] = 30 + Math.random() * 5;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
        }
      }
      (this.rainParticles.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
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

  dispose() {
    this.stopRain();
  }
}
