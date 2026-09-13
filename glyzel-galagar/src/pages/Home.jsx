import React from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import OtherDetails from "../sections/OtherDetails.jsx";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function jumpTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const location = useLocation();
  const [active, setActive] = React.useState(null);

  // Coming back from a project detail page via "Back to projects" (/#projects)
  // should land on that section, not the top of the page.
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => jumpTo(id));
    }
  }, [location.hash]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero onViewProjects={() => jumpTo("projects")} />
      <About />
      <Projects />
      <OtherDetails />
      <nav className="dock" aria-label="Section navigation">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? "active" : ""}
            onClick={(e) => { e.preventDefault(); jumpTo(s.id); }}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </>
  );
}
