import Phone from "./Phone";
import HomeScreen from "./screens/HomeScreen";
import { hero } from "@/lib/content";
import { screenshots } from "@/lib/screenshots";

export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="badge hero-in" style={{ animationDelay: "0.05s" }}>{hero.badge}</div>
            <h1 className="h1 hero-title" style={{ marginBottom: 24 }}>
              {/* Mot à mot : chaque mot se lève à son tour. */}
              {hero.title.split(" ").map((word, i, all) => (
                <span key={`${word}-${i}`} className="word" style={{ animationDelay: `${0.12 + i * 0.075}s` }}>
                  {word}
                  {i < all.length - 1 ? " " : null}
                </span>
              ))}
            </h1>
            <p className="hero-in" style={{ fontSize: 20, lineHeight: 1.65, color: "var(--lav)", maxWidth: 540, marginBottom: 36, animationDelay: "0.24s" }}>
              {hero.text}
            </p>
            <div className="hero-in" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 44, animationDelay: "0.34s" }}>
              <a href="#telecharger" className="btn btn-dawn">
                {hero.primaryCta}
              </a>
              <a href="#projet" className="btn btn-ghost">
                {hero.secondaryCta}
              </a>
            </div>
            <div className="hero-points hero-in" style={{ animationDelay: "0.44s" }}>
              {hero.points.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <svg
              viewBox="0 0 520 520"
              width="520"
              fill="none"
              aria-hidden="true"
              className="hero-orbit"
              style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", maxWidth: "100%" }}
            >
              <defs>
                <radialGradient id="glow" cx="50%" cy="40%" r="50%">
                  <stop offset="0" stopColor="#FFB54A" stopOpacity=".45" />
                  <stop offset="1" stopColor="#FFB54A" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="260" cy="230" r="250" fill="url(#glow)" />
              <circle cx="260" cy="260" r="220" stroke="rgba(255,255,255,.16)" />
              <ellipse cx="260" cy="260" rx="110" ry="220" stroke="rgba(255,255,255,.16)" />
              <ellipse cx="260" cy="260" rx="200" ry="220" stroke="rgba(255,255,255,.1)" />
              <ellipse cx="260" cy="260" rx="220" ry="90" stroke="rgba(255,255,255,.12)" />
              <line x1="40" y1="260" x2="480" y2="260" stroke="rgba(255,255,255,.12)" />
              <circle cx="400" cy="120" r="9" fill="#FFB54A" />
            </svg>
            <div className="hero-phone">
              <Phone screenshot={screenshots.home} alt="Écran d'accueil de l'application Méridien">
                <HomeScreen />
              </Phone>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
