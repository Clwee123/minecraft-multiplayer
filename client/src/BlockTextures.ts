/**
 * Procedural block texture generator.
 * Creates 16x16 canvas textures that look Minecraft-like.
 */
import * as THREE from "three";

const S = 16; // texture size

function makeCanvas(): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement("canvas");
  c.width = c.height = S;
  const ctx = c.getContext("2d")!;
  return [c, ctx];
}

// Fill solid color with per-pixel noise variation
function noiseFill(ctx: CanvasRenderingContext2D, r: number, g: number, b: number, variance = 12) {
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const v = (Math.random() - 0.5) * variance;
      ctx.fillStyle = `rgb(${Math.round(r+v)},${Math.round(g+v)},${Math.round(b+v)})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

// Draw a grid pattern (stone, cobble, brick)
function gridPattern(ctx: CanvasRenderingContext2D, baseR: number, baseG: number, baseB: number, lineColor: string, cellW: number, cellH: number, offset = 0) {
  noiseFill(ctx, baseR, baseG, baseB, 8);
  ctx.fillStyle = lineColor;
  // Horizontal lines
  for (let y = cellH; y < S; y += cellH) {
    ctx.fillRect(0, y, S, 1);
  }
  // Vertical lines with brick offset
  for (let y = 0; y < S; y += cellH) {
    const xoff = (Math.floor(y / cellH) % 2 === 0) ? 0 : offset;
    for (let x = xoff; x < S; x += cellW) {
      ctx.fillRect(x, y, 1, cellH);
    }
  }
}

function tex(c: HTMLCanvasElement): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  return t;
}

function solid(r: number, g: number, b: number, variance = 14): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas();
  noiseFill(ctx, r, g, b, variance);
  return tex(c);
}

// Cache so we don't regenerate
const cache = new Map<string, THREE.CanvasTexture>();
function cached(key: string, fn: () => THREE.CanvasTexture): THREE.CanvasTexture {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key)!;
}

export function getBlockTexture(blockType: number, face: "top" | "side" | "bottom"): THREE.CanvasTexture {
  const k = `${blockType}_${face}`;
  return cached(k, () => makeBlockTexture(blockType, face));
}

function makeBlockTexture(blockType: number, face: string): THREE.CanvasTexture {
  const [c, ctx] = makeCanvas();

  switch (blockType) {
    case 1: { // Grass
      if (face === "top") {
        noiseFill(ctx, 100, 160, 60, 15);
        // Add some darker patches
        for (let i = 0; i < 8; i++) {
          ctx.fillStyle = `rgba(60,120,30,0.3)`;
          ctx.fillRect(Math.random()*14|0, Math.random()*14|0, 2, 2);
        }
      } else if (face === "bottom") {
        noiseFill(ctx, 139, 105, 20, 12);
      } else {
        // Side: dirt bottom, grass top strip
        noiseFill(ctx, 139, 105, 20, 12);
        ctx.fillStyle = "rgba(100,160,60,0.9)";
        ctx.fillRect(0, 0, S, 3);
        // grass dripping down
        for (let x = 0; x < S; x += 2) {
          const h = 3 + (Math.random() * 2 | 0);
          ctx.fillStyle = "rgba(90,150,50,0.7)";
          ctx.fillRect(x, 0, 1, h);
        }
      }
      break;
    }
    case 2: noiseFill(ctx, 139, 105, 20, 14); break; // Dirt
    case 3: { // Stone
      noiseFill(ctx, 128, 128, 128, 18);
      // cracks
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = "rgba(80,80,80,0.4)";
        const x = Math.random()*14|0, y = Math.random()*14|0;
        ctx.fillRect(x, y, 2+Math.random()*4|0, 1);
      }
      break;
    }
    case 4: noiseFill(ctx, 194, 178, 128, 14); break; // Sand
    case 5: { // Oak Log
      if (face === "top" || face === "bottom") {
        // Ring pattern
        noiseFill(ctx, 120, 88, 44, 8);
        ctx.strokeStyle = "rgba(80,55,20,0.5)";
        for (let r = 2; r < 9; r += 2) {
          ctx.beginPath(); ctx.arc(8,8,r,0,Math.PI*2); ctx.stroke();
        }
      } else {
        // Bark
        noiseFill(ctx, 100, 70, 35, 10);
        for (let y = 0; y < S; y += 3) {
          ctx.fillStyle = "rgba(60,40,15,0.3)";
          ctx.fillRect(0, y, S, 1);
        }
      }
      break;
    }
    case 6: { // Leaves
      noiseFill(ctx, 45, 100, 45, 20);
      for (let i = 0; i < 12; i++) {
        ctx.fillStyle = `rgba(30,80,30,0.4)`;
        ctx.fillRect(Math.random()*14|0, Math.random()*14|0, 2, 2);
      }
      break;
    }
    case 8: { // Brick
      gridPattern(ctx, 150, 65, 55, "rgba(90,30,20,0.7)", 8, 4, 4);
      break;
    }
    case 10: { // Oak Planks
      noiseFill(ctx, 200, 165, 100, 10);
      ctx.fillStyle = "rgba(140,105,55,0.5)";
      for (let y = 0; y < S; y += 4) ctx.fillRect(0, y, S, 1);
      for (let x = 0; x < S; x += 8) ctx.fillRect(x, 0, 1, S);
      break;
    }
    case 11: { // Cobblestone
      noiseFill(ctx, 96, 96, 96, 20);
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = "rgba(50,50,50,0.3)";
        const x = Math.random()*12|0, y = Math.random()*12|0;
        const w = 3+Math.random()*3|0, h = 2+Math.random()*2|0;
        ctx.strokeStyle = "rgba(40,40,40,0.5)";
        ctx.strokeRect(x,y,w,h);
      }
      break;
    }
    case 13: { // Gold Ore
      noiseFill(ctx, 128, 128, 128, 15);
      ctx.fillStyle = "#d4a820";
      for (let i = 0; i < 5; i++) ctx.fillRect(Math.random()*12|0, Math.random()*12|0, 3, 3);
      break;
    }
    case 14: { // Iron Ore
      noiseFill(ctx, 128, 128, 128, 15);
      ctx.fillStyle = "#c08060";
      for (let i = 0; i < 5; i++) ctx.fillRect(Math.random()*12|0, Math.random()*12|0, 3, 3);
      break;
    }
    case 15: { // Coal Ore
      noiseFill(ctx, 128, 128, 128, 15);
      ctx.fillStyle = "#333";
      for (let i = 0; i < 4; i++) ctx.fillRect(Math.random()*12|0, Math.random()*12|0, 3, 3);
      break;
    }
    case 19: { // Glowstone
      noiseFill(ctx, 255, 220, 100, 20);
      ctx.fillStyle = "rgba(255,255,200,0.6)";
      for (let y=0; y<S; y+=4) for (let x=0; x<S; x+=4) {
        if (Math.random()>0.4) ctx.fillRect(x,y,2,2);
      }
      break;
    }
    case 20: { // Snow
      noiseFill(ctx, 238, 238, 255, 8);
      break;
    }
    case 22: { // Crafting Table
      if (face === "top") {
        noiseFill(ctx, 200, 165, 100, 8);
        ctx.fillStyle = "rgba(80,50,20,0.8)";
        ctx.fillRect(1,1,14,1); ctx.fillRect(1,1,1,14);
        ctx.fillRect(1,S/2,14,1); ctx.fillRect(S/2,1,1,14);
        ctx.fillRect(1,14,14,1); ctx.fillRect(14,1,1,14);
      } else {
        noiseFill(ctx, 200, 165, 100, 8);
        ctx.fillStyle = "rgba(100,70,30,0.6)";
        for (let y=0; y<S; y+=4) ctx.fillRect(0,y,S,1);
      }
      break;
    }
    default: {
      // Fallback: solid color from BLOCK_TYPES
      noiseFill(ctx, 128, 128, 128, 12);
    }
  }
  return tex(c);
}

// Build a 6-material array for a block type [px, nx, py, ny, pz, nz] = [right, left, top, bottom, front, back]
export function getBlockMaterials(blockType: number, info: any): THREE.Material[] {
  const transparent = info.transparent;
  const emissiveColor = info.emissive ? new THREE.Color(info.emissive) : undefined;

  const make = (face: "top" | "side" | "bottom"): THREE.Material => {
    const hasTexture = [1,2,3,4,5,6,8,10,11,13,14,15,19,20,22].includes(blockType);
    if (hasTexture) {
      const t = getBlockTexture(blockType, face);
      const m = new THREE.MeshLambertMaterial({ map: t, transparent, opacity: transparent ? (blockType===7?0.68:0.55) : 1 });
      if (emissiveColor) { m.emissive = emissiveColor; m.emissiveIntensity = 0.5; }
      return m;
    }
    // For blocks without special textures, fall back to solid color
    const col = face === "top" ? (info.topColor ?? info.color) : face === "bottom" ? (info.bottomColor ?? info.color) : info.color;
    const m = new THREE.MeshLambertMaterial({ color: col, transparent, opacity: transparent ? (blockType===7?0.68:0.55) : 1 });
    if (emissiveColor) { m.emissive = emissiveColor; m.emissiveIntensity = 0.5; }
    return m;
  };

  // Three.js face order for BoxGeometry: +X, -X, +Y, -Y, +Z, -Z
  return [make("side"), make("side"), make("top"), make("bottom"), make("side"), make("side")];
}
