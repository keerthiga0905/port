import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Users, ExternalLink, Calendar, Megaphone } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <div id="experience" className="space-y-8">
      {/* Experience Header */}
      <div>
        <div className="flex items-center space-x-2 text-[11px] uppercase tracking-mega-wide text-cherry-light font-semibold mb-2">
          <span>INTERNSHIP & LEADERSHIP</span>
          <span className="text-gold-subtle">✦</span>
          <span>INDUSTRY & CAMPUS IMPACT</span>
        </div>
        <h3 className="font-editorial-heading text-2xl sm:text-3xl text-plum">
          Industry experience & community leadership.
        </h3>
      </div>

      {/* Vertical Editorial Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-plum/30 space-y-10">
        {experience.map((item, idx) => (
          <div key={idx} className="relative group">
            
            {/* Timeline Marker (Taupe and Plum Diamond / Dot) */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cream border-2 border-plum flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-subtle"></span>
            </div>

            {/* Card Content */}
            <div className="p-6 bg-cream-ivory rounded-lg border border-taupe-border shadow-editorial space-y-4">
              
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-taupe-border/50">
                <div>
                  <span className="text-[10px] tracking-mega-wide uppercase text-cherry font-semibold">
                    {item.type}
                  </span>
                  <h4 className="font-editorial-heading text-lg sm:text-xl text-plum">
                    {item.role}
                  </h4>
                  <p className="text-sm font-medium text-ink/90">
                    {item.organization}
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-taupe-dark">
                  <Calendar size={13} className="text-taupe" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-ink/85 leading-relaxed font-light">
                {item.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 pt-1">
                <h5 className="text-[11px] uppercase tracking-widest font-semibold text-plum flex items-center space-x-1.5">
                  <Megaphone size={13} className="text-gold-subtle" />
                  <span>Core Responsibilities & Impact</span>
                </h5>
                <ul className="space-y-1.5 text-xs text-ink/80">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2">
                      <span className="text-gold-subtle mt-0.5">✦</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Events Supported */}
              <div className="space-y-1.5 pt-1">
                <h5 className="text-[11px] uppercase tracking-widest font-semibold text-plum flex items-center space-x-1.5">
                  <Users size={13} className="text-gold-subtle" />
                  <span>Highlights & Technical Initiatives</span>
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {item.events.map((ev, eIdx) => (
                    <span
                      key={eIdx}
                      className="px-2.5 py-1 text-xs bg-cream rounded border border-taupe-border/50 text-ink/90"
                    >
                      {ev}
                    </span>
                  ))}
                </div>
              </div>

              {/* Community Link */}
              {item.link && (
                <div className="pt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs uppercase tracking-wider text-plum hover:text-plum-burgundy font-medium"
                  >
                    <span>EXPLORE GDG ON CAMPUS</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
