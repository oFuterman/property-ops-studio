"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Services", href: "/services" },
  { label: "What We Fix", href: "/#what-we-fix" },
  { label: "Custom Systems", href: "/#custom-systems" },
  { label: "Results", href: "/#results" },
  { label: "About", href: "/#about" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.webp"
            alt="Property Ops Studio"
            width={220}
            height={48}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            className="rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-light"
          >
            Schedule a conversation
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-600 transition-colors hover:text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              className="mt-2 rounded-sm bg-ink px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-light"
            >
              Schedule a conversation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
