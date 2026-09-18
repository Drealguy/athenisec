import Link from "next/link";
import Image from "next/image";

function ArrowRightIcon({ className = "" }: { className?: string }) {
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
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.6 4.78 6v6.3h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.9 3H21l-6.8 7.8L22 21h-6.5l-5.1-6.5L4.6 21H2.5l7.3-8.4L2 3h6.6l4.6 6 5.7-6Zm-1.1 16.2h1.2L7.3 4.7H6l11.8 14.5Z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H17V3.7c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.44-3.96 4.07v2.24H8v3.1h2.67V21h2.83Z" />
    </svg>
  );
}

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Case Studies", href: "/case-studies" },
];

const FRAMEWORK_LINKS = [
  { label: "PCI DSS", href: "/frameworks/pci-dss" },
  { label: "HIPAA", href: "/frameworks/hipaa" },
  { label: "SOC 2", href: "/frameworks/soc-2" },
  { label: "ISO 27001", href: "/frameworks/iso-27001" },
  { label: "GDPR", href: "/frameworks/gdpr" },
  { label: "CMMC 2", href: "/frameworks/cmmc-2" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Security", href: "/security" },
  { label: "Cookie", href: "/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logo.svg" alt="Athenisec" width={150} height={38} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Cybersecurity compliance solutions for SMBs in regulated
              industries.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-medium text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-medium text-gray-900">
              Frameworks
            </h3>
            <ul className="mt-4 space-y-3">
              {FRAMEWORK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-medium text-gray-900">
              Newsletter
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Get compliance tips and product updates in your inbox.
            </p>
            <form className="mt-4 flex items-center gap-1 rounded-full border border-gray-200 p-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full min-w-0 bg-transparent px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center gap-1 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#001d61]"
              >
                Subscribe
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-gray-100 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Athenisec LLC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
