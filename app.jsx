/* global React, ReactDOM,
   Nav, Hero, useReveal, useTheme,
   PainSection, TreatmentsSection, AuthoritySection,
   ConsultorioSection, InterviewSection, CasesSection, TestimonialsSection, IGFeedSection,
   TrustSection, ProcessSection, MidCTA,
   LocationSection, FAQSection, ClosingSection, Footer, FloatingWA,
   WHATSAPP_URL
*/

/* ============================================================
   ERROR BOUNDARY — Friendly fallback if any component crashes
   ============================================================ */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("App crashed:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback" role="alert">
          <div className="error-fallback-inner">
            <span className="error-fallback-mark">AR</span>
            <h1>Algo inesperado aconteceu.</h1>
            <p>
              Tente recarregar a página. Se o problema persistir, fale com a clínica
              diretamente pelo WhatsApp.
            </p>
            <div className="error-fallback-cta">
              <button onClick={() => location.reload()} className="btn btn-ghost">
                Recarregar
              </button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-whatsapp">
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useReveal();
  const { theme, toggle } = useTheme();
  return (
    <React.Fragment>
      <a href="#main" className="skip-link">Pular para o conteúdo</a>
      <Nav theme={theme} toggleTheme={toggle} />
      <main id="main">
        <Hero />
        <PainSection />
        <TreatmentsSection />
        <AuthoritySection />
        <ConsultorioSection />
        <InterviewSection />
        <CasesSection />
        <TestimonialsSection />
        <IGFeedSection />
        <TrustSection />
        <ProcessSection />
        <MidCTA />
        <LocationSection />
        <FAQSection />
        <ClosingSection />
      </main>
      <Footer />
      <FloatingWA />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ErrorBoundary><App /></ErrorBoundary>);
