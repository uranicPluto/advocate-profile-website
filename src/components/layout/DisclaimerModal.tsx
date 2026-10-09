import React, { useState, useEffect } from 'react';
import { X, Shield, Scale, Lock } from 'lucide-react';

export interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'disclaimer' | 'privacy';
}

export const DisclaimerModal: React.FC = () => {
  return null;
};

export const BciDisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'disclaimer',
}) => {
  const [activeTab, setActiveTab] = useState<'disclaimer' | 'privacy'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-ivory-100 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-ivory-300">
        {/* Header */}
        <div className="bg-navy-950 px-6 py-4 flex items-center justify-between text-ivory-100 border-b border-navy-800">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-brass-400" />
            <h3 className="font-serif text-lg font-semibold tracking-wide">
              Legal Information & Ethics Compliance
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-ivory-400 hover:text-ivory-100 p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-ivory-300 bg-ivory-200/60 px-6 pt-3 gap-4">
          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 cursor-pointer ${
              activeTab === 'disclaimer'
                ? 'border-brass-500 text-navy-950'
                : 'border-transparent text-slate-muted hover:text-navy-950'
            }`}
          >
            Bar Council Disclaimer
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-brass-500 text-navy-950'
                : 'border-transparent text-slate-muted hover:text-navy-950'
            }`}
          >
            Client Confidentiality Policy
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          {activeTab === 'disclaimer' ? (
            <>
              <div className="p-3.5 bg-brass-500/10 border border-brass-500/30 rounded-lg flex items-start gap-3">
                <Shield className="w-5 h-5 text-brass-700 shrink-0 mt-0.5" />
                <p className="text-xs text-navy-900 font-medium leading-relaxed">
                  As per the rules of the <strong>Bar Council of India</strong>, advocates are not permitted to solicit work or advertise. By accessing this website, you acknowledge and confirm that you are seeking information relating to Adv. Arjun Deshmukh of your own accord.
                </p>
              </div>

              <h4 className="font-serif font-bold text-navy-950 text-base mt-4">
                No Legal Advice or Advocate-Client Relationship
              </h4>
              <p>
                The information provided under this website is solely available at your request for informational purposes only, and should not be interpreted as soliciting or advertisement. Adv. Arjun Deshmukh is not liable for any consequence of any action taken by the user relying on material/information provided under this website.
              </p>
              <p>
                Transmission, receipt, or use of this website does not constitute or create an advocate-client relationship. Recipients of content from this website should not act upon any information without seeking professional legal counsel based on their specific factual circumstances.
              </p>

              <h4 className="font-serif font-bold text-navy-950 text-base mt-4">
                Representative Matters & Testimonials
              </h4>
              <p>
                All representative matters and client reviews referenced on this website are anonymized or presented with identities sanitized to strictly uphold client-attorney confidentiality under Section 126 of the Indian Evidence Act, 1872.
              </p>
            </>
          ) : (
            <>
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3">
                <Lock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                  Privileged Legal Communication: Any documents, personal details, or matter summaries shared through our appointment and contact forms are held in strict legal confidence.
                </p>
              </div>

              <h4 className="font-serif font-bold text-navy-950 text-base mt-4">
                1. Information Collection
              </h4>
              <p>
                We only collect information voluntarily provided by you (such as your name, phone number, email address, and brief matter description) solely for the purpose of evaluating and scheduling your requested consultation.
              </p>

              <h4 className="font-serif font-bold text-navy-950 text-base mt-4">
                2. Non-Disclosure & Security
              </h4>
              <p>
                We do not sell, rent, or trade your personal information with any third parties or marketing agencies. All communications are protected under professional privilege.
              </p>

              <h4 className="font-serif font-bold text-navy-950 text-base mt-4">
                3. Physical & Digital Safeguards
              </h4>
              <p>
                All documents submitted for pre-consultation review are stored securely and accessed exclusively by Adv. Arjun Deshmukh and authorized chamber staff.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-ivory-200 px-6 py-3.5 flex justify-end border-t border-ivory-300">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-navy-900 text-ivory-50 text-xs font-semibold rounded hover:bg-navy-800 transition-colors cursor-pointer"
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
};
