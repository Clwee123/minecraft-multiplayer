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

gameServer.define("game_room", GameRoom).enableRealtimeListing();

httpServer.listen(PORT, () => {
  console.log(`\n🎮  Minecraft Multiplayer Server`);
  console.log(`   WebSocket : ws://localhost:${PORT}`);
  console.log(`   Monitor   : http://localhost:${PORT}/colyseus\n`);
});
