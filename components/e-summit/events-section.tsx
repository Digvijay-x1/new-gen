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
    icon: <Presentation className="w-28 h-28 text-primary" />,
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
    icon: <DollarSign className="w-28 h-28 text-primary" />,
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
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/startup_expo-26.png?',
    isImageAsset: true,
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
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/mun-27.png?',
    isImageAsset: true,
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
    icon: <Network className="w-28 h-28 text-primary" />,
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
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/images/Competitions-29.png?',
    isImageAsset: true,
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
  <div className="bg-black border border-secondary rounded-2xl p-6 flex flex-col h-[620px] hover:border-primary transition-colors duration-300">
    <div className="flex justify-center items-start mb-6">
      <h3 className="text-foreground font-bold text-4xl tracking-wide leading-tight" 
          style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", "Noto Sans Devanagari", sans-serif' }}>
        {event.title}
      </h3>
      {/* <a href="#" aria-label={`Learn more about ${event.title}`}>
        <ArrowUpRight className="text-foreground w-6 h-6 hover:text-primary transition-colors shrink-0" />
      </a> */}
    </div>

    <div className="flex-grow flex items-center justify-center my-6">
      {event.isImageAsset ? (
        <Image src={event.icon as string} alt={`${event.title} icon`} width={128} height={128} className="w-32 h-32 object-contain" />
      ) : (
        event.icon
      )}
    </div>

    <p className="text-muted-foreground text-2xl leading-relaxed mb-6 font-medium">
      {event.description}
    </p>

    {event.insights && (
      <div className="mb-6 flex-grow">
        <ul className="text-muted-foreground text-lg leading-relaxed space-y-3">
          {event.insights.map((insight, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-3 text-2xl font-bold flex-shrink-0 leading-none" 
                    style={{ marginTop: '2px' }}>
                •
              </span>
              <span className="leading-relaxed flex-1">{insight}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="flex items-center justify-center gap-4 mt-auto">
      {event.buttons && event.buttons.map((button) => (
        <a
          key={button.text}
          href={button.href}
          className="flex-1 text-center border border-secondary rounded-lg py-3 px-5 text-sm font-medium text-foreground bg-black hover:bg-secondary hover:border-primary transition-all duration-300"
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
        <h2 className="text-center font-display font-bold text-primary text-5xl md:text-8xl mb-12 md:mb-16">
          Events
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {eventsData.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;