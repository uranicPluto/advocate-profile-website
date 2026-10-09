import React from 'react';
import { trustStats } from '../../data/advocateData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-navy-950 text-ivory-100 py-8 border-y border-navy-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-navy-800">
          {trustStats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-4 ${
                index > 0 ? 'pt-4 md:pt-0' : ''
              }`}
            >
              <div className="flex items-baseline gap-1.5 font-serif text-3xl sm:text-4xl font-bold text-brass-400">
                <span>{item.number}</span>
                <span className="text-xs uppercase tracking-widest font-sans font-bold text-ivory-300">
                  {item.unit}
                </span>
              </div>
              <div className="mt-1 font-sans text-xs sm:text-sm font-semibold text-ivory-100 uppercase tracking-wider">
                {item.title}
              </div>
              <p className="mt-1 text-[11px] text-ivory-400 max-w-[200px] leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
