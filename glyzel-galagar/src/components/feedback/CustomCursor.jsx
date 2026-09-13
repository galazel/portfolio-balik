import React from "react";

// Lollipop geometry, in a 48×48 SVG box. The candy centre is the click point.
const BOX = 48;
const CX = 16;
const CY = 16;
const R = 13;
const CANDY = ["var(--bubblegum)", "var(--lemon)", "var(--sky)", "var(--grape)", "var(--mint)", "var(--bubblegum)", "var(--lemon)", "var(--sky)"];

const WEDGES = CANDY.map((fill, i) => {
  const a0 = (i / CANDY.length) * Math.PI * 2;
  const a1 = ((i + 1) / CANDY.length) * Math.PI * 2;
  const p = (a) => `${(CX + R * Math.cos(a)).toFixed(2)} ${(CY + R * Math.sin(a)).toFixed(2)}`;
  return { fill, d: `M ${CX} ${CY} L ${p(a0)} A ${R} ${R} 0 0 1 ${p(a1)} Z` };
});

// White Archimedean spiral drawn over the wedges for the classic swirl.
const SWIRL = (() => {
  const pts = [];
  for (let t = 0; t <= Math.PI * 5.2; t += 0.2) {
    const r = (t / (Math.PI * 5.2)) * (R - 1.5);
    pts.push(`${(CX + r * Math.cos(t)).toFixed(2)} ${(CY + r * Math.sin(t)).toFixed(2)}`);
  }
  return `M ${pts.join(" L ")}`;
})();

/**
 * Desktop-only lollipop cursor: lerped candy + trailing glow ring.
 * - Disabled on coarse/touch pointers and prefers-reduced-motion.
 * - Over interactive elements (a, button, [data-cursor-hot]) the lollipop
 *   grows and the candy spins faster.
 * - Near a tech badge ([data-tech-badge]) the badge gets a slight magnetic pull
 *   toward the cursor and the ring's gradient angle drifts.
 */
export function CustomCursor({ ringSize = 44, ease = 0.18 }) {
  const popRef = React.useRef(null);
  const candyRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;
    setEnabled(true);
    document.body.classList.add("gg-cursor-on");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pop = { ...target }, ring = { ...target };
    let raf, hot = false, hue = 0, spin = 0, scale = 1;

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
      pop.x += (target.x - pop.x) * (ease * 2.2);
      pop.y += (target.y - pop.y) * (ease * 2.2);
      ring.x += (target.x - ring.x) * ease;
      ring.y += (target.y - ring.y) * ease;
      scale += ((hot ? 1.3 : 1) - scale) * 0.2;
      spin = (spin + (hot ? 6 : 1.5)) % 360;
      if (popRef.current && ringRef.current && candyRef.current) {
        popRef.current.style.transform = `translate3d(${pop.x - CX}px,${pop.y - CY}px,0) scale(${scale})`;
        candyRef.current.setAttribute("transform", `rotate(${spin} ${CX} ${CY})`);
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
  const fixed = { position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999 };
  return (
    <>
      <span ref={ringRef} aria-hidden="true" style={{ ...fixed, width: ringSize, height: ringSize, borderRadius: "var(--radius-pill)", background: "var(--gradient-cursor)", filter: "blur(10px)", opacity: 0.45, transition: "opacity var(--dur-base) var(--ease-out)" }} />
      <svg
        ref={popRef}
        data-lollipop-cursor=""
        aria-hidden="true"
        width={BOX}
        height={BOX}
        viewBox={`0 0 ${BOX} ${BOX}`}
        style={{ ...fixed, overflow: "visible", transformOrigin: `${CX}px ${CY}px`, filter: "drop-shadow(0 3px 5px rgba(10,31,68,.28))" }}
      >
        {/* Stick: outline first, then the paper-white core. */}
        <line x1={CX + 6} y1={CY + 6} x2={44} y2={44} stroke="var(--mist-300)" strokeWidth="6" strokeLinecap="round" />
        <line x1={CX + 6} y1={CY + 6} x2={44} y2={44} style={{ stroke: "var(--paper)" }} strokeWidth="3.6" strokeLinecap="round" />
        <g ref={candyRef}>
          {WEDGES.map((w, i) => <path key={i} d={w.d} style={{ fill: w.fill }} />)}
          <path d={SWIRL} fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.7" strokeLinecap="round" />
        </g>
        <circle cx={CX} cy={CY} r={R} fill="none" style={{ stroke: "var(--navy-800)" }} strokeWidth="1.5" />
        {/* Glossy highlight stays put while the candy spins. */}
        <ellipse cx={CX - 4.5} cy={CY - 5} rx="3.2" ry="1.8" fill="#fff" fillOpacity="0.75" transform={`rotate(-35 ${CX - 4.5} ${CY - 5})`} />
      </svg>
    </>
  );
}
