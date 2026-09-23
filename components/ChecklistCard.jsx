"use client";
// ChecklistCard is interactive — Pass/Fail/NA buttons update state
import { useState } from "react";

/** Status options available for each checklist row */
const STATUS_OPTIONS = ["Pass", "Fail", "NA"];

/** Color classes for each selected status button */
const STATUS_STYLES = {
  Pass: "bg-green-600 text-white",
  Fail: "bg-red-600 text-white",
  NA:   "bg-gray-400 text-white",
};

/** Default (unselected) button style */
const STATUS_DEFAULT = "bg-gray-100 text-gray-500 hover:bg-gray-200";

/** CheckIcon shown in each row */
function CheckIcon({ color = "#16a34a" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.15" />
      <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** AlertIcon for warning rows */
function AlertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#f59e0b" fillOpacity="0.2" />
      <path d="M8 5v4M8 11h.01" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** EditIcon (pencil) on right side of each row */
function EditIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M9.5 2.5l2 2L5 11H3V9l6.5-6.5z"
        stroke="#9ca3af"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A single checklist row with item name + status badge + edit icon */
function ChecklistRow({ item, status, isAlert, onStatusChange }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      {/* Left: icon + item name */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {isAlert ? <AlertIcon /> : <CheckIcon />}
        <span className="text-xs font-medium text-gray-700 truncate">{item}</span>
      </div>

      {/* Right: NA badge + edit icon */}
      <div className="flex items-center gap-2 ml-2">
        {/* Compact status badge (matches the design's small pill) */}
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded cursor-pointer transition-colors ${
            status ? STATUS_STYLES[status] : "bg-gray-100 text-gray-400"
          }`}
          onClick={() => {
            // Cycle through statuses on click for this compact view
            const next = status
              ? STATUS_OPTIONS[(STATUS_OPTIONS.indexOf(status) + 1) % STATUS_OPTIONS.length]
              : "NA";
            onStatusChange(next);
          }}
          role="button"
          aria-label={`Status: ${status || "None"}. Click to change.`}
        >
          {status || "NA"}
        </span>
        <EditIcon />
      </div>
    </div>
  );
}

/** Progress bar component */
function ProgressBar({ completed, total }) {
  const pct = Math.round((completed / total) * 100);
  return (
    <div className="mt-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-500">Progress</span>
        <span className="text-xs font-semibold text-blue-700">{completed}/{total} completed</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

/** The initial checklist items for the hero card */
const INITIAL_ITEMS = [
  { id: 1, item: "Forks and mast",    status: "NA",   isAlert: false },
  { id: 2, item: "Tires and wheels",  status: "NA",   isAlert: false },
  { id: 3, item: "Brakes",            status: "Fail", isAlert: true  },
  { id: 4, item: "Steering",          status: "NA",   isAlert: false },
  { id: 5, item: "Warning devices",   status: "NA",   isAlert: false },
  { id: 6, item: "Lights",            status: "NA",   isAlert: false },
];

/**
 * ChecklistCard — the floating card UI shown in the hero section.
 * Uses local state to track Pass/Fail/NA for each row.
 */
export default function ChecklistCard() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  // Update a single row's status
  function updateStatus(id, newStatus) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  }

  // Count rows that are "Pass" as "completed" for the progress bar
  const completedCount = items.filter((i) => i.status === "Pass").length + 4; // offset to match design's "6/10"

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-full max-w-sm">
      {/* Card header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gray-900">Inspection Checklist</h3>
        <span className="text-xs text-gray-400">Daily</span>
      </div>

      {/* Checklist rows */}
      <div>
        {items.map((row) => (
          <ChecklistRow
            key={row.id}
            item={row.item}
            status={row.status}
            isAlert={row.isAlert}
            onStatusChange={(newStatus) => updateStatus(row.id, newStatus)}
          />
        ))}
      </div>

      {/* Progress bar */}
      <ProgressBar completed={completedCount} total={10} />
    </div>
  );
}
