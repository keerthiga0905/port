import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowUpRight, GraduationCap, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { about, personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream text-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header with Decorative Center Accent */}
        <div className="flex items-center space-x-3 text-xs uppercase tracking-mega-wide text-plum-light font-medium mb-3">
          <span>{about.heading}</span>
          <span className="text-gold-subtle">✦</span>
          <span className="text-taupe-dark">EDITORIAL PROFILE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Biography, Core Philosophy, Education Snippet (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl text-plum leading-[1.15]">
              {about.subheading}
            </h2>

            <div className="space-y-4 text-ink/90 text-sm sm:text-base leading-relaxed font-normal">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {expanded && (
                <div className="pt-2 space-y-4 text-ink/80 text-sm animate-in fade-in duration-300">
                  <p>
                    At Coimbatore Institute of Technology, my academic journey blends solid computer science theoretical fundamentals with continuous applied projects. From low-level C programming and object-oriented Java to high-level reactive web frameworks and modern Python AI tooling, I view software engineering as both an exact discipline and an expressive craft.
                  </p>
                  <p>
                    Beyond writing code, I enjoy designing clean user flows, organizing technical community events with Google Developer Groups on Campus CIT, and discussing how technology can empower people across diverse sectors.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Summary Pill Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-taupe-border/80">
              <div className="flex items-start space-x-3 p-3 bg-cream-card rounded border border-taupe-border/50">
                <GraduationCap className="text-plum w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-plum">Education</h4>
                  <p className="text-xs text-ink/80">{education.degree}</p>
                  <p className="text-[10px] text-taupe-dark">{education.institution}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-cream-card rounded border border-taupe-border/50">
                <MapPin className="text-plum w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-plum">Location</h4>
                  <p className="text-xs text-ink/80">{personal.location}</p>
                  <p className="text-[10px] text-taupe-dark">Open to global opportunities</p>
                </div>
              </div>
            </div>

            {/* Expand / Anchor Action */}
            <div className="pt-2 flex items-center space-x-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-plum font-semibold hover:text-plum-dark transition-colors py-1"
              >
                <span>{expanded ? 'SHOW LESS' : 'MORE ABOUT ME'}</span>
                {expanded ? (
                  <span className="text-xs">↑</span>
                ) : (
                  <ArrowUpRight size={14} />
                )}
              </button>

              <a
                href="#education"
                className="text-xs uppercase tracking-widest text-taupe-dark hover:text-plum transition-colors"
              >
                VIEW ACADEMICS ↓
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Secondary Portrait Crop & Core Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Secondary Portrait Crop in Plum & Taupe Medallion */}
            <div className="relative rounded-2xl bg-cream-card p-4 sm:p-5 border border-taupe-border/80 shadow-editorial">
              <div className="flex items-center space-x-4 mb-4 pb-3 border-b border-taupe-border/60">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cherry shadow-md flex-shrink-0 bg-gradient-to-b from-cherry to-cherry-dark flex items-center justify-center">
                  <img
                    src={personal.portraitPath}
                    alt={personal.name}
                    className="w-full h-full object-contain pt-1 scale-110"
                    style={{ objectPosition: 'center 10%' }}
                  />
                </div>
                <div>
                  <h3 className="font-editorial-heading text-lg text-plum leading-tight">
                    {personal.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-taupe-dark">
                    CIT SOFTWARE SYSTEMS
                  </p>
                </div>
              </div>

              {/* 4 Concise Personal Highlights (Module 5 Specification) */}
              <div className="space-y-3.5">
                {about.coreValues.map((val) => (
                  <div
                    key={val.number}
                    className="group flex items-start space-x-3 p-2.5 rounded hover:bg-cream-ivory transition-colors"
                  >
                    <span className="font-mono text-xs font-bold text-plum/70 group-hover:text-gold-subtle transition-colors pt-0.5">
                      {val.number}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-plum">
                        {val.title}
                      </h4>
                      <p className="text-xs text-ink/75 leading-relaxed font-light">
                        {val.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Corner Star */}
              <span className="absolute top-3 right-3 text-gold-subtle text-xs select-none">✦</span>
            </div>

            {/* Editorial quote block */}
            <div className="p-4 border-l border-plum-light bg-cream-card/50 text-xs italic text-ink/80 leading-relaxed font-serif">
              "Great software engineers do not merely write working code; they craft systems that make people's lives easier, clearer, and safer."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
