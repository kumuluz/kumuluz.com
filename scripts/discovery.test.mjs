import assert from 'node:assert/strict'
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import {
  canonicalUrl,
  checkExport,
  generate,
  links,
  localLink,
  registryCoverage,
  smoke,
  validateRawLinks,
  validateText,
} from './discovery.mjs'

test('canonical English references accept the homepage and product pages', () => {
  for (const url of [
    'https://kumuluz.com/en/',
    'https://kumuluz.com/en/products/kumuluz-ai/',
  ]) {
    assert.equal(canonicalUrl(`Canonical HTML: ${url}\n`), url)
  }
  assert.equal(
    canonicalUrl('Canonical HTML: https://kumuluz.com/sl/\n'),
    undefined,
  )
})

test('export validation checks exact artifacts and canonical HTML links', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'kumuluz-export-'))
  const text = '# Product\n\nCanonical HTML: https://kumuluz.com/en/\n'
  try {
    await writeFile(join(dir, 'product.md'), text)
    const entries = { '/product.md': text }
    await assert.rejects(checkExport(entries, dir), /ENOENT/)
    await mkdir(join(dir, 'en'))
    await writeFile(join(dir, 'en/index.html'), '')
    await assert.rejects(checkExport(entries, dir), /empty linked artifact/)
    await writeFile(join(dir, 'en/index.html'), '<h1>English</h1>')
    await checkExport(entries, dir)
    await assert.rejects(
      checkExport({ '/product.md': '# Stale\n' }, dir),
      /Export mismatch/,
    )
    await assert.rejects(
      checkExport({ '/missing.md': '# Missing\n' }, dir),
      /ENOENT/,
    )
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
})

test('coverage tracks the authoritative registry and rejects missing or duplicate products', () => {
  const registry =
    "export const productPages = { 'one': onePage, two: twoPage }"
  const docs = ['one', 'two'].map((slug) => ({
    canonical: `https://kumuluz.com/en/products/${slug}/`,
  }))
  registryCoverage(docs, registry)
  assert.throws(
    () => registryCoverage(docs.slice(0, 1), registry),
    /coverage differ/,
  )
  assert.throws(
    () => registryCoverage([...docs, docs[0]], registry),
    /coverage differ/,
  )
  assert.throws(
    () =>
      registryCoverage(
        docs,
        registry.replace('two: twoPage', 'three: threePage'),
      ),
    /coverage differ/,
  )
})

test('broken internal raw links fail with the source path', () => {
  validateRawLinks({ '/docs/a.md': '[B](./b.md)', '/docs/b.md': '# B\n' })
  validateRawLinks({
    '/docs/a.md': '[B](./b.md#platform-role)',
    '/docs/b.md': '# B\n\n## Platform role\n',
  })
  assert.throws(
    () => validateRawLinks({ '/docs/a.md': '[B](./missing.md)' }),
    /\/docs\/a.md: broken raw link/,
  )
  assert.throws(
    () => validateRawLinks({ '/docs/a.md': '[A](#missing)' }),
    /broken Markdown heading link/,
  )
})

test('text validation rejects HTML, missing content and duplicate headings', () => {
  validateText('# Product\n\nRAG and approvals.', 'Product', [
    'RAG',
    'approval',
  ])
  for (const text of [
    '<html>Product</html>',
    '# Wrong\n',
    '# Product\n# Product\n',
  ]) {
    assert.throws(() => validateText(text, 'Product'))
  }
  assert.throws(() => validateText('# Product\n', 'Product', ['MCP']))
})

test('raw links resolve on the canonical origin, including relative links', () => {
  assert.deepEqual(links('[A](./a.md) [B](https://kumuluz.com/agents.md)'), [
    './a.md',
    'https://kumuluz.com/agents.md',
  ])
  assert.equal(localLink('./a.md', '/docs/b.md'), '/docs/a.md')
  assert.equal(localLink('https://sunesis.si/en/', '/docs/b.md'), null)
})

test('generation is deterministic and full brief makes relative links absolute', () => {
  const docs = [
    {
      path: '/docs/product.md',
      heading: 'Product',
      canonical: 'https://kumuluz.com/en/products/product/',
      description: 'A product.',
      text: '# Product\n\nSee [other](./other.md).\n',
    },
  ]
  assert.deepEqual(generate(docs), generate(docs))
  assert(
    generate(docs)['/llms.txt'].includes('https://kumuluz.com/docs/product.md'),
  )
  assert(
    generate(docs)['/llms-full.txt'].includes(
      '[other](https://kumuluz.com/docs/other.md)',
    ),
  )
  assert(generate(docs)['/llms-full.txt'].includes('## Product'))
  assert(!generate(docs)['/llms-full.txt'].endsWith('\n\n'))
})

test('HTTP smoke checks every path without accepting redirects, HTML, stale content or wrong types', async () => {
  let scenario = 'valid'
  const requested = []
  const entries = {
    '/llms.txt': '# Kumuluz\n',
    '/docs/product.md': '# Product\n',
  }
  const server = createServer((request, response) => {
    requested.push(request.url)
    assert.equal(request.headers['accept-language'], 'sl')
    assert.equal(request.headers.cookie, undefined)
    assert.equal(request.headers.authorization, undefined)
    if (scenario === 'redirect') {
      response.writeHead(302, { location: '/en/' }).end()
      return
    }
    if (scenario === 'missing') {
      response.writeHead(404).end()
      return
    }
    response.setHeader(
      'Content-Type',
      scenario === 'type'
        ? 'text/html'
        : scenario === 'charset'
          ? 'text/plain'
          : 'text/markdown; charset=UTF-8',
    )
    response.end(
      scenario === 'html'
        ? '<html>fallback</html>'
        : scenario === 'stale'
          ? '# Old revision\n'
          : entries[request.url],
    )
  })
  await new Promise((done) => server.listen(0, '127.0.0.1', done))
  try {
    const base = `http://127.0.0.1:${server.address().port}`
    await smoke(base, entries)
    assert.deepEqual(requested, Object.keys(entries))
    for (scenario of [
      'redirect',
      'missing',
      'type',
      'charset',
      'html',
      'stale',
    ]) {
      requested.length = 0
      await assert.rejects(smoke(base, entries), /Discovery smoke check failed/)
      assert.deepEqual(requested, Object.keys(entries))
    }
  } finally {
    await new Promise((done) => server.close(done))
  }
})
