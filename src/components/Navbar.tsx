"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CALENDLY_URL } from "@/lib/constants";

type NavLink = {
  label: string;
  href: string;
  /** Home-page section this link points at, used for scroll spying. */
  section?: string;
};

const NAV_LINKS: readonly NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works", section: "how-it-works" },
  { label: "What We Fix", href: "/#what-we-fix", section: "what-we-fix" },
  { label: "Custom Systems", href: "/#custom-systems", section: "custom-systems" },
  { label: "Results", href: "/#results", section: "results" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Resources", href: "/resources" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.section).filter(
  (id): id is string => Boolean(id),
);

/** Distance below the viewport top at which a section counts as "the one you're reading". */
const SPY_OFFSET = 96;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  // On the home page the highlighted link follows how far down the page you are.
  useEffect(() => {
    if (!isHome) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    let frame = 0;

    const update = () => {
      frame = 0;
      // The last section to have crossed the line is the one being read. Above the
      // first section (the hero) nothing is highlighted.
      let current: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= SPY_OFFSET) current = section.id;
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Deferred rather than called inline so the first paint isn't a cascading render.
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  // "page" for a whole route, "location" for a section inside the current page.
  const currentFor = (link: NavLink): "page" | "location" =>
    link.section ? "location" : "page";

  const isActive = (link: NavLink) => {
    if (link.section) return isHome && activeSection === link.section;
    if (link.href === "/resources") return pathname.startsWith("/resources");
    return pathname === link.href;
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-gradient-to-r after:from-transparent after:via-teal-400/50 after:to-transparent after:content-['']"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Property Ops Studio"
            width={220}
            height={48}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? currentFor(link) : undefined}
                className={
                  active
                    ? "nav-active relative text-sm after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-blue after:to-teal-500 after:content-['']"
                    : "text-sm font-medium text-slate-600 transition-colors hover:text-navy"
                }
              >
                {link.label}
              </a>
            );
          })}
          <a href={CALENDLY_URL} className="btn-brand px-5 py-2.5 text-sm">
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
            {NAV_LINKS.map((link) => {
              const active = isActive(link);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? currentFor(link) : undefined}
                  className={
                    active
                      ? "nav-active relative pl-4 text-base before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-blue before:to-teal-500 before:content-['']"
                      : "text-base font-medium text-slate-600 transition-colors hover:text-navy"
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={CALENDLY_URL}
              className="btn-brand mt-2 px-5 py-2.5 text-sm"
            >
              Schedule a conversation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
