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
  Keep existing CSP and other security headers.

## Commands

Run from the repository root:

```sh
npm ci
npm run lint
npx tsc --noEmit --incremental false
npm run format:check
npm run test:discovery
npm run discovery:generate   # after editing public/docs/*.md
npm run discovery:check
npm run build                # also runs generate, check, tests and export checks
npm run discovery:smoke -- https://deploy-preview-<PR>--kumuluz-com.netlify.app
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

## Verification

Run `npm run discovery:check` before building; it fails on stale generated briefs.
After a deploy, run the smoke command against the deploy preview or production.
It GETs every discovery asset, requires HTTP 200 with UTF-8 text/Markdown (not
HTML), rejects redirects and compares the complete content with this checkout.
