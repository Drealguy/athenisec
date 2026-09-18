import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import ScrollFillText from "@/components/ScrollFillText";
import { RevealGroup } from "@/components/Reveal";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} | Athenisec`,
    description: study.description,
  };
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

/** Numbered list shared by Key Challenges and Our Approach. */
function DetailSection({
  eyebrow,
  heading,
  items,
  numbered,
  className = "bg-white",
}: {
  eyebrow: string;
  heading: string;
  items: string[];
  numbered?: boolean;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
            {eyebrow}
          </span>
          <ScrollFillText
            text={heading}
            className="font-heading text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl"
          />
        </div>

        <RevealGroup className="mt-12 border-t border-gray-200">
          {items.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-5 border-b border-gray-200 py-6"
            >
              {numbered ? (
                <span className="font-heading w-10 shrink-0 text-2xl leading-none font-medium text-gray-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : (
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              )}
              <p className="text-base leading-relaxed text-gray-600">{item}</p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main className="flex-1">
      <PageHero
        title={study.brand}
        image={{
          src: "/images/hero-team.jpg",
          alt: `${study.brand} compliance engagement`,
        }}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-12">
            <span className="flex items-start gap-2 text-sm text-gray-500">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
              About the client
            </span>
            <div>
              <ScrollFillText
                text={study.title}
                className="font-heading text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl"
              />
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-500">
                {study.about}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DetailSection
        eyebrow="What stood in the way"
        heading="Key challenges"
        items={study.challenges}
        numbered
        className="bg-gray-50"
      />

      <DetailSection
        eyebrow="How we delivered"
        heading="Our approach"
        items={study.approach}
      />

      <CtaBanner />
    </main>
  );
}
