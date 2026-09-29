import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { CustomCursor } from './CustomCursor';
import { ErrorBoundary } from './ErrorBoundary';
import { getLenis, useLenis } from '../../hooks/useLenis';

export function Layout({ children }: {children: React.ReactNode;}) {
  const { pathname, hash } = useLocation();
  const reduce = useReducedMotion();
  useLenis(!reduce);

  useEffect(() => {
    const lenis = getLenis();
    if (hash) {
      const el = document.querySelector(hash);
      if (el instanceof HTMLElement) {
        lenis ? lenis.scrollTo(el, { offset: -80 }) : el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen w-full bg-ivory text-charcoal">
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-gold px-5 py-3 text-sm font-semibold text-emerald focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <ErrorBoundary>
          <motion.div
            key={pathname}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
            
            {children}
          </motion.div>
        </ErrorBoundary>
      </main>
      <Footer />
      <FloatingActions />
      <CustomCursor />
    </div>);

}