// Source: site-content/pages/regulatory-coverage.md
export const columns = [
  'Fintech & Payments',
  'Crypto / Virtual Assets',
  'AML / CFT (FIU)',
  'Data Protection',
] as const;

export interface Market {
  name: string;
  cells: [string, string, string, string];
}

export const markets: Market[] = [
  {
    name: 'Argentina',
    cells: [
      'BCRA — Payment Service Providers (PSP / PSPCP) and payment accounts (Comunicaciones "A").',
      'CNV — PSAV registry; RG 1058/2025 (registration, minimum net worth, cybersecurity, custody, annual audit); Ley 27.739.',
      'UIF — Ley 25.246 (amended by Ley 27.739); VASPs as obligated subjects.',
      'Ley 25.326 (Personal Data Protection) — AAIP.',
    ],
  },
  {
    name: 'Mexico',
    cells: [
      'Ley Fintech / LRITF (2018) — ITFs: IFPE (e-money) & IFC (crowdfunding); CNBV + Banxico; SPEI / CoDi.',
      'Virtual assets only with prior Banxico authorization; restrictive perimeter for ITFs and banks.',
      'LFPIORPI ("Ley Antilavado") — UIF under SHCP.',
      'New LFPDPPP (2025) — Secretaría Anticorrupción y Buen Gobierno (replaced INAI).',
    ],
  },
  {
    name: 'Brazil',
    cells: [
      'Lei 12.865/2013 — payment institutions; Pix and Open Finance (BCB).',
      'Lei 14.478/2022 (BVAL); BCB Resolutions 519/520/521 (Nov 2025) — authorization, prudential rules, Travel Rule; BCB supervision.',
      'Lei 9.613/1998 — COAF; VASPs as obligated entities.',
      'LGPD (Lei 13.709/2018) — ANPD.',
    ],
  },
];
