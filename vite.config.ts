import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-leaflet', 'leaflet'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        // manualChunks disabled for debugging
      }
    },
  },
  server: {
    port: 3000,
    host: true
  }
});