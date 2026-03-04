import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://andreiceaetchii.github.io',
  base: '/trans-euro-express',
  integrations: [sitemap()],
});
