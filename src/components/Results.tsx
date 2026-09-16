export default function Results() {
  return (
    <section id="results" aria-labelledby="results-heading" className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="results-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Real results, not theory
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Here&rsquo;s what happened when a property management company
            asked us to improve a manual operating process.
          </p>
        </div>

        {/* Managed Wi-Fi integration overview */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-6 rounded-2xl bg-ink px-8 py-8 text-center text-white shadow-xl shadow-ink/15 sm:flex-row sm:text-left">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue text-white shadow-lg shadow-black/20">
            <svg
              className="h-11 w-11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path strokeLinecap="round" d="M3.5 9.5a13 13 0 0 1 17 0" />
              <path strokeLinecap="round" d="M6.5 12.5a8.5 8.5 0 0 1 11 0" />
              <path strokeLinecap="round" d="M9.5 15.5a4 4 0 0 1 5 0" />
              <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">
              AppFolio-connected managed Wi-Fi
            </h3>
            <p className="mt-3 leading-relaxed text-slate-300">
              We integrated AppFolio with the company&rsquo;s existing proprietary
              managed Wi-Fi system, built on RG Nets hardware and a fiber
              network connecting access points throughout an 850-unit
              portfolio.
            </p>
          </div>
        </div>

        {/* Case narrative */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-blue/15 bg-gradient-to-br from-slate-50 via-blue-pale/70 to-white p-8">
          <h3 className="text-xl font-semibold text-navy">
            Turning managed Wi-Fi into a stronger profit center
          </h3>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
            <p>
              Managed Wi-Fi is established across hospitality, transportation,
              student housing, public venues, and healthcare. Our client had
              spent eight years building a proprietary system across 850 units
              at five properties and saw an opportunity to operate Wi-Fi as a
              value-added profit center instead of relying on a third-party ISP.
            </p>
            <p>
              Like owning a laundry room instead of leasing it to a third party,
              operating the service in-house kept more resident-generated
              revenue at the property. At $55 per unit, removing the third-party
              ISP improved the service&rsquo;s bottom-line contribution by more
              than 50%. The remaining problem was that the Wi-Fi system did not
              communicate with AppFolio, leaving staff to manage credentials and
              deactivation manually.
            </p>
            <p>
              Working closely with RG Nets, we connected the systems, automated
              secure provisioning at move-in and deactivation at move-out, and
              created custom resident landing portals. The result was
              <strong> zero manual credential handoffs</strong>, less routine
              work for property managers, and a documented solution that
              non-technical staff can support.
            </p>
            <blockquote className="mt-6 border-l-4 border-blue bg-white/80 px-6 py-4 shadow-sm">
              <p className="text-2xl font-semibold italic text-navy">
                &ldquo;Amazing.&rdquo;
              </p>
              <footer className="mt-2 text-sm font-medium text-slate-500">
                Leasing agent
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
