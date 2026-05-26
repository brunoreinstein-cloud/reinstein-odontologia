"""Optimize uploaded PNGs to web-ready JPGs with consistent naming."""
from PIL import Image
import os

os.chdir("public")

# (src, dst, max_long_side, quality)
JOBS = [
    ("anderson 2.png",   "dr-anderson-clinica-01.jpg",       1400, 85),
    ("anderson3.png",    "dr-anderson-portrait-01.jpg",      1400, 88),
    ("consultorio.png",  "consultorio-planejamento-01.jpg",  1200, 85),
    ("consultorio2.png", "consultorio-cadeira-01.jpg",       1400, 85),
    ("bastidor.png",     "bastidores-tratamento-01.jpg",     1200, 85),
    ("lentes.png",       "lentes-ceramicas-01.jpg",          1200, 85),
]

for src, dst, max_side, q in JOBS:
    if not os.path.exists(src):
        print(f"SKIP (missing): {src}")
        continue
    im = Image.open(src).convert("RGB")
    w, h = im.size
    scale = max_side / max(w, h)
    if scale < 1:
        nw, nh = int(w*scale), int(h*scale)
        im = im.resize((nw, nh), Image.LANCZOS)
    im.save(dst, "JPEG", quality=q, optimize=True, progressive=True)
    sz = os.path.getsize(dst) / 1024
    print(f"OK  {dst:42s} {im.size[0]}x{im.size[1]}  {sz:.0f}KB")
