/**
 * Minecraft-style procedural texture atlas.
 * Uses a single 256x256 canvas texture containing 16x16 tiles (16 per row).
 * Each block type maps to a tile index → UV offset baked per instance via custom attribute.
 *
 * For simplicity we use a SINGLE texture per InstancedMesh (not 6-face array).
 * This means 1 draw call per block type and keeps frame time low.
 */
import * as THREE from "three";

const TILE = 16;  // px per tile
const ATLAS_W = 256; // 16 tiles wide
const ATLAS_H = 256; // 16 tiles tall

let atlasTexture: THREE.CanvasTexture | null = null;
let atlasCanvas: HTMLCanvasElement | null = null;

function noisy(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, g: number, b: number, v = 14) {
  for (let py = 0; py < TILE; py++) {
    for (let px = 0; px < TILE; px++) {
      const n = (Math.random() - 0.5) * v;
      ctx.fillStyle = `rgb(${Math.round(r+n)},${Math.round(g+n)},${Math.round(b+n)})`;
      ctx.fillRect(x * TILE + px, y * TILE + py, 1, 1);
    }
  }
}

function solid(ctx: CanvasRenderingContext2D, x: number, y: number, hex: number, v = 12) {
  const r = (hex >> 16) & 255, g = (hex >> 8) & 255, b = hex & 255;
  noisy(ctx, x, y, r, g, b, v);
}

function drawGrid(ctx: CanvasRenderingContext2D, tx: number, ty: number, hex: number, lineColor: string, cw: number, ch: number, xoff = 0) {
  solid(ctx, tx, ty, hex, 8);
  ctx.fillStyle = lineColor;
  for (let y = ch; y < TILE; y += ch) ctx.fillRect(tx*TILE, ty*TILE+y, TILE, 1);
  for (let row = 0; row < TILE/ch; row++) {
    const ox = (row % 2 === 0) ? 0 : xoff;
    for (let x = ox; x < TILE; x += cw) ctx.fillRect(tx*TILE+x, ty*TILE+row*ch, 1, ch);
  }
}

function buildAtlas(): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = ATLAS_W; c.height = ATLAS_H;
  const ctx = c.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  // Row 0
  // Tile (0,0) = Grass top
  noisy(ctx, 0,0, 106,170,62, 18);
  for (let i=0;i<6;i++) { ctx.fillStyle="rgba(70,130,40,0.3)"; ctx.fillRect(Math.random()*14|0, Math.random()*14|0, 2, 2); }
  // Tile (1,0) = Grass side (dirt bottom, green top)
  noisy(ctx, 1,0, 139,105,20, 12);
  ctx.fillStyle="rgba(100,160,55,0.9)"; ctx.fillRect(1*TILE,0,TILE,4);
  // Tile (2,0) = Dirt
  noisy(ctx, 2,0, 134,100,18, 14);
  // Tile (3,0) = Stone
  noisy(ctx, 3,0, 128,128,128, 18);
  ctx.fillStyle="rgba(80,80,80,0.35)";
  for(let i=0;i<3;i++) ctx.fillRect(3*TILE+(Math.random()*12|0), Math.random()*12|0, 3+Math.random()*3|0, 1);
  // Tile (4,0) = Sand
  noisy(ctx, 4,0, 194,178,130, 14);
  // Tile (5,0) = Oak Log side (bark)
  noisy(ctx, 5,0, 102,72,36, 10);
  ctx.fillStyle="rgba(65,42,18,0.4)";
  for(let y=0;y<TILE;y+=4) ctx.fillRect(5*TILE,y,TILE,1);
  // Tile (6,0) = Oak Log top (rings)
  noisy(ctx, 6,0, 120,88,44, 8);
  ctx.strokeStyle="rgba(80,52,22,0.5)"; ctx.lineWidth=1;
  for(let r=2;r<9;r+=2){ctx.beginPath();ctx.arc(6*TILE+8,8,r,0,Math.PI*2);ctx.stroke();}
  // Tile (7,0) = Leaves
  noisy(ctx, 7,0, 50,105,50, 22);
  ctx.fillStyle="rgba(30,80,30,0.4)";
  for(let i=0;i<10;i++) ctx.fillRect(7*TILE+(Math.random()*14|0),Math.random()*14|0,2,2);
  // Tile (8,0) = Water
  noisy(ctx, 8,0, 26,107,138, 20);
  ctx.fillStyle="rgba(60,150,180,0.3)";
  for(let y=0;y<TILE;y+=3){ctx.fillRect(8*TILE,y,TILE,1);}
  // Tile (9,0) = Oak Planks
  noisy(ctx, 9,0, 198,160,98, 10);
  ctx.fillStyle="rgba(140,100,52,0.5)";
  for(let y=0;y<TILE;y+=4) ctx.fillRect(9*TILE,y,TILE,1);
  for(let x=0;x<TILE;x+=8) ctx.fillRect(9*TILE+x,0,1,TILE);
  // Tile (10,0) = Cobblestone
  noisy(ctx, 10,0, 98,98,98, 22);
  ctx.strokeStyle="rgba(45,45,45,0.5)"; ctx.lineWidth=1;
  for(let i=0;i<6;i++){const bx=Math.random()*10|0,by=Math.random()*10|0;ctx.strokeRect(10*TILE+bx,by,4+Math.random()*4|0,3+Math.random()*3|0);}
  // Tile (11,0) = Gravel
  noisy(ctx, 11,0, 138,128,112, 20);
  for(let i=0;i<8;i++){ctx.fillStyle=`rgba(100,95,85,0.3)`;ctx.fillRect(11*TILE+(Math.random()*12|0),Math.random()*12|0,3,3);}
  // Tile (12,0) = Glass
  ctx.fillStyle="rgba(180,220,240,0.35)";ctx.fillRect(12*TILE,0,TILE,TILE);
  ctx.strokeStyle="rgba(200,230,255,0.7)"; ctx.lineWidth=1;
  ctx.strokeRect(12*TILE+1,1,TILE-2,TILE-2);
  // Tile (13,0) = Brick
  drawGrid(ctx,13,0,0x8b3a3a,"rgba(80,22,18,0.7)",8,4,4);
  // Tile (14,0) = Bookshelf side
  noisy(ctx,14,0,198,160,98,8);
  ctx.fillStyle="#8B4513"; ctx.fillRect(14*TILE,0,TILE,2); ctx.fillRect(14*TILE,14,TILE,2);
  ctx.fillStyle="#8B0000"; for(let x=1;x<TILE-1;x+=4) ctx.fillRect(14*TILE+x,3,3,9);
  ctx.fillStyle="#228B22"; for(let x=3;x<TILE-1;x+=4) ctx.fillRect(14*TILE+x,3,2,9);
  // Tile (15,0) = Crafting Table top
  noisy(ctx,15,0,0xc8a464,8);
  ctx.fillStyle="rgba(80,50,20,0.8)";ctx.fillRect(15*TILE+1,1,TILE-2,1);ctx.fillRect(15*TILE+1,1,1,TILE-2);ctx.fillRect(15*TILE+1,TILE-2,TILE-2,1);ctx.fillRect(15*TILE+TILE-2,1,1,TILE-2);
  ctx.fillRect(15*TILE+1,TILE/2,TILE-2,1); ctx.fillRect(15*TILE+TILE/2,1,1,TILE-2);

  // Row 1
  // Gold ore (1,0)
  noisy(ctx,0,1,128,128,128,15); ctx.fillStyle="#d4a820";
  for(let i=0;i<5;i++) ctx.fillRect(0*TILE+(Math.random()*10|0),TILE+(Math.random()*10|0),3,3);
  // Iron ore (1,1)
  noisy(ctx,1,1,128,128,128,15); ctx.fillStyle="#c08060";
  for(let i=0;i<5;i++) ctx.fillRect(1*TILE+(Math.random()*10|0),TILE+(Math.random()*10|0),3,3);
  // Coal ore (1,2) -> actually index (2,1)
  noisy(ctx,2,1,128,128,128,15); ctx.fillStyle="#333";
  for(let i=0;i<4;i++) ctx.fillRect(2*TILE+(Math.random()*10|0),TILE+(Math.random()*10|0),3,3);
  // Diamond ore
  noisy(ctx,3,1,128,128,128,15); ctx.fillStyle="#30eecc";
  for(let i=0;i<5;i++) ctx.fillRect(3*TILE+(Math.random()*10|0),TILE+(Math.random()*10|0),3,3);
  // Glowstone
  noisy(ctx,4,1,255,220,100,22);
  ctx.fillStyle="rgba(255,255,200,0.6)";
  for(let y=0;y<TILE;y+=4) for(let x=0;x<TILE;x+=4) if(Math.random()>0.4) ctx.fillRect(4*TILE+x,TILE+y,2,2);
  // Snow
  noisy(ctx,5,1,238,238,255,6);
  // Ice
  ctx.fillStyle="rgba(170,200,255,0.55)"; ctx.fillRect(6*TILE,TILE,TILE,TILE);
  ctx.strokeStyle="rgba(180,210,255,0.5)"; ctx.strokeRect(6*TILE+1,TILE+1,TILE-2,TILE-2);
  // TNT side
  noisy(ctx,7,1,200,60,60,10);
  ctx.fillStyle="#222"; ctx.font="bold 6px monospace"; ctx.fillText("TNT",7*TILE+2,TILE+10);
  // TNT top (green)
  noisy(ctx,8,1,85,153,51,12);
  // Obsidian
  noisy(ctx,9,1,25,10,42,8);
  for(let i=0;i<4;i++){ctx.fillStyle="rgba(60,30,80,0.3)";ctx.fillRect(9*TILE+(Math.random()*12|0),TILE+(Math.random()*12|0),4,4);}
  // Sponge
  noisy(ctx,10,1,200,192,64,15);
  for(let y=0;y<TILE;y+=3) for(let x=0;x<TILE;x+=3) if(Math.random()>0.5){ctx.fillStyle="rgba(140,130,30,0.4)";ctx.fillRect(10*TILE+x,TILE+y,2,2);}
  // White wool
  noisy(ctx,11,1,220,220,220,10);
  // Red wool
  noisy(ctx,12,1,200,50,34,10);
  // Mossy stone
  noisy(ctx,13,1,96,128,80,18);
  for(let i=0;i<3;i++) ctx.fillRect(13*TILE+(Math.random()*12|0),TILE+(Math.random()*12|0),3+Math.random()*3|0,1);
  // Furnace front
  noisy(ctx,14,1,115,115,115,10);
  ctx.fillStyle="#554"; ctx.fillRect(14*TILE+4,TILE+5,8,6);
  ctx.fillStyle="#ff8800"; ctx.fillRect(14*TILE+5,TILE+6,6,4);
  // Mossy Cobble
  noisy(ctx,15,1,80,110,75,20);
  ctx.strokeStyle="rgba(40,80,40,0.5)"; 
  for(let i=0;i<5;i++) ctx.strokeRect(15*TILE+(Math.random()*10|0),TILE+(Math.random()*10|0),4+Math.random()*4|0,3+Math.random()*3|0);

  return c;
}

export function getAtlasTexture(): THREE.CanvasTexture {
  if (!atlasTexture) {
    atlasCanvas = buildAtlas();
    atlasTexture = new THREE.CanvasTexture(atlasCanvas);
    atlasTexture.magFilter = THREE.NearestFilter;
    atlasTexture.minFilter = THREE.NearestFilter;
    atlasTexture.generateMipmaps = false;
  }
  return atlasTexture;
}

// Map block type to atlas tile (tx, ty)
const BLOCK_TILES: Record<number, [number, number]> = {
  1: [0, 0],  // Grass (top face look)
  2: [2, 0],  // Dirt
  3: [3, 0],  // Stone
  4: [4, 0],  // Sand
  5: [5, 0],  // Oak Log
  6: [7, 0],  // Leaves
  7: [8, 0],  // Water
  8: [13, 0], // Brick
  9: [12, 0], // Glass
  10: [9, 0], // Oak Planks
  11: [10, 0],// Cobblestone
  12: [11, 0],// Gravel
  13: [0, 1], // Gold Ore
  14: [1, 1], // Iron Ore
  15: [2, 1], // Coal Ore
  16: [14, 0],// Bookshelf
  17: [13, 1],// Mossy Stone
  18: [9, 1], // Obsidian
  19: [4, 1], // Glowstone
  20: [5, 1], // Snow
  21: [6, 1], // Ice
  22: [15, 0],// Crafting Table
  23: [14, 1],// Furnace
  24: [7, 1], // TNT
  25: [10, 1],// Sponge
  26: [11, 1],// White Wool
  27: [12, 1],// Red Wool
  61: [3, 1], // Diamond ore
};

// Get UV offset for a block type as [uOffset, vOffset] in 0..1
export function getBlockUV(blockType: number): [number, number] {
  const tile = BLOCK_TILES[blockType] ?? [3, 0]; // default stone
  return [tile[0] / 16, tile[1] / 16];
}

/** Build a single MeshLambertMaterial for a block type using the atlas */
export function getBlockMaterial(blockType: number, info: any): THREE.Material {
  const tex = getAtlasTexture().clone();
  tex.needsUpdate = true;

  const [uOff, vOff] = getBlockUV(blockType);
  // Offset and repeat to show just the one tile
  tex.offset.set(uOff, 1 - vOff - 1/16);
  tex.repeat.set(1/16, 1/16);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;

  const isTransparent = info.transparent;
  const mat = new THREE.MeshLambertMaterial({
    map: tex,
    transparent: isTransparent,
    opacity: isTransparent ? (blockType === 7 ? 0.68 : 0.55) : 1,
    alphaTest: isTransparent ? 0 : 0.01,
  });
  if (info.emissive) {
    mat.emissive = new THREE.Color(info.emissive);
    mat.emissiveIntensity = 0.55;
  }
  return mat;
}

// Keep old export for compatibility
export function getBlockMaterials(blockType: number, info: any): THREE.Material[] {
  const mat = getBlockMaterial(blockType, info);
  // Return same material for all 6 faces — 1 draw call instead of 6
  return [mat, mat, mat, mat, mat, mat];
}
