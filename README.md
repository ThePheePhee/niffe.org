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
