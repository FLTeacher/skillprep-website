import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE.name, type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description },
  };
}
