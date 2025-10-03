import Head from "next/head";

import Layout from "@/components/common/layout";
import HeroSection from "@/components/e-summit/hero-section";
import AboutSection from "@/components/e-summit/about-section";
import PhotoGridSection from "@/components/e-summit/photo-grid-section";
import StatisticsSection from "@/components/e-summit/statistics-section";
import EventsSection from "@/components/e-summit/events-section";
import PastQuestsSection from "@/components/e-summit/past-guests-section";
import PastSponsorsSection from "@/components/e-summit/past-sponsors-section";
import FooterSection from "@/components/e-summit/footer-section";
import Hero from "@/components/e-summit/hero";
import StickyLogo from "@/components/e-summit/sticky-logo";

const ESUMMIT_META = {
  title: "E-Summit • IIIT Allahabad",
  description:
    "Experience the 5th edition of IIIT Allahabad's E-Summit with events, speakers, sponsors, and more.",
};

export default function ESummitPage() {
  return (
    <Layout>
      <Head>
        <title>{ESUMMIT_META.title}</title>
        <meta name="description" content={ESUMMIT_META.description} />
        <meta property="og:title" content={ESUMMIT_META.title} />
        <meta property="og:description" content={ESUMMIT_META.description} />
        <meta
          property="og:image"
          content="https://www.ayushsingh.net/preview.jpg"
        />
  {/* E-Summit specific favicon overrides (cache-busted) */}
  <link rel="icon" type="image/png" sizes="32x32" href="/events_esummit/favicon.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/events_esummit/favicon.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/events_esummit/favicon.png" />
  <link rel="shortcut icon" href="events_esummit/favicon.png" />
  <meta name="theme-color" content="#000000" />
      </Head>
      
      <StickyLogo />
      <main className="min-h-screen text-white bg-black">
        <Hero />
        <AboutSection />
        <StatisticsSection />
        <EventsSection />
        <PastQuestsSection />
        <PastSponsorsSection />
        <FooterSection />
      </main>
    </Layout>
  );
}