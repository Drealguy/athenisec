"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BAR_FILL_MS = 1400;
const FADE_MS = 500;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [barFilled, setBarFilled] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fillFrame = requestAnimationFrame(() => setBarFilled(true));
    const openTimer = setTimeout(() => setFadeOut(true), BAR_FILL_MS);
    const hideTimer = setTimeout(() => setVisible(false), BAR_FILL_MS + FADE_MS);
    return () => {
      cancelAnimationFrame(fillFrame);
      clearTimeout(openTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-[#002881] transition-opacity ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="relative" style={{ width: 220, height: 56 }}>
        <Image
          src="/logo-white.svg"
          alt="Athenisec"
          fill
          className="object-contain"
          priority
        />
        <div
          className="preloader-glare absolute inset-0"
          style={{
            WebkitMaskImage: "url(/logo-white.svg)",
            maskImage: "url(/logo-white.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            backgroundImage:
              "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.95) 50%, transparent 60%)",
            backgroundSize: "250% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-white transition-all ease-out"
          style={{
            width: barFilled ? "100%" : "0%",
            transitionDuration: `${BAR_FILL_MS}ms`,
          }}
        />
      </div>
    </div>
  );
}
