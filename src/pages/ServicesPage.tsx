import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Calendar,
  Phone,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Crown,
  HeartPulse,
  Smile,
  Activity,
  Layers,
  Bed,
  Feather,
} from 'lucide-react';
import { InnerPageHero } from '../components/InnerPageHero';
import { clinicData } from '../data/clinicData';
import { clinicImages } from '../data/images';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { CtaBandSection } from '../sections/CtaBandSection';

const serviceIcons: Record<string, React.ReactNode> = {
  'general-dentistry': <Sparkles className="w-5 h-5 text-teal-600" />,
  'emergency-dentistry': <ShieldAlert className="w-5 h-5 text-rose-600" />,
  'dental-crowns': <Crown className="w-5 h-5 text-amber-600" />,
  'root-canal-therapy': <HeartPulse className="w-5 h-5 text-indigo-600" />,
  'cosmetic-dentistry': <Smile className="w-5 h-5 text-purple-600" />,
  'invisalign': <CheckCircle2 className="w-5 h-5 text-sky-600" />,
  'oral-surgery': <Activity className="w-5 h-5 text-emerald-600" />,
  'periodontics': <Layers className="w-5 h-5 text-teal-600" />,
  'sedation-dentistry': <Bed className="w-5 h-5 text-violet-600" />,
  'restorative-dentistry': <Feather className="w-5 h-5 text-blue-600" />,
};

type CategoryFilter = 'all' | 'preventative' | 'restorative' | 'cosmetic' | 'specialized';

export const ServicesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredServices = clinicData.services.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.category === activeFilter;
  });

  return (
    <div className="flex flex-col w-full">
      <InnerPageHero
        badge="Specialized & Family Dentistry"
        title="Comprehensive Dental Services in Frisco, TX"
        subtitle="Dr. Dominique Hunt provides conservative, state-of-the-art care for all ages—from routine cleanings and painless emergency relief to clear Invisalign and porcelain makeovers."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All 10 Services' },
              { id: 'preventative', label: 'Preventative & Hygiene' },
              { id: 'restorative', label: 'Restorative & Crowns' },
              { id: 'cosmetic', label: 'Cosmetic & Invisalign' },
              { id: 'specialized', label: 'Emergency & Surgery' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] text-white shadow-md shadow-[#22B8E6]/25'
                    : 'bg-slate-100 text-[#5A6B80] hover:text-[#0F1B2D] hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16 lg:py-20 bg-[#FAFCFD]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const imgKey = service.imageKey as keyof typeof clinicImages.services;
                const imgObj = clinicImages.services[imgKey] || clinicImages.services.general;

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#22B8E6]/10 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="relative overflow-hidden rounded-2xl h-48 sm:h-56 mb-6 bg-slate-100">
                        <ImageWithFallback
                          src={imgObj.url}
                          alt={imgObj.alt}
                          aspectRatioClass="h-full w-full"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-106"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-[#0F1B2D] uppercase tracking-wider shadow-xs">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      {/* Header with Icon */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                          {serviceIcons[service.id]}
                        </div>
                        <h2 className="font-heading font-extrabold text-2xl text-[#0F1B2D]">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-sm sm:text-base text-[#5A6B80] leading-relaxed mb-6">
                        {service.fullDesc}
                      </p>

                      {/* Benefits bullets */}
                      <div className="space-y-2.5 pt-4 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0F1B2D] block">
                          Key Patient Benefits:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 text-xs text-[#0F1B2D]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Book service action */}
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 flex flex-col min-[440px]:flex-row items-stretch min-[440px]:items-center justify-between gap-3">
                      <a
                        href={clinicData.contact.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#34D3B4] to-[#22B8E6] text-white shadow-xs hover:shadow-md transition-all hover:scale-102"
                      >
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span>Book Appointment</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </a>

                      <a
                        href={`tel:${clinicData.contact.phoneRaw}`}
                        className="text-xs font-bold text-[#5A6B80] hover:text-[#0F1B2D] flex items-center justify-center min-[440px]:justify-start gap-1.5 py-1"
                      >
                        <Phone className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>(469) 269-0997</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBandSection />
    </div>
  );
};
