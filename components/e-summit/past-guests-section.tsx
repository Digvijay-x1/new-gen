import React from 'react';
import Image from 'next/image';

interface Speaker {
  name: string;
  titleLine1?: string;
  titleLine2?: string;
}

const speakersData: Speaker[] = [
  { name: "Sandeep Jain", titleLine1: "Founder,", titleLine2: "Geeks for Geeks" },
  { name: "Ajit Balakrishnan", titleLine1: "Founder", titleLine2: 'Rediffmail' },
  { name: "Shagun Sodhani", titleLine1: "Research", titleLine2: "Meta AI" },
  { name: "Nithyasri Srivathsan", titleLine1: "Founder", titleLine2: "Rediffmail" },
  { name: "Ram Gopal", titleLine1: "CEO", titleLine2: "Barclays Bank of India" },
  { name: "Fabio Moioli", titleLine1: "Microsoft AI", titleLine2: "Faculty at Harvard" },
  { name: "Zamyla Chan", titleLine1: "Associative Director", titleLine2: "University of Toronto" },
  { name: "Artus\nKrohn-Grimberghe", titleLine1: "CEO, LytiQ GmBH" },
  { name: "Shiv Aggarwal", titleLine1: "CEO, EarthId" },
  { name: "Shesha Raghunathan", titleLine1: "Ambassador,IBM Quantum" },
  { name: "Shayan Garani", titleLine1: "Professor", titleLine2: "Indian Institute of Science" },
  { name: "Manas Mukharjee", titleLine1: "Quantum Expert", titleLine2: "National University of Singapore" },
  { name: "Sandeep Kochhar", titleLine1: "Co-Founder", titleLine2: "BlewMinds" },
  { name: "Kavvya Reddy", titleLine1: "Founder & Ex-Y Combinator", titleLine2: "Akula Design Club" },
  { name: "Anil Chikara", titleLine1: "Former Chairman", titleLine2: "Startup India" },
  { name: "Samay Raina", titleLine1: "Stand-up comedian" },
  { name: "Shivani Maheshwari", titleLine1: "Co-founder", titleLine2: "Clorik & IIIT Allahabad alumna" },
  { name: "Jaspreet Singh", titleLine1: "Stand-up comedian" },
  { name: "Prof. David Aaker", titleLine1: "Branding Guru", titleLine2: "USA" },
  { name: "Prof. Jagdish Sheth", titleLine1: "Customer Behaviour", titleLine2: "Expert, USA" },
  { name: "Prof. V-Kumar", titleLine1: "Customer Engagement Expert", titleLine2: "USA" },
  { name: "Russ Klein", titleLine1: "President, American Marketing", titleLine2: "Association, USA" },
  { name: "Nancy Lee", titleLine1: "Social Marketing & Co-author of Prof.Kotler", titleLine2: "USA" },
  { name: "Sadia Kibria", titleLine1: "Co-author of Sociopreneurship", titleLine2: "USA" },
];

const getSpeakerImageUrl = (speaker: Speaker, index: number) => {
  const seed = encodeURIComponent(`${speaker.name}-${index}`);
  return `https://picsum.photos/seed/${seed}/600/600`;
};

const SpeakerCard = ({ speaker, index }: { speaker: Speaker; index: number }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 bg-card">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={getSpeakerImageUrl(speaker, index)}
          alt={speaker.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transform transition duration-500 ease-out scale-100 grayscale group-hover:grayscale-0 group-hover:scale-105"
          priority={index < 4}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-white">
          <h3 className="font-display font-semibold text-lg leading-tight text-white drop-shadow-sm">
            {speaker.name}
          </h3>
          <div className="mt-0.5 space-y-0.5">
            {speaker.titleLine1 && (
              <p className="font-body text-sm/5 text-white/90">{speaker.titleLine1}</p>
            )}
            {speaker.titleLine2 && (
              <p className="font-body text-sm/5 text-white/90">{speaker.titleLine2}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PastQuestsSection = () => {
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2
          className="text-5xl md:text-8xl font-bold text-primary text-center mb-12 lg:mb-16"
          style={{ textShadow: '0 0 12px var(--color-primary)' }}
        >
          Past Speakers
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {speakersData.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PastQuestsSection;