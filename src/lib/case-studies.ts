import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseStudy = CollectionEntry<'case-studies'>;
export type CaseType = CaseStudy['data']['type'];

export const typeLabels: Record<CaseType, string> = {
  engagement: 'Engagement',
  project: 'Project',
  research: 'Research',
  resource: 'Resource',
};

/** Published entries, newest first (undated last). Drafts are visible only in `npm run dev`. */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const entries = await getCollection('case-studies', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
}

/** One-line context for cards and hero subtitles: organization, sector, stage, region. */
export function contextLine(data: CaseStudy['data']): string {
  const org = data.client_named ? data.organization : undefined;
  return [org, data.sector, data.stage, data.region.join(' / ') || undefined]
    .filter(Boolean)
    .join(' · ');
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });
}
