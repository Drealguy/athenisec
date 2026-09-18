import Reveal from "@/components/Reveal";
import ScrollFillText from "@/components/ScrollFillText";

export type FrameworkStep = { title: string; body: string };

/**
 * Vertical process timeline for a Frameworks detail page (SOC 2, HIPAA,
 * etc.). Each step reveals on its own as it scrolls into view, since the
 * list is long enough to span several screens.
 */
export default function FrameworkTimeline({
  eyebrow,
  heading,
  steps,
}: {
  eyebrow: string;
  heading: string;
  steps: FrameworkStep[];
}) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
            {eyebrow}
          </span>
          <ScrollFillText
            text={heading}
            className="font-heading text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-5xl"
          />
        </div>

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute top-2 bottom-2 left-4 w-px bg-gray-200 sm:left-5" />

          <div className="space-y-14 sm:space-y-16">
            {steps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={Math.min(index, 4) * 80}
                className="relative flex gap-6 sm:gap-8"
              >
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-500 sm:h-10 sm:w-10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-heading text-xl font-medium tracking-[-0.03em] text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
