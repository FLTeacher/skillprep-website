import Link from "next/link";
import Logo from "@/components/ui/Logo";
import SocialIcon from "@/components/ui/SocialIcon";
import { FOOTER_LINKS, SITE, SOCIALS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-3 pb-6 pt-24 sm:px-6">
      <div className="glass container-page !max-w-6xl px-6 py-12 sm:px-10">
        <div className="relative z-10 grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo className="sm:h-16" />
            <p className="mt-4 max-w-xs text-sm text-purple-muted">{SITE.tagline}</p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map(({ key, label, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-purple-muted/25 text-purple-muted transition-colors hover:border-cyan-brand hover:text-cyan-brand"
                  >
                    <SocialIcon name={key} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <nav key={group} aria-label={group}>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-white">
                  {group}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-purple-muted transition-colors hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-12 flex flex-col gap-2 border-t border-purple-muted/15 pt-6 text-xs text-purple-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} SkillPrep. All rights reserved.</p>
          <p>Made in India, for India&apos;s next workforce.</p>
        </div>
      </div>
    </footer>
  );
}
