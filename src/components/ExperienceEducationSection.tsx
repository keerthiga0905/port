import React from 'react';
import { EducationSection } from './EducationSection';
import { ExperienceSection } from './ExperienceSection';
import { AchievementsSection } from './AchievementsSection';

export const ExperienceEducationSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-cream border-t border-taupe-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Editorial Subtitle Marker */}
        <div className="flex items-center space-x-3 text-xs uppercase tracking-mega-wide text-plum-light font-semibold mb-12 pb-4 border-b border-taupe-border">
          <span>ACADEMIC FOUNDATION & COMMUNITY LEADERSHIP</span>
          <span className="text-gold-subtle">✦</span>
          <span className="text-taupe-dark">CIT COIMBATORE</span>
        </div>

        {/* Two-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Education + Leadership Experience */}
          <div className="lg:col-span-7 space-y-16">
            <EducationSection />
            <div className="h-[1px] bg-taupe-border/60 w-full"></div>
            <ExperienceSection />
          </div>

          {/* Right Column (5 cols): Verified Achievements & Honors with Laurel Wreaths */}
          <div className="lg:col-span-5 sticky top-8">
            <AchievementsSection />
          </div>

        </div>

      </div>
    </section>
  );
};
