"use client";

import FeatureAccordion, { type FeatureItem } from "@/components/FeatureAccordion";

function CloudIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6-1.7A4.5 4.5 0 0 0 7 18Z" />
    </svg>
  );
}

function UserShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.7-3.4 3-5.2 5.5-5.2s3.6.9 4.6 2.3" />
      <path d="M18 12.5l3 1.2v2.3c0 2.3-1.5 3.9-3 4.5-1.5-.6-3-2.2-3-4.5v-2.3l3-1.2Z" />
    </svg>
  );
}

function BugIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="8" y="8" width="8" height="10" rx="4" />
      <path d="M12 8V6M9.5 9l-2.5-2M14.5 9l2.5-2M5 13h3M16 13h3M6 18l2.5-1.8M18 18l-2.5-1.8" />
    </svg>
  );
}

function KeyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12 19 4M16 7l2.5 2.5M13.5 9.5 16 12" />
    </svg>
  );
}

const ICONS = [CloudIcon, UserShieldIcon, BugIcon, KeyIcon];

export type Highlight = { title: string; description: string };

/**
 * "Highlights of [Framework] Compliance" — same expandable card stack as
 * Why Choose Athenisec / How Athenisec Is Different, reused per Frameworks
 * detail page with that framework's own list of highlights.
 */
export default function FrameworkHighlights({
  heading,
  intro,
  items,
  image,
}: {
  heading: string;
  intro: string;
  items: Highlight[];
  image?: { src: string; alt: string };
}) {
  const withIcons: FeatureItem[] = items.map((item, index) => ({
    ...item,
    icon: ICONS[index % ICONS.length],
  }));

  return (
    <FeatureAccordion
      heading={heading}
      intro={intro}
      items={withIcons}
      image={
        image ?? {
          src: "/images/hero-team.jpg",
          alt: "The Athenisec team at work",
        }
      }
      className="bg-gray-50"
    />
  );
}
