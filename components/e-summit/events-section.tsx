import React, { useState, useRef } from 'react';
import Image from 'next/image';

type EventDataType = {
  title: string;
  icon: string | React.ReactNode;
  isImageAsset: boolean;
  description: string;
  insights?: string[];
  buttons?: { text: string; href: string }[];
};

// Data
const eventsData: EventDataType[] = [
  {
    title: 'Founder की बात',
    icon: '/events_esummit/Founder.jpeg',
    isImageAsset: true,
    description: 'Insights from Visionary Leaders',
    insights: [
      'Exclusive insights.',
      'Practical wisdom',
      'Engage in a interactive session',
      'Find inspiration for your journey'
    ]
  },
  {
    title: 'Visdom व्यापार',
    icon: '/events_esummit/Visdom.jpg',
    isImageAsset: true,
    description: 'Master the Market',
    insights: [
      'Interactive session',
      'Insights into market trends, risks, and smart investments',
      'Hands-on experience with StockGrow',
      'Ideal for to built confidence in trading',
      'Practical exercises and real-time analysis'
    ]
  },
  {
    title: 'Unfiltered विचार',
    icon: '/events_esummit/Unfiltered.jpg',
    isImageAsset: true,
    description: 'The Ultimate Debate Showdown',
    insights: [
      'Engaging Debate',
      'Creative Expression through humor, memes, or diplomacy',
      'Interactive & Fun platform',
      'Social Media Recognition',
      'Thought-Provoking Insights'
    ]
  },
  {
    title: 'Startup संगम',
    icon: '/events_esummit/Startup.jpg',
    isImageAsset: true,
    description: 'Where Ideas Meet Impact',
    insights: [
      'Exclusive Startup Expo featuring E-Cell startups',
      'Live Prototypes & Demos showcasing real innovations',
      'Founder Stories',
      'Engaging Conversations with founders & industry experts',
      'Inspiration & Learning'
    ]
  },
  {
    title: 'Pitch मंच',
    icon: '/events_esummit/Pitch.jpg',
    isImageAsset: true,
    description: 'Unleash Your Marketing Creating',
    insights: [
      'Marketing Showdown',
      'Think Creativity',
      'Hands-on Experience',
      'Blend creativity with smart branding',
      'Turn concepts into impactful promotions'
    ]
  },
  {
    title: 'Xpression जंक्शन',
    icon: '/events_esummit/Xpression.jpg',
    isImageAsset: true,
    description: ' Create, Inspire, Elevate',
    insights: [
      'Creative Content Challenge',
      'Showcase Impact',
      'Unleash Creativity',
      'Get featured on E-Cell\'s official page',
      'Spark conversations with impactful ideas'
    ]
  }
];

// Card Component
const EventCard = ({ event, expanded, onExpand }: { event: EventDataType; expanded: boolean; onExpand: () => void }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  React.useEffect(() => {
    if (isMobile && expanded && contentRef.current) {
      const h = contentRef.current.scrollHeight;
      requestAnimationFrame(() => setContentHeight(h));
    }
    if (!expanded) setContentHeight(0);
  }, [expanded, isMobile, event]);

  const Details = () => (
    <>
      <p className="mb-2 text-xs sm:text-sm lg:text-base font-medium leading-relaxed text-center text-muted-foreground">{event.description}</p>
      {event.insights && (
        <ul className="space-y-2 text-xs leading-relaxed text-muted-foreground sm:text-sm lg:text-base">
          {event.insights.map((insight, i) => (
            <li key={i} className="flex items-start">
              <span className="flex-shrink-0 mr-2 text-base font-bold leading-none text-primary sm:mr-3 sm:text-lg lg:text-xl" style={{ marginTop: '2px' }}>•</span>
              <span className="flex-1 leading-relaxed">{insight}</span>
            </li>
          ))}
        </ul>
      )}
      {/* {event.buttons && (
        <div className="flex items-center justify-center gap-2 mt-3">
          {event.buttons.map(btn => (
            <a key={btn.text} href={btn.href} className="flex-1 px-2 py-2 text-xs font-medium text-center transition-all duration-300 bg-black border rounded-lg border-primary text-foreground hover:bg-primary hover:text-black shadow-md">{btn.text}</a>
          ))}
        </div>
      )} */}
    </>
  );

  // Mobile layout: image fixed, details expand below
  if (isMobile) {
    return (
      <div className={`relative border ring-1 ring-black/5 bg-card hover:shadow-lg rounded-2xl flex flex-col shadow-lg overflow-hidden transition-all duration-500 ${expanded ? 'h-auto' : 'h-[260px]'} ${expanded ? 'z-40' : 'z-0'}`} aria-expanded={expanded}>
        <div className="relative h-[260px] w-full">
          {event.isImageAsset && (
            <>
              <Image src={event.icon as string} alt={event.title} fill sizes="100vw" className="object-cover" priority={expanded} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
            </>
          )}
          <h3
            className={`absolute inset-x-2 px-2 text-2xl font-extrabold text-white text-center drop-shadow-lg transition-all duration-300 ${expanded ? 'bottom-3 translate-y-0' : 'top-1/2 -translate-y-1/2'}`}
            style={{ fontFamily: 'system-ui, -apple-system, \"Segoe UI\", \"Noto Sans Devanagari\", sans-serif' }}
          >
            {event.title}
          </h3>
          <button type="button" onClick={onExpand} className={`absolute top-2 right-2 z-10 px-3 py-1 text-[11px] rounded-md border border-black/50 backdrop-blur-sm transition-colors duration-300 ${expanded ? 'bg-black text-white' : 'bg-black/60 text-white/80 hover:bg-black/50 hover:text-white'}`}>{expanded ? 'Close' : 'More'}</button>
        </div>
        <div ref={contentRef} className="overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out" style={{ maxHeight: expanded ? contentHeight : 0, opacity: expanded ? 1 : 0, transform: expanded ? 'translateY(0)' : 'translateY(-6px)' }}>
          <div className="p-4 bg-black/85 backdrop-blur-sm border-t border-white/40">
            <Details />
          </div>
        </div>
      </div>
    );
  }

  // Desktop / tablet layout with hover overlay
  return (
    <div className={`relative bg-black border ring-1 ring-black/5 bg-card hover:shadow-lg rounded-2xl flex flex-col justify-start h-[260px] sm:h-[320px] lg:h-[340px] transition-all duration-500 cursor-pointer shadow-lg overflow-hidden ${expanded ? 'z-50 scale-105 shadow-2xl' : 'z-0 scale-100'}`} onMouseEnter={onExpand} onMouseLeave={onExpand} aria-expanded={expanded}>
      {event.isImageAsset && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <Image src={event.icon as string} alt={event.title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover" priority={expanded} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        <h3 className="text-2xl font-extrabold leading-tight tracking-wide text-white sm:text-3xl lg:text-4xl drop-shadow-lg whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: 'system-ui, -apple-system, \"Segoe UI\", \"Noto Sans Devanagari\", sans-serif' }}>{event.title}</h3>
        {!event.isImageAsset && <div className="mt-4 flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">{event.icon}</div>}
      </div>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-black/95 via-[#111111]/95 to-black/95 border-2 border-primary shadow-2xl transition-all duration-500 flex flex-col items-center justify-center px-3 py-6 text-center pointer-events-none ${expanded ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95'}`} style={{ zIndex: expanded ? 100 : -1, boxShadow: expanded ? '0 16px 48px 0 rgba(128,0,255,0.45)' : undefined }}>
        <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-center text-white underline decoration-4 decoration-primary underline-offset-8 mb-5 whitespace-nowrap overflow-hidden text-ellipsis max-w-full" style={{ fontFamily: 'system-ui, -apple-system, \"Segoe UI\", \"Noto Sans Devanagari\", sans-serif' }}>{event.title}</h3>
        <div className="max-h-[80%] overflow-y-auto pr-2 custom-scrollbar w-full">
          <p className="mb-3 text-xs sm:text-sm font-medium leading-relaxed text-muted-foreground">{event.description}</p>
          {event.insights && (
            <ul className="space-y-2 text-left text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {event.insights.map((insight, i) => (
                <li key={i} className="grid grid-cols-[14px_1fr] items-start">
                  <span className="text-primary font-bold leading-none mt-[2px]">•</span>
                  <span className="block">{insight}</span>
                </li>
              ))}
            </ul>
          )}
          {/* {event.buttons && (
            <div className="flex items-center justify-center gap-2 mt-4">
              {event.buttons.map(btn => (
                <a key={btn.text} href={btn.href} className="flex-1 px-3 py-2 text-xs font-medium text-center transition-all duration-300 bg-black border rounded-lg border-primary text-foreground hover:bg-primary hover:text-black shadow-md whitespace-nowrap">{btn.text}</a>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

// Section Component
const EventsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="events" className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, \"Segoe UI\", \"Noto Sans Devanagari\", sans-serif' }}>
            E-Summit Events
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base lg:text-lg max-w-2xl mx-auto">
            Explore the dynamic lineup of sessions and interactive experiences.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event, idx) => (
            <EventCard
              key={event.title}
              event={event}
              expanded={expandedIndex === idx}
              onExpand={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
