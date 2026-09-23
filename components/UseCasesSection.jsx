// UseCasesSection — .section-white, .use-case-grid, .use-case-card, .use-case-icon

const WarehouseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 11l9-7 9 7v10H3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M8 21v-8h8v8" fill="var(--teal-100)" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <rect x="10" y="17" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <rect x="10" y="13" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const ConstructionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M19 18v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M17 18V8a2 2 0 00-2-2h-3L8 9v9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M8 12L3 8l2-2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 8v2l3 2" fill="var(--teal-100)" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="19" r="2" fill="var(--teal-100)" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="8" cy="19" r="2" fill="var(--teal-100)" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const GearIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M2 21V9l5 3 5-3 5 3 5-3v12H2z" fill="var(--teal-100)" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M17 9V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M6 16h2M11 16h2M16 16h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const USE_CASES = [
  { icon: <WarehouseIcon />,    title: "Warehouse operations",
    description: "Warehouse operations in warehouse operations and few-shorten operations in warehouse operations." },
  { icon: <ConstructionIcon />, title: "Construction sites",
    description: "Construction sites support and construction sites w an manufacturing facilities." },
  { icon: <GearIcon />,         title: "Manufacturing facilities",
    description: "Manufacturing facilities are conservativeshows and solutions for manufacturing facilities." },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="section-white section-padding"
             style={{ borderTop: "1px solid var(--border-100)" }}>
      <div className="content-width">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, color: "var(--navy-900)" }}>
            Built for teams that inspect equipment every day
          </h2>
        </div>
        <div className="use-case-grid">
          {USE_CASES.map(uc => (
            <div key={uc.title} className="use-case-card">
              <div className="use-case-icon">{uc.icon}</div>
              <h3>{uc.title}</h3>
              <p>{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
