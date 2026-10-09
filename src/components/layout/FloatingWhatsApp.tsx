import React, { useState } from 'react';
import { MessageCircle, X, Send, Shield } from 'lucide-react';
import { generateWhatsAppUrl, trackEvent } from '../../utils/analytics';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      trackEvent('whatsapp_clicked', { action: 'opened_floating_chat' });
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('whatsapp_clicked', { action: 'sent_direct_message', query: userQuery });
    const fullMessage = userQuery
      ? `Hello Adv. Arjun Deshmukh, I am reaching out from your website. My legal inquiry: ${userQuery}`
      : undefined;
    window.open(generateWhatsAppUrl(fullMessage), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40 font-sans">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-xl shadow-2xl border border-ivory-300 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-navy-950 p-4 text-ivory-100 flex items-center justify-between border-b border-navy-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-brass-400">
                  <img
                    src="/images/arjun-hero.jpg"
                    alt="Adv. Arjun Deshmukh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-navy-950 rounded-full" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-sm text-ivory-50">
                  Adv. Arjun Deshmukh
                </h4>
                <p className="text-[11px] text-brass-400 font-medium">
                  Chamber Office • Pune
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-ivory-400 hover:text-ivory-100 p-1 rounded transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#ECE5DD]/40 space-y-3">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-xs text-charcoal-800 leading-relaxed border border-stone-200">
              <p className="font-semibold text-navy-950 mb-1">
                Namaste. How may we assist with your legal matter?
              </p>
              <p className="text-slate-muted text-[11px]">
                Type a brief note regarding your property, civil, contract, or business inquiry to connect directly.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-slate-muted justify-center">
              <Shield className="w-3 h-3 text-brass-600" />
              <span>Privileged & Confidential Discussion</span>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-2 pt-1">
              <textarea
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Briefly describe your legal query..."
                rows={2}
                className="w-full text-xs p-2.5 rounded-md border border-stone-300 focus:outline-none focus:ring-1 focus:ring-brass-500 bg-white resize-none text-charcoal-900"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-md shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start WhatsApp Consultation</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={handleOpenToggle}
        className="group relative flex items-center gap-2.5 bg-navy-950 hover:bg-navy-900 text-ivory-100 pl-4 pr-5 py-3 rounded-full shadow-elevated border border-brass-500/50 hover:border-brass-400 transition-all duration-300 cursor-pointer"
        aria-label="Open WhatsApp consultation prompt"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-serif font-bold text-ivory-50 tracking-wide flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            WhatsApp Chamber
          </span>
          <span className="text-[10px] text-brass-400 font-sans font-medium">
            Adv. Arjun Deshmukh
          </span>
        </div>
      </button>
    </div>
  );
};
