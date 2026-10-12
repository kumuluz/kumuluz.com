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

| Script                 | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the local dev server       |
| `npm run build`        | Static export to `out/`          |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | Run ESLint                       |
| `npm run lint:fix`     | Run ESLint with `--fix`          |
| `npm run format`       | Format with Prettier             |
| `npm run format:check` | Check formatting without writing |
| `npm run doctor`       | Run `react-doctor` diagnostics   |

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

Deployed on Netlify. `netlify.toml` runs `npm run build` and publishes the exported
`out/` directory. Because the site is a static export (no server or middleware),
the `/` → `/en/` redirect is handled at the Netlify edge.

Static-export constraints worth noting:

- `output: 'export'` — no server-side runtime
- `trailingSlash: true`
- `images: { unoptimized: true }`

## English discovery content

These are informational reading aids, not guarantees of search-engine indexing,
LLM adoption or ranking. The bilingual HTML product pages remain authoritative.

- `public/docs/{kumuluz-ai,kumuluz-api,business-apis,digital-platform,crowdsensing}.md`:
  substantial documents for all five current platform building blocks.
- `public/docs/{overview,architecture,solutions,faq,company}.md`: connected platform
  context, seven solution areas, selection guidance, company and heritage.
- `public/agents.md`: public source-reading guidance for agents, at `/agents.md`.
- Root `AGENTS.md`: coding guidance only; it is not published.
- `public/llms.txt` and `public/llms-full.txt`: generated concise index and
  self-contained extended brief. All raw docs have stable `/docs/<name>.md` URLs.
  Both locale footers link to the English discovery resources.

### Maintenance

Edit the curated documents, not the generated briefs. Verify claims against
`src/content/products/`, `src/content/products/index.ts`,
`src/views/products/family-data.ts` and the about, Kumuluz, landing and solution
copy. Preserve the distinction between the current five-product family,
supporting components and KumuluzEE/cloud-native heritage. Named integrations
and use cases must retain their example or delivery-specific context.

Each document needs a unique H1, a `Canonical HTML: https://kumuluz.com/en/.../`
line, a substantive opening summary, related Markdown links and the demo/contact
URL. New `public/docs/*.md` files are automatically indexed. Update required
content assertions in `scripts/discovery.mjs` when supported terminology changes.
Coverage is checked against the TypeScript product registry, not a guessed list.

```sh
npm ci
npm run discovery:generate
npm run discovery:check
npm run test:discovery
npm run lint
npx tsc --noEmit --incremental false
npm run format:check
npm run build
npm run discovery:export
```

Commit generated briefs with their curated sources. `discovery:check` rejects
stale briefs, missing documents, missing product coverage and broken raw links.
The actual Netlify entrypoint (`npm run build`) generates briefs, runs content
checks and Node's built-in regression tests, then executes `next build` and
verifies that every discovery artifact exactly matches its source. Export checks
also resolve internal document and canonical HTML links in `out/`.
No runtime API, new dependency or secret is needed.

### HTTP verification (preview and production)

Use the **actual** preview URL from the PR's `deploy/netlify` status or deployment,
and run from a checkout of the deployed revision:

```sh
npm run discovery:smoke -- https://deploy-preview-3--kumuluz-com.netlify.app
# For another PR, replace the origin above with its actual deploy-preview URL.
npm run discovery:smoke -- https://kumuluz.com
```

The reusable smoke command GETs all 13 discovery endpoints (and automatically
includes any new indexed document). It requires status 200, UTF-8 `text/plain`
or `text/markdown`, the expected unique heading and an exact content match to
the checkout. It rejects redirects, HTML fallbacks and stale deployments, checks
every endpoint even after a failure, and exits nonzero with per-URL diagnostics.
Requests use Slovenian language preference to catch accidental locale redirects,
without JavaScript, authentication or cookies. Never bypass site access protection.
Netlify text headers are scoped to discovery files; global security headers and
the `/`-only language redirect are unchanged.

For a basic current-production baseline before these changes are published:

```sh
curl --max-time 30 -i https://kumuluz.com/llms.txt
curl --max-time 30 -i https://kumuluz.com/llms-full.txt
curl --max-time 30 -i https://kumuluz.com/agents.md
```

A pre-merge production smoke run is expected to report differences or missing
new files; that is not evidence of a failed preview. Record the Git revision,
base URL and complete per-endpoint results separately for local export, preview
HTTP and current production. GitHub's successful Netlify status or a passing
build alone does not prove raw endpoints work over HTTP. If DNS, access protection
or deployment availability prevents verification, report that blocker rather
than claiming publication. Confirm new production content only after an
authorized merge/deploy; this task does not authorize either.
