import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { swcReactRefresh } from "vite-plugin-swc-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(() => {
  return {
    server: {
      https: true,
    },
    plugins: [
      swcReactRefresh(),
      tsconfigPaths(),
      legacy(),
      mkcert({
        source: "coding",
      }),
    ],
    esbuild: { jsx: "automatic" },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom", "react-router-dom"],
          },
        },
      },
    },
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
  };
});
