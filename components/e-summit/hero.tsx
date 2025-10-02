import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector("#prayagraj");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e]/80 via-[#16213e]/60 to-[#0f3460]/80 animate-bg-move" />
        <div className="absolute inset-0 bg-gradient-accent opacity-20 polygon-accent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="mb-2 text-xs font-bold tracking-widest uppercase md:text-base text-primary animate-glow-pulse drop-shadow-lg">
              Annual Flagship Entrepreneurship Festival
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative pb-4 overflow-hidden border-4 shadow-2xl rounded-2xl border-primary/30">
              <div className="flex items-center">
                <div className="flex-grow">
                  <Image
                    src={"/banner.png"}
                    alt="banner image"
                    width={900}
                    height={450}
                    className="w-full h-auto animate-img-float"
                    priority
                  />
                </div>
                <div className="relative pr-6 text-4xl font-extrabold text-transparent md:text-8xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text drop-shadow-lg top-3">
                  2025
                </div>
              </div>
            </div>
          </div>

          <p className="pt-4 mx-auto text-xl font-semibold tracking-tight delay-100 max-2w-2xl md:text-2xl text-muted-foreground animate-fade-in">
            WHERE <span className="text-yellow-400">WORDS WIN</span> &{" "}
            <span className="text-yellow-400">IDEAS DOMINATE!</span>
          </p>

          <div className="text-lg font-bold delay-200 md:text-2xl text-primary-glow drop-shadow-md animate-fade-in">
            IIIT Allahabad <span className="mx-2">|</span> November 7 - 9, 2025
          </div>

          <div className="flex flex-col justify-center gap-6 pt-10 sm:flex-row">
            <button
              className="relative px-10 py-4 overflow-hidden text-lg font-semibold text-white transition-all duration-300 transform shadow-lg group rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              onClick={() => {
                const element = document.querySelector("#esummit");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:opacity-100"></span>
              <span className="relative flex items-center justify-center gap-2">
                <span className="text-xl">🚀</span>
                Learn More
              </span>
            </button>
            <button
              className="px-10 py-4 text-lg font-semibold text-blue-500 transition-all duration-300 transform bg-transparent border-2 border-blue-500 shadow-lg group rounded-xl hover:bg-blue-500 hover:text-white hover:shadow-2xl hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 backdrop-blur-sm"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                  ✉️
                </span>
                Contact Us
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute flex flex-col items-center -translate-x-1/2 cursor-pointer bottom-8 left-1/2 group"
        aria-label="Scroll down"
      >
        <span className="flex items-center justify-center w-12 h-12 transition-all rounded-full shadow-lg animate-bounce">
          <ChevronDown className="w-8 h-8 transition-colors text-primary group-hover:text-secondary" />
        </span>
      </button>
    </section>
  );
};

export default Hero;
