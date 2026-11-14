import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const tradeLinks = [
    { label: 'Junk Removal', path: '/junk-removal-website-design' },
    { label: 'Excavation', path: '/excavation-website-design' },
    { label: 'Electrical Contractor', path: '/electrical-contractor-website-design' },
    { label: 'General Contractor', path: '/general-contractor-website-design' },
    { label: 'Mobile Detailing', path: '/mobile-detailing-website-design' },
    { label: 'Home Services', path: '/home-services-website-design' },
  ];

  const coreServiceLinks = [
    { label: 'Contractor Website Design', path: '/contractor-website-design' },
    { label: 'Junk Removal SEO', path: '/junk-removal-seo' },
    { label: 'Website Redesign', path: '/website-redesign' },
  ];

  const allServiceLinks = [...tradeLinks, ...coreServiceLinks];
  const isServiceActive = allServiceLinks.some((s) => s.path === location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollY > 32);
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
        setMobileMenuOpen(false);
      }
    };

    if (servicesOpen || mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesOpen, mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ease-out border-b ${
        scrolled
          ? 'bg-[#0A0A0A]/85 backdrop-blur-xl border-white/[0.08]'
          : 'bg-[#0A0A0A]/60 backdrop-blur-md border-white/[0.04]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-16 md:h-20 px-6 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Mark */}
        <Link
          to="/"
          aria-label="Aurevane Digital — Home"
          className="flex items-center gap-2.5 shrink-0 whitespace-nowrap group"
        >
          <svg
            viewBox="0 0 36 36"
            className="w-7 h-7 shrink-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="1"
              y="1"
              width="34"
              height="34"
              rx="9"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.12)"
            />
            <path
              d="M18 7.5L9.5 27.5H13.1L15.1 22.6H20.9L22.9 27.5H26.5L18 7.5ZM16.4 19.4L18 15.2L19.6 19.4H16.4Z"
              fill="#FAFAFA"
            />
            <circle cx="26.5" cy="11.5" r="2.2" fill="var(--accent)" />
          </svg>
          <span className="font-sans text-[15px] font-semibold tracking-[0.22em] uppercase text-[#FAFAFA] group-hover:text-[var(--accent)] transition-colors">
            AUREVANE
          </span>
        </Link>

        {/* Zone 2: Concise Navigation */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[rgba(250,250,250,0.64)]"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 transition-colors py-1 ${
                isActive ? 'text-[var(--accent)]' : 'hover:text-[#FAFAFA]'
              }`
            }
          >
            Home
          </NavLink>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="desktop-services-menu"
              className={`flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 ${
                isServiceActive || servicesOpen ? 'text-[var(--accent)]' : 'hover:text-[#FAFAFA]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-[var(--accent)]' : 'text-white/50'
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                id="desktop-services-menu"
                role="menu"
                className="absolute top-full left-0 mt-3 w-64 bg-[#121212]/95 backdrop-blur-xl border border-white/[0.08] rounded-[16px] shadow-2xl py-3 z-50"
              >
                <div className="px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                  By Trade
                </div>
                {tradeLinks.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-1.5 text-[13px] transition-colors ${
                        isActive
                          ? 'bg-white/[0.06] text-[var(--accent)] font-medium'
                          : 'text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA] hover:bg-white/[0.04]'
                      }`
                    }
                  >
                    {service.label}
                  </NavLink>
                ))}

                <div className="my-2 border-t border-white/[0.06]" />

                <div className="px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">
                  Core Services
                </div>
                {coreServiceLinks.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-1.5 text-[13px] transition-colors ${
                        isActive
                          ? 'bg-white/[0.06] text-[var(--accent)] font-medium'
                          : 'text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA] hover:bg-white/[0.04]'
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
            to="/our-work"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 transition-colors py-1 ${
                isActive ? 'text-[var(--accent)]' : 'hover:text-[#FAFAFA]'
              }`
            }
          >
            Our Work
          </NavLink>

          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 transition-colors py-1 ${
                isActive ? 'text-[var(--accent)]' : 'hover:text-[#FAFAFA]'
              }`
            }
          >
            Packages
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 transition-colors py-1 ${
                isActive ? 'text-[var(--accent)]' : 'hover:text-[#FAFAFA]'
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 transition-colors py-1 ${
                isActive ? 'text-[var(--accent)]' : 'hover:text-[#FAFAFA]'
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `whitespace-nowrap shrink-0 transition-colors py-1 ${
                isActive ? 'text-[var(--accent)]' : 'hover:text-[#FAFAFA]'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-[#0A0A0A] text-[13px] font-semibold rounded-[12px] hover:scale-[1.02] transition-transform duration-200 whitespace-nowrap shrink-0"
          >
            <span>Get free mockup</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#FAFAFA] hover:text-[var(--accent)] rounded-[12px] border border-white/[0.08] bg-white/[0.03] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 space-y-4 max-h-[82vh] overflow-y-auto">
          <div className="flex flex-col space-y-1 text-sm font-medium">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 border-b border-white/[0.06] ${
                  isActive ? 'text-[var(--accent)]' : 'text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA]'
                }`
              }
            >
              Home
            </NavLink>

            <div className="border-b border-white/[0.06]">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                className="w-full flex items-center justify-between py-3 text-left text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA] cursor-pointer"
              >
                <span className={isServiceActive ? 'text-[var(--accent)]' : ''}>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-[var(--accent)]' : 'text-white/50'
                  }`}
                  aria-hidden="true"
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-3 pb-3 space-y-1.5">
                  {allServiceLinks.map((service) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      onClick={() => {
                        setMobileServicesOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className={({ isActive }) =>
                        `block py-1.5 text-[13px] ${
                          isActive ? 'text-[var(--accent)]' : 'text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA]'
                        }`
                      }
                    >
                      {service.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: 'Our Work', path: '/our-work' },
              { label: 'Packages', path: '/packages' },
              { label: 'About', path: '/about' },
              { label: 'Blog', path: '/blog' },
              { label: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 border-b border-white/[0.06] ${
                    isActive ? 'text-[var(--accent)]' : 'text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[var(--accent)] text-[#0A0A0A] text-sm font-semibold rounded-[16px]"
            >
              <span>Get your free mockup</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
