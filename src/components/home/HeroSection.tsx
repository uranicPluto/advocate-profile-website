import React from 'react';
import { Phone, Calendar, MapPin, CheckCircle, Scale } from 'lucide-react';
import { advocateData } from '../../data/advocateData';
import { Button } from '../common/Button';
import { generateCallUrl, trackEvent } from '../../utils/analytics';

export const HeroSection: React.FC = () => {
  const handleCall = () => {
    trackEvent('call_clicked', { source: 'hero' });
  };

  const handleBook = () => {
    trackEvent('consultation_started', { source: 'hero' });
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-ivory-100 border-b border-ivory-300">
      {/* Subtle Luxury Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ivory-200/50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brass-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Brand Headline */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-900/5 border border-navy-900/15 text-navy-900">
              <span className="w-2 h-2 rounded-full bg-brass-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] font-sans">
                Advocate & Legal Consultant • Pune
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-navy-950 tracking-tight leading-[1.08]">
                Clarity When <br />
                <span className="italic font-medium text-navy-900 relative inline-block">
                  It Matters Most.
                  <span className="absolute bottom-2 left-0 right-0 h-[3px] bg-brass-400/60 -z-10 rounded-full" />
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-muted max-w-xl font-sans leading-relaxed pt-2">
                {advocateData.supportingStatement}
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                to="/consultation"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4 text-brass-400" />}
                onClick={handleBook}
                className="shadow-elevated"
              >
                Book a Consultation
              </Button>

              <Button
                href={generateCallUrl()}
                variant="secondary"
                size="lg"
                icon={<Phone className="w-4 h-4 text-navy-900" />}
                onClick={handleCall}
              >
                Call the Office
              </Button>
            </div>

            {/* Key Trust Micro-Signals */}
            <div className="pt-6 border-t border-ivory-300 grid grid-cols-3 gap-4 text-xs font-sans text-charcoal-700">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-navy-950 block text-sm">18+ Years</span>
                  <span className="text-slate-muted text-[11px]">Active Practice</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-navy-950 block text-sm">1,000+</span>
                  <span className="text-slate-muted text-[11px]">Matters Assisted</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-navy-950 block text-sm">Pune, MH</span>
                  <span className="text-slate-muted text-[11px]">Shivajinagar Chamber</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Professional Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative luxury frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-brass-400/30 to-navy-900/10 rounded-2xl -rotate-1 blur-sm" />
              
              {/* Portrait Container */}
              <div className="relative rounded-xl overflow-hidden bg-navy-900 shadow-2xl border-2 border-ivory-300">
                <img
                  src="/images/arjun-hero.jpg"
                  alt="Adv. Arjun Deshmukh - Advocate & Legal Consultant Pune"
                  className="w-full h-[480px] sm:h-[540px] lg:h-[580px] object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Subtle bottom gradient on portrait */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent flex items-end p-6">
                  <div className="text-ivory-100 space-y-1">
                    <p className="font-serif font-bold text-lg text-ivory-50 tracking-wide">
                      Adv. Arjun Deshmukh
                    </p>
                    <p className="text-xs text-brass-300 font-sans tracking-wider uppercase font-medium">
                      Bar Council of Maharashtra & Goa
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-navy-950 text-ivory-100 p-4 rounded-xl shadow-elevated border border-brass-500/40 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brass-500/20 border border-brass-500/40 flex items-center justify-center text-brass-400">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-brass-400 font-bold block">
                    Pune Practice
                  </span>
                  <span className="text-sm font-serif font-bold text-ivory-50">
                    18+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
