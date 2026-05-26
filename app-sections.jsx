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
        <figure className="pain-visual reveal reveal-delay-2">
          <img
            src="/public/bastidores-tratamento-01.jpg"
            alt="Mãos do Dr. Anderson em luvas, ajustando uma lente cerâmica com instrumento clínico"
            loading="lazy"
            width="960"
            height="1200"
          />
          <figcaption>
            <span className="pain-visual-eyebrow">Detalhe clínico</span>
            <p>
              No consultório do Dr. Anderson Reinstein, cada plano estético nasce do
              encontro entre a história do paciente, suas expectativas e a técnica
              certa para o caso.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ============================================================
   TREATMENTS
   ============================================================ */
const TREATMENTS = [
  {
    image: "/public/lentes-ceramicas-01.jpg",
    imageAlt: "Lente em close — detalhe da translucidez e textura",
    num: "01 / Estética de alta precisão",
    title: "Lentes de cerâmica e resina",
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
            Atuação em prótese, implantes, lentes de cerâmica e resina, estética e reabilitação oral —
            sempre orientada por planejamento clínico individual.
          </p>
        </div>
        <div className="treatments-grid">
          {TREATMENTS.map((t, i) => (
            <article
              key={t.title}
              className={`t-card ${t.featured ? "featured" : ""} ${t.image ? "has-image" : ""} reveal reveal-delay-${(i % 4) + 1}`}
            >
              {t.image && (
                <div className="t-card-image">
                  <img src={t.image} alt={t.imageAlt || ""} loading="lazy" width="960" height="600" />
                </div>
              )}
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
  "Mais de 15 anos de prática clínica",
  "Foco em odontologia estética, lentes (cerâmica e resina) e reabilitação",
  "Planejamento estético e funcional integrado",
  "Atendimento personalizado, paciente por paciente",
  "Olhar técnico aliado à gestão em saúde",
  "Consultórios em Porto Alegre e Cachoeirinha",
];

function AuthoritySection() {
  return (
    <section className="section section--cream" id="sobre">
      <div className="container authority-grid">
        <div className="authority-visual reveal">
          <img
            src="/public/dr-anderson-clinica-01.jpg"
            alt="Dr. Anderson Reinstein no consultório, em atendimento clínico com planejamento digital"
            className="authority-portrait"
            loading="lazy"
            width="1120"
            height="1400"
          />
          <div className="authority-cro" aria-label="Registro profissional CRO/RS 17951">
            <span className="authority-cro-label">CRO/RS</span>
            <strong className="authority-cro-num">17951</strong>
          </div>
        </div>
        <div className="reveal reveal-delay-2">
          <span className="eyebrow">Sobre o profissional</span>
          <h2 style={{ marginTop: 18 }}>
            Mais de 15 anos transformando sorrisos com técnica e responsabilidade clínica.
          </h2>
          <p style={{ marginTop: 24, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            Há mais de 15 anos, o Dr. Anderson Rocha Reinstein atua em odontologia
            estética, lentes (cerâmica e resina) e reabilitação oral. Cirurgião-dentista, CRO 17951,
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
  { src: "/public/lentes-ceramicas-01.jpg",         caption: "Lentes de cerâmica e resina · resultado natural", href: INSTAGRAM_URL },
  { src: "/public/bastidores-tratamento-01.jpg",    caption: "Detalhe do trabalho clínico",            href: INSTAGRAM_URL },
  { src: "/public/consultorio-cadeira-01.jpg",      caption: "Consultório em Cachoeirinha",            href: INSTAGRAM_URL },
  { src: "/public/consultorio-planejamento-01.jpg", caption: "Planejamento digital do sorriso",        href: INSTAGRAM_URL },
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
              <img
                src={p.src}
                alt={p.caption}
                className="ig-post-img"
                loading="lazy"
                width="600"
                height="600"
              />
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

/* ============================================================
   CLINIC / SPACE
   ============================================================ */
function ConsultorioSection() {
  return (
    <section className="section section--cream" id="consultorio">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">O consultório</span>
          <h2>Um espaço pensado para o cuidado individual.</h2>
          <p className="lead" style={{ marginTop: 8 }}>
            Estrutura técnica, planejamento digital e atmosfera tranquila — para que
            cada atendimento seja conduzido com precisão e conforto.
          </p>
        </div>

        <div className="clinic-grid">
          <figure className="clinic-card clinic-card--wide reveal reveal-delay-1">
            <div className="clinic-card-img">
              <img
                src="/public/consultorio-cadeira-01.jpg"
                alt="Cadeira odontológica em ambiente moderno, com acabamento em mármore branco e detalhes em dourado"
                loading="lazy"
                width="1400"
                height="1050"
              />
            </div>
            <figcaption>
              <strong>Atendimento clínico</strong>
              <span>Equipamentos de última geração e ambiente projetado para o conforto do paciente.</span>
            </figcaption>
          </figure>

          <figure className="clinic-card reveal reveal-delay-2">
            <div className="clinic-card-img clinic-card-img--tall">
              <img
                src="/public/consultorio-planejamento-01.jpg"
                alt="Tela exibindo planejamento digital com escaneamento 3D do sorriso"
                loading="lazy"
                width="960"
                height="1200"
              />
            </div>
            <figcaption>
              <strong>Planejamento digital</strong>
              <span>Cada caso é estudado com imagens 3D antes de qualquer procedimento — previsibilidade e técnica caminhando juntas.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  PainSection, TreatmentsSection, AuthoritySection,
  ConsultorioSection, IGFeedSection, TrustSection, ProcessSection, MidCTA,
});
