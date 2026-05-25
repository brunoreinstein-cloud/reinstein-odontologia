/* global React, ReactDOM,
   Nav, Hero, useReveal,
   PainSection, TreatmentsSection, AuthoritySection, PortfolioSection, TrustSection, ProcessSection, MidCTA,
   LocationSection, FAQSection, ClosingSection, Footer, FloatingWA
*/

function App() {
  useReveal();
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <PainSection />
        <TreatmentsSection />
        <AuthoritySection />
        <PortfolioSection />
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
