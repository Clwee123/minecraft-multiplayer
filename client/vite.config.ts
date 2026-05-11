import { defineConfig } from "vite";

// Build time in IL (Israel) time
const _now = new Date();
const _il = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Jerusalem",
  year: "numeric", month: "2-digit", day: "2-digit",
  hour: "2-digit", minute: "2-digit", hour12: false,
}).formatToParts(_now);
const _p = Object.fromEntries(_il.map(p => [p.type, p.value]));
const buildTime = `${_p.year}-${_p.month}-${_p.day} ${_p.hour}:${_p.minute} IL`;

export default defineConfig({
  define: {
    __BUILD_TIME__: JSON.stringify(buildTime),
  },
  server: {
    port: 3000,
    proxy: {
      "/colyseus": {
        target: "http://localhost:8471",
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
