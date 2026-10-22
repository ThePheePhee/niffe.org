"""Build self-contained SVG delivery siblings for source page 5.

Source raster pixels stay byte-identical. The SVG changes ink opacity only;
the source-derived closed silhouette clips the generated paint, never the ink.
"""
from __future__ import annotations

import base64
import hashlib
import json
from collections import defaultdict
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parent.parent
INK = ROOT / 'assets/ink/ink-5.png'
PAINT = ROOT / 'source/artwork/colour-v2/color-5-underpaint.png'
COLOUR_OUT = ROOT / 'assets/color-5-v3.svg'
INK_OUT = ROOT / 'assets/ink/ink-5-v3.svg'
PROVENANCE = ROOT / 'source/artwork/colour-v2/color-5-v3-provenance.json'

# The initial slope is .75: even source alpha 1/255 remains nonzero after
# ordinary eight-bit quantization. Mid-grey photographic softness firms up;
# all originally opaque ink remains opaque and no sample changes position.
CURVE = [0, .075, .18, .36, .63, .88, 1, 1, 1, 1, 1]
PAINT_OPACITY = .68
SILHOUETTE_ALPHA = 35
TOP_CLOSE = [(386, 43), (582, 77)]
MAIN_SEED = (500, 1000)


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def silhouette(alpha: np.ndarray) -> np.ndarray:
    """Use source topology for a paint-only mask; do not alter source ink."""
    # A one-pixel safety allowance joins subpixel photographic interruptions
    # in this mask only. It never dilates, clips, or redraws the visible ink.
    barrier = Image.fromarray(np.uint8(alpha >= SILHOUETTE_ALPHA) * 255)
    barrier = barrier.filter(ImageFilter.MaxFilter(3))
    ImageDraw.Draw(barrier).line(TOP_CLOSE, fill=255, width=5)
    outside = barrier.copy()
    ImageDraw.floodfill(outside, (0, 0), 128)
    filled = Image.fromarray(np.uint8(np.array(outside) != 128) * 255).copy()
    # Remove disconnected photographic noise from the paint mask while
    # retaining the one complete leg/bandage/foot interior.
    ImageDraw.floodfill(filled, MAIN_SEED, 128)
    result = np.array(filled) == 128
    assert result[120, 500] and result[700, 300] and result[1050, 800]
    assert result.sum() > 400_000, 'The source silhouette did not close.'
    return result


def contour_path(mask: np.ndarray) -> tuple[str, int, int]:
    """Trace exact pixel-cell edges; merge collinear edges only."""
    h, w = mask.shape
    pad = np.pad(mask, 1)
    edges: set[tuple[tuple[int, int], tuple[int, int]]] = set()
    top = mask & ~pad[:h, 1:w+1]
    right = mask & ~pad[1:h+1, 2:w+2]
    bottom = mask & ~pad[2:h+2, 1:w+1]
    left = mask & ~pad[1:h+1, :w]
    for y, x in zip(*np.where(top)):
        edges.add(((int(x), int(y)), (int(x)+1, int(y))))
    for y, x in zip(*np.where(right)):
        edges.add(((int(x)+1, int(y)), (int(x)+1, int(y)+1)))
    for y, x in zip(*np.where(bottom)):
        edges.add(((int(x)+1, int(y)+1), (int(x), int(y)+1)))
    for y, x in zip(*np.where(left)):
        edges.add(((int(x), int(y)+1), (int(x), int(y))))
    outgoing: dict[tuple[int, int], set[tuple[int, int]]] = defaultdict(set)
    for a, b in edges:
        outgoing[a].add(b)
    direction = {(1, 0): 0, (0, 1): 1, (-1, 0): 2, (0, -1): 3}
    turn_order = {1: 0, 0: 1, 3: 2, 2: 3}
    loops = []
    remaining = set(edges)
    while remaining:
        first, current = min(remaining)
        previous = first
        points = [first]
        remaining.remove((first, current))
        while current != first:
            points.append(current)
            candidates = [p for p in outgoing[current] if (current, p) in remaining]
            assert candidates, 'Unclosed paint-mask contour.'
            incoming = direction[(current[0]-previous[0], current[1]-previous[1])]
            following = min(candidates, key=lambda p: turn_order[(direction[(p[0]-current[0], p[1]-current[1])]-incoming) % 4])
            remaining.remove((current, following))
            previous, current = current, following
        loops.append(points)
    def twice_area(points):
        return sum(a[0]*b[1]-b[0]*a[1] for a, b in zip(points, points[1:]+points[:1]))
    outer = max(loops, key=lambda p: abs(twice_area(p)))
    assert abs(twice_area(outer))/2 >= mask.sum()*.99
    simple = []
    for i, point in enumerate(outer):
        before, after = outer[i-1], outer[(i+1) % len(outer)]
        if (point[0]-before[0], point[1]-before[1]) != (after[0]-point[0], after[1]-point[1]):
            simple.append(point)
    path = 'M' + ' L'.join(f'{x} {y}' for x, y in simple) + ' Z'
    return path, len(outer), len(simple)


def main() -> None:
    ink_bytes, paint_bytes = INK.read_bytes(), PAINT.read_bytes()
    ink = Image.open(INK).convert('RGBA')
    width, height = ink.size
    assert (width, height) == (1027, 1248)
    mask = silhouette(np.array(ink)[:, :, 3])
    path, boundary_count, point_count = contour_path(mask)
    curve = ' '.join(str(v) for v in CURVE)
    ink_url = 'data:image/png;base64,' + base64.b64encode(ink_bytes).decode('ascii')
    paint_url = 'data:image/png;base64,' + base64.b64encode(paint_bytes).decode('ascii')
    header = f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title">'
    focus = f'<filter id="ink-focus" filterUnits="userSpaceOnUse" x="0" y="0" width="{width}" height="{height}" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncA type="table" tableValues="{curve}"/></feComponentTransfer></filter>'
    ink_image = f'<image id="original-ink" href="{ink_url}" x="0" y="0" width="{width}" height="{height}" preserveAspectRatio="none" filter="url(#ink-focus)"/>'
    colour = header + '<title id="title">The original bandaged foot with restrained watercolour</title><desc>The complete original pen geometry is embedded unchanged. A gentle alpha focus curve firms photographed lines; only the colour wash is clipped to a source-derived silhouette.</desc>'
    colour += f'<defs>{focus}<clipPath id="source-paint-silhouette" clipPathUnits="userSpaceOnUse"><path d="{path}"/></clipPath></defs>'
    colour += f'<image id="watercolour-underpaint" href="{paint_url}" x="0" y="0" width="{width}" height="{height}" preserveAspectRatio="none" opacity="{PAINT_OPACITY}" clip-path="url(#source-paint-silhouette)"/>'
    colour += ink_image + '</svg>\n'
    original = header + '<title id="title">The complete original bandaged foot</title><desc>Unchanged original pen geometry, with a gentle opacity focus curve for the soft photograph.</desc><defs>' + focus + '</defs>' + ink_image + '</svg>\n'
    COLOUR_OUT.write_text(colour, encoding='utf-8')
    INK_OUT.write_text(original, encoding='utf-8')
    ys, xs = np.where(mask)
    record = {
        'mode': 'code-native SVG render; source raster archives are unmodified',
        'outputs': [str(COLOUR_OUT.relative_to(ROOT)), str(INK_OUT.relative_to(ROOT))],
        'intrinsic_size': [width, height],
        'original_ink': {'file':str(INK.relative_to(ROOT)), 'sha256':sha256(ink_bytes), 'embedded_byte_identically':True, 'spatial_transform':'none; native x=0 y=0 width=1027 height=1248', 'spatially_clipped':False},
        'original_underpaint': {'file':str(PAINT.relative_to(ROOT)), 'sha256':sha256(paint_bytes), 'embedded_byte_identically':True, 'source_size':list(Image.open(PAINT).size), 'display_size':[width,height], 'opacity':PAINT_OPACITY},
        'alpha_focus': {'svg_primitive':'feComponentTransfer / feFuncA type=table', 'table_values':CURVE, 'rgb_changed':False, 'opaque_ink_retained':True, 'initial_slope':.75, 'all_nonzero_source_alpha_remains_nonzero_under_8bit_rounding':True, 'notes':'No blur, convolution, spatial sharpening, tracing, or morphological modification of visible ink.'},
        'paint_only_mask': {'derived_from':'original ink alpha topology', 'source_alpha_threshold':SILHOUETTE_ALPHA, 'connectivity_allowance_pixels':1, 'open_top_closing_segment_native_pixels':TOP_CLOSE, 'closing_segment_width_pixels':5, 'interior_seed_native_pixels':MAIN_SEED, 'bounding_box_native_pixels':[int(xs.min()),int(ys.min()),int(xs.max()+1),int(ys.max()+1)], 'filled_pixel_count':int(mask.sum()), 'boundary_unit_edges':boundary_count, 'path_points_collinear_only':point_count, 'path_d':path, 'notes':'Closes the original open upper leg for colour fill only. Both faint top uprights, all leg/bandage/foot extents and sole hatches remain in the separate unclipped original ink image. Detached photographic noise is excluded from paint mask only.'},
        'caveats':['The source photograph remains the authority; focus is an opacity rendering change, not recovered optical detail.','Watercolour is confined to the existing silhouette and cannot extend under the original sole or beyond toe/heel.','All original nonzero marks, including pale uprights and hatches, remain present in the embedded unclipped source raster.']
    }
    PROVENANCE.write_text(json.dumps(record, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'outputs':record['outputs'],'size':[width,height],'mask_bounds':record['paint_only_mask']['bounding_box_native_pixels'],'path_points':point_count,'svg_bytes':[COLOUR_OUT.stat().st_size,INK_OUT.stat().st_size]}))
    assert INK.read_bytes() == ink_bytes and PAINT.read_bytes() == paint_bytes


if __name__ == '__main__':
    main()
