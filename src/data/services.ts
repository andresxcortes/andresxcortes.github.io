// Source: site-content/pages/services.md
export type ServiceIcon = 'ciso' | 'regulatory' | 'iso' | 'privacy' | 'pmo' | 'incident';

export interface Service {
  /** Anchor on /services/ and target of the home page tiles. */
  slug?: string;
  icon?: ServiceIcon;
  /** One line for the home page tiles. */
  blurb?: string;
  title: string;
  description: string;
  link?: { href: string; label: string };
}

export const services: Service[] = [
  {
    slug: 'virtual-fractional-ciso',
    icon: 'ciso',
    blurb: 'A senior security owner without a full-time hire.',
    title: 'Virtual / Fractional CISO',
    description:
      'Security strategy, board and executive reporting, security roadmap, and regulator liaison — a senior security owner without a full-time hire.',
  },
  {
    slug: 'latam-regulatory-vasp-compliance',
    icon: 'regulatory',
    blurb: 'Licensing and evidence packages for AR, MX and BR.',
    title: 'LatAm Regulatory & VASP Compliance',
    description:
      'Licensing and registration readiness, control mapping, and regulator-ready evidence packages across Argentina, Mexico, and Brazil fintech and crypto frameworks.',
    link: { href: '/regulatory-coverage/', label: 'See regulatory coverage →' },
  },
  {
    slug: 'iso-27001-soc-2-readiness',
    icon: 'iso',
    blurb: 'From gap assessment to certification.',
    title: 'ISO 27001 & SOC 2 Readiness',
    description:
      'From gap assessment to certification: scoping, control implementation, internal audit, and auditor management on accelerated timelines.',
  },
  {
    slug: 'data-privacy-programs',
    icon: 'privacy',
    blurb: 'RoPAs, DPIAs and breach response across LatAm.',
    title: 'Data Privacy Programs',
    description:
      'Data inventories, RoPAs, DPIAs, breach response, and vendor DPAs aligned to Ley 25.326, LFPDPPP, LGPD, and GDPR principles.',
  },
  {
    slug: 'security-pmo-grc-design',
    icon: 'pmo',
    blurb: 'Predictable, measurable security delivery.',
    title: 'Security PMO & GRC Design',
    description:
      'Portfolio setup, Jira workflows, executive cadences, and capacity planning to make security delivery predictable and measurable.',
  },
  {
    slug: 'incident-response-readiness',
    icon: 'incident',
    blurb: 'Playbooks, tabletops and hands-on triage.',
    title: 'Incident Response Readiness',
    description:
      'Playbooks, tabletop exercises, hands-on triage and containment support, and post-incident hardening.',
  },
];
