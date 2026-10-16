import { download } from "@/lib/content";

/** Maquette dessinée de l'écran d'achat (remplacée par une capture si fournie). */
export default function OrderScreen() {
  const o = download.order;
  return (
    <div style={{ background: "#fff", height: "100%", padding: "22px 18px", color: "#0B1030" }}>
      <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>{o.title}</div>
      <div style={{ fontSize: 12, color: "#5A5E7A" }}>{o.amountLabel}</div>
      <div style={{ fontSize: 30, fontWeight: 700, margin: "4px 0 14px" }}>{o.amount}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16, fontSize: 12 }}>
        {o.presets.map((p) => (
          <span
            key={p}
            style={{
              padding: "6px 12px",
              borderRadius: 999,
              background: p === o.selected ? "#0B1030" : "#F6F4EF",
              color: p === o.selected ? "#fff" : "#0B1030",
            }}
          >
            {p}
          </span>
        ))}
      </div>
      <div style={{ background: "#F6F4EF", borderRadius: 16, padding: 14, fontSize: 13 }}>
        {o.rows.map((r) => (
          <div key={r.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ color: "#5A5E7A" }}>{r.label}</span>
            <span>{r.value}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
          <span>{o.total.label}</span>
          <span>{o.total.value}</span>
        </div>
      </div>
      <div style={{ marginTop: 16, background: "#FFB54A", textAlign: "center", padding: 14, borderRadius: 999, fontWeight: 600, fontSize: 14 }}>
        {o.cta}
      </div>
    </div>
  );
}
