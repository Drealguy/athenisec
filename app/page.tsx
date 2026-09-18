import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesMarquee from "@/components/IndustriesMarquee";
import CaseStudies from "@/components/CaseStudies";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <WhyChooseUs />
      <IndustriesMarquee />
      <CaseStudies />
      <CtaBanner />
    </main>
  );
}
