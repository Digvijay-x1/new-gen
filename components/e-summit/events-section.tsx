import React from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  DollarSign,
  Network,
  Sprout,
  Play,
  Presentation,
  Lightbulb,
  TrendingUp,
  Briefcase,
  Mic,
  Copyright,
} from 'lucide-react';

type EventDataType = {
  title: string;
  icon: React.ReactNode | string;
  isImageAsset: boolean;
  description: string;
  buttons: { text: string; href: string }[];
};

const eventsData: EventDataType[] = [
  {
    title: 'The Ten Minute Million',
    icon: <DollarSign className="w-28 h-28 text-primary" />,
    isImageAsset: false,
    description: 'The Ten Minute Million, where a 10-minute pitch can win financial backing and mentorship from esteemed investors.',
    buttons: [
      { text: 'Register', href: '#' },
      { text: 'Website', href: '#' },
    ],
  },
  {
    title: 'Startup Expo',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/startup_expo-26.png?',
    isImageAsset: true,
    description: 'Get a chance to showcase your products to the masses and investors at the largest startup exhibition platform.',
    buttons: [
      { text: 'Register', href: '#' },
      { text: 'Website', href: '#' },
    ],
  },
  {
    title: 'Entremun',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/mun-27.png?',
    isImageAsset: true,
    description: 'A simulation of the United Nations to deliberate on international agendas of entrepreneurship and policy-making.',
    buttons: [
      { text: 'Register', href: '#' },
      { text: 'Website', href: '#' },
    ],
  },
  {
    title: 'Networking Arena',
    icon: <Network className="w-28 h-28 text-primary" />,
    isImageAsset: false,
  description: "It’s a 2-day event for all startups to network with the best mentors, investors and incubators in the ecosystem.",
    buttons: [
      { text: 'Register', href: '#' },
      { text: 'Website', href: '#' },
    ],
  },
  {
    title: 'Competitions',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/Competitions-29.png?',
    isImageAsset: true,
    description: 'An opportunity for aspiring entrepreneurs to put their sharp business acumen and innovative skills to the test.',
    buttons: [{ text: 'Get Notified', href: '#' }],
  },
  {
    title: 'Workshops',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/Workshops-30.png?',
    isImageAsset: true,
    description: 'Get certified by world-class trainers from all over the world in our hands-on, skill-building workshops.',
    buttons: [{ text: 'Get Notified', href: '#' }],
  },
  {
    title: 'I-Hack',
    icon: <Sprout className="w-28 h-28 text-primary" />,
    isImageAsset: false,
    description: 'Hackathons that put your coding skills to work. Solve interesting real-world problems and build innovative solutions.',
    buttons: [{ text: 'Get Notified', href: '#' }],
  },
  {
    title: 'Content Creation Conclave',
    icon: <Play className="w-28 h-28 text-primary fill-primary" />,
    isImageAsset: false,
    description: 'Join CCC to learn how Entrepreneurship & Content Creation relate, and network with top creators.',
    buttons: [{ text: 'Get Notified', href: '#' }],
  },
  {
    title: 'Highlight Session',
    icon: <Presentation className="w-28 h-28 text-primary" />,
    isImageAsset: false,
    description: 'Insightful, enthralling, and interactive talks by some of the most eminent and celebrated personalities.',
    buttons: [{ text: 'Get Notified', href: '#' }],
  },
  {
    title: 'Incubator Summit',
    icon: <Lightbulb className="w-28 h-28 text-primary" />,
    isImageAsset: false,
  description: "Don’t wait for incubation, make it happen only at Incubator Summit with top VCs and accelerator firms.",
    buttons: [
      { text: 'Register', href: '#' },
      { text: 'Website', href: '#' },
    ],
  },
  {
    title: 'Virtual Stock Market',
    icon: <TrendingUp className="w-28 h-28 text-primary" />,
    isImageAsset: false,
    description: 'Learn trading and stock market with Virtual Stock Market, where you get to trade with virtual money in a real market.',
    buttons: [{ text: 'Get Notified', href: '#' }],
  },
  {
    title: 'Internship & Job Fair',
    icon: <Briefcase className="w-28 h-28 text-primary" />,
    isImageAsset: false,
    description: 'A platform for students to gain exposure to the Startup or Corporate ecosystem and secure dream opportunities.',
    buttons: [
      { text: 'Register', href: '#' },
      { text: 'Website', href: '#' },
    ],
  },
  {
    title: 'Media & Entertainment Conclave',
    icon: <Mic className="w-28 h-28 text-primary" />,
    isImageAsset: false,
    description: 'Get ready for global media and entertainment disruption, directly from the leaders pioneering the industry.',
    buttons: [{ text: 'Get Notified', href: '#' }],
  },
  {
    title: 'Influencer Summit',
    icon: <Lightbulb className="w-28 h-28 text-primary" />,
    isImageAsset: false,
    description: 'Beyond likes and follows, this is your chance to build your personal brand and learn from top influencers.',
    buttons: [{ text: 'Get Notified', href: '#' }],
  },
  {
    title: 'Contingent Leader',
    icon: <Copyright className="w-28 h-28 text-primary" />,
    isImageAsset: false,
    description: 'A chance to lead your college contingent, become a part of the E-Summit community and represent your college.',
    buttons: [{ text: 'Website', href: '#' }],
  },
];

const EventCard = ({ event }: { event: EventDataType }) => (
  <div className="bg-black border border-secondary rounded-2xl p-5 flex flex-col h-[450px]">
    <div className="flex justify-between items-start">
      <h3 className="text-foreground font-medium uppercase text-sm tracking-widest leading-snug w-4/5">{event.title}</h3>
      <a href="#" aria-label={`Learn more about ${event.title}`}>
        <ArrowUpRight className="text-foreground w-6 h-6 hover:text-primary transition-colors shrink-0" />
      </a>
    </div>
    
    <div className="flex-grow flex items-center justify-center my-4">
      {event.isImageAsset ? (
        <Image src={event.icon as string} alt={`${event.title} icon`} width={128} height={128} className="w-32 h-32 object-contain" />
      ) : (
        event.icon
      )}
    </div>
    
    <p className="text-muted-foreground text-sm leading-relaxed mb-6 h-16 overflow-hidden">
      {event.description}
    </p>

    <div className="flex items-center justify-center gap-3">
      {event.buttons.map((button) => (
        <a 
          key={button.text} 
          href={button.href} 
          className="flex-1 text-center border border-secondary rounded-lg py-2.5 px-4 text-sm font-normal text-foreground bg-black hover:bg-secondary transition-colors"
        >
          {button.text}
        </a>
      ))}
    </div>
  </div>
);

const EventsSection = () => {
  return (
    <section className="bg-black py-20 lg:py-24">
      <div className="container">
        <h2 className="text-center font-display font-bold text-primary text-5xl md:text-6xl mb-12 md:mb-16">
          Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;