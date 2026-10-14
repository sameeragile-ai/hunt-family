import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  ShieldCheck,
  ExternalLink,
  Clock,
  Heart,
} from 'lucide-react';
import { clinicData } from '../data/clinicData';

export const Footer: React.FC = () => {
  // Determine current day for highlighting in hours table
  const now = new Date();
  const dayIndex = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
  // Map JS day to our schedule array: Monday is index 0 in clinicData.schedule
  const currentDayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][dayIndex];

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-24 md:pb-16 text-[#0F1B2D]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] p-[2px]">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#22B8E6]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-[#0F1B2D] text-lg tracking-tight">
                  HUNT FAMILY DENTISTRY
                </span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#5A6B80]">
                  Dr. Dominique Hunt, DDS • Frisco, TX
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#5A6B80] leading-relaxed mt-2">
              Gentle, modern, and transparent dental care designed for every generation.
              From toddlers to grandparents, experience injection-free numbing, 3D scanning,
              and patient-first dentistry with zero sales pressure.
            </p>

            {/* Badges / Certifications */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                Voted Best in Frisco 2024 & 2025
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/60">
                ADA Member
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60">
                Hablamos Español
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0F1B2D]">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#5A6B80]">
              <li>
                <Link to="/" className="hover:text-[#22B8E6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#22B8E6] transition-colors">
                  All 10 Services
                </Link>
              </li>
              <li>
                <Link to="/new-patients" className="hover:text-[#22B8E6] transition-colors">
                  New Patients & $139 Special
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-[#22B8E6] transition-colors">
                  Dental Savings Club ($100-$150)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#22B8E6] transition-colors">
                  Meet Dr. Dominique Hunt
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#22B8E6] transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Patient Resources & Financing (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0F1B2D]">
              Patient Portals & Care
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={clinicData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/60 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#22B8E6]" />
                  <span className="font-medium text-[#0F1B2D]">Online Appointment</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#22B8E6]" />
              </a>

              <a
                href={clinicData.contact.financingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/60 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-[#0F1B2D]">Cherry 0% Financing</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600" />
              </a>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
                <span className="font-semibold block mb-0.5">Emergency Dentistry:</span>
                Same-day slots reserved. Call{' '}
                <a href={`tel:${clinicData.contact.phoneRaw}`} className="underline font-bold">
                  (469) 269-0997
                </a>
                . For after-hours emergencies or life-threatening injuries, dial 911 or visit the nearest ER.
              </div>
            </div>
          </div>

          {/* Business Hours Table with Live Highlight (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#0F1B2D] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#22B8E6]" />
                Clinic Hours
              </h4>
              <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded-full">
                Frisco, TX (CT)
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white">
              <table className="w-full text-xs text-left">
                <tbody>
                  {clinicData.schedule.map((slot) => {
                    const isToday = slot.day === currentDayName;
                    return (
                      <tr
                        key={slot.day}
                        className={`border-b last:border-b-0 border-slate-100 transition-colors ${
                          isToday
                            ? 'bg-teal-50/70 font-semibold text-teal-950'
                            : 'text-[#5A6B80] hover:bg-slate-50/50'
                        }`}
                      >
                        <td className="py-2 px-3 flex items-center gap-1.5">
                          {isToday && (
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                          )}
                          <span>{slot.short}</span>
                          {isToday && <span className="text-[9px] text-teal-700">(Today)</span>}
                        </td>
                        <td className="py-2 px-3 text-right font-medium">
                          {slot.isOpen ? `${slot.open} – ${slot.close}` : 'Closed'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Address & Phone */}
            <div className="flex flex-col gap-1 text-xs text-[#5A6B80] pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#22B8E6] shrink-0 mt-0.5" />
                <span>{clinicData.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <a
                  href={`tel:${clinicData.contact.phoneRaw}`}
                  className="font-semibold text-[#0F1B2D] hover:underline"
                >
                  {clinicData.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A6B80]">
          <p>© {new Date().getFullYear()} Hunt Family Dentistry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">•</span>
            <span>Dr. Dominique Hunt, DDS</span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1 font-medium text-slate-700">
              Website by <span className="font-semibold text-[#0F1B2D]">Zenith Flow Tech</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
