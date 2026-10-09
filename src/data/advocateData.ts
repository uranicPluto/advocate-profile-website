export interface AdvocateInfo {
  name: string;
  honorific: string;
  title: string;
  location: string;
  jurisdiction: string;
  experienceYears: number;
  experienceLabel: string;
  mattersAssisted: string;
  tagline: string;
  supportingStatement: string;
  positioning: string;
  barCouncil: {
    name: string;
    enrollmentYear: string;
    qualifications: string;
    city: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappNumber: string; // international format for wa.me
    whatsappFormatted: string;
    email: string;
    officeAddress: {
      line1: string;
      line2: string;
      landmark: string;
      city: string;
      state: string;
      pincode: string;
    };
    officeHours: {
      days: string;
      timing: string;
    };
  };
  ethicsDisclaimer: string;
}

export const advocateData: AdvocateInfo = {
  name: "Arjun Deshmukh",
  honorific: "Adv.",
  title: "Advocate & Legal Consultant",
  location: "Pune, Maharashtra",
  jurisdiction: "District Court Pune | High Court Bombay (Appellate) | MahaRERA",
  experienceYears: 18,
  experienceLabel: "18+ Years of Legal Practice",
  mattersAssisted: "1,000+",
  tagline: "Clarity When It Matters Most.",
  supportingStatement: "Experienced legal counsel for important decisions, disputes, documents, and negotiations.",
  positioning: "An experienced advocate providing practical legal guidance to individuals, families, property owners, entrepreneurs, and businesses across Pune.",
  barCouncil: {
    name: "Bar Council of Maharashtra & Goa",
    enrollmentYear: "2008",
    qualifications: "B.Com., LL.B. (University of Pune)",
    city: "Pune",
  },
  contact: {
    phone: "+919822000000",
    phoneFormatted: "+91 98220 00000",
    whatsappNumber: "919822000000",
    whatsappFormatted: "+91 98220 00000",
    email: "office@arjundeshmukh.in",
    officeAddress: {
      line1: "Chamber Suite 402, Supreme Headway",
      line2: "Near Shivajinagar District Court, Senapati Bapat Road",
      landmark: "Opposite Pune Judicial Complex",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411016",
    },
    officeHours: {
      days: "Monday – Saturday",
      timing: "10:00 AM – 7:00 PM (By Appointment)",
    },
  },
  ethicsDisclaimer: "Information provided on this website is for general informational purposes only and should not be construed as legal advice. Viewing this website or contacting the office does not create an advocate-client relationship. Legal advice depends on the specific facts and circumstances of each matter in accordance with the Bar Council of India regulations.",
};

export const trustStats = [
  {
    number: "18+",
    unit: "Years",
    title: "Legal Experience",
    description: "Continuous practice advising individuals, property owners & businesses.",
  },
  {
    number: "1,000+",
    unit: "Matters",
    title: "Matters Assisted",
    description: "Comprehensive guidance across transactions, disputes & documentation.",
  },
  {
    number: "Pune",
    unit: "Maharashtra",
    title: "Local Reputation",
    description: "Deep familiarity with local courts, sub-registrar offices & revenue authorities.",
  },
  {
    number: "100%",
    unit: "Confidential",
    title: "Client Consultation",
    description: "Privileged legal discussions focused on strategic clarity.",
  },
];

export const philosophyPrinciples = [
  {
    step: "01",
    title: "Listen First",
    summary: "Every matter begins with understanding the client's situation.",
    detail: "Before discussing legal statutes or court procedures, we take the time to hear the background, family context, or business objectives in complete detail.",
  },
  {
    step: "02",
    title: "Understand the Facts",
    summary: "Good legal advice depends on understanding the complete picture.",
    detail: "We conduct careful examination of physical records, title chains, contracts, and relevant correspondence to identify both strength and vulnerability.",
  },
  {
    step: "03",
    title: "Explain Clearly",
    summary: "Clients should understand their options before making decisions.",
    detail: "We avoid unnecessary legal jargon. You receive clear explanations of potential paths, timeline expectations, financial implications, and risk factors.",
  },
  {
    step: "04",
    title: "Act Strategically",
    summary: "Every matter requires an approach suited to its facts and objectives.",
    detail: "Whether through structured negotiation, precision document drafting, or assertive court representation, every action is guided by a defined strategy.",
  },
];

export const whyClientsWorkWithHim = [
  {
    number: "01",
    title: "18+ Years Practical Experience",
    description: "Nearly two decades of hands-on experience navigating property laws, civil disputes, commercial agreements, and municipal procedures across Pune and Maharashtra.",
  },
  {
    number: "02",
    title: "Direct Personal Attention",
    description: "Your matter is reviewed and managed directly by Adv. Arjun Deshmukh, ensuring thorough preparation rather than being handed off as a generic file.",
  },
  {
    number: "03",
    title: "Straightforward Communication",
    description: "Complex legal concepts, procedural stages, and realistic probabilities are communicated in transparent, accessible language at every milestone.",
  },
  {
    number: "04",
    title: "Practical & Pragmatic Strategy",
    description: "Legal advice tailored to your actual objectives—prioritizing solutions that preserve value, resolve conflict efficiently, and safeguard long-term interests.",
  },
];

export const clientProcessSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We schedule a dedicated meeting (in-person at our Pune chamber or via secure video) to understand your situation, examine relevant papers, and address your immediate concerns.",
    duration: "45–60 Minutes",
  },
  {
    step: "02",
    title: "Legal Assessment",
    description: "Thorough review of the applicable laws, title chain, contract clauses, procedural history, and potential risks to establish a solid factual foundation.",
    duration: "2–4 Working Days",
  },
  {
    step: "03",
    title: "Strategic Counsel",
    description: "We present realistic legal options—from dispute resolution and notice drafting to transaction structuring or court proceedings—agreeing on the best path forward.",
    duration: "Clear Action Plan",
  },
  {
    step: "04",
    title: "Execution & Representation",
    description: "Where appropriate, we assist with precise legal drafting, formal negotiations, registration assistance, or dedicated representation before relevant forums.",
    duration: "Ongoing Support",
  },
];

export const careerTimeline = [
  {
    year: "2008",
    title: "Commenced Legal Practice",
    description: "Enrolled with the Bar Council of Maharashtra & Goa after completing LL.B. from Pune University. Began civil litigation and property law practice in Pune District Court.",
  },
  {
    year: "2012",
    title: "Expanded Property & Civil Practice",
    description: "Deepened focus on property title due diligence, land revenue matters, development agreements, and civil dispute resolution across Pune and PCMC jurisdictions.",
  },
  {
    year: "2016",
    title: "Established Independent Chamber",
    description: "Founded independent chamber near Shivajinagar District Court, advising individual property buyers, families, and growing local businesses.",
  },
  {
    year: "2020",
    title: "Advisory & Corporate Contracts Expansion",
    description: "Broadened corporate advisory for tech startups in Hinjawadi/Baner, structured commercial lease agreements, and handled MahaRERA matters.",
  },
  {
    year: "2026",
    title: "18+ Years of Legal Excellence",
    description: "A seasoned, reputable practice built on meticulous preparation, trusted by over 1,000 clients across Pune and Western Maharashtra.",
  },
];

export const representativeMatters = [
  {
    category: "Property & Real Estate",
    title: "High-Value Land Title Due Diligence",
    summary: "Conducted 30-year title verification, 7/12 extract scrutiny, mutation entry search, and public notice issuance for an ancestral land parcel in Haveli Taluka.",
    outcome: "Identified undisclosed encumbrance and protected client from a risky ₹4.2 Cr transaction before agreement execution.",
  },
  {
    category: "Civil & Commercial",
    title: "Commercial Lease & Dispute Resolution",
    summary: "Represented a commercial landlord in a multi-floor office building in Baner facing default on tenancy terms and structural alteration issues.",
    outcome: "Structured a mutually negotiated settlement and updated tripartite agreement avoiding protracted litigation.",
  },
  {
    category: "Succession & Family",
    title: "Ancestral Property Partition & Family Settlement",
    summary: "Advised and drafted a comprehensive Family Settlement Agreement and Partition Deed among multiple legal heirs across Pune and overseas NRIs.",
    outcome: "Achieved unanimous amicable registration of partition without family acrimony or court intervention.",
  },
  {
    category: "Corporate & Contracts",
    title: "Master Services & SaaS Agreement Structuring",
    summary: "Drafted and negotiated customized commercial service contracts, non-disclosure agreements, and vendor contracts for a Pune-based IT consulting firm.",
    outcome: "Established standard operational contracts that fortified IP protection and limited liability across overseas clients.",
  },
];

export const puneLocalities = [
  "Shivajinagar",
  "Baner",
  "Aundh",
  "Kothrud",
  "Wakad",
  "Hinjawadi",
  "Viman Nagar",
  "Kharadi",
  "Hadapsar",
  "Kalyani Nagar",
  "Pimple Saudagar",
  "Pimpri-Chinchwad (PCMC)",
  "Bavdhan",
  "Model Colony",
  "Deccan Gymkhana",
];
