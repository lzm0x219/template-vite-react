import { defineConfig } from "vite";
import { swcReactRefresh } from "vite-plugin-swc-react-refresh";
import mkcert from "vite-plugin-mkcert";
import { resolve } from "node:path";

export default defineConfig(() => {
  return {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "src"),
        },
      ],
    },
    server: {
      https: true,
    },
    plugins: [
      swcReactRefresh(),
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
