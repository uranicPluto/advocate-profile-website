import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ArrowRight, Shield } from 'lucide-react';
import { advocateData } from '../../data/advocateData';
import { trackEvent, generateCallUrl } from '../../utils/analytics';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Experience', path: '/experience' },
    { name: 'Insights', path: '/insights' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleCallClick = () => {
    trackEvent('call_clicked', { source: 'navbar' });
  };

  const handleBookClick = () => {
    trackEvent('consultation_started', { source: 'navbar' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory-100/95 backdrop-blur-luxury shadow-soft border-b border-ivory-300 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-navy-900 border border-brass-500/40 flex items-center justify-center text-ivory-100 font-serif font-bold text-lg group-hover:border-brass-400 transition-colors shadow-sm">
                AD
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-navy-950 group-hover:text-brass-700 transition-colors">
                  ADV. ARJUN DESHMUKH
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-slate-muted uppercase">
                  Advocate & Legal Consultant • Pune
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-1.5 text-sm font-medium tracking-wide transition-all duration-200 relative ${
                      isActive
                        ? 'text-navy-950 font-semibold'
                        : 'text-charcoal-700 hover:text-brass-700'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brass-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={generateCallUrl()}
                onClick={handleCallClick}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-navy-900 hover:text-brass-700 px-3 py-2 transition-colors"
                title="Call Office"
              >
                <Phone className="w-3.5 h-3.5 text-brass-600" />
                <span>{advocateData.contact.phoneFormatted}</span>
              </a>

              <Button
                to="/consultation"
                variant="brass"
                size="sm"
                icon={<Calendar className="w-3.5 h-3.5" />}
                onClick={handleBookClick}
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                to="/consultation"
                variant="brass"
                size="sm"
                className="text-xs px-2.5 py-1.5 sm:hidden"
                onClick={handleBookClick}
              >
                Book
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-navy-900 hover:bg-ivory-200 focus:outline-none focus:ring-2 focus:ring-brass-500"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-ivory-100 shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 transform border-l border-ivory-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6 pt-16">
            <div className="border-b border-ivory-300 pb-4">
              <span className="font-serif text-xl font-bold text-navy-950 block">
                Adv. Arjun Deshmukh
              </span>
              <span className="text-xs text-slate-muted">
                Pune, Maharashtra • 18+ Years Practice
              </span>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between px-3 py-2.5 rounded text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-brass-500/10 text-navy-950 font-semibold border-l-4 border-brass-500'
                        : 'text-charcoal-800 hover:bg-ivory-200'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-brass-600 opacity-60" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-ivory-300">
            <Button
              to="/consultation"
              variant="brass"
              fullWidth
              icon={<Calendar className="w-4 h-4" />}
            >
              Book a Consultation
            </Button>

            <a
              href={generateCallUrl()}
              onClick={handleCallClick}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded border border-navy-900/30 text-navy-900 font-semibold text-sm hover:bg-ivory-200"
            >
              <Phone className="w-4 h-4 text-brass-600" />
              <span>Call: {advocateData.contact.phoneFormatted}</span>
            </a>

            <div className="flex items-center gap-2 justify-center text-[11px] text-slate-muted pt-2">
              <Shield className="w-3.5 h-3.5 text-brass-600" />
              <span>100% Confidential Legal Consultations</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
