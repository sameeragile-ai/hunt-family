import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Phone, Calendar, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'New Patients', path: '/new-patients' },
  { name: 'Membership', path: '/membership' },
  { name: 'About Dr. Hunt', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Scroll Progress Bar at very top of viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating Pill Header Wrapper */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-300 pt-3 sm:pt-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-full flex items-center justify-between ${
            isScrolled
              ? 'py-2 sm:py-2.5 px-4 sm:px-6 bg-white/75 backdrop-blur-xl shadow-lg shadow-[#0F1B2D]/5 border border-white/80 ring-1 ring-[#22B8E6]/20'
              : 'py-3 sm:py-3.5 px-5 sm:px-7 bg-white/90 backdrop-blur-md shadow-sm border border-slate-100/80 ring-1 ring-slate-900/5'
          }`}
        >
          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8E6] rounded-full"
            aria-label="Hunt Family Dentistry - Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#0F1B2D]">
                <Sparkles className="w-5 h-5 text-[#22B8E6] transition-transform duration-300 group-hover:rotate-12" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-[#0F1B2D] text-base sm:text-lg tracking-tight leading-none">
                HUNT
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22B8E6] to-[#8B7CF6] ml-1">
                  FAMILY
                </span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#5A6B80] mt-0.5">
                Dentistry • Frisco, TX
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8E6] ${
                      isActive
                        ? 'text-[#0F1B2D] font-semibold'
                        : 'text-[#5A6B80] hover:text-[#0F1B2D]'
                    }`
                  }
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navPillIndicator"
                      className="absolute inset-x-2 bottom-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Actions: Phone & Book CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Call button */}
            <a
              href={`tel:${clinicData.contact.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#0F1B2D] hover:text-[#22B8E6] py-2 px-3 rounded-full hover:bg-slate-100/60 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8E6]"
              title={`Call ${clinicData.contact.phone}`}
            >
              <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="hidden xl:inline">{clinicData.contact.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Book online gradient button */}
            <a
              href={clinicData.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 py-2 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-md shadow-[#22B8E6]/25 hover:shadow-lg hover:shadow-[#22B8E6]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-shimmer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7CF6] focus-visible:ring-offset-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0F1B2D] rounded-full hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8E6]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#22B8E6] px-4 py-1">
                Navigation
              </p>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between text-xl font-heading font-semibold py-3 px-4 rounded-2xl transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-50 to-sky-50 text-[#0F1B2D] border border-teal-100 font-bold'
                          : 'text-[#0F1B2D] hover:bg-slate-50'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#5A6B80]">→</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="border-t border-slate-100 pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-[#5A6B80]">
                <MapPin className="w-4 h-4 text-[#22B8E6] shrink-0" />
                <span>11220 Panther Creek Pkwy #100, Frisco, TX</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${clinicData.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-slate-100 text-[#0F1B2D] font-semibold text-sm hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call Office</span>
                </a>
                <a
                  href={clinicData.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] text-white font-semibold text-sm shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Online</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
