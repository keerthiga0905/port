import React from 'react';
import { portfolioData } from '../data/portfolio';
import { PortraitFrame } from './PortraitFrame';
import { Hero3D } from './Hero3D';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const {
    heroDescription,
    roleTagline,
    location,
    signature,
  } = portfolioData.personal;

  return (
    <section id="hero" className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[620px]">
          
          {/* LEFT COLUMN: Personal Identity, Introduction, Philosophy (Approx 50% desktop) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 z-20">
            
            {/* Small Editorial Subhead Badge */}
            <div className="flex items-center space-x-3">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-mega-wide text-plum-light font-semibold border-b border-taupe-border/80 pb-1">
                SOFTWARE SYSTEMS STUDENT
              </span>
              <span className="text-gold-subtle text-xs">✦</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-taupe-dark">
                CIT COIMBATORE
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.12] text-plum tracking-tight">
              Turning ideas into <br />
              <span className="italic font-serif text-plum-burgundy">meaningful digital</span> experiences.
            </h2>

            {/* Editorial Bio Statement with Vertical Line (Matching Reference Layout) */}
            <div className="relative pl-5 sm:pl-6 border-l-2 border-taupe-border py-1">
              <p className="text-ink text-sm sm:text-base leading-relaxed font-normal">
                {heroDescription}
              </p>
            </div>

            {/* Signature & Location Block (Direct Reference Match) */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <span className="font-script text-3xl sm:text-4xl text-plum block transform -rotate-1 select-none">
                  {signature}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-mega-wide text-taupe-dark mt-1 block">
                  BASED IN {location}
                </span>
              </div>

              {/* Core Role Chips */}
              <div className="flex flex-wrap gap-2 text-[10px] tracking-wider uppercase text-plum/80 font-medium">
                {portfolioData.heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-cream-card rounded border border-taupe-border/50 text-[9px] tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#work"
                className="group inline-flex items-center space-x-2.5 px-6 py-3.5 bg-plum text-cream-ivory text-xs uppercase tracking-ultra-wide rounded-full font-medium hover:bg-plum-dark transition-all duration-300 shadow-editorial"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3.5 border border-plum/30 text-plum text-xs uppercase tracking-ultra-wide rounded-full font-medium hover:border-plum hover:bg-cream-card transition-all duration-200"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Technical Sub-tagline */}
            <div className="pt-2 text-[10px] tracking-mega-wide uppercase text-taupe-dark flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-subtle"></span>
              <span>{roleTagline}</span>
            </div>
          </div>

          {/* RIGHT COLUMN: AI-Generated Portrait with 3D Depth Backdrop (Approx 50% desktop) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            
            {/* Interactive 3D Canvas Layer behind portrait */}
            <div className="absolute inset-0 -top-10 -bottom-10 pointer-events-none z-0">
              <Hero3D className="w-full h-full" />
            </div>

            {/* AI-Generated Portrait in Luxury Frame */}
            <div className="relative z-10 w-full max-w-lg">
              <PortraitFrame />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
