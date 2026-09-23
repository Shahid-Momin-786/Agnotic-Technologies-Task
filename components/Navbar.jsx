"use client";
import { useState } from "react";
import Link from "next/link";

/** Blue rounded-square badge logo — matches the reference */
function LogoBadge() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect width="26" height="26" rx="6" fill="#0b5fa5" />
        {/* Checklist dots */}
        <circle cx="8" cy="9"  r="1.4" fill="white" opacity="0.85" />
        <circle cx="8" cy="13" r="1.4" fill="white" opacity="0.85" />
        <circle cx="8" cy="17" r="1.4" fill="white" opacity="0.85" />
        {/* Checkmark */}
        <path d="M12 13.5l2 2 4.5-4.5" stroke="white" strokeWidth="1.9"
              strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontSize: "15px", fontWeight: 800, color: "var(--text-950)", letterSpacing: "-0.01em" }}>
        InspectPro
      </span>
    </div>
  );
}

function ChevronDown({ open }) {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
         style={{ transition: "transform 200ms ease", transform: open ? "rotate(180deg)" : "none" }}
         aria-hidden="true">
      <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ResourcesDropdown() {
  return (
    <div style={{
      position: "absolute", top: "calc(100% + 8px)", left: "50%",
      transform: "translateX(-50%)", width: "210px",
      background: "#fff", border: "1px solid var(--border-100)",
      borderRadius: "12px", boxShadow: "var(--shadow-md)",
      padding: "6px", zIndex: 50,
    }}>
      {[
        { label: "Blog",        desc: "Tips & best practices" },
        { label: "Templates",   desc: "Ready-to-use checklists" },
        { label: "Help Center", desc: "Guides & support docs" },
        { label: "API",         desc: "Developer reference" },
      ].map(({ label, desc }) => (
        <Link key={label} href="#"
          style={{ display: "flex", flexDirection: "column", gap: "2px",
                   padding: "9px 12px", borderRadius: "8px",
                   transition: "background 140ms ease" }}
          onMouseEnter={e => e.currentTarget.style.background = "var(--bg-soft)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-800)" }}>{label}</span>
          <span style={{ fontSize: "11px", color: "var(--text-400)" }}>{desc}</span>
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav">

        {/* Left side: Logo + Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          <Link href="/" aria-label="InspectPro home">
            <LogoBadge />
          </Link>

          {/* Desktop nav links */}
          <div className="nav-links">
            <Link href="#features">Products</Link>
            <Link href="#use-cases">Solutions</Link>

            {/* Resources dropdown */}
            <div style={{ position: "relative" }}>
              <button
                id="resources-btn"
                onClick={() => setResourcesOpen(v => !v)}
                onBlur={() => setTimeout(() => setResourcesOpen(false), 160)}
                style={{ display: "flex", alignItems: "center", gap: "6px",
                         background: "none", border: "none", padding: 0,
                         fontSize: "14px", fontWeight: 700,
                         color: "var(--text-800)", cursor: "pointer",
                         transition: "color 160ms ease" }}
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
              >
                Resources <ChevronDown open={resourcesOpen} />
              </button>
              {resourcesOpen && <ResourcesDropdown />}
            </div>

            <Link href="#">Pricing</Link>
          </div>
        </div>

        {/* Desktop auth + CTA */}
        <div className="nav-actions">
          <Link href="#" className="nav-links" style={{ fontWeight: 700, fontSize: "14px", marginRight: "8px" }}>
            Login
          </Link>
          <Link href="#" className="btn btn-primary" style={{ minHeight: "40px", padding: "0 18px", fontSize: "14px" }}>
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
          style={{ display: "none", padding: "6px", background: "none", border: "none",
                   color: "var(--text-700)" }}
          className="md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen
              ? <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              : <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
          </svg>
        </button>

      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ borderTop: "1px solid var(--border-100)", padding: "12px 20px 20px",
                      display: "flex", flexDirection: "column", gap: "4px" }}>
          {["Products", "Solutions", "Resources", "Pricing", "Login"].map(item => (
            <Link key={item} href="#" onClick={() => setMobileOpen(false)}
              style={{ padding: "11px 0", fontSize: "14px", fontWeight: 600,
                       color: "var(--text-800)", borderBottom: "1px solid var(--border-100)" }}>
              {item}
            </Link>
          ))}
          <Link href="#" onClick={() => setMobileOpen(false)}
            className="btn btn-primary" style={{ marginTop: "10px", textAlign: "center" }}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
