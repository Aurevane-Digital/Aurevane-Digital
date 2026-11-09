import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuditClick = () => {
    setMobileMenuOpen(false);
    if (onOpenAuditModal) {
      onOpenAuditModal();
    } else {
      navigate('/contact#website-check');
    }
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Packages', path: '/packages' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#D9D0C3]/80 shadow-xs'
          : 'bg-[#FAF6F0]/90 backdrop-blur-sm border-b border-[#D9D0C3]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 md:h-24 px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Large Luxury Brand Logo */}
        <Link
          to="/"
          aria-label="Aurevane Digital — High-Converting Contractor Website Design Agency"
          className="flex items-center gap-3 shrink-0 group text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E5249]"
        >
          <div className="h-16 md:h-20 flex items-center overflow-visible">
            <img
              alt="Aurevane Digital — High-Converting Contractor Website Design Agency"
              width={240}
              height={96}
              loading="eager"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-xs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3bFfQg6L8w0oyIgKQ0GRw-NjNHgRDE75hIl7EKKl1NXXp9RbrlkPgDC9ImbFlLO6mkStTZzDsw6giBkAE3d-FNMYSSzOz3auMXJPT2T_WHUgYEJ9E0AxXb5YptKaRa2V9buUhc5JT5zrJIx-8Zma9mzeT7TFTfICkj5VjeirFUSK09d9AiI7WwN5Tr32zTVLo82DeTuBQoeMIIU9ZX3Q3SMb-c09q0Dpw94SuhKm9qj0LfCGQTpaeQ"
            />
          </div>
        </Link>

        {/* Clean Multi-Page Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.2em] font-medium uppercase text-[#59544E]"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors cursor-pointer py-1 relative focus-visible:outline-2 focus-visible:outline-[#9E5249] ${
                  isActive
                    ? 'text-[#141210] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#9E5249]'
                    : 'hover:text-[#141210]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleAuditClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#141210] text-white text-[11px] font-semibold tracking-[0.18em] uppercase rounded-sm hover:bg-[#34302D] transition-all duration-200 shadow-sm cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#9E5249]"
          >
            <span>Request a Website Check</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Check Icon */}
          <button
            onClick={handleAuditClick}
            className="sm:hidden p-2 text-[#141210] hover:text-[#9E5249] transition-colors cursor-pointer"
            aria-label="Request a Website Check"
            title="Request a Website Check"
          >
            <ShieldCheck className="w-6 h-6" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#141210] hover:text-[#9E5249] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#D9D0C3] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-xs tracking-[0.2em] uppercase font-medium">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left py-2.5 border-b border-[#D9D0C3]/40 cursor-pointer ${
                    isActive ? 'text-[#141210] font-bold text-[#9E5249]' : 'text-[#59544E] hover:text-[#141210]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={handleAuditClick}
              className="block w-full py-3 bg-[#141210] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm text-center cursor-pointer"
            >
              Request a Website Check
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
