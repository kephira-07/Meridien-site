import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/content";

// Serif éditorial pour les titres et le texte (même esprit que le texte de Claude)
// `adjustFontFallback: false` : Next 14 n'a pas de métriques de repli pour Newsreader
// (avertissement « Failed to find font override values ») ; on fournit le repli nous-mêmes.
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Iowan Old Style", "Georgia", "serif"],
});
// Sans-serif pour l'interface : navigation, boutons, étiquettes
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
// Poppins : police de l'application, utilisée uniquement dans les maquettes de téléphone
const app = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-app", display: "swap" });

const title = "Méridien — Vos marchés, où que le soleil se lève";
const description =
  "Méridien est une application d'investissement pour le Togo et la zone UEMOA : investissez en francs CFA, avec des frais affichés avant chaque ordre.";

export const metadata: Metadata = {
  // Base utilisée pour les URL canoniques et l'image de partage.
  // Renseignez l'adresse réelle du site dans `brand.url` (src/lib/content.ts).
  metadataBase: new URL(brand.url),
  title,
  description,
  applicationName: brand.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: brand.name,
    url: "/",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1030",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${serif.variable} ${sans.variable} ${app.variable}`}
      // La classe `js` est ajoutée par le script ci-dessous, donc le rendu
      // serveur et le rendu client diffèrent volontairement sur cet élément.
      suppressHydrationWarning
    >
      <body>
        {/* Pose la classe `js` avant le premier rendu : sans JavaScript, rien n'est
            masqué et le contenu reste lisible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
