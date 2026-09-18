"use client";

import { useRef } from "react";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

function ArrowLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

const CASE_STUDIES = [
  {
    tags: ["SOC 2", "HIPAA", "GDPR"],
    brand: "Client Name",
    description: "Short summary of the compliance engagement and outcome.",
  },
  {
    tags: ["HIPAA", "ISO 27001"],
    brand: "Client Name",
    description: "Short summary of the compliance engagement and outcome.",
  },
  {
    tags: ["ISO 27001", "SOC 2", "PCI DSS", "GDPR"],
    brand: "Client Name",
    description: "Short summary of the compliance engagement and outcome.",
  },
];

import { RevealGroup } from "@/components/Reveal";

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    scrollRef.current?.scrollBy({ left: direction * 380, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <RevealGroup className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl">
              Case Studies
            </h2>
            <p className="mt-3 max-w-xl text-base text-gray-500">
              See how we&apos;ve helped companies like yours achieve and maintain
              compliance.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900"
            >
              View All Case Studies
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
                aria-label="Previous"
              >
                <ArrowLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
                aria-label="Next"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </RevealGroup>

        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CASE_STUDIES.map((study, index) => (
            <div
              key={index}
              className="w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-100 sm:w-[360px]"
            >
              <div className="relative aspect-[4/3]">
                <ImagePlaceholder label="800 × 600" className="h-full w-full" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-medium tracking-[-0.03em] text-gray-900">
                  {study.brand}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  {study.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-medium text-gray-900">
                    View Case Study
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500">
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
