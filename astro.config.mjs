// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site (<user>.github.io) publishes at the root: set `site`, never `base`.
export default defineConfig({
  site: 'https://andresxcortes.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
