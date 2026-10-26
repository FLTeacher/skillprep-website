import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import { FEATURES } from "@/lib/home-content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI Career Guidance App: MIRA, Employability Score & More",
  description:
    "Explore SkillPrep: MIRA your AI career guide, a verified Employability Score, 3-level Skill Pathways, Launchpad, Skillcoins and the Student Toolkit.",
  path: "/features",
});

const TEXT: Record<string, string> = { "cyan-brand": "text-cyan-brand", "purple-bright": "text-purple-bright", "coral-brand": "text-coral-brand", "lime-brand": "text-lime-brand", "blue-brand": "text-blue-brand" };

const SECTIONS = [
  {
    id: "mira",
    title: "MIRA, your AI career guide",
    lead: "An always-on mentor that knows where you stand and what to do next.",
    points: ["Reads your strengths and gaps across the platform", "Builds a personalised learning plan", "Tracks your progress and adjusts the plan as you grow"],
  },
  {
    id: "employability-score",
    title: "Employability Score",
    lead: "A verified readiness index that shows what you can actually do, not only what your marks say.",
    points: ["Measures your actual skills across the platform", "A trustworthy signal for colleges and recruiters beyond CGPA", "Gives you a clear number to raise, one skill at a time"],
  },
  {
    id: "skill-pathways",
    title: "Skill Pathways",
    lead: "Courses built for your branch, delivered as video, worksheets and simulations.",
    points: [],
  },
  {
    id: "launchpad",
    title: "Launchpad",
    lead: "Matched internships and entry roles based on your real score.",
    points: ["Opportunities matched to what you can demonstrate", "Practice and prepare before you apply", "Built to take you from ready to hired"],
  },
  {
    id: "skillcoins",
    title: "Skillcoins",
    lead: "Earn as you learn, and redeem with top youth brands.",
    points: ["Rewards for the skills you build", "Keeps learning consistent and fun", "Redeem with youth brands"],
  },
  {
    id: "toolkit",
    title: "Student Toolkit",
    lead: "The practical tools every fresher needs in one place.",
    points: ["ATS resume builder", "LinkedIn enhancer", "AI Tools Tutor", "Mock interviews"],
  },
];

const LEVELS = [
  { n: "Level 1", name: "Common", body: "Foundations every graduate needs, whatever the branch." },
  { n: "Level 2", name: "Branched", body: "Skills specific to your branch of study." },
  { n: "Level 3", name: "Pathway", body: "A focused track towards the role you are aiming for." },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="The AI career guidance app that gets you job-ready"
        lead="Six connected tools that take you from where you are today to your first job."
      >
        <Link href="/for-students#early-access" className="btn-primary">Get Early Access <ArrowRight weight="bold" /></Link>
        <Link href="/for-colleges" className="btn-ghost">For colleges</Link>
      </PageHero>

      <div className="container-page space-y-6 pb-24">
        {SECTIONS.map((s) => {
          const f = FEATURES.find((x) => x.href.endsWith(`#${s.id}`))!;
          return (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-t`} className="glass scroll-mt-28 p-6 sm:p-10">
              <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
                <div>
                  <f.Icon size={48} weight="duotone" className={TEXT[f.color]} />
                  <h2 id={`${s.id}-t`} className="mt-5 text-2xl sm:text-4xl">{s.title}</h2>
                  <p className="mt-3 text-purple-muted">{s.lead}</p>
                </div>
                {s.id === "skill-pathways" ? (
                  <ol className="grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                    {LEVELS.map((l) => (
                      <li key={l.n} className="rounded-xl border border-purple-muted/20 bg-white/5 p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-purple-bright">{l.n}</p>
                        <p className="mt-1 font-display text-lg font-bold">{l.name}</p>
                        <p className="mt-1 text-sm text-purple-muted">{l.body}</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <CheckCircle size={22} weight="duotone" className={`mt-0.5 shrink-0 ${TEXT[f.color]}`} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
