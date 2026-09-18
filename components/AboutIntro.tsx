import { RevealGroup } from "@/components/Reveal";

export default function AboutIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <RevealGroup className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium tracking-wide text-gray-500 uppercase">
          Our Mission
        </span>
        <p className="mt-5 text-base text-gray-500">
          At Athenisec, our mission is to solve compliance for high-growth
          companies, helping them meet key standards like SOC 2, ISO 27001,
          GDPR, and HIPAA. We take on the work and responsibility for
          compliance so companies can focus on innovation, growth, and
          delivering value.
        </p>
      </RevealGroup>
    </section>
  );
}
