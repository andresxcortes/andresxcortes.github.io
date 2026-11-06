// Source: site-content/pages/regulatory-coverage.md
export const columns = [
  'Fintech & Payments',
  'Crypto / Virtual Assets',
  'AML / CFT (FIU)',
  'Data Protection',
] as const;

export interface Market {
  name: string;
  code: 'AR' | 'MX' | 'BR' | 'CO';
  cells: [string, string, string, string];
}

export const markets: Market[] = [
  {
    name: 'Argentina',
    code: 'AR',
    cells: [
      'BCRA — Payment Service Providers (PSP / PSPCP) and payment accounts (Comunicaciones "A").',
      'CNV — PSAV registry; RG 1058/2025 (registration, minimum net worth, cybersecurity, custody, annual audit); Ley 27.739.',
      'UIF — Ley 25.246 (amended by Ley 27.739); VASPs as obligated subjects.',
      'Ley 25.326 (Personal Data Protection) — AAIP.',
    ],
  },
  {
    name: 'Mexico',
    code: 'MX',
    cells: [
      'Ley Fintech / LRITF (2018) — ITFs: IFPE (e-money) & IFC (crowdfunding); CNBV + Banxico; SPEI / CoDi.',
      'Virtual assets only with prior Banxico authorization; restrictive perimeter for ITFs and banks.',
      'LFPIORPI ("Ley Antilavado") — UIF under SHCP.',
      'New LFPDPPP (2025) — Secretaría Anticorrupción y Buen Gobierno (replaced INAI).',
    ],
  },
  {
    name: 'Brazil',
    code: 'BR',
    cells: [
      'Lei 12.865/2013 — payment institutions; Pix and Open Finance (BCB).',
      'Lei 14.478/2022 (BVAL); BCB Resolutions 519/520/521 (Nov 2025) — authorization, prudential rules, Travel Rule; BCB supervision.',
      'Lei 9.613/1998 — COAF; VASPs as obligated entities.',
      'LGPD (Lei 13.709/2018) — ANPD.',
    ],
  },
  {
    // Added Nov 2026. Sources: DIAN Res. 000240/2025 (CARF), UIAF Res. 314/2022, Bill 510/2025
    // archived (press, Aug 2026). Validate with a Colombian counsel before relying on it.
    name: 'Colombia',
    code: 'CO',
    cells: [
      'Decreto 1692 de 2020 — payment services and providers; Banco de la República (low-value payment interoperability) and SFC; open finance rollout led by the SFC.',
      'No comprehensive crypto law: the VASP bill (Proyecto 510 de 2025) was archived and the SFC does not authorize or supervise crypto businesses. DIAN Res. 000240/2025 adopts the OECD CARF (first reporting planned for 2027).',
      'UIAF — Ley 526 de 1999; Res. 314 de 2022 (suspicious- and monthly-transaction reports for covered providers).',
      'Ley 1581 de 2012 (habeas data) — Superintendencia de Industria y Comercio (SIC).',
    ],
  },
];
