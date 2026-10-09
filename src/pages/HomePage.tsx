import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { AboutPreview } from '../components/home/AboutPreview';
import { PracticeAreasSection } from '../components/home/PracticeAreasSection';
import { FeaturedPracticeArea } from '../components/home/FeaturedPracticeArea';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { ExperiencePreview } from '../components/home/ExperiencePreview';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { InsightsPreview } from '../components/home/InsightsPreview';
import { FAQSection } from '../components/home/FAQSection';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustStrip />
      <AboutPreview />
      <PracticeAreasSection />
      <FeaturedPracticeArea />
      <PhilosophySection />
      <WhyChooseSection />
      <ProcessSection />
      <ExperiencePreview />
      <TestimonialsSection />
      <ConsultationCTA />
      <InsightsPreview />
      <FAQSection />
    </main>
  );
};
