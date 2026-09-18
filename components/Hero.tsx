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

/* Floating chips over the hero photograph. Hidden below sm — they crowd
   the image at phone widths. */
const CHIPS = [
  { label: "Audit Ready", dot: "bg-sky-300", className: "top-[28%] left-4 lg:-left-5" },
  { label: "SOC 2", dot: "bg-blue-400", className: "top-[44%] right-4 lg:right-10" },
  { label: "Risk Managed", dot: "bg-blue-200", className: "top-[60%] left-6 lg:-left-3" },
  { label: "HIPAA", dot: "bg-sky-400", className: "top-[76%] right-8 lg:right-16" },
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

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-white pt-20">
      {/* Full-bleed dark panel: edge to edge, no max-width, no rounding. */}
      <div className="relative w-full overflow-hidden bg-[#001238]">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob-1 absolute -top-1/4 -left-1/5 h-[70%] w-[55%] rounded-full bg-brand/60 blur-3xl" />
          <div className="animate-blob-3 absolute bottom-0 left-1/4 h-[55%] w-[45%] rounded-full bg-sky-500/15 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-0 lg:grid-cols-2">
          <div className="px-5 pt-14 pb-12 sm:px-8 md:px-12 lg:py-24 lg:pr-8 lg:pl-16 xl:pl-24">
            <span className="text-[11px] font-medium tracking-[0.18em] text-white/50 uppercase">
              • Athenisec Compliance
            </span>

            <div className="mt-8 flex items-center gap-3 sm:mt-10">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-[#001238] bg-white/25"
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-white/60">
                Trusted by teams across regulated industries
              </span>
            </div>

            <h1 className="mt-5 font-heading text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Expert guidance, tailored solution
            </h1>
            <p className="mt-5 max-w-md text-base text-white/60">
              Easily adapt to changes and scale your operations with our
              flexible infrastructure, designed to support your business growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
              >
                Get Started
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-[340px] w-full sm:h-[460px] lg:h-[680px]">
            <Image
              src="/images/hero-team.jpg"
              alt="A compliance team collaborating in a workshop session"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Blends the photo into the copy column on desktop, and softens
                the seam above it when stacked on mobile. */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#001238_0%,rgba(0,18,56,0.55)_5%,rgba(0,18,56,0.18)_14%,transparent_30%)] lg:bg-[linear-gradient(to_right,#001238_0%,rgba(0,18,56,0.94)_9%,rgba(0,18,56,0.72)_22%,rgba(0,18,56,0.4)_40%,rgba(0,18,56,0.12)_62%,transparent_80%)]" />

            {CHIPS.map((chip) => (
              <div
                key={chip.label}
                className={`absolute hidden items-center gap-2 rounded-full border border-white/15 bg-black/35 py-2 pr-4 pl-2 backdrop-blur-md sm:flex ${chip.className}`}
              >
                <span className={`h-5 w-5 shrink-0 rounded-full ${chip.dot}`} />
                <span className="text-xs font-medium whitespace-nowrap text-white">
                  {chip.label}
                </span>
              </div>
            ))}
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
