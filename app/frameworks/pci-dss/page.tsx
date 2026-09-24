import PageHero from "@/components/PageHero";
import FrameworkTimeline from "@/components/FrameworkTimeline";
import FrameworkHighlights from "@/components/FrameworkHighlights";
import CaseStudies from "@/components/CaseStudies";

/**
 * Every Frameworks page shares the same layout — duplicate this file into
 * a sibling route and swap this one object.
 */
const CONTENT = {
  title: "Achieve & Maintain PCI DSS with Unmatched Ease",
  intro:
    "Your dedicated team takes care of your entire PCI DSS process from start to finish with uncompromising quality and speed.",
  processEyebrow: "How it works",
  processHeading: "Certification Process Details",
  steps: [
    {
      title: "Planning",
      body: "The newly released PCI DSS 4.0 includes 12 core requirements focusing on areas like encryption, access control, monitoring, and vulnerability management. Athenisec will assess your application and system design to determine applicability and control mapping.",
    },
    {
      title: "Implement Required Controls",
      body: "Address identified gaps by implementing or updating security controls. This might include strengthening encryption, improving network segmentation, enhancing access management, or updating policies and procedures. Athenisec engineers develop best-practices to meet these requirements with the lowest impact on your organization.",
    },
    {
      title: "Self-Assessment or External Audit",
      body: "Depending on your merchant level, you'll either complete a Self-Assessment Questionnaire (SAQ) or undergo a formal audit by a Qualified Security Assessor (QSA). The QSA reviews your systems, tests controls, and verifies compliance with PCI DSS 4.0 requirements.",
    },
    {
      title: "Submit Documentation and Attestation",
      body: "After the audit or self-assessment, submit the necessary documentation, including the Report on Compliance (ROC) or SAQ, along with an Attestation of Compliance (AOC) to your clients or payment partners.",
    },
    {
      title: "Maintenance",
      body: "PCI DSS 4.0 emphasizes continuous compliance. Regularly monitor your systems, perform vulnerability scans, and ensure ongoing staff training to maintain compliance and prepare for annual re-assessments.",
    },
  ],
  highlightsHeading: "Highlights of PCI Compliance",
  highlightsIntro:
    "The controls we implement and monitor throughout your PCI DSS engagement.",
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
        "Monitor and identify code vulnerabilities in repositories, manage remediation triage to meet SLA requirements, and prepare evidence for auditors.",
    },
    {
      title: "Competitive Advantage",
      description:
        "Stand out in your industry by demonstrating your commitment to security.",
    },
  ],
};

export const metadata = {
  title: "PCI DSS Compliance Services",
  description: CONTENT.intro,
  alternates: { canonical: "/frameworks/pci-dss" },
};

export default function PciDssPage() {
  return (
    <main className="flex-1">
      <PageHero
        title={CONTENT.title}
        intro={CONTENT.intro}
        cta={{ label: "Get Started", href: "/contact" }}
        image={{
          src: "/images/hero-team.jpg",
          alt: "An Athenisec advisor preparing a PCI DSS audit",
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
