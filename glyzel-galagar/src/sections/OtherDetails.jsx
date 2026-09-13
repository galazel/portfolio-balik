import React from "react";
import { SectionHeading } from "../components/core/SectionHeading.jsx";
import { TimelineEntry } from "../components/content/TimelineEntry.jsx";
import { Input } from "../components/forms/Input.jsx";
import { Textarea } from "../components/forms/Textarea.jsx";
import { Button } from "../components/core/Button.jsx";
import { IconButton } from "../components/core/IconButton.jsx";
import { Tooltip } from "../components/core/Tooltip.jsx";
import { Card } from "../components/core/Card.jsx";
import { EDUCATION, AWARDS } from "../data.js";

const CONTACT_EMAIL = "glyzelgalagar27@gmail.com";
const GITHUB_HANDLE = "github.com/galazel";

export default function OtherDetails() {
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
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
        <SectionHeading kicker="Other details" accentWord="DETAILS" accent="grape" size="var(--text-4xl)">OTHER</SectionHeading>
        <div className="gg-details-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "var(--space-7)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <h4 style={{ fontSize: "var(--text-lg)" }}>Education</h4>
            {EDUCATION.map((e) => <TimelineEntry key={e.title} {...e} />)}
            <h4 style={{ fontSize: "var(--text-lg)", marginTop: "var(--space-4)" }}>Achievements &amp; Awards</h4>
            {AWARDS.map((a) => <TimelineEntry key={a.title} {...a} />)}
          </div>

          <Card padding="var(--space-6)" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", height: "fit-content" }}>
            <h4 style={{ fontSize: "var(--text-lg)" }}>Let's talk</h4>
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <Input label="Name" placeholder="Juan Dela Cruz" required value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
              <Input label="Email" type="email" placeholder="you@company.com" required value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
              <Textarea label="Message" rows={4} placeholder="Tell me what you're building." hint="I reply within a day or two." required
                value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} />
              <Button variant="accent" fullWidth type="submit">{sent ? "Opening your email…" : "Send message"}</Button>
            </form>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", paddingTop: "var(--space-2)", borderTop: "1px solid var(--border-subtle)" }}>
              <Tooltip content="GitHub">
                <IconButton label="GitHub" size="sm" as="a" href={`https://${GITHUB_HANDLE}`} target="_blank" rel="noreferrer">
                  <img src="/tech/github.png" alt="" style={{ width: 16, height: 16 }} />
                </IconButton>
              </Tooltip>
              <span style={{ fontSize: "var(--text-2xs)", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{GITHUB_HANDLE} · Cebu, Philippines</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
