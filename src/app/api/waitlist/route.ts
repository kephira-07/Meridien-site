import { NextResponse } from "next/server";

/**
 * Inscription à la liste d'attente.
 *
 * Deux branchements possibles, au choix, par variables d'environnement
 * (voir `.env.example`) :
 *
 *  1. RESEND_API_KEY + RESEND_AUDIENCE_ID
 *     L'adresse est ajoutée à une audience Resend.
 *
 *  2. WAITLIST_WEBHOOK_URL
 *     L'adresse est envoyée en POST JSON ({ email, source, date }) vers
 *     l'URL indiquée : Zapier, Make, Brevo, Google Sheets, votre propre API…
 *
 * Sans configuration, la route répond 501 : rien n'est perdu en silence.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL.test(email.trim()) || email.length > 254) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }
  const address = email.trim().toLowerCase();

  const { RESEND_API_KEY, RESEND_AUDIENCE_ID, WAITLIST_WEBHOOK_URL } = process.env;

  try {
    if (RESEND_API_KEY && RESEND_AUDIENCE_ID) {
      const res = await fetch(`https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: address, unsubscribed: false }),
      });
      if (!res.ok) throw new Error(`Resend a répondu ${res.status}`);
      return NextResponse.json({ ok: true });
    }

    if (WAITLIST_WEBHOOK_URL) {
      const res = await fetch(WAITLIST_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: address, source: "site-meridien", date: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Le webhook a répondu ${res.status}`);
      return NextResponse.json({ ok: true });
    }
  } catch (err) {
    console.error("[waitlist] échec de l'enregistrement", err);
    return NextResponse.json({ error: "Enregistrement impossible pour le moment." }, { status: 502 });
  }

  console.warn("[waitlist] aucun service configuré : l'adresse n'a pas été enregistrée.");
  return NextResponse.json(
    { error: "La liste d'attente n'est pas encore configurée." },
    { status: 501 },
  );
}
