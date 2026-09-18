const VALUES = [
  {
    title: "Value Driven Cybersecurity",
    description:
      "We believe that ROI should be the top factor in cybersecurity and compliance products. We strive to be the best investment our clients make.",
  },
  {
    title: "Exceptional is Our Standard",
    description:
      "Excellence is our foundation. As individuals we strive to be exceptional. As a team, we hold each other to the highest standards.",
  },
  {
    title: "Championship Team",
    description:
      "As a team, we play to win – every team member is expected to excel in their role, push for greatness, and hold themselves to the highest standard of performance.",
  },
  {
    title: "Our Customers Are Under Our Protection",
    description:
      "Our approach to customer service is that we are responsible for your compliance and security outcomes. Our job is to put our clients' best interests first.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl">
          Our Values
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-8"
            >
              <h3 className="font-heading text-lg font-medium tracking-[-0.03em] text-gray-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
