import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: true, // use "describe", "expect", etc without importing them
    environment: "jsdom", // makes our tests work better as if they're in the browser
    setupFiles: "src/setupTest.js" // do any test config before any tests run
  }
})
