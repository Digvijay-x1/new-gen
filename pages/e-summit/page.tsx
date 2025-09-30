import HeroSection from '@/components/e-summit/hero-section';
import AboutSection from '@/components/e-summit/about-section';
import PhotoGridSection from '@/components/e-summit/photo-grid-section';
import StatisticsSection from '@/components/e-summit/statistics-section';
import EventsSection from '@/components/e-summit/events-section';
import PastSpeakersSection from '@/components/e-summit/past-speakers-section';
import PastSponsorsSection from '@/components/e-summit/past-sponsors-section';
import InvestorsSection from '@/components/e-summit/investors-section';
import FooterSection from '@/components/e-summit/footer-section';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PhotoGridSection />
      <StatisticsSection />
      <EventsSection />
      <PastSpeakersSection />
      <PastSponsorsSection />
      <InvestorsSection />
      <FooterSection />
    </main>
  );
}