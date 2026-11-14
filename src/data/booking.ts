// Public booking links (Cal.com). Links only: no third-party script is loaded on the site.
// If the Cal.com username changes, update `base` here and nothing else.
const base = 'https://cal.com/andres-cortes-c5mbx9';

export const booking = {
  quick: { label: 'Quick intro', minutes: 15, href: `${base}/15min`, note: 'A first conversation to see whether there is a fit.' },
  intro: { label: 'Intro call', minutes: 30, href: `${base}/30min`, note: 'Your context, challenge and next steps.' },
  scoping: {
    label: 'Regulatory readiness scoping',
    minutes: 45,
    href: `${base}/regulatory-readiness-scoping-45-min`,
    note: 'Licensing, VASP / AML, ISO 27001 / SOC 2 or audit readiness.',
  },
} as const;

export const bookingPrimary = booking.intro;
