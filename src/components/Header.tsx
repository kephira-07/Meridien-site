"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { brand, nav } from "@/lib/content";

/** Au-delà de cette distance, la barre peut se masquer en descendant. */
const HIDE_AFTER = 140;
/** Petits mouvements ignorés : la barre ne doit pas clignoter. */
const THRESHOLD = 6;

export default function Header() {
  const [open, setOpen] = useState(false);
  /** La barre est-elle masquée (défilement vers le bas) ? */
  const [hidden, setHidden] = useState(false);
  /** A-t-on quitté le haut de page ? Déclenche le fond opaque. */
  const [stuck, setStuck] = useState(false);
  const lastY = useRef(0);

  // Masquer en descendant, réafficher en remontant.
  useEffect(() => {
    lastY.current = window.scrollY;

    let frame = 0;
    function update() {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;

      setStuck(y > 24);

      if (Math.abs(delta) > THRESHOLD) {
        // On ne masque jamais près du haut, ni quand le menu est ouvert.
        setHidden(delta > 0 && y > HIDE_AFTER);
        lastY.current = y;
      }
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Menu ouvert : la barre reste visible et la page ne défile plus.
  useEffect(() => {
    if (open) setHidden(false);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Fermeture à la touche Échap.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const classes = [
    "site-header",
    stuck ? "site-header--stuck" : "",
    hidden && !open ? "site-header--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <div className="container">
        <nav className="nav" aria-label="Navigation principale">
          <a href="/#accueil" className="logo">
            <Logo />
            {brand.name}
          </a>

          <div className="nav-links">
            {nav.map((n) => (
              <a key={n.href} href={`/${n.href}`}>
                {n.label}
              </a>
            ))}
          </div>

          <a href="/#telecharger" className="btn btn-dawn nav-cta">
            Télécharger
          </a>

          <button
            type="button"
            className="burger"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              {open ? (
                <>
                  <path d="M6 6l14 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 6L6 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M3 8h20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 18h20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>

          <div id="menu-mobile" className="menu-mobile" hidden={!open}>
            {nav.map((n) => (
              <a key={n.href} href={`/${n.href}`} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="/#telecharger" className="btn btn-dawn" onClick={() => setOpen(false)}>
              Télécharger
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
