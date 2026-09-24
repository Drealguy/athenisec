import AboutHero from "@/components/AboutHero";
import AboutIntro from "@/components/AboutIntro";
import AboutValues from "@/components/AboutValues";
import AboutTeam from "@/components/AboutTeam";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "About Us",
  description:
    "Meet the Athenisec team — compliance specialists helping SMBs in regulated industries achieve and maintain SOC 2, HIPAA, ISO 27001, and more.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutTeam />
      <WhyChooseUs />
      <CtaBanner />
    </main>
  );
}
