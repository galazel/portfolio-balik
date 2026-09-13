import React from "react";

export function Textarea({ label, hint, id, rows = 4, error, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `ta-${label || "field"}`.replace(/\s+/g, "-").toLowerCase();
  return (
    <label htmlFor={fieldId} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      {label && <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-2xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>}
      <textarea id={fieldId} rows={rows}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--text-heading)",
          padding: "12px 16px", background: "var(--surface-card)", borderRadius: "var(--radius-md)",
          border: `1.5px solid ${error ? "var(--bubblegum)" : focus ? "var(--action-focus)" : "var(--border-strong)"}`,
          boxShadow: focus ? "0 0 0 4px var(--grape-soft)" : "none", outline: "none", resize: "vertical",
          lineHeight: "var(--leading-normal)",
          transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
        }}
        {...rest} />
      {(error || hint) && <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-3xs)", color: error ? "var(--bubblegum)" : "var(--text-muted)" }}>{error || hint}</span>}
    </label>
  );
}
