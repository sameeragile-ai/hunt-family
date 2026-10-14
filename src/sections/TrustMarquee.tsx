import React from 'react';
import { Trophy, ShieldCheck, Globe, CreditCard, Sparkles, Star } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const getBadgeIcon = (iconName: string) => {
  switch (iconName) {
    case 'Trophy':
      return <Trophy className="w-4 h-4 text-amber-500" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-4 h-4 text-teal-500" />;
    case 'Globe':
      return <Globe className="w-4 h-4 text-sky-500" />;
    case 'CreditCard':
      return <CreditCard className="w-4 h-4 text-indigo-500" />;
    case 'Sparkles':
      return <Sparkles className="w-4 h-4 text-purple-500" />;
    case 'Star':
      return <Star className="w-4 h-4 text-amber-400 fill-amber-400" />;
    default:
      return <Sparkles className="w-4 h-4 text-teal-500" />;
  }
};

export const TrustMarquee: React.FC = () => {
  const items = clinicData.trustBadges;

  return (
    <div className="w-full overflow-hidden py-4 bg-white/70 backdrop-blur-md border-y border-slate-200/60 shadow-xs relative">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFCFD] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFCFD] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 sm:gap-14">
        {/* First set */}
        {items.map((badge, idx) => (
          <div
            key={`marquee-1-${idx}`}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F1B2D] whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/50 shadow-2xs"
          >
            {getBadgeIcon(badge.icon)}
            <span>{badge.label}</span>
          </div>
        ))}
        {/* Duplicate set for seamless continuous loop */}
        {items.map((badge, idx) => (
          <div
            key={`marquee-2-${idx}`}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F1B2D] whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/50 shadow-2xs"
          >
            {getBadgeIcon(badge.icon)}
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
