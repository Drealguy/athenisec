import Link from "next/link";
import { RevealGroup } from "@/components/Reveal";

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

export default function WhoWeServeHero({
  headline,
  intro,
}: {
  /** Rendered as two lines, matching the design's stacked headline. */
  headline: [string, string];
  intro: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#001238]">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob-1 absolute -top-24 -left-16 h-80 w-80 rounded-full bg-brand/70 blur-3xl" />
        <div className="animate-blob-3 absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <RevealGroup className="relative mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24 lg:px-8">
        <h1 className="font-heading max-w-3xl text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          {headline[0]}
          <br />
          {headline[1]}
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/70">{intro}</p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            Learn More
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </RevealGroup>
    </section>
  );
}
