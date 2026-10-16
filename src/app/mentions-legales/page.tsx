import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { mentionsLegales } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${mentionsLegales.title} — Méridien`,
  description: mentionsLegales.intro,
  alternates: { canonical: `/${mentionsLegales.slug}` },
};

export default function Page() {
  return <LegalLayout doc={mentionsLegales} />;
}
