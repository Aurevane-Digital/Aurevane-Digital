import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyModal,
  onOpenTermsModal,
}) => {
  return (
    <footer className="w-full bg-[#F5EDE2] border-t border-[#D9D0C3]/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Logo & Mission Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link to="/" className="h-16 md:h-20 flex items-center">
              <img
                alt="Aurevane Digital Studio logo"
                width={532}
                height={423}
                loading="lazy"
                className="h-14 md:h-18 w-auto object-contain object-left"
                src="/logo.png"
              />
            </Link>
            <p className="text-xs md:text-sm text-[#59544E] max-w-sm leading-relaxed font-light">
              High-converting website design for contractors and luxury trades. Built with minimal aesthetics, architectural rigor, and precision code.
            </p>
            <div className="w-10 h-px bg-[#B89255]/60 my-1" />
            <span className="text-[10px] uppercase tracking-widest text-[#9E5249] font-semibold">
              Archival Digital Atelier
            </span>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-[11px] uppercase tracking-widest text-[#141210] font-bold mb-1">
              Navigation
            </h3>
            <nav aria-label="Footer Navigation" className="flex flex-col gap-2.5 text-xs text-[#59544E] font-medium">
              <Link
                to="/"
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                About Aurevane
              </Link>
              <Link
                to="/our-work"
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                Our Work (Cinematic Presentation)
              </Link>
              <Link
                to="/packages"
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                Service Packages
              </Link>
              <Link
                to="/contact"
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                Contact &amp; Free Audit
              </Link>
            </nav>
          </div>

          {/* Practice & Focus */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-[11px] uppercase tracking-widest text-[#141210] font-bold mb-1">
              Practice &amp; Focus
            </h3>
            <div className="flex flex-col gap-2 text-xs text-[#59544E]">
              <span>Contractor Website Design &amp; High-Ticket Trades</span>
              <span>Roofing, Electrical, Junk Removal &amp; Excavation</span>
              <span>Fence &amp; Landscaping Company Web Systems</span>
              <span>High-Performing Local SEO Architecture</span>
              <a
                href="mailto:aurevanedigital@gmail.com"
                className="pt-2 text-[11px] font-mono text-[#9E5249] font-semibold hover:underline"
              >
                Direct: aurevanedigital@gmail.com
              </a>
              <a
                href="https://www.instagram.com/aurevanedigital/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#59544E] hover:text-[#141210] transition-colors underline-offset-4 hover:underline"
              >
                Instagram: Aurevane Digital
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Row */}
        <div className="border-t border-[#D9D0C3]/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-[#59544E]">
          <p>© 2026 Aurevane Digital Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-[#141210] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTermsModal}
              className="hover:text-[#141210] transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
