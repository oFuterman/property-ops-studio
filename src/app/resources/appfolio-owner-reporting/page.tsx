import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PDF_URL =
  "/resources/extending-appfolio-max-custom-owner-reporting.pdf";

export const metadata: Metadata = {
  title: "AppFolio Max and Custom Owner Reporting | Property Ops Studio",
  description:
    "A Property Ops Studio case study combining AppFolio earnings, recorded distributions, approved adjustments, and capital spending in one repeatable owner report.",
};

const TAKEAWAYS = [
  "Bring earnings, actual recorded distributions, and capital spending together without replacing AppFolio as the accounting source.",
  "Preserve property-level results and approved exceptions so a favorable portfolio total does not hide important differences.",
  "Reconcile capital expenditures to the complete portfolio total while making the largest vendors and spending categories easier to understand.",
  "Use a scheduled, validated Microsoft 365 workflow to produce and publish the approved owner report consistently.",
] as const;

export default function OwnerReportingWhitePaperPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="bg-ink px-6 py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-light">
                White paper &amp; case study
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">
                Extending AppFolio Max Into Custom Owner Reporting
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                A case study in portfolio earnings, recorded distributions, and
                capital spending.
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
                src="/images/resources/appfolio-owner-reporting-cover.png"
                alt="Cover of Extending AppFolio Max Into Custom Owner Reporting"
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
                Turning accounting records into an owner-ready answer
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
                <p>
                  AppFolio already provides financial statements, owner packets,
                  and transaction detail. The harder question is often more
                  specific: what did the portfolio earn, what was actually
                  distributed, and where did the capital spending go?
                </p>
                <p>
                  Property Ops Studio answered that question through a
                  six-property anonymized case study. AppFolio remained the
                  accounting source while a controlled Microsoft 365 workflow
                  retrieved and validated the data, applied the approved
                  reporting rules, and produced a concise owner report.
                </p>
                <p>
                  The completed system preserves negative property-level results,
                  distinguishes recorded distributions from ownership assumptions,
                  documents an approved property-specific adjustment, and
                  reconciles capital spending to the complete portfolio total.
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
              What owner question takes too many reports to answer?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Property Ops Studio helps property-management teams turn approved
              accounting and operating rules into dependable custom reporting
              that can be reviewed, repeated, and shared.
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
