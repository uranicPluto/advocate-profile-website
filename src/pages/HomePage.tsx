import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { AboutPreview } from '../components/home/AboutPreview';
import { PracticeAreasSection } from '../components/home/PracticeAreasSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { FAQSection } from '../components/home/FAQSection';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustStrip />
      <AboutPreview />
      <PracticeAreasSection />
      <TestimonialsSection />
      <ConsultationCTA />
      <FAQSection />
    </main>
  );
};

