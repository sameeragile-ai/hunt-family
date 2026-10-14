import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

interface InnerPageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; path?: string }[];
}

export const InnerPageHero: React.FC<InnerPageHeroProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
}) => {
  return (
    <div className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-teal-50/40 via-sky-50/20 to-transparent border-b border-slate-100">
      {/* Background soft glow blobs */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#34D3B4]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#8B7CF6]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-[#5A6B80] mb-3 sm:mb-4" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {crumb.path && !isLast ? (
                  <Link
                    to={crumb.path}
                    className="hover:text-[#22B8E6] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-[#0F1B2D]">
                    {crumb.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2.5 sm:mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0F1B2D] tracking-tight max-w-3xl leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-base lg:text-lg text-[#5A6B80] max-w-2xl mt-2 sm:mt-4 leading-relaxed">
          {subtitle}
        </p>

      </div>
    </div>
  );
};
