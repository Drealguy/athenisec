"use client";

import { useEffect, useState } from "react";

/**
 * Types `text` out one character at a time with a blinking caret.
 * Screen readers get the full text immediately via aria-label; the
 * animated characters are hidden from the accessibility tree.
 */
export default function TypingText({
  text,
  speed = 55,
  className = "",
  onDone,
}: {
  text: string;
  /** Milliseconds between characters. */
  speed?: number;
  className?: string;
  onDone?: () => void;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      onDone?.();
      return;
    }

    setCount(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) {
        window.clearInterval(id);
        onDone?.();
      }
    }, speed);

    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="animate-caret-blink inline-block w-[0.08em] translate-y-[0.1em] border-r-[3px] border-current align-middle" />
      </span>
    </span>
  );
}
