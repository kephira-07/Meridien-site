"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { brand, nav } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Empêche le défilement de la page quand le panneau mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Fermeture à la touche Échap
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
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
  );
}
