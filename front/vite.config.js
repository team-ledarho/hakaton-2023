import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'node:path';
import { partytownVite } from '@builder.io/partytown/utils';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown')
    })
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@routes": "/src/routes",
      "@services": "/src/services",
      "@utils": "/src/utils",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup-tests.js",
  },
});
