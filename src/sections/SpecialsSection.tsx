import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, Calendar, ArrowRight, ShieldAlert, Heart } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export const SpecialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-bold uppercase tracking-wider text-rose-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            Limited-Time Practice Promotions
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
            Exclusive New Patient Specials
          </h2>
          <p className="text-base text-[#5A6B80] mt-3">
            High-quality dentistry should be accessible. Take advantage of our upfront promotional packages with transparent pricing and zero surprises.
          </p>
        </div>

        {/* 3 Specials Grid with Animated Gradient Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {clinicData.specials.map((special, idx) => {
            const isFeatured = idx === 1; // $139 New Patient is most popular

            return (
              <motion.div
                key={special.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`relative rounded-[34px] p-[2px] transition-transform duration-300 hover:-translate-y-2 flex flex-col ${
                  isFeatured
                    ? 'bg-gradient-to-tr from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-xl shadow-[#22B8E6]/20'
                    : 'bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-200 hover:from-[#34D3B4] hover:to-[#8B7CF6] shadow-md'
                }`}
              >
                {/* Inner Card Container */}
                <div className="w-full h-full bg-white rounded-[32px] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Subtle watermarked badge */}
                  {isFeatured && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#22B8E6] to-[#34D3B4] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-5 rounded-bl-2xl shadow-xs">
                      {special.badge}
                    </div>
                  )}

                  <div>
                    {!isFeatured && (
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-[#0F1B2D] uppercase tracking-wider mb-3">
                        {special.badge}
                      </span>
                    )}

                    <h3 className="font-heading font-extrabold text-2xl text-[#0F1B2D] mt-2 mb-3">
                      {special.title}
                    </h3>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0F1B2D] tracking-tight">
                        {special.price}
                      </span>
                      {special.originalPrice && (
                        <span className="text-sm font-semibold text-slate-400 line-through">
                          {special.originalPrice}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-[#5A6B80] leading-relaxed mb-6">
                      {special.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      {special.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-xs text-[#0F1B2D]">
                          <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA & Disclaimer */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <a
                      href={clinicData.contact.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-6 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                        isFeatured
                          ? 'bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] text-white hover:shadow-lg hover:shadow-[#22B8E6]/30 animate-shimmer'
                          : 'bg-slate-900 text-white hover:bg-[#0F1B2D] hover:shadow-md'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{special.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-0.5" />
                    </a>

                    <p className="text-[11px] text-slate-400 text-center mt-3 italic">
                      {special.disclaimer}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Policy Callout */}
        <div className="text-center mt-10">
          <p className="text-xs text-[#5A6B80]">
            * Note: Promotional specials cannot be combined with dental insurance benefits.
            Call <a href={`tel:${clinicData.contact.phoneRaw}`} className="underline font-semibold text-[#0F1B2D]">(469) 269-0997</a> with any questions!
          </p>
        </div>

      </div>
    </section>
  );
};
