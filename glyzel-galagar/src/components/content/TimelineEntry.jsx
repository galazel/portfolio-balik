import React from "react";

const DOTS = { pink: "var(--bubblegum)", mint: "var(--mint)", lemon: "var(--lemon)", grape: "var(--grape)", sky: "var(--sky)" };

export function TimelineEntry({ title, org, date, tag, accent = "mint" }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", gap: "var(--space-4)", alignItems: "flex-start", justifyContent: "space-between",
        padding: "var(--space-4) var(--space-5)", background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transition: "box-shadow var(--dur-base) var(--ease-out)", flexWrap: "wrap",
      }}>
      <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", minWidth: 0 }}>
        <span style={{ width: 10, height: 10, borderRadius: "var(--radius-pill)", background: DOTS[accent], marginTop: 7, flex: "0 0 auto" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", minWidth: 0 }}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-sm)", color: "var(--text-heading)", margin: 0 }}>{title}</p>
          {org && <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--text-muted)", margin: 0 }}>{org}</p>}
          {tag && <span style={{ width: "fit-content", marginTop: 4, background: "var(--mint-soft)", color: "#0E7355", fontSize: "var(--text-3xs)", fontWeight: "var(--weight-bold)", padding: "3px 10px", borderRadius: "var(--radius-pill)" }}>{tag}</span>}
        </div>
      </div>
      {date && <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--text-muted)", margin: 0, whiteSpace: "nowrap" }}>{date}</p>}
    </div>
  );
}
