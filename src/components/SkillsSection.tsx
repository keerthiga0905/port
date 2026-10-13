import React from 'react';
import { portfolioData, type SkillCategory } from '../data/portfolio';
import {
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  Sparkles,
  type LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  Sparkles,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-cream border-t border-taupe-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-taupe-border">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-mega-wide text-plum-light font-semibold mb-2">
              <span>06 TECHNICAL DOMAINS</span>
              <span className="text-gold-subtle">✦</span>
              <span className="text-taupe-dark">WHAT I BRING</span>
            </div>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl text-plum">
              Skills & Engineering Capabilities
            </h2>
          </div>
          <p className="mt-3 sm:mt-0 text-xs text-taupe-dark max-w-xs font-light">
            Grounded in core computer systems, modern web engineering, and continuous hands-on experimentation.
          </p>
        </div>

        {/* Two-Column Editorial Capabilities Grid (Matching Reference Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {portfolioData.skills.map((cat: SkillCategory) => {
            const IconComponent = iconMap[cat.icon] || Code2;

            return (
              <div
                key={cat.number}
                className="group relative p-6 bg-cream-ivory rounded-lg border border-taupe-border/70 hover:border-plum/40 hover:shadow-editorial transition-all duration-300"
              >
                {/* Number & Icon Header Row */}
                <div className="flex items-center justify-between pb-4 border-b border-taupe-border/50 mb-4">
                  {/* Minimal Circular Icon (matching reference circular badges) */}
                  <div className="w-10 h-10 rounded-full border border-taupe flex items-center justify-center text-plum bg-cream group-hover:bg-plum group-hover:text-cream transition-colors duration-300">
                    <IconComponent size={18} strokeWidth={1.75} />
                  </div>

                  <span className="font-mono text-xs font-semibold text-taupe-dark">
                    {cat.number}
                  </span>
                </div>

                {/* Category Heading */}
                <h3 className="font-editorial-heading text-lg font-normal text-plum tracking-wide mb-3 group-hover:text-plum-burgundy transition-colors">
                  {cat.category}
                </h3>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded bg-cream border border-taupe-border/60 text-ink/90 font-normal hover:border-plum/50 hover:bg-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Delicate corner plus marker */}
                <span className="absolute bottom-2 right-2 text-[10px] text-taupe/40 select-none group-hover:text-gold-subtle transition-colors">
                  +
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
