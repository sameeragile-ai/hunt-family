import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { clinicImages } from '../data/images';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface TiltCardProps {
  tech: typeof clinicData.technologies[0];
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ tech, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rX = ((y - centerY) / centerY) * -6;
    const rY = ((x - centerX) / centerX) * 6;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const imgKey = tech.imageKey as keyof typeof clinicImages.tech;
  const imgObj = clinicImages.tech[imgKey] || clinicImages.tech.itero;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="group relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#22B8E6]/15 transition-shadow duration-300 flex flex-col justify-between text-left"
    >
      {/* Top Image */}
      <div className="relative overflow-hidden h-44 sm:h-52 bg-slate-900">
        <ImageWithFallback
          src={imgObj.url}
          alt={imgObj.alt}
          aspectRatioClass="h-full w-full"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D] via-[#0F1B2D]/40 to-transparent" />

        {/* Tech Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold bg-white/95 backdrop-blur-md text-[#0F1B2D] shadow-xs border border-white/60">
            {tech.badge}
          </span>
        </div>

        <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 text-white z-10">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-teal-300 block mb-0.5">
            {tech.subtitle}
          </span>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug">
            {tech.name}
          </h3>
        </div>
      </div>

      {/* Description Content */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between bg-white">
        <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed">
          {tech.desc}
        </p>

        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0F1B2D]">
          <span className="flex items-center gap-1.5 text-teal-700 text-[11px] sm:text-xs">
            <Cpu className="w-3.5 h-3.5 shrink-0" />
            <span>Next-gen precision</span>
          </span>
          <span className="text-slate-400 group-hover:text-[#22B8E6] transition-colors text-[11px] sm:text-xs">
            Learn more →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const TechSection: React.FC = () => {
  const primaryTech = clinicData.technologies.slice(0, 3);

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-[#FAFCFD] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-50 border border-sky-200/60 text-xs font-bold uppercase tracking-wider text-sky-800 mb-2.5 sm:mb-3">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            Cutting-Edge Diagnostic Suite
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
            High-Tech Care, Human Warmth
          </h2>
          <p className="text-xs sm:text-base text-[#5A6B80] mt-2 sm:mt-3 leading-relaxed">
            We invest in state-of-the-art dental technology to diagnose earlier, treat faster, and completely remove the discomfort associated with traditional dentistry.
          </p>
        </div>

        {/* 3 Tech Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {primaryTech.map((tech, idx) => (
            <TiltCard key={tech.id} tech={tech} index={idx} />
          ))}
        </div>

        {/* Needle-Free Banner Callout */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-teal-500/10 via-sky-500/10 to-indigo-500/10 border border-teal-200/70 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 text-left">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-xs flex items-center justify-center text-teal-600 shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#0F1B2D]">
                Injection-Free Numbing Available Upon Request
              </h4>
              <p className="text-xs sm:text-sm text-[#5A6B80] mt-0.5">
                Fear needles? Ask Dr. Hunt about computer-regulated needle-free anesthesia during your visit.
              </p>
            </div>
          </div>

          <a
            href={clinicData.contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#34D3B4] to-[#22B8E6] shadow-md hover:shadow-lg transition-all shrink-0 hover:scale-102 text-center"
          >
            Experience Gentle Care
          </a>
        </div>

      </div>
    </section>
  );
};
