import React, { useRef } from 'react';
import { motion } from 'motion/react';
import {
  Tv,
  Coffee,
  Headphones,
  HeartHandshake,
  Languages,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { clinicData } from '../data/clinicData';

const amenityIcons: Record<string, React.ReactNode> = {
  Tv: <Tv className="w-6 h-6 text-teal-600" />,
  Coffee: <Coffee className="w-6 h-6 text-amber-600" />,
  Headphones: <Headphones className="w-6 h-6 text-sky-600" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-rose-500" />,
  Languages: <Languages className="w-6 h-6 text-indigo-600" />,
};

export const AmenitiesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600 mb-2 block">
              Spa-Like Dental Comfort
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
              Amenities Designed to Ease Your Mind
            </h2>
            <p className="text-base text-[#5A6B80] mt-3">
              We eliminated the sterile, intimidating atmosphere. Every detail of our Frisco office is curated so you and your children feel pampered, warm, and secure.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[#0F1B2D] transition-colors shadow-2xs hover:border-[#22B8E6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8E6]"
              aria-label="Scroll amenities left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[#0F1B2D] transition-colors shadow-2xs hover:border-[#22B8E6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8E6]"
              aria-label="Scroll amenities right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Strip */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clinicData.amenities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] snap-start p-7 rounded-[28px] bg-slate-50/80 border border-slate-200/70 hover:border-[#22B8E6]/60 hover:bg-white hover:shadow-xl hover:shadow-[#22B8E6]/10 transition-all duration-300 flex flex-col justify-between shrink-0"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center mb-5">
                  {amenityIcons[item.icon] || <Sparkles className="w-6 h-6 text-teal-600" />}
                </div>

                <h3 className="font-heading font-bold text-xl text-[#0F1B2D] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5A6B80] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-teal-700 font-semibold">
                <span>Complimentary for every patient</span>
                <span className="text-slate-300">✦</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
