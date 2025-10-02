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
  insights?: string[];
  buttons?: { text: string; href: string }[];
};

const eventsData: EventDataType[] = [
  {
    title: 'Founder की बात',
    icon: '/events_esummit/Founder.jpg',
    isImageAsset: false,
    description: 'Insights from Visionary Leaders',
    insights: [
      'Exclusive insights into the real challenges and successes of trading.',
      'Practical wisdom to help you make informed financial decisions.',
      'Engage in a interactive session filled with discussions and Q&A.',
      'Find inspiration for your journey into the world of investing and trading.'
    ]
    ,
    // buttons: [
    //   { text: 'Register', href: '#' },
    //   { text: 'Learn More', href: '#' },
    // ],
  },
  {
    title: 'Visdom व्यापार',
    icon: '/events_esummit/Visdom.jpg',
    isImageAsset: false,
    description: 'Master the Market',
    insights: [
      'Interactive session with a seasoned stock analyst on trading strategies.',
      'Insights into market trends, risks, and smart investments. ',
      'Hands - on experience with StockGrow.', 'Ideal for to built confidence in trading.',
      'Practical exercises and real- time analysis for effective learning.'
    ],
    // buttons: [
    //   { text: 'Register', href: '#' },
    //   { text: 'Website', href: '#' },
    // ],
  },
  {
    title: 'Unfiltered विचार',
    icon: '/events_esummit/Unfiltered.jpg',
    isImageAsset: false,
    description: 'The Ultimate Debate Showdown',
    insights: [
      'Engaging Debate on famous rivalries.',
      'Creative Expression through humor, memes, or diplomacy.',
      'Interactive & Fun platform to challenge opinions.',
      'Social Media Recognition for top moments on Instagram.',
      'Thought-Provoking Insights to spark meaningful conversations.'
    ],
    // buttons: [
    //   { text: 'Register', href: '#' },
    //   { text: 'Website', href: '#' },
    // ],
  },
  {
    title: 'Startup संगम',
    icon: '/events_esummit/Startup.jpg',
    isImageAsset: false,
    description: 'Where Ideas Meet Impact',
    insights: [
      'Exclusive Startup Expo featuring IIIT Allahabad alumni & E-Cell startups.',
      'Live Prototypes & Demos showcasing real innovations.',
      'Founder Stories on challenges & journeys.',
      'Engaging Conversations with founders & industry experts.',
      'Inspiration & Learning to kickstart your venture.'
    ],
    // buttons: [
    //   { text: 'Register', href: '#' },
    //   { text: 'Website', href: '#' },
    // ],
  },
  {
    title: 'Pitch मंच',
    icon: '/events_esummit/Pitch.jpg',
    isImageAsset: false,
    description: "Unleash Your Marketing Creating",
    insights: [
      'Marketing Showdown: Improvise and reinvent product ads.',
      'Think Creativity: Add a quirky twist to make brands stand out.',
      'Hands-on Experience: Explore real-world marketing strategies.',
      'Blend creativity with smart branding.',
      'Turn concepts into impactful promotions.'
    ],
    // buttons: [
    //   { text: 'Register', href: '#' },
    //   { text: 'Website', href: '#' },
    // ],
  },
  {
    title: 'Xpression जंक्शन',
    icon: '/events_esummit/Xpression.jpg',
    isImageAsset: false,
    description: ' Create, Inspire, Elevate',
    insights: [
      'Creative Content Challenge: Design engaging reels, posts, and stories.',
      'Showcase Impact: Highlight business legends and tech pioneers.',
      'Unleash Creativity: Let your storytelling skills shine.',
      'Get featured on E-Cell’s official page.',
      'Spark conversations with impactful ideas.'
    ],
    // buttons: [{ text: 'Get Notified', href: '#' }],
  }
];

const EventCard = ({ event }: { event: EventDataType }) => (
  <div className="bg-black border border-secondary rounded-2xl p-4 sm:p-6 flex flex-col min-h-[500px] sm:h-[580px] lg:h-[620px] hover:border-primary transition-colors duration-300">
    <div className="flex items-start justify-center mb-4 sm:mb-6">
      <h3 className="text-2xl font-bold leading-tight tracking-wide text-center text-foreground sm:text-3xl lg:text-4xl" 
          style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", "Noto Sans Devanagari", sans-serif' }}>
        {event.title}
      </h3>
      {/* <a href="#" aria-label={`Learn more about ${event.title}`}>
        <ArrowUpRight className="w-6 h-6 transition-colors text-foreground hover:text-primary shrink-0" />
      </a> */}
    </div>

    <div className="flex items-center justify-center flex-grow my-4 sm:my-6">
      {event.isImageAsset ? (
        <Image 
          src={event.icon as string} 
          alt={`${event.title} icon`} 
          width={128} 
          height={128} 
          className="object-contain w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32" 
        />
      ) : (
        <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center [&>svg]:!w-full [&>svg]:!h-full">
          {event.icon}
        </div>
      )}
    </div>

    <p className="mb-4 text-lg font-medium leading-relaxed text-center text-muted-foreground sm:text-xl lg:text-2xl sm:mb-6">
      {event.description}
    </p>

    {event.insights && (
      <div className="flex-grow mb-4 sm:mb-6">
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg sm:space-y-3">
          {event.insights.map((insight, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 mr-2 text-lg font-bold leading-none text-primary sm:mr-3 sm:text-xl lg:text-2xl" 
                    style={{ marginTop: '2px' }}>
                •
              </span>
              <span className="flex-1 leading-relaxed">{insight}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="flex items-center justify-center gap-3 mt-auto sm:gap-4">
      {event.buttons && event.buttons.map((button) => (
        <a
          key={button.text}
          href={button.href}
          className="flex-1 px-3 py-2 text-xs font-medium text-center transition-all duration-300 bg-black border rounded-lg border-secondary sm:py-3 sm:px-5 sm:text-sm text-foreground hover:bg-secondary hover:border-primary"
        >
          {button.text}
        </a>
      ))}
    </div>
  </div>
);

const EventsSection = () => {
  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-bold text-center font-display text-primary sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:mb-10 md:mb-12 lg:mb-16">
          Events
        </h2>
        <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 sm:gap-8 lg:gap-10 max-w-7xl">
          {eventsData.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;