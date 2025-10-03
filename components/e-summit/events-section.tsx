import React from 'react';
import Image from 'next/image';

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
    icon: '/events/founder.jpg',
    isImageAsset: true,
    description: 'Insights from Visionary Leaders',
    insights: [
      'Exclusive insights into the real challenges and successes of trading.',
      'Practical wisdom to help you make informed financial decisions.',
      'Engage in a interactive session filled with discussions and Q&A.',
      'Find inspiration for your journey into the world of investing and trading.'
    ],
  },
  {
    title: 'Visdom व्यापार',
    icon: '/events/visdom.jpg',
    isImageAsset: true,
    description: 'Master the Market',
    insights: [
      'Interactive session with a seasoned stock analyst on trading strategies.',
      'Insights into market trends, risks, and smart investments.',
      'Hands-on experience with StockGrow.',
      'Ideal to build confidence in trading.',
      'Practical exercises and real-time analysis for effective learning.'
    ],
  },
  {
    title: 'Unfiltered विचार',
    icon: '/events/unfiltered.jpg',
    isImageAsset: true,
    description: 'The Ultimate Debate Showdown',
    insights: [
      'Engaging Debate on famous rivalries.',
      'Creative Expression through humor, memes, or diplomacy.',
      'Interactive & Fun platform to challenge opinions.',
      'Social Media Recognition for top moments on Instagram.',
      'Thought-Provoking Insights to spark meaningful conversations.'
    ],
  },
  {
    title: 'Startup संगम',
    icon: '/events/startup.jpg',
    isImageAsset: true,
    description: 'Where Ideas Meet Impact',
    insights: [
      'Exclusive Startup Expo featuring IIIT Allahabad alumni & E-Cell startups.',
      'Live Prototypes & Demos showcasing real innovations.',
      'Founder Stories on challenges & journeys.',
      'Engaging Conversations with founders & industry experts.',
      'Inspiration & Learning to kickstart your venture.'
    ],
  },
  {
    title: 'Pitch मंच',
    icon: '/events/pitch.jpg',
    isImageAsset: true,
    description: 'Unleash Your Marketing Creating',
    insights: [
      'Marketing Showdown: Improvise and reinvent product ads.',
      'Think Creativity: Add a quirky twist to make brands stand out.',
      'Hands-on Experience: Explore real-world marketing strategies.',
      'Blend creativity with smart branding.',
      'Turn concepts into impactful promotions.'
    ],
  },
  {
    title: 'Xpression जंक्शन',
    icon: '/events/Xpression.jpg',
    isImageAsset: true,
    description: 'Create, Inspire, Elevate',
    insights: [
      'Creative Content Challenge: Design engaging reels, posts, and stories.',
      'Showcase Impact: Highlight business legends and tech pioneers.',
      'Unleash Creativity: Let your storytelling skills shine.',
      'Get featured on E-Cell’s official page.',
      'Spark conversations with impactful ideas.'
    ],
  }
];

const EventCard = ({ event }: { event: EventDataType }) => (
  <div className="bg-black border border-secondary rounded-2xl p-4 sm:p-6 flex flex-col overflow-hidden min-h-[540px] sm:min-h-[620px] lg:min-h-[660px] h-auto hover:border-primary transition-colors duration-300">
    <div className="flex items-start justify-center mb-4 sm:mb-6">
      <h3
        className="text-2xl font-bold leading-tight tracking-wide text-center text-white underline decoration-4 decoration-purple-400 underline-offset-8 text-foreground sm:text-3xl lg:text-4xl"
        style={{ fontFamily: 'system-ui, -apple-system, \"Segoe UI\", \"Noto Sans Devanagari\", sans-serif' }}
      >
        {event.title}
      </h3>
    </div>

    <div className="flex items-center justify-center flex-grow my-4 sm:my-6">
      {event.isImageAsset && typeof event.icon === 'string' ? (
        <div className="flex items-center justify-center w-full h-full overflow-hidden p-2">
          <Image
            src={event.icon as string}
            alt={`${event.title} poster`}
            width={224}
            height={224}
            className="object-contain w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 max-w-full max-h-full"
            sizes="(min-width: 1280px) 14rem, (min-width: 640px) 11rem, 9rem"
          />
        </div>
      ) : (
        <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 flex items-center justify-center [&>svg]:!w-full [&>svg]:!h-full">
          {event.icon}
        </div>
      )}
    </div>

    <p className="mb-4 text-base font-medium leading-snug text-center text-muted-foreground sm:text-lg lg:text-xl sm:mb-6 line-clamp-2">
      {event.description}
    </p>

    {event.insights && (
      <div className="flex-grow mb-4 sm:mb-6 overflow-y-auto">
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg sm:space-y-3">
          {event.insights.map((insight, index) => (
            <li key={index} className="flex items-start">
              <span
                className="flex-shrink-0 mr-2 text-lg font-bold leading-none text-primary sm:mr-3 sm:text-xl lg:text-2xl"
                style={{ marginTop: '2px' }}
              >
                •
              </span>
              <span className="flex-1 leading-relaxed break-words">{insight}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="flex items-center justify-center gap-3 mt-auto sm:gap-4">
      {event.buttons &&
        event.buttons.map((button) => (
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
        <h2 className="mb-4 text-4xl font-bold text-center text-white font-display md:text-6xl">
          Events
        </h2>
        <div className="h-2 mx-auto mb-8 rounded-full w-52 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 sm:mb-10 md:mb-12 lg:mb-20"></div>
        <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-2 sm:gap-8 lg:gap-12 max-w-6xl">
          {eventsData.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
