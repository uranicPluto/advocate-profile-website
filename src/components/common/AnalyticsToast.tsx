import React, { useEffect, useState } from 'react';
import { CheckCircle2, PhoneCall, MessageSquare, Calendar, Sparkles } from 'lucide-react';

interface ToastData {
  id: string;
  eventType: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const AnalyticsToast: React.FC = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  useEffect(() => {
    const handleLeadEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { eventType, metadata } = customEvent.detail || {};

      let title = "Action Recorded";
      let description = "Lead activity logged successfully.";
      let icon = <Sparkles className="w-5 h-5 text-brass-500" />;

      if (eventType === 'consultation_requested' || eventType === 'consultation_completed') {
        title = "Consultation Request Dispatched";
        description = metadata?.matter
          ? `Booking initiated for: ${metadata.matter}`
          : "Your appointment slot has been submitted to the advocate's office.";
        icon = <Calendar className="w-5 h-5 text-brass-500" />;
      } else if (eventType === 'whatsapp_clicked') {
        title = "Direct WhatsApp Initiated";
        description = "Connecting directly to Adv. Arjun Deshmukh's official WhatsApp chamber.";
        icon = <MessageSquare className="w-5 h-5 text-emerald-600" />;
      } else if (eventType === 'call_clicked') {
        title = "Office Call Triggered";
        description = "Calling Adv. Deshmukh's Pune office chamber (+91 98220 00000).";
        icon = <PhoneCall className="w-5 h-5 text-brass-600" />;
      } else if (eventType === 'contact_form_submitted') {
        title = "Enquiry Submitted";
        description = "Message sent to Adv. Arjun Deshmukh's Pune chamber.";
        icon = <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      }

      const newToast: ToastData = {
        id: Math.random().toString(36).substring(2, 9),
        eventType,
        title,
        description,
        icon,
      };

      setToasts((prev) => [...prev.slice(-2), newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 4000);
    };

    window.addEventListener('advocate_lead_event', handleLeadEvent);
    return () => window.removeEventListener('advocate_lead_event', handleLeadEvent);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:right-8 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-navy-950/95 backdrop-blur-md text-ivory-100 p-4 rounded-lg shadow-elevated border border-brass-500/30 flex items-start gap-3.5 transition-all duration-300 animate-slide-up"
        >
          <div className="shrink-0 p-2 rounded-full bg-navy-900 border border-brass-500/20">
            {toast.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-ivory-50 tracking-wide font-serif">
              {toast.title}
            </h4>
            <p className="text-xs text-ivory-300/80 mt-0.5 leading-relaxed">
              {toast.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
