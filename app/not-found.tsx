import Link from "next/link";
import HoverSwapText from "@/components/HoverSwapText";

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-white px-5 py-16 text-center sm:px-6 lg:px-8">
      <span className="flex items-center gap-2 text-sm text-gray-500">
        <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
        404 error
      </span>

      <h1 className="font-heading mt-4 text-7xl font-medium tracking-[-0.03em] text-gray-900 sm:text-8xl lg:text-9xl">
        404
      </h1>

      <p className="font-heading mt-4 text-2xl font-medium tracking-[-0.03em] text-gray-900 sm:text-3xl">
        This page didn&apos;t make it through the audit.
      </p>
      <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist, may have moved,
        or the link may be out of date.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#001d61]"
        >
          <HoverSwapText>Back to Home</HoverSwapText>
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
        >
          <HoverSwapText>Contact Us</HoverSwapText>
        </Link>
      </div>
    </main>
  );
}
