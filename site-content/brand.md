# Brand & design tokens

Objetivo: que el sitio se lea como la misma identidad que el CV y el brochure vCISO — sobrio, senior, fintech/seguridad, nada "template genérico".

## Colores
| Token | Hex | Uso |
|---|---|---|
| `--accent` | `#1F2A44` | azul medianoche — títulos de sección, hero band, CTA band, header de tabla |
| `--accent-dark` | `#141C2F` | hover, títulos de tarjeta |
| `--brass` | `#A8874F` | bronce — reglas finas bajo títulos, bordes de hero/CTA, foco (solo líneas, no texto) |
| `--brass-light` | `#D9C39A` | hover de links sobre fondo azul, monograma |
| `--ink` | `#1C1C1E` | texto de cuerpo |
| `--muted` | `#5E5A55` | metadatos, subtítulos |
| `--card` | `#F7F4EE` | fondo de tarjetas de servicio (marfil) |
| `--tint` | `#ECE6DA` | celdas destacadas de tabla (columna país) |
| `--line` | `#D9D1C2` | bordes finos de tabla |
| `--bg` | `#FCFBF8` | fondo (blanco cálido) |

Modo oscuro: opcional, no prioritario para v1. Si se hace, definir los tokens con `prefers-color-scheme` y mantener azul + bronce como acentos.

## Tipografía
Calibri (usada en los PDF) no está en la web. Usar equivalentes limpios y profesionales, **self-hosted vía Fontsource** (npm), no Google Fonts por `<link>`:
- **Cuerpo:** Inter (o IBM Plex Sans).
- **Títulos:** Space Grotesk o Sora para darle un poco de carácter; si se prefiere sobriedad total, Inter en ambos.
- Escala fluida, buen interlineado (~1.55 en cuerpo). Máximo ancho de lectura ~68ch.

## Layout
- Ancho máximo de contenido ~1080–1120px, centrado, con padding lateral generoso.
- Ritmo de secciones amplio (aire entre bloques).
- Regla fina bronce bajo cada título de sección (como en el brochure).

## Componentes que vienen del brochure (reusar el patrón)
1. **Hero / header band** — banda azul medianoche a todo el ancho (borde inferior bronce) con nombre + subtítulo ("Virtual CISO & Security Advisory · Fintech & Crypto · Latin America").
2. **Grilla de tarjetas de servicios** — 2 columnas en desktop, 1 en mobile, fondo `--card`, título en `--accent-dark`.
3. **Matriz regulatoria** — tabla con header azul (texto blanco), columna país con fondo `--tint`, celdas de contenido chicas y legibles. En mobile debe degradar bien (scroll horizontal o reflow por país en tarjetas).
4. **CTA band** — banda azul de cierre (borde superior bronce) con email + LinkedIn.

## Voz y tono
Directo, senior, basado en evidencia. Nada de hype. Frases cortas, verbos de ownership donde corresponde (y "coordiné/di soporte" donde el rol fue de apoyo — respetar los matices del brochure). Inglés primario.

## OG / meta
Imagen OG azul + bronce + nombre + "Virtual CISO · Fintech & Crypto · LatAm" para que se vea bien al compartir en LinkedIn.
