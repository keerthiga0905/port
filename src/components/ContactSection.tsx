import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ContactForm } from './ContactForm';
import { Mail, MapPin, ArrowUp, Quote } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-plum-dark text-cream pt-20 sm:pt-24 pb-12 border-t border-taupe/30 overflow-hidden">
      
      {/* Subtle ambient luxury light effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-plum/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Editorial Contact Showcase (Inspired directly by bottom of Reference Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start pb-16 border-b border-taupe/20">
          
          {/* LEFT SIDE: Portrait Medallion & Editorial Contact Details (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-mega-wide text-taupe-light font-medium flex items-center space-x-2">
                <span className="text-gold-subtle">✦</span>
                <span>LET'S CONNECT</span>
                <span className="text-gold-subtle">✦</span>
              </span>

              <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl text-cream font-normal leading-tight">
                Let's create something <br />
                <span className="italic font-serif text-gold-light">meaningful.</span>
              </h2>

              <p className="text-taupe-light/90 text-sm sm:text-base max-w-lg font-light leading-relaxed">
                Have a project idea, an internship opportunity, or an interesting technology to discuss? I'd love to connect.
              </p>
            </div>

            {/* Circular Portrait & Contact Rows Block (Matching reference) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-xl bg-plum-burgundy/60 border border-taupe/25">
              
              {/* Circular Portrait Crop with Rich Cherry Background */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gold-subtle/70 shadow-luxury flex-shrink-0 bg-gradient-to-b from-cherry to-cherry-dark">
                <img
                  src={personal.portraitPath}
                  alt={personal.name}
                  className="w-full h-full object-contain pt-1 scale-110"
                  style={{ objectPosition: 'center 10%' }}
                />
                <div className="absolute inset-0 rounded-full border border-taupe/40 pointer-events-none"></div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3.5 text-xs text-taupe-light w-full">
                
                {/* Phone */}
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center space-x-3 group hover:text-cream transition-colors"
                >
                  <div className="w-8 h-8 rounded-full border border-taupe/40 flex items-center justify-center text-gold-subtle group-hover:border-gold-subtle transition-colors flex-shrink-0">
                    <span className="text-xs">📞</span>
                  </div>
                  <span className="truncate tracking-wide font-mono text-[11px]">
                    {personal.phone}
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center space-x-3 group hover:text-cream transition-colors"
                >
                  <div className="w-8 h-8 rounded-full border border-taupe/40 flex items-center justify-center text-gold-subtle group-hover:border-gold-subtle transition-colors flex-shrink-0">
                    <Mail size={14} />
                  </div>
                  <span className="truncate tracking-wide font-mono text-[11px]">
                    {personal.email}
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group hover:text-cream transition-colors"
                >
                  <div className="w-8 h-8 rounded-full border border-taupe/40 flex items-center justify-center text-gold-subtle group-hover:border-gold-subtle transition-colors flex-shrink-0">
                    <LinkedinIcon size={14} />
                  </div>
                  <span className="tracking-wide">
                    linkedin.com/in/keerthiga-m
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group hover:text-cream transition-colors"
                >
                  <div className="w-8 h-8 rounded-full border border-taupe/40 flex items-center justify-center text-gold-subtle group-hover:border-gold-subtle transition-colors flex-shrink-0">
                    <GithubIcon size={14} />
                  </div>
                  <span className="tracking-wide">
                    github.com/keerthiga0905
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-3 text-taupe-light/70">
                  <div className="w-8 h-8 rounded-full border border-taupe/30 flex items-center justify-center text-taupe-light flex-shrink-0">
                    <MapPin size={14} />
                  </div>
                  <span className="tracking-wide text-[11px]">
                    {personal.location}
                  </span>
                </div>

              </div>

            </div>

            {/* Editorial Quote Box (Direct reference style: Steve Jobs / Software quote) */}
            <div className="relative p-5 bg-plum/40 rounded-lg border-l-2 border-gold-subtle flex items-start space-x-4">
              <Quote className="text-gold-subtle w-8 h-8 flex-shrink-0 opacity-80" />
              <div className="space-y-1">
                <p className="text-xs sm:text-sm italic font-serif text-cream/90 leading-relaxed">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <p className="text-[10px] uppercase tracking-widest text-taupe-light">
                  — STEVE JOBS / SOFTWARE CRAFTSMANSHIP
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive Contact Form (5 cols) */}
          <div className="lg:col-span-5 bg-plum-burgundy/80 p-6 sm:p-8 rounded-xl border border-taupe/30 shadow-luxury">
            <div className="mb-6 pb-4 border-b border-taupe/20">
              <h3 className="font-editorial-heading text-xl text-cream">
                Send an Inquiry
              </h3>
              <p className="text-xs text-taupe-light/80 mt-1">
                Fill in the details below and I will get back to you shortly.
              </p>
            </div>

            <ContactForm />
          </div>

        </div>

        {/* Footer Base */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-taupe-light/70">
          
          <div className="space-y-1 text-center sm:text-left">
            <p className="tracking-mega-wide uppercase text-[11px] text-cream font-medium">
              DESIGNED WITH CURIOSITY. BUILT WITH CODE.
            </p>
            <p className="text-[10px] text-taupe-light/60">
              © {new Date().getFullYear()} Keerthiga M • Coimbatore Institute of Technology
            </p>
          </div>

          {/* Bottom Navigation & Actions */}
          <div className="flex items-center space-x-6 text-[11px] tracking-wider uppercase">
            <button
              onClick={onOpenResume}
              className="text-taupe-light hover:text-cream transition-colors"
            >
              RESUME
            </button>

            <a
              href="#hero"
              className="text-taupe-light hover:text-cream transition-colors"
            >
              HOME
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-taupe/30 text-cream hover:bg-cream hover:text-plum transition-all"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
