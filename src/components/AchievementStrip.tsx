import React from 'react';
import { portfolioData } from '../data/portfolio';

export const AchievementStrip: React.FC = () => {
  return (
    <section className="bg-plum-burgundy text-cream py-12 sm:py-16 border-y border-taupe/30 relative overflow-hidden">
      
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#F7F0E6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top small label */}
        <div className="text-center mb-8">
          <span className="text-[10px] tracking-mega-wide uppercase text-taupe-light flex items-center justify-center space-x-2">
            <span>✧</span>
            <span>CORE PILLARS OF WORK & STUDY</span>
            <span>✧</span>
          </span>
        </div>

        {/* 4 Highlight Columns with thin dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-taupe/25">
          {portfolioData.highlightsStrip.map((item) => (
            <div
              key={item.numeral}
              className="lg:px-6 flex flex-col justify-between space-y-3 group"
            >
              <div className="flex items-baseline space-x-3">
                <span className="font-editorial-heading text-3xl sm:text-4xl text-gold-subtle font-light group-hover:text-gold-light transition-colors">
                  {item.numeral}
                </span>
                <span className="text-xs text-taupe-light/50 font-mono tracking-widest uppercase">
                  / PILLAR
                </span>
              </div>

              <div>
                <h4 className="font-editorial-heading text-lg sm:text-xl text-cream font-normal tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs text-taupe-light/80 font-light leading-relaxed mt-1">
                  {item.subtitle}
                </p>
              </div>

              <div className="w-8 h-[1px] bg-taupe/40 group-hover:w-14 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Typographic Institutional & Tech Affinity Banner (Inspired by reference's "TRUSTED BY" strip) */}
        <div className="mt-14 pt-8 border-t border-taupe/20 text-center">
          <p className="text-[10px] uppercase tracking-mega-wide text-taupe-light/60 mb-6">
            INSTITUTIONAL AFFILIATIONS & ENGINEERING ECOSYSTEM
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-cream/70 font-editorial text-sm sm:text-base tracking-widest uppercase">
            <span className="hover:text-cream transition-colors">CIT COIMBATORE</span>
            <span className="text-gold-subtle text-xs">✦</span>
            <span className="hover:text-cream transition-colors">GDG ON CAMPUS</span>
            <span className="text-gold-subtle text-xs">✦</span>
            <span className="hover:text-cream transition-colors">SOFTWARE SYSTEMS</span>
            <span className="text-gold-subtle text-xs">✦</span>
            <span className="hover:text-cream transition-colors">FULL STACK & AI</span>
          </div>
        </div>

      </div>
    </section>
  );
};
