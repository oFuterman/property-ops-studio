import { CALENDLY_URL } from "@/lib/constants";

const CAPABILITIES = [
  {
    title: "Built around your process",
    description:
      "We study how your team actually works, then design a system that matches, not the other way around.",
  },
  {
    title: "Automate the repetitive stuff",
    description:
      "Follow-ups, status updates, task assignments, owner communications: if your team does it by hand, we make it automatic.",
  },
  {
    title: "Connects to what you already use",
    description:
      "AppFolio, email, calendars, vendor portals. Your system talks to everything so your team stops copying data between tabs.",
  },
  {
    title: "Yours to own and run",
    description:
      "No monthly platform fees or vendor lock-in. We build it, hand it over, and make sure your team knows how to use it.",
  },
] as const;

export default function CustomSystems() {
  return (
    <section id="custom-systems" aria-labelledby="custom-systems-heading" className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — pitch */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-500">
              Beyond the audit
            </p>
            <h2 id="custom-systems-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Custom systems built for the way you operate
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Some problems can&rsquo;t be solved with a better AppFolio
              configuration. When your operation needs a system that
              doesn&rsquo;t exist yet, we build it from scratch &mdash;
              tailored to your workflows, your team, and the way you
              actually manage properties.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Every manual step your team repeats &mdash; chasing updates,
              copying data, sending the same emails &mdash; becomes something
              the system handles on its own. You get a tool that works
              exactly the way you need it to, because it was designed
              around your operation from day one.
            </p>
            <div className="mt-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-gradient-to-r from-blue to-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue/25 transition-all hover:shadow-xl hover:shadow-blue/30 hover:brightness-110"
              >
                Tell Us What You Need
              </a>
            </div>
          </div>

          {/* Right column — capability cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all hover:border-blue/20 hover:shadow-md hover:shadow-blue/5"
              >
                <h3 className="flex items-center gap-2 font-semibold text-navy">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue to-teal-400" aria-hidden="true" />
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
