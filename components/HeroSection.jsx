// HeroSection is a Server Component — no interactivity at this level.
// The interactive ChecklistCard is imported as a Client Component.
import Link from "next/link";
import ChecklistCard from "./ChecklistCard";

/** Arrow right icon for secondary CTA */
function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left Column: Copy ── */}
          <div className="flex-1 max-w-xl">
            {/* Eyebrow label */}
            <p className="text-xs font-bold tracking-widest text-blue-700 uppercase mb-4">
              Forklift Safety
            </p>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Forklift Inspection Checklist
            </h1>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-md">
              This checklist helps you teams perform consistent inspections and
              identify issues before their equipment is used.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-5">
              <Link
                href="#checklist"
                className="inline-flex items-center bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
              >
                Get the Checklist
              </Link>
              <Link
                href="#whats-included"
                className="inline-flex items-center text-blue-700 font-semibold text-sm px-6 py-3 rounded-lg border-2 border-blue-200 hover:bg-blue-50 transition-colors"
              >
                See What&apos;s Included <ArrowRightIcon />
              </Link>
            </div>

            {/* Caption line */}
            <p className="text-xs text-gray-400">
              Ready-to-use checklist for daily forklift inspections
            </p>
          </div>

          {/* ── Right Column: Interactive Card ── */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            {/* Decorative background blob */}
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl -z-10" />
              {/*
                ChecklistCard is a "use client" component.
                It's safe to import directly — Next.js handles the boundary.
              */}
              <ChecklistCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
