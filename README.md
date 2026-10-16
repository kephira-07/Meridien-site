# Méridien — site officiel (Next.js)

Site vitrine : présentation du projet + section « Télécharger l'application ». Ce n'est pas un site de trading.

## Lancer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Où modifier quoi

| Je veux… | Fichier |
| --- | --- |
| Changer un texte (titres, FAQ, étapes, pied de page) | `src/lib/content.ts` |
| Mettre de vraies captures dans les téléphones | `src/lib/screenshots.ts` + dossier `public/screenshots/` |
| Changer les couleurs, polices, espacements | `src/app/globals.css` (variables en haut) |
| Changer les polices | `src/app/layout.tsx` |
| Modifier une section | `src/components/*.tsx` |
| Changer un texte des pages légales | `src/lib/legal.ts` |
| Changer la navigation du menu (y compris mobile) | `src/lib/content.ts` (`nav`) + `src/components/Header.tsx` |

## Captures d'écran des téléphones

1. Déposez vos images dans `public/screenshots/` (ex. `home.png`, `order.png`).
2. Dans `src/lib/screenshots.ts`, remplacez `null` par `"/screenshots/home.png"`.
3. Le cadre du téléphone, l'ombre et la position ne changent pas : seul l'écran est remplacé.
   Tant qu'une valeur reste à `null`, la maquette dessinée s'affiche.

Pour ajouter un téléphone : ajoutez une clé dans `screenshots.ts` et utilisez `<Phone screenshot={screenshots.maCle} …>`.

## Typographie

Titres et texte en serif (Newsreader), interface (menu, boutons, étiquettes) en Inter, dans l'esprit du texte de Claude.
Poppins n'est utilisé que dans les écrans de téléphone, comme dans l'application.

## Pages

| Route | Fichier |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/mentions-legales` | `src/app/mentions-legales/page.tsx` |
| `/conditions` | `src/app/conditions/page.tsx` |
| `/confidentialite` | `src/app/confidentialite/page.tsx` |
| `/api/waitlist` | `src/app/api/waitlist/route.ts` (inscription liste d'attente) |
| `/robots.txt`, `/sitemap.xml` | `src/app/robots.ts`, `src/app/sitemap.ts` |

Le favicon est `src/app/icon.svg`. L'image de partage (réseaux sociaux) est générée par
`src/app/opengraph-image.tsx` : pour une image fixe, supprimez ce fichier et déposez
`opengraph-image.png` (1200×630) dans `src/app/`.

## Liste d'attente (formulaire e-mail)

La route `/api/waitlist` accepte deux branchements, au choix, par variables d'environnement :

1. **Resend** — `RESEND_API_KEY` + `RESEND_AUDIENCE_ID` : l'adresse est ajoutée à une audience.
2. **Webhook** — `WAITLIST_WEBHOOK_URL` : un POST JSON `{ email, source, date }` est envoyé
   vers l'URL indiquée (Zapier, Make, Brevo, votre API…).

Copiez `.env.example` en `.env.local` et renseignez une des deux options.
**Sans configuration, la route répond 501 et le formulaire affiche une erreur** : rien n'est
enregistré en silence.

## À compléter avant publication

- `src/lib/content.ts` : tout ce qui est entre [crochets] — nom de la société, année,
  adresse de contact, partenaire agréé, grille tarifaire, réponses de la FAQ.
- `brand.url` dans `src/lib/content.ts` : l'adresse réelle du site. Elle sert aux URL
  canoniques, à l'image de partage, au sitemap et au `robots.txt`.
- `src/lib/legal.ts` : les trois pages légales sont une base de travail, pas un avis
  juridique. Les [crochets] doivent être remplis et le tout relu par un juriste.
- `src/lib/screenshots.ts` + `public/screenshots/` : les captures réelles de l'application.
- `download.qrImage` dans `src/lib/content.ts` : le QR code (sinon un cadre en pointillés
  s'affiche).
- La liste d'attente : voir la section ci-dessus.
