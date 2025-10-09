// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { gsap, Linear } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QuoteSection = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const targetSection = useRef<HTMLDivElement>(null);

  const [willChange, setWillChange] = useState(false);

  const initQuoteAnimation = (
    quoteRef: React.RefObject<HTMLDivElement>,
    targetSection: React.RefObject<HTMLDivElement>
  ): ScrollTrigger | null => {
    if (!quoteRef.current || !targetSection.current) return null;

    const emphasis = quoteRef.current.querySelector<HTMLElement>(".text-strong");

    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline.from(quoteRef.current, { opacity: 0, duration: 2 });

    if (emphasis) {
      timeline.to(emphasis, {
        backgroundPositionX: "100%",
        duration: 1,
      });
    }

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);

    return () => {
      quoteAnimationRef?.kill();
    };
  }, []);

  const renderQuote = (): React.ReactNode => (
    <div className="tall:py-60 py-72 section-container">
      <h1
        ref={quoteRef}
        className={`font-medium text-4xl md:text-5xl text-center ${willChange ? "will-change-opacity" : ""
          }`}
      >
        Our <span className="text-strong font-bold">strong</span> tum hi ho na
      </h1>
    </div>
  );

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      {renderQuote()}
    </section>
  );
};

export default QuoteSection;
