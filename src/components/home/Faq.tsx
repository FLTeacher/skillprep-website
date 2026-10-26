import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/lib/home-content";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <section aria-labelledby="faq-title" className="container-page py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 id="faq-title" className="mb-10 text-center text-3xl sm:text-5xl">
        Frequently asked questions
      </h2>
      <div className="glass mx-auto max-w-3xl px-6 sm:px-8">
        <Accordion type="single" collapsible className="relative z-10">
          {FAQS.map(({ q, a, link }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>
                {a}
                {link && (
                  <Link href={link.href} className="mt-3 block font-semibold text-cyan-brand hover:underline">
                    {link.label}
                  </Link>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
