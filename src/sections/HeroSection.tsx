import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Calendar,
  Phone,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Clock,
  Heart,
  ChevronRight,
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
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 20;
    const y = (clientY / height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Soft Mesh Blobs with Subtle Motion */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Mint Blob */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#34D3B4]/18 blur-3xl"
        />
        {/* Aqua Blob */}
        <motion.div
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.95, 1.15, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-0 w-[480px] h-[480px] rounded-full bg-[#22B8E6]/16 blur-3xl"
        />
        {/* Soft Violet Blob */}
        <motion.div
          animate={{
            x: [0, 25, -30, 0],
            y: [0, -25, 35, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 left-1/3 w-[420px] h-[420px] rounded-full bg-[#8B7CF6]/14 blur-3xl"
        />
        {/* Subtle noise/grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0F1B2D_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Badge & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs mb-6 text-xs sm:text-sm font-semibold text-[#0F1B2D]"
            >
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                <Star className="w-3 h-3 fill-amber-500" />
              </div>
              <span className="text-[#0F1B2D]">Voted Best in Frisco</span>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                2024 & 2025
              </span>
            </motion.div>

            {/* Main Headline with Vertical Word Rotation */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0F1B2D] tracking-tight leading-[1.08] mb-6"
            >
              Gentle Dentistry for{' '}
              <span className="inline-block relative min-w-[200px] sm:min-w-[280px] h-[1.15em] align-top overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={{ y: 40, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -40, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-[#18a98b] via-[#0c8bb5] to-[#6d5ce7]"
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
              className="text-base sm:text-lg text-[#5A6B80] max-w-xl leading-relaxed mb-8"
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Online Booking Button */}
              <a
                href={clinicData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-lg shadow-[#22B8E6]/25 hover:shadow-xl hover:shadow-[#22B8E6]/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-shimmer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Online Now</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              {/* Phone Call Button */}
              <a
                href={`tel:${clinicData.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-base font-semibold text-[#0F1B2D] bg-white/90 hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-[#22B8E6] transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call (469) 269-0997</span>
              </a>
            </motion.div>

            {/* Quick trust snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#5A6B80]"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Accepts All Major PPO Plans</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Cherry 0% Financing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Hablamos Español</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Organic Blob Family Image + 3 Floating Glass Cards (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Parallax Container */}
            <motion.div
              style={{
                x: mousePos.x,
                y: mousePos.y,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="relative w-full max-w-lg lg:max-w-none"
            >
              {/* Decorative background aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#34D3B4]/30 via-[#22B8E6]/25 to-[#8B7CF6]/30 rounded-[42px] blur-2xl -z-10 scale-95" />

              {/* Main Organic Shaped Hero Image */}
              <div className="relative overflow-hidden rounded-[38px] border-4 border-white/90 shadow-2xl shadow-[#0F1B2D]/10 bg-white">
                <ImageWithFallback
                  src={clinicImages.heroFamily.url}
                  alt={clinicImages.heroFamily.alt}
                  aspectRatioClass="aspect-4/3 sm:aspect-5/4"
                  priority={true}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Subtle gradient overlay at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F1B2D]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white flex items-center justify-between text-xs pointer-events-none">
                  <span className="font-medium drop-shadow-md">
                    Friendly care in Frisco, TX
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/30">
                    Ages 0+ Welcome
                  </span>
                </div>
              </div>

              {/* Floating Card 1: Live Status (Top Left) */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -left-4 sm:-left-8 glass-card rounded-2xl p-3 sm:p-3.5 shadow-xl max-w-[210px] sm:max-w-[240px] z-20"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-3 w-3 shrink-0">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${liveStatus.badgeColor}`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${liveStatus.badgeColor}`}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0F1B2D] leading-tight">
                      {liveStatus.statusText}
                    </span>
                    <span className="text-[10px] text-[#5A6B80] mt-0.5">
                      {liveStatus.nextChangeText}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2: 4.9 Rating (Bottom Left) */}
              <motion.div
                animate={{
                  y: [0, 9, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-2 sm:-left-6 glass-card rounded-2xl p-3 sm:p-3.5 shadow-xl max-w-[210px] sm:max-w-[230px] z-20"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-heading font-extrabold text-sm text-[#0F1B2D]">
                        4.9 / 5.0
                      </span>
                      <span className="text-[10px] text-amber-600 font-bold">★★★★★</span>
                    </div>
                    <p className="text-[10px] text-[#5A6B80]">
                      Loved by Frisco families
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 3: $139 Special (Right Edge) */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -right-3 sm:-right-8 top-1/2 -translate-y-1/2 glass-card rounded-2xl p-3 sm:p-4 shadow-xl border border-teal-100/80 max-w-[190px] sm:max-w-[210px] z-20"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
                    Special Offer
                  </span>
                  <div className="flex items-baseline gap-1 my-0.5">
                    <span className="font-heading font-extrabold text-2xl text-[#0F1B2D]">
                      $139
                    </span>
                    <span className="text-[11px] text-slate-400 line-through">
                      $410
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#0F1B2D] leading-tight">
                    New Patient Exam, X-Rays & Cleaning
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
