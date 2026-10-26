export const SITE = {
  name: "SkillPrep",
  url: "https://skillprep.in",
  tagline: "Your degree gets you in the room. We get you the job.",
  description:
    "SkillPrep is an AI-native employability platform for Indian colleges and students: assessment, upskilling and career guidance in one place.",
};

export const NAV_LINKS = [
  { href: "/for-students", label: "For Students" },
  { href: "/for-colleges", label: "For Colleges" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
] as const;

export const FOOTER_LINKS = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/for-students", label: "For Students" },
    { href: "/for-colleges", label: "For Colleges" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export const SOCIALS = [
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/skillprep_india/" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/skillprep/" },
  { key: "x", label: "X", href: "https://x.com/skillprep_ofc" },
  { key: "discord", label: "Discord", href: "https://discord.gg/ktSMhx8rW" },
  { key: "reddit", label: "Reddit", href: "https://www.reddit.com/user/skillprep/" },
] as const;
