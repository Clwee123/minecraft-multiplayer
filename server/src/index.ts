import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "colyseus";
import { monitor } from "@colyseus/monitor";
import { GameRoom } from "./rooms/GameRoom";

// Keep process alive even on uncaught errors
process.on("uncaughtException", (err) => {
  console.error("[uncaughtException]", err.message);
});
process.on("unhandledRejection", (reason) => {
  console.error("[unhandledRejection]", reason);
});

const PORT = Number(process.env.PORT) || 8471;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/colyseus", monitor());

const httpServer = createServer(app);
const gameServer = new Server({ server: httpServer });

// Route players to rooms by mode: survival / creative / bedwars / parkour /
// oneblock. Colyseus' filterBy ensures joinOrCreate only matches an existing
// room when the requested mode matches. Survival players never end up in a
// bedwars room, etc.
gameServer.define("game_room", GameRoom).filterBy(["mode"]).enableRealtimeListing();

httpServer.listen(PORT, () => {
  console.log(`\n🎮  Minecraft Multiplayer Server`);
  console.log(`   WebSocket : ws://localhost:${PORT}`);
  console.log(`   Monitor   : http://localhost:${PORT}/colyseus\n`);
});

// ── Graceful shutdown ────────────────────────────────────────────────────
//
// When pm2 / systemd / docker sends SIGTERM (e.g. on deploy), broadcast a
// `shutdown` message to every room with a 30-second countdown, then call
// Colyseus' gracefullyShutdown so clients get a clean disconnect with a
// reason code instead of "Disconnected from server".
const GRACE_SECONDS = 30;
let shuttingDown = false;
function gracefulExit(signal: string) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`[shutdown] ${signal} received — notifying rooms (${GRACE_SECONDS}s grace)`);
  const endsAt = Date.now() + GRACE_SECONDS * 1000;
  // Tell every room (and through it, every connected client) that we're
  // about to restart. The room broadcasts `shutdown` → clients pop a
  // banner with the countdown. The room sets state.shuttingDownAt so
  // late joiners + reconnects also see the warning.
  for (const room of (gameServer as any).matchMaker?.rooms?.values?.() ?? []) {
    try {
      room.broadcast("shutdown", { reason: "Server restarting", endsAt });
      if (room.state) (room.state as any).shuttingDownAt = Math.floor(endsAt / 1000);
    } catch (e) { console.warn("[shutdown] broadcast failed", e); }
  }
  setTimeout(() => {
    console.log("[shutdown] grace expired — gracefullyShutdown()");
    gameServer.gracefullyShutdown(true).then(() => process.exit(0));
  }, GRACE_SECONDS * 1000);
}
process.on("SIGTERM", () => gracefulExit("SIGTERM"));
process.on("SIGINT",  () => gracefulExit("SIGINT"));
