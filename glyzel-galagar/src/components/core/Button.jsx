import React from "react";

const PAD = { sm: "8px 16px", md: "12px 22px", lg: "16px 30px" };
const FS = { sm: "var(--text-xs)", md: "var(--text-sm)", lg: "var(--text-base)" };

const VARIANTS = {
  primary: { background: "var(--action-primary)", color: "var(--text-inverse)", border: "1px solid var(--action-primary)", boxShadow: "var(--shadow-md)" },
  accent: { background: "var(--action-accent)", color: "var(--text-inverse)", border: "1px solid var(--action-accent)", boxShadow: "var(--shadow-candy-pink)" },
  outline: { background: "transparent", color: "var(--text-heading)", border: "1.5px solid var(--border-strong)", boxShadow: "none" },
  ghost: { background: "transparent", color: "var(--text-heading)", border: "1.5px solid transparent", boxShadow: "none" },
};

export function Button({ children, variant = "primary", size = "md", icon, iconAfter, disabled, fullWidth, as = "button", ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = as;
  return (
    <Tag
      disabled={Tag === "button" ? disabled : undefined}
      data-cursor-hot=""
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex", width: fullWidth ? "100%" : "auto",
        alignItems: "center", justifyContent: "center", gap: "var(--space-2)",
        fontFamily: "var(--font-body)", fontWeight: "var(--weight-bold)", fontSize: FS[size],
        letterSpacing: "var(--tracking-tight)", padding: PAD[size], borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
        textDecoration: "none", lineHeight: 1.1, ...v,
        background: hover && !disabled && variant === "primary" ? "var(--action-primary-hover)"
          : hover && !disabled && variant === "accent" ? "var(--action-accent-hover)"
          : hover && !disabled && (variant === "outline" || variant === "ghost") ? "var(--surface-sunken)" : v.background,
        transform: disabled ? "none" : press ? "scale(var(--press-scale))" : hover ? "translateY(var(--lift-hover))" : "none",
        transition: "transform var(--dur-base) var(--ease-bounce), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      }}
      {...rest}
    >
      {icon}{children}{iconAfter}
    </Tag>
  );
}
