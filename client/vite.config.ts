import { defineConfig } from "vite";

const buildTime = new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC";

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
