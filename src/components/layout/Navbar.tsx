"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Primary"
        className={cn(
          "glass mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 transition-all duration-300",
          scrolled ? "shadow-xl shadow-black/30" : "bg-transparent backdrop-blur-none border-transparent"
        )}
      >
        <Link href="/" aria-label="SkillPrep home" className="relative z-10">
          <Logo />
        </Link>

        <ul className="relative z-10 hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-white",
                    active ? "bg-white/10 text-white" : "text-purple-muted"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="relative z-10 flex items-center gap-2">
          <Link href="/for-students#early-access" className="btn-primary hidden sm:inline-flex">
            Get Early Access
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="glass mx-auto mt-2 max-w-6xl p-3 lg:hidden"
          >
            <ul className="relative z-10 flex flex-col">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-purple-muted hover:bg-white/5 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="p-2">
                <Link href="/for-students#early-access" className="btn-primary w-full">
                  Get Early Access
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
