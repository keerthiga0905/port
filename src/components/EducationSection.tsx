import React from 'react';
import { portfolioData } from '../data/portfolio';
import { BookOpen, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <div id="education" className="space-y-8">
      {/* Education Header */}
      <div>
        <div className="flex items-center space-x-2 text-[11px] uppercase tracking-mega-wide text-plum-light font-semibold mb-2">
          <span>ACADEMIC FOUNDATION</span>
          <span className="text-gold-subtle">✦</span>
          <span>CIT COIMBATORE</span>
        </div>
        <h3 className="font-editorial-heading text-2xl sm:text-3xl text-plum">
          Always learning.
        </h3>
      </div>

      {/* Main Education Card */}
      <div className="relative p-6 sm:p-8 bg-cream-ivory rounded-lg border border-taupe-border shadow-editorial space-y-6">
        
        {/* Top Institution & Degree Details */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-taupe-border/60">
          <div className="space-y-1">
            <span className="text-[10px] tracking-mega-wide uppercase text-taupe-dark block font-medium">
              DEGREE PROGRAMME
            </span>
            <h4 className="font-editorial-heading text-xl sm:text-2xl text-plum">
              {education.degree}
            </h4>
            <p className="text-sm font-medium text-ink/90 flex items-center space-x-1.5 pt-0.5">
              <span>{education.institution}</span>
            </p>
            <p className="text-xs text-taupe-dark">
              {education.location}
            </p>
          </div>

          <div className="sm:text-right">
            <span className="inline-block px-3 py-1 bg-cream-card rounded text-xs font-mono text-plum border border-taupe-border/80">
              {education.period}
            </span>
            <span className="block text-[11px] text-taupe-dark mt-1">
              {education.cgpa}
            </span>
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-sm text-ink/85 leading-relaxed font-light">
          {education.description}
        </p>

        {/* Coursework Modules */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs uppercase tracking-ultra-wide font-semibold text-plum flex items-center space-x-2">
            <BookOpen size={14} className="text-gold-subtle" />
            <span>Key Academic Coursework</span>
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink/80">
            {education.coursework.map((course, idx) => (
              <div key={idx} className="flex items-center space-x-2 py-1 px-2.5 bg-cream/70 rounded border border-taupe-border/40">
                <span className="text-gold-subtle text-[10px]">✦</span>
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="space-y-2 pt-2">
          <h5 className="text-xs uppercase tracking-ultra-wide font-semibold text-plum flex items-center space-x-2">
            <Award size={14} className="text-gold-subtle" />
            <span>Academic Highlights</span>
          </h5>
          <ul className="space-y-1.5 text-xs text-ink/80">
            {education.academicHighlights.map((hl, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-plum mt-0.5 font-bold">•</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
