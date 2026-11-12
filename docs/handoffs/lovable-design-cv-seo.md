# Lovable design, CV and SEO handoff for Claude Code

## Scope and ownership

Preserve this repository's Astro architecture, existing GitHub Pages/Cloudflare deployment workflow, original articles, illustrations and downloads. This PR adds only this handoff document. It does NOT port the Lovable implementation, change production files, add a second app, or enable automatic Lovable Git sync. Lovable cannot attach Git sync to an existing repository. Future implementation changes should use focused branches and reviewed PRs here. Do not replace main with the TanStack application.

## Reference implementation

Reference site: https://andresxcortes.dev . Lovable publication was requested on 2026-11-12; publication completion must be checked before using it as the visual reference. The implementation there uses TanStack Start and a managed backend, not Astro. A PR in this repository does not update that deployment. Preserve the original Astro site as the code source and explicitly coordinate the eventual deployment origin.

## Design requirements

Black, blue and white; no green undertones. Clean slim abstract X logo with balanced blue/white strokes, matching favicon. Keep existing Manrope-style sans-serif lettering for the name and body; do not introduce ornate lettering or an oriental visual identity. The exact motto is 平常心是道, without an English translation. Retain language markup for the motto and ordinary system glyph fallback; do not redesign typography around it.

Use consistent shared navigation, footer, page introductions and contact bands. Navigation: Services, Coverage, Work, CV, Contact. Include small regional flags through src/components/Flag.astro where relevant. Avoid the old profile.yaml terminal panel. In src/styles/global.css, apply role-based palette tokens; update src/layouts/BaseLayout.astro, HeroBand.astro, CtaBand.astro and existing service/regional components rather than replacing the architecture.

## Pages to bring into alignment

Home: name, exact motto, fractional CISO background, slim X identity, regional flags; retain original factual service summaries and contact details.
Services: six disciplines — Virtual/Fractional CISO; LatAm Regulatory & VASP Compliance; ISO 27001 & SOC 2 Readiness; Data Privacy Programs; Security PMO & GRC Design; Incident Response Readiness.
Coverage: Argentina (BCRA, CNV, UIF, AAIP), Mexico (CNBV, Banxico, UIF), Brazil (BCB, COAF, ANPD), Colombia (SFC, UIAF, SIC, DIAN). Coverage is advisory experience, not legal advice.
Work: keep the original 13 portfolio entries, full article texts, Spanish/English/Portuguese variants, all document links and thesis illustrations. Add category filters and search with an empty state. Existing public article URLs must remain working; use permanent redirects only when required.
Contact: consulting@andresxcortes.dev, https://linkedin.com/in/andresxcortes, copy-email control with success/failure feedback.

## CV page: /cv

Use the existing professional history in site-content/pages/about.md and src/pages/about.astro, not guessed LinkedIn employment data. Add shared navigation, a public LinkedIn profile link and a Print / Save PDF action. Match dark web presentation and provide white-background print styling with hidden navigation and no clipped text.

Profile: Information security and technical program leader with 10+ years across crypto, fintech and global banking; now a fractional CISO and advisor.
Experience:
- Current focus: independent fractional CISO and security advisory for fintech/crypto in Latin America.
- Bitso, through 2026: Argentina CISO and Information Security PMO Manager; designated security contact to CNV, UIF, BCRA, AAIP; co-ran 60+ concurrent GRC initiatives with a 15+ person team; led VASP compliance under CNV RG 1058/2025; contributed to ISO 27001 certification (2025), SOC 2 and privacy framework.
- Earlier: Product Owner at JPMorgan Chase, Corporate & Investment Banking and Legal Solutions.
- Earlier: product and analyst roles at First Data and Globant.
Do not invent start/end dates for earlier roles.
Education: MSc Cyber Defence & Cybersecurity (UBA; thesis working draft remains available), Postgraduate Diploma Project Management (UTN FRBA), BSc Information Systems (UBA). Confirm degree-completion details if needed rather than infer from the thesis draft.
Certifications: CISM, PMP, ISC2 CC, CSPO, Google Cloud Digital Leader completed; AWS Certified Cloud Practitioner IN PROGRESS, in a distinct amber treatment, excluded from the completed certification count (five).
Languages: Spanish native, English C2, Portuguese B2, German B1.

## SEO

Use Astro's existing @astrojs/sitemap integration; do not install the TanStack sitemap helper. Include home, services, coverage, work, contact, CV and every public portfolio article. Omit utilities marked noindex. Do not invent lastmod dates. Keep robots blocks and add the actual public sitemap URL. Per-page unique title, description, og:title, og:description, og:type, canonical and og:url must self-reference https://andresxcortes.dev. Preserve SSR/static-readable content. Add Article structured data to relevant work entries without fabricated dates. No relative or placeholder social-image URLs.

## LinkedIn and artwork

The builder's LinkedIn account is connected and its identity read was verified in Lovable. This is not LinkedIn sign-in for visitors, automatic CV sync, or a public posting endpoint. Credentials are not in this PR and must never be committed or exposed. If Astro ever needs LinkedIn API functionality, design a secure server-side boundary and authorize the owner; a static GitHub Pages site cannot safely embed private credentials.
A revised LinkedIn cover was delivered separately in Lovable Files: andres-cortes-linkedin-cover-v3.png, 1584x396. It contains the slim X, sans-serif name, exact Chinese motto, service line and site address. It has not been uploaded to LinkedIn; profile-cover changes are a separate action. Obtain the supplied asset rather than redrawing the logo.

## AI domain advice

Lovable's domain setup utility uses a public advisory-only server function, validation and structured AI output; it is not live DNS verification. Do not port private credentials or publish privileged account data into Astro. Keep this utility out of indexing. Moving it to the Astro deployment requires an explicit server-hosting decision, not a client-side key.

## Suggested focused follow-up PRs

1. Identity/shared styles and navigation; motto/logo/favicon supplied assets.
2. Services, coverage, contact and portfolio presentation, preserving content and URLs.
3. CV and print view, reusing credential status.
4. SEO/canonical/sitemap and asset integrity checks.

## Acceptance checks

Verify phone (390px) and desktop layouts, navigation, no horizontal overflow, all flags and thesis images, PDF/DOCX downloads, portfolio filtering/search, email copy, LinkedIn profile link, CV print output, exactly five completed certifications with AWS in progress, and public sitemap coverage. Run the repository's normal Astro build and existing tests through Claude Code. These checks have passed for the Lovable reference, not for an Astro port that this PR has not implemented.
