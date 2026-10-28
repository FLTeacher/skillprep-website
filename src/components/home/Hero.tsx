"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import { BEATS, EMPLOYABILITY_SCORE } from "@/lib/hero";
import { cn } from "@/lib/utils";

type NetInfo = { saveData?: boolean };

function ScoreRing({ value }: { value: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-16 w-16 shrink-0" role="img" aria-label={`Employability score ${value}`}>
      <svg viewBox="0 0 64 64" className="-rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(174,164,205,0.2)" strokeWidth="6" />
        <circle
          cx="32" cy="32" r={r} fill="none" stroke="#33b3d9" strokeWidth="6" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-stat text-2xl">{value}</span>
    </div>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [live, setLive] = useState(false); // play video only when motion + data allow; else stills
  const [mobile, setMobile] = useState(false);
  const [prev, setPrev] = useState<number | null>(null); // outgoing clip, kept mounted only while it fades out
  const [onScreen, setOnScreen] = useState(true);
  const lastActive = useRef(0);
  const [reached, setReached] = useState(1); // posters are only rendered up to the next beat, so they load as the story advances

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: NetInfo }).connection?.saveData;
    setLive(!reduce && !saveData);

    const mq = window.matchMedia("(max-width: 767px)");
    const onMq = () => setMobile(mq.matches);
    onMq();
    mq.addEventListener("change", onMq);

    // Stop all video work once the hero has scrolled away.
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { rootMargin: "100px" });
    if (root.current) io.observe(root.current);
    return () => {
      mq.removeEventListener("change", onMq);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (lastActive.current === active) return;
    setPrev(lastActive.current);
    setReached((r) => Math.max(r, active + 1));
    lastActive.current = active;
    const t = setTimeout(() => setPrev(null), 800);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-beat]").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const skip = () =>
    document.getElementById("two-doors")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={root} aria-label="The SkillPrep student journey" className="relative">
      {/* Pinned film layer */}
      <div aria-hidden className="sticky top-0 -mb-[100svh] h-[100svh] w-full overflow-hidden bg-navy-deep">
        {BEATS.map((b, i) => {
          // Phones: only the active clip (plus the one fading out) is mounted. Desktop also prefetches the neighbours.
          const mounted = live && onScreen && (i === active || i === prev || (!mobile && Math.abs(i - active) <= 1));
          return (
            <div
              key={b.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-out",
                i === active ? "opacity-100" : "opacity-0"
              )}
            >
              {/* Poster is the first paint and the stills fallback; lazy past the first beats. */}
              {i <= reached && (
              <picture>
                <source media="(max-width: 767px)" srcSet={b.posterMobile} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.poster}
                  alt=""
                  loading={i < 2 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
              )}
              {mounted && (
                <video
                  src={mobile ? b.videoMobile : b.video}
                  poster={mobile ? b.posterMobile : b.poster}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload={i === active ? "auto" : "metadata"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/35 to-navy-deep/10 max-md:bg-gradient-to-t max-md:from-navy-deep/90 max-md:via-navy-deep/30 max-md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep to-transparent" />
      </div>

      {/* Story panels scroll over the film */}
      <div className="relative z-10">
        {BEATS.map((b, i) => {
          const right = i % 2 === 0; // cards alternate sides on desktop
          return (
            <div
              key={b.id}
              data-beat
              className={cn(
                "container-page flex min-h-[100svh] items-end pb-20 md:items-center md:pb-0",
                !b.card ? "" : right ? "md:justify-end" : "md:justify-start"
              )}
            >
              {i === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="max-w-2xl pt-24"
                >
                  <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-brand">
                    AI employability platform for India
                  </p>
                  <h1 className="text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
                    Your degree gets you in the room.{" "}
                    <span className="bg-brand-gradient bg-clip-text text-transparent">
                      We get you the job.
                    </span>
                  </h1>
                  <p className="mt-5 max-w-lg text-base text-purple-muted sm:text-lg">
                    Follow one student&apos;s first day to first job, and see how SkillPrep turns
                    potential into a hire.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link href="/for-students#early-access" className="btn-primary">
                      Get Early Access <ArrowRight weight="bold" />
                    </Link>
                    <button type="button" onClick={skip} className="btn-ghost">
                      Skip intro <CaretDown weight="bold" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                b.card && (
                  <motion.article
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="glass w-full max-w-md p-6 sm:p-7"
                  >
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-brand">
                          {b.card.kicker}
                        </p>
                        {b.id === "phone" && <ScoreRing value={EMPLOYABILITY_SCORE} />}
                      </div>
                      <h2 className="mt-3 text-2xl sm:text-3xl">{b.card.title}</h2>
                      <p className="mt-3 text-sm text-purple-muted sm:text-base">{b.card.body}</p>
                      <Link
                        href={b.card.href}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-brand"
                      >
                        {b.card.cta} <ArrowRight weight="bold" />
                      </Link>
                    </div>
                  </motion.article>
                )
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
