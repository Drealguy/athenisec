import { RevealGroup } from "@/components/Reveal";

export default function AboutIntro() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <RevealGroup className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <span className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
          Our Mission
        </span>
        <p className="font-heading mt-6 text-2xl leading-snug font-medium tracking-[-0.03em] text-gray-900 sm:text-3xl lg:text-4xl">
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
