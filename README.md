# ⛏ Minecraft Multiplayer

A multiplayer voxel game built with **Three.js** + **Colyseus**, based on the architecture of [minecraft-threejs](https://github.com/vyse12138/minecraft-threejs).

## Stack

| Layer      | Tech                              |
|------------|-----------------------------------|
| 3D Engine  | Three.js r160                     |
| Multiplayer| Colyseus 0.15 (WebSocket)         |
| Frontend   | Vite 5 + TypeScript               |
| Backend    | Node.js + Express + Colyseus      |
| Terrain    | simplex-noise procedural gen      |

## Quick Start

```bash
# 1. Install all dependencies
npm run install:all

# 2. Start both server and client
npm run dev
```

Then open **http://localhost:3000** in your browser.

Open **multiple tabs** to test multiplayer — each tab is an independent player.

## Controls

| Key / Mouse          | Action                    |
|----------------------|---------------------------|
| WASD                 | Move                      |
| Space                | Jump                      |
| Left Shift           | Sprint                    |
| Left Click           | Break block               |
| Right Click          | Place block               |
| Scroll Wheel         | Cycle hotbar              |
| 1–8                  | Select hotbar slot        |
| T                    | Open chat                 |
| Enter                | Send chat / confirm       |
| Escape               | Close chat                |

## Project Structure

```
minecraft-multiplayer/
├── server/                   # Colyseus backend (Node + TypeScript)
│   └── src/
│       ├── index.ts          # Server entry point (port 2567)
│       └── rooms/
│           └── GameRoom.ts   # Game room with schemas
│
├── client/                   # Vite frontend (TypeScript)
│   └── src/
│       ├── main.ts           # Entry point, game loop
│       ├── World.ts          # Terrain gen & block management
│       ├── Player.ts         # First-person controls & physics
│       ├── MultiplayerManager.ts  # Colyseus client integration
│       ├── OtherPlayer.ts    # Remote player rendering
│       ├── UI.ts             # HUD, hotbar, chat
│       └── blocks.ts         # Block type definitions
│
└── package.json              # Root scripts (concurrently)
```

## Multiplayer Features

- **Real-time player positions** synced at 20 Hz
- **Block changes** (place/remove) broadcast to all players instantly
- **World persistence** within a session — late joiners receive all block changes
- **Chat** system
- **Player name tags** rendered as 3D sprites above each player
- Smooth **position interpolation** for remote players

## Server Monitor

While the server is running, visit:
**http://localhost:2567/colyseus**

## Development

```bash
npm run dev:server   # server only (port 2567)
npm run dev:client   # client only (port 3000)
npm run dev          # both together
```
