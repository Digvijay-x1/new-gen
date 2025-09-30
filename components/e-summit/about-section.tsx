import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-bold text-primary text-[3rem] md:text-[4rem] leading-[1.2]">
            21<sup className="font-bold text-[1.75rem] md:text-[2.25rem] align-super -top-4 md:-top-6 relative inline-block">st</sup> Edition of
            <br />
            E-Summit
          </h2>
          <p className="mt-12 text-lg font-body text-foreground max-w-4xl mx-auto leading-relaxed">
            The 21st edition of E-Summit: Deciphering the Labyrinth - Asia’s largest business conclave - is poised to make history, igniting groundbreaking ideas and visionary solutions. This year, we invite those navigating the complex maze of life to step into E-Summit, where challenges are decoded into opportunities and clarity lights the path forward.
          </p>
          <p className="mt-6 text-lg font-body text-foreground max-w-4xl mx-auto leading-relaxed">
            Join us on December 11th & 12th, 2025, as we set bold new standards for innovation, leadership, and purposeful change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;