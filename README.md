# niffe.org

A quiet personal landing page: charcoal, gold, purple, and an original SVG mandala.

Plain HTML and CSS, with no build tools, tracking, JavaScript, or external font requests.

## Edit

- `index.html`: name, quote, social links, metadata.
- `style.css`: layout, typography, colours.
- `mandala.svg`: original vector background.

Preview with `python -m http.server 4173` from this folder.

GitHub Pages publishes the root of `main`.

## Domain connection

First set `niffe.org` as the custom domain in repository Settings → Pages. Then replace Porkbun parking records for the apex and www with:

| Type | Host | Value |
| --- | --- | --- |
| A | blank (apex) | 185.199.108.153 |
| A | blank (apex) | 185.199.109.153 |
| A | blank (apex) | 185.199.110.153 |
| A | blank (apex) | 185.199.111.153 |
| CNAME | www | thepheephee.github.io |

Preserve unrelated mail and verification records. Enable Enforce HTTPS when GitHub finishes issuing the certificate.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Quote

Ursula K. Le Guin, *The Left Hand of Darkness* (1969).
Attribution checked against https://www.goodreads.com/quotes/183468-the-only-thing-that-makes-life-possible-is-permanent-intolerable
