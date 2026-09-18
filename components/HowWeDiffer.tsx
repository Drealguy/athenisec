import { RevealGroup } from "@/components/Reveal";

type IconComponent = (props: { className?: string }) => React.ReactElement;

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z" />
    </svg>
  );
}

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
  );
}

function AwardIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
    </svg>
  );
}

const ICONS: IconComponent[] = [ShieldIcon, GlobeIcon, AwardIcon];

export type Differentiator = { title: string; description: string };

/**
 * Uniform card grid — the same treatment every Who We Serve page uses, so
 * the section reads identically across the sub-menu.
 */
export default function HowWeDiffer({
  items,
}: {
  items: Differentiator[];
}) {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl">
          How Athenisec Is Different
        </h2>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-100 bg-white p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading mt-5 text-xl font-medium tracking-[-0.03em] text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
