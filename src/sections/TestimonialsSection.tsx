import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = clinicData.testimonials;

  // Auto-play interval with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-12 sm:py-20 lg:py-28 bg-[#FAFCFD] relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2.5 sm:mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Verified Patient Experiences
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
            Loved by Frisco Families
          </h2>
          <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3 leading-relaxed">
            Read real feedback from neighbors in Frisco who count on Dr. Dominique Hunt for prompt emergency relief, child-friendly care, and honest treatments.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Main Card with AnimatePresence */}
          <div className="relative min-h-[260px] sm:min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full rounded-[24px] sm:rounded-[36px] bg-white p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-md sm:shadow-xl shadow-[#0F1B2D]/5 flex flex-col justify-between relative text-left"
              >
                {/* Decorative Big Quote Icon */}
                <div className="absolute top-4 right-6 sm:top-6 sm:right-8 text-teal-100 pointer-events-none">
                  <Quote className="w-10 h-10 sm:w-16 sm:h-16" />
                </div>

                <div>
                  {/* Rating Stars & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4 sm:mb-6">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200/60">
                      {testimonials[currentIndex].tag}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-sm sm:text-lg lg:text-xl text-[#0F1B2D] font-medium leading-relaxed italic mb-6 sm:mb-8">
                    "{testimonials[currentIndex].review}"
                  </p>
                </div>

                {/* Patient Author Info */}
                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-slate-100 gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#34D3B4] to-[#22B8E6] text-white font-bold flex items-center justify-center text-xs sm:text-sm shadow-xs shrink-0">
                      {testimonials[currentIndex].name.slice(0, 1)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#0F1B2D] truncate">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#5A6B80] truncate">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  <div className="hidden min-[420px]:flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-5 sm:mt-8 px-2">
            {/* Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 sm:w-8 bg-gradient-to-r from-[#34D3B4] to-[#22B8E6]'
                      : 'w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[#0F1B2D] transition-colors shadow-2xs hover:border-[#22B8E6] focus:outline-none active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[#0F1B2D] transition-colors shadow-2xs hover:border-[#22B8E6] focus:outline-none active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
