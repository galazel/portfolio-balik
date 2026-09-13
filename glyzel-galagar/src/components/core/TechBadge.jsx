import React from "react";

export const TechBadge = React.forwardRef(function TechBadge(
  { label, iconSrc, rotate = 0, scale = 1, opacity = 1, floating, iconOnly = false, style },
  ref
) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      ref={ref}
      data-cursor-hot=""
      data-tech-badge=""
      title={iconOnly ? label : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)",
        padding: iconOnly ? 0 : "8px 14px", borderRadius: iconOnly ? "var(--radius-lg)" : "var(--radius-badge)",
        width: iconOnly ? "var(--badge-tile)" : undefined, height: iconOnly ? "var(--badge-tile)" : undefined,
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
      {iconSrc && (
        <img src={iconSrc} alt="" style={{
          width: iconOnly ? "calc(var(--badge-tile) * 0.56)" : 16,
          height: iconOnly ? "calc(var(--badge-tile) * 0.56)" : 16,
          objectFit: "contain",
        }} />
      )}
      {!iconOnly && label}
    </span>
  );
});
