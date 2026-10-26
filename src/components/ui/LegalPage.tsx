import PageHero from "@/components/ui/PageHero";

export default function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero title={title}>
        <span className="rounded-full border border-coral-brand/40 bg-coral-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-coral-brand">
          [Draft — pending legal review]
        </span>
      </PageHero>
      <div className="container-page pb-24">
        <div className="glass max-w-3xl p-6 sm:p-10">
          <div className="relative z-10 space-y-8">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-xl sm:text-2xl">{s.h}</h2>
                <p className="mt-2 text-purple-muted">{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
