import React from "react";
import { SectionHeading } from "../components/core/SectionHeading.jsx";
import { StatBlock } from "../components/content/StatBlock.jsx";
import { TechPill } from "../components/core/TechPill.jsx";
import { Button } from "../components/core/Button.jsx";
import { gsap } from "../lib/gsap.js";
import { useReducedMotion, useIsMobile } from "../hooks/useMediaQuery.js";

const CAPABILITIES = ["Backend Architecture & REST APIs", "AI Engineering (RAG, Agents)", "Full-Stack Web", "Cloud (AWS, Vercel)", "Desktop"];
const TONES = ["mint", "grape", "sky", "lemon", "pink"];

export default function About() {
  const sectionRef = React.useRef(null);
  const photoRef = React.useRef(null);
  const textRef = React.useRef(null);
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set([photoRef.current, textRef.current], { x: 0, opacity: 1 });
        return;
      }
      if (isMobile) {
        // Simpler stacked reveal on mobile — no scroll-scrub parallax.
        gsap.from([photoRef.current, textRef.current], {
          opacity: 0, y: 32, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        });
        return;
      }
      // "Meet in the middle": photo from the left, text from the right,
      // scrubbed to scroll position/direction with differing speeds for depth.
      gsap.fromTo(photoRef.current,
        { x: -180, opacity: 0 },
        { x: 0, opacity: 1, ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top 90%", end: "top 30%", scrub: 0.7 } }
      );
      gsap.fromTo(textRef.current,
        { x: 220, opacity: 0 },
        { x: 0, opacity: 1, ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", end: "top 15%", scrub: 0.9 } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion, isMobile]);

  return (
    <section id="about" ref={sectionRef} style={{ padding: "var(--section-y) var(--gutter)", background: "var(--surface-page)", overflow: "hidden" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1fr)", gap: "clamp(32px,6vw,88px)", alignItems: "center" }} className="gg-about-grid">
        <div ref={photoRef} style={{ position: "relative" }}>
          <img src="/img/glyzel.jpg" alt="Portrait of Glyzel Galagar" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: "var(--radius-2xl)", boxShadow: "var(--shadow-xl)" }} />
          <span style={{ position: "absolute", bottom: -18, left: -18, background: "var(--lemon)", color: "var(--navy-800)", fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", padding: "10px 20px", borderRadius: "var(--radius-pill)", boxShadow: "var(--shadow-md)", transform: "rotate(-6deg)" }}>
            Hi! I am Glyzel
          </span>
        </div>
        <div ref={textRef} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <SectionHeading kicker="Allow me to introduce myself" accentWord="ME" accent="mint" size="var(--text-4xl)">ABOUT</SectionHeading>
          <p style={{ maxWidth: "var(--measure)", margin: 0, fontSize: "var(--text-base)", color: "var(--text-body)" }}>
            I'm a full-stack product engineer who builds end-to-end systems with a founder's mindset. I turn complex engineering into viable products — scalable SaaS platforms, intelligent AI agents and adaptive learning tools designed to solve real-world problems.
          </p>
          <p style={{ maxWidth: "var(--measure)", margin: 0, fontSize: "var(--text-base)", color: "var(--text-body)" }}>
            I've taken three AI-powered platforms from idea to working product on my own, owning every layer along the way: architecture, secure APIs, data, cloud and the interface people actually use. I'm an aspiring startup founder building toward a company of my own, based in Cebu, Philippines, and finishing a BS in Information Technology at the University of Cebu Lapu-Lapu and Mandaue.
          </p>
          <div style={{ display: "flex", gap: "var(--space-8)", flexWrap: "wrap" }}>
            <StatBlock value="11" label="Shipped projects" accent="mint" />
            <StatBlock value="3" label="AI platforms" accent="grape" />
            <StatBlock value="2" label="IT quiz podiums" accent="pink" />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
            {CAPABILITIES.map((s, i) => <TechPill key={s} tone={TONES[i]}>{s}</TechPill>)}
          </div>
          <div><Button variant="primary" as="a" href="#contact" iconAfter={<span aria-hidden="true">↓</span>}>Get in Touch</Button></div>
        </div>
      </div>
    </section>
  );
}
