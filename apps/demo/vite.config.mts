import { nxReadySignal } from '@nx/vite/plugins/nx-ready-signal.plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/demo',
  plugins: [react({}), tailwindcss(), nxReadySignal()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 4200,
    host: '127.0.0.1',
  },
  build: {
    outDir: '../../dist/apps/demo',
    emptyOutDir: true,
  },
});
