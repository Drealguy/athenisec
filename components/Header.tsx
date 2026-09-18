"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HoverSwapText from "@/components/HoverSwapText";

type IconComponent = (props: { className?: string }) => React.ReactElement;
type NavChild = {
  label: string;
  href: string;
  description: string;
  icon?: IconComponent;
  logo?: string;
};
type NavItem = { label: string; href: string; children?: NavChild[] };

function HeartPulseIcon({ className = "" }: { className?: string }) {
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
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
      <path d="M3.5 12h4l2-4 3 8 2-4h4.5" />
    </svg>
  );
}

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

function BriefcaseIcon({ className = "" }: { className?: string }) {
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
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

function BanknoteIcon({ className = "" }: { className?: string }) {
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
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M7 9v.01M17 15v.01" />
    </svg>
  );
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
    children: [
      {
        label: "Health Tech",
        href: "/who-we-serve/health-tech",
        description: "Healthcare & digital health platforms",
        icon: HeartPulseIcon,
      },
      {
        label: "Enterprise SaaS",
        href: "/who-we-serve/enterprise-saas",
        description: "Large-scale software organizations",
        icon: BuildingIcon,
      },
      {
        label: "B2B SaaS",
        href: "/who-we-serve/b2b-saas",
        description: "Business software & platforms",
        icon: BriefcaseIcon,
      },
      {
        label: "Fintech",
        href: "/who-we-serve/fintech",
        description: "Financial services & payments",
        icon: BanknoteIcon,
      },
      {
        label: "Gov Tech & Defense",
        href: "/who-we-serve/gov-tech-defense",
        description: "Government contractors & defense tech",
        icon: ShieldIcon,
      },
    ],
  },
  {
    label: "Frameworks",
    href: "/frameworks",
    children: [
      {
        label: "PCI DSS",
        href: "/frameworks/pci-dss",
        description: "Payment card industry security",
        logo: "/logos/pci-dss.png",
      },
      {
        label: "HIPAA",
        href: "/frameworks/hipaa",
        description: "Healthcare data protection",
        logo: "/logos/hipaa.png",
      },
      {
        label: "SOC 2",
        href: "/frameworks/soc-2",
        description: "Security & availability controls",
        logo: "/logos/soc2.png",
      },
      {
        label: "ISO 27001",
        href: "/frameworks/iso-27001",
        description: "Information security management",
        logo: "/logos/iso27001.png",
      },
      {
        label: "GDPR",
        href: "/frameworks/gdpr",
        description: "EU data privacy regulation",
        logo: "/logos/gdpr.png",
      },
      {
        label: "CMMC 2",
        href: "/frameworks/cmmc-2",
        description: "Defense contractor cybersecurity",
        logo: "/logos/cmmc.png",
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
];

const CTA_LABEL = "Book a Consultation";
const CTA_HREF = "/contact";

function ShieldIcon({ className = "" }: { className?: string }) {
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
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
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

function ArrowRightIcon({ className = "" }: { className?: string }) {
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
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
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
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
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
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
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
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  function closeMobile() {
    setMobileOpen(false);
    setOpenSection(null);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image src="/logo.svg" alt="Athenisec" width={168} height={40} priority />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-brand"
                  >
                    {item.label}
                    <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full w-[440px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-black/10">
                      <div className="grid grid-cols-2 gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 transition-colors group-hover/item:border-brand/15 group-hover/item:bg-brand/5">
                              {child.logo ? (
                                <Image
                                  src={child.logo}
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="h-5 w-5 object-contain"
                                />
                              ) : child.icon ? (
                                <child.icon className="h-4.5 w-4.5 text-brand" />
                              ) : null}
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-gray-900">
                                {child.label}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                                {child.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <Link
              href={CTA_HREF}
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#001d61]"
            >
              <HoverSwapText>{CTA_LABEL}</HoverSwapText>
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 md:hidden"
            aria-label="Open menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
        />

        <div
          className={`absolute inset-y-0 right-0 flex h-full w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-5">
            <Image src="/logo.svg" alt="Athenisec" width={140} height={33} />
            <button
              type="button"
              onClick={closeMobile}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700"
              aria-label="Close menu"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="h-px bg-gray-100" />

          <nav className="flex flex-1 flex-col overflow-y-auto px-5">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection((s) => (s === item.label ? null : item.label))
                    }
                    aria-expanded={openSection === item.label}
                    className="flex w-full items-center justify-between py-5 text-lg font-medium text-gray-900"
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${
                        openSection === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: openSection === item.label ? "1fr" : "0fr",
                    }}
                  >
                    <div className="min-h-0">
                      <div className="flex flex-col gap-1 pb-5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={closeMobile}
                            className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-gray-50"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-gray-50">
                              {child.logo ? (
                                <Image
                                  src={child.logo}
                                  alt=""
                                  width={18}
                                  height={18}
                                  className="h-4.5 w-4.5 object-contain"
                                />
                              ) : child.icon ? (
                                <child.icon className="h-4 w-4 text-brand" />
                              ) : null}
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-gray-900">
                                {child.label}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                                {child.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  className="flex items-center justify-between border-b border-gray-100 py-5 text-lg font-medium text-gray-900"
                >
                  {item.label}
                  <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                </Link>
              )
            )}
          </nav>

          <div className="px-5 py-5">
            <Link
              href={CTA_HREF}
              onClick={closeMobile}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white"
            >
              <HoverSwapText>{CTA_LABEL}</HoverSwapText>
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
