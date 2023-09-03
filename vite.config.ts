import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    server: {
      https: true,
    },
    plugins: [
      react(),
      mkcert({
        source: "coding",
      }),
      tsPaths(),
    ],
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
