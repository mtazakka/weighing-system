/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      config: `${path.resolve(__dirname, './src/config/')}`,
      features: `${path.resolve(__dirname, './src/features/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
      router: `${path.resolve(__dirname, './src/router/')}`,
      services: `${path.resolve(__dirname, './src/services/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
    }
  }
});
