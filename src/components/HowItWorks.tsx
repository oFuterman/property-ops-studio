import { CALENDLY_URL } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    title: "Book a free call",
    description:
      "A 30-minute conversation where we walk through your current setup — AppFolio configuration, bank workflows, maintenance process, and reporting. No pitch, just diagnosis.",
  },
  {
    number: "02",
    title: "We audit your operations",
    description:
      "We map every system, identify where money and time are leaking, and build a prioritized list of what to fix first — ranked by dollar impact.",
  },
  {
    number: "03",
    title: "You get fixes, not a PDF",
    description:
      "We don't hand you a report and walk away. The top issues get fixed during the audit engagement. You walk away with real changes already live in your systems.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Three steps from &ldquo;something feels off&rdquo; to
            &ldquo;we&rsquo;re running tighter than ever.&rdquo;
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-slate-100 bg-slate-50/50 p-8">
              <span
                className="bg-gradient-to-br from-blue/25 to-indigo-400/15 bg-clip-text text-6xl font-extrabold text-transparent"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gradient-to-r from-blue to-blue-light px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:shadow-xl hover:shadow-blue/30 hover:brightness-110"
          >
            Book Your Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
