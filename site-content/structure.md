# Site structure

## Rutas
| Ruta | Fuente | Notas |
|---|---|---|
| `/` | `pages/home.md` | Hero + propuesta + teaser de servicios + teaser regulatorio + CTA |
| `/services` | `pages/services.md` | Los 6 servicios (grilla de tarjetas) |
| `/regulatory-coverage` | `pages/regulatory-coverage.md` | La matriz AR/MX/BR — **página estrella** |
| `/portfolio` | content collection | Índice de casos de estudio |
| `/portfolio/[slug]` | content collection | Cada caso |
| `/about` | `pages/about.md` | Bio, credenciales, certs, idiomas |
| `/contact` | `pages/contact.md` | Email + LinkedIn (sin teléfono) |

Nav: Home · Services · Regulatory Coverage · Portfolio · About · Contact.

## Content collection: `case-studies`
Definir en `src/content/config.ts` (o el nombre que use la versión de Astro). Schema sugerido (Zod):

```ts
{
  title: string,              // título anonimizado del caso
  sector: string,             // "Crypto exchange", "Remittances fintech", ...
  stage: string,              // "Series B", "Scale-up", "Enterprise"
  region: string[],           // ["Argentina"], ["Argentina","Mexico","Brazil"]
  services: string[],         // etiquetas de los servicios aplicados
  summary: string,            // 1-2 frases para el índice
  outcome: string,            // resultado en una frase (para la card)
  date: Date,                 // para ordenar
  client_named: boolean,      // default false — true SOLO con permiso escrito
  featured: boolean,          // destacado en Home
  draft: boolean,             // no publicar si true
}
```

Cuerpo del caso (Markdown): estructura **Context → Problem → Approach → Outcome**. Ver `case-studies/_template.md`.

## Reglas de contenido (recordatorio, ver CLAUDE.md)
- Casos anonimizados salvo `client_named: true` con permiso escrito.
- Sin datos confidenciales, entregables reales ni capturas internas.
- Sin teléfono en el sitio público.
