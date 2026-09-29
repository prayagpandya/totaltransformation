import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { useScrolled } from '../../hooks/useScrolled';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { NavDropdown } from './NavDropdown';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  // Routes whose top edge is light need a solid bar from the start.
  const solid = scrolled || pathname === '/member-login';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ease-silk ${
      solid ? 'bg-ivory py-2 shadow-[0_1px_0_rgba(32,39,34,0.08)]' : 'bg-transparent py-4 md:py-5'}`
      }>
      
      <nav aria-label="Primary" className="mx-auto flex max-w-page items-center justify-between gap-6 px-5 md:px-10">
        <Link to="/" aria-label="Total Transformation — home" className="shrink-0">
          <Logo variant={solid ? 'plain' : 'plate'} className="h-12 md:h-14" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((group) =>
          <NavDropdown key={group.label} group={group} light={!solid} />
          )}
        </ul>

        <div className="flex items-center gap-3">
          <Button to="/contact" variant={solid ? 'dark' : 'gold'} className="hidden !px-5 !py-3 sm:inline-flex lg:hidden xl:inline-flex">
            Start your transformation
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden ${
            solid ? 'border-charcoal/15 text-charcoal' : 'border-ivory/30 text-ivory'}`
            }>
            
            <MenuIcon className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>);

}