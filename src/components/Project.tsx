import Reveal from "./Reveal";
import { project } from "@/lib/content";

export default function Project() {
  return (
    <section id="projet" className="container section">
      <Reveal>
        <div className="eyebrow">{project.eyebrow}</div>
        <h2 className="h2" style={{ maxWidth: 900, marginBottom: 28 }}>
          {project.title}
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="body" style={{ maxWidth: 760, marginBottom: 64, fontSize: 20 }}>
          {project.text}
        </p>
      </Reveal>
      <div className="pillars">
        {project.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 170} className="pillar">
            <h3 className="h3" style={{ marginBottom: 10 }}>
              {p.title}
            </h3>
            <p className="body" style={{ fontSize: 17 }}>
              {p.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
