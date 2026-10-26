import LegalPage from "@/components/ui/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Privacy Policy", description: "How SkillPrep collects, uses and protects your information.", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { h: "Information we collect", p: "When you join early access, request a demo or contact us, we collect the details you provide, such as your name, email, phone number, college or institution, city, role and message." },
        { h: "How we use it", p: "We use your information to respond to you, give you early access, onboard partner colleges, and improve SkillPrep. We do not sell your personal information." },
        { h: "Analytics", p: "We use analytics tools to understand how the site is used. These may set cookies or similar identifiers." },
        { h: "Storage and security", p: "Your information is stored with our service providers and protected with reasonable safeguards. No system is completely secure." },
        { h: "Your rights", p: "You can ask to access, correct or delete your information. Contact us through the Contact page." },
        { h: "Changes", p: "We may update this policy. The latest version will always be on this page." },
      ]}
    />
  );
}
