"""Change only selected existing skin colour; retain native pixels and alpha.

No generated imagery is used. Native ink, archived paintings, geometry, pigment
texture and lightness remain authoritative. Only chromatic hue inside reviewed
skin masks is adjusted; surrounding RGB, neutral ink and every alpha stay exact.
"""
from pathlib import Path
import hashlib
import json
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ART = ROOT / 'source/artwork/green-tone'
PAGES = [7, 9, 17]
HUE = 128.0
WHITE = np.array([.95047, 1., 1.08883], dtype=np.float32)
RGB_XYZ = np.array([[.4124564,.3575761,.1804375], [.2126729,.7151522,.0721750], [.0193339,.1191920,.9503041]], dtype=np.float32)
XYZ_RGB = np.linalg.inv(RGB_XYZ)

def lab_from_rgb(rgb):
    s = rgb.astype(np.float32) / 255
    linear = np.where(s <= .04045, s / 12.92, ((s + .055) / 1.055) ** 2.4)
    xyz = (linear @ RGB_XYZ.T) / WHITE
    f = np.where(xyz > (6/29)**3, np.cbrt(xyz), xyz / (3 * (6/29)**2) + 4/29)
    return np.stack([116*f[...,1]-16, 500*(f[...,0]-f[...,1]), 200*(f[...,1]-f[...,2])], axis=-1)

def linear_from_lab(lab):
    fy = (lab[...,0] + 16) / 116
    f = np.stack([fy + lab[...,1]/500, fy, fy - lab[...,2]/200], axis=-1)
    xyz = np.where(f > 6/29, f**3, 3*(6/29)**2*(f-4/29)) * WHITE
    return xyz @ XYZ_RGB.T

def rgb_from_lab(lab):
    linear = linear_from_lab(lab)
    s = np.where(linear <= .0031308, 12.92*linear, 1.055*np.maximum(linear,0)**(1/2.4)-.055)
    return np.round(np.clip(s,0,1)*255).astype(np.uint8)

def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def adjust(n):
    source = ROOT / f'source/artwork/colour-v2/color-{n}-master.png'
    selection = ART / f'mask-{n}.png'
    original = np.array(Image.open(source).convert('RGBA'))
    mask = np.array(Image.open(selection).convert('L'))
    assert mask.shape == original.shape[:2]
    # Preserve neutral pen samples byte-for-byte, including antialiased gray.
    rgb = original[...,:3]
    neutral = np.ptp(rgb, axis=-1) <= 2
    active = (mask > 0) & (original[...,3] > 0) & ~neutral
    selected = rgb[active]
    lab = lab_from_rgb(selected)
    chroma = np.hypot(lab[:,1], lab[:,2])
    adjusted = lab.copy()
    adjusted[:,1] = chroma * np.cos(np.deg2rad(HUE))
    adjusted[:,2] = chroma * np.sin(np.deg2rad(HUE))
    linear = linear_from_lab(adjusted)
    limited = np.any((linear < 0) | (linear > 1),axis=-1)
    if np.any(limited):
        # Fit only unrepresentable chroma to sRGB; never clip away shading.
        target = adjusted[limited].copy()
        low = np.zeros(len(target),dtype=np.float32)
        high = np.ones(len(target),dtype=np.float32)
        for _ in range(16):
            scale = (low + high) / 2
            trial = target.copy(); trial[:,1:] *= scale[:,None]
            raw = linear_from_lab(trial)
            fits = np.all((raw >= 0) & (raw <= 1),axis=-1)
            low = np.where(fits,scale,low)
            high = np.where(fits,high,scale)
        target[:,1:] *= low[:,None]
        adjusted[limited] = target
    after = original.copy()
    after[active,:3] = rgb_from_lab(adjusted)
    assert np.array_equal(after[...,3], original[...,3]), 'Alpha changed'
    assert np.array_equal(after[mask==0], original[mask==0]), 'Outside selection changed'
    assert np.array_equal(after[neutral], original[neutral]), 'Neutral ink changed'
    ink = np.array(Image.open(ROOT/f'assets/ink/ink-{n}.png').convert('RGBA'))
    assert np.all(after[ink[...,3]==255,:3]==0), 'Original opaque pen changed'
    master = ART / f'color-{n}-master.png'
    delivery = ROOT / f'assets/color-{n}-green-v1.webp'
    image = Image.fromarray(after)
    image.save(master, optimize=True)
    image.save(delivery, lossless=True, quality=100, method=6, exact=True)
    assert np.array_equal(after,np.array(Image.open(delivery).convert('RGBA'))), 'Delivery differs'
    # Quantify the only rounding introduced by the colour conversion.
    checked = lab_from_rgb(after[active,:3])
    changed = np.any(after != original,axis=-1)
    report = dict(page=n, reader_page={7:5,9:6,17:10}[n], source=str(source.relative_to(ROOT)).replace('\\','/'),
        source_sha256=sha(source), mask_sha256=sha(selection), canvas=[image.width,image.height],
        operation='CIELAB hue adjustment to sage; original lightness and chroma, with chroma reduced only when needed for sRGB', hue_degrees=HUE,
        generated_imagery_used=False, changed_pixels=int(changed.sum()),
        alpha_exact=True, outside_mask_exact=True, neutral_ink_exact=True, original_opaque_pen_exact=True,
        gamut_fitted_pixels=int(limited.sum()),
        maximum_lightness_rounding=float(np.max(np.abs(checked[:,0]-lab[:,0]))),
        master=str(master.relative_to(ROOT)).replace('\\','/'), file=str(delivery.relative_to(ROOT)).replace('\\','/'))
    print(json.dumps(report))
    return report

if __name__ == '__main__':
    reports = [adjust(n) for n in PAGES]
    (ART/'provenance.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2),encoding='utf-8')
    metadata_path = ROOT/'assets/colour-v2.json'
    rows = json.loads(metadata_path.read_text(encoding='utf-8'))
    for row in rows:
        if row['page'] not in PAGES: continue
        n = row['page']
        row.update(file=f'assets/color-{n}-green-v1.webp', master_file=f'source/artwork/green-tone/color-{n}-master.png',
            base_file=f'assets/color-{n}-v2.webp', colour_adjustment=dict(hue_CIELAB=HUE,mask=f'source/artwork/green-tone/mask-{n}.png',alpha_exact=True,outside_mask_exact=True))
    metadata_path.write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
