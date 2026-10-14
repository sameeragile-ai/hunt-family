import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  Tv,
  Coffee,
  Headphones,
} from 'lucide-react';
import { InnerPageHero } from '../components/InnerPageHero';
import { clinicData } from '../data/clinicData';
import { clinicImages } from '../data/images';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { TechSection } from '../sections/TechSection';
import { AmenitiesSection } from '../sections/AmenitiesSection';
import { CtaBandSection } from '../sections/CtaBandSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <InnerPageHero
        badge="About Hunt Family Dentistry"
        title="Gentle, Modern & Community-Focused Dental Care in Frisco, TX"
        subtitle="Led by Dr. Dominique Hunt, our clinic blends warm bedside manner with award-winning technology so patients of all ages feel respected, comfortable, and pain-free."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Dr. Hunt' },
        ]}
      />

      {/* Doctor Story & Philosophy */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Portrait Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border-2 sm:border-4 border-white shadow-2xl bg-slate-100 max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                <ImageWithFallback
                  src={clinicImages.drHuntPortrait.url}
                  alt={clinicImages.drHuntPortrait.alt}
                  aspectRatioClass="aspect-4/5"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Award Tag */}
              <div className="absolute bottom-2 right-2 sm:-bottom-6 sm:right-6 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl max-w-[180px] sm:max-w-[220px] border border-white">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-[#0F1B2D] block">
                      Best of Frisco
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#5A6B80]">
                      2024 & 2025 Winner
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Bio Text */}
            <div className="lg:col-span-7 flex flex-col items-start mt-4 lg:mt-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-teal-200/60">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Meet Dr. Dominique Hunt
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0F1B2D] tracking-tight mb-3 sm:mb-4">
                "We Treat You Like Family, Not a File Number."
              </h2>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-[#5A6B80] leading-relaxed mb-6 sm:mb-8">
                <p>
                  Dr. Dominique Hunt established Hunt Family Dentistry with a single guiding mission: to remove the fear, sterile intimidation, and sales pressure so often associated with dental visits.
                </p>
                <p>
                  As an active member of the American Dental Association and a Frisco local, Dr. Hunt combines extensive continuing education with a warm, empathetic chairside manner. Whether guiding a nervous four-year-old through their very first checkup or performing a complex root canal without needles, her focus is always on gentle, conservative care that preserves your natural teeth.
                </p>
                <p>
                  Under her leadership, Hunt Family Dentistry was voted Best Dental Clinic in Frisco for both 2024 and 2025. Her team takes immense pride in delivering completely bilingual care (English and Spanish) in a spa-like environment where patients feel truly at home.
                </p>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0F1B2D] mb-1">
                    Conservative Approach
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#5A6B80]">
                    We treat what is clinically necessary and explain all alternatives with upfront pricing.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0F1B2D] mb-1">
                    Bilingual Practice
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#5A6B80]">
                    Hablamos Español fluently. We ensure clear communication with Spanish-speaking families.
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a
                  href={clinicData.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-md hover:shadow-lg transition-all hover:scale-102 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Book with Dr. Hunt</span>
                </a>
                <a
                  href={`tel:${clinicData.contact.phoneRaw}`}
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-100 text-[#0F1B2D] hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>(469) 269-0997</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Clinic Atmosphere / Interior Showcase */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#FAFCFD] border-y border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
              Modern Frisco Dental Suite
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F1B2D] tracking-tight">
              Designed Around Your Comfort
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B80] mt-3">
              Take a peek inside our light-filled, spotless treatment rooms located on Panther Creek Parkway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-md bg-white">
              <ImageWithFallback
                src={clinicImages.clinicInterior.url}
                alt={clinicImages.clinicInterior.alt}
                aspectRatioClass="aspect-16/10"
                className="w-full h-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-[#0F1B2D] mb-1">
                  Private Sunlit Treatment Suites
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6B80]">
                  Equipped with overhead TVs, ergonomic dental chairs, and HEPA air filtration.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-md bg-white">
              <ImageWithFallback
                src={clinicImages.waitingLounge.url}
                alt={clinicImages.waitingLounge.alt}
                aspectRatioClass="aspect-16/10"
                className="w-full h-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-[#0F1B2D] mb-1">
                  Welcoming Refreshment Lounge
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6B80]">
                  Complimentary artisan coffees, teas, comfortable seating, and quick paperless check-in.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Section Component */}
      <TechSection />

      {/* Amenities Section Component */}
      <AmenitiesSection />

      {/* Bottom CTA */}
      <CtaBandSection />
    </div>
  );
};
