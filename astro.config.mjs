// @ts-check
import { defineConfig } from 'astro/config';

// User site (<user>.github.io) publishes at the root: set `site`, never `base`.
export default defineConfig({
  site: 'https://andresxcortes.github.io',
});
