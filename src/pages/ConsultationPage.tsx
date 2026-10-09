import React from 'react';
import { ShieldCheck, Phone, Clock } from 'lucide-react';
import { ConsultationWizard } from '../components/consultation/ConsultationWizard';
import { advocateData } from '../data/advocateData';
import { generateCallUrl } from '../utils/analytics';

export const ConsultationPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-28 pb-16 bg-ivory-100 font-sans">
      {/* Header */}
      <section className="py-14 lg:py-16 bg-navy-950 text-ivory-100 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Confidential Legal Consultation
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-ivory-50 tracking-tight leading-tight">
            Schedule a Consultation with Adv. Arjun Deshmukh
          </h1>

          <p className="text-sm sm:text-base text-ivory-300 font-sans leading-relaxed max-w-2xl mx-auto">
            Choose your matter category, select your preferred chamber or video slot, and receive strategic legal guidance tailored to your situation.
          </p>
        </div>
      </section>

      {/* Main Wizard Container */}
      <section className="py-12 lg:py-16 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationWizard />

          {/* Reassurance Grid Below Wizard */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-charcoal-700">
            <div className="p-4 rounded-xl bg-white border border-ivory-300 shadow-soft flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-navy-950 block mb-0.5">Strict Confidentiality</span>
                <p className="text-slate-muted">All details shared are protected under advocate-client legal privilege.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ivory-300 shadow-soft flex items-start gap-3">
              <Clock className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-navy-950 block mb-0.5">Prompt Slot Confirmation</span>
                <p className="text-slate-muted">Chamber manager will confirm your appointment within 2 working hours.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ivory-300 shadow-soft flex items-start gap-3">
              <Phone className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-navy-950 block mb-0.5">Direct Chamber Helpline</span>
                <a href={generateCallUrl()} className="text-brass-700 font-bold hover:underline">
                  {advocateData.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
