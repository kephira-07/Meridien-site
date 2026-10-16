import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { confidentialite } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${confidentialite.title} — Méridien`,
  description: confidentialite.intro,
  alternates: { canonical: `/${confidentialite.slug}` },
};

export default function Page() {
  return <LegalLayout doc={confidentialite} />;
}
