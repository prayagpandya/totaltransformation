import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarIcon, MessageCircleIcon } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';
import { whatsappLink } from '../../utils/contact';

export function FloatingActions() {
  const visible = useScrolled(100);
  const { pathname } = useLocation();
  const hidden = pathname === '/contact' || pathname === '/member-login';

  return (
    <AnimatePresence>
      {visible && !hidden &&
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 md:bottom-6 md:right-6">
        
          <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-200 ease-silk hover:scale-110 hover:-translate-y-0.5">
          
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className="h-12 w-12 object-contain drop-shadow-md" />
          </a>
          <Link
          to="/contact"
          aria-label="Book a session"
          className="flex h-12 items-center gap-2 rounded-full bg-gold px-4 text-xs font-semibold uppercase tracking-[0.14em] text-emerald shadow-lg transition-transform duration-200 ease-silk hover:-translate-y-0.5 md:px-5">
          
            <CalendarIcon className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Book a session</span>
          </Link>
        </motion.div>
      }
    </AnimatePresence>);

}