# CLAUDE.md — Portfolio vCISO de Andrés Cortés

Este archivo es el brief para Claude Code. Leelo entero antes de tocar nada.

## Qué estamos construyendo
Un sitio estático de portafolio para posicionar a Andrés Cortés como **Virtual CISO / asesor de seguridad para fintech y cripto en América Latina**. El contenido base sale del brochure vCISO (portado a Markdown en `site-content/`). El sitio es el brochure hecho web **más un motor de casos de estudio** que crece con cada proyecto.

El diferenciador central de Andrés es la **experiencia regulatoria concreta en Argentina, México y Brasil** (fintech + cripto). La página de cobertura regulatoria es la pieza más importante: tratala con ese peso.

## Stack y decisiones (ya tomadas — no re-litigar)
- **Astro** (sitio estático, sin framework de UI pesado). TypeScript ok.
- Hosting: **GitHub Pages** vía GitHub Actions.
- Repo: **user site** llamado `andresxcortes.github.io` → el sitio publica en la **raíz**.
- **CRÍTICO:** en `astro.config.mjs` va `site: 'https://andresxcortes.github.io'` y **NO** se define `base` (o `base: '/'`). El `base: 'nombre-repo'` de los tutoriales es solo para *project pages* y rompería todas las rutas acá.
- Dominio propio: **pendiente**. Cuando llegue, se agrega vía Settings → Pages (genera un `CNAME`) y `site` se actualiza al dominio. No hace falta `base` igual.
- Sin CDNs externas para JS/CSS críticos: tipografías self-hosted vía **Fontsource** (paquete npm), no `<link>` a Google Fonts.

## Estructura de contenido
- Páginas fijas: Home, Services, Regulatory Coverage, About, Contact.
- **Content collection `case-studies`** para el portafolio (un `.md`/`.mdx` por caso). Ver el schema propuesto en `site-content/structure.md` y la plantilla en `site-content/case-studies/_template.md`.
- Todo el copy del sitio va en **inglés** (mercado primario cross-border / LatAm-España). La versión en español queda para una fase posterior.

## Diseño
Seguí `site-content/brand.md`: paleta teal (#0E5C63), tipografía, ritmo, y los cuatro componentes que vienen del brochure — **header/hero band**, **grilla de tarjetas de servicios**, **tabla de matriz regulatoria**, **CTA band**. El sitio tiene que leerse como la misma identidad que el CV y el brochure.

## Guardrails — NO NEGOCIABLES (perfil de seguridad)
El repo es **público**. Andrés trabaja en seguridad; una filtración acá es un daño reputacional directo.
1. **Nunca** commitear nombres de clientes reales, entregables reales, capturas de sistemas internos, ni ningún dato confidencial o bajo NDA.
2. **Casos anonimizados por default**: sector + etapa + resultado (ej. "un exchange cripto líder de LatAm", "una fintech de remesas Series B"). Un nombre real de cliente solo si el frontmatter lo marca explícitamente como autorizado por escrito (`client_named: true`) — y ante la duda, se mantiene anónimo.
3. **Sin teléfono personal** en el sitio público. Contacto = email + LinkedIn (o formulario tipo Formspree). El teléfono queda fuera.
4. **Sin secretos** en el repo: nada de API keys, tokens, `.env` versionado. Respetar `.gitignore`.
5. Si agregás analítica, que sea privacy-friendly y sin PII sin aviso.
6. Antes de cada commit, revisá que no se cuele nada de lo anterior.

## Ruta por fases
**Fase 1 — Esqueleto vivo (deploy primero).** Scaffold de Astro en este repo (mantené `CLAUDE.md`, `README.md`, `.github/`, `site-content/`, `.gitignore`). Configurá `astro.config.mjs` con el `site` correcto y sin `base`. El workflow ya está en `.github/workflows/deploy.yml` (verificá que la versión de `withastro/action` sea la vigente en github.com/withastro/action). Meta: un placeholder ya publicado y visible en https://andresxcortes.github.io. No sigas hasta que el pipeline verde funcione.

**Fase 2 — Contenido base.** Portá las páginas de `site-content/pages/` a rutas Astro. La matriz regulatoria (`regulatory-coverage.md`) merece página propia y buen tratamiento visual de tabla.

**Fase 3 — Motor de portafolio.** Content collection `case-studies` con su schema; página índice `/portfolio` + páginas `/portfolio/[slug]`. Cargá el caso de ejemplo (`site-content/case-studies/example-latam-crypto-exchange.md`) como referencia — está marcado como EXAMPLE y hay que reemplazarlo/validarlo con Andrés.

**Fase 4 — Marca y pulido.** Aplicá `brand.md`, responsive, meta tags + imagen OG (para que se vea bien pegado en LinkedIn), favicon, sitemap, `robots.txt`.

**Fase 5 — Dominio y lanzamiento.** (Cuando Andrés tenga dominio.) CNAME + HTTPS, actualizar `site`, links cruzados con CV y LinkedIn.

## Definición de "listo" para v1 (fin de Fase 4)
- Sitio en https://andresxcortes.github.io, responsive, sin errores de build.
- Las 5 páginas fijas con el contenido de `site-content/`.
- `/portfolio` funcionando con al menos el caso de ejemplo (validado o reemplazado).
- Identidad visual del brochure aplicada.
- Cero datos sensibles en el repo.

## Comandos
```
npm install
npm run dev      # local, http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve el build
```
El deploy es automático al hacer push a `main` (GitHub Actions). En GitHub: Settings → Pages → Source = **GitHub Actions**.

## Cómo trabajamos
Andrés define dirección, contenido y criterio (y revisa que nada se filtre). Vos hacés scaffolding, build, componentes y deploy. Cuando una decisión de contenido o alcance no esté clara, preguntale antes de inventar — sobre todo si toca algo que podría identificar a un cliente.
