import PageHero from "@/components/PageHero";
import FrameworkTimeline from "@/components/FrameworkTimeline";
import FrameworkHighlights from "@/components/FrameworkHighlights";
import CaseStudies from "@/components/CaseStudies";

/**
 * Every Frameworks page shares the same layout — duplicate this file into
 * a sibling route and swap this one object.
 */
const CONTENT = {
  title: "Achieve & Maintain HIPAA with Unmatched Ease",
  intro:
    "Your dedicated team takes care of your entire HIPAA process from start to finish with uncompromising quality and speed.",
  processEyebrow: "How it works",
  processHeading: "Certification Process Details",
  steps: [
    {
      title: "Planning",
      body: "HIPAA sets standards for protecting Protected Health Information (PHI). Key components include the Privacy Rule, Security Rule, and Breach Notification Rule, which cover how PHI should be accessed, stored, transmitted, and reported in case of a breach.",
    },
    {
      title: "Conduct a Risk Assessment",
      body: "Perform a comprehensive risk assessment to identify vulnerabilities in how PHI is handled within your organization. This assessment is a critical first step in developing a compliant security framework.",
    },
    {
      title: "Implement Safeguards and Policies",
      body: "Based on the risk assessment, implement necessary administrative, physical, and technical safeguards. These may include access controls, encryption, incident response plans, and employee training on HIPAA policies.",
    },
    {
      title: "Develop a HIPAA Compliance Program",
      body: "Create and document a compliance program tailored to your organization's needs. This includes defining procedures for handling PHI, managing third-party business associate agreements (BAAs), and preparing for potential breaches.",
    },
    {
      title: "Ensure Ongoing Compliance",
      body: "HIPAA compliance is an ongoing process. Regularly update your risk assessments, retrain staff, and monitor your systems for potential vulnerabilities to maintain compliance and adapt to changes in regulations.",
    },
  ],
  highlightsHeading: "Highlights of HIPAA Compliance",
  highlightsIntro:
    "The areas that make HIPAA compliance hardest to get right on your own.",
  highlights: [
    {
      title: "Complex Regulations",
      description:
        "The HIPAA Privacy and Security Rules are detailed and technical, making it difficult for organizations to interpret and apply them effectively to their specific operations.",
    },
    {
      title: "Managing PHI",
      description:
        "Identifying, tracking, and securing PHI across all systems and workflows can be challenging, especially for organizations with legacy systems or decentralized data.",
    },
    {
      title: "Employee Training",
      description:
        "Ensuring all employees understand their responsibilities for safeguarding PHI and following HIPAA policies requires ongoing training and reinforcement.",
    },
    {
      title: "Product Capabilities",
      description:
        "HIPAA compliance requires logging, monitoring, & record keeping. In order to enable your clients to be HIPAA compliant, your product will require dedicated functionality.",
    },
  ],
};

export const metadata = {
  title: "HIPAA Compliance Services",
  description: CONTENT.intro,
  alternates: { canonical: "/frameworks/hipaa" },
};

export default function HipaaPage() {
  return (
    <main className="flex-1">
      <PageHero
        title={CONTENT.title}
        intro={CONTENT.intro}
        cta={{ label: "Get Started", href: "/contact" }}
        image={{
          src: "/images/hero-team.jpg",
          alt: "An Athenisec advisor preparing a HIPAA audit",
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
