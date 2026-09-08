#!/usr/bin/env node
// Check every outbound url in data/*.json and report what has rotted.
//
//   node scripts/check-links.mjs             # check everything
//   node scripts/check-links.mjs --only=posts
//   node scripts/check-links.mjs --json      # machine-readable
//
// Report only. Nothing is rewritten — the data files are yours to fix by hand.
//
// This site hosts almost nothing: talks link to conference programs and videos,
// posts link to employers' blogs. That makes link rot the main way it decays, and
// silently — an entry keeps looking fine while its destination is gone. So this
// exists to make the decay visible, and to hand you a Wayback snapshot to
// substitute when something has genuinely disappeared.

import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf8'))
const arg = (n) => process.argv.find((a) => a.startsWith(`--${n}=`))?.split('=')[1]
const JSON_OUT = process.argv.includes('--json')
const ONLY = arg('only')

const C = process.stdout.isTTY && !JSON_OUT
const c = (n, s) => (C ? `\x1b[${n}m${s}\x1b[0m` : s)
const green = (s) => c(32, s), red = (s) => c(31, s), yellow = (s) => c(33, s), dim = (s) => c(2, s)

// Collect every url with enough context to find it again in the data files.
const targets = []
const add = (file, entry, label, url) => { if (url) targets.push({ file, entry, label, url }) }

if (!ONLY || ONLY === 'talks')
  for (const t of read('data/talks.json')) {
    add('talks.json', t.title, 'title', t.url)
    for (const l of t.links ?? []) add('talks.json', t.title, l.label, l.url)
  }
if (!ONLY || ONLY === 'posts')
  for (const p of read('data/posts.json')) add('posts.json', p.title, 'post', p.url)
if (!ONLY || ONLY === 'demos')
  for (const d of read('data/demos.json')) add('demos.json', d.title, 'demo', d.url)

// De-dupe: the same conference program is often cited by several talks.
const byUrl = new Map()
for (const t of targets) {
  if (!byUrl.has(t.url)) byUrl.set(t.url, { url: t.url, cites: [] })
  byUrl.get(t.url).cites.push(t)
}
const unique = [...byUrl.values()]

// A root-relative url is a page on this site, not someone else's hosting. Check
// it against the built files rather than over the network — otherwise every
// self-hosted archive deck reports dead.
function probeLocal(url) {
  const clean = url.split(/[?#]/)[0]
  const candidates = clean.endsWith('/')
    ? [join(ROOT, clean, 'index.html')]
    : [join(ROOT, clean), join(ROOT, clean, 'index.html')]
  return candidates.some(existsSync)
    ? { status: 200, local: true }
    : { status: 404, local: true, error: 'not found on disk' }
}

async function probe(url) {
  if (url.startsWith('/')) return probeLocal(url)
  // HEAD first; a fair number of sites reject it, so fall back to a ranged GET
  // rather than pulling whole pages.
  for (const init of [
    { method: 'HEAD', redirect: 'follow' },
    { method: 'GET', redirect: 'follow', headers: { Range: 'bytes=0-2048' } },
  ]) {
    try {
      const ctl = new AbortController()
      const timer = setTimeout(() => ctl.abort(), 20000)
      const res = await fetch(url, {
        ...init,
        signal: ctl.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (link-check; +https://geoskeptic.dev)', ...init.headers },
      })
      clearTimeout(timer)
      if (res.status === 405 || res.status === 501) continue // HEAD not allowed
      return { status: res.status, final: res.url }
    } catch (e) {
      if (init.method === 'GET') return { status: 0, error: e.name === 'AbortError' ? 'timeout' : e.message }
    }
  }
  return { status: 0, error: 'unreachable' }
}

async function wayback(url) {
  try {
    const ctl = new AbortController()
    const timer = setTimeout(() => ctl.abort(), 15000)
    const r = await fetch(`https://archive.org/wayback/available?url=${encodeURIComponent(url)}`,
      { signal: ctl.signal })
    clearTimeout(timer)
    const j = await r.json()
    clearTimeout(timer)
    return j?.archived_snapshots?.closest?.url ?? null
  } catch { return null }
}

// Modest concurrency — enough to be quick, not enough to look like an attack.
async function pool(items, n, fn) {
  const out = []
  let i = 0
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k], k) }
  }))
  return out
}

if (!JSON_OUT) console.log(`\n  Checking ${unique.length} unique urls from ${targets.length} references…\n`)

const results = await pool(unique, 8, async (u) => {
  const r = await probe(u.url)
  const dead = r.status === 0 || r.status >= 400
  const moved = !dead && r.final && r.final !== u.url
  // no point asking archive.org about a path on this site
  const snapshot = dead && !r.local ? await wayback(u.url) : null
  return { ...u, ...r, dead, moved, snapshot }
})

const dead = results.filter((r) => r.dead)
const moved = results.filter((r) => r.moved)
const ok = results.filter((r) => !r.dead && !r.moved)

if (JSON_OUT) {
  console.log(JSON.stringify({ checked: results.length, dead, moved, ok: ok.length }, null, 2))
} else {
  for (const r of dead) {
    console.log(`  ${red(r.local ? 'MISSING' : 'DEAD')} ${r.status || r.error}  ${r.url}${r.local ? dim('  (local file)') : ''}`)
    for (const cite of r.cites) console.log(`       ${dim(`${cite.file} · ${cite.entry} · ${cite.label}`)}`)
    if (r.snapshot) console.log(`       ${yellow('wayback')} ${r.snapshot}`)
    else console.log(`       ${dim('no wayback snapshot found')}`)
  }
  for (const r of moved) {
    console.log(`  ${yellow('MOVED')} ${r.status}  ${r.url}`)
    console.log(`       ${dim('now →')} ${r.final}`)
    for (const cite of r.cites) console.log(`       ${dim(`${cite.file} · ${cite.entry} · ${cite.label}`)}`)
  }
  console.log(`\n  ${green(`${ok.length} ok`)} · ${moved.length ? yellow(`${moved.length} moved`) : '0 moved'} · ${dead.length ? red(`${dead.length} dead`) : '0 dead'}`)
  if (dead.length) console.log(`  ${dim('Nothing was changed. Edit data/*.json to point at a snapshot or drop the link.')}`)
}

process.exit(dead.length ? 1 : 0)
