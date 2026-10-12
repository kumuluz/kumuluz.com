# Coding agent guidance

## Structure and constraints

- `app/` is the Next.js App Router; `app/[lang]/` contains English (`en`) and
  Slovenian (`sl`) routes. `src/content/` holds localized authoritative copy,
  `src/views/` page implementations, `src/components/` shared UI and `src/lib/`
  routing, metadata and structured data.
- Preserve bilingual navigation and use the existing routing helpers for HTML
  pages. English discovery assets have locale-independent raw URLs.
- This is a static export: `output: 'export'`, trailing slashes and unoptimized
  images. Do not introduce server-only endpoints or middleware to serve documents.
- Netlify publishes `out/`; its language edge redirect applies only to `/`.
  Keep existing CSP and other security headers; do not loosen preview protection.

## Commands

Run from the repository root:

```sh
npm ci
npm run lint
npx tsc --noEmit --incremental false
npm run format:check
npm run test:discovery
npm run discovery:generate
npm run discovery:check
npm run build
npm run discovery:export
npm run discovery:smoke -- https://DEPLOY-PREVIEW-HOST
npm run discovery:smoke -- https://kumuluz.com
```

`npm run build` is also the Netlify build entrypoint. It generates discovery
briefs, checks coverage/links, runs focused Node tests, exports Next.js and checks
artifacts. `next start` is not a static-export deployment verification command.

## Factual discovery content

Maintain curated English content in `public/docs/*.md` and public reader guidance
in `public/agents.md`. This root file is developer guidance, not a public asset.
Do not hand-edit generated `public/llms.txt` or `public/llms-full.txt`; regenerate
and commit them with their sources.

Verify claims against `src/content/products/`, its `productPages` registry,
`src/views/products/family-data.ts`, the landing, Kumuluz, about and solution copy.
Cover all current registry products separately. Keep each document's unique H1,
`Canonical HTML: https://kumuluz.com/en/.../` line, demo/contact URL and related
Markdown links. `scripts/discovery.mjs` discovers and indexes all public docs.
Update its required content assertions when verified names or capabilities change.

Distinguish the current connected five-product family from KumuluzEE heritage
and related technologies. Describe integration/use-case examples as examples;
do not invent certifications, licenses, SLAs, performance guarantees, customer
claims or universal packaged integrations. Sunesis develops and delivers Kumuluz.
Discovery files are reading aids, not ranking or indexing guarantees.

## Verification and deployment evidence

Check generated files for drift before building, and inspect the exported raw
files after building. The smoke command checks every discovery asset by GET,
requires HTTP 200, UTF-8 text/Markdown (not HTML), rejects redirects and compares
complete content with this checkout. It accepts any deployment origin and uses
no cookies, credentials or JavaScript.

Report local export, actual preview HTTP evidence and current production
separately, with the Git revision and URL. A passing build is not deployment
proof. Inspect PR checks/statuses/deployments for the actual Netlify preview;
if inaccessible, report the concrete blocker and reproducible commands.
Do not merge or publish production without authorization.
