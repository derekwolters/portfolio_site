import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const publicProjectRouteAlias = (): Plugin => ({
  name: 'public-project-route-alias',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const path = req.url?.split('?')[0] ?? '/';
      const slugMatch = path.match(/^\/([a-z0-9-]+)\/?$/i);

      if (slugMatch) {
        const slug = slugMatch[1].toLowerCase();
        const projectIndex = resolve(process.cwd(), 'public', slug, 'index.html');

        if (existsSync(projectIndex)) {
          req.url = `/${slug}/index.html`;
        }
      }

      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      const path = req.url?.split('?')[0] ?? '/';
      const slugMatch = path.match(/^\/([a-z0-9-]+)\/?$/i);

      if (slugMatch) {
        const slug = slugMatch[1].toLowerCase();
        const projectIndex = resolve(process.cwd(), 'public', slug, 'index.html');

        if (existsSync(projectIndex)) {
          req.url = `/${slug}/index.html`;
        }
      }

      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), publicProjectRouteAlias()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.tsx'
  }
});
