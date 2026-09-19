export type CaseStudy = {
  slug: string;
  /** Client name shown on the detail page. Placeholder until real
   *  engagements are cleared for publication. */
  brand: string;
  /** Headline for the "About the client" section on the detail page. */
  title: string;
  /** Short "what they are" blurb — shown on the card, under the brand
   *  name, and used as the page's meta description. */
  description: string;
  /** Frameworks delivered — the hover tag on cards, and the chips on the
   *  detail page. */
  tags: string[];
  about: string;
  challenges: string[];
  approach: string[];
  /** Card thumbnail. Falls back to the placeholder graphic when omitted. */
  image?: { src: string; alt: string };
};

/** Shared by the homepage section, the Case Studies index and each detail
 *  page, so the three can't drift apart. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "medisync-health",
    brand: "MediSync Health",
    title: "Reaching HIPAA certification in 45 days ahead of a hard audit deadline",
    description:
      "Telemedicine SaaS platform connecting rural clinics with specialist doctors. 45-person team, $2.3M ARR.",
    tags: ["HIPAA"],
    about:
      "Telemedicine SaaS platform connecting rural clinics with specialist doctors. 45-person team, $2.3M ARR.",
    challenges: [
      "Handling patient PHI across the platform with no formal compliance program in place.",
      "A HIPAA audit scheduled in 60 days, with zero preparation completed.",
      "Multiple integrations with health systems creating scope confusion.",
      "Limited internal cybersecurity resources to run the program alone.",
    ],
    approach: [
      "Conducted a rapid HIPAA gap assessment and scoped every PHI data flow across the platform.",
      "Implemented access controls, encryption at rest and in transit, and BAA documentation.",
      "Built an audit-ready evidence repository and trained staff on HIPAA policy.",
      "Achieved HIPAA certification in 45 days, unlocking an enterprise deal worth $500K in ARR.",
    ],
    image: {
      src: "/images/case-studies/medisync-health.png",
      alt: "MediSync Health telemedicine platform showing HIPAA audit readiness progress",
    },
  },
  {
    slug: "payflow-analytics",
    brand: "PayFlow Analytics",
    title: "Achieving PCI DSS v4.0.1 certification in 90 days",
    description:
      "Fintech SaaS processing payment data for e-commerce merchants. 30-person team, $1.8M ARR.",
    tags: ["PCI DSS"],
    about:
      "Fintech SaaS processing payment data for e-commerce merchants. 30-person team, $1.8M ARR.",
    challenges: [
      "Processing credit card data without PCI DSS compliance.",
      "Using a third-party payment processor but still liable for integration security.",
      "Misconfigured AWS S3 buckets exposing cardholder data.",
      "Vendor dependency management chaos.",
    ],
    approach: [
      "Reduced PCI scope through tokenization and proper segmentation.",
      "Remediated S3 bucket configurations and implemented encryption.",
      "Mapped vendor dependencies and enforced SLAs.",
      "Achieved PCI DSS v4.0.1 certification in 90 days.",
    ],
    image: {
      src: "/images/case-studies/payflow-analytics.png",
      alt: "PayFlow Analytics dashboard showing PCI DSS compliance and payment monitoring",
    },
  },
  {
    slug: "cloudstack-enterprise",
    brand: "CloudStack Enterprise",
    title:
      "Achieving SOC 2, ISO 27001 and GDPR certification in 6 months for EU expansion",
    description:
      "B2B SaaS infrastructure platform selling to enterprises. 60-person team, $4.2M ARR.",
    tags: ["SOC 2", "ISO 27001", "GDPR"],
    about:
      "B2B SaaS infrastructure platform selling to enterprises. 60-person team, $4.2M ARR.",
    challenges: [
      "Already SOC 2 compliant but needed ISO 27001 and GDPR for EU market expansion.",
      "One founder managing all compliance while the company scaled.",
      "Engineering team diverted to compliance work instead of product.",
      "Multi-framework requirements felt overwhelming.",
    ],
    approach: [
      "Ran SOC 2 and ISO 27001 as an integrated program with 95% control overlap.",
      "Deployed a dedicated compliance team to handle audit work.",
      "Freed engineering to focus on product while maintaining compliance velocity.",
      "Achieved all three certifications (SOC 2 Type II, ISO 27001, GDPR) in 6 months, returning $120K in annual engineering time to product development.",
    ],
    image: {
      src: "/images/case-studies/cloudstack-enterprise.png",
      alt: "CloudStack Enterprise dashboard showing SOC 2, ISO 27001, and GDPR compliance progress",
    },
  },
  {
    slug: "healthvault-labs",
    brand: "HealthVault Labs",
    title: "Reaching dual HIPAA and GDPR readiness in 120 days",
    description:
      "Healthcare data analytics startup processing genetic testing results. 25-person team, $900K ARR.",
    tags: ["HIPAA", "GDPR"],
    about:
      "Healthcare data analytics startup processing genetic testing results. 25-person team, $900K ARR.",
    challenges: [
      "Handling sensitive PHI and genomic data under both HIPAA and GDPR requirements.",
      "No formal incident response plan or breach notification procedure.",
      "A third-party vendor managing ePHI without a clear responsibility matrix.",
      "A compliance knowledge gap across the entire organization.",
    ],
    approach: [
      "Built a comprehensive HIPAA + GDPR compliance program from scratch.",
      "Implemented an incident response plan with a 72-hour breach notification SLA.",
      "Established a vendor management framework and enforced BAAs across 12 vendors.",
      "Conducted staff training on data protection protocols.",
      "Achieved dual HIPAA/GDPR readiness in 120 days, unlocking enterprise contracts.",
    ],
    image: {
      src: "/images/case-studies/healthvault-labs.png",
      alt: "HealthVault Labs dashboard showing HIPAA and GDPR compliance status",
    },
  },
  {
    slug: "securefinance-corp",
    brand: "SecureFinance Corp",
    title: "Passing PCI DSS and SOC 2 audits on schedule with zero findings",
    description:
      "Lending platform providing SMB loans. 40-person team, $3.1M ARR.",
    tags: ["PCI DSS", "SOC 2"],
    about: "Lending platform providing SMB loans. 40-person team, $3.1M ARR.",
    challenges: [
      "PCI DSS and SOC 2 requirements driven by credit card processors and enterprise clients.",
      "Legacy infrastructure running outdated security controls.",
      "Limited prior audit preparation experience.",
      "Competing timelines: a PCI audit in 6 months and a SOC 2 audit in 8 months.",
    ],
    approach: [
      "Conducted a comprehensive security posture assessment.",
      "Modernized infrastructure with proper segmentation and encryption.",
      "Built a unified evidence repository serving both PCI and SOC 2 requirements.",
      "Implemented continuous monitoring for ongoing compliance.",
      "Passed both audits on schedule with zero findings.",
    ],
  },
  {
    slug: "govtech-solutions",
    brand: "GovTech Solutions",
    title:
      "Achieving CMMC 2 Level 2 certification in 120 days to close a $1.2M contract",
    description:
      "Government contracting platform handling federal procurement data. 35-person team, $2.6M ARR.",
    tags: ["CMMC 2"],
    about:
      "Government contracting platform handling federal procurement data. 35-person team, $2.6M ARR.",
    challenges: [
      "Required CMMC 2 Level 2 certification to bid on defense contracts.",
      "No prior security operations center or formalized incident response.",
      "Unclear requirements for handling Controlled Unclassified Information (CUI).",
      "An aggressive timeline: certification needed in 4 months to close a $1.2M contract.",
    ],
    approach: [
      "Built a CMMC 2 compliance roadmap aligned with FedRAMP controls.",
      "Implemented SOC operations and 24/7 monitoring.",
      "Established CUI handling procedures and trained the entire team.",
      "Prepared a comprehensive C3PAO audit package.",
      "Achieved CMMC 2 Level 2 certification in 120 days, closing the government contract.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
