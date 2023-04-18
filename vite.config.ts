import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/MOD2-React-App/",
  plugins: [react()],
  build: {
    outDir: './docs'
  }
})
