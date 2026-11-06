# Product

## Platform
web

## What it is
The personal portfolio site of Andrés Cortés, a Virtual / Fractional CISO and security advisor for fintech and crypto companies in Latin America. It combines the vCISO brochure (services, regulatory coverage, about, contact) with a growing portfolio of anonymised case studies, research and field notes.

## Audience
- Founders, CEOs, CTOs and heads of compliance at fintech and crypto companies in Latin America and cross-border, who need senior security ownership or regulatory readiness without a full-time hire.
- Recruiters and hiring managers for security, program-management and advisory roles.
- Peers and researchers who read the published research and notes.

## Situations that drive design decisions
- A founder or compliance lead lands from a LinkedIn post, often on a phone, and decides within seconds whether this person knows their regulator. So the home page leads with the regulatory markets and the services, and every card links somewhere.
- A recruiter or hiring manager skims for role fit and proof. So credentials, the Bitso experience and selected work are one scroll from the top.
- A researcher opens a long text to read it, not to skim it. So research entries get the reader layout (serif body, index, chapter navigation) and a downloadable copy.
- Someone preparing for a regulator conversation wants to compare markets. So the regulatory matrix is a table on desktop and one card per market on mobile.

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
Sober, senior, evidence-based, human, honest and kind. Midnight blue and bronze. Direct sentences, ownership verbs where the role was ownership and "supported" where it was support. No hype and no generic template look. See `DESIGN.md` and `site-content/brand.md`.

## Positioning
Andrés's own statement (use as written; do not paraphrase in site copy without asking):

> I am a fintech and crypto information security expert who aims to add value from the intersection between design, society and technology. In an era of AI generated slop and moody political humour, I believe in the need of using human connection to engage and solve problems in a creative and direct way.
>
> I can help your business to thrive, stay safe and stay compliant on the ground of solid and honest work, avoiding easy bypasses and being honest and kind to everyone involved.

How it shows up in the product: concrete regulatory experience (Argentina, Mexico, Brazil) and published research as proof of "solid and honest work"; a human, direct voice; a design that is deliberate rather than generic. The site competes on specificity and trust, not on volume of services.

## Operating Context (draft, confirm with Andrés)
- One person maintains the site. Changes ship through pull requests that Andrés reviews before merging; the site is static (Astro) on GitHub Pages behind Cloudflare.
- Content grows by case studies, research and field notes, and is promoted through LinkedIn posts. Design assumption: a large share of visits arrives from LinkedIn, so link previews (Open Graph image) and mobile layouts matter as much as the desktop view.
- Measurement is Cloudflare Web Analytics only: aggregate, cookieless, reviewed from the dashboard.

## Evidence on Hand (public facts already on the site)
- Most recent role: Argentina CISO at Bitso, Latin America's largest crypto exchange; security governance and a portfolio of 60+ concurrent GRC initiatives at exchange scale.
- Delivered Argentina's VASP framework (CNV RG 1058/2025) and ISO 27001 certification at exchange scale (anonymised case study).
- Certifications: CISM, PMP, ISC2 CC, CSPO, Google Cloud Digital Leader.
- Published research: a working paper on CCSS alignment with CNV RG 1058/2025, a control crosswalk to ISO/IEC 27001:2022, and a master's thesis draft on North Korea-linked threats in crypto.
- Not yet on the site: testimonials, named clients, metrics beyond those above. Do not invent them.

## Product Principles
1. Specific beats broad: name the regulator, the law and the market.
2. Show the work: publish research and sourced notes instead of claims.
3. Anonymise by default; a client appears only with written authorisation.
4. Calm and credible over clever: restrained motion, no hype, no stock imagery, nothing that reads as AI-generated filler.
5. Every page ends in a next step: contact, matrix or the full text.
6. Fast and private: static pages, self-hosted fonts, cookieless analytics.
