import { SITE } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import WhatWeFix from "@/components/WhatWeFix";
import Results from "@/components/Results";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  founder: {
    "@type": "Person",
    name: "Omer Futerman",
  },
  serviceType: [
    "Property Management Consulting",
    "AppFolio Optimization",
    "Operations Automation",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <PainPoints />
        <HowItWorks />
        <WhatWeFix />
        <Results />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
