import Head from "next/head";

import Layout from "@/components/common/layout";
import HeroSection from "@/components/e-summit/hero-section";
import AboutSection from "@/components/e-summit/about-section";
import PhotoGridSection from "@/components/e-summit/photo-grid-section";
import StatisticsSection from "@/components/e-summit/statistics-section";
import EventsSection from "@/components/e-summit/events-section";
import PastSpeakersSection from "@/components/e-summit/past-speakers-section";
import PastSponsorsSection from "@/components/e-summit/past-sponsors-section";
import InvestorsSection from "@/components/e-summit/investor-section";
import FooterSection from "@/components/e-summit/footer-section";

const ESUMMIT_META = {
  title: "E-Summit • IIIT Allahabad",
  description:
    "Experience the 21st edition of IIIT Allahabad's E-Summit with events, speakers, sponsors, and more.",
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
      </Head>
      <main className="min-h-screen bg-black text-white">
        <HeroSection />
        <AboutSection />
        <StatisticsSection />
        <EventsSection />
        <PastSpeakersSection />
        <PastSponsorsSection />
        <FooterSection />
      </main>
    </Layout>
  );
}