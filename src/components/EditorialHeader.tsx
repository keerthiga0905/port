import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface EditorialHeaderProps {
  onOpenResume: () => void;
  onReplayIntro?: () => void;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({ onOpenResume, onReplayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'work', 'about', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full z-40 pt-4 sm:pt-6">
      {/* Top Editorial Masthead Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between text-[11px] sm:text-xs tracking-widest text-ink uppercase pb-3 sm:pb-4 border-b border-taupe-border/60">
          {/* Top Left */}
          <div className="font-medium tracking-ultra-wide flex items-center space-x-2">
            <span className="text-plum font-bold">KEERTHIGA M</span>
            <span className="text-taupe">/</span>
            <span className="hidden sm:inline text-ink/80">SOFTWARE SYSTEMS</span>
            <span className="inline sm:hidden text-ink/80">DEV</span>
          </div>

          {/* Top Center - Decorative divider line with plus symbol */}
          <div className="hidden md:flex items-center space-x-3 text-taupe px-6 flex-1 justify-center max-w-xs">
            <div className="h-[1px] bg-taupe-border flex-1"></div>
            <span className="text-[10px] text-plum/70 select-none">✦</span>
            <div className="h-[1px] bg-taupe-border flex-1"></div>
          </div>

          {/* Top Right - Editorial micro-statement */}
          <div className="hidden sm:flex flex-col items-end text-right font-normal text-[10px] tracking-mega-wide text-ink/75">
            <span>BUILDING DIGITAL EXPERIENCES</span>
            <span className="text-[9px] text-taupe-dark">SOFTWARE • DESIGN • INNOVATION</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-plum hover:text-plum-dark"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Compact Floating / Embedded Navigation Bar */}
        <nav
          className={`transition-all duration-300 py-2.5 sm:py-3.5 flex items-center justify-between text-xs tracking-ultra-wide ${
            scrolled
              ? 'sticky top-2 bg-cream/90 backdrop-blur-md px-4 rounded-full border border-taupe-border/70 shadow-editorial my-2 z-50'
              : 'relative'
          }`}
          aria-label="Main Navigation"
        >
          {/* Section links */}
          <div className="hidden sm:flex items-center space-x-6 md:space-x-8">
            {portfolioData.navigation.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative py-1 uppercase text-[11px] transition-colors duration-200 ${
                    isActive
                      ? 'text-plum font-semibold'
                      : 'text-ink/70 hover:text-plum'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-plum rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Location indicator, Replay Intro & Resume action */}
          <div className="flex items-center space-x-3 sm:space-x-4 ml-auto sm:ml-0">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center space-x-1 text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-cherry/30 text-cherry hover:bg-cherry hover:text-cream transition-all duration-200 font-medium"
                title="Replay 5-second intro animation"
              >
                <span>✦ INTRO</span>
              </button>
            )}

            <span className="hidden md:inline-flex items-center text-[10px] tracking-widest text-taupe-dark uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mr-2 animate-pulse"></span>
              CIT COIMBATORE, TN
            </span>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 text-[10px] sm:text-[11px] tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-plum/40 text-plum hover:bg-plum hover:text-cream transition-all duration-200 font-medium"
            >
              <span>RESUME</span>
              <ArrowUpRight size={12} />
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-cream-ivory border border-taupe-border rounded-xl p-5 my-2 shadow-luxury space-y-3">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-ultra-wide py-2 text-ink border-b border-taupe-border/30 hover:text-plum"
              >
                {item.label}
              </a>
            ))}
            
            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-full text-center text-xs uppercase tracking-ultra-wide py-2 rounded-lg border border-cherry/40 text-cherry flex items-center justify-center space-x-2"
              >
                <span>✦ REPLAY INTRO (5s)</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-center text-xs uppercase tracking-ultra-wide py-2.5 rounded-lg bg-plum text-cream flex items-center justify-center space-x-2 mt-2"
            >
              <span>VIEW RESUME</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        )}

        {/* Oversized Editorial KEERTHIGA M Heading */}
        <div className="pt-2 sm:pt-4 pb-2 sm:pb-3 border-b border-taupe-border/40 select-none overflow-hidden">
          <div className="flex items-baseline justify-between w-full">
            <h1 className="font-editorial-heading font-normal tracking-[-0.02em] text-[11vw] sm:text-[9.8vw] lg:text-[8.6vw] leading-[0.88] text-plum text-center sm:text-left w-full uppercase transition-all duration-300 whitespace-nowrap">
              <span>KEERTHIGA</span>
              <span className="inline-block mx-2 sm:mx-4">M</span>
            </h1>
          </div>
        </div>

        {/* Delicate decorative flourish below headline (as seen in reference) */}
        <div className="flex items-center justify-center py-2 sm:py-3 text-taupe space-x-4">
          <div className="h-[1px] bg-taupe-border/70 flex-1 max-w-xs"></div>
          <span className="text-[11px] text-plum/60 tracking-ultra-wide flex items-center space-x-1.5">
            <span>✧</span>
            <span className="text-[9px] uppercase tracking-mega-wide text-taupe-dark">AUTUMN • WINTER • CIT</span>
            <span>✧</span>
          </span>
          <div className="h-[1px] bg-taupe-border/70 flex-1 max-w-xs"></div>
        </div>
      </div>
    </header>
  );
};
