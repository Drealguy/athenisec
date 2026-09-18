import Link from "next/link";
import CardGrid, { type GridCard } from "@/components/CardGrid";
import ScrollFillText from "@/components/ScrollFillText";
import HoverSwapText from "@/components/HoverSwapText";

function GemIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 3h12l3 6-9 12L3 9Z" />
      <path d="M3 9h18M9 3 6 9l6 12 6-12-3-6" />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 4 2.5 5.1 5.5.8-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-3.9 5.5-.8Z" />
    </svg>
  );
}

function TrophyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0Z" />
      <path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M9 20h6M12 14v6" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const VALUES: GridCard[] = [
  {
    title: "Value Driven Cybersecurity",
    icon: GemIcon,
    description:
      "We believe that ROI should be the top factor in cybersecurity and compliance products. We strive to be the best investment our clients make.",
  },
  {
    title: "Exceptional is Our Standard",
    icon: StarIcon,
    description:
      "Excellence is our foundation. As individuals we strive to be exceptional. As a team, we hold each other to the highest standards.",
  },
  {
    title: "Championship Team",
    icon: TrophyIcon,
    description:
      "As a team, we play to win – every team member is expected to excel in their role, push for greatness, and hold themselves to the highest standard of performance.",
  },
  {
    title: "Our Customers Are Under Our Protection",
    icon: ShieldIcon,
    description:
      "Our approach to customer service is that we are responsible for your compliance and security outcomes. Our job is to put our clients' best interests first.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-12">
          <span className="flex items-start gap-2 text-sm text-gray-500">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
            What we hold ourselves to
          </span>
          <ScrollFillText
            text="Our values shape how we work, what we protect, and the standard we hold every engagement to."
            className="font-heading text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-5xl"
          />
        </div>

        <div className="mt-14">
          <CardGrid cards={VALUES} tone="light" />
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
            These are the standards behind every engagement. Talk to us about
            what compliance looks like for your team.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#001d61]"
            >
              <HoverSwapText>Book a Consultation</HoverSwapText>
            </Link>
            <Link
              href="/case-studies"
              className="group inline-flex items-center rounded-full border border-gray-300 px-7 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              <HoverSwapText>Case Studies</HoverSwapText>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
