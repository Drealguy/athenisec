import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service | Athenisec",
  description: "Terms governing use of the athenisec.com website.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Acceptance of these terms",
    body: (
      <p>
        These Terms of Service govern your use of athenisec.com (the
        &ldquo;Site&rdquo;), operated by Athenisec LLC (&ldquo;Athenisec,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;). By browsing or using the Site, you
        agree to these terms. If you do not agree, please do not use the
        Site.
      </p>
    ),
  },
  {
    heading: "2. What this Site is",
    body: (
      <p>
        The Site is a marketing website describing Athenisec&apos;s
        cybersecurity compliance advisory services and letting visitors
        request a consultation. The Site does not sell products, does not
        process payments, and does not offer user accounts, subscriptions,
        or online purchases. Actual compliance advisory work is governed by
        a separate written agreement between Athenisec and the client, not
        by these Site terms.
      </p>
    ),
  },
  {
    heading: "3. Eligibility",
    body: (
      <p>
        The Site is directed at business professionals evaluating
        compliance services on behalf of an organization. By using the
        Site, you represent that you are at least 18 years old and, where
        you submit an enquiry on behalf of a company, that you are
        authorized to do so.
      </p>
    ),
  },
  {
    heading: "4. Acceptable use",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>Use the Site only for lawful purposes.</li>
        <li>
          Don&apos;t attempt to interfere with, disrupt, or gain
          unauthorized access to the Site or its underlying systems.
        </li>
        <li>
          Don&apos;t submit false, misleading, or malicious information
          through any form on the Site.
        </li>
        <li>
          Don&apos;t copy, scrape, or republish substantial parts of the
          Site without our permission.
        </li>
      </ul>
    ),
  },
  {
    heading: "5. No guarantee of compliance outcomes",
    body: (
      <p>
        Content on this Site — including descriptions of frameworks such as
        SOC 2, HIPAA, PCI DSS, ISO 27001, GDPR, or CMMC — is provided for
        general informational purposes about the services we offer. It is
        not legal advice, and browsing the Site or submitting an enquiry
        does not create an advisory relationship or guarantee any
        certification, audit result, or compliance outcome. Those depend on
        a specific engagement, scoped separately.
      </p>
    ),
  },
  {
    heading: "6. Intellectual property",
    body: (
      <p>
        The Site, including its text, design, graphics, and logos, is owned
        by Athenisec or its licensors and is protected by applicable
        intellectual property laws. You may view and share Site content for
        personal, non-commercial reference, but may not reproduce,
        modify, or distribute it for commercial purposes without our
        written permission.
      </p>
    ),
  },
  {
    heading: "7. Third-party links and content",
    body: (
      <p>
        The Site may reference or link to third-party organizations,
        including in case studies. We do not control third-party sites and
        are not responsible for their content, availability, or practices.
      </p>
    ),
  },
  {
    heading: "8. Disclaimer",
    body: (
      <p>
        The Site is provided &ldquo;as is&rdquo; and &ldquo;as
        available,&rdquo; without warranties of any kind, express or
        implied, including as to accuracy, reliability, or availability, to
        the fullest extent permitted by applicable law.
      </p>
    ),
  },
  {
    heading: "9. Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by applicable law, Athenisec will
        not be liable for any indirect, incidental, or consequential
        damages arising from your use of the Site. Nothing in these terms
        limits liability that cannot be limited under applicable law.
      </p>
    ),
  },
  {
    heading: "10. Changes to the Site or these terms",
    body: (
      <p>
        We may update the Site or these terms at any time. The &ldquo;Last
        updated&rdquo; date above reflects the most recent revision.
        Continued use of the Site after a change constitutes acceptance of
        the updated terms.
      </p>
    ),
  },
  {
    heading: "11. Governing law",
    body: (
      <p>
        These terms are governed by the laws applicable in Washington,
        D.C., United States, our place of business,{" "}
        <span className="text-gray-400">
          pending confirmation of our formal state of registration
        </span>
        , without regard to conflict-of-law principles.
      </p>
    ),
  },
  {
    heading: "12. Contact us",
    body: (
      <p>
        Questions about these terms can be sent through our{" "}
        <Link href="/contact" className="text-brand underline underline-offset-2">
          Contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="September 18, 2026"
      intro={
        <p>
          These terms cover use of this website only — they&apos;re
          separate from the agreement that governs any actual compliance
          engagement with Athenisec.
        </p>
      }
      sections={SECTIONS}
    />
  );
}
