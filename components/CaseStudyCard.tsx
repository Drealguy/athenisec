"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { CaseStudy } from "@/lib/case-studies";

/**
 * Case study card. The framework tag is hidden until hover, then cycles
 * through every framework the engagement covered — so a card advertises
 * its full scope without crowding the resting state.
 */
export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [hovered, setHovered] = useState(false);
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    if (!hovered || study.tags.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setTagIndex((i) => (i + 1) % study.tags.length);
    }, 1300);

    return () => window.clearInterval(id);
  }, [hovered, study.tags.length]);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        // Reset here rather than in an effect: this is the event that
        // ends the cycle, so no extra render pass is needed.
        setTagIndex(0);
      }}
      onFocus={() => setHovered(true)}
      onBlur={() => {
        setHovered(false);
        setTagIndex(0);
      }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-blue-50/60 transition-colors hover:bg-blue-50"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <ImagePlaceholder label="800 × 600" className="h-full w-full" />

        <span
          className={`absolute top-4 left-4 flex items-center overflow-hidden rounded-full bg-[#001238] px-4 py-2 text-xs font-medium text-white transition-all duration-300 ${
            hovered
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          <span key={tagIndex} className="animate-tag-swap block">
            {study.tags[tagIndex]}
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-heading text-xl leading-snug font-medium tracking-[-0.03em] text-gray-900">
          {study.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          {study.description}
        </p>

        <Link
          href={`/case-studies/${study.slug}`}
          className="mt-6 inline-flex w-fit items-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:border-brand hover:bg-white"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
