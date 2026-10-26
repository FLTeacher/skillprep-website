import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import { POSTS } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Blog: Careers, Employability & Getting Hired in India",
  description: "Guides for Indian students and colleges on employability, fresher jobs and getting hired in the age of AI.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Careers, employability and getting hired" lead="Honest guides for Indian students and the colleges that support them." />
      <ul className="container-page grid gap-4 pb-24 md:grid-cols-2">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="glass group flex h-full flex-col justify-between p-6 transition-transform hover:-translate-y-1 sm:p-8">
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl">{p.title}</h2>
                <p className="mt-3 text-sm text-purple-muted sm:text-base">{p.description}</p>
              </div>
              <span className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                Read <ArrowUpRight weight="bold" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
