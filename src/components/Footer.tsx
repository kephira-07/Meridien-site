import Logo from "./Logo";
import Reveal from "./Reveal";
import { brand, footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="footer-top">
          <div style={{ flex: "1 1 280px", maxWidth: 360 }}>
            <div className="logo" style={{ marginBottom: 16 }}>
              <Logo size={32} />
              {brand.name}
            </div>
            <p style={{ fontSize: 17 }}>{footer.tagline}</p>
          </div>
          <div className="footer-cols">
            {footer.columns.map((c) => (
              <div key={c.title} className="footer-col">
                <strong>{c.title}</strong>
                {c.links.map((l) => (
                  <a key={l.label} href={l.href}>{l.label}</a>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
        <p className="legal" style={{ marginBottom: 14 }}>{footer.disclaimer}</p>
        <p className="ui" style={{ fontSize: 13, color: "#b8bcd8" }}>
          © {brand.year} {brand.company}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
