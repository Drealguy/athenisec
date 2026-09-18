"use client";

import { useState } from "react";
import NextImage from "next/image";

function RefreshIcon({ className = "" }: { className?: string }) {
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
      <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

function CogIcon({ className = "" }: { className?: string }) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "" }: { className?: string }) {
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
      <path d="M12 3 4.5 6v6c0 4.5 3 7.5 7.5 9 4.5-1.5 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClipboardListIcon({ className = "" }: { className?: string }) {
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
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h6M9 19h4" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const SERVICES = [
  {
    icon: RefreshIcon,
    title: "Compliance Operations",
    description:
      "Alleviates the burden of ongoing compliance by handling all required tasks to maintain your certifications and meet evolving standards — from continuous monitoring and documentation updates to employee compliance tasks, auditor communications, and responding to new requirements.",
  },
  {
    icon: CogIcon,
    title: "Compliance Engineering",
    description:
      "Bridges the gap between security and compliance by implementing the technical tasks needed to meet regulatory standards — from configuring secure systems to cloud logging, firewalls, and application security.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Managed Cybersecurity",
    description:
      "Implementation of IT, endpoint, infrastructure, and any other cybersecurity requirements done for you. Athenisec manages on- and off-boarding, configuration, and monitoring, so you can focus on building your product.",
  },
  {
    icon: ClipboardListIcon,
    title: "GRC and Cyber Risk Assessments",
    description:
      "Organizational cybersecurity and compliance risk assessment in accordance with any audited framework or customer security requirement, including reporting, attestation, and client communication.",
  },
];

import { RevealGroup } from "@/components/Reveal";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <RevealGroup className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-heading text-3xl font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Effortless compliance solutions for startups, covering SOC2,
              ISO 27001, GDPR, HIPAA, and more.
            </p>
            <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <NextImage
                src="/images/why-choose-us-team.jpg"
                alt="Athenisec team collaborating"
                fill
                className="object-cover"
              />
            </div>
          </RevealGroup>

          <RevealGroup className="border-t border-gray-100">
            {SERVICES.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={service.title} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                      <service.icon className="h-5 w-5 text-brand" />
                    </span>
                    <span className="font-heading flex-1 text-lg font-medium tracking-[-0.03em] text-gray-900">
                      {service.title}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="pb-6 pl-[3.75rem] text-sm leading-relaxed text-gray-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
