import Link from "next/link";
import { ArrowRight, Buildings, GraduationCap } from "@phosphor-icons/react/dist/ssr";

const DOORS = [
  {
    href: "/for-students",
    Icon: GraduationCap,
    label: "I'm a Student",
    body: "Find out your employability score and get a path to your first job.",
  },
  {
    href: "/for-colleges",
    Icon: Buildings,
    label: "I'm a College",
    body: "Assess every student and turn CGPA into placement-ready skill.",
  },
] as const;

export default function TwoDoors() {
  return (
    <section id="two-doors" aria-labelledby="two-doors-title" className="container-page py-24">
      <h2 id="two-doors-title" className="mb-10 text-center text-3xl sm:text-5xl">
        Which door are you walking through?
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {DOORS.map(({ href, Icon, label, body }) => (
          <Link key={href} href={href} className="glass group p-8 transition-transform hover:-translate-y-1 sm:p-10">
            <div className="relative z-10">
              <Icon size={44} weight="duotone" className="text-cyan-brand" />
              <h3 className="mt-6 text-2xl sm:text-3xl">{label}</h3>
              <p className="mt-2 text-purple-muted">{body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Enter <ArrowRight weight="bold" className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
