import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { TESTIMONIALS } from "@/lib/home-content";

export default function Testimonials() {
  return (
    <section aria-labelledby="stories-title" className="container-page py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-brand">Stories</p>
        <h2 id="stories-title" className="mt-3 text-3xl sm:text-5xl">
          Real student stories, coming at launch
        </h2>
      </div>
      <ul className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <li key={i} className="glass p-6 sm:p-8">
            <div className="relative z-10">
              <Quotes size={32} weight="duotone" className="text-purple-bright" />
              <blockquote className={t.placeholder ? "mt-4 italic text-purple-muted" : "mt-4"}>{t.quote}</blockquote>
              <p className="mt-6 text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-purple-muted">{t.role}</p>
              {t.placeholder && (
                <span className="mt-4 inline-block rounded-full border border-purple-muted/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-purple-muted">
                  Placeholder
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
