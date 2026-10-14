import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  fallbackText?: string;
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-4/3',
  fallbackText = 'Hunt Family Dentistry',
  priority = false,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-50 border border-slate-200/60 text-slate-500 p-6 text-center overflow-hidden ${aspectRatioClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center text-teal-600 mb-2">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-800/80 mb-1">
          Hunt Family Dentistry
        </p>
        <p className="text-xs text-slate-500 max-w-xs">{fallbackText || alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
