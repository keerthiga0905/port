import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Sparkles } from 'lucide-react';

interface PortraitFrameProps {
  className?: string;
}

export const PortraitFrame: React.FC<PortraitFrameProps> = ({ className = '' }) => {
  const { portraitPath, name } = portfolioData.personal;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-[4/5] sm:aspect-[1/1.25] flex items-end justify-center">
        
        {/* 1. Ambient Radiant Cherry Aura Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Deep Cherry Velvet Glow Core */}
          <div
            className={`w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-cherry-dark/40 via-cherry-crimson/25 to-cherry-rose/20 blur-3xl transition-all duration-700 ${
              isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
            }`}
          />

          {/* Secondary Radial Glow */}
          <div className="absolute w-[65%] h-[65%] rounded-full bg-cherry-crimson/20 blur-2xl animate-pulse" />

          {/* Luxury Orbital Rings (Geometric Editorial Silhouette Backdrop) */}
          <div className="absolute w-[90%] h-[90%] rounded-full border border-cherry/20 opacity-60 pointer-events-none" />
          <div className="absolute w-[76%] h-[76%] rounded-full border border-dashed border-gold-subtle/30 pointer-events-none animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[62%] h-[62%] rounded-full border border-cherry-crimson/20 pointer-events-none" />

          {/* Soft Editorial Arch Contour Outline in Cherry */}
          <div className="absolute inset-x-8 top-4 bottom-8 rounded-t-full border border-cherry/25 pointer-events-none bg-gradient-to-b from-cherry/10 via-transparent to-transparent" />
        </div>

        {/* 2. Isolated Cutout Portrait - Outlier Alone with Body Seamlessly Merged into Portfolio Background */}
        <div
          className="relative z-10 w-full h-[96%] flex items-end justify-center overflow-visible"
          style={{
            // Seamlessly dissolves the lower body into the portfolio page background
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
          }}
        >
          <img
            src={portraitPath}
            alt={`${name} — Editorial Portrait Cutout`}
            className="w-auto h-full max-h-[580px] object-contain transition-all duration-700 ease-out transform"
            style={{
              // Elegant outline drop-shadow aura around her silhouette
              filter: isHovered
                ? 'drop-shadow(0 0 35px rgba(201, 24, 59, 0.45)) drop-shadow(0 15px 30px rgba(56, 5, 14, 0.35))'
                : 'drop-shadow(0 0 25px rgba(201, 24, 59, 0.28)) drop-shadow(0 15px 30px rgba(56, 5, 14, 0.22))',
              transform: isHovered ? 'scale(1.025) translateY(-4px)' : 'scale(1) translateY(0)',
            }}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* 3. Floating Editorial Badge - CIT 2026 */}
        <div className="absolute bottom-6 right-2 sm:right-6 z-20 bg-cream-ivory/95 backdrop-blur-md border border-cherry/30 px-3.5 py-1.5 rounded-full shadow-editorial flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cherry-crimson animate-ping" />
          <span className="text-[10px] text-cherry font-semibold tracking-widest uppercase">CIT • 2024–PRESENT</span>
          <span className="text-[10px] text-gold-subtle">✦</span>
        </div>

        {/* 4. Luxury Floating Monogram Stamp (KM Studio) */}
        <div className="absolute top-4 left-0 sm:left-4 z-20 flex items-center justify-center w-14 h-14 rounded-full border border-cherry/30 bg-cream-ivory/90 backdrop-blur-md shadow-editorial text-[9px] font-editorial uppercase tracking-wider text-cherry text-center leading-tight hover:rotate-12 transition-transform duration-300">
          KM<br />STUDIO
        </div>

        {/* 5. Delicate Sparkle Accent */}
        <div className="absolute top-12 right-6 z-20 text-gold-subtle/80 pointer-events-none animate-pulse">
          <Sparkles size={20} />
        </div>

      </div>
    </div>
  );
};

