import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { POSTS } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";

type Props = { params: { slug: string } };

export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: Props) {
  const post = POSTS.find((p) => p.slug === params.slug);
  return post ? pageMeta({ title: post.title, description: post.description, path: `/blog/${post.slug}` }) : {};
}

export default function PostPage({ params }: Props) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="container-page max-w-3xl pb-24 pt-36 sm:pt-44">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-purple-muted">
        <Link href="/blog" className="hover:text-white">Blog</Link>
      </nav>
      <h1 className="text-3xl leading-tight sm:text-5xl">{post.title}</h1>
      <div className="mt-8 space-y-5 text-purple-muted sm:text-lg">
        {post.body.map((para, i) => (<p key={i}>{para}</p>))}
      </div>
      <aside aria-labelledby="post-cta" className="glass mt-12 p-6 sm:p-10">
        <div className="relative z-10">
          <h2 id="post-cta" className="text-2xl sm:text-3xl">{post.cta.heading}</h2>
          <p className="mb-6 mt-2 text-purple-muted">{post.cta.text}</p>
          <Link href={post.cta.href} className="btn-primary">{post.cta.label} <ArrowRight weight="bold" /></Link>
        </div>
      </aside>
    </article>
  );
}
