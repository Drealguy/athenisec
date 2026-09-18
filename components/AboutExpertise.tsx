const PLACEHOLDER_LOGOS = 6;

export default function AboutExpertise() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl">
          Our Expertise
        </h2>
        <p className="mt-4 text-base text-gray-500">
          With years of experience across a wide range of industries,
          Athenisec is equipped to handle the most complex compliance
          challenges.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {Array.from({ length: PLACEHOLDER_LOGOS }).map((_, i) => (
            <div key={i} className="h-8 w-28 rounded-md bg-gray-200" />
          ))}
        </div>
      </div>
    </section>
  );
}
