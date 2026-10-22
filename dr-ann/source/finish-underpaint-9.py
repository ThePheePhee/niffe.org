"""Take only the reviewed upper-forearm pigment correction, with an open-end fade."""
from pathlib import Path
import numpy as np
from PIL import Image
ROOT=Path(__file__).resolve().parent/'artwork/colour-v2'
dest=ROOT/'color-9-underpaint.png'
before=ROOT/'color-9-underpaint-before-forearm.png'
if not before.exists(): before.write_bytes(dest.read_bytes())
base=np.array(Image.open(before).convert('RGBA'),dtype=np.float32)/255
new=np.array(Image.open(ROOT/'color-9-underpaint-v3.png').convert('RGBA'),dtype=np.float32)/255
assert base.shape==new.shape
h,w=base.shape[:2];yy,xx=np.mgrid[:h,:w];x=xx/w;y=yy/h
patch=np.clip((.44-y)/.08,0,1)*np.clip((x-.31)/.07,0,1)
# The source forearm ends intentionally remain open; colour fades before them.
line=.015+.425*(x-.70)
new[:,:,3]*=np.clip((y-line)/.15,0,1)
def premultiply(a):
    result=a.copy();result[:,:,:3]*=result[:,:,3:4];return result
result=premultiply(base)*(1-patch[:,:,None])+premultiply(new)*patch[:,:,None]
result[:,:,:3]=np.divide(result[:,:,:3],result[:,:,3:4],out=np.zeros_like(result[:,:,:3]),where=result[:,:,3:4]>0)
result=np.round(np.clip(result,0,1)*255).astype(np.uint8)
original=np.round(base*255).astype(np.uint8)
result[patch==0]=original[patch==0]
assert np.array_equal(result[patch==0],original[patch==0]),'Unrelated colour changed'
Image.fromarray(result).save(dest,optimize=True)
print('Only upper forearm pigment changed; all unrelated underpaint pixels exact.')
