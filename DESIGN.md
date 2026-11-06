---
name: Andrés Cortés — Portfolio
description: Design record of the portfolio site, written from the implementation in November 2026. Source of truth for tokens is src/styles/global.css.
colors:
  accent: "#1F2A44"
  accent-dark: "#141C2F"
  brass: "#A8874F"
  brass-light: "#D9C39A"
  brass-text: "#7A5F2C"
  ink: "#1C1C1E"
  muted: "#5E5A55"
  card: "#F7F4EE"
  tint: "#ECE6DA"
  line: "#D9D1C2"
  background: "#FCFBF8"
  tag-engagement: "#1F2A44"
  tag-research: "#A8874F"
  tag-resource: "#2A8071"
  tag-project: "#7A5AA6"
  tag-note: "#3F6BB0"
typography:
  heading:
    fontFamily: "Sora Variable"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter Variable"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)"
    lineHeight: 1.55
  reader:
    fontFamily: "Source Serif 4 Variable"
    fontSize: "~18px"
    lineHeight: 1.68
rounded:
  sm: 4px
  md: 10px
  lg: 12px
  pill: 999px
spacing:
  container-max: 1100px
  gutter: "clamp(1rem, 4vw, 2rem)"
  section-gap: "clamp(3rem, 7vw, 5rem)"
---

## Overview

A sober, senior identity for a fractional CISO working with fintech and crypto teams in Latin America: midnight blue and bronze on a warm off-white, with generous space between sections. It must read as the same identity as the CV and the vCISO brochure. Imagery is original (SVG illustrations, line icons, flags); no stock photography. Tone is direct and evidence-based. Copy is in English; long research texts keep their original language.

## Colors

- **Midnight (`accent`)**: hero and CTA bands, section titles, icon tiles, table headers, market tiles.
- **Bronze (`brass`)**: rules under section titles, borders of hero and CTA bands, focus rings, hover borders, icon strokes. Use it for lines and icons only. For small text on light backgrounds use `brass-text` (5.5:1 on `card`), because `brass` is about 3:1.
- **Light bronze (`brass-light`)**: text and icons on midnight (8:1).
- **Ivory family (`background`, `card`, `tint`, `line`)**: page, cards, highlighted table cells, hairlines.
- **Ink and muted**: body text and metadata.
- **Type tags**: one colour family per entry type, shared by the tag chip and the card's top rule. Engagement is midnight with white text. Research is bronze on a light bronze chip. Resource is teal, project is violet, field note is blue. Tag text uses a darker shade than the rule colour (all above 7:1 on their chips).
- No dark mode yet; if added, keep midnight and bronze as the accents.

## Typography

- **Headings**: Sora (variable, self-hosted via Fontsource), tight tracking. Section titles scale with `clamp(1.4rem, 1.2rem + 1vw, 1.9rem)`.
- **Body**: Inter (variable, self-hosted). Reading width capped at 68ch (`.prose`).
- **Reader layout** (`reader: true` entries): Source Serif 4 at about 18px, line height 1.68, 68ch column, manual hyphenation only. Headings stay in Sora.
- Fonts are never loaded from Google Fonts or a CDN.

## Layout

- Content container 1100px with fluid side gutters; the regulatory matrix may use up to 1240px.
- Sections are separated by `section-gap`; every section title carries a 2px bronze rule.
- Grids use `repeat(auto-fill|auto-fit, minmax(min(100%, Npx), 1fr))`, so they collapse to one column on phones without breakpoints. Breakpoints in use: 640, 720, 800 and 900px.
- No horizontal page scroll at 390px.

## Elevation & Depth

Flat by default, with hairline borders (`line`). Interactive cards lift 2px on hover with a soft midnight shadow (`0 8px 22px -12px rgba(31,42,68,.45)`) and switch the border to bronze. An open expandable card keeps a slightly stronger shadow. Hover motion is disabled under `prefers-reduced-motion`.

## Shapes

Small controls use 4px, cards and tiles 10px, expandable cards 12px, tags and regulator chips are pills. Flags are 3:2 with 2.5px corners. Avoid thick one-sided coloured borders on cards.

## Components

- **Hero band**: full-width midnight band, 3px bronze bottom border, name and subtitle, optional decorative illustration (home only, hidden under 900px).
- **Service tile** (home): ivory card with a midnight icon tile, title, one-line blurb and an arrow; links to `/services/#<slug>`.
- **Service card** (services): same icon tile, full description; highlighted with a bronze ring when targeted by its anchor.
- **Engagement model**: expandable `details` card with an original illustration, cadence label in `brass-text`, summary, then body, bullet points, "Best for" and a contact link. One open at a time.
- **Market tile**: midnight tile with flag, country name, regulator chips, 3px bronze bottom border.
- **Regulatory matrix**: midnight header row, country column on `tint` with flag, small readable cells; one card per market on mobile.
- **Case-study card**: colour-coded type tag, byline, title (whole card clickable), summary, optional outcome.
- **CTA band**: midnight band with a bronze top border, email and LinkedIn.
- **Flag and Icon**: inline SVG only. Service icons are original glyphs; mail and LinkedIn come from Tabler Icons (MIT).
- **Reader layout**: sticky table of contents, chapter navigation, progress bar, footnotes (see `CLAUDE.md`).

## Do's and Don'ts

- Do keep one idea per section and let whitespace do the work.
- Do use bronze for lines and icons, and `brass-text` for small bronze text.
- Do keep copy anonymised and free of phone numbers (see `CLAUDE.md` guardrails).
- Don't add stock photos, gradients, or third-party scripts.
- Don't introduce new colours outside the tokens above; add a token first.
- Known gaps: some callouts still use a thick left border (about, contact, the portfolio entry page, the reader quote); the `Service` list on the AI-security page has no icons; there is no dark mode.
