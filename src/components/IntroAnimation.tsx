import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [secondsLeft, setSecondsLeft] = useState(5.0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const totalDuration = 5000; // 5 seconds
    const intervalTime = 50;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, (totalDuration - elapsed) / 1000);
      const currentProgress = Math.min(100, (elapsed / totalDuration) * 100);

      setSecondsLeft(remaining);
      setProgress(currentProgress);

      // Trigger transition mode in the last 600ms
      if (elapsed >= totalDuration - 600 && !isTransitioning) {
        setIsTransitioning(true);
      }

      if (elapsed >= totalDuration) {
        clearInterval(timer);
        onComplete();
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete, isTransitioning]);

  const handleSkip = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-out select-none ${
        isTransitioning
          ? 'opacity-0 scale-105 blur-md pointer-events-none'
          : 'opacity-100 scale-100 blur-0'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 45%, #420610 0%, #260308 55%, #120104 100%)',
      }}
    >
      {/* Background Ambient Cherry Light & Floating Stardust */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Pulsing Radiant Cherry Glow Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cherry-crimson/25 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cherry/35 rounded-full blur-[90px]" />

        {/* Delicate Concentric Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-cherry/20 opacity-40 animate-[spin_40s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-dashed border-gold-subtle/15 opacity-50 animate-[spin_70s_linear_infinite]" />

        {/* Ambient Stardust Particles */}
        <div className="absolute top-[18%] left-[22%] w-1.5 h-1.5 rounded-full bg-gold-subtle/60 animate-ping" />
        <div className="absolute top-[28%] right-[25%] w-2 h-2 rounded-full bg-cherry-crimson/70 animate-pulse" />
        <div className="absolute bottom-[24%] left-[28%] w-1.5 h-1.5 rounded-full bg-cherry-rose/60 animate-bounce" />
        <div className="absolute bottom-[20%] right-[22%] w-2 h-2 rounded-full bg-gold-light/60 animate-ping" />
      </div>

      {/* Main Intro Animation Card */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-700">
        
        {/* Top Minimal Insignia Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-cherry-dark/60 border border-cherry/40 shadow-editorial text-[10px] sm:text-[11px] tracking-mega-wide uppercase text-cherry-rose">
          <Sparkles size={12} className="text-gold-subtle animate-spin" />
          <span>COIMBATORE INSTITUTE OF TECHNOLOGY</span>
          <span className="text-gold-subtle">✦</span>
          <span>PORTFOLIO 2026</span>
        </div>

        {/* Animated Greeting & Introduction Statement */}
        <div className="space-y-3 sm:space-y-4">
          
          {/* Greeting: "HII," */}
          <div className="font-serif italic text-gold-light text-3xl sm:text-5xl md:text-6xl tracking-wide transition-all duration-500 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
            HII,
          </div>

          {/* Sub-line: "THIS IS" */}
          <div className="text-xs sm:text-sm md:text-base uppercase tracking-mega-wide text-cherry-blush/80 font-semibold flex items-center justify-center space-x-3">
            <span className="h-[1px] w-8 sm:w-14 bg-cherry-crimson/40"></span>
            <span>THIS IS</span>
            <span className="h-[1px] w-8 sm:w-14 bg-cherry-crimson/40"></span>
          </div>

          {/* Name Reveal: "KEERTHIGA M" */}
          <h1 className="font-editorial-heading text-5xl sm:text-7xl md:text-8xl font-normal text-cream tracking-tight leading-none drop-shadow-[0_0_40px_rgba(201,24,59,0.55)]">
            <span className="text-white">KEERTHIGA</span>{' '}
            <span className="text-cherry-crimson italic font-serif">M</span>
          </h1>

          {/* Department & Role Tagline */}
          <p className="text-xs sm:text-sm font-light text-taupe-light/90 max-w-lg mx-auto tracking-wide pt-1">
            M.Sc. Software Systems Student & Full Stack Developer
          </p>

        </div>

        {/* Three Specialization Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[9px] sm:text-[10px] tracking-widest uppercase font-medium text-cream/80">
          <span className="px-3 py-1 rounded-full bg-cherry-burgundy/60 border border-cherry/30">
            Full Stack Web
          </span>
          <span className="px-3 py-1 rounded-full bg-cherry-burgundy/60 border border-cherry/30">
            Machine Learning & AI
          </span>
          <span className="px-3 py-1 rounded-full bg-cherry-burgundy/60 border border-cherry/30">
            GDG Event Lead
          </span>
        </div>

        {/* 5-Second Countdown & Progress Mode Bar */}
        <div className="w-full max-w-md pt-4 space-y-3">
          
          {/* Progress Bar Track */}
          <div className="w-full h-1.5 bg-cherry-deep/80 rounded-full overflow-hidden border border-cherry/30 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-cherry via-cherry-crimson to-gold-subtle rounded-full transition-all duration-75 ease-linear shadow-[0_0_12px_rgba(201,24,59,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status Label & Manual Skip CTA */}
          <div className="flex items-center justify-between text-[11px] tracking-wider uppercase text-taupe-light/80">
            <span className="flex items-center space-x-1.5 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-cherry-crimson animate-ping" />
              <span>TRANSITIONING IN {secondsLeft.toFixed(1)}s</span>
            </span>

            <button
              onClick={handleSkip}
              className="group inline-flex items-center space-x-1 px-3 py-1 rounded-full text-cream hover:text-gold-light border border-cherry/40 hover:border-gold-subtle/50 transition-all text-[10px] uppercase font-medium bg-cherry/30 hover:bg-cherry-burgundy"
            >
              <span>ENTER HOME PAGE</span>
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>

      {/* Subtle Bottom Ambient Tag */}
      <div className="absolute bottom-6 text-[9px] uppercase tracking-mega-wide text-taupe-dark/60 font-mono">
        CIT COIMBATORE • PORTFOLIO SHOWCASE
      </div>
    </div>
  );
};
