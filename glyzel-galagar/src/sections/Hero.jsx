import React from "react";
import { gsap } from "../lib/gsap.js";
import { TechBadge } from "../components/core/TechBadge.jsx";
import { Button } from "../components/core/Button.jsx";
import { TECH_HERO, HERO_SPOTS } from "../data.js";
import { useReducedMotion, useIsTouch } from "../hooks/useMediaQuery.js";

export default function Hero({ onViewProjects }) {
  const rootRef = React.useRef(null);
  const bgLayerRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const rolesRef = React.useRef(null);
  const ctaRef = React.useRef(null);
  const badgeRefs = React.useRef([]);
  badgeRefs.current = [];

  const reducedMotion = useReducedMotion();
  const isTouch = useIsTouch();

  React.useEffect(() => {
    let onMove = null;
    const ctx = gsap.context(() => {
      // Staggered entrance: name → role labels → CTA → background badges.
      const tl = gsap.timeline({ defaults: { ease: reducedMotion ? "none" : "back.out(1.4)" } });
      if (reducedMotion) {
        tl.set([nameRef.current, rolesRef.current, ctaRef.current, ...badgeRefs.current], { opacity: 1, y: 0 });
      } else {
        tl.from(nameRef.current, { opacity: 0, y: 40, duration: 0.9 })
          .from(rolesRef.current, { opacity: 0, y: 24, duration: 0.7 }, "-=0.45")
          .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.4")
          .from(badgeRefs.current, { opacity: 0, scale: 0.4, duration: 0.6, stagger: 0.04, ease: "back.out(2)" }, "-=0.5");
      }

      if (isTouch || reducedMotion) return;

      // Mouse-driven parallax on the whole background layer (small magnitude).
      const layerX = gsap.quickTo(bgLayerRef.current, "x", { duration: 0.6, ease: "power3.out" });
      const layerY = gsap.quickTo(bgLayerRef.current, "y", { duration: 0.6, ease: "power3.out" });

      // Per-badge proximity: nearest badges scale up / tilt toward the cursor.
      const badgeMotion = badgeRefs.current.map((el) => ({
        el,
        x: gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" }),
        scale: gsap.quickTo(el, "scale", { duration: 0.35, ease: "power3.out" }),
      }));

      const PROX_RADIUS = 170;
      onMove = (e) => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        layerX(((e.clientX - cx) / cx) * -14);
        layerY(((e.clientY - cy) / cy) * -10);

        badgeMotion.forEach(({ el, x, y, scale }) => {
          const rect = el.getBoundingClientRect();
          const bx = rect.left + rect.width / 2;
          const by = rect.top + rect.height / 2;
          const dx = e.clientX - bx;
          const dy = e.clientY - by;
          const dist = Math.hypot(dx, dy);
          if (dist < PROX_RADIUS) {
            const pull = (1 - dist / PROX_RADIUS);
            const ang = Math.atan2(dy, dx);
            x(Math.cos(ang) * pull * 12);
            y(Math.sin(ang) * pull * 12);
            scale(1 + pull * 0.18);
          } else {
            x(0); y(0); scale(1);
          }
        });
      };
      window.addEventListener("pointermove", onMove);
    }, rootRef);

    return () => {
      if (onMove) window.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, [reducedMotion, isTouch]);

  return (
    <section
      ref={rootRef}
      style={{
        position: "relative", minHeight: "100vh", display: "flex",
        alignItems: "center", justifyContent: "center", overflow: "hidden",
        background: "var(--surface-page)", padding: "var(--gutter)",
      }}
    >
      <div ref={bgLayerRef} aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
        {TECH_HERO.map((t, i) => {
          const spot = HERO_SPOTS[i] || { x: 50, y: 50, r: 0 };
          const pos = spot.right !== undefined ? { right: spot.right + "%" } : { left: spot.x + "%" };
          return (
            <span key={t.label} style={{ position: "absolute", ...pos, top: spot.y + "%" }}>
              <span style={{ display: "inline-block", animation: `gg-float ${5 + (i % 5)}s var(--ease-out) ${i * 0.2}s infinite alternate` }}>
                <span ref={(el) => el && badgeRefs.current.push(el)} style={{ display: "inline-block" }}>
                  <TechBadge
                    iconOnly
                    label={t.label}
                    iconSrc={`/tech/${t.icon}`}
                    rotate={spot.r || 0}
                    opacity={0.95 - (i % 4) * 0.08}
                  />
                </span>
              </span>
            </span>
          );
        })}
      </div>

      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-6)", textAlign: "center", maxWidth: 1000, zIndex: 10 }}>
        <h1 ref={nameRef} style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-hero)", color: "var(--text-heading)", lineHeight: "var(--leading-tight)", margin: 0 }}>
          Glyzel Galagar
        </h1>
        <div ref={rolesRef} style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", flexWrap: "wrap", justifyContent: "center", fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          <span>Backend Developer</span>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--bubblegum)" }} />
          <span>Full-Stack Developer</span>
        </div>
        <div ref={ctaRef} style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center", marginBottom: "clamp(0px,calc((100vh - 600px) / 4),60px)" }}>
          <Button variant="accent" size="lg" iconAfter={<span aria-hidden="true">→</span>} onClick={onViewProjects}>View Projects</Button>
          <Button variant="outline" size="lg" as="a" href="/Glyzel_Galagar_Resume.pdf" download="Glyzel_Galagar_Resume.pdf" iconAfter={<span aria-hidden="true">↓</span>}>Download Resume</Button>
        </div>
      </div>
    </section>
  );
}
