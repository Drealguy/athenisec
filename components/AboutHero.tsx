import Image from "next/image";

/**
 * Full-bleed photographic hero: the title sits low over the image, with a
 * rule beneath it carrying the section label and the standfirst.
 */
export default function AboutHero() {
  return (
    <section className="relative isolate flex min-h-[80vh] w-full flex-col overflow-hidden bg-[#001238] pt-20">
      <Image
        src="/images/why-choose-us-team.jpg"
        alt="Athenisec advisors in discussion"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,18,56,0.92)_0%,rgba(0,18,56,0.55)_45%,rgba(0,18,56,0.35)_100%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-6 lg:px-8">
        <h1 className="font-heading mt-auto pb-10 text-4xl leading-[1.05] font-medium tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
          About Athenisec
        </h1>

        <div className="grid grid-cols-1 gap-4 border-t border-white/25 py-8 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-10">
          <span className="text-[11px] font-semibold tracking-[0.18em] text-white/70 uppercase">
            Our Story
          </span>
          <p className="max-w-2xl text-base text-white/80 sm:border-l sm:border-white/25 sm:pl-10">
            Athenisec is a professional services practice in complex,
            multi-party cybersecurity and compliance solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
