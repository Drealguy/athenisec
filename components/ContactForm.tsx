"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

function ArrowLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

const SERVICES = ["PCI DSS", "HIPAA", "SOC 2", "ISO 27001", "GDPR", "CMMC 2", "Not sure yet"];

type Answers = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const EMPTY_ANSWERS: Answers = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

function firstName(fullName: string) {
  return fullName.trim().split(/\s+/)[0] ?? "";
}

type Step = {
  id: keyof Answers;
  kind: "text" | "email" | "tel" | "choice" | "textarea";
  eyebrow: string;
  question: (a: Answers) => string;
  placeholder?: string;
  required: boolean;
};

const STEPS: Step[] = [
  {
    id: "name",
    kind: "text",
    eyebrow: "Let's start with you",
    question: () => "So, what's your name?",
    placeholder: "Jane Doe",
    required: true,
  },
  {
    id: "email",
    kind: "email",
    eyebrow: "Good to meet you",
    question: (a) =>
      `Nice to meet you${a.name ? `, ${firstName(a.name)}` : ""}. What's the best email to reach you at?`,
    placeholder: "jane@company.com",
    required: true,
  },
  {
    id: "company",
    kind: "text",
    eyebrow: "About your team",
    question: () => "Where do you work?",
    placeholder: "Company, Inc.",
    required: false,
  },
  {
    id: "phone",
    kind: "tel",
    eyebrow: "Just in case",
    question: () => "And a good number to reach you on?",
    placeholder: "+1 010 123-5678",
    required: true,
  },
  {
    id: "service",
    kind: "choice",
    eyebrow: "Almost there",
    question: () => "Which framework's giving you the most trouble?",
    required: false,
  },
  {
    id: "message",
    kind: "textarea",
    eyebrow: "Last thing",
    question: (a) =>
      `Anything else we should know${a.name ? `, ${firstName(a.name)}` : ""}?`,
    placeholder: "Tell us a bit about your business and your compliance goals…",
    required: false,
  },
];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const totalSteps = STEPS.length + 1; // + the final consent/submit step
  const onReview = step === STEPS.length;
  const current = STEPS[step];

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const canAdvance = useMemo(() => {
    if (onReview) return accepted;
    if (!current.required) return true;
    return answers[current.id].trim().length > 0;
  }, [answers, current, onReview, accepted]);

  function goNext() {
    if (!canAdvance) return;
    if (onReview) {
      setSubmitted(true);
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      goNext();
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-2xl flex-col items-center justify-center px-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h1 className="font-heading mt-6 text-3xl font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl">
          Thanks{answers.name ? `, ${firstName(answers.name)}` : ""} — we'll be in touch.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500">
          A member of our team will reach out within one business day to talk
          through what compliance should look like for your business.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="h-1 w-full bg-gray-100">
        <div
          className="h-full bg-brand transition-all duration-500 ease-out"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        />
      </div>

      <div className="mx-auto flex min-h-[70vh] w-full max-w-2xl flex-col justify-center px-6 py-16 sm:py-20">
        <div key={step} className="animate-fade-up">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
            {onReview ? "One last thing" : current.eyebrow}
            <span className="text-gray-300">
              {step + 1} / {totalSteps}
            </span>
          </span>

          {!onReview ? (
            <>
              <h1 className="font-heading mt-4 text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-5xl">
                {current.question(answers)}
                {current.required ? (
                  <span className="text-brand"> *</span>
                ) : null}
              </h1>

              <div className="mt-8">
                {current.kind === "textarea" ? (
                  <textarea
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    value={answers[current.id]}
                    onChange={(e) =>
                      setAnswers((a) => ({ ...a, [current.id]: e.target.value }))
                    }
                    onKeyDown={handleKeyDown}
                    rows={3}
                    placeholder={current.placeholder}
                    className="w-full resize-none border-b-2 border-gray-200 bg-transparent pb-3 text-xl text-gray-900 placeholder:text-gray-300 focus:border-brand focus:outline-none"
                  />
                ) : current.kind === "choice" ? (
                  <div className="flex flex-wrap gap-3">
                    {SERVICES.map((service) => {
                      const active = answers.service === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setAnswers((a) => ({ ...a, service }));
                            window.setTimeout(goNext, 300);
                          }}
                          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                            active
                              ? "bg-brand text-white"
                              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    type={current.kind}
                    value={answers[current.id]}
                    onChange={(e) =>
                      setAnswers((a) => ({ ...a, [current.id]: e.target.value }))
                    }
                    onKeyDown={handleKeyDown}
                    placeholder={current.placeholder}
                    className="w-full border-b-2 border-gray-200 bg-transparent pb-3 text-xl text-gray-900 placeholder:text-gray-300 focus:border-brand focus:outline-none"
                  />
                )}
              </div>
            </>
          ) : (
            <>
              <h1 className="font-heading mt-4 text-3xl leading-[1.15] font-medium tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-5xl">
                Ready to send this over?
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500">
                We'll reach out at{" "}
                <span className="font-medium text-gray-900">
                  {answers.email || "the email you gave us"}
                </span>{" "}
                within one business day.
              </p>

              <label className="mt-8 flex items-start gap-3 text-sm text-gray-500">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-brand focus:ring-brand/30"
                />
                I accept the{" "}
                <Link
                  href="/terms-of-service"
                  className="text-gray-700 underline underline-offset-2 hover:text-brand"
                >
                  terms and conditions
                </Link>
              </label>
            </>
          )}

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={goNext}
              disabled={!canAdvance}
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#001d61] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <HoverSwapText>
                {onReview ? "Submit Request" : "Continue"}
              </HoverSwapText>
              <ArrowUpRightIcon className="h-4 w-4" />
            </button>

            {step > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back
              </button>
            ) : null}

            <span className="ml-auto hidden text-xs text-gray-400 sm:block">
              Press Enter ↵
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
