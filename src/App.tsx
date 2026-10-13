import { useState } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
import { EditorialHeader } from './components/EditorialHeader';
import { HeroSection } from './components/HeroSection';
import { FeaturedWork } from './components/FeaturedWork';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { AchievementStrip } from './components/AchievementStrip';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col relative selection:bg-cherry selection:text-cream-ivory">
      {/* 5-Second Intro Animation with Transition Mode */}
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* Subtle Editorial Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none grain-overlay z-30 opacity-70"></div>

      {/* 1. Reference-Inspired Header with Oversized PORTFOLIO Title */}
      <EditorialHeader
        onOpenResume={() => setResumeOpen(true)}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* Main Content Stream */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section with AI-Generated Portrait & 3D Depth */}
        <HeroSection />

        {/* 3. Featured Work - Deep Plum Showcase */}
        <FeaturedWork />

        {/* 4. About Me - Editorial Two-Column Section */}
        <AboutSection />

        {/* 5. What I Bring - Skills & Capabilities */}
        <SkillsSection />

        {/* 6. Education, Experience & Achievements */}
        <ExperienceEducationSection />

        {/* 7. Achievement & Institutional Affinity Strip */}
        <AchievementStrip />
      </main>

      {/* 8. Contact & Closing Magazine Section */}
      <ContactSection onOpenResume={() => setResumeOpen(true)} />

      {/* 9. Interactive Resume Dossier Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;
