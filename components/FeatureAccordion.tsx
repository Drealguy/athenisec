"use client";

import { useState } from "react";
import Image from "next/image";
import { RevealGroup } from "@/components/Reveal";

type IconComponent = (props: { className?: string }) => React.ReactElement;

export type FeatureItem = {
  title: string;
  description: string;
  icon: IconComponent;
};

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
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
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

/**
 * Two-column feature block: copy and an expandable card stack on the left,
 * a photograph in a tinted panel on the right.
 *
 * The open card fills with the brand colour and reveals its description;
 * the rest collapse to a title row. Shared by "Why Choose Athenisec" and
 * "How Athenisec Is Different" so the treatment stays identical wherever
 * either appears.
 */
export default function FeatureAccordion({
  heading,
  intro,
  items,
  image,
  className = "bg-white",
}: {
  heading: string;
  intro: string;
  items: FeatureItem[];
  image: { src: string; alt: string };
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-md text-base text-gray-500">{intro}</p>

            <RevealGroup className="mt-10 flex flex-col gap-3">
              {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-expanded={isOpen}
                    className={`rounded-2xl px-5 py-4 text-left transition-colors duration-300 sm:px-6 sm:py-5 ${
                      isOpen
                        ? "bg-brand text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon
                        className={`h-5 w-5 shrink-0 ${
                          isOpen ? "text-white" : "text-brand"
                        }`}
                      />
                      <span className="font-heading flex-1 text-lg font-medium tracking-[-0.03em]">
                        {item.title}
                      </span>
                      <ArrowUpRightIcon
                        className={`h-4 w-4 shrink-0 ${
                          isOpen ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </span>

                    <span
                      className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <span className="min-h-0">
                        <span className="mt-3 block pl-8 text-sm leading-relaxed text-white/80">
                          {item.description}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </RevealGroup>
          </div>

          <div className="rounded-3xl bg-blue-50 p-4 sm:p-6 lg:p-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
