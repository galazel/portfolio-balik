import React from "react";
import { SectionHeading } from "../components/core/SectionHeading.jsx";
import { Input } from "../components/forms/Input.jsx";
import { Textarea } from "../components/forms/Textarea.jsx";
import { Button } from "../components/core/Button.jsx";
import { Card } from "../components/core/Card.jsx";

const CONTACT_EMAIL = "glyzelgalagar27@gmail.com";
const GITHUB_HANDLE = "github.com/galazel";

const label = { fontFamily: "var(--font-body)", fontSize: "var(--text-2xs)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)" };
const value = { fontFamily: "var(--font-body)", fontSize: "var(--text-base)", fontWeight: "var(--weight-semibold)", color: "var(--text-heading)", margin: 0, overflowWrap: "anywhere" };

function Detail({ title, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
      <span style={label}>{title}</span>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sent, setSent] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: "var(--section-y) var(--gutter)", background: "var(--surface-page)" }}>
      <div className="gg-contact-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)", gap: "clamp(32px,6vw,88px)", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <SectionHeading kicker="Let's build something" accentWord="TOUCH" accent="grape" size="var(--text-4xl)">GET IN</SectionHeading>
          <p style={{ margin: 0, maxWidth: "var(--measure)", fontSize: "var(--text-base)", color: "var(--text-body)" }}>
            Hiring for a full-stack or AI role, or building something new? Send a message and let's talk.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <Detail title="Email">
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ ...value, color: "var(--text-link)" }}>{CONTACT_EMAIL}</a>
            </Detail>
            <Detail title="GitHub">
              <a href={`https://${GITHUB_HANDLE}`} target="_blank" rel="noreferrer" style={{ ...value, color: "var(--text-link)", display: "inline-flex", alignItems: "center", gap: "var(--space-2)" }}>
                <img src="/tech/github.png" alt="" style={{ width: 18, height: 18 }} />{GITHUB_HANDLE}
              </a>
            </Detail>
            <Detail title="Based in">
              <p style={value}>Cebu, Philippines</p>
            </Detail>
          </div>
          <div>
            <Button variant="outline" as="a" href="/Glyzel_Galagar_Resume.pdf" download="Glyzel_Galagar_Resume.pdf" iconAfter={<span aria-hidden="true">↓</span>}>
              Download Resume
            </Button>
          </div>
        </div>

        <Card padding="var(--space-6)" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <h4 style={{ fontSize: "var(--text-lg)" }}>Send a message</h4>
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Input label="Name" placeholder="Juan Dela Cruz" required value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
            <Input label="Email" type="email" placeholder="you@company.com" required value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
            <Textarea label="Message" rows={5} placeholder="Tell me what you're building." hint="I reply within a day or two." required
              value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} />
            <Button variant="accent" fullWidth type="submit">{sent ? "Opening your email…" : "Send message"}</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
