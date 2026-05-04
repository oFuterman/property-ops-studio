import { CALENDLY_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-32">
      {/* Ambient gradient blobs */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-indigo-400/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-block rounded-full bg-blue-pale px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-blue">
          AppFolio Operations Consulting
        </p>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
          Your AppFolio setup is costing you
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue via-blue-light to-indigo-500 bg-clip-text text-transparent">
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
            className="rounded-full bg-gradient-to-r from-blue to-blue-light px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:shadow-xl hover:shadow-blue/30 hover:brightness-110"
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
