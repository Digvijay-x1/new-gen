
import { METADATA } from "../constants";
import Head from "next/head";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";
import Cursor from "@/components/common/cursor";
import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects";
import QuoteSection from "@/components/home/quote";
import CollaborationSection from "@/components/home/collaboration";
import Footer from "@/components/common/footer";
import TimelineSection from "@/components/home/timeline";
import Scripts from "@/components/common/scripts";
import AboutSection from "@/components/home/about";
import MentorSection from "@/components/home/mentors";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedDimensionCalculator = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  }, []);

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () => {
      window.removeEventListener("resize", debouncedDimensionCalculator);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [debouncedDimensionCalculator]);

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 -z-1"></div>
  );

  const ECELL_META = {
    title: "E-Cell • IIIT Allahabad",
    description: "The Entrepreneurship Cell (E-Cell) at IIIT Allahabad is a student-led initiative dedicated to nurturing entrepreneurial spirit on campus. Acting as a launchpad for innovators, it equips aspiring entrepreneurs with mentorship, resources, and strategic guidance to transform ideas into impactful ventures. Through engaging workshops, speaker sessions, competitions, and networking platforms, E-Cell empowers students by bridging the gap between creativity and execution.",
  };

  return (
    <>
      <Layout faviconHref="/favicon.ico">
        <Head>
          <title>{ECELL_META.title}</title>
          <meta name="description" content={ECELL_META.description} />
          <meta property="og:title" content={ECELL_META.title} />
          <meta property="og:description" content={ECELL_META.description} />
          {/* <link rel="canonical" href={`${METADATA.siteUrl}/e-summit`} /> */}
          <meta property="og:site_name" content={METADATA.title} />
          {/* <meta property="og:url" content={`${METADATA.siteUrl}/e-summit`} /> */}
          {/* <meta property="og:image" content={`${METADATA.siteUrl}/social/ECELL-banner.png`} /> */}
          <meta property="og:image:alt" content="E-Cell IIIT Allahabad Banner" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={ECELL_META.title} />
          <meta name="twitter:description" content={ECELL_META.description} />
          {/* <meta name="twitter:image" content={`${METADATA.siteUrl}/social/ECELL-banner.png`} /> */}
          <meta name="twitter:image:alt" content="E-Cell IIIT Allahabad Banner" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <Header />
        <ProgressIndicator />
        <Cursor isDesktop={isDesktop} />
        <main className="flex-col flex bgg">
          {renderBackdrop()}
          <HeroSection />
          <AboutSection />
          <ProjectsSection isDesktop={isDesktop} />
          <QuoteSection />
          <MentorSection />
          {/* <TimelineSection isDesktop={isDesktop} /> */}
          <CollaborationSection />
          <Footer />
        </main>
        <Scripts />
      </Layout>
    </>
  );
}
