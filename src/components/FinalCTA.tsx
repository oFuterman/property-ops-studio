import { CALENDLY_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy px-6 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Find out what your operations are really costing you.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Book a free 30-minute audit call. We&rsquo;ll walk through your
          AppFolio setup together and show you exactly where you&rsquo;re
          leaving money on the table.
        </p>
        <div className="mt-10">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white px-8 py-3.5 text-base font-semibold text-navy shadow-md transition-all hover:bg-slate-100 hover:shadow-lg"
          >
            Book Your Free Audit
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          No contracts. No pressure. Just a clear look at your operations.
        </p>
      </div>
    </section>
  );
}
