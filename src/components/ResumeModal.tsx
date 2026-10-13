import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { X, Download, ExternalLink, FileText, GraduationCap, Briefcase, Code } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, education, skills, experience, projects } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-plum-dark/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-cream-ivory text-ink rounded-lg shadow-2xl border border-taupe-border my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-cream-ivory/95 backdrop-blur border-b border-taupe-border">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-mega-wide text-plum font-semibold">
            <FileText size={16} className="text-gold-subtle" />
            <span>CURRICULUM VITAE • KEERTHIGA M</span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={personal.resumePdfPath}
              download="Keerthiga_M_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-plum text-cream-ivory text-xs uppercase tracking-wider font-medium hover:bg-plum-dark transition-all"
            >
              <span>DOWNLOAD RESUME</span>
              <Download size={13} />
            </a>

            <a
              href={personal.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1 px-3 py-1.5 rounded-full border border-plum/30 text-plum text-xs uppercase tracking-wider hover:bg-cream-card transition-all"
            >
              <span>OPEN PDF</span>
              <ExternalLink size={13} />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-cream-card text-ink hover:text-plum transition-colors"
              aria-label="Close resume preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Dossier Content (Editorial Layout) */}
        <div className="p-6 sm:p-10 space-y-8 bg-cream">
          
          {/* Identity Header */}
          <div className="border-b border-taupe-border/80 pb-6 space-y-2">
            <h2 id="resume-title" className="font-editorial-heading text-3xl sm:text-4xl text-plum">
              {personal.name}
            </h2>
            <p className="text-sm uppercase tracking-ultra-wide text-taupe-dark font-medium">
              {education.degree} • {education.institution}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink/80 pt-1 font-mono">
              <span>{personal.location}</span>
              <span>•</span>
              <a href={`tel:${personal.phone}`} className="text-cherry hover:underline">
                {personal.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${personal.email}`} className="text-cherry hover:underline">
                {personal.email}
              </a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-cherry hover:underline">
                GitHub
              </a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-cherry hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-ultra-wide text-plum flex items-center space-x-2">
              <GraduationCap size={15} className="text-gold-subtle" />
              <span>Education</span>
            </h3>
            <div className="bg-cream-ivory p-4 rounded border border-taupe-border/60 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold text-plum">{education.institution}</h4>
                  <p className="text-xs text-ink/90 font-medium">{education.degree}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-taupe-dark block">{education.period}</span>
                  <span className="text-xs font-semibold text-cherry font-mono">{education.cgpa}</span>
                </div>
              </div>
              <p className="text-xs text-ink/80">{education.description}</p>
            </div>
          </div>

          {/* Experience & Leadership */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-ultra-wide text-plum flex items-center space-x-2">
              <Briefcase size={15} className="text-gold-subtle" />
              <span>Internship & Experience</span>
            </h3>
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-cream-ivory p-4 rounded border border-taupe-border/60 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-plum">{exp.role}</h4>
                    <p className="text-xs text-ink/90 font-medium">{exp.organization} • <span className="text-taupe-dark">{exp.type}</span></p>
                  </div>
                  <span className="text-xs font-mono text-taupe-dark">{exp.period}</span>
                </div>
                <p className="text-xs text-ink/85">{exp.description}</p>
                <ul className="space-y-1 text-xs text-ink/80 pt-1">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2">
                      <span className="text-gold-subtle">✦</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-ultra-wide text-plum flex items-center space-x-2">
              <Code size={15} className="text-gold-subtle" />
              <span>Featured Projects ({projects.length})</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-cream-ivory p-3.5 rounded border border-taupe-border/60 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-xs font-semibold text-plum">{proj.title}</span>
                    <span className="text-[10px] font-mono text-taupe-dark">{proj.year}</span>
                  </div>
                  <p className="text-[11px] text-ink/85 leading-relaxed">{proj.description}</p>
                  <p className="text-[10px] text-cherry font-mono pt-1">
                    {proj.technologies.slice(0, 4).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Achievements */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-ultra-wide text-plum flex items-center space-x-2">
              <span className="text-gold-subtle">✦</span>
              <span>Achievements & Hackathons</span>
            </h3>
            <div className="space-y-2">
              {portfolioData.achievements.map((ach) => (
                <div key={ach.id} className="bg-cream-ivory p-3 rounded border border-taupe-border/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-plum">{ach.title}</span>
                    <p className="text-[11px] text-taupe-dark">{ach.organization} • {ach.date}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cream border border-cherry/20 text-[10px] font-mono text-cherry font-semibold">
                    {ach.badgeText}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-ultra-wide text-plum">
              Core Technical Competencies (Resume)
            </h3>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {skills.flatMap((s) => s.skills).map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-cream-card border border-taupe-border/60 text-ink/90 rounded text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Download CTA Bar */}
          <div className="pt-6 border-t border-taupe-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-taupe-dark">
              To customize the physical PDF document, replace <code className="text-plum font-mono">public/assets/resume/Keerthiga_M_Resume.pdf</code>.
            </p>
            <a
              href={personal.resumePdfPath}
              download="Keerthiga_M_Resume.pdf"
              className="px-6 py-2.5 bg-plum text-cream-ivory rounded uppercase tracking-wider text-xs font-medium hover:bg-plum-dark transition-all flex items-center space-x-2"
            >
              <span>DOWNLOAD RESUME ↗</span>
              <Download size={14} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
