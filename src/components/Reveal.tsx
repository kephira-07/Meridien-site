"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/* ------------------------------------------------------------------
   Registre partagé : un seul IntersectionObserver et un seul écouteur
   de défilement pour toute la page, quel que soit le nombre d'éléments.

   Trois mécanismes se complètent volontairement :
   - l'observateur, qui réagit à l'entrée dans l'écran ;
   - une vérification au défilement et au redimensionnement ;
   - un contrôle périodique, actif seulement tant qu'il reste des
     éléments à révéler, qui ne dépend d'aucun événement.
   Le dernier est le filet de sécurité : un contenu masqué qui ne
   réapparaîtrait jamais serait un défaut bien pire que l'absence
   d'animation, et l'observateur seul s'est révélé peu fiable
   (saut direct à une ancre, restauration de position, navigateur
   qui ne déclenche pas le rappel attendu).
   ------------------------------------------------------------------ */

const pending = new Set<HTMLElement>();
let observer: IntersectionObserver | null = null;
let listening = false;
let frame = 0;
let sweep: ReturnType<typeof setInterval> | null = null;

/** Période du contrôle de secours, en millisecondes. */
const SWEEP_MS = 300;

/** Marge de déclenchement : l'élément se révèle un peu avant d'être entièrement visible. */
const TRIGGER_RATIO = 0.92;

function show(el: HTMLElement) {
  el.classList.add("is-visible");
  pending.delete(el);
  observer?.unobserve(el);
  if (pending.size === 0) stopListening();
}

function inView(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * TRIGGER_RATIO && r.bottom > 0;
}

function checkAll() {
  for (const el of Array.from(pending)) {
    if (inView(el)) show(el);
  }
}

function onScroll() {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = 0;
    checkAll();
  });
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  sweep = setInterval(checkAll, SWEEP_MS);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
  if (sweep) {
    clearInterval(sweep);
    sweep = null;
  }
}

function register(el: HTMLElement) {
  if (inView(el)) {
    el.classList.add("is-visible");
    return () => {};
  }

  pending.add(el);
  startListening();

  if (typeof IntersectionObserver !== "undefined") {
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target as HTMLElement);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
  }

  return () => {
    pending.delete(el);
    observer?.unobserve(el);
    if (pending.size === 0) stopListening();
  };
}

type RevealProps = {
  children: ReactNode;
  /** Balise rendue (div par défaut). */
  as?: ElementType;
  /** Retard en millisecondes : sert à décaler les éléments d'une même rangée. */
  delay?: number;
  /** Variante d'entrée. */
  variant?: "up" | "fade" | "rise";
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Révèle son contenu quand il entre dans l'écran.
 *
 * Le contenu est rendu normalement par le serveur : il reste visible si le
 * JavaScript ne s'exécute pas. C'est la classe `js` posée sur <html> qui
 * autorise l'état masqué, et `prefers-reduced-motion` le neutralise.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return register(el);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${className}`.trim()}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}
