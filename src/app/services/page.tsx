import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Property Ops Studio",
  description:
    "Property Ops Studio services for systems integration, automation, reporting, Microsoft 365 workflows, portals, cloud continuity, and AppFolio operations.",
};

const ENGINEERING_STACK = [
  {
    label: "Languages",
    items: "Python, Go, Ruby, JavaScript, TypeScript, PHP, and SQL",
  },
  {
    label: "Data platforms",
    items: "PostgreSQL, MySQL, DynamoDB, Elasticsearch, and OpenSearch",
  },
  {
    label: "Web applications & dashboards",
    items: "HTML, CSS, custom dashboards, customer portals, and WordPress",
  },
  {
    label: "Cloud and infrastructure",
    items: "AWS, Microsoft Azure, Kubernetes, Docker, Terraform, and CI/CD",
  },
  {
    label: "Integration tools",
    items: "REST APIs, Node.js, Kafka, Git, and Application Insights",
  },
  {
    label: "Systems & integration",
    items: "APIs, middleware, Microsoft 365, databases, and proprietary systems",
  },
] as const;

const CAPABILITIES = [
  "Connections between proprietary, cloud, and third-party applications through APIs",
  "Managed Wi-Fi integration using RG Nets, including move-in provisioning and move-out deactivation",
  "Secure password credentialing and custom resident landing portals",
  "Microsoft 365 workflow connections with Teams and Outlook",
  "Scheduled cloud backups using Microsoft Azure",
  "Event notes and operating records that help teams track system activity",
] as const;

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="bg-ink px-6 py-16 text-white sm:py-20" aria-labelledby="technical-services-heading">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-light">
                Technical services
              </p>
              <h1 id="technical-services-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Experienced engineering for complex operational problems
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Omer brings more than six years of backend and data engineering
                experience to projects that need more than a simple
                configuration change. These services can be engaged
                independently or combined with an operational improvement
                project.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-blue-light/40 bg-navy/70 p-7 shadow-lg shadow-black/10 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-light">
                Omer&rsquo;s engineering stack
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {ENGINEERING_STACK.map((group) => (
                  <div key={group.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="font-semibold text-white">{group.label}</p>
                    <p className="mt-2 leading-relaxed text-slate-300">{group.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-pale px-6 py-16 sm:py-20" aria-labelledby="capabilities-heading">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue">
                Integration capabilities
              </p>
              <h2 id="capabilities-heading" className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Technology that works with the systems you already have
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                A business process does not have to stop when work moves into
                another application. Where secure system access is available,
                we can design the connection and document how your team will
                operate it.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {CAPABILITIES.map((capability) => (
                <li key={capability} className="flex gap-3 rounded-xl border border-blue/10 bg-white p-5 text-slate-700 shadow-sm">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  <span className="leading-relaxed">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              A boutique integration partner working for you
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Projects are scoped around a defined operating need. We do not
              charge monthly platform fees or require long-term contracts, and
              we provide the documentation and support your team needs.
            </p>
            <Link
              href="/schedule"
              className="mt-8 inline-flex rounded-sm bg-blue px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue/20 transition-colors hover:bg-blue-light"
            >
              Schedule a conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
