import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Keep generated caches separate when Windows users and coding sandboxes share a checkout.
  cacheDir: `node_modules/.vite-${process.env.USERNAME ?? 'local'}`,
  plugins: [react(), tailwindcss()],
  build: {
    license: { fileName: 'licenses/third-party-frontend.md' },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
    css: true,
  },
})
