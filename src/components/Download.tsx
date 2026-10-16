"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Phone from "./Phone";
import Reveal from "./Reveal";
import OrderScreen from "./screens/OrderScreen";
import { download } from "@/lib/content";
import { screenshots } from "@/lib/screenshots";

export default function Download() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Une erreur est survenue.");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="telecharger" className="container section" style={{ paddingTop: 100 }}>
      <Reveal variant="rise" className="download">
        <div className="download-text">
          <h2 className="h2" style={{ marginBottom: 20 }}>{download.title}</h2>
          <p style={{ fontSize: 20, lineHeight: 1.65, marginBottom: 32, maxWidth: 480 }}>{download.text}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
            <span className="store">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="3" stroke="#fff" strokeWidth="1.8" />
                <circle cx="12" cy="18" r="1" fill="#fff" />
              </svg>
              {download.appStore}
            </span>
            <span className="store">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 3l13 9-13 9V3z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              {download.googlePlay}
            </span>
          </div>

          {sent ? (
            <p className="ui" role="status" style={{ fontSize: 16, fontWeight: 500, marginBottom: 28 }}>
              {download.thanks}
            </p>
          ) : (
            <div style={{ marginBottom: 28 }}>
              <form className="email-form" onSubmit={onSubmit}>
                <label htmlFor="email" className="sr-only">{download.emailLabel}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  disabled={busy}
                  placeholder={download.emailPlaceholder}
                />
                <button type="submit" className="btn btn-night" disabled={busy}>
                  {busy ? download.sending : download.submit}
                </button>
              </form>
              {error ? (
                <p className="ui form-error" role="alert">
                  {error}
                </p>
              ) : null}
            </div>
          )}

          {download.qrImage ? (
            <Image
              className="qr qr-image"
              src={download.qrImage}
              alt="QR code vers la page de téléchargement de l'application Méridien"
              width={96}
              height={96}
            />
          ) : (
            <div className="qr">{download.qr}</div>
          )}
        </div>

        <div className="download-visual">
          <Phone screenshot={screenshots.order} alt="Écran d'achat de l'application Méridien" width={290} height={480}>
            <OrderScreen />
          </Phone>
        </div>
      </Reveal>
    </section>
  );
}
