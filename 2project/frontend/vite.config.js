import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server :{
  proxy : {
    '/api': {
      target: 'http://localhost:3000', // Node.js server URL
      // changeOrigin: true,
      // secure: false, // If your backend is using HTTPS, set this to true
    }
  }
  },
  plugins: [react()],
})
