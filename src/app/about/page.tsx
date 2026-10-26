import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About SkillPrep",
  description: "SkillPrep exists to close India's employability gap: only 56.35% of graduates are job-ready. Meet the mission and the founder.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Closing the gap between a degree and a job"
        lead="India produces graduates by the million. Far fewer are ready for the work waiting for them."
      />

      <section aria-labelledby="mission-title" className="container-page pb-24">
        <div className="glass p-8 sm:p-12">
          <div className="relative z-10 max-w-3xl space-y-5">
            <h2 id="mission-title" className="text-3xl sm:text-4xl">Our mission</h2>
            <p className="text-purple-muted">
              Only 56.35% of Indian graduates are employable (India Skills Report 2026). The rest are not less capable. They were never shown what employers
              look for, or given a way to prove what they can do.
            </p>
            <p className="text-purple-muted">
              SkillPrep is an AI-native platform that measures real employability, builds the missing skills and turns them into a verified Employability Score, so
              students can show their potential and colleges can see it.
            </p>
            <p className="font-display text-xl font-bold">Unlock potential. Make every graduate job-ready.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="founder-title" className="container-page pb-24">
        <div className="glass mx-auto max-w-3xl p-8 sm:p-12">
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-brand">Founder&apos;s note</p>
            <h2 id="founder-title" className="mt-3 text-2xl sm:text-4xl">Steven Swami, Founder</h2>
            <p className="mt-5 text-purple-muted">
              Our vision: a future where no capable student is held back because nobody could see what they can do.
            </p>
            <div className="mt-6 rounded-xl border border-dashed border-purple-muted/40 bg-white/5 p-5 text-sm text-purple-muted">
              [Steven to finalise] Founder&apos;s note in Steven&apos;s own words goes here.
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-24 text-center">
        <Link href="/contact" className="btn-primary">Get in touch <ArrowRight weight="bold" /></Link>
      </section>
    </>
  );
}
