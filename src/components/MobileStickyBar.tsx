import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/80 px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-2xl shadow-slate-900/10">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Call Office Button */}
        <a
          href={`tel:${clinicData.contact.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl bg-slate-100 text-[#0F1B2D] font-semibold text-sm hover:bg-slate-200 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#22B8E6]"
          aria-label="Call Hunt Family Dentistry"
        >
          <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span>Call Now</span>
        </a>

        {/* Book Online Button */}
        <a
          href={clinicData.contact.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-2xl bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] text-white font-semibold text-sm shadow-md shadow-[#22B8E6]/25 hover:shadow-lg active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#8B7CF6]"
          aria-label="Book dental appointment online"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Online</span>
        </a>
      </div>
    </div>
  );
};
