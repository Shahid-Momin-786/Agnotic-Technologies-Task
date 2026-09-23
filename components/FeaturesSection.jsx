// FeaturesSection — white background, 4-column .feature-grid
import FeatureCard from "./FeatureCard";

const ClipboardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="3" width="13" height="18" rx="2" fill="var(--teal-100)" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M10 3v18" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M4 6h4M4 12h4M4 18h4" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M13 8h3M13 12h3M13 16h3" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l8.5 15a1 1 0 01-.85 1.5H4.35a1 1 0 01-.85-1.5L12 3z" fill="var(--teal-100)" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M12 9v5M12 17h.01" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const FolderIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8l-5-6z" fill="var(--teal-100)" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M14 2v6h5" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M9 13h6M9 17h6M9 9h2" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const CheckSquareIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" fill="var(--teal-100)" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M3 12l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" fill="none" stroke="var(--teal-700)" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const FEATURES = [
  { icon: <ClipboardIcon />, title: "Standardize inspections",
    description: "Standardize inspections consistent, inspections, standardizes, and printers for the equipment inspectors." },
  { icon: <SearchIcon />,    title: "Identify issues early",
    description: "Identify issues early for resource and consistent, standardized, and experience records organized." },
  { icon: <FolderIcon />,    title: "Keep inspection records organized",
    description: "Keep inspection records organized, and printers records organized." },
  { icon: <CheckSquareIcon />, title: "Give teams a simple process to follow",
    description: "Give teams a simple process measurement process to follow." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-white section-padding">
      <div className="content-width">
        {/* Centered header */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Make every forklift inspection consistent
          </h2>
          <p style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.6, color: "var(--text-700)" }}>
            Make sure forklift unassessment consistent and inspections prenders
            for the equipment inspectors.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map(f => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
