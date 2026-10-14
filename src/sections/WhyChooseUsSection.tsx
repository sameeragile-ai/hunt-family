import React from 'react';
import { motion } from 'motion/react';
import { Eye, Users, Feather, Check, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const pillarIcons = [
  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" key="eye" />,
  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" key="users" />,
  <Feather className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" key="feather" />,
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent via-slate-50/70 to-transparent relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            The Hunt Family Promise
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
            Why Families in Frisco Choose Hunt
          </h2>
          <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3 leading-relaxed">
            We built our practice on the values we want for our own family: clinical excellence, complete honesty, and an environment where nobody dreads the dentist.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {clinicData.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#22B8E6]/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 text-left"
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-bl from-teal-100/40 via-sky-50/20 to-transparent rounded-tr-[24px] sm:rounded-tr-[32px] rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-teal-50 to-sky-50 border border-teal-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                  {pillarIcons[idx]}
                </div>

                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#22B8E6] block mb-1">
                  {pillar.subtitle}
                </span>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F1B2D] mb-2 sm:mb-4">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Verified Checklist Tag */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-800">
                <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Patient-verified standard of care</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
