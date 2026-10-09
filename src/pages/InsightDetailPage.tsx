import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  Calendar,
  Share2,
  CheckCircle2,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
import { insightsData, type InsightArticle } from '../data/insightsData';
import { Button } from '../components/common/Button';
import { generateWhatsAppUrl, trackEvent } from '../utils/analytics';
import { ConsultationCTA } from '../components/home/ConsultationCTA';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = insightsData.find((a: InsightArticle) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = insightsData
    .filter((a: InsightArticle) => a.slug !== slug && (article.relatedSlugs?.includes(a.slug) || a.category === article.category))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard.");
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-16 bg-ivory-100 font-sans">
      {/* Article Header */}
      <section className="py-16 lg:py-20 bg-navy-950 text-ivory-100 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-ivory-400 mb-6">
            <Link to="/" className="hover:text-brass-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/insights" className="hover:text-brass-400 transition-colors">
              Insights
            </Link>
            <span>/</span>
            <span className="text-brass-400 font-semibold">{article.category}</span>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-ivory-300">
              <span className="font-bold uppercase tracking-wider text-brass-400 bg-navy-900 px-3 py-1 rounded-full border border-brass-500/30">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brass-400" />
                <span>{article.readTime}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brass-400" />
                <span>{article.publishDate}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-ivory-50 tracking-tight leading-[1.15]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-ivory-300 leading-relaxed font-serif italic">
              {article.summary}
            </p>

            {/* Author Byline */}
            <div className="flex items-center justify-between pt-4 border-t border-navy-800">
              <div className="flex items-center gap-3">
                <img
                  src="/images/arjun-hero.jpg"
                  alt="Adv. Arjun Deshmukh"
                  className="w-10 h-10 rounded-full object-cover object-top border border-brass-400"
                />
                <div>
                  <p className="font-serif font-bold text-sm text-ivory-50">
                    Adv. Arjun Deshmukh
                  </p>
                  <p className="text-[11px] text-brass-400 font-medium">
                    Advocate & Legal Consultant • Pune
                  </p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-navy-900 border border-navy-700 text-xs font-semibold text-ivory-200 hover:text-brass-400 hover:border-brass-400 transition-colors cursor-pointer"
                title="Share Article"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Reading Container */}
      <section className="py-16 lg:py-24 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Article Body */}
            <div className="lg:col-span-8 space-y-10">
              {/* Key Takeaways Box */}
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div className="p-6 sm:p-8 bg-white rounded-2xl border-l-4 border-l-brass-500 border border-ivory-300 shadow-soft space-y-4">
                  <h3 className="font-serif font-bold text-lg text-navy-950 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-brass-600" />
                    <span>Key Legal Takeaways</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-800">
                    {article.keyTakeaways.map((takeaway: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Table of Contents */}
              {article.tableOfContents && article.tableOfContents.length > 0 && (
                <div className="p-6 bg-ivory-100/70 rounded-xl border border-ivory-300 space-y-3">
                  <span className="font-bold text-xs uppercase tracking-wider text-navy-950 block">
                    Table of Contents
                  </span>
                  <ul className="space-y-1.5 text-xs text-charcoal-700">
                    {article.tableOfContents.map((toc: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brass-500" />
                        <span>{toc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Editorial Article HTML */}
              <div
                className="prose prose-lg max-w-none text-charcoal-800 font-sans leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />

              {/* Article Legal Disclaimer Note */}
              <div className="p-6 rounded-xl bg-ivory-200/80 border border-ivory-300 text-xs text-slate-muted space-y-1.5">
                <p className="font-bold text-navy-950 uppercase tracking-wider text-[11px]">
                  Legal Disclaimer
                </p>
                <p>
                  This article is intended solely for educational and informational purposes under Bar Council of India guidelines. Property and statutory laws vary based on jurisdiction and facts. Please consult an advocate before executing agreements or taking legal action.
                </p>
              </div>

              {/* Author Bio Box */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-ivory-300 shadow-soft flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src="/images/arjun-hero.jpg"
                  alt="Adv. Arjun Deshmukh"
                  className="w-20 h-20 rounded-full object-cover object-top border-2 border-brass-400 shrink-0 shadow-sm"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="font-serif font-bold text-lg text-navy-950">
                    About the Author: Adv. Arjun Deshmukh
                  </h4>
                  <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
                    Adv. Arjun Deshmukh has practiced civil and property law in Pune for over 18 years. He regularly advises property buyers, business owners, and families on due diligence, contract negotiations, and dispute resolution.
                  </p>
                  <div className="pt-2">
                    <Button
                      to="/consultation"
                      variant="primary"
                      size="sm"
                      icon={<Calendar className="w-3.5 h-3.5" />}
                    >
                      Book a Consultation with Adv. Deshmukh
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Consultation Card */}
              <div className="bg-navy-950 text-ivory-100 rounded-2xl p-6 border border-brass-500/30 shadow-card space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brass-400 block">
                  Need Personalized Legal Advice?
                </span>
                <h3 className="font-serif text-xl font-bold text-ivory-50">
                  Discuss Your Matter Confidentially
                </h3>
                <p className="text-xs text-ivory-300/80 leading-relaxed">
                  Every legal situation is unique. Schedule a one-on-one consultation with Adv. Arjun Deshmukh at our Pune chamber.
                </p>

                <div className="space-y-2 pt-2">
                  <Button
                    to="/consultation"
                    variant="brass"
                    size="md"
                    fullWidth
                    icon={<Calendar className="w-4 h-4 text-navy-950" />}
                  >
                    Book Consultation Slot
                  </Button>

                  <a
                    href={generateWhatsAppUrl(`Hello Adv. Arjun Deshmukh, I read your article "${article.title}" and would like to schedule a consultation.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_clicked', { source: 'insight_sidebar' })}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-emerald-800/80 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Chamber</span>
                  </a>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="p-6 bg-white rounded-xl border border-ivory-300 shadow-soft space-y-4">
                  <h4 className="font-serif font-bold text-base text-navy-950 border-b border-ivory-200 pb-2">
                    Related Guides & Articles
                  </h4>
                  <div className="space-y-3">
                    {relatedArticles.map((rel: InsightArticle) => (
                      <Link
                        key={rel.id}
                        to={`/insights/${rel.slug}`}
                        className="block p-3 rounded-lg hover:bg-ivory-100 transition-colors group"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brass-700 block mb-1">
                          {rel.category}
                        </span>
                        <h5 className="font-serif font-bold text-xs text-navy-950 group-hover:text-brass-700 transition-colors line-clamp-2">
                          {rel.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <ConsultationCTA />
    </main>
  );
};
