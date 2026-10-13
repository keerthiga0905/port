import React from 'react';
import { portfolioData, type AchievementItem } from '../data/portfolio';

// Luxury laurel wreath SVG icon matching the reference image's award markers
const LaurelWreathIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Left branch */}
    <path d="M 46 82 C 28 75, 20 54, 24 32 C 25 28, 27 24, 30 20" />
    <path d="M 23 38 C 17 38, 14 32, 17 28 C 20 24, 25 26, 26 31" />
    <path d="M 22 52 C 16 54, 12 48, 14 44 C 16 40, 22 41, 23 46" />
    <path d="M 27 66 C 20 69, 17 63, 18 58 C 20 53, 26 54, 28 60" />
    <path d="M 37 77 C 30 81, 26 75, 27 70 C 29 65, 35 66, 38 72" />

    {/* Right branch */}
    <path d="M 54 82 C 72 75, 80 54, 76 32 C 75 28, 73 24, 70 20" />
    <path d="M 77 38 C 83 38, 86 32, 83 28 C 80 24, 75 26, 74 31" />
    <path d="M 78 52 C 84 54, 88 48, 86 44 C 84 40, 78 41, 77 46" />
    <path d="M 73 66 C 80 69, 83 63, 82 58 C 80 53, 74 54, 72 60" />
    <path d="M 63 77 C 70 81, 74 75, 73 70 C 71 65, 65 66, 62 72" />

    {/* Center star */}
    <circle cx="50" cy="50" r="2" fill="currentColor" />
  </svg>
);

export const AchievementsSection: React.FC = () => {
  return (
    <div id="achievements" className="space-y-8">
      {/* Section Header */}
      <div>
        <div className="flex items-center space-x-2 text-[11px] uppercase tracking-mega-wide text-plum-light font-semibold mb-2">
          <span>HONORS & RECOGNITION</span>
          <span className="text-gold-subtle">✦</span>
          <span>CIT & BEYOND</span>
        </div>
        <h3 className="font-editorial-heading text-2xl sm:text-3xl text-plum">
          Learning. Building. Contributing.
        </h3>
      </div>

      {/* Editorial Laurel Wreath List (Matching the Reference Showcase) */}
      <div className="space-y-6">
        {portfolioData.achievements.map((item: AchievementItem) => (
          <div
            key={item.id}
            className="group flex items-start space-x-5 p-5 bg-cream-ivory rounded-lg border border-taupe-border/70 hover:border-plum/40 hover:shadow-editorial transition-all duration-300"
          >
            {/* Laurel Wreath Emblem */}
            <div className="text-gold-subtle group-hover:text-plum transition-colors flex-shrink-0 pt-0.5">
              <LaurelWreathIcon className="w-12 h-12 sm:w-14 sm:h-14" />
            </div>

            {/* Achievement Text Info */}
            <div className="space-y-1 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-widest uppercase font-mono text-taupe-dark">
                  {item.badgeText}
                </span>
                <span className="text-[10px] text-taupe-dark">
                  {item.date}
                </span>
              </div>

              <h4 className="font-editorial-heading text-base sm:text-lg font-medium text-plum leading-snug group-hover:text-plum-burgundy transition-colors">
                {item.title}
              </h4>

              <p className="text-xs text-taupe-dark font-medium">
                {item.organization}
              </p>

              <p className="text-xs text-ink/80 leading-relaxed font-light pt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
