const PAINS = [
  {
    gradientId: "grad-fees",
    stops: ["#2563EB", "#3B82F6"],
    iconPath:
      "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Fees you're not collecting",
    description:
      "Late fees, pet deposits, utility reimbursements, and move-out charges that slip through the cracks every single month.",
  },
  {
    gradientId: "grad-data",
    stops: ["#3B82F6", "#14B8A6"],
    iconPath:
      "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Data entry in 3 places",
    description:
      "Your team re-keys the same tenant info into AppFolio, spreadsheets, and bank portals. Every duplicate entry is a chance for errors and wasted hours.",
  },
  {
    gradientId: "grad-close",
    stops: ["#3B82F6", "#14B8A6"],
    iconPath:
      "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    title: "5-day monthly close",
    description:
      "Reconciliation shouldn't take a week. Unmatched transactions, missing receipts, and manual bank imports drag your close out every month.",
  },
  {
    gradientId: "grad-maint",
    stops: ["#14B8A6", "#2DD4BF"],
    iconPath:
      "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
    title: "Maintenance chaos",
    description:
      "Requests come in by text, email, and portal. Nobody knows the status. Vendors get called twice. Tenants follow up because they never heard back.",
  },
] as const;

export default function PainPoints() {
  return (
    <section aria-labelledby="pain-points-heading" className="bg-slate-50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="pain-points-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Sound familiar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            These problems cost property managers thousands a month.. and
            most don&rsquo;t even realize it until someone looks.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {PAINS.map((pain) => (
            <div
              key={pain.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue/20 hover:shadow-md hover:shadow-blue/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-pale to-teal-pale transition-transform group-hover:scale-105">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id={pain.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={pain.stops[0]} />
                      <stop offset="100%" stopColor={pain.stops[1]} />
                    </linearGradient>
                  </defs>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke={`url(#${pain.gradientId})`}
                    d={pain.iconPath}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy">{pain.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
