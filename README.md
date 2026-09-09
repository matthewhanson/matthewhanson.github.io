# matthewhanson.github.io

Personal site, served at **[geoskeptic.dev](https://geoskeptic.dev)**. Static HTML and one
stylesheet; a small Node script renders the lists from data files. No dependencies, no CI —
the generated html is committed and GitHub Pages serves it as-is.

```
index.html            home — bio, speaking, writing, open source
talks/index.html      the complete record: talks, panels, writing
css/main.css          letterpress palette + type, shared by both pages
data/talks.json       ← every talk, panel, and podcast (split by `kind`)
data/posts.json       ← the outbound writing
data/demos.json       ← demo apps (empty for now)
scripts/build.mjs     renders the data into both pages
scripts/check-links.mjs   reports which outbound links have rotted
presentations/        the 2018–2020 reveal-md decks, served at their original urls
images/
  avatar.png          the portrait, recoloured to the site palette
  avatar-classic.png  the original yellow version, kept
  favicon.png
```

## What this site is

Four collections — **talks**, **writing**, **podcasts**, and (eventually) **demo apps** — where
this site is the index and hosts almost nothing.

`kind` in `data/talks.json` splits speaking into `talk`, `podcast`, and `panel`; the renderer gives
each its own section rather than lumping them together. Markers encode where a thing lives: an
oxblood diamond for a talk, a hollow gold ring for writing hosted elsewhere, a filled gold circle
for a podcast. Every entry links out to wherever the abstract, video, slides, or
post already lives.

## Cache-busting the stylesheet

Both pages link `css/main.css?v=N`. **Bump `N` in both html files whenever you change
the css.** Without it, Cloudflare and browsers happily serve a stale stylesheet against
fresh html — which once rendered a year heading as `20257`, because the html had a count
span the cached css had no rule for. The symptom looks like a design bug and isn't one.

## Editing

**Content lives in `data/*.json`. Never hand-edit inside a `<!-- BEGIN:… -->` marker** — the build
overwrites those regions. Everything else in the html (the bio, the prose, the colophon) is hand
written and never touched.

```bash
node scripts/build.mjs           # render data → html
node scripts/build.mjs --check   # fail if the html is stale (no write)
python3 -m http.server 8747      # preview → http://localhost:8747
```

Nothing date-relative is ever typed by hand: "upcoming" is computed from today against each
entry's `sort` key, and the talk counts are derived. An earlier hand-typed `Today` flag had
already gone stale, which is why.

**`subtitle` and `note` are different things.** A subtitle is part of the talk's identity
("From specification to infrastructure") and renders with the title, in italic, because it
usually carries the context the title alone loses. A `note` is a fact about the delivery
("Co-presented", "Opening keynote") and renders as a small label under it. They used to be
one field, which is why entries read as a flat wall.

Each entry keeps `when` as a verbatim display string (`"6–9 Oct 2026"`, `"year unconfirmed"`) plus
an optional ISO `sort` key for ordering — so date ranges and genuine uncertainty survive instead of
being flattened into a fake precision.

## Link rot

This site's main failure mode is other people's hosting disappearing, silently. So:

```bash
node scripts/check-links.mjs             # everything
node scripts/check-links.mjs --only=posts
node scripts/check-links.mjs --json
```

It reports and changes nothing. Dead links come with an archive.org snapshot url when one exists;
you decide whether to repoint or drop. Root-relative urls are checked against the files on disk
rather than over the network. Worth running a few times a year — two FOSS4G 2021 abstracts had
already rotted and are now pointed at Wayback.

## Styling

Vintage two-colour letterpress — ink and oxblood on cream, antique gold as a sparing "foil".
The palette and type are carried over from the **`thurston`** presentation theme
(`matthewhanson/presentations`, private) so the site and the vendor-neutral decks read as one hand.

| Token | Value | Role |
|---|---|---|
| `--paper` | `#f5efe1` | warm cream press sheet (+ a 4px radial paper tooth) |
| `--ink` | `#1b2233` | near-black ink, faintly blue |
| `--muted` | `#6f685a` | meta and captions — 4.8:1 on paper |
| `--oxblood` | `#8c2f2f` | rules, markers, links |
| `--gold` | `#b8894b` | the foil — portrait ring and the writing markers |

Type is Source Serif 4 (headings, entry titles), Inter (body), IBM Plex Mono (labels, meta,
colophon), all from Google Fonts. A `prefers-color-scheme: dark` block flips the sheet to ink.

**Contrast is a constraint, not a preference.** `--muted` and the dark-mode `--oxblood` are both set
to the values they are because the previous ones failed WCAG AA at the sizes they're used
(3.3:1 and 4.3:1 against a 4.5:1 requirement). If you retune the palette, check the ratios.

**The three collections deliberately differ.** Talks take an oxblood diamond marker and serif
titles; writing takes a hollow gold ring and names its host; open source takes an upright square
and a **monospace** title so repos read as code. They used to render identically, which made the
page hard to scan.

The masthead pairs both identities: `geoskeptic` as the mark, *Matthew Hanson* as the person.

## Custom domain

`geoskeptic.dev`, on Cloudflare DNS with the records **proxied** (orange cloud), so Cloudflare
terminates TLS with its own Universal SSL certificate.

Because of that, **GitHub's "Enforce HTTPS" is permanently unavailable and should be ignored** —
GitHub never issues a certificate for a proxied domain. Cloudflare's *Always Use HTTPS* is the
equivalent setting. Cloudflare's SSL mode must be **Full**: *Flexible* causes a redirect loop and
*Full (strict)* fails, since GitHub holds no certificate for this hostname.

`.dev` is on the HSTS preload list as a whole TLD, so browsers refuse plain HTTP with no
click-through. During any certificate change the site is unreachable rather than insecure.

The 2018–2020 decks in `presentations/` are served at the same paths they had as a project page of
`matthewhanson/presentations`, so those urls survived that repo going private. **Pages must stay
disabled on that repo** — a project page there would shadow this folder.
