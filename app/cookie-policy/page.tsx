import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import CookieSettings from "@/components/CookieSettings";

export const metadata = {
  title: "Cookie Policy",
  description: "What cookies and similar technologies athenisec.com uses.",
  alternates: { canonical: "/cookie-policy" },
};

const SECTIONS: LegalSection[] = [
  {
    heading: "1. What this policy covers",
    body: (
      <p>
        This policy explains how athenisec.com uses cookies and similar
        technologies (such as browser local storage). It was written from a
        direct review of this website&apos;s code, not from a generic
        template — the table below is exactly what is currently in use.
      </p>
    ),
  },
  {
    heading: "2. What we currently use",
    body: (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500">
              <th className="py-2 pr-4 font-medium">Name</th>
              <th className="py-2 pr-4 font-medium">Type</th>
              <th className="py-2 pr-4 font-medium">Purpose</th>
              <th className="py-2 font-medium">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-4 font-mono text-xs text-gray-700">
                athenisec-cookie-preferences
              </td>
              <td className="py-3 pr-4 text-gray-600">
                Local storage (not a cookie)
              </td>
              <td className="py-3 pr-4 text-gray-600">
                Remembers the choice you make in the Cookie Settings panel
                below, on your device only.
              </td>
              <td className="py-3 text-gray-600">
                Until you clear your browser storage
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    heading: "3. What we don’t use",
    body: (
      <p>
        We do not use analytics cookies, advertising or retargeting pixels,
        social media tracking, or any third-party tracking technology. We do
        not use cookies to build a profile of visitors. This site is built
        with Next.js; fonts used on the site are self-hosted at build time
        rather than loaded from Google&apos;s servers, so visiting this site
        does not, by itself, share your browser information with a font
        provider.
      </p>
    ),
  },
  {
    heading: "4. If that changes",
    body: (
      <p>
        If we introduce analytics, advertising, or other optional tracking
        in the future, we will list it in the table above with its name,
        provider, purpose, and duration before it goes live, and it will be
        controllable from the Cookie Settings panel.
      </p>
    ),
  },
  {
    heading: "5. Managing your preferences",
    body: (
      <>
        <p>
          Because this site currently sets no optional cookies, there is
          nothing to turn off yet. The control below exists so your choice
          is already in place the moment that changes.
        </p>
        <CookieSettings className="mt-2 inline-flex items-center rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200" />
        <p>
          You can also control cookies directly through your browser
          settings, including blocking or deleting them — this may affect
          how some websites function, though it should not affect this one.
        </p>
      </>
    ),
  },
  {
    heading: "6. Changes to this policy",
    body: (
      <p>
        We&apos;ll update this page whenever the technologies described
        above change.
      </p>
    ),
  },
  {
    heading: "7. Contact us",
    body: (
      <p>
        Questions about this policy can be sent through our{" "}
        <Link href="/contact" className="text-brand underline underline-offset-2">
          Contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      lastUpdated="September 18, 2026"
      intro={
        <p>
          Short version: this site doesn&apos;t currently track you. Here is
          exactly what is, and isn&apos;t, in place, and how to control it.
        </p>
      }
      sections={SECTIONS}
    />
  );
}
