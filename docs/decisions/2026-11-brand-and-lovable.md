# Decisión: identidad negro/azul/blanco y coexistencia con Lovable

Fecha: 2026-11-12 · Decide: Andrés Cortés · Estado: aceptada

## 1. Cambio de identidad
- La identidad pasa de **azul medianoche + bronce** (`brand.md` original) a **negro, azul y blanco, sin bronce** y sin subtonos verdes.
- Se mantiene la tipografía sans-serif del sitio. Lema y logo (X delgada abstracta, favicon a juego) según el handoff de Lovable (`docs/handoffs/lovable-design-cv-seo.md`).
- Motivo: la intención de usar Lovable es iterar identidad visual con rapidez; la marca anterior se considera reemplazada, no extendida.
- Los valores exactos (hex) de los nuevos tokens **no están fijados todavía**: se definen en el PR 1 de implementación, tomándolos del diseño de Lovable. `brand.md` y `DESIGN.md` describen la marca **anterior** hasta ese PR.

## 2. Cómo coexisten Astro y Lovable (sin conflicto)
Lovable no puede conectar Git a un repo existente y su app es TanStack Start, así que **no se mezclan en el mismo repo ni en el mismo despliegue**.

1. **Este repo (Astro) es la única fuente de verdad del sitio publicado** y es quien sirve `andresxcortes.dev` (GitHub Pages + Cloudflare). Nada de Lovable se publica en ese dominio ni se activa la sincronización Git automática sobre este repo.
2. **Lovable es un taller de diseño**: vive en su propio proyecto (y, si se sincroniza con GitHub, en un repositorio **nuevo y separado**, nunca en `main` de este). Se previsualiza en su URL propia o en un subdominio de prueba, nunca en el dominio principal.
3. **El traspaso es por documento y por PR**: lo aprobado en Lovable llega acá como handoff en `docs/handoffs/` y se implementa en Astro con ramas chicas y PRs revisados (identidad y estilos → páginas → CV → SEO).
4. Los assets (logo, favicon, portada de LinkedIn) se copian desde los archivos entregados por Lovable; no se redibujan.
5. Utilidades de Lovable con backend (p. ej. el asesor de dominio con IA) y credenciales **no se portan** a Astro; requerirían una decisión explícita de hosting con servidor.
6. Las URLs públicas existentes de artículos no cambian; si alguna cambia, redirección permanente.

## 3. Datos confirmados
- Bitso: «hasta mayo de 2026» (se usa en notas y posteos).
