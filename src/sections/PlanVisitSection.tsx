import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CreditCard, ClipboardCheck, Navigation, ExternalLink, Phone } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export const PlanVisitSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2.5 sm:mb-3">
            <Navigation className="w-3.5 h-3.5 text-teal-600" />
            Seamless Patient Experience
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
            Plan Your Visit to Our Frisco Office
          </h2>
          <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3 leading-relaxed">
            We make your first appointment completely stress-free. Here is everything you need to know before walking through our doors.
          </p>
        </div>

        {/* 3 Steps / Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Card 1: Where do I go */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:shadow-[#22B8E6]/10 transition-all duration-300 flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-teal-100/80 text-teal-700 flex items-center justify-center mb-4 sm:mb-6">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#22B8E6] block mb-1">
                Step 1 • Arrival
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F1B2D] mb-2 sm:mb-3">
                Where Do I Go?
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed mb-3 sm:mb-4">
                We are conveniently located at <strong className="text-[#0F1B2D]">11220 Panther Creek Parkway, Suite 100, Frisco, TX 75035</strong>.
              </p>
              <p className="text-[11px] sm:text-xs text-[#5A6B80]">
                Enjoy designated reserved parking directly in front of Suite 100 with zero steps or elevators.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200/60">
              <a
                href={clinicData.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: How do I pay */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:shadow-[#22B8E6]/10 transition-all duration-300 flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-sky-100/80 text-sky-700 flex items-center justify-center mb-4 sm:mb-6">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#22B8E6] block mb-1">
                Step 2 • Payment & Coverage
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F1B2D] mb-2 sm:mb-3">
                How Do I Pay?
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed mb-3 sm:mb-4">
                We accept all major PPO dental insurances and file all paperwork for you.
              </p>
              <p className="text-[11px] sm:text-xs text-[#5A6B80]">
                No insurance? Join our $100-$150/yr Dental Savings Club, or apply for 0% APR financing with Cherry or CareCredit in 60 seconds.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200/60">
              <a
                href={clinicData.contact.financingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900"
              >
                <span>Apply for Cherry 0% Financing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: What do I bring */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:shadow-[#22B8E6]/10 transition-all duration-300 flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-100/80 text-purple-700 flex items-center justify-center mb-4 sm:mb-6">
                <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#22B8E6] block mb-1">
                Step 3 • Preparation
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F1B2D] mb-2 sm:mb-3">
                What Do I Bring?
              </h3>
              <ul className="text-xs sm:text-sm text-[#5A6B80] space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  <span>Government-issued photo ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  <span>Dental insurance card (if applicable)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  <span>List of current medications</span>
                </li>
              </ul>
              <p className="text-[11px] sm:text-xs text-[#5A6B80]">
                Paperless check-in: fill out new patient forms on your phone prior to arrival.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200/60">
              <a
                href={clinicData.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900"
              >
                <span>Complete Online Check-In</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Embedded Interactive Google Map */}
        <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200 shadow-lg bg-slate-100 relative">
          <div className="h-72 sm:h-96 lg:h-[420px] w-full">
            <iframe
              title="Hunt Family Dentistry Clinic Location in Frisco TX"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.407949390234!2d-96.79462802359487!3d33.17849997349942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c39d8977d45%3A0xb3bc87e59b7df607!2s11220%20Panther%20Creek%20Pkwy%20%23100%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.1]"
            />
          </div>

          {/* Map Overlay Card */}
          <div className="absolute bottom-3 left-3 right-3 sm:left-6 sm:right-auto glass-card p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl max-w-sm border border-white text-left">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0F1B2D]">
                  Hunt Family Dentistry
                </h4>
                <p className="text-[11px] sm:text-xs text-[#5A6B80] mt-0.5 leading-snug">
                  11220 Panther Creek Pkwy, Ste 100, Frisco, TX 75035
                </p>
                <div className="mt-2 sm:mt-3 flex items-center gap-2 sm:gap-3">
                  <a
                    href={clinicData.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] sm:text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href={`tel:${clinicData.contact.phoneRaw}`}
                    className="text-[11px] sm:text-xs font-bold text-[#0F1B2D] hover:underline"
                  >
                    (469) 269-0997
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
