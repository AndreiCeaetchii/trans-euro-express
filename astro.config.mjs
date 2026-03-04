import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://trans-euro-express.md',
  base: '/',
  integrations: [sitemap()],
});
