# Product

## Platform
web

## What it is
The personal portfolio site of Andrés Cortés, a Virtual / Fractional CISO and security advisor for fintech and crypto companies in Latin America. It combines the vCISO brochure (services, regulatory coverage, about, contact) with a growing portfolio of anonymised case studies, research and field notes.

## Audience
- Founders, CEOs, CTOs and heads of compliance at fintech and crypto companies in Latin America and cross-border, who need senior security ownership or regulatory readiness without a full-time hire.
- Recruiters and hiring managers for security, program-management and advisory roles.
- Peers and researchers who read the published research and notes.

## Goals
- Position Andrés as the advisor with concrete regulatory experience in Argentina, Mexico and Brazil (Colombia coverage is newer and still under review).
- Turn a visit into a conversation: email or LinkedIn.
- Publish research and notes that earn trust and search traffic.

## Constraints
- Public repository: never commit client names, client deliverables, screenshots of internal systems, or any confidential or NDA material. Case studies are anonymised unless the front matter marks a named client as authorised in writing.
- No personal phone number on the site. Contact is email and LinkedIn.
- No secrets in the repository. Analytics must be privacy-friendly and free of personal data (Cloudflare Web Analytics, enabled from the dashboard).
- Fonts are self-hosted; no third-party scripts for critical CSS or JS.
- Site copy is in English. Long research texts keep their original language, with an English summary.
- Hosting is GitHub Pages at the root of `andresxcortes.dev`; `site` is set in `astro.config.mjs` and `base` is never defined.

## Terminology
PSP: payment service provider. PSAV / VASP: virtual asset service provider. GRC: governance, risk and compliance. vCISO: virtual or fractional CISO. Use the regulator and law names as they appear in `src/data/regulatory.ts`.

## Brand commitments
Sober, senior, evidence-based. Midnight blue and bronze. Direct sentences, ownership verbs where the role was ownership and "supported" where it was support. No hype and no generic template look. See `DESIGN.md` and `site-content/brand.md`.
