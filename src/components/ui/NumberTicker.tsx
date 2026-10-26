"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/** Counts up from 0 when scrolled into view. `value` is the final number; prefix/suffix wrap it. */
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
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [n, setN] = useState(value); // final value first, so no-JS / reduced-motion readers get the real number

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = animate(0, value, { duration: 1.8, ease: "easeOut", onUpdate: setN });
    return () => controls.stop();
  }, [inView, value]);

  const text = `${prefix}${n.toFixed(decimals)}${suffix}`;
  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value.toFixed(decimals)}${suffix}`}>
      <span aria-hidden>{text}</span>
    </span>
  );
}
