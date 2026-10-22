"""Create optimized web artwork while retaining the original PNG masters."""
from pathlib import Path
from PIL import Image, ImageOps
import json

root = Path(__file__).resolve().parent.parent
assets = (root / "assets").resolve()
archive = (root / "source" / "artwork").resolve()
assert assets.is_relative_to(root) and archive.is_relative_to(root)
archive.mkdir(parents=True, exist_ok=True)
sources = sorted(assets.glob("color-*.png"), key=lambda p: int(p.stem.split("-")[1]))
if len(sources) != 10:
    raise RuntimeError(f"Expected 10 public PNG masters; found {len(sources)}")
for path in sources:
    if (archive / path.name).exists():
        raise FileExistsError(f"Refusing to overwrite archived master: {path.name}")

reports = []
for path in sources:
    target = path.with_suffix(".webp")
    with Image.open(path) as source:
        image = ImageOps.exif_transpose(source)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "transparency" in source.info else "RGB")
        image.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=85, method=6)
        expected_size = image.size
    with Image.open(target) as check:
        check.load()
        assert check.size == expected_size
    reports.append({"file": target.name, "dimensions": list(expected_size),
                    "png_bytes": path.stat().st_size, "webp_bytes": target.stat().st_size})

for path in sources:
    path.rename(archive / path.name)

print(json.dumps({"assets": reports,
                  "total_png_bytes": sum(item["png_bytes"] for item in reports),
                  "total_webp_bytes": sum(item["webp_bytes"] for item in reports),
                  "masters": str(archive)}, indent=2))
