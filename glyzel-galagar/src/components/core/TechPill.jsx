import React from "react";

const ICON_MAP = {
  react: "/tech/react.png",
  "spring boot": "/tech/spring-boot.png",
  python: "/tech/python.png",
  postgres: "/tech/postgres.png",
  postgresql: "/tech/postgres.png",
  java: "/tech/java.png",
  aws: "/tech/aws.png",
  docker: "/tech/docker.png",
  git: "/tech/git.png",
  github: "/tech/github.png",
  js: "/tech/js.png",
  javascript: "/tech/js.png",
  html: "/tech/html.png",
  css: "/tech/css.png",
  tailwind: "/tech/tailwind.png",
  "tailwind css": "/tech/tailwind.png",
  mysql: "/tech/mysql.png",
};

const TONES = { neutral: ["var(--surface-sunken)", "var(--text-body)"], pink: ["var(--bubblegum-soft)", "#B32167"], mint: ["var(--mint-soft)", "#0E7355"], lemon: ["var(--lemon-soft)", "#8A6400"], grape: ["var(--grape-soft)", "#5B21B6"], sky: ["var(--sky-soft)", "#075985"] };

export function TechPill({ children, tone = "neutral", iconSrc, size = "md", techKey }) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  const sm = size === "sm";
  const icon = iconSrc || (techKey ? ICON_MAP[techKey.toLowerCase()] : null);
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: icon ? "4px" : "var(--space-2)",
      background: icon ? "transparent" : bg, color: fg, fontFamily: "var(--font-body)", fontWeight: "var(--weight-semibold)",
      fontSize: sm ? "var(--text-3xs)" : "var(--text-2xs)", padding: icon ? "4px" : (sm ? "3px 9px" : "5px 12px"),
      borderRadius: icon ? "var(--radius-md)" : "var(--radius-pill)", whiteSpace: "nowrap", lineHeight: 1.4,
    }}>
      {icon ? <img src={icon} alt={children ?? techKey} style={{ width: sm ? 16 : 20, height: sm ? 16 : 20, objectFit: "contain" }} title={children ?? techKey} /> : null}
      {!icon && (children ?? techKey)}
    </span>
  );
}
