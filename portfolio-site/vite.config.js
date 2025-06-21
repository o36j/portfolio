import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },
  // For GitHub Pages deployment
  base: '/portfolio/',
  // For handling client-side routing with React Router
  server: {
    historyApiFallback: true,
  },
})
