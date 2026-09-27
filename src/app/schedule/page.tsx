import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CALENDLY_EMBED_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Schedule a Conversation",
  description:
    "Choose a convenient time to discuss your AppFolio operations with Property Ops Studio.",
  alternates: { canonical: "/schedule" },
  openGraph: {
    title: "Schedule a Conversation | Property Ops Studio",
    description:
      "Discuss your AppFolio workflows, reporting needs, and integration opportunities with Property Ops Studio.",
    url: "/schedule",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule a Conversation | Property Ops Studio",
    description:
      "Discuss your AppFolio workflows, reporting needs, and integration opportunities with Property Ops Studio.",
  },
};

const embedUrl = `${CALENDLY_EMBED_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1e2325&primary_color=105ab6`;

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-light">
              Schedule a conversation
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Let&rsquo;s talk through your operation.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Choose a convenient time below to discuss your AppFolio workflows,
              reporting needs, or integration opportunities.
            </p>
          </div>

          <div className="mt-10 overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
            <iframe
              title="Schedule a conversation with Property Ops Studio"
              src={embedUrl}
              className="h-[780px] w-full"
              loading="eager"
            />
          </div>

          <p className="mt-5 text-center text-sm text-slate-500">
            Having trouble with the scheduler?{" "}
            <a
              href={CALENDLY_EMBED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue hover:underline"
            >
              Open Calendly in a new window
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
