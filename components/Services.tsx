import CardGrid from "@/components/CardGrid";
import ScrollFillText from "@/components/ScrollFillText";

function RefreshIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

function CogIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3 4.5 6v6c0 4.5 3 7.5 7.5 9 4.5-1.5 7.5-4.5 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ClipboardListIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h6M9 19h4" />
    </svg>
  );
}


const SERVICES = [
  {
    icon: RefreshIcon,
    title: "Compliance Operations",
    description:
      "Alleviates the burden of ongoing compliance by handling all required tasks to maintain your certifications and meet evolving standards — from continuous monitoring and documentation updates to employee compliance tasks, auditor communications, and responding to new requirements.",
  },
  {
    icon: CogIcon,
    title: "Compliance Engineering",
    description:
      "Bridges the gap between security and compliance by implementing the technical tasks needed to meet regulatory standards — from configuring secure systems to cloud logging, firewalls, and application security.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Managed Cybersecurity",
    description:
      "Implementation of IT, endpoint, infrastructure, and any other cybersecurity requirements done for you. Athenisec manages on- and off-boarding, configuration, and monitoring, so you can focus on building your product.",
  },
  {
    icon: ClipboardListIcon,
    title: "GRC and Cyber Risk Assessments",
    description:
      "Organizational cybersecurity and compliance risk assessment in accordance with any audited framework or customer security requirement, including reporting, attestation, and client communication.",
  },
];


export default function Services() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <span className="flex items-center gap-2 text-sm text-gray-500">
          <span className="h-1.5 w-1.5 bg-brand" />
          Confidence, resilience, and strategic precision
        </span>

        <ScrollFillText
          text="Discover compliance solutions shaped by trust, precision, and long-term strategic value."
          className="font-heading mt-4 max-w-4xl text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-5xl"
        />

        <div className="mt-14">
          <CardGrid cards={SERVICES} tone="dark" showReadMore />
        </div>
      </div>
    </section>
  );
}
