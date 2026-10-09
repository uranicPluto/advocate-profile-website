import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { careerTimeline, representativeMatters, advocateData } from '../../data/advocateData';
import { SectionHeading } from '../common/SectionHeading';

export const ExperiencePreview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="PROFESSIONAL RECORD & TIMELINE"
          title="18+ years of legal practice."
          subtitle="A continuous track record of advising individuals, families, property owners, and businesses across Pune."
          align="center"
        />

        {/* Credentials Badges Bar */}
        <div className="mb-14 p-6 rounded-xl bg-white border border-ivory-300 shadow-soft grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-ivory-200">
          <div className="px-4">
            <span className="text-xs uppercase tracking-widest text-slate-muted font-bold block mb-1">
              Bar Council Enrollment
            </span>
            <p className="font-serif text-base font-bold text-navy-950">
              {advocateData.barCouncil.name}
            </p>
            <p className="text-xs text-brass-700 font-semibold mt-0.5">
              Enrolled {advocateData.barCouncil.enrollmentYear} • Pune
            </p>
          </div>

          <div className="px-4 pt-4 md:pt-0">
            <span className="text-xs uppercase tracking-widest text-slate-muted font-bold block mb-1">
              Academic Credentials
            </span>
            <p className="font-serif text-base font-bold text-navy-950">
              {advocateData.barCouncil.qualifications}
            </p>
            <p className="text-xs text-brass-700 font-semibold mt-0.5">
              Distinction in Civil & Property Laws
            </p>
          </div>

          <div className="px-4 pt-4 md:pt-0">
            <span className="text-xs uppercase tracking-widest text-slate-muted font-bold block mb-1">
              Primary Jurisdiction
            </span>
            <p className="font-serif text-base font-bold text-navy-950">
              Pune District & High Court Bombay
            </p>
            <p className="text-xs text-brass-700 font-semibold mt-0.5">
              Shivajinagar Judicial Complex
            </p>
          </div>
        </div>

        {/* Timeline & Representative Matters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left: Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-navy-950 flex items-center gap-2.5">
              <span>Career Milestones</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-brass-300 space-y-8 my-4">
              {careerTimeline.map((item) => (
                <div key={item.year} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-brass-500 border-4 border-ivory-100 shadow-sm" />

                  <span className="font-serif text-lg font-bold text-brass-700">
                    {item.year}
                  </span>
                  <h4 className="font-serif text-base font-bold text-navy-950 mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Anonymized Representative Matters */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-navy-950">
                Representative Matters
              </h3>
              <span className="text-[11px] font-semibold text-slate-muted bg-ivory-200 px-2.5 py-1 rounded border border-ivory-300">
                Anonymized Records
              </span>
            </div>

            <p className="text-xs text-slate-muted">
              Representative matters are presented in anonymized form to respect client confidentiality in compliance with Bar Council of India norms.
            </p>

            <div className="space-y-4">
              {representativeMatters.map((matter, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-ivory-300 hover:border-brass-400 shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brass-700">
                      {matter.category}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-brass-600" />
                  </div>

                  <h4 className="font-serif text-lg font-bold text-navy-950 mb-2">
                    {matter.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-3">
                    {matter.summary}
                  </p>

                  <div className="p-3 bg-ivory-50 rounded border border-ivory-200 text-xs text-navy-950 font-medium flex items-start gap-2">
                    <span className="font-bold text-brass-700 uppercase tracking-wider text-[10px] shrink-0 mt-0.5">
                      Result:
                    </span>
                    <span>{matter.outcome}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-right">
              <Link
                to="/experience"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-950 hover:text-brass-700 transition-colors"
              >
                <span>View Full Experience & Forum Jurisdictions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
