const STATS = [
  { value: "30+", label: "years in compliance and security" },
  { value: "200+", label: "startups guided to regulatory success" },
  { value: "300+", label: "certifications, frameworks, and audits supported" },
];

import { RevealGroup } from "@/components/Reveal";

export default function AboutTeam() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <RevealGroup className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <h2 className="font-heading text-3xl font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl">
              Our Expert Team
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Our team is made up of top talent from leading universities,
              bringing strong technical backgrounds and a deep understanding
              of security and compliance. Based in the heart of New York
              City, we work in person to foster collaboration, innovation,
              and a hands-on approach to solving complex challenges. This
              combination of expertise and close-knit teamwork ensures we
              deliver the highest level of service to help your company
              succeed.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-medium tracking-[-0.03em] text-brand">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
