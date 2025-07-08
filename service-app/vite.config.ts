import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "service_app",
      filename: "serviceEntry.js",
      exposes: {
        "./CustomButton": "./src/components/CustomButton",
        "./AuthProvider": "./src/contexts/AuthContext/AuthProvider",
        "./useAuthContext": "./src/contexts/AuthContext/useAuthContext",
        "./ServiceApp": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
    {
      name: "vite-plugin-notify-host-on-rebuild",
      apply(config, { command }) {
        return Boolean(command === "build" && config.build?.watch);
      },
      async buildEnd(error) {
        if (!error) {
          try {
            await fetch("http://localhost:8000/__fullReload");
          } catch (e) {
            console.log(e);
          }
        }
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
