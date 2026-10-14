import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart, CheckCircle2 } from 'lucide-react';
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
      className="py-20 lg:py-28 bg-[#FAFCFD] relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Verified Patient Experiences
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
            Loved by Frisco Families
          </h2>
          <p className="text-base text-[#5A6B80] mt-3">
            Read real feedback from neighbors in Frisco who count on Dr. Dominique Hunt for prompt emergency relief, child-friendly care, and honest treatments.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Main Card with AnimatePresence */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full rounded-[36px] bg-white p-8 sm:p-12 border border-slate-200/80 shadow-xl shadow-[#0F1B2D]/5 flex flex-col justify-between relative"
              >
                {/* Decorative Big Quote Icon */}
                <div className="absolute top-6 right-8 text-teal-100 pointer-events-none">
                  <Quote className="w-16 h-16" />
                </div>

                <div>
                  {/* Rating Stars & Tag */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200/60">
                      {testimonials[currentIndex].tag}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-base sm:text-xl text-[#0F1B2D] font-medium leading-relaxed italic mb-8">
                    "{testimonials[currentIndex].review}"
                  </p>
                </div>

                {/* Patient Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#34D3B4] to-[#22B8E6] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      {testimonials[currentIndex].name.slice(0, 1)}
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-base text-[#0F1B2D]">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs text-[#5A6B80]">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Visit</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 px-4">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-gradient-to-r from-[#34D3B4] to-[#22B8E6]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[#0F1B2D] transition-colors shadow-2xs hover:border-[#22B8E6]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[#0F1B2D] transition-colors shadow-2xs hover:border-[#22B8E6]"
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
