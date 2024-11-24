import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: { 
    // prevent the error 'Grid is not a function' from mui
    include: ['@mui/material/Unstable_Grid2/Grid2'],
  },
  server: {
    port: 3000,
  }
})
