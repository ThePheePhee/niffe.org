"""Clip reviewed generated gap repairs into the native, extracted original ink.

No generated pixel outside the photographed obstruction is used. The extracted
original opacity is retained everywhere, including inside each small repair.
Run extract-ink.py first when rebuilding the entire book.
"""
from pathlib import Path
import json, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT=Path(__file__).resolve().parent.parent
ART=ROOT/'source/artwork/repairs'
OUT=ROOT/'assets/ink'
rows=json.loads((OUT/'manifest.json').read_text(encoding='utf-8'))
audits=[]
for name in ['early','middle','late']:
    audits+=json.loads((ROOT/f'source/illustration-audit-{name}.json').read_text(encoding='utf-8'))['pages']
audits={r['page']:r for r in audits}
specs={
    1:dict(box=[.385,.925,.642,.938],description='Only the finger-hidden span of the lowest horizontal cover rule; the upper-left flap gap remains unreconstructed.'),
    2:dict(box=[.18,.854,.337,.914],description='Only the finger-hidden lower-left coat hem and left shoe outline; visible original strokes and all three grass tufts retained.'),
    9:dict(box=[.264,.916,.402,.949],description='Only the middle-finger-hidden lower contour of Ann’s supporting rock; intentional hand gaps and uncertain right foreground remain open.')
}
wanted=set(map(int,sys.argv[1:])) if len(sys.argv)>1 else set(specs)
report=[]
for meta in rows:
    n=meta['page']
    if n not in wanted: continue
    spec=specs[n]
    dest=OUT/f'ink-{n}.png'
    before=ART/f'ink-{n}-before.png'
    # Keeping the before image makes patch QA and idempotent reproduction exact.
    if not before.exists() or not meta.get('repairs'): before.write_bytes(dest.read_bytes())
    original=Image.open(before).convert('RGBA')
    base=np.array(original)
    draft=Image.open(ART/f'ink-{n}-repair-draft.png').convert('RGB').resize(original.size,Image.Resampling.LANCZOS)
    rgb=np.array(draft,dtype=np.float32)
    gray=rgb@np.array([.2126,.7152,.0722],dtype=np.float32)
    patch=np.round(np.clip((248-gray)/215,0,1)*255).astype(np.uint8)
    w,h=meta['source_size'];x0,y0,_,_=meta['source_crop_pixels']
    def polygon(points):
        mask=Image.new('L',original.size)
        ImageDraw.Draw(mask).polygon([(round(x*w-x0),round(y*h-y0)) for x,y in points],fill=255)
        return np.array(mask)>0
    l,t,r,b=spec['box']
    region=polygon([[l,t],[r,t],[r,b],[l,b]])
    if n!=1:
        # The audited skin outline is the authority for where source is missing.
        obstruction=np.zeros(region.shape,dtype=bool)
        occs=audits[n]['occlusions'][:1]
        for occ in occs:
            obstruction|=polygon(occ['exclude_polygon'])
        # A four-native-pixel overlap joins the patch to the surviving soft pen edge.
        obstruction=np.array(Image.fromarray((obstruction*255).astype(np.uint8)).filter(ImageFilter.MaxFilter(9)))>0
        region &= obstruction
    patch[~region]=0
    result=base.copy()
    result[:,:,3]=np.maximum(base[:,:,3],patch)
    assert np.array_equal(result[~region],base[~region]),'Original pixels outside repair changed'
    assert np.all(result[:,:,3]>=base[:,:,3]),'Visible source ink erased'
    image=Image.fromarray(result)
    image.save(dest,optimize=True)
    image.save(dest.with_suffix('.webp'),lossless=True,quality=100,method=6,exact=True)
    assert np.array_equal(result,np.array(Image.open(dest.with_suffix('.webp')).convert('RGBA')))
    mask=Image.fromarray((region*255).astype(np.uint8));mask.save(ART/f'ink-{n}-repair-mask.png')
    changed=int(np.any(result!=base,axis=2).sum())
    entry=dict(page=n,description=spec['description'],source_box=spec['box'],changed_pixels=changed,total_pixels=image.width*image.height,
               draft=f'ink-{n}-repair-draft.png',before=f'ink-{n}-before.png',mask=f'ink-{n}-repair-mask.png',outside_mask_pixel_equality=True)
    meta['repairs']=[entry]
    report.append(entry)
    print(f'{n}: {changed:,} repaired pixels ({100*changed/(image.width*image.height):.3f}%); all visible source opacity retained')
(OUT/'manifest.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
prior=json.loads((ART/'manifest.json').read_text(encoding='utf-8')) if (ART/'manifest.json').exists() else []
report=[r for r in prior if r['page'] not in wanted]+report
(ART/'manifest.json').write_text(json.dumps(sorted(report,key=lambda r:r['page']),ensure_ascii=False,indent=2),encoding='utf-8')
