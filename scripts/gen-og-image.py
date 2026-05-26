"""Generate og-image.png (1200x630) for social media share previews."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG    = (18, 54, 66)       # --primary-deep
GOLD  = (199, 155, 84)     # --gold
WHITE = (255, 255, 255)
MUTED = (160, 175, 180)

img  = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# subtle vignette
for y in range(H):
    a = int(20 * (1 - abs(y - H/2) / (H/2)))
    draw.line([(0, y), (W, y)], fill=(BG[0]+a//3, BG[1]+a//3, BG[2]+a//3))

# ── Right side: portrait of Dr. Anderson (square crop) ─────────────────────
RIGHT_W = 480                                # width of portrait column
try:
    portrait = Image.open("public/dr-anderson-portrait-01.jpg").convert("RGB")
    pw, ph = portrait.size
    # crop to RIGHT_W x H aspect ratio (≈ 0.762)
    target_ratio = RIGHT_W / H
    if pw / ph > target_ratio:
        # too wide → crop sides
        new_w = int(ph * target_ratio)
        l = (pw - new_w) // 2
        portrait = portrait.crop((l, 0, l + new_w, ph))
    else:
        # too tall → crop top/bottom
        new_h = int(pw / target_ratio)
        t = (ph - new_h) // 4   # bias toward upper third to keep face visible
        portrait = portrait.crop((0, t, pw, t + new_h))
    portrait = portrait.resize((RIGHT_W, H), Image.LANCZOS)
    img.paste(portrait, (W - RIGHT_W, 0))

    # gradient overlay on left edge of portrait for smooth blend
    blend = Image.new("RGBA", (160, H), (0, 0, 0, 0))
    bd = ImageDraw.Draw(blend)
    for x in range(160):
        alpha = int(255 * (1 - x / 160))
        bd.line([(x, 0), (x, H)], fill=(BG[0], BG[1], BG[2], alpha))
    img.paste(blend, (W - RIGHT_W, 0), blend)
except FileNotFoundError:
    print("WARN: portrait not found, generating text-only og")

# Gold accent bar (left edge)
draw.rectangle([0, 0, 10, H], fill=GOLD)

# Top-left monogram
mono_font = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 56)
draw.text((75, 55), "AR", fill=GOLD, font=mono_font)

# Eyebrow
eb_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 16)
eb = "ODONTOLOGIA ESTÉTICA · CRO 17951"
draw.text((75, 200), eb, fill=GOLD, font=eb_font, spacing=4)

# Main name (serif, large)
name_font = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 64)
draw.text((75, 235), "Dr. Anderson", fill=WHITE, font=name_font)
draw.text((75, 305), "Reinstein", fill=WHITE, font=name_font)

# Divider
draw.rectangle([75, 388, 175, 390], fill=GOLD)

# Tagline (italic serif)
tag_font = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 28)
draw.text((75, 410), "Lentes (cerâmica e resina) · Reabilitação", fill=GOLD, font=tag_font)

# Location
loc_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 18)
draw.text((75, 460), "Porto Alegre · Cachoeirinha / RS", fill=WHITE, font=loc_font)

# Credentials bottom-left
cred_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 14)
draw.text((75, H - 50), "Mais de 15 anos de prática clínica", fill=MUTED, font=cred_font)

# Site URL bottom-left
url_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 13)
draw.text((75, H - 28), "reinstein-odontologia.vercel.app", fill=MUTED, font=url_font)

img.save("public/og-image.png", "PNG", optimize=True)
print(f"OK: public/og-image.png  {W}x{H}")
