"use client";

import FeatureAccordion, { type FeatureItem } from "@/components/FeatureAccordion";

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z" />
    </svg>
  );
}

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
  );
}

function AwardIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
    </svg>
  );
}

const ICONS = [ShieldIcon, GlobeIcon, AwardIcon];

export type Differentiator = { title: string; description: string };

export default function HowWeDiffer({
  intro,
  items,
  image,
}: {
  intro: string;
  items: Differentiator[];
  image?: { src: string; alt: string };
}) {
  const withIcons: FeatureItem[] = items.map((item, index) => ({
    ...item,
    icon: ICONS[index % ICONS.length],
  }));

  return (
    <FeatureAccordion
      heading="How Athenisec Is Different"
      intro={intro}
      items={withIcons}
      image={
        image ?? {
          src: "/images/why-choose-us-team.jpg",
          alt: "The Athenisec team at work",
        }
      }
      className="bg-gray-50"
    />
  );
}
