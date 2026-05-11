import * as THREE from "three";

// Atlas: 16 columns × 16 rows of 32-px tiles → 512×512 image.
// Source PNGs from minecraft-assets-master/data/1.9 are 16-px and upscaled
// at atlas-build time. Rows 0..3 are block faces (T_*), rows 4..5 are item
// icons (T_I_*).
const ATLAS_SIZE = 512;
const TILE_SIZE = 32;
const COLS = ATLAS_SIZE / TILE_SIZE;

let _atlasTex: THREE.Texture | null = null;
let _liveAtlasCanvas: HTMLCanvasElement | null = null;
let _liveAtlasTex: THREE.CanvasTexture | null = null;

export interface BlockDef {
  faces: [number, number, number, number, number, number];
  transparent?: boolean;
  isWater?: boolean;
  isLeaf?: boolean;
  solid?: boolean;
  crossShape?: boolean;
  /** Tiny upright box at the bottom-centre of the cell, instead of a full
   *  block or a cross-shape. Used for torches — gives them a real-looking
   *  thin post + flame instead of filling the whole cell. */
  miniColumn?: boolean;
  hardness?: number;
  drop?: number;
  dropCount?: number;
  tool?: "any" | "axe" | "pickaxe" | "shovel" | "shears";
  /** Minimum tool tier needed for the block to drop. 1=wood, 2=stone, 3=iron, 4=diamond. Defaults to 1 when `tool` is set. */
  minToolTier?: number;
  emissive?: boolean;
  /** Override the inventory icon tile (defaults to faces[0]). Useful for blocks like beds where the side texture isn't a great hotbar icon. */
  iconTile?: number;
}

const T = (col: number, row: number) => col + row * COLS;
const all6 = (t: number): [number,number,number,number,number,number] => [t,t,t,t,t,t];

// Row 0
export const T_GRASS_TOP   = T(0, 0);
export const T_GRASS_SIDE  = T(1, 0);
export const T_DIRT        = T(2, 0);
export const T_STONE       = T(3, 0);
export const T_SAND        = T(4, 0);
export const T_LOG_SIDE    = T(5, 0);
export const T_LOG_TOP     = T(6, 0);
export const T_LEAVES      = T(7, 0);
export const T_WATER       = T(8, 0);
export const T_PLANKS      = T(9, 0);
export const T_COBBLE      = T(10, 0);
export const T_GRAVEL      = T(11, 0);
export const T_GLASS       = T(12, 0);
export const T_BRICK       = T(13, 0);
export const T_BOOKSHELF   = T(14, 0);
export const T_CRAFT_TOP   = T(15, 0);
// Row 1
export const T_GOLD_ORE    = T(0, 1);
export const T_IRON_ORE    = T(1, 1);
export const T_COAL_ORE    = T(2, 1);
export const T_DIAM_ORE    = T(3, 1);
export const T_GLOWSTONE   = T(4, 1);
export const T_SNOW        = T(5, 1);
export const T_ICE         = T(6, 1);
export const T_TNT_SIDE    = T(7, 1);
export const T_TNT_TOP     = T(8, 1);
export const T_OBSIDIAN    = T(9, 1);
export const T_WOOL_W      = T(10, 1);
export const T_WOOL_R      = T(11, 1);
export const T_MOSSY_COBB  = T(12, 1);
export const T_STONEBRICK  = T(13, 1);
export const T_SANDSTONE   = T(14, 1);
export const T_SANDSTONE_T = T(15, 1);
// Row 2
export const T_FLOWER_RED  = T(0, 2);
export const T_FLOWER_YEL  = T(1, 2);
export const T_TALLGRASS   = T(2, 2);
export const T_SAPLING     = T(3, 2);
export const T_MUSHROOM_R  = T(4, 2);
export const T_MUSHROOM_B  = T(5, 2);
export const T_CACTUS      = T(6, 2);
export const T_REEDS       = T(7, 2);
export const T_FIRE        = T(8, 2);
export const T_SPRUCE_SIDE = T(9, 2);
export const T_SPRUCE_TOP  = T(10, 2);
export const T_SPRUCE_LEAF = T(11, 2);
export const T_BIRCH_SIDE  = T(12, 2);
export const T_BIRCH_TOP   = T(13, 2);
export const T_BIRCH_LEAF  = T(14, 2);
export const T_IRON_BLOCK  = T(15, 2);
// Row 3
export const T_FURNACE_F   = T(0, 3);
export const T_FURNACE_S   = T(1, 3);
export const T_FURNACE_T   = T(2, 3);
export const T_FURNACE_ON  = T(3, 3);
export const T_DIAM_BLOCK  = T(4, 3);
export const T_GOLD_BLOCK  = T(5, 3);
export const T_COAL_BLOCK  = T(6, 3);
export const T_REDSTONE_O  = T(7, 3);
export const T_LAVA        = T(8, 3);
export const T_CRAFT_SIDE  = T(9, 3);
export const T_CRAFT_FRONT = T(10, 3);
export const T_CHEST_TOP   = T(11, 3);
export const T_LAPIS_ORE   = T(12, 3);
export const T_LAPIS_BLOCK = T(13, 3);
export const T_LADDER      = T(14, 3);
export const T_TORCH       = T(15, 3);

// ── Item icons (rows 4-5 of the atlas) ────────────────────────────────────
// IDs (column, row) match the order they're placed by build_mc_atlas.py.
export const T_I_COAL        = T(0, 4);
export const T_I_DIAMOND     = T(1, 4);
export const T_I_IRON_INGOT  = T(2, 4);
export const T_I_GOLD_INGOT  = T(3, 4);
export const T_I_STICK       = T(4, 4);
export const T_I_APPLE       = T(5, 4);
export const T_I_BREAD       = T(6, 4);
export const T_I_WOOD_PICK   = T(7, 4);
export const T_I_STONE_PICK  = T(8, 4);
export const T_I_IRON_PICK   = T(9, 4);
export const T_I_DIAM_PICK   = T(10, 4);
export const T_I_WOOD_AXE    = T(11, 4);
export const T_I_STONE_AXE   = T(12, 4);
export const T_I_IRON_AXE    = T(13, 4);
export const T_I_DIAM_AXE    = T(14, 4);
export const T_I_WOOD_SHOVEL = T(15, 4);
export const T_I_STONE_SHOVEL= T(0, 5);
export const T_I_IRON_SHOVEL = T(1, 5);
export const T_I_DIAM_SHOVEL = T(2, 5);
export const T_I_WOOD_SWORD  = T(3, 5);
export const T_I_STONE_SWORD = T(4, 5);
export const T_I_IRON_SWORD  = T(5, 5);
export const T_I_DIAM_SWORD  = T(6, 5);
export const T_I_BED         = T(7, 5);
export const T_I_WHEAT       = T(8, 5);
export const T_I_STRING      = T(9, 5);
export const T_I_FEATHER     = T(10, 5);
export const T_I_GUNPOWDER   = T(11, 5);
export const T_I_LEATHER     = T(12, 5);
export const T_I_BONE        = T(13, 5);
export const T_I_EGG         = T(14, 5);
export const T_I_ARROW       = T(15, 5);
// Row 6 — cooked food + raw food + mob drops
export const T_I_PORK_COOKED = T(0, 6);
export const T_I_BEEF_COOKED = T(1, 6);
export const T_I_CHK_COOKED  = T(2, 6);
export const T_I_GOLDEN_APPLE= T(3, 6);
export const T_I_CARROT      = T(4, 6);
export const T_I_POTATO      = T(5, 6);
export const T_I_POTATO_BAKED= T(6, 6);
export const T_I_MELON       = T(7, 6);
export const T_I_PUMPKIN_PIE = T(8, 6);
export const T_I_CAKE        = T(9, 6);
export const T_I_FISH_RAW    = T(10, 6);
export const T_I_FISH_COOKED = T(11, 6);
export const T_I_MUSH_STEW   = T(12, 6);
export const T_I_ROTTEN      = T(13, 6);
export const T_I_SPIDER_EYE  = T(14, 6);
export const T_I_SUGAR       = T(15, 6);
// Raw meat tiles — baked into previously-free atlas cells.
export const T_I_PORK_RAW    = T(10, 9);
export const T_I_BEEF_RAW    = T(13, 9);
export const T_I_CHK_RAW     = T(14, 11);
export const T_I_MUTTON_RAW  = T(15, 11);
// Row 7 — tools / utility
export const T_I_BUCKET      = T(0, 7);
export const T_I_BUCKET_W    = T(1, 7);
export const T_I_BUCKET_L    = T(2, 7);
export const T_I_BUCKET_M    = T(3, 7);
export const T_I_BOW         = T(4, 7);
export const T_I_FISHING_ROD = T(5, 7);
export const T_I_SHEARS      = T(6, 7);
export const T_I_COMPASS     = T(7, 7);
export const T_I_CLOCK       = T(8, 7);
export const T_I_FLINT_STEEL = T(9, 7);
export const T_I_BLAZE_ROD   = T(10, 7);
export const T_I_ENDER_PEARL = T(11, 7);
export const T_I_GHAST_TEAR  = T(12, 7);
export const T_I_GLOWDUST    = T(13, 7);
export const T_I_REDSTONE    = T(14, 7);
export const T_I_SLIMEBALL   = T(15, 7);
// Row 8 — armor
export const T_I_HELM_LEATHER = T(0, 8);
export const T_I_CHEST_LEATHER= T(1, 8);
export const T_I_LEGS_LEATHER = T(2, 8);
export const T_I_BOOTS_LEATHER= T(3, 8);
export const T_I_HELM_IRON    = T(4, 8);
export const T_I_CHEST_IRON   = T(5, 8);
export const T_I_LEGS_IRON    = T(6, 8);
export const T_I_BOOTS_IRON   = T(7, 8);
export const T_I_HELM_GOLD    = T(8, 8);
export const T_I_CHEST_GOLD   = T(9, 8);
export const T_I_LEGS_GOLD    = T(10, 8);
export const T_I_BOOTS_GOLD   = T(11, 8);
export const T_I_HELM_DIAM    = T(12, 8);
export const T_I_CHEST_DIAM   = T(13, 8);
export const T_I_LEGS_DIAM    = T(14, 8);
export const T_I_BOOTS_DIAM   = T(15, 8);
// Row 9 — misc
export const T_I_BOOK         = T(0, 9);
export const T_I_PAPER        = T(1, 9);
export const T_I_SNOWBALL     = T(2, 9);
export const T_I_SADDLE       = T(3, 9);
export const T_I_NAMETAG      = T(4, 9);
export const T_I_LEAD         = T(5, 9);
export const T_I_EMERALD      = T(6, 9);
export const T_I_MAGMA_CREAM  = T(7, 9);
export const T_I_NETHER_STAR  = T(8, 9);
export const T_I_XP_BOTTLE    = T(9, 9);
export const T_I_MINECART     = T(11, 9);
export const T_I_BOAT         = T(12, 9);
export const T_I_FIREWORKS    = T(14, 9);
export const T_I_FIRE_CHARGE  = T(15, 9);

// ── Rows 10-11: new block face tiles ──────────────────────────────────────
export const T_BEDROCK         = T(0, 10);
export const T_NETHERRACK      = T(1, 10);
export const T_SOUL_SAND       = T(2, 10);
export const T_NETHER_BRICK    = T(3, 10);
export const T_QUARTZ_TOP      = T(4, 10);
export const T_QUARTZ_SIDE     = T(5, 10);
export const T_END_STONE       = T(6, 10);
export const T_PRISMARINE      = T(7, 10);
export const T_PRISMARINE_DARK = T(8, 10);
export const T_PRISMARINE_BRICK= T(9, 10);
export const T_SEA_LANTERN     = T(10, 10);
export const T_IRON_BARS       = T(11, 10);
export const T_HARDENED_CLAY   = T(12, 10);
export const T_HARDENED_CLAY_O = T(13, 10);
export const T_HARDENED_CLAY_R = T(14, 10);
export const T_HARDENED_CLAY_B = T(15, 10);
export const T_MYCELIUM_TOP    = T(0, 11);
export const T_MYCELIUM_SIDE   = T(1, 11);
export const T_PACKED_ICE      = T(2, 11);
export const T_MELON_TOP       = T(3, 11);
export const T_MELON_SIDE      = T(4, 11);
export const T_PUMPKIN_TOP     = T(5, 11);
export const T_PUMPKIN_SIDE    = T(6, 11);
export const T_PUMPKIN_FACE    = T(7, 11);
export const T_HAY_TOP         = T(8, 11);
export const T_HAY_SIDE        = T(9, 11);
export const T_DEADBUSH        = T(10, 11);
export const T_DRAGON_EGG      = T(11, 11);
export const T_QUARTZ_ORE      = T(12, 11);
export const T_LAPIS_BLOCK_2   = T(13, 11);
// Old chest constants — kept for any code still referencing them, but
// we now use the freshly-baked chest textures at row 14 (12 = top, 14 =
// front, 15 = side). See scripts/bake_textures.py.
export const T_CHEST_SIDE      = T(15, 14);
export const T_CHEST_TOP_2     = T(12, 14);
export const T_CHEST_FRONT     = T(14, 14);

// ── Row 15: piston / lever / redstone (baked from minecraft-assets-master) ─
export const T_PISTON_SIDE     = T(0,  15);
export const T_PISTON_TOP      = T(1,  15);
export const T_PISTON_BOTTOM   = T(2,  15);
export const T_PISTON_INNER    = T(3,  15);
export const T_PISTON_TOP_STKY = T(4,  15);
export const T_LEVER           = T(5,  15);
export const T_REDSTONE_LAMP_O = T(6,  15);
export const T_REDSTONE_LAMP_N = T(7,  15);
export const T_REDSTONE_TORCH_N = T(8, 15);
export const T_REDSTONE_TORCH_O = T(9, 15);
export const T_REDSTONE_DOT    = T(10, 15);
export const T_REDSTONE_LINE   = T(11, 15);

// ── Rows 12-14: new item icons ────────────────────────────────────────────
export const T_I_CHARCOAL      = T(0, 12);
export const T_I_WHEAT_SEEDS   = T(1, 12);
export const T_I_ENDER_EYE     = T(2, 12);
export const T_I_GOLD_CARROT   = T(3, 12);
export const T_I_SPECKLED_MELON= T(4, 12);
export const T_I_RABBIT_FOOT   = T(5, 12);
export const T_I_RABBIT_RAW    = T(6, 12);
export const T_I_RABBIT_COOKED = T(7, 12);
export const T_I_RABBIT_STEW   = T(8, 12);
export const T_I_RABBIT_HIDE   = T(9, 12);
export const T_I_DRAGON_BREATH = T(10, 12);
export const T_I_BLAZE_POWDER  = T(11, 12);
export const T_I_GOLD_NUGGET   = T(12, 12);
export const T_I_IRON_HORSE_A  = T(13, 12);
export const T_I_GOLD_HORSE_A  = T(14, 12);
export const T_I_DIAM_HORSE_A  = T(15, 12);
export const T_I_GOLD_SWORD    = T(0, 13);
export const T_I_GOLD_SHOVEL   = T(1, 13);
export const T_I_GOLD_PICK     = T(2, 13);
export const T_I_GOLD_AXE      = T(3, 13);
export const T_I_GOLD_HOE      = T(4, 13);
export const T_I_WOOD_HOE      = T(5, 13);
export const T_I_STONE_HOE     = T(6, 13);
export const T_I_IRON_HOE      = T(7, 13);
export const T_I_DIAM_HOE      = T(8, 13);
export const T_I_CHAIN_HELM    = T(9, 13);
export const T_I_CHAIN_CHEST   = T(10, 13);
export const T_I_CHAIN_LEGS    = T(11, 13);
export const T_I_CHAIN_BOOTS   = T(12, 13);
export const T_I_CARROT_STICK  = T(13, 13);
export const T_I_BEETROOT      = T(14, 13);
export const T_I_BEETROOT_SEEDS= T(15, 13);
// Music discs
export const T_I_DISC_13       = T(0, 14);
export const T_I_DISC_CAT      = T(1, 14);
export const T_I_DISC_BLOCKS   = T(2, 14);
export const T_I_DISC_CHIRP    = T(3, 14);
export const T_I_DISC_FAR      = T(4, 14);
export const T_I_DISC_MALL     = T(5, 14);
export const T_I_DISC_MELLOHI  = T(6, 14);
export const T_I_DISC_STAL     = T(7, 14);
export const T_I_DISC_STRAD    = T(8, 14);
export const T_I_DISC_WARD     = T(9, 14);
export const T_I_DISC_11       = T(10, 14);
export const T_I_DISC_WAIT     = T(11, 14);
export const T_I_BEETROOT_SOUP = T(13, 14);

// ── Block definitions ─────────────────────────────────────────────────────────
export const BLOCKS: Record<number, BlockDef> = {
  1:  { faces: [T_GRASS_SIDE, T_GRASS_SIDE, T_GRASS_TOP, T_DIRT, T_GRASS_SIDE, T_GRASS_SIDE], hardness: 0.6, drop: 2, tool: "shovel" },
  2:  { faces: all6(T_DIRT),                 hardness: 0.5, tool: "shovel" },
  3:  { faces: all6(T_STONE),                hardness: 1.5, drop: 9, tool: "pickaxe" },
  4:  { faces: all6(T_SAND),                 hardness: 0.5, tool: "shovel" },
  5:  { faces: [T_LOG_SIDE, T_LOG_SIDE, T_LOG_TOP, T_LOG_TOP, T_LOG_SIDE, T_LOG_SIDE], hardness: 2.0, tool: "axe" },
  6:  { faces: all6(T_LEAVES), isLeaf: true, hardness: 0.2, drop: 33, tool: "shears" }, // drops sapling
  7:  { faces: all6(T_WATER), transparent: true, isWater: true, solid: false, hardness: 0, drop: 0 },
  8:  { faces: all6(T_PLANKS),               hardness: 2.0, tool: "axe" },
  9:  { faces: all6(T_COBBLE),               hardness: 2.0, tool: "pickaxe" },
  10: { faces: all6(T_GRAVEL),               hardness: 0.6, tool: "shovel" },
  11: { faces: all6(T_GLASS), transparent: true, hardness: 0.3, drop: 0 },
  12: { faces: all6(T_BRICK),                hardness: 2.0, tool: "pickaxe" },
  13: { faces: [T_BOOKSHELF, T_BOOKSHELF, T_PLANKS, T_PLANKS, T_BOOKSHELF, T_BOOKSHELF], hardness: 1.5, tool: "axe" },
  14: { faces: all6(T_WOOL_W),               hardness: 0.8 },
  15: { faces: all6(T_WOOL_R),               hardness: 0.8 },
  16: { faces: all6(T_OBSIDIAN),             hardness: 50, tool: "pickaxe", minToolTier: 4 },
  17: { faces: all6(T_MOSSY_COBB),           hardness: 2.0, tool: "pickaxe", minToolTier: 1 },
  18: { faces: all6(T_COAL_ORE),             hardness: 3.0, drop: 50, tool: "pickaxe", minToolTier: 1 },
  19: { faces: all6(T_IRON_ORE),             hardness: 3.0, tool: "pickaxe", minToolTier: 2 },
  20: { faces: all6(T_GOLD_ORE),             hardness: 3.0, tool: "pickaxe", minToolTier: 3 },
  21: { faces: all6(T_DIAM_ORE),             hardness: 3.0, drop: 51, tool: "pickaxe", minToolTier: 3 },
  22: { faces: all6(T_GLOWSTONE), emissive: true, hardness: 0.3 },
  23: { faces: all6(T_SNOW),                 hardness: 0.2, tool: "shovel" },
  24: { faces: all6(T_ICE), transparent: true, hardness: 0.5, drop: 0, tool: "pickaxe" },
  25: { faces: [T_TNT_SIDE, T_TNT_SIDE, T_TNT_TOP, T_TNT_TOP, T_TNT_SIDE, T_TNT_SIDE], hardness: 0 },
  26: { faces: all6(T_STONEBRICK),           hardness: 1.5, tool: "pickaxe" },
  27: { faces: [T_SANDSTONE, T_SANDSTONE, T_SANDSTONE_T, T_SANDSTONE_T, T_SANDSTONE, T_SANDSTONE], hardness: 0.8, tool: "pickaxe" },
  28: { faces: [T_SPRUCE_SIDE, T_SPRUCE_SIDE, T_SPRUCE_TOP, T_SPRUCE_TOP, T_SPRUCE_SIDE, T_SPRUCE_SIDE], hardness: 2.0, tool: "axe" },
  29: { faces: all6(T_SPRUCE_LEAF), isLeaf: true, hardness: 0.2, drop: 0, tool: "shears" },
  30: { faces: all6(T_FLOWER_RED), transparent: true, solid: false, crossShape: true, hardness: 0 },
  31: { faces: all6(T_FLOWER_YEL), transparent: true, solid: false, crossShape: true, hardness: 0 },
  32: { faces: all6(T_TALLGRASS), transparent: true, solid: false, crossShape: true, hardness: 0, drop: 0 },
  33: { faces: all6(T_SAPLING), transparent: true, solid: false, crossShape: true, hardness: 0 },
  34: { faces: all6(T_MUSHROOM_R), transparent: true, solid: false, crossShape: true, hardness: 0 },
  35: { faces: all6(T_MUSHROOM_B), transparent: true, solid: false, crossShape: true, hardness: 0 },
  36: { faces: [T_CRAFT_SIDE, T_CRAFT_SIDE, T_CRAFT_TOP, T_PLANKS, T_CRAFT_FRONT, T_CRAFT_SIDE], hardness: 2.0, tool: "axe" },
  37: { faces: [T_FURNACE_S, T_FURNACE_S, T_FURNACE_T, T_FURNACE_T, T_FURNACE_F, T_FURNACE_S], hardness: 3.0, tool: "pickaxe" },
  38: { faces: [T_FURNACE_S, T_FURNACE_S, T_FURNACE_T, T_FURNACE_T, T_FURNACE_ON, T_FURNACE_S], hardness: 3.0, tool: "pickaxe", emissive: true },
  39: { faces: all6(T_IRON_BLOCK),           hardness: 5.0, tool: "pickaxe" },
  40: { faces: all6(T_GOLD_BLOCK),           hardness: 3.0, tool: "pickaxe" },
  41: { faces: all6(T_DIAM_BLOCK),           hardness: 5.0, tool: "pickaxe" },
  42: { faces: all6(T_TORCH), transparent: true, solid: false, miniColumn: true, emissive: true, hardness: 0 },
  43: { faces: all6(T_LADDER), transparent: true, solid: false, hardness: 0.4 },
  44: { faces: [T_WOOL_R, T_WOOL_R, T_WOOL_W, T_PLANKS, T_WOOL_R, T_WOOL_R], hardness: 0.2, drop: 44, iconTile: T_I_BED },
  // Desert cactus — block-shaped to keep meshing simple; can't actually
  // damage the player (TODO if we want stricter parity with vanilla).
  45: { faces: all6(T_CACTUS), hardness: 0.4 },
  // ── 1.8/1.9 expansion ──────────────────────────────────────────────────
  46: { faces: all6(T_LAVA), transparent: true, isWater: true, solid: false, hardness: 0, drop: 0, emissive: true },
  47: { faces: all6(T_BEDROCK), hardness: -1, drop: 0 },                                       // bedrock — unbreakable
  48: { faces: all6(T_NETHERRACK), hardness: 0.4, tool: "pickaxe" },
  49: { faces: all6(T_SOUL_SAND), hardness: 0.5, tool: "shovel" },
  // (skip ids 50+ — items)
  150: { faces: all6(T_NETHER_BRICK), hardness: 2.0, tool: "pickaxe", minToolTier: 1 },
  151: { faces: [T_QUARTZ_SIDE, T_QUARTZ_SIDE, T_QUARTZ_TOP, T_QUARTZ_TOP, T_QUARTZ_SIDE, T_QUARTZ_SIDE], hardness: 0.8, tool: "pickaxe" },
  152: { faces: all6(T_QUARTZ_ORE), hardness: 3.0, tool: "pickaxe", drop: 51 /* drops quartz-like item — reuse diamond for now */ },
  153: { faces: all6(T_END_STONE), hardness: 3.0, tool: "pickaxe" },
  154: { faces: all6(T_PRISMARINE), hardness: 1.5, tool: "pickaxe" },
  155: { faces: all6(T_PRISMARINE_DARK), hardness: 1.5, tool: "pickaxe" },
  156: { faces: all6(T_PRISMARINE_BRICK), hardness: 1.5, tool: "pickaxe" },
  157: { faces: all6(T_SEA_LANTERN), hardness: 0.3, emissive: true },
  158: { faces: all6(T_IRON_BARS), transparent: true, hardness: 5.0, tool: "pickaxe" },
  159: { faces: all6(T_HARDENED_CLAY), hardness: 1.25, tool: "pickaxe" },
  160: { faces: all6(T_HARDENED_CLAY_O), hardness: 1.25, tool: "pickaxe" },
  161: { faces: all6(T_HARDENED_CLAY_R), hardness: 1.25, tool: "pickaxe" },
  162: { faces: all6(T_HARDENED_CLAY_B), hardness: 1.25, tool: "pickaxe" },
  163: { faces: [T_MYCELIUM_SIDE, T_MYCELIUM_SIDE, T_MYCELIUM_TOP, T_DIRT, T_MYCELIUM_SIDE, T_MYCELIUM_SIDE], hardness: 0.6, tool: "shovel" },
  164: { faces: all6(T_PACKED_ICE), hardness: 0.5, drop: 0, tool: "pickaxe" },
  165: { faces: [T_MELON_SIDE, T_MELON_SIDE, T_MELON_TOP, T_MELON_TOP, T_MELON_SIDE, T_MELON_SIDE], hardness: 1.0, tool: "axe" },
  166: { faces: [T_PUMPKIN_SIDE, T_PUMPKIN_SIDE, T_PUMPKIN_TOP, T_PUMPKIN_TOP, T_PUMPKIN_FACE, T_PUMPKIN_SIDE], hardness: 1.0, tool: "axe" },
  167: { faces: [T_HAY_SIDE, T_HAY_SIDE, T_HAY_TOP, T_HAY_TOP, T_HAY_SIDE, T_HAY_SIDE], hardness: 0.5 },
  168: { faces: all6(T_DEADBUSH), transparent: true, solid: false, crossShape: true, hardness: 0 },
  169: { faces: all6(T_DRAGON_EGG), hardness: 3.0, emissive: true },
  170: { faces: all6(T_COAL_BLOCK), hardness: 5.0, tool: "pickaxe" },
  // Chest. Face order: +X, -X, +Y (top), -Y (bottom), +Z, -Z (front).
  // Front face uses the lock-bearing chest texture; sides + back share the
  // plain-side texture; top + bottom share the lid/floor texture.
  171: { faces: [T_CHEST_SIDE, T_CHEST_SIDE, T_CHEST_TOP_2, T_CHEST_TOP_2, T_CHEST_FRONT, T_CHEST_SIDE], hardness: 2.5, tool: "axe" },
  // Redstone block (uses already-atlas redstone-block tile T_REDSTONE_O at T(7,3))
  172: { faces: all6(T(7, 3)), hardness: 5.0, tool: "pickaxe" },
  // Redstone torch — small upright miniColumn like the regular torch.
  173: { faces: all6(T_TORCH), transparent: true, solid: false, miniColumn: true, emissive: true, hardness: 0 },
  // ── Redstone family ────────────────────────────────────────────────────
  // Mechanical block IDs at 220+ (174..211 are ITEM ids — keep the spaces
  // separate so getItemTile/Name don't collide between BLOCKS and ITEMS).
  // These render + break properly; signal propagation is a later milestone.
  220: { faces: [T_PISTON_SIDE, T_PISTON_SIDE, T_PISTON_TOP, T_PISTON_BOTTOM, T_PISTON_SIDE, T_PISTON_SIDE], hardness: 0.5, tool: "pickaxe" },           // piston
  221: { faces: [T_PISTON_SIDE, T_PISTON_SIDE, T_PISTON_TOP_STKY, T_PISTON_BOTTOM, T_PISTON_SIDE, T_PISTON_SIDE], hardness: 0.5, tool: "pickaxe" },     // sticky piston
  222: { faces: all6(T_REDSTONE_LAMP_O), hardness: 0.3 },                                                                                                // redstone lamp (off)
  223: { faces: all6(T_REDSTONE_LAMP_N), hardness: 0.3, emissive: true },                                                                                // redstone lamp (lit)
  // Lever — flat cross-shape using the lever tile; not solid so player can pass.
  224: { faces: all6(T_LEVER), transparent: true, solid: false, crossShape: true, hardness: 0.2 },
  // Redstone torch (on) — emissive cross-shape, like the regular torch.
  225: { faces: all6(T_REDSTONE_TORCH_N), transparent: true, solid: false, miniColumn: true, emissive: true, hardness: 0 },
  // Redstone dust laid on floor — visualized as a cross-shape for now (true
  // vanilla shape is a flat decal on the ground; cross-shape is the cheapest
  // 3D stand-in until we add billboarded floor decals).
  226: { faces: all6(T_REDSTONE_LINE), transparent: true, solid: false, crossShape: true, hardness: 0 },
};

// ── Items (id >= 50 = items, not placeable blocks) ────────────────────────────
export const ITEMS: Record<number, { name: string; tile: number; tool?: "axe" | "pickaxe" | "shovel" | "sword" | "shears"; toolTier?: number; food?: number; /** Tool durability — total uses before it breaks. */ durability?: number }> = {
  50: { name: "Coal",           tile: T_I_COAL },
  51: { name: "Diamond",        tile: T_I_DIAMOND },
  52: { name: "Iron Ingot",     tile: T_I_IRON_INGOT },
  53: { name: "Gold Ingot",     tile: T_I_GOLD_INGOT },
  54: { name: "Stick",          tile: T_I_STICK },
  // Durability values mirror Minecraft 1.9: wood=59, stone=131, iron=250, diamond=1561.
  55: { name: "Wooden Pickaxe", tile: T_I_WOOD_PICK,   tool: "pickaxe", toolTier: 1, durability: 59   },
  56: { name: "Wooden Axe",     tile: T_I_WOOD_AXE,    tool: "axe",     toolTier: 1, durability: 59   },
  57: { name: "Wooden Shovel",  tile: T_I_WOOD_SHOVEL, tool: "shovel",  toolTier: 1, durability: 59   },
  58: { name: "Wooden Sword",   tile: T_I_WOOD_SWORD,  tool: "sword",   toolTier: 1, durability: 59   },
  59: { name: "Stone Pickaxe",  tile: T_I_STONE_PICK,  tool: "pickaxe", toolTier: 2, durability: 131  },
  60: { name: "Stone Axe",      tile: T_I_STONE_AXE,   tool: "axe",     toolTier: 2, durability: 131  },
  61: { name: "Stone Sword",    tile: T_I_STONE_SWORD, tool: "sword",   toolTier: 2, durability: 131  },
  62: { name: "Iron Pickaxe",   tile: T_I_IRON_PICK,   tool: "pickaxe", toolTier: 3, durability: 250  },
  63: { name: "Iron Sword",     tile: T_I_IRON_SWORD,  tool: "sword",   toolTier: 3, durability: 250  },
  64: { name: "Diamond Sword",  tile: T_I_DIAM_SWORD,  tool: "sword",   toolTier: 4, durability: 1561 },
  65: { name: "Apple",          tile: T_I_APPLE,                                food: 4 },
  66: { name: "Bread",          tile: T_I_BREAD,                                food: 5 },
  67: { name: "Stone Shovel",   tile: T_I_STONE_SHOVEL, tool: "shovel",  toolTier: 2, durability: 131  },
  68: { name: "Iron Axe",       tile: T_I_IRON_AXE,    tool: "axe",     toolTier: 3, durability: 250  },
  69: { name: "Iron Shovel",    tile: T_I_IRON_SHOVEL, tool: "shovel",  toolTier: 3, durability: 250  },
  70: { name: "Diamond Pickaxe", tile: T_I_DIAM_PICK,  tool: "pickaxe", toolTier: 4, durability: 1561 },
  71: { name: "Diamond Axe",    tile: T_I_DIAM_AXE,    tool: "axe",     toolTier: 4, durability: 1561 },
  72: { name: "Diamond Shovel", tile: T_I_DIAM_SHOVEL, tool: "shovel",  toolTier: 4, durability: 1561 },
  73: { name: "Wheat",          tile: T_I_WHEAT },
  74: { name: "String",         tile: T_I_STRING },
  75: { name: "Feather",        tile: T_I_FEATHER },
  76: { name: "Gunpowder",      tile: T_I_GUNPOWDER },
  77: { name: "Leather",        tile: T_I_LEATHER },
  78: { name: "Bone",           tile: T_I_BONE },
  79: { name: "Egg",            tile: T_I_EGG },
  80: { name: "Arrow",          tile: T_I_ARROW },
  81: { name: "Emerald",        tile: T_I_EMERALD },
  // Cooked / golden foods
  82: { name: "Cooked Porkchop", tile: T_I_PORK_COOKED, food: 8 },
  83: { name: "Cooked Beef",     tile: T_I_BEEF_COOKED, food: 8 },
  84: { name: "Cooked Chicken",  tile: T_I_CHK_COOKED,  food: 6 },
  85: { name: "Golden Apple",    tile: T_I_GOLDEN_APPLE, food: 4 },
  86: { name: "Carrot",          tile: T_I_CARROT,      food: 3 },
  87: { name: "Potato",          tile: T_I_POTATO,      food: 1 },
  88: { name: "Baked Potato",    tile: T_I_POTATO_BAKED,food: 5 },
  89: { name: "Melon",           tile: T_I_MELON,       food: 2 },
  90: { name: "Pumpkin Pie",     tile: T_I_PUMPKIN_PIE, food: 8 },
  91: { name: "Cake",            tile: T_I_CAKE,        food: 2 },
  92: { name: "Raw Fish",        tile: T_I_FISH_RAW,    food: 2 },
  93: { name: "Cooked Fish",     tile: T_I_FISH_COOKED, food: 5 },
  94: { name: "Mushroom Stew",   tile: T_I_MUSH_STEW,   food: 6 },
  // Mob drops
  95: { name: "Rotten Flesh",    tile: T_I_ROTTEN,      food: 4 },
  96: { name: "Spider Eye",      tile: T_I_SPIDER_EYE },
  97: { name: "Sugar",           tile: T_I_SUGAR },
  // Tools / utility
  98:  { name: "Bucket",          tile: T_I_BUCKET },
  99:  { name: "Water Bucket",    tile: T_I_BUCKET_W },
  100: { name: "Lava Bucket",     tile: T_I_BUCKET_L },
  101: { name: "Milk Bucket",     tile: T_I_BUCKET_M },
  102: { name: "Bow",             tile: T_I_BOW },
  103: { name: "Fishing Rod",     tile: T_I_FISHING_ROD },
  104: { name: "Shears",          tile: T_I_SHEARS,      tool: "shears", toolTier: 1, durability: 238 },
  105: { name: "Compass",         tile: T_I_COMPASS },
  106: { name: "Clock",           tile: T_I_CLOCK },
  107: { name: "Flint and Steel", tile: T_I_FLINT_STEEL, durability: 65 },
  108: { name: "Blaze Rod",       tile: T_I_BLAZE_ROD },
  109: { name: "Ender Pearl",     tile: T_I_ENDER_PEARL },
  110: { name: "Ghast Tear",      tile: T_I_GHAST_TEAR },
  111: { name: "Glowstone Dust",  tile: T_I_GLOWDUST },
  112: { name: "Redstone Dust",   tile: T_I_REDSTONE },
  113: { name: "Slimeball",       tile: T_I_SLIMEBALL },
  // Armor (no equip slot yet, but craftable + tradeable)
  114: { name: "Leather Helmet",      tile: T_I_HELM_LEATHER,  durability: 55  },
  115: { name: "Leather Chestplate",  tile: T_I_CHEST_LEATHER, durability: 80  },
  116: { name: "Leather Leggings",    tile: T_I_LEGS_LEATHER,  durability: 75  },
  117: { name: "Leather Boots",       tile: T_I_BOOTS_LEATHER, durability: 65  },
  118: { name: "Iron Helmet",         tile: T_I_HELM_IRON,     durability: 165 },
  119: { name: "Iron Chestplate",     tile: T_I_CHEST_IRON,    durability: 240 },
  120: { name: "Iron Leggings",       tile: T_I_LEGS_IRON,     durability: 225 },
  121: { name: "Iron Boots",          tile: T_I_BOOTS_IRON,    durability: 195 },
  122: { name: "Golden Helmet",       tile: T_I_HELM_GOLD,     durability: 77  },
  123: { name: "Golden Chestplate",   tile: T_I_CHEST_GOLD,    durability: 112 },
  124: { name: "Golden Leggings",     tile: T_I_LEGS_GOLD,     durability: 105 },
  125: { name: "Golden Boots",        tile: T_I_BOOTS_GOLD,    durability: 91  },
  126: { name: "Diamond Helmet",      tile: T_I_HELM_DIAM,     durability: 363 },
  127: { name: "Diamond Chestplate",  tile: T_I_CHEST_DIAM,    durability: 528 },
  128: { name: "Diamond Leggings",    tile: T_I_LEGS_DIAM,     durability: 495 },
  129: { name: "Diamond Boots",       tile: T_I_BOOTS_DIAM,    durability: 429 },
  // Misc
  130: { name: "Book",          tile: T_I_BOOK },
  131: { name: "Paper",         tile: T_I_PAPER },
  132: { name: "Snowball",      tile: T_I_SNOWBALL },
  133: { name: "Saddle",        tile: T_I_SADDLE },
  134: { name: "Name Tag",      tile: T_I_NAMETAG },
  135: { name: "Lead",          tile: T_I_LEAD },
  136: { name: "Magma Cream",   tile: T_I_MAGMA_CREAM },
  137: { name: "Nether Star",   tile: T_I_NETHER_STAR },
  138: { name: "Bottle o' Enchanting", tile: T_I_XP_BOTTLE },
  139: { name: "Minecart",      tile: T_I_MINECART },
  140: { name: "Boat",          tile: T_I_BOAT },
  141: { name: "Firework Rocket", tile: T_I_FIREWORKS },
  142: { name: "Fire Charge",   tile: T_I_FIRE_CHARGE },
  // ── 1.8/1.9 item expansion ─────────────────────────────────────────────
  143: { name: "Charcoal",      tile: T_I_CHARCOAL },
  144: { name: "Wheat Seeds",   tile: T_I_WHEAT_SEEDS },
  145: { name: "Eye of Ender",  tile: T_I_ENDER_EYE },
  146: { name: "Golden Carrot", tile: T_I_GOLD_CARROT, food: 6 },
  147: { name: "Glistering Melon", tile: T_I_SPECKLED_MELON },
  148: { name: "Rabbit's Foot", tile: T_I_RABBIT_FOOT },
  149: { name: "Raw Rabbit",    tile: T_I_RABBIT_RAW,    food: 3 },
  // (150-173 are BLOCKS)
  174: { name: "Cooked Rabbit", tile: T_I_RABBIT_COOKED, food: 5 },
  175: { name: "Rabbit Stew",   tile: T_I_RABBIT_STEW,   food: 10 },
  176: { name: "Rabbit Hide",   tile: T_I_RABBIT_HIDE },
  177: { name: "Dragon's Breath", tile: T_I_DRAGON_BREATH },
  178: { name: "Blaze Powder",  tile: T_I_BLAZE_POWDER },
  179: { name: "Gold Nugget",   tile: T_I_GOLD_NUGGET },
  180: { name: "Iron Horse Armor", tile: T_I_IRON_HORSE_A },
  181: { name: "Gold Horse Armor", tile: T_I_GOLD_HORSE_A },
  182: { name: "Diamond Horse Armor", tile: T_I_DIAM_HORSE_A },
  // Golden tools (full tier)
  183: { name: "Golden Sword",  tile: T_I_GOLD_SWORD,  tool: "sword",   toolTier: 1, durability: 32 },
  184: { name: "Golden Shovel", tile: T_I_GOLD_SHOVEL, tool: "shovel",  toolTier: 1, durability: 32 },
  185: { name: "Golden Pickaxe", tile: T_I_GOLD_PICK,  tool: "pickaxe", toolTier: 1, durability: 32 },
  186: { name: "Golden Axe",    tile: T_I_GOLD_AXE,    tool: "axe",     toolTier: 1, durability: 32 },
  // Hoes
  187: { name: "Golden Hoe",    tile: T_I_GOLD_HOE,    tool: "shovel",  toolTier: 1, durability: 32 },
  188: { name: "Wooden Hoe",    tile: T_I_WOOD_HOE,    tool: "shovel",  toolTier: 1, durability: 59 },
  189: { name: "Stone Hoe",     tile: T_I_STONE_HOE,   tool: "shovel",  toolTier: 2, durability: 131 },
  190: { name: "Iron Hoe",      tile: T_I_IRON_HOE,    tool: "shovel",  toolTier: 3, durability: 250 },
  191: { name: "Diamond Hoe",   tile: T_I_DIAM_HOE,    tool: "shovel",  toolTier: 4, durability: 1561 },
  // Chainmail armor
  192: { name: "Chainmail Helmet",     tile: T_I_CHAIN_HELM,   durability: 165 },
  193: { name: "Chainmail Chestplate", tile: T_I_CHAIN_CHEST,  durability: 240 },
  194: { name: "Chainmail Leggings",   tile: T_I_CHAIN_LEGS,   durability: 225 },
  195: { name: "Chainmail Boots",      tile: T_I_CHAIN_BOOTS,  durability: 195 },
  // Misc 1.8/1.9
  196: { name: "Carrot on a Stick",    tile: T_I_CARROT_STICK },
  197: { name: "Beetroot",             tile: T_I_BEETROOT,        food: 1 },
  198: { name: "Beetroot Seeds",       tile: T_I_BEETROOT_SEEDS },
  199: { name: "Beetroot Soup",        tile: T_I_BEETROOT_SOUP,   food: 6 },
  // Music discs
  200: { name: "Music Disc — 13",      tile: T_I_DISC_13 },
  201: { name: "Music Disc — Cat",     tile: T_I_DISC_CAT },
  202: { name: "Music Disc — Blocks",  tile: T_I_DISC_BLOCKS },
  203: { name: "Music Disc — Chirp",   tile: T_I_DISC_CHIRP },
  204: { name: "Music Disc — Far",     tile: T_I_DISC_FAR },
  205: { name: "Music Disc — Mall",    tile: T_I_DISC_MALL },
  206: { name: "Music Disc — Mellohi", tile: T_I_DISC_MELLOHI },
  207: { name: "Music Disc — Stal",    tile: T_I_DISC_STAL },
  208: { name: "Music Disc — Strad",   tile: T_I_DISC_STRAD },
  209: { name: "Music Disc — Ward",    tile: T_I_DISC_WARD },
  210: { name: "Music Disc — 11",      tile: T_I_DISC_11 },
  211: { name: "Music Disc — Wait",    tile: T_I_DISC_WAIT },
  // Raw meat items (mob drops). Cookable in the furnace into 82/83/84.
  212: { name: "Raw Beef",     tile: T_I_BEEF_RAW,   food: 3 },
  213: { name: "Raw Porkchop", tile: T_I_PORK_RAW,   food: 3 },
  214: { name: "Raw Chicken",  tile: T_I_CHK_RAW,    food: 2 },
  215: { name: "Raw Mutton",   tile: T_I_MUTTON_RAW, food: 2 },
};

export const BLOCK_NAMES: Record<number, string> = {
  1: "Grass Block", 2: "Dirt", 3: "Stone", 4: "Sand", 5: "Oak Log", 6: "Oak Leaves",
  7: "Water", 8: "Oak Planks", 9: "Cobblestone", 10: "Gravel", 11: "Glass",
  12: "Bricks", 13: "Bookshelf", 14: "White Wool", 15: "Red Wool",
  16: "Obsidian", 17: "Mossy Cobblestone", 18: "Coal Ore", 19: "Iron Ore",
  20: "Gold Ore", 21: "Diamond Ore", 22: "Glowstone", 23: "Snow Block",
  24: "Ice", 25: "TNT", 26: "Stone Bricks", 27: "Sandstone",
  28: "Spruce Log", 29: "Spruce Leaves",
  30: "Poppy", 31: "Dandelion", 32: "Tall Grass", 33: "Oak Sapling",
  34: "Red Mushroom", 35: "Brown Mushroom",
  36: "Crafting Table", 37: "Furnace", 38: "Furnace (Lit)",
  39: "Iron Block", 40: "Gold Block", 41: "Diamond Block",
  42: "Torch", 43: "Ladder", 44: "Bed", 45: "Cactus",
  46: "Lava", 47: "Bedrock", 48: "Netherrack", 49: "Soul Sand",
  150: "Nether Bricks", 151: "Quartz Block", 152: "Nether Quartz Ore",
  153: "End Stone", 154: "Prismarine", 155: "Dark Prismarine",
  156: "Prismarine Bricks", 157: "Sea Lantern", 158: "Iron Bars",
  159: "Hardened Clay", 160: "Orange Hardened Clay", 161: "Red Hardened Clay",
  162: "Blue Hardened Clay", 163: "Mycelium", 164: "Packed Ice",
  165: "Melon", 166: "Pumpkin", 167: "Hay Bale", 168: "Dead Bush",
  169: "Dragon Egg", 170: "Coal Block", 171: "Chest", 172: "Redstone Block",
  173: "Redstone Torch",
  220: "Piston", 221: "Sticky Piston", 222: "Redstone Lamp", 223: "Redstone Lamp (Lit)",
  224: "Lever", 225: "Redstone Torch (Lit)", 226: "Redstone Dust",
};

// Creative hotbar default
export const CREATIVE_HOTBAR = [1, 3, 9, 8, 5, 36, 37, 22, 11];

/** ID classification — block ids may exceed 50 now that we have 1.8/1.9 expansion blocks. */
export function isBlockId(id: number): boolean { return id > 0 && !!BLOCKS[id]; }
export function isItemId(id: number): boolean  { return id > 0 && !!ITEMS[id]; }

export function getItemTile(id: number): number {
  if (id === 0) return 0;
  const def = BLOCKS[id];
  if (def) return def.iconTile ?? def.faces[0] ?? 0;
  return ITEMS[id]?.tile ?? 0;
}
export function getItemName(id: number): string {
  if (BLOCK_NAMES[id]) return BLOCK_NAMES[id];
  return ITEMS[id]?.name ?? `Item ${id}`;
}
export function isPlaceable(id: number): boolean {
  return isBlockId(id);
}

/** UV rect for a tile index in 0..1 atlas space. */
export function tileUV(tileIdx: number): [number, number, number, number] {
  const col = tileIdx % COLS;
  const row = Math.floor(tileIdx / COLS);
  const u0 = col / COLS;
  const v0 = 1 - (row + 1) / COLS;
  const u1 = (col + 1) / COLS;
  const v1 = 1 - row / COLS;
  return [u0, v0, u1, v1];
}

export async function preloadAtlas(): Promise<void> {
  if (_atlasTex) return;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      _liveAtlasCanvas = document.createElement("canvas");
      _liveAtlasCanvas.width = _liveAtlasCanvas.height = ATLAS_SIZE;
      const ctx = _liveAtlasCanvas.getContext("2d")!;
      ctx.imageSmoothingEnabled = false;
      // Draw the full atlas, scaling if needed (asset PNG might be either
      // 256 or 512 depending on which build of build_mc_atlas.py was last
      // run — the explicit size args make this robust).
      ctx.drawImage(img, 0, 0, ATLAS_SIZE, ATLAS_SIZE);
      _liveAtlasTex = new THREE.CanvasTexture(_liveAtlasCanvas);
      _liveAtlasTex.magFilter = THREE.NearestFilter;
      _liveAtlasTex.minFilter = THREE.NearestFilter;
      _liveAtlasTex.generateMipmaps = false;
      _atlasTex = _liveAtlasTex;
      resolve();
    };
    img.onerror = reject;
    img.src = `/terrain_atlas.png?v=${Date.now()}`;
  });
}

export function getAtlasTexture(): THREE.Texture {
  if (!_atlasTex) throw new Error("Atlas not loaded — call preloadAtlas() first");
  return _atlasTex;
}

/** Backing canvas the live atlas reads from — exposed for offscreen pixel
 *  sampling (sprite extrusion, etc.). Null if preloadAtlas hasn't run. */
export function getAtlasCanvas(): HTMLCanvasElement | null { return _liveAtlasCanvas; }
export const ATLAS_TILE_PX = TILE_SIZE;
export const ATLAS_COLS = COLS;

/** Animate water tile each frame. */
export function tickWater(elapsed: number) {
  if (!_liveAtlasCanvas || !_liveAtlasTex) return;
  const ctx = _liveAtlasCanvas.getContext("2d")!;
  const ox = (T_WATER % COLS) * TILE_SIZE;
  const oy = Math.floor(T_WATER / COLS) * TILE_SIZE;
  const t = elapsed * 1.0;
  ctx.fillStyle = "#3a6bcc";
  ctx.fillRect(ox, oy, TILE_SIZE, TILE_SIZE);
  for (let i = 0; i < 4; i++) {
    const y = (t * (0.5 + i * 0.25) + i * 4.7) % TILE_SIZE;
    const alpha = 0.38 - i * 0.07;
    ctx.fillStyle = `rgba(140,200,250,${alpha})`;
    ctx.fillRect(ox, oy + Math.floor(y), TILE_SIZE, 2);
  }
  _liveAtlasTex.needsUpdate = true;
}
