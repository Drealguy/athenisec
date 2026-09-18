"use client";

import { useState } from "react";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollFillText from "@/components/ScrollFillText";

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.37 1.6-2.37 3.27V21h-4Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L4.8 21H1.6l7.5-8.6L1.2 3h6.6l4.5 5.6Zm-1.1 16h1.8L7.7 4.8H5.8Z" />
    </svg>
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

/** Portraits are placeholders until headshots land — the label makes the
 *  swap visible while the real images are missing. */
const TEAM = [
  { name: "Ben Marke", role: "Role to confirm" },
  { name: "Team Member", role: "Role to confirm" },
  { name: "Team Member", role: "Role to confirm" },
];

const SOCIALS = [
  { label: "LinkedIn", Icon: LinkedInIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "X", Icon: XIcon },
];

export default function AboutTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TEAM[activeIndex];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-12">
          <span className="flex items-start gap-2 text-sm text-gray-500">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
            Compliance expertise grounded in integrity
          </span>
          <ScrollFillText
            text="Meet the experts behind Athenisec’s hands-on compliance and security guidance."
            className="font-heading text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-5xl"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
            <ImagePlaceholder
              key={activeIndex}
              label={active.name}
              className="h-full w-full"
            />
          </div>

          <div>
            <ul>
              {TEAM.map((member, index) => {
                const isActive = index === activeIndex;
                return (
                  <li
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex items-center gap-4 border-b py-4 transition-colors ${
                      isActive ? "border-gray-900" : "border-gray-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      className="flex flex-1 items-center gap-4 text-left"
                    >
                      <span
                        className={`font-heading flex-1 text-base font-medium tracking-[-0.02em] transition-colors ${
                          isActive ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        {member.name}
                      </span>
                      <span
                        className={`hidden flex-1 text-sm transition-colors sm:block ${
                          isActive ? "text-gray-600" : "text-gray-300"
                        }`}
                      >
                        {member.role}
                      </span>
                    </button>

                    <span className="flex shrink-0 items-center gap-3">
                      {SOCIALS.map(({ label, Icon }) => (
                        <a
                          key={label}
                          href="#"
                          aria-label={`${member.name} on ${label}`}
                          className={`transition-colors hover:text-brand ${
                            isActive ? "text-gray-500" : "text-gray-300"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      ))}
                    </span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-8 max-w-lg text-sm leading-relaxed text-gray-500">
              Our commitment to quality is reflected in our internal
              governance, rigorous oversight, and the high standards followed
              across our team.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#001d61]"
              >
                Connect With Our Team
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
