import * as THREE from "three";

/**
 * SkyDome — a large sphere with a custom shader that renders:
 * - Zenith-to-horizon color gradient (two colors lerped by elevation)
 * - Horizon glow band during dawn/dusk
 * - Integrated star field that fades with sunlight
 * - Sun and moon halos
 */

const SKY_VERTEX = /* glsl */ `
varying vec3 vWorldPos;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const SKY_FRAGMENT = /* glsl */ `
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uHorizonGlow;
uniform float uGlowIntensity;
uniform vec3 uSunDir;
uniform float uSunIntensity;
uniform float uStarOpacity;

varying vec3 vWorldPos;

// Simple hash for stars
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec3 dir = normalize(vWorldPos);
  float elevation = dir.y; // -1 (nadir) to 1 (zenith)

  // Sky gradient: horizon color at y=0, zenith color at y=1
  float t = clamp(elevation, 0.0, 1.0);
  t = sqrt(t); // bias toward horizon for wider horizon band
  vec3 sky = mix(uHorizon, uZenith, t);

  // Horizon glow band (dawn/dusk warm glow near horizon)
  float horizonBand = exp(-abs(elevation) * 8.0); // tight band around horizon
  sky = mix(sky, uHorizonGlow, horizonBand * uGlowIntensity);

  // Sun halo
  float sunDot = max(dot(dir, uSunDir), 0.0);
  float sunHalo = pow(sunDot, 64.0) * 0.6 + pow(sunDot, 256.0) * 1.2;
  sky += vec3(1.0, 0.95, 0.8) * sunHalo * uSunIntensity;

  // Moon halo (opposite of sun)
  vec3 moonDir = -uSunDir;
  float moonDot = max(dot(dir, moonDir), 0.0);
  float moonHalo = pow(moonDot, 128.0) * 0.3;
  sky += vec3(0.6, 0.7, 1.0) * moonHalo * (1.0 - uSunIntensity);

  // Stars — procedural grid-based
  if (uStarOpacity > 0.01 && elevation > 0.0) {
    // Project direction onto a 2D grid for star placement
    vec2 starUV = dir.xz / (dir.y + 0.001) * 4.0;
    vec2 cell = floor(starUV);
    float starVal = hash(cell);
    // Only ~15% of cells have stars
    if (starVal > 0.85) {
      // Star position within cell
      vec2 starPos = vec2(hash(cell + 0.5), hash(cell + 1.5)) * 0.8 + 0.1;
      vec2 delta = fract(starUV) - starPos;
      float dist = length(delta);
      float brightness = smoothstep(0.04, 0.0, dist) * (0.5 + starVal * 0.5);
      // Twinkle
      float twinkle = sin(starVal * 100.0 + starUV.x * 10.0) * 0.3 + 0.7;
      sky += vec3(brightness * twinkle * uStarOpacity);
    }
  }

  // Below horizon: darken gradually
  if (elevation < 0.0) {
    float below = clamp(-elevation * 3.0, 0.0, 1.0);
    sky = mix(sky, uHorizon * 0.5, below);
  }

  gl_FragColor = vec4(sky, 1.0);
}
`;

export class SkyDome {
  mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;

  // Pre-allocated color objects for lerping
  private _zenith  = new THREE.Color();
  private _horizon = new THREE.Color();
  private _glow    = new THREE.Color();
  private _sunDir  = new THREE.Vector3();

  // Color presets
  private static readonly ZENITH = {
    night: new THREE.Color(0x020210),
    dawn:  new THREE.Color(0x2244aa),
    day:   new THREE.Color(0x3388dd),
    dusk:  new THREE.Color(0x1a1a66),
  };
  private static readonly HORIZON = {
    night: new THREE.Color(0x080820),
    dawn:  new THREE.Color(0xff8855),
    day:   new THREE.Color(0xaaddff),
    dusk:  new THREE.Color(0xff5533),
  };
  private static readonly GLOW = {
    night: new THREE.Color(0x000000),
    dawn:  new THREE.Color(0xff6622),
    day:   new THREE.Color(0xffeedd),
    dusk:  new THREE.Color(0xff4411),
  };

  constructor() {
    const geo = new THREE.SphereGeometry(400, 24, 16);
    this.material = new THREE.ShaderMaterial({
      vertexShader: SKY_VERTEX,
      fragmentShader: SKY_FRAGMENT,
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uZenith:        { value: new THREE.Color(0x3388dd) },
        uHorizon:       { value: new THREE.Color(0xaaddff) },
        uHorizonGlow:   { value: new THREE.Color(0xffeedd) },
        uGlowIntensity: { value: 0.0 },
        uSunDir:        { value: new THREE.Vector3(0, 1, 0) },
        uSunIntensity:  { value: 1.0 },
        uStarOpacity:   { value: 0.0 },
      },
    });
    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.renderOrder = -1; // render before everything else
  }

  /**
   * Update sky colors based on dayTime (0..1 cycle).
   * sunPosition is the world-space position of the sun mesh.
   */
  update(dayTime: number, sunPosition: THREE.Vector3) {
    const t = dayTime;
    const Z = SkyDome.ZENITH;
    const H = SkyDome.HORIZON;
    const G = SkyDome.GLOW;

    let glowIntensity: number;

    if (t < 0.2) {
      // Night → Dawn
      const p = t / 0.2;
      this._zenith.copy(Z.night).lerp(Z.dawn, p);
      this._horizon.copy(H.night).lerp(H.dawn, p);
      this._glow.copy(G.night).lerp(G.dawn, p);
      glowIntensity = p * 0.8;
    } else if (t < 0.3) {
      // Dawn → Day
      const p = (t - 0.2) / 0.1;
      this._zenith.copy(Z.dawn).lerp(Z.day, p);
      this._horizon.copy(H.dawn).lerp(H.day, p);
      this._glow.copy(G.dawn).lerp(G.day, p);
      glowIntensity = (1 - p) * 0.6;
    } else if (t < 0.7) {
      // Full day
      this._zenith.copy(Z.day);
      this._horizon.copy(H.day);
      this._glow.copy(G.day);
      glowIntensity = 0.05;
    } else if (t < 0.8) {
      // Day → Dusk
      const p = (t - 0.7) / 0.1;
      this._zenith.copy(Z.day).lerp(Z.dusk, p);
      this._horizon.copy(H.day).lerp(H.dusk, p);
      this._glow.copy(G.day).lerp(G.dusk, p);
      glowIntensity = p * 0.8;
    } else {
      // Dusk → Night
      const p = (t - 0.8) / 0.2;
      this._zenith.copy(Z.dusk).lerp(Z.night, p);
      this._horizon.copy(H.dusk).lerp(H.night, p);
      this._glow.copy(G.dusk).lerp(G.night, p);
      glowIntensity = (1 - p) * 0.6;
    }

    const u = this.material.uniforms;
    u.uZenith.value.copy(this._zenith);
    u.uHorizon.value.copy(this._horizon);
    u.uHorizonGlow.value.copy(this._glow);
    u.uGlowIntensity.value = glowIntensity;

    // Sun direction (normalized)
    this._sunDir.copy(sunPosition).normalize();
    u.uSunDir.value.copy(this._sunDir);

    // Sun intensity for halo brightness
    const sunUp = Math.sin((dayTime - 0.25) * Math.PI * 2);
    u.uSunIntensity.value = Math.max(sunUp, 0);

    // Stars visible at night
    u.uStarOpacity.value = Math.max(0, 1 - u.uSunIntensity.value * 2.5);
  }

  /** Keep the dome centered on camera so it never clips */
  followCamera(cameraPosition: THREE.Vector3) {
    this.mesh.position.copy(cameraPosition);
  }
}
