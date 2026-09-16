import { CALENDLY_URL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy px-6 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Bring your next operational improvement into focus.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Tell us what your team is trying to accomplish. We&rsquo;ll talk through
          the workflow, the systems involved, and the most practical next step.
        </p>
        <div className="mt-10">
          <a
            href={CALENDLY_URL}
            className="inline-flex rounded-sm bg-gold px-8 py-3.5 text-base font-semibold text-ink shadow-md transition-colors hover:bg-gold-light"
          >
            Schedule a conversation
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          A straightforward conversation about your operation—no pressure.
        </p>
      </div>
    </section>
  );
}
