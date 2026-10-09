import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type AnalyticsEventType = 
  | 'consultation_requested'
  | 'consultation_started'
  | 'consultation_completed'
  | 'call_clicked'
  | 'whatsapp_clicked'
  | 'contact_form_submitted'
  | 'practice_area_viewed'
  | 'insight_viewed';

export function trackEvent(eventType: AnalyticsEventType, metadata?: Record<string, any>) {
  console.log(`[Lead Analytics Tracked]: ${eventType}`, metadata || {});
  
  // Custom DOM event for optional UI toast notification
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('advocate_lead_event', {
      detail: { eventType, metadata, timestamp: new Date().toISOString() }
    });
    window.dispatchEvent(event);
  }
}

export function generateWhatsAppUrl(customMessage?: string): string {
  const defaultText = "Hello Adv. Arjun Deshmukh, I am reaching out through your website regarding a legal consultation in Pune.";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/919822000000?text=${text}`;
}

export function generateCallUrl(): string {
  return "tel:+919822000000";
}
