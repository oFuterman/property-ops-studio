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
      "We identify the best-fit change—configuration, workflow design, reporting, or automation—and create a custom integration.",
  },
  {
    number: "03",
    title: "Implement and support",
    description:
      "We implement, test, and document your solution. We stand behind our work and provide ongoing support so your team can use it with confidence.",
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
                className="bg-gradient-to-br from-blue via-blue-light to-teal-400 bg-clip-text text-6xl font-extrabold text-transparent"
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

        <div className="relative mx-auto mt-14 max-w-3xl pt-10 text-center before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-teal-400/60 before:to-transparent before:content-['']">
          <h3 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Bring your next operational improvement into focus.
          </h3>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-600">
            Tell us what your team is trying to accomplish. We&rsquo;ll talk
            through the workflow, the systems involved, and the most practical
            next step.
          </p>
        </div>
      </div>
    </section>
  );
}
