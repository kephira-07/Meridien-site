import Reveal from "./Reveal";
import { faq } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <Reveal>
        <div className="eyebrow">{faq.eyebrow}</div>
        <h2 className="h2" style={{ marginBottom: 40 }}>{faq.title}</h2>
      </Reveal>
      {faq.items.map((it, i) => (
        <Reveal key={it.q} as="details" delay={i * 110}>
          <summary>
            {it.q}
            <svg className="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="#0B1030" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="body" style={{ marginTop: 14 }}>{it.a}</p>
        </Reveal>
      ))}
    </section>
  );
}
