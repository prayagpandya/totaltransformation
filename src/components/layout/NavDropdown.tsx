import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import type { NavGroup } from '../../types/content';

type NavDropdownProps = {group: NavGroup;light: boolean;};

export function NavDropdown({ group, light }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const timer = useRef<number>();

  useEffect(() => setOpen(false), [pathname]);

  const isActive =
  pathname === group.to || Boolean(group.children?.some((c) => pathname === c.to || pathname.startsWith(`${c.to}/`)));
  const tone = light ? 'text-ivory/85 hover:text-ivory' : 'text-charcoal/75 hover:text-charcoal';
  const label =
  <span className="relative">
      {group.label}
      {isActive && <span aria-hidden className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />}
    </span>;

  const itemClass = `flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${tone}`;

  if (!group.children) {
    return (
      <li>
        <Link to={group.to} className={itemClass} aria-current={isActive ? 'page' : undefined}>
          {label}
        </Link>
      </li>);

  }

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        window.clearTimeout(timer.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        timer.current = window.setTimeout(() => setOpen(false), 120);
      }}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}>
      
      <button type="button" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)} className={itemClass}>
        {label}
        <ChevronDownIcon aria-hidden className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open &&
        <div className="absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-3">
            <motion.ul
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="origin-top rounded-2xl bg-ivory p-2 shadow-[0_24px_60px_-20px_rgba(7,63,52,0.35)] ring-1 ring-charcoal/5">
            
              {group.children.map((child) => {
              const active = pathname === child.to;
              return (
                <li key={child.to}>
                    <Link
                    to={child.to}
                    aria-current={active ? 'page' : undefined}
                    className={`block rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-cream ${active ? 'bg-cream' : ''}`}>
                    
                      <span className="block font-serif text-xl leading-tight text-charcoal">{child.label}</span>
                      {child.description && <span className="mt-0.5 block text-xs text-charcoal/55">{child.description}</span>}
                    </Link>
                  </li>);

            })}
            </motion.ul>
          </div>
        }
      </AnimatePresence>
    </li>);

}