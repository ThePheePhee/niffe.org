"""Build registered SVG focus deliveries from the unmodified raster masters."""
from pathlib import Path
import json, subprocess, sys
ROOT=Path(__file__).resolve().parent.parent
for script in ['build-focus-walk.py','build-focus-foot.py','build-focus-mug.py']:
    subprocess.run([sys.executable,str(ROOT/'source'/script)],check=True)
ink_path=ROOT/'assets/ink/manifest.json'
ink=json.loads(ink_path.read_text(encoding='utf-8'))
colour_path=ROOT/'assets/colour-v2.json'
colour=json.loads(colour_path.read_text(encoding='utf-8'))
for row in ink:
    n=row['page']
    if n in [3,5,11]:
        row.update(delivery_file=f'assets/ink/ink-{n}-v3.svg',delivery_rendering='Native source PNG, with non-spatial photographic edge-contrast adjustment.')
for row in colour:
    n=row['page']
    if n in [3,5,11]:
        row.update(file=f'assets/color-{n}-v3.svg',archive_file=f'assets/color-{n}-v2.webp',rendering='native-svg-focus',embedded_original_ink_exact=True,
                   colour_wash_source_clipped=n!=3,underpaint_opacity=0 if n==3 else row['underpaint_opacity'])
ink_path.write_text(json.dumps(ink,ensure_ascii=False,indent=2),encoding='utf-8')
colour_path.write_text(json.dumps(colour,ensure_ascii=False,indent=2),encoding='utf-8')
print('Reader pages 2, 4 and 7 use their registered SVG focus deliveries in both editions.')
