import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle2,
  Send,
  ShieldCheck,
  Navigation,
} from 'lucide-react';
import { advocateData } from '../data/advocateData';
import { Button } from '../components/common/Button';
import { generateCallUrl, generateWhatsAppUrl, trackEvent } from '../utils/analytics';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    legalMatter: 'Property',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('contact_form_submitted', {
      name: formData.fullName,
      matter: formData.legalMatter,
      phone: formData.phone,
    });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-28 pb-16 bg-ivory-100 font-sans">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-navy-950 text-ivory-100 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Chamber Office • Pune
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-ivory-50 tracking-tight leading-tight">
              Let's discuss your matter.
            </h1>
            <p className="text-base sm:text-xl text-ivory-300 font-serif italic leading-relaxed">
              "Tell us briefly what you need help with. We'll get back to you regarding the next available consultation."
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form & Chamber Details */}
      <section className="py-16 lg:py-24 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-ivory-300 shadow-soft space-y-6">
                <div className="border-b border-ivory-200 pb-4">
                  <h2 className="font-serif text-2xl font-bold text-navy-950">
                    Schedule a Consultation
                  </h2>
                  <p className="text-xs text-slate-muted mt-1">
                    Fill in your details below. All consultations are strictly confidential.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-4 animate-fade-in">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="font-serif text-2xl font-bold text-emerald-950">
                      Thank you. Your consultation request has been received.
                    </h3>
                    <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                      Our office manager will contact you shortly at <strong>{formData.phone}</strong> regarding the next available consultation slot.
                    </p>
                    <div className="pt-2">
                      <a
                        href={generateWhatsAppUrl(`Hello Adv. Arjun Deshmukh, I just submitted an inquiry on your website regarding ${formData.legalMatter}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send WhatsApp Message to Chamber</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Suresh Patil"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                          Phone Number (+91) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98000 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                          Legal Matter Category *
                        </label>
                        <select
                          value={formData.legalMatter}
                          onChange={(e) => setFormData({ ...formData, legalMatter: e.target.value })}
                          className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                        >
                          <option value="Property">Property & Real Estate</option>
                          <option value="Civil Dispute">Civil Dispute & Litigation</option>
                          <option value="Contract / Agreement">Contract / Commercial Agreement</option>
                          <option value="Family Matter">Family / Matrimonial Matter</option>
                          <option value="Business">Business & Corporate Advisory</option>
                          <option value="Property Documentation">Property Documentation & Deeds</option>
                          <option value="Legal Notice">Legal Notice & Reply</option>
                          <option value="Succession / Inheritance">Succession, Wills & Inheritance</option>
                          <option value="Other">Other Legal Matter</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                        Preferred Consultation Date
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                        Brief Summary of Your Legal Situation *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Briefly describe your requirements or concerns (e.g. reviewing an Agreement for Sale before paying advance, responding to a notice, etc.)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        icon={<Send className="w-4 h-4 text-brass-400" />}
                      >
                        Request Consultation
                      </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-muted pt-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-brass-600" />
                      <span>All communications are protected under advocate-client privilege.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Office Location, Direct Actions & Hours */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Quick Actions Card */}
              <div className="bg-navy-950 text-ivory-100 rounded-2xl p-7 border border-brass-500/30 shadow-card space-y-5">
                <h3 className="font-serif text-xl font-bold text-ivory-50">
                  Direct Contact Actions
                </h3>

                <div className="space-y-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_clicked', { source: 'contact_page' })}
                    className="flex items-center justify-between p-3.5 rounded-lg bg-emerald-900/60 border border-emerald-700/60 hover:bg-emerald-800/80 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-emerald-400" />
                      <div>
                        <span className="font-bold text-xs text-white block">
                          WhatsApp Chamber Office
                        </span>
                        <span className="text-[11px] text-emerald-300">
                          Instant message for slot scheduling
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-300 font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>

                  <a
                    href={generateCallUrl()}
                    onClick={() => trackEvent('call_clicked', { source: 'contact_page' })}
                    className="flex items-center justify-between p-3.5 rounded-lg bg-navy-900 border border-navy-800 hover:border-brass-500 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-brass-400" />
                      <div>
                        <span className="font-bold text-xs text-ivory-50 block">
                          Call Office Directly
                        </span>
                        <span className="text-[11px] text-brass-300 font-mono">
                          {advocateData.contact.phoneFormatted}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-brass-400 font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Chamber Address Card */}
              <div className="bg-white rounded-2xl p-7 border border-ivory-300 shadow-soft space-y-4 text-xs text-charcoal-800">
                <h3 className="font-serif font-bold text-lg text-navy-950 border-b border-ivory-200 pb-2">
                  Pune Chamber Office
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm text-navy-950">
                        {advocateData.contact.officeAddress.line1}
                      </p>
                      <p className="text-slate-muted">{advocateData.contact.officeAddress.line2}</p>
                      <p className="text-slate-muted">{advocateData.contact.officeAddress.landmark}</p>
                      <p className="font-semibold text-navy-900 mt-1">
                        {advocateData.contact.officeAddress.city}, {advocateData.contact.officeAddress.state} - {advocateData.contact.officeAddress.pincode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Mail className="w-5 h-5 text-brass-600 shrink-0" />
                    <div>
                      <p className="text-slate-muted">Official Email:</p>
                      <a href={`mailto:${advocateData.contact.email}`} className="font-bold text-navy-950 hover:underline">
                        {advocateData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Clock className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-navy-950">{advocateData.contact.officeHours.days}</p>
                      <p className="text-slate-muted">{advocateData.contact.officeHours.timing}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Visual Map Card */}
              <div className="bg-white rounded-2xl p-6 border border-ivory-300 shadow-soft space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-sm text-navy-950">
                    Location & Landmarks
                  </h4>
                  <span className="text-[11px] text-brass-700 font-semibold flex items-center gap-1">
                    <Navigation className="w-3 h-3" />
                    <span>Shivajinagar, Pune</span>
                  </span>
                </div>

                <div className="h-44 rounded-xl overflow-hidden bg-stone-200 relative border border-ivory-300 flex items-center justify-center text-center p-4">
                  <div className="absolute inset-0 bg-navy-950/5 [background-image:radial-gradient(#B89B5E_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10 bg-white/95 p-3 rounded-lg shadow-card border border-brass-500/40 text-xs">
                    <p className="font-bold text-navy-950 font-serif">Adv. Arjun Deshmukh Chamber</p>
                    <p className="text-[11px] text-slate-muted">Supreme Headway • Senapati Bapat Road</p>
                    <p className="text-[10px] text-brass-700 font-medium mt-1">2 Mins from Shivajinagar District Court</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
