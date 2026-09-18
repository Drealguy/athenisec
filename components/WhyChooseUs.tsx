import Link from "next/link";

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

const REASONS = [
  {
    title: "Expertise You Can Trust",
    description:
      "Our team has years of experience guiding startups through the complexities of compliance.",
  },
  {
    title: "Highest Standards",
    description:
      "Your compliance will meet the highest standards and exceed the expectations of your most demanding clients and partners.",
  },
  {
    title: "End-to-End Service",
    description:
      "We're not just advisors, we're hands on keyboards. We handle every step of your compliance journey as members of your team.",
  },
  {
    title: "Fastest Results",
    description:
      "We fast track your compliance because our team takes on all the heavy lifting so your team can focus on your real mission.",
  },
];

import { RevealGroup } from "@/components/Reveal";

export default function WhyChooseUs() {
  return (
    <section className="bg-brand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <RevealGroup className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-heading text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
              Why Choose Athenisec?
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70">
              Trusted by high-growth companies because we simplify
              compliance, save you time, and ensure your security meets the
              highest standards as you scale.
            </p>
            <Link
              href="/case-studies"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-brand transition-colors hover:bg-white/90"
            >
              View Case Studies
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 sm:p-10">
            {REASONS.map((reason, index) => {
              const isLast = index === REASONS.length - 1;
              return (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-medium text-white">
                      {index + 1}
                    </span>
                    {!isLast && <div className="mt-1 w-px flex-1 bg-gray-200" />}
                  </div>
                  <div className={isLast ? "" : "pb-8"}>
                    <h3 className="font-heading text-lg font-medium tracking-[-0.03em] text-gray-900">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
