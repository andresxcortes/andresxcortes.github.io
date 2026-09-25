import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseStudy = CollectionEntry<'case-studies'>;

/** Published case studies, newest first. Drafts are visible only in `npm run dev`. */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const entries = await getCollection('case-studies', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });
}
