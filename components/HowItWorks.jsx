// HowItWorks — uses .how-it-works (teal-soft bg), .steps-grid, .step, .step-number

const ListIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M8 13h8M8 17h8M8 9h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const MagnifyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.7" />
    <path d="M14.5 14.5L20 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M8 10.5l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22 11V8a2 2 0 0 0-2-2h-8L10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <circle cx="17" cy="17" r="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    <path d="M17 14.5v2.5l1.5 1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const STEPS = [
  { number: "01", icon: <ListIcon />,    title: "Choose your checklist",       description: "Choose your checklist to account 01 — Choose your checklist." },
  { number: "02", icon: <MagnifyIcon />, title: "Complete the inspection",     description: "Complete the inspector the inspection and complete the inspection." },
  { number: "03", icon: <ChartIcon />,   title: "Record and act on findings",  description: "Record the process and consent and esent — record and act on findings." },
];

function Step({ number, icon, title, description }) {
  return (
    <div className="step">
      {/* Teal icon box using .step-icon */}
      <div className="step-icon">{icon}</div>
      {/* "01 —" label using .step-number CSS class */}
      <div className="step-number">
        <strong>{number}</strong>
        <span className="step-number-dash" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works section-padding">
      <div className="content-width">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--navy-900)" }}>How It Works</h2>
        </div>
        <div className="steps-grid">
          {STEPS.map(s => <Step key={s.number} {...s} />)}
        </div>
      </div>
    </section>
  );
}
