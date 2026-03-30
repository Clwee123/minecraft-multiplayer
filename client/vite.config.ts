import { defineConfig } from "vite";

export default defineConfig({
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
