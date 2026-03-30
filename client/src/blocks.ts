// Block type definitions and colors

export const BLOCK_TYPES: Record<number, { name: string; color: number; topColor?: number; bottomColor?: number }> = {
  1: { name: "Grass",  color: 0x5a8a3c, topColor: 0x6ab04c, bottomColor: 0x8B6914 },
  2: { name: "Dirt",   color: 0x8B6914 },
  3: { name: "Stone",  color: 0x808080 },
  4: { name: "Sand",   color: 0xc2b280 },
  5: { name: "Wood",   color: 0x8B5E3C, topColor: 0xa0783c },
  6: { name: "Leaves", color: 0x2d6a2d },
  7: { name: "Water",  color: 0x1a6b8a },
  8: { name: "Brick",  color: 0x8B3A3A },
  9: { name: "Glass",  color: 0xaaddff },
  10: { name: "Plank", color: 0xc8a464 },
};

export const BLOCK_COLORS = [
  0x5a8a3c, // 1 grass
  0x8B6914, // 2 dirt
  0x808080, // 3 stone
  0xc2b280, // 4 sand
  0x8B5E3C, // 5 wood
  0x2d6a2d, // 6 leaves
  0x1a6b8a, // 7 water
  0x8B3A3A, // 8 brick
  0xaaddff, // 9 glass
  0xc8a464, // 10 plank
];

export const HOTBAR_BLOCKS = [1, 2, 3, 4, 5, 6, 8, 10];

export function getBlockName(type: number): string {
  return BLOCK_TYPES[type]?.name ?? "Unknown";
}

export function getBlockColor(type: number): number {
  return BLOCK_TYPES[type]?.color ?? 0xffffff;
}
