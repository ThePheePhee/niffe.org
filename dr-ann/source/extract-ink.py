"""Extract complete illustrations from native source pixels; never trace/redraw ink.

Paper illumination is estimated separately from the drawing. Source luminance
becomes black-ink opacity, preserving native coordinates and soft pen edges.
The audited masks remove prose, page edges and photographer fingers only.
"""
from pathlib import Path
import json
import sys
import numpy as np
from PIL import Image, ImageOps, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
ORIGINALS = Path('C:/Users/niffe/Documents/miscallaneous/drAnn/DrAnn')
OUT = ROOT / 'assets' / 'ink'
OUT.mkdir(parents=True, exist_ok=True)

def boxpoly(b):
    l,t,r,bottom=b
    return [[l,t],[r,t],[r,bottom],[l,bottom]]

def mask_for(size, polygons):
    w,h=size
    result=Image.new('L',size)
    draw=ImageDraw.Draw(result)
    for polygon in polygons:
        draw.polygon([(round(x*w),round(y*h)) for x,y in polygon],fill=255)
    return result

def paper_plane(gray, included):
    """Robust smooth lighting fit using bright paper samples, excluding solid ink."""
    h,w=gray.shape
    ys,xs=np.nonzero(included)
    lo_x,hi_x=xs.min(),xs.max()+1
    lo_y,hi_y=ys.min(),ys.max()+1
    samples=[]
    step=max(48,round(min(hi_x-lo_x,hi_y-lo_y)/14))
    for y in range(lo_y,hi_y,step):
        for x in range(lo_x,hi_x,step):
            block=gray[y:y+step,x:x+step]
            good=included[y:y+step,x:x+step]
            if good.sum()<50: continue
            value=float(np.quantile(block[good],.88))
            if value<70: continue
            samples.append(((x+block.shape[1]/2)/w,(y+block.shape[0]/2)/h,value))
    points=np.array(samples)
    if len(points)<6:
        return np.full(gray.shape,np.quantile(gray[included],.90),dtype=np.float32)
    x,y,z=points.T
    design=np.stack([np.ones_like(x),x,y,x*x,x*y,y*y],axis=1)
    valid=z>=np.quantile(z,.22)
    for _ in range(4):
        coef=np.linalg.lstsq(design[valid],z[valid],rcond=None)[0]
        error=z-design@coef
        scale=max(3,float(np.median(np.abs(error[valid])))*2)
        valid=(error>-scale*1.6)&(error<scale*2.2)&(z>=70)
        if valid.sum()<6: break
    yy,xx=np.mgrid[0:h,0:w].astype(np.float32)
    xx/=w; yy/=h
    terms=[np.ones_like(xx),xx,yy,xx*xx,xx*yy,yy*yy]
    result=sum(float(c)*term for c,term in zip(coef,terms))
    return np.clip(result,80,245)

audits=[]
for name in ['early','middle','late']:
    audit=json.loads((ROOT/'source'/f'illustration-audit-{name}.json').read_text(encoding='utf-8-sig'))
    audits+=audit['pages']

wanted=set(map(int,sys.argv[1:])) if len(sys.argv)>1 else None
previous=json.loads((OUT/'manifest.json').read_text(encoding='utf-8')) if wanted and (OUT/'manifest.json').exists() else []
report=[row for row in previous if row['page'] not in wanted] if wanted else []
for page in sorted(audits,key=lambda item:item['page']):
    number=page['page']
    if wanted and number not in wanted: continue
    if not page['art']: continue
    photo=ImageOps.exif_transpose(Image.open(ORIGINALS/f'page{number}.jpg')).convert('RGB')
    w,h=photo.size
    polygons=page.get('mask_polygons') or [part.get('polygon') or boxpoly(part['box']) for part in page['art']]
    if number==1:
        polygons=[part.get('polygon') or boxpoly(part['box']) for part in page['art'] if part.get('id')!='cover-bottom-outer-rule']
        polygons += [boxpoly([.327,.929,.386,.937]),boxpoly([.641,.928,.665,.937])]
    mask=mask_for(photo.size,polygons)
    exclude=[]
    for occ in page.get('occlusions',[]):
        if isinstance(occ,dict) and 'exclude_polygon' in occ: exclude.append(occ['exclude_polygon'])
    if number==2 and not exclude:
        exclude.append([[.125,.97],[.16,.922],[.193,.89],[.218,.873],[.244,.862],[.268,.861],[.292,.87],[.315,.889],[.33,.918],[.333,.97]])
    if number==7: exclude.append(boxpoly([.29,.852,.68,1]))
    if number==11:
        # Fingers start below the complete mug; preserve every lower pen hatch.
        exclude.append([[.119,.892],[.135,.882],[.153,.878],[.181,.884],[.195,.901],[.2,.94],[.119,.94]])
    excluded=mask_for(photo.size,exclude)
    selected=np.array(mask)>0
    selected &= np.array(excluded)==0
    rgb=np.array(photo,dtype=np.float32)
    gray=rgb@np.array([.2126,.7152,.0722],dtype=np.float32)
    background=paper_plane(gray,selected)
    if number==11:
        # The bare tree lies under a locally shaded part of the photographed
        # paper. Fit that lighting separately so its selection has no gray box.
        tree=np.array(mask_for(photo.size,[boxpoly([.119,.315,.26,.52])]))>0
        local=paper_plane(gray,selected & tree)
        background[tree]=local[tree]
    floor={1:6,2:11,3:13,4:8,5:6,7:13,9:18,11:18,13:18,15:17,17:15}[number]
    alpha=np.clip((background-gray-floor)/(background*.65),0,1)
    alpha[~selected]=0
    alpha=np.round(alpha*255).astype(np.uint8)
    # No de-speckling, contour simplification, sharpening, or inferred strokes.
    ys,xs=np.nonzero(alpha)
    bounds=[max(0,int(xs.min())-36),max(0,int(ys.min())-36),min(w,int(xs.max())+37),min(h,int(ys.max())+37)]
    registered={11:[344,1278,2855,3647],13:[298,1839,2421,3506],15:[557,2716,2653,3733],17:[432,954,2689,2391]}
    if number in registered: bounds=registered[number] # Stable native coordinates for the registered colour layers.
    rgba=np.zeros((h,w,4),dtype=np.uint8)
    rgba[:,:,3]=alpha
    image=Image.fromarray(rgba).crop(bounds)
    dest=OUT/f'ink-{number}.png'
    image.save(dest,optimize=True)
    image.save(dest.with_suffix('.webp'),lossless=True,quality=100,method=6,exact=True)
    with Image.open(dest.with_suffix('.webp')) as decoded:
        assert np.array_equal(np.array(image),np.array(decoded.convert('RGBA'))), 'Lossless delivery pixel mismatch'
    report.append({'page':number,'file':f'assets/ink/ink-{number}.png','width':image.width,'height':image.height,
                   'source_size':[w,h],'source_crop_pixels':bounds,'source_crop_normalized':[bounds[0]/w,bounds[1]/h,bounds[2]/w,bounds[3]/h],
                   'paper_noise_floor':floor,'local_paper_fit':{'box':[.119,.315,.26,.52],'reason':'Locally shaded paper around the full tree.'} if number==11 else None,'repairs':[]})
    print(f'{number}: {image.width}x{image.height}, {dest.stat().st_size:,} bytes')

# Preserve the author's actual final lettering as a separate optional end mark.
photo=ImageOps.exif_transpose(Image.open(ORIGINALS/'page17.jpg')).convert('RGB')
w,h=photo.size
mask=mask_for(photo.size,[boxpoly([.350,.805,.575,.918])])
selected=np.array(mask)>0
rgb=np.array(photo,dtype=np.float32)
gray=rgb@np.array([.2126,.7152,.0722],dtype=np.float32)
background=paper_plane(gray,selected)
alpha=np.clip((background-gray-12)/(background*.65),0,1)
alpha[~selected]=0
rgba=np.zeros((h,w,4),dtype=np.uint8);rgba[:,:,3]=np.round(alpha*255).astype(np.uint8)
ys,xs=np.nonzero(rgba[:,:,3]);bounds=[int(xs.min())-24,int(ys.min())-24,int(xs.max())+25,int(ys.max())+25]
end=Image.fromarray(rgba).crop(bounds)
end.save(OUT/'ink-end.png',optimize=True)
end.save(OUT/'ink-end.webp',lossless=True,quality=100,method=6,exact=True)
(OUT/'manifest.json').write_text(json.dumps(sorted(report,key=lambda row:row['page']),ensure_ascii=False,indent=2),encoding='utf-8')
print('Full-resolution ink extraction complete; masters retain original source geometry.')
