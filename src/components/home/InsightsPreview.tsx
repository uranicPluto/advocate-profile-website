import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { insightsData } from '../../data/insightsData';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const InsightsPreview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-ivory-100 border-b border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="LEGAL KNOWLEDGE & GUIDANCE"
            title="Insights & Articles"
            subtitle="Authoritative legal analyses, practical guidance, and statutory checklists for property owners, businesses, and families in Pune."
            className="mb-0"
          />

          <Button
            to="/insights"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0 self-start md:self-auto"
          >
            View All Guides & Articles
          </Button>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insightsData.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl overflow-hidden border border-ivory-300 hover:border-brass-400 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-7">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-slate-muted mb-4">
                  <span className="font-bold uppercase tracking-wider text-brass-700 bg-brass-50 px-2.5 py-1 rounded border border-brass-200">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brass-600" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-navy-950 group-hover:text-brass-700 transition-colors mb-3 leading-snug">
                  <Link to={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Read Article Link */}
              <div className="px-7 py-4 bg-ivory-50 border-t border-ivory-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-brass-700 transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-brass-600" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
