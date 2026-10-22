"""Encode source photographs for web delivery. No retouching or redrawing."""
from pathlib import Path
from PIL import Image, ImageOps
import json

ROOT = Path(__file__).resolve().parent.parent
SOURCE = Path('C:/Users/niffe/Documents/miscallaneous/drAnn/DrAnn')
for i in range(1, 18):
    with Image.open(SOURCE / f'page{i}.jpg') as photo:
        oriented = ImageOps.exif_transpose(photo).convert('RGB')
        oriented.thumbnail((1530, 2040), Image.Resampling.LANCZOS)
        oriented.save(ROOT / 'assets' / f'page-{i}.webp', quality=87, method=6)
pages = []
for name in ['early', 'middle', 'late']:
    pages += json.loads((ROOT / 'source' / f'transcription-{name}.json').read_text(encoding='utf-8-sig'))
(ROOT / 'source' / 'transcription.json').write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Prepared {len(pages)+1} photographs and {len(pages)} transcribed pages.')
