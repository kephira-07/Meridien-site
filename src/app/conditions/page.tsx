import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { conditions } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${conditions.title} — Méridien`,
  description: conditions.intro,
  alternates: { canonical: `/${conditions.slug}` },
};

export default function Page() {
  return <LegalLayout doc={conditions} />;
}
