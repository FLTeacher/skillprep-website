import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { FEATURES } from "@/lib/home-content";
import { cn } from "@/lib/utils";

// Full class names so Tailwind can see them.
const TONE: Record<string, { text: string; glow: string }> = {
  "cyan-brand": { text: "text-cyan-brand", glow: "bg-cyan-brand/25" },
  "purple-bright": { text: "text-purple-bright", glow: "bg-purple-bright/30" },
  "coral-brand": { text: "text-coral-brand", glow: "bg-coral-brand/25" },
  "lime-brand": { text: "text-lime-brand", glow: "bg-lime-brand/20" },
  "blue-brand": { text: "text-blue-brand", glow: "bg-blue-brand/25" },
};

export default function FeaturesBento() {
  return (
    <section aria-labelledby="features-title" className="container-page py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-brand">The platform</p>
        <h2 id="features-title" className="mt-3 text-3xl sm:text-5xl">
          Everything between your degree and your first job
        </h2>
      </div>
      <ul className="grid gap-4 md:grid-cols-6">
        {FEATURES.map(({ title, href, body, Icon, color, span }) => {
          const tone = TONE[color];
          return (
            <li key={title} className={span}>
              <Link href={href} className="glass group flex h-full min-h-[200px] flex-col justify-between p-6 transition-transform hover:-translate-y-1 sm:p-8">
                <div aria-hidden className={cn("absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl", tone.glow)} />
                <div className="relative z-10">
                  <Icon size={40} weight="duotone" className={tone.text} />
                  <h3 className="mt-5 text-xl sm:text-2xl">{title}</h3>
                  <p className="mt-2 max-w-md text-sm text-purple-muted sm:text-base">{body}</p>
                </div>
                <span className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Learn more
                  <ArrowUpRight weight="bold" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
