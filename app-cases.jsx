/* global React, WHATSAPP_URL */
const {
  useState:    useStateCa,
  useRef:      useRefCa,
  useCallback: useCallbackCa,
  useEffect:   useEffectCa,
} = React;

/* ============================================================
   BEFORE / AFTER SLIDER
   Suporta dois modos:
   1. Imagens separadas  → before="url" after="url"
   2. Colagem combinada  → combined="url" layout="h"|"v"
      "h" = lado a lado (antes esquerda, depois direita)
      "v" = empilhada   (antes cima,     depois baixo)
   ============================================================ */
function BeforeAfterSlider({
  before, after,
  combined, layout = "h",
  aspectRatio = "4/5",
  treatment, caption,
}) {
  const [pos, setPos]       = useStateCa(50);   /* 1–99 */
  const [active, setActive] = useStateCa(false);
  const rootRef             = useRefCa(null);

  const clamp = (v) => Math.min(Math.max(v, 1), 99);

  const calcPos = useCallbackCa((clientX) => {
    const r = rootRef.current.getBoundingClientRect();
    return clamp(((clientX - r.left) / r.width) * 100);
  }, []);

  /* mouse */
  useEffectCa(() => {
    if (!active) return;
    const move = (e) => setPos(calcPos(e.clientX));
    const up   = () => setActive(false);
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup",   up);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup",   up);
    };
  }, [active, calcPos]);

  /* touch */
  useEffectCa(() => {
    if (!active) return;
    const move = (e) => { e.preventDefault(); setPos(calcPos(e.touches[0].clientX)); };
    const end  = () => setActive(false);
    document.addEventListener("touchmove", move, { passive: false });
    document.addEventListener("touchend",  end);
    return () => {
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend",  end);
    };
  }, [active, calcPos]);

  const startInteraction = useCallbackCa((clientX) => {
    setActive(true);
    setPos(calcPos(clientX));
  }, [calcPos]);

  /* ── background helpers for combined mode ── */
  const bgBase = combined ? {
    backgroundImage:    `url("${combined}")`,
    backgroundRepeat:   "no-repeat",
    backgroundSize:     layout === "h" ? "200% auto" : "auto 200%",
  } : null;

  const beforeBg = bgBase ? { ...bgBase, backgroundPosition: layout === "h" ? "0% center"   : "center 0%"   } : null;
  const afterBg  = bgBase ? { ...bgBase, backgroundPosition: layout === "h" ? "100% center" : "center 100%" } : null;

  return (
    <figure className="ba-figure">
      <div
        ref={rootRef}
        className={`ba-slider${active ? " ba-dragging" : ""}`}
        style={{ aspectRatio }}
        onMouseDown={(e) => { e.preventDefault(); startInteraction(e.clientX); }}
        onTouchStart={(e) => startInteraction(e.touches[0].clientX)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft")  setPos((p) => clamp(p - 4));
          if (e.key === "ArrowRight") setPos((p) => clamp(p + 4));
        }}
        role="slider"
        tabIndex={0}
        aria-valuemin={1}
        aria-valuemax={99}
        aria-valuenow={Math.round(pos)}
        aria-label={`Comparar antes e depois${treatment ? `: ${treatment}` : ""}`}
      >

        {/* Before — camada base */}
        {combined
          ? <div className="ba-img" style={beforeBg} aria-hidden="true" />
          : <img src={before} alt={`Antes — ${treatment || ""}`} className="ba-img" draggable={false} />
        }

        {/* After — revelação por clip-path */}
        <div className="ba-after" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {combined
            ? <div className="ba-img" style={afterBg} aria-hidden="true" />
            : <img src={after} alt={`Depois — ${treatment || ""}`} className="ba-img" draggable={false} />
          }
        </div>

        {/* Rótulos */}
        <span
          className="ba-lbl ba-lbl--before"
          aria-hidden="true"
          style={{ opacity: pos > 12 ? 1 : 0 }}
        >Antes</span>
        <span
          className="ba-lbl ba-lbl--after"
          aria-hidden="true"
          style={{ opacity: pos < 88 ? 1 : 0 }}
        >Depois</span>

        {/* Handle */}
        <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden="true">
          <div className="ba-line" />
          <div className="ba-knob">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M9 4.5L3.5 11L9 17.5"  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 4.5L18.5 11L13 17.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {(treatment || caption) && (
        <figcaption className="ba-caption">
          {treatment && <strong>{treatment}</strong>}
          {caption   && <span>{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}

/* ============================================================
   DADOS DOS CASOS
   — Fotos salvas em public/ com os nomes abaixo.
   — Para adicionar casos, duplique um item do array.
   — Quando tiver fotos separadas, use before/after em vez de combined.
   ============================================================ */
const CASES = [
  {
    combined:    "/public/caso-01.jpg",
    layout:      "h",                         /* lado a lado */
    aspectRatio: "4/5",
    treatment:   "Lentes de cerâmica e resina",
    caption:     "Harmonização de forma, proporção e cor",
  },
  {
    combined:    "/public/caso-02.jpg",
    layout:      "v",                         /* empilhada */
    aspectRatio: "4/3",
    treatment:   "Reabilitação oral",
    caption:     "Reconstrução funcional e estética",
  },
];

/* ============================================================
   SEÇÃO DE CASOS
   ============================================================ */
function CasesSection() {
  return (
    <section className="section section--cream" id="casos">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Casos clínicos</span>
          <h2>Resultados que falam pelo planejamento.</h2>
          <p className="lead" style={{ marginTop: 8 }}>
            Arraste o divisor para comparar antes e depois — cada sorriso planejado
            individualmente, com técnica e respeito pelo natural.
          </p>
        </div>

        <div className="cases-grid">
          {CASES.map((c, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`}>
              <BeforeAfterSlider {...c} />
            </div>
          ))}
        </div>

        <p className="cases-disclaimer reveal reveal-delay-3">
          Imagens publicadas com autorização formal do paciente (TCLE), em conformidade
          com a Resolução CFO 196/2019. Resultados variam conforme a condição clínica individual.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { CasesSection });
