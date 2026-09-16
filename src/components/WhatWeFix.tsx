const SERVICES = [
  {
    title: "Bank reconciliation",
    description: "Streamline your monthly close from days to hours with clean transaction matching and automated bank imports.",
  },
  {
    title: "Tenant onboarding",
    description: "Create customized move-in emails for each property and resident, including everything they need—from digital packets and access instructions to private Wi-Fi credentials and more.",
  },
  {
    title: "Maintenance triage",
    description: "Build on Realm-X with company-specific oversight. Surface important work orders, alert the right team, and keep critical issues moving through completion.",
  },
  {
    title: "Custom owner reporting",
    description: "Turn AppFolio financial data into tailored owner reports, including clearer distribution analysis that standard reports may not provide.",
  },
  {
    title: "Cross-System Reconciliation",
    description: "Compare AppFolio billing with third-party service activity to uncover missing or mismatched charges before revenue is missed.",
  },
  {
    title: "AppFolio optimization",
    description: "Configure workflows, automations, and integrations so your team spends less time in the software and more time managing doors.",
  },
  {
    title: "Incident escalation",
    description: "Ensure high-priority resident concerns reach management and follow the required reporting process before they become larger legal or operational risks.",
  },
  {
    title: "Rent increase calendars",
    description: "Build notice schedules and renewal workflows so rent increases happen on time, every time.",
  },
] as const;

export default function WhatWeFix() {
  return (
    <section id="what-we-fix" aria-labelledby="what-we-fix-heading" className="bg-slate-50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="what-we-fix-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            What we fix
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Every engagement is scoped to your operation. Here&rsquo;s where we
            typically find the biggest wins.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue/20 hover:shadow-md hover:shadow-blue/5"
            >
              <h3 className="flex items-center gap-2 font-semibold text-navy">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue to-teal-400" aria-hidden="true" />
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
