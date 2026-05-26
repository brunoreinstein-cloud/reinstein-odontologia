/* global React */
const {
  useState: useStateIn,
  useRef:   useRefIn,
} = React;

/* ============================================================
   INTERVIEW SECTION
   — Player 16:9 com poster + custom play overlay
   — Native controls aparecem só depois do primeiro click
   — preload="none" para não baixar 8MB até o usuário pedir
   ============================================================ */
function InterviewSection() {
  const [started, setStarted] = useStateIn(false);
  const videoRef = useRefIn(null);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {/* bloqueado — ignorar */});
    setStarted(true);
  };

  return (
    <section className="section" id="entrevista">
      <div className="container-narrow">
        <div className="section-header reveal">
          <span className="eyebrow">Em vídeo</span>
          <h2>Conheça o Dr. Anderson e o consultório.</h2>
          <p className="lead" style={{ marginTop: 8 }}>
            Uma conversa sobre planejamento, técnica e cuidado em odontologia estética.
          </p>
        </div>

        <div className={`interview-wrap reveal reveal-delay-1${started ? " started" : ""}`}>
          <video
            ref={videoRef}
            src="/public/entrevista-web.mp4"
            poster="/public/entrevista-poster.jpg"
            preload="none"
            playsInline
            controls={started}
            aria-label="Entrevista com o Dr. Anderson Reinstein"
          />
          {!started && (
            <button
              type="button"
              className="interview-cover"
              onClick={start}
              aria-label="Reproduzir entrevista — duração aproximada 5 minutos"
            >
              <div className="interview-play-btn" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="interview-meta">
                <span className="interview-meta-tag">Assistir</span>
                <span className="interview-meta-dur">5 minutos</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { InterviewSection });
