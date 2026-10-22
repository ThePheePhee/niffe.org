"""Render the original silhouette cleanly, without a misregistered colour halo.

This is an SVG rendering of the untouched native source PNG. No new house,
figure, contour, scenery or pen detail is generated.
"""
from pathlib import Path
import base64, json, hashlib

ROOT=Path(__file__).resolve().parent.parent
ink=ROOT/'assets/ink/ink-3.png'
rows={r['page']:r for r in json.loads((ROOT/'assets/ink/manifest.json').read_text(encoding='utf-8'))}
w,h=rows[3]['width'],rows[3]['height']
points=json.loads((ROOT/'source/artwork/colour-v2/walker-3-motion-polygon.json').read_text(encoding='utf-8'))['moving_part_polygon']
polygon=' '.join(f'{x*w:.3f},{y*h:.3f}' for x,y in points)
uri='data:image/png;base64,'+base64.b64encode(ink.read_bytes()).decode('ascii')
curve='0 0 0 .10 .35 .65 .90 1 1 1 1'
def tone(name,colour):
    return f'<filter id="{name}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feFlood flood-color="{colour}" result="tone"/><feComposite in="tone" in2="SourceGraphic" operator="in"/><feComponentTransfer><feFuncA type="table" tableValues="{curve}"/></feComponentTransfer></filter>'
head=f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{w}" height="{h}" viewBox="0 0 {w} {h}"><title>Ann leaves the house — the complete original silhouette</title><defs><image id="source-ink" width="{w}" height="{h}" href="{uri}"/>'
original=head+tone('ink','#000000')+'</defs><use href="#source-ink" filter="url(#ink)"/></svg>'
colour=head+tone('scene','#45404d')+tone('walker','#000000')+f'<clipPath id="walker-region"><polygon points="{polygon}"/></clipPath><mask id="scene-region" maskUnits="userSpaceOnUse" x="0" y="0" width="{w}" height="{h}"><rect width="{w}" height="{h}" fill="white"/><polygon points="{polygon}" fill="black"/></mask></defs><use href="#source-ink" filter="url(#scene)" mask="url(#scene-region)"/><use href="#source-ink" filter="url(#walker)" clip-path="url(#walker-region)"/></svg>'
(ROOT/'assets/ink/ink-3-v3.svg').write_text(original,encoding='utf-8')
(ROOT/'assets/color-3-v3.svg').write_text(colour,encoding='utf-8')
report=dict(reader_page=2,source_page=3,rendering='Self-contained SVG; original native PNG embedded byte-for-byte.',source_sha256=hashlib.sha256(ink.read_bytes()).hexdigest(),canvas=[w,h],alpha_curve=curve,
            colour_scene='#45404d',colour_walker='#000000',changes=['Removed offset yellow underpainting and blurred shadow.','Restrained charcoal/plum silhouette; original walker remains black.','Suppressed faint photographic paper halo, preserving native positions and complete silhouettes.'])
(ROOT/'source/artwork/colour-v2/walk-focus-provenance.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(f'Whole native silhouette: {w}x{h}; ink and colour SVG deliveries built.')
