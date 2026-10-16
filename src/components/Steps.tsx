import Reveal from "./Reveal";
import { steps } from "@/lib/content";

export default function Steps() {
  return (
    <section id="etapes" className="container section" style={{ paddingTop: 100 }}>
      <Reveal>
        <div className="eyebrow">{steps.eyebrow}</div>
        <h2 className="h2" style={{ maxWidth: 800, marginBottom: 56 }}>
          {steps.title}
        </h2>
      </Reveal>
      <div className="steps">
        {steps.items.map((s, i) => (
          <Reveal key={s.title} delay={i * 170} className="step">
            <div className="step-num">{i + 1}</div>
            <h3 className="h4" style={{ marginBottom: 8 }}>{s.title}</h3>
            <p className="body" style={{ fontSize: 16 }}>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
