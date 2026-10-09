import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Shield, ArrowUpRight, Scale } from 'lucide-react';
import { advocateData, puneLocalities } from '../../data/advocateData';
import { practiceAreasData } from '../../data/practiceAreasData';
import { generateCallUrl, trackEvent } from '../../utils/analytics';
import { BciDisclaimerModal } from './DisclaimerModal';

export const Footer: React.FC = () => {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [disclaimerTab, setDisclaimerTab] = useState<'disclaimer' | 'privacy'>('disclaimer');

  const openDisclaimer = (tab: 'disclaimer' | 'privacy') => {
    setDisclaimerTab(tab);
    setDisclaimerOpen(true);
  };

  return (
    <>
      <footer className="bg-navy-950 text-ivory-200 border-t border-navy-800/80 pt-16 pb-24 md:pb-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-navy-800">
            {/* Column 1: Brand & Advocate Identity */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-navy-900 border border-brass-500/40 flex items-center justify-center text-ivory-100 font-serif font-bold text-lg shadow-sm">
                  AD
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ivory-50 tracking-tight">
                    ADV. ARJUN DESHMUKH
                  </h3>
                  <p className="text-xs font-semibold tracking-[0.16em] text-brass-400 uppercase">
                    Advocate & Legal Consultant
                  </p>
                </div>
              </div>

              <p className="text-sm italic font-serif text-ivory-300/90 leading-relaxed max-w-sm">
                "{advocateData.tagline}"
              </p>

              <p className="text-xs text-ivory-400 leading-relaxed max-w-sm">
                {advocateData.positioning}
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 text-xs text-brass-300/90 bg-navy-900/80 px-3 py-1.5 rounded border border-brass-500/20 w-fit">
                  <Scale className="w-3.5 h-3.5 text-brass-400 shrink-0" />
                  <span>{advocateData.barCouncil.name} ({advocateData.barCouncil.enrollmentYear})</span>
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-ivory-400 bg-navy-900/60 px-3 py-1.5 rounded border border-navy-700/50 w-fit">
                  <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brass-400 border-b border-navy-800 pb-2">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-ivory-300">
                <li>
                  <Link to="/" className="hover:text-brass-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-brass-300 transition-colors">
                    About Adv. Deshmukh
                  </Link>
                </li>
                <li>
                  <Link to="/practice-areas" className="hover:text-brass-300 transition-colors">
                    Practice Areas
                  </Link>
                </li>
                <li>
                  <Link to="/experience" className="hover:text-brass-300 transition-colors">
                    Experience & Timeline
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="hover:text-brass-300 transition-colors">
                    Legal Insights & Guides
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="hover:text-brass-300 transition-colors">
                    Client Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-brass-300 transition-colors">
                    Contact Office
                  </Link>
                </li>
                <li>
                  <Link to="/consultation" className="text-brass-400 font-semibold hover:text-brass-300 flex items-center gap-1">
                    <span>Book Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Practice Areas */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brass-400 border-b border-navy-800 pb-2">
                Practice Areas
              </h4>
              <ul className="space-y-2 text-sm text-ivory-300">
                {practiceAreasData.slice(0, 8).map((area) => (
                  <li key={area.id}>
                    <Link
                      to={`/practice-areas/${area.slug}`}
                      className="hover:text-brass-300 transition-colors line-clamp-1"
                    >
                      {area.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Chamber Information */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brass-400 border-b border-navy-800 pb-2">
                Chamber Office
              </h4>
              <div className="space-y-3 text-xs text-ivory-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ivory-100">{advocateData.contact.officeAddress.line1}</p>
                    <p>{advocateData.contact.officeAddress.line2}</p>
                    <p>{advocateData.contact.officeAddress.city}, {advocateData.contact.officeAddress.state} - {advocateData.contact.officeAddress.pincode}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                  <a
                    href={generateCallUrl()}
                    onClick={() => trackEvent('call_clicked', { source: 'footer' })}
                    className="hover:text-brass-300 transition-colors text-ivory-100 font-medium"
                  >
                    {advocateData.contact.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                  <a
                    href={`mailto:${advocateData.contact.email}`}
                    className="hover:text-brass-300 transition-colors text-ivory-100"
                  >
                    {advocateData.contact.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <Clock className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-ivory-100">{advocateData.contact.officeHours.days}</p>
                    <p className="text-ivory-400">{advocateData.contact.officeHours.timing}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pune Localities Served SEO Strip */}
          <div className="py-6 border-b border-navy-800 text-xs text-ivory-400">
            <span className="font-semibold text-brass-400 uppercase tracking-wider block mb-2">
              Serving Clients Across Pune & PCMC:
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-ivory-300">
              {puneLocalities.map((locality, idx) => (
                <span key={locality} className="flex items-center gap-2">
                  <span>{locality}</span>
                  {idx < puneLocalities.length - 1 && <span className="text-navy-700">•</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Bar & Legal Disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory-400">
            <div>
              <p>© {new Date().getFullYear()} Adv. Arjun Deshmukh. All rights reserved.</p>
              <p className="text-[11px] text-ivory-500 mt-0.5">
                Bar Council of Maharashtra & Goa Reg. No. MAH/2008/Pune
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs">
              <button
                onClick={() => openDisclaimer('disclaimer')}
                className="hover:text-brass-300 underline underline-offset-4 cursor-pointer"
              >
                Legal Disclaimer
              </button>
              <button
                onClick={() => openDisclaimer('privacy')}
                className="hover:text-brass-300 underline underline-offset-4 cursor-pointer"
              >
                Privacy & Confidentiality Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      <BciDisclaimerModal
        isOpen={disclaimerOpen}
        onClose={() => setDisclaimerOpen(false)}
        initialTab={disclaimerTab}
      />
    </>
  );
};
