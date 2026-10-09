import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { practiceAreasData, type PracticeArea } from '../data/practiceAreasData';
import { renderPracticeIcon } from '../components/home/PracticeAreasSection';
import { Button } from '../components/common/Button';
import { ConsultationCTA } from '../components/home/ConsultationCTA';

export const PracticeAreasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Property', 'Civil', 'Commercial', 'Personal'];

  const filteredAreas = useMemo(() => {
    return practiceAreasData.filter((area: PracticeArea) => {
      const matchesCategory = selectedCategory === 'All' || area.category === selectedCategory;
      const matchesSearch =
        area.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.keyServices.some((service: string) => service.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen pt-28 pb-16 bg-ivory-100 font-sans">
      {/* Page Header */}
      <section className="py-16 lg:py-20 bg-navy-950 text-ivory-100 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brass-500/10 border border-brass-500/30 text-brass-400">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Legal Services Directory
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-ivory-50 tracking-tight leading-tight">
              Areas of Practice
            </h1>
            <p className="text-base sm:text-xl text-ivory-300 font-serif italic leading-relaxed">
              "Focused legal assistance across matters that affect your property, business, family and future."
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-ivory-300 sticky top-16 z-20 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
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
                  {cat === 'All' ? 'All Practice Areas' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-muted absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search practice areas or services..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-ivory-300 text-xs font-medium focus:ring-2 focus:ring-brass-500 bg-ivory-50/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 lg:py-24 bg-ivory-50 border-b border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAreas.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-ivory-300 p-8">
              <p className="font-serif text-xl text-navy-950 mb-2">No matching practice areas found.</p>
              <p className="text-xs text-slate-muted mb-4">Try adjusting your search terms or view all categories.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAreas.map((area: PracticeArea) => (
                <div
                  key={area.id}
                  className="group bg-white rounded-xl p-8 border border-ivory-300 hover:border-brass-400 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-lg bg-navy-950 text-brass-400 flex items-center justify-center group-hover:bg-brass-500 group-hover:text-navy-950 transition-colors shadow-sm">
                        {renderPracticeIcon(area.iconName, "w-6 h-6")}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-muted bg-ivory-100 px-3 py-1 rounded-full border border-ivory-200">
                        {area.category}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-navy-950 group-hover:text-brass-700 transition-colors mb-3">
                      {area.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                      {area.shortDescription}
                    </p>

                    {/* Key Services Mini List */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brass-700 block">
                        Key Services:
                      </span>
                      {area.keyServices.slice(0, 3).map((serv: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-brass-500" />
                          <span className="line-clamp-1">{serv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-ivory-200 flex items-center justify-between">
                    <Link
                      to={`/practice-areas/${area.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-950 group-hover:text-brass-700 transition-colors"
                    >
                      <span>Explore Practice Area</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to={`/consultation?matter=${encodeURIComponent(area.shortTitle)}`}
                      className="text-xs text-brass-700 font-semibold hover:underline"
                    >
                      Book Slot
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Consultation Conversion CTA */}
      <ConsultationCTA />
    </main>
  );
};
