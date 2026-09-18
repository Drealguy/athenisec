import CardGrid, { type GridCard } from "@/components/CardGrid";
import ScrollFillText from "@/components/ScrollFillText";

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </svg>
  );
}

function AlertIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10.3 4.3 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

function LayersIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3 9 5-9 5-9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

const ICONS = [ClockIcon, CompassIcon, AlertIcon, LayersIcon];

export type Challenge = { title: string; description: string };

/**
 * Key compliance challenges as box cards. Shared by every Who We Serve
 * page — only the content prop changes.
 */
export default function ComplianceChallenges({
  intro,
  challenges,
}: {
  intro: string;
  challenges: Challenge[];
}) {
  const cards: GridCard[] = challenges.map((challenge, index) => ({
    ...challenge,
    icon: ICONS[index % ICONS.length],
  }));

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
            What stands in the way
          </span>
          <ScrollFillText
            text="Key compliance challenges"
            className="font-heading text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-5xl"
          />
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-500">
          {intro}
        </p>

        <div className="mt-12">
          <CardGrid cards={cards} tone="dark" />
        </div>
      </div>
    </section>
  );
}
