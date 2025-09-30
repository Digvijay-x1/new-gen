import React from 'react';

interface Speaker {
  name: string;
  title: string;
}

const speakersData: Speaker[] = [
  { name: "Travis Kalanick", title: "Co-founder, Uber" },
  { name: "Jordon Belfort", title: "Author, The Wolf of Wall Street" },
  { name: "Aman Gupta", title: "Co-founder, BOAT" },
  { name: "Nitin Gadkari", title: "Union Minister" },
  { name: "Rajat Sharma", title: "Editor In Chief, India Today TV" },
  { name: "Namita Thapar", title: "CEO, Emcure Pharmaceuticals" },
  { name: "Anupam Mittal", title: "Co-founder, Shaadi.com" },
  { name: "Bhavish Aggarwal", title: "Co-founder, OLA" },
  { name: "Ritesh Agarwal", title: "Founder, OYO Rooms" },
  { name: "Anupam Kher", title: "Indian Actor" },
  { name: "Indra Nooyi", title: "Former CEO, Pepsico" },
  { name: "Late Ratan Tata", title: "Former Chairperson, Tata and Sons" },
  { name: "Sonam Wangchuck", title: "Innovator, engineer & Education Reformist" },
  { name: "Ashneer Grover", title: "Former Managing Director, BharatPe" },
  { name: "Nandan Nilekani", title: "Founder & Chairman Infosys" },
];

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="bg-primary rounded-lg overflow-hidden flex flex-col text-primary-foreground">
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg leading-tight h-12 flex items-center">
          {speaker.name}
        </h3>
        <p className="font-body text-sm text-black/90 mt-1 h-16 line-clamp-3">
          {speaker.title}
        </p>
      </div>
      <div className="flex-1 bg-secondary filter grayscale">
        {/* Placeholder for speaker image */}
      </div>
    </div>
  );
};

const PastSpeakersSection = () => {
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 
          className="text-5xl md:text-6xl font-bold text-primary text-center mb-12 lg:mb-16"
          style={{ textShadow: '0 0 12px var(--color-primary)' }}
        >
          Past Speakers
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {speakersData.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PastSpeakersSection;