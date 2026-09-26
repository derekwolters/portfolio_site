import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

const clinicDashboardAlias = (): Plugin => ({
  name: 'clinic-dashboard-alias',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/clinicdashboard' || req.url === '/clinicdashboard/') {
        req.url = '/clinicdashboard/index.html';
      }
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/clinicdashboard' || req.url === '/clinicdashboard/') {
        req.url = '/clinicdashboard/index.html';
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), clinicDashboardAlias()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.tsx'
  }
});
