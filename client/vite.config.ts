import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/vivi-landing/' : '/',
  plugins: [tailwindcss(), viteReact()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
}))
