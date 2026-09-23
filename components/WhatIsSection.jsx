// WhatIsSection — "What is a Forklift Inspection Checklist?"
// Appears between LogoStrip and ChecklistDetails in the reference design.
// Two-column layout: description text on left, info callout box on right.

export default function WhatIsSection() {
  return (
    <section className="section-white section-padding"
             style={{ borderTop: "1px solid var(--border-100)" }}>
      <div className="content-width">

        {/* Section heading */}
        <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", marginBottom: "20px" }}>
          What is a Forklift Inspection Checklist?
        </h2>

        {/* Two-column row: text left, callout right */}
        <div className="whatis-grid">
          {/* Left: body text */}
          <div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, marginBottom: "14px" }}>
              Forklift Inspection Checklist sets teams perform prestament safety on
              and morell inspection are safety and compliance.
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
              Forklift inspection set benefits concern restore safety and compliance
              our sinplotor requirement.
            </p>
          </div>

          {/* Right: regulatory info callout using .info-callout */}
          <div className="info-callout">
            <div className="info-callout-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 7.5v4M8 5.5h.01"
                      stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <p>
              Key inspectonos are alerts is concerning being regulatory requirements
              are cost to{" "}
              <strong style={{ color: "var(--text-800)" }}>regulatory requirements.</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
