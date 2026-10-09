import React from 'react';
import { philosophyPrinciples } from '../../data/advocateData';
import { SectionHeading } from '../common/SectionHeading';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory-50 border-b border-ivory-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PRACTICE PHILOSOPHY"
          title="A practice built on preparation."
          subtitle="Legal advice is only as good as the thoroughness of the facts behind it. Every consultation and matter is approached through four disciplined principles."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyPrinciples.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-xl p-6 sm:p-7 border border-ivory-300 hover:border-brass-400 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Large step number */}
                <div className="font-serif text-3xl font-bold text-brass-500/80 group-hover:text-brass-600 transition-colors mb-4">
                  {item.step}
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-950 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-brass-800 mb-3 font-sans">
                  {item.summary}
                </p>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ivory-200">
                <span className="w-8 h-[2px] bg-brass-400 block group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
