// Source: site-content/pages/services.md
export interface Service {
  title: string;
  description: string;
  link?: { href: string; label: string };
}

export const services: Service[] = [
  {
    title: 'Virtual / Fractional CISO',
    description:
      'Security strategy, board and executive reporting, security roadmap, and regulator liaison — a senior security owner without a full-time hire.',
  },
  {
    title: 'LatAm Regulatory & VASP Compliance',
    description:
      'Licensing and registration readiness, control mapping, and regulator-ready evidence packages across Argentina, Mexico, and Brazil fintech and crypto frameworks.',
    link: { href: '/regulatory-coverage', label: 'See regulatory coverage →' },
  },
  {
    title: 'ISO 27001 & SOC 2 Readiness',
    description:
      'From gap assessment to certification: scoping, control implementation, internal audit, and auditor management on accelerated timelines.',
  },
  {
    title: 'Data Privacy Programs',
    description:
      'Data inventories, RoPAs, DPIAs, breach response, and vendor DPAs aligned to Ley 25.326, LFPDPPP, LGPD, and GDPR principles.',
  },
  {
    title: 'Security PMO & GRC Design',
    description:
      'Portfolio setup, Jira workflows, executive cadences, and capacity planning to make security delivery predictable and measurable.',
  },
  {
    title: 'Incident Response Readiness',
    description:
      'Playbooks, tabletop exercises, hands-on triage and containment support, and post-incident hardening.',
  },
];
