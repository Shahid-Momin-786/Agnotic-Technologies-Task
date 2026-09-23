// CtaBanner — uses .cta-section CSS class (dark navy gradient + teal circle ::before)
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section id="cta" className="cta-section section-padding" aria-label="Call to action">
      <div className="content-width" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", marginBottom: "10px" }}>
          Ready to simplify your forklift inspections?
        </h2>
        <p style={{ fontSize: "14px", marginBottom: "32px", lineHeight: 1.65 }}>
          Start with a structured checklist your team can use consistently.
        </p>
        <div className="cta-actions">
          {/* White filled primary button */}
          <Link href="#"
            className="btn"
            style={{ background: "#fff", color: "var(--navy-900)",
                     fontWeight: 700, padding: "10px 20px" }}
          >
            Get the Checklist
          </Link>
          {/* Ghost outlined secondary button */}
          <Link href="#" className="btn" style={{ background: "transparent", color: "#fff", fontWeight: 600 }}>
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  );
}
