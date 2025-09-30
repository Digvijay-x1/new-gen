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
              className="object-cover filter grayscale rounded-md"
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
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/summit19high-4.jpg?", alt: "E-Summit audience", aspect: "aspect-[3/2]" },
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/_dsc8070-8.jpg?", alt: "E-Summit speaker", aspect: "aspect-[3/2]" },
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/DSC04241-22.jpg?", alt: "E-Summit group photo", aspect: "aspect-[2/3]" },
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/_dsc0408_1_bpIAllJ-21.jpg?", alt: "E-Summit competition winner", aspect: "aspect-[3/2]" },
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/LOKI1530_IN9Rctb-16.jpeg?", alt: "E-Summit team", aspect: "aspect-[2/3]" },
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/_dsc7848-9.jpg?", alt: "E-Summit networking", aspect: "aspect-[3/2]" },
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/_dsc0270-6.jpg?", alt: "E-Summit event moment", aspect: "aspect-[3/2]" },
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/DSC05009-Enhanced-NR-23.jpg?", alt: "E-Summit speaker on stage", aspect: "aspect-[3/2]" },
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/team19-13.jpg?", alt: "E-Summit team photo 2019", aspect: "aspect-[3/2]" },
      { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/team18-14.jpg?", alt: "E-Summit team photo 2018", aspect: "aspect-[3/2]" },
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
        <PhotoCarousel images={imagesRow1} direction="left" heightClass="h-[160px] md:h-[200px]" animationDuration="90s" />
        <PhotoCarousel images={imagesRow2} direction="right" heightClass="h-[200px] md:h-[280px]" animationDuration="120s" />
        <PhotoCarousel images={imagesRow3} direction="left" heightClass="h-[160px] md:h-[200px]" animationDuration="100s" />
      </div>
    </>
  );
}