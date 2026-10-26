import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const stat = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-stat", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "SkillPrep | AI Employability Platform for India", template: "%s | SkillPrep" },
  description: SITE.description,
};

export const viewport: Viewport = { themeColor: "#141f2a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${stat.variable}`}>
      <body>
        <AmbientBackground />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
