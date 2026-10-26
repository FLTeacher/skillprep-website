import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import PageHero from "@/components/ui/PageHero";
import LeadForm from "@/components/forms/LeadForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact SkillPrep",
  description: "Get in touch with the SkillPrep team, or chat with us on WhatsApp. Colleges can request a demo from the For Colleges page.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to SkillPrep" lead="A question, an idea or feedback? Send us a message or chat on WhatsApp." />
      <div className="container-page grid gap-6 pb-24 md:grid-cols-[1.4fr_1fr]">
        <section aria-labelledby="msg-title" className="glass p-6 sm:p-10">
          <div className="relative z-10">
            <h2 id="msg-title" className="mb-6 text-2xl sm:text-3xl">Send a message</h2>
            <LeadForm kind="contact" />
          </div>
        </section>
        <div className="space-y-6">
          <section className="glass p-6 sm:p-8">
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl">Chat on WhatsApp</h2>
              <p className="mb-5 mt-2 text-sm text-purple-muted">The quickest way to reach us.</p>
              <a href="https://wa.me/919893787203" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <WhatsappLogo size={20} weight="fill" /> Message us
              </a>
            </div>
          </section>
          <section className="glass p-6 sm:p-8">
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl">Are you a college?</h2>
              <p className="mb-5 mt-2 text-sm text-purple-muted">Request a demo and we&apos;ll onboard your cohort.</p>
              <Link href="/for-colleges#partner" className="btn-ghost">Go to For Colleges</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
