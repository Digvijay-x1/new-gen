import React from 'react';
import Image from 'next/image';

interface Speaker {
  name: string;
  titleLine1?: string;
  titleLine2?: string;
  imageUrl?: string;
}

const speakersData: Speaker[] = [
  { name: "Sandeep Jain", titleLine1: "Founder,", titleLine2: "Geeks for Geeks", imageUrl: "/past-guests/sandeep.jpg" },
  { name: "Ajit Balakrishnan", titleLine1: "Founder", titleLine2: "Rediffmail", imageUrl: "/past-guests/ajit.jpg" },
  { name: "Shagun Sodhani", titleLine1: "Research", titleLine2: "Meta AI", imageUrl: "/past-guests/shagun.jpg" },
  { name: "Nithyasri Srivathsan", titleLine1: "Founder", titleLine2: "Rediffmail", imageUrl: "/past-guests/nithyasri.jpg" },
  { name: "Ram Gopal", titleLine1: "CEO", titleLine2: "Barclays Bank of India", imageUrl: "/past-guests/ram.jpg" },
  { name: "Fabio Moioli", titleLine1: "Microsoft AI", titleLine2: "Faculty at Harvard", imageUrl: "/past-guests/fabio.jpg" },
  { name: "Zamyla Chan", titleLine1: "Associative Director", titleLine2: "University of Toronto", imageUrl: "/past-guests/zamyla.jpg" },
  { name: "Artus Krohn-Grimberghe", titleLine1: "CEO, LytiQ GmBH", imageUrl: "/past-guests/artus.jpg" },
  { name: "Shiv Aggarwal", titleLine1: "CEO, EarthId", imageUrl: "/past-guests/shiv.jpg" },
  { name: "Shesha Raghunathan", titleLine1: "Ambassador,IBM Quantum", imageUrl: "/past-guests/shesha.jpg" },
  { name: "Shayan Garani", titleLine1: "Professor", titleLine2: "Indian Institute of Science", imageUrl: "/past-guests/shayan.jpg" },
  { name: "Manas Mukharjee", titleLine1: "Quantum Expert", titleLine2: "National University of Singapore", imageUrl: "/past-guests/manas.jpg" },
  { name: "Sandeep Kochhar", titleLine1: "Co-Founder", titleLine2: "BlewMinds", imageUrl: "/past-guests/kochhar.jpg" },
  { name: "Kavvya Reddy", titleLine1: "Founder & Ex-Y Combinator", titleLine2: "Akula Design Club", imageUrl: "/past-guests/kavvya.jpg" },
  { name: "Anil Chikara", titleLine1: "Former Chairman", titleLine2: "Startup India", imageUrl: "/past-guests/anil.jpg" },
  { name: "Samay Raina", titleLine1: "Stand-up comedian", imageUrl: "/past-guests/samay.jpg" },
  { name: "Shivani Maheshwari", titleLine1: "Co-founder", titleLine2: "Clorik & IIIT Allahabad alumna", imageUrl: "/past-guests/shivani.jpg" },
  { name: "Jaspreet Singh", titleLine1: "Stand-up comedian", imageUrl: "/past-guests/jaspreet.jpg" },
  { name: "Prof. David Aaker", titleLine1: "Branding Guru", titleLine2: "USA", imageUrl: "/past-guests/david.jpg" },
  { name: "Prof. Jagdish Sheth", titleLine1: "Customer Behaviour", titleLine2: "Expert, USA", imageUrl: "/past-guests/jagdish.jpg" },
  { name: "Prof. V-Kumar", titleLine1: "Customer Engagement Expert", titleLine2: "USA", imageUrl: "/past-guests/vkumar.jpg" },
  { name: "Russ Klein", titleLine1: "President, American Marketing", titleLine2: "Association, USA", imageUrl: "/past-guests/russ.jpg" },
  { name: "Nancy Lee", titleLine1: "Social Marketing & Co-author of Prof.Kotler", titleLine2: "USA", imageUrl: "/past-guests/nancy.jpg" },
  { name: "Sadia Kibria", titleLine1: "Co-author of Sociopreneurship", titleLine2: "USA", imageUrl: "/past-guests/sadia.jpg" },
];

const getSpeakerImageUrl = (speaker: Speaker, index: number) => {
  return speaker.imageUrl || `https://picsum.photos/seed/${encodeURIComponent(`${speaker.name}-${index}`)}/600/600`;
};

const SpeakerCard = ({ speaker, index }: { speaker: Speaker; index: number }) => {
  return (
    <div className="overflow-hidden transition-all duration-300 shadow-xl group rounded-3xl ring-1 ring-black/5 bg-card hover:shadow-2xl">
      <div className="relative w-full overflow-hidden aspect-square">
        <Image
          src={getSpeakerImageUrl(speaker, index)}
          alt={speaker.name}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 24vw, (min-width: 768px) 45vw, (min-width: 640px) 60vw, 100vw"
          className="object-cover transition duration-500 ease-out transform scale-100 grayscale group-hover:grayscale-0 group-hover:scale-105"
          priority={index < 8}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-4 md:p-5">
          <h3 className="text-sm font-semibold leading-tight text-white font-display sm:text-base md:text-base drop-shadow-sm">
            {speaker.name}
          </h3>
          <div className="mt-1 space-y-0.5">
            {speaker.titleLine1 && (
              <p className="text-xs leading-tight font-body sm:text-sm text-white/90">{speaker.titleLine1}</p>
            )}
            {speaker.titleLine2 && (
              <p className="text-xs leading-tight font-body sm:text-sm text-white/90">{speaker.titleLine2}</p>
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
      <section className="container px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16 md:py-20 lg:py-24">
        <h2
          className="mb-4 text-3xl font-bold text-center text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          style={{ textShadow: '0 0 12px var(--color-primary)' }}
        >
          Past Guests
        </h2>
        <div className="h-2 mx-auto mb-8 rounded-full w-72 bg-gradient-to-r from-primary via-gray-100 to-primary sm:mb-10 md:mb-12 lg:mb-24"></div>
        <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
          {speakersData.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PastQuestsSection;
