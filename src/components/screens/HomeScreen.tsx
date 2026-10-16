import { home } from "@/lib/content";

/** Maquette dessinée de l'écran d'accueil (remplacée par une capture si fournie). */
export default function HomeScreen() {
  return (
    <div style={{ background: "#10163F", height: "100%", padding: "22px 18px", position: "relative", color: "#fff" }}>
      <div style={{ fontSize: 12, color: "#9AA0BF" }}>{home.greeting}</div>
      <div
        style={{
          background: "linear-gradient(135deg,#FFB54A,#FFD58E)",
          color: "#0B1030",
          borderRadius: 22,
          padding: 18,
          margin: "12px 0 16px",
        }}
      >
        <div style={{ fontSize: 12 }}>{home.balanceLabel}</div>
        <div style={{ fontSize: 26, fontWeight: 700, margin: "4px 0 14px" }}>{home.balance}</div>
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{ flex: 1, textAlign: "center", background: "#0B1030", color: "#fff", fontSize: 12, padding: 8, borderRadius: 999 }}>
            {home.deposit}
          </span>
          <span style={{ flex: 1, textAlign: "center", border: "1.5px solid #0B1030", fontSize: 12, padding: 8, borderRadius: 999 }}>
            {home.withdraw}
          </span>
        </div>
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>{home.marketsTitle}</div>
      {home.markets.map((m) => (
        <div
          key={m.name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#1A2155",
            borderRadius: 14,
            padding: 12,
            marginBottom: 8,
            fontSize: 13,
          }}
        >
          <span>{m.name}</span>
          <span style={{ color: "#9AA0BF" }}>{m.kind}</span>
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 56,
          background: "#0B1030",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: 11,
          color: "#9AA0BF",
        }}
      >
        {home.tabs.map((t, i) => (
          <span key={t} style={i === 0 ? { color: "#FFB54A" } : undefined}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
