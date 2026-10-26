import NumberTicker from "@/components/ui/NumberTicker";
import { STATS, STATS_SOURCE } from "@/lib/home-content";

export default function StatsBand() {
  return (
    <section aria-labelledby="stats-title" className="container-page py-16">
      <div className="glass px-6 py-12 sm:px-10">
        <div className="relative z-10">
          <h2 id="stats-title" className="mb-10 text-center text-2xl sm:text-3xl">
            Why employability can&apos;t wait
          </h2>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <NumberTicker
                    value={s.value}
                    decimals={s.decimals}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="block bg-brand-gradient bg-clip-text font-stat text-5xl font-bold text-transparent sm:text-6xl"
                  />
                  <span aria-hidden className="mt-2 block text-sm text-purple-muted">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-center text-xs text-purple-muted">Source: {STATS_SOURCE}</p>
        </div>
      </div>
    </section>
  );
}
