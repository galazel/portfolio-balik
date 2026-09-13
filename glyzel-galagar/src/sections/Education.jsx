import React from "react";
import { SectionHeading } from "../components/core/SectionHeading.jsx";
import { TimelineEntry } from "../components/content/TimelineEntry.jsx";
import { EDUCATION } from "../data.js";
import { gsap } from "../lib/gsap.js";
import { useReducedMotion } from "../hooks/useMediaQuery.js";

export default function Education() {
  const sectionRef = React.useRef(null);
  const listRef = React.useRef(null);
  const reducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(listRef.current.children, {
        opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "back.out(1.6)",
        scrollTrigger: { trigger: listRef.current, start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="education" ref={sectionRef} style={{ padding: "var(--section-y) var(--gutter)", background: "var(--surface-page)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
        <SectionHeading kicker="Where I've studied" accentWord="EDUCATION" accent="mint" size="var(--text-4xl)">MY</SectionHeading>
        <div ref={listRef} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", maxWidth: 880 }}>
          {EDUCATION.map((e) => <TimelineEntry key={e.title} {...e} />)}
        </div>
      </div>
    </section>
  );
}
