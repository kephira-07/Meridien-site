import Reveal from "./Reveal";
import { features as f } from "@/lib/content";

export default function Features() {
  return (
    <section id="fonctionnalites" className="container section" style={{ paddingTop: 100 }}>
      <Reveal>
        <div className="eyebrow">{f.eyebrow}</div>
        <h2 className="h2" style={{ maxWidth: 800, marginBottom: 48 }}>
          {f.title}
        </h2>
      </Reveal>

      <div className="cards">
        {/* Suivi des ordres */}
        <Reveal variant="rise" className="card" style={{ flex: "1 1 560px", background: "var(--night)", color: "#fff" }}>
          <h3 className="h3" style={{ marginBottom: 10 }}>{f.timeline.title}</h3>
          <p style={{ color: "var(--lav)", marginBottom: 28 }}>{f.timeline.text}</p>
          <ol className="timeline">
            {f.timeline.steps.map((s) => (
              <li key={s.label} style={s.state === "todo" ? { color: "var(--mist)" } : undefined}>
                <span className={`dot dot-${s.state}`} />
                {s.label}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Montant */}
        <Reveal variant="rise" delay={140} className="card" style={{ flex: "1 1 360px", background: "var(--dawn-soft)" }}>
          <h3 className="h3" style={{ marginBottom: 10 }}>{f.amount.title}</h3>
          <p style={{ color: "#4a4f6e", marginBottom: 24 }}>{f.amount.text}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {f.amount.presets.map((p) => (
              <span key={p} className={`pill ${p === f.amount.selected ? "pill-selected" : ""}`}>
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Dépôts */}
        <Reveal variant="rise" className="card card-light" style={{ flex: "1 1 360px" }}>
          <h3 className="h3" style={{ marginBottom: 10 }}>{f.deposit.title}</h3>
          <p className="body" style={{ marginBottom: 24 }}>{f.deposit.text}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {f.deposit.methods.map((m, i) => (
              <div
                key={m.name}
                className="row"
                style={i < f.deposit.methods.length - 1 ? { borderBottom: "1px solid #eeeae0", paddingBottom: 12 } : undefined}
              >
                <span>{m.name}</span>
                <span style={{ color: "var(--text)" }}>{m.note}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Portefeuille */}
        <Reveal variant="rise" delay={140} className="card card-light" style={{ flex: "1 1 360px" }}>
          <h3 className="h3" style={{ marginBottom: 10 }}>{f.portfolio.title}</h3>
          <p className="body" style={{ marginBottom: 24 }}>{f.portfolio.text}</p>
          <div style={{ background: "var(--paper)", borderRadius: 20, padding: 20 }}>
            <div className="ui" style={{ fontSize: 13, color: "var(--text)" }}>{f.portfolio.label}</div>
            <div className="ui" style={{ fontSize: 28, fontWeight: 600, marginTop: 4 }}>{f.portfolio.value}</div>
          </div>
        </Reveal>

        {/* Marchés */}
        <Reveal variant="rise" delay={280} className="card card-light" style={{ flex: "1 1 360px" }}>
          <h3 className="h3" style={{ marginBottom: 10 }}>{f.markets.title}</h3>
          <p className="body" style={{ marginBottom: 24 }}>{f.markets.text}</p>
          <div
            className="ui"
            style={{ background: "var(--paper)", borderRadius: 999, padding: "14px 20px", fontSize: 14, color: "var(--text)", marginBottom: 14 }}
          >
            {f.markets.search}
          </div>
          <div className="ui" style={{ display: "flex", gap: 8, flexWrap: "wrap", fontSize: 13 }}>
            {f.markets.chips.map((c, i) => (
              <span
                key={c}
                style={{
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: i === 0 ? "var(--night)" : "var(--paper)",
                  color: i === 0 ? "#fff" : undefined,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
