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
