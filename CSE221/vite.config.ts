import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: './' so the build works from any GitHub Pages sub-path (e.g. /CSE221/)
export default defineConfig({
  base: './',
  plugins: [react()],
})
