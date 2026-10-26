import LegalPage from "@/components/ui/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Terms of Service", description: "The terms for using the SkillPrep website and services.", path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={[
        { h: "Using SkillPrep", p: "By using this website you agree to these terms. Use it lawfully and do not misuse or attempt to disrupt it." },
        { h: "Early access and services", p: "Early access signups are free and do not guarantee access to any feature or date. Full platform access is provided to students through their college's licence." },
        { h: "Your information", p: "You agree that the information you submit is accurate. How we handle it is described in our Privacy Policy." },
        { h: "Intellectual property", p: "The SkillPrep name, logo, content and software belong to SkillPrep and may not be copied or reused without permission." },
        { h: "Disclaimer", p: "The website is provided as is. SkillPrep does not guarantee employment or any particular outcome." },
        { h: "Changes", p: "We may update these terms. Continued use means you accept the updated terms." },
      ]}
    />
  );
}
