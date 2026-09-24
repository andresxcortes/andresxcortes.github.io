# Portfolio vCISO — Andrés Cortés

Starter kit para el sitio de portafolio en Astro + GitHub Pages. Este repo se lo pasás a Claude Code y arranca con el "qué" ya resuelto.

## Requisitos
- **Node.js** LTS (≥ 20 recomendado) y npm.
- **git** y una cuenta de GitHub.
- **Claude Code** instalado.

## Puesta en marcha (una vez)
1. En GitHub, creá un repo **público** llamado exactamente `andresxcortes.github.io`.
2. Cloná el repo y copiá adentro el contenido de este kit (`CLAUDE.md`, `README.md`, `.gitignore`, `.github/`, `site-content/`).
3. Abrí Claude Code en la carpeta del repo y decile:
   > "Leé `CLAUDE.md` y arrancá la Fase 1: scaffold de Astro y dejá un placeholder publicado."
4. En GitHub: **Settings → Pages → Source = GitHub Actions**.
5. `git push` a `main`. El workflow buildeaa y publica en https://andresxcortes.github.io

## Dónde vive el contenido
- `site-content/pages/` — el copy de cada página (inglés).
- `site-content/case-studies/` — plantilla + caso de ejemplo del portafolio.
- `site-content/brand.md` — colores, tipografía, tono.
- `site-content/structure.md` — mapa del sitio y schema de casos.
- `CLAUDE.md` — el brief completo y las **reglas de seguridad** (repo público, casos anonimizados, sin teléfono, sin secretos).

## Agregar un caso de estudio nuevo
Copiá `site-content/case-studies/_template.md`, completá el frontmatter y las secciones (Context → Problem → Approach → Outcome), y mantenelo **anonimizado** salvo permiso escrito del cliente. Push y listo.

## Recordatorio
Repo público = zona sin datos de clientes. Ante la duda, anonimizá.
