// HeroSection — uses .hero CSS class for two-tone teal background + diagonal ::after
import Link from "next/link";
import ChecklistCard from "./ChecklistCard";
import LogoStrip from "./LogoStrip";

export default function HeroSection() {
  return (
    /*
      .hero class provides:
        - light teal gradient base (edf5f6 → d7ebef)
        - ::after pseudo-element = dark teal diagonal on far right (186b7d → 216c7c)
          clipped with polygon(38% 0, 100% 0, 100% 100%, 0 100%, 0 28%)
    */
    <section className="hero">
      {/* Wrap top section in relative container to constrain dark panel height */}
      <div className="hero-top" style={{ position: "relative" }}>
        {/* The dark teal diagonal shape on the far-right of the hero. */}
        <div className="hero-dark-panel" />

        <div className="content-width">
          {/*
            .hero-inner: CSS Grid, 2 cols (1fr auto), centers card vertically.
            Card auto-column positions it at the right edge where the ::after diagonal begins.
          */}
          <div className="hero-inner">

            {/* ── LEFT: hero copy ── */}
            <div style={{ position: "relative", top: "-5px" }}>
              <p className="eyebrow">Forklift Safety</p>

              <h1 className="hero-title">
                Forklift Inspection<br />Checklist
              </h1>

              <p className="hero-description">
                This checklist helps you teams perform consistent inspections and
                identify issues before their equipment is used.
              </p>

              <div className="hero-actions">
                <Link href="#whats-included" className="btn btn-primary">
                  Get the Checklist
                </Link>
                <Link href="#whats-included" className="btn btn-secondary">
                  See What&apos;s Included
                </Link>
              </div>

              <p className="hero-caption">
                Ready-to-use checklist for daily forklift inspections
              </p>
            </div>

            {/*
              ── RIGHT: ChecklistCard ──
              .checklist-preview has position:relative; z-index:2 so it renders
              above the dark teal panel.
              The card's natural position in the grid column places it
              at the boundary between the light and dark backgrounds.
            */}
            <ChecklistCard />

          </div>
        </div>
      </div>

      {/* Trust logos within the same section to inherit the background color */}
      <LogoStrip />
    </section>
  );
}
