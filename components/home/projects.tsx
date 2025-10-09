import React, { useEffect, useRef, useState } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import ProjectTile from "../common/project-tile";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop, NO_MOTION_PREFERENCE_QUERY } from "pages";

const PROJECT_STYLES = {
  SECTION:
    "w-full relative select-none section-container flex-col flex py-8 justify-center",
  PROJECTS_WRAPPER:
    "tall:mt-12 mt-6 grid grid-flow-col auto-cols-max md:gap-10 gap-6 project-wrapper w-fit seq snap-x scroll-pl-6 snap-mandatory",
};

const ProjectsSection = ({ isDesktop }: IDesktop) => {
  const targetSectionRef = useRef<HTMLDivElement>(null);
  const sectionTitleElementRef = useRef<HTMLDivElement>(null);

  const [willChange, setWillChange] = useState(false);
  const [horizontalAnimationEnabled, setHorizontalAnimationEnabled] =
    useState(false);

  const initRevealAnimation = (
    targetSectionRef: React.RefObject<HTMLDivElement>
  ): [GSAPTimeline | null, ScrollTrigger | null] => {
    const sectionElement = targetSectionRef.current;
    if (!sectionElement) return [null, null];

    const sequenceElements = sectionElement.querySelectorAll(".seq");
    if (!sequenceElements.length) return [null, null];

    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(sequenceElements, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const initProjectsAnimation = (
    targetSectionRef: React.RefObject<HTMLDivElement>,
    sectionTitleElementRef: React.RefObject<HTMLDivElement>
  ): [GSAPTimeline | null, ScrollTrigger | null] => {
    const sectionElement = targetSectionRef.current;
    const titleElement = sectionTitleElementRef.current;
    if (!sectionElement || !titleElement) return [null, null];

    const innerContainer = sectionElement.querySelector(
      ".inner-container"
    ) as HTMLElement | null;
    const projectWrapper = sectionElement.querySelector(
      ".project-wrapper"
    ) as HTMLElement | null;

    if (!innerContainer || !projectWrapper) return [null, null];

    const sidePadding = document.body.clientWidth - innerContainer.clientWidth;
    const elementWidth = sidePadding + projectWrapper.clientWidth;
    sectionElement.style.width = `${elementWidth}px`;

    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;

    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .to(sectionElement, { x: width })
      .to(titleElement, { x: -width }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionElement,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
      onToggle: (self) => setWillChange(self.isActive),
    });

    return [timeline, scrollTrigger];
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    let projectsScrollTrigger: ScrollTrigger | null = null;
    let projectsTimeline: GSAPTimeline | null = null;
    let revealScrollTrigger: ScrollTrigger | null = null;
    let revealTimeline: GSAPTimeline | null = null;

    const targetSection = targetSectionRef.current;
    if (!targetSection) {
      return;
    }

    const prefersMotion = window.matchMedia(NO_MOTION_PREFERENCE_QUERY).matches;

    setHorizontalAnimationEnabled(isDesktop && prefersMotion);

    if (isDesktop && prefersMotion) {
      [projectsTimeline, projectsScrollTrigger] = initProjectsAnimation(
        targetSectionRef,
        sectionTitleElementRef
      );
    } else {
      const projectWrapper = targetSection.querySelector(
        ".project-wrapper"
      ) as HTMLDivElement | null;

      if (projectWrapper) {
        const parentPadding = window
          .getComputedStyle(targetSection)
          .getPropertyValue("padding-left");

        targetSection.style.setProperty("width", "100%");
        projectWrapper.classList.add("overflow-x-auto");
        projectWrapper.style.setProperty("width", "calc(100vw)");
        projectWrapper.style.setProperty("padding", `0 ${parentPadding}`);
        projectWrapper.style.setProperty(
          "transform",
          `translateX(-${parentPadding})`
        );
      }
    }

    const [revealTimelineTemp, revealScrollTriggerTemp] =
      initRevealAnimation(targetSectionRef);
    revealTimeline = revealTimelineTemp;
    revealScrollTrigger = revealScrollTriggerTemp;

    return () => {
      projectsScrollTrigger?.kill();
      projectsTimeline?.kill();
      revealScrollTrigger?.kill();
      revealTimeline?.progress(1);
    };
  }, [isDesktop]);

  const renderSectionTitle = (): React.ReactNode => (
    <div
      className={`flex flex-col inner-container  ${
        willChange ? "will-change-transform" : ""
      }`}
      ref={sectionTitleElementRef}
    >
      <p className="section-title-sm seq">ECell funded</p>
      <h1 className="section-heading seq mt-2">Successful startups</h1>
      <h2 className="text-2xl md:max-w-3xl w-full seq max-w-sm mt-2">
        From Concept to Success: Startups Thriving with E-Cell IIIT Allahabad&apos;s Support.
      </h2>
    </div>
  );

  const renderProjectTiles = (): React.ReactNode =>
    PROJECTS.map((project) => (
      <ProjectTile
        project={project}
        key={project.name}
        animationEnabled={horizontalAnimationEnabled}
      ></ProjectTile>
    ));

  const { ref: projectsSectionRef } = MENULINKS[1];

  return (
    <section
      ref={targetSectionRef}
      className={`${isDesktop && "min-h-screen"} ${PROJECT_STYLES.SECTION}`}
      id={projectsSectionRef}
    >
      {renderSectionTitle()}
      <div className={PROJECT_STYLES.PROJECTS_WRAPPER}>
        {renderProjectTiles()}
      </div>
    </section>
  );
};

export default ProjectsSection;
