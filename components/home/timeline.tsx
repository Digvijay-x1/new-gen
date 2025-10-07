// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Branch,
  BranchNode,
  CheckpointNode,
  ItemSize,
  MENULINKS,
  NodeTypes,
  TIMELINE,
  TimelineNodeV2,
} from "../../constants";
import { IDesktop, isSmallScreen } from "pages";

const svgColor = "#9CA3AF";
const animColor = "#FCD34D";
const separation = 450;
const strokeWidth = 2;
const leftBranchX = 13;
const curveLength = 150;
const dotSize = 26;

const TimelineSection = ({ isDesktop }: IDesktop) => {
  const [svgWidth, setSvgWidth] = useState(400);
  const [rightBranchX, setRightBranchX] = useState(109);

  const svgCheckpointItems = useMemo(
    () =>
      TIMELINE.filter(
        (item) => item.type === NodeTypes.CHECKPOINT && item.shouldDrawLine
      ),
    []
  );

  const svgLength = useMemo(
    () => svgCheckpointItems.length * separation,
    [svgCheckpointItems.length]
  );

  const timelineSvg = useRef<SVGSVGElement | null>(null);
  const svgContainer = useRef<HTMLDivElement | null>(null);
  const screenContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!timelineSvg.current || !svgContainer.current) {
      return;
    }

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const svgContainerEl = svgContainer.current;
    const timelineSvgEl = timelineSvg.current;
    const screenContainerEl = screenContainer.current;

    const containerWidth = svgContainerEl.clientWidth;
    setSvgWidth((prev) => (prev === containerWidth ? prev : containerWidth));

    const svgString = generateTimelineSvg(
      TIMELINE,
      rightBranchX,
      containerWidth
    );
    timelineSvgEl.innerHTML = svgString;

    if (isSmallScreen()) {
      setRightBranchX((prev) => (prev === 70 ? prev : 70));
    } else {
      setRightBranchX((prev) => (prev === 109 ? prev : 109));
    }

    const gsapTimeline = gsap
      .timeline({ defaults: { ease: Linear.easeNone, duration: 0.44 } })
      .addLabel("start");

    const { duration, scrollTrigger } = initScrollTrigger({
      timeline: gsapTimeline,
      svgLength,
      isDesktop,
      screenContainer: screenContainerEl,
      svgContainer: svgContainerEl,
      svgCheckpointItems,
    });

    animateTimeline(gsapTimeline, duration, svgContainerEl);

    return () => {
      scrollTrigger?.kill();
      gsapTimeline.kill();
    };
  }, [isDesktop, rightBranchX, svgCheckpointItems, svgLength]);

  const renderSlides = (): React.ReactNode => (
    <div
      className="max-w-full h-96 shadow-xl bg-gray-800 rounded-2xl overflow-hidden"
      ref={screenContainer}
    >
      <Image
        className="w-full h-8"
        src="/timeline/title-bar.svg"
        alt="Title bar"
        width={644}
        height={34}
      />
      <div className="relative h-full w-full -mt-2">
        <div className="absolute top-0 left-0 h-full w-full">
          {svgCheckpointItems.map((item, index) => {
            const checkpoint = item as CheckpointNode;
            const slideImage = checkpoint.slideImage || "";
            const isGif = slideImage.toLowerCase().endsWith(".gif");

            return (
              <Image
                className={`w-full absolute top-0 object-cover slide-${
                  index + 1
                }`}
                src={slideImage}
                key={`${checkpoint.title}-${index}`}
                alt="Timeline"
                fill
                unoptimized={isGif}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderSVG = (): React.ReactNode => (
    <svg
      width={svgWidth}
      height={svgLength}
      viewBox={`0 0 ${svgWidth} ${svgLength}`}
      fill="none"
      ref={timelineSvg}
    ></svg>
  );

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="section-title-sm seq">MILESTONES</p>
      <h1 className="section-heading seq mt-2">Timeline</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
        A quick recap of proud moments
      </h2>
    </div>
  );

  return (
    <section
      className="w-full relative select-none min-h-screen section-container py-8 flex flex-col justify-center"
      id={MENULINKS[3].ref}
    >
      {renderSectionTitle()}
      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-12 md:col-span-6 line-svg" ref={svgContainer}>
          {renderSVG()}
        </div>
        <div className="col-span-12 md:col-span-6 md:flex hidden">
          {renderSlides()}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

type LinkedTimelineNode = LinkedCheckpointNode | LinkedBranchNode;

type LinkedCheckpointNode = LinkNode & CheckpointNode;

type LinkedBranchNode = LinkNode & BranchNode;

interface LinkNode {
  next?: LinkedTimelineNode;
  prev?: LinkedTimelineNode;
}

const addNodeRefsToItems = (
  timeline: Array<TimelineNodeV2>
): Array<LinkedTimelineNode> => {
  return timeline.map((node, idx) => ({
    ...node,
    next: timeline[idx + 1] as LinkedTimelineNode | undefined,
    prev: timeline[idx - 1] as LinkedTimelineNode | undefined,
  })) as Array<LinkedTimelineNode>;
};

const generateTimelineSvg = (
  timeline: Array<TimelineNodeV2>,
  rightBranchX: number,
  currentSvgWidth: number
): string => {
  let index = 1;
  let y = dotSize / 2;
  const timelineStyle = `<style>.str, .dot{stroke-width: ${strokeWidth}px}.anim-branch{stroke-dasharray: 186}</style>`;
  let isDiverged = false;

  return addNodeRefsToItems(timeline).reduce(
    (svg: string, node: LinkedTimelineNode) => {
      const { type, next } = node;
      let lineY = y;
      let dotY = y + separation / 2;

      switch (type) {
        case NodeTypes.CHECKPOINT: {
          const checkpointNode = node as LinkedCheckpointNode;
          const { shouldDrawLine } = checkpointNode;

          if (!next) {
            lineY = y - separation / 2;
          }

          if (!shouldDrawLine) {
            dotY = y;
          }

          if (shouldDrawLine) {
            svg = `${drawLine(
              checkpointNode,
              lineY,
              index,
              isDiverged,
              rightBranchX
            )}${svg}`;
            y += separation;
            index++;
          }

          svg = svg.concat(
            drawDot(
              checkpointNode,
              dotY,
              isDiverged,
              rightBranchX,
              currentSvgWidth
            )
          );
          break;
        }
        case NodeTypes.DIVERGE: {
          isDiverged = true;
          svg = `${drawBranch(
            node as LinkedBranchNode,
            y,
            index,
            rightBranchX
          )}${svg}`;
          break;
        }
        case NodeTypes.CONVERGE: {
          isDiverged = false;
          svg = `${drawBranch(
            node as LinkedBranchNode,
            y - separation,
            index - 1,
            rightBranchX
          )}${svg}`;
          break;
        }
        default:
          break;
      }

      return svg;
    },
    timelineStyle
  );
};

const getDotString = (x: number, y: number) =>
  `<rect class='dot' width=${dotSize} height=${dotSize} fill='#111827' x=${
    x - dotSize / 2
  } y=${
    y - dotSize / 2
  } ></rect><circle cx=${x} cy=${y} r='7' stroke=${svgColor} class='dot' ></circle>`;

const drawDot = (
  timelineNode: LinkedCheckpointNode,
  y: number,
  isDiverged: boolean,
  rightBranchX: number,
  currentSvgWidth: number
) => {
  const { next, alignment } = timelineNode;

  if (next && next.type === NodeTypes.DIVERGE) {
    y = y - curveLength + 6 * dotSize;
  }

  if (next && next.type === NodeTypes.CONVERGE) {
    y = y + curveLength - 6 * dotSize;
  }

  const dotString = getDotString(
    alignment === Branch.LEFT ? leftBranchX : rightBranchX,
    y
  );

  const textString = addText(
    timelineNode,
    y,
    isDiverged,
    currentSvgWidth,
    rightBranchX
  );

  return `${textString}${dotString}`;
};

const addText = (
  timelineNode: LinkedCheckpointNode,
  y: number,
  isDiverged: boolean,
  currentSvgWidth: number,
  rightBranchX: number
) => {
  const { title, subtitle, size, image } = timelineNode;

  const offset = isDiverged ? rightBranchX : 10;
  const foreignObjectX = dotSize / 2 + 10 + offset;
  const foreignObjectY = y - dotSize / 2;
  const foreignObjectWidth = currentSvgWidth - (dotSize / 2 + 10 + offset);

  const titleSizeClass = size === ItemSize.LARGE ? "text-6xl" : "text-2xl";
  const logoString = image
    ? `<img src='${image}' class='h-8 mb-2' loading='lazy' width='100' height='32' alt='${image}' />`
    : "";
  const subtitleString = subtitle
    ? `<p class='text-xl mt-2 text-gray-200 font-medium tracking-wide'>${subtitle}</p>`
    : "";

  return `<foreignObject x=${foreignObjectX} y=${foreignObjectY} width=${foreignObjectWidth} 
        height=${separation}>${logoString}<p class='${titleSizeClass}'>${title}</p>${subtitleString}</foreignObject>`;
};

const drawLine = (
  timelineNode: LinkedCheckpointNode,
  y: number,
  index: number,
  isDiverged: boolean,
  rightBranchX: number
) => {
  const { alignment, prev, next } = timelineNode;

  const isPrevDiverge = prev && prev.type === NodeTypes.DIVERGE;
  const isNextConverge = next && next.type === NodeTypes.CONVERGE;

  const lineY = Math.abs(y + separation);

  if (isPrevDiverge) {
    return `<line class='str' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${svgColor} /><line class='str line-${index}' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${animColor} />`;
  }

  if (isNextConverge) {
    return `<line class='str' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${svgColor} /><line class='str line-${index}' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${animColor} />`;
  }

  const lineX = alignment === Branch.LEFT ? leftBranchX : rightBranchX;

  let str = `<line class='str' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${index}' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${animColor} />`;

  if (isDiverged) {
    const divergedLineX =
      alignment === Branch.LEFT ? rightBranchX : leftBranchX;
    str = str.concat(
      `<line class='str' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${svgColor} /><line class='str line-${index}' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${animColor} />`
    );
  }

  return str;
};

const drawBranch = (
  timelineNode: LinkedBranchNode,
  y: number,
  index: number,
  rightBranchX: number
) => {
  const { type } = timelineNode;

  switch (type) {
    case NodeTypes.DIVERGE:
      return `<path class='str' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
        y + curveLength / 2
      } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
        y + curveLength
      }' stroke=${svgColor} /><line class='str' x1=${rightBranchX} y1=${
        y + curveLength
      } x2=${rightBranchX} y2=${
        y + separation
      } stroke=${svgColor} /><path class='str anim-branch branch-${index}' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
        y + curveLength / 2
      } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
        y + curveLength
      }' stroke=${animColor} /><line class='str branch-line-${index}' x1=${rightBranchX} y1=${
        y + curveLength
      } x2=${rightBranchX} y2=${y + separation} stroke=${animColor} />`;
    case NodeTypes.CONVERGE:
      return `<path class='str' d='M ${rightBranchX} ${
        y + separation - curveLength
      } C ${rightBranchX} ${
        y + separation - curveLength + curveLength / 2
      } ${leftBranchX} ${
        y + separation - curveLength + curveLength / 2
      } ${leftBranchX} ${
        y + separation
      }' stroke=${svgColor} /><line class='str' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
        y + separation - curveLength
      )} stroke=${svgColor} /><path class='str anim-branch branch-${index}' d='M ${rightBranchX} ${
        y + separation - curveLength
      } C ${rightBranchX} ${
        y + separation - curveLength + curveLength / 2
      } ${leftBranchX} ${
        y + separation - curveLength + curveLength / 2
      } ${leftBranchX} ${
        y + separation
      }' stroke=${animColor} /><line class='str branch-line-${index}' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
        y + separation - curveLength
      )} stroke=${animColor} />`;
    default:
      return "";
  }
};

const addLineSvgAnimation = (
  timeline: GSAPTimeline,
  duration: number,
  index: number,
  svgContainer: HTMLDivElement | null
): GSAPTimeline => {
  if (!svgContainer) {
    return timeline;
  }

  const startTime = `start+=${duration * index}`;

  timeline.from(
    svgContainer.querySelectorAll(`.line-${index + 1}`),
    { scaleY: 0, duration },
    startTime
  );

  return timeline;
};

const addDivergingBranchLineAnimation = (
  timeline: GSAPTimeline,
  duration: number,
  index: number,
  svgContainer: HTMLDivElement | null
): GSAPTimeline => {
  if (!svgContainer) {
    return timeline;
  }

  const lineElement = svgContainer.querySelector(`.line-${index + 1}`);
  const branchElement = svgContainer.querySelector(`.branch-${index + 1}`);
  const branchLineElement = svgContainer.querySelector(
    `.branch-line-${index + 1}`
  );

  if (lineElement) {
    timeline.from(
      lineElement,
      { scaleY: 0, duration },
      `start+=${duration * index}`
    );
  }

  if (branchElement) {
    timeline.from(
      branchElement,
      { strokeDashoffset: 186, duration: duration - 2 },
      `start+=${duration * index}`
    );
  }

  if (branchLineElement) {
    timeline.from(
      branchLineElement,
      { scaleY: 0, duration: duration - 1 },
      `start+=${duration * (index + 1) - 2}`
    );
  }

  return timeline;
};

const addConvergingBranchLineAnimation = (
  timeline: GSAPTimeline,
  duration: number,
  index: number,
  svgContainer: HTMLDivElement | null
): GSAPTimeline => {
  if (!svgContainer) {
    return timeline;
  }

  const lineElement = svgContainer.querySelector(`.line-${index + 1}`);
  const branchLineElement = svgContainer.querySelector(
    `.branch-line-${index + 1}`
  );
  const branchElement = svgContainer.querySelector(`.branch-${index + 1}`);

  if (lineElement) {
    timeline.from(
      lineElement,
      { scaleY: 0, duration },
      `start+=${duration * index}`
    );
  }

  if (branchLineElement) {
    timeline.from(
      branchLineElement,
      { scaleY: 0, duration: duration - 1 },
      `start+=${duration * index}`
    );
  }

  if (branchElement) {
    timeline.from(
      branchElement,
      { strokeDashoffset: 186, duration: duration - 2 },
      `start+=${duration * (index + 1) - 1}`
    );
  }

  return timeline;
};

const animateTimeline = (
  timeline: GSAPTimeline,
  duration: number,
  svgContainer: HTMLDivElement | null
): void => {
  if (!svgContainer) {
    return;
  }

  let index = 0;

  addNodeRefsToItems(TIMELINE).forEach((item) => {
    if (item.type === NodeTypes.CHECKPOINT && item.shouldDrawLine) {
      const checkpointNode = item as LinkedCheckpointNode;
      const { next, prev } = checkpointNode;

      if (prev?.type === NodeTypes.DIVERGE) {
        addDivergingBranchLineAnimation(timeline, duration, index, svgContainer);
      } else if (next?.type === NodeTypes.CONVERGE) {
        addConvergingBranchLineAnimation(timeline, duration, index, svgContainer);
      } else {
        addLineSvgAnimation(timeline, duration, index, svgContainer);
      }

      index += 1;
    }
  });
};

const setSlidesAnimation = (
  timeline: GSAPTimeline,
  screenContainer: HTMLDivElement | null,
  svgCheckpointItems: Array<TimelineNodeV2>
): void => {
  if (!screenContainer) {
    return;
  }

  svgCheckpointItems.forEach((_, index) => {
    const slide = screenContainer.querySelector(`.slide-${index + 1}`);

    if (!slide) {
      return;
    }

    if (index !== 0) {
      timeline.fromTo(slide, { opacity: 0 }, { opacity: 1 });
    }

    if (index !== svgCheckpointItems.length - 1) {
      timeline.to(slide, {
        opacity: 0,
        delay: 2.35,
      });
    }
  });
};

interface InitScrollTriggerArgs {
  timeline: GSAPTimeline;
  svgLength: number;
  isDesktop: boolean;
  screenContainer: HTMLDivElement | null;
  svgContainer: HTMLDivElement | null;
  svgCheckpointItems: Array<TimelineNodeV2>;
}

const initScrollTrigger = ({
  timeline,
  svgLength,
  isDesktop,
  screenContainer,
  svgContainer,
  svgCheckpointItems,
}: InitScrollTriggerArgs): { duration: number; scrollTrigger: ScrollTrigger | null } => {
  let duration = 0;
  let triggerElement: Element | null = null;
  let start = "top center";
  let end = `+=${svgLength}`;
  const additionalConfig: Partial<ScrollTrigger.Vars> = {};

  if (isDesktop && !isSmallScreen() && screenContainer) {
    setSlidesAnimation(timeline, screenContainer, svgCheckpointItems);

    const platformHeight = screenContainer.getBoundingClientRect().height;
    triggerElement = screenContainer;
    start = `top ${(window.innerHeight - platformHeight) / 2}`;
    end = `+=${svgLength - platformHeight}`;
    additionalConfig.pin = true;
    additionalConfig.pinSpacing = true;
    duration = svgCheckpointItems.length
      ? timeline.totalDuration() / svgCheckpointItems.length
      : 0;
  } else {
    if (screenContainer) {
      screenContainer.innerHTML = "";
    }
    triggerElement = svgContainer;
    duration = 3;
  }

  if (!triggerElement) {
    return { duration, scrollTrigger: null };
  }

  const scrollTrigger = ScrollTrigger.create({
    ...additionalConfig,
    trigger: triggerElement,
    start,
    end,
    scrub: 0,
    animation: timeline,
  });

  return { duration, scrollTrigger };
};
