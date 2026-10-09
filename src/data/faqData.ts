export interface FAQItem {
  id: string;
  category: 'General' | 'Consultation' | 'Property' | 'Litigation' | 'Business';
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "Consultation",
    question: "How do I book a consultation with Adv. Arjun Deshmukh?",
    answer: "You can request an appointment using the 5-step consultation form on this website, call our Pune office directly at +91 98220 00000, or send a message via our official WhatsApp assistant. Our office will confirm a dedicated date and time slot within 2 business hours.",
  },
  {
    id: "faq-2",
    category: "Property",
    question: "Do you handle property-related matters and due diligence across Pune?",
    answer: "Yes. Property law is one of our primary practice areas. We provide 30-year title searches, property card/7-12 scrutiny, drafting of Sale Deeds and Gift Deeds, MahaRERA representation, and resolution of ownership or boundary disputes across Pune, PCMC, and PMRDA jurisdictions.",
  },
  {
    id: "faq-3",
    category: "General",
    question: "Can I discuss my matter confidentially before deciding to engage your services?",
    answer: "Absolutely. An initial confidential consultation allows us to understand your facts, examine key documents, explain legal options and risks, and provide clarity on whether formal legal action or document drafting is warranted.",
  },
  {
    id: "faq-4",
    category: "Business",
    question: "Do you handle business contracts and corporate legal advisory?",
    answer: "Yes. We advise startups, SMEs, and established Pune businesses on commercial contracts, Master Service Agreements (MSAs), NDAs, partnership agreements, employment covenants, and MSME payment recovery.",
  },
  {
    id: "faq-5",
    category: "Consultation",
    question: "Do you offer secure online / video consultations for NRIs and outstation clients?",
    answer: "Yes. For clients residing in other cities or overseas NRIs holding property or business interests in Pune, we offer secure video consultations via Google Meet or Zoom, alongside digital document exchange.",
  },
  {
    id: "faq-6",
    category: "Consultation",
    question: "What documents should I bring or upload for our initial consultation?",
    answer: "This depends on your specific matter. For property transactions: previous deeds, Index II, 7/12 extract or Property Card, and sanction plan. For disputes or legal notices: the received notice, previous agreements, and key correspondence. Our office will provide a tailored checklist when scheduling your slot.",
  },
  {
    id: "faq-7",
    category: "Litigation",
    question: "Which courts and tribunals do you practice before?",
    answer: "Adv. Arjun Deshmukh regularly appears before the Pune District & Sessions Court (Shivajinagar), Small Causes Court, Family Court Pune, Civil Courts, Revenue Courts (Collector/SDO), Consumer Redressal Commissions, MahaRERA Pune Bench, and the Bombay High Court (Appellate Jurisdiction).",
  },
];
