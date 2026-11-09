import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal: () => void;
  onOpenInquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuditModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollY > 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-transparent border-b border-transparent'
          : 'bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#D9D0C3]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto h-24 md:h-28 px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Large Luxury Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          aria-label="Aurevane Digital — High-Converting Contractor Website Design Agency"
          className="flex items-center gap-3 shrink-0 group text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E5249]"
        >
          <div className="h-20 md:h-24 flex items-center overflow-visible">
            <img
              alt="Aurevane Digital — High-Converting Contractor Website Design Agency"
              width={240}
              height={96}
              loading="eager"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] filter drop-shadow-xs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3bFfQg6L8w0oyIgKQ0GRw-NjNHgRDE75hIl7EKKl1NXXp9RbrlkPgDC9ImbFlLO6mkStTZzDsw6giBkAE3d-FNMYSSzOz3auMXJPT2T_WHUgYEJ9E0AxXb5YptKaRa2V9buUhc5JT5zrJIx-8Zma9mzeT7TFTfICkj5VjeirFUSK09d9AiI7WwN5Tr32zTVLo82DeTuBQoeMIIU9ZX3Q3SMb-c09q0Dpw94SuhKm9qj0LfCGQTpaeQ"
            />
          </div>
        </a>

        {/* Clean Editorial Desktop Nav */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.2em] font-medium uppercase text-[#59544E]"
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="hover:text-[#141210] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E5249]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className="hover:text-[#141210] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E5249]"
          >
            About
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('work');
            }}
            className="hover:text-[#141210] transition-colors cursor-pointer font-semibold text-[#141210] focus-visible:outline-2 focus-visible:outline-[#9E5249]"
          >
            Work
          </a>
          <a
            href="#packages"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('packages');
            }}
            className="hover:text-[#141210] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E5249]"
          >
            Packages
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="hover:text-[#141210] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E5249]"
          >
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#website-check"
            onClick={(e) => {
              e.preventDefault();
              onOpenAuditModal();
            }}
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 bg-[#141210] text-white text-[11px] font-semibold tracking-[0.18em] uppercase rounded-sm hover:bg-[#34302D] transition-all duration-200 shadow-sm cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#9E5249]"
          >
            <span>Request a Website Check</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Check Icon */}
          <button
            onClick={onOpenAuditModal}
            className="sm:hidden p-2 text-[#141210] hover:text-[#9E5249] transition-colors cursor-pointer"
            aria-label="Request a Website Check"
            title="Request a Website Check"
          >
            <ShieldCheck className="w-7 h-7" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#141210] hover:text-[#9E5249] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#D9D0C3] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-xs tracking-[0.2em] uppercase font-medium">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="text-left py-2 text-[#141210] hover:text-[#9E5249] border-b border-[#D9D0C3]/40 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className="text-left py-2 text-[#59544E] hover:text-[#141210] border-b border-[#D9D0C3]/40 cursor-pointer"
            >
              Studio About &amp; Ethos
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('work');
              }}
              className="text-left py-2 text-[#59544E] hover:text-[#141210] border-b border-[#D9D0C3]/40 cursor-pointer"
            >
              Selected Commissions
            </a>
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('packages');
              }}
              className="text-left py-2 text-[#59544E] hover:text-[#141210] border-b border-[#D9D0C3]/40 cursor-pointer"
            >
              Service Packages
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="text-left py-2 text-[#59544E] hover:text-[#141210] cursor-pointer"
            >
              Direct Contact
            </a>
          </div>
          <div className="pt-2">
            <a
              href="#website-check"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="block w-full py-3 bg-[#141210] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm text-center cursor-pointer"
            >
              Request a Website Check
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
