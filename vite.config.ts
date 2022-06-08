import { defineConfig } from "vite";
import type { UserConfig } from "vite"; 
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(({ command, mode }) => {
  const config: UserConfig = {
    server: {
      https: true,
    },
    plugins: [
      react(),
      tsconfigPaths(),
      legacy(),
      mkcert({
        source: "coding",
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react"],
            "react-dom": ["react-dom"],
          },
        },
      },
    },
  };
  return config;
});
