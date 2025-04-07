import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // or '/subpath/' if hosted at a subdirectory
  plugins: [react()],
});
