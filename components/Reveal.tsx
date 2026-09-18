"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shared reveal logic. Elements start hidden (see [data-reveal] in
 * globals.css) and are shown once they scroll into view.
 *
 * Two safety nets, because hidden content is a much worse failure than a
 * missed animation:
 *  - no IntersectionObserver, or reduced-motion requested -> show at once
 *  - a browser that suspends observers while the tab is backgrounded gets
 *    a re-check on visibilitychange plus a timed fallback, so nothing can
 *    stay invisible indefinitely
 */
function useReveal<T extends HTMLElement>(options: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
    };

    // Reduced motion is handled entirely in CSS, so the observer can stay
    // out of it. Without observer support, just reveal on the next tick.
    if (typeof IntersectionObserver === "undefined") {
      const immediate = window.setTimeout(reveal, 0);
      return () => window.clearTimeout(immediate);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        reveal();
        observer.disconnect();
      }
    }, options);
    observer.observe(el);

    // If the observer never got a chance to run (backgrounded tab), fall
    // back to plain geometry once we're on screen again.
    const checkByRect = () => {
      if (done) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal();
        observer.disconnect();
      }
    };

    document.addEventListener("visibilitychange", checkByRect);
    const timer = window.setTimeout(checkByRect, 2500);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", checkByRect);
      window.clearTimeout(timer);
    };
  }, [options]);

  return { ref, shown };
}

const ITEM_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -60px 0px",
};

const GROUP_OPTIONS: IntersectionObserverInit = {
  threshold: 0.08,
  rootMargin: "0px 0px -50px 0px",
};

type RevealProps = {
  children: React.ReactNode;
  /** Stagger offset in ms. Use multiples of 80 to stay on the site's rhythm. */
  delay?: number;
  className?: string;
};

/**
 * Reveals a single element. The motion tokens live in globals.css under
 * [data-reveal], so every animated element on the site shares one
 * distance, duration and easing.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>(ITEM_OPTIONS);

  return (
    <div
      ref={ref}
      data-reveal
      data-shown={shown || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}

/**
 * Reveals a container's direct children in sequence. Use this instead of
 * hand-wrapping each card — the stagger comes from nth-child rules in
 * globals.css, so a grid animates consistently with one wrapper.
 *
 * The transform sits on the children, so a sticky or grid container keeps
 * working when its own classes are passed through here.
 */
export function RevealGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(GROUP_OPTIONS);

  return (
    <div
      ref={ref}
      data-reveal-group
      data-shown={shown || undefined}
      className={className}
    >
      {children}
    </div>
  );
}
