import React from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory-50 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT EXPERIENCES"
          title="What clients say."
          subtitle="Direct feedback from individuals, property owners, and business founders who have engaged Adv. Arjun Deshmukh for counsel and representation in Pune."
          align="center"
        />

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-7 border border-ivory-300 hover:border-brass-400 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-brass-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brass-500 text-brass-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif italic text-charcoal-800 text-sm sm:text-base leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-ivory-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-navy-950">
                      {item.clientRole}
                    </h4>
                    <p className="text-[11px] text-slate-muted flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-brass-600" />
                      <span>{item.location}</span>
                    </p>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified
                  </span>
                </div>

                <div className="mt-2 text-[10px] text-brass-800 font-medium">
                  Matter: {item.matterCategory}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification note & All Testimonials Link */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-slate-muted max-w-md text-balance">
            Client names are sanitized to respect privacy under Section 126 of the Indian Evidence Act.
          </p>
          <Button
            to="/testimonials"
            variant="outline"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Read All Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};
