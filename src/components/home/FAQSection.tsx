import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqData } from '../../data/faqData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-ivory-50 border-b border-ivory-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Common Questions & Consultations"
          subtitle="Clear answers about scheduling, document preparation, property due diligence, and legal representation in Pune."
          align="center"
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-ivory-300 overflow-hidden shadow-soft transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-ivory-100/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-navy-950 pr-2">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full bg-ivory-200 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brass-500 text-navy-950' : 'text-slate-muted'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans border-t border-ivory-200/60 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Prompt */}
        <div className="mt-12 p-6 rounded-xl bg-ivory-200/70 border border-ivory-300 text-center space-y-3">
          <p className="text-sm font-serif font-bold text-navy-950">
            Have a specific question about your own legal situation?
          </p>
          <p className="text-xs text-slate-muted max-w-md mx-auto">
            Schedule a focused initial consultation to examine your specific documents and facts in complete confidence.
          </p>
          <div className="pt-2">
            <Button
              to="/consultation"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Book Consultation Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
