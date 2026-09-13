import React from "react";

/**
 * Desktop-only gradient cursor: lerped core + trailing glow ring.
 * - Disabled on coarse/touch pointers and prefers-reduced-motion.
 * - Expands + brightens over interactive elements (a, button, [data-cursor-hot]).
 * - Near a tech badge ([data-tech-badge]) the badge gets a slight magnetic pull
 *   toward the cursor and the ring's gradient angle drifts, per the brief.
 */
export function CustomCursor({ size = 14, ringSize = 44, ease = 0.18 }) {
  const coreRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;
    setEnabled(true);
    document.body.classList.add("gg-cursor-on");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const core = { ...target }, ring = { ...target };
    let raf, hot = false, hue = 0;
    const badgeState = new Map(); // el -> {baseX, baseY}

    const move = (e) => {
      target.x = e.clientX; target.y = e.clientY;
      const el = e.target;
      hot = !!(el && el.closest && el.closest("a,button,[data-cursor-hot]"));
    };

    const applyMagnetism = () => {
      const badges = document.querySelectorAll("[data-tech-badge]");
      badges.forEach((badge) => {
        const rect = badge.getBoundingClientRect();
        const bx = rect.left + rect.width / 2;
        const by = rect.top + rect.height / 2;
        const dx = target.x - bx;
        const dy = target.y - by;
        const dist = Math.hypot(dx, dy);
        const radius = 160;
        if (dist < radius) {
          const pull = (1 - dist / radius) * 10;
          const ang = Math.atan2(dy, dx);
          badge.style.setProperty("--gg-magnet-x", `${Math.cos(ang) * pull}px`);
          badge.style.setProperty("--gg-magnet-y", `${Math.sin(ang) * pull}px`);
          badge.dataset.magnetized = "1";
        } else if (badge.dataset.magnetized) {
          badge.style.setProperty("--gg-magnet-x", "0px");
          badge.style.setProperty("--gg-magnet-y", "0px");
          delete badge.dataset.magnetized;
        }
      });
    };

    let frame = 0;
    const tick = () => {
      core.x += (target.x - core.x) * (ease * 2.2);
      core.y += (target.y - core.y) * (ease * 2.2);
      ring.x += (target.x - ring.x) * ease;
      ring.y += (target.y - ring.y) * ease;
      if (coreRef.current && ringRef.current) {
        coreRef.current.style.transform = `translate3d(${core.x}px,${core.y}px,0) translate(-50%,-50%) scale(${hot ? 1.8 : 1})`;
        ringRef.current.style.transform = `translate3d(${ring.x}px,${ring.y}px,0) translate(-50%,-50%) scale(${hot ? 1.35 : 1})`;
        ringRef.current.style.opacity = hot ? 0.85 : 0.45;
        hue = (hue + (hot ? 1.4 : 0.4)) % 360;
        ringRef.current.style.filter = `blur(10px) hue-rotate(${hue}deg)`;
      }
      // Magnetism is cheap enough to run every other frame.
      if (frame % 2 === 0) applyMagnetism();
      frame++;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
      document.body.classList.remove("gg-cursor-on");
      document.querySelectorAll("[data-tech-badge]").forEach((b) => {
        b.style.removeProperty("--gg-magnet-x");
        b.style.removeProperty("--gg-magnet-y");
      });
    };
  }, [ease]);

  if (!enabled) return null;
  const base = { position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999, borderRadius: "var(--radius-pill)", background: "var(--gradient-cursor)" };
  return (
    <>
      <span ref={ringRef} aria-hidden="true" style={{ ...base, width: ringSize, height: ringSize, filter: "blur(10px)", opacity: 0.45, transition: "opacity var(--dur-base) var(--ease-out)" }} />
      <span ref={coreRef} aria-hidden="true" style={{ ...base, width: size, height: size, boxShadow: "var(--glow-cursor)" }} />
    </>
  );
}
