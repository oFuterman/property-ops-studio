const EXPERTISE = [
  "AppFolio workflow review",
  "Custom integrations",
  "Operational reporting",
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full border border-blue/20" />
        <div className="absolute -right-16 -top-24 h-[26rem] w-[26rem] rounded-full border border-blue-light/20" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-light/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-light">
            <span className="h-px w-10 bg-blue-light" aria-hidden="true" />
            AppFolio operations consulting
          </p>

          <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Make AppFolio work better for the way your team operates.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Property Ops Studio helps property management companies improve the
            workflows, integrations, and reporting around AppFolio—so teams can
            run with greater clarity and less manual coordination.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#what-we-fix"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-blue px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-blue-light"
            >
              Explore how we help
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Built for property management teams that rely on AppFolio every day.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-6xl border-y border-white/10 sm:grid-cols-3">
        {EXPERTISE.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-4 border-white/10 px-5 py-5 sm:border-l sm:first:border-l-0"
          >
            <span className="text-sm font-semibold text-blue-light">0{index + 1}</span>
            <span className="font-medium text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
