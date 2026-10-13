import React from 'react';
import type { Project } from '../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer flex flex-col bg-plum-dark/80 rounded-sm border border-taupe/20 overflow-hidden transition-all duration-300 hover:border-taupe/60 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Screenshot / Project Image Container (Framed with luxury border) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-plum-burgundy p-1.5 sm:p-2 border-b border-taupe/15">
        <div className="w-full h-full overflow-hidden relative">
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-plum-dark/20 group-hover:bg-transparent transition-colors duration-300"></div>
          
          {/* Top-Right Arrow Hover Badge */}
          <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-cream-ivory/90 text-plum flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-md">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      {/* Card Information - Cream Typography on Deep Plum */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-3">
        <div className="space-y-1.5">
          {/* Category */}
          <div className="text-[9px] sm:text-[10px] tracking-mega-wide uppercase text-taupe-light font-medium flex items-center justify-between">
            <span>{project.category}</span>
            <span className="text-gold-subtle">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="font-editorial-heading text-lg sm:text-xl font-normal text-cream tracking-wide group-hover:text-gold-light transition-colors">
            {project.title}
          </h3>

          {/* Tagline / Brief Description */}
          <p className="text-taupe-light/90 text-xs line-clamp-2 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Bottom Metadata & Trigger Link */}
        <div className="pt-2 border-t border-taupe/15 flex items-center justify-between text-[10px] tracking-widest uppercase text-cream/70">
          <span className="font-mono text-[9px] text-taupe">{project.status}</span>
          <span className="group-hover:text-cream flex items-center space-x-1 transition-colors">
            <span>VIEW CASE</span>
            <span className="text-gold-subtle">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};
