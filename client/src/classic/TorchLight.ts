/**
 * TorchLightManager — drops a pool of THREE.PointLights onto the N
 * emissive blocks nearest to the player each frame.
 *
 * Why pool + nearest-N instead of one light per torch:
 *   - THREE's default forward renderer can only blend ~8 lights per mesh
 *     fragment before perf falls off a cliff, and shaders cap out hard.
 *     A single 32×32 chunk can easily contain dozens of torches.
 *   - The player only ever SEES the lighting effect of the lights close
 *     to them. Recycling a small pool (default 8) to the closest N
 *     torches gives a vanilla-feeling glow halo around every torch the
 *     player is near, without paying for hundreds of lights they can't
 *     see anyway.
 *
 * Block-type → colour + range table lives in `LIGHT_PROFILES` below;
 * tweak there to retune the glow on torches vs glowstone vs lava etc.
 */
import * as THREE from "three";
import { World } from "./World";

interface LightProfile {
  color: number;
  intensity: number;
  range: number;
}
/** Per-block-id light profile. IDs match Textures.ts BLOCKS. */
const LIGHT_PROFILES: Record<number, LightProfile> = {
  42:  { color: 0xffb058, intensity: 1.2, range: 9   },  // torch — warm amber, vanilla feel
  225: { color: 0xff5050, intensity: 1.0, range: 8   },  // redstone torch (lit) — dim red
  22:  { color: 0xffe6b0, intensity: 1.6, range: 14  },  // glowstone — strong warm white
  157: { color: 0xa8d8ff, intensity: 1.4, range: 12  },  // sea lantern — cool blue-white
  38:  { color: 0xffa040, intensity: 1.3, range: 10  },  // lit furnace — orange flame
  46:  { color: 0xff6020, intensity: 1.5, range: 10  },  // lava — orange-red
  169: { color: 0xc080ff, intensity: 1.0, range: 9   },  // dragon egg — purple
  223: { color: 0xffe080, intensity: 1.4, range: 12  },  // redstone lamp lit — pale yellow
};
const DEFAULT_PROFILE: LightProfile = { color: 0xffd070, intensity: 1.0, range: 8 };

export class TorchLightManager {
  private scene: THREE.Scene;
  private world: World;
  private pool: THREE.PointLight[] = [];
  private maxLights: number;
  /** Squared distance threshold for "close enough to bother lighting" —
   *  emissive blocks past this don't need a real light, the material's
   *  own emissive shading already brightens their faces. */
  private maxDist2 = 30 * 30;

  constructor(scene: THREE.Scene, world: World, maxLights = 8) {
    this.scene = scene;
    this.world = world;
    this.maxLights = maxLights;
    for (let i = 0; i < maxLights; i++) {
      const l = new THREE.PointLight(0xffd070, 0, 8, 1.5);  // start invisible
      l.position.set(0, -1000, 0);
      l.visible = false;
      scene.add(l);
      this.pool.push(l);
    }
  }

  /** Re-assign the pool of point lights to the N nearest emissive blocks.
   *  Cheap O(K) where K is the total emissive count — we keep a Set in
   *  World so this scan stays a flat iteration, not a full chunk walk. */
  update(playerX: number, playerY: number, playerZ: number) {
    const ems = this.world.emissiveBlocks;
    if (ems.size === 0) {
      for (const l of this.pool) l.visible = false;
      return;
    }
    // Collect the maxLights closest entries via a partial sort.
    type Hit = { x: number; y: number; z: number; d2: number; id: number };
    const nearest: Hit[] = [];
    for (const key of ems) {
      const parts = key.split(",");
      const x = +parts[0] + 0.5, y = +parts[1] + 0.55, z = +parts[2] + 0.5;
      const dx = x - playerX, dy = y - playerY, dz = z - playerZ;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 > this.maxDist2) continue;
      const id = this.world.getBlock(+parts[0], +parts[1], +parts[2]);
      const hit: Hit = { x, y, z, d2, id };
      // Insert into nearest[] keeping it sorted ascending by d2,
      // truncating to maxLights.
      let inserted = false;
      for (let i = 0; i < nearest.length; i++) {
        if (d2 < nearest[i].d2) {
          nearest.splice(i, 0, hit);
          inserted = true;
          break;
        }
      }
      if (!inserted && nearest.length < this.maxLights) nearest.push(hit);
      if (nearest.length > this.maxLights) nearest.length = this.maxLights;
    }
    // Apply to pool — assigned slots get the matching profile, the rest
    // turn invisible.
    for (let i = 0; i < this.pool.length; i++) {
      const l = this.pool[i];
      const hit = nearest[i];
      if (!hit) { l.visible = false; continue; }
      const prof = LIGHT_PROFILES[hit.id] || DEFAULT_PROFILE;
      l.color.setHex(prof.color);
      l.intensity = prof.intensity;
      l.distance  = prof.range;
      l.position.set(hit.x, hit.y, hit.z);
      l.visible = true;
    }
  }

  dispose() {
    for (const l of this.pool) {
      this.scene.remove(l);
      l.dispose();
    }
    this.pool.length = 0;
  }
}
