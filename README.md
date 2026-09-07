# matthewhanson.github.io

Personal site. Static HTML + one stylesheet, no build step — GitHub Pages serves it as-is.

```
index.html          home — bio, upcoming talks, open source
talks/index.html    the complete record: 45 delivered talks, panels, writing
css/main.css        letterpress palette + type, shared by both pages
images/
  avatar.png        the portrait, recoloured to the site palette
  avatar-classic.png  the original yellow version, kept
  favicon.png
```

## The talks record

`talks/index.html` is the published form of **`TALK-ARCHIVE.md`** — the primary-sourced index of
every talk, panel, and post, compiled from OSGeo pretalx, conference programs, `video.osgeo.org`,
and the old reveal-md slide repo.

Nothing is hosted here: every entry links out to wherever the abstract, video, or slides already
live. That is deliberate — the record stays publishable without depending on deck exports, fonts,
or build pipelines.

`TALK-ARCHIVE.md` currently lives in the presentations repo. It spans three employers and is a
personal career record, so it belongs on this side; when it moves, it becomes the source of truth
for this page. Adding a talk by hand is one four-line `<li>` block in the relevant year section.

Preview locally:

```bash
python3 -m http.server 8747   # → http://localhost:8747
```

## Styling

Vintage two-colour letterpress — ink and oxblood on cream, antique gold as a sparing "foil".
The palette and type are carried over from the **`thurston`** presentation theme
(`EarthLegend/matthewhanson-presentations`) so the site and the vendor-neutral decks read as
one hand:

| Token | Value | Role |
|---|---|---|
| `--paper` | `#f5efe1` | warm cream press sheet (+ a 4px radial paper tooth) |
| `--ink` | `#1b2233` | near-black ink, faintly blue |
| `--oxblood` | `#8c2f2f` | rules, markers, links |
| `--gold` | `#b8894b` | the foil — portrait ring and the "today" flag only |

Type is Source Serif 4 (headings, entry titles), Inter (body), IBM Plex Mono (labels, meta,
colophon), all from Google Fonts. A `prefers-color-scheme: dark` block flips the sheet to ink.

## Custom domain

Not set yet. To point a domain here, add a `CNAME` file containing the bare hostname and set
the DNS records at the registrar. A custom domain on this repo also covers project pages on
the same account — `matthewhanson.github.io/<repo>` becomes `<domain>/<repo>` automatically.
