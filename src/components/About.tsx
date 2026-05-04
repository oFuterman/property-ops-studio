import Image from "next/image";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-slate-50 px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
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
            this work the way most good ideas start &mdash; by solving a real
            problem for a real company.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            I spent the last year embedded in a property management operation
            running 850+ doors across five properties on AppFolio. I saw
            firsthand how much time and money gets lost in manual workflows,
            disconnected systems, and configurations that were never set up
            right in the first place.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            So I built the integrations, automated the workflows, and tightened
            the operations. Now I do the same thing for other property
            management companies &mdash; find what&rsquo;s leaking, fix it, and
            set up systems that actually work without babysitting.
          </p>
          <p className="mt-6 font-medium text-navy">
            If your AppFolio setup feels like it&rsquo;s working against you
            instead of for you, let&rsquo;s talk.
          </p>
        </div>
      </div>
    </section>
  );
}
