import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
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
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Video,
  Building,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import { trackEvent, generateWhatsAppUrl } from '../../utils/analytics';
import { Button } from '../common/Button';

interface FormData {
  matterCategory: string;
  subTopic: string;
  description: string;
  hasDocuments: boolean;
  urgency: string;
  consultationType: 'in_person' | 'video';
  preferredDate: string;
  preferredTimeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  acceptedConfidentiality: boolean;
}

const matterOptions = [
  { id: 'Property Law & Real Estate', icon: Building2, label: 'Property & Real Estate', desc: 'Title search, deeds, MahaRERA, disputes' },
  { id: 'Civil Litigation & Disputes', icon: Scale, label: 'Civil Litigation', desc: 'Court suits, injunctions, recovery, appeals' },
  { id: 'Contracts & Agreements', icon: FileCheck, label: 'Contracts & Agreements', desc: 'Commercial leases, MSAs, NDAs, reviews' },
  { id: 'Family & Matrimonial Matters', icon: HeartHandshake, label: 'Family Matters', desc: 'Mutual divorce, settlements, custody' },
  { id: 'Business & Corporate Advisory', icon: Briefcase, label: 'Business Advisory', desc: 'SME retainer, MSME recovery, compliance' },
  { id: 'Property Documentation', icon: FileText, label: 'Property Documentation', desc: 'Sale deed, gift deed, release deed, GPA' },
  { id: 'Legal Notices & Responses', icon: MailCheck, label: 'Legal Notices', desc: 'Cheque bounce, notice replies, demands' },
  { id: 'Succession & Inheritance', icon: ShieldCheck, label: 'Succession & Wills', desc: 'Will drafting, probate, heir certificates' },
  { id: 'Consumer Disputes', icon: ShieldAlert, label: 'Consumer Matters', desc: 'Insurance claims, builder deficiencies' },
  { id: 'Other Legal Matter', icon: Scale, label: 'Other Legal Matter', desc: 'General counsel or unique circumstance' },
];

const timeSlots = [
  '10:30 AM – 11:30 AM',
  '11:30 AM – 12:30 PM',
  '02:30 PM – 03:30 PM',
  '04:00 PM – 05:00 PM',
  '05:30 PM – 06:30 PM',
];

export const ConsultationWizard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialMatter = searchParams.get('matter') || '';

  const [currentStep, setCurrentStep] = useState(1);
  const [referenceId, setReferenceId] = useState('');
  const [formData, setFormData] = useState<FormData>({
    matterCategory: initialMatter || 'Property Law & Real Estate',
    subTopic: '',
    description: '',
    hasDocuments: true,
    urgency: 'Standard (Next 2-3 days)',
    consultationType: 'in_person',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTimeSlot: '02:30 PM – 03:30 PM',
    fullName: '',
    phone: '',
    email: '',
    city: 'Pune',
    acceptedConfidentiality: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    trackEvent('consultation_started', { step: currentStep });
  }, [currentStep]);

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.matterCategory) {
        newErrors.matterCategory = 'Please select a matter category.';
      }
    } else if (step === 2) {
      if (!formData.description.trim() || formData.description.length < 15) {
        newErrors.description = 'Please provide a brief description (at least 15 characters).';
      }
    } else if (step === 3) {
      if (!formData.preferredDate) {
        newErrors.preferredDate = 'Please select a preferred date.';
      }
      if (!formData.preferredTimeSlot) {
        newErrors.preferredTimeSlot = 'Please select a preferred time slot.';
      }
    } else if (step === 4) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full Name is required.';
      }
      if (!formData.phone.trim() || formData.phone.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number.';
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.acceptedConfidentiality) {
        newErrors.acceptedConfidentiality = 'Please acknowledge the confidentiality agreement.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 4) {
        // Generate booking reference ID
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const ref = `AD-PUN-2026-${randomNum}`;
        setReferenceId(ref);
        
        // Trigger completion event & confetti
        trackEvent('consultation_completed', {
          referenceId: ref,
          matter: formData.matterCategory,
          type: formData.consultationType,
          date: formData.preferredDate,
        });

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B89B5E', '#0B1726', '#E2DDD0'],
        });

        setCurrentStep(5);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="bg-white rounded-2xl shadow-elevated border border-ivory-300 overflow-hidden font-sans">
      {/* Step Progress Header */}
      <div className="bg-navy-950 p-6 sm:p-8 text-ivory-100 border-b border-navy-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-brass-400 block mb-1">
              {currentStep <= 4 ? `Step 0${currentStep} of 04` : 'Booking Request Confirmed'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50">
              {currentStep === 1 && 'Select Legal Matter Category'}
              {currentStep === 2 && 'Brief Description of the Situation'}
              {currentStep === 3 && 'Choose Format & Preferred Slot'}
              {currentStep === 4 && 'Your Contact & Review'}
              {currentStep === 5 && 'Consultation Request Dispatched'}
            </h2>
          </div>

          {currentStep <= 4 && (
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((stepNum) => (
                <div
                  key={stepNum}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    stepNum === currentStep
                      ? 'bg-brass-500 text-navy-950 shadow-brass'
                      : stepNum < currentStep
                      ? 'bg-emerald-600 text-white'
                      : 'bg-navy-900 text-ivory-400 border border-navy-700'
                  }`}
                >
                  {stepNum < currentStep ? '✓' : `0${stepNum}`}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Step Body */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* STEP 1: SELECT MATTER */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <p className="text-sm text-charcoal-700">
              Select the primary practice area that best matches your legal question or documentation requirement:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {matterOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = formData.matterCategory === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, matterCategory: opt.id })}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${
                      isSelected
                        ? 'border-brass-500 bg-brass-500/10 shadow-sm ring-1 ring-brass-500'
                        : 'border-ivory-300 hover:border-brass-400 bg-ivory-50/50 hover:bg-white'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-brass-500 text-navy-950' : 'bg-navy-900 text-brass-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-navy-950">
                        {opt.label}
                      </h4>
                      <p className="text-xs text-slate-muted mt-0.5 leading-snug">
                        {opt.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {errors.matterCategory && (
              <p className="text-xs text-red-600 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.matterCategory}</span>
              </p>
            )}
          </div>
        )}

        {/* STEP 2: DESCRIPTION */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in max-w-2xl mx-auto">
            <div>
              <label className="block font-serif font-bold text-sm text-navy-950 mb-2">
                Selected Matter: <span className="text-brass-700 font-sans font-semibold">{formData.matterCategory}</span>
              </label>
              <p className="text-xs text-slate-muted mb-4">
                Please provide a brief factual overview. Mention any relevant dates, notice deadlines, or specific properties involved.
              </p>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={5}
                placeholder="Example: We are planning to purchase a resale residential flat in Baner. The seller has provided copies of Index II and the 2014 Sale Deed. We need a thorough 30-year title search report and review of the draft Agreement for Sale before paying the token advance..."
                className="w-full p-4 rounded-xl border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-brass-500 text-sm text-charcoal-800 bg-ivory-50/40"
              />
              {errors.description && (
                <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.description}</span>
                </p>
              )}
            </div>

            {/* Document Status */}
            <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-300 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.hasDocuments}
                  onChange={(e) => setFormData({ ...formData, hasDocuments: e.target.checked })}
                  className="w-4 h-4 text-brass-600 rounded border-stone-300 focus:ring-brass-500"
                />
                <span className="text-xs sm:text-sm font-medium text-navy-950">
                  I possess physical or digital copies of relevant documents (Agreements, Notices, 7/12, etc.)
                </span>
              </label>
              <p className="text-[11px] text-slate-muted pl-7">
                You will be requested to bring or upload these during document scrutiny.
              </p>
            </div>

            {/* Urgency selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-2">
                Timeline Urgency
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['Urgent (Within 24 Hours)', 'Standard (Next 2-3 days)', 'Flexible / Planning'].map((urg) => (
                  <button
                    key={urg}
                    type="button"
                    onClick={() => setFormData({ ...formData, urgency: urg })}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      formData.urgency === urg
                        ? 'bg-navy-950 text-ivory-100 border-navy-950'
                        : 'bg-white text-charcoal-700 border-ivory-300 hover:bg-ivory-100'
                    }`}
                  >
                    {urg}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: DATE & TIME */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in max-w-2xl mx-auto">
            {/* Format: In-Person vs Video */}
            <div>
              <label className="block font-serif font-bold text-base text-navy-950 mb-3">
                Consultation Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, consultationType: 'in_person' })}
                  className={`p-4 rounded-xl text-left border flex items-start gap-3.5 transition-all cursor-pointer ${
                    formData.consultationType === 'in_person'
                      ? 'border-brass-500 bg-brass-500/10 ring-1 ring-brass-500'
                      : 'border-ivory-300 hover:border-brass-400 bg-ivory-50/50'
                  }`}
                >
                  <Building className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-navy-950">
                      In-Person Chamber Consultation
                    </h4>
                    <p className="text-xs text-slate-muted mt-1 leading-relaxed">
                      Chamber Suite 402, Supreme Headway, Near Shivajinagar District Court, Pune.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, consultationType: 'video' })}
                  className={`p-4 rounded-xl text-left border flex items-start gap-3.5 transition-all cursor-pointer ${
                    formData.consultationType === 'video'
                      ? 'border-brass-500 bg-brass-500/10 ring-1 ring-brass-500'
                      : 'border-ivory-300 hover:border-brass-400 bg-ivory-50/50'
                  }`}
                >
                  <Video className="w-5 h-5 text-brass-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-navy-950">
                      Secure Video Consultation
                    </h4>
                    <p className="text-xs text-slate-muted mt-1 leading-relaxed">
                      Google Meet / Zoom link for NRIs and outstation clients across Maharashtra.
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-2">
                Preferred Consultation Date
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full p-3 rounded-xl border border-ivory-300 focus:ring-2 focus:ring-brass-500 text-sm font-medium bg-ivory-50/40"
              />
              {errors.preferredDate && (
                <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>
              )}
            </div>

            {/* Time Slot Picker */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-2">
                Select Available Chamber Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredTimeSlot: slot })}
                    className={`py-3 px-4 rounded-lg text-xs font-semibold border flex items-center justify-between transition-all cursor-pointer ${
                      formData.preferredTimeSlot === slot
                        ? 'bg-navy-900 text-ivory-100 border-navy-900 shadow-sm'
                        : 'bg-white text-charcoal-700 border-ivory-300 hover:bg-ivory-100'
                    }`}
                  >
                    <span>{slot}</span>
                    <Clock className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: CONTACT & REVIEW */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-brass-600 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Kulkarni"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-ivory-300 focus:ring-2 focus:ring-brass-500 text-sm bg-ivory-50/40"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                  Mobile Number (+91) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-brass-600 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    placeholder="+91 98000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-ivory-300 focus:ring-2 focus:ring-brass-500 text-sm bg-ivory-50/40"
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-brass-600 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-ivory-300 focus:ring-2 focus:ring-brass-500 text-sm bg-ivory-50/40"
                  />
                </div>
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                  City / Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-brass-600 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="e.g. Baner, Pune"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-ivory-300 focus:ring-2 focus:ring-brass-500 text-sm bg-ivory-50/40"
                  />
                </div>
              </div>
            </div>

            {/* Summary Review Card */}
            <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-300 space-y-2 text-xs text-charcoal-800">
              <span className="font-bold text-navy-950 uppercase tracking-wider text-[11px] block border-b border-ivory-300 pb-1">
                Consultation Summary
              </span>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <span className="text-slate-muted">Matter:</span> {formData.matterCategory}
                </div>
                <div>
                  <span className="text-slate-muted">Format:</span>{' '}
                  {formData.consultationType === 'in_person' ? 'In-Person Chamber' : 'Video Conference'}
                </div>
                <div>
                  <span className="text-slate-muted">Preferred Date:</span> {formData.preferredDate}
                </div>
                <div>
                  <span className="text-slate-muted">Slot:</span> {formData.preferredTimeSlot}
                </div>
              </div>
            </div>

            {/* Confidentiality Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer pt-2">
              <input
                type="checkbox"
                checked={formData.acceptedConfidentiality}
                onChange={(e) => setFormData({ ...formData, acceptedConfidentiality: e.target.checked })}
                className="w-4 h-4 mt-0.5 text-brass-600 rounded border-stone-300 focus:ring-brass-500"
              />
              <span className="text-xs text-charcoal-700 leading-relaxed">
                I understand this request will be held in legal confidence. The advocate's chamber will confirm the final slot and provide preparation instructions.
              </span>
            </label>
            {errors.acceptedConfidentiality && (
              <p className="text-xs text-red-600">{errors.acceptedConfidentiality}</p>
            )}
          </div>
        )}

        {/* STEP 5: CONFIRMATION STATE */}
        {currentStep === 5 && (
          <div className="space-y-8 animate-fade-in text-center max-w-xl mx-auto py-6">
            {/* Big Success Icon */}
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brass-700">
                Booking Reference: {referenceId}
              </span>
              <h3 className="font-serif text-3xl font-bold text-navy-950">
                Consultation Request Dispatched
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your consultation request regarding <strong>{formData.matterCategory}</strong> has been logged with Adv. Arjun Deshmukh's Pune chamber.
              </p>
            </div>

            {/* Next Steps Checklist Box */}
            <div className="p-6 bg-ivory-50 rounded-xl border border-ivory-300 text-left space-y-3">
              <h4 className="font-serif font-bold text-sm text-navy-950">
                What happens next?
              </h4>
              <ul className="space-y-2 text-xs text-charcoal-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                  <span>Our office manager will call or WhatsApp you within 2 business hours to confirm your final chamber slot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                  <span>Please keep physical or digital photocopies of relevant agreements, 7/12 records, notices, or title documents ready.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                  <span>For emergency inquiries, call our direct line at <strong>+91 98220 00000</strong>.</span>
                </li>
              </ul>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppUrl(`Hello Adv. Deshmukh, I just submitted consultation request #${referenceId} for ${formData.matterCategory}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect via WhatsApp Now</span>
              </a>

              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center py-3 px-5 rounded-lg bg-navy-900 hover:bg-navy-800 text-ivory-100 font-bold text-xs transition-colors"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        )}

        {/* Wizard Navigation Footer */}
        {currentStep <= 4 && (
          <div className="mt-10 pt-6 border-t border-ivory-300 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-700 hover:text-navy-950 px-4 py-2 rounded hover:bg-ivory-200 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <Button
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4 text-brass-400" />}
              onClick={handleNext}
            >
              {currentStep === 4 ? 'Submit Consultation Request' : 'Proceed to Next Step'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
