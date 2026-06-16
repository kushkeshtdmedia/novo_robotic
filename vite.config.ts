import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/novo_robotic/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});