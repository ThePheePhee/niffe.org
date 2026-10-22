# Dr. Ann

A mobile-first, bilingual reading edition of J. Dvärby's handmade children's book.

- `/dr-ann/` opens the cover and remembers the preferred edition.
- `/dr-ann/original/` uses complete native-resolution ink extractions from the supplied photographs, with transparent paper pixels and lossless WebP delivery. It retains the handmade cover, signature and Swedish “Slut.” lettering. Every illustration has been audited against the full photograph, including detached details and fine hatching. The layout follows each complete master's aspect ratio; no drawing is trimmed to fit its frame.
- `/dr-ann/colour/` places restrained generated watercolor underpainting beneath those same authoritative ink masters. All original opaque black pixels remain exact in the composite, and delivery is lossless. Shallow CSS perspective, the original walking silhouette, a rubble stone, tree stirrer and original steam marks carry the tap interactions. Reduced motion is respected.
- `#p1` through `#p10` link to a specific spread. Language, edition, text size, motion preference and reading position stay on the device.

Swedish words, colloquialisms and unusual grammar are preserved. Dialogue dashes, light punctuation and paragraph layout are edited for reading: a question mark clarifies Ann's question, commas set off dialogue attributions, and complete sentences receive stops. No Swedish words are added or removed. Sentences spanning source pages 6–7 and 16–17 are joined. Source photographs remain available from each spread and the settings panel. An independent second pass checked all Swedish text against the photographs, including the deliberate “Njo” and “såg solen gick ner”.

English coinages include *doctor-things*, *muck-o-boy*, and *wriggle-roast*. Zorbas's quoted insult uses *head/instead* to echo the Swedish *sten/klen*. All translations and notes are retained in `source/transcription*.json`. The rendered English uses consistent dialogue dashes.

`source/extract-ink.py` uses the EXIF-oriented native 3060 × 4080 source pixels. Audited inclusion/exclusion polygons in `source/illustration-audit-*.json` separate artwork from handwritten prose, page edges, fingers and reverse-page bleed-through. A smooth illumination estimate removes paper shadows separately from the pen opacity. There is no tracing, contour simplification, sharpening or automatic de-speckling. The soft focus in the bandaged-foot photograph is retained rather than inventing crisp edges. `assets/ink/manifest.json` records native crop coordinates and the small repairs.

Three narrowly clipped repairs use the built-in image-generation tool: the finger-hidden lowest cover rule, Ann's lower-left coat/shoe contour, and one hidden lower rock contour. `source/repair-ink.py` takes only those small regions from the drafts, keeps all visible source opacity, and asserts exact pixel equality outside each repair mask. Before images, drafts, masks, exact prompts and measured changed-pixel counts are retained in `source/artwork/repairs/`. The insufficient-evidence upper-left cover gap and intentionally open arm contours are left as supplied.

All ten new colour layers were generated with the built-in image tool from the checked, cleaned ink masters, after the source pass. Exact prompts and transparent PNG underpaintings are in `source/artwork/colour-v2/`; `source/compose-colour.py` registers them to native ink coordinates, reduces pigment strength, places the original ink above them and verifies the lossless delivery. Animation selections are recorded beside the masters. Earlier artwork/prompts are retained as provenance but are no longer served by the reader.

The optional preparation scripts use Pillow and NumPy. Rebuild in the order `extract-ink.py`, `repair-ink.py`, then `compose-colour.py`. `finish-underpaint-9.py` reproduces the separately prompted upper-forearm pigment correction; its before layer and final underpainting are retained. `verify-art.py` independently checks all 22 served illustration/lettering files, exact original opaque ink in colour, transparency, registration, and unchanged pixels outside the three repair masks.

Original photographs are oriented and resized for the source-viewer without retouching; `source/prepare.py` documents that delivery step. The supplied JPG files remain untouched in their original folder.

Plain HTML/CSS/JavaScript; no runtime dependencies, remote fonts, analytics, account, backend or build step. Quiet WebAudio cues are synthesized locally, off by default and enabled only by an explicit sound control. Selected story words activate the matching illustration. A service worker supports previously viewed pages offline; the settings panel can save the complete book, including both new illustration sets. Application code and metadata are network-first with an offline fallback so updates do not leave mismatched old layouts and assets. Install using the browser's Add to Home Screen action. Service-worker scope is restricted to `/dr-ann/`.

## Preview and publish

Serve the repository root (not this directory) with a static HTTP server. GitHub Pages publishes the root of `main`, with `CNAME` set to `niffe.org`. Both route directories contain the same HTML shell. After editing the shell, copy `index.html` to `original/index.html` and `colour/index.html`. Increment the cache version in `sw.js` and the stylesheet/module version query in the shells and service-worker CORE list after application updates.

The reading surface, navigation and installed-app theme are neutral white. Ink illustrations have transparent paper pixels and do not depend on blend modes or opaque container backgrounds, so they remain continuous with the page during transitions and overlaps.

The book is deliberately absent from the homepage and resource index, and carries `noindex, nofollow`. It is accessible to anyone with its URL.
