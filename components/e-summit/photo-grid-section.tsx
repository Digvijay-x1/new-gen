"use client";

import Image from "next/image";
import React from "react";

function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

type ImageInfo = {
  src: string;
  alt: string;
  aspect: string;
};

const PhotoCarousel = ({
  images,
  direction,
  heightClass,
  animationDuration,
}: {
  images: ImageInfo[];
  direction: "left" | "right";
  heightClass: string;
  animationDuration: string;
}) => {
  const extendedImages = [...images, ...images];
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className={cn("w-full overflow-hidden", heightClass)}>
      <div
        className={cn("flex h-full w-max", animationClass)}
        style={{ animationDuration }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className={cn("relative flex-shrink-0 mx-2 h-full", image.aspect)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PhotoGridSection() {
  const images: ImageInfo[] = React.useMemo(
    () => [
      { src: "/events_esummit/events/1.jpg", alt: "E-Summit", aspect: "aspect-[2/3]" },
      { src: "/events_esummit/events/2.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/3.jpg", alt: "E-Summit", aspect: "aspect-[2/3]" },
      { src: "/events_esummit/events/4.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/5.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/6.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/7.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/8.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/9.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/10.jpg", alt: "E-Summit", aspect: "aspect-[2/3]" },
      { src: "/events_esummit/events/11.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/12.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/13.jpg", alt: "E-Summit", aspect: "aspect-[2/3]" },
      { src: "/events_esummit/events/14.jpg", alt: "E-Summit", aspect: "aspect-[2/3]" },
      { src: "/events_esummit/events/15.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/16.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/17.jpg", alt: "E-Summit", aspect: "aspect-[2/3]" },
      { src: "/events_esummit/events/18.jpg", alt: "E-Summit", aspect: "aspect-[2/3]" },
      { src: "/events_esummit/events/19.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
      { src: "/events_esummit/events/20.jpg", alt: "E-Summit", aspect: "aspect-[3/2]" },
    ],
    []
  );

  const imagesRow1 = React.useMemo(() => images, [images]);
  const imagesRow2 = React.useMemo(() => [...images].sort(() => Math.random() - 0.5), [images]);
  const imagesRow3 = React.useMemo(() => [...images].sort(() => Math.random() - 0.5), [images]);

  return (
    <>
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation-name: scroll-left;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .animate-scroll-right {
            animation-name: scroll-right;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
      <div className="py-24 space-y-4 bg-black">
        <PhotoCarousel images={imagesRow1} direction="left" heightClass="h-[160px] md:h-[200px]" animationDuration="150s" />
        <PhotoCarousel images={imagesRow2} direction="right" heightClass="h-[200px] md:h-[280px]" animationDuration="190s" />
        <PhotoCarousel images={imagesRow3} direction="left" heightClass="h-[160px] md:h-[200px]" animationDuration="170s" />
      </div>
    </>
  );
}