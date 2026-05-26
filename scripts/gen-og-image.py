"""Generate og-image.png (1200x630) for social media share previews."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG    = (18, 54, 66)       # --primary-deep
GOLD  = (199, 155, 84)     # --gold
WHITE = (255, 255, 255)
MUTED = (160, 175, 180)

img  = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# subtle radial-ish vignette via overlay rectangle gradient
for y in range(H):
    a = int(20 * (1 - abs(y - H/2) / (H/2)))
    draw.line([(0, y), (W, y)], fill=(BG[0]+a//3, BG[1]+a//3, BG[2]+a//3))

# Gold accent bar
draw.rectangle([0, 0, 10, H], fill=GOLD)

# Top-right monogram
mono_font = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 72)
draw.text((W - 130, 50), "AR", fill=GOLD, font=mono_font)

# Eyebrow
eb_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 18)
eb = "ODONTOLOGIA ESTÉTICA · CRO 17951"
draw.text((80, 180), eb, fill=GOLD, font=eb_font, spacing=4)

# Main name (serif, large)
name_font = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 88)
draw.text((80, 220), "Dr. Anderson Reinstein", fill=WHITE, font=name_font)

# Divider
draw.rectangle([80, 340, 200, 343], fill=GOLD)

# Tagline (italic serif)
tag_font = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 40)
draw.text((80, 365), "Lentes cerâmicas · Reabilitação oral", fill=GOLD, font=tag_font)

# Location
loc_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 22)
draw.text((80, 440), "Cachoeirinha · Porto Alegre / RS", fill=WHITE, font=loc_font)

# Credentials bottom
cred_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 18)
draw.text((80, H - 60), "Mais de 15 anos de prática clínica", fill=MUTED, font=cred_font)

# Site URL bottom-right
url_font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 16)
url = "reinstein-odontologia.vercel.app"
bbox = draw.textbbox((0, 0), url, font=url_font)
url_w = bbox[2] - bbox[0]
draw.text((W - url_w - 80, H - 58), url, fill=MUTED, font=url_font)

img.save("public/og-image.png", "PNG", optimize=True)
print(f"OK: public/og-image.png  {W}x{H}")
