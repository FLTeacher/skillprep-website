"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

/**
 * Counts up from 0 every time it scrolls into view, and resets once it has fully left the viewport.
 * `value` is the final number; prefix/suffix (e.g. "+", "%", "M") are always rendered around it.
 */
export default function NumberTicker({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value); // final value first, so no-JS and reduced-motion readers get the real number

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let controls: { stop: () => void } | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        controls?.stop();
        if (entry.intersectionRatio >= 0.4) {
          controls = animate(0, value, {
            duration: 1.8,
            ease: "easeOut",
            onUpdate: setN,
            onComplete: () => setN(value),
          });
        } else if (!entry.isIntersecting) {
          setN(0); // off-screen: reset so the next entry counts up again
        }
      },
      { threshold: [0, 0.4] }
    );
    observer.observe(el);
    return () => {
      controls?.stop();
      observer.disconnect();
    };
  }, [value]);

  const label = `${prefix}${value.toFixed(decimals)}${suffix}`;
  return (
    <span ref={ref} className={className} aria-label={label}>
      <span aria-hidden>{`${prefix}${n.toFixed(decimals)}${suffix}`}</span>
    </span>
  );
}
