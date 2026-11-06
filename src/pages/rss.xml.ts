import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

// Hand-written RSS 2.0 feed (no extra dependency). Lists published case studies,
// research and notes, newest first. Drafts and undated entries are skipped.
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET(context: APIContext) {
  const site = context.site!;
  const entries = (await getCollection('case-studies'))
    .filter((e) => !e.data.draft && e.data.date)
    .sort((a, b) => b.data.date!.valueOf() - a.data.date!.valueOf());

  const items = entries
    .map((e) => {
      const url = new URL(`/portfolio/${e.id}/`, site).href;
      return `    <item>
      <title>${esc(e.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${e.data.date!.toUTCString()}</pubDate>
      <description>${esc(e.data.summary)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Andrés Cortés — Portfolio</title>
    <link>${site.href}</link>
    <description>Research, case studies and notes on fintech and crypto security in Latin America.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
