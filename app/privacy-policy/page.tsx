import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Athenisec",
  description: "How Athenisec LLC collects, uses, and protects information.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Who we are",
    body: (
      <p>
        This Privacy Policy is issued by Athenisec LLC (&ldquo;Athenisec,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;), a company headquartered in
        Washington, D.C., United States{" "}
        <em className="not-italic text-gray-400">
          (registered legal name and state of formation to be confirmed
          against our formation documents)
        </em>
        . It applies to athenisec.com and describes how we handle
        information in connection with this website.
      </p>
    ),
  },
  {
    heading: "2. Scope of this policy",
    body: (
      <>
        <p>
          Athenisec provides cybersecurity compliance advisory services to
          other businesses. This website is a business-to-business (B2B)
          marketing site: it describes our services and lets prospective
          clients request a consultation. It is not a consumer storefront,
          does not process payments, and does not have user accounts or
          logins.
        </p>
        <p>
          This policy covers our website only. It does not cover information
          we may handle on behalf of clients as part of a compliance
          engagement — that is governed separately, by the terms of the
          applicable client agreement.
        </p>
      </>
    ),
  },
  {
    heading: "3. Information we collect",
    body: (
      <>
        <p>
          <strong className="font-medium text-gray-900">
            Information you provide directly.
          </strong>{" "}
          Our Contact page asks for your name, email address, phone number,
          company name (optional), the compliance framework you&apos;re
          interested in (optional), and a message describing your needs. Our
          newsletter signup asks for an email address.
        </p>
        <p>
          <strong className="font-medium text-gray-900">
            Information collected automatically.
          </strong>{" "}
          At present this site does not run analytics, advertising pixels,
          or any other tracking script, and does not set cookies beyond what
          a browser needs to load the page (see our{" "}
          <Link href="/cookie-policy" className="text-brand underline underline-offset-2">
            Cookie Policy
          </Link>{" "}
          for detail). Our hosting provider may automatically log standard
          technical data (such as IP address, browser type, and request
          timestamps) for security and reliability purposes; the specifics
          of that logging depend on our hosting provider and are{" "}
          <span className="text-gray-400">not yet finalized</span>.
        </p>
      </>
    ),
  },
  {
    heading: "4. How we use information",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>To respond to enquiries submitted through the Contact page.</li>
        <li>To send newsletter updates to people who sign up for them.</li>
        <li>
          To maintain the security, integrity, and normal technical
          operation of the website.
        </li>
        <li>
          To comply with legal obligations, where applicable.
        </li>
      </ul>
    ),
  },
  {
    heading: "5. How we share information",
    body: (
      <p>
        We do not sell personal information. We do not currently share
        information collected through this website with any third-party
        service, analytics provider, or advertising network, because none is
        integrated into the site today. If we begin using a third-party
        provider to process contact or newsletter submissions (for example,
        an email delivery or CRM service), we will update this policy to
        name that provider and describe its role before it goes live.
      </p>
    ),
  },
  {
    heading: "6. Data retention",
    body: (
      <p>
        We keep information only as long as reasonably necessary for the
        purpose it was collected for, such as responding to your enquiry.
        A specific retention schedule has not yet been finalized; this
        section will be updated once one is in place.
      </p>
    ),
  },
  {
    heading: "7. Security",
    body: (
      <p>
        We take reasonable steps to protect information submitted through
        this site. No method of transmission or storage is completely
        secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    heading: "8. Your privacy choices",
    body: (
      <>
        <p>
          Depending on where you are located, you may have rights to
          request access to, correction of, or deletion of your personal
          information, or to object to certain uses of it. To make a
          request, contact us using the details in Section&nbsp;12 below.
        </p>
        <p>
          If you are located in the European Economic Area, the United
          Kingdom, or a U.S. state with its own privacy law, additional
          rights may apply to you.{" "}
          <span className="text-gray-400">
            We are confirming which of these regimes apply to our current
            operations and will update this section accordingly — see the
            note on international visitors below.
          </span>
        </p>
      </>
    ),
  },
  {
    heading: "9. International visitors",
    body: (
      <p>
        This website is accessible from outside the United States. We are
        headquartered in the United States and, as of the date of this
        policy, our client base and marketing focus are being confirmed. We
        do not currently represent that this site is directed at, or that
        we actively market our services to, individuals in any specific
        country outside the United States. If that changes, this section
        will be updated to reflect any applicable international transfer
        safeguards.
      </p>
    ),
  },
  {
    heading: "10. Children’s privacy",
    body: (
      <p>
        This website is intended for business audiences and is not directed
        at children. We do not knowingly collect personal information from
        children.
      </p>
    ),
  },
  {
    heading: "11. Changes to this policy",
    body: (
      <p>
        We may update this policy as our website, services, or applicable
        law change. The &ldquo;Last updated&rdquo; date at the top of this
        page reflects the most recent revision.
      </p>
    ),
  },
  {
    heading: "12. Contact us",
    body: (
      <p>
        For questions about this policy or to exercise a privacy choice,
        please reach out through our{" "}
        <Link href="/contact" className="text-brand underline underline-offset-2">
          Contact page
        </Link>
        .{" "}
        <span className="text-gray-400">
          A dedicated privacy contact address will be published here once
          confirmed.
        </span>
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="September 18, 2026"
      intro={
        <p>
          This policy explains what information Athenisec LLC collects
          through athenisec.com, how we use it, and the choices available to
          you. It reflects this website as it actually operates today —
          some details are still being finalized and are marked accordingly
          below.
        </p>
      }
      sections={SECTIONS}
    />
  );
}
