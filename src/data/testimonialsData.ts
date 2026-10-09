export interface Testimonial {
  id: string;
  clientRole: string;
  location: string;
  matterCategory: string;
  rating: number;
  date: string;
  quote: string;
  verificationBadge: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    clientRole: "Residential Property Buyer",
    location: "Baner, Pune",
    matterCategory: "Property Title Verification",
    rating: 5,
    date: "February 2026",
    quote: "Adv. Deshmukh explained the entire property matter clearly and guided us through every step. His title search report identified an unresolved lien that the broker had downplayed, saving us from a massive financial risk. We always knew what was happening.",
    verificationBadge: "Verified Client Matter",
  },
  {
    id: "test-2",
    clientRole: "Tech Enterprise Founder",
    location: "Hinjawadi, Pune",
    matterCategory: "Commercial Contracts & Master Services Agreement",
    rating: 5,
    date: "January 2026",
    quote: "Very professional and approachable. He took the time to understand our tech business model before advising us on IP assignment covenants and overseas client contracts. The clarity he brought to our terms gave us total peace of mind.",
    verificationBadge: "Verified Commercial Advisory",
  },
  {
    id: "test-3",
    clientRole: "Family Property Owner",
    location: "Kothrud, Pune",
    matterCategory: "Ancestral Property Partition Deed",
    rating: 5,
    date: "November 2025",
    quote: "The documentation process for our ancestral partition was handled with immense patience and precision. Everything was explained in simple Marathi and English without convoluted legal terms. Highly recommended for family property matters.",
    verificationBadge: "Verified Family Succession Matter",
  },
  {
    id: "test-4",
    clientRole: "Commercial Landlord",
    location: "Viman Nagar, Pune",
    matterCategory: "High-Value Commercial Lease & Eviction Notice",
    rating: 5,
    date: "December 2025",
    quote: "When our corporate tenant defaulted on rent and lease covenants, Adv. Deshmukh drafted a crisp statutory notice and negotiated a structured settlement within weeks without entering into endless court litigation.",
    verificationBadge: "Verified Tenancy Settlement",
  },
  {
    id: "test-5",
    clientRole: "NRI Investor (Pune Real Estate)",
    location: "Dubai / Pune",
    matterCategory: "MahaRERA Developer Delay Grievance",
    rating: 5,
    date: "October 2025",
    quote: "Being based overseas, managing delayed possession of our Pune apartment was stressful until we consulted Adv. Deshmukh. His secure video consultations and representation before MahaRERA were seamless and transparent.",
    verificationBadge: "Verified NRI Consultation",
  },
  {
    id: "test-6",
    clientRole: "Manufacturing SME Director",
    location: "Pimpri-Chinchwad (PCMC)",
    matterCategory: "MSME Recovery & Vendor Contract Dispute",
    rating: 5,
    date: "August 2025",
    quote: "A pragmatic advocate who focuses on realistic solutions rather than dragging matters into court. His counsel on our vendor default saved months of operational delay.",
    verificationBadge: "Verified SME Client",
  },
];
