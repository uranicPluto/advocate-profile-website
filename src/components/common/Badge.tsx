import React from 'react';
import { cn } from '../../utils/analytics';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brass' | 'navy' | 'neutral' | 'success';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brass',
  className,
  icon,
}) => {
  const variantStyles = {
    brass: "bg-brass-100 text-brass-800 border border-brass-300/80",
    navy: "bg-navy-900/10 text-navy-900 border border-navy-900/20",
    neutral: "bg-ivory-200 text-charcoal-700 border border-ivory-300",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="inline-flex shrink-0 text-current">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
