const STATS = [
  { value: "850+", label: "Tenants onboarded" },
  { value: "5", label: "Properties integrated" },
  { value: "0", label: "Manual credential handoffs" },
] as const;

export default function Results() {
  return (
    <section id="results" aria-labelledby="results-heading" className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="results-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Real results, not theory
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Here&rsquo;s what happened when a property management company
            running 850+ doors let us into their operations.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="bg-gradient-to-r from-blue to-teal-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Case narrative */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-blue-pale/20 to-teal-pale/30 p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-navy">
            From manual handoffs to fully automated tenant operations
          </h3>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
            <p>
              A property management company running five properties and 850+
              tenants on AppFolio was handling tenant onboarding and internet
              provisioning entirely by hand. Property managers were manually
              creating credentials, sending welcome emails, and coordinating
              offboarding across every single move-in and move-out.
            </p>
            <p>
              We designed and built an integration between their AppFolio
              instance and their internet gateway system that automated the
              entire lifecycle: provisioning, credential delivery, and
              deactivation. We also built a tenant portal and automated
              welcome/goodbye email workflows.
            </p>
            <p>
              The result: <strong>zero manual credential handoffs</strong>,
              property managers removed from the provisioning process entirely,
              and a documented system that non-technical staff can operate and
              support independently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
