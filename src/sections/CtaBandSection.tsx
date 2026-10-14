import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export const CtaBandSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-r from-[#17977e] via-[#107ca0] to-[#5949c5] text-white">
      {/* Decorative background circles */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold uppercase tracking-wider text-teal-100 mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-teal-200" />
          Ready When You Are • Frisco, Texas
        </div>

        {/* Headline */}
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight max-w-3xl mx-auto leading-tight mb-6">
          Your Family's Next Visit is One Click Away
        </h2>

        {/* Subline */}
        <p className="text-base sm:text-lg text-slate-100 max-w-xl mx-auto leading-relaxed mb-10 opacity-90">
          Book online in under two minutes with our live schedule, or call our friendly team to reserve block appointments for the whole family.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Online Booking Button */}
          <a
            href={clinicData.contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-[#0F1B2D] bg-white hover:bg-slate-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-teal-600" />
            <span>Book Online Instantly</span>
            <ArrowRight className="w-4 h-4 ml-0.5 text-teal-600" />
          </a>

          {/* Call Us Button */}
          <a
            href={`tel:${clinicData.contact.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all duration-200 hover:scale-102 active:scale-95"
          >
            <Phone className="w-4 h-4 text-teal-200" />
            <span>Call (469) 269-0997</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-200" />
            <span>Accepts All Major PPO Plans</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-200" />
            <span>$0 Deductible In-House Plans</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-teal-200" />
            <span>Hablamos Español</span>
          </div>
        </div>

      </div>
    </section>
  );
};
