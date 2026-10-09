import React from 'react';
import { ArrowRight, FileText, Scale } from 'lucide-react';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory-50 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image in Consultation Setting */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative warm background panel */}
              <div className="absolute -inset-4 bg-brass-100/50 rounded-2xl -rotate-1 -z-10" />
              
              <div className="rounded-xl overflow-hidden shadow-card border border-ivory-300 bg-navy-900">
                <img
                  src="/images/arjun-about.jpg"
                  alt="Adv. Arjun Deshmukh reviewing legal blueprints in Pune office"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center"
                />
              </div>

              {/* Editorial Quote callout below image */}
              <div className="mt-4 p-5 bg-white rounded-lg border border-ivory-300 shadow-soft">
                <p className="font-serif italic text-sm text-navy-950 leading-relaxed">
                  "Every matter requires an approach suited to its facts and objectives—not a copy-paste formula."
                </p>
                <p className="mt-2 text-xs font-sans font-bold uppercase tracking-wider text-brass-700">
                  — Adv. Arjun Deshmukh
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              eyebrow="ABOUT ADV. ARJUN DESHMUKH"
              title="Legal advice should be clear, practical and personal."
              subtitle="Legal matters often arrive at difficult moments. My role is to understand the facts, explain your options clearly, and help you make informed decisions."
              className="mb-6"
            />

            <div className="space-y-4 text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
              <p>
                With over 18 years of continuous practice in Pune, I have represented and advised property buyers, families, entrepreneurs, and enterprise clients. What distinguishes this practice is direct, hands-on preparation.
              </p>
              <p>
                Whether you are navigating a complex property transaction in Haveli taluka, responding to an aggressive legal notice, structuring commercial contracts, or resolving a civil dispute in Shivajinagar District Court, you receive advice focused on practical outcomes rather than endless procedural delay.
              </p>
            </div>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-ivory-300 shadow-sm">
                <FileText className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
                    Precision Documentation
                  </h4>
                  <p className="text-xs text-slate-muted mt-0.5">
                    Deeds, leases & contracts drafted with absolute legal clarity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-ivory-300 shadow-sm">
                <Scale className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
                    Pragmatic Strategy
                  </h4>
                  <p className="text-xs text-slate-muted mt-0.5">
                    Realistic assessments that preserve value and resolve conflict.
                  </p>
                </div>
              </div>
            </div>

            {/* Link to Full About Page */}
            <div className="pt-4">
              <Button
                to="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4 text-brass-400" />}
              >
                More About Adv. Deshmukh
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
