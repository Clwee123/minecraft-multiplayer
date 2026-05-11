"""Bake new MC textures into terrain_atlas.png at chosen free cells.

We pick free cells from the bottom-right of the atlas, paste 16×16 source
PNGs upscaled 2× to fit the 32×32 grid the atlas uses, and overwrite
public/terrain_atlas.png. Run from repo root.
"""
from PIL import Image
import os, sys

ROOT = r"F:/Github/minecraft-multiplayer"
ATLAS = os.path.join(ROOT, "client", "public", "terrain_atlas.png")
SRC_DIR = r"C:/Users/leeza/Downloads/minecraft-assets-master/minecraft-assets-master/data/1.11.2/blocks"
TILE_SIZE = 32  # atlas tile size

# (col, row, source-filename). Cells chosen from the previously-computed
# free list — row 15 is empty, plus a few row-9/14 gaps.
BAKES = [
    ( 0, 15, "piston_side.png"),
    ( 1, 15, "piston_top_normal.png"),
    ( 2, 15, "piston_bottom.png"),
    ( 3, 15, "piston_inner.png"),
    ( 4, 15, "piston_top_sticky.png"),
    ( 5, 15, "lever.png"),
    ( 6, 15, "redstone_lamp_off.png"),
    ( 7, 15, "redstone_lamp_on.png"),
    ( 8, 15, "redstone_torch_on.png"),
    ( 9, 15, "redstone_torch_off.png"),
    (10, 15, "redstone_dust_dot.png"),
    (11, 15, "redstone_dust_line0.png"),
    # Chest assets (1.11.2 chest is split into separate files for top/side/front)
    # Fall back to old chest tiles if not present.
]

# Chest tries 1.11.2 first, then 1.13.2 layout.
CHEST_CANDIDATES = [
    (12, 15, ["entity/chest/normal.png", "entity/chest/normal_double.png"]),
]

def find_chest_source():
    base = r"C:/Users/leeza/Downloads/minecraft-assets-master/minecraft-assets-master/data"
    for ver in ("1.11.2", "1.10", "1.13.2"):
        p = os.path.join(base, ver, "entity/chest/normal.png")
        if os.path.isfile(p): return p
    return None

atlas = Image.open(ATLAS).convert("RGBA")
print(f"Atlas: {atlas.size}")

for col, row, fname in BAKES:
    src_path = os.path.join(SRC_DIR, fname)
    if not os.path.isfile(src_path):
        print(f"[skip] {fname} not found")
        continue
    src = Image.open(src_path).convert("RGBA")
    if src.size != (TILE_SIZE, TILE_SIZE):
        src = src.resize((TILE_SIZE, TILE_SIZE), Image.NEAREST)
    atlas.paste(src, (col * TILE_SIZE, row * TILE_SIZE), src)
    print(f"[ok] {fname} -> ({col},{row})")

# Chest needs the entity-chest texture — its layout: it's a 64x64 strip with
# top, side, front laid out. We'll just crop a 14x14 face out for the front
# face. If the source is missing, leave the existing chest tile alone.
chest = find_chest_source()
if chest:
    src = Image.open(chest).convert("RGBA")
    print(f"Chest source: {chest}, size {src.size}")
    # Standard chest.png layout (64x64): regions are:
    # top:    (14, 0,  28, 14)   — top of lid
    # front:  (14, 33, 28, 47)   — front of chest body
    # side:   (28, 33, 42, 47)   — side of chest body
    def crop_face(box, dst_col, dst_row):
        f = src.crop(box)
        f = f.resize((TILE_SIZE, TILE_SIZE), Image.NEAREST)
        atlas.paste(f, (dst_col * TILE_SIZE, dst_row * TILE_SIZE), f)
    # Place chest at row 14 free cells
    crop_face((14,  0, 28, 14), 12, 14)  # top
    crop_face((14, 33, 28, 47), 14, 14)  # front
    crop_face((28, 33, 42, 47), 15, 14)  # side
    print("[ok] chest -> (12,14) top, (14,14) front, (15,14) side")

atlas.save(ATLAS)
print(f"Saved {ATLAS}")
