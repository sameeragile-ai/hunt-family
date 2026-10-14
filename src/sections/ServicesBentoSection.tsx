import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Crown,
  HeartPulse,
  Smile,
  CheckCircle2,
  Activity,
  Layers,
  Bed,
  Feather,
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { clinicImages } from '../data/images';
import { ImageWithFallback } from '../components/ImageWithFallback';

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

export const ServicesBentoSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600 mb-1.5 sm:mb-2 block">
              Comprehensive Family Dental Care
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
              Modern Solutions for Every Smile
            </h2>
            <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3">
              From gentle preventative checkups to advanced Invisalign transformations and emergency relief, Dr. Hunt delivers conservative, pain-free dentistry all under one roof.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-[#0F1B2D] hover:text-[#22B8E6] transition-colors group self-start md:self-end shrink-0"
          >
            <span>View all 10 specialized services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {clinicData.services.map((service, idx) => {
            const isFeatured = idx === 0 || idx === 1 || idx === 5;
            const imgKey = service.imageKey as keyof typeof clinicImages.services;
            const imgObj = clinicImages.services[imgKey] || clinicImages.services.general;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className={`group relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-[#22B8E6]/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Subtle gradient hover border glow */}
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] pointer-events-none border-2 border-transparent group-hover:border-[#22B8E6]/40 transition-colors duration-300 z-10" />

                {/* Top Image Container */}
                <div className="relative overflow-hidden h-40 sm:h-52 bg-slate-100">
                  <ImageWithFallback
                    src={imgObj.url}
                    alt={imgObj.alt}
                    aspectRatioClass="h-full w-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#0F1B2D] border border-white/60 shadow-xs uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {service.popular && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-gradient-to-r from-[#34D3B4] to-[#22B8E6] text-white shadow-xs">
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors shrink-0">
                        {serviceIcons[service.id] || <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />}
                      </div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0F1B2D] group-hover:text-[#22B8E6] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>

                    {/* Benefit bullets */}
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 sm:gap-2">
                      {service.benefits.slice(0, 2).map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-[#5A6B80] bg-slate-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                          <span>{benefit}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-4 sm:mt-6 pt-3 flex items-center justify-between text-xs font-semibold text-[#0F1B2D]">
                    <Link
                      to="/services"
                      className="group-hover:text-[#22B8E6] transition-colors flex items-center gap-1"
                    >
                      <span>Learn more & pricing</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href={clinicData.contact.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 hover:underline font-bold"
                    >
                      Book →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
