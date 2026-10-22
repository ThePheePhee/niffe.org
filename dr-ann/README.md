# Dr. Ann

A mobile-first, bilingual reading edition of J. Dvärby's handmade children's book.

- `/dr-ann/` opens the cover and remembers the preferred edition.
- `/dr-ann/original/` uses the actual photographed pen strokes, cropped with SVG viewports and masks and normalized with browser filters. No generated artwork is used in this edition. Fingers obscure a small part of the drawing in the supplied photographs; the original edition does not invent hidden strokes.
- `/dr-ann/colour/` uses ten reference-based watercolor elaborations with shallow CSS 3D perspective and individual tap animations. Reduced motion is respected.
- `#p1` through `#p10` link to a specific spread. Language, edition, text size, motion preference and reading position stay on the device.

Swedish words, colloquialisms and unusual grammar are preserved. Dialogue dashes, light punctuation and paragraph layout are edited for reading: a question mark clarifies Ann's question, commas set off dialogue attributions, and complete sentences receive stops. No Swedish words are added or removed. Sentences spanning source pages 6–7 and 16–17 are joined. Source photographs remain available from each spread and the settings panel. An independent second pass checked all Swedish text against the photographs, including the deliberate “Njo” and “såg solen gick ner”.

English coinages include *doctor-things*, *muck-o-boy*, and *wriggle-roast*. Zorbas's quoted insult uses *head/instead* to echo the Swedish *sten/klen*. All translations and notes are retained in `source/transcription*.json`. The rendered English uses consistent dialogue dashes.

The native image-generation tool produced the expanded edition from the original photographs. Exact prompts are in `assets/prompts-*.json`; PNG masters remain in `source/artwork/`. Optimized WebP files are served to readers. Original photographs are oriented and resized for web delivery without retouching; `source/prepare.py` documents the encoding step. The supplied JPG files remain untouched in their original folder.

Plain HTML/CSS/JavaScript; no dependencies, remote fonts, analytics, account, backend or build step. Quiet WebAudio cues are synthesized locally, off by default and enabled only by an explicit sound control. Selected story words activate the matching illustration. Figures have scene-specific compositions; the walking silhouette, tree stirrer, stone and joined hands use separate masked layers rather than moving the whole scene. A service worker supports previously viewed pages offline; the settings panel can save the complete book. Install using the browser's Add to Home Screen action. Service-worker scope is restricted to `/dr-ann/`.

## Preview and publish

Serve the repository root (not this directory) with a static HTTP server. GitHub Pages publishes the root of `main`, with `CNAME` set to `niffe.org`. Both route directories contain the same HTML shell. After editing the shell, copy `index.html` to `original/index.html` and `colour/index.html`. Increment the cache version in `sw.js` after application updates.

The book is deliberately absent from the homepage and resource index, and carries `noindex, nofollow`. It is accessible to anyone with its URL.
