import Footer from "./Footer";
import type { LegalDoc } from "@/lib/legal";

export default function LegalLayout({ doc }: { doc: LegalDoc }) {
  return (
    <main>
      <div className="legal-head">
        <div className="container">
          <div className="legal-title">
            <h1 className="h1" style={{ fontSize: "clamp(34px, 4vw, 54px)", marginBottom: 20 }}>
              {doc.title}
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--lav)", maxWidth: 620 }}>{doc.intro}</p>
          </div>
        </div>
      </div>

      <article className="legal-doc">
        <p className="ui legal-updated">Dernière mise à jour : {doc.updated}</p>
        {doc.blocks.map((b) => (
          <section key={b.heading}>
            <h2 className="h3">{b.heading}</h2>
            {b.paragraphs.map((p) => (
              <p key={p} className="body">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>

      <Footer />
    </main>
  );
}
