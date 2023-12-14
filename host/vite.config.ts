import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        homepage: 'http://localhost:5001/assets/homepage.js',
        aboutpage: 'http://localhost:5002/assets/aboutpage.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.join(__dirname, 'src') }],
  },
  preview: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
