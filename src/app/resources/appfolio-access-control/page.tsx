import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

const PDF_URL =
  "/resources/extending-appfolio-max-building-access-control.pdf";

export const metadata: Metadata = {
  title: "AppFolio Max and Building Access Control",
  description:
    "A Property Ops Studio case study connecting AppFolio Max with dormakaba Community access-management software and Comelit at a 118-unit property.",
  alternates: { canonical: "/resources/appfolio-access-control" },
  openGraph: {
    title: "AppFolio Max and Building Access Control | Property Ops Studio",
    description:
      "A case study connecting AppFolio Max with dormakaba Community and Comelit while retaining existing access-control infrastructure.",
    url: "/resources/appfolio-access-control",
    type: "article",
    authors: [SITE.name],
  },
  twitter: {
    card: "summary_large_image",
    title: "AppFolio Max and Building Access Control | Property Ops Studio",
    description:
      "A case study connecting AppFolio Max with dormakaba Community and Comelit while retaining existing access-control infrastructure.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Extending AppFolio Max Into Building Access Control",
  description: metadata.description,
  url: `${SITE.url}/resources/appfolio-access-control`,
  image: `${SITE.url}/images/resources/appfolio-access-control-cover.png`,
  author: { "@type": "Organization", name: SITE.name, url: SITE.url },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  about: ["AppFolio Max", "Building access control", "Property management automation"],
  associatedMedia: {
    "@type": "MediaObject",
    contentUrl: `${SITE.url}${PDF_URL}`,
    encodingFormat: "application/pdf",
  },
};

const TAKEAWAYS = [
  "Connect resident lifecycle information in AppFolio Max with routine access-control administration.",
  "Retain serviceable dormakaba and Comelit infrastructure instead of replacing a complete installed system.",
  "Reduce duplicate entry and dependence on every site employee remembering a separate access-system workflow.",
  "Compare a focused, fixed-price integration with packaged platforms carrying continuing software fees.",
] as const;

export default function AccessControlWhitePaperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <section className="relative overflow-hidden bg-gradient-to-br from-ink via-navy to-teal-700 px-6 py-16 text-white sm:py-20 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-teal-400/60 after:to-transparent after:content-['']">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                White paper &amp; case study
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">
                Extending AppFolio Max Into Building Access Control
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                A case study for midsized property operators using dormakaba
                Community software and Comelit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-brand px-6 py-3"
                >
                  View the full paper
                </a>
                <a
                  href={PDF_URL}
                  download
                  className="inline-flex rounded-sm border border-white/50 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/resources/appfolio-access-control-cover.png"
                alt="Cover of Extending AppFolio Max Into Building Access Control"
                width={1275}
                height={1650}
                priority
                className="h-auto w-56 rounded-sm border border-white/20 bg-white shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">
                Executive overview
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Connecting the resident record to physical access
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
                <p>
                  AppFolio can hold the resident, lease, unit, move-in, and
                  move-out information while a separate building system manages
                  physical access. Without a dependable connection, staff must
                  repeat resident lifecycle work in both systems.
                </p>
                <p>
                  This paper examines a 118-unit Class A multifamily property
                  with retail in Glendale, California. Property Ops Studio
                  connected AppFolio Max with dormakaba Community Access
                  Management Software while the property retained its existing
                  dormakaba keyless-entry environment and Comelit video-entry
                  system.
                </p>
                <p>
                  The case study also considers operating consistency, staff
                  training, recurring software fees, and when a focused
                  integration may be preferable to replacing serviceable
                  infrastructure with a broader packaged platform.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-teal-400/25 bg-gradient-to-br from-blue-pale to-teal-pale p-7 sm:p-8">
              <h2 className="text-2xl font-semibold text-navy">Key takeaways</h2>
              <ul className="mt-5 space-y-4">
                {TAKEAWAYS.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-slate-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue to-teal-400" aria-hidden="true" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-gradient-to-b from-blue-pale via-white to-teal-pale px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Could your existing systems work better together?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Property Ops Studio helps qualified property-management teams
              evaluate the workflow, integration options, and practical business
              case before committing to a solution.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/schedule"
                className="btn-brand px-7 py-3.5"
              >
                Schedule a conversation
              </Link>
              <Link
                href="/resources"
                className="btn-brand-outline px-7 py-3.5"
              >
                Back to resources
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
