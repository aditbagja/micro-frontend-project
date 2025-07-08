import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

import { IncomingMessage, ServerResponse } from "node:http";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main_app",
      remotes: {
        serviceApp: "http://localhost:8001/assets/serviceEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    {
      name: "vite-plugin-reload-endpoint",
      configureServer(server) {
        server.middlewares.use(
          (req: IncomingMessage, res: ServerResponse, next) => {
            if (req.url === "/__fullReload") {
              server.hot.send({ type: "full-reload" });
              res.end("Full reload triggered");
            } else {
              next();
            }
          }
        );
      },
    },
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
