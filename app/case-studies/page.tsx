import PageHero from "@/components/PageHero";
import CaseStudyCard from "@/components/CaseStudyCard";
import CtaBanner from "@/components/CtaBanner";
import { RevealGroup } from "@/components/Reveal";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata = {
  title: "Case Studies | Athenisec",
  description:
    "How Athenisec has helped companies in regulated industries achieve and maintain compliance.",
};

export default function CaseStudiesPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Case Studies"
        image={{
          src: "/images/hero-team.jpg",
          alt: "An Athenisec advisor reviewing compliance work",
        }}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
