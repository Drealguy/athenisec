import PageHero from "@/components/PageHero";
import FrameworkTimeline from "@/components/FrameworkTimeline";
import FrameworkHighlights from "@/components/FrameworkHighlights";
import CaseStudies from "@/components/CaseStudies";

/**
 * Every Frameworks page shares the same layout — duplicate this file into
 * a sibling route and swap this one object.
 */
const CONTENT = {
  title: "Achieve & Maintain SOC 2 with Unmatched Ease",
  intro:
    "Your dedicated team takes care of your entire SOC2 process from start to finish with uncompromising quality and speed.",
  processEyebrow: "How it works",
  processHeading: "Certification Process Details",
  steps: [
    {
      title: "Planning",
      body: "SOC 2 Type II audits evaluate your systems and processes against the Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. Most importantly, not all SOC2 reports are the same – they reflect the unique controls that you decide apply to your organization and your clients. Athenisec works with hundreds of clients to define audit scopes tailored to the needs of their specific clients.",
    },
    {
      title: "Audit Preparation",
      body: "SOC 2 Type II audits assess how well your controls operate over a defined period, typically 3-12 months. During this time, you'll need to demonstrate consistent adherence to the controls and policies you've implemented. Athenisec handles all of the implementation for you, from configuring logging to managing employee compliance and creating documentation.",
    },
    {
      title: "Evidence Gathering",
      body: "Throughout the audit period, your auditor will request documentation that proves your controls are functioning as intended. This includes logs, reports, and records of activities such as access controls, incident responses, and system monitoring. Athenisec gathers and prepares all of this evidence, so your team doesn't need to lift a finger.",
    },
    {
      title: "The Audit",
      body: "A certified third-party auditor conducts the SOC 2 Type II audit. The process involves reviewing your evidence, testing the effectiveness of your controls, and validating that your operations align with SOC 2 standards throughout the defined period.",
    },
    {
      title: "Receive the Audit Report",
      body: "At the end of the audit, the auditor provides a detailed report. This document outlines the controls evaluated, the tests performed, and the results, including any findings. A clean report demonstrates your commitment to protecting customer data and adhering to industry standards.",
    },
    {
      title: "Ongoing Maintenance",
      body: "SOC 2 Type II compliance requires annual audits to maintain certification. In your initial assessment, you define what your organization will do, and then you need to do those things with no exceptions. Continuous monitoring and process improvements ensure your systems stay secure and ready for future reviews, making the renewal process smoother. Athenisec manages this process for you, ensuring that future audits are as smooth as your first.",
    },
  ],
  highlightsHeading: "Highlights of SOC 2 Compliance",
  highlightsIntro:
    "The controls we implement and monitor throughout your SOC 2 engagement.",
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

export default function Soc2Page() {
  return (
    <main className="flex-1">
      <PageHero
        title={CONTENT.title}
        intro={CONTENT.intro}
        cta={{ label: "Get Started", href: "/contact" }}
        image={{
          src: "/images/hero-team.jpg",
          alt: "An Athenisec advisor preparing a SOC 2 audit",
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
