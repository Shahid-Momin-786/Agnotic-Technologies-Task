"use client";
import { useState } from "react";

const COLS = [
  { heading: "Product",   links: ["Features", "Templates", "Integrations"] },
  { heading: "Solutions", links: ["By Industry", "By Role"] },
  { heading: "Resources", links: ["Blog", "Help Center", "API"] },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <footer className="site-footer">
      <div className="content-width section-padding" style={{ paddingTop: "52px", paddingBottom: "12px" }}>

        {/* Main grid: brand + 4 link columns */}
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-brand">
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <rect width="26" height="26" rx="6" fill="#0b5fa5" />
                <circle cx="8" cy="9"  r="1.4" fill="white" opacity="0.85" />
                <circle cx="8" cy="13" r="1.4" fill="white" opacity="0.85" />
                <circle cx="8" cy="17" r="1.4" fill="white" opacity="0.85" />
                <path d="M12 13.5l2 2 4.5-4.5" stroke="white" strokeWidth="1.9"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: "14px", fontWeight: 800, color: "#fff" }}>InspectPro</span>
            </div>
            <p style={{ fontSize: "12px", lineHeight: 1.65, color: "#b7c9d1", margin: 0 }}>
              InspectPro is a relevant company consistent assessment inspections on a flictost Board company.
            </p>
          </div>

          {/* Link columns */}
          {COLS.map((col, idx) => (
            <div key={col.heading} className="footer-col">
              <h4 className="footer-col-header" onClick={() => setOpenIndex(prev => prev === idx ? null : idx)}>
                {col.heading}
                <svg className="footer-col-chevron" width="12" height="12" viewBox="0 0 14 14" fill="none"
                     style={{ transform: openIndex === idx ? "rotate(180deg)" : "none" }}>
                  <path d="M2.5 5l4.5 4.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </h4>
              <div className={`footer-links-wrapper ${openIndex === idx ? "open" : ""}`}>
                {col.links.map(link => (
                  <a key={link} href="#" className="footer-link">{link}</a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Column */}
          <div className="footer-col footer-contact">
            <h4 className="footer-col-header" style={{ cursor: "default" }}>Contact</h4>
            <div className="footer-links-wrapper open">
              <a href="#" className="footer-link">+000 000 0000</a>
              <a href="#" className="footer-link">+000 000 0000</a>
              <a href="#" className="footer-link" style={{ textTransform: "lowercase" }}>info@inspectpro.com</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>InspectPro · Sitemap · Taxonomy</span>
          <span>© Copyright Abex &amp; 2024</span>
        </div>

      </div>
    </footer>
  );
}
