import React from "react";

const SIZE = { sm: 34, md: 44, lg: 54 };

export function IconButton({ children, label, size = "md", variant = "outline", as = "button", ...rest }) {
  const [hover, setHover] = React.useState(false);
  const solid = variant === "solid";
  const Tag = as;
  return (
    <Tag
      aria-label={label}
      data-cursor-hot=""
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: SIZE[size], height: SIZE[size], display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-md)", cursor: "pointer",
        background: solid ? "var(--action-primary)" : hover ? "var(--surface-sunken)" : "var(--surface-card)",
        color: solid ? "var(--text-inverse)" : "var(--text-heading)",
        border: solid ? "1px solid var(--action-primary)" : "1.5px solid var(--border-subtle)",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        fontSize: size === "sm" ? 14 : 17,
        transform: hover ? "translateY(var(--lift-hover)) rotate(-3deg)" : "none",
        transition: "transform var(--dur-base) var(--ease-bounce), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)",
      }}
      {...rest}
    >{children}</Tag>
  );
}
