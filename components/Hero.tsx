"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HoverSwapText from "@/components/HoverSwapText";
import TypingText from "@/components/TypingText";

type Ripple = { id: number; x: number; y: number };

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

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextId = useRef(0);
  const [typed, setTyped] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const id = nextId.current++;
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    window.setTimeout(() => {
      setRipples((r) => r.filter((ripple) => ripple.id !== id));
    }, 900);
  }

  return (
    <section className="bg-white">
      <div
        ref={heroRef}
        onClick={handleClick}
        className="relative isolate flex min-h-[88vh] w-full flex-col overflow-hidden bg-[#001238] pt-20"
      >
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

        {/* Click anywhere in the hero to invert colours outward from that point. */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="animate-invert-ripple pointer-events-none absolute z-20 h-16 w-16 rounded-full bg-white mix-blend-difference"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 sm:justify-end sm:px-6 sm:pt-0 lg:px-8">
          <h1 className="font-heading max-w-4xl pb-8 text-4xl leading-[1.1] font-medium tracking-[-0.03em] text-white sm:pb-14 sm:text-5xl lg:text-6xl xl:text-7xl">
            <TypingText text="Scaling fast?" onDone={() => setTyped(true)} />
            <br />
            <span
              className={`inline-block transition-opacity duration-500 ${
                typed ? "opacity-100" : "opacity-0"
              }`}
            >
              Athenisec scales your security.
            </span>
          </h1>

          <div className="flex max-w-3xl flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <p className="max-w-sm text-base text-white/70">
              Easily adapt to changes and scale your operations with our
              flexible infrastructure, designed to support your business growth.
            </p>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
              >
                <HoverSwapText>Get Started</HoverSwapText>
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="group inline-flex shrink-0 items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <HoverSwapText>View Case Studies</HoverSwapText>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating highlight card */}
        <div className="pointer-events-none absolute top-28 right-8 hidden w-[17rem] xl:block">
          <div className="pointer-events-auto flex gap-3 rounded-2xl bg-white p-3.5 shadow-xl shadow-black/20">
            <div className="flex-1">
              <p className="font-heading text-sm font-medium tracking-[-0.03em] text-gray-900">
                Measured Compliance
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                Build stability, protect momentum, and move with measured
                certainty as you scale.
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="h-1 w-5 rounded-full bg-gray-200" />
                <span className="h-1 w-5 rounded-full bg-gray-200" />
                <span className="h-1 w-5 rounded-full bg-brand" />
              </div>
            </div>
            <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-xl">
              <Image
                src="/images/why-choose-us-team.jpg"
                alt=""
                fill
                sizes="72px"
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
