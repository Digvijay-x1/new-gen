import Image from "next/image";
import { useState, useEffect } from "react";

const WORDS = ["  WORDS WIN ", "  IDEAS DOMINATE "];
const TYPE_SPEED = 150;
const DELETE_SPEED = 75;
const DELAY = 2000;

const TypingEffect = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = WORDS[wordIndex];
      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), DELAY);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }
    };

    const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <p className="pt-4 mx-auto text-xl font-semibold tracking-tight max-w-2xl md:text-2xl text-muted-foreground h-8">
      WHERE {" "}
      <span className="text-primary">{text}</span>
      <span className="text-white animate-pulse">|</span>
    </p>
  );
};


const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector("#about-e-summit");
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
        <div className="w-full h-full bg-black animate-bg-move" />
        <div className="absolute inset-0 bg-gradient-accent opacity-20 polygon-accent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="space-y-6 animate-fade-in">

          <div className="flex items-center justify-center flex-grow w-full">
            <Image
              src={"/Aagaz.png"}
              alt="Aagaz image"
              width={400}
              height={200}
              className="animate-img-float h-auto w-auto max-w-[400px] pl-7"
              style={{ height: 'auto', width: 'auto', maxWidth: 400 }}
              priority
            />
          </div>
          
          <div className="inline-block">
            <div className="mb-2 text-xs font-bold tracking-widest uppercase md:text-base text-primary animate-glow-pulse drop-shadow-lg">
              Annual Flagship Entrepreneurship Festival
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative pb-4 overflow-hidden border-4 shadow-2xl rounded-2xl border-black">
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
                <div className="relative top-0.5 md:top-3 pr-6 text-4xl font-extrabold text-transparent md:text-8xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text drop-shadow-lg">
                  2025
                </div>
              </div>
            </div>
          </div>

          <TypingEffect />

          <div className="text-lg font-bold delay-200 md:text-2xl text-primary-glow drop-shadow-md animate-fade-in">
             November 7 - 9, 2025
          </div>

          <div className="flex flex-col justify-center gap-6 pt-10 sm:flex-row">
            <button
              className="relative px-10 py-4 overflow-hidden text-lg font-semibold text-white transition-all duration-300 transform shadow-lg group rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              onClick={() => {
                const element = document.querySelector("#about-e-summit");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:opacity-100"></span>
              <span className="relative flex items-center justify-center gap-2">
                Learn More
              </span>
            </button>
            <button
              className="px-10 py-4 text-lg font-semibold text-blue-500 transition-all duration-300 transform bg-transparent border-2 border-blue-500 shadow-lg group rounded-xl hover:bg-blue-500 hover:text-white hover:shadow-2xl hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 backdrop-blur-sm"
              onClick={() => {
                const element = document.querySelector("#footer-e-summit");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Contact Us
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
