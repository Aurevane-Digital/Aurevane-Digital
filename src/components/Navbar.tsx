import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const serviceLinks = [
    { label: 'Contractor Website Design', path: '/contractor-website-design' },
    { label: 'Home Services Website Design', path: '/home-services-website-design' },
    { label: 'Junk Removal Website Design', path: '/junk-removal-website-design' },
    { label: 'Junk Removal SEO', path: '/junk-removal-seo' },
    { label: 'Website Redesign', path: '/website-redesign' },
  ];

  const isServiceActive = serviceLinks.some((s) => s.path === location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollY > 60);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesOpen]);

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
              alt="Aurevane Digital Studio logo"
              width={532}
              height={423}
              loading="eager"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-xs"
              src="/logo.png"
            />
          </div>
        </Link>

        {/* Clean Multi-Page Navigation with Services Dropdown */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.2em] font-medium uppercase text-[#59544E]"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors cursor-pointer py-1 relative focus-visible:outline-2 focus-visible:outline-[#9E5249] ${
                isActive
                  ? 'text-[#141210] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#9E5249]'
                  : 'hover:text-[#141210]'
              }`
            }
          >
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="desktop-services-menu"
              className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 relative focus-visible:outline-2 focus-visible:outline-[#9E5249] ${
                isServiceActive || servicesOpen
                  ? 'text-[#141210] font-semibold'
                  : 'hover:text-[#141210]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-[#9E5249]' : 'text-[#827C75]'
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                id="desktop-services-menu"
                role="menu"
                className="absolute top-full left-0 mt-3 w-64 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                {serviceLinks.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-[11px] tracking-wider uppercase transition-colors ${
                        isActive
                          ? 'bg-[#F5EDE2] text-[#9E5249] font-bold'
                          : 'text-[#59544E] hover:text-[#141210] hover:bg-[#F5EDE2]/70'
                      }`
                    }
                  >
                    {service.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors cursor-pointer py-1 relative focus-visible:outline-2 focus-visible:outline-[#9E5249] ${
                isActive
                  ? 'text-[#141210] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#9E5249]'
                  : 'hover:text-[#141210]'
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/our-work"
            className={({ isActive }) =>
              `transition-colors cursor-pointer py-1 relative focus-visible:outline-2 focus-visible:outline-[#9E5249] ${
                isActive
                  ? 'text-[#141210] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#9E5249]'
                  : 'hover:text-[#141210]'
              }`
            }
          >
            Our Work
          </NavLink>

          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `transition-colors cursor-pointer py-1 relative focus-visible:outline-2 focus-visible:outline-[#9E5249] ${
                isActive
                  ? 'text-[#141210] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#9E5249]'
                  : 'hover:text-[#141210]'
              }`
            }
          >
            Packages
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors cursor-pointer py-1 relative focus-visible:outline-2 focus-visible:outline-[#9E5249] ${
                isActive
                  ? 'text-[#141210] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#9E5249]'
                  : 'hover:text-[#141210]'
              }`
            }
          >
            Contact
          </NavLink>
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
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-left py-2.5 border-b border-[#D9D0C3]/40 cursor-pointer ${
                  isActive ? 'text-[#141210] font-bold text-[#9E5249]' : 'text-[#59544E] hover:text-[#141210]'
                }`
              }
            >
              Home
            </NavLink>

            {/* Mobile Services Accordion */}
            <div className="border-b border-[#D9D0C3]/40">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                className="w-full flex items-center justify-between py-2.5 text-left text-xs tracking-[0.2em] uppercase font-medium text-[#59544E] hover:text-[#141210] cursor-pointer"
              >
                <span className={isServiceActive ? 'text-[#9E5249] font-bold' : ''}>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-[#9E5249]' : 'text-[#827C75]'
                  }`}
                  aria-hidden="true"
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-3 pb-2 space-y-2 border-l border-[#D9D0C3] my-1">
                  {serviceLinks.map((service) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      onClick={() => {
                        setMobileServicesOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className={({ isActive }) =>
                        `block py-1.5 text-[11px] tracking-wider uppercase ${
                          isActive ? 'text-[#9E5249] font-bold' : 'text-[#59544E] hover:text-[#141210]'
                        }`
                      }
                    >
                      {service.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-left py-2.5 border-b border-[#D9D0C3]/40 cursor-pointer ${
                  isActive ? 'text-[#141210] font-bold text-[#9E5249]' : 'text-[#59544E] hover:text-[#141210]'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/our-work"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-left py-2.5 border-b border-[#D9D0C3]/40 cursor-pointer ${
                  isActive ? 'text-[#141210] font-bold text-[#9E5249]' : 'text-[#59544E] hover:text-[#141210]'
                }`
              }
            >
              Our Work
            </NavLink>

            <NavLink
              to="/packages"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-left py-2.5 border-b border-[#D9D0C3]/40 cursor-pointer ${
                  isActive ? 'text-[#141210] font-bold text-[#9E5249]' : 'text-[#59544E] hover:text-[#141210]'
                }`
              }
            >
              Packages
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-left py-2.5 border-b border-[#D9D0C3]/40 cursor-pointer ${
                  isActive ? 'text-[#141210] font-bold text-[#9E5249]' : 'text-[#59544E] hover:text-[#141210]'
                }`
              }
            >
              Contact
            </NavLink>
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

