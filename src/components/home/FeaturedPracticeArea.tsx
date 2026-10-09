import React from 'react';
import { CheckCircle2, ArrowRight, Building, FileSearch } from 'lucide-react';
import { Button } from '../common/Button';

export const FeaturedPracticeArea: React.FC = () => {
  const bulletPoints = [
    "30-Year Chain of Title Verification & Search Reports",
    "Property Due Diligence (7/12, Mutation Ferfar, CTS Property Cards)",
    "Sale & Purchase Documentation (Agreement for Sale, Sale Deed)",
    "Development Agreements & Society Deemed Conveyance",
    "Statutory Legal Notices for Breach of Property Contracts",
    "Property Ownership, Boundary & Partition Disputes",
    "MahaRERA Grievances for Delayed Possession or Unsanctioned Alterations",
    "Sub-Registrar Office Execution & Franking Assistance",
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-ivory-100 relative overflow-hidden border-b border-navy-800">
      {/* Subtle architectural background texture / tint */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B89B5E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Feature Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
              <Building className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] font-sans">
                Featured Practice Area • Pune
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-ivory-50 tracking-tight leading-tight">
              Property decisions deserve careful legal attention.
            </h2>

            <p className="text-base sm:text-lg text-ivory-300 leading-relaxed font-sans">
              From reviewing documents before a high-value transaction to resolving disputes after they arise, property matters often require careful examination of historical records, mutation entries, and statutory permissions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {bulletPoints.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory-200">
                  <CheckCircle2 className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                to="/consultation?matter=Property%20Law"
                variant="brass"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 text-navy-950" />}
              >
                Discuss a Property Matter
              </Button>

              <Button
                to="/practice-areas/property-law"
                variant="navy-outline"
                size="lg"
              >
                Full Property Law Details
              </Button>
            </div>
          </div>

          {/* Right Column: Architectural Photography Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-brass-500/30 bg-navy-900">
                <img
                  src="/images/property-featured.jpg"
                  alt="Modern architectural real estate in Pune"
                  className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Float feature tag */}
              <div className="absolute -bottom-5 -right-5 bg-navy-900/95 backdrop-blur-md p-4 rounded-xl border border-brass-500/40 shadow-card max-w-xs text-xs hidden sm:block">
                <div className="flex items-center gap-2 text-brass-400 font-serif font-bold text-sm mb-1">
                  <FileSearch className="w-4 h-4" />
                  <span>30-Year Title Search</span>
                </div>
                <p className="text-ivory-300/80 text-[11px] leading-relaxed">
                  Haveli Sub-Registrar records, 7/12 mutation ferfar & municipal CTS verification across Pune & PCMC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
