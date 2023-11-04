import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { partytownVite } from '@builder.io/partytown/utils';

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown'),
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      '@components': resolve(__dirname, '/src/components'),
      '@hooks': resolve(__dirname, '/src/hooks'),
      '@routes': resolve(__dirname, '/src/routes'),
      '@services': resolve(__dirname, '/src/services'),
      '@utils': resolve(__dirname, '/src/utils'),
      '@pages': resolve(__dirname, '/src/pages'),
      '@paths': resolve(__dirname, '/src/paths'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup-tests.js',
  },
});
