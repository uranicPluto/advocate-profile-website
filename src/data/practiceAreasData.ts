export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Property' | 'Civil' | 'Commercial' | 'Personal';
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  isFeatured?: boolean;
  iconName: string;
  keyServices: string[];
  typicalScenarios: {
    title: string;
    description: string;
  }[];
  puneContext: string;
  processOverview: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const practiceAreasData: PracticeArea[] = [
  {
    id: "property-law",
    slug: "property-law",
    title: "Property & Real Estate Law",
    shortTitle: "Property & Real Estate",
    category: "Property",
    isFeatured: true,
    tagline: "Property decisions deserve careful legal attention and meticulous scrutiny.",
    shortDescription: "Comprehensive legal guidance for property purchases, title due diligence, RERA compliance, ownership disputes, and redevelopment matters across Pune.",
    detailedDescription: "Real estate in Pune—from high-growth suburbs like Hinjawadi and Baner to established localities in Shivajinagar and Kothrud—represents significant financial and personal commitments. Our property law practice is designed to protect your ownership rights at every stage: from thorough pre-purchase title search and document vetting, to dispute resolution before civil courts, revenue tribunals, and MahaRERA.",
    iconName: "Building2",
    keyServices: [
      "30-Year Property Title Search & Due Diligence",
      "Title Search Reports & Legal Scrutiny Certificates",
      "Drafting & Review of Agreement for Sale and Sale Deed",
      "MahaRERA Complaints for Delayed Possession or Deficiencies",
      "Verification of 7/12 Extracts, Mutation Entries (Ferfar), & Property Cards (CTS)",
      "Redevelopment & Society Conveyance (Deemed Conveyance) Guidance",
      "Agricultural Land Purchase Scrutiny & NA (Non-Agricultural) Permissions",
      "Resolution of Property Boundary, Encroachment & Ownership Disputes",
    ],
    typicalScenarios: [
      {
        title: "Buying an Under-Construction Apartment from a Builder",
        description: "Scrutinizing builder title, MahaRERA project registration, commencement certificates, sanction plans, and drafting fair terms before parting with booking advances.",
      },
      {
        title: "Purchasing Resale Flats or Independent Plots",
        description: "Verifying original link documents, society share certificates, NOCs, bank charge clearances, and ensuring safe escrow-like milestone payments.",
      },
      {
        title: "Ancestral / Family Property Disputes",
        description: "Assisting family members in asserting or defending legitimate coparcenary shares, rectifying erroneous mutation entries, and executing peaceful partition deeds.",
      },
      {
        title: "Developer Non-Performance or Project Delays",
        description: "Filing formal MahaRERA grievances for refund with interest, possession handover timelines, or compensation for unauthorized layout alterations.",
      },
    ],
    puneContext: "Deeply experienced with Pune Municipal Corporation (PMC), Pimpri Chinchwad Municipal Corporation (PCMC), PMRDA regulations, Haveli Sub-Registrar Offices (1 to 27), and Pune Collectorate revenue processes.",
    processOverview: [
      "Document Collection & Link Verification (Index II, Ferfar, 7/12, Sanction Plans)",
      "Physical & Registry Search at Relevant Sub-Registrar Offices",
      "Issuance of Public Notice in Leading Pune Newspapers (if required)",
      "Preparation of Clear Legal Scrutiny Report with Risk Mitigation Advice",
      "Safe Drafting, Stamp Duty Calculation & Registration Accompaniment",
    ],
    faqs: [
      {
        question: "Why is a 30-year title search essential before buying land or property in Pune?",
        answer: "A 30-year title search verifies the unbroken chain of ownership, confirms that previous transfers were legally registered, and reveals whether the property is subject to mortgages, court attachments, pending partition claims, or government acquisition notices.",
      },
      {
        question: "What is the difference between Index II, 7/12 Extract, and a Property Card (CTS)?",
        answer: "Index II is the registration receipt issued by the Sub-Registrar detailing the transaction. 7/12 extract is the land revenue record for agricultural/rural lands in Maharashtra. Property Card (CTS - City Title Survey) is the urban equivalent maintained by the City Survey Office confirming municipal ownership.",
      },
      {
        question: "How do you handle MahaRERA complaints against delayed projects in Pune?",
        answer: "We prepare the formal complaint under Section 18 / Section 31 of RERA, collate payment receipts and builder communications, and represent the buyer before the MahaRERA bench in Pune/Mumbai seeking interest on delayed possession or full refund with compensation.",
      },
    ],
  },
  {
    id: "civil-litigation",
    slug: "civil-litigation",
    title: "Civil Litigation & Dispute Resolution",
    shortTitle: "Civil Litigation",
    category: "Civil",
    tagline: "Strategic representation and pragmatic dispute resolution in civil matters.",
    shortDescription: "Representation before District Courts, Civil Courts, and appellate forums in recovery suits, property partition, injunctions, and specific performance.",
    detailedDescription: "Civil litigation requires careful factual preparation, clear pleadings, and sharp strategic execution. We represent individuals, landlords, property owners, and businesses in substantive civil disputes before Pune District Courts (Shivajinagar) and appellate forums. Our philosophy emphasizes early case assessment to determine whether a matter can be resolved through structured negotiation or requires vigorous court pursuit.",
    iconName: "Scale",
    keyServices: [
      "Suits for Specific Performance of Contracts",
      "Partition Suits & Declaration of Title Claims",
      "Permanent & Temporary Injunction Applications (Order 39 CPC)",
      "Money Recovery Suits & Summary Suits (Order 37 CPC)",
      "Eviction & Tenancy Disputes under Maharashtra Rent Control Act",
      "Appeals, Revisions, and Writ Petitions before Bombay High Court",
      "Execution of Decrees & Court Orders",
    ],
    typicalScenarios: [
      {
        title: "Refusal by Seller to Execute Sale Deed after Receiving Token",
        description: "Filing a suit for specific performance with interim injunction to restrain the seller from creating third-party rights.",
      },
      {
        title: "Illegal Encroachment or Disturbance of Possession",
        description: "Securing urgent temporary injunctions from the civil judge to preserve status quo and protect property boundaries.",
      },
      {
        title: "Commercial Contract Breach & Unpaid Invoices",
        description: "Issuing formal statutory notices followed by summary recovery suits for expeditious relief.",
      },
    ],
    puneContext: "Regular practice before the Shivajinagar District & Sessions Court, Small Causes Court Pune, Civil Judge Senior/Junior Division, and Appellate Courts.",
    processOverview: [
      "Review of Cause of Action, Limitation Periods, and Jurisdictional Thresholds",
      "Drafting Formal Legal Notice or Reply to Establish Documentary Evidence",
      "Precision Drafting of Plaint, Written Statement, or Interlocutory Applications",
      "Filing and Representation during Arguments, Evidence & Cross-Examination",
      "Execution Proceedings to enforce court decree into tangible results",
    ],
    faqs: [
      {
        question: "How long does a civil suit take in Pune District Court?",
        answer: "Timelines depend on the nature of the dispute, interim applications, and court schedules. However, strong initial pleadings and timely interim injunctions often protect client rights early in the proceedings.",
      },
      {
        question: "What is an injunction suit and when is it filed?",
        answer: "An injunction suit asks the court to restrain another party from carrying out an unlawful act, such as demolishing a wall, entering private property, or alienating disputed land.",
      },
    ],
  },
  {
    id: "contracts-agreements",
    slug: "contracts-agreements",
    title: "Contracts & Commercial Agreements",
    shortTitle: "Contracts & Agreements",
    category: "Commercial",
    tagline: "Clear contractual language that prevents ambiguity and protects commercial interests.",
    shortDescription: "Precision drafting, review, and negotiation of business agreements, vendor contracts, commercial leases, non-disclosure, and partnership deeds.",
    detailedDescription: "A well-drafted agreement is your strongest defense against future disputes. We provide comprehensive contract advisory for businesses, startups, service providers, and private individuals. We review indemnities, dispute resolution clauses, IP ownership, and termination mechanisms to ensure that your legal and commercial exposure is strictly protected.",
    iconName: "FileCheck",
    keyServices: [
      "Commercial Leases & High-Value Leave & License Agreements",
      "Master Service Agreements (MSA) & Statement of Work (SOW)",
      "Non-Disclosure (NDA) & Confidentiality Agreements",
      "Partnership Deeds, LLP Agreements & Joint Venture MOUs",
      "Vendor, Supplier, and Distribution Contracts",
      "Employment Contracts, Non-Compete & IP Assignment Covenants",
      "Contract Risk Audit & Redlining for Business Negotiations",
    ],
    typicalScenarios: [
      {
        title: "Long-Term Office Lease in Pune IT Parks",
        description: "Negotiating lock-in periods, fit-out timelines, maintenance liabilities, stamp duty compliance, and security deposit refund covenants.",
      },
      {
        title: "Startup Co-Founder & Shareholding Frameworks",
        description: "Drafting robust founder agreements, equity vesting schedules, exit protocols, and dispute mediation mechanisms.",
      },
    ],
    puneContext: "Tailored to Pune's thriving technology ecosystem in Hinjawadi, Magarpatta, Baner, and Kharadi, as well as manufacturing sectors in Bhosari and Chakan.",
    processOverview: [
      "Commercial Objective Briefing & Risk Identification",
      "First Draft Preparation with Plain-Language Precision",
      "Counterparty Negotiation & Clause-by-Clause Redlining",
      "Execution, Franking, Stamp Duty & Registration Facilitation",
    ],
    faqs: [
      {
        question: "What makes an agreement legally enforceable in Maharashtra?",
        answer: "The agreement must have lawful consideration, competent parties, free consent, and must be executed on appropriate stamp paper as mandated by the Maharashtra Stamp Act.",
      },
    ],
  },
  {
    id: "family-law",
    slug: "family-law",
    title: "Family & Matrimonial Matters",
    shortTitle: "Family & Matrimonial",
    category: "Personal",
    tagline: "Dignified, confidential legal counsel for sensitive family transitions.",
    shortDescription: "Empathetic guidance and strategic representation in mutual divorce, maintenance, child custody, domestic disputes, and family settlements.",
    detailedDescription: "Family matters demand a balance of firm legal understanding and emotional sensitivity. We assist clients through difficult matrimonial and family conflicts with utmost discretion, prioritizing amicable resolutions and clean settlements whenever possible, while providing staunch representation when rights must be protected in Family Court.",
    iconName: "HeartHandshake",
    keyServices: [
      "Mutual Consent Divorce Petition Preparation & Representation",
      "Contested Divorce Proceedings under Hindu Marriage Act & Special Marriage Act",
      "Child Custody, Visitation Rights & Guardianship Petitions",
      "Permanent Alimony, Interim Maintenance & Financial Settlements",
      "Pre-Litigation Family Mediation & Settlement Agreements",
      "Domestic Violence Act Proceedings & Protection Orders",
    ],
    typicalScenarios: [
      {
        title: "Amicable Separation through Mutual Consent",
        description: "Drafting a comprehensive Memorandum of Understanding (MOU) addressing asset division, child education funds, and smooth six-month waiver waivers.",
      },
      {
        title: "NRI Matrimonial Disputes",
        description: "Representing Pune-resident spouses or overseas Indian citizens in jurisdictional questions, maintenance enforcement, and foreign decree validity.",
      },
    ],
    puneContext: "Regular practice before the Pune Family Court in Shivajinagar, emphasizing dignified proceedings and child-centric custody structures.",
    processOverview: [
      "Confidential Initial Consultation & Background Review",
      "Evaluation of Mediation Possibilities vs Court Proceedings",
      "Drafting Petitions / Affidavits of Assets and Liabilities",
      "Counselling & Court Representation",
    ],
    faqs: [
      {
        question: "How long does a Mutual Consent Divorce take in Pune Family Court?",
        answer: "Normally, there is a statutory 6-month cooling-off period, but courts may waive this period under specific Supreme Court guidelines if parties have lived apart for substantial time and settled all terms.",
      },
    ],
  },
  {
    id: "business-advisory",
    slug: "business-advisory",
    title: "Business & Corporate Advisory",
    shortTitle: "Business & Corporate",
    category: "Commercial",
    tagline: "Pragmatic legal support for entrepreneurs, SMEs, and growing enterprises.",
    shortDescription: "Ongoing legal counsel for company structuring, statutory compliance, board resolutions, commercial transactions, and risk management.",
    detailedDescription: "Growing businesses encounter legal questions daily—from hiring and vendor contracts to regulatory filings and IP rights. We act as an external legal counsel for SMEs, technology startups, family businesses, and retail establishments across Pune, helping founders navigate legal complexities while focusing on business expansion.",
    iconName: "Briefcase",
    keyServices: [
      "External General Counsel & Legal Retainership Services",
      "Corporate Structuring (Private Limited, LLP, Partnership)",
      "MSME Dispute Resolution & Delayed Payment Filings (Samadhaan)",
      "Regulatory Compliance under Maharashtra Shops & Establishments Act",
      "Commercial Dispute Negotiation & Pre-litigation Strategy",
      "Trademark & Intellectual Property Protection Advisory",
    ],
    typicalScenarios: [
      {
        title: "Recovering Overdue Payments from Large Corporate Clients",
        description: "Leveraging MSMED Act mechanisms and statutory demand notices to ensure priority settlement of business receivables.",
      },
    ],
    puneContext: "Advising enterprise clients across IT, manufacturing, automotive ancillary, hospitality, and healthcare sectors in Pune.",
    processOverview: [
      "Audit of Existing Operational Agreements & Legal Vulnerabilities",
      "Standard Operating Procedure (SOP) Templates Creation",
      "On-demand Contract Review & Risk Advisory",
    ],
    faqs: [
      {
        question: "How can the MSME Samadhaan portal help my Pune business recover dues?",
        answer: "If your enterprise is registered under Udyam MSME, buyers are mandated to pay within 45 days. Defaults can be referred to the MSME Facilitation Council for compulsory interest at 3x the RBI bank rate.",
      },
    ],
  },
  {
    id: "property-documentation",
    slug: "property-documentation",
    title: "Property Documentation & Deeds",
    shortTitle: "Property Documentation",
    category: "Property",
    tagline: "Flawless drafting that guarantees clear title and effortless registration.",
    shortDescription: "Preparation of Sale Deeds, Gift Deeds, Release Deeds, General Power of Attorney, Development Agreements, and Leave & License instruments.",
    detailedDescription: "Every word in a property deed carries legal weight that lasts for generations. Ambiguities or missing recitals can cause severe registration bottlenecks, stamp duty penalties, or future litigation. We draft customized property instruments adhering strictly to Maharashtra stamp laws and registration protocols.",
    iconName: "FileText",
    keyServices: [
      "Sale Deed (Kharedi Khat) & Agreement to Sale (Isar Pavati)",
      "Gift Deed (Bakshispatra) for Family Property Transfers",
      "Release / Relinquishment Deed (Hakkasodpatra)",
      "Partition Deed (Vatapapatra) & Family Settlement Deeds",
      "General Power of Attorney (GPA) & Special Power of Attorney (SPA)",
      "Development Agreements & Power of Attorney for Builders",
      "Maharashtra Stamp Duty & Registration Fee Assessment",
    ],
    typicalScenarios: [
      {
        title: "Gifting an Apartment to a Son/Daughter/Spouse in Pune",
        description: "Drafting the Gift Deed taking advantage of concessional stamp duty under Maharashtra government notifications, followed by municipal tax record transfer.",
      },
      {
        title: "Relinquishing Co-Owner Rights in Ancestral Property",
        description: "Executing a registered Release Deed without consideration among blood relatives, ensuring clear single-title succession.",
      },
    ],
    puneContext: "Comprehensive handling at all Pune Haveli Sub-Registrar offices, ensuring smooth biometric execution and prompt Index II generation.",
    processOverview: [
      "Scrutiny of Underlying Ownership Documents & Chain of Title",
      "Custom Drafting of Recitals, Consideration, and Covenants",
      "Calculation of Ready Reckoner Market Value & Stamp Duty",
      "Slot Booking and In-Person Assistance at Sub-Registrar Office",
    ],
    faqs: [
      {
        question: "What is the stamp duty on a Gift Deed to blood relatives in Pune?",
        answer: "Under Maharashtra law, gifting residential or agricultural property to blood relatives (spouse, children, grandchildren) attracts a concessional stamp duty of ₹200 or nominal percentage plus local cess.",
      },
    ],
  },
  {
    id: "legal-notices",
    slug: "legal-notices",
    title: "Legal Notices & Formal Responses",
    shortTitle: "Legal Notices",
    category: "Civil",
    tagline: "Authoritative legal notices that set the strategic tone before litigation.",
    shortDescription: "Drafting and responding to legal notices for cheque bounce (Section 138 NI Act), property defaults, contract breaches, and employment disputes.",
    detailedDescription: "A formal legal notice is often the decisive first step in asserting your rights or defending against unfounded claims. A well-constructed notice sets out the facts with precision, defines the legal breach, and creates an official record that courts will evaluate. We draft cogent, authoritative notices and comprehensive replies.",
    iconName: "MailCheck",
    keyServices: [
      "Section 138 Negotiable Instruments Act (Cheque Bounce) Notices",
      "Notice for Breach of Contract & Specific Performance",
      "Eviction & Tenant Default Notices under Maharashtra Rent Control Act",
      "Builder Delay & Consumer Deficiency Notices",
      "Defamation & Cease-and-Desist Notices",
      "Strategic Responses & Rebuttals to Received Legal Notices",
    ],
    typicalScenarios: [
      {
        title: "Received a Threatening Legal Notice from an Ex-Employer or Landlord",
        description: "Analyzing the allegations, collecting counter-evidence, and drafting a firm point-by-point reply that prevents unilateral legal advantage.",
      },
    ],
    puneContext: "Dispatched via Registered Post AD / Speed Post with digital tracking records maintained for court evidence.",
    processOverview: [
      "Fact-finding Session & Examination of Prior Communications",
      "Identification of Statutory Timelines (e.g. 30 days for Section 138 NI Act)",
      "Drafting Clear Demands with Legal Repercussions Outlined",
      "Formal Dispatch & Post-Notice Follow-up / Settlement Dialogue",
    ],
    faqs: [
      {
        question: "What should I do immediately after receiving a legal notice?",
        answer: "Note the exact date of receipt, gather all relevant documents mentioned in the notice, do not panic or send an emotional reply yourself, and consult an advocate immediately to draft a formal response within the specified notice period.",
      },
    ],
  },
  {
    id: "succession-inheritance",
    slug: "succession-inheritance",
    title: "Succession, Wills & Inheritance",
    shortTitle: "Succession & Inheritance",
    category: "Personal",
    tagline: "Protecting family wealth and ensuring smooth generational transfers.",
    shortDescription: "Drafting Wills, probate petitions, succession certificates, legal heir certificates, and family property settlement agreements.",
    detailedDescription: "Clear estate planning prevents bitter family disputes and ensures your hard-earned assets pass smoothly to your intended beneficiaries. We guide individuals, business owners, and senior citizens through Will drafting, estate structuring, probate proceedings, and succession certification.",
    iconName: "ShieldCheck",
    keyServices: [
      "Custom Drafting & Registration of Wills (Ichhapatra)",
      "Probate & Letters of Administration Petitions before District Court",
      "Succession Certificate Applications for Bank Accounts & Shares",
      "Legal Heirship Certificates & Varus Nond in Revenue Records",
      "Creation of Private Family Trusts for Asset Protection",
      "Dispute Resolution among Legal Heirs Regarding Ancestral Property",
    ],
    typicalScenarios: [
      {
        title: "Drafting a Comprehensive Will for Pune Real Estate & Investments",
        description: "Detailing specific bequests, appointing reliable executors, and conducting medical certification to safeguard against future challenges.",
      },
      {
        title: "Claiming Movable Assets of a Deceased Family Member without a Will",
        description: "Filing for a Succession Certificate in Pune Civil Court to release bank deposits, mutual funds, and ancestral shares.",
      },
    ],
    puneContext: "Assisting families across Pune in updating revenue mutations (7/12 Ferfar) and municipal tax records following succession.",
    processOverview: [
      "Comprehensive Asset Inventory & Family Tree Documentation",
      "Bespoke Drafting of Will with Non-Ambiguous Covenants",
      "Attestation & Optional Registration at Sub-Registrar Office",
    ],
    faqs: [
      {
        question: "Is registration of a Will mandatory in Maharashtra?",
        answer: "No, registering a Will is not legally mandatory, but registering it at the Sub-Registrar office provides strong evidentiary value against claims of forgery or coercion.",
      },
    ],
  },
  {
    id: "consumer-matters",
    slug: "consumer-matters",
    title: "Consumer Protection & Disputes",
    shortTitle: "Consumer Matters",
    category: "Civil",
    tagline: "Holding service providers, insurers, and builders accountable for unfair practices.",
    shortDescription: "Representation before District Consumer Disputes Redressal Commission Pune and State Commission for insurance, medical, and service deficiencies.",
    detailedDescription: "The Consumer Protection Act 2019 empowers consumers against unfair trade practices, defective goods, and deficient services. We assist consumers and businesses before Consumer Commissions in Pune, handling insurance claim repudiations, real estate defects, medical negligence claims, and warranty disputes.",
    iconName: "ShieldAlert",
    keyServices: [
      "Filing Complaints before District Consumer Commission (Pune / PCMC)",
      "Appeals before Maharashtra State Consumer Disputes Redressal Commission",
      "Insurance Claim Repudiation Disputes (Health, Life, Motor, Fire)",
      "Builder Deficiencies in Common Amenities and Construction Quality",
      "E-Commerce & Banking Fraud Recovery Complaints",
    ],
    typicalScenarios: [
      {
        title: "Mediclaim Health Insurance Rejected Unjustly",
        description: "Challenging wrongful rejection based on alleged pre-existing illness and claiming full hospital reimbursement plus mental agony compensation.",
      },
    ],
    puneContext: "Regular appearances before the Pune District Consumer Forum (Phadke Haud / Shivajinagar).",
    processOverview: [
      "Scrutiny of Service Deficiency Evidence & Statutory Notice Dispatch",
      "Drafting Formal Complaint with Compensation Computations",
      "Commission Proceedings, Evidence Affidavits & Arguments",
    ],
    faqs: [
      {
        question: "What is the monetary limit for Pune District Consumer Commission?",
        answer: "Under the Consumer Protection Act 2019, District Commissions have jurisdiction for claims up to ₹50 Lakhs. Claims from ₹50 Lakhs to ₹2 Crores are heard by the State Commission.",
      },
    ],
  },
];
