import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies live in site-content/case-studies/ (see _template.md).
// Files starting with "_" are ignored. Keep every case anonymized unless
// client_named is true: a former employer, or a client with written permission.
const caseStudies = defineCollection({
  loader: glob({ base: './site-content/case-studies', pattern: '[^_]*.{md,mdx}' }),
  schema: z
    .object({
      title: z.string(),
      sector: z.string(),
      stage: z.string(),
      region: z.array(z.string()).nonempty(),
      services: z.array(z.string()).default([]),
      summary: z.string(),
      outcome: z.string(),
      date: z.coerce.date(),
      client_named: z.boolean().default(false),
      // Named organization; only allowed when client_named is true.
      organization: z.string().optional(),
      // Andrés's role, e.g. "Argentina CISO (in-house)" vs. an advisory engagement.
      role: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    })
    .refine((d) => !d.organization || d.client_named, {
      message:
        'organization is set but client_named is false: keep the case anonymized or set client_named: true',
      path: ['organization'],
    }),
});

export const collections = { 'case-studies': caseStudies };
