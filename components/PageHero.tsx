import Image from "next/image";

/**
 * Centred title over a full-bleed photograph. Used for interior landing
 * pages that lead with a single word or phrase.
 */
export default function PageHero({
  title,
  image,
}: {
  title: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="relative isolate flex min-h-[52vh] w-full items-center justify-center overflow-hidden bg-[#001238] pt-20">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#001238]/65" />

      <h1 className="font-heading px-5 pb-10 text-center text-4xl font-medium tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
        {title}
      </h1>
    </section>
  );
}
