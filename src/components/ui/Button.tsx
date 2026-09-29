import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';

type Variant = 'gold' | 'light' | 'outlineLight' | 'dark' | 'outlineDark';

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  type?: 'button' | 'submit';
  disabled?: boolean;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
};

const variants: Record<Variant, string> = {
  gold: 'bg-gold text-emerald hover:bg-[#d4b273]',
  light: 'bg-ivory text-emerald hover:bg-white',
  outlineLight: 'border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10',
  dark: 'bg-forest text-ivory hover:bg-emerald',
  outlineDark: 'border border-charcoal/25 text-charcoal hover:border-forest hover:text-forest'
};

export function Button({ children, to, href, onClick, variant = 'gold', type = 'button', disabled, arrow = true, className = '', ariaLabel }: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] transition-[background-color,color,border-color,transform] duration-200 ease-silk active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;
  const content =
  <>
      <span>{children}</span>
      {arrow &&
    <ArrowUpRightIcon
      aria-hidden
      className="h-4 w-4 transition-transform duration-200 ease-silk group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

    }
    </>;


  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>);

  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {content}
      </a>);

  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {content}
    </button>);

}