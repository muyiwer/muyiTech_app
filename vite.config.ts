import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'MuyiTech',
        short_name: 'MuyiTech',
        description: 'A sample PWA created with Vite + React',
        theme_color: '#007bff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/favicon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/favicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
