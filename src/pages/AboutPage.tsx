import React from 'react';
import { Scale, CheckCircle2, Calendar } from 'lucide-react';
import { advocateData, philosophyPrinciples } from '../data/advocateData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { ConsultationCTA } from '../components/home/ConsultationCTA';

export const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-28 pb-16 bg-ivory-100 font-sans">
      {/* Page Header / Hero */}
      <section className="py-16 lg:py-20 bg-navy-950 text-ivory-100 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Advocate Profile & Practice
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-ivory-50 tracking-tight leading-tight">
              About Adv. Arjun Deshmukh
            </h1>
            <p className="text-base sm:text-xl text-ivory-300 font-serif italic leading-relaxed">
              "Legal advice should be clear, practical and personal. Clarity when it matters most."
            </p>
          </div>
        </div>
      </section>

      {/* Main Editorial Biography */}
      <section className="py-20 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Sticky Image & Credentials */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="rounded-xl overflow-hidden shadow-card border border-ivory-300 bg-navy-900">
                <img
                  src="/images/arjun-about.jpg"
                  alt="Adv. Arjun Deshmukh in consultation at Pune chamber"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Bar Council & Credentials Box */}
              <div className="p-6 bg-white rounded-xl border border-ivory-300 shadow-soft space-y-4">
                <h3 className="font-serif font-bold text-lg text-navy-950 border-b border-ivory-200 pb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-brass-600" />
                  <span>Verified Professional Record</span>
                </h3>

                <div className="space-y-3 text-xs text-charcoal-700">
                  <div>
                    <span className="font-bold text-navy-950 uppercase tracking-wider block text-[11px]">
                      Bar Council Enrollment:
                    </span>
                    <p className="text-sm font-semibold text-brass-800">
                      {advocateData.barCouncil.name} (2008)
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-navy-950 uppercase tracking-wider block text-[11px]">
                      Qualifications:
                    </span>
                    <p className="text-sm font-semibold text-navy-900">
                      {advocateData.barCouncil.qualifications}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-navy-950 uppercase tracking-wider block text-[11px]">
                      Primary Jurisdiction:
                    </span>
                    <p className="text-xs text-charcoal-800">
                      District Court Pune, Shivajinagar | High Court Bombay (Appellate) | MahaRERA
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-navy-950 uppercase tracking-wider block text-[11px]">
                      Chamber Location:
                    </span>
                    <p className="text-xs text-charcoal-800">
                      Shivajinagar, Senapati Bapat Road, Pune - 411016
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    to="/consultation"
                    variant="brass"
                    size="sm"
                    fullWidth
                    icon={<Calendar className="w-4 h-4" />}
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Detailed Biography & Philosophy */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-5 text-charcoal-800 leading-relaxed font-sans text-sm sm:text-base">
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-navy-950 leading-tight">
                  Eighteen Years of Grounded Legal Practice in Pune
                </h2>

                <p>
                  Adv. Arjun Deshmukh is an advocate and legal consultant practicing in Pune, Maharashtra. Over 18 years of continuous practice, he has advised individual buyers, land owners, families, entrepreneurs, and established businesses across Western Maharashtra.
                </p>

                <p>
                  Having commenced his practice at the Pune District Courts in Shivajinagar in 2008, Adv. Deshmukh developed deep experience in the practical mechanics of property law, land revenue documentation (7/12 extracts, mutation ferfar, CTS property cards), civil litigation, and commercial agreements.
                </p>

                <p>
                  His practice is anchored on a single fundamental proposition: <em>legal counsel must be understandable, realistic, and tailored to the client's actual life or business goals.</em>
                </p>

                <div className="p-6 bg-ivory-100 rounded-xl border border-ivory-300 my-6">
                  <h3 className="font-serif font-bold text-xl text-navy-950 mb-2">
                    "A Practice Built on Preparation"
                  </h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed italic font-serif">
                    "Legal matters often arrive during times of high anxiety—buying a life-savings home, disputing an inherited family parcel, or dealing with an unfair contract. The advocate's primary duty is not to escalate conflict, but to establish facts, clarify risks, and chart the safest, most strategic path forward."
                  </p>
                </div>

                <h3 className="font-serif text-2xl font-bold text-navy-950 pt-4">
                  Areas of In-Depth Focus
                </h3>

                <p>
                  While handling diverse civil and contractual matters, Adv. Deshmukh is widely sought for:
                </p>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Property Due Diligence & 30-Year Title Search:</strong> Scrutinizing complex land titles, ancestral lineages, and municipal sanctions across Haveli sub-registrar zones and PCMC.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Precision Drafting & Registration:</strong> Preparing Sale Deeds, Gift Deeds, Release Deeds, and Leave & License instruments that prevent future ambiguity.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Civil Representation & Dispute Resolution:</strong> Asserting and defending rights in specific performance suits, partition claims, and injunctions.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Commercial Contracts for Pune Businesses:</strong> Crafting Master Service Agreements, NDAs, and corporate leases for Hinjawadi and Baner enterprises.
                    </div>
                  </li>
                </ul>

                <h3 className="font-serif text-2xl font-bold text-navy-950 pt-6">
                  The Consultation Experience
                </h3>
                <p>
                  Every consultation is conducted with strict confidentiality. Adv. Deshmukh personally examines the relevant documents, asks the necessary factual questions, and provides an honest assessment of strengths, weaknesses, estimated timelines, and procedural options.
                </p>
              </div>

              {/* Chamber Photo & Office Environment */}
              <div className="pt-6">
                <div className="rounded-xl overflow-hidden shadow-card border border-ivory-300">
                  <img
                    src="/images/office-chamber.jpg"
                    alt="Adv. Arjun Deshmukh Chamber Meeting Room Pune"
                    className="w-full h-[320px] object-cover"
                  />
                </div>
                <p className="text-xs text-slate-muted mt-2 italic text-center">
                  Adv. Arjun Deshmukh Chamber & Meeting Room, Shivajinagar, Pune.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars Section */}
      <section className="py-20 bg-ivory-100 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ADVOCATE VALUES"
            title="Four Pillars of Our Practice"
            subtitle="How we ensure every client receives thorough legal counsel."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPrinciples.map((p) => (
              <div
                key={p.step}
                className="p-6 bg-white rounded-xl border border-ivory-300 shadow-soft space-y-2"
              >
                <span className="font-serif text-2xl font-bold text-brass-600">
                  {p.step}
                </span>
                <h3 className="font-serif font-bold text-lg text-navy-950">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-brass-800">
                  {p.summary}
                </p>
                <p className="text-xs text-charcoal-700 leading-relaxed pt-1">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <ConsultationCTA />
    </main>
  );
};
