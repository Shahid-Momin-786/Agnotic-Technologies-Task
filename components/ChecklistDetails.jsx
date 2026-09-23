"use client";
// ChecklistDetails — uses .checklist-table, .checklist-row, .status-buttons, .status-btn classes
import { useState } from "react";

/** Pass / Fail / NA button group */
function StatusButtons({ rowId, selected, onChange }) {
  const OPTS = [
    { label: "Pass", activeClass: "btn-pass-active" },
    { label: "Fail", activeClass: "btn-fail-active" },
    { label: "NA",   activeClass: "btn-na-active"   },
  ];
  return (
    <div className="status-buttons">
      {OPTS.map(({ label, activeClass }) => (
        <button
          key={label}
          id={`status-${rowId}-${label.toLowerCase()}`}
          onClick={() => onChange(label)}
          className={`status-btn ${selected === label ? activeClass : ""}`}
          aria-pressed={selected === label}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

/** Amber "Need maintenance" tag using .maintenance-note */
function MaintenanceTag() {
  return (
    <div className="maintenance-note">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
        <path d="M5.5 1.5L1 9.5h9L5.5 1.5z" stroke="var(--warn-amber)" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M5.5 4.8v2M5.5 8h.01"       stroke="var(--warn-amber)" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
      Need maintenance
    </div>
  );
}

const INITIAL_ROWS = [
  { id: 1, name: "Forks and mast",   desc: "Description or sensor of Forks and mast.",           status: "Pass", checked: true,  note: "", warn: false },
  { id: 2, name: "Tires and wheels", desc: "Description or arrangement of Tires and wheels.",     status: "Pass", checked: true,  note: "", warn: false },
  { id: 3, name: "Brakes",           desc: "Description or assertions and dress brakes.",         status: "Pass", checked: true,  note: "", warn: true  },
  { id: 4, name: "Steering",         desc: "Description or steering moments are steering.",       status: "Pass", checked: true,  note: "", warn: false },
  { id: 5, name: "Warning devices",  desc: "Description or arrangement of warning devices.",      status: "Pass", checked: true,  note: "", warn: true  },
];

function ChecklistRow({ row, onToggle, onStatusChange, onNoteChange }) {
  return (
    <div className="checklist-row">
      {/* Col 1: checkbox + name + description */}
      <label className="checklist-item-label" style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={row.checked}
          onChange={() => onToggle(row.id)}
          aria-label={`Check ${row.name}`}
        />
        <div>
          <div className="checklist-title">{row.name}</div>
          <div className="checklist-description">{row.desc}</div>
        </div>
      </label>

      {/* Col 2: Pass / Fail / NA buttons */}
      <div>
        <StatusButtons
          rowId={row.id}
          selected={row.status}
          onChange={s => onStatusChange(row.id, s)}
        />
      </div>

      {/* Col 3: Note textarea + optional maintenance tag */}
      <div>
        <textarea
          value={row.note}
          onChange={e => onNoteChange(row.id, e.target.value)}
          placeholder="Add a note here..."
          rows={2}
          className="form-textarea"
          aria-label={`Note for ${row.name}`}
        />
        {row.warn && <MaintenanceTag />}
      </div>
    </div>
  );
}

export default function ChecklistDetails() {
  const [rows, setRows] = useState(INITIAL_ROWS);

  const toggle       = id => setRows(p => p.map(r => r.id === id ? { ...r, checked: !r.checked } : r));
  const setStatus    = (id, s) => setRows(p => p.map(r => r.id === id ? { ...r, status: s } : r));
  const setNote      = (id, n) => setRows(p => p.map(r => r.id === id ? { ...r, note: n } : r));

  return (
    <section id="whats-included" className="section-soft section-padding">
      <div className="content-width">

        {/* Section heading only — the "What is..." text & callout live in WhatIsSection above */}
        <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", marginBottom: "28px" }}>
          What&apos;s included in the checklist?
        </h2>

        {/* Checklist table */}
        <div className="checklist-table">
          {/* Column headers — hidden on mobile via CSS */}
          <div className="checklist-table-header">
            <span>Item</span>
            <span>Status</span>
            <span>Note</span>
          </div>
          {rows.map(row => (
            <ChecklistRow
              key={row.id}
              row={row}
              onToggle={toggle}
              onStatusChange={setStatus}
              onNoteChange={setNote}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
