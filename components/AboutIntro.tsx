export default function AboutIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <p className="text-base text-gray-500">
          Athenisec is a professional cybersecurity compliance practice,
          helping high-growth companies in regulated industries achieve and
          maintain compliance without building expensive in-house teams.
        </p>

        <span className="mt-12 inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-500 uppercase">
          Our Mission
        </span>
        <p className="mt-5 text-base text-gray-500">
          At Athenisec, our mission is to solve compliance for high-growth
          companies, helping them meet key standards like SOC 2, ISO 27001,
          GDPR, and HIPAA. We take on the work and responsibility for
          compliance so companies can focus on innovation, growth, and
          delivering value.
        </p>
      </div>
    </section>
  );
}
