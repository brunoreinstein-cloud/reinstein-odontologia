/* global React */
const {
  useState:  useStateTe,
  useRef:    useRefTe,
  useEffect: useEffectTe,
} = React;

/* ============================================================
   DADOS — preencha name e treatment após autorização (TCLE)
   Adicionar casos: duplique um objeto no array abaixo.
   ============================================================ */
const TESTIMONIALS = [
  {
    src:       "/public/depo-01.mp4",
    poster:    "/public/depo-01-poster.jpg",
    name:      "Paciente",           /* ← nome após autorização */
    treatment: "Lentes de cerâmica e resina",
    duration:  "38s",
  },
  {
    src:       "/public/depo-02.mp4",
    poster:    "/public/depo-02-poster.jpg",
    name:      "Paciente",
    treatment: "Reabilitação oral",
    duration:  "20s",
  },
  {
    src:       "/public/depo-03.mp4",
    poster:    "/public/depo-03-poster.jpg",
    name:      "Paciente",
    treatment: "Odontologia estética",
    duration:  "19s",
  },
];

/* ============================================================
   CARD INDIVIDUAL
   ============================================================ */
function TestimonialCard({ src, poster, name, treatment, isActive, onToggle }) {
  const videoRef = useRefTe(null);

  /* play / pause conforme estado do pai */
  useEffectTe(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isActive) {
      v.play().catch(() => {/* bloqueado pelo browser — ignorar */});
    } else {
      v.pause();
      v.currentTime = 0;   /* volta ao início — o poster reaparece */
    }
  }, [isActive]);

  return (
    <div
      className={`testi-card${isActive ? " playing" : ""}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onToggle())}
      aria-label={`${isActive ? "Pausar" : "Reproduzir"} depoimento — ${treatment}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      />

      {/* overlay: gradiente + play btn + info */}
      <div className="testi-overlay" aria-hidden="true">

        {/* botão play / pause centrado */}
        <div className="testi-play-btn">
          {isActive
            ? /* pause */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            : /* play */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
          }
        </div>

        {/* info na base */}
        <div className="testi-info">
          <span className="testi-treatment">{treatment}</span>
          <strong className="testi-name">{name}</strong>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SEÇÃO
   ============================================================ */
function TestimonialsSection() {
  const [active, setActive] = useStateTe(-1);  /* -1 = nenhum ativo */

  const toggle = (i) => setActive((a) => (a === i ? -1 : i));

  return (
    <section className="section section--deep" id="depoimentos">
      <div className="container">
        <div className="section-header testi-header reveal">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>Depoimentos</span>
          <h2 style={{ color: "var(--ink-invert)" }}>
            O que os pacientes falam.
          </h2>
          <p className="lead" style={{ color: "var(--ink-invert-soft)", marginTop: 8 }}>
            Experiências reais — toque para ouvir.
          </p>
        </div>
      </div>

      {/* lista full-bleed para scroll lateral em mobile */}
      <div className="testi-list" role="list">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            role="listitem"
            className={`reveal reveal-delay-${i + 1}`}
          >
            <TestimonialCard
              {...t}
              isActive={active === i}
              onToggle={() => toggle(i)}
            />
          </div>
        ))}
      </div>

      <div className="container">
        <p className="testi-disclaimer">
          Depoimentos publicados com autorização formal do paciente (TCLE),
          em conformidade com a Resolução CFO 196/2019.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { TestimonialsSection });
