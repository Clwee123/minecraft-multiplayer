# Minecraft Multiplayer — project conventions

## Multiplayer sync: state, not messages

For Colyseus multiplayer, **sync ongoing or important data via the shared schema state on the server**, and have the client listen/react. Do **not** invent new `room.send` / `onMessage` channels for things that have a "current value" (positions, HP, time-of-day, world cells, mob status, room phase, etc.).

Messages (`room.send` / `onMessage`) are reserved for **one-shot events** with no persistence:
- chat lines
- ephemeral sound/particle triggers
- command acks

If you see an existing message-based sync (e.g. `mobUpdate`, `playerDied`, position broadcasts) that has "current value" semantics, treat it as a bug to fix: move the data into the schema state on the server and switch the client to state listeners.

Why: messages don't reconcile late joiners, are easy to drop, and produce console spam on the receiver if it doesn't register a handler. State is replicated automatically by Colyseus, handles late joiners, and survives reconnects.

## Client architecture

- `client/src/classic/main.ts` — orchestration
- `client/src/classic/World.ts` — chunked voxel world (Map of `cx,cz` → Chunk)
- `client/src/classic/Player.ts` — local player physics + input
- `client/src/classic/Multiplayer.ts` — Colyseus client. Reconciles remote players + mobs from state each frame.
- `client/src/classic/PlayerModel.ts` — GLB loader, nametag billboards
- `client/src/classic/CraftingUI.ts` — drag-and-drop, hold-RMB place, recipe book
- `client/src/classic/Textures.ts` — atlas + block/item tables

## Deploy

`client` builds with Vite to `client/dist`. The Colyseus server lives on the VPS at `159.223.140.36` (room name `game_room`). HTTPS pages must use `wss://<ip>.nip.io` to avoid mixed-content blocking — the `resolveServerUrl()` helper in Multiplayer.ts handles the rewrite.

**There is no auto-deploy** — no GitHub Actions, no Netlify auto-pull. Pushing to main does *not* update the live site at `https://159.223.140.36.nip.io`. Every change must be shipped explicitly via:

```
DEPLOY_PASSWORD='…' python scripts/deploy.py
```

VPS paths (verified, do not change without re-probing — earlier `vps-setup.sh` suggests `/opt/minecraft-multiplayer` but that is wrong):

| Thing | Path |
|---|---|
| Repo on VPS | `/root/minecraft-repo/` |
| nginx static root | `/var/www/minecraft/` (client/dist must be COPIED here — building in place is not enough) |
| Server | `/root/minecraft-repo/server`, runs via `ts-node-dev` under pm2 process name `mc-server`, port 8471 |
| nginx config | `/etc/nginx/sites-enabled/*` — proxies WS + `/matchmake` + `/colyseus` to localhost:8471, otherwise serves from /var/www/minecraft |

`scripts/deploy.py` does: git pull → npm install + build client → copy dist to /var/www/minecraft → npm install server → `pm2 restart mc-server`. After it runs, the bundle hash in the served `index.html` changes (e.g. `index-DePyMSfV.js`); the build-stamp text in the bottom-left HUD is a quick visual check.
