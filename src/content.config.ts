import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies live in site-content/case-studies/ (see _template.md).
// Files starting with "_" are ignored. Keep every case anonymized unless
// client_named is true AND there is written permission from the client.
const caseStudies = defineCollection({
  loader: glob({ base: './site-content/case-studies', pattern: '[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    sector: z.string(),
    stage: z.string(),
    region: z.array(z.string()).nonempty(),
    services: z.array(z.string()).default([]),
    summary: z.string(),
    outcome: z.string(),
    date: z.coerce.date(),
    client_named: z.boolean().default(false),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { 'case-studies': caseStudies };
