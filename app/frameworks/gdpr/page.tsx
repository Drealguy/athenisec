import PageHero from "@/components/PageHero";
import FrameworkTimeline from "@/components/FrameworkTimeline";
import FrameworkHighlights from "@/components/FrameworkHighlights";
import CaseStudies from "@/components/CaseStudies";

/**
 * Every Frameworks page shares the same layout — duplicate this file into
 * a sibling route and swap this one object.
 */
const CONTENT = {
  title: "Achieve & Maintain GDPR with Unmatched Ease",
  intro:
    "Your dedicated team takes care of your entire GDPR process from start to finish with uncompromising quality and speed.",
  processEyebrow: "How it works",
  processHeading: "Certification Process Details",
  steps: [
    {
      title: "Map Your Data",
      body: "Athenisec conducts a comprehensive review of the personal data your organization collects, processes, stores, and shares. From this we create a data inventory that includes what data you handle, where it comes from, where it's stored, and who has access to it.",
    },
    {
      title: "Implement Privacy Controls",
      body: "Address the gaps identified by implementing necessary controls. Athenisec will work with you to manage the full GDPR process, including updating privacy policies, ensuring lawful bases for processing, implementing data protection impact assessments (DPIAs), and enhancing security measures to protect personal data.",
    },
    {
      title: "Train Your Team",
      body: "GDPR compliance is a company-wide responsibility. Conduct training for your employees to ensure they understand their roles in maintaining data privacy, handling subject requests, and following security best practices.",
    },
    {
      title: "Prepare for Data Subject Requests and Breaches",
      body: "Set up processes to respond to data subject requests (e.g., access, correction, or deletion) within the required timeframes. Develop a clear incident response plan to handle data breaches, including notifying the relevant supervisory authority within 72 hours.",
    },
    {
      title: "Ongoing Maintenance",
      body: "Maintain detailed records of your compliance efforts, such as your data inventory, DPIAs, and incident response logs. These records demonstrate your adherence to GDPR principles and readiness for audits by supervisory authorities. Athenisec manages this process for you, ensuring that you remain in compliance with regulations and your contracts.",
    },
  ],
  highlightsHeading: "Highlights of GDPR Compliance",
  highlightsIntro:
    "The controls we implement and monitor throughout your GDPR engagement.",
  highlights: [
    {
      title: "Data Management",
      description:
        "Inventory and track stored data, manage associated policies, and conduct ongoing data protection assessments.",
    },
    {
      title: "Third-Party Management",
      description:
        "Data protection agreements, due diligence on data processors, facilitate data subject rights related to data transfers.",
    },
    {
      title: "Request Processing",
      description:
        "Setup and maintain procedures for receiving and processing all types of data subject requests for compliance.",
    },
    {
      title: "Employee Training",
      description:
        "Training covering data protection principles, lawful processing of data subject rights, breach disclosure, and role-specific responsibilities.",
    },
  ],
};

export default function GdprPage() {
  return (
    <main className="flex-1">
      <PageHero
        title={CONTENT.title}
        intro={CONTENT.intro}
        cta={{ label: "Get Started", href: "/contact" }}
        image={{
          src: "/images/hero-team.jpg",
          alt: "An Athenisec advisor preparing a GDPR audit",
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
