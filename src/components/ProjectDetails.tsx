import React, { useEffect } from 'react';
import type { Project } from '../data/portfolio';
import { X, ExternalLink, CheckCircle2, AlertCircle, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-plum-dark/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-cream-ivory text-ink rounded-lg shadow-2xl border border-taupe-border/80 my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-cream-ivory/95 backdrop-blur border-b border-taupe-border">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] tracking-mega-wide uppercase text-plum font-semibold">
              CASE STUDY
            </span>
            <span className="text-taupe">/</span>
            <span className="text-[10px] tracking-widest uppercase text-taupe-dark">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-cream-card text-ink hover:text-plum transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          
          {/* Title & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-ultra-wide text-plum/70 font-mono">
                {project.year} • {project.status}
              </span>
            </div>
            <h2 id="modal-title" className="font-editorial-heading text-3xl sm:text-4xl text-plum">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-ink font-light italic font-serif">
              {project.tagline}
            </p>
          </div>

          {/* Large Hero Project Screenshot Frame */}
          <div className="relative aspect-[16/9] w-full rounded-md overflow-hidden border border-taupe-border shadow-luxury bg-plum-dark">
            <img
              src={project.image}
              alt={`${project.title} Interface`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-4 py-3 px-5 bg-cream-card rounded-md border border-taupe-border/60">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-plum font-semibold hover:text-plum-burgundy transition-colors"
              >
                <span>VISIT LIVE DEMO</span>
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="text-xs tracking-wider uppercase text-taupe-dark">
                DEMO PREVIEW ACCESSIBLE LOCALLY
              </span>
            )}

            <div className="h-4 w-[1px] bg-taupe-border hidden sm:block"></div>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-ink hover:text-plum transition-colors"
              >
                <GithubIcon size={14} />
                <span>GITHUB REPOSITORY</span>
              </a>
            ) : (
              <span className="text-xs tracking-wider uppercase text-taupe-dark">
                REPOSITORY PRIVATE
              </span>
            )}
          </div>

          {/* Two-Column Deep Case Study Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            
            {/* Left Column: Problem & Architecture (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Problem Statement */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold tracking-ultra-wide uppercase text-plum flex items-center space-x-2">
                  <AlertCircle size={15} className="text-gold-subtle" />
                  <span>The Problem</span>
                </h3>
                <p className="text-sm text-ink/90 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Architecture & Engineering Overview */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold tracking-ultra-wide uppercase text-plum flex items-center space-x-2">
                  <Cpu size={15} className="text-gold-subtle" />
                  <span>System Architecture</span>
                </h3>
                <p className="text-sm text-ink/90 leading-relaxed bg-cream-card/70 p-4 rounded border border-taupe-border/50">
                  {project.architecture}
                </p>
              </div>

              {/* Implemented Features */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-ultra-wide uppercase text-plum flex items-center space-x-2">
                  <CheckCircle2 size={15} className="text-emerald-700" />
                  <span>Key Implemented Features</span>
                </h3>
                <ul className="space-y-2 text-sm text-ink/90">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <span className="text-gold-subtle text-xs mt-0.5">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Role, Technologies, Challenges & Solutions (5 cols) */}
            <div className="md:col-span-5 space-y-6">
              
              {/* My Role */}
              <div className="space-y-2 bg-cream-card p-4 rounded border border-taupe-border">
                <h4 className="text-[11px] font-semibold tracking-ultra-wide uppercase text-plum">
                  My Contribution & Role
                </h4>
                <p className="text-xs text-ink/90 leading-relaxed">
                  {project.myRole}
                </p>
              </div>

              {/* Technologies Actually Used */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-semibold tracking-ultra-wide uppercase text-plum">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-cream-card border border-taupe-border text-[11px] rounded text-ink/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Resolution */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[11px] font-semibold tracking-ultra-wide uppercase text-plum">
                  Engineering Challenges & Solutions
                </h4>
                <div className="space-y-2">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="text-xs bg-cream-ivory p-3 rounded border border-taupe-border/60 space-y-1">
                      <p className="font-medium text-plum">Challenge:</p>
                      <p className="text-ink/80">{challenge}</p>
                      {project.solutions[idx] && (
                        <>
                          <p className="font-medium text-emerald-800 pt-1">Solution:</p>
                          <p className="text-ink/80">{project.solutions[idx]}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-6 border-t border-taupe-border flex items-center justify-between text-xs">
            <span className="text-taupe-dark">
              CIT Software Systems Portfolio Case Study
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-plum text-cream-ivory rounded uppercase tracking-wider text-xs font-medium hover:bg-plum-dark"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
