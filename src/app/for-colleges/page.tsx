import Link from "next/link";
import { ArrowRight, Check, X } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import LeadForm from "@/components/forms/LeadForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Employability Assessment Platform for Colleges",
  description:
    "CGPA can't predict placement. SkillPrep is an AI employability assessment and upskilling platform that shows your placement cell who is job-ready, and helps the rest get there.",
  path: "/for-colleges",
});

const PAINS = [
  { title: "Skill mismatch", body: "Students graduate with strong marks but not the skills recruiters screen for, and you only find out at placement time." },
  { title: "Mock-interview bandwidth", body: "Your team can't give every student a mock interview. Many students reach the real thing without one." },
  { title: "Offer-to-join reneging", body: "Offers don't always turn into joinings. Matching students to roles they are genuinely ready for is where it starts." },
  { title: "Reporting burden", body: "Accreditation and management want evidence of outcomes. Pulling it together by hand takes time your team doesn't have." },
];

const IS = ["Assessment of real, demonstrated skills", "Upskilling through branch-specific pathways", "A readiness dashboard for your placement cell"];
const ISNT = ["A placement-automation ERP", "A replacement for your placement process", "Another job board"];

export default function ForCollegesPage() {
  return (
    <>
      <PageHero
        eyebrow="For colleges"
        title="The employability assessment platform for colleges"
        lead="High CGPA tells you nothing about who will clear the interview. SkillPrep shows your placement cell who is actually job-ready, and gets the rest there."
      >
        <Link href="#partner" className="btn-primary">Request a demo <ArrowRight weight="bold" /></Link>
      </PageHero>

      <section aria-labelledby="paper-title" className="container-page pb-24">
        <div className="glass p-8 sm:p-12">
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-coral-brand">The Paper Engineer problem</p>
            <h2 id="paper-title" className="mt-3 text-3xl sm:text-5xl">A 9 CGPA can still fail the first interview.</h2>
            <p className="mt-5 text-purple-muted">
              Marks measure how well a student handles exams, not how well they handle work. And now AI-written assignments make it easier than ever to
              hide the gap: the transcript looks strong while real capability stays invisible. SkillPrep assesses what students can actually do, so you see the real picture before recruiters do.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="pains-title" className="container-page pb-24">
        <h2 id="pains-title" className="mb-10 max-w-2xl text-3xl sm:text-5xl">Built around what your TPO team deals with</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {PAINS.map((p) => (
            <li key={p.title} className="glass p-6 sm:p-8">
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-purple-muted sm:text-base">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="is-title" className="container-page pb-24">
        <h2 id="is-title" className="mb-10 max-w-2xl text-3xl sm:text-5xl">Assessment and upskilling. Not an ERP.</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass p-6 sm:p-8">
            <ul className="relative z-10 space-y-3">
              <li className="font-display text-lg font-bold text-cyan-brand">SkillPrep is</li>
              {IS.map((t) => (<li key={t} className="flex items-start gap-3"><Check size={22} weight="bold" className="mt-0.5 shrink-0 text-cyan-brand" />{t}</li>))}
            </ul>
          </div>
          <div className="glass p-6 sm:p-8">
            <ul className="relative z-10 space-y-3">
              <li className="font-display text-lg font-bold text-purple-muted">SkillPrep isn&apos;t</li>
              {ISNT.map((t) => (<li key={t} className="flex items-start gap-3 text-purple-muted"><X size={22} weight="bold" className="mt-0.5 shrink-0" />{t}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section id="partner" aria-labelledby="partner-title" className="container-page scroll-mt-28 pb-24">
        <div className="glass mx-auto max-w-2xl p-6 sm:p-10">
          <div className="relative z-10">
            <h2 id="partner-title" className="text-3xl sm:text-4xl">Partner with SkillPrep</h2>
            <p className="mb-6 mt-2 text-purple-muted">Request a demo. We onboard your cohort and give your placement cell a readiness dashboard.</p>
            <LeadForm kind="college" />
          </div>
        </div>
      </section>
    </>
  );
}
