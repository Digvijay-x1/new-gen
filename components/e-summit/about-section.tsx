import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-background md:py-28">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl -z-10"></div>

            <div className="absolute inset-0 overflow-hidden -z-5">
              <div className="absolute w-2 h-2 rounded-full opacity-75 top-10 left-1/4 bg-primary animate-ping"></div>
              <div className="absolute w-1 h-1 delay-300 rounded-full top-1/3 right-1/4 bg-accent animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-500"></div>
              <div className="absolute w-1 h-1 delay-700 rounded-full top-1/2 right-1/3 bg-accent animate-ping"></div>
              <div className="absolute w-2 h-2 delay-1000 rounded-full bottom-1/4 right-1/5 bg-primary animate-pulse"></div>
              <div className="absolute w-1 h-1 delay-150 rounded-full top-1/4 left-1/5 bg-accent animate-bounce"></div>
            </div>

            <h2 className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-[3rem] md:text-[5rem] leading-[1.1] mb-4 relative">
              4<sup className="font-bold text-primary text-[1.75rem] md:text-[2.5rem] align-super -top-4 md:-top-8 relative inline-block animate-pulse">th</sup> Edition of
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-xl -z-10 animate-pulse"></div>
            </h2>

            <div className="relative overflow-hidden">
              <h1 className="font-display font-black text-[4rem] md:text-[6rem] leading-[0.9] text-foreground mb-6 transform hover:scale-105 transition-transform duration-300 relative">
                E-SUMMIT
                <div className="absolute inset-0 transition-opacity duration-300 -skew-x-12 opacity-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer hover:opacity-100"></div>
              </h1>
              <div className="w-32 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"></div>
            </div>
          </div>
          <p className="max-w-4xl mx-auto mt-12 text-lg leading-relaxed font-body text-foreground">
            Experience &apos;Founder ki Baat&apos; and &apos;Xpress Junction&apos;, where industry leaders share their journeys. With interactive sessions and networking opportunities, E-Summit 2025 is a must-attend for entrepreneurs, investors, and business enthusiasts ready to learn, connect, and grow.</p>
          <p className="max-w-4xl mx-auto mt-6 text-lg leading-relaxed font-body text-foreground">
            IIIT Allahabad will host E-Summit 2025 on November 7-9, a premier entrepreneurial conclave featuring insightful sessions, competitions, and networking. Designed to spark innovation and leadership, it’s the perfect platform for entrepreneurs, investors, and business enthusiasts.
          </p>
          <p className="max-w-4xl mx-auto mt-6 text-lg leading-relaxed font-body text-foreground">
            Join us on November 7th - 8th, 2025, as we set bold new standards for innovation, leadership, and purposeful change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;