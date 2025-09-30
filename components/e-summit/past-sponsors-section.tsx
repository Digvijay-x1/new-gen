import React from 'react';

const PastSponsorsSection = () => {
  return (
    <section className="bg-background py-20 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center font-display text-5xl font-bold text-primary drop-shadow-[0_0_15px_rgba(255,215,0,0.4)] md:text-[4rem] md:leading-[1.2]">
          Past Sponsors
        </h2>
        <div className="mt-16 min-h-[200px] md:mt-24">
          <p className="font-body text-sm text-muted-foreground">
            Sponsors content loading...
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastSponsorsSection;