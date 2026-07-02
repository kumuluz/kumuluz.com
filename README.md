# kumuluz.com

Marketing website for Kumuluz — a bilingual (English/Slovenian), statically
exported Next.js site deployed to Netlify.

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router, `output: 'export'` static build)
- **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)** (via `@tailwindcss/postcss`)
- **[motion](https://motion.dev)** and **[three](https://threejs.org)** / `@firecms/neat` for animated backgrounds
- **[lucide-react](https://lucide.dev)** icons
- ESLint + Prettier

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. The bare root redirects to the
default English locale at `/en/`.

## Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the local dev server               |
| `npm run build`        | Static export to `out/`                  |
| `npm run start`        | Serve the production build               |
| `npm run lint`         | Run ESLint                               |
| `npm run lint:fix`     | Run ESLint with `--fix`                  |
| `npm run format`       | Format with Prettier                     |
| `npm run format:check` | Check formatting without writing         |
| `npm run doctor`       | Run `react-doctor` diagnostics           |

## Project structure

```
app/                Next.js App Router
  [lang]/           Locale-scoped routes (about, company, expertise,
                    kumuluz, partners, products, solutions)
  layout.tsx        Root layout
  page.tsx          Root → /en/ redirect
  robots.ts         robots.txt
  sitemap.ts        sitemap.xml
src/
  components/       Shared UI (cards, backgrounds, icons, header)
  content/          Localized copy per section
  lib/              Routing, metadata, navigation, structured data, accents
  views/            Page-level views and route wrappers
public/             Static assets
```

## Internationalization

Content is served under a `[lang]` segment. Supported locales are `en` and `sl`
(see `src/lib/router.ts`). Routes and paths are built via `buildPath` /
`parseRoute`, and localized copy lives in `src/content/`.

## Deployment

Deployed on Netlify. `netlify.toml` runs `next build` and publishes the exported
`out/` directory. Because the site is a static export (no server or middleware),
the `/` → `/en/` redirect is handled at the Netlify edge.

Static-export constraints worth noting:

- `output: 'export'` — no server-side runtime
- `trailingSlash: true`
- `images: { unoptimized: true }`
