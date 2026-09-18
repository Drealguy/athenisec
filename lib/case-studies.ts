export type CaseStudy = {
  slug: string;
  /** Client name shown on the detail page. Placeholder until real
   *  engagements are cleared for publication. */
  brand: string;
  title: string;
  description: string;
  /** Frameworks delivered — the hover tag on cards, and the chips on the
   *  detail page. */
  tags: string[];
  about: string;
  challenges: string[];
  approach: string[];
};

/** Shared by the homepage section, the Case Studies index and each detail
 *  page, so the three can't drift apart. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "scalable-growth",
    brand: "Client Name",
    title: "Building a stronger compliance posture for scalable growth",
    description:
      "How a growing company improved planning, documentation, and audit readiness to support smarter expansion.",
    tags: ["SOC 2", "HIPAA", "GDPR"],
    about:
      "A fast-growing platform in a regulated industry, scaling its customer base faster than its internal security function could keep pace with.",
    challenges: [
      "Limited internal bandwidth to own day-to-day compliance work.",
      "No single view of which controls mapped to which framework.",
      "Enterprise deals stalling on security review.",
    ],
    approach: [
      "Mapped existing controls against every framework in scope to remove duplicated effort.",
      "Took ownership of evidence collection, documentation and auditor communication.",
      "Established a monitoring cadence so compliance holds between audit cycles.",
    ],
  },
  {
    slug: "audit-readiness",
    brand: "Client Name",
    title: "Achieving audit readiness without an in-house security team",
    description:
      "A managed engagement that helped the business close control gaps and pass its first external audit.",
    tags: ["HIPAA", "ISO 27001"],
    about:
      "An operator preparing for its first external audit with no dedicated security hire and a tight commercial deadline.",
    challenges: [
      "First-time audit with no prior framework experience in house.",
      "Technical gaps across access control and logging.",
      "A fixed deadline driven by a customer commitment.",
    ],
    approach: [
      "Ran a gap assessment and prioritised findings by audit impact.",
      "Implemented the technical remediation directly rather than handing over a list.",
      "Prepared the team and the evidence pack ahead of fieldwork.",
    ],
  },
  {
    slug: "fractional-ciso",
    brand: "Client Name",
    title: "Delivering executive security guidance without a full-time CISO",
    description:
      "How outsourced compliance support brought clarity, structure, and stronger decision making.",
    tags: ["ISO 27001", "SOC 2", "PCI DSS", "GDPR"],
    about:
      "A scaling business needing senior security judgement in the room without carrying a full-time executive hire.",
    challenges: [
      "Security decisions escalating with no clear owner.",
      "Multiple overlapping frameworks pulling in different directions.",
      "Board and customer reporting with no consistent format.",
    ],
    approach: [
      "Provided senior guidance on risk decisions as they arose.",
      "Consolidated overlapping requirements into a single control set.",
      "Built reporting that satisfies both board oversight and customer due diligence.",
    ],
  },
  {
    slug: "unified-controls",
    brand: "Client Name",
    title: "Consolidating multiple frameworks into one control set",
    description:
      "Mapping overlapping requirements so a single set of evidence satisfies several audits at once.",
    tags: ["SOC 2", "ISO 27001"],
    about:
      "An organisation carrying several certifications, each maintained separately and duplicating work across teams.",
    challenges: [
      "The same evidence collected repeatedly for different audits.",
      "Framework owners working in isolation from one another.",
      "Rising audit cost with each certification added.",
    ],
    approach: [
      "Built a unified control set mapped to every framework in scope.",
      "Reduced evidence collection to a single cycle per control.",
      "Aligned audit scheduling to remove repeated fieldwork.",
    ],
  },
  {
    slug: "continuous-monitoring",
    brand: "Client Name",
    title: "Standing up continuous monitoring across cloud infrastructure",
    description:
      "Configuring logging, alerting, and evidence collection so compliance holds between audit cycles.",
    tags: ["SOC 2", "PCI DSS"],
    about:
      "A cloud-native business whose compliance posture degraded between annual audits as infrastructure changed.",
    challenges: [
      "Controls drifting as infrastructure changed week to week.",
      "Evidence reconstructed retrospectively before each audit.",
      "No alerting when a control silently stopped working.",
    ],
    approach: [
      "Configured logging and alerting across the cloud estate.",
      "Automated evidence collection so it accrues continuously.",
      "Set review cadences that catch drift within days, not months.",
    ],
  },
  {
    slug: "enterprise-procurement",
    brand: "Client Name",
    title: "Preparing a health tech platform for enterprise procurement",
    description:
      "Meeting the security requirements that unblock larger customers and shorten review cycles.",
    tags: ["HIPAA", "SOC 2", "GDPR"],
    about:
      "A health technology platform whose growth depended on clearing enterprise security review faster.",
    challenges: [
      "Lengthy security questionnaires consuming engineering time.",
      "Handling requirements varying by customer.",
      "Procurement cycles extending well beyond forecast.",
    ],
    approach: [
      "Certified against the frameworks enterprise buyers ask for first.",
      "Built a reusable response pack for security questionnaires.",
      "Took on customer security calls directly alongside the team.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
