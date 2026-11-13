# Brand & design tokens

> **Actualizado el 2026-11-13.** La identidad es negro, azul y blanco, sin bronce (decisión en `docs/decisions/2026-11-brand-and-lovable.md`). La referencia viva de tokens es `src/styles/global.css` y la descripción completa está en `DESIGN.md`. Lo que sigue es el resumen.

## Colores
| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#060606` | fondo |
| `--card` / `--band` | `#0F0F0F` | tarjetas, hero, CTA, encabezados de tabla |
| `--ink` | `#F5F5F5` | texto principal |
| `--muted` | `#9E9E9E` | texto secundario, nav |
| `--line` | `#292929` | bordes y divisores |
| `--accent` | `#4C9FFF` | enlaces, eyebrows, reglas, foco |
| `--signal` | `#F5C761` | solo "en progreso" y avisos de borrador |

Un único tema oscuro, grises neutros (sin subtonos verdes). Sin bronce ni dorado.

## Tipografía
Manrope (nombre, títulos y cuerpo) y JetBrains Mono (etiquetas chicas), ambas **self-hosted vía Fontsource** (`@fontsource-variable/manrope`, `@fontsource/jetbrains-mono`). Layout de lectura: Source Serif 4. Ancho de contenido ~1100px.

## Identidad
Logo X delgado (azul `#0A84FF` + blanco sobre negro), nombre seguido de punto azul, lema 平常心是道 solo en el hero de la home (`lang="zh-Hans"`, sin traducción).

## Componentes
Hero band, grilla de servicios, matriz regulatoria, CTA band (mismos patrones del brochure, ahora en la paleta nueva).

## Voz y tono
Directo, senior, basado en evidencia. Nada de hype. Inglés primario.

## OG / meta
Imagen social del handoff de Lovable (`public/og.png`) y tarjetas por nota generadas con `scripts/og/render.cjs`.
