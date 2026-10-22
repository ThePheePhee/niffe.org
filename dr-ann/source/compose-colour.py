"""Place restrained generated watercolour underneath the complete source ink.

The generated layers supply pigment and shading, never replacement black pen
drawings. Every final canvas uses the native ink master's exact coordinates.
"""
from pathlib import Path
import json, sys
import numpy as np
from PIL import Image

ROOT=Path(__file__).resolve().parent.parent
ART=ROOT/'source/artwork/colour-v2'
INK=ROOT/'assets/ink'
pages=[2,3,4,5,7,9,11,13,15,17]
rows={r['page']:r for r in json.loads((INK/'manifest.json').read_text(encoding='utf-8'))}
regions=json.loads((ART/'animation-regions.json').read_text(encoding='utf-8'))
wanted=set(map(int,sys.argv[1:])) if len(sys.argv)>1 else set(pages)
output=ROOT/'assets/colour-v2.json'
previous=json.loads(output.read_text()) if output.exists() else []
metadata=[r for r in previous if r['page'] not in wanted]
for n in pages:
    if n not in wanted: continue
    ink=Image.open(INK/f'ink-{n}.png').convert('RGBA')
    paint=Image.open(ART/f'color-{n}-underpaint.png').convert('RGBA')
    # Registration preserves the original composition and all native detail.
    paint=paint.resize(ink.size,Image.Resampling.LANCZOS)
    opacity={2:.73,3:.60,4:.69,5:.68,7:.64,9:.64,11:.67,13:.72,15:.69,17:.66}[n]
    p=np.array(paint)
    yy,xx=np.mgrid[:ink.height,:ink.width]
    margin=np.minimum.reduce([xx,yy,ink.width-1-xx,ink.height-1-yy])
    # Only the spare outer paper margin: remove near-invisible generated edge haze.
    feather=np.clip(margin/12,0,1)
    p[:,:,3]=np.round(p[:,:,3].astype(float)*opacity*feather).astype(np.uint8)
    paint=Image.fromarray(p)
    final=Image.alpha_composite(paint,ink)
    original=np.array(ink);result=np.array(final)
    assert np.all(result[:,:,3]>=original[:,:,3]),'Original stroke opacity lost'
    solid=original[:,:,3]==255
    assert np.all(result[solid,:3]==0),'Opaque original ink replaced'
    assert all(final.getpixel(c)[3]==0 for c in [(0,0),(ink.width-1,0),(0,ink.height-1),(ink.width-1,ink.height-1)]),'Opaque paper corner'
    final.save(ART/f'color-{n}-master.png',optimize=True)
    dest=ROOT/f'assets/color-{n}-v2.webp'
    final.save(dest,lossless=True,quality=100,method=6,exact=True)
    assert np.array_equal(result,np.array(Image.open(dest).convert('RGBA'))),'Delivery altered source composite'
    metadata.append(dict(page=n,file=f'assets/color-{n}-v2.webp',width=ink.width,height=ink.height,
        source_ink=f'assets/ink/ink-{n}.png',source_ink_retained=True,underpaint_opacity=opacity,
        moving_part_polygon=regions.get(str(n)),foreground_polygon=[[.105,.385],[.170,.385],[.170,.415],[.105,.415]] if n==11 else None,lossless_delivery=True))
    print(f'{n}: complete {ink.width}x{ink.height}; {dest.stat().st_size:,} bytes; source opaque ink exact')
metadata.sort(key=lambda r:r['page'])
output.write_text(json.dumps(metadata,ensure_ascii=False,indent=2),encoding='utf-8')
if wanted==set(pages):
    assert len(metadata)==10 and not any(r.get('temporary_qa_only') for r in metadata)
