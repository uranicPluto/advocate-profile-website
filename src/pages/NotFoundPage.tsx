import React from 'react';
import { Scale, Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-ivory-100 flex items-center justify-center font-sans px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 sm:p-10 border border-ivory-300 shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-navy-950 text-brass-400 flex items-center justify-center mx-auto border border-brass-500/30">
          <Scale className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brass-700">
            Error 404
          </span>
          <h1 className="font-serif text-3xl font-bold text-navy-950">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
            The page or legal section you requested could not be located. It may have moved or been updated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4 text-brass-400" />}
          >
            Return to Homepage
          </Button>

          <Button
            to="/practice-areas"
            variant="secondary"
            size="md"
          >
            View Practice Areas
          </Button>
        </div>
      </div>
    </main>
  );
};
