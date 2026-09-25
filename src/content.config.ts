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
      // engagement = client or employer work; project = own build / PoC;
      // research = papers; resource = tools and deliverables.
      type: z.enum(['engagement', 'project', 'research', 'resource']).default('engagement'),
      title: z.string(),
      summary: z.string(),
      sector: z.string().optional(),
      stage: z.string().optional(),
      region: z.array(z.string()).default([]),
      services: z.array(z.string()).default([]),
      outcome: z.string().optional(),
      date: z.coerce.date().optional(),
      client_named: z.boolean().default(false),
      // Named organization; only allowed when client_named is true.
      organization: z.string().optional(),
      // Andrés's role, e.g. "Argentina CISO (in-house)" vs. an advisory engagement.
      role: z.string().optional(),
      // Research only.
      authors: z.array(z.string()).optional(),
      status: z.string().optional(),
      language: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    })
    .superRefine((d, ctx) => {
      if (d.organization && !d.client_named) {
        ctx.addIssue({
          code: 'custom',
          path: ['organization'],
          message:
            'organization is set but client_named is false: keep the case anonymized or set client_named: true',
        });
      }
      if (d.type === 'engagement') {
        for (const key of ['sector', 'stage', 'outcome', 'date'] as const) {
          if (!d[key]) ctx.addIssue({ code: 'custom', path: [key], message: `${key} is required for engagements` });
        }
        if (d.region.length === 0) {
          ctx.addIssue({ code: 'custom', path: ['region'], message: 'region is required for engagements' });
        }
      }
    }),
});

export const collections = { 'case-studies': caseStudies };
