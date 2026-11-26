import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MotionConfig, AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { PackagesPage } from './pages/PackagesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ContractorPage } from './pages/ContractorPage';
import { HomeServicesPage } from './pages/HomeServicesPage';
import { JunkRemovalPage } from './pages/JunkRemovalPage';
import { JunkRemovalSeoPage } from './pages/JunkRemovalSeoPage';
import { WebsiteRedesignPage } from './pages/WebsiteRedesignPage';
import { ExcavationPage } from './pages/ExcavationPage';
import { ElectricalPage } from './pages/ElectricalPage';
import { GeneralContractorPage } from './pages/GeneralContractorPage';
import { MobileDetailingPage } from './pages/MobileDetailingPage';
import { RoofingPage } from './pages/RoofingPage';
import { FenceInstallationPage } from './pages/FenceInstallationPage';
import { LandscapingPage } from './pages/LandscapingPage';
import { PlumbingHvacPage } from './pages/PlumbingHvacPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { SepticContractorPage } from './pages/SepticContractorPage';
import { LandClearingPage } from './pages/LandClearingPage';
import { FenceCompanyPage } from './pages/FenceCompanyPage';
import { BlogPage } from './pages/BlogPage';
import { PostPage } from './pages/PostPage';
import { CaseStudy, ServicePackage, AuditReportData } from './types';
import { SERVICE_PACKAGES } from './data/packages';
import { ArrowUp } from 'lucide-react';
import { useEditorialScrollMotion } from './hooks/useEditorialScrollMotion';

import { CaseStudyModal } from './components/CaseStudyModal';
import { AuditReportModal } from './components/AuditReportModal';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  useEditorialScrollMotion(location.pathname);

  // Modals state
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [auditReport, setAuditReport] = useState<AuditReportData | null>(null);
  const [bookingPackage, setBookingPackage] = useState<ServicePackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleSelectPackage = (pkg: ServicePackage) => {
    setBookingPackage(pkg);
    setIsBookingModalOpen(true);
  };

  const handleBookSimilar = (_study: CaseStudy) => {
    const pro = SERVICE_PACKAGES.find((p) => p.id === 'professional') || SERVICE_PACKAGES[1];
    setBookingPackage(pro);
    setIsBookingModalOpen(true);
  };

  const handleAuditGenerated = (report: AuditReportData) => {
    setAuditReport(report);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1A1715] flex flex-col font-sans selection:bg-[#EAE0D2] selection:text-[#141210]">
      {/* Accessible Skip Link (Visible only when focused) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#141210] focus:text-[#FAF6F0] focus:text-xs focus:font-semibold focus:uppercase focus:tracking-wider focus:rounded-sm focus:shadow-2xl focus:outline-2 focus:outline-[#9E5249]"
      >
        Skip to main content
      </a>

      {/* FIXED HEADER NAVIGATION */}
      <Navbar
        onOpenAuditModal={() => {
          const checkEl = document.getElementById('website-check');
          if (checkEl) {
            checkEl.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/contact#website-check');
          }
        }}
      />

      {/* MULTI-PAGE APPLICATION ROUTES (Transform-free wrapper preserves ScrollTrigger pin accuracy) */}
      <main id="main-content" tabIndex={-1} className="w-full flex-grow focus:outline-none">
        <Routes>
          <Route
            path="/"
            element={<HomePage onAuditGenerated={handleAuditGenerated} />}
          />
          <Route
            path="/our-work"
            element={
              <WorkPage
                onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/packages"
            element={<PackagesPage onSelectPackage={handleSelectPackage} />}
          />
          <Route
            path="/contact"
            element={<ContactPage onAuditGenerated={handleAuditGenerated} />}
          />
          <Route path="/contractor-website-design" element={<ContractorPage />} />
          <Route path="/home-services-website-design" element={<HomeServicesPage />} />
          <Route path="/junk-removal-website-design" element={<JunkRemovalPage />} />
          <Route path="/junk-removal-seo" element={<JunkRemovalSeoPage />} />
          <Route path="/website-redesign" element={<WebsiteRedesignPage />} />
          <Route path="/excavation-company-website-design" element={<ExcavationPage />} />
          <Route
            path="/excavation-website-design"
            element={<Navigate to="/excavation-company-website-design" replace />}
          />
          <Route path="/electrical-contractor-website-design" element={<ElectricalPage />} />
          <Route path="/general-contractor-website-design" element={<GeneralContractorPage />} />
          <Route path="/mobile-detailing-website-design" element={<MobileDetailingPage />} />
          <Route path="/roofing-website-design" element={<RoofingPage />} />
          <Route path="/fence-installation-website-design" element={<FenceInstallationPage />} />
          <Route path="/landscaping-website-design" element={<LandscapingPage />} />
          <Route path="/plumbing-hvac-website-design" element={<PlumbingHvacPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/septic-contractor-website-design" element={<SepticContractorPage />} />
          <Route path="/land-clearing-website-design" element={<LandClearingPage />} />
          <Route path="/fence-company-website-design" element={<FenceCompanyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* ARCHIVAL FOOTER */}
      <Footer
        onOpenPrivacyModal={() => setLegalModal('privacy')}
        onOpenTermsModal={() => setLegalModal('terms')}
      />

      {/* Minimal Floating Scroll-to-Top Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="p-3 bg-[#FAF6F0] text-[#59544E] hover:text-[#141210] border border-[#D9D0C3] rounded-full shadow-md hover:shadow-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E5249]"
          aria-label="Scroll to Top of Page"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Interactive Modals */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <CaseStudyModal
            caseStudy={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
            onBookSimilar={handleBookSimilar}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {auditReport && (
          <AuditReportModal
            report={auditReport}
            onClose={() => setAuditReport(null)}
            onBookCure={() => {
              setAuditReport(null);
              setBookingPackage(SERVICE_PACKAGES[1]);
              setIsBookingModalOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBookingModalOpen && (
          <BookingModal
            selectedPackage={bookingPackage}
            onClose={() => setIsBookingModalOpen(false)}
            onSuccess={(msg) => showToast(msg)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {legalModal && (
          <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
        )}
      </AnimatePresence>

      {/* Toast Feedback Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#141210] text-white px-6 py-3 rounded-sm shadow-2xl border border-[#B89255]/40 text-xs tracking-wider flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#B89255]" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <AppShell />
      </Router>
    </MotionConfig>
  );
}
