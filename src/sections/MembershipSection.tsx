import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export const MembershipSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2.5 sm:mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            In-House Dental Savings Club
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
            No Insurance? No Problem.
          </h2>
          <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3 leading-relaxed">
            Join our direct-to-patient savings club. Receive comprehensive preventative dental care for the entire year, plus 10% to 50% discounts on all other procedures.
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-teal-900">
            <span className="bg-white px-2.5 py-1 rounded-full border border-teal-200/60 shadow-2xs">
              ✓ No Deductibles
            </span>
            <span className="bg-white px-2.5 py-1 rounded-full border border-teal-200/60 shadow-2xs">
              ✓ No Waiting Periods
            </span>
            <span className="bg-white px-2.5 py-1 rounded-full border border-teal-200/60 shadow-2xs">
              ✓ No Annual Maximums
            </span>
            <span className="bg-white px-2.5 py-1 rounded-full border border-teal-200/60 shadow-2xs">
              ✓ Instant Activation
            </span>
          </div>
        </div>

        {/* Pricing Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
          {clinicData.membership.plans.map((plan, idx) => {
            const isAdult = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`relative rounded-[28px] sm:rounded-[36px] p-[2px] transition-all duration-300 flex flex-col text-left ${
                  isAdult
                    ? 'bg-gradient-to-tr from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-lg sm:shadow-2xl shadow-[#22B8E6]/20'
                    : 'bg-slate-200/90 shadow-md'
                }`}
              >
                <div className="w-full h-full bg-white rounded-[26px] sm:rounded-[34px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Popular Banner */}
                  {isAdult && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#22B8E6] to-[#34D3B4] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider py-1 px-4 sm:py-1.5 sm:px-6 rounded-bl-xl sm:rounded-bl-2xl shadow-xs">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#22B8E6] block">
                      {plan.age}
                    </span>

                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F1B2D] mt-1 mb-2 sm:mb-4">
                      {plan.title}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 sm:gap-2 mb-2">
                      <span className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0F1B2D] tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#5A6B80]">
                        /{plan.period}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-[11px] sm:text-xs font-bold text-teal-700 mb-4 sm:mb-6">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{plan.discount}</span>
                    </div>

                    {/* Feature list */}
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0F1B2D] mb-3 sm:mb-4">
                      Included Each Membership Year:
                    </p>
                    <div className="space-y-2.5 sm:space-y-3.5">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F1B2D]">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enroll CTA */}
                  <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-slate-100">
                    <a
                      href={clinicData.contact.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                        isAdult
                          ? 'bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] text-white hover:shadow-lg hover:shadow-[#22B8E6]/30 animate-shimmer hover:scale-[1.01]'
                          : 'bg-slate-900 text-white hover:bg-[#0F1B2D] hover:shadow-md hover:scale-[1.01]'
                      }`}
                    >
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />
                    </a>

                    <p className="text-[10px] sm:text-[11px] text-[#5A6B80] text-center mt-2.5 sm:mt-3">
                      Renews annually • Can be paired with same-day booking
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Savings comparison notice */}
        <div className="max-w-2xl mx-auto text-center mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed">
            <strong className="text-[#0F1B2D]">Typical Dental Savings:</strong> Regular out-of-pocket checkups, cleanings, and emergency exams can easily surpass $700+ per year. Our savings club keeps preventative care under $150, protecting your teeth and family budget.
          </p>
        </div>

      </div>
    </section>
  );
};
