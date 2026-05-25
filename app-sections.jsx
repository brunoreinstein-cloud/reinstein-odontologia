/* global React, Icon, WHATSAPP_URL, INSTAGRAM_URL */

/* ============================================================
   PAIN / DESIRE
   ============================================================ */
function PainSection() {
  return (
    <section className="section section--cream" id="reabilitacao">
      <div className="container pain-grid">
        <div className="reveal">
          <span className="eyebrow">Estética com base clínica</span>
          <h2 style={{ marginTop: 18 }}>Sorriso é técnica e arte — e os dois precisam andar juntos.</h2>
          <p style={{ marginTop: 24, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            Não existe estética sem função. Por isso, cada lente, faceta ou tratamento
            começa por entender o sorriso por inteiro — proporção, mordida, gengiva,
            saúde bucal e as expectativas do paciente.
          </p>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            O resultado pretende ser bonito porque é equilibrado — não o contrário.
            É essa combinação de técnica e arte que sustenta um sorriso natural ao
            longo do tempo.
          </p>
          <div className="pain-chips">
            {["Proporção", "Cor", "Brilho", "Função", "Naturalidade", "Equilíbrio"].map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </div>
        <div className="pain-quote reveal reveal-delay-2">
          <p className="lead">
            No consultório do Dr. Anderson Reinstein, cada plano estético nasce do
            encontro entre a história do paciente, suas expectativas e a técnica
            certa para o caso — com 15 anos de prática clínica sustentando cada
            decisão.
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
    num: "01 / Estética de alta precisão",
    title: "Lentes cerâmicas",
    body: "Tratamento estético para harmonizar forma, proporção, cor e brilho dos dentes — sempre planejado a partir das características faciais e da saúde bucal do paciente.",
    icon: <Icon.Sparkle />,
    featured: true,
  },
  {
    num: "02",
    title: "Odontologia estética",
    body: "Clareamento, restaurações estéticas e ajustes de proporção que respeitam a beleza natural do sorriso e a função.",
    icon: <Icon.Smile />,
  },
  {
    num: "03",
    title: "Reabilitação oral",
    body: "Para casos que combinam estética e função em um plano mais amplo — reconstrução completa do sorriso com técnica e cuidado em cada etapa.",
    icon: <Icon.Layers />,
  },
  {
    num: "04",
    title: "Implantes dentários",
    body: "Substituição de dentes perdidos com previsibilidade, recuperando mastigação, estética e segurança ao sorrir.",
    icon: <Icon.Implant />,
  },
  {
    num: "05",
    title: "Próteses dentárias",
    body: "Próteses fixas ou removíveis planejadas para reabilitar função, estética e equilíbrio do sorriso.",
    icon: <Icon.Tooth />,
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
  "15 anos de prática clínica",
  "Foco em odontologia estética, lentes cerâmicas e reabilitação",
  "Planejamento estético e funcional integrado",
  "Atendimento personalizado, paciente por paciente",
  "Olhar técnico aliado à gestão em saúde",
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
            15 anos transformando sorrisos com técnica e responsabilidade clínica.
          </h2>
          <p style={{ marginTop: 24, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            Há mais de 15 anos, o Dr. Anderson Rocha Reinstein atua em odontologia
            estética, lentes cerâmicas e reabilitação oral. Cirurgião-dentista, CRO 17951,
            é especialista em Prótese Dentária e Implantes, com MBA em Gestão em Saúde.
          </p>
          <p style={{ marginTop: 16, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            Sua prática é voltada para pacientes que buscam um sorriso planejado com
            estética natural, função preservada e acompanhamento próximo — em todas as
            etapas do tratamento.
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
   INSTAGRAM FEED
   ============================================================ */
const IG_POSTS = [
  { caption: "Reabilitação oral · planejamento e execução", href: INSTAGRAM_URL },
  { caption: "Lentes cerâmicas · resultado natural", href: INSTAGRAM_URL },
  { caption: "Bastidores do consultório", href: INSTAGRAM_URL },
  { caption: "Implantes dentários · caso documentado", href: INSTAGRAM_URL },
  { caption: "Antes e depois com autorização (TCLE)", href: INSTAGRAM_URL },
  { caption: "Conteúdo educativo · saúde bucal", href: INSTAGRAM_URL },
];

function IGFeedSection() {
  return (
    <section className="section ig-section" id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Instagram</span>
          <h2>Acompanhe casos clínicos e bastidores do consultório.</h2>
          <p className="lead" style={{ marginTop: 8 }}>
            Conteúdos publicados conforme a Resolução CFO 196/2019 — sempre com
            autorização formal do paciente.
          </p>
        </div>

        <div className="ig-meta reveal reveal-delay-1">
          <div className="ig-avatar" aria-hidden="true">AR</div>
          <div className="ig-handle">
            <strong>@dr.andersonreinstein</strong>
            <span>Dr. Anderson Reinstein · Odontologia · CRO 17951</span>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="btn btn-primary">
            <Icon.Instagram /> Seguir
          </a>
        </div>

        <div className="ig-grid reveal reveal-delay-2" role="list">
          {IG_POSTS.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="ig-post"
              role="listitem"
              aria-label={`Post no Instagram: ${p.caption}`}
            >
              <div className="ig-post-img" aria-hidden="true" />
              <span className="ig-post-icon" aria-hidden="true"><Icon.Instagram /></span>
              <div className="ig-post-overlay">
                <span className="ig-post-caption">{p.caption}</span>
              </div>
            </a>
          ))}
        </div>

        <p className="ig-disclaimer reveal reveal-delay-3">
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
  IGFeedSection, TrustSection, ProcessSection, MidCTA,
});
