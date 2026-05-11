/**
 * Special game-mode world configurations.
 * Each mode customizes the World after the base terrain is generated.
 */
import { World, SEA_LEVEL } from "./World";

export type ModeId =
  | "survival_offline"
  | "survival_mp"
  | "creative_offline"
  | "creative_mp"
  | "bedwars_mp"
  | "parkour_mp"
  | "oneblock";

export interface ModeConfig {
  id: ModeId;
  label: string;
  short: string;
  isMultiplayer: boolean;
  isCreative: boolean;
  useDefaultWorld: boolean;   // false = clear world and build custom
  hotbar?: number[];          // override creative hotbar
}

export const MODES: Record<ModeId, ModeConfig> = {
  survival_offline: { id: "survival_offline", label: "Survival Mode · Offline",    short: "survival", isMultiplayer: false, isCreative: false, useDefaultWorld: true },
  survival_mp:      { id: "survival_mp",      label: "Survival Mode · Multiplayer", short: "survival", isMultiplayer: true,  isCreative: false, useDefaultWorld: true },
  creative_offline: { id: "creative_offline", label: "Creative Mode · Offline",     short: "creative", isMultiplayer: false, isCreative: true,  useDefaultWorld: true },
  creative_mp:      { id: "creative_mp",      label: "Creative Mode · Multiplayer", short: "creative", isMultiplayer: true,  isCreative: true,  useDefaultWorld: true },
  bedwars_mp:       { id: "bedwars_mp",       label: "Bedwars · Multiplayer",       short: "bedwars",  isMultiplayer: true,  isCreative: false, useDefaultWorld: false, hotbar: [9, 8, 14, 15, 11, 39, 41, 64, 65] },
  parkour_mp:       { id: "parkour_mp",       label: "Parkour · Multiplayer",       short: "parkour",  isMultiplayer: true,  isCreative: false, useDefaultWorld: false },
  oneblock:         { id: "oneblock",         label: "One Block",                          short: "oneblock", isMultiplayer: false, isCreative: false, useDefaultWorld: false },
};

/** Build a Bedwars-style world: small island arena, central diamond pile + generators. */
export function buildBedwars(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  const cx = 128, cz = 128;
  const platY = 40;
  // Central island (8x8 stone bricks)
  for (let dx = -4; dx <= 4; dx++) {
    for (let dz = -4; dz <= 4; dz++) {
      world.setBlock(cx + dx, platY, cz + dz, 26); // stone brick
    }
  }
  // 4 team islands (10x10 with bed)
  const teams = [
    { x: cx - 30, z: cz - 30, wool: 15 }, // red
    { x: cx + 30, z: cz - 30, wool: 14 }, // white (proxy for blue)
    { x: cx - 30, z: cz + 30, wool: 14 }, // white
    { x: cx + 30, z: cz + 30, wool: 15 }, // red (proxy for yellow)
  ];
  for (const t of teams) {
    for (let dx = -4; dx <= 4; dx++) {
      for (let dz = -4; dz <= 4; dz++) {
        world.setBlock(t.x + dx, platY, t.z + dz, 27); // sandstone platform
      }
    }
    // Bed
    world.setBlock(t.x, platY + 1, t.z, t.wool);
    world.setBlock(t.x + 1, platY + 1, t.z, t.wool);
    // Walls/barriers
    for (let dx = -4; dx <= 4; dx++) {
      world.setBlock(t.x + dx, platY + 1, t.z - 4, 9);
      world.setBlock(t.x + dx, platY + 1, t.z + 4, 9);
    }
    // Iron + gold generator markers
    world.setBlock(t.x - 2, platY + 1, t.z - 2, 39); // iron block
    world.setBlock(t.x + 2, platY + 1, t.z + 2, 40); // gold block
  }
  // Bridges to center (just thin paths)
  for (const t of teams) {
    const dx = Math.sign(cx - t.x), dz = Math.sign(cz - t.z);
    let x = t.x, z = t.z;
    while (Math.abs(x - cx) > 4 || Math.abs(z - cz) > 4) {
      world.setBlock(x, platY, z, 9);
      x += dx; z += dz;
    }
  }
  // Center diamond block
  world.setBlock(cx, platY + 1, cz, 41);
  return { spawnX: teams[0].x + 0.5, spawnY: platY + 2, spawnZ: teams[0].z + 0.5 };
}

/** Build a Parkour world: a long zig-zag of platforms with increasing difficulty. */
export function buildParkour(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  let x = 128, y = 50, z = 128;
  // Starting platform
  for (let dx = -2; dx <= 2; dx++)
    for (let dz = -2; dz <= 2; dz++)
      world.setBlock(x + dx, y, z + dz, 26); // stone brick
  // Series of jumps
  const rng = mulberry(99);
  const blockTypes = [9, 26, 8, 14, 15, 39, 27, 17];
  let lastDir = 0;
  for (let i = 0; i < 40; i++) {
    // Random direction + height
    const dirs = [[3,0],[-3,0],[0,3],[0,-3],[4,0],[0,4]];
    const d = dirs[Math.floor(rng() * dirs.length)];
    // Avoid going backwards too fast
    x += d[0];
    z += d[1];
    if (i % 4 === 0) y += Math.floor(rng() * 3) - 1;
    if (y < 20) y = 20;
    if (y > 58) y = 58;
    const block = blockTypes[Math.floor(rng() * blockTypes.length)];
    world.setBlock(x, y, z, block);
    // Every 8 jumps a bigger platform with a torch
    if (i % 8 === 7) {
      for (let dx = -1; dx <= 1; dx++)
        for (let dz = -1; dz <= 1; dz++)
          world.setBlock(x + dx, y, z + dz, block);
      world.setBlock(x, y + 1, z, 42); // torch
    }
    lastDir = (lastDir + 1) % 4;
  }
  // Finish platform with gold blocks
  for (let dx = -2; dx <= 2; dx++)
    for (let dz = -2; dz <= 2; dz++)
      world.setBlock(x + dx, y, z + dz, 40);
  // Finish marker (diamond block tower)
  world.setBlock(x, y + 1, z, 41);
  world.setBlock(x, y + 2, z, 41);
  world.setBlock(x, y + 3, z, 22); // glowstone topper
  return { spawnX: 128.5, spawnY: 52, spawnZ: 128.5 };
}

/** Build a OneBlock world: empty space with a single platform block. */
export function buildOneBlock(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  const x = 128, y = 40, z = 128;
  world.setBlock(x, y, z, 1); // grass to start
  // Tiny ring around for safety until first respawn
  for (let dx = -1; dx <= 1; dx++)
    for (let dz = -1; dz <= 1; dz++)
      if (dx !== 0 || dz !== 0) world.setBlock(x + dx, y, z + dz, 3); // stone perimeter
  return { spawnX: x + 0.5, spawnY: y + 1, spawnZ: z + 0.5 };
}

/** OneBlock respawn: when the central block is broken, place a random block back. */
export function pickOneBlockNext(rng?: () => number): number {
  const r = rng ? rng() : Math.random();
  // Weighted: dirt/stone common, ores rare
  const table: Array<[number, number]> = [
    [2, 20], [3, 15], [1, 12], [4, 10], [9, 8], [5, 6], [6, 4], [8, 5],
    [18, 4], [19, 3], [10, 4], [22, 2], [20, 2], [21, 1], [41, 0.5],
  ];
  let total = 0;
  for (const [, w] of table) total += w;
  let pick = r * total;
  for (const [id, w] of table) {
    pick -= w;
    if (pick <= 0) return id;
  }
  return 2;
}

function mulberry(seed: number): () => number {
  let t = seed;
  return function () {
    t = (t + 0x6D2B79F5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
