import Hero from "@/components/home/Hero";
import TwoDoors from "@/components/home/TwoDoors";
import MiraSpotlight from "@/components/home/MiraSpotlight";
import FeaturesBento from "@/components/home/FeaturesBento";
import StatsBand from "@/components/home/StatsBand";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <TwoDoors />
      <MiraSpotlight />
      <FeaturesBento />
      <StatsBand />
      <Testimonials />
      <Faq />
    </>
  );
}
