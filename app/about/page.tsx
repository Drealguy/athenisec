import AboutHero from "@/components/AboutHero";
import AboutIntro from "@/components/AboutIntro";
import AboutValues from "@/components/AboutValues";
import AboutExpertise from "@/components/AboutExpertise";
import AboutTeam from "@/components/AboutTeam";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutExpertise />
      <AboutTeam />
      <WhyChooseUs />
      <CtaBanner />
    </main>
  );
}
