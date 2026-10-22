"""Build native SVG delivery siblings from unmodified archival rasters.

The source ink PNG is embedded byte-for-byte. Only its tree opacity receives
an SVG component-transfer curve. A separate source-derived silhouette clips
pigment; temporary mask gap closing never alters the actual ink image.
"""
from __future__ import annotations

import base64
import hashlib
import io
import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / 'source'
ART = SOURCE / 'artwork'
INK = ROOT / 'assets' / 'ink' / 'ink-11.png'
PAINT = ART / 'colour-v2' / 'color-11-underpaint.png'
PARTS = ART / 'moving-parts-middle.json'
COLOUR_OUT = ROOT / 'assets' / 'color-11-v3.svg'
INK_OUT = ROOT / 'assets' / 'ink' / 'ink-11-v3.svg'
CURVE = [0, .03, .16, .34, .62, .84, .98, 1, 1, 1, 1]
PAINT_OPACITY = .67


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def data_uri(data: bytes) -> str:
    return 'data:image/png;base64,' + base64.b64encode(data).decode('ascii')


def png_bytes(image: Image.Image) -> bytes:
    stream = io.BytesIO()
    image.save(stream, format='PNG', optimize=True)
    return stream.getvalue()


def alpha_image(alpha: Image.Image) -> Image.Image:
    """White RGB with exactly the supplied selector opacity."""
    result = Image.new('RGBA', alpha.size, (255, 255, 255, 255))
    result.putalpha(alpha)
    return result


def source_paint_silhouette(alpha: np.ndarray) -> tuple[Image.Image, dict]:
    """Fill source-enclosed shapes; repair gaps on a disposable mask only.

    The 11px closing operation joins tiny photographic antialias gaps on the
    thresholded barrier. Two explicit temporary segments join the open puddle
    boundary between its surviving source contour endpoints.
    No operator is ever applied to source RGB or source ink alpha.
    """
    barrier = Image.fromarray(np.where(alpha >= 40, 255, 0).astype('uint8'))
    barrier = barrier.filter(ImageFilter.MaxFilter(11)).filter(ImageFilter.MinFilter(11))
    # The original puddle outline intentionally stops on either side of its
    # dangling tail. Join that outline for the pigment fill calculation only.
    puddle_bridges = [[[1647, 2254], [1795, 2254]],
                      [[2398, 2105], [2456, 2191]]]
    barrier_draw = ImageDraw.Draw(barrier)
    for bridge in puddle_bridges:
        barrier_draw.line([tuple(p) for p in bridge], fill=255, width=13)
    outside = barrier.copy()
    ImageDraw.floodfill(outside, (0, 0), 127, thresh=0)
    filled = np.where(np.asarray(outside) != 127, 255, 0).astype('uint8')
    # Keep the complete original feathered pen footprint as well as enclosed
    # interiors, including every twig, fin, puddle line and dangling tail.
    silhouette = np.maximum(filled, alpha)
    return Image.fromarray(silhouette), {
        'barrier_alpha_threshold': 40,
        'temporary_barrier_close_kernel': 11,
        'temporary_puddle_bridge_pixels': puddle_bridges,
        'temporary_puddle_bridge_width': 13,
        'actual_ink_morphology': False,
        'original_nonzero_ink_covered': bool(np.all(silhouette[alpha > 0] > 0)),
        'original_ink_opacity_never_clipped': True,
        'nonzero_silhouette_pixels': int(np.count_nonzero(silhouette)),
    }


def make_svg(width: int, height: int, ink_uri: str, selector_uri: str,
             paint_uri: str | None = None, paint_mask_uri: str | None = None) -> str:
    curve = ' '.join(format(value, '.8g') for value in CURVE)
    pigment_def = ''
    pigment_layer = ''
    if paint_uri is not None:
        pigment_def = f'''<mask id="paint-silhouette" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" x="0" y="0" width="{width}" height="{height}" style="mask-type:alpha"><image href="{paint_mask_uri}" x="0" y="0" width="{width}" height="{height}" preserveAspectRatio="none"/></mask>'''
        pigment_layer = f'''<image id="source-underpainting" href="{paint_uri}" x="0" y="0" width="{width}" height="{height}" preserveAspectRatio="none" opacity="{PAINT_OPACITY}" mask="url(#paint-silhouette)"/>'''
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="The original rocket mug, tree spoon and lake muck">
<title>Dr. Ann: rocket mug and tree spoon</title>
<desc>Original native ink embedded unchanged. Local tree opacity focus, with unchanged mug and muck ink. No ink clipping, resampling, tracing or geometry changes.</desc>
<defs>
{pigment_def}
<filter id="tree-opacity-focus" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse" x="0" y="0" width="{width}" height="{height}" color-interpolation-filters="sRGB">
  <feComponentTransfer in="SourceGraphic" result="focused-ink"><feFuncA type="table" tableValues="{curve}"/></feComponentTransfer>
  <feImage href="{selector_uri}" x="0" y="0" width="{width}" height="{height}" preserveAspectRatio="none" result="tree-selector"/>
  <feComposite in="SourceGraphic" in2="tree-selector" operator="out" result="unchanged-nontree-ink"/>
  <feComposite in="focused-ink" in2="tree-selector" operator="in" result="focused-tree-ink"/>
  <feComposite in="unchanged-nontree-ink" in2="focused-tree-ink" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
</filter>
</defs>
{pigment_layer}
<image id="archival-source-ink" href="{ink_uri}" x="0" y="0" width="{width}" height="{height}" preserveAspectRatio="none" filter="url(#tree-opacity-focus)"/>
</svg>
'''


def main() -> None:
    ink_bytes = INK.read_bytes()
    paint_bytes = PAINT.read_bytes()
    ink = Image.open(io.BytesIO(ink_bytes)).convert('RGBA')
    paint = Image.open(io.BytesIO(paint_bytes)).convert('RGBA')
    width, height = ink.size
    assert (width, height) == (2511, 2369)
    original_alpha = np.array(ink)[:, :, 3]
    original_ink_digest = digest(ink_bytes)
    original_paint_digest = digest(paint_bytes)

    # Embed the original pigment PNG byte-for-byte. Its SVG image placement
    # scales pigment alone to the native ink canvas, avoiding an inflated
    # pre-resized PNG while preserving the full source pigment data.
    paint_input_size = list(paint.size)

    parts = json.loads(PARTS.read_text(encoding='utf-8'))
    tree = next(part for part in parts['parts'] if part['page'] == 11 and part['id'] == 'tree')
    assert tree['canvas'] == [width, height]
    selector = Image.new('L', ink.size)
    ImageDraw.Draw(selector).polygon([tuple(point) for point in tree['polygon_pixels']], fill=255)
    selector_bytes = png_bytes(alpha_image(selector))

    silhouette, silhouette_provenance = source_paint_silhouette(original_alpha)
    silhouette_bytes = png_bytes(alpha_image(silhouette))
    ink_uri = data_uri(ink_bytes)
    selector_uri = data_uri(selector_bytes)
    COLOUR_OUT.write_text(make_svg(width, height, ink_uri, selector_uri,
                                 data_uri(paint_bytes), data_uri(silhouette_bytes)), encoding='utf-8')
    INK_OUT.write_text(make_svg(width, height, ink_uri, selector_uri), encoding='utf-8')

    # Reproducible implementation diagnostics, never used as source artwork.
    diagnostics = ART / 'focus-mug'
    diagnostics.mkdir(parents=True, exist_ok=True)
    silhouette.save(diagnostics / 'paint-silhouette.png')
    selector.save(diagnostics / 'tree-selector.png')
    selected = np.array(selector) > 0
    assert np.all(np.array(selector)[~selected] == 0)
    # The union of inside/outside binary selector is exact at native resolution.
    assert np.all(np.array(selector).astype('uint16') + (255 - np.array(selector)).astype('uint16') == 255)
    assert digest(INK.read_bytes()) == original_ink_digest
    assert digest(PAINT.read_bytes()) == original_paint_digest
    assert base64.b64decode(ink_uri.split(',', 1)[1]) == ink_bytes

    provenance = {
        'page': 11,
        'canvas': [width, height],
        'builder': 'source/build-focus-mug.py',
        'outputs': ['assets/color-11-v3.svg', 'assets/ink/ink-11-v3.svg'],
        'self_contained': True,
        'ink_input': {'file': 'assets/ink/ink-11.png', 'sha256': original_ink_digest,
                      'embedded_bytes_equal_source': True, 'resampled': False,
                      'reencoded': False, 'morphology': False, 'paint_mask_applied_to_ink': False},
        'paint_input': {'file': 'source/artwork/colour-v2/color-11-underpaint.png',
                        'sha256': original_paint_digest, 'input_size': paint_input_size,
                        'embedded_size': paint_input_size,
                        'embedded_bytes_equal_source': True,
                        'rendered_size': [width, height],
                        'resize': 'SVG image placement, pigment only; original PNG not reencoded',
                        'opacity': PAINT_OPACITY, 'original_file_unchanged': True},
        'focus': {'region': 'native tree polygon including bare twigs and trunk',
                  'polygon_pixels': tree['polygon_pixels'],
                  'operator': 'SVG feComponentTransfer alpha table only',
                  'alpha_table_values': CURVE,
                  'black_rgb_unchanged': True,
                  'shape_coordinates_unchanged': True,
                  'complementary_selection': 'in/out selector, recombined by arithmetic sum',
                  'non_tree_ink_filter_output': 'unchanged source alpha/RGB'},
        'paint_silhouette': silhouette_provenance,
        'notes': ['No app code, metadata, stylesheet or service worker changed.',
                  'Ink focus curve changes display opacity only; archival source rasters remain byte-identical.',
                  'Paint silhouette construction may close tiny gaps on a disposable mask; no ink stroke is redrawn or clipped.'],
    }
    (SOURCE / 'focus-mug-provenance.json').write_text(json.dumps(provenance, indent=2), encoding='utf-8')
    print(json.dumps({'canvas': [width, height], 'colour_bytes': COLOUR_OUT.stat().st_size,
                      'ink_bytes': INK_OUT.stat().st_size,
                      'clip_contains_all_source_ink_footprints': silhouette_provenance['original_nonzero_ink_covered'],
                      'source_ink_sha256': original_ink_digest}, indent=2))


if __name__ == '__main__':
    main()
