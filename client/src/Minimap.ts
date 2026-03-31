import * as THREE from "three";
import { World } from "./World";
import { BLOCK_TYPES } from "./blocks";

// Pre-compute CSS hex color strings for all block types — eliminates toString(16)+padStart per pixel
const _BLOCK_CSS_COLORS: Record<number, string> = {};
for (const [idStr, info] of Object.entries(BLOCK_TYPES)) {
  const id = Number(idStr);
  if (info && (info as any).color != null) {
    const hex = ((info as any).color as number).toString(16).padStart(6, "0");
    _BLOCK_CSS_COLORS[id] = `#${hex}`;
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
    // Clear
    this.drawEmptyMap();

    const centerX = this.CANVAS_SIZE / 2;
    const centerY = this.CANVAS_SIZE / 2;
    const scale = this.CANVAS_SIZE / (this.RADIUS * 2);

    // Draw blocks around player
    const minBlockX = Math.floor(playerPos.x) - this.RADIUS;
    const maxBlockX = Math.floor(playerPos.x) + this.RADIUS;
    const minBlockZ = Math.floor(playerPos.z) - this.RADIUS;
    const maxBlockZ = Math.floor(playerPos.z) + this.RADIUS;

    for (let bx = minBlockX; bx <= maxBlockX; bx++) {
      for (let bz = minBlockZ; bz <= maxBlockZ; bz++) {
        // Use getBlockType — O(1) integer-key lookup, no string allocation
        let blockType = 0;
        for (let by = 40; by >= 0; by--) {
          const t = this.world.getBlockType(bx, by, bz);
          if (t !== undefined) { blockType = t; break; }
        }

        if (blockType === 0) continue;

        // Use pre-computed CSS color string — no toString/padStart allocation per pixel
        const cssColor = _BLOCK_CSS_COLORS[blockType] ?? "#ffffff";

        // Convert to canvas coordinates
        const px = centerX + (bx - playerPos.x) * scale;
        const py = centerY + (bz - playerPos.z) * scale;

        this.ctx.fillStyle = cssColor;
        this.ctx.fillRect(px - scale / 2, py - scale / 2, scale, scale);
      }
    }

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
