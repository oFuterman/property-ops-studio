import Image from "next/image";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-slate-50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-64 overflow-hidden rounded-2xl shadow-lg sm:h-96 sm:w-80">
              <Image
                src="/images/omerheadshot.jpg"
                alt="Omer Futerman, Founder of Property Ops Studio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </div>

          <div>
            <h2 id="about-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Meet Omer
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              I&rsquo;m Omer Futerman, founder of Property Ops Studio. I got into
              this work the way most good ideas start: by solving a real
              problem for a real company.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              I spent the last year embedded in a property management operation
              running 850+ doors across five properties on AppFolio. I saw
              firsthand where property teams benefit from clearer workflows,
              connected systems, and configurations that reflect how the
              operation actually runs.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              So I built the integrations, automated the workflows, and tightened
              the operations. Now I do the same thing for other property
              management companies, helping AppFolio work smoothly alongside the
              systems, reporting needs, and processes unique to each operation.
            </p>
            <p className="mt-6 font-medium text-navy">
              If your team has an AppFolio workflow that could be clearer,
              faster, or better connected, let&rsquo;s talk.
            </p>

            <div className="mt-8 border-l-2 border-gold pl-5">
              <p className="font-semibold text-navy">Contact Omer</p>
              <a
                href="mailto:omerfu@gmail.com"
                className="mt-2 inline-block text-blue hover:underline"
              >
                omerfu@gmail.com
              </a>
              <br />
              <a
                href="tel:+19494009703"
                className="mt-1 inline-block text-blue hover:underline"
              >
                (949) 400-9703
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/omer-futerman-846468161"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-blue hover:underline"
              >
                LinkedIn profile
              </a>
              <address className="mt-3 text-sm not-italic leading-relaxed text-slate-500">
                19128 112th Ave. NE, Unit 502
                <br />
                Bothell, WA 98011
                <br />
                United States of America
              </address>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-200 pt-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Operations and professional perspective
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-navy">
              Experience behind the work
            </h3>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <article className="border-l-2 border-gold pl-6">
              <h4 className="text-xl font-bold text-navy">Ron Nasch</h4>
              <p className="mt-1 font-semibold text-gold">
                Senior Property Operations Advisor
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Ron brings 46 years of hands-on property management experience
                across several management systems, including AppFolio. He helps
                translate operating needs into practical solution requirements.
              </p>
            </article>

            <article className="border-l-2 border-slate-300 pl-6">
              <h4 className="text-xl font-bold text-navy">Tamar Shinar, Ph.D.</h4>
              <p className="mt-1 font-semibold text-slate-500">
                Personal Mentor and Professional Resource
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Associate Professor of Computer Science at the University of
                California, Riverside, with expertise in scientific computing,
                modeling, and simulation.
              </p>
            </article>

            <article className="border-l-2 border-slate-300 pl-6">
              <h4 className="text-xl font-bold text-navy">Ganit Paul</h4>
              <p className="mt-1 font-semibold text-slate-500">
                Personal Mentor and Professional Resource
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Provides perspective informed by cloud applications and delivery
                management. AWS Certified Solutions Architect – Associate.
              </p>
            </article>
          </div>

          <p className="mt-10 text-sm leading-relaxed text-slate-500">
            Professional backgrounds are provided for context. No institutional
            endorsement or participation in client engagements is implied.
          </p>
        </div>
      </div>
    </section>
  );
}
