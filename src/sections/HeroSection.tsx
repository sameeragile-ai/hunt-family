import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Calendar,
  Phone,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { clinicData, getClinicLiveStatus } from '../data/clinicData';
import { clinicImages } from '../data/images';
import { ImageWithFallback } from '../components/ImageWithFallback';

const ROTATING_WORDS = ['Family', 'Kids', 'Smiles', 'Emergencies'];

export const HeroSection: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [liveStatus, setLiveStatus] = useState(getClinicLiveStatus());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rotate hero keyword every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Update live status periodically
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setLiveStatus(getClinicLiveStatus());
    }, 60000);
    return () => clearInterval(statusInterval);
  }, []);

  // Mouse parallax handler for desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 16;
    const y = (clientY / height - 0.5) * 16;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] pt-24 sm:pt-32 pb-12 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Soft Mesh Blobs with Subtle Motion */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Mint Blob */}
        <motion.div
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -30, 15, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#34D3B4]/18 blur-3xl"
        />
        {/* Aqua Blob */}
        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 25, -20, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-0 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-[#22B8E6]/16 blur-3xl"
        />
        {/* Soft Violet Blob */}
        <motion.div
          animate={{
            x: [0, 20, -25, 0],
            y: [0, -20, 25, 0],
            scale: [1, 1.06, 0.94, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 left-1/4 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-[#8B7CF6]/14 blur-3xl"
        />
        {/* Subtle noise/grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0F1B2D_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Badge & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs mb-4 sm:mb-6 text-xs sm:text-sm font-semibold text-[#0F1B2D]"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-500" />
              </div>
              <span>Voted Best in Frisco</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                2024 & 2025
              </span>
            </motion.div>

            {/* Main Headline with Vertical Word Rotation */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0F1B2D] tracking-tight leading-[1.15] sm:leading-[1.08] mb-4 sm:mb-6 w-full"
            >
              Gentle Dentistry for{' '}
              <span className="inline-block relative min-w-[150px] min-[360px]:min-w-[175px] sm:min-w-[230px] md:min-w-[270px] lg:min-w-[340px] h-[1.18em] align-top overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={{ y: 30, opacity: 0, filter: 'blur(3px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -30, opacity: 0, filter: 'blur(3px)' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-[#18a98b] via-[#0c8bb5] to-[#6d5ce7] whitespace-nowrap"
                  >
                    {ROTATING_WORDS[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
              <br className="hidden sm:inline" />
              Zero Needles. Zero Fear.
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5A6B80] max-w-xl leading-relaxed mb-6 sm:mb-8"
            >
              Experience modern, compassionate care in Frisco with Dr. Dominique Hunt.
              From painless injection-free numbing and iTero 3D scanning to $0 deductible savings plans,
              we make healthy smiles effortless for every age.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              {/* Online Booking Button */}
              <a
                href={clinicData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-semibold text-white bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-md sm:shadow-lg shadow-[#22B8E6]/25 hover:shadow-xl hover:shadow-[#22B8E6]/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-shimmer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book Online Now</span>
                <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />
              </a>

              {/* Phone Call Button */}
              <a
                href={`tel:${clinicData.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-semibold text-[#0F1B2D] bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-[#22B8E6] transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Call (469) 269-0997</span>
              </a>
            </motion.div>

            {/* Quick trust snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-3 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs font-medium text-[#5A6B80]"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 shrink-0" />
                <span>All Major PPOs Accepted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 shrink-0" />
                <span>Cherry 0% Financing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 shrink-0" />
                <span>Hablamos Español</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Organic Blob Family Image + 3 Floating Glass Cards (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none">
            
            {/* Parallax Container */}
            <motion.div
              style={{
                x: mousePos.x,
                y: mousePos.y,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="relative w-full"
            >
              {/* Decorative background aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#34D3B4]/30 via-[#22B8E6]/25 to-[#8B7CF6]/30 rounded-[36px] sm:rounded-[42px] blur-2xl -z-10 scale-95" />

              {/* Main Organic Shaped Hero Image */}
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[38px] border-2 sm:border-4 border-white/90 shadow-2xl shadow-[#0F1B2D]/10 bg-white">
                <ImageWithFallback
                  src={clinicImages.heroFamily.url}
                  alt={clinicImages.heroFamily.alt}
                  aspectRatioClass="aspect-4/3 sm:aspect-5/4"
                  priority={true}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Subtle gradient overlay at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#0F1B2D]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-4 sm:left-5 sm:right-5 text-white flex items-center justify-between text-xs pointer-events-none">
                  <span className="font-medium drop-shadow-md text-[10px] sm:text-xs truncate mr-2">
                    Gentle Care in Frisco, TX
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-semibold border border-white/30 shrink-0">
                    Ages 0+ Welcome
                  </span>
                </div>
              </div>

              {/* Floating Card 1: Live Status (Top Left) */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-2 left-2 sm:-top-6 sm:-left-6 glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3.5 shadow-lg max-w-[145px] sm:max-w-[230px] z-20"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5">
                  <div className="relative flex h-2 w-2 sm:h-3 sm:w-3 shrink-0">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${liveStatus.badgeColor}`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 ${liveStatus.badgeColor}`}
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] sm:text-xs font-bold text-[#0F1B2D] leading-tight truncate">
                      {liveStatus.statusText}
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-[#5A6B80] mt-0.5 truncate">
                      {liveStatus.nextChangeText}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2: 4.9 Rating (Bottom Left) */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3.5 shadow-lg max-w-[135px] sm:max-w-[210px] z-20"
              >
                <div className="flex items-center gap-1.5 sm:gap-2.5">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-heading font-extrabold text-[11px] sm:text-sm text-[#0F1B2D]">
                        4.9 / 5.0
                      </span>
                    </div>
                    <p className="text-[8px] sm:text-[10px] text-[#5A6B80] truncate">
                      Frisco families
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 3: $139 Special (Bottom Right on mobile, Right Edge on desktop) */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute bottom-2 right-2 sm:bottom-auto sm:-right-6 sm:top-1/2 sm:-translate-y-1/2 glass-card rounded-xl sm:rounded-2xl p-2 sm:p-3.5 shadow-lg border border-teal-100/80 max-w-[135px] sm:max-w-[190px] z-20"
              >
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-teal-600">
                    Special Offer
                  </span>
                  <div className="flex items-baseline gap-1 my-0.5">
                    <span className="font-heading font-extrabold text-base sm:text-2xl text-[#0F1B2D]">
                      $139
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 line-through">
                      $410
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-semibold text-[#0F1B2D] leading-tight">
                    New Patient Special
                  </span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
