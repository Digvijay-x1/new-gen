
import { MENULINKS, SOCIAL_LINKS, TYPED_STRINGS } from "../../constants";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { gsap, Linear } from "gsap";

const HERO_STYLES = {
  SECTION:
    "w-full flex flex-col md:flex-row md:items-center py-8 section-container min-h-screen relative mb-24",

  CONTENT: "flex-[0_0_70%] font-medium flex flex-col pt-32 md:pt-0 select-none ",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "flex-[0_0_30%] flex justify-center items-center",
  TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq",
};
type SocialIcon = {
  href: string;
  label: string;
  Icon: string;
  color: string;
};
const socialIcons: SocialIcon[] = [
  {
    href: "https://www.facebook.com/p/E-Cell-IIIT-Allahabad-100063982418300/",
    label: "Facebook",
    Icon: "/facebook.svg",
    color: "#1877F2",
  },
  {
    href: "https://www.instagram.com/ecell_iiita/",
    label: "Instagram",
    Icon: "/instagram.svg",
    color: "#E4405F",
  },
  {
    href: "https://www.youtube.com/channel/UCYOhhILSgHt03bjj7n4g9DA",
    label: "YouTube",
    Icon: "/yt.svg",
    color: "#FF0000",
  },
  {
    href: "https://www.linkedin.com/company/ecell-iiit-allahabad/",
    label: "LinkedIn",
    Icon: "/linkedin.svg",
    color: "#0A66C2",
  },
];

const HeroSection = React.memo(() => {
  const typedSpanElement = useRef<HTMLSpanElement>(null);
  const targetSection = useRef<HTMLDivElement>(null);

  const initTypeAnimation = (
    typedSpanElement: React.RefObject<HTMLSpanElement>
  ): Typed => {
    return new Typed(typedSpanElement.current, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });
  };

  const initRevealAnimation = (
    targetSection: React.RefObject<HTMLDivElement>
  ): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

    return revealTl;
  };

  useEffect(() => {
    const typed = initTypeAnimation(typedSpanElement);
    initRevealAnimation(targetSection);

    return () => {
      if (typed && typeof typed.destroy === "function") {
        typed.destroy();
      }
    };
  }, [typedSpanElement, targetSection]);

  const renderBackgroundImage = (): React.ReactNode => (
    <div className={HERO_STYLES.BG_WRAPPER} style={{ maxHeight: "650px" }}>
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 seq">
        <Image
          src="/rocket.png"
          alt="Rocket launching illustration"
          fill
          priority
          className="object-contain drop-shadow-[0_15px_35px_rgba(56,189,248,0.45)]"
        />
      </div>
    </div>
  );

  const renderSocialIcons = (): React.ReactNode => (
    <div className="space-y-8">
      <div className="flex justify-center gap-3">
        {socialIcons.map(({ href, label, Icon, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center w-12 h-12 transition-all duration-300 bg-transparent group rounded-xl hover:scale-110"
            aria-label={`Follow us on ${label}`}
          >
            {/* <Icon
                className="w-10 h-10 transition-all duration-300 group-hover:scale-110"
                style={{ color: "white" }}
              /> */}
            <Image src={Icon} alt="icon" width={40} height={40} />
          </a>
        ))}
      </div>
    </div>
  );

  const renderHeroContent = (): React.ReactNode => (
    <div className={HERO_STYLES.CONTENT}>
      <div className="md:mb-4 mb-2">
        <h2 className="font-montserrat text-6xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 bg-clip-text text-transparent animate-gradient mb-4 hover:scale-105 transition-transform">

          The New Generation<br />
          <span className="inline-block mt-2">E-Cell</span>
        </h2>
        <h1 className="font-poppins text-2xl text-gray-300/90 tracking-wide seq hover:text-gold-400 transition-colors">
          IIIT Allahabad
        </h1>
      </div>
      <p className="mb-4 ">
        <span className={HERO_STYLES.TYPED_SPAN} ref={typedSpanElement}></span>
      </p>
      <div className="flex seq mb-5">{renderSocialIcons()}</div>
      <div className="flex seq">

      </div>
    </div>
  );

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className={HERO_STYLES.SECTION}
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      {renderHeroContent()}
      {renderBackgroundImage()}
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
