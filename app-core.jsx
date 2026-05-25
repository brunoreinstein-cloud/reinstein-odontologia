/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   Shared icons
   ============================================================ */
const Icon = {
  Whatsapp: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.7-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5 1.8.8 2.5.8 3.4.7.5-.1 1.6-.7 1.8-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.2zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.5c1.5.9 3.3 1.4 5.1 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.2-.4-4.5-1.3l-.3-.2-3.3 1 1-3.2-.2-.3c-1-1.4-1.4-3.1-1.4-4.8C3.3 7.4 7.2 3.5 12 3.5s8.7 3.9 8.7 8.7-3.9 8.6-8.7 8.6z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  ),
  Arrow: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="13 6 19 12 13 18"/>
    </svg>
  ),
  ArrowDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <polyline points="6 13 12 19 18 13"/>
    </svg>
  ),
  Plus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="6" y1="12" x2="18" y2="12"/>
      <line x1="12" y1="6" x2="12" y2="18"/>
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="8" x2="20" y2="8"/>
      <line x1="4" y1="16" x2="20" y2="16"/>
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18"/>
      <line x1="18" y1="6" x2="6" y2="18"/>
    </svg>
  ),
  Pin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"/>
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <polyline points="12 7 12 12 15 14"/>
    </svg>
  ),
  Tooth: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8 2 5 4.5 5 8c0 2 .8 3.4 1.2 5 .4 1.8.5 4 .8 6 .3 1.8 1 3 2 3 .9 0 1.3-1.2 1.8-3 .3-1.2.5-2.5 1.2-2.5s.9 1.3 1.2 2.5c.5 1.8.9 3 1.8 3 1 0 1.7-1.2 2-3 .3-2 .4-4.2.8-6C18.2 11.4 19 10 19 8c0-3.5-3-6-7-6z"/>
    </svg>
  ),
  Implant: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l4 4v3H8V7l4-4z"/>
      <line x1="12" y1="11" x2="12" y2="21"/>
      <line x1="10" y1="13" x2="14" y2="13"/>
      <line x1="10" y1="16" x2="14" y2="16"/>
      <line x1="10" y1="19" x2="14" y2="19"/>
    </svg>
  ),
  Sparkle: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/>
      <path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z"/>
    </svg>
  ),
  Smile: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      <line x1="9" y1="9" x2="9.01" y2="9"/>
      <line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  Layers: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 22 8.5 12 15 2 8.5 12 2"/>
      <polyline points="2 15.5 12 22 22 15.5"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="5 12 10 17 19 8"/>
    </svg>
  ),
  Sun: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  ),
  Moon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
    </svg>
  ),
};

/* ============================================================
   Constants
   ============================================================ */
const WHATSAPP_URL = "https://wa.me/5551998563574?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";
const INSTAGRAM_URL = "https://www.instagram.com/dr.andersonreinstein/";
const THEME_KEY = "ar-theme";

/* ============================================================
   Theme
   ============================================================ */
function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  // Honor a pre-paint script that may have already set data-theme
  const fromDOM = document.documentElement.getAttribute("data-theme");
  if (fromDOM === "light" || fromDOM === "dark") return fromDOM;
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch (_) { /* storage may be blocked */ }
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
  }, [theme]);

  // Sync with system changes when user has no explicit preference
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      try {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored) return; // user explicitly chose a theme
      } catch (_) {}
      setTheme(e.matches ? "dark" : "light");
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

function ThemeToggle({ theme, toggle, className = "" }) {
  const label = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? <Icon.Sun /> : <Icon.Moon />}
    </button>
  );
}

/* ============================================================
   Reveal-on-scroll hook
   ============================================================ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============================================================
   NAV
   ============================================================ */
function Nav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open && toggleRef.current) toggleRef.current.focus();
  }, [open]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "#tratamentos", label: "Tratamentos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#processo", label: "Atendimento" },
    { href: "#localizacao", label: "Onde estamos" },
    { href: "#faq", label: "Dúvidas" },
  ];

  return (
    <React.Fragment>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="brand" aria-label="Dr. Anderson Reinstein — início">
            <span className="brand-mark">AR</span>
            <span className="brand-text">
              Dr. Anderson Reinstein
              <small>Odontologia Estética · 15 anos</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Principal">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="nav-cta">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-primary">
              Agendar avaliação <Icon.Arrow />
            </a>
            <button
              ref={toggleRef}
              className="nav-toggle"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon.Menu />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
        {...(!open ? { inert: "" } : {})}
      >
        <div className="mobile-menu-top">
          <span className="brand">
            <span className="brand-mark">AR</span>
            <span className="brand-text">
              Dr. Anderson Reinstein
              <small>CRO 17951</small>
            </span>
          </span>
          <div className="mobile-menu-actions">
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <button className="nav-toggle" onClick={() => setOpen(false)} aria-label="Fechar menu">
              <Icon.Close />
            </button>
          </div>
        </div>
        <div className="mobile-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-whatsapp" onClick={() => setOpen(false)}>
          <Icon.Whatsapp /> Falar pelo WhatsApp
        </a>
      </div>
    </React.Fragment>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="reveal in">
          <div className="hero-badges">
            <span className="badge"><span className="badge-dot" /> 15 anos de prática clínica</span>
            <span className="badge"><span className="badge-dot" /> Cachoeirinha · Porto Alegre</span>
          </div>
          <h1>
            Sorrisos planejados com técnica, arte e <em>naturalidade</em>.
          </h1>
          <p className="hero-sub">
            Odontologia estética, lentes cerâmicas e reabilitação oral — com planejamento
            individual para cada caso. Cada plano nasce do encontro entre a história do
            paciente, suas expectativas e a técnica certa para o sorriso.
          </p>
          <div className="hero-cta">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-whatsapp">
              <Icon.Whatsapp /> Agendar avaliação
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="btn btn-ghost">
              <Icon.Instagram /> Ver trabalhos no Instagram
            </a>
          </div>
          <div className="hero-credentials">
            <div className="credential-portrait" aria-hidden="true">
              <span>retrato<br/>do dr.</span>
            </div>
            <div className="credential-info">
              <strong>Dr. Anderson Rocha Reinstein</strong>
              <span>Cirurgião-dentista · CRO 17951</span>
              <span>Especialista em Prótese Dentária e Implantes · MBA em Gestão em Saúde</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-2">
          <div className="hero-placeholder">
            <span>foto profissional · consultório clínico</span>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <strong>15</strong>
            <span className="hero-stamp-label">anos</span>
            <span className="hero-stamp-sub">de prática clínica</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Icon, Nav, Hero, ThemeToggle, useReveal, useTheme,
  WHATSAPP_URL, INSTAGRAM_URL,
});
