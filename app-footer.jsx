/* global React, Icon, WHATSAPP_URL, INSTAGRAM_URL */
const { useState: useStateB } = React;

/* ============================================================
   LOCATION
   ============================================================ */
const LOCATIONS = {
  portoalegre: {
    label: "Porto Alegre",
    title: "Porto Alegre · RS",
    address: "Av. Carlos Gomes, 700 — sala 912",
    neighborhood: "Porto Alegre / RS",
    phone: "(51) 99856-3574",
    hours: "Sob agendamento",
    mapLabel: "AV. CARLOS GOMES, 700",
    pinPos: { top: "48%", left: "55%" },
  },
  cachoeirinha: {
    label: "Cachoeirinha",
    title: "Cachoeirinha · RS",
    address: "Av. José Brambila, 20 — 2º andar",
    neighborhood: "Vila Vista Alegre · Cachoeirinha / RS",
    phone: "(51) 3469-3982",
    hours: "Seg a sex · 09h às 18h",
    mapLabel: "AV. JOSÉ BRAMBILA, 20",
    pinPos: { top: "52%", left: "48%" },
  },
};

function LocationSection() {
  const [active, setActive] = useStateB("portoalegre");
  const loc = LOCATIONS[active];

  return (
    <section className="section" id="localizacao">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Onde estamos</span>
          <h2>Atendimento em Porto Alegre e Cachoeirinha.</h2>
        </div>

        <div className="loc-tabs reveal" role="tablist">
          {Object.entries(LOCATIONS).map(([key, l]) => (
            <button
              key={key}
              className={`loc-tab ${active === key ? "active" : ""}`}
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="loc-grid">
          <div className="loc-info reveal reveal-delay-1" key={active + "-info"}>
            <h3>{loc.title}</h3>

            <div className="loc-row">
              <span className="loc-icon"><Icon.Pin /></span>
              <div className="loc-detail">
                <strong>Endereço</strong>
                <span>{loc.address}<br />{loc.neighborhood}</span>
              </div>
            </div>

            <div className="loc-row">
              <span className="loc-icon"><Icon.Phone /></span>
              <div className="loc-detail">
                <strong>Telefone</strong>
                <span>{loc.phone}</span>
              </div>
            </div>

            <div className="loc-row">
              <span className="loc-icon"><Icon.Clock /></span>
              <div className="loc-detail">
                <strong>Atendimento</strong>
                <span>{loc.hours}</span>
              </div>
            </div>

            <div className="loc-cta">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-whatsapp" style={{ width: "100%" }}>
                <Icon.Whatsapp /> Abrir conversa no WhatsApp
              </a>
            </div>
          </div>

          <div className="loc-map reveal reveal-delay-2" key={active + "-map"} aria-label={`Mapa ilustrativo · ${loc.title}`}>
            <span className="loc-map-label">{loc.mapLabel}</span>
            <svg viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 120 Q 100 90 200 130 T 400 110" stroke="oklch(60% 0.04 215)" strokeWidth="2" fill="none" opacity="0.4" />
              <path d="M0 260 Q 150 230 250 270 T 400 250" stroke="oklch(60% 0.04 215)" strokeWidth="2" fill="none" opacity="0.4" />
              <path d="M150 0 L 180 400" stroke="oklch(60% 0.04 215)" strokeWidth="1" fill="none" opacity="0.3" />
              <path d="M280 0 Q 260 200 300 400" stroke="oklch(60% 0.04 215)" strokeWidth="1" fill="none" opacity="0.3" />
              <path d="M60 0 L 50 200 L 90 400" stroke="oklch(60% 0.04 215)" strokeWidth="1" fill="none" opacity="0.2" />
            </svg>
            <div className="loc-pin" style={{ top: loc.pinPos.top, left: loc.pinPos.left }}>
              <div className="loc-pin-dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
const FAQS = [
  {
    q: "Lentes de cerâmica e resina são indicadas para todos os pacientes?",
    a: "Não. A indicação depende da análise dos dentes, mordida, saúde gengival e expectativa estética. A avaliação clínica define se as lentes são a melhor opção para o seu caso — ou se outro tratamento estético se encaixa melhor.",
  },
  {
    q: "Como funciona o planejamento estético?",
    a: "Antes de qualquer procedimento, são analisadas características faciais, proporção dos dentes, mordida, saúde gengival e a expectativa do paciente. A partir disso, é construído um plano que respeita a beleza natural do sorriso e a função.",
  },
  {
    q: "Quanto tempo dura um tratamento estético?",
    a: "O tempo varia conforme o tipo de procedimento e a complexidade do caso. Tratamentos como lentes (cerâmica e resina) costumam envolver poucas sessões, enquanto reabilitações mais amplas têm etapas. Tudo é apresentado no plano de tratamento.",
  },
  {
    q: "Implante dentário dói?",
    a: "O procedimento é realizado com anestesia e planejamento clínico. A experiência pode variar conforme cada caso, e todos os cuidados são explicados durante a avaliação.",
  },
  {
    q: "Posso ver casos anteriores?",
    a: "Sim. O portfólio pode ser acompanhado pelo Instagram do Dr. Anderson Reinstein, sempre respeitando as normas éticas e a autorização dos pacientes.",
  },
];

function FAQSection() {
  const [open, setOpen] = useStateB(0);

  return (
    <section className="section section--cream" id="faq">
      <div className="container faq-grid">
        <div className="faq-aside reveal">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 style={{ marginTop: 18 }}>Tirando dúvidas antes da avaliação.</h2>
          <p>
            Reunimos as perguntas mais comuns sobre tratamentos, indicação clínica e
            como funciona o atendimento. Se a sua dúvida não estiver aqui, fale com a
            clínica.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-ghost">
            <Icon.Whatsapp /> Tirar dúvida agora
          </a>
        </div>

        <div className="faq-list reveal reveal-delay-2">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="faq-toggle"><Icon.Plus /></span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CLOSING
   ============================================================ */
function ClosingSection() {
  return (
    <section className="section section--deep" id="agendar">
      <div className="container-narrow closing reveal">
        <span className="eyebrow">Próximo capítulo do seu sorriso</span>
        <h2>Vamos planejar juntos o seu próximo sorriso.</h2>
        <p className="lead" style={{ color: "var(--ink-invert-soft)", maxWidth: "46ch" }}>
          Estética, função e história — um plano de cuidado feito com técnica e arte.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-whatsapp" style={{ padding: "18px 36px", fontSize: 16 }}>
          <Icon.Whatsapp /> Agendar avaliação agora
        </a>
        <div className="closing-credentials">
          <strong>Dr. Anderson Rocha Reinstein</strong>
          <span>Cirurgião-dentista · CRO 17951</span>
          <span>Especialista em Prótese Dentária e Implantes · MBA em Gestão em Saúde</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-mark">AR</span>
              <span className="brand-text">
                Dr. Anderson Reinstein
                <small>Odontologia Estética · CRO 17951</small>
              </span>
            </span>
            <p>
              Odontologia estética, lentes (cerâmica e resina) e reabilitação oral
              com planejamento individual. Atendimento em Porto Alegre e Cachoeirinha.
            </p>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              <li><a href="#tratamentos">Tratamentos</a></li>
              <li><a href="#sobre">Sobre o profissional</a></li>
              <li><a href="#processo">Atendimento</a></li>
              <li><a href="#faq">Dúvidas frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4>Porto Alegre</h4>
            <ul>
              <li>Av. Carlos Gomes, 700</li>
              <li>sala 912</li>
              <li>(51) 99856-3574</li>
              <li style={{ marginTop: 8 }}>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener" style={{ color: "var(--gold)" }}>
                  @dr.andersonreinstein
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Cachoeirinha</h4>
            <ul>
              <li>Av. José Brambila, 20</li>
              <li>2º andar · Vila Vista Alegre</li>
              <li>(51) 3469-3982</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Dr. Anderson Rocha Reinstein · CRO/RS 17951</span>
          <span>Site institucional · Conteúdo em conformidade com a Resolução CFO 196/2019</span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FLOATING WHATSAPP + TOAST
   ============================================================ */
function FloatingWA() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="float-wa" aria-label="Falar pelo WhatsApp">
      <span className="float-wa-pulse" />
      <Icon.Whatsapp />
    </a>
  );
}

Object.assign(window, {
  LocationSection, FAQSection, ClosingSection, Footer, FloatingWA,
});
