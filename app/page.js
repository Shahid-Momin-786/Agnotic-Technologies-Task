// app/page.js — Main page (Server Component)
// Sections ordered exactly as in the reference design image.
// "use client" is ONLY inside individual interactive components, never here.

import Navbar          from "@/components/Navbar";
import HeroSection     from "@/components/HeroSection";
import WhatIsSection   from "@/components/WhatIsSection";
import ChecklistDetails from "@/components/ChecklistDetails";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks      from "@/components/HowItWorks";
import UseCasesSection from "@/components/UseCasesSection";
import FaqSection      from "@/components/FaqSection";
import CtaBanner       from "@/components/CtaBanner";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <main className="page-shell">

      {/* 1. Sticky navigation bar */}
      <Navbar />

      {/* 2. Hero — eyebrow + heading + CTAs on left, interactive checklist card on right */}
      <HeroSection />

      {/* 4. "What is a Forklift Inspection Checklist?" — text + regulatory callout box */}
      <WhatIsSection />

      {/* 5. "What's included in the checklist?" — interactive rows with Pass/Fail/NA */}
      <ChecklistDetails />

      {/* 6. "Make every forklift inspection consistent" — 4-column feature cards */}
      <FeaturesSection />

      {/* 7. "How It Works" — 3 numbered steps */}
      <HowItWorks />

      {/* 8. "Built for teams that inspect equipment every day" — 3 use-case cards */}
      <UseCasesSection />

      {/* 9. FAQ accordion — expand/collapse */}
      <FaqSection />

      {/* 10. Dark navy CTA banner */}
      <CtaBanner />

      {/* 11. Footer — brand + 4 link columns + copyright bar */}
      <Footer />

    </main>
  );
}
