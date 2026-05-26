/* global React, ReactDOM,
   Nav, Hero, useReveal, useTheme,
   PainSection, TreatmentsSection, AuthoritySection,
   CasesSection, TestimonialsSection, IGFeedSection,
   TrustSection, ProcessSection, MidCTA,
   LocationSection, FAQSection, ClosingSection, Footer, FloatingWA
*/

function App() {
  useReveal();
  const { theme, toggle } = useTheme();
  return (
    <React.Fragment>
      <Nav theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <PainSection />
        <TreatmentsSection />
        <AuthoritySection />
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
root.render(<App />);
