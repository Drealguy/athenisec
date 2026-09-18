import Image from "next/image";
import Link from "next/link";
import HoverSwapText from "@/components/HoverSwapText";

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

/**
 * Centred title over a full-bleed photograph, used for interior landing
 * pages. The intro and CTA are optional: Case Studies leads with the
 * title alone, while the Who We Serve pages carry both.
 */
export default function PageHero({
  title,
  intro,
  cta,
  image,
}: {
  title: string;
  intro?: string;
  cta?: { label: string; href: string };
  image: { src: string; alt: string };
}) {
  return (
    <section className="relative isolate flex min-h-[60vh] w-full items-center justify-center overflow-hidden bg-[#001238] pt-32 sm:pt-40">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#001238]/65" />

      <div className="mx-auto max-w-4xl px-5 pb-16 text-center sm:px-6 sm:pb-20 lg:px-8">
        <h1 className="font-heading text-4xl font-medium tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        {intro ? (
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/75">
            {intro}
          </p>
        ) : null}

        {cta ? (
          <Link
            href={cta.href}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
          >
            <HoverSwapText>{cta.label}</HoverSwapText>
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
