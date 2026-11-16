import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MagneticWrap } from './MagneticButton';

interface NavbarProps {
  onOpenAuditModal?: () => void;
}

const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
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

  const handleAuditClick = () => {
    setMobileMenuOpen(false);
    if (onOpenAuditModal) {
      onOpenAuditModal();
    } else {
      navigate('/contact#website-check');
    }
  };

  const renderDesktopLink = (to: string, label: string) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group/nav transition-colors duration-200 cursor-pointer py-1 relative focus-visible:outline-2 focus-visible:outline-[#9E5249] ${
          isActive ? 'text-[#141210] font-semibold' : 'hover:text-[#141210]'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          {isActive ? (
            <motion.span
              layoutId="navbar-active-indicator"
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E5249]"
            />
          ) : (
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E5249]/50 scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left" />
          )}
        </>
      )}
    </NavLink>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#FAF6F0]/95 md:backdrop-blur-md border-b border-[#D9D0C3]/80 shadow-xs'
          : 'bg-[#FAF6F0]/95 md:bg-[#FAF6F0]/90 md:backdrop-blur-sm border-b border-[#D9D0C3]/40'
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
          {renderDesktopLink('/', 'Home')}

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="desktop-services-menu"
              className={`group/nav flex items-center gap-1.5 transition-colors duration-200 cursor-pointer py-1 relative focus-visible:outline-2 focus-visible:outline-[#9E5249] ${
                isServiceActive || servicesOpen
                  ? 'text-[#141210] font-semibold'
                  : 'hover:text-[#141210]'
              }`}
            >
              <span>Services</span>
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.24, ease: EDITORIAL_EASE }}
                className="inline-flex"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-colors duration-200 ${
                    servicesOpen ? 'text-[#9E5249]' : 'text-[#827C75]'
                  }`}
                  aria-hidden="true"
                />
              </motion.span>
              {isServiceActive ? (
                <motion.span
                  layoutId="navbar-active-indicator"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E5249]"
                />
              ) : (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E5249]/50 scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left" />
              )}
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  id="desktop-services-menu"
                  role="menu"
                  initial={{ opacity: 0, y: 8, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.985 }}
                  transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                  className="absolute top-full left-0 mt-3 w-64 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm shadow-xl py-3 z-50 origin-top"
                >
                  <div className="px-4 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#9E5249]">
                    By Trade
                  </div>
                  {tradeLinks.map((service, idx) => (
                    <motion.div
                      key={service.path}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.025, ease: EDITORIAL_EASE }}
                    >
                      <NavLink
                        to={service.path}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-1.5 text-[11px] tracking-wider uppercase transition-all duration-150 ${
                            isActive
                              ? 'bg-[#F5EDE2] text-[#9E5249] font-bold'
                              : 'text-[#59544E] hover:text-[#141210] hover:bg-[#F5EDE2]/70 hover:pl-5'
                          }`
                        }
                      >
                        {service.label}
                      </NavLink>
                    </motion.div>
                  ))}

                  <div className="my-2 border-t border-[#D9D0C3]/60" />

                  <div className="px-4 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-[#9E5249]">
                    Services
                  </div>
                  {coreServiceLinks.map((service, idx) => (
                    <motion.div
                      key={service.path}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: (tradeLinks.length + idx) * 0.025,
                        ease: EDITORIAL_EASE,
                      }}
                    >
                      <NavLink
                        to={service.path}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-1.5 text-[11px] tracking-wider uppercase transition-all duration-150 ${
                            isActive
                              ? 'bg-[#F5EDE2] text-[#9E5249] font-bold'
                              : 'text-[#59544E] hover:text-[#141210] hover:bg-[#F5EDE2]/70 hover:pl-5'
                          }`
                        }
                      >
                        {service.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {renderDesktopLink('/about', 'About')}
          {renderDesktopLink('/our-work', 'Our Work')}
          {renderDesktopLink('/packages', 'Packages')}
          {renderDesktopLink('/blog', 'Blog')}
          {renderDesktopLink('/contact', 'Contact')}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <MagneticWrap className="hidden sm:inline-block" strength={4}>
            <button
              onClick={handleAuditClick}
              className="btn-editorial hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#141210] text-white text-[11px] font-semibold tracking-[0.18em] uppercase rounded-sm hover:bg-[#34302D] shadow-sm cursor-pointer group focus-visible:outline-2 focus-visible:outline-[#9E5249]"
            >
              <span>Request a Website Check</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </MagneticWrap>

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
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
            className="lg:hidden bg-[#FAF6F0] border-b border-[#D9D0C3] overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-3 text-xs tracking-[0.2em] uppercase font-medium">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: 0.03, ease: EDITORIAL_EASE }}
                >
                  <NavLink
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-left py-2.5 border-b border-[#D9D0C3]/40 cursor-pointer ${
                        isActive
                          ? 'font-bold text-[#9E5249]'
                          : 'text-[#59544E] hover:text-[#141210]'
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </motion.div>

                {/* Mobile Services Accordion */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: 0.06, ease: EDITORIAL_EASE }}
                  className="border-b border-[#D9D0C3]/40"
                >
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-expanded={mobileServicesOpen}
                    className="w-full flex items-center justify-between py-2.5 text-left text-xs tracking-[0.2em] uppercase font-medium text-[#59544E] hover:text-[#141210] cursor-pointer"
                  >
                    <span className={isServiceActive ? 'text-[#9E5249] font-bold' : ''}>
                      Services
                    </span>
                    <motion.span
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                    >
                      <ChevronDown
                        className={`w-4 h-4 ${
                          mobileServicesOpen ? 'text-[#9E5249]' : 'text-[#827C75]'
                        }`}
                        aria-hidden="true"
                      />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 pb-2 space-y-3 border-l border-[#D9D0C3] my-1">
                          <div>
                            <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-[#9E5249] mb-1">
                              By Trade
                            </span>
                            <div className="space-y-1">
                              {tradeLinks.map((service) => (
                                <NavLink
                                  key={service.path}
                                  to={service.path}
                                  onClick={() => {
                                    setMobileServicesOpen(false);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={({ isActive }) =>
                                    `block py-1 text-[11px] tracking-wider uppercase ${
                                      isActive
                                        ? 'text-[#9E5249] font-bold'
                                        : 'text-[#59544E] hover:text-[#141210]'
                                    }`
                                  }
                                >
                                  {service.label}
                                </NavLink>
                              ))}
                            </div>
                          </div>

                          <div>
                            <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-[#9E5249] mb-1">
                              Services
                            </span>
                            <div className="space-y-1">
                              {coreServiceLinks.map((service) => (
                                <NavLink
                                  key={service.path}
                                  to={service.path}
                                  onClick={() => {
                                    setMobileServicesOpen(false);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={({ isActive }) =>
                                    `block py-1 text-[11px] tracking-wider uppercase ${
                                      isActive
                                        ? 'text-[#9E5249] font-bold'
                                        : 'text-[#59544E] hover:text-[#141210]'
                                    }`
                                  }
                                >
                                  {service.label}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {[
                  { to: '/about', label: 'About', delay: 0.09 },
                  { to: '/our-work', label: 'Our Work', delay: 0.12 },
                  { to: '/packages', label: 'Packages', delay: 0.15 },
                  { to: '/blog', label: 'Blog', delay: 0.18 },
                  { to: '/contact', label: 'Contact', delay: 0.21 },
                ].map((item) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: item.delay, ease: EDITORIAL_EASE }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block text-left py-2.5 border-b border-[#D9D0C3]/40 cursor-pointer ${
                          isActive
                            ? 'font-bold text-[#9E5249]'
                            : 'text-[#59544E] hover:text-[#141210]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="pt-2">
                <button
                  onClick={handleAuditClick}
                  className="btn-editorial block w-full py-3 bg-[#141210] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-sm text-center cursor-pointer"
                >
                  Request a Website Check
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
