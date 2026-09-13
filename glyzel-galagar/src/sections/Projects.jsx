import React from "react";
import { SectionHeading } from "../components/core/SectionHeading.jsx";
import { ProjectCard } from "../components/content/ProjectCard.jsx";
import { PROJECTS } from "../data.js";
import { gsap } from "../lib/gsap.js";
import { useReducedMotion } from "../hooks/useMediaQuery.js";

// Note: the design was iterated from a swipeable fanned card-stack to a flat
// responsive grid of all 11 projects (see chats/chat1.md) — this follows that
// final, user-approved direction rather than the original stack-pattern brief.
export default function Projects() {
  const sectionRef = React.useRef(null);
  const gridRef = React.useRef(null);
  const reducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      const cards = gridRef.current.children;
      gsap.from(cards, {
        opacity: 0, y: 36, duration: 0.6, stagger: 0.08, ease: "back.out(1.6)",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: "var(--section-y) var(--gutter)", background: "var(--surface-sunken)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
        <SectionHeading kicker="All projects" accentWord="PROJECTS" accent="pink" size="var(--text-4xl)">MY</SectionHeading>
        <div ref={gridRef} className="gg-projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "var(--space-4)" }}>
          {PROJECTS.map((p) => <ProjectCard key={p.slug} {...p} />)}
        </div>
      </div>
    </section>
  );
}
