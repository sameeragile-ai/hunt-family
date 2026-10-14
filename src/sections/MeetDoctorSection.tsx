import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { clinicImages } from '../data/images';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const MeetDoctorSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Portrait & Floating Badge (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative">
              {/* Soft decorative aura */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#34D3B4]/20 via-[#22B8E6]/20 to-[#8B7CF6]/20 rounded-[32px] sm:rounded-[44px] blur-xl -z-10" />

              {/* Portrait Container */}
              <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl bg-slate-100">
                <ImageWithFallback
                  src={clinicImages.drHuntPortrait.url}
                  alt={clinicImages.drHuntPortrait.alt}
                  aspectRatioClass="aspect-4/5"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-104"
                />
              </div>

              {/* Floating Trust Card */}
              <div className="absolute bottom-3 right-3 sm:-bottom-6 sm:-right-4 glass-card p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl max-w-[180px] sm:max-w-[220px] border border-white text-left">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-[#0F1B2D] block">
                      Best in Frisco
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#5A6B80]">
                      2024 & 2025 Winner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              Meet Your Lead Dentist
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight leading-tight">
              Dr. Dominique Hunt, DDS
            </h2>

            <p className="text-sm sm:text-base lg:text-lg font-medium text-teal-700 mt-1 mb-3 sm:mb-5">
              Owner, Lead Dentist & Advocate for Fear-Free Family Dentistry
            </p>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-[#5A6B80] leading-relaxed">
              <p>
                "When I founded Hunt Family Dentistry in Frisco, my goal was simple: to create a dental home where patients feel genuinely listened to, completely unhurried, and treated with the same warmth and dignity I would give my own family."
              </p>
              <p>
                Known for her calm chairside manner, Dr. Hunt specializes in treating fearful patients, busy parents, and young children. She believes in building multi-generational relationships rather than quick transactional visits. Her conservative clinical philosophy means you will never face sales pressure for procedures you don't need.
              </p>
              <p>
                A proud member of the American Dental Association and voted Best Dentist in Frisco for two consecutive years (2024 and 2025), Dr. Hunt continually invests in advanced continuing education, 3D scanning, and injection-free numbing techniques to guarantee the gentlest care possible.
              </p>
            </div>

            {/* Accolades & Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-100 w-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F1B2D]">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>American Dental Association Member</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F1B2D]">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Bilingual Office (Hablamos Español)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F1B2D]">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Injection-Free Numbing System</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F1B2D]">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Conservative Treatment Philosophy</span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-6 sm:mt-8 w-full sm:w-auto">
              <a
                href={clinicData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-md hover:shadow-lg transition-all hover:scale-102 flex items-center justify-center gap-2"
              >
                <span>Schedule a Consultation with Dr. Hunt</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
