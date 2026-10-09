import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Scale,
  FileCheck,
  HeartHandshake,
  Briefcase,
  FileText,
  MailCheck,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { practiceAreasData } from '../../data/practiceAreasData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

// Icon resolver helper
export const renderPracticeIcon = (iconName: string, className: string = "w-6 h-6") => {
  switch (iconName) {
    case 'Building2':
      return <Building2 className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'FileCheck':
      return <FileCheck className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'MailCheck':
      return <MailCheck className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    default:
      return <Scale className={className} />;
  }
};

export const PracticeAreasSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 border-b border-ivory-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="LEGAL PRACTICE & EXPERTISE"
          title="Areas of Practice"
          subtitle="Focused legal assistance across matters that affect your property, business, family and future."
          align="center"
        />

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreasData.map((area) => (
            <div
              key={area.id}
              className="group bg-white rounded-xl p-7 border border-ivory-300 hover:border-brass-400 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-navy-950 text-brass-400 flex items-center justify-center group-hover:bg-brass-500 group-hover:text-navy-950 transition-colors duration-300 shadow-sm">
                    {renderPracticeIcon(area.iconName, "w-6 h-6")}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-muted bg-ivory-100 px-2.5 py-1 rounded border border-ivory-200">
                    {area.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-navy-950 group-hover:text-brass-700 transition-colors mb-3">
                  {area.shortTitle}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                  {area.shortDescription}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-ivory-200">
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-brass-600 transition-colors"
                >
                  <span>Explore Practice Area</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-muted mb-3 font-sans">
            Need legal guidance on a matter not listed here?
          </p>
          <Button
            to="/contact"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Enquire About Your Specific Situation
          </Button>
        </div>
      </div>
    </section>
  );
};
