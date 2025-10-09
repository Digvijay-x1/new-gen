import { gsap, Linear } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const targetSection = useRef<HTMLDivElement>(null);
  const [willChange, setWillChange] = useState(false);

  const initAboutAnimation = (
    quoteRef: React.RefObject<HTMLDivElement>,
    targetSection: React.RefObject<HTMLDivElement>
  ): ScrollTrigger | null => {
    if (!quoteRef.current || !targetSection.current) return null;

    const aboutLines = [".about-1", ".about-2", ".about-3"]
      .map((selector) => quoteRef.current?.querySelector(selector))
      .filter((node): node is Element => Boolean(node));

    if (aboutLines.length === 0) return null;

    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    aboutLines.forEach((line, index) => {
      const isFirst = index === 0;
      const isLast = index === aboutLines.length - 1;

      timeline.fromTo(
        line,
        { opacity: 0.2 },
        { opacity: 1 },
        isFirst ? undefined : "<"
      );

      timeline.to(line, {
        opacity: 0.2,
        delay: isLast ? 1 : 0.5,
      });
    });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
    });

    return scrollTriggerInstance;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const aboutScrollTriggerInstance = initAboutAnimation(
      quoteRef,
      targetSection
    );

    return () => {
      aboutScrollTriggerInstance?.kill();
    };
  }, []);

  const renderQuotes = (): React.ReactNode => (
    <h1 ref={quoteRef} className="font-medium text-4xl sm:text-4xl md:text-5xl">
      <span
        className={`about-1 leading-tight ${willChange ? "will-change-opacity" : ""}`}
      >
        The Entrepreneurship Cell (E-Cell) at IIIT Allahabad is a student-led initiative dedicated to nurturing entrepreneurial spirit on campus.{" "}
      </span>
      <span
        className={`about-2 leading-tight ${willChange ? "will-change-opacity" : ""}`}
      >
        Acting as a launchpad for innovators, it equips aspiring entrepreneurs with mentorship, resources, and strategic guidance to transform ideas into impactful ventures.{" "}
      </span>
      <span
        className={`about-3 leading-tight ${willChange ? "will-change-opacity" : ""}`}
      >
        Through engaging workshops, speaker sessions, competitions, and networking platforms, E-Cell empowers students by bridging the gap between creativity and execution.{" "}
      </span>
    </h1>
  );

  return (
    <section
      className={`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container`}
      ref={targetSection}
    >
      {renderQuotes()}
    </section>
  );
};

export default AboutSection;
