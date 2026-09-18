import Link from "next/link";

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

export default function CtaBanner() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#000d30] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-blob-1 absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[#1e6fff]/50 blur-3xl" />
            <div className="animate-blob-2 absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#0046c4]/60 blur-3xl" />
            <div className="animate-blob-3 absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-brand/70 blur-3xl" />
          </div>

          <h2 className="font-heading relative z-10 mx-auto max-w-2xl text-3xl font-medium tracking-[-0.03em] text-white sm:text-5xl">
            Ready to simplify your compliance?
          </h2>
          <p className="relative z-10 mx-auto mt-5 max-w-xl text-base text-white/70">
            Let Athenisec handle the heavy lifting so your team can focus on
            building.
          </p>
          <Link
            href="/contact"
            className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-brand transition-colors hover:bg-white/90"
          >
            Get Started
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
