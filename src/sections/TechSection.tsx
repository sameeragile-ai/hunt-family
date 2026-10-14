import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Sparkles, Scan, Eye, Activity } from 'lucide-react';
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
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max tilt 8 deg
    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="group relative rounded-[32px] overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:shadow-[#22B8E6]/15 transition-shadow duration-300 flex flex-col justify-between"
    >
      {/* Top Image */}
      <div className="relative overflow-hidden h-52 bg-slate-900">
        <ImageWithFallback
          src={imgObj.url}
          alt={imgObj.alt}
          aspectRatioClass="h-full w-full"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D] via-[#0F1B2D]/40 to-transparent" />

        {/* Tech Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#0F1B2D] shadow-xs border border-white/60">
            {tech.badge}
          </span>
        </div>

        <div className="absolute bottom-4 left-5 right-5 text-white z-10">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-teal-300 block mb-0.5">
            {tech.subtitle}
          </span>
          <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight leading-snug">
            {tech.name}
          </h3>
        </div>
      </div>

      {/* Description Content */}
      <div className="p-7 flex-1 flex flex-col justify-between bg-white">
        <p className="text-sm text-[#5A6B80] leading-relaxed">
          {tech.desc}
        </p>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0F1B2D]">
          <span className="flex items-center gap-1.5 text-teal-700">
            <Cpu className="w-3.5 h-3.5" />
            Next-generation clinical precision
          </span>
          <span className="text-slate-400 group-hover:text-[#22B8E6] transition-colors">
            Learn more →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const TechSection: React.FC = () => {
  // Showcase top 3 primary tech requested: iTero, Panoramic X-ray, Pearl AI
  const primaryTech = clinicData.technologies.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFCFD] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/60 text-xs font-bold uppercase tracking-wider text-sky-800 mb-3">
            <Cpu className="w-3.5 h-3.5 text-sky-600" />
            Cutting-Edge Diagnostic Suite
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight">
            High-Tech Care, Human Warmth
          </h2>
          <p className="text-base text-[#5A6B80] mt-3">
            We invest in state-of-the-art dental technology to diagnose earlier, treat faster, and completely remove the discomfort associated with traditional dentistry.
          </p>
        </div>

        {/* 3 Tech Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {primaryTech.map((tech, idx) => (
            <TiltCard key={tech.id} tech={tech} index={idx} />
          ))}
        </div>

        {/* Needle-Free Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-[32px] bg-gradient-to-r from-teal-500/10 via-sky-500/10 to-indigo-500/10 border border-teal-200/70 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-teal-600 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-[#0F1B2D]">
                Injection-Free Numbing Available Upon Request
              </h4>
              <p className="text-xs sm:text-sm text-[#5A6B80]">
                Fear needles? Ask Dr. Hunt about computer-regulated needle-free anesthesia during your visit.
              </p>
            </div>
          </div>

          <a
            href={clinicData.contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#34D3B4] to-[#22B8E6] shadow-md hover:shadow-lg transition-all shrink-0 hover:scale-102"
          >
            Experience Gentle Care
          </a>
        </div>

      </div>
    </section>
  );
};
