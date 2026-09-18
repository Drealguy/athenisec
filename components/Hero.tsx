import Link from "next/link";
import Image from "next/image";

const FRAMEWORK_LOGOS = [
  { src: "/logos/pci-dss.png", alt: "PCI DSS Compliant", width: 102, height: 80 },
  { src: "/logos/hipaa.png", alt: "HIPAA Compliance", width: 152, height: 80 },
  { src: "/logos/soc2.png", alt: "SOC 2", width: 91, height: 80 },
  { src: "/logos/iso27001.png", alt: "ISO 27001", width: 83, height: 80 },
  { src: "/logos/gdpr.png", alt: "GDPR", width: 83, height: 80 },
  { src: "/logos/cmmc.png", alt: "CMMC 2.0", width: 109, height: 94 },
];

function LogoGroup() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10">
      {FRAMEWORK_LOGOS.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-6 w-auto shrink-0 opacity-80 grayscale transition-opacity hover:opacity-100 sm:h-9"
        />
      ))}
    </div>
  );
}

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="relative isolate flex min-h-[88vh] w-full flex-col overflow-hidden bg-[#001238] pt-20">
        <Image
          src="/images/hero-team.jpg"
          alt="A compliance team at work"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        {/* Darkened so the headline holds contrast over any part of the photo. */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,18,56,0.92)_0%,rgba(0,18,56,0.75)_45%,rgba(0,18,56,0.5)_100%)]" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-6 lg:px-8">
          <h1 className="font-heading mt-auto max-w-4xl pb-14 text-4xl leading-[1.05] font-medium tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Expert guidance,
            <br />
            tailored solution.
          </h1>

          <div className="grid grid-cols-1 gap-6 border-t border-white/20 py-8 sm:grid-cols-[auto_1fr] sm:gap-10 lg:grid-cols-[auto_minmax(0,24rem)_1fr]">
            <span className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-white/60 uppercase">
              Scroll down
              <ChevronDownIcon className="h-3.5 w-3.5" />
            </span>

            <p className="text-base text-white/70 sm:border-l sm:border-white/20 sm:pl-10">
              Easily adapt to changes and scale your operations with our
              flexible infrastructure, designed to support your business growth.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
              >
                Get Started
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>

        {/* Floating highlight card */}
        <div className="pointer-events-none absolute right-6 bottom-28 hidden w-[22rem] xl:block">
          <div className="pointer-events-auto flex gap-4 rounded-2xl bg-white p-4 shadow-xl shadow-black/20">
            <div className="flex-1">
              <p className="font-heading text-base font-medium tracking-[-0.03em] text-gray-900">
                Measured Compliance
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Build stability, protect momentum, and move with measured
                certainty as you scale.
              </p>
              <div className="mt-4 flex items-center gap-1.5">
                <span className="h-1 w-6 rounded-full bg-gray-200" />
                <span className="h-1 w-6 rounded-full bg-gray-200" />
                <span className="h-1 w-6 rounded-full bg-brand" />
              </div>
            </div>
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
              <Image
                src="/images/why-choose-us-team.jpg"
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-14 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-medium text-gray-500">
            The frameworks we help you comply with
          </span>
        </div>
        <div className="mask-fade-horizontal mt-6 overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            <LogoGroup />
            <LogoGroup />
          </div>
        </div>
      </div>
    </section>
  );
}
