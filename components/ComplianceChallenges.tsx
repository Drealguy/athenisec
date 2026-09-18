"use client";

import { useState } from "react";
import { RevealGroup } from "@/components/Reveal";

function ChevronDownIcon({ className = "" }: { className?: string }) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export type Challenge = { title: string; description: string };

/**
 * Same sticky-column + accordion layout as the homepage's Core Services,
 * minus the image box. Shared by every Who We Serve page — only the
 * content prop changes.
 */
export default function ComplianceChallenges({
  intro,
  challenges,
}: {
  intro: string;
  challenges: Challenge[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <RevealGroup className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-heading text-3xl font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl">
              Key Compliance Challenges
            </h2>
            <p className="mt-4 text-base text-gray-500">{intro}</p>
          </RevealGroup>

          <RevealGroup className="border-t border-gray-100">
            {challenges.map((challenge, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={challenge.title} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading flex-1 text-lg font-medium tracking-[-0.03em] text-gray-900">
                      {challenge.title}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="pb-6 text-sm leading-relaxed text-gray-500">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
