import { MENULINKS } from "../../constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const MENTOR_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  MENTOR_TITLE: "section-title-sm mb-4 seq",
};

const MentorSection = () => {
  const targetSection = useRef<HTMLDivElement>(null);
  const [willChange, setWillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: React.RefObject<HTMLDivElement>
  ): ScrollTrigger | null => {
    if (!targetSection.current) return null;

    const mentorsWrapper = targetSection.current.querySelector(".mentors-wrapper");
    if (!mentorsWrapper) return null;

    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: mentorsWrapper,
      start: "100px bottom",
      end: "center center",
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setWillChange(self.isActive),
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const revealAnimationRef = initRevealAnimation(targetSection);

    return () => {
      revealAnimationRef?.kill();
    };
  }, []);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col items-center justify-center">
      <p className="section-title-sm seq text-center">Our</p>
      <h1 className="section-heading seq mt-2 text-center">MENTORS</h1>

      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        <div className="shadow-lg rounded-2xl p-6 flex flex-col items-center w-96">
          <Image src="/skills/ms.png" alt="MS" width={384} height={384} className="rounded-xl" />
          <h3 className="mt-4 text-lg font-semibold">Prof. Mukul S. Sutaone</h3>
          <p className="text-white text-center mt-2">Director</p>
          <p className="text-white text-center mt-2">IIIT Allahabad</p>
        </div>
        <div className="shadow-lg rounded-2xl p-6 flex flex-col items-center w-96">
          <Image src="/skills/rm.png" alt="RM" width={384} height={384} className="rounded-xl" />
          <h3 className="mt-4 text-lg font-semibold">Dr. Ranjana Vyas</h3>
          <p className="text-white text-center mt-2">Coordinator, E-Cell</p>
          <p className="text-white text-center mt-2">IIIT Allahabad</p>
        </div>
      </div>
    </div>
  );


  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image
          src="/pattern-r.svg"
          loading="lazy"
          height={700}
          width={320}
          alt="pattern"
        />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg"
          loading="lazy"
          height={335}
          width={140}
          alt="pattern"
        />
      </div>
    </>
  );

  return (
    <section id="our_mentors" className="relative">
      {renderBackgroundPattern()}
      <div
        className={MENTOR_STYLES.SECTION}
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div
          className="flex flex-col mentors-wrapper"
          style={willChange ? { willChange: "opacity, transform" } : undefined}
        >
          {renderSectionTitle()}

        </div>
      </div>
    </section>
  );
};

export default MentorSection;
