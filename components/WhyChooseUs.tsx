"use client";

import FeatureAccordion, { type FeatureItem } from "@/components/FeatureAccordion";

function BadgeCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l2.2 1.6 2.7-.2.9 2.6 2.2 1.6-1 2.5 1 2.5-2.2 1.6-.9 2.6-2.7-.2L12 21l-2.2-1.6-2.7.2-.9-2.6L4 15.4l1-2.5-1-2.5 2.2-1.6.9-2.6 2.7.2Z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.6" />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 4 2.5 5.1 5.5.8-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-3.9 5.5-.8Z" />
    </svg>
  );
}

function HandshakeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m11 17 2 2 4-4 3-3-4-4-2 2h-4L7 13" />
      <path d="M4 12l3-3 3 3-3 3z" />
    </svg>
  );
}

function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M13 3 5 14h6l-1 7 8-11h-6z" />
    </svg>
  );
}

const REASONS: FeatureItem[] = [
  {
    title: "Expertise You Can Trust",
    icon: BadgeCheckIcon,
    description:
      "Our team has years of experience guiding startups through the complexities of compliance.",
  },
  {
    title: "Highest Standards",
    icon: StarIcon,
    description:
      "Your compliance will meet the highest standards and exceed the expectations of your most demanding clients and partners.",
  },
  {
    title: "End-to-End Service",
    icon: HandshakeIcon,
    description:
      "We're not just advisors, we're hands on keyboards. We handle every step of your compliance journey as members of your team.",
  },
  {
    title: "Fastest Results",
    icon: BoltIcon,
    description:
      "We fast track your compliance because our team takes on all the heavy lifting so your team can focus on your real mission.",
  },
];

export default function WhyChooseUs() {
  return (
    <FeatureAccordion
      heading="Why Choose Athenisec?"
      intro="Trusted by high-growth companies because we simplify compliance, save you time, and ensure your security meets the highest standards as you scale."
      items={REASONS}
      image={{
        src: "/images/why-choose-us-team.jpg",
        alt: "The Athenisec team at work",
      }}
    />
  );
}
