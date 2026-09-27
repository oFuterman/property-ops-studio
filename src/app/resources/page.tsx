import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resources | Property Ops Studio",
  description:
    "White papers and practical guidance for property management operations, AppFolio workflows, reporting, automation, and systems integration.",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section
          className="bg-ink px-6 py-16 text-white sm:py-20"
          aria-labelledby="resources-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-light">
                Resources
              </p>
              <h1
                id="resources-heading"
                className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Practical ideas for better property operations
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                White papers and practical guidance for property management
                teams working with AppFolio, connected applications, reporting,
                and operational automation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-pale px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">
                  White papers
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  Research you can put to work
                </h2>
                <p className="mt-5 leading-relaxed text-slate-600">
                  Each resource will include a concise overview, key takeaways,
                  and a downloadable copy that can be shared with your team.
                </p>
              </div>

              <div className="space-y-7">
                <article className="overflow-hidden rounded-2xl border border-blue/15 bg-white shadow-sm">
                  <div className="grid sm:grid-cols-[190px_1fr]">
                    <div className="flex items-center justify-center bg-slate-100 p-5">
                      <Image
                        src="/images/resources/appfolio-access-control-cover.png"
                        alt="Cover of Extending AppFolio Max Into Building Access Control"
                        width={1275}
                        height={1650}
                        className="h-auto max-h-64 w-auto rounded-sm border border-slate-200 bg-white shadow-md"
                      />
                    </div>
                    <div className="p-7 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                        White paper &amp; case study · September 2026
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-navy">
                        Extending AppFolio Max Into Building Access Control
                      </h3>
                      <p className="mt-4 leading-relaxed text-slate-600">
                        A case study for midsized property operators connecting
                        AppFolio Max with dormakaba Community software and Comelit
                        while retaining existing building-access infrastructure.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          href="/resources/appfolio-access-control"
                          className="inline-flex rounded-sm bg-blue px-5 py-2.5 font-semibold text-white shadow-md shadow-blue/20 transition-colors hover:bg-navy-light"
                        >
                          Read the overview
                        </Link>
                        <a
                          href="/resources/extending-appfolio-max-building-access-control.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-sm border border-blue px-5 py-2.5 font-semibold text-blue transition-colors hover:bg-blue-pale"
                        >
                          View PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="overflow-hidden rounded-2xl border border-blue/15 bg-white shadow-sm">
                  <div className="grid sm:grid-cols-[190px_1fr]">
                    <div className="flex items-center justify-center bg-slate-100 p-5">
                      <Image
                        src="/images/resources/appfolio-owner-reporting-cover.png"
                        alt="Cover of Extending AppFolio Max Into Custom Owner Reporting"
                        width={1275}
                        height={1650}
                        className="h-auto max-h-64 w-auto rounded-sm border border-slate-200 bg-white shadow-md"
                      />
                    </div>
                    <div className="p-7 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                        White paper &amp; case study · September 2026
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-navy">
                        Extending AppFolio Max Into Custom Owner Reporting
                      </h3>
                      <p className="mt-4 leading-relaxed text-slate-600">
                        A six-property anonymized case study combining earnings,
                        distributions, approved adjustments, and capital
                        spending in one concise, repeatable owner report.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          href="/resources/appfolio-owner-reporting"
                          className="inline-flex rounded-sm bg-blue px-5 py-2.5 font-semibold text-white shadow-md shadow-blue/20 transition-colors hover:bg-navy-light"
                        >
                          Read the overview
                        </Link>
                        <a
                          href="/resources/extending-appfolio-max-custom-owner-reporting.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-sm border border-blue px-5 py-2.5 font-semibold text-blue transition-colors hover:bg-blue-pale"
                        >
                          View PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
