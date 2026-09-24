import PageHero from "@/components/PageHero";
import FrameworkTimeline from "@/components/FrameworkTimeline";
import FrameworkHighlights from "@/components/FrameworkHighlights";
import CaseStudies from "@/components/CaseStudies";

/**
 * Every Frameworks page shares the same layout — duplicate this file into
 * a sibling route and swap this one object.
 */
const CONTENT = {
  title: "Achieve & Maintain CMMC 2 with Unmatched Ease",
  intro:
    "Your dedicated team takes care of your entire CMMC 2 process from start to finish with uncompromising quality and speed.",
  processEyebrow: "How it works",
  processHeading: "Certification Process Details",
  steps: [
    {
      title: "Requirement Mapping",
      body: "CMMC Level 2 focuses on protecting Controlled Unclassified Information (CUI) and requires organizations to implement practices from NIST SP 800-171. One of the most challenging aspects is mapping these requirements to your organization's systems and processes, and the specifics of CUI under your US government contract.",
    },
    {
      title: "Gap Assessment",
      body: "Athenisec works with you to perform a thorough gap assessment to identify where your current practices fall short of the required controls. This step provides a clear roadmap for the changes needed to meet CMMC Level 2 standards.",
    },
    {
      title: "Implement Security Practices",
      body: "Address the gaps identified in your assessment by implementing necessary controls. Athenisec will ensure that all security practices, from access control to incident response, are well-documented & aligned with your auditor's requirements.",
    },
    {
      title: "The Audit",
      body: "Certification for CMMC Level 2 requires an assessment by a Certified Third-Party Assessment Organization (C3PAO). After the audit, the C3PAO submits their findings to the CMMC Accreditation Body for review. Athenisec manages the full process of your audit, handling all communications with the external auditor and answering any questions.",
    },
    {
      title: "Maintain Compliance",
      body: "Continuous monitoring and process improvements ensure your systems stay secure and ready for future reviews, making the renewal process smoother. Athenisec manages this process for you, ensuring that future audits are as smooth as your first, and that you remain in compliance with your contracts.",
    },
  ],
  highlightsHeading: "Highlights of CMMC Compliance",
  highlightsIntro:
    "The controls we implement and monitor throughout your CMMC 2 engagement.",
  highlights: [
    {
      title: "Understand & Map NIST 800-171",
      description:
        "Assess 110+ NIST controls, translate to actionable steps for your organization, align to auditor expectations.",
    },
    {
      title: "Manage CUI",
      description:
        "Analyze associated contracts to define CUI, map CUI to data inventory and infrastructure, and track data throughout the company to ensure compliance.",
    },
    {
      title: "Documentation",
      description:
        "Manage extensive documentation requirements, generate system security plan, and review all associated NIST Controls.",
    },
    {
      title: "The Audit Process",
      description:
        "Manage C3PAO evidence requests and ensure timely response and defense to all control mappings to both framework requirements and specific organization details.",
    },
  ],
};

export const metadata = {
  title: "CMMC 2.0 Compliance Services",
  description: CONTENT.intro,
  alternates: { canonical: "/frameworks/cmmc-2" },
};

export default function Cmmc2Page() {
  return (
    <main className="flex-1">
      <PageHero
        title={CONTENT.title}
        intro={CONTENT.intro}
        cta={{ label: "Get Started", href: "/contact" }}
        image={{
          src: "/images/hero-team.jpg",
          alt: "An Athenisec advisor preparing a CMMC 2 audit",
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
