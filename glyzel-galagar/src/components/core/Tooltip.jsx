import React from "react";

export function Tooltip({ children, content, side = "top" }) {
  const [open, setOpen] = React.useState(false);
  const pos = side === "bottom" ? { top: "calc(100% + 8px)" } : { bottom: "calc(100% + 8px)" };
  return (
    <span style={{ position: "relative", display: "inline-flex" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      <span role="tooltip" style={{
        position: "absolute", left: "50%", ...pos,
        transform: `translateX(-50%) translateY(${open ? 0 : side === "bottom" ? -4 : 4}px) scale(${open ? 1 : 0.9})`,
        opacity: open ? 1 : 0, pointerEvents: "none",
        background: "var(--surface-inverse)", color: "var(--text-inverse)",
        fontFamily: "var(--font-body)", fontSize: "var(--text-3xs)", fontWeight: "var(--weight-semibold)",
        padding: "6px 10px", borderRadius: "var(--radius-sm)", whiteSpace: "nowrap", boxShadow: "var(--shadow-md)",
        transition: "opacity var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-bounce)",
      }}>{content}</span>
    </span>
  );
}
