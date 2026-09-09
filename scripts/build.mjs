#!/usr/bin/env node
// Render the data in data/*.json into the marker-delimited regions of the html.
//
//   node scripts/build.mjs          # write
//   node scripts/build.mjs --check  # fail if output would change (no write)
//
// Only the regions between <!-- BEGIN:name --> and <!-- END:name --> are machine
// owned. Everything else in the html — the bio, the prose, the colophon — is
// hand written and never touched, which is why this is a region replacer and not
// a template engine.
//
// Nothing here is date-relative in the source data: "upcoming" is computed from
// today against each entry's sort key, so the site cannot go stale the way a
// hand-typed "Today" flag did.

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf8'))
const CHECK = process.argv.includes('--check')

const talks = read('data/talks.json')
const posts = read('data/posts.json')
const demos = read('data/demos.json')

const TODAY = new Date().toISOString().slice(0, 10)
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// An entry is upcoming if its date is in the future. Undated entries fall back to
// the stored status so "year unconfirmed" rows don't silently become upcoming.
const isUpcoming = (t) => (t.sort ? t.sort >= TODAY : t.status === 'upcoming')
const bySortDesc = (a, b) => String(b.sort ?? '').localeCompare(String(a.sort ?? ''))
const bySortAsc = (a, b) => String(a.sort ?? '').localeCompare(String(b.sort ?? ''))

const speaking = talks.filter((t) => t.kind === 'talk')
const upcoming = speaking.filter(isUpcoming).sort(bySortAsc)
const delivered = speaking.filter((t) => !isUpcoming(t)).sort(bySortDesc)
const sideshow = talks.filter((t) => t.kind !== 'talk').sort(bySortDesc)

// Where an outbound post actually lives. On a site that hosts nothing, naming the
// host is the useful signal — and it is what makes link rot legible.
const SOURCES = {
  'element84.com': 'Element 84',
  'developmentseed.org': 'Development Seed',
  'cloudnativegeo.org': 'Cloud-Native Geospatial',
  'medium.com': 'Medium',
  'greatdataproducts.com': 'Great Data Products',
}
const sourceOf = (url) => {
  try {
    const h = new URL(url).hostname.replace(/^www\./, '')
    return SOURCES[h] ?? h
  } catch { return null }
}

const linkList = (links, depth = 4) =>
  !links?.length ? '' : `\n${'\t'.repeat(depth)}<span class="entry-links">${links
    .map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join(' ')}</span>`

// ---- renderers -------------------------------------------------------------

function talkEntry(t, { showYear = false } = {}) {
  const when = showYear && t.sort && !/\d{4}/.test(t.when ?? '')
    ? `${t.when} ${t.sort.slice(0, 4)}`
    : t.when
  const place = [t.venue, t.location].filter(Boolean).map(esc).join(' · ')
  return `\t\t\t<li>
\t\t\t\t<span class="entry-meta">${[esc(when), place].filter(Boolean).join(' &middot; ')}</span>
\t\t\t\t<span class="entry-title">${esc(t.title)}</span>${
    t.subtitle ? `\n\t\t\t\t<span class="entry-sub">${esc(t.subtitle)}</span>` : ''}${
    t.note ? `\n\t\t\t\t<span class="entry-note${
      t.note.length > 24 ? ' entry-note-long' : ''}">${esc(t.note)}</span>` : ''}${
    linkList(t.links)}
\t\t\t</li>`
}

function postEntry(p) {
  const src = sourceOf(p.url)
  const title = p.url ? `<a href="${esc(p.url)}">${esc(p.title)}</a>` : esc(p.title)
  return `\t\t\t<li>
\t\t\t\t<span class="entry-meta">${[esc(p.date), src ? esc(src) : null].filter(Boolean).join(' &middot; ')}</span>
\t\t\t\t<span class="entry-title">${title}</span>
\t\t\t</li>`
}

const years = () => [...new Set(delivered.map((t) => t.sort?.slice(0, 4)).filter(Boolean))]
  .sort().reverse()

// A 45-entry record needs a way in other than scrolling.
const yearIndex = () => `\t\t<nav class="yearnav" aria-label="Jump to year">\n${years()
  .map((y) => `\t\t\t<a href="#y${y}">${y}</a>`)
  .join('\n')}\n\t\t</nav>`

function demoEntry(d) {
  return `\t\t\t<li>
\t\t\t\t<span class="entry-title">${d.url ? `<a href="${esc(d.url)}">${esc(d.title)}</a>` : esc(d.title)}</span>
\t\t\t\t<span class="entry-meta">${esc(d.stack ?? '')}</span>${
    d.note ? `\n\t\t\t\t<span class="entry-note">${esc(d.note)}</span>` : ''}
\t\t\t</li>`
}

const list = (items, cls = 'entries') =>
  `\t\t<ul class="${cls}">\n${items.join('\n')}\n\t\t</ul>`

// ---- region contents -------------------------------------------------------

const deliveredCount = delivered.length
const firstYear = speaking.map((t) => t.sort).filter(Boolean).sort()[0]?.slice(0, 4)

const regions = {
  // home page
  upcoming: upcoming.length
    ? list(upcoming.map((t) => talkEntry(t, { showYear: true })))
    : `\t\t<p class="empty">Nothing scheduled at the moment.</p>`,
  recent: list(delivered.slice(0, 4).map((t) => talkEntry(t, { showYear: true }))),
  writing: list(posts.slice(0, 4).map(postEntry)),
  demos: demos.length
    ? list(demos.map(demoEntry), 'entries cards')
    : `\t\t<p class="empty">Nothing published yet.</p>`,
  talkcount: `${deliveredCount} talks since ${firstYear}`,

  // talks page
  'archive-upcoming': upcoming.length
    ? list(upcoming.map((t) => talkEntry(t, { showYear: true })))
    : `\t\t<p class="empty">Nothing scheduled at the moment.</p>`,
  'archive-talks': (() => {
    const years = [...new Set(delivered.map((t) => t.sort?.slice(0, 4)).filter(Boolean))]
      .sort().reverse()
    return years.map((y) => {
      const rows = delivered.filter((t) => t.sort?.slice(0, 4) === y)
      return `\t\t<h2 class="label year" id="y${y}">${y}</h2>\n${list(rows.map((t) => talkEntry(t)))}`
    }).join('\n\n')
  })(),
  'archive-yearnav': yearIndex(),
  'archive-sideshow': list(sideshow.map((t) => talkEntry(t, { showYear: true }))),
  'archive-writing': list(posts.map(postEntry)),
  'archive-totals': `${deliveredCount} talks, workshops, and invited sessions`
    + ` &middot; ${sideshow.length} panel${sideshow.length === 1 ? '' : 's'} and podcast${sideshow.length === 1 ? '' : 's'}`
    + ` &middot; ${posts.length} posts`,
}

// ---- apply -----------------------------------------------------------------

let changed = 0
for (const file of ['index.html', 'talks/index.html']) {
  const path = join(ROOT, file)
  const before = readFileSync(path, 'utf8')
  let after = before
  for (const [name, body] of Object.entries(regions)) {
    const re = new RegExp(`(<!-- BEGIN:${name} -->)[\\s\\S]*?(<!-- END:${name} -->)`, 'g')
    if (!re.test(after)) continue
    re.lastIndex = 0
    after = after.replace(re, (_, a, b) =>
      body.includes('\n') ? `${a}\n${body}\n\t\t${b}` : `${a}${body}${b}`)
  }
  if (after !== before) {
    changed++
    if (CHECK) console.error(`  would change: ${file}`)
    else { writeFileSync(path, after); console.log(`  wrote ${file}`) }
  } else console.log(`  unchanged ${file}`)
}

console.log(`\n  ${deliveredCount} delivered talks · ${upcoming.length} upcoming · ${sideshow.length} panels/podcasts · ${posts.length} posts`)
if (CHECK && changed) { console.error('\n  --check: output is stale, run `node scripts/build.mjs`'); process.exit(1) }
