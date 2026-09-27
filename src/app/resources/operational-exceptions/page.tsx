import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

const PDF_URL = "/resources/beyond-the-work-order-operational-exceptions.pdf";

export const metadata: Metadata = {
  title: "Automating Operational Exceptions in Property Management",
  description:
    "A Property Ops Studio white paper about recognizing policy-sensitive AppFolio work orders, coordinating specialized responders, and improving management visibility.",
  alternates: { canonical: "/resources/operational-exceptions" },
  openGraph: {
    title:
      "Beyond the Work Order: Automating Operational Exceptions | Property Ops Studio",
    description:
      "A practical model for recognizing, escalating, and documenting operational exceptions connected to AppFolio work orders.",
    url: "/resources/operational-exceptions",
    type: "article",
    authors: [SITE.name],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Beyond the Work Order: Automating Operational Exceptions | Property Ops Studio",
    description:
      "A practical model for recognizing, escalating, and documenting operational exceptions connected to AppFolio work orders.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "Beyond the Work Order: Automating Operational Exceptions in Property Management",
  description: metadata.description,
  url: `${SITE.url}/resources/operational-exceptions`,
  image: `${SITE.url}/images/resources/operational-exceptions-cover.png`,
  author: { "@type": "Organization", name: SITE.name, url: SITE.url },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  about: [
    "AppFolio",
    "Operational exceptions",
    "Property management risk",
    "Power Apps",
    "Power Automate",
  ],
  associatedMedia: {
    "@type": "MediaObject",
    contentUrl: `${SITE.url}${PDF_URL}`,
    encodingFormat: "application/pdf",
  },
};

const TAKEAWAYS = [
  "Recognize policy-sensitive work orders through approved categories, indicators, keywords, and phrases.",
  "Bring supervisors, regional managers, risk personnel, security teams, restoration contractors, vendors, and other specialized responders into the process sooner.",
  "Keep ownership, activity, documentation, deadlines, and unresolved conditions visible beyond the site level.",
  "Reduce missed handoffs, slow resident communication, avoidable move-outs, and the risk created by incomplete follow-up.",
] as const;

export default function OperationalExceptionsWhitePaperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <section className="bg-ink px-6 py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-light">
                White paper &amp; case study
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">
                Beyond the Work Order: Automating Operational Exceptions in
                Property Management
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                Connecting AppFolio, Power Apps, SharePoint, Power Automate, and
                specialized response workflows.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-sm bg-blue px-6 py-3 font-semibold text-white shadow-lg shadow-blue/20 transition-colors hover:bg-blue-light"
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
                src="/images/resources/operational-exceptions-cover.png"
                alt="Cover of Beyond the Work Order: Automating Operational Exceptions in Property Management"
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
                Catch critical issues before they become expensive problems
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
                <p>
                  AppFolio work orders can contain mold or moisture language,
                  safety concerns, major water or sewage damage, repeated
                  unresolved conditions, and other issues that require more
                  than an ordinary maintenance response.
                </p>
                <p>
                  This paper explains how an operational-exception workflow can
                  recognize approved warning language, notify the appropriate
                  people, preserve accountability, and keep the issue visible
                  until the required follow-up is complete.
                </p>
                <p>
                  The approach uses AppFolio as the property-management record
                  and Microsoft 365 tools to support the specialized response.
                  The result is faster coordination, clearer resident
                  communication, fewer missed handoffs, and a stronger record
                  if a dispute or claim occurs.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-blue/15 bg-blue-pale p-7 sm:p-8">
              <h2 className="text-2xl font-semibold text-navy">Key takeaways</h2>
              <ul className="mt-5 space-y-4">
                {TAKEAWAYS.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 text-slate-700">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-blue-pale px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Which critical issues need visibility beyond the site team?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Property Ops Studio helps property-management companies turn
              approved response policies into practical workflows that connect
              the right people, documentation, and follow-through.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/schedule"
                className="inline-flex rounded-sm bg-blue px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue/20 transition-colors hover:bg-navy-light"
              >
                Schedule a conversation
              </Link>
              <Link
                href="/resources"
                className="inline-flex rounded-sm border border-blue px-7 py-3.5 font-semibold text-blue transition-colors hover:bg-white"
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
