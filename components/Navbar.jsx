"use client";
// Navbar has a dropdown — needs client-side state for open/close
import { useState } from "react";
import Link from "next/link";

/** Small shield/checkmark logo SVG */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Shield icon */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 2L4 6v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V6L14 2z"
          fill="#1d4ed8"
        />
        <path
          d="M10 14l3 3 5-5"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-bold text-gray-900 tracking-tight">
        InspectPro
      </span>
    </div>
  );
}

/** Chevron icon for dropdown indicator */
function ChevronDown({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Resources mega-dropdown content */
function ResourcesDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
      {[
        { label: "Blog", desc: "Tips & articles" },
        { label: "Templates", desc: "Ready-to-use checklists" },
        { label: "Help Center", desc: "Docs & support" },
        { label: "API", desc: "Developer docs" },
      ].map(({ label, desc }) => (
        <Link
          key={label}
          href="#"
          className="flex flex-col px-4 py-2.5 hover:bg-blue-50 transition-colors"
        >
          <span className="text-sm font-medium text-gray-800">{label}</span>
          <span className="text-xs text-gray-500">{desc}</span>
        </Link>
      ))}
    </div>
  );
}

/** Mobile menu */
function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b border-gray-100 shadow-lg z-40 px-4 pb-4">
      <nav className="flex flex-col gap-1 pt-2">
        {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
          <Link
            key={item}
            href="#"
            onClick={onClose}
            className="text-gray-700 font-medium py-2.5 border-b border-gray-50 hover:text-blue-700 transition-colors"
          >
            {item}
          </Link>
        ))}
        <Link
          href="#"
          onClick={onClose}
          className="text-gray-700 font-medium py-2.5 border-b border-gray-50 hover:text-blue-700 transition-colors"
        >
          Login
        </Link>
        <Link
          href="#"
          onClick={onClose}
          className="mt-2 bg-blue-700 text-white text-center rounded-full py-2.5 font-semibold hover:bg-blue-800 transition-colors"
        >
          Get Started
        </Link>
      </nav>
    </div>
  );
}

export default function Navbar() {
  // Controls the Resources dropdown visibility
  const [resourcesOpen, setResourcesOpen] = useState(false);
  // Controls mobile hamburger menu
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <Link href="/" aria-label="InspectPro home">
            <Logo />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </Link>
            <Link href="#use-cases" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Solutions
            </Link>

            {/* Resources with dropdown */}
            <div className="relative">
              <button
                id="resources-menu-btn"
                onClick={() => setResourcesOpen((v) => !v)}
                onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
              >
                Resources <ChevronDown open={resourcesOpen} />
              </button>
              {resourcesOpen && <ResourcesDropdown />}
            </div>

            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
          </nav>

          {/* ── Desktop Auth ── */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </Link>
            <Link
              href="#"
              className="bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-800 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
