export type LegalSection = { heading: string; body: React.ReactNode };

/**
 * Shared layout for Privacy Policy / Cookie Policy / Terms of Service.
 * Plain prose, no photographic hero — these are reference documents, not
 * marketing pages, so they use a lighter header than PageHero.
 */
export default function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <main className="flex-1 bg-white">
      <section className="pt-32 pb-10 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
            {eyebrow}
          </span>
          <h1 className="font-heading mt-4 text-4xl font-medium tracking-[-0.03em] text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-gray-400">Last updated: {lastUpdated}</p>
          {intro ? (
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-gray-600">
              {intro}
            </div>
          ) : null}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          {sections.map((s) => (
            <div key={s.heading} className="border-t border-gray-100 py-8 first:border-t-0">
              <h2 className="font-heading text-xl font-medium tracking-[-0.03em] text-gray-900">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-gray-600">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
