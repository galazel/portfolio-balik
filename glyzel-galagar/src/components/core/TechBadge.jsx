import React from "react";

export const TechBadge = React.forwardRef(function TechBadge(
  { label, iconSrc, rotate = 0, scale = 1, opacity = 1, floating, style },
  ref
) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      ref={ref}
      data-cursor-hot=""
      data-tech-badge=""
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "var(--space-2)",
        padding: "8px 14px", borderRadius: "var(--radius-badge)",
        background: "var(--surface-translucent)", backdropFilter: "blur(8px)",
        border: "1px solid var(--border-subtle)", boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-badge)",
        fontFamily: "var(--font-body)", fontSize: "var(--text-2xs)", fontWeight: "var(--weight-bold)",
        color: "var(--text-heading)", opacity, whiteSpace: "nowrap",
        transform: `translate(var(--gg-magnet-x, 0px), var(--gg-magnet-y, 0px)) rotate(${hover ? 0 : rotate}deg) scale(${hover ? scale * 1.1 : scale})`,
        animation: floating ? "gg-float 6s var(--ease-out) infinite alternate" : "none",
        transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        ...style,
      }}
    >
      {iconSrc && <img src={iconSrc} alt="" style={{ width: 16, height: 16, objectFit: "contain" }} />}
      {label}
    </span>
  );
});
