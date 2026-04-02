import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function htmlOgOriginPlugin(): Plugin {
  return {
    name: 'html-og-origin',
    transformIndexHtml(html) {
      const origin = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:5173';
      return html.replaceAll('__OG_SITE_ORIGIN__', origin);
    },
  };
}

export default defineConfig({
  plugins: [react(), htmlOgOriginPlugin()],
  define: {
    __VERCEL_ENV__: JSON.stringify(process.env.VERCEL_ENV ?? ''),
  },
});
