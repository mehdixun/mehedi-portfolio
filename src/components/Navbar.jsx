import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    if (id === 'home' && window && window.location && window.location.pathname !== '/') {
      try {
        window.history.pushState({}, '', '/');
      } catch {}
    }
    const el = document.getElementById(id);
    if (el) {
      try {
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
      } catch {}
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    const options = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(callback, options);
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isNavOpen = open;

  return (
    <nav
      className="bg-gray-900 backdrop-blur-md bg-opacity-95 p-4 fixed w-full z-50 shadow-lg border-b border-gray-800 transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center max-w-7xl px-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-white text-2xl font-bold hover:text-blue-400 transition duration-300 flex items-center gap-2"
          aria-label="Portfolio home"
        >
          {/* <span className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            
          </span> */}
          <span className="hidden sm:inline">Mehedi Hasan</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          id="hamburger-button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-2 transition duration-300"
          aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isNavOpen}
        >
          <i className={`fas fa-${isNavOpen ? 'times' : 'bars'} text-xl`}></i>
        </button>

        {/* Navigation Links */}
        <AnimatePresence>
          {(isNavOpen || window.innerWidth >= 768) && (
            <motion.div
              id="nav-links"
              className="md:flex space-x-1 md:space-x-2 absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-gray-900 md:bg-transparent flex-col md:flex-row overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {SECTIONS.map((link) => {
                const label = link.charAt(0).toUpperCase() + link.slice(1);
                const isActive = active === link;
                const hrefValue = link === 'home' ? '/' : `#${link}`;
                return (
                  <a
                    key={link}
                    href={hrefValue}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`px-4 py-3 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 block md:inline-block ${
                      isActive
                        ? 'text-white bg-blue-600 md:bg-transparent md:text-blue-400 md:border-b-2 md:border-blue-400'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800 md:hover:bg-transparent md:hover:text-blue-400'
                    }`}
                    role="menuitem"
                  >
                    {label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
