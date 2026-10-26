import Image from "next/image";
import { cn } from "@/lib/utils";

/** Horizontal lockup from sm up; icon-only below sm (set `compact` to always show the icon). */
export default function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <>
      <Image
        src="/logo-icon.png"
        alt="SkillPrep"
        width={480}
        height={598}
        priority
        className={cn("h-9 w-auto", compact ? "block" : "sm:hidden", className)}
      />
      {!compact && (
        <Image
          src="/logo-horizontal.png"
          alt="SkillPrep"
          width={833}
          height={259}
          priority
          className={cn("hidden h-11 w-auto sm:block", className)}
        />
      )}
    </>
  );
}
