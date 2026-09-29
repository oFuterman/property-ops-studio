const EXPERTISE = [
  "AppFolio workflow review",
  "Custom integrations",
  "Operational reporting",
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-navy to-ink px-6 py-16 text-white sm:py-20 lg:py-24">
      {/* Gradient mesh — clipped hard at the section boundary */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Blue anchor, top-left */}
        <div className="absolute -left-[10%] -top-[30%] h-[600px] w-[600px] rounded-full bg-blue/30 blur-[120px]" />
        {/* Teal counterweight, top-right */}
        <div className="absolute -right-[8%] -top-[20%] h-[520px] w-[520px] rounded-full bg-teal-500/25 blur-[120px]" />
        {/* Teal accent hitting the bottom edge */}
        <div className="absolute -bottom-[35%] right-[10%] h-[480px] w-[480px] rounded-full bg-teal-400/15 blur-[110px]" />
        {/* A touch of warmth so the palette is not all cool */}
        <div className="absolute bottom-[10%] left-[30%] h-[320px] w-[320px] rounded-full bg-amber-200/10 blur-[110px]" />

        {/* Concentric rings, echoing the ramp */}
        <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full border border-blue/25" />
        <div className="absolute -right-16 -top-24 h-[26rem] w-[26rem] rounded-full border border-teal-400/25" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            <span
              className="h-px w-10 bg-gradient-to-r from-blue-light to-teal-300"
              aria-hidden="true"
            />
            AppFolio operations consulting
          </p>

          <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            Make AppFolio work better for{" "}
            <span className="bg-gradient-to-br from-teal-300 to-blue-light bg-clip-text text-transparent">
              the way your team operates.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-300">
            Property Ops Studio helps property management companies improve the
            workflows, integrations, and reporting around AppFolio—so teams can
            run with greater clarity and less manual coordination.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#what-we-fix" className="btn-brand px-7 py-3.5 text-base">
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
            <span className="text-sm font-semibold text-teal-300">0{index + 1}</span>
            <span className="font-medium text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
