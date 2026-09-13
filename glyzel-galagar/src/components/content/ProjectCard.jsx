import React from "react";
import { Link } from "react-router-dom";
import { TechPill } from "../core/TechPill.jsx";

const TABS = { pink: "var(--bubblegum)", mint: "var(--mint)", lemon: "var(--lemon)", grape: "var(--grape)", sky: "var(--sky)", purple: "var(--grape)", yellow: "var(--lemon)", orange: "#F97316" };

export function ProjectCard({ slug, title, tagline, tech = [], year, accent = "pink", stacked = 0 }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Link to={`/projects/${slug}`} data-cursor-hot=""
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", display: "block", textDecoration: "none", paddingTop: 14,
        transform: hover ? "translateY(-8px) rotate(0deg)" : `rotate(${stacked}deg)`,
        transition: "transform var(--dur-slow) var(--ease-bounce)",
      }}>
      <span style={{ position: "absolute", top: 0, left: 26, width: 96, height: 26, borderRadius: "var(--radius-sm) var(--radius-sm) 0 0", background: TABS[accent] || TABS.pink }} />
      <div style={{
        position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between",
        gap: "var(--space-5)", minHeight: 210, padding: "var(--space-5)",
        background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-card)", boxShadow: hover ? "var(--shadow-xl)" : "var(--shadow-md)",
        transition: "box-shadow var(--dur-base) var(--ease-out)",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--text-heading)", margin: 0 }}>{title}</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: "var(--leading-normal)", margin: 0 }}>{tagline}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-1)" }}>
            {[...new Set(tech)].map((t) => <TechPill key={`${slug}-${t}`} tone={accent} techKey={t} />)}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-body)", fontSize: "var(--text-2xs)", fontWeight: "var(--weight-bold)", color: "var(--text-muted)" }}>
            <span>{year}</span>
            <span style={{ color: TABS[accent] || TABS.pink, transform: hover ? "translateX(4px)" : "none", transition: "transform var(--dur-base) var(--ease-bounce)" }}>View project →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
