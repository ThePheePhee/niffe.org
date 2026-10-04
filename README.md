# niffe.org

A quiet personal landing page: charcoal, gold, purple, and an original SVG mandala.

Plain HTML and CSS with a small progressive-enhancement script for pointer parallax. No build tools, tracking, or external font requests. Cormorant Garamond is self-hosted as WOFF2; its SIL Open Font License is in `fonts/OFL.txt`.

## Edit

- `index.html`: name, quote, social links, metadata.
- `style.css`: layout, typography, colours.
- `mandala.svg`: original vector background.
- `celestial.svg`: original unicursal hexagram, five-petalled centre, and orbital accents.
- `depth.js`: gentle pointer depth, disabled on touch devices and for reduced motion.

Preview with `python -m http.server 4173` from this folder.

GitHub Pages publishes the root of `main`.

## Resources

`/resources/` indexes four independently hosted static tools. The homepage links to it.

| URL | Source snapshot |
| --- | --- |
| `/markovVisualizer/` | ThePheePhee/markovVisualization, `84c3c2fb0d8585cdee48babd2b5ca67b54b2c1cf`, index.html |
| `/markovEditor/` | Local Markov project, markov-maker.html, copied 2026-10-04 (not yet in the upstream repository) |
| `/consciousKnot/` | ThePheePhee/ConsciousKnot, `57fc10ba84647c9046c2791d455a92f0ef5721e7` |
| `/gyroid/` | ThePheePhee/gyroid-minimal-surface-visualizer, `f9084bab301ff2d8a86a6c5235e839610f813066` |

The Markov tools are self-contained HTML. To update either React app, check out its source snapshot, install from its lockfile, and run `npm run build -- --configLoader native --base=/consciousKnot/` (or `--base=/gyroid/`). Copy the resulting dist contents into its corresponding directory here. Preserve the case of the paths; asset URLs are built for these directories. The source repositories remain the development homes; these are deployment snapshots.

The tarot app is deliberately omitted until its live backend URL is verified. Its API/database server cannot run on GitHub Pages.

## Domain connection

The custom domain is configured in repository Settings → Pages. Porkbun DNS uses these records (TTL 600):

| Type | Host | Value |
| --- | --- | --- |
| ALIAS | blank (apex) | thepheephee.github.io |
| CNAME | www | thepheephee.github.io |

Preserve unrelated mail and verification records. Enable Enforce HTTPS when GitHub finishes issuing the certificate.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Quote

Frank Herbert, *Dune* (1965).
Attribution checked against https://www.azquotes.com/quote/369135
