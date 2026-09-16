const CAPABILITIES = [
  {
    title: "Built around your process",
    description:
      "We study how your team actually works, then design a system that matches, not the other way around.",
  },
  {
    title: "Automate manual work",
    description:
      "If your team handles a recurring process by hand, we can automate it and reduce the time spent on routine work.",
  },
  {
    title: "Connect your applications",
    description:
      "API integrations allow AppFolio and many of the separate applications your team uses to exchange information, helping systems outside AppFolio work together as part of a connected process.",
  },
  {
    title: "Built for you.",
    description:
      "We are a boutique integration shop working directly for you. We do not charge monthly platform fees or require long-term contracts, and the solution we build is yours to own.",
  },
] as const;

export default function CustomSystems() {
  return (
    <section id="custom-systems" aria-labelledby="custom-systems-heading" className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — pitch */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue">
              Beyond the audit
            </p>
            <h2 id="custom-systems-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Custom systems built for the way you operate
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We believe AppFolio is an excellent property management platform
              and a strong system of record. Other well-known property
              management systems may offer more built-in bells and whistles,
              often at a higher ongoing cost. Many AppFolio customers simply
              need a few additional capabilities tailored to the way they
              operate.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              As custom API integrators, we extend the systems you already use
              instead of asking you to replace them. Our goal is to deliver the
              capabilities you wish were included&mdash;often through a
              focused, one-time build&mdash;so your team can accomplish more
              with less and avoid the cost of moving to an entirely new
              platform.
            </p>
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-blue-light/60 bg-gradient-to-br from-blue-light via-blue to-navy px-8 py-7 text-white shadow-[0_16px_35px_-14px_rgba(4,34,87,0.7),inset_0_1px_0_rgba(255,255,255,0.35)]">
              <span className="absolute inset-y-0 left-0 w-2 bg-ink" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">
                Imagine the possibility
              </p>
              <p className="mt-2 text-2xl font-bold leading-tight text-white">
                What do you wish AppFolio could do?
              </p>
              <p className="mt-3 max-w-xl leading-relaxed text-white/80">
                A custom integration can turn a recurring operational
                frustration into a working solution your team can own.
              </p>
            </div>
          </div>

          {/* Right column — capability cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all hover:border-blue/20 hover:shadow-md hover:shadow-blue/5"
              >
                <h3 className="flex items-center gap-2 font-semibold text-navy">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
