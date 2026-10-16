import type { MetadataRoute } from "next";
import { brand } from "@/lib/content";
import { legalDocs } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${brand.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...legalDocs.map((d) => ({
      url: `${brand.url}/${d.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
