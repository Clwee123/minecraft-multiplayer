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
  | "oneblock"
  | "buildbattle_mp"
  | "hideandseek_mp";

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
  buildbattle_mp:   { id: "buildbattle_mp",   label: "Build Battle · Multiplayer",          short: "buildbattle", isMultiplayer: true, isCreative: true, useDefaultWorld: false,
                       /* creative loadout — common build blocks */
                       hotbar: [8, 9, 1, 14, 15, 11, 36, 42, 22] },
  hideandseek_mp:   { id: "hideandseek_mp",   label: "Hide and Seek · Multiplayer",         short: "hideandseek", isMultiplayer: true, isCreative: false, useDefaultWorld: false },
};

/**
 * Build a Build-Battle arena: a centre spawn platform plus four 12×12
 * grass plots ringed in sandstone, separated by walking paths. Each plot
 * has a small marker so players know which is theirs.
 */
export function buildBuildBattle(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  const cx = 128, cz = 128, y = 40;
  // Central spawn pad
  for (let dx = -3; dx <= 3; dx++) for (let dz = -3; dz <= 3; dz++) {
    world.setBlock(cx + dx, y, cz + dz, 26);             // stone bricks
  }
  // Four plots at (±20, ±20)
  const plots = [
    { x: cx - 22, z: cz - 22, marker: 14 }, // white wool marker
    { x: cx + 22, z: cz - 22, marker: 15 }, // red wool marker
    { x: cx - 22, z: cz + 22, marker: 41 }, // diamond block marker
    { x: cx + 22, z: cz + 22, marker: 40 }, // gold block marker
  ];
  for (const p of plots) {
    // 13×13 plot (12×12 build area + 1-wide perimeter)
    for (let dx = -6; dx <= 6; dx++) for (let dz = -6; dz <= 6; dz++) {
      const onEdge = Math.abs(dx) === 6 || Math.abs(dz) === 6;
      world.setBlock(p.x + dx, y, p.z + dz, onEdge ? 27 : 1);  // sandstone rim, grass interior
    }
    // 1-block wall around so people don't accidentally walk into a neighbour's plot
    for (let dx = -6; dx <= 6; dx++) {
      world.setBlock(p.x + dx, y + 1, p.z - 6, 27);
      world.setBlock(p.x + dx, y + 1, p.z + 6, 27);
    }
    for (let dz = -6; dz <= 6; dz++) {
      world.setBlock(p.x - 6, y + 1, p.z + dz, 27);
      world.setBlock(p.x + 6, y + 1, p.z + dz, 27);
    }
    // Plot marker / colour tile near a corner
    world.setBlock(p.x - 5, y + 1, p.z - 5, p.marker);
  }
  // Cobble paths from centre to each plot
  const pathOff: Array<[number, number]> = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
  for (let i = 0; i < 4; i++) {
    const [sx, sz] = pathOff[i];
    for (let t = 4; t < 18; t++) {
      world.setBlock(cx + sx * t, y, cz + sz * t, 9);
      world.setBlock(cx + sx * t + 1, y, cz + sz * t, 9);
    }
  }
  return { spawnX: cx + 0.5, spawnY: y + 1.001, spawnZ: cz + 0.5 };
}

/**
 * Build a Hide-and-Seek arena: a circular grass island ringed in sand, with
 * deterministic trees and four small wooden huts dotted around. Trees and
 * huts give the seekers' targets places to actually hide.
 */
export function buildHideAndSeek(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  const cx = 128, cz = 128, y = 38;
  const R = 36;
  // Circular grass island
  for (let dx = -R; dx <= R; dx++) for (let dz = -R; dz <= R; dz++) {
    const d = Math.hypot(dx, dz);
    if (d > R) continue;
    const top = d > R - 1.2 ? 4 : 1;  // sand at the edge, grass interior
    world.setBlock(cx + dx, y, cz + dz, top);
    if (top === 1) world.setBlock(cx + dx, y - 1, cz + dz, 2); // dirt sub
  }
  // Trees (deterministic spread)
  const trees: Array<[number, number]> = [
    [-22, -18], [-10, -25], [4, -28], [18, -22], [26, -10],
    [-28, 0],   [-16, 6],   [10, 10],  [22, 18],   [-6, 22],
    [14, 26],   [28, -6],   [0, 28],   [-26, 14],
  ];
  for (const [tx, tz] of trees) placeOakTree(world, cx + tx, y + 1, cz + tz);
  // Four small huts to hide in
  const huts: Array<{ x: number; z: number }> = [
    { x: cx - 14, z: cz - 8 },
    { x: cx + 12, z: cz - 14 },
    { x: cx + 16, z: cz + 8 },
    { x: cx - 18, z: cz + 12 },
  ];
  for (const h of huts) placeSmallHut(world, h.x, y + 1, h.z);
  return { spawnX: cx + 0.5, spawnY: y + 1.001, spawnZ: cz + 0.5 };
}

/** Helper — 5-tall oak tree with a 3×3×2 canopy. */
function placeOakTree(world: World, x: number, y: number, z: number) {
  for (let i = 0; i < 5; i++) world.setBlock(x, y + i, z, 5); // log
  const top = y + 4;
  for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) for (let dy = 0; dy <= 2; dy++) {
    if (Math.abs(dx) === 2 && Math.abs(dz) === 2 && dy < 1) continue;
    if (dx === 0 && dz === 0 && dy < 2) continue;
    world.setBlock(x + dx, top + dy, z + dz, 6);
  }
}

/** Helper — 4×4 wooden hut with a door slot, used by Hide and Seek. */
function placeSmallHut(world: World, x: number, y: number, z: number) {
  // Plank floor
  for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
    world.setBlock(x + dx, y - 1, z + dz, 8);
  }
  // Plank walls 3 tall
  for (let h = 0; h < 3; h++) {
    for (let dx = -2; dx <= 2; dx++) {
      world.setBlock(x + dx, y + h, z - 2, 8);
      world.setBlock(x + dx, y + h, z + 2, 8);
    }
    for (let dz = -2; dz <= 2; dz++) {
      world.setBlock(x - 2, y + h, z + dz, 8);
      world.setBlock(x + 2, y + h, z + dz, 8);
    }
  }
  // Punch out a door
  world.setBlock(x, y,     z + 2, 0);
  world.setBlock(x, y + 1, z + 2, 0);
  // Log-roof
  for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
    world.setBlock(x + dx, y + 3, z + dz, 5);
  }
}

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
