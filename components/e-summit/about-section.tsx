import React from "react";

const AboutSection = () => {
  
  return (
    
    <section
      id="about-e-summit"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:py-28"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute w-64 h-64 delay-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-yellow-400/10 blur-3xl animate-pulse"></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative max-w-6xl">
            {/* Enhanced Edition Badge */}
            <div className="inline-block px-8 py-3 mb-6 border border-white rounded-full">
              <span className="text-xl font-bold text-purple-400 md:text-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text">
                4th Edition of
              </span>
            </div>

            {/* Main Title with Enhanced Effects */}
            <div className="relative mb-8">
              <h1 className="font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-transparent bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text mb-4 transform hover:scale-105 transition-all duration-500 relative group">
                E-SUMMIT
                <div className="absolute inset-0 transition-all duration-500 -skew-x-12 opacity-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent group-hover:opacity-100 blur-xl"></div>
                <div className="absolute inset-0 transition-all duration-700 delay-200 skew-x-12 opacity-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent group-hover:opacity-100 blur-xl"></div>
              </h1>

              {/* Animated Underline */}
              <div className="h-2 mx-auto mb-8 rounded-full w-72 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 sm:mb-10 md:mb-12 lg:mb-16"></div>
            </div>
          </div>
          {/* Enhanced Content Cards */}
          <div className="grid max-w-5xl gap-8 mt-4 md:grid-cols-1 lg:grid-cols-1">
            <div className="p-8 transition-all duration-300 border-4 shadow-xl group bg-gradient-to-br from-slate-800/40 via-slate-700/40 to-slate-800/40 backdrop-blur-md rounded-2xl border-white/50 hover:shadow-2xl hover:-translate-y-2">
              <p className="text-lg leading-relaxed transition-colors duration-300 md:text-xl text-slate-200 group-hover:text-white">
                Experience{" "}
                <span className="font-bold text-yellow-400">
                  &apos;Founder ki Baat&apos;
                </span>{" "}
                and{" "}
                <span className="font-bold text-yellow-400">
                  &apos;Xpress Junction&apos;
                </span>
                , where industry leaders share their journeys. With interactive
                sessions and networking opportunities, E-Summit 2025 is a
                must-attend for entrepreneurs, investors, and business
                enthusiasts ready to learn, connect, and grow.
              </p>
            </div>

            <div className="p-8 transition-all duration-300 delay-100 border-4 shadow-xl group bg-gradient-to-br from-slate-800/40 via-slate-700/40 to-slate-800/40 backdrop-blur-md rounded-2xl border-white/50 hover:shadow-2xl hover:-translate-y-2">
              <p className="text-lg leading-relaxed transition-colors duration-300 md:text-xl text-slate-200 group-hover:text-white">
                IIIT Allahabad will host E-Summit 2025 on{" "}
                <span className="font-bold text-black highlight-blue">November 7-9</span>, a
                premier entrepreneurial conclave featuring insightful sessions,
                competitions, and networking. Designed to spark innovation and
                leadership, it&apos;s the perfect platform for entrepreneurs,
                investors, and business enthusiasts.
              </p>
            </div>

            <div className="p-8 transition-all duration-300 delay-200 border-4 shadow-xl group bg-gradient-to-br from-slate-800/40 via-slate-700/40 to-slate-800/40 backdrop-blur-md rounded-2xl border-white/50 hover:shadow-2xl hover:-translate-y-2">
              <p className="text-lg leading-relaxed transition-colors duration-300 md:text-xl text-slate-200 group-hover:text-white">
                Join us on{" "}
                <span className="font-bold text-black highlight-blue">
                  November 7th - 9th, 2025
                </span>
                , as we set bold new standards for
                <span className="font-bold text-black highlight-blue">Innovation, leadership, and purposeful change .</span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
    </section>
  );
};

export default AboutSection;
