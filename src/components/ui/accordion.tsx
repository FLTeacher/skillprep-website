"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: AccordionPrimitive.AccordionItemProps) {
  return <AccordionPrimitive.Item className={cn("border-b border-purple-muted/15 last:border-0", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 py-5 text-left font-display text-base font-bold transition-colors hover:text-cyan-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-brand sm:text-lg",
          className
        )}
        {...props}
      >
        {children}
        <CaretDown className="shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" weight="bold" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, children, ...props }: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm text-purple-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:text-base"
      {...props}
    >
      <div className={cn("pb-5", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
