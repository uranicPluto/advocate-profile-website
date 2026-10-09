import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { practiceAreasData, type PracticeArea } from '../data/practiceAreasData';
import { advocateData } from '../data/advocateData';
import { renderPracticeIcon } from '../components/home/PracticeAreasSection';
import { Button } from '../components/common/Button';
import { generateCallUrl, generateWhatsAppUrl, trackEvent } from '../utils/analytics';
import { ConsultationCTA } from '../components/home/ConsultationCTA';

export const PracticeAreaDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const practiceArea = practiceAreasData.find((p: PracticeArea) => p.slug === slug);

  if (!practiceArea) {
    return <Navigate to="/practice-areas" replace />;
  }

  const otherAreas = practiceAreasData.filter((p: PracticeArea) => p.slug !== slug).slice(0, 4);

  return (
    <main className="min-h-screen pt-28 pb-16 bg-ivory-100 font-sans">
      {/* Page Header */}
      <section className="py-16 lg:py-20 bg-navy-950 text-ivory-100 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-ivory-400 mb-6">
            <Link to="/" className="hover:text-brass-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/practice-areas" className="hover:text-brass-400 transition-colors">
              Practice Areas
            </Link>
            <span>/</span>
            <span className="text-brass-400 font-semibold">{practiceArea.shortTitle}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                {practiceArea.category} Law Practice • Pune
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-ivory-50 tracking-tight leading-tight">
              {practiceArea.title}
            </h1>
            <p className="text-base sm:text-xl text-ivory-300 font-serif italic leading-relaxed">
              "{practiceArea.tagline}"
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-16 lg:py-24 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Detailed Practice Breakdown */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div className="space-y-4 text-charcoal-800 leading-relaxed font-sans text-sm sm:text-base">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                  Overview & Legal Scope
                </h2>
                <p>{practiceArea.detailedDescription}</p>
              </div>

              {/* Key Services Checklist */}
              <div className="p-8 bg-white rounded-2xl border border-ivory-300 shadow-soft space-y-6">
                <div className="flex items-center gap-3 border-b border-ivory-200 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 text-brass-400 flex items-center justify-center">
                    {renderPracticeIcon(practiceArea.iconName, "w-5 h-5")}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-navy-950">
                      Scope of Legal Assistance
                    </h3>
                    <p className="text-xs text-slate-muted">
                      Comprehensive services provided for {practiceArea.shortTitle.toLowerCase()} in Pune
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {practiceArea.keyServices.map((service: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-800">
                      <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Scenarios Handled in Pune */}
              {practiceArea.typicalScenarios && practiceArea.typicalScenarios.length > 0 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-navy-950">
                    Typical Matters Handled
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {practiceArea.typicalScenarios.map((scen: { title: string; description: string }, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 border border-ivory-300 shadow-soft hover:border-brass-400 transition-all space-y-2"
                      >
                        <h4 className="font-serif font-bold text-base text-navy-950">
                          {scen.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                          {scen.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pune Local Context */}
              <div className="p-6 bg-ivory-100 rounded-xl border border-ivory-300 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brass-800">
                  <MapPin className="w-4 h-4 text-brass-600" />
                  <span>Pune & Maharashtra Regulatory Context</span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-sans">
                  {practiceArea.puneContext}
                </p>
              </div>

              {/* Process Overview */}
              {practiceArea.processOverview && practiceArea.processOverview.length > 0 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-navy-950">
                    How We Approach Your Matter
                  </h3>
                  <div className="space-y-3">
                    {practiceArea.processOverview.map((step: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-lg bg-white border border-ivory-300 shadow-sm"
                      >
                        <span className="font-serif font-bold text-sm text-brass-700 w-6 shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-charcoal-800 font-sans">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Practice Area Specific FAQs */}
              {practiceArea.faqs && practiceArea.faqs.length > 0 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-navy-950 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brass-600" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-4">
                    {practiceArea.faqs.map((faq: { question: string; answer: string }, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 border border-ivory-300 shadow-soft space-y-2"
                      >
                        <h4 className="font-serif font-bold text-base text-navy-950">
                          {faq.question}
                        </h4>
                        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Sidebar & Consultation Card */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Direct Booking Card */}
              <div className="bg-navy-950 text-ivory-100 rounded-2xl p-6 sm:p-7 border border-brass-500/30 shadow-card space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brass-400">
                    Confidential Consultation
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ivory-50">
                    Discuss Your {practiceArea.shortTitle}
                  </h3>
                  <p className="text-xs text-ivory-300/80 leading-relaxed pt-1">
                    Book a focused initial session to review your documents and establish legal clarity.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <Button
                    to={`/consultation?matter=${encodeURIComponent(practiceArea.shortTitle)}`}
                    variant="brass"
                    size="md"
                    fullWidth
                    icon={<Calendar className="w-4 h-4 text-navy-950" />}
                  >
                    Book Consultation
                  </Button>

                  <a
                    href={generateWhatsAppUrl(`Hello Adv. Arjun Deshmukh, I would like to consult on a matter regarding ${practiceArea.shortTitle}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_clicked', { source: 'practice_detail_sidebar' })}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-emerald-800/80 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Office Chamber</span>
                  </a>

                  <a
                    href={generateCallUrl()}
                    onClick={() => trackEvent('call_clicked', { source: 'practice_detail_sidebar' })}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded border border-navy-700 text-ivory-200 hover:bg-navy-900 text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brass-400" />
                    <span>Call {advocateData.contact.phoneFormatted}</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-navy-800 text-[11px] text-ivory-400 space-y-1">
                  <p className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brass-400" />
                    <span>100% Client-Advocate Privilege</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brass-400" />
                    <span>In-Person Chamber or Secure Video</span>
                  </p>
                </div>
              </div>

              {/* Other Practice Areas Navigation */}
              <div className="p-6 bg-white rounded-xl border border-ivory-300 shadow-soft space-y-4">
                <h4 className="font-serif font-bold text-base text-navy-950 border-b border-ivory-200 pb-2">
                  Other Practice Areas
                </h4>
                <div className="space-y-2">
                  {otherAreas.map((area: PracticeArea) => (
                    <Link
                      key={area.id}
                      to={`/practice-areas/${area.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-ivory-100 transition-colors group text-xs text-charcoal-800 font-medium"
                    >
                      <span className="group-hover:text-brass-700">{area.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-muted group-hover:text-brass-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <ConsultationCTA />
    </main>
  );
};
