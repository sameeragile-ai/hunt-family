import React from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  CreditCard,
  HeartHandshake,
  Coffee,
  Tv,
} from 'lucide-react';
import { InnerPageHero } from '../components/InnerPageHero';
import { clinicData } from '../data/clinicData';
import { SpecialsSection } from '../sections/SpecialsSection';
import { PlanVisitSection } from '../sections/PlanVisitSection';
import { CtaBandSection } from '../sections/CtaBandSection';

export const NewPatientsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <InnerPageHero
        badge="Welcome to Hunt Family Dentistry"
        title="Your First Visit to Our Frisco Dental Family"
        subtitle="We treat you like family from the moment you step in. Zero judgment, zero sales pressure, and a gentle experience tailored to your comfort."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'New Patients' },
        ]}
      />

      {/* Featured Specials Banner */}
      <SpecialsSection />

      {/* What to Expect Walkthrough */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#FAFCFD] border-y border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
              Comfortable • Transparent • Unhurried
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0F1B2D] tracking-tight">
              What to Expect During Your First Appointment
            </h2>
            <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3 leading-relaxed">
              We reserve ample time with Dr. Dominique Hunt so you never feel rushed through treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {[
              {
                step: '01',
                title: 'Warm Welcome & Coffee',
                desc: 'Enjoy our complimentary artisan coffee bar, settle into a comfortable chair, and complete seamless digital check-in.',
              },
              {
                step: '02',
                title: 'Gentle 3D Imaging',
                desc: 'Low-radiation panoramic digital X-rays and optional iTero 3D scanning. No goop, no gag reflex, just crisp visuals.',
              },
              {
                step: '03',
                title: 'Comprehensive Exam & Cleaning',
                desc: 'Dr. Hunt conducts a thorough tooth-by-tooth exam, gum health screening, and oral cancer check followed by a gentle polish.',
              },
              {
                step: '04',
                title: 'Clear, Honest Care Plan',
                desc: 'We review high-def photos of your teeth together. You receive upfront costs before any future procedure begins.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-sky-500 mb-2 sm:mb-3 block">
                    {item.step}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0F1B2D] mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Insurance & Financing Guide */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-left">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-indigo-200/60">
                <CreditCard className="w-3.5 h-3.5 shrink-0" />
                <span>Insurance & Flexible Financing</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0F1B2D] tracking-tight mb-3 sm:mb-4">
                We Maximize Your Benefits & Keep Costs Simple
              </h2>

              <p className="text-xs sm:text-base text-[#5A6B80] leading-relaxed mb-5 sm:mb-6">
                Dental health should never be a financial guessing game. Our insurance coordinators will contact your PPO carrier prior to your appointment to verify your exact benefits and copays.
              </p>

              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#0F1B2D]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span><strong>All PPOs Accepted</strong> – Delta Dental, MetLife, Cigna, Aetna, Guardian, BCBS, and more</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#0F1B2D]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span><strong>Cherry Financing</strong> – Instant 0% APR plans in under 60 seconds without hard credit pulls</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#0F1B2D]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span><strong>CareCredit</strong> – Trusted healthcare credit card with 0% interest promotional terms</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#0F1B2D]">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span><strong>Hunt Savings Club</strong> – $100-$150/yr for patients without insurance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={clinicData.contact.financingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#8B7CF6] to-[#22B8E6] text-white shadow-md hover:shadow-lg transition-all hover:scale-102 flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4 shrink-0" />
                  <span>Check Cherry 0% Approval</span>
                </a>
                <a
                  href={`tel:${clinicData.contact.phoneRaw}`}
                  className="px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-100 text-[#0F1B2D] hover:bg-slate-200 transition-colors text-center"
                >
                  Verify My PPO Insurance
                </a>
              </div>
            </div>

            {/* Checklist of amenities on first visit */}
            <div className="p-5 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[36px] bg-gradient-to-tr from-teal-50/60 to-sky-50/60 border border-teal-200/60">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F1B2D] mb-2 sm:mb-4">
                Comfort Perks on Every Visit
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6B80] mb-4 sm:mb-6">
                Feel free to request any of the following amenities at check-in:
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                  <Tv className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#0F1B2D] block">Ceiling TVs</span>
                    <span className="text-[11px] sm:text-xs text-[#5A6B80]">Watch Netflix, sports, or nature documentaries right above you.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                  <Coffee className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#0F1B2D] block">Complimentary Refreshments</span>
                    <span className="text-[11px] sm:text-xs text-[#5A6B80]">Artisan coffee bar, sparkling water, and teas in our lounge.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-100 shadow-2xs">
                  <HeartHandshake className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#0F1B2D] block">Warm Blankets & Neck Pillows</span>
                    <span className="text-[11px] sm:text-xs text-[#5A6B80]">Stay warm and supported throughout your entire cleaning or exam.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plan Your Visit */}
      <PlanVisitSection />

      {/* Bottom CTA */}
      <CtaBandSection />
    </div>
  );
};
