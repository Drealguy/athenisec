"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-driven text fill. The line starts dim and darkens character by
 * character from the first word onward as the block moves up the
 * viewport, so the last few characters are still grey while the opening
 * is already solid.
 *
 * Characters are written straight to the DOM from a rAF callback rather
 * than held in state — this runs on every scroll frame, and re-rendering
 * a hundred spans that often would be wasteful.
 */
export default function ScrollFillText({
  text,
  className = "",
  as: Tag = "h2",
}: {
  /** Use "\n" to force a manual line break; the fill still runs across
   *  every line as one continuous sweep. */
  text: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = Array.from(
      el.querySelectorAll<HTMLSpanElement>("[data-fill-char]"),
    );
    if (!chars.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      chars.forEach((c) => (c.style.opacity = "1"));
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      // Fill across the stretch where the block travels from low in the
      // viewport up to roughly a third from the top.
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.3;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end)),
      );

      // Overshoot the target by the easing window itself, otherwise the
      // trailing characters asymptotically approach full opacity but never
      // actually reach it even once progress caps at 1.
      const filled = progress * (chars.length + 6);
      chars.forEach((char, index) => {
        // Each character eases in over roughly a six-character window, so
        // the leading edge is a soft gradient rather than a hard cut.
        const amount = Math.min(1, Math.max(0, (filled - index) / 6));
        char.style.opacity = String(0.18 + 0.82 * amount);
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Browsers throttle rAF in background tabs, so the fill can be stale
    // by the time someone comes back to it.
    document.addEventListener("visibilitychange", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", onScroll);
    };
  }, []);

  // Words stay inline-block so a line break never lands mid-word; the
  // spaces between them sit outside, keeping normal wrapping.
  const lines = text.split("\n");

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex}>
          {line.split(" ").map((word, wordIndex, words) => (
            <span key={wordIndex}>
              <span className="inline-block">
                {Array.from(word).map((char, charIndex) => (
                  <span
                    key={charIndex}
                    data-fill-char
                    style={{ opacity: 0.18 }}
                    className="transition-opacity duration-100"
                  >
                    {char}
                  </span>
                ))}
              </span>
              {wordIndex < words.length - 1 ? " " : ""}
            </span>
          ))}
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}
