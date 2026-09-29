import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { getLenis } from '../../hooks/useLenis';
import { whatsappLink } from '../../utils/contact';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';

type MobileMenuProps = {open: boolean;onClose: () => void;};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[60] flex flex-col bg-emerald text-ivory lg:hidden">
        
          <div className="flex items-center justify-between px-5 py-4">
            <Link to="/" onClick={onClose} aria-label="Home">
              <Logo variant="plate" className="h-12" />
            </Link>
            <button type="button" onClick={onClose} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30">
              <XIcon className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <nav data-lenis-prevent className="flex-1 overflow-y-auto px-5 pb-10 pt-6" aria-label="Mobile">
            <ul className="space-y-8">
              {navigation.map((group, gi) =>
            <motion.li
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 + gi * 0.05, ease: [0.23, 1, 0.32, 1] }}>
              
                  <Link to={group.to} onClick={onClose} className="font-serif text-4xl">
                    {group.label}
                  </Link>
                  {group.children &&
              <ul className="mt-3 grid grid-cols-1 gap-2 border-l border-gold/40 pl-4 sm:grid-cols-2">
                      {group.children.map((c) =>
                <li key={c.to}>
                          <Link to={c.to} onClick={onClose} className="text-sm text-ivory/70 hover:text-ivory">
                            {c.label}
                          </Link>
                        </li>
                )}
                    </ul>
              }
                </motion.li>
            )}
            </ul>
            <div className="mt-12 flex flex-col gap-3">
              <Button to="/contact" variant="gold">Start your transformation</Button>
              <Button href={whatsappLink()} variant="outlineLight">Talk to us on WhatsApp</Button>
              <Link to="/member-login" onClick={onClose} className="mt-2 text-center text-sm text-ivory/60 underline-offset-4 hover:underline">
                Member login
              </Link>
            </div>
          </nav>
        </motion.div>
      }
    </AnimatePresence>);

}