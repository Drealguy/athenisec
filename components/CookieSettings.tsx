"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "athenisec-cookie-preferences";

type Preferences = { analytics: boolean };

function readPreferences(): Preferences | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Preferences) : null;
  } catch {
    return null;
  }
}

/**
 * Honest cookie preferences control: this site currently sets no
 * non-essential cookies (verified against the codebase, not assumed), so
 * there is nothing to opt out of yet. The toggle and storage exist so this
 * is meaningful the moment that changes, rather than a banner demanding
 * consent for tracking that doesn't exist.
 */
export default function CookieSettings({
  className = "",
  label = "Cookie Settings",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const prefs = readPreferences();
    if (prefs) setAnalytics(prefs.analytics);
  }, []);

  useEffect(() => {
    if (!open) setSaved(false);
  }, [open]);

  function save() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics }));
    } catch {
      // Storage unavailable (private mode, blocked, etc.) — preference just
      // won't persist across visits; nothing else depends on it.
    }
    setSaved(true);
    window.setTimeout(() => setOpen(false), 700);
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h2
              id="cookie-settings-title"
              className="font-heading text-lg font-medium tracking-[-0.03em] text-gray-900"
            >
              Cookie preferences
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              This site doesn&apos;t currently set any non-essential cookies —
              nothing is tracked beyond what your browser needs to load the
              page. If that ever changes, your choice here will control it.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Strictly necessary
                  </p>
                  <p className="text-xs text-gray-500">
                    Always on — required for the site to work.
                  </p>
                </div>
                <span className="text-xs font-medium text-gray-400">On</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Analytics
                  </p>
                  <p className="text-xs text-gray-500">
                    Not currently in use on this site.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analytics}
                  aria-label="Toggle analytics cookies"
                  onClick={() => setAnalytics((a) => !a)}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    analytics ? "bg-brand" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                      analytics ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                onClick={save}
                className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#001d61]"
              >
                {saved ? "Saved" : "Save preferences"}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
