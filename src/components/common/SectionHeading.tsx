import React from 'react';
import { cn } from '../../utils/analytics';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className,
  titleClassName,
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={cn("max-w-3xl mb-12", isCenter ? "mx-auto text-center" : "", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-2 mb-3", isCenter ? "justify-center" : "")}>
          <span className="w-6 h-[1.5px] bg-brass-500 inline-block" />
          <span className={cn(
            "text-xs font-bold tracking-[0.2em] uppercase",
            isDark ? "text-brass-400" : "text-brass-700"
          )}>
            {eyebrow}
          </span>
          {isCenter && <span className="w-6 h-[1.5px] bg-brass-500 inline-block" />}
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight leading-[1.15]",
          isDark ? "text-ivory-50" : "text-navy-950",
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-sans",
            isDark ? "text-ivory-300/80" : "text-slate-muted",
            isCenter ? "max-w-2xl mx-auto" : ""
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
