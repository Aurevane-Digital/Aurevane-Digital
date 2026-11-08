import React from 'react';

interface FooterProps {
  onNavClick: (anchor: string) => void;
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenPrivacyModal,
  onOpenTermsModal,
}) => {
  return (
    <footer className="w-full bg-[#F5EDE2] border-t border-[#D9D0C3]/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Logo & Mission Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-20 md:h-24 flex items-center">
              <img
                alt="Aurevane Digital"
                className="h-16 md:h-20 w-auto object-contain object-left"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyrjlaVmDQP0ISYNJv_U_2aSx69k68JCXVH2KJSwz1g_q6Pu1TbcXF_TQF0kEDuvms5ny5YsuQCTFCmmoU1VUnfZi8rLRvsINw4ktT33X8z9yOiAIchEgxD3VgHf-xUss54-kCUrzWZjdF91lYJAY8Md69cDzyvRoat77EHqAzkNqZzCbsTGRMOf1SO7lgtigsIOtckAT2XuZoKTBV_os-KsFuLxPmnm8tuOooSv7mu-r4EQl98Ghbfg"
              />
            </div>
            <p className="text-xs md:text-sm text-[#59544E] max-w-sm leading-relaxed font-light">
              Digital experiences that make businesses impossible to overlook. Built with minimal aesthetics, architectural rigor, and precision code.
            </p>
            <div className="w-10 h-px bg-[#B89255]/60 my-1" />
            <span className="text-[10px] uppercase tracking-widest text-[#9E5249] font-semibold">
              Archival Digital Atelier
            </span>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-[11px] uppercase tracking-widest text-[#141210] font-bold mb-1">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2 text-xs text-[#59544E] font-medium">
              <button
                onClick={() => onNavClick('hero')}
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onNavClick('about')}
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                About Aurevane
              </button>
              <button
                onClick={() => onNavClick('work')}
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                Selected Work
              </button>
              <button
                onClick={() => onNavClick('packages')}
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                Service Packages
              </button>
              <button
                onClick={() => onNavClick('website-check')}
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                Free Website Check
              </button>
              <button
                onClick={() => onNavClick('contact')}
                className="text-left hover:text-[#141210] transition-colors cursor-pointer"
              >
                Direct Contact
              </button>
            </nav>
          </div>

          {/* Practice & Focus */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-[11px] uppercase tracking-widest text-[#141210] font-bold mb-1">
              Practice &amp; Focus
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#59544E]">
              <span>Contractors &amp; High-Ticket Exterior Trades</span>
              <span>High-Performing Local SEO Architecture</span>
              <span>Editorial Aesthetic Systems</span>
              <span>Conversion Engine Engineering</span>
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
