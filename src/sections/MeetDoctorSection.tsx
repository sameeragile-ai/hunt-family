import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { clinicImages } from '../data/images';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const MeetDoctorSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Portrait & Floating Badge (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft decorative aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#34D3B4]/20 via-[#22B8E6]/20 to-[#8B7CF6]/20 rounded-[44px] blur-xl -z-10" />

              {/* Portrait Container */}
              <div className="overflow-hidden rounded-[36px] border-4 border-white shadow-2xl bg-slate-100">
                <ImageWithFallback
                  src={clinicImages.drHuntPortrait.url}
                  alt={clinicImages.drHuntPortrait.alt}
                  aspectRatioClass="aspect-4/5"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-104"
                />
              </div>

              {/* Floating Trust Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-card p-4 rounded-2xl shadow-xl max-w-[220px] border border-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-sm text-[#0F1B2D] block">
                      Best in Frisco
                    </span>
                    <span className="text-[11px] text-[#5A6B80]">
                      2024 & 2025 Winner
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-bold uppercase tracking-wider text-teal-800 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              Meet Your Lead Dentist
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight leading-tight">
              Dr. Dominique Hunt, DDS
            </h2>

            <p className="text-base sm:text-lg font-medium text-teal-700 mt-1 mb-5">
              Owner, Lead Dentist & Advocate for Fear-Free Family Dentistry
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#5A6B80] leading-relaxed">
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
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 w-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F1B2D]">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>American Dental Association</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F1B2D]">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Bilingual Care (Hablamos Español)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F1B2D]">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero Needle Numbing Techniques</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F1B2D]">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Conservative Treatment Approach</span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={clinicData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-md hover:shadow-lg transition-all hover:scale-102 flex items-center gap-2"
              >
                <span>Schedule a Consultation with Dr. Hunt</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
