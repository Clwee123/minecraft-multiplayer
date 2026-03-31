import * as THREE from "three";
import { World } from "./World";
import { BLOCK_TYPES } from "./blocks";


// Pre-compute RGBA byte arrays for all block types — eliminates fillStyle string + fillRect per pixel
const _BLOCK_RGBA: Record<number, [number, number, number]> = {};
for (const [idStr, info] of Object.entries(BLOCK_TYPES)) {
  const id = Number(idStr);
  if (info && (info as any).color != null) {
    const c = (info as any).color as number;
    _BLOCK_RGBA[id] = [(c >> 16) & 0xff, (c >> 8) & 0xff, c & 0xff];
  }
}

export class Minimap {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private container: HTMLElement;
  private updateTimer = 0;
  private world: World;
  private readonly RADIUS = 32;
  private readonly CANVAS_SIZE = 128;
  private readonly UPDATE_INTERVAL = 0.3;
  // Pre-allocated ImageData buffer — single putImageData replaces 4096 fillRect calls per update
  private imgData: ImageData;

  constructor(world: World) {
    this.world = world;

    // Create canvas
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.CANVAS_SIZE;
    this.canvas.height = this.CANVAS_SIZE;
    this.ctx = this.canvas.getContext("2d")!;

    // Create container
    this.container = document.getElementById("minimap")!;
    if (!this.container) {
      throw new Error("Minimap container not found");
    }

    // Mount canvas directly — avoids toDataURL PNG encode each update
    this.container.innerHTML = "";
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.container.appendChild(this.canvas);

    // Pre-allocate ImageData — single putImageData replaces N fillRect calls
    this.imgData = this.ctx.createImageData(this.CANVAS_SIZE, this.CANVAS_SIZE);

    // Draw initial empty map
    this.drawEmptyMap();
  }

  private drawEmptyMap() {
    this.ctx.fillStyle = "#1a1a1a";
    this.ctx.fillRect(0, 0, this.CANVAS_SIZE, this.CANVAS_SIZE);
  }

  update(
    dt: number,
    playerPos: THREE.Vector3,
    playerYaw: number,
    otherPlayers: Array<{ x: number; z: number }>,
    mobs: Array<{ x: number; z: number; alive: boolean }>
  ) {
    this.updateTimer += dt;
    if (this.updateTimer < this.UPDATE_INTERVAL) return;
    this.updateTimer = 0;

    this.drawMap(playerPos, playerYaw, otherPlayers, mobs);
  }

  private drawMap(
    playerPos: THREE.Vector3,
    playerYaw: number,
    otherPlayers: Array<{ x: number; z: number }>,
    mobs: Array<{ x: number; z: number; alive: boolean }>
  ) {
    const centerX = this.CANVAS_SIZE / 2;
    const centerY = this.CANVAS_SIZE / 2;
    const scale = this.CANVAS_SIZE / (this.RADIUS * 2);

    // Fill ImageData buffer directly — single putImageData replaces 4096 fillStyle+fillRect calls
    const data = this.imgData.data;
    const SIZE = this.CANVAS_SIZE;

    // Background: fill all pixels to #1a1a1a
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 0x1a; data[i+1] = 0x1a; data[i+2] = 0x1a; data[i+3] = 255;
    }

    // Draw blocks
    const minBlockX = Math.floor(playerPos.x) - this.RADIUS;
    const maxBlockX = Math.floor(playerPos.x) + this.RADIUS;
    const minBlockZ = Math.floor(playerPos.z) - this.RADIUS;
    const maxBlockZ = Math.floor(playerPos.z) + this.RADIUS;

    for (let bx = minBlockX; bx <= maxBlockX; bx++) {
      for (let bz = minBlockZ; bz <= maxBlockZ; bz++) {
        // Scan down from y=40 to find top block
        let blockType = 0;
        for (let by = 40; by >= 0; by--) {
          const t = this.world.getBlockType(bx, by, bz);
          if (t !== undefined) { blockType = t; break; }
        }
        if (blockType === 0) continue;

        // Convert to canvas pixel coords
        const px = Math.round(centerX + (bx - playerPos.x) * scale);
        const py = Math.round(centerY + (bz - playerPos.z) * scale);
        if (px < 0 || px >= SIZE || py < 0 || py >= SIZE) continue;

        // Write pixel directly into ImageData (avoid fillStyle string + fillRect)
        const rgb = _BLOCK_RGBA[blockType];
        const idx = (py * SIZE + px) * 4;
        if (rgb) {
          data[idx] = rgb[0]; data[idx+1] = rgb[1]; data[idx+2] = rgb[2]; data[idx+3] = 255;
        } else {
          data[idx] = 255; data[idx+1] = 255; data[idx+2] = 255; data[idx+3] = 255;
        }
      }
    }

    // Blit the terrain layer in one call
    this.ctx.putImageData(this.imgData, 0, 0);

    // Draw mobs (red dots)
    for (const mob of mobs) {
      if (!mob.alive) continue;
      const px = centerX + (mob.x - playerPos.x) * scale;
      const py = centerY + (mob.z - playerPos.z) * scale;
      this.ctx.fillStyle = "#ff3333";
      this.ctx.beginPath();
      this.ctx.arc(px, py, 2, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Draw other players (yellow dots)
    for (const op of otherPlayers) {
      const px = centerX + (op.x - playerPos.x) * scale;
      const py = centerY + (op.z - playerPos.z) * scale;
      this.ctx.fillStyle = "#ffff33";
      this.ctx.beginPath();
      this.ctx.arc(px, py, 2, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Draw player (white dot with direction indicator)
    this.ctx.fillStyle = "#ffffff";
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
    this.ctx.fill();

    // Direction indicator
    const dirLen = 6;
    const dirX = centerX + Math.sin(playerYaw) * dirLen;
    const dirY = centerY + Math.cos(playerYaw) * dirLen;
    this.ctx.strokeStyle = "#ffffff";
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX, centerY);
    this.ctx.lineTo(dirX, dirY);
    this.ctx.stroke();

    // Canvas is mounted directly — no toDataURL needed (was expensive PNG encode every 0.3s)
  }

  dispose() {
    this.canvas.width = 0;
    this.canvas.height = 0;
  }
}
