import PageHero from "@/components/PageHero";
import ComplianceChallenges from "@/components/ComplianceChallenges";
import HowWeDiffer from "@/components/HowWeDiffer";
import CaseStudies from "@/components/CaseStudies";

/**
 * Every Who We Serve page shares the same section order and styling —
 * duplicate this file into a sibling route and swap this one object.
 */
const CONTENT = {
  title: "Compliance Solutions for Enterprise Tech",
  intro:
    "As your Enterprise SaaS business scales, maintaining compliance with global standards like ISO 27001, SOC2, and GDPR is critical. We provide tailored compliance to ensure you stay secure, scalable, and fully compliant.",
  challengesIntro:
    "Enterprise SaaS companies face several compliance hurdles, including the need to protect sensitive customer data, adhere to data privacy regulations, and ensure scalability while maintaining the security requirements of clients and partners. Some of the most common challenges include:",
  challenges: [
    {
      title: "Limited Bandwidth",
      description:
        "Limited internal resources - both in time and personnel - handling security and compliance can feel unsustainable.",
    },
    {
      title: "Navigating Unfamiliar Territory",
      description:
        "Working to meet audited frameworks without first hand experience can feel like stepping into a complex landscape without a clear map.",
    },
    {
      title: "Delays Derail Progress",
      description:
        "Mistakes and bottlenecks in meeting requirements can jeopardize timelines and risk costly setbacks.",
    },
  ],
  differentiatorsIntro:
    "We handle the work rather than hand you a checklist, and we do it without tying you to any one vendor.",
  differentiators: [
    {
      title: "Platform Agnostic",
      description:
        "We believe in files over apps. That means we strive to be totally agnostic to software and avoid using anything that locks down our clients to a single vendor.",
    },
    {
      title: "Forward Deployed Team",
      description:
        "What sets us apart is that we handle the actual work for our clients, going beyond mere advisory services to deliver hands on keyboards.",
    },
    {
      title: "Unmatched Expertise",
      description:
        "Our team brings unparalleled experience and deep technical knowledge to every aspect of our work. We do things right the first time.",
    },
  ],
};

export const metadata = {
  title: "Compliance for Enterprise Tech",
  description: CONTENT.intro,
  alternates: { canonical: "/who-we-serve/enterprise-saas" },
};

export default function EnterpriseSaaSPage() {
  return (
    <main className="flex-1">
      <PageHero
        title={CONTENT.title}
        intro={CONTENT.intro}
        cta={{ label: "Learn More", href: "/contact" }}
        image={{
          src: "/images/hero-team.jpg",
          alt: `${CONTENT.title} compliance team`,
        }}
      />
      <ComplianceChallenges
        intro={CONTENT.challengesIntro}
        challenges={CONTENT.challenges}
      />
      <HowWeDiffer
        intro={CONTENT.differentiatorsIntro}
        items={CONTENT.differentiators}
      />
      <CaseStudies />
    </main>
  );
}
