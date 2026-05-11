"""Bake new MC textures into terrain_atlas.png. Idempotent — running it
twice produces the same output."""
from PIL import Image
import os

ROOT = r"F:/Github/minecraft-multiplayer"
ATLAS = os.path.join(ROOT, "client", "public", "terrain_atlas.png")
ASSETS = r"C:/Users/leeza/Downloads/minecraft-assets-master/minecraft-assets-master/data"
TILE = 32

# (col, row, version, subpath). Will resize to 32×32.
BAKES = [
    # Pistons / lever / redstone (block row 15)
    (0, 15, "1.11.2", "blocks/piston_side.png"),
    (1, 15, "1.11.2", "blocks/piston_top_normal.png"),
    (2, 15, "1.11.2", "blocks/piston_bottom.png"),
    (3, 15, "1.11.2", "blocks/piston_inner.png"),
    (4, 15, "1.11.2", "blocks/piston_top_sticky.png"),
    (5, 15, "1.11.2", "blocks/lever.png"),
    (6, 15, "1.11.2", "blocks/redstone_lamp_off.png"),
    (7, 15, "1.11.2", "blocks/redstone_lamp_on.png"),
    (8, 15, "1.11.2", "blocks/redstone_torch_on.png"),
    (9, 15, "1.11.2", "blocks/redstone_torch_off.png"),
    (10, 15, "1.11.2", "blocks/redstone_dust_dot.png"),
    (11, 15, "1.11.2", "blocks/redstone_dust_line0.png"),
    # Raw food items — fill the remaining free cells.
    (10, 9, "1.11.2", "items/porkchop_raw.png"),
    (13, 9, "1.11.2", "items/beef_raw.png"),
    (14, 11, "1.11.2", "items/chicken_raw.png"),
    (15, 11, "1.11.2", "items/mutton_raw.png"),
]

atlas = Image.open(ATLAS).convert("RGBA")
print(f"Atlas: {atlas.size}")

for col, row, ver, sub in BAKES:
    src_path = os.path.join(ASSETS, ver, sub)
    if not os.path.isfile(src_path):
        print(f"[skip] missing {src_path}")
        continue
    src = Image.open(src_path).convert("RGBA")
    if src.size != (TILE, TILE):
        src = src.resize((TILE, TILE), Image.NEAREST)
    atlas.paste(src, (col * TILE, row * TILE), src)
    print(f"[ok] {sub} -> ({col},{row})")

# Chest entity texture — split into top/front/side. Standard 64x64 layout.
def find_chest_source():
    for v in ("1.11.2", "1.10", "1.13.2"):
        p = os.path.join(ASSETS, v, "entity/chest/normal.png")
        if os.path.isfile(p): return p
    return None

chest = find_chest_source()
if chest:
    src = Image.open(chest).convert("RGBA")
    print(f"Chest source: {chest}, {src.size}")
    def crop_face(box, dst_col, dst_row):
        f = src.crop(box).resize((TILE, TILE), Image.NEAREST)
        atlas.paste(f, (dst_col * TILE, dst_row * TILE), f)
    crop_face((14,  0, 28, 14), 12, 14)  # top
    crop_face((14, 33, 28, 47), 14, 14)  # front
    crop_face((28, 33, 42, 47), 15, 14)  # side
    print("[ok] chest -> (12,14) top, (14,14) front, (15,14) side")

atlas.save(ATLAS)
print(f"Saved {ATLAS}")
