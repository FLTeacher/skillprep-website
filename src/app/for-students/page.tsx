import Link from "next/link";
import { ArrowRight, Gauge, RocketLaunch, Sparkle } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import NumberTicker from "@/components/ui/NumberTicker";
import LeadForm from "@/components/forms/LeadForm";
import { pageMeta } from "@/lib/seo";
import { STATS_SOURCE } from "@/lib/home-content";

export const metadata = pageMeta({
  title: "How to Get a Job After College With No Experience",
  description:
    "Graduating with no experience? SkillPrep helps Indian college students build real skills, earn a verified Employability Score and get matched to entry roles through Launchpad.",
  path: "/for-students",
});

const STEPS = [
  { Icon: Sparkle, title: "Build real skills", body: "MIRA reads your gaps and builds a plan. Skill Pathways, built for your branch, take you through it.", href: "/features#skill-pathways", color: "text-purple-bright" },
  { Icon: Gauge, title: "Earn a verified score", body: "Your Employability Score shows what you can actually do, a signal recruiters trust beyond CGPA.", href: "/features#employability-score", color: "text-cyan-brand" },
  { Icon: RocketLaunch, title: "Launch into roles", body: "Launchpad matches you to internships and entry roles based on your real score.", href: "/features#launchpad", color: "text-coral-brand" },
];

export default function ForStudentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For students"
        title={<>How to get a job after college with <span className="bg-brand-gradient bg-clip-text text-transparent">no experience</span></>}
        lead="You did everything right: the degree, the exams, the marks. So why does every entry-level job ask for experience you haven't had a chance to get?"
      >
        <Link href="#early-access" className="btn-primary">Get Early Access <ArrowRight weight="bold" /></Link>
      </PageHero>

      <section aria-labelledby="gap-title" className="container-page pb-24">
        <div className="glass p-8 sm:p-12">
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <div className="text-center md:text-left">
              <NumberTicker value={56.35} decimals={2} suffix="%" className="bg-brand-gradient bg-clip-text font-stat text-7xl font-bold text-transparent sm:text-8xl" />
              <p className="mt-1 text-xs text-purple-muted">Source: {STATS_SOURCE}</p>
            </div>
            <div>
              <h2 id="gap-title" className="text-2xl sm:text-4xl">Only 56.35% of Indian graduates are job-ready.</h2>
              <p className="mt-4 text-purple-muted">
                Being in the other group isn&apos;t a verdict on you. It&apos;s a gap in what college teaches and what employers screen for.
                Entry-level roles ask for experience, but you need a job to get experience. That&apos;s the catch, and it&apos;s fixable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="path-title" className="container-page pb-24">
        <h2 id="path-title" className="mb-10 max-w-2xl text-3xl sm:text-5xl">Skills, then proof, then the job</h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {STEPS.map(({ Icon, title, body, href, color }, i) => (
            <li key={title}>
              <Link href={href} className="glass group flex h-full flex-col p-6 transition-transform hover:-translate-y-1 sm:p-8">
                <div className="relative z-10">
                  <p className="font-stat text-5xl text-purple-muted/50">0{i + 1}</p>
                  <Icon size={40} weight="duotone" className={`mt-4 ${color}`} />
                  <h3 className="mt-4 text-xl sm:text-2xl">{title}</h3>
                  <p className="mt-2 text-sm text-purple-muted sm:text-base">{body}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section id="early-access" aria-labelledby="ea-title" className="container-page scroll-mt-28 pb-24">
        <div className="glass mx-auto max-w-2xl p-6 sm:p-10">
          <div className="relative z-10">
            <h2 id="ea-title" className="text-3xl sm:text-4xl">Get early access</h2>
            <p className="mb-6 mt-2 text-purple-muted">Join the list and be first in when SkillPrep reaches your college. It&apos;s free to sign up.</p>
            <LeadForm kind="student" />
          </div>
        </div>
      </section>
    </>
  );
}
