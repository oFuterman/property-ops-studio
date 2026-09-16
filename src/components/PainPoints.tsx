const PAINS = [
  {
    gradientId: "grad-fees",
    stops: ["#042257", "#105AB6"],
    iconPath:
      "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Workflows that connect your teams",
    description:
      "We create clearer handoffs among site staff, supervisors, and executive teams so the right information reaches the right people at the right time.",
  },
  {
    gradientId: "grad-data",
    stops: ["#105AB6", "#6695CB"],
    iconPath:
      "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Repeated data entry",
    description:
      "Re-entering the same information consumes staff hours, increases the chance of mistakes, and can leave important policies or required steps inconsistently applied—or missed entirely.",
  },
  {
    gradientId: "grad-close",
    stops: ["#105AB6", "#042257"],
    iconPath:
      "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    title: "Reporting that needs context",
    description:
      "Standard reports answer many questions. We help bring the right data together when your operation needs a more specific view.",
  },
  {
    gradientId: "grad-maint",
    stops: ["#1E2325", "#105AB6"],
    iconPath:
      "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
    title: "Processes that have outgrown setup",
    description:
      "As a portfolio and team evolve, yesterday's configuration may no longer match how the work is actually getting done today.",
  },
] as const;

export default function PainPoints() {
  return (
    <section aria-labelledby="pain-points-heading" className="bg-slate-50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="pain-points-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            When operations outgrow the default workflow
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            AppFolio can remain your system of record while the processes around
            it become more connected, visible, and easier for your team to run.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {PAINS.map((pain) => (
            <div
              key={pain.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue/20 hover:shadow-md hover:shadow-blue/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-pale to-white transition-transform group-hover:scale-105">
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
