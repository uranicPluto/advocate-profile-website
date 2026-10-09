import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { generateCallUrl, generateWhatsAppUrl, trackEvent } from '../../utils/analytics';

export const StickyMobileCTA: React.FC = () => {
  const handleCall = () => {
    trackEvent('call_clicked', { source: 'mobile_sticky_bar' });
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_clicked', { source: 'mobile_sticky_bar' });
  };

  const handleConsultation = () => {
    trackEvent('consultation_started', { source: 'mobile_sticky_bar' });
  };

  return (
    <aside aria-label="Quick contact actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-luxury border-t border-navy-800 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={generateCallUrl()}
          onClick={handleCall}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded bg-navy-900 border border-navy-800 text-ivory-100 active:bg-navy-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-brass-400 mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 active:bg-emerald-900/80 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Consultation Button */}
        <Link
          to="/consultation"
          onClick={handleConsultation}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded bg-brass-500 text-navy-950 active:bg-brass-400 font-bold shadow-brass transition-colors"
        >
          <Calendar className="w-4 h-4 text-navy-950 mb-1" />
          <span className="text-[11px] font-bold tracking-tight">Consultation</span>
        </Link>
      </div>
    </aside>
  );
};
