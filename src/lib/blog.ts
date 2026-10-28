// Placeholder posts. Replace `body` with real articles; each post links to a conversion page.
export type Post = {
  slug: string;
  title: string;
  description: string;
  body: string[];
  cta: { href: "/for-students" | "/for-colleges"; heading: string; text: string; label: string };
};

export const POSTS: Post[] = [
  {
    slug: "how-to-find-a-job-in-2026-with-no-experience-india",
    title: "How to Find a Job in 2026 With No Experience (India)",
    description: "A practical starting point for Indian graduates with no work experience.",
    body: [
      "Placeholder draft. A full guide is coming soon.",
      "Only 56.35% of Indian graduates are job-ready (India Skills Report 2026), and entry-level roles often ask for experience you haven't had the chance to get. The way through is to build proof of skill before you apply.",
      "SkillPrep helps you do exactly that: build skills, earn a verified Employability Score and get matched to entry roles.",
    ],
    cta: { href: "/for-students", heading: "Ready to get job-ready?", text: "Build real skills, earn a verified Employability Score and get matched to entry roles.", label: "See how SkillPrep helps students" },
  },
  {
    slug: "will-ai-take-my-fresher-job-after-btech",
    title: "Will AI Take My Fresher Job After B.Tech? The Honest Answer",
    description: "What AI really changes for freshers, and what to do about it.",
    body: [
      "Placeholder draft. A full article is coming soon.",
      "More than 90% of employees now use generative AI tools (India Skills Report 2026). The freshers who stand out aren't the ones who avoid AI. They're the ones who can show real skill and use AI well.",
      "Building verifiable skills is the best response, and it's what SkillPrep is for.",
    ],
    cta: { href: "/for-students", heading: "Turn AI into your advantage", text: "Build verifiable skills and prove them with an Employability Score employers can trust.", label: "Start building real skills" },
  },
  {
    slug: "why-entry-level-jobs-demand-experience-and-how-to-beat-it",
    title: "Why Entry-Level Jobs Demand Experience, and How to Beat It",
    description: "The experience catch-22 for freshers, and how project-based proof gets around it.",
    body: [
      "Placeholder draft. A full article is coming soon.",
      "Project-based hiring is up 38% year on year (India Skills Report 2026), which is good news if you have something real to show. Demonstrated skills can stand in for years on a CV.",
      "A verified Employability Score gives you that proof.",
    ],
    cta: { href: "/for-students", heading: "Show employers what you can do", text: "A verified Employability Score is proof of skill that stands in for experience.", label: "Get your Employability Score" },
  },
  {
    slug: "the-paper-engineer-problem-why-cgpa-cant-predict-placements",
    title: "The Paper Engineer Problem: Why CGPA Can't Predict Placements",
    description: "Why marks don't show who will clear interviews, and what placement cells can measure instead.",
    body: [
      "Placeholder draft. A full article is coming soon.",
      "A high CGPA measures exam performance, not workplace readiness. With AI making assignments easy to fake, transcripts say even less about real capability.",
      "Placement cells need a better signal: assessed, demonstrated skill.",
    ],
    cta: { href: "/for-colleges", heading: "See who is really job-ready", text: "SkillPrep assesses demonstrated skill, so your placement cell sees beyond CGPA.", label: "See the college assessment platform" },
  },
];
