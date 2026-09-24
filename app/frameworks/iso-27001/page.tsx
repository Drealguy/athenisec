import PageHero from "@/components/PageHero";
import FrameworkTimeline from "@/components/FrameworkTimeline";
import FrameworkHighlights from "@/components/FrameworkHighlights";
import CaseStudies from "@/components/CaseStudies";

/**
 * Every Frameworks page shares the same layout — duplicate this file into
 * a sibling route and swap this one object.
 */
const CONTENT = {
  title: "Achieve & Maintain ISO 27001 with Unmatched Ease",
  intro:
    "Your dedicated team takes care of your entire ISO 27001 process from start to finish with uncompromising quality and speed.",
  processEyebrow: "How it works",
  processHeading: "Certification Process Details",
  steps: [
    {
      title: "Planning",
      body: "ISO 27001 certification focuses on your Information Security Management System (ISMS). Start by defining the scope—determine which parts of your organization, systems, and processes will be covered by the ISMS and included in the certification.",
    },
    {
      title: "Audit Preparation",
      body: "Based on your risk assessment, implement the necessary security controls outlined in the ISO 27001 standard. These controls address areas such as access management, physical security, incident response, and data protection.",
    },
    {
      title: "Internal Audit",
      body: "Before the formal certification audit, Athenisec will conduct the mandatory internal audit to ensure your Information Security Management System meets ISO 27001 requirements.",
    },
    {
      title: "The Audit",
      body: "Engage an accredited certification body to perform the external audit. The audit occurs in two stages: Stage 1 reviews your ISMS documentation and policies, while Stage 2 evaluates the implementation and effectiveness of your controls in practice.",
    },
    {
      title: "Achieve Certification and Maintain Compliance",
      body: "After a successful audit, you'll receive your ISO 27001 certification. In your initial assessment, you define what your organization will do, and then you need to do those things with no exceptions. Maintaining certification requires regular surveillance audits, continuous improvement of your ISMS, and ongoing alignment with ISO 27001 standards. Athenisec manages this process for you, ensuring that future audits are as smooth as your first.",
    },
  ],
  highlightsHeading: "Highlights of ISO 27001 Compliance",
  highlightsIntro:
    "The controls we implement and monitor throughout your ISO 27001 engagement.",
  highlights: [
    {
      title: "Cloud Security",
      description:
        "Infrastructure configuration, firewall settings, VPC controls, and continuous logging of databases, containers, load balancers, IDS, and baseline configurations.",
    },
    {
      title: "Employee IT Security",
      description:
        "Workstation management and device security including MFA, cyber security training, policy acceptance, and coordination with third-party service providers.",
    },
    {
      title: "Vulnerability Management",
      description:
        "Monitor and identify code vulnerabilities in repositories, manage remediation triage to meet SLA requirements, prepare evidence for auditors.",
    },
    {
      title: "Access Management",
      description:
        "Review user access to SaaS providers, configure role based permissions to production accounts, monitor service accounts, document ongoing evidence.",
    },
  ],
};

export const metadata = {
  title: "ISO 27001 Certification Services",
  description: CONTENT.intro,
  alternates: { canonical: "/frameworks/iso-27001" },
};

export default function Iso27001Page() {
  return (
    <main className="flex-1">
      <PageHero
        title={CONTENT.title}
        intro={CONTENT.intro}
        cta={{ label: "Get Started", href: "/contact" }}
        image={{
          src: "/images/hero-team.jpg",
          alt: "An Athenisec advisor preparing an ISO 27001 audit",
        }}
      />
      <FrameworkTimeline
        eyebrow={CONTENT.processEyebrow}
        heading={CONTENT.processHeading}
        steps={CONTENT.steps}
      />
      <FrameworkHighlights
        heading={CONTENT.highlightsHeading}
        intro={CONTENT.highlightsIntro}
        items={CONTENT.highlights}
      />
      <CaseStudies />
    </main>
  );
}
