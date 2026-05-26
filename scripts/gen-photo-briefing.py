"""Generate the photography briefing PDF for Dr. Anderson Reinstein's site."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm, mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, ListFlowable, ListItem, KeepTogether, HRFlowable
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
import os

os.makedirs("docs", exist_ok=True)

# ── Brand palette ──────────────────────────────────────────────────────────
PETROL      = HexColor("#123642")
PETROL_SOFT = HexColor("#1d4a58")
GOLD        = HexColor("#c79b54")
GOLD_DEEP   = HexColor("#a87f3f")
INK         = HexColor("#1a2226")
INK_SOFT    = HexColor("#4a5560")
INK_MUTE    = HexColor("#7a8590")
BG_CREAM    = HexColor("#f5f1e8")
LINE        = HexColor("#d8d2c4")
RED_TAG     = HexColor("#b53a3a")
AMBER_TAG   = HexColor("#c79b54")
GREEN_TAG   = HexColor("#5a7a4a")

# ── Doc setup ──────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
LM = 2.2*cm
RM = 2.2*cm
CONTENT_W = PAGE_W - LM - RM

def on_page(canvas, doc):
    """Footer with site URL + page number."""
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(LM, 1.5*cm, PAGE_W - RM, 1.5*cm)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(INK_MUTE)
    canvas.drawString(LM, 1.1*cm, "reinstein-odontologia.vercel.app  ·  CRO 17951")
    canvas.drawRightString(PAGE_W - RM, 1.1*cm, f"{doc.page}")
    canvas.restoreState()

doc = SimpleDocTemplate(
    "docs/briefing-fotografia.pdf",
    pagesize=A4,
    rightMargin=RM, leftMargin=LM,
    topMargin=2.0*cm, bottomMargin=2.0*cm,
    title="Briefing Fotografico - Dr. Anderson Reinstein",
    author="Reinstein Odontologia",
    subject="Briefing fotografico para site institucional",
)

# ── Styles ─────────────────────────────────────────────────────────────────
ss = getSampleStyleSheet()

S = {
    "title": ParagraphStyle("T", parent=ss["Title"],
        fontName="Helvetica-Bold", fontSize=30, leading=34,
        textColor=PETROL, alignment=TA_LEFT, spaceAfter=4),
    "subtitle": ParagraphStyle("ST", parent=ss["Normal"],
        fontName="Helvetica-Oblique", fontSize=14, leading=18,
        textColor=GOLD_DEEP, alignment=TA_LEFT, spaceAfter=18),
    "eyebrow": ParagraphStyle("EB", parent=ss["Normal"],
        fontName="Helvetica-Bold", fontSize=8, leading=11,
        textColor=GOLD_DEEP, alignment=TA_LEFT, spaceAfter=6,
        letterSpacing=2),
    "h2": ParagraphStyle("H2", parent=ss["Heading2"],
        fontName="Helvetica-Bold", fontSize=17, leading=21,
        textColor=PETROL, alignment=TA_LEFT, spaceBefore=14, spaceAfter=8),
    "h3": ParagraphStyle("H3", parent=ss["Heading3"],
        fontName="Helvetica-Bold", fontSize=12, leading=15,
        textColor=PETROL, alignment=TA_LEFT, spaceBefore=10, spaceAfter=4),
    "body": ParagraphStyle("B", parent=ss["Normal"],
        fontName="Helvetica", fontSize=10, leading=15,
        textColor=INK, alignment=TA_LEFT, spaceAfter=6),
    "lead": ParagraphStyle("L", parent=ss["Normal"],
        fontName="Helvetica-Oblique", fontSize=11, leading=17,
        textColor=INK_SOFT, alignment=TA_LEFT, spaceAfter=10),
    "caption": ParagraphStyle("C", parent=ss["Normal"],
        fontName="Helvetica", fontSize=8, leading=11,
        textColor=INK_MUTE, alignment=TA_LEFT, spaceAfter=6),
    "bullet": ParagraphStyle("BU", parent=ss["Normal"],
        fontName="Helvetica", fontSize=10, leading=14,
        textColor=INK, alignment=TA_LEFT,
        leftIndent=12, bulletIndent=2, spaceAfter=2),
    "tag": ParagraphStyle("TAG", parent=ss["Normal"],
        fontName="Helvetica-Bold", fontSize=8, leading=10,
        textColor=HexColor("#ffffff"), alignment=TA_CENTER, letterSpacing=1),
    "tablehead": ParagraphStyle("TH", parent=ss["Normal"],
        fontName="Helvetica-Bold", fontSize=9, leading=12,
        textColor=PETROL, alignment=TA_LEFT),
    "tablebody": ParagraphStyle("TB", parent=ss["Normal"],
        fontName="Helvetica", fontSize=9, leading=12,
        textColor=INK, alignment=TA_LEFT),
}

# ── Helpers ────────────────────────────────────────────────────────────────
def priority_tag(label, color):
    t = Table([[Paragraph(label, S["tag"])]], colWidths=[3.2*cm], rowHeights=[0.55*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), color),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("LEFTPADDING", (0,0), (-1,-1), 6),
        ("RIGHTPADDING", (0,0), (-1,-1), 6),
    ]))
    return t

def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(it, S["bullet"]), bulletColor=GOLD,
                  leftIndent=14, bulletOffsetY=-1)
         for it in items],
        bulletType="bullet", start="•", leftIndent=12,
    )

def card(tag_table, title, items):
    """Photo brief card: priority tag + title + bullet specs."""
    return KeepTogether([
        tag_table,
        Spacer(1, 5),
        Paragraph(title, S["h3"]),
        bullets(items),
        Spacer(1, 10),
    ])

def divider():
    return HRFlowable(width="100%", thickness=0.5, color=LINE,
                       spaceBefore=4, spaceAfter=12)

# ── Build story ────────────────────────────────────────────────────────────
story = []

# Header band
header = Table([[
    Paragraph('<para alignment="left"><font color="#c79b54" size="22"><b>AR</b></font></para>',
              S["title"]),
    Paragraph("BRIEFING FOTOGRÁFICO", S["eyebrow"]),
]], colWidths=[2*cm, CONTENT_W - 2*cm], rowHeights=[1.4*cm])
header.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("ALIGN", (1,0), (1,0), "RIGHT"),
    ("LINEBELOW", (0,0), (-1,-1), 2, GOLD),
]))
story.append(header)
story.append(Spacer(1, 0.6*cm))

# Title
story.append(Paragraph("Dr. Anderson Reinstein", S["title"]))
story.append(Paragraph("Odontologia Estética · Site institucional", S["subtitle"]))

# Sobre o projeto
story.append(Paragraph("SOBRE O PROJETO", S["eyebrow"]))
story.append(Paragraph(
    "Site institucional do Dr. Anderson Rocha Reinstein (Cirurgião-dentista CRO 17951), "
    "no ar em <b>reinstein-odontologia.vercel.app</b>. Posicionamento: odontologia estética, "
    "lentes cerâmicas e reabilitação oral, com mais de 15 anos de prática clínica. "
    "Consultórios em Cachoeirinha e Porto Alegre / RS.",
    S["body"]
))
story.append(Paragraph(
    "O site já está construído com todas as seções estruturais. Faltam fotografias reais "
    "para substituir os placeholders e elevar o nível visual ao patamar editorial — referências "
    "Vogue Wellness, branding hospitalar suíço, fotografia editorial em saúde premium.",
    S["body"]
))

# Identidade visual
story.append(Spacer(1, 6))
story.append(Paragraph("IDENTIDADE VISUAL", S["eyebrow"]))

swatch_row = Table([[
    Table([[""]], colWidths=[1.4*cm], rowHeights=[1.4*cm],
          style=[("BACKGROUND", (0,0), (-1,-1), PETROL), ("BOX", (0,0), (-1,-1), 0.3, LINE)]),
    Paragraph("<b>Petróleo</b><br/><font size='8' color='#7a8590'>#123642 · principal</font>", S["caption"]),
    Table([[""]], colWidths=[1.4*cm], rowHeights=[1.4*cm],
          style=[("BACKGROUND", (0,0), (-1,-1), GOLD), ("BOX", (0,0), (-1,-1), 0.3, LINE)]),
    Paragraph("<b>Dourado</b><br/><font size='8' color='#7a8590'>#c79b54 · acento</font>", S["caption"]),
    Table([[""]], colWidths=[1.4*cm], rowHeights=[1.4*cm],
          style=[("BACKGROUND", (0,0), (-1,-1), BG_CREAM), ("BOX", (0,0), (-1,-1), 0.3, LINE)]),
    Paragraph("<b>Creme</b><br/><font size='8' color='#7a8590'>#f5f1e8 · fundo</font>", S["caption"]),
]], colWidths=[1.5*cm, 3.7*cm, 1.5*cm, 3.7*cm, 1.5*cm, 3.7*cm])
swatch_row.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("LEFTPADDING", (0,0), (-1,-1), 6),
    ("RIGHTPADDING", (0,0), (-1,-1), 0),
    ("TOPPADDING", (0,0), (-1,-1), 4),
    ("BOTTOMPADDING", (0,0), (-1,-1), 4),
]))
story.append(swatch_row)
story.append(Spacer(1, 8))

story.append(Paragraph(
    "<b>Tipografia do site:</b> Cormorant Garamond (serifa elegante, títulos e citações) "
    "+ Manrope (sans-serif clean, corpo). As fotos devem dialogar com essa elegância — sem "
    "saturação exagerada, sem filtros de Instagram, sem \"branqueamento\" de pele que descaracterize.",
    S["body"]
))

story.append(Paragraph(
    "<b>Mood geral:</b> luz natural quando possível · tons neutros e quentes · alta nitidez · "
    "profundidade de campo (foco no sujeito, fundo desfocado) · composição respirada · ausência "
    "de poluição visual no enquadramento.",
    S["body"]
))

story.append(PageBreak())

# ════════════════════════════════════════════════════════════════════════════
# PRIORIDADE ALTA
# ════════════════════════════════════════════════════════════════════════════
story.append(Paragraph("PARTE 1 DE 3", S["eyebrow"]))
story.append(Paragraph("Prioridade alta", S["h2"]))
story.append(Paragraph(
    "Fotografias críticas — sem elas o site continua com placeholders ou imagens de "
    "WhatsApp recortadas com workaround.",
    S["lead"]
))
story.append(divider())

# 01 — Retrato profissional
story.append(card(
    priority_tag("01 · RETRATO PROFISSIONAL", RED_TAG),
    "Retratos do Dr. Anderson",
    [
        "<b>Quantidade:</b> 3 a 4 variações — uma editorial (séria), uma sorrindo, uma de meio corpo trabalhando",
        "<b>Aspect ratio:</b> 3:4 (portrait) + 1:1 (quadrado para Instagram e avatar)",
        "<b>Resolução mínima:</b> 2400 px no lado maior",
        "<b>Local:</b> consultório de Cachoeirinha (Av. José Brambila, 20)",
        "<b>Wardrobe:</b> jaleco branco limpo OU camisa social lisa escura (sem padronagem, sem logotipos)",
        "<b>Expressão:</b> profissional confiante. Não usar o sorriso \"comercial\" de banco de imagens",
        "<b>Background:</b> consultório suavemente desfocado (cadeira odontológica, luminária, materiais) OU parede neutra petróleo/creme",
        "<b>Uso no site:</b> seção \"Sobre o profissional\" (substitui o placeholder do CRO), avatar Instagram, OG image, futura página de equipe",
    ]
))

# 02 — Consultório Cachoeirinha
story.append(card(
    priority_tag("02 · CONSULTÓRIO CACHOEIRINHA", RED_TAG),
    "Consultório principal — Cachoeirinha",
    [
        "<b>Quantidade:</b> 5 a 6 ângulos",
        "<b>Tomadas necessárias:</b> recepção (panorâmica) · cadeira odontológica (3/4) · bancada de instrumentos · sala de planejamento digital · detalhe da iluminação odontológica",
        "<b>Aspect ratio:</b> 16:9 (landscape) e 4:5 (portrait)",
        "<b>Resolução mínima:</b> 2400 px no lado maior",
        "<b>Iluminação:</b> natural quando possível, complementada por luz artificial neutra (evitar tom amarelo/fluorescente)",
        "<b>Organização:</b> ambiente preparado, sem cabos aparentes, materiais arrumados, sem pacientes na cena",
        "<b>Uso no site:</b> background da seção Sobre, peças impressas (cartão de visita), futuro tour virtual, redes sociais",
    ]
))

# 03 — Consultório Porto Alegre
story.append(card(
    priority_tag("03 · CONSULTÓRIO PORTO ALEGRE", RED_TAG),
    "Consultório secundário — Porto Alegre",
    [
        "<b>Quantidade:</b> 3 a 4 ângulos",
        "<b>Local:</b> Av. Carlos Gomes, 700 — sala 912",
        "<b>Tomadas necessárias:</b> entrada/sala · cadeira odontológica · vista da janela (paisagem POA)",
        "<b>Mesmo padrão visual</b> do consultório de Cachoeirinha (consistência entre as duas unidades)",
        "<b>Uso no site:</b> seção Localização (atualmente com SVG ilustrativo), futuro lookbook",
    ]
))

# 04 — Casos clínicos
story.append(card(
    priority_tag("04 · CASOS CLÍNICOS", RED_TAG),
    "Antes/depois — fotos SEPARADAS, não colagens",
    [
        "<b>Quantidade:</b> 4 a 6 pares (antes/depois) iniciais — pode crescer ao longo do tempo",
        "<b>Casos prioritários:</b> Lentes cerâmicas (close de sorriso) · Reabilitação oral (face e close) · Implantes (sorriso) · Próteses (sorriso)",
        "<b>Aspect ratio:</b> 4:5 (portrait) para faces, 4:3 (landscape) para macros dentários",
        "<b>Resolução mínima:</b> 1800 px no lado maior",
        "<b>Iluminação:</b> idêntica entre o antes e o depois (mesma luz, mesmo ângulo, mesma distância)",
        "<b>IMPORTANTE:</b> entregar arquivos SEPARADOS (caso-01-antes.jpg + caso-01-depois.jpg). O site monta a comparação interativa automaticamente — colagens não funcionam bem no slider arrastar",
        "<b>Ética CFO 196/2019:</b> obrigatório TCLE assinado de cada paciente. Atualmente o site usa colagens WhatsApp com workaround CSS — substituir por arquivos pares apropriados",
        "<b>Uso no site:</b> seção \"Casos clínicos\" (slider arrastável antes/depois)",
    ]
))

story.append(PageBreak())

# ════════════════════════════════════════════════════════════════════════════
# PRIORIDADE MÉDIA
# ════════════════════════════════════════════════════════════════════════════
story.append(Paragraph("PARTE 2 DE 3", S["eyebrow"]))
story.append(Paragraph("Prioridade média", S["h2"]))
story.append(Paragraph(
    "Fotografias para enriquecer o conteúdo e alimentar redes sociais. Não bloqueiam o site, "
    "mas elevam muito a percepção de qualidade.",
    S["lead"]
))
story.append(divider())

# 05 — Bastidores
story.append(card(
    priority_tag("05 · BASTIDORES", AMBER_TAG),
    "Bastidores e atmosfera do consultório",
    [
        "<b>Quantidade:</b> 6 a 8 shots de atmosfera",
        "<b>Conteúdo:</b> Dr. trabalhando (foco em mãos/técnica, paciente desfocado de lado/atrás) · materiais e equipamentos premium em close · esterilização · planejamento digital na tela",
        "<b>Aspect ratio:</b> 1:1 (quadrado para Instagram) e 4:5 (portrait para feed vertical)",
        "<b>Estilo:</b> cinematográfico, com bokeh, valorizar texturas (porcelana, cerâmica, instrumentos)",
        "<b>Uso no site:</b> grid do Instagram (atualmente com placeholders gradiente), posts orgânicos das redes sociais",
    ]
))

# 06 — Editorial / Hero
story.append(card(
    priority_tag("06 · EDITORIAL HERO/OG", AMBER_TAG),
    "Foto-bandeira para Hero e redes sociais",
    [
        "<b>Quantidade:</b> 1 a 2 shots icônicos",
        "<b>Conteúdo opções:</b> (a) sorriso-resultado de paciente autorizada, em close editorial; (b) Dr. em pose editorial com expressão profissional confiante; (c) consultório vazio em hora dourada",
        "<b>Aspect ratio:</b> 16:9 (1920×1080 ou maior) — será cropada para 1200×630 no OG image",
        "<b>Resolução mínima:</b> 3000 px no lado maior",
        "<b>Mood:</b> premium, elegante, próximo. Pode ter espaço negativo para overlay de texto futuro",
        "<b>Uso no site:</b> substitui a og-image gerada por código (preview ao compartilhar no WhatsApp/LinkedIn/Facebook), futuramente um hero visual",
    ]
))

# ════════════════════════════════════════════════════════════════════════════
# PRIORIDADE BAIXA
# ════════════════════════════════════════════════════════════════════════════
story.append(Spacer(1, 6))
story.append(Paragraph("Prioridade baixa — expansões futuras", S["h2"]))
story.append(divider())

story.append(card(
    priority_tag("07 · DETALHES MACRO", GREEN_TAG),
    "Detalhes editoriais para Trust Section",
    [
        "<b>Quantidade:</b> 5 a 8 fotos",
        "<b>Conteúdo:</b> macros — mãos com instrumento, planejamento digital em tela, lente cerâmica em close, sorriso natural, recepção em detalhe",
        "<b>Estilo:</b> macro cinematográfico, profundidade de campo extrema, textura valorizada",
        "<b>Uso no site:</b> seção Trust, separadores entre seções, posts de \"detalhe\" no Instagram",
    ]
))

story.append(card(
    priority_tag("08 · EQUIPE", GREEN_TAG),
    "Equipe do consultório (se aplicável)",
    [
        "<b>Quantidade:</b> 1 retrato individual de cada membro + 1 foto de grupo",
        "<b>Aspect ratio:</b> 3:4",
        "<b>Wardrobe:</b> uniforme do consultório",
        "<b>Uso no site:</b> futura página \"Equipe\" (não implementada ainda)",
    ]
))

story.append(PageBreak())

# ════════════════════════════════════════════════════════════════════════════
# ESPECIFICAÇÕES TÉCNICAS
# ════════════════════════════════════════════════════════════════════════════
story.append(Paragraph("PARTE 3 DE 3", S["eyebrow"]))
story.append(Paragraph("Especificações técnicas", S["h2"]))
story.append(Paragraph(
    "Padrões para garantir que as fotos funcionem em todos os contextos do site, redes sociais e impressos.",
    S["lead"]
))
story.append(divider())

# Tabela de aspect ratios
story.append(Paragraph("Resumo de aspect ratios por uso", S["h3"]))
story.append(Spacer(1, 4))

ar_data = [
    [Paragraph("<b>Uso</b>", S["tablehead"]),
     Paragraph("<b>Aspect ratio</b>", S["tablehead"]),
     Paragraph("<b>Resolução mín.</b>", S["tablehead"])],
    [Paragraph("Retrato Authority", S["tablebody"]),
     Paragraph("3:4", S["tablebody"]),
     Paragraph("1800×2400", S["tablebody"])],
    [Paragraph("Consultório landscape", S["tablebody"]),
     Paragraph("16:9", S["tablebody"]),
     Paragraph("2400×1350", S["tablebody"])],
    [Paragraph("Casos antes/depois (face)", S["tablebody"]),
     Paragraph("4:5", S["tablebody"]),
     Paragraph("1440×1800", S["tablebody"])],
    [Paragraph("Casos antes/depois (macro)", S["tablebody"]),
     Paragraph("4:3", S["tablebody"]),
     Paragraph("2000×1500", S["tablebody"])],
    [Paragraph("Instagram / bastidores", S["tablebody"]),
     Paragraph("1:1", S["tablebody"]),
     Paragraph("1500×1500", S["tablebody"])],
    [Paragraph("OG image / hero editorial", S["tablebody"]),
     Paragraph("16:9 (crop 1.91:1)", S["tablebody"]),
     Paragraph("3000×1688", S["tablebody"])],
]
ar_table = Table(ar_data, colWidths=[CONTENT_W*0.45, CONTENT_W*0.27, CONTENT_W*0.28])
ar_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,0), BG_CREAM),
    ("LINEBELOW", (0,0), (-1,0), 1.2, GOLD),
    ("LINEBELOW", (0,1), (-1,-2), 0.3, LINE),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("LEFTPADDING", (0,0), (-1,-1), 8),
    ("RIGHTPADDING", (0,0), (-1,-1), 8),
    ("TOPPADDING", (0,0), (-1,-1), 7),
    ("BOTTOMPADDING", (0,0), (-1,-1), 7),
]))
story.append(ar_table)
story.append(Spacer(1, 14))

# Especificações de entrega
story.append(Paragraph("Formato de arquivo e tratamento", S["h3"]))
story.append(bullets([
    "<b>Originais:</b> RAW (preservar para retoques futuros)",
    "<b>Finais:</b> JPEG qualidade 90+, sRGB",
    "<b>Tratamento:</b> exposição, balanço de branco, contraste, leve dodge & burn — sem efeitos artificiais",
    "<b>Cor da pele:</b> tratamento natural, sem \"plastificado\" tipo IA — manter textura",
    "<b>Branco dos dentes:</b> real, sem branqueamento exagerado em pós-produção (questão ética CFO)",
    "<b>Ruído:</b> aceitável em alta ISO se a foto for autêntica — não usar IA para \"limpar\" demais",
    "<b>Profundidade:</b> contraste médio, valorizar profundidade tonal",
]))

# Naming convention
story.append(Paragraph("Convenção de nomes de arquivos", S["h3"]))
story.append(Paragraph(
    "Padrão estritamente em minúsculas, sem acentos, separado por hífen. Facilita versionamento "
    "no site e organização no Drive.",
    S["body"]
))
naming_data = [
    [Paragraph("<b>Categoria</b>", S["tablehead"]), Paragraph("<b>Padrão</b>", S["tablehead"])],
    [Paragraph("Retratos do Dr.", S["tablebody"]),
     Paragraph("<font face='Courier'>dr-anderson-portrait-01.jpg, dr-anderson-portrait-02.jpg ...</font>", S["tablebody"])],
    [Paragraph("Consultório Cachoeirinha", S["tablebody"]),
     Paragraph("<font face='Courier'>consultorio-cachoeirinha-recepcao.jpg, ...-cadeira-01.jpg, ...-bancada.jpg</font>", S["tablebody"])],
    [Paragraph("Consultório POA", S["tablebody"]),
     Paragraph("<font face='Courier'>consultorio-poa-sala.jpg, consultorio-poa-vista.jpg</font>", S["tablebody"])],
    [Paragraph("Casos clínicos", S["tablebody"]),
     Paragraph("<font face='Courier'>caso-lentes-01-antes.jpg, caso-lentes-01-depois.jpg, caso-reabilitacao-01-antes.jpg ...</font>", S["tablebody"])],
    [Paragraph("Bastidores", S["tablebody"]),
     Paragraph("<font face='Courier'>bastidores-planejamento-01.jpg, bastidores-tratamento-02.jpg</font>", S["tablebody"])],
    [Paragraph("Editorial / Hero", S["tablebody"]),
     Paragraph("<font face='Courier'>editorial-hero-01.jpg, editorial-sorriso-01.jpg</font>", S["tablebody"])],
]
nm_table = Table(naming_data, colWidths=[CONTENT_W*0.32, CONTENT_W*0.68])
nm_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,0), BG_CREAM),
    ("LINEBELOW", (0,0), (-1,0), 1.2, GOLD),
    ("LINEBELOW", (0,1), (-1,-2), 0.3, LINE),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("LEFTPADDING", (0,0), (-1,-1), 8),
    ("RIGHTPADDING", (0,0), (-1,-1), 8),
    ("TOPPADDING", (0,0), (-1,-1), 7),
    ("BOTTOMPADDING", (0,0), (-1,-1), 7),
]))
story.append(nm_table)
story.append(Spacer(1, 14))

# Direitos e ética
story.append(Paragraph("Direitos de uso e conformidade ética", S["h3"]))
story.append(bullets([
    "<b>Cessão dos direitos</b> de uso comercial pelo cliente, em todos os meios: site, redes sociais, anúncios pagos, impressos, mídia espontânea",
    "<b>TCLE assinado</b> de todo paciente que aparecer em foto (rosto, sorriso, condição clínica). Sem TCLE não há publicação",
    "<b>Resolução CFO 196/2019:</b> conteúdo respeita as normas do Conselho Federal de Odontologia — sem promessa de resultado, sem comparações sensacionalistas",
    "<b>Arquivamento:</b> manter os RAWs por no mínimo 5 anos (segurança jurídica caso paciente solicite remoção)",
]))

# Entrega
story.append(Paragraph("Entrega", S["h3"]))
story.append(Paragraph(
    "Drive ou Dropbox compartilhado com a seguinte estrutura de pastas:",
    S["body"]
))
story.append(Paragraph(
    "<font face='Courier' size='9'>"
    "📁 01-retratos/<br/>"
    "📁 02-consultorio-cachoeirinha/<br/>"
    "📁 03-consultorio-poa/<br/>"
    "📁 04-casos-clinicos/<br/>"
    "📁 05-bastidores/<br/>"
    "📁 06-editorial/<br/>"
    "📁 07-detalhes-macro/<br/>"
    "📁 RAW/<br/>"
    "</font>",
    S["body"]
))

# Cronograma sugerido
story.append(Paragraph("Cronograma sugerido", S["h3"]))
story.append(bullets([
    "<b>Sessão 1 (meio dia):</b> retratos do Dr. + consultório de Cachoeirinha",
    "<b>Sessão 2 (meio dia):</b> consultório de Porto Alegre + foto editorial hero",
    "<b>Sessões clínicas:</b> ao longo do tempo, agendadas em dias de atendimento com pacientes que assinarem TCLE",
    "<b>Bastidores:</b> meia jornada em dia regular de atendimento (sem montagem artificial)",
]))

# Footer / contato
story.append(Spacer(1, 18))
story.append(HRFlowable(width="100%", thickness=1, color=GOLD,
                         spaceBefore=2, spaceAfter=12))
story.append(Paragraph("CONTATO", S["eyebrow"]))
story.append(Paragraph(
    "<b>Dr. Anderson Rocha Reinstein</b><br/>"
    "Cirurgião-dentista · CRO 17951<br/>"
    "WhatsApp: +55 51 9259-2797<br/>"
    "Site: reinstein-odontologia.vercel.app<br/>"
    "Instagram: @dr.andersonreinstein",
    S["body"]
))

# ── Build ──────────────────────────────────────────────────────────────────
doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
print("OK: docs/briefing-fotografia.pdf")
