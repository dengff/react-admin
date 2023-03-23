import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import postcssPresetEnv from 'postcss-preset-env';
import externalGlobals from 'rollup-plugin-external-globals';

import {visualizer} from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8090,
    // proxy: {
    //   '/dev-api': {
    //     target: 'XXX.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dev-api/, '')
    //   }
    // }
  },
  plugins: [
    react(),
    externalGlobals({
      echarts: 'echarts',
    }),
    // visualizer(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'src': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.jsx', '.tsx', '.js', '.ts', '.json'],
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
});
