function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  );
}

import { RevealGroup } from "@/components/Reveal";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand/95 via-brand/90 to-[#000d30]/95" />

      <RevealGroup className="relative mx-auto max-w-7xl px-5 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white uppercase">
          <BuildingIcon className="h-3.5 w-3.5" />
          About Athenisec
        </span>

        <h1 className="font-heading mt-6 max-w-3xl text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Redefining how SMBs approach compliance
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/70">
          Athenisec is a cybersecurity compliance firm helping SMBs in
          regulated industries manage governance and meet regulatory
          requirements without building expensive in-house teams.
        </p>
      </RevealGroup>
    </section>
  );
}
