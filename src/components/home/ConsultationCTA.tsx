import React from 'react';
import { Calendar, Phone, ShieldCheck, MessageCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { advocateData } from '../../data/advocateData';
import { generateCallUrl, generateWhatsAppUrl, trackEvent } from '../../utils/analytics';

export const ConsultationCTA: React.FC = () => {
  const handleCall = () => {
    trackEvent('call_clicked', { source: 'cta_banner' });
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_clicked', { source: 'cta_banner' });
  };

  const handleBook = () => {
    trackEvent('consultation_started', { source: 'cta_banner' });
  };

  return (
    <section className="py-20 lg:py-24 bg-navy-950 text-ivory-100 relative overflow-hidden border-b border-navy-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brass-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] font-sans">
            Direct & Confidential Legal Guidance
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-ivory-50 tracking-tight leading-tight">
            Have a legal matter to discuss?
          </h2>
          <p className="text-base sm:text-xl text-ivory-300 font-sans leading-relaxed">
            Start with a confidential consultation and understand your realistic legal options, timelines, and strategy before making crucial decisions.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            to="/consultation"
            variant="brass"
            size="lg"
            icon={<Calendar className="w-4 h-4 text-navy-950" />}
            onClick={handleBook}
            className="w-full sm:w-auto shadow-elevated"
          >
            Book a Consultation
          </Button>

          <Button
            href={generateCallUrl()}
            variant="navy-outline"
            size="lg"
            icon={<Phone className="w-4 h-4 text-brass-400" />}
            onClick={handleCall}
            className="w-full sm:w-auto"
          >
            Call {advocateData.contact.phoneFormatted}
          </Button>

          <Button
            href={generateWhatsAppUrl()}
            variant="secondary"
            size="lg"
            icon={<MessageCircle className="w-4 h-4 text-emerald-700" />}
            onClick={handleWhatsApp}
            className="w-full sm:w-auto text-emerald-950"
          >
            WhatsApp Office
          </Button>
        </div>

        {/* Reassurance Footer */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-ivory-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brass-400" />
            <span>Chamber at Shivajinagar, Pune</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brass-400" />
            <span>Secure Video Consultations Available</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brass-400" />
            <span>100% Client-Advocate Privilege</span>
          </span>
        </div>
      </div>
    </section>
  );
};
