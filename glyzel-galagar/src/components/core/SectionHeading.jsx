import React from "react";

const ACCENTS = { pink: "var(--bubblegum)", mint: "var(--mint)", lemon: "#B98900", grape: "var(--grape)", sky: "#0284C7" };

export function SectionHeading({ children, accentWord, accent = "pink", kicker, align = "left", size = "var(--text-3xl)" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", textAlign: align, alignItems: align === "center" ? "center" : "flex-start" }}>
      {kicker && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-2xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{kicker}</span>
      )}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: size, color: "var(--text-heading)", lineHeight: "var(--leading-tight)", margin: 0 }}>
        {children}{accentWord ? <> <span style={{ color: ACCENTS[accent] }}>{accentWord}</span></> : null}
      </h2>
    </div>
  );
}
