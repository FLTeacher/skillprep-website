import type { Icon } from "@phosphor-icons/react";
import { Brain, Gauge, BookOpen, RocketLaunch, Coins, Toolbox } from "@phosphor-icons/react/dist/ssr";

export const FEATURES: {
  title: string;
  body: string;
  Icon: Icon;
  color: string; // tailwind text + glow colour
  span: string; // grid column span (6-col grid at md+)
}[] = [
  { title: "MIRA", body: "Your always-on AI mentor that reads your gaps and builds your plan.", Icon: Brain, color: "cyan-brand", span: "md:col-span-4" },
  { title: "Employability Score", body: "A verified readiness index recruiters trust, not just your CGPA.", Icon: Gauge, color: "cyan-brand", span: "md:col-span-2" },
  { title: "Skill Pathways", body: "3-level courses built for your branch: video, worksheets, simulations.", Icon: BookOpen, color: "purple-bright", span: "md:col-span-2" },
  { title: "Launchpad", body: "Matched internships and entry roles based on your real score.", Icon: RocketLaunch, color: "coral-brand", span: "md:col-span-2" },
  { title: "Skillcoins", body: "Earn as you learn; redeem with top youth brands.", Icon: Coins, color: "lime-brand", span: "md:col-span-2" },
  { title: "Student Toolkit", body: "ATS resume builder, LinkedIn enhancer, AI Tools Tutor, mock interviews.", Icon: Toolbox, color: "blue-brand", span: "md:col-span-6" },
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
    a: "SkillPrep is an AI-native employability platform for Indian colleges and students. It assesses how job-ready a student really is, then guides them to close the gaps with skill pathways, practice and career support.",
  },
  {
    q: "What is the Employability Score?",
    a: "It is a readiness index built from your skills and how you perform, designed to show recruiters and colleges where you stand beyond CGPA. MIRA, our AI career guide, uses it to recommend your next steps.",
  },
  {
    q: "Who is SkillPrep for?",
    a: "Students who want a clear path from degree to first job, and colleges that want to measure and improve the employability of every student, not only the toppers.",
  },
  {
    q: "Is SkillPrep a placement-automation ERP for colleges?",
    a: "No. SkillPrep is an assessment and upskilling platform. It tells you who is job-ready, who is not and why, and helps students close the gap.",
  },
  {
    q: "What are Skillcoins?",
    a: "Skillcoins are rewards you earn as you learn on SkillPrep. You can redeem them with youth brands.",
  },
  {
    q: "How do I get early access?",
    a: "Join the early-access list from the For Students page. Colleges can send a partnership inquiry from the For Colleges page.",
  },
];
