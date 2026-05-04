import { CALENDLY_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32 lg:py-40">
      {/* Gradient mesh — clipped hard at section boundary */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Cool base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-white to-slate-50" />

        {/* Blue — top-left anchor */}
        <div className="absolute -left-[10%] -top-[20%] h-[700px] w-[700px] rounded-full bg-blue/15 blur-[120px] sm:h-[850px] sm:w-[850px]" />

        {/* Teal — top-right */}
        <div className="absolute -right-[5%] -top-[10%] h-[600px] w-[600px] rounded-full bg-teal-400/20 blur-[120px] sm:h-[750px] sm:w-[750px]" />

        {/* Blue-light — center, ties the two together */}
        <div className="absolute left-[25%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-light/10 blur-[100px] sm:h-[600px] sm:w-[600px]" />

        {/* Teal accent — bottom-right, hits the section edge */}
        <div className="absolute -bottom-[25%] -right-[5%] h-[550px] w-[550px] rounded-full bg-teal-300/18 blur-[100px] sm:h-[700px] sm:w-[700px]" />

        {/* Blue — bottom-left, hits the section edge */}
        <div className="absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue/12 blur-[100px] sm:h-[650px] sm:w-[650px]" />

        {/* Warm hint — subtle gold center-bottom for just a touch of warmth */}
        <div className="absolute bottom-[5%] left-[40%] h-[300px] w-[300px] rounded-full bg-amber-200/12 blur-[100px] sm:h-[400px] sm:w-[400px]" />

        {/* Dark grounding — bottom edge */}
        <div className="absolute -bottom-[10%] left-[20%] h-[400px] w-[700px] rounded-full bg-navy/5 blur-[80px]" />

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--color-navy) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-block rounded-full border border-blue/10 bg-white/70 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-blue shadow-sm backdrop-blur-sm">
          AppFolio Operations Consulting
        </p>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
          Your AppFolio setup is costing you
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue via-blue-light to-teal-400 bg-clip-text text-transparent">
            {" "}thousands every month.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          We audit your property management operations, find the money leaks and
          time sinks hiding in your workflows, and fix them &mdash; so you can
          manage more doors without adding more staff.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-blue to-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:shadow-xl hover:shadow-blue/30 hover:brightness-110"
          >
            Book Your Free Audit
          </a>
          <a
            href="#how-it-works"
            className="text-base font-medium text-slate-600 transition-colors hover:text-navy"
          >
            See how it works &darr;
          </a>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          Trusted by property managers running 850+ doors on AppFolio
        </p>
      </div>
    </section>
  );
}
