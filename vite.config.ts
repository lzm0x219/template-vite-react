import { UserConfigFn } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';
import tsconfigPaths from 'vite-tsconfig-paths';
import reactJsx from 'vite-react-jsx';
import windicss from 'vite-plugin-windicss';
import { visualizer } from 'rollup-plugin-visualizer';
import mkcert from 'vite-plugin-mkcert';

const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config = {
    server: {
      https: true,
    },
    plugins: [
      windicss(),
      reactRefresh(),
      tsconfigPaths(),
      legacy(),
      reactJsx(),
      mkcert({
        source: 'coding',
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react'],
            "react-dom": ["react-dom"]
          },
        },
      },
    },
  };
  if (mode === 'analyze') {
    config.plugins.push(
      visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    );
  }
  return config;
};

export default defineConfig;
