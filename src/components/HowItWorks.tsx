import { CALENDLY_URL } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    title: "Start with the operation",
    description:
      "We talk through the process, the people involved, and where AppFolio connects with the rest of your operating environment.",
  },
  {
    number: "02",
    title: "Map the practical improvement",
    description:
      "We identify the best-fit change—configuration, workflow design, reporting, automation, or a custom integration.",
  },
  {
    number: "03",
    title: "Put the solution to work",
    description:
      "We implement, test, and document the agreed improvement so your team can use it confidently in day-to-day operations.",
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
            A focused path from an operational need to a working improvement.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-slate-100 bg-slate-50/50 p-8">
              <span
                className="bg-gradient-to-br from-blue/30 to-teal-400/25 bg-clip-text text-6xl font-extrabold text-transparent"
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
            className="inline-flex rounded-sm bg-ink px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-navy-light"
          >
            Schedule a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
