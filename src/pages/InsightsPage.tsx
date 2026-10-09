import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { insightsData, type InsightArticle } from '../data/insightsData';
import { Button } from '../components/common/Button';
import { ConsultationCTA } from '../components/home/ConsultationCTA';

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Property Law', 'Documentation', 'Civil Law'];

  const filteredArticles = useMemo(() => {
    return insightsData.filter((article: InsightArticle) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.keyTakeaways.some((k: string) => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen pt-28 pb-16 bg-ivory-100 font-sans">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-navy-950 text-ivory-100 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Legal Knowledge & Guides • Pune
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-ivory-50 tracking-tight leading-tight">
              Legal Insights & Articles
            </h1>
            <p className="text-base sm:text-xl text-ivory-300 font-serif italic leading-relaxed">
              "Practical legal analyses, statutory checklists, and answers to common property and civil questions in Maharashtra."
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-ivory-300 sticky top-16 z-20 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-navy-950 text-ivory-100 shadow-sm'
                      : 'bg-ivory-100 text-charcoal-700 hover:bg-ivory-200 border border-ivory-300'
                  }`}
                >
                  {cat === 'All' ? 'All Articles' : cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-muted absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword or topic..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-ivory-300 text-xs font-medium focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-ivory-300 p-8">
              <p className="font-serif text-xl text-navy-950 mb-2">No matching articles found.</p>
              <p className="text-xs text-slate-muted mb-4">Try different search terms or clear your filter.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              >
                Reset Search
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article: InsightArticle) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-xl overflow-hidden border border-ivory-300 hover:border-brass-400 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between text-xs text-slate-muted mb-4">
                      <span className="font-bold uppercase tracking-wider text-brass-700 bg-brass-50 px-3 py-1 rounded-full border border-brass-200">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brass-600" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-2xl font-bold text-navy-950 group-hover:text-brass-700 transition-colors mb-3 leading-snug">
                      <Link to={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                      {article.summary}
                    </p>

                    {/* Key Takeaways preview */}
                    <div className="space-y-1.5 p-3.5 bg-ivory-50 rounded-lg border border-ivory-200 text-xs">
                      <span className="font-bold text-navy-950 uppercase tracking-wider text-[10px] block">
                        Key Takeaway:
                      </span>
                      <p className="text-slate-muted line-clamp-2">
                        {article.keyTakeaways[0]}
                      </p>
                    </div>
                  </div>

                  {/* Read Article Link */}
                  <div className="px-8 py-4 bg-ivory-50 border-t border-ivory-200 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-brass-700 transition-colors">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-brass-600" />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Consultation Banner */}
      <ConsultationCTA />
    </main>
  );
};
