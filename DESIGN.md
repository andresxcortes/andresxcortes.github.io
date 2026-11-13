---
name: Andrés Cortés — Portfolio
description: Design record of the portfolio site after the Nov 2026 identity change (black, blue, white; no bronze). Source of truth for tokens is src/styles/global.css.
colors:
  background: "#060606"
  card: "#0F0F0F"
  band: "#0F0F0F"
  tint: "#161616"
  line: "#292929"
  ink: "#F5F5F5"
  muted: "#9E9E9E"
  accent: "#4C9FFF"
  accent-soft: "#82BAFF"
  accent-wash: "#122032"
  on-accent: "#060606"
  signal: "#F5C761"
  signal-wash: "#1F1A0C"
  logo-blue: "#0A84FF"
typography:
  heading:
    fontFamily: "Manrope Variable"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0"
  body:
    fontFamily: "Manrope Variable"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)"
    lineHeight: 1.55
  mono:
    fontFamily: "JetBrains Mono"
  reader:
    fontFamily: "Source Serif 4 Variable"
    fontSize: "about 18px"
    lineHeight: 1.68
---

# Design

Decision record: `docs/decisions/2026-11-brand-and-lovable.md`. Reference design: the Lovable site, via `docs/handoffs/` and `design-handoff.md` in the Lovable repo.

## Identity
Black, blue and white, one dark theme. Neutrals are pure gray (no green undertone). **No bronze or gold anywhere**, with one exception: the amber `signal` colour, used only for "in progress" / draft notices (e.g. the AWS certification, draft banners).

- **Logo**: slim abstract X, blue `#0A84FF` upper-left stroke and white lower-right stroke on black (`public/logo-x.svg`, `public/favicon.svg`). Supplied by the Lovable design handoff; do not redraw.
- **Name**: "Andrés Cortés" followed by a blue dot.
- **Motto**: 平常心是道, shown on the home hero only, marked `lang="zh-Hans"`, no translation. Manrope has no CJK glyphs, so the system font draws them.

## Colour roles
- `accent` (blue): links, eyebrows, section-title rules, focus rings, the active nav item, the language toggle and progress bar.
- `band` / `card`: hero, CTA and table-header surfaces; cards. Separated by hairline `line` borders.
- `ink` / `muted`: primary and secondary text.
- `signal` (amber): in-progress and draft states only.
- Type tags use blue and gray families, never green or purple.

## Typography
Manrope (variable, self-hosted via Fontsource) for name, headings and body; JetBrains Mono for small labels. Letter-spacing 0. Reader layout (`reader: true`) keeps Source Serif 4, ~18px, line height 1.68, 68ch.

## Layout
Max width 1100px, fluid gutters, generous section gaps, 2px blue rule under every section title. Sticky header with blur: logo + name, nav Services · Coverage · Work · CV · Contact. Footer: © line, "Independent security leadership · Latin America", email and LinkedIn.

## Components
Hero band, service cards and tiles, regulatory matrix, CTA band, case-study card with type tags, language toggle, flags (AR, MX, BR, CO). Same patterns as the earlier brochure identity, recoloured.

## Do / don't
- Do keep links and rules blue and text white or gray.
- Don't introduce bronze, gold, green or purple. Don't add Google Fonts links; fonts are self-hosted.
- Don't use amber for anything except "in progress" and draft notices.

## Changelog
- Nov 2026: identity changed from midnight blue + bronze (Sora/Inter) to black, blue and white (Manrope/JetBrains Mono). Social images (`scripts/og/`, `npm`-free Playwright script `render.cjs`) re-rendered in the new palette.
