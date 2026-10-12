import assert from 'node:assert/strict'
import { readFile, readdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import ts from 'typescript'

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const origin = 'https://kumuluz.com'
export const required = {
  'overview.md': ['Kumuluz platform overview', 'Sunesis'],
  'architecture.md': ['Kumuluz architecture', 'MCP', 'deterministic'],
  'solutions.md': [
    'Kumuluz solutions',
    'Knowledge Mentor',
    'AI Smart Assistant',
  ],
  'faq.md': ['Kumuluz product selection FAQ', 'KumuluzEE'],
  'company.md': ['Sunesis and Kumuluz', 'Sunesis'],
  'kumuluz-ai.md': ['KumuluzAI Platform', 'RAG', 'routing', 'approval'],
  'kumuluz-api.md': ['Kumuluz API', 'MCP', 'routing', 'token'],
  'business-apis.md': ['Kumuluz Business APIs', 'workflow', 'capabilities'],
  'digital-platform.md': [
    'Kumuluz Digital Platform',
    'connectors',
    'deterministic',
  ],
  'crowdsensing.md': [
    'Kumuluz Crowdsensing',
    'distributed',
    'privacy',
    'analytics',
  ],
}

export function validateText(text, heading, tokens = []) {
  assert(!/<(?:!doctype\s+html|html|head|body)\b/i.test(text), 'HTML fallback')
  assert.equal(
    text.split('\n').filter((line) => /^# /.test(line)).length,
    1,
    'Expected one unique document heading',
  )
  assert(text.startsWith(`# ${heading}\n`), `Expected heading: ${heading}`)
  for (const token of tokens) {
    assert(
      text.toLowerCase().includes(token.toLowerCase()),
      `Missing content: ${token}`,
    )
  }
}

export function links(text) {
  return [
    ...text.matchAll(/\[[^\]]+\]\(([^)\s]+)\)/g),
    ...text.matchAll(/^(?:Canonical HTML|Source): (https?:\/\/\S+)$/gm),
  ].map((match) => match[1])
}

export function localLink(href, path) {
  const url = new URL(href, `${origin}${path}`)
  return url.origin === origin ? url.pathname : null
}

export function canonicalUrl(text) {
  return text.match(/^Canonical HTML: (https:\/\/kumuluz\.com\/en\/\S*)$/m)?.[1]
}

export async function documents() {
  const names = (await readdir(resolve(root, 'public/docs')))
    .filter((name) => name.endsWith('.md'))
    .sort()
  for (const name of Object.keys(required))
    assert(names.includes(name), `Missing ${name}`)
  return Promise.all(
    names.map(async (name) => {
      const text = await readFile(resolve(root, 'public/docs', name), 'utf8')
      const heading = text.match(/^# (.+)\n/)?.[1]
      assert(heading, `Missing heading in ${name}`)
      validateText(
        text,
        required[name]?.[0] ?? heading,
        required[name]?.slice(1),
      )
      assert(text.length >= 1200, `${name}: expected substantive content`)
      const canonical = canonicalUrl(text)
      assert(canonical, `${name}: missing canonical English HTML URL`)
      assert(
        text.includes(`${origin}/en/#contact`),
        `${name}: missing demo/contact`,
      )
      const description = text
        .slice(text.indexOf('\n') + 1)
        .trim()
        .split(/\n\s*\n/)[0]
        .replace(/\n/g, ' ')
      return { path: `/docs/${name}`, text, heading, canonical, description }
    }),
  )
}

export function generate(docs) {
  const intro =
    'Kumuluz is a modern connected enterprise platform family developed and delivered by Sunesis. It connects AI agents, governed APIs, reusable business capabilities, cloud-native services, deterministic workflows and distributed data.'
  const index = [
    '# Kumuluz',
    '',
    `> ${intro}`,
    '',
    'Curated English discovery aids, not guarantees of crawler adoption or ranking. The five current building blocks are KumuluzAI Platform, Kumuluz API, Kumuluz Business APIs, Kumuluz Digital Platform and Kumuluz Crowdsensing.',
    '',
    '## Platform and product documentation',
    '',
    ...docs.map(
      (doc) =>
        `- [${doc.heading}](${origin}${doc.path}): ${doc.description} [Canonical HTML](${doc.canonical}).`,
    ),
    '',
    '## Reading guidance and contact',
    '',
    `- [Public agent guide](${origin}/agents.md): authoritative sources, terminology and factual boundaries.`,
    `- [Extended self-contained brief](${origin}/llms-full.txt): all curated documents in one file.`,
    `- [English website](${origin}/en/): bilingual human-readable site.`,
    `- [Solutions](${origin}/en/solutions/): seven enterprise solution areas.`,
    `- [Why Kumuluz](${origin}/en/about/): platform approach and enterprise context.`,
    '- [Sunesis](https://sunesis.si/en/): company developing and delivering Kumuluz.',
    `- [Request a demo or contact the team](${origin}/en/#contact).`,
    '',
  ].join('\n')
  const full =
    [
      '# Kumuluz — Full machine-readable brief',
      '',
      intro,
      '',
      `Generated from the curated English Markdown documents linked in [llms.txt](${origin}/llms.txt). Canonical HTML pages remain the authoritative product presentation. Examples are not promises of packaged integrations; deployment-specific scope and governance must be agreed with Sunesis.`,
      '',
      ...docs.map((doc) => {
        const absoluteLinks = doc.text.replace(
          /(\[[^\]]+\]\()([^)\s]+)(\))/g,
          (_, before, href, after) =>
            `${before}${new URL(href, `${origin}${doc.path}`).href}${after}`,
        )
        return `---\n\nSource: ${origin}${doc.path}\n\n${absoluteLinks.replace(/^#/gm, '##').trim()}\n`
      }),
      '',
    ]
      .join('\n')
      .trimEnd() + '\n'
  return { '/llms.txt': index, '/llms-full.txt': full }
}

export function registryCoverage(docs, registry) {
  const source = ts.createSourceFile(
    'products.ts',
    registry,
    ts.ScriptTarget.Latest,
  )
  let slugs
  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      node.name.getText(source) === 'productPages'
    ) {
      assert(
        ts.isObjectLiteralExpression(node.initializer),
        'Unexpected product registry shape',
      )
      slugs = node.initializer.properties.map((property) =>
        property.name.getText(source).replace(/^['"]|['"]$/g, ''),
      )
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  assert(slugs?.length, 'Could not read productPages registry')
  const covered = docs
    .filter((doc) => doc.canonical.includes('/en/products/'))
    .map((doc) =>
      new URL(doc.canonical).pathname.split('/').filter(Boolean).at(-1),
    )
  assert.deepEqual(
    covered.sort(),
    slugs.sort(),
    'Product registry and Markdown coverage differ',
  )
}

export async function assets() {
  const docs = await documents()
  registryCoverage(
    docs,
    await readFile(resolve(root, 'src/content/products/index.ts'), 'utf8'),
  )
  const generated = generate(docs)
  const guide = await readFile(resolve(root, 'public/agents.md'), 'utf8')
  validateText(guide, 'Kumuluz discovery guide for agents', [
    'Sunesis',
    'llms.txt',
  ])
  const entries = { ...generated, '/agents.md': guide }
  for (const doc of docs) entries[doc.path] = doc.text
  validateRawLinks(entries)
  for (const doc of docs) {
    assert(
      links(generated['/llms.txt']).includes(`${origin}${doc.path}`),
      `Unindexed ${doc.path}`,
    )
  }
  return { entries, generated, docs }
}

export function validateRawLinks(entries) {
  for (const [path, text] of Object.entries(entries)) {
    for (const href of links(text)) {
      const target = localLink(href, path)
      if (!target || !/\.(md|txt)$/.test(target)) continue
      assert(Object.hasOwn(entries, target), `${path}: broken raw link ${href}`)
      const fragment = new URL(href, `${origin}${path}`).hash.slice(1)
      if (fragment) {
        const headings = [...entries[target].matchAll(/^#+ (.+)$/gm)].map(
          (match) =>
            match[1]
              .toLowerCase()
              .replace(/[^\p{L}\p{N}\s_-]/gu, '')
              .replace(/\s/g, '-'),
        )
        assert(
          headings.includes(decodeURIComponent(fragment)),
          `${path}: broken Markdown heading link ${href}`,
        )
      }
    }
  }
}

export async function checkExport(entries, exportDir = resolve(root, 'out')) {
  for (const [path, expected] of Object.entries(entries)) {
    const actual = await readFile(resolve(exportDir, `.${path}`), 'utf8')
    assert.equal(actual, expected, `Export mismatch: ${path}`)
    for (const href of links(actual)) {
      const target = localLink(href, path)
      if (!target) continue
      const file = target.endsWith('/') ? `${target}index.html` : target
      const linked = await readFile(resolve(exportDir, `.${file}`), 'utf8')
      assert(linked.length, `${path}: empty linked artifact ${target}`)
    }
    console.log(`EXPORT OK ${path} (${Buffer.byteLength(actual)} bytes)`)
  }
}

export async function smoke(base, entries) {
  const url = new URL(base)
  assert(
    ['http:', 'https:'].includes(url.protocol),
    'Base URL must use HTTP(S)',
  )
  assert(
    !url.username && !url.password,
    'Do not put credentials in the base URL',
  )
  assert(
    url.pathname === '/' && !url.search && !url.hash,
    'Use the deployment origin as base URL',
  )
  const failures = []
  for (const [path, expected] of Object.entries(entries)) {
    const endpoint = new URL(path, url)
    try {
      const response = await fetch(endpoint, {
        redirect: 'manual',
        signal: AbortSignal.timeout(20000),
        headers: {
          'Accept-Language': 'sl',
          Accept: 'text/markdown, text/plain',
        },
      })
      assert.equal(
        response.status,
        200,
        `HTTP ${response.status}; location=${response.headers.get('location')}`,
      )
      const type = response.headers.get('content-type') ?? ''
      assert(
        /^text\/(?:plain|markdown)(?:;|$)/i.test(type),
        `Unexpected Content-Type: ${type}`,
      )
      assert(
        /charset=["']?utf-8\b/i.test(type),
        `Missing UTF-8 charset: ${type}`,
      )
      const text = await response.text()
      const heading = expected.match(/^# (.+)\n/)[1]
      validateText(text, heading)
      assert.equal(
        text.replace(/\r\n/g, '\n'),
        expected,
        'Content differs from this checkout (stale revision or fallback)',
      )
      console.log(
        `HTTP OK ${endpoint} | 200 | ${type} | heading and complete content match`,
      )
    } catch (error) {
      failures.push(
        `${endpoint}: ${error.message}${error.cause ? ` (${error.cause.message})` : ''}`,
      )
    }
  }
  assert.equal(
    failures.length,
    0,
    `Discovery smoke check failed:\n${failures.join('\n')}`,
  )
}

async function main() {
  const mode = process.argv[2]
  assert(
    ['generate', 'check', 'export', 'smoke'].includes(mode),
    'Usage: discovery.mjs generate|check|export|smoke [base-url]',
  )
  const { entries, generated } = await assets()
  for (const [path, expected] of Object.entries(generated)) {
    if (mode === 'generate')
      await writeFile(resolve(root, `public${path}`), expected)
    else
      assert.equal(
        await readFile(resolve(root, `public${path}`), 'utf8'),
        expected,
        `Stale ${path}: run npm run discovery:generate`,
      )
  }
  if (mode === 'export') await checkExport(entries)
  if (mode === 'smoke') {
    assert(process.argv[3], 'Supply a production or deploy-preview base URL')
    await smoke(process.argv[3], entries)
  }
  console.log(
    `Discovery ${mode}: ${Object.keys(entries).length} assets verified`,
  )
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
}
