import React from "react";

const TINTS = { none: "var(--surface-card)", pink: "var(--bubblegum-soft)", mint: "var(--mint-soft)", lemon: "var(--lemon-soft)", grape: "var(--grape-soft)", sky: "var(--sky-soft)" };

export function Card({ children, tint = "none", interactive, padding = "var(--space-5)", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: TINTS[tint] || TINTS.none, padding, borderRadius: "var(--radius-card)",
        border: "1px solid var(--border-subtle)", boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-4px)" : "none", cursor: interactive ? "pointer" : "default",
        transition: "transform var(--dur-base) var(--ease-bounce), box-shadow var(--dur-base) var(--ease-out)",
        ...style,
      }}
      {...rest}
    >{children}</div>
  );
}
