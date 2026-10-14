import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  Calendar,
  Calculator,
  ArrowRight,
} from 'lucide-react';
import { InnerPageHero } from '../components/InnerPageHero';
import { clinicData } from '../data/clinicData';
import { CtaBandSection } from '../sections/CtaBandSection';

export const MembershipPage: React.FC = () => {
  const [numAdults, setNumAdults] = useState(2);
  const [numKids, setNumKids] = useState(1);

  const estimatedRetailCost = numAdults * 550 + numKids * 420;
  const membershipCost = numAdults * 150 + numKids * 100;
  const yearlySavings = Math.max(0, estimatedRetailCost - membershipCost);

  return (
    <div className="flex flex-col w-full">
      <InnerPageHero
        badge="Direct Dental Care • Zero Insurance Hassle"
        title="The Hunt Family Dental Savings Club"
        subtitle="Quality dental care shouldn't depend on restrictive insurance companies. Get full annual preventative coverage, emergency care, and up to 50% discounts for one low annual fee."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Membership' },
        ]}
      />

      {/* Plans Section */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
              Select Your Annual Membership
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0F1B2D] tracking-tight">
              Simple, Transparent Pricing with No Hidden Fees
            </h2>
            <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3 leading-relaxed">
              Enroll today and your benefits start immediately. Can be combined with your first appointment.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
            {clinicData.membership.plans.map((plan) => {
              const isAdult = plan.popular;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-[28px] sm:rounded-[36px] p-[2px] flex flex-col text-left ${
                    isAdult
                      ? 'bg-gradient-to-tr from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] shadow-lg sm:shadow-xl shadow-[#22B8E6]/20'
                      : 'bg-slate-200 shadow-sm'
                  }`}
                >
                  <div className="w-full h-full bg-white rounded-[26px] sm:rounded-[34px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                    <div>
                      {isAdult && (
                        <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-teal-50 text-teal-700 uppercase tracking-wider mb-2">
                          Most Popular
                        </span>
                      )}
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#22B8E6] block">
                        {plan.age}
                      </span>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F1B2D] mt-1 mb-2 sm:mb-3">
                        {plan.title}
                      </h3>

                      <div className="flex items-baseline gap-1.5 sm:gap-2 mb-2">
                        <span className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0F1B2D]">
                          {plan.price}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#5A6B80]">
                          /{plan.period}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 text-xs font-bold text-teal-700 mb-4 sm:mb-6">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span>{plan.discount}</span>
                      </div>

                      <div className="space-y-2.5 sm:space-y-3 pt-3 sm:pt-4 border-t border-slate-100">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F1B2D]">
                            <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                            </div>
                            <span className="leading-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100">
                      <a
                        href={clinicData.contact.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                          isAdult
                            ? 'bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] text-white hover:shadow-lg animate-shimmer'
                            : 'bg-slate-900 text-white hover:bg-[#0F1B2D]'
                        }`}
                      >
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span>{plan.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-0.5 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Family Savings Calculator */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAFCFD] to-white border-y border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto p-5 sm:p-8 lg:p-12 rounded-[24px] sm:rounded-[36px] bg-white border border-slate-200/80 shadow-lg sm:shadow-xl text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F1B2D]">
                  Family Dental Savings Calculator
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6B80]">
                  Calculate your family's annual savings compared to standard retail dental fees.
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/60 mb-6 sm:mb-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#0F1B2D] block mb-2">
                  Number of Adults (13+): {numAdults}
                </label>
                <input
                  type="range"
                  min="0"
                  max="6"
                  value={numAdults}
                  onChange={(e) => setNumAdults(parseInt(e.target.value, 10))}
                  className="w-full accent-[#22B8E6] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-[#5A6B80] mt-1">
                  <span>0</span>
                  <span>$150/year each</span>
                  <span>6</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#0F1B2D] block mb-2">
                  Number of Kids (0-12): {numKids}
                </label>
                <input
                  type="range"
                  min="0"
                  max="6"
                  value={numKids}
                  onChange={(e) => setNumKids(parseInt(e.target.value, 10))}
                  className="w-full accent-[#34D3B4] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-[#5A6B80] mt-1">
                  <span>0</span>
                  <span>$100/year each</span>
                  <span>6</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-100">
                <span className="text-[11px] sm:text-xs text-[#5A6B80] block">Estimated Retail Value</span>
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F1B2D] mt-1 block">
                  ${estimatedRetailCost}
                </span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-100">
                <span className="text-[11px] sm:text-xs text-[#5A6B80] block">Hunt Club Cost</span>
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F1B2D] mt-1 block">
                  ${membershipCost}
                </span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-500 to-sky-500 text-white shadow-md">
                <span className="text-[11px] sm:text-xs text-white/90 block font-semibold">Your Annual Savings</span>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl mt-1 block">
                  ${yearlySavings}
                </span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <a
                href={clinicData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-[#0F1B2D] transition-colors shadow-md"
              >
                <span>Enroll Your Family & Schedule</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-16">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0F1B2D] tracking-tight">
              Hunt Savings Club vs. Traditional Dental Insurance
            </h2>
            <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3 leading-relaxed">
              See how our transparent membership eliminates all the frustration of standard insurance carriers.
            </p>
            <p className="sm:hidden text-[11px] font-semibold text-teal-700 mt-2 flex items-center justify-center gap-1">
              <span>← Swipe table horizontally to compare →</span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-[20px] sm:rounded-[32px] border border-slate-200 shadow-sm bg-white">
            <div className="overflow-x-auto w-full scrollbar-none">
              <table className="w-full text-left text-xs sm:text-sm min-w-[480px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-3 sm:py-4 px-4 sm:px-6 font-bold text-[#0F1B2D]">Feature / Requirement</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 font-bold text-teal-700 bg-teal-50/60 text-center">
                      Hunt Dental Savings Club
                    </th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 font-bold text-slate-500 text-center">
                      Traditional Dental Insurance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { feature: 'Deductibles to Meet', hunt: 'None ($0)', insurance: '$50 – $150 per person' },
                    { feature: 'Waiting Periods for Care', hunt: 'None (Instant Access)', insurance: '6 to 12 months' },
                    { feature: 'Annual Maximum Payout Cap', hunt: 'No Maximums (Unlimited)', insurance: '$1,000 – $1,500 limit' },
                    { feature: 'Claim Denials & Paperwork', hunt: 'Zero Paperwork', insurance: 'Frequent pre-authorizations' },
                    { feature: 'Included Emergency Exam', hunt: 'Yes, 1 per year included', insurance: 'Subject to copays & deductible' },
                    { feature: 'Discounts on All Other Care', hunt: '10% – 50% Off Everything', insurance: 'Variable, often excluded' },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 sm:py-4 px-4 sm:px-6 font-semibold text-[#0F1B2D]">{row.feature}</td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-center font-bold text-teal-800 bg-teal-50/30">
                        {row.hunt}
                      </td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-center text-slate-500">{row.insurance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBandSection />
    </div>
  );
};
