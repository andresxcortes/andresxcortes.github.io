# Brand & design tokens

Objetivo: que el sitio se lea como la misma identidad que el CV y el brochure vCISO — sobrio, senior, fintech/seguridad, nada "template genérico".

## Colores
| Token | Hex | Uso |
|---|---|---|
| `--accent` | `#0E5C63` | teal principal — títulos de sección, hero band, CTA band |
| `--accent-dark` | `#0A4A50` | hover, títulos de tarjeta |
| `--ink` | `#1A1A1A` | texto de cuerpo |
| `--muted` | `#5A5A5A` | metadatos, subtítulos |
| `--card` | `#F1F6F6` | fondo de tarjetas de servicio |
| `--tint` | `#DCEAEA` | celdas destacadas de tabla (columna país) |
| `--line` | `#BFD4D4` | bordes finos de tabla |
| `--bg` | `#FFFFFF` | fondo |

Modo oscuro: opcional, no prioritario para v1. Si se hace, definir los tokens con `prefers-color-scheme` y mantener el teal como acento.

## Tipografía
Calibri (usada en los PDF) no está en la web. Usar equivalentes limpios y profesionales, **self-hosted vía Fontsource** (npm), no Google Fonts por `<link>`:
- **Cuerpo:** Inter (o IBM Plex Sans).
- **Títulos:** Space Grotesk o Sora para darle un poco de carácter; si se prefiere sobriedad total, Inter en ambos.
- Escala fluida, buen interlineado (~1.55 en cuerpo). Máximo ancho de lectura ~68ch.

## Layout
- Ancho máximo de contenido ~1080–1120px, centrado, con padding lateral generoso.
- Ritmo de secciones amplio (aire entre bloques).
- Regla fina teal bajo cada título de sección (como en el brochure).

## Componentes que vienen del brochure (reusar el patrón)
1. **Hero / header band** — banda teal a todo el ancho con nombre + subtítulo ("Virtual CISO & Security Advisory · Fintech & Crypto · Latin America").
2. **Grilla de tarjetas de servicios** — 2 columnas en desktop, 1 en mobile, fondo `--card`, título en `--accent-dark`.
3. **Matriz regulatoria** — tabla con header teal (texto blanco), columna país con fondo `--tint`, celdas de contenido chicas y legibles. En mobile debe degradar bien (scroll horizontal o reflow por país en tarjetas).
4. **CTA band** — banda teal de cierre con email + LinkedIn.

## Voz y tono
Directo, senior, basado en evidencia. Nada de hype. Frases cortas, verbos de ownership donde corresponde (y "coordiné/di soporte" donde el rol fue de apoyo — respetar los matices del brochure). Inglés primario.

## OG / meta
Imagen OG con el teal + nombre + "Virtual CISO · Fintech & Crypto · LatAm" para que se vea bien al compartir en LinkedIn.
