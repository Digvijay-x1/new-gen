import Image from "next/image";

const investorsRow1 = [
  "https://2k21.s3.amazonaws.com/investor_photos/Gaurav_Munjal.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Ajeet_Khuranav2.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Sanjay_Mehta.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Sapan_Kumar.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Saurabh_Goel.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Ronnie_Screwvala.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Vikram_Gupta.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Kunal_Shah.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Ankur_Warikoo.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Sujeet_Kumar.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Rajan_Anandan_Sequoia.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Anupam_Mittal.jpg",
];

const investorsRow2 = [
  "https://2k21.s3.amazonaws.com/investor_photos/Padmaja_Ruparel.jpeg",
  "https://2k21.s3.amazonaws.com/investor_photos/Ritesh_Malik.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Sandeep_Jain.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Sanjay_Mehta_2.jpeg",
  "https://2k21.s3.amazonaws.com/investor_photos/Dhruv_nath.png",
  "https://2k21.s3.amazonaws.com/investor_photos/Ajay_Chaudhary.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/image.png",
  "https://2k21.s3.amazonaws.com/investor_photos/Sameer_Brij_Verma.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Anand_Lunia.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Sanjay_Nath.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Anirudh_Damani.jpg",
  "https://2k21.s3.amazonaws.com/investor_photos/Ankush_Singla.jpg",
];

// NOTE: Keyframes for animations should be defined in `globals.css`
/*
@keyframes scroll-left {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - 2rem)); }
}
.animate-scroll-left {
  animation: scroll-left 60s linear infinite;
}

@keyframes scroll-right {
  from { transform: translateX(calc(-100% - 2rem)); }
  to { transform: translateX(0); }
}
.animate-scroll-right {
  animation: scroll-right 60s linear infinite;
}
*/

const Scroller = ({
  images,
  direction,
  keyPrefix,
}: {
  images: string[];
  direction: "left" | "right";
  keyPrefix: string;
}) => {
  // This component relies on `animate-scroll-left` and `animate-scroll-right` classes
  // being defined globally with corresponding keyframes for the infinite scroll effect.
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  const imageList = [...images, ...images];

  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_5%,black_95%,transparent_100%)]">
      <div className={`flex items-center gap-x-8 ${animationClass}`}>
        {imageList.map((src, index) => (
          <div key={`${keyPrefix}-${index}`} className="flex-shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(255,215,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt="Investor"
                  layout="fill"
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InvestorsSection = () => {
  return (
    <section className="bg-background py-20 md:py-28 overflow-x-hidden">
      <div className="container text-center mb-12 md:mb-16">
        <h2
          className="font-bold text-primary"
          style={{ textShadow: "0 0 16px var(--color-primary)" }}
        >
          Investors
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        <Scroller images={investorsRow1} direction="left" keyPrefix="r1" />
        <Scroller images={investorsRow2} direction="right" keyPrefix="r2" />
      </div>
    </section>
  );
};

export default InvestorsSection;