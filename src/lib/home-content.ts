import type { Icon } from "@phosphor-icons/react";
import { Brain, Gauge, BookOpen, RocketLaunch, Coins, Toolbox } from "@phosphor-icons/react/dist/ssr";

export const FEATURES: {
  title: string;
  href: string;
  body: string;
  Icon: Icon;
  color: string; // tailwind text + glow colour
  span: string; // grid column span (6-col grid at md+)
}[] = [
  { title: "MIRA", href: "/features#mira", body: "Your always-on AI mentor that reads your gaps and builds your plan.", Icon: Brain, color: "cyan-brand", span: "md:col-span-4" },
  { title: "Employability Score", href: "/features#employability-score", body: "A verified readiness index recruiters trust, not just your CGPA.", Icon: Gauge, color: "cyan-brand", span: "md:col-span-2" },
  { title: "Skill Pathways", href: "/features#skill-pathways", body: "3-level courses built for your branch: video, worksheets, simulations.", Icon: BookOpen, color: "purple-bright", span: "md:col-span-2" },
  { title: "Launchpad", href: "/features#launchpad", body: "Matched internships and entry roles based on your real score.", Icon: RocketLaunch, color: "coral-brand", span: "md:col-span-2" },
  { title: "Skillcoins", href: "/features#skillcoins", body: "Earn as you learn; redeem with top youth brands.", Icon: Coins, color: "lime-brand", span: "md:col-span-2" },
  { title: "Student Toolkit", href: "/features#toolkit", body: "ATS resume builder, LinkedIn enhancer, AI Tools Tutor, mock interviews.", Icon: Toolbox, color: "blue-brand", span: "md:col-span-6" },
];

export const STATS = [
  { value: 56.35, decimals: 2, suffix: "%", label: "India's graduate employability rate" },
  { value: 90, suffix: "%+", label: "of employees now use generative AI tools" },
  { value: 38, prefix: "+", suffix: "%", label: "growth in project-based hiring (YoY)" },
  { value: 23.5, decimals: 1, suffix: "M", label: "projected gig/freelance workforce by 2030" },
];
export const STATS_SOURCE = "India Skills Report 2026";

// Pre-launch: no real testimonials yet. Replace placeholder entries with real ones (placeholder: false) at launch.
export type Testimonial = { quote: string; name: string; role: string; placeholder?: boolean };
export const TESTIMONIALS: Testimonial[] = [
  { quote: "Real student story goes here.", name: "Student name", role: "Final-year student, College name", placeholder: true },
  { quote: "Real student story goes here.", name: "Student name", role: "Pre-final-year student, College name", placeholder: true },
  { quote: "Real placement-cell perspective goes here.", name: "Name", role: "Placement officer, College name", placeholder: true },
];

export const FAQS = [
  {
    q: "What is SkillPrep?",
    a: "An AI-native employability platform that helps Indian college students build real, job-ready skills and earn a verified Employability Score, offered to students through their college.",
  },
  {
    q: "Who is SkillPrep for?",
    a: "College students who want to be genuinely job-ready, and the colleges and placement cells that want to raise and prove their students' employability.",
  },
  {
    q: "How is SkillPrep different from job portals like Internshala or Naukri?",
    a: "Those are job boards you use once you're already job-hunting. SkillPrep builds your employability during college, with skills, a verified score and guided prep, so you're ready before you apply.",
  },
  {
    q: "What is the Employability Score?",
    a: "A verified readiness index measuring your actual skills across the platform, giving colleges and recruiters a trustworthy signal beyond CGPA.",
  },
  {
    q: "Who is MIRA?",
    a: "SkillPrep's AI career guide. MIRA reads your strengths and gaps, builds a personalised learning plan, and tracks your progress.",
  },
  {
    q: "Is SkillPrep free for students?",
    a: "Full access is unlocked through your college's licence. Early access signups are free. Join the waitlist to be notified.",
  },
  {
    q: "How can my college partner with SkillPrep?",
    a: "Use the For Colleges page to request a demo. We onboard your cohort and give your placement cell a readiness dashboard.",
  },
  {
    q: "When does SkillPrep launch?",
    a: "Rolling out now with early partner colleges. Join early access to get in first.",
  },
];
