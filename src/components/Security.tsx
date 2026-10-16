import Reveal from "./Reveal";
import { security } from "@/lib/content";

export default function Security() {
  return (
    <section id="securite" className="security">
      <div className="container">
        <Reveal>
          <div className="eyebrow">{security.eyebrow}</div>
          <h2 className="h2" style={{ maxWidth: 800, marginBottom: 48, color: "#fff" }}>
            {security.title}
          </h2>
        </Reveal>
        <div className="cards">
          {security.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 150} className="sec-card">
              <h3 className="h4" style={{ marginBottom: 8, color: "#fff" }}>{it.title}</h3>
              <p style={{ color: "var(--lav)", fontSize: 16, lineHeight: 1.65 }}>{it.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="partner-box" delay={220}>
          <strong style={{ color: "#fff", fontWeight: 500 }}>{security.partner.name}</strong> {security.partner.text}
        </Reveal>
      </div>
    </section>
  );
}
