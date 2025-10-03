
import Image from "next/image";
import React from 'react';

const sponsors = [
  { name: 'Walmart', logo: 'https://www.bluebookservices.com/wp-content/uploads/2025/03/walmart-logo-2025-narrow-scaled-1.jpg' },
  { name: 'github', logo: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'},
  { name: 'GeeksForGeeks', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4exfK9w9g_rL_0M-REN0UYKkEhSSDadugw&s' },
  { name: 'Coding Ninjas', logo: 'https://www.codingninjas.com/assets-landing/images/CNLOGO.svg' },
  { name: 'Coding Blocks', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUN3G-YFFBVBHJF3NgOn8qKx3U-OUIjuwO9g&s' },
  { name: 'Cisco', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJDp1wVyd61Rjhg5wUe9Iwnph49PfvqxDUA&s' },
  { name: 'Zebronics', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKt1iCcjMxdjCfqPlQBeNfppi85-EABQ8pw&s' },
  { name: 'Townscript', logo: 'https://www.townscript.com/organize/assets/images/ts-logoBMS.png' },
  { name: 'Wiley', logo: 'https://cdn.freebiesupply.com/logos/large/2x/wiley-2-logo-png-transparent.png' },
];

const Scroller = ({ images, direction, keyPrefix }: { images: { name: string, logo: string }[], direction: "left" | "right", keyPrefix: string }) => {
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";
  const imageList = [...images, ...images];

  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_5%,black_95%,transparent_100%)]">
      <div className={`flex items-center gap-x-8 ${animationClass}`}>
        {imageList.map((sponsor, index) => (
          <div key={`${keyPrefix}-${index}`} className="flex-shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(255,215,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-105 p-4">
              <div className="relative w-full h-full">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PastSponsorsSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .animate-scroll-left {
            animation: scroll-left 60s linear infinite;
          }
        `}
      </style>
      <section className="py-12 mb-24 bg-background sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="mb-4 text-center font-display text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.4)] md:text-6xl md:leading-[1.2]">
            Past Sponsors
          </h2>
          <div className="h-2 mx-auto mb-8 rounded-full w-72 bg-gradient-to-r from-primary via-gray-100 to-primary sm:mb-10 md:mb-12 lg:mb-16"></div>
          <div className="mt-16 md:mt-24">
            <Scroller images={sponsors} direction="left" keyPrefix="sponsors" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PastSponsorsSection;
