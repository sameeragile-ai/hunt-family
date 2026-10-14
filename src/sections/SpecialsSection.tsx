import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, Calendar, ArrowRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export const SpecialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-bold uppercase tracking-wider text-rose-800 mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            Limited-Time Practice Promotions
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
            Exclusive New Patient Specials
          </h2>
          <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3 leading-relaxed">
            High-quality dentistry should be accessible. Take advantage of our upfront promotional packages with transparent pricing and zero surprises.
          </p>
        </div>

        {/* 3 Specials Grid with Animated Gradient Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 items-stretch">
          {clinicData.specials.map((special, idx) => {
            const isFeatured = idx === 1; // $139 New Patient is most popular

            return (
              <motion.div
                key={special.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`relative rounded-[28px] sm:rounded-[34px] p-[2px] transition-transform duration-300 hover:-translate-y-1.5 flex flex-col ${
                  isFeatured
                    ? 'bg-gradient-to-tr from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-lg sm:shadow-xl shadow-[#22B8E6]/20'
                    : 'bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-200 hover:from-[#34D3B4] hover:to-[#8B7CF6] shadow-xs'
                }`}
              >
                {/* Inner Card Container */}
                <div className="w-full h-full bg-white rounded-[26px] sm:rounded-[32px] p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left">
                  
                  {/* Subtle watermarked badge */}
                  {isFeatured && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#22B8E6] to-[#34D3B4] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider py-1 px-3.5 sm:py-1.5 sm:px-5 rounded-bl-xl sm:rounded-bl-2xl shadow-xs">
                      {special.badge}
                    </div>
                  )}

                  <div>
                    {!isFeatured && (
                      <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-slate-100 text-[#0F1B2D] uppercase tracking-wider mb-2 sm:mb-3">
                        {special.badge}
                      </span>
                    )}

                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F1B2D] mt-1 sm:mt-2 mb-2 sm:mb-3 leading-snug">
                      {special.title}
                    </h3>

                    {/* Price Block */}
                    <div className="flex flex-wrap items-baseline gap-2 mb-3 sm:mb-4">
                      <span className="font-heading font-extrabold text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
                        {special.price}
                      </span>
                      {special.originalPrice && (
                        <span className="text-xs sm:text-sm font-semibold text-slate-400 line-through">
                          {special.originalPrice}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed mb-4 sm:mb-6">
                      {special.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-slate-100">
                      {special.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 sm:gap-2.5 text-xs text-[#0F1B2D]">
                          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2 sm:w-2.5 h-2 sm:h-2.5" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA & Disclaimer */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100">
                    <a
                      href={clinicData.contact.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                        isFeatured
                          ? 'bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] text-white hover:shadow-lg hover:shadow-[#22B8E6]/30 animate-shimmer'
                          : 'bg-slate-900 text-white hover:bg-[#0F1B2D] hover:shadow-md'
                      }`}
                    >
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{special.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-0.5 shrink-0" />
                    </a>

                    <p className="text-[10px] sm:text-[11px] text-slate-400 text-center mt-2.5 sm:mt-3 italic">
                      {special.disclaimer}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Policy Callout */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-xs text-[#5A6B80]">
            * Note: Promotional specials cannot be combined with dental insurance benefits.
            Call <a href={`tel:${clinicData.contact.phoneRaw}`} className="underline font-semibold text-[#0F1B2D]">(469) 269-0997</a> with any questions!
          </p>
        </div>

      </div>
    </section>
  );
};
