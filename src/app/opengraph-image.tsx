import { ImageResponse } from "next/og";
import { brand, hero } from "@/lib/content";

// Runtime edge imposé : en Node, @vercel/og échoue au prérendu sous Windows
// (« TypeError: Invalid URL » dans index.node.js). L'image est donc générée
// à la demande, puis mise en cache par l'hébergeur.
export const runtime = "edge";
export const alt = "Méridien — Vos marchés, où que le soleil se lève";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Image de partage (WhatsApp, LinkedIn, X…), générée à la demande.
 * Pour utiliser une image fixe à la place, supprimez ce fichier et
 * déposez `opengraph-image.png` (1200×630) dans ce même dossier.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #1B2360 0%, #0B1030 55%, #070A20 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 34 34" fill="none">
            <circle cx="17" cy="17" r="15" stroke="#fff" strokeWidth="1.8" />
            <ellipse cx="17" cy="17" rx="6.5" ry="15" stroke="#fff" strokeWidth="1.8" />
            <circle cx="25" cy="9" r="3.5" fill="#FFB54A" />
          </svg>
          <div style={{ fontSize: 40, letterSpacing: -0.5 }}>{brand.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 78, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>{hero.title}</div>
          <div style={{ fontSize: 30, color: "#D5D8EE" }}>{hero.badge}</div>
        </div>

        <div style={{ display: "flex", gap: 36, fontSize: 24, color: "#FFB54A" }}>
          {hero.points.map((p) => (
            <div key={p}>{p}</div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
