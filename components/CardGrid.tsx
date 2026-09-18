import { RevealGroup } from "@/components/Reveal";

type IconComponent = (props: { className?: string }) => React.ReactElement;

export type GridCard = {
  title: string;
  description: string;
  icon: IconComponent;
};

/**
 * Bordered card grid — cards share hairlines instead of sitting in gaps.
 * Used by Core Services and Our Values so both read as one system; only
 * the icon tile tone differs.
 *
 * Server component on purpose: the cards carry icon *functions*, which
 * cannot cross a server/client boundary, and the hover states are pure
 * CSS so no interactivity is needed here.
 */
export default function CardGrid({
  cards,
  tone = "dark",
  columns = 2,
  showReadMore = false,
}: {
  cards: GridCard[];
  tone?: "dark" | "light";
  columns?: 2 | 3;
  showReadMore?: boolean;
}) {
  const tile =
    tone === "dark"
      ? "bg-[#001238] text-white"
      : "bg-gray-100 text-gray-700";

  return (
    <RevealGroup
      className={`grid grid-cols-1 border-t border-l border-gray-200 sm:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : ""
      }`}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="group flex min-h-[15rem] flex-col border-r border-b border-gray-200 p-8 transition-colors hover:bg-gray-50"
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-lg ${tile}`}
          >
            <card.icon className="h-5 w-5" />
          </span>

          <div className="mt-auto pt-10">
            <h3 className="font-heading text-xl font-medium tracking-[-0.03em] text-gray-900">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              {card.description}
            </p>
            {showReadMore ? (
              <span className="mt-5 inline-flex max-h-0 items-center gap-2 overflow-hidden rounded-full border border-gray-300 px-5 py-0 text-sm font-medium text-gray-900 opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:py-2.5 group-hover:opacity-100">
                Read More
              </span>
            ) : null}
          </div>
        </div>
      ))}
    </RevealGroup>
  );
}
