import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollFillText from "@/components/ScrollFillText";
import HoverSwapText from "@/components/HoverSwapText";
import { CASE_STUDIES } from "@/lib/case-studies";


function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function CaseStudies() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
            Proven outcomes, audited and maintained
          </span>
          <ScrollFillText
            text="See how we’ve helped companies achieve and maintain compliance."
            className="font-heading text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-5xl"
          />
        </div>

        {/* Each row sticks, so the next one scrolls up and overlaps it. The
            solid background is what makes the overlap read cleanly. */}
        <div className="mt-16">
          {CASE_STUDIES.slice(0, 3).map((study, index) => (
            <div
              key={index}
              className="sticky top-24 border-t border-gray-200 bg-white pt-10 pb-14"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,22rem)] lg:gap-12">
                <span className="font-heading text-6xl leading-none font-medium text-gray-200 lg:text-8xl">
                  {index + 1}
                </span>

                <div>
                  <h3 className="font-heading text-xl font-medium tracking-[-0.03em] text-gray-900">
                    {study.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-500">
                    {study.description}
                  </p>

                  <ul className="mt-8 max-w-lg">
                    {study.tags.map((tag) => (
                      <li
                        key={tag}
                        className="flex items-center gap-3 border-b border-gray-100 py-3 text-sm text-gray-700"
                      >
                        <CheckIcon className="h-4 w-4 shrink-0 text-brand" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <ImagePlaceholder
                    label="800 × 600"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#001d61]"
          >
            <HoverSwapText>View All Case Studies</HoverSwapText>
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
