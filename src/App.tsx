import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Chatbot } from './components/Chatbot';

// Code-split pages with React.lazy
const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage }))
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const NewPatientsPage = lazy(() =>
  import('./pages/NewPatientsPage').then((m) => ({ default: m.NewPatientsPage }))
);
const MembershipPage = lazy(() =>
  import('./pages/MembershipPage').then((m) => ({ default: m.MembershipPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // Dynamic document title for SEO
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Hunt Family Dentistry - Gentle & Modern Care in Frisco, TX',
      '/services': 'Services & Treatments | Hunt Family Dentistry Frisco',
      '/new-patients': 'New Patient $139 Special & Info | Hunt Family Dentistry',
      '/membership': 'Dental Savings Club ($100-$150/yr) | Hunt Family Dentistry',
      '/about': 'About Dr. Dominique Hunt | Award-Winning Dentist in Frisco',
      '/contact': 'Contact & Hours | Hunt Family Dentistry 11220 Panther Creek Pkwy',
    };
    document.title = titles[pathname] || 'Hunt Family Dentistry - Frisco, TX';
  }, [pathname]);

  return null;
}

// Fallback spinner
const LoadingFallback = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-3 border-[#22B8E6] border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-semibold text-[#5A6B80] tracking-wider uppercase">
        Loading Hunt Family Dentistry...
      </span>
    </div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="w-full flex-1"
      >
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/new-patients" element={<NewPatientsPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAFCFD] text-[#0F1B2D]">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          <AnimatedRoutes />
        </main>
        <Footer />
        <MobileStickyBar />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}
