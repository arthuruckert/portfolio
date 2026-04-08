import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
  server: {
    port: 3002,
    fs: {
      allow: [
        '/Users/ruckert/POTIFOLIO ARTHUR/site-v2',
        '/Users/ruckert/POTIFOLIO ARTHUR/site/assets',
      ],
    },
  },
  resolve: {
    preserveSymlinks: true,
  },
})
