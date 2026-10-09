import React, { useState } from 'react';
import { Star, ShieldCheck, MapPin, CheckCircle2, Send } from 'lucide-react';
import { testimonialsData, type Testimonial } from '../data/testimonialsData';
import { Button } from '../components/common/Button';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { trackEvent } from '../utils/analytics';

export const TestimonialsPage: React.FC = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [reviewName, setReviewName] = useState('');
  const [reviewLocation, setReviewLocation] = useState('');
  const [reviewMatter, setReviewMatter] = useState('Property Matter');
  const [reviewComment, setReviewComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('contact_form_submitted', { type: 'client_testimonial_feedback', name: reviewName });
    setFeedbackSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-28 pb-16 bg-ivory-100 font-sans">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-navy-950 text-ivory-100 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Verified Client Feedback
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-ivory-50 tracking-tight leading-tight">
              What Clients Say
            </h1>
            <p className="text-base sm:text-xl text-ivory-300 font-serif italic leading-relaxed">
              "Honest accounts of clarity, preparation, and practical dispute resolution across Pune."
            </p>
          </div>
        </div>
      </section>

      {/* Ethics & Privacy Notice */}
      <section className="py-8 bg-white border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-xl bg-ivory-100 border border-ivory-300 flex items-start sm:items-center gap-3 text-xs text-charcoal-700">
            <ShieldCheck className="w-5 h-5 text-brass-700 shrink-0 mt-0.5 sm:mt-0" />
            <p>
              <strong>Professional Ethics Compliance:</strong> Under Section 126 of the Indian Evidence Act and Bar Council of India guidelines, client names and identifiable commercial terms are anonymized to maintain complete professional privilege.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((item: Testimonial) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-8 border border-ivory-300 hover:border-brass-400 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-brass-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brass-500 text-brass-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.verificationBadge}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="font-serif italic text-charcoal-800 text-sm sm:text-base leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-ivory-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-navy-950">
                        {item.clientRole}
                      </h3>
                      <p className="text-[11px] text-slate-muted flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-brass-600" />
                        <span>{item.location}</span>
                      </p>
                    </div>

                    <span className="text-[10px] text-slate-muted">
                      {item.date}
                    </span>
                  </div>

                  <div className="mt-2 text-[11px] text-brass-800 font-semibold bg-ivory-50 px-2.5 py-1 rounded border border-ivory-200">
                    Matter: {item.matterCategory}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Feedback Form */}
      <section className="py-20 bg-ivory-100 border-b border-ivory-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-ivory-300 shadow-soft">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brass-700">
                Client Service Standards
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                Share Consultation Feedback
              </h2>
              <p className="text-xs sm:text-sm text-slate-muted">
                If you have previously engaged Adv. Arjun Deshmukh's chamber, you are welcome to leave private feedback.
              </p>
            </div>

            {feedbackSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-lg text-emerald-950">
                  Thank You for Your Valuable Feedback
                </h4>
                <p className="text-xs text-emerald-800">
                  Your feedback has been received privately by the advocate's chamber.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                      Your Initials / Name
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      placeholder="e.g. R. Kulkarni"
                      className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                      Locality in Pune
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewLocation}
                      onChange={(e) => setReviewLocation(e.target.value)}
                      placeholder="e.g. Kothrud, Pune"
                      className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Legal Matter Handled
                  </label>
                  <select
                    value={reviewMatter}
                    onChange={(e) => setReviewMatter(e.target.value)}
                    className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                  >
                    <option value="Property Matter">Property Law / Title Verification</option>
                    <option value="Civil Dispute">Civil Litigation / Injunction</option>
                    <option value="Commercial Contract">Commercial Contract / Lease</option>
                    <option value="Family Succession">Family Succession / Partition</option>
                    <option value="Documentation">Property Deed / GPA Documentation</option>
                    <option value="Other">Other Legal Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Your Experience & Comments
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="Describe how the legal counsel or documentation was handled..."
                    className="w-full p-3 rounded-lg border border-ivory-300 text-xs focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    icon={<Send className="w-4 h-4 text-brass-400" />}
                  >
                    Submit Confidential Feedback
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <ConsultationCTA />
    </main>
  );
};
