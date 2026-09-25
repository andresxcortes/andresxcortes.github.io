// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { defineMdastPlugin } from 'satteri';

/**
 * Drop HTML comments from Markdown so authoring notes in site-content/
 * (e.g. "<!-- confirm before publishing -->") never reach the published HTML.
 */
const stripHtmlComments = defineMdastPlugin({
  name: 'strip-html-comments',
  html(node, ctx) {
    if (/^\s*<!--[\s\S]*-->\s*$/.test(node.value)) ctx.removeNode(node);
  },
});

// User site (<user>.github.io) publishes at the root: set `site`, never `base`.
export default defineConfig({
  site: 'https://andresxcortes.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    processor: satteri({ mdastPlugins: [stripHtmlComments] }),
  },
});
