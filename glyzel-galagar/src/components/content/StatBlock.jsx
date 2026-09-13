import React from "react";

const COLORS = { pink: "var(--bubblegum)", mint: "var(--mint)", lemon: "#B98900", grape: "var(--grape)", sky: "#0284C7" };

export function StatBlock({ value, label, accent = "pink" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", lineHeight: "var(--leading-tight)", color: COLORS[accent] }}>{value}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-2xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>
    </div>
  );
}
