/* global React, Icon, WHATSAPP_URL, INSTAGRAM_URL */
const { useState: useStateS } = React;

/* ============================================================
   PAIN / DESIRE
   ============================================================ */
function PainSection() {
  return (
    <section className="section section--cream" id="reabilitacao">
      <div className="container pain-grid">
        <div className="reveal">
          <span className="eyebrow">Reabilitação</span>
          <h2 style={{ marginTop: 18 }}>Seu sorriso influencia mais do que a estética.</h2>
          <p style={{ marginTop: 24, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            Dentes desgastados, ausentes, escurecidos, desalinhados ou restaurações antigas
            podem afetar a mastigação, a fala, a autoestima e a segurança para sorrir.
          </p>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            A odontologia moderna permite reconstruir o sorriso com mais naturalidade,
            conforto e previsibilidade — respeitando o rosto, a história e as necessidades
            de cada paciente.
          </p>
          <div className="pain-chips">
            {["Mastigação", "Fala", "Autoestima", "Estética", "Função", "Conforto"].map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </div>
        <div className="pain-quote reveal reveal-delay-2">
          <p className="lead">
            No consultório do Dr. Anderson Reinstein, cada tratamento começa com uma
            avaliação cuidadosa para entender o que precisa ser recuperado: estética,
            função, conforto, saúde bucal — ou todos esses pontos juntos.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TREATMENTS
   ============================================================ */
const TREATMENTS = [
  {
    num: "01 / Reabilitação completa",
    title: "Reabilitação oral",
    body: "Tratamento integrado para casos que exigem reconstrução mais completa do sorriso — combinando função, estética e planejamento clínico de longo prazo.",
    icon: <Icon.Layers />,
    featured: true,
  },
  {
    num: "02",
    title: "Implantes dentários",
    body: "Solução para substituir dentes perdidos, recuperar a mastigação e devolver mais segurança ao sorrir.",
    icon: <Icon.Implant />,
  },
  {
    num: "03",
    title: "Próteses dentárias",
    body: "Planejamento para reabilitar função, estética e equilíbrio do sorriso em casos de perdas, desgastes ou reconstrução oral.",
    icon: <Icon.Tooth />,
  },
  {
    num: "04",
    title: "Lentes cerâmicas",
    body: "Tratamento estético indicado para melhorar forma, proporção, cor e harmonia dos dentes — sempre após avaliação individual.",
    icon: <Icon.Sparkle />,
  },
  {
    num: "05",
    title: "Odontologia estética",
    body: "Procedimentos voltados à beleza natural do sorriso, respeitando características faciais e a saúde bucal do paciente.",
    icon: <Icon.Smile />,
  },
];

function TreatmentsSection() {
  return (
    <section className="section" id="tratamentos">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Tratamentos</span>
          <h2>Como podemos cuidar do seu sorriso.</h2>
          <p className="lead" style={{ marginTop: 8 }}>
            Atuação em prótese, implantes, lentes cerâmicas, estética e reabilitação oral —
            sempre orientada por planejamento clínico individual.
          </p>
        </div>
        <div className="treatments-grid">
          {TREATMENTS.map((t, i) => (
            <article
              key={t.title}
              className={`t-card ${t.featured ? "featured" : ""} reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="t-card-glyph">{t.icon}</div>
              <div className="t-card-num">{t.num}</div>
              <h3>{t.title}</h3>
              <p style={{ marginTop: 12 }}>{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   AUTHORITY
   ============================================================ */
const DIFFERENTIALS = [
  "Atendimento personalizado, paciente por paciente",
  "Planejamento estético e funcional integrado",
  "Foco em prótese, implantes e reabilitação oral",
  "Olhar clínico aliado à gestão em saúde",
  "Consultórios em Cachoeirinha e Porto Alegre",
];

function AuthoritySection() {
  return (
    <section className="section section--cream" id="sobre">
      <div className="container authority-grid">
        <div className="authority-visual reveal" aria-hidden="true">
          <div className="cro-stamp">
            CRO
            <strong>17951</strong>
            RS
          </div>
          <span>retrato profissional · consultório</span>
        </div>
        <div className="reveal reveal-delay-2">
          <span className="eyebrow">Sobre o profissional</span>
          <h2 style={{ marginTop: 18 }}>
            Experiência clínica com visão completa de cuidado.
          </h2>
          <p style={{ marginTop: 24, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            O Dr. Anderson Rocha Reinstein é cirurgião-dentista, CRO 17951, especializado
            em próteses dentárias e implantes, com MBA em Gestão em Saúde.
          </p>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            Sua atuação é voltada para pacientes que buscam tratamentos odontológicos
            com planejamento, responsabilidade, estética natural e acompanhamento próximo.
          </p>
          <ul className="differentials">
            {DIFFERENTIALS.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PORTFOLIO
   ============================================================ */
function PortfolioSection() {
  const tiles = [
    "antes · depois (TCLE)",
    "detalhe lente cerâmica",
    "consultório / bastidor",
    "sorriso natural · pós-tratamento",
  ];
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Portfólio · Instagram</span>
          <h2>Veja alguns trabalhos e acompanhe os bastidores profissionais.</h2>
          <p className="lead" style={{ marginTop: 8 }}>
            Conteúdos, orientações e casos clínicos publicados conforme a Resolução
            CFO 196/2019 — sempre com autorização formal do paciente.
          </p>
        </div>
        <div className="portfolio-strip reveal reveal-delay-2">
          {tiles.map((t) => (
            <div key={t} className="portfolio-tile" aria-label={t}>
              <span>{t}</span>
            </div>
          ))}
        </div>
        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="btn btn-primary">
            <Icon.Instagram /> Acessar Instagram
          </a>
          <span style={{ fontSize: 14, color: "var(--ink-mute)" }}>@dr.andersonreinstein</span>
        </div>
        <p className="portfolio-disclaimer reveal reveal-delay-3" style={{ marginTop: 32 }}>
          Imagens publicadas seguem as normas éticas vigentes. Resultados variam de
          acordo com a condição clínica de cada paciente — nenhum resultado é prometido
          ou garantido fora do plano de tratamento individual.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   TRUST
   ============================================================ */
const TRUST_POINTS = [
  "Estrutura dental, gengiva e mordida avaliadas com método",
  "Saúde bucal e expectativas do paciente consideradas",
  "Possibilidades clínicas discutidas com transparência",
  "Plano coerente, seguro e personalizado para o seu caso",
];

function TrustSection() {
  return (
    <section className="section" id="confianca">
      <div className="container">
        <div className="trust-card reveal">
          <div>
            <span className="eyebrow">Planejamento individual</span>
            <h2 style={{ marginTop: 18 }}>
              Tratamentos planejados para o seu caso — não para um sorriso genérico.
            </h2>
            <p>
              Cada sorriso tem uma história. Por isso, antes de indicar lentes,
              implantes, próteses ou qualquer procedimento estético, é necessário
              avaliar estrutura dental, gengiva, mordida, saúde bucal, expectativas e
              possibilidades clínicas.
            </p>
            <p style={{ marginTop: 18 }}>
              O objetivo é construir um plano de tratamento coerente, seguro e
              personalizado.
            </p>
          </div>
          <div className="trust-checks">
            {TRUST_POINTS.map((p) => (
              <div key={p} className="trust-check">
                <span className="trust-check-icon"><Icon.Check /></span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="trust-micro">
          A indicação de cada procedimento depende de avaliação clínica individual.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS
   ============================================================ */
const STEPS = [
  { n: "1", title: "Agendamento da avaliação", body: "Você entra em contato pelo WhatsApp ou Instagram e escolhe o melhor horário disponível." },
  { n: "2", title: "Consulta inicial", body: "O Dr. Anderson avalia sua saúde bucal, escuta suas queixas e entende seus objetivos." },
  { n: "3", title: "Planejamento personalizado", body: "Com base no diagnóstico, é apresentado um plano de tratamento adequado ao seu caso." },
  { n: "4", title: "Execução do tratamento", body: "O acompanhamento é feito com cuidado, orientação e foco em estética, função e saúde." },
  { n: "5", title: "Manutenção e acompanhamento", body: "Após o tratamento, você recebe orientações para preservar o resultado e manter a saúde bucal." },
];

function ProcessSection() {
  return (
    <section className="section section--cream" id="processo">
      <div className="container-narrow">
        <div className="section-header reveal">
          <span className="eyebrow">Atendimento</span>
          <h2>Sua jornada até um novo sorriso.</h2>
        </div>
        <div className="process-list">
          {STEPS.map((s, i) => (
            <div key={s.n} className={`process-step reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="process-num">0{s.n}</div>
              <div className="process-content">
                <h3>{s.title}</h3>
                <p style={{ marginTop: 6 }}>{s.body}</p>
              </div>
              <div className="process-arrow"><Icon.Arrow /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MID CTA
   ============================================================ */
function MidCTA() {
  return (
    <section className="section section--tight">
      <div className="container-narrow mid-cta reveal">
        <span className="eyebrow">Próximo passo</span>
        <h2>Quer entender qual tratamento é indicado para você?</h2>
        <p className="lead">
          Agende uma avaliação e converse com o Dr. Anderson Reinstein. Sem
          compromisso, sem promessas — apenas uma conversa clínica honesta.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-whatsapp">
          <Icon.Whatsapp /> Falar com a clínica pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

Object.assign(window, {
  PainSection, TreatmentsSection, AuthoritySection,
  PortfolioSection, TrustSection, ProcessSection, MidCTA,
});
