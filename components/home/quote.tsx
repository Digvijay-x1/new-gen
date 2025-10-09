import { gsap, Linear } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QuoteSection = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const targetSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      if (quoteRef.current && paraRef.current && targetSection.current) {
        const timeline = gsap.timeline({
          defaults: { ease: Linear.easeNone },
        });

        timeline.from(quoteRef.current, { opacity: 0, y: 50, duration: 1.5 });
        timeline.from(paraRef.current, { opacity: 0, y: 30, duration: 1.5 }, "-=1");

        ScrollTrigger.create({
          trigger: targetSection.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.5,
          animation: timeline,
        });
      }
    }
  }, []);

  return (
    <section
      className="w-full relative select-none py-36 md:py-48"
      ref={targetSection}
    >
      <div className="section-container text-center px-4 md:px-0">
        <h1
          ref={quoteRef}
          className="font-bold text-4xl md:text-5xl lg:text-6xl text-white-800"
        >
          Igniting <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Innovation</span>.{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Empowering Entrepreneurs</span>.
        </h1>
        <p
          ref={paraRef}
          className="mt-8 text-lg md:text-xl text-white-700 max-w-3xl mx-auto leading-relaxed"
        >
          A community of dreamers, builders, and changemakers — driving innovation
          from classrooms to companies. We believe every idea deserves a chance
          to fly, and we’re here to make it happen.
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
