import React from 'react';
import { whyClientsWorkWithHim } from '../../data/advocateData';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-5 sticky top-28 space-y-5">
            <SectionHeading
              eyebrow="DISTINCT ADVOCATE APPROACH"
              title="A different kind of legal experience."
              subtitle="Working with an advocate should bring clarity, not additional confusion or anxiety. We hold ourselves to a strict standard of personal responsibility."
              className="mb-0"
            />

            <div className="p-6 rounded-xl bg-navy-950 text-ivory-100 border border-brass-500/30 shadow-card">
              <p className="font-serif italic text-base sm:text-lg leading-relaxed text-ivory-100">
                "Clients do not hire law degrees or generic rhetoric. They hire someone they can trust with their property, their business, or their family's peace of mind."
              </p>
              <p className="mt-3 text-xs uppercase tracking-widest text-brass-400 font-bold">
                — Adv. Arjun Deshmukh
              </p>
            </div>
          </div>

          {/* Right Column: 4 Numbered Editorial Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {whyClientsWorkWithHim.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white rounded-xl p-7 border border-ivory-300 hover:border-brass-400 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-brass-500 shrink-0 sm:w-16">
                  {pillar.number}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-navy-950">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
