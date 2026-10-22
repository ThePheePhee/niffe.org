"""Independent integrity checks on the artwork actually served to readers."""
from pathlib import Path
import json
import numpy as np
from PIL import Image
ROOT=Path(__file__).resolve().parent.parent
ink={r['page']:r for r in json.loads((ROOT/'assets/ink/manifest.json').read_text(encoding='utf-8'))}
colour=json.loads((ROOT/'assets/colour-v2.json').read_text(encoding='utf-8'))
expected=[2,3,4,5,7,9,11,13,15,17]
assert sorted(ink)==[1]+expected and [r['page'] for r in colour]==expected
def rgba(path): return np.array(Image.open(path).convert('RGBA'))
def corners_clear(a): return not any(a[y,x,3] for x,y in [(0,0),(a.shape[1]-1,0),(0,a.shape[0]-1),(a.shape[1]-1,a.shape[0]-1)])
for n in [1]+expected+['end']:
    master=rgba(ROOT/f'assets/ink/ink-{n}.png')
    delivery=rgba(ROOT/f'assets/ink/ink-{n}.webp')
    assert np.array_equal(master,delivery),f'Ink delivery differs: {n}'
    assert corners_clear(master),f'Paper corner: {n}'
for row in colour:
    n=row['page']
    assert not row.get('temporary_qa_only') and row['source_ink_retained'] and row['lossless_delivery']
    assert [row['width'],row['height']]==[ink[n]['width'],ink[n]['height']]
    source=rgba(ROOT/f'assets/ink/ink-{n}.png')
    master=rgba(ROOT/f'source/artwork/colour-v2/color-{n}-master.png')
    delivery=rgba(ROOT/row['file'])
    assert np.array_equal(master,delivery),f'Colour delivery differs: {n}'
    assert np.all(master[:,:,3]>=source[:,:,3]),f'Source alpha lost: {n}'
    assert np.all(master[source[:,:,3]==255,:3]==0),f'Opaque original ink replaced: {n}'
    assert corners_clear(master),f'Opaque colour background: {n}'
    for key in ['moving_part_polygon','foreground_polygon']:
        points=row.get(key)
        if points: assert all(0<=v<=1 for p in points for v in p),f'Animation outside canvas: {n}'
repairs=json.loads((ROOT/'source/artwork/repairs/manifest.json').read_text(encoding='utf-8'))
for row in repairs:
    n=row['page'];folder=ROOT/'source/artwork/repairs'
    before=rgba(folder/row['before']);after=rgba(ROOT/f'assets/ink/ink-{n}.png')
    allowed=np.array(Image.open(folder/row['mask']).convert('L'))>0
    assert np.array_equal(before[~allowed],after[~allowed]),f'Outside repair changed: {n}'
    assert np.all(after[:,:,3]>=before[:,:,3]),f'Original ink erased by repair: {n}'
report=dict(status='PASS',complete_ink_masters=11,author_end_lettering=True,lossless_ink_deliveries=12,
    complete_colour_masters=10,lossless_colour_deliveries=10,original_opaque_ink_exact_in_colour=True,
    source_alpha_retained_in_colour=True,transparent_corners=True,repairs_outside_masks_exact=[r['page'] for r in repairs])
print(json.dumps(report,indent=2))
