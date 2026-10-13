import React, { useState } from 'react';
import { portfolioData, type Project } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectDetails } from './ProjectDetails';
import { ArrowRight } from 'lucide-react';

type ProjectFilter = 'ALL' | 'AI_VISION' | 'WEB_APPS' | 'SYSTEMS_NETWORKS';

interface FilterCategory {
  id: ProjectFilter;
  label: string;
  count: number;
}

export const FeaturedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('ALL');

  const filterCategories: FilterCategory[] = [
    { id: 'ALL', label: 'All Projects', count: portfolioData.projects.length },
    {
      id: 'AI_VISION',
      label: 'AI & Computer Vision',
      count: portfolioData.projects.filter((p) =>
        ['formguard', 'visionassist', 'identix', 'college-rag'].includes(p.id)
      ).length,
    },
    {
      id: 'WEB_APPS',
      label: 'Web Applications',
      count: portfolioData.projects.filter((p) =>
        ['youroute', 'tablebite', 'timetable-generator'].includes(p.id)
      ).length,
    },
    {
      id: 'SYSTEMS_NETWORKS',
      label: 'Systems & Networks',
      count: portfolioData.projects.filter((p) =>
        ['skyport', 'hybrid-transfer', 'blood-bank'].includes(p.id)
      ).length,
    },
  ];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AI_VISION') {
      return ['formguard', 'visionassist', 'identix', 'college-rag'].includes(project.id);
    }
    if (activeFilter === 'WEB_APPS') {
      return ['youroute', 'tablebite', 'timetable-generator'].includes(project.id);
    }
    if (activeFilter === 'SYSTEMS_NETWORKS') {
      return ['skyport', 'hybrid-transfer', 'blood-bank'].includes(project.id);
    }
    return true;
  });

  return (
    <section id="work" className="relative bg-plum-dark text-cream py-16 sm:py-20 border-y border-taupe/30 overflow-hidden">
      
      {/* Subtle background grain & radial luxury lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#870A1E_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-plum/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (✦ FEATURED WORK ✦ with fine line dividers) */}
        <div className="flex items-center justify-center space-x-4 mb-8 sm:mb-10">
          <div className="h-[1px] bg-taupe/30 flex-1 max-w-xs sm:max-w-md"></div>
          
          <div className="flex items-center space-x-2 text-taupe-light text-xs sm:text-sm tracking-mega-wide uppercase font-medium">
            <span className="text-gold-subtle text-xs">✦</span>
            <span className="text-cream tracking-[0.3em]">FEATURED WORK & GITHUB REPOSITORIES</span>
            <span className="text-gold-subtle text-xs">✦</span>
          </div>

          <div className="h-[1px] bg-taupe/30 flex-1 max-w-xs sm:max-w-md"></div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`group px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 border ${
                  isActive
                    ? 'bg-cherry text-cream border-cherry shadow-[0_0_20px_rgba(201,24,59,0.35)] scale-105'
                    : 'bg-plum-burgundy/60 text-taupe-light hover:text-cream hover:bg-plum border-taupe/30 hover:border-taupe/60'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                    isActive
                      ? 'bg-cream-ivory text-cherry font-semibold'
                      : 'bg-plum-dark/60 text-taupe-light group-hover:text-cream'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Cards Grid: 1 col on mobile, 2 cols on tablet, 3-4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 transition-all duration-300">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Subtle bottom note & portfolio GitHub link */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-between text-[11px] text-taupe-light/70 tracking-widest uppercase border-t border-taupe/20 pt-6">
          <span className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-subtle"></span>
            <span>All 10 projects engineered with clean architecture & modern web standards</span>
          </span>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 sm:mt-0 text-cream hover:text-gold-light transition-colors flex items-center space-x-1 underline decoration-taupe/40 underline-offset-4"
          >
            <span>EXPLORE KEERTHIGA'S GITHUB ({portfolioData.projects.length} REPOSITORIES)</span>
            <ArrowRight size={12} />
          </a>
        </div>

      </div>

      {/* Case Study Modal Dialog */}
      <ProjectDetails
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
