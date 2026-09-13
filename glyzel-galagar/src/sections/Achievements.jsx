import React from "react";
import { SectionHeading } from "../components/core/SectionHeading.jsx";
import { TimelineEntry } from "../components/content/TimelineEntry.jsx";
import { AWARDS } from "../data.js";
import { gsap } from "../lib/gsap.js";
import { useReducedMotion } from "../hooks/useMediaQuery.js";

export default function Achievements() {
  const sectionRef = React.useRef(null);
  const gridRef = React.useRef(null);
  const reducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        opacity: 0, y: 28, duration: 0.6, stagger: 0.08, ease: "back.out(1.6)",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="achievements" ref={sectionRef} style={{ padding: "var(--section-y) var(--gutter)", background: "var(--surface-sunken)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
        <SectionHeading kicker="Recognition & growth" accentWord="ACHIEVEMENTS" accent="lemon" size="var(--text-4xl)">MY</SectionHeading>
        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "var(--space-4)" }}>
          {AWARDS.map((a) => <TimelineEntry key={a.title} {...a} />)}
        </div>
      </div>
    </section>
  );
}
