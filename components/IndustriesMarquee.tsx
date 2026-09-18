type IconComponent = (props: { className?: string }) => React.ReactElement;

function HeartPulseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
      <path d="M3.5 12h4l2-4 3 8 2-4h4.5" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BriefcaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

function BanknoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  );
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const INDUSTRIES: {
  label: string;
  icon: IconComponent;
  pill: string;
  text: string;
  badge: string;
}[] = [
  {
    label: "B2B SaaS",
    icon: BriefcaseIcon,
    pill: "bg-brand",
    text: "text-white",
    badge: "bg-white/20 text-white",
  },
  {
    label: "Fintech",
    icon: BanknoteIcon,
    pill: "bg-blue-200",
    text: "text-blue-950",
    badge: "bg-blue-950/15 text-blue-950",
  },
  {
    label: "Health Tech",
    icon: HeartPulseIcon,
    pill: "bg-gray-900",
    text: "text-white",
    badge: "bg-white/20 text-white",
  },
  {
    label: "Gov Tech & Defense",
    icon: ShieldIcon,
    pill: "bg-blue-500",
    text: "text-white",
    badge: "bg-white/25 text-white",
  },
  {
    label: "Enterprise SaaS",
    icon: BuildingIcon,
    pill: "bg-sky-300",
    text: "text-sky-950",
    badge: "bg-sky-950/15 text-sky-950",
  },
  {
    label: "AI Tech",
    icon: SparkIcon,
    pill: "bg-blue-700",
    text: "text-white",
    badge: "bg-white/20 text-white",
  },
];

type Industry = (typeof INDUSTRIES)[number];

function Bubble({ label, icon: Icon, pill, text, badge }: Industry) {
  return (
    <div
      className={`flex shrink-0 items-center gap-3 rounded-full py-3 pr-7 pl-3 shadow-sm sm:gap-3.5 sm:py-3.5 sm:pr-8 sm:pl-3.5 ${pill}`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10 ${badge}`}
      >
        <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
      </span>
      <span
        className={`text-sm font-medium whitespace-nowrap sm:text-base ${text}`}
      >
        {label}
      </span>
    </div>
  );
}

function BubbleGroup() {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4">
      {INDUSTRIES.map((item) => (
        <Bubble key={item.label} {...item} />
      ))}
    </div>
  );
}

export default function IndustriesMarquee() {
  return (
    <section className="overflow-hidden bg-blue-50/70 py-12 sm:py-16">
      <div className="mask-fade-horizontal flex flex-col gap-3 sm:gap-4">
        <div className="animate-marquee flex w-max items-center">
          <BubbleGroup />
          <BubbleGroup />
        </div>
        <div className="animate-marquee-reverse flex w-max items-center">
          <BubbleGroup />
          <BubbleGroup />
        </div>
      </div>
    </section>
  );
}
