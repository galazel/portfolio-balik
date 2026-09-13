import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "../components/core/Button.jsx";
import { TechPill } from "../components/core/TechPill.jsx";
import { Card } from "../components/core/Card.jsx";
import { PROJECTS } from "../data.js";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  if (i === -1) return <Navigate to="/" replace />;

  const p = PROJECTS[i];
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <article style={{ padding: "var(--space-8) var(--gutter) var(--space-11)", background: "var(--surface-page)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
        <Button as={Link} to="/#projects" variant="ghost" size="sm" icon={<span aria-hidden="true">←</span>}>
          Back to projects
        </Button>

        <header style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-2xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{p.year}</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-4xl)", margin: 0 }}>{p.title}</h1>
          <p style={{ margin: 0, fontSize: "var(--text-lg)", color: "var(--text-body)", maxWidth: "var(--measure)" }}>{p.tagline}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
            {p.tech.map((t) => <TechPill key={t} tone={p.accent} techKey={t}>{t}</TechPill>)}
          </div>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "var(--space-6)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <h4 style={{ fontSize: "var(--text-lg)" }}>What it does</h4>
            <p style={{ margin: 0, color: "var(--text-body)", fontSize: "var(--text-sm)" }}>{p.description}</p>
            <h4 style={{ fontSize: "var(--text-lg)", marginTop: "var(--space-3)" }}>What I built</h4>
            <ul style={{ margin: 0, paddingLeft: 20, listStyle: "disc", color: "var(--text-body)", fontSize: "var(--text-sm)", display: "flex", flexDirection: "column", gap: 6 }}>
              {p.built.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Card tint="lemon" padding="var(--space-5)">
              <h4 style={{ fontSize: "var(--text-base)", marginBottom: 6 }}>Tech stack</h4>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-body)" }}>{p.tech.join(" · ")}</p>
            </Card>
            {p.repo && (
              <div>
                <Button as="a" href={p.repo} target="_blank" rel="noreferrer" variant="primary" iconAfter={<span aria-hidden="true">↗</span>}>
                  View on GitHub
                </Button>
              </div>
            )}
          </div>
        </div>

        <nav aria-label="Other projects" style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--border-subtle)", flexWrap: "wrap" }}>
          <Button as={Link} to={`/projects/${prev.slug}`} variant="outline" size="sm" icon={<span aria-hidden="true">←</span>}>{prev.title}</Button>
          <Button as={Link} to={`/projects/${next.slug}`} variant="outline" size="sm" iconAfter={<span aria-hidden="true">→</span>}>{next.title}</Button>
        </nav>
      </div>
    </article>
  );
}
