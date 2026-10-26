import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

// Feather the portrait's edges so it melts into the page: no visible rectangle.
const FEATHER = "radial-gradient(ellipse 68% 68% at 50% 46%, #000 52%, transparent 100%)";

export default function MiraSpotlight() {
  return (
    <section aria-labelledby="mira-title" className="container-page pt-24">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-4">
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div aria-hidden className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-brand/35 blur-[90px]" />
          <div aria-hidden className="absolute -left-4 top-6 h-24 w-24 animate-orb rounded-full bg-purple-bright/40 blur-2xl" />
          <div aria-hidden className="absolute -right-2 bottom-10 h-32 w-32 animate-orb rounded-full bg-cyan-brand/30 blur-2xl [animation-delay:-8s]" />
          <Image
            src="/mira.png"
            alt="MIRA, SkillPrep's AI career guide"
            width={1100}
            height={1100}
            sizes="(min-width: 768px) 45vw, 90vw"
            className="relative h-auto w-full"
            style={{ WebkitMaskImage: FEATHER, maskImage: FEATHER }}
          />
        </div>

        <div className="glass p-6 sm:p-10">
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-brand">Your AI career guide</p>
            <h2 id="mira-title" className="mt-3 text-4xl sm:text-5xl">Meet MIRA</h2>
            <p className="mt-4 text-lg text-purple-muted">
              MIRA reads your strengths and gaps, builds your plan, and keeps you one step ahead.
            </p>

            <figure className="mt-7">
              <div className="max-w-md rounded-2xl rounded-tl-sm border border-cyan-brand/30 bg-cyan-brand/10 px-5 py-4 shadow-lg shadow-cyan-brand/10">
                <p className="text-sm sm:text-base">
                  Hi! Your Employability Score just hit 86. You&apos;re in the top 15%. Let&apos;s close the last few gaps before placements.
                </p>
              </div>
              <figcaption className="mt-2 pl-1 text-xs text-purple-muted">MIRA · sample conversation</figcaption>
            </figure>

            <Link href="/features#mira" className="btn-primary mt-8">
              Meet MIRA <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
