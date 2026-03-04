import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://andreiceaetchii.github.io',
  base: '/trans-euro-express',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
});
