import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/analytics';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'brass' | 'outline' | 'ghost' | 'navy-outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brass-500/50 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-navy-900 text-ivory-50 hover:bg-navy-800 shadow-card hover:shadow-elevated border border-navy-700/50",
    brass: "bg-brass-500 text-navy-950 hover:bg-brass-400 shadow-brass hover:shadow-elevated font-semibold border border-brass-400",
    secondary: "bg-ivory-200 text-navy-900 hover:bg-ivory-300 border border-ivory-300",
    outline: "bg-transparent text-navy-900 border border-navy-900/30 hover:border-navy-900 hover:bg-navy-900/5",
    'navy-outline': "bg-transparent text-ivory-100 border border-brass-500/40 hover:border-brass-400 hover:bg-brass-500/10",
    ghost: "bg-transparent text-navy-900 hover:bg-ivory-200/60",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth ? "w-full" : "",
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal && href.startsWith('http') ? "_blank" : undefined}
        rel={isExternal && href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
