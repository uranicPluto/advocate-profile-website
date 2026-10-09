import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { clientProcessSteps } from '../../data/advocateData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory-50 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLEAR CLIENT ENGAGEMENT"
          title="What happens when you reach out?"
          subtitle="Legal processes should never feel opaque. From your very first message to final execution, here is our transparent 4-step workflow."
          align="center"
        />

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {clientProcessSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-xl p-7 border border-ivory-300 shadow-soft flex flex-col justify-between relative group hover:border-brass-400 hover:shadow-card transition-all duration-300"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-brass-500">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-muted bg-ivory-100 px-2 py-0.5 rounded border border-ivory-200">
                    <Clock className="w-3 h-3 text-brass-600" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-950 mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-ivory-200">
                <span className="text-[11px] uppercase tracking-wider font-bold text-brass-700">
                  Step {idx + 1} of 4
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA */}
        <div className="mt-14 text-center">
          <Button
            to="/consultation"
            variant="primary"
            size="lg"
            icon={<Calendar className="w-4 h-4 text-brass-400" />}
          >
            Book a Consultation to Begin
          </Button>
          <p className="text-xs text-slate-muted mt-3">
            In-office consultations at Shivajinagar Pune chamber or secure video consultations available.
          </p>
        </div>
      </div>
    </section>
  );
};
