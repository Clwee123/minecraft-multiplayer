/**
 * Special game-mode world configurations.
 * Each mode customizes the World after the base terrain is generated.
 */
import { World, SEA_LEVEL } from "./World";

/** Wrap an arena-build function so EVERY setBlock it does is marked as a
 *  protected (map) block. Players will then be unable to destroy any of it
 *  through the LMB-break path — only blocks they place themselves later. */
function withProtection<T>(world: World, build: () => T): T {
  world.protectMode = true;
  try { return build(); }
  finally { world.protectMode = false; }
}

export type ModeId =
  | "survival_offline"
  | "survival_mp"
  | "creative_offline"
  | "creative_mp"
  | "bedwars_mp"
  | "parkour_mp"
  | "oneblock"
  | "buildbattle_mp"
  | "hideandseek_mp"
  | "shooter_mp"
  | "infection_mp"
  | "squidgames_mp";

export interface ModeConfig {
  id: ModeId;
  label: string;
  short: string;
  isMultiplayer: boolean;
  isCreative: boolean;
  useDefaultWorld: boolean;   // false = clear world and build custom
  hotbar?: number[];          // override creative hotbar
  /** When set, every player in this mode is force-equipped with this Bloxity
   *  skin id on join — used by Infection (zombie skin) and Squid Games
   *  (uniform contestant skin). */
  forceSkinId?: string;
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
                       hotbar: [8, 9, 1, 14, 15, 11, 36, 42, 22] },
  hideandseek_mp:   { id: "hideandseek_mp",   label: "Hide and Seek · Multiplayer",         short: "hideandseek", isMultiplayer: true, isCreative: false, useDefaultWorld: false },
  // ── New modes ────────────────────────────────────────────────────────
  shooter_mp:       { id: "shooter_mp",       label: "Shooter",                            short: "shooter",     isMultiplayer: true, isCreative: false, useDefaultWorld: false,
                       /* FFA gun loadout — bow + arrows + a single sword fallback */
                       hotbar: [102, 80, 64, 0, 0, 0, 0, 0, 0] },
  infection_mp:     { id: "infection_mp",     label: "Infection",                          short: "infection",   isMultiplayer: true, isCreative: false, useDefaultWorld: false,
                       /* Default survivor loadout — gets stripped if you turn zombie */
                       hotbar: [64, 102, 80, 0, 0, 0, 0, 0, 0],
                       /* User-provided zombie skin id */
                       forceSkinId: "69c816f23ecd845acf82332c" },
  squidgames_mp:    { id: "squidgames_mp",    label: "Squid Games",                        short: "squidgames",  isMultiplayer: true, isCreative: false, useDefaultWorld: false,
                       /* Every contestant wears the uniform tracksuit skin */
                       forceSkinId: "69f0939aaa72454b9f9c045a" },
};

// ── Build Battle plot constants ──
// Centres MUST match server/src/rooms/GameRoom.ts (BB_PLOTS / BB_FLOOR_Y).
export const BB_CX = 128, BB_CZ = 128, BB_FLOOR_Y = 40;
export const BB_PLOTS: Array<{ x: number; z: number; marker: number; floor: number; rim: number; theme: string }> = [
  { x: BB_CX - 22, z: BB_CZ - 22, marker: 14, floor: 1,  rim: 5,   theme: "grass"  },
  { x: BB_CX + 22, z: BB_CZ - 22, marker: 15, floor: 4,  rim: 27,  theme: "desert" },
  { x: BB_CX - 22, z: BB_CZ + 22, marker: 41, floor: 23, rim: 24,  theme: "snow"   },
  { x: BB_CX + 22, z: BB_CZ + 22, marker: 40, floor: 48, rim: 150, theme: "nether" },
];
export const BB_PLOT_HALF = 6;

/** Repaint the four plot regions back to their pristine themed state.
 *  Called when the round resets so player-placed blocks vanish. The base
 *  arena (rotunda + paths) isn't touched because it never changes. */
export function resetBuildBattlePlots(world: World) {
  const y = BB_FLOOR_Y;
  // Wipe the build column above each plot floor first (up to the lamp posts
  // we're about to repaint at y+3). Anything higher stays — generous head-
  // room means a 30-block-tall castle survives an old reset glitch but the
  // common 1-3 block builds get cleaned reliably.
  for (const p of BB_PLOTS) {
    for (let dx = -BB_PLOT_HALF; dx <= BB_PLOT_HALF; dx++) for (let dz = -BB_PLOT_HALF; dz <= BB_PLOT_HALF; dz++) {
      for (let dy = 1; dy < 30; dy++) world.setBlock(p.x + dx, y + dy, p.z + dz, 0);
    }
  }
  world.protectMode = true;
  try {
    for (const p of BB_PLOTS) {
      // Floor + rim
      for (let dx = -6; dx <= 6; dx++) for (let dz = -6; dz <= 6; dz++) {
        const onEdge = Math.abs(dx) === 6 || Math.abs(dz) === 6;
        world.setBlock(p.x + dx, y, p.z + dz, onEdge ? p.rim : p.floor);
      }
      // Knee walls
      for (let dx = -6; dx <= 6; dx++) {
        world.setBlock(p.x + dx, y + 1, p.z - 6, p.rim);
        world.setBlock(p.x + dx, y + 1, p.z + 6, p.rim);
      }
      for (let dz = -6; dz <= 6; dz++) {
        world.setBlock(p.x - 6, y + 1, p.z + dz, p.rim);
        world.setBlock(p.x + 6, y + 1, p.z + dz, p.rim);
      }
      // Corner pillars + glowstone caps
      for (const [dx, dz] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) {
        for (let h = 1; h <= 2; h++) world.setBlock(p.x + dx, y + h, p.z + dz, p.rim);
        world.setBlock(p.x + dx, y + 3, p.z + dz, 22);
      }
      // Plot marker + decorative theme touches.
      world.setBlock(p.x - 5, y + 1, p.z - 5, p.marker);
      if (p.theme === "grass")  { world.setBlock(p.x + 5, y + 1, p.z + 5, 30); world.setBlock(p.x - 4, y + 1, p.z + 4, 31); }
      if (p.theme === "desert") { world.setBlock(p.x + 5, y + 1, p.z + 5, 45); world.setBlock(p.x - 4, y + 1, p.z + 4, 168); }
      if (p.theme === "snow")   { world.setBlock(p.x + 5, y + 1, p.z + 5, 28); }
      if (p.theme === "nether") { world.setBlock(p.x + 5, y + 1, p.z + 5, 22); }
    }
  } finally {
    world.protectMode = false;
  }
}

/**
 * Build a Build-Battle arena: a centre spawn platform plus four 12×12
 * grass plots ringed in sandstone, separated by walking paths. Each plot
 * has a small marker so players know which is theirs.
 */
export function buildBuildBattle(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  return withProtection(world, () => {
    const cx = BB_CX, cz = BB_CZ, y = BB_FLOOR_Y;
    // ── Central spawn rotunda ──
    // Octagonal pad in stone-brick with a glowstone ring on the rim and a
    // diamond-block centerpiece so the spawn reads instantly from any plot.
    const SR = 4;
    for (let dx = -SR; dx <= SR; dx++) for (let dz = -SR; dz <= SR; dz++) {
      const d = Math.hypot(dx, dz);
      if (d > SR + 0.2) continue;
      // Stone brick + mossy cobble accents for a worn marble feel.
      const onRing = d > SR - 0.6;
      world.setBlock(cx + dx, y, cz + dz, onRing ? 17 : 26);
    }
    world.setBlock(cx, y + 1, cz, 41);   // diamond pillar
    world.setBlock(cx, y + 2, cz, 41);
    world.setBlock(cx, y + 3, cz, 22);   // glowstone capstone — lights the lobby
    // 4 corner glowstone braziers on the rotunda rim
    for (const [bx, bz] of [[-3, -3], [3, -3], [-3, 3], [3, 3]]) {
      world.setBlock(cx + bx, y + 1, cz + bz, 12); // brick base
      world.setBlock(cx + bx, y + 2, cz + bz, 22); // glowstone flame
    }
    // ── Four 12×12 build plots, each themed differently ──
    // Themes give players something to react to — grass plot, sand plot,
    // snow plot, nether plot — so a hot pink palette next to a beach
    // doesn't blend together visually.
    const plots = [
      { x: cx - 22, z: cz - 22, marker: 14, floor: 1,   rim: 5,   theme: "grass"  }, // grass + oak
      { x: cx + 22, z: cz - 22, marker: 15, floor: 4,   rim: 27,  theme: "desert" }, // sand + sandstone
      { x: cx - 22, z: cz + 22, marker: 41, floor: 23,  rim: 24,  theme: "snow"   }, // snow + ice rim
      { x: cx + 22, z: cz + 22, marker: 40, floor: 48,  rim: 150, theme: "nether" }, // netherrack + nether brick
    ];
    for (const p of plots) {
      // 13×13 plot with themed rim + themed interior floor.
      for (let dx = -6; dx <= 6; dx++) for (let dz = -6; dz <= 6; dz++) {
        const onEdge = Math.abs(dx) === 6 || Math.abs(dz) === 6;
        world.setBlock(p.x + dx, y, p.z + dz, onEdge ? p.rim : p.floor);
      }
      // Short knee wall (1 high) so plots stay distinct without blocking view.
      for (let dx = -6; dx <= 6; dx++) {
        world.setBlock(p.x + dx, y + 1, p.z - 6, p.rim);
        world.setBlock(p.x + dx, y + 1, p.z + 6, p.rim);
      }
      for (let dz = -6; dz <= 6; dz++) {
        world.setBlock(p.x - 6, y + 1, p.z + dz, p.rim);
        world.setBlock(p.x + 6, y + 1, p.z + dz, p.rim);
      }
      // Corner pillars (3 tall) with a glowstone lamp so each plot is lit.
      for (const [dx, dz] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) {
        for (let h = 1; h <= 2; h++) world.setBlock(p.x + dx, y + h, p.z + dz, p.rim);
        world.setBlock(p.x + dx, y + 3, p.z + dz, 22);  // glowstone lantern top
      }
      // Plot-marker block — coloured material lets you pick "yours" at a glance.
      world.setBlock(p.x - 5, y + 1, p.z - 5, p.marker);
      // Decorative theme touch — one flower / cactus / shrub per plot.
      if (p.theme === "grass")  { world.setBlock(p.x + 5, y + 1, p.z + 5, 30); world.setBlock(p.x - 4, y + 1, p.z + 4, 31); }
      if (p.theme === "desert") { world.setBlock(p.x + 5, y + 1, p.z + 5, 45); world.setBlock(p.x - 4, y + 1, p.z + 4, 168); }
      if (p.theme === "snow")   { world.setBlock(p.x + 5, y + 1, p.z + 5, 28); }
      if (p.theme === "nether") { world.setBlock(p.x + 5, y + 1, p.z + 5, 22); }
    }
    // ── Sandstone paths from centre to each plot (themed by destination) ──
    const pathOff: Array<[number, number, number]> = [
      [-1, -1, 27], [1, -1, 27], [-1, 1, 27], [1, 1, 27],
    ];
    for (const [sx, sz, mat] of pathOff) {
      for (let t = 5; t < 17; t++) {
        world.setBlock(cx + sx * t,     y, cz + sz * t, mat);
        world.setBlock(cx + sx * t + 1, y, cz + sz * t, mat);
      }
    }
    return { spawnX: cx + 0.5, spawnY: y + 1.001, spawnZ: cz + 0.5 };
  });
}

/**
 * Build a Hide-and-Seek arena: a circular grass island ringed in sand, with
 * deterministic trees and four small wooden huts dotted around. Trees and
 * huts give the seekers' targets places to actually hide.
 */
export function buildHideAndSeek(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  return withProtection(world, () => {
    const cx = 128, cz = 128, y = 38;
    const R = 36;
    // ── Circular grass island ──
    // Patchy surface: most grass, but ~12% dirt, scattered tall grass blades
    // and flowers for a real-meadow texture (the old uniform-grass slab was
    // too sterile). Sand around the rim simulates a beach.
    for (let dx = -R; dx <= R; dx++) for (let dz = -R; dz <= R; dz++) {
      const d = Math.hypot(dx, dz);
      if (d > R) continue;
      const top = d > R - 1.4 ? 4 : 1;  // sand rim, grass interior
      world.setBlock(cx + dx, y, cz + dz, top);
      if (top === 1) world.setBlock(cx + dx, y - 1, cz + dz, 2); // dirt sub
      // Decorate the grass area only — sparse flowers + tall grass.
      if (top === 1) {
        const hash = ((dx * 73856093) ^ (dz * 19349663)) >>> 0;
        if ((hash & 31) === 0) world.setBlock(cx + dx, y + 1, cz + dz, 30); // red flower
        else if ((hash & 31) === 5) world.setBlock(cx + dx, y + 1, cz + dz, 31); // yellow
        else if ((hash & 15) === 7) world.setBlock(cx + dx, y + 1, cz + dz, 32); // tall grass
      }
    }
    // ── Small pond (decorative water hazard you can hide behind) ──
    const pond: Array<[number, number]> = [[8, -2], [9, -2], [10, -2], [8, -1], [9, -1], [10, -1], [11, -1], [9, 0], [10, 0]];
    for (const [px, pz] of pond) {
      world.setBlock(cx + px, y,     cz + pz, 7);   // water
      world.setBlock(cx + px, y - 1, cz + pz, 2);   // dirt bed
    }
    // Sandy beach around the pond
    for (const [px, pz] of [[7, -1], [7, 0], [11, 0], [11, -2], [8, -3], [10, -3]] as [number, number][]) {
      world.setBlock(cx + px, y, cz + pz, 4);
    }
    // ── Trees (deterministic spread, mix of oak + spruce) ──
    const trees: Array<[number, number, "oak" | "spruce"]> = [
      [-22, -18, "oak"], [-10, -25, "oak"], [4, -28, "spruce"], [18, -22, "oak"], [26, -10, "spruce"],
      [-28, 0, "oak"],   [-16, 6, "spruce"],   [-14, 14, "oak"],  [22, 18, "oak"],   [-6, 22, "spruce"],
      [14, 26, "oak"],   [28, -6, "oak"],   [0, 28, "spruce"],   [-26, 14, "oak"],
    ];
    for (const [tx, tz, kind] of trees) {
      if (kind === "spruce") placeSpruceTree(world, cx + tx, y + 1, cz + tz);
      else                   placeOakTree(world, cx + tx, y + 1, cz + tz);
    }
    // Scattered boulder clusters — short stone bumps the seeker has to clear.
    const boulders: Array<[number, number]> = [[-30, -4], [22, -26], [-4, -24], [30, 16], [-20, 24], [10, -10]];
    for (const [bx, bz] of boulders) placeBoulder(world, cx + bx, y + 1, cz + bz);
    // ── Four small huts — varied themes ──
    placeSmallHut(world, cx - 14, y + 1, cz - 8,  "oak");
    placeSmallHut(world, cx + 12, y + 1, cz - 14, "spruce");
    placeSmallHut(world, cx + 16, y + 1, cz + 8,  "stone");
    placeSmallHut(world, cx - 18, y + 1, cz + 12, "oak");
    // Tiny mushroom patch in the south-east corner — extra hiding spots.
    for (const [mx, mz] of [[18, -2], [20, -3], [19, -1]] as [number, number][]) {
      world.setBlock(cx + mx, y + 1, cz + mz, 34);
    }
    return { spawnX: cx + 0.5, spawnY: y + 1.001, spawnZ: cz + 0.5 };
  });
}

/** Helper — 6-tall spruce with a tapered canopy. */
function placeSpruceTree(world: World, x: number, y: number, z: number) {
  for (let i = 0; i < 6; i++) world.setBlock(x, y + i, z, 28); // spruce log
  // Conical canopy: wide low, narrow high.
  const layers: Array<[number, number]> = [[3, 0], [3, 1], [2, 2], [2, 3], [1, 4], [1, 5]];
  for (const [r, dy] of layers) {
    for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) {
      if (dx === 0 && dz === 0) continue;
      if (Math.abs(dx) + Math.abs(dz) > r + 1) continue;
      world.setBlock(x + dx, y + dy + 1, z + dz, 29);
    }
  }
}

/** Helper — small stone+mossy-cobble boulder cluster, ~3 blocks across. */
function placeBoulder(world: World, x: number, y: number, z: number) {
  world.setBlock(x,     y, z,     3);  // stone
  world.setBlock(x + 1, y, z,     17); // mossy
  world.setBlock(x,     y, z + 1, 17);
  world.setBlock(x + 1, y, z + 1, 3);
  world.setBlock(x,     y + 1, z, 9);  // cobble caps
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

/** Helper — 4×4 themed hut with a door slot and a glowstone interior light,
 *  used by Hide and Seek. Three themes:
 *    "oak"    → plank walls, oak-log roof
 *    "spruce" → spruce-log walls, spruce-log roof, mossier feel
 *    "stone"  → cobble walls, stone-brick roof
 *  Each leaves a 1×2 doorway on the +Z side so seekers can peek inside. */
function placeSmallHut(world: World, x: number, y: number, z: number, theme: "oak" | "spruce" | "stone" = "oak") {
  const wall   = theme === "stone" ? 9  : theme === "spruce" ? 28 : 8;
  const floor  = theme === "stone" ? 26 : 8;
  const roof   = theme === "stone" ? 26 : theme === "spruce" ? 28 : 5;
  // Plank floor
  for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
    world.setBlock(x + dx, y - 1, z + dz, floor);
  }
  // Walls 3 tall
  for (let h = 0; h < 3; h++) {
    for (let dx = -2; dx <= 2; dx++) {
      world.setBlock(x + dx, y + h, z - 2, wall);
      world.setBlock(x + dx, y + h, z + 2, wall);
    }
    for (let dz = -2; dz <= 2; dz++) {
      world.setBlock(x - 2, y + h, z + dz, wall);
      world.setBlock(x + 2, y + h, z + dz, wall);
    }
  }
  // Doorway + window on opposite wall.
  world.setBlock(x,     y,     z + 2, 0);
  world.setBlock(x,     y + 1, z + 2, 0);
  world.setBlock(x,     y + 1, z - 2, 11); // glass window
  // Roof.
  for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
    world.setBlock(x + dx, y + 3, z + dz, roof);
  }
  // Glowstone tucked under the roof so the interior is lit.
  world.setBlock(x, y + 2, z, 22);
}

/** Build a Bedwars-style world: small island arena, central diamond pile + generators. */
export function buildBedwars(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  return withProtection(world, () => buildBedwarsInner(world));
}
function buildBedwarsInner(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
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
  return withProtection(world, () => buildParkourInner(world));
}
function buildParkourInner(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
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
  // No protection — the whole point of OneBlock is breaking the central
  // block over and over to summon new ones.
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

/**
 * Shooter FFA — flat arena with cover walls and elevated catwalks.
 * Players spawn on a central platform, run for cover, gunfight with bows.
 */
/** Names ordered to match the server's MODE_MAPS.shooter pool. */
export const SHOOTER_MAPS = ["arena", "warehouse", "courtyard"] as const;

export function buildShooter(world: World, mapIndex = 0): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  return withProtection(world, () => {
    const cx = 128, cz = 128, y = 40;
    const R = 30;
    const map = SHOOTER_MAPS[mapIndex % SHOOTER_MAPS.length];
    // Per-map material palette. Each pack has 6 slots so we can do
    // floor / wall / pillar / accent / trim / light without ifs everywhere.
    const palette = map === "warehouse"
      ? { floor: 8,   wall: 28,  pillar: 17, accent: 39,  trim: 5,   light: 22, sky: false }
      : map === "courtyard"
      ? { floor: 1,   wall: 27,  pillar: 12, accent: 40,  trim: 167, light: 157, sky: true  }
      :                  /* arena: */
        { floor: 26,  wall: 9,   pillar: 151, accent: 41, trim: 26,  light: 22, sky: false };
    // ── Outer ring (1-block trim band) ──
    // Gives the arena a finished "stadium" edge instead of just dropping
    // off into the void. Trim color matches the per-map theme.
    for (let dx = -R - 1; dx <= R + 1; dx++) for (let dz = -R - 1; dz <= R + 1; dz++) {
      const onRim = Math.abs(dx) === R + 1 || Math.abs(dz) === R + 1;
      if (onRim) world.setBlock(cx + dx, y, cz + dz, palette.trim);
    }
    // ── Floor ──
    for (let dx = -R; dx <= R; dx++) for (let dz = -R; dz <= R; dz++) {
      const onEdge = Math.abs(dx) === R || Math.abs(dz) === R;
      world.setBlock(cx + dx, y, cz + dz, onEdge ? palette.trim : palette.floor);
    }
    // ── Floor pattern: every 6 blocks, lay a 1×1 accent tile so the floor
    //    isn't a monochrome slab. Subtle grid feels much nicer to traverse.
    for (let dx = -R + 3; dx <= R - 3; dx += 6) for (let dz = -R + 3; dz <= R - 3; dz += 6) {
      world.setBlock(cx + dx, y, cz + dz, palette.pillar);
    }
    // ── Boundary wall (5 tall) with crenellation on top row ──
    for (let dx = -R; dx <= R; dx++) for (let dy = 1; dy <= 5; dy++) {
      const top = dy === 5;
      // Crenellation: skip every other top block to give the top a castle
      // silhouette. Skip pattern shifts so corners stay solid.
      const skip = top && ((dx + 1000) % 2 === 0);
      if (skip) continue;
      world.setBlock(cx + dx, y + dy, cz - R, palette.wall);
      world.setBlock(cx + dx, y + dy, cz + R, palette.wall);
    }
    for (let dz = -R + 1; dz <= R - 1; dz++) for (let dy = 1; dy <= 5; dy++) {
      const top = dy === 5;
      const skip = top && ((dz + 1000) % 2 === 0);
      if (skip) continue;
      world.setBlock(cx - R, y + dy, cz + dz, palette.wall);
      world.setBlock(cx + R, y + dy, cz + dz, palette.wall);
    }
    // ── Corner watch-towers (3-block radius pillars, 6 tall) ──
    // Gives sightlines from elevation, lights the corners, breaks the wall
    // monotony. Each tower has a glowstone lamp on top.
    const towers: [number, number][] = [[-R, -R], [R, -R], [-R, R], [R, R]];
    for (const [tx, tz] of towers) {
      for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
        for (let h = 1; h <= 6; h++) world.setBlock(cx + tx + dx, y + h, cz + tz + dz, palette.pillar);
      }
      world.setBlock(cx + tx, y + 7, cz + tz, palette.light);
    }
    // ── Wall-mounted torches along the inner perimeter every 8 blocks ──
    for (let dx = -R + 6; dx < R - 5; dx += 8) {
      world.setBlock(cx + dx, y + 3, cz - R + 1, 42);   // torch on inner face
      world.setBlock(cx + dx, y + 3, cz + R - 1, 42);
    }
    for (let dz = -R + 6; dz < R - 5; dz += 8) {
      world.setBlock(cx - R + 1, y + 3, cz + dz, 42);
      world.setBlock(cx + R - 1, y + 3, cz + dz, 42);
    }
    // ── Cover placement varies per map for tactical variety ──
    const covers: Array<[number, number, "wall" | "pillar" | "block"]> =
      map === "warehouse"
        ? [[-12, -10, "wall"], [12, 10, "wall"], [-12, 10, "wall"], [12, -10, "wall"],
           [0, 0, "pillar"], [-18, 0, "pillar"], [18, 0, "pillar"], [0, -18, "pillar"], [0, 18, "pillar"],
           [-6, -6, "block"], [6, 6, "block"], [-6, 6, "block"], [6, -6, "block"]]
        : map === "courtyard"
        ? [[-15, 0, "wall"], [15, 0, "wall"], [0, -15, "wall"], [0, 15, "wall"],
           [-8, -8, "pillar"], [8, 8, "pillar"], [-8, 8, "pillar"], [8, -8, "pillar"],
           [-20, -10, "block"], [20, 10, "block"], [-20, 10, "block"], [20, -10, "block"]]
        : [[-18, -4, "wall"], [16, -8, "pillar"], [-6, 12, "wall"], [4, -16, "pillar"],
           [12, 14, "wall"], [-12, -14, "pillar"], [18, 4, "pillar"], [-20, 8, "wall"],
           [0, 20, "wall"], [0, -20, "wall"], [22, 0, "pillar"], [-22, 0, "pillar"],
           [-10, 0, "block"], [10, 0, "block"], [0, -8, "block"], [0, 8, "block"]];
    for (const [dx, dz, kind] of covers) {
      if (kind === "pillar") {
        for (let py = 1; py <= 3; py++) {
          world.setBlock(cx + dx,     y + py, cz + dz,     palette.pillar);
          world.setBlock(cx + dx + 1, y + py, cz + dz,     palette.pillar);
          world.setBlock(cx + dx,     y + py, cz + dz + 1, palette.pillar);
          world.setBlock(cx + dx + 1, y + py, cz + dz + 1, palette.pillar);
        }
        // Cap with trim block so pillars don't look like raw stacks.
        world.setBlock(cx + dx,     y + 4, cz + dz,     palette.trim);
        world.setBlock(cx + dx + 1, y + 4, cz + dz,     palette.trim);
        world.setBlock(cx + dx,     y + 4, cz + dz + 1, palette.trim);
        world.setBlock(cx + dx + 1, y + 4, cz + dz + 1, palette.trim);
      } else if (kind === "block") {
        // 1×1 chest-high cover — perfect for crouching behind.
        for (let py = 1; py <= 2; py++) world.setBlock(cx + dx, y + py, cz + dz, palette.accent);
      } else {
        // 5-long wall, 3 tall, with a single accent block in the middle.
        for (let wx = 0; wx < 5; wx++) for (let wy = 1; wy <= 3; wy++) {
          const mid = wx === 2 && wy === 2;
          world.setBlock(cx + dx + wx, y + wy, cz + dz, mid ? palette.accent : palette.pillar);
        }
      }
    }
    // ── Centre spawn pad — raised 1, accent ring, glowstone heart ──
    for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
      const onRing = Math.abs(dx) === 2 || Math.abs(dz) === 2;
      world.setBlock(cx + dx, y + 1, cz + dz, onRing ? palette.accent : palette.light);
    }
    return { spawnX: cx + 0.5, spawnY: y + 2.001, spawnZ: cz + 0.5 };
  });
}

/**
 * Infection — start everyone on a survivor side. First infected spawns
 * with the zombie skin (force-applied client-side). Generates a fenced
 * compound + a few buildings to barricade.
 */
export function buildInfection(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  return withProtection(world, () => {
    const cx = 128, cz = 128, y = 40;
    const R = 40;
    // ── Ruined-village grass ground with patches of dirt + gravel ──
    for (let dx = -R; dx <= R; dx++) for (let dz = -R; dz <= R; dz++) {
      const d = Math.hypot(dx, dz);
      if (d > R) continue;
      // Patchy decay — hash-based but deterministic.
      const hash = ((dx * 73856093) ^ (dz * 19349663)) >>> 0;
      let top = 1; // grass default
      if ((hash & 15) < 3) top = 2;        // ~20% dirt
      else if ((hash & 31) === 0) top = 10; // ~3% gravel scar
      world.setBlock(cx + dx, y, cz + dz, top);
      world.setBlock(cx + dx, y - 1, cz + dz, 2);
      // Sparse dead bushes + tall grass for an abandoned vibe.
      if (top === 1 && (hash & 63) === 17) world.setBlock(cx + dx, y + 1, cz + dz, 168);
      if (top === 1 && (hash & 63) === 33) world.setBlock(cx + dx, y + 1, cz + dz, 32);
    }
    // ── Outer ring: cobblestone + mossy-cobble wall, 4 tall, with gaps ──
    // Spaced gaps = "the fence is broken in places" feel, encourages routing.
    for (let a = 0; a < Math.PI * 2; a += 0.05) {
      const x = Math.round(Math.cos(a) * R);
      const z = Math.round(Math.sin(a) * R);
      // ~15% chance to leave a single-block gap.
      const gap = (((x * 31 + z * 17) & 31) < 5);
      if (gap) continue;
      for (let h = 1; h <= 4; h++) {
        const blk = h === 1 ? 17 : (h === 4 ? 17 : 9);  // bottom + cap are mossy, mid is cobble
        world.setBlock(cx + x, y + h, cz + z, blk);
      }
    }
    // ── Central plaza ── stone-brick base with a glowstone well in the middle
    // so the lobby reads clearly. Slight mossy decay for tone.
    for (let dx = -5; dx <= 5; dx++) for (let dz = -5; dz <= 5; dz++) {
      const d = Math.hypot(dx, dz);
      if (d > 5.2) continue;
      const blk = ((dx * 13 + dz * 7) & 15) === 0 ? 17 : 26;
      world.setBlock(cx + dx, y, cz + dz, blk);
    }
    // Central beacon — glowstone well + brick lip — visible from the rim
    world.setBlock(cx, y, cz, 22);
    for (const [bx, bz] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) world.setBlock(cx + bx, y, cz + bz, 12);
    // ── Four safe houses (themed: oak, stone, sandstone, spruce) ──
    placeSafeHouse(world, cx - 18, y + 1, cz - 18, "oak");
    placeSafeHouse(world, cx + 18, y + 1, cz - 18, "stone");
    placeSafeHouse(world, cx - 18, y + 1, cz + 18, "sandstone");
    placeSafeHouse(world, cx + 18, y + 1, cz + 18, "spruce");
    // ── Path planks from plaza to each safehouse (gravel road) ──
    for (const [tx, tz] of [[-18, -18], [18, -18], [-18, 18], [18, 18]] as [number, number][]) {
      const steps = 12;
      for (let s = 1; s < steps; s++) {
        const fx = cx + Math.round((tx * s) / steps);
        const fz = cz + Math.round((tz * s) / steps);
        world.setBlock(fx, y, fz, 10);
      }
    }
    // ── Scattered overturned-cart / loot stash decorations ──
    placeWreck(world, cx - 8, y + 1, cz + 4);
    placeWreck(world, cx + 6, y + 1, cz - 6);
    placeWreck(world, cx + 12, y + 1, cz + 14);
    return { spawnX: cx + 0.5, spawnY: y + 1.001, spawnZ: cz + 0.5 };
  });
}

/** Themed safe-house variant for Infection — 5×5 footprint, 4 tall, with a
 *  doorway on the inside-facing wall and a glowstone interior light. The
 *  roof is broken (random missing tiles) to read as a ruin. */
function placeSafeHouse(world: World, x: number, y: number, z: number, theme: "oak" | "stone" | "sandstone" | "spruce") {
  const wall = theme === "oak"       ? 8
             : theme === "stone"     ? 9
             : theme === "sandstone" ? 27
                                     : 28;
  const floor = theme === "stone" ? 26 : (theme === "sandstone" ? 27 : 8);
  const roof  = theme === "oak" ? 5 : (theme === "spruce" ? 28 : wall);
  // Floor.
  for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
    world.setBlock(x + dx, y - 1, z + dz, floor);
  }
  // 3-tall walls.
  for (let h = 0; h < 3; h++) {
    for (let dx = -2; dx <= 2; dx++) {
      world.setBlock(x + dx, y + h, z - 2, wall);
      world.setBlock(x + dx, y + h, z + 2, wall);
    }
    for (let dz = -2; dz <= 2; dz++) {
      world.setBlock(x - 2, y + h, z + dz, wall);
      world.setBlock(x + 2, y + h, z + dz, wall);
    }
  }
  // Doorway on +Z side.
  world.setBlock(x, y,     z + 2, 0);
  world.setBlock(x, y + 1, z + 2, 0);
  // Window cut-outs (glass) on other walls.
  world.setBlock(x - 2, y + 1, z, 11);
  world.setBlock(x + 2, y + 1, z, 11);
  // Broken roof — some tiles missing for the "ruined" look.
  for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
    const hash = ((x + dx) * 31 + (z + dz) * 17 + 7) >>> 0;
    if ((hash & 7) === 0) continue;  // ~12% missing
    world.setBlock(x + dx, y + 3, z + dz, roof);
  }
  // Glowstone tucked under the centre — small interior light.
  world.setBlock(x, y + 2, z, 22);
}

/** A small wreck (overturned cart-ish): mix of logs, planks, a glowing
 *  lantern. Pure decor. */
function placeWreck(world: World, x: number, y: number, z: number) {
  world.setBlock(x,     y, z,     5);
  world.setBlock(x + 1, y, z,     5);
  world.setBlock(x,     y, z + 1, 8);
  world.setBlock(x + 1, y + 1, z, 8);
  world.setBlock(x,     y + 1, z + 1, 22);  // glowstone in the gap
}

/**
 * Squid Games — lobby with 5 minigame doors arranged in a hexagonal
 * spawn ring. The minigames themselves are sub-arenas built around the
 * lobby; for v1 they share a common spawn and visual theming.
 *
 * Minigames (vanilla-ish stand-ins): Red Light / Green Light, Honeycomb,
 * Tug of War, Glass Stepping Stones, Squid Game (final).
 */
export function buildSquidGames(world: World): { spawnX: number; spawnY: number; spawnZ: number } {
  world.clearAll();
  return withProtection(world, () => {
    const cx = 128, cz = 128, y = 40;
    // ── Central pink-wool lobby ──
    // The arena is shaped like a stylised "○△□" stage: a big pink-wool plaza
    // ringed with white-wool corridors, with the 5 minigame zones spread
    // around the outside so the player can SEE each one even before they
    // start. We keep them all at the same Y so falls aren't fatal in non-
    // bridge phases (the glass-bridge zone has a deliberate drop).
    const R = 14;
    for (let dx = -R; dx <= R; dx++) for (let dz = -R; dz <= R; dz++) {
      const d = Math.hypot(dx, dz);
      if (d > R) continue;
      // Concentric ring pattern in red+white wool for the iconic look.
      const ring = Math.floor(d / 2);
      const blk = (ring % 2 === 0) ? 15 : 14;
      world.setBlock(cx + dx, y, cz + dz, blk);
    }
    // Central squid emblem — diamond-block silhouette (○△□ stand-in).
    for (const [dx, dz] of [[0, 0], [0, -1], [0, 1], [-1, 0], [1, 0]]) {
      world.setBlock(cx + dx, y, cz + dz, 41);
    }
    // ── Outer perimeter wall (pink + white wool, 5 tall) ──
    // Crenellated top so it reads as a stadium.
    const outerR = R + 2;
    for (let a = 0; a < Math.PI * 2; a += 0.04) {
      const x = Math.round(Math.cos(a) * outerR);
      const z = Math.round(Math.sin(a) * outerR);
      for (let h = 1; h <= 5; h++) {
        const top = h === 5;
        const skip = top && (((x * 7 + z * 3) & 1) === 0);
        if (skip) continue;
        const blk = ((x + z) & 1) ? 15 : 14;
        world.setBlock(cx + x, y + h, cz + z, blk);
      }
    }
    // ── Five "door" markers at the cardinal/intercardinal compass points ──
    // Each is a numbered + colour-coded pillar with a sign-style accent on
    // top so the contestants can rally near "their" door.
    const doors = 5;
    const doorColors = [40, 41, 22, 39, 170];  // gold/diamond/glowstone/iron/coal
    for (let i = 0; i < doors; i++) {
      const ang = (i / doors) * Math.PI * 2 - Math.PI / 2;
      const dx = Math.round(Math.cos(ang) * (R - 2));
      const dz = Math.round(Math.sin(ang) * (R - 2));
      // 4-tall white-wool pillar with door colour cap.
      for (let h = 1; h <= 4; h++) {
        world.setBlock(cx + dx,     y + h, cz + dz,     14);
      }
      world.setBlock(cx + dx, y + 5, cz + dz, doorColors[i]);
      // Doormat block in front (red wool) to read the door footprint.
      const fx = Math.round(Math.cos(ang) * (R - 4));
      const fz = Math.round(Math.sin(ang) * (R - 4));
      world.setBlock(cx + fx, y, cz + fz, 15);
    }
    // ── North zone: Red Light Green Light "playing field" ──
    // Long sand strip stretching north, with a brown-wool "doll" tower at the
    // far end so the red-light/green-light fiction is legible from anywhere
    // on the field. Players run from -Z end (start line) to +Z (doll).
    {
      const startZ = cz - R - 4;
      const fieldLen = 30;
      for (let dx = -8; dx <= 8; dx++) for (let dz = 0; dz < fieldLen; dz++) {
        world.setBlock(cx + dx, y, startZ - dz, 4); // sand field
      }
      // Start line (white wool stripe) + finish line (red wool stripe).
      for (let dx = -8; dx <= 8; dx++) {
        world.setBlock(cx + dx, y, startZ, 14);
        world.setBlock(cx + dx, y, startZ - fieldLen + 1, 15);
      }
      // The doll: a 5×7×3 wood-and-wool figure at the far end, facing the players.
      const dollX = cx, dollZ = startZ - fieldLen - 3;
      placeRlglDoll(world, dollX, y + 1, dollZ);
    }
    // ── East zone: Honeycomb minigame (3 numbered shape pads) ──
    {
      const baseX = cx + R + 6, baseZ = cz;
      // Platform.
      for (let dx = 0; dx < 16; dx++) for (let dz = -6; dz <= 6; dz++) {
        world.setBlock(baseX + dx, y, baseZ + dz, 167); // hay floor (warm honeycomb tone)
      }
      // Three numbered pads (shape 1/2/3 → coloured wool, with glowstone underlay).
      const pads = [
        { dx: 4,  dz: -4, top: 40, label: 1 },
        { dx: 8,  dz:  0, top: 41, label: 2 },
        { dx: 12, dz:  4, top: 39, label: 3 },
      ];
      for (const p of pads) {
        for (let ax = -1; ax <= 1; ax++) for (let az = -1; az <= 1; az++) {
          world.setBlock(baseX + p.dx + ax, y + 1, baseZ + p.dz + az, p.top);
        }
        world.setBlock(baseX + p.dx, y + 2, baseZ + p.dz, 22); // glowstone marker on top
      }
    }
    // ── South zone: Tug of War rope and team pads ──
    {
      const baseZ = cz + R + 4;
      // Red team mat
      for (let dx = -8; dx <= -4; dx++) for (let dz = 0; dz < 5; dz++) {
        world.setBlock(cx + dx, y, baseZ + dz, 15);
      }
      // Blue team mat (proxy: white wool)
      for (let dx = 4; dx <= 8; dx++) for (let dz = 0; dz < 5; dz++) {
        world.setBlock(cx + dx, y, baseZ + dz, 14);
      }
      // Rope (planks) connecting them.
      for (let dx = -3; dx <= 3; dx++) world.setBlock(cx + dx, y, baseZ + 2, 8);
      // Centre flag — iron block on a small pillar.
      world.setBlock(cx, y + 1, baseZ + 2, 39);
      world.setBlock(cx, y + 2, baseZ + 2, 22);
    }
    // ── West zone: Marbles (small "alley" with two stools) ──
    {
      const baseX = cx - R - 6, baseZ = cz;
      for (let dx = -10; dx <= 0; dx++) for (let dz = -3; dz <= 3; dz++) {
        world.setBlock(baseX + dx, y, baseZ + dz, 26); // stonebrick alley
      }
      // Two opposing stools (player A + player B).
      world.setBlock(baseX - 2, y + 1, baseZ - 1, 5);
      world.setBlock(baseX - 2, y + 1, baseZ + 1, 5);
      world.setBlock(baseX - 8, y + 1, baseZ - 1, 5);
      world.setBlock(baseX - 8, y + 1, baseZ + 1, 5);
      // Lanterns at each end.
      world.setBlock(baseX - 1, y + 2, baseZ, 157); // sea lantern
      world.setBlock(baseX - 9, y + 2, baseZ, 157);
    }
    // ── Glass Bridge — to the far north-east, raised 4 high ──
    {
      const baseX = cx + 20, baseZ = cz - R - 6;
      // Support pillars at the start (so the bridge is clearly elevated).
      for (let h = 0; h <= 4; h++) {
        world.setBlock(baseX, y + h, baseZ, 151); // quartz column
        world.setBlock(baseX + 2, y + h, baseZ, 151);
      }
      // 6 pairs of glass panels. Alternating safe/cracked is just decoration —
      // the server-side mechanic decides at runtime which side eliminates.
      for (let s = 0; s < 6; s++) {
        const bz = baseZ - 2 - s * 2;
        world.setBlock(baseX,     y + 4, bz, 11); // glass
        world.setBlock(baseX + 2, y + 4, bz, 11);
      }
      // Finish platform with a gold-block reward marker.
      for (let dx = 0; dx <= 2; dx++) for (let dz = -1; dz <= 1; dz++) {
        world.setBlock(baseX + dx, y + 4, baseZ - 16 + dz, 151);
      }
      world.setBlock(baseX + 1, y + 5, baseZ - 16, 40);
      world.setBlock(baseX + 1, y + 6, baseZ - 16, 22);
    }
    // ── Pink corridor sign: glowstone-lit perimeter so the lobby is bright ──
    for (let dx = -R + 3; dx <= R - 3; dx += 4) {
      world.setBlock(cx + dx, y + 1, cz - R + 1, 22);
      world.setBlock(cx + dx, y + 1, cz + R - 1, 22);
    }
    for (let dz = -R + 3; dz <= R - 3; dz += 4) {
      world.setBlock(cx - R + 1, y + 1, cz + dz, 22);
      world.setBlock(cx + R - 1, y + 1, cz + dz, 22);
    }
    return { spawnX: cx + 0.5, spawnY: y + 1.001, spawnZ: cz + 0.5 };
  });
}

/** The iconic Squid Games doll: an oversized blocky figure (yellow shirt,
 *  orange dress, brown hair, pink head) at the far end of the RLGL field.
 *  Pure decoration — the actual "watching" state is server-driven. */
function placeRlglDoll(world: World, x: number, y: number, z: number) {
  // Dress (orange clay) — 3 wide × 3 tall trunk.
  for (let dx = -1; dx <= 1; dx++) for (let dy = 0; dy < 3; dy++) {
    world.setBlock(x + dx, y + dy, z, 160);  // hardened clay (orange)
  }
  // Shirt (yellow → use hay) — top row.
  for (let dx = -1; dx <= 1; dx++) world.setBlock(x + dx, y + 3, z, 167);
  // Head — pink (red wool stand-in), 3×3×3 with a 1-block neck.
  world.setBlock(x, y + 4, z, 8); // plank "neck"
  for (let dx = -1; dx <= 1; dx++) for (let dy = 5; dy < 8; dy++) for (let dz = -1; dz <= 1; dz++) {
    world.setBlock(x + dx, y + dy, z + dz, 15);
  }
  // Eyes (coal block) on the +Z face (toward the players).
  world.setBlock(x - 1, y + 6, z - 2, 170);
  world.setBlock(x + 1, y + 6, z - 2, 170);
  // Hair (brown — use mossy cobble).
  for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
    if (Math.abs(dx) === 2 || Math.abs(dz) === 2) world.setBlock(x + dx, y + 8, z + dz, 5);
  }
  // Arms (plank tubes hanging at sides).
  for (let dy = 1; dy < 3; dy++) {
    world.setBlock(x - 2, y + dy, z, 8);
    world.setBlock(x + 2, y + dy, z, 8);
  }
}

