"use client";
// ChecklistCard — uses semantic .checklist-preview CSS classes from the theme
import { useState, useEffect } from "react";

/** Empty checkbox square for the left side of each row */
function CheckboxIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="var(--border-300)" strokeWidth="1.2" />
    </svg>
  );
}

/** Green tick circle using .icon-check CSS class */
function GreenTick() {
  return (
    <span className="icon-check" aria-hidden="true">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5.5l2 2 4-4" stroke="var(--pass-green)" strokeWidth="1.7"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Amber warning pill with triangle and "NA" text */
function WarnPill() {
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      padding: "2px 6px",
      borderRadius: "5px",
      backgroundColor: "var(--warn-bg)",
      color: "var(--warn-amber)",
      fontSize: "10px",
      fontWeight: 800,
      flexShrink: 0
    }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M5 1.2L1 8.8h8L5 1.2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M5 4.5v2M5 7.5h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      NA
    </span>
  );
}

/** Document / note icon — far-right of each row */
function NoteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect x="2" y="1.5" width="10" height="11" rx="1.5" stroke="var(--border-300)" strokeWidth="1.1" />
      <path d="M4.5 5h5M4.5 7.5h3.5" stroke="var(--border-300)" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

/** Always-gray "NA" pill using .pill-na CSS class */
function NaPill() {
  return <span className="pill-na" style={{ padding: "2px 6px" }}>NA</span>;
}

const ROWS = [
  { id: 1, name: "Forks and mast", isAlert: false },
  { id: 2, name: "Tires and wheels", isAlert: false },
  { id: 3, name: "Brakes", isAlert: true },
  { id: 4, name: "Steering", isAlert: false },
  { id: 5, name: "Warning devices", isAlert: true },
  { id: 6, name: "Lights", isAlert: false },
];

export default function ChecklistCard() {
  const [rows, setRows] = useState(ROWS);
  const [barReady, setBarReady] = useState(false);

  // Animate progress bar from 0 → 60% on mount
  useEffect(() => {
    const t = setTimeout(() => setBarReady(true), 150);
    return () => clearTimeout(t);
  }, []);

  // Clicking the checkbox toggles the alert state (just to show interactivity)
  function toggleAlert(id) {
    setRows(prev => prev.map(r => r.id === id ? { ...r, isAlert: !r.isAlert } : r));
  }

  return (
    /* .checklist-preview gives white card, border, shadow-lg, hover lift */
    <div className="checklist-preview">

      {/* Header */}
      <div className="checklist-preview-header" style={{ padding: "10px 14px", fontSize: "12px", borderBottom: "1px solid var(--border-100)" }}>
        Inspection Checklist
      </div>

      {/* Rows — each uses .checklist-preview-row grid (14px 1fr auto auto auto) */}
      {rows.map(row => (
        <div key={row.id} className="checklist-preview-row">
          {/* Col 1: Empty checkbox (clickable) */}
          <button
            onClick={() => toggleAlert(row.id)}
            style={{ background: "none", border: "none", padding: 0, lineHeight: 0, cursor: "pointer" }}
            aria-label={`Toggle status for ${row.name}`}
          >
            <CheckboxIcon />
          </button>

          {/* Col 2: Item name */}
          <span style={{
            fontSize: "11px", fontWeight: 600, color: "var(--text-900)",
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
          }}>
            {row.name}
          </span>

          {/* Col 3: Green tick (always visible) */}
          <GreenTick />

          {/* Col 4: Gray NA pill OR Amber Warn pill */}
          <div style={{ minWidth: "48px", display: "flex", justifyContent: "flex-end" }}>
            {row.isAlert ? <WarnPill /> : <NaPill />}
          </div>

          {/* Col 5: Note/document icon */}
          <NoteIcon />
        </div>
      ))}

      {/* Progress footer */}
      <div className="checklist-preview-footer" style={{ padding: "6px 14px 12px" }}>
        {/* Right-aligned "6/10 completed" label only */}
        <div className="checklist-preview-label" style={{ marginBottom: "4px", fontSize: "9px" }}>
          6/10 completed
        </div>
        {/* Bar animates from 0% → 60% on mount, 3-4px thin */}
        <div className="checklist-preview-bar" style={{ height: "3px" }}>
          <div
            className="checklist-preview-bar-fill"
            style={{ width: barReady ? "60%" : "0%" }}
            role="progressbar"
            aria-valuenow={6}
            aria-valuemin={0}
            aria-valuemax={10}
          />
        </div>
      </div>

    </div>
  );
}
