// LogoStrip — uses .trust-section, .trust-logos, .trust-logo CSS classes

const ApexIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20L12 4l8 16" />
    <path d="M12 11l-3 6h6z" fill="currentColor" stroke="none" />
  </svg>
);

const SterlingIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l-8 4v2l8-4 8 4v-2l-8-4z" fill="currentColor" stroke="none" />
    <path d="M4 11v2l8 4 8-4v-2l-8 4-8-4z" fill="currentColor" stroke="none" />
    <path d="M4 15v2l8 4 8-4v-2l-8 4-8-4z" fill="currentColor" stroke="none" />
  </svg>
);

const BuildRightIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="14" width="4.5" height="8" rx="1" />
    <rect x="10" y="9" width="4.5" height="13" rx="1" />
    <rect x="16" y="4" width="4.5" height="18" rx="1" />
  </svg>
);

const GlobalIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 16.5h20M2 7.5h20" />
  </svg>
);

const PrimeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M4 4h9a4 4 0 0 1 0 8H4" />
    <path d="M4 16h7" />
    <path d="M4 20h4" />
    <path d="M4 4v16" />
  </svg>
);

const LOGOS = [
  { icon: <ApexIcon />, name: "Apex", sub: "Logistics" },
  { icon: <SterlingIcon />, name: "Sterling", sub: "Manufacturing" },
  { icon: <BuildRightIcon />, name: "BuildRight", sub: "Construction" },
  { icon: <GlobalIcon />, name: "Global", sub: "Warehousing Solutions" },
  { icon: <PrimeIcon />, name: "Prime", sub: "Distribution" },
];

export default function LogoStrip() {
  return (
    <section className="trust-section">
      <div className="content-width">
        <p className="trust-title">
          Trusted by teams that need consistent inspections
        </p>
        <div className="trust-logos">
          {LOGOS.map(({ icon, name, sub }) => (
            <div key={name} className="trust-logo">
              <div className="trust-logo-icon">
                {icon}
              </div>
              <div style={{ lineHeight: 1.15 }}>
                <div style={{ fontSize: "14px", fontWeight: 800 }}>{name}</div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#3B5262" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
