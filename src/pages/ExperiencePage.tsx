import React from 'react';
import { ShieldCheck, Landmark } from 'lucide-react';
import { careerTimeline, representativeMatters, advocateData } from '../data/advocateData';
import { SectionHeading } from '../components/common/SectionHeading';
import { ConsultationCTA } from '../components/home/ConsultationCTA';

export const ExperiencePage: React.FC = () => {
  const judicialForums = [
    {
      title: "District & Sessions Court, Pune (Shivajinagar)",
      desc: "Principal civil and commercial suits, execution petitions, land acquisition references, and family appeals.",
    },
    {
      title: "High Court of Judicature at Bombay (Appellate Side)",
      desc: "First appeals, second appeals, civil revision applications, and writ petitions arising from Pune & Western Maharashtra.",
    },
    {
      title: "Maharashtra Real Estate Regulatory Authority (MahaRERA)",
      desc: "Promoter complaints, delayed possession compensation, refund claims, and structural defect proceedings.",
    },
    {
      title: "Revenue & Collectorate Courts (Haveli / Pune Division)",
      desc: "7/12 extract disputes, mutation (ferfar) appeals before SDO/Collector, and non-agricultural (NA) revenue permissions.",
    },
    {
      title: "Family Court, Pune (Shivajinagar)",
      desc: "Mutual consent divorce petitions, child custody arrangements, and family asset distribution settlements.",
    },
    {
      title: "Consumer Disputes Redressal Commissions (District & State)",
      desc: "Insurance claim repudiations, commercial builder deficiencies, and financial services grievances.",
    },
  ];

  return (
    <main className="min-h-screen pt-28 pb-16 bg-ivory-100 font-sans">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-navy-950 text-ivory-100 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                18+ Years Legal Practice
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-ivory-50 tracking-tight leading-tight">
              Experience & Credentials
            </h1>
            <p className="text-base sm:text-xl text-ivory-300 font-serif italic leading-relaxed">
              "A seasoned practice built on preparation, disciplined execution, and adherence to legal ethics."
            </p>
          </div>
        </div>
      </section>

      {/* Professional Credentials Bar */}
      <section className="py-12 bg-white border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-ivory-200">
            <div className="px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-muted block mb-1">
                Bar Council Registration
              </span>
              <p className="font-serif text-lg font-bold text-navy-950">
                {advocateData.barCouncil.name}
              </p>
              <p className="text-xs text-brass-800 font-semibold mt-1">
                Continuous Active Standing Since {advocateData.barCouncil.enrollmentYear}
              </p>
            </div>

            <div className="px-4 pt-6 md:pt-0">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-muted block mb-1">
                Qualifications
              </span>
              <p className="font-serif text-lg font-bold text-navy-950">
                {advocateData.barCouncil.qualifications}
              </p>
              <p className="text-xs text-brass-800 font-semibold mt-1">
                Specialized in Civil, Property & Corporate Law
              </p>
            </div>

            <div className="px-4 pt-6 md:pt-0">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-muted block mb-1">
                Practicing Jurisdiction
              </span>
              <p className="font-serif text-lg font-bold text-navy-950">
                Pune & Bombay High Court
              </p>
              <p className="text-xs text-brass-800 font-semibold mt-1">
                Shivajinagar District Judicial Complex
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CAREER PROGRESSION"
            title="18+ Years of Continuous Practice"
            subtitle="How our practice evolved from civil court appearances to comprehensive property and business advisory."
            align="center"
          />

          <div className="relative pl-8 sm:pl-10 border-l-2 border-brass-400 space-y-12 my-10 max-w-3xl mx-auto">
            {careerTimeline.map((item: { year: string; title: string; description: string }) => (
              <div key={item.year} className="relative group">
                <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-5 h-5 rounded-full bg-navy-950 border-4 border-brass-400 shadow-sm" />

                <span className="font-serif text-2xl font-bold text-brass-700">
                  {item.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-950 mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed font-sans mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Representative Matters Detailed */}
      <section className="py-20 bg-ivory-100 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ANONYMIZED CASE EXPERIENCE"
            title="Experience Across Complex Matters"
            subtitle="Representative examples of matters assisted. Names and locations are generalized to strictly protect client confidentiality."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {representativeMatters.map((matter: { category: string; title: string; summary: string; outcome: string }, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-ivory-300 shadow-soft hover:border-brass-400 hover:shadow-card transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brass-700 bg-brass-50 px-3 py-1 rounded-full border border-brass-200">
                    {matter.category}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-brass-600" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  {matter.title}
                </h3>

                <p className="text-sm text-charcoal-700 leading-relaxed font-sans">
                  {matter.summary}
                </p>

                <div className="p-4 bg-ivory-50 rounded-lg border border-ivory-200 text-xs sm:text-sm text-navy-950 font-medium space-y-1">
                  <span className="font-bold text-brass-800 uppercase tracking-wider text-[11px] block">
                    Strategic Outcome:
                  </span>
                  <p>{matter.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courts & Forums Practiced */}
      <section className="py-20 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FORUMS & JURISDICTIONS"
            title="Courts & Regulatory Bodies"
            subtitle="Regular representation and proceedings across statutory judicial forums in Maharashtra."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {judicialForums.map((forum, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-ivory-300 shadow-soft space-y-2 hover:border-brass-400 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-950 text-brass-400 flex items-center justify-center mb-3">
                  <Landmark className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-lg text-navy-950">
                  {forum.title}
                </h4>
                <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
                  {forum.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <ConsultationCTA />
    </main>
  );
};
