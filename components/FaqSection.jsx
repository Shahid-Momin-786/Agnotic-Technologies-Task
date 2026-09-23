"use client";
// FaqSection — uses .faq-item, .faq-question, .faq-answer CSS classes
import { useState } from "react";

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        {question}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
             style={{ flexShrink: 0, transition: "transform 220ms ease",
                      transform: isOpen ? "rotate(180deg)" : "none" }}
             aria-hidden="true">
          <path d="M2.5 5l4.5 4.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {/* max-height transition for smooth accordion */}
      <div style={{
        overflow: "hidden",
        maxHeight: isOpen ? "200px" : "0",
        opacity: isOpen ? 1 : 0,
        transition: "max-height 300ms ease, opacity 250ms ease",
      }}>
        <div className="faq-answer">{answer}</div>
      </div>
    </div>
  );
}

const FAQ = [
  { id: 1, q: "What should be checked during a forklift inspection?",
    a: "A standard forklift inspection should cover forks and mast condition, tires and wheels, brakes, steering, warning devices (horn, lights), engine oil, hydraulic fluid, and battery condition." },
  { id: 2, q: "How often should a forklift be inspected?",
    a: "OSHA requires forklifts to be inspected before each shift. If a forklift is used around the clock, it should be inspected at least once every 8 hours." },
  { id: 3, q: "Can this checklist be used for daily inspections?",
    a: "Yes — the checklist is specifically designed for daily pre-shift forklift inspections. It is printable and available digitally on any device." },
  { id: 4, q: "What should I do if I find a defect?",
    a: "Mark the item as Fail and add a maintenance note. Remove the forklift from service and notify your supervisor or maintenance team." },
  { id: 5, q: "Can I customize the checklist?",
    a: "Absolutely. InspectPro allows you to add custom checklist items, rename existing ones, and create templates for different forklift models or facility types." },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="section-soft section-padding"
             style={{ borderTop: "1px solid var(--border-200)" }}>
      <div className="content-width" style={{ maxWidth: "760px" }}>
        <div style={{ textAlign: "left", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "clamp(26px, 5vw, 32px)", fontWeight: 800, color: "var(--navy-900)" }}>FAQ</h2>
        </div>

        <div className="faq-container">
          {FAQ.map(faq => (
            <AccordionItem
              key={faq.id}
              question={faq.q}
              answer={faq.a}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(p => p === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
