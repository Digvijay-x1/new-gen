import Head from "next/head";
import { METADATA } from "../../constants";

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
    <Layout faviconHref="/events_esummit/favicon.ico?v=1">
      <Head>
        <title>{ESUMMIT_META.title}</title>
        <meta name="description" content={ESUMMIT_META.description} />
        <meta property="og:title" content={ESUMMIT_META.title} />
        <meta property="og:description" content={ESUMMIT_META.description} />
        <link rel="canonical" href={`${METADATA.siteUrl}/e-summit`} />
        <meta property="og:site_name" content={METADATA.title} />
        <meta property="og:url" content={`${METADATA.siteUrl}/e-summit`} />
        <meta property="og:image" content={`${METADATA.siteUrl}/social/esummit-banner.png`} />
        <meta property="og:image:alt" content="E-Summit IIIT Allahabad Banner" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ESUMMIT_META.title} />
        <meta name="twitter:description" content={ESUMMIT_META.description} />
        <meta name="twitter:image" content={`${METADATA.siteUrl}/social/esummit-banner.png`} />
        <meta name="twitter:image:alt" content="E-Summit IIIT Allahabad Banner" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <StickyLogo />
      <main className="min-h-screen text-white bg-black">
        <Hero />
        <AboutSection />
        <PhotoGridSection />
        <StatisticsSection />
        <EventsSection />
        <PastQuestsSection />
        <PastSponsorsSection />
        <FooterSection />
      </main>
    </Layout>
  );
}